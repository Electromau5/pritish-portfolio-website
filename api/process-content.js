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

  const systemPrompt = `You are a case study content structurer for a UX design portfolio. Transform the provided document content into a structured case study JSON AND generate a user journey map based on the content.

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
  "sections": [
    {
      "title": "Section Name",
      "content": [
        { "type": "hero", "data": { "title": "...", "description": "..." } },
        { "type": "stats", "data": { "items": [{ "value": "85%", "label": "..." }] } },
        { "type": "grid", "data": { "title": "...", "columns": 2, "items": [{ "title": "...", "description": "..." }] } },
        { "type": "text", "data": { "title": "...", "paragraphs": ["...", "..."] } },
        { "type": "quote", "data": { "text": "...", "author": "..." } },
        { "type": "journey", "data": { "ref": "journeyMap" } }
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
- Build a realistic "journeyMap" with 4-6 stages covering end-to-end flow and 3-6 steps per stage. For each step, include action, thoughts, feelings, emotion (1-5 scale), painPoints, opportunities, touchpoints.
- Include a "journey" content block in at least one section so UIs can render the journey map easily. Reference the top-level journeyMap using { "ref": "journeyMap" }.
- Keep content concise and impactful
- Return ONLY valid JSON, no markdown formatting`;

  // Cap input size to help keep latency under Vercel’s 60s limit
  const trimmedText = typeof text === 'string' && text.length > 15000 ? text.slice(0, 15000) : text;

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
        // Faster model and fewer tokens to reduce latency
        model: 'claude-3-haiku-20240307',
        max_tokens: 1200,
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

