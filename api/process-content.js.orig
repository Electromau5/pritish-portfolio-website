// Vercel serverless function for processing content with Claude AI
// This file should be deployed to Vercel's /api directory

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text content is required' });
  }

  // Get API key from environment variable
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY not found in environment variables');
    return res.status(500).json({
      error: 'Claude API key not configured. Add ANTHROPIC_API_KEY to your .env file.'
    });
  }

  // Log that we have a key (but not the key itself for security)
  console.log('API key found, length:', apiKey.length);

  const systemPrompt = `You are a case study content structurer for a UX design portfolio. Transform the provided document content into a structured case study JSON AND generate a user journey map AND a user flow diagram based on the content.

Output this exact JSON structure:
{
  "title": "Project title extracted from content",
  "subtitle": "One-line summary of the project",
  "journeyMap": {
    "title": "User Journey",
    "personas": [
      { "name": "Primary Persona", "role": "e.g., Caseworker", "goals": ["...","..."] }
    ],
    "stages": [
      {
        "name": "Discover",
        "steps": [
          {
            "action": "What the user does",
            "thoughts": "What the user thinks",
            "feelings": "One or two words e.g., 'confused', 'confident'",
            "emotion": 1,
            "painPoints": ["..."],
            "opportunities": ["..."],
            "touchpoints": ["web", "email"]
          }
        ]
      }
    ]
  },
  "userFlow": {
    "title": "User Flow",
    "description": "Brief description of what this flow represents",
    "nodes": [
      { "id": "1", "type": "start", "label": "Entry Point" },
      { "id": "2", "type": "action", "label": "User Action", "description": "Optional description" },
      { "id": "3", "type": "decision", "label": "Decision Point?" },
      { "id": "4", "type": "action", "label": "Another Action" },
      { "id": "5", "type": "end", "label": "Goal Achieved" }
    ],
    "connections": [
      { "from": "1", "to": "2" },
      { "from": "2", "to": "3" },
      { "from": "3", "to": "4", "label": "Yes" },
      { "from": "3", "to": "5", "label": "No" },
      { "from": "4", "to": "5" }
    ]
  },
  "sections": [
    {
      "title": "Section Name",
      "content": [
        { "type": "hero", "data": { "title": "...", "description": "..." } },
        { "type": "stats", "data": { "items": [{ "value": "85%", "label": "..." }] } },
        { "type": "grid", "data": { "title": "...", "columns": 2, "items": [{ "title": "...", "description": "..." }] } },
        { "type": "text", "data": { "title": "...", "paragraphs": ["...", "..."] } },
<<<<<<< HEAD
        { "type": "quote", "data": { "text": "...", "author": "..." } },
        { "type": "journey", "data": { "ref": "journeyMap" } },
        { "type": "userflow", "data": { "ref": "userFlow" } }
=======
        { "type": "quote", "data": { "text": "...", "author": "..." } }
>>>>>>> cc071c0 (Added customer journey map)
      ]
    }
  ]
}

Guidelines:
- Create 4-6 sections (Overview, Research, Design, Implementation, Results, etc.)
- Use "hero" for section introductions
- Extract metrics/numbers into "stats" blocks (max 4 items)
- Use "grid" for lists of features, methods, or comparisons
- Use "text" for detailed explanations
- Use "quote" for testimonials or key insights
- Build a concise "journeyMap" with 3-4 stages and 2-3 steps per stage. For each step, include action, thoughts, feelings, emotion (1-5 scale), painPoints, opportunities, touchpoints.
<<<<<<< HEAD
- Include a "journey" content block in at least one section so UIs can render the journey map easily. Reference the top-level journeyMap using { "ref": "journeyMap" }.
=======
>>>>>>> cc071c0 (Added customer journey map)
- Build a "userFlow" that represents the primary user flow through the application/product:
  - Node types: "start" (entry point, green circle), "action" (user action, rectangle), "decision" (yes/no branch, diamond), "end" (goal/exit, red circle)
  - Create 5-8 nodes that represent the key steps in the user's journey through the product
  - Connect nodes logically with "connections" array. For decisions, include "label" on connections ("Yes"/"No")
  - The flow should tell a story of how a user accomplishes their goal
<<<<<<< HEAD
- Include a "userflow" content block in the Design or Implementation section to render the flow diagram. Reference the top-level userFlow using { "ref": "userFlow" }.
=======
- DO NOT include "journey" or "userflow" content blocks in sections. These will be stored as separate artifacts that users can toggle on/off.
>>>>>>> cc071c0 (Added customer journey map)
- Keep content concise and impactful
- Return ONLY valid JSON, no markdown formatting`;

  // Cap input size to help keep latency under Vercel's 60s limit
  // Reduced from 15000 to 10000 to avoid timeouts
  const trimmedText = typeof text === 'string' && text.length > 10000 ? text.slice(0, 10000) : text;

  try {
    // Abort after 50s to avoid platform 504 and return a controlled timeout
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
        // Use Haiku for speed, but need enough tokens for full JSON response
        model: 'claude-3-5-haiku-latest',
        max_tokens: 4096,
        temperature: 0.2,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: `Please structure this case study content into the JSON format:\n\n${trimmedText}`
          }
        ]
      }),
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Claude API error status:', response.status);
      console.error('Claude API error details:', errorData);

      // Parse the error to give more helpful messages
      let parsedError;
      try {
        parsedError = JSON.parse(errorData);
      } catch {
        parsedError = { message: errorData };
      }

      const errorMessage = parsedError.error?.message || parsedError.message || errorData;

      return res.status(response.status).json({
        error: `Claude API error: ${errorMessage}`,
        details: errorData
      });
    }

    const data = await response.json();
    const content = data?.content?.[0]?.text ?? '';

    // Extract JSON from response (handle markdown code blocks if present)
    let jsonString = (content || '').trim();
    if (jsonString.startsWith('```')) {
      jsonString = jsonString.replace(/^```(?:json)?\n/, '').replace(/\n```$/, '');
    }

    let structuredData;
    try {
      structuredData = JSON.parse(jsonString);
    } catch (e) {
      // Fallback: attempt to extract JSON substring
      const s = jsonString.indexOf('{');
      const eIdx = jsonString.lastIndexOf('}');
      if (s !== -1 && eIdx !== -1 && eIdx > s) {
        structuredData = JSON.parse(jsonString.slice(s, eIdx + 1));
      } else {
        throw e;
      }
    }

    return res.status(200).json({ success: true, data: structuredData });
  } catch (error) {
    if (error?.name === 'AbortError') {
      return res.status(504).json({
        error: 'Processing timed out. Try again with a shorter document or retry shortly.'
      });
    }
    console.error('Error processing content:', error);
    return res.status(500).json({ 
      error: 'Failed to process content',
      details: error.message
    });
  }
}

