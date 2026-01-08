// Service for calling Claude API
// In development, this calls the API directly (requires ANTHROPIC_API_KEY in .env)
// In production, this should call the Vercel serverless function

const systemPrompt = `You are a case study content structurer for a UX design portfolio. Transform the provided document content into a structured case study JSON.

Output this exact JSON structure:
{
  "title": "Project title extracted from content",
  "subtitle": "One-line summary of the project",
  "sections": [
    {
      "title": "Section Name",
      "content": [
        { "type": "hero", "data": { "title": "...", "description": "..." } },
        { "type": "stats", "data": { "items": [{ "value": "85%", "label": "..." }] } },
        { "type": "grid", "data": { "title": "...", "columns": 2, "items": [{ "title": "...", "description": "..." }] } },
        { "type": "text", "data": { "title": "...", "paragraphs": ["...", "..."] } },
        { "type": "quote", "data": { "text": "...", "author": "..." } }
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
- Keep content concise and impactful
- Return ONLY valid JSON, no markdown formatting`;

export const processContentWithClaude = async (text) => {
  // Always use the serverless function endpoint
  // For local development, run: vercel dev
  // For production, Vercel handles this automatically

  try {
    const response = await fetch('/api/process-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      if (response.status === 504) {
        // Custom, clearer timeout message for user
        throw new Error('Processing timed out. Your document may be large or the AI was slow. Please try a shorter PDF or try again shortly.');
      }
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorData.details || JSON.stringify(errorData);
      } catch (e) {
        try {
          const errorText = await response.text();
          errorMessage = errorText || errorMessage;
        } catch (e2) {
          // Keep default errorMessage
        }
      }
      throw new Error(`API error: ${errorMessage}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error calling API:', error);

    // Provide helpful error message for local development
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      throw new Error('Cannot connect to API. For local development, run "vercel dev" instead of "npm run dev" to enable serverless functions.');
    }

    throw new Error(error.message || 'Failed to process content.');
  }
};

