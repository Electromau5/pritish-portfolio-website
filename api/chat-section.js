// Vercel serverless function for chat-based section generation
// Updated for 2025 Case Study IA structure
// Handles natural language requests to add sections to case studies across all 6 templates

// 2025 Case Study IA - Categories and Section Types
const caseStudyIA2025 = {
  hook: {
    name: 'Hook',
    sections: ['intriguing-title', 'project-overview', 'problem-statement', 'business-impact-preview', 'teaser-visual']
  },
  strategicContext: {
    name: 'Strategic Context',
    isNew: true,
    sections: ['design-vision-strategy', 'cross-functional-alignment', 'technical-constraints', 'ai-ml-considerations']
  },
  discoveryResearch: {
    name: 'Discovery & Research',
    sections: ['our-process', 'product-users-personas', 'user-needs', 'user-business-challenges', 'quantitative-research', 'competitor-analysis', 'key-insights']
  },
  problemAnalysis: {
    name: 'Problem Analysis',
    sections: ['five-why-analysis', 'root-cause-analysis', 'objectives-goals']
  },
  ideationPrioritization: {
    name: 'Ideation & Prioritization',
    sections: ['unique-features', 'features-functionalities', 'eisenhower-matrix', 'design-explorations-tradeoffs']
  },
  processExecution: {
    name: 'Process & Execution',
    sections: ['task-mapping', 'taskflows', 'design-system-contribution', 'challenges-obstacles', 'turning-point', 'validation-iteration']
  },
  outcome: {
    name: 'Outcome',
    sections: ['final-designs', 'business-impact', 'design-system-impact', 'ui-ux-improvements', 'team-organizational-impact', 'reflection-next-steps']
  }
};

// All available section types with descriptions and data formats
const sectionTypes2025 = [
  // HOOK
  { id: 'intriguing-title', name: 'Intriguing Title', category: 'hook', description: 'Impact-focused title with transformation verb' },
  { id: 'project-overview', name: 'Project Overview + Role', category: 'hook', description: 'Two-column overview with role, timeline, team' },
  { id: 'problem-statement', name: 'Problem Statement', category: 'hook', description: 'Core problem distilled, then expanded' },
  { id: 'business-impact-preview', name: 'Business Impact Preview', category: 'hook', description: 'Key metrics/outcomes upfront', isNew: true },
  { id: 'teaser-visual', name: 'Teaser Visual', category: 'hook', description: 'High-impact before/after or transformation visual' },

  // STRATEGIC CONTEXT (NEW)
  { id: 'design-vision-strategy', name: 'Design Vision & Strategy', category: 'strategicContext', description: 'Design direction and strategic alignment', isNew: true },
  { id: 'cross-functional-alignment', name: 'Cross-Functional Alignment', category: 'strategicContext', description: 'PM, Engineering, Data Science collaboration', isNew: true },
  { id: 'technical-constraints', name: 'Technical Constraints', category: 'strategicContext', description: 'Technical limitations and design adaptations', isNew: true },
  { id: 'ai-ml-considerations', name: 'AI/ML Considerations', category: 'strategicContext', description: 'Model capabilities, trust, ethics (critical for AI roles)', isNew: true, isCriticalForAI: true },

  // DISCOVERY & RESEARCH
  { id: 'our-process', name: 'Our Process', category: 'discoveryResearch', description: 'Design process overview (Double Diamond, etc.)' },
  { id: 'product-users-personas', name: 'Product Users & Personas', category: 'discoveryResearch', description: 'Target users, segments, detailed personas' },
  { id: 'user-needs', name: 'User Needs', category: 'discoveryResearch', description: 'Core user requirements and desires' },
  { id: 'user-business-challenges', name: 'User & Business Challenges', category: 'discoveryResearch', description: 'Pain points from both perspectives' },
  { id: 'quantitative-research', name: 'Quantitative Research', category: 'discoveryResearch', description: 'Survey data, analytics, findings' },
  { id: 'competitor-analysis', name: 'Competitor Analysis', category: 'discoveryResearch', description: 'Market landscape and positioning' },
  { id: 'key-insights', name: 'Key Insights', category: 'discoveryResearch', description: 'Synthesized insights tied to business goals' },

  // PROBLEM ANALYSIS
  { id: 'five-why-analysis', name: '5 Why Analysis', category: 'problemAnalysis', description: 'Root cause discovery through questioning' },
  { id: 'root-cause-analysis', name: 'Root Cause Analysis', category: 'problemAnalysis', description: 'Fishbone/comprehensive root cause investigation' },
  { id: 'objectives-goals', name: 'Objectives & Goals', category: 'problemAnalysis', description: 'User, Business, and Technical goals' },

  // IDEATION & PRIORITIZATION
  { id: 'unique-features', name: 'Unique Features', category: 'ideationPrioritization', description: 'Differentiating features and value propositions' },
  { id: 'features-functionalities', name: 'Features & Functionalities', category: 'ideationPrioritization', description: 'Complete feature set addressing needs' },
  { id: 'eisenhower-matrix', name: 'Eisenhower Matrix', category: 'ideationPrioritization', description: 'Feature prioritization by urgency/importance' },
  { id: 'design-explorations-tradeoffs', name: 'Design Explorations & Tradeoffs', category: 'ideationPrioritization', description: 'Design alternatives and decision rationale', isEnhanced: true },

  // PROCESS & EXECUTION
  { id: 'task-mapping', name: 'Task Mapping', category: 'processExecution', description: 'User tasks and workflows mapped' },
  { id: 'taskflows', name: 'Taskflows', category: 'processExecution', description: 'Detailed user journey and flow diagrams' },
  { id: 'design-system-contribution', name: 'Design System Contribution', category: 'processExecution', description: 'Components and patterns contributed', isNew: true },
  { id: 'challenges-obstacles', name: 'Challenges/Obstacles', category: 'processExecution', description: 'Real constraints navigated' },
  { id: 'turning-point', name: 'Turning Point', category: 'processExecution', description: 'AHA moment that changed direction', isNew: true },
  { id: 'validation-iteration', name: 'Validation & Iteration', category: 'processExecution', description: 'Testing cycles and improvements', isNew: true },

  // OUTCOME
  { id: 'final-designs', name: 'Final Designs', category: 'outcome', description: 'Polished final UI with annotations' },
  { id: 'business-impact', name: 'Business Impact', category: 'outcome', description: 'Comprehensive business results', isEnhanced: true },
  { id: 'design-system-impact', name: 'Design System Impact', category: 'outcome', description: 'Scalable patterns created', isNew: true },
  { id: 'ui-ux-improvements', name: 'UI/UX Improvements', category: 'outcome', description: 'Before/after comparisons' },
  { id: 'team-organizational-impact', name: 'Team & Organizational Impact', category: 'outcome', description: 'Process improvements, collaboration wins', isNew: true },
  { id: 'reflection-next-steps', name: 'Reflection & Next Steps', category: 'outcome', description: 'Learnings and future vision' }
];

