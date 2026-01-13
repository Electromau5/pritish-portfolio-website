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

// Generate content for a specific section type
export const generateSectionContent = async (sectionType, caseStudyContext) => {
  const prompts = {
    projectOverview: `Based on the following case study context, generate a comprehensive Project Overview section.

Context:
Title: ${caseStudyContext.title}
Subtitle: ${caseStudyContext.subtitle}
Existing sections: ${caseStudyContext.sections?.map(s => s.title).join(', ')}

Return ONLY valid JSON in this exact format:
{
  "title": "A compelling title for the project overview",
  "paragraphs": [
    "First paragraph introducing the project...",
    "Second paragraph with more context...",
    "Third paragraph with objectives..."
  ]
}`,

    problemSolution: `Based on the following case study context, generate a Problem & Solution section with clear problem statement and solution description.

Context:
Title: ${caseStudyContext.title}
Subtitle: ${caseStudyContext.subtitle}
Existing sections: ${caseStudyContext.sections?.map(s => s.title).join(', ')}

Return ONLY valid JSON in this exact format:
{
  "problemTitle": "Clear problem title",
  "problemDescription": [
    "First paragraph describing the problem...",
    "Second paragraph with impact..."
  ],
  "solutionTitle": "Solution approach title",
  "solutionDescription": [
    "First paragraph describing the solution...",
    "Second paragraph with implementation details..."
  ]
}`,

    teamInfo: `Based on the following case study context, generate team member information. Include realistic UX roles.

Context:
Title: ${caseStudyContext.title}
Subtitle: ${caseStudyContext.subtitle}

Return ONLY valid JSON in this exact format:
{
  "title": "Team Information",
  "members": [
    { "name": "Team Member Name", "role": "UX Designer" },
    { "name": "Team Member Name", "role": "Product Manager" },
    { "name": "Team Member Name", "role": "Engineer" }
  ]
}`,

    successMetrics: `Based on the following case study context, generate 4 success metrics with realistic numbers and labels.

Context:
Title: ${caseStudyContext.title}
Subtitle: ${caseStudyContext.subtitle}

Return ONLY valid JSON in this exact format:
{
  "items": [
    { "value": "85%", "label": "User Satisfaction" },
    { "value": "2.5x", "label": "Engagement Increase" },
    { "value": "40%", "label": "Task Completion Time Reduced" },
    { "value": "95%", "label": "Positive Feedback" }
  ]
}`,

    userResearch: `Based on the following case study context, generate a User Research section with research findings.

Context:
Title: ${caseStudyContext.title}
Subtitle: ${caseStudyContext.subtitle}
Existing sections: ${caseStudyContext.sections?.map(s => s.title).join(', ')}

Return ONLY valid JSON in this exact format:
{
  "title": "User Research",
  "paragraphs": [
    "First paragraph about research methodology...",
    "Second paragraph about research approach..."
  ],
  "findings": [
    "Key finding 1 from user research",
    "Key finding 2 from user research",
    "Key finding 3 from user research",
    "Key finding 4 from user research"
  ]
}`,

    conclusion: `Based on the following case study context, generate a Conclusion section with key takeaways.

Context:
Title: ${caseStudyContext.title}
Subtitle: ${caseStudyContext.subtitle}
Existing sections: ${caseStudyContext.sections?.map(s => s.title).join(', ')}

Return ONLY valid JSON in this exact format:
{
  "title": "Conclusion",
  "paragraphs": [
    "First paragraph summarizing the project outcomes...",
    "Second paragraph about impact and learnings..."
  ],
  "takeaways": [
    "Key takeaway 1 from the project",
    "Key takeaway 2 from the project",
    "Key takeaway 3 from the project"
  ]
}`
  };

  const prompt = prompts[sectionType];
  if (!prompt) {
    throw new Error(`Unknown section type: ${sectionType}`);
  }

  try {
    const response = await fetch('/api/process-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: prompt,
        customSystemPrompt: `You are a UX case study content generator. Generate realistic, professional content based on the context provided. Return ONLY valid JSON with no markdown formatting or code blocks.`
      }),
    });

    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorData.details || JSON.stringify(errorData);
      } catch (e) {
        // Keep default errorMessage
      }
      throw new Error(`API error: ${errorMessage}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error generating section content:', error);
    throw new Error(error.message || 'Failed to generate section content.');
  }
};

