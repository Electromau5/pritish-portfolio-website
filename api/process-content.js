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

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: `Please structure this case study content into the JSON format:\n\n${text.substring(0, 100000)}` // Limit to 100k chars
          }
        ]
      })
    });

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
    const content = data.content[0].text;

    // Extract JSON from response (handle markdown code blocks if present)
    let jsonString = content.trim();
    if (jsonString.startsWith('```')) {
      jsonString = jsonString.replace(/^```(?:json)?\n/, '').replace(/\n```$/, '');
    }

    const structuredData = JSON.parse(jsonString);

    return res.status(200).json({ success: true, data: structuredData });
  } catch (error) {
    console.error('Error processing content:', error);
    return res.status(500).json({ 
      error: 'Failed to process content',
      details: error.message
    });
  }
}