// PDF extraction hints for each section type
const pdfExtractionHints = {
  'intriguing-title': ['title', 'project name', 'case study', 'impact', 'transformation'],
  'project-overview': ['role', 'responsibilities', 'team', 'timeline', 'duration', 'tools', 'deliverables'],
  'problem-statement': ['problem', 'challenge', 'issue', 'pain point', 'friction', 'struggle'],
  'business-impact-preview': ['results', 'impact', 'outcome', 'metrics', 'improvement', '%', 'increase', 'decrease'],
  'design-vision-strategy': ['vision', 'strategy', 'approach', 'principles', 'north star', 'direction'],
  'cross-functional-alignment': ['collaboration', 'stakeholder', 'PM', 'engineer', 'data', 'team', 'cross-functional'],
  'technical-constraints': ['constraint', 'limitation', 'technical', 'infrastructure', 'legacy', 'API', 'performance'],
  'ai-ml-considerations': ['AI', 'ML', 'machine learning', 'model', 'algorithm', 'prediction', 'recommendation', 'trust', 'ethics'],
  'our-process': ['process', 'methodology', 'approach', 'double diamond', 'design thinking', 'agile', 'sprint'],
  'product-users-personas': ['user', 'persona', 'customer', 'audience', 'segment', 'demographic', 'behavior'],
  'user-needs': ['need', 'want', 'requirement', 'goal', 'job to be done', 'desire', 'expectation'],
  'user-business-challenges': ['challenge', 'pain point', 'frustration', 'difficulty', 'obstacle', 'barrier'],
  'quantitative-research': ['survey', 'data', 'analytics', 'statistics', 'sample', 'percentage', 'quantitative'],
  'competitor-analysis': ['competitor', 'competition', 'market', 'alternative', 'benchmark', 'comparison'],
  'key-insights': ['insight', 'finding', 'discovery', 'learning', 'realization', 'observation'],
  'five-why-analysis': ['why', 'root cause', 'because', 'underlying', 'fundamental'],
  'root-cause-analysis': ['root cause', 'fishbone', 'ishikawa', 'analysis', 'cause', 'effect'],
  'objectives-goals': ['goal', 'objective', 'target', 'KPI', 'success', 'metric', 'OKR'],
  'unique-features': ['unique', 'differentiator', 'innovation', 'novel', 'new feature', 'value proposition'],
  'features-functionalities': ['feature', 'functionality', 'capability', 'function', 'component'],
  'eisenhower-matrix': ['priority', 'urgent', 'important', 'matrix', 'prioritization', 'tradeoff'],
  'design-explorations-tradeoffs': ['alternative', 'option', 'exploration', 'tradeoff', 'decision', 'constraint'],
  'task-mapping': ['task', 'workflow', 'step', 'action', 'process', 'flow'],
  'taskflows': ['flow', 'journey', 'path', 'step', 'sequence', 'diagram'],
  'design-system-contribution': ['design system', 'component', 'pattern', 'guideline', 'library', 'token'],
  'challenges-obstacles': ['challenge', 'obstacle', 'difficulty', 'problem', 'blocker', 'setback'],
  'turning-point': ['turning point', 'realization', 'breakthrough', 'pivot', 'shift', 'aha moment'],
  'validation-iteration': ['test', 'validation', 'iteration', 'feedback', 'usability', 'prototype', 'A/B'],
  'final-designs': ['final design', 'solution', 'screen', 'interface', 'UI', 'mockup'],
  'business-impact': ['impact', 'result', 'outcome', 'metric', 'improvement', 'success', 'KPI', 'ROI'],
  'design-system-impact': ['design system', 'component', 'pattern', 'reuse', 'adoption', 'scale'],
  'ui-ux-improvements': ['before', 'after', 'improvement', 'change', 'enhancement', 'comparison'],
  'team-organizational-impact': ['team', 'organization', 'process', 'collaboration', 'mentorship', 'culture'],
  'reflection-next-steps': ['learning', 'reflection', 'next step', 'future', 'improvement', 'iteration', 'growth']
};

