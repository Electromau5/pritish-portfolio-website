// Vercel serverless function for chat-based section generation
// Handles natural language requests to add sections to case studies

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userMessage, caseStudyContext, existingSections, conversationHistory, documentContent } = req.body;

  if (!userMessage) {
    return res.status(400).json({ error: 'User message is required' });
  }

  // Get API key from environment variable
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY not found in environment variables');
    return res.status(500).json({
      error: 'Claude API key not configured. Add ANTHROPIC_API_KEY to your .env file.'
    });
  }

  const sectionNames = existingSections?.map(s => s.title).join(', ') || 'None';
  const hasDocument = documentContent && documentContent.length > 0;

  // Trim document content to avoid timeout (max 8000 chars)
  const trimmedDocContent = hasDocument && documentContent.length > 8000
    ? documentContent.slice(0, 8000) + '\n\n[Content truncated for processing...]'
    : documentContent;

  const systemPrompt = `You are an AI assistant helping users add sections to their UX case study portfolio. You help parse natural language requests and generate appropriate content.

Current case study context:
- Title: ${caseStudyContext?.title || 'Untitled'}
- Subtitle: ${caseStudyContext?.subtitle || ''}
- Template: ${caseStudyContext?.template || 'default'}
- Existing sections: ${sectionNames}
${hasDocument ? `
IMPORTANT: The user has attached a document. Use the content from this document to generate accurate, relevant sections. Extract real information from the document rather than making up generic content.

=== ATTACHED DOCUMENT CONTENT ===
${trimmedDocContent}
=== END DOCUMENT ===
` : ''}
Available section types you can generate:
- projectOverview: Comprehensive project introduction with title and paragraphs
- problemSolution: Problem statement and solution description
- teamInfo: Team member information with roles
- successMetrics: Key performance metrics (stats with values and labels)
- userResearch: Research methodology and findings
- conclusion: Summary and key takeaways
- text: General text section with title and paragraphs

When the user asks to ADD a section:
1. Identify what type of section they want
2. Determine where they want it (look for phrases like "above X", "below Y", "after Z", "before W", "at the beginning", "at the end")
3. Generate realistic, professional UX case study content for that section
${hasDocument ? '4. USE THE ATTACHED DOCUMENT CONTENT to extract real project details, metrics, findings, etc.' : ''}

When the user asks to DELETE/REMOVE a section:
1. Identify which section they want to delete by matching the section name
2. Return a delete_section action with the section title to delete

IMPORTANT: Return ONLY valid JSON in one of these formats:

For ADDING a section:
{
  "action": "add_section",
  "sectionType": "projectOverview",
  "insertionPoint": {
    "position": "before",
    "referenceSection": "Problem Statement"
  },
  "generatedSection": {
    "title": "Project Overview",
    "content": [{
      "type": "projectOverview",
      "data": {
        "title": "Project Overview",
        "paragraphs": ["First paragraph...", "Second paragraph..."]
      }
    }]
  },
  "message": "I've created a Project Overview section based on your document. Would you like me to add it?"
}

For DELETING a section:
{
  "action": "delete_section",
  "sectionTitle": "Problem Statement",
  "message": "I'll remove the Problem Statement section. Are you sure?"
}

For different section types, use these data formats:

projectOverview:
{ "title": "string", "paragraphs": ["string", "string", "string"] }

problemSolution:
{ "problemTitle": "string", "problemDescription": ["string"], "solutionTitle": "string", "solutionDescription": ["string"] }

teamInfo:
{ "title": "Team", "members": [{ "name": "string", "role": "string" }] }

successMetrics (use type "stats"):
{ "items": [{ "value": "85%", "label": "Metric Name" }] }

userResearch:
{ "title": "string", "paragraphs": ["string"], "findings": ["string", "string"] }

conclusion:
{ "title": "string", "paragraphs": ["string"], "takeaways": ["string", "string"] }

text:
{ "title": "string", "paragraphs": ["string", "string"] }

If the request is unclear, return:
{
  "action": "clarify",
  "message": "I'd be happy to help! Could you clarify [specific question]?"
}

If there's an error, return:
{
  "action": "error",
  "message": "Sorry, I couldn't process that request. [reason]"
}`;

  // Build conversation messages
  const messages = [];

  // Add recent conversation history (last 5 messages for context)
  if (conversationHistory && Array.isArray(conversationHistory)) {
    const recentHistory = conversationHistory.slice(-5);
    for (const msg of recentHistory) {
      if (msg.role === 'user' || msg.role === 'assistant') {
        messages.push({
          role: msg.role,
          content: msg.content
        });
      }
    }
  }

  // Add current user message
  messages.push({
    role: 'user',
    content: userMessage
  });

  try {
    // Abort after 50s to avoid platform 504
    const controller = new AbortController();
    const timeout = setTimeout(() => {
      try { controller.abort(); } catch {}
    }, 50000);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-latest',
        max_tokens: 2048,
        temperature: 0.3,
        system: systemPrompt,
        messages: messages
      }),
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Claude API error status:', response.status);
      console.error('Claude API error details:', errorData);

      return res.status(response.status).json({
        error: `Claude API error`,
        details: errorData
      });
    }

    const data = await response.json();
    const content = data?.content?.[0]?.text ?? '';

    // Extract JSON from response
    let jsonString = (content || '').trim();
    if (jsonString.startsWith('```')) {
      jsonString = jsonString.replace(/^```(?:json)?\n/, '').replace(/\n```$/, '');
    }

    let structuredData;
    try {
      structuredData = JSON.parse(jsonString);
    } catch (e) {
      // Fallback: attempt to extract JSON substring
      const start = jsonString.indexOf('{');
      const end = jsonString.lastIndexOf('}');
      if (start !== -1 && end !== -1 && end > start) {
        structuredData = JSON.parse(jsonString.slice(start, end + 1));
      } else {
        // Return as clarification if we can't parse
        return res.status(200).json({
          action: 'clarify',
          message: content || 'I had trouble understanding that. Could you rephrase your request?'
        });
      }
    }

    return res.status(200).json(structuredData);
  } catch (error) {
    if (error?.name === 'AbortError') {
      return res.status(504).json({
        action: 'error',
        message: 'Request timed out. Please try again.'
      });
    }
    console.error('Error processing chat:', error);
    return res.status(500).json({
      action: 'error',
      message: 'Failed to process your request. Please try again.'
    });
  }
}
