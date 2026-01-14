// Vercel serverless function for chat-based section generation
// Handles natural language requests to add sections to case studies

// Carex Figma design configuration (inline for serverless compatibility)
const carexDesignTokens = {
  colors: {
    dark: '#282D46',
    primary: '#188AEC',
    extraLight: '#F6FAFE',
    light: '#CBD4DC',
    lightSecondary: '#EFEFEF',
    extraLightSecondary: '#EDF6FE',
    white: '#FFFFFF',
    darkSecondary: '#143D61',
    sunglow: '#FFD52F',
    cons: '#F57878',
    screenLabel: '#6A7D8E'
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    title: { fontSize: '72px', fontWeight: 600 },
    heading: { fontSize: '48px', fontWeight: 600 },
    subheading: { fontSize: '32px', fontWeight: 600 },
    body: { fontSize: '26px', fontWeight: 500, lineHeight: 1.826 },
    bodySmall: { fontSize: '22px', fontWeight: 500 },
    caption: { fontSize: '18px', fontWeight: 400 }
  }
};

const carexSectionTypes = [
  { id: 'hero', name: 'Hero', description: 'Hero section with title, tag, and phone mockups' },
  { id: 'problemStatement', name: 'Problem Statement', description: 'Centered problem statement with decorative border' },
  { id: 'objectivesGoals', name: 'Objectives & Goals', description: 'Two-column layout with objectives and goals' },
  { id: 'ourProcess', name: 'Our Process', description: 'Double Diamond process with 4 steps (Discover, Define, Ideate, Design)' },
  { id: 'businessChallenges', name: 'Business Challenges', description: 'List of challenges with arrow icons' },
  { id: 'productUsers', name: 'Product Users', description: 'Target users section with floating avatars' },
  { id: 'quantitativeResearch', name: 'Quantitative Research', description: 'Research metrics with scattered percentage layout' },
  { id: 'userNeeds', name: 'User Needs', description: 'Sequential list with arrow indicators' },
  { id: 'featuresFunctionalities', name: 'Features & Functionalities', description: 'Icon grid showing key features' },
  { id: 'productUserChallenges', name: 'Product User Challenges', description: 'List of user challenges' },
  { id: 'competitorAnalysis', name: 'Competitor Analysis', description: 'Two-column competitor comparison cards' },
  { id: 'uniqueFeatures', name: 'Unique Features', description: 'Checkmark list of differentiating features' },
  { id: 'userPersona', name: 'User Persona', description: 'Detailed persona with profile, Maslow pyramid, and quote' },
  { id: 'taskMapping', name: 'Task Mapping', description: 'Table mapping tasks through steps with challenges and emotions' },
  { id: 'eisenhowerMatrix', name: 'Eisenhower Matrix', description: '2x2 prioritization matrix (Important/Urgent)' },
  { id: 'fiveWhyAnalysis', name: '5 Why Analysis', description: 'Flowchart showing root cause analysis' },
  { id: 'rootCauseAnalysis', name: 'Root Cause Analysis', description: 'Fishbone diagram for RCA' },
  { id: 'taskflows', name: 'Taskflows', description: 'User flow scenarios with connected steps' },
  { id: 'sketches', name: 'Sketches', description: 'Wireframe sketches grid' },
  { id: 'majorScreens', name: 'Major Screens', description: 'Annotated screen designs with callouts' },
  { id: 'screens', name: 'Screens', description: 'Screen gallery with labeled categories' },
  { id: 'thankYou', name: 'Thank You', description: 'Closing section with 3D decorations' }
];

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
  const isCarexTemplate = caseStudyContext?.template === 'carex';

  // Trim document content to avoid timeout (max 8000 chars)
  const trimmedDocContent = hasDocument && documentContent.length > 8000
    ? documentContent.slice(0, 8000) + '\n\n[Content truncated for processing...]'
    : documentContent;

  // Build Carex-specific section types string
  const carexSectionTypesStr = carexSectionTypes.map(s => `- ${s.id}: ${s.name} - ${s.description}`).join('\n');

  // Carex design system instructions
  const carexDesignInstructions = isCarexTemplate ? `
=== CAREX TEMPLATE DESIGN SYSTEM ===
You are generating sections for the CAREX template which follows a specific Figma design system.

DESIGN TOKENS:
- Colors: Primary (#188AEC), Dark (#282D46), Extra Light (#F6FAFE), Light Border (#CBD4DC), Error/Cons (#F57878)
- Typography: Poppins font family, Headings 48px SemiBold, Body 26px Medium with 1.826 line-height
- Layout: Max width 1512px, content padding 172px, section gap 100px

CAREX-SPECIFIC SECTION TYPES (use these instead of generic types):
${carexSectionTypesStr}

IMPORTANT CAREX DESIGN RULES:
1. Match the exact section type from the Figma designs when possible
2. Use the Carex color palette in your generated content suggestions
3. Follow the specific data structures for each Carex section type
4. When user asks for "competitor analysis", use competitorAnalysis type with two competitor cards
5. When user asks for "research" or "metrics", use quantitativeResearch with percentage observations
6. When user asks for "persona", use userPersona with Maslow pyramid structure
7. When user asks for "prioritization" or "matrix", use eisenhowerMatrix with 4 quadrants
8. When user asks for "why analysis" or "root cause", use fiveWhyAnalysis or rootCauseAnalysis
9. Extract REAL data from attached documents to populate sections

=== END CAREX DESIGN SYSTEM ===
` : '';

  const systemPrompt = `You are an AI assistant helping users add sections to their UX case study portfolio. You help parse natural language requests and generate appropriate content.

Current case study context:
- Title: ${caseStudyContext?.title || 'Untitled'}
- Subtitle: ${caseStudyContext?.subtitle || ''}
- Template: ${caseStudyContext?.template || 'default'}
- Existing sections: ${sectionNames}
${carexDesignInstructions}${hasDocument ? `
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
${isCarexTemplate ? `
=== CAREX-SPECIFIC DATA FORMATS ===
For Carex template, use these specialized formats:

competitorAnalysis:
{
  "title": "Competitor Analysis",
  "competitors": [
    { "name": "Competitor 1", "description": "Brief overview", "features": ["Feature 1", "Feature 2", "Feature 3"] },
    { "name": "Competitor 2", "description": "Brief overview", "features": ["Feature 1", "Feature 2", "Feature 3"] }
  ]
}

quantitativeResearch:
{
  "title": "Quantitative Research",
  "description": "Research methodology explanation",
  "observations": [
    { "percentage": "80%", "description": "Key finding 1" },
    { "percentage": "65%", "description": "Key finding 2" },
    { "percentage": "45%", "description": "Key finding 3" }
  ]
}

userPersona:
{
  "title": "User Persona",
  "persona": {
    "name": "Person Name",
    "role": "Job Title",
    "age": "28",
    "location": "City, Country",
    "education": "Degree",
    "status": "Employment status",
    "description": "Background description",
    "dayInLife": ["Morning activity", "Work activity", "Evening activity"],
    "painPoints": ["Pain point 1", "Pain point 2", "Pain point 3"],
    "maslowLevel": "Esteem",
    "quote": "A representative quote from this persona"
  }
}

eisenhowerMatrix:
{
  "title": "Prioritization Matrix",
  "quadrants": {
    "doFirst": ["Important & Urgent task 1", "Important & Urgent task 2"],
    "schedule": ["Important & Not Urgent task 1", "Important & Not Urgent task 2"],
    "delegate": ["Not Important & Urgent task 1"],
    "eliminate": ["Not Important & Not Urgent task 1"]
  }
}

fiveWhyAnalysis:
{
  "title": "5 Why Analysis",
  "problems": [
    {
      "statement": "Initial problem",
      "whys": ["Why 1 answer", "Why 2 answer", "Why 3 answer", "Why 4 answer"],
      "rootCause": "The root cause"
    }
  ]
}

businessChallenges:
{
  "title": "Business Challenges",
  "challenges": ["Challenge 1 description", "Challenge 2 description", "Challenge 3 description"]
}

userNeeds:
{
  "title": "User Needs",
  "needs": ["Need 1 description", "Need 2 description", "Need 3 description"]
}

uniqueFeatures:
{
  "title": "Unique Features",
  "features": ["Feature 1 that differentiates", "Feature 2 that differentiates", "Feature 3 that differentiates"]
}

problemStatement:
{
  "title": "Problem Statement",
  "statement": "The core problem description in 1-2 sentences"
}

objectivesGoals:
{
  "title": "Objectives & Goals",
  "objectives": ["Objective 1", "Objective 2"],
  "goals": ["Goal 1", "Goal 2"]
}
=== END CAREX-SPECIFIC FORMATS ===
` : ''}
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