// Design tokens shared across templates
const designTokens = {
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
    success: 'rgba(143, 216, 24, 0.3)',
    warning: '#FFF4CE'
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
  const templateId = caseStudyContext?.template || 'carex';

  // Trim document content to avoid timeout (max 12000 chars for better extraction)
  const trimmedDocContent = hasDocument && documentContent.length > 12000
    ? documentContent.slice(0, 12000) + '\n\n[Content truncated for processing...]'
    : documentContent;

  // Build section types string organized by category
  const sectionTypesStr = Object.entries(caseStudyIA2025).map(([catId, cat]) => {
    const sections = sectionTypes2025
      .filter(s => s.category === catId)
      .map(s => `  - ${s.id}: ${s.name}${s.isNew ? ' [NEW 2025]' : ''}${s.isEnhanced ? ' [ENHANCED]' : ''}${s.isCriticalForAI ? ' [CRITICAL FOR AI ROLES]' : ''} - ${s.description}`)
      .join('\n');
    return `\n${cat.name}${cat.isNew ? ' [NEW SECTION]' : ''}:\n${sections}`;
  }).join('\n');

  // Build PDF extraction hints
  const extractionHintsStr = Object.entries(pdfExtractionHints)
    .map(([section, hints]) => `${section}: ${hints.join(', ')}`)
    .join('\n');

  const systemPrompt = `You are an AI assistant helping users build comprehensive UX case studies following the 2025 Case Study Information Architecture. You help parse natural language requests and generate appropriate content for portfolio case studies.

=== 2025 CASE STUDY IA STRUCTURE ===
All templates follow this structure:

HOOK (Pages 1-5):
- Intriguing Title (impact-focused)
- Project Overview + Role
- Problem Statement
- Business Impact Preview [NEW] - key metrics upfront
- Teaser Visual

STRATEGIC CONTEXT [NEW SECTION] (Pages 6-9):
- Design Vision & Strategy
- Cross-Functional Alignment (PM, Engineering, Data Science)
- Technical Constraints
- AI/ML Considerations [CRITICAL FOR AI ROLES]

DISCOVERY & RESEARCH (Pages 10-16):
- Our Process (Double Diamond, etc.)
- Product Users & Personas
- User Needs
- User & Business Challenges
- Quantitative Research
- Competitor Analysis
- Key Insights

PROBLEM ANALYSIS (Pages 17-19):
- 5 Why Analysis
- Root Cause Analysis
- Objectives & Goals (User, Business, Technical [NEW])

IDEATION & PRIORITIZATION (Pages 20-23):
- Unique Features
- Features & Functionalities
- Eisenhower Matrix
- Design Explorations & Tradeoffs [ENHANCED]

PROCESS & EXECUTION (Pages 24-29):
- Task Mapping
- Taskflows
- Design System Contribution [NEW]
- Challenges/Obstacles
- Turning Point [NEW]
- Validation & Iteration [NEW]

OUTCOME (Pages 30-35):
- Final Designs
- Business Impact [ENHANCED]
- Design System Impact [NEW]
- UI/UX Improvements
- Team & Organizational Impact [NEW]
- Reflection & Next Steps

=== AVAILABLE SECTION TYPES ===${sectionTypesStr}

=== CURRENT CASE STUDY CONTEXT ===
- Title: ${caseStudyContext?.title || 'Untitled'}
- Subtitle: ${caseStudyContext?.subtitle || ''}
- Template: ${templateId}
- Existing sections: ${sectionNames}

${hasDocument ? `=== PDF DOCUMENT EXTRACTION ===
The user has uploaded a document. You MUST extract REAL information from this document.

PDF EXTRACTION HINTS BY SECTION:
${extractionHintsStr}

CRITICAL: Use the document content below to populate sections with ACTUAL project data, not generic placeholders.

=== DOCUMENT CONTENT ===
${trimmedDocContent}
=== END DOCUMENT ===
` : ''}

=== DATA FORMATS FOR EACH SECTION TYPE ===

// HOOK SECTIONS
intriguingTitle:
{
  "title": "Impact-focused title (max 12 words)",
  "subtitle": "Supporting tagline",
  "heroImage": "optional image URL"
}

projectOverview:
{
  "summary": "2-3 sentence project summary",
  "role": "Your specific role",
  "timeline": "Project duration",
  "team": ["Team member 1 - Role", "Team member 2 - Role"],
  "tools": ["Tool 1", "Tool 2"],
  "deliverables": ["Deliverable 1", "Deliverable 2"]
}

problemStatement:
{
  "coreProblem": "One-sentence problem statement",
  "rootCause": "2-3 paragraphs explaining root cause",
  "businessStakes": "What happens if unsolved",
  "triggeringEvent": "What prompted this project"
}

businessImpactPreview:
{
  "primaryMetric": { "value": "40%", "label": "Increase in X", "context": "from Y to Z" },
  "secondaryMetrics": [
    { "value": "25%", "label": "Metric 2" },
    { "value": "3x", "label": "Metric 3" }
  ],
  "impactSummary": "One-liner impact statement"
}

// STRATEGIC CONTEXT SECTIONS (NEW)
designVisionStrategy:
{
  "vision": "Design vision statement",
  "strategy": "Strategic approach",
  "principles": ["Principle 1", "Principle 2", "Principle 3"],
  "northStar": "North star metric or goal"
}

crossFunctionalAlignment:
{
  "pmPartnership": { "collaboration": "How you worked with PM", "sharedGoals": "Shared objectives", "outcomes": "What you achieved together" },
  "engineeringCollaboration": { "collaboration": "How you worked with engineering", "technicalDiscussions": "Key technical discussions", "outcomes": "Results" },
  "dataScienceCoordination": { "collaboration": "How you worked with data", "dataInsights": "Key insights from data", "outcomes": "Data-driven outcomes" }
}

technicalConstraints:
{
  "constraints": ["Constraint 1", "Constraint 2"],
  "designAdaptations": ["How design adapted 1", "How design adapted 2"],
  "tradeoffs": ["Tradeoff made 1", "Tradeoff made 2"]
}

aiMlConsiderations:
{
  "modelCapabilities": { "capabilities": ["What AI can do 1", "What AI can do 2"], "limitations": ["Limitation 1", "Limitation 2"] },
  "infrastructureConstraints": ["Infrastructure constraint 1", "Infrastructure constraint 2"],
  "trustExplainability": { "strategy": "Trust strategy", "implementation": "How implemented", "userFeedback": "Feedback received" },
  "ethicalConsiderations": { "concerns": ["Concern 1"], "mitigations": ["Mitigation 1"], "guidelines": ["Guideline 1"] }
}

// DISCOVERY & RESEARCH SECTIONS
ourProcess:
{
  "processName": "Double Diamond / Design Thinking / etc.",
  "phases": [
    { "name": "Discover", "description": "Phase description", "activities": ["Activity 1"], "outputs": ["Output 1"] }
  ],
  "adaptations": "How process was adapted"
}

productUsersPersonas:
{
  "userSegments": ["Segment 1", "Segment 2"],
  "primaryPersona": {
    "name": "Persona Name",
    "role": "Job Title",
    "demographics": "Age, Location, etc.",
    "goals": ["Goal 1", "Goal 2"],
    "frustrations": ["Frustration 1", "Frustration 2"],
    "behaviors": ["Behavior 1", "Behavior 2"],
    "quote": "Representative quote"
  },
  "secondaryPersonas": []
}

userNeeds:
{
  "primaryNeeds": ["Primary need 1", "Primary need 2"],
  "secondaryNeeds": ["Secondary need 1"],
  "jobsToBeDone": ["Job 1", "Job 2"],
  "needsPrioritization": "How needs were prioritized"
}

userBusinessChallenges:
{
  "userChallenges": ["User challenge 1", "User challenge 2"],
  "businessChallenges": ["Business challenge 1", "Business challenge 2"],
  "challengeMapping": ["How challenges connect"]
}

quantitativeResearch:
{
  "methodology": "Research methodology",
  "sampleSize": "Sample size and demographics",
  "keyFindings": [
    { "percentage": "80%", "description": "Finding description" }
  ]
}

competitorAnalysis:
{
  "competitors": [
    { "name": "Competitor 1", "description": "Overview", "strengths": ["Strength 1"], "weaknesses": ["Weakness 1"], "features": ["Feature 1"] }
  ],
  "marketGaps": ["Gap 1", "Gap 2"],
  "opportunities": ["Opportunity 1"],
  "differentiators": ["How to differentiate"]
}

keyInsights:
{
  "insights": [
    { "insight": "Key insight", "source": "Source attribution", "businessImplication": "Business impact", "designImplication": "Design impact" }
  ],
  "insightFramework": "How insights were synthesized",
  "prioritization": "How prioritized"
}

// PROBLEM ANALYSIS SECTIONS
fiveWhyAnalysis:
{
  "problems": [
    {
      "statement": "Initial problem",
      "whys": ["Why 1", "Why 2", "Why 3", "Why 4", "Why 5"],
      "rootCause": "Root cause discovered"
    }
  ]
}

rootCauseAnalysis:
{
  "framework": "Fishbone / Other",
  "categories": ["Category 1", "Category 2"],
  "rootCauses": ["Root cause 1", "Root cause 2"],
  "primaryRootCause": "Main root cause"
}

objectivesGoals:
{
  "userGoals": ["User goal 1", "User goal 2"],
  "businessGoals": ["Business goal 1", "Business goal 2"],
  "technicalGoals": ["Technical goal 1", "Technical goal 2"],
  "successMetrics": ["How success measured"]
}

// IDEATION & PRIORITIZATION SECTIONS
uniqueFeatures:
{
  "features": ["Unique feature 1", "Unique feature 2"],
  "valueProposition": "Overall value proposition",
  "competitiveAdvantage": "How features create advantage"
}

featuresFunctionalities:
{
  "features": [
    { "name": "Feature name", "description": "Description", "userNeed": "Need addressed", "priority": "High/Medium/Low" }
  ],
  "featureGroups": ["Category 1", "Category 2"]
}

eisenhowerMatrix:
{
  "doFirst": ["Important & Urgent 1", "Important & Urgent 2"],
  "schedule": ["Important & Not Urgent 1"],
  "delegate": ["Not Important & Urgent 1"],
  "eliminate": ["Not Important & Not Urgent 1"],
  "rationale": "Prioritization rationale"
}

designExplorationsTradeoffs:
{
  "designAlternatives": [
    { "name": "Option A", "description": "Description", "pros": ["Pro 1"], "cons": ["Con 1"] }
  ],
  "technicalConstraints": ["Technical constraint 1"],
  "businessConstraints": ["Business constraint 1"],
  "aiModelConstraints": ["AI constraint 1"],
  "decisionRationale": "Why final direction chosen",
  "tradeoffsMade": ["Tradeoff 1", "Tradeoff 2"]
}

// PROCESS & EXECUTION SECTIONS
taskMapping:
{
  "tasks": [
    { "task": "Task name", "frequency": "Daily/Weekly", "importance": "High", "currentPainPoints": ["Pain point"] }
  ],
  "touchpoints": ["Touchpoint 1"]
}

taskflows:
{
  "flows": [
    { "name": "Flow name", "description": "Description", "steps": ["Step 1", "Step 2"] }
  ],
  "decisionPoints": ["Decision 1"],
  "errorStates": ["Error case 1"]
}

designSystemContribution:
{
  "components": [
    { "name": "Component name", "description": "Description", "usage": "Where used" }
  ],
  "patterns": ["Pattern 1"],
  "guidelines": ["Guideline 1"],
  "adoption": "How contributions were adopted"
}

challengesObstacles:
{
  "challenges": [
    { "challenge": "Challenge description", "context": "Context", "approach": "How approached", "resolution": "How resolved" }
  ],
  "lessonsLearned": ["Lesson 1"]
}

turningPoint:
{
  "situation": "Context before",
  "insight": "The key realization",
  "impact": "How it changed the project",
  "evidence": "What triggered this insight"
}

validationIteration:
{
  "testingRounds": [
    { "round": 1, "method": "Usability testing", "participants": "5 users", "findings": ["Finding 1"], "changes": ["Change made"] }
  ],
  "iterationHighlights": ["Key iteration"],
  "validationMetrics": ["How validated"]
}

// OUTCOME SECTIONS
finalDesigns:
{
  "screens": [
    { "name": "Screen name", "description": "Description", "annotations": ["Annotation 1"] }
  ],
  "flows": ["Key flow 1"],
  "interactions": ["Interaction 1"],
  "prototypeLink": "URL"
}

businessImpact:
{
  "quantitativeMetrics": [
    { "metric": "Conversion rate", "before": "2%", "after": "5%", "improvement": "+150%" }
  ],
  "qualitativeFeedback": ["Quote 1", "Quote 2"],
  "behavioralChanges": ["Change 1"],
  "longTermSuccess": "Long-term indicators"
}

designSystemImpact:
{
  "componentsCreated": ["Component 1"],
  "patternsEstablished": ["Pattern 1"],
  "adoptionRate": "85% adoption",
  "timeSaved": "40 hours/sprint"
}

uiUxImprovements:
{
  "comparisons": [
    { "area": "Area name", "before": "Old state", "after": "New state", "improvement": "What improved", "metric": "40% faster" }
  ],
  "overallImprovement": "Summary"
}

teamOrganizationalImpact:
{
  "processImprovements": ["Process change 1"],
  "collaborationWins": ["Collaboration win 1"],
  "mentorship": ["Mentorship contribution"],
  "cultureImpact": "Impact on team culture"
}

reflectionNextSteps:
{
  "keyLearnings": ["Learning 1", "Learning 2"],
  "whatWouldChange": ["What would do differently"],
  "futureIterations": ["Future improvement 1"],
  "personalGrowth": "How you grew"
}

=== RESPONSE FORMAT ===

When the user asks to ADD a section, return:
{
  "action": "add_section",
  "sectionType": "section-id-from-list",
  "insertionPoint": {
    "position": "before|after|start|end",
    "referenceSection": "Section Title"
  },
  "generatedSection": {
    "title": "Section Title",
    "content": [{
      "type": "sectionType",
      "data": { /* section data matching format above */ }
    }]
  },
  "message": "Description of what was created. Would you like me to add it?"
}

When the user asks to DELETE a section:
{
  "action": "delete_section",
  "sectionTitle": "Section to Delete",
  "message": "I'll remove the [section]. Are you sure?"
}

If the request is unclear:
{
  "action": "clarify",
  "message": "I'd be happy to help! Could you clarify [question]?"
}

IMPORTANT GUIDELINES:
1. ALWAYS extract real content from uploaded documents - never use generic placeholders
2. Match the 2025 IA structure when suggesting sections
3. For AI/ML projects, include AI/ML Considerations section
4. Use the exact data format for each section type
5. Tie insights to business goals as specified in the IA
6. Generate content appropriate for senior/staff/principal UX designer portfolios`;

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
        max_tokens: 4096,
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
