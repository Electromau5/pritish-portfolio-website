// Case Study Information Architecture - 2025 Edition
// This is the master structure that all templates follow
// Each template adapts this IA to its unique visual style while maintaining content consistency

export const caseStudyIA2025 = {
  version: '2025.1',
  name: 'Detailed Case Study (Updated for 2025)',
  description: 'Comprehensive UX case study structure optimized for senior/staff/principal roles with AI/ML considerations',

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 1: HOOK - Capture attention and establish value
  // ═══════════════════════════════════════════════════════════════════════════
  hook: {
    id: 'hook',
    name: 'Hook',
    description: 'Capture attention and establish value proposition',
    order: 1,
    sections: [
      {
        id: 'intriguing-title',
        name: 'Intriguing Title',
        page: 1,
        description: 'Impact-focused title that leads with transformation, not product name',
        required: true,
        contentFields: [
          { key: 'title', type: 'string', description: 'Impact-focused title (max 12 words)' },
          { key: 'subtitle', type: 'string', description: 'Supporting context or tagline' },
          { key: 'heroImage', type: 'image', description: 'High-impact visual' }
        ],
        guidelines: [
          'Lead with outcome, not product name',
          'Use transformation verbs (reducing, eliminating, unlocking)',
          'Include numbers when available',
          'Max 12 words for title'
        ],
        pdfExtractionHints: ['title', 'project name', 'case study', 'impact', 'transformation']
      },
      {
        id: 'project-overview',
        name: 'Project Overview + Role',
        page: 2,
        description: 'Two-column scannable overview with role, timeline, team, constraints',
        required: true,
        contentFields: [
          { key: 'summary', type: 'string', description: '2-3 sentence project summary' },
          { key: 'role', type: 'string', description: 'Your specific role and scope' },
          { key: 'timeline', type: 'string', description: 'Project duration' },
          { key: 'team', type: 'array', description: 'Team composition' },
          { key: 'tools', type: 'array', description: 'Tools and methods used' },
          { key: 'deliverables', type: 'array', description: 'Key deliverables' }
        ],
        guidelines: [
          'Fit in single screen without scrolling',
          'Show team structure explicitly',
          'Present constraints as opportunities',
          'Anchor in scale/risk/impact'
        ],
        pdfExtractionHints: ['role', 'responsibilities', 'team', 'timeline', 'duration', 'tools', 'deliverables']
      },
      {
        id: 'problem-statement',
        name: 'Problem Statement',
        page: 3,
        description: 'Core problem distilled to one sentence, then expanded',
        required: true,
        contentFields: [
          { key: 'coreProblem', type: 'string', description: 'One-sentence problem statement' },
          { key: 'rootCause', type: 'string', description: '2-3 paragraphs on root cause' },
          { key: 'businessStakes', type: 'string', description: 'What happens if unsolved' },
          { key: 'triggeringEvent', type: 'string', description: 'What prompted this project' }
        ],
        guidelines: [
          'Distilled core problem (1 sentence, large type)',
          'Root cause (2-3 paragraphs)',
          'Business stakes (what happens if unsolved)',
          'Tie to friction/confusion/risk/cost'
        ],
        pdfExtractionHints: ['problem', 'challenge', 'issue', 'pain point', 'friction', 'struggle']
      },
      {
        id: 'business-impact-preview',
        name: 'Business Impact Preview',
        page: 4,
        description: 'Key metrics/outcomes upfront to hook the reader',
        required: true,
        isNew: true,
        contentFields: [
          { key: 'primaryMetric', type: 'object', description: 'Main impact metric', fields: ['value', 'label', 'context'] },
          { key: 'secondaryMetrics', type: 'array', description: 'Supporting metrics (2-3)' },
          { key: 'impactSummary', type: 'string', description: 'One-liner impact statement' }
        ],
        guidelines: [
          'Show 1 primary metric prominently',
          '2-3 supporting metrics',
          'Tie metrics to business outcomes',
          'If no hard metrics, use qualitative indicators'
        ],
        pdfExtractionHints: ['results', 'impact', 'outcome', 'metrics', 'improvement', '%', 'increase', 'decrease', 'reduction']
      },
      {
        id: 'teaser-visual',
        name: 'Teaser Visual',
        page: 5,
        description: 'One high-impact before/after or GIF showing transformation',
        required: false,
        contentFields: [
          { key: 'visual', type: 'image', description: 'Before/after or key screen' },
          { key: 'visualType', type: 'enum', options: ['before-after', 'hero-screen', 'gif', 'video'] },
          { key: 'caption', type: 'string', description: 'Brief explanation of transformation' }
        ],
        guidelines: [
          'Single visual only',
          'Show highest-leverage improvement',
          '2-3 bullets max for impact',
          'Not full solution—just proof of value'
        ],
        pdfExtractionHints: ['solution', 'design', 'final', 'result', 'transformation']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 2: STRATEGIC CONTEXT - NEW for 2025
  // ═══════════════════════════════════════════════════════════════════════════
  strategicContext: {
    id: 'strategic-context',
    name: 'Strategic Context',
    description: 'Business strategy, cross-functional alignment, and technical considerations',
    order: 2,
    isNew: true,
    sections: [
      {
        id: 'design-vision-strategy',
        name: 'Design Vision & Strategy',
        page: 6,
        description: 'High-level design direction and strategic alignment',
        required: true,
        isNew: true,
        contentFields: [
          { key: 'vision', type: 'string', description: 'Design vision statement' },
          { key: 'strategy', type: 'string', description: 'Strategic approach' },
          { key: 'principles', type: 'array', description: 'Design principles guiding the work' },
          { key: 'northStar', type: 'string', description: 'North star metric or goal' }
        ],
        guidelines: [
          'Articulate the "why" behind design decisions',
          'Connect design to business strategy',
          'Show systems thinking',
          'Demonstrate strategic influence'
        ],
        pdfExtractionHints: ['vision', 'strategy', 'approach', 'principles', 'north star', 'direction']
      },
      {
        id: 'cross-functional-alignment',
        name: 'Cross-Functional Alignment',
        page: 7,
        description: 'How you collaborated with PM, Engineering, and Data Science',
        required: true,
        isNew: true,
        contentFields: [
          { key: 'pmPartnership', type: 'object', description: 'Product Management collaboration', fields: ['collaboration', 'sharedGoals', 'outcomes'] },
          { key: 'engineeringCollaboration', type: 'object', description: 'Engineering partnership', fields: ['collaboration', 'technicalDiscussions', 'outcomes'] },
          { key: 'dataScienceCoordination', type: 'object', description: 'Data Science coordination', fields: ['collaboration', 'dataInsights', 'outcomes'] },
          { key: 'otherStakeholders', type: 'array', description: 'Other key stakeholders' }
        ],
        guidelines: [
          'Show collaborative leadership',
          'Demonstrate influence without authority',
          'Highlight cross-functional wins',
          'Show how you navigated disagreements'
        ],
        pdfExtractionHints: ['collaboration', 'stakeholder', 'PM', 'engineer', 'data', 'team', 'cross-functional', 'alignment']
      },
      {
        id: 'technical-constraints',
        name: 'Technical Constraints',
        page: 8,
        description: 'Technical limitations that shaped design decisions',
        required: false,
        isNew: true,
        contentFields: [
          { key: 'constraints', type: 'array', description: 'List of technical constraints' },
          { key: 'designAdaptations', type: 'array', description: 'How design adapted to constraints' },
          { key: 'tradeoffs', type: 'array', description: 'Tradeoffs made due to constraints' }
        ],
        guidelines: [
          'Frame constraints as design opportunities',
          'Show technical understanding',
          'Demonstrate problem-solving within limits',
          'Highlight creative solutions to constraints'
        ],
        pdfExtractionHints: ['constraint', 'limitation', 'technical', 'infrastructure', 'legacy', 'API', 'performance']
      },
      {
        id: 'ai-ml-considerations',
        name: 'AI/ML Considerations',
        page: 9,
        description: 'Critical for AI product roles - model capabilities, trust, ethics',
        required: false,
        isNew: true,
        isCriticalForAI: true,
        contentFields: [
          { key: 'modelCapabilities', type: 'object', description: 'What the AI/ML model can and cannot do', fields: ['capabilities', 'limitations'] },
          { key: 'infrastructureConstraints', type: 'array', description: 'Technical infrastructure limitations' },
          { key: 'trustExplainability', type: 'object', description: 'How trust and transparency were built', fields: ['strategy', 'implementation', 'userFeedback'] },
          { key: 'ethicalConsiderations', type: 'object', description: 'Ethical dimensions addressed', fields: ['concerns', 'mitigations', 'guidelines'] }
        ],
        guidelines: [
          'Show understanding of AI/ML constraints',
          'Demonstrate ethical design thinking',
          'Highlight trust-building strategies',
          'Show how you designed for uncertainty'
        ],
        pdfExtractionHints: ['AI', 'ML', 'machine learning', 'model', 'algorithm', 'prediction', 'recommendation', 'trust', 'explainability', 'ethics', 'bias', 'fairness']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 3: DISCOVERY & RESEARCH
  // ═══════════════════════════════════════════════════════════════════════════
  discoveryResearch: {
    id: 'discovery-research',
    name: 'Discovery & Research',
    description: 'Research methods, findings, and user understanding',
    order: 3,
    sections: [
      {
        id: 'our-process',
        name: 'Our Process',
        page: 10,
        description: 'Design process overview (Double Diamond, Design Thinking, etc.)',
        required: true,
        contentFields: [
          { key: 'processName', type: 'string', description: 'Process framework used' },
          { key: 'phases', type: 'array', description: 'Process phases', itemFields: ['name', 'description', 'activities', 'outputs'] },
          { key: 'adaptations', type: 'string', description: 'How you adapted the process' }
        ],
        guidelines: [
          'Show intentional process selection',
          'Explain why this process fit the project',
          'Highlight adaptations made',
          'Keep visual and scannable'
        ],
        pdfExtractionHints: ['process', 'methodology', 'approach', 'double diamond', 'design thinking', 'agile', 'sprint']
      },
      {
        id: 'product-users-personas',
        name: 'Product Users & Personas',
        page: 11,
        description: 'Target users, segments, and detailed personas',
        required: true,
        contentFields: [
          { key: 'userSegments', type: 'array', description: 'User segments identified' },
          { key: 'primaryPersona', type: 'object', description: 'Primary user persona', fields: ['name', 'role', 'demographics', 'goals', 'frustrations', 'behaviors', 'quote'] },
          { key: 'secondaryPersonas', type: 'array', description: 'Additional personas' }
        ],
        guidelines: [
          'Ground personas in research data',
          'Include behavioral details, not just demographics',
          'Show persona evolution during project',
          'Connect personas to design decisions'
        ],
        pdfExtractionHints: ['user', 'persona', 'customer', 'audience', 'segment', 'demographic', 'behavior']
      },
      {
        id: 'user-needs',
        name: 'User Needs',
        page: 12,
        description: 'Core user requirements and desires',
        required: true,
        contentFields: [
          { key: 'primaryNeeds', type: 'array', description: 'Primary user needs' },
          { key: 'secondaryNeeds', type: 'array', description: 'Secondary user needs' },
          { key: 'jobsToBeDone', type: 'array', description: 'Jobs to be done framework' },
          { key: 'needsPrioritization', type: 'string', description: 'How needs were prioritized' }
        ],
        guidelines: [
          'Frame as user jobs or goals',
          'Prioritize by impact and frequency',
          'Show evidence for each need',
          'Connect needs to features'
        ],
        pdfExtractionHints: ['need', 'want', 'requirement', 'goal', 'job to be done', 'desire', 'expectation']
      },
      {
        id: 'user-business-challenges',
        name: 'User & Business Challenges',
        page: 13,
        description: 'Pain points from both user and business perspectives',
        required: true,
        contentFields: [
          { key: 'userChallenges', type: 'array', description: 'User pain points and frustrations' },
          { key: 'businessChallenges', type: 'array', description: 'Business challenges and constraints' },
          { key: 'challengeMapping', type: 'array', description: 'How user and business challenges connect' }
        ],
        guidelines: [
          'Balance user and business perspectives',
          'Show tension and how it was resolved',
          'Include evidence (quotes, data)',
          'Prioritize by severity'
        ],
        pdfExtractionHints: ['challenge', 'pain point', 'frustration', 'difficulty', 'obstacle', 'barrier', 'issue']
      },
      {
        id: 'quantitative-research',
        name: 'Quantitative Research',
        page: 14,
        description: 'Survey data, analytics, and statistical findings',
        required: false,
        contentFields: [
          { key: 'methodology', type: 'string', description: 'Research methodology' },
          { key: 'sampleSize', type: 'string', description: 'Sample size and demographics' },
          { key: 'keyFindings', type: 'array', description: 'Key statistical findings' },
          { key: 'dataVisualizations', type: 'array', description: 'Charts and graphs' }
        ],
        guidelines: [
          'Show statistical rigor',
          'Visualize data clearly',
          'Connect data to design decisions',
          'Include confidence levels where relevant'
        ],
        pdfExtractionHints: ['survey', 'data', 'analytics', 'statistics', 'sample', 'percentage', 'quantitative', 'metrics']
      },
      {
        id: 'competitor-analysis',
        name: 'Competitor Analysis',
        page: 15,
        description: 'Market landscape and competitive positioning',
        required: false,
        contentFields: [
          { key: 'competitors', type: 'array', description: 'Competitors analyzed', itemFields: ['name', 'description', 'strengths', 'weaknesses', 'features'] },
          { key: 'marketGaps', type: 'array', description: 'Market gaps identified' },
          { key: 'opportunities', type: 'array', description: 'Opportunities from analysis' },
          { key: 'differentiators', type: 'array', description: 'How to differentiate' }
        ],
        guidelines: [
          'Focus on UX patterns, not just features',
          'Identify gaps as opportunities',
          'Show how analysis influenced design',
          'Include direct and indirect competitors'
        ],
        pdfExtractionHints: ['competitor', 'competition', 'market', 'alternative', 'benchmark', 'comparison']
      },
      {
        id: 'key-insights',
        name: 'Key Insights',
        page: 16,
        description: 'Synthesized insights tied to business goals',
        required: true,
        contentFields: [
          { key: 'insights', type: 'array', description: 'Key insights from research', itemFields: ['insight', 'source', 'businessImplication', 'designImplication'] },
          { key: 'insightFramework', type: 'string', description: 'How insights were synthesized' },
          { key: 'prioritization', type: 'string', description: 'How insights were prioritized' }
        ],
        guidelines: [
          'Show causal chain: insight → decision',
          'Tie insights to business goals',
          'Include source attribution',
          'Limit to 3-5 key insights'
        ],
        pdfExtractionHints: ['insight', 'finding', 'discovery', 'learning', 'realization', 'observation']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 4: PROBLEM ANALYSIS
  // ═══════════════════════════════════════════════════════════════════════════
  problemAnalysis: {
    id: 'problem-analysis',
    name: 'Problem Analysis',
    description: 'Deep analysis of root causes and goal definition',
    order: 4,
    sections: [
      {
        id: 'five-why-analysis',
        name: '5 Why Analysis',
        page: 17,
        description: 'Root cause discovery through iterative questioning',
        required: false,
        contentFields: [
          { key: 'problems', type: 'array', description: 'Problems analyzed', itemFields: ['statement', 'whys', 'rootCause'] }
        ],
        guidelines: [
          'Show logical progression',
          'Reach genuine root cause',
          'Can have multiple branches',
          'Connect to solution direction'
        ],
        pdfExtractionHints: ['why', 'root cause', 'because', 'underlying', 'fundamental']
      },
      {
        id: 'root-cause-analysis',
        name: 'Root Cause Analysis',
        page: 18,
        description: 'Comprehensive root cause investigation (fishbone, etc.)',
        required: false,
        contentFields: [
          { key: 'framework', type: 'string', description: 'Framework used (Fishbone, etc.)' },
          { key: 'categories', type: 'array', description: 'Root cause categories' },
          { key: 'rootCauses', type: 'array', description: 'Identified root causes' },
          { key: 'primaryRootCause', type: 'string', description: 'Primary root cause to address' }
        ],
        guidelines: [
          'Use established framework',
          'Show systematic analysis',
          'Prioritize root causes',
          'Connect to solution strategy'
        ],
        pdfExtractionHints: ['root cause', 'fishbone', 'ishikawa', 'analysis', 'cause', 'effect']
      },
      {
        id: 'objectives-goals',
        name: 'Objectives & Goals',
        page: 19,
        description: 'User, Business, and Technical goals (Technical is NEW for 2025)',
        required: true,
        contentFields: [
          { key: 'userGoals', type: 'array', description: 'User-centered goals' },
          { key: 'businessGoals', type: 'array', description: 'Business objectives' },
          { key: 'technicalGoals', type: 'array', description: 'Technical goals (NEW)', isNew: true },
          { key: 'successMetrics', type: 'array', description: 'How success will be measured' }
        ],
        guidelines: [
          'Balance all three goal types',
          'Make goals measurable (SMART)',
          'Show goal alignment/conflicts',
          'Define success criteria'
        ],
        pdfExtractionHints: ['goal', 'objective', 'target', 'KPI', 'success', 'metric', 'OKR']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 5: IDEATION & PRIORITIZATION
  // ═══════════════════════════════════════════════════════════════════════════
  ideationPrioritization: {
    id: 'ideation-prioritization',
    name: 'Ideation & Prioritization',
    description: 'Feature ideation, prioritization, and design exploration',
    order: 5,
    sections: [
      {
        id: 'unique-features',
        name: 'Unique Features',
        page: 20,
        description: 'Differentiating features and value propositions',
        required: false,
        contentFields: [
          { key: 'features', type: 'array', description: 'Unique features identified' },
          { key: 'valueProposition', type: 'string', description: 'Overall value proposition' },
          { key: 'competitiveAdvantage', type: 'string', description: 'How features create advantage' }
        ],
        guidelines: [
          'Focus on differentiation',
          'Tie to user needs and business goals',
          'Show competitive advantage',
          'Keep focused on 3-5 key features'
        ],
        pdfExtractionHints: ['unique', 'differentiator', 'innovation', 'novel', 'new feature', 'value proposition']
      },
      {
        id: 'features-functionalities',
        name: 'Features & Functionalities',
        page: 21,
        description: 'Complete feature set addressing user needs',
        required: true,
        contentFields: [
          { key: 'features', type: 'array', description: 'Features mapped to needs', itemFields: ['name', 'description', 'userNeed', 'priority'] },
          { key: 'featureGroups', type: 'array', description: 'Feature categories' }
        ],
        guidelines: [
          'Map features to user needs',
          'Show prioritization rationale',
          'Include must-have vs nice-to-have',
          'Consider MVP scope'
        ],
        pdfExtractionHints: ['feature', 'functionality', 'capability', 'function', 'component']
      },
      {
        id: 'eisenhower-matrix',
        name: 'Eisenhower Matrix',
        page: 22,
        description: 'Feature prioritization by urgency and importance',
        required: false,
        contentFields: [
          { key: 'doFirst', type: 'array', description: 'Important & Urgent' },
          { key: 'schedule', type: 'array', description: 'Important & Not Urgent' },
          { key: 'delegate', type: 'array', description: 'Not Important & Urgent' },
          { key: 'eliminate', type: 'array', description: 'Not Important & Not Urgent' },
          { key: 'rationale', type: 'string', description: 'Prioritization rationale' }
        ],
        guidelines: [
          'Be honest about what to eliminate',
          'Show strategic thinking',
          'Connect to resource constraints',
          'Explain tradeoff decisions'
        ],
        pdfExtractionHints: ['priority', 'urgent', 'important', 'matrix', 'prioritization', 'tradeoff']
      },
      {
        id: 'design-explorations-tradeoffs',
        name: 'Design Explorations & Tradeoffs',
        page: 23,
        description: 'Design alternatives, constraints, and decision rationale (ENHANCED for 2025)',
        required: true,
        isEnhanced: true,
        contentFields: [
          { key: 'designAlternatives', type: 'array', description: 'Design options considered', itemFields: ['name', 'description', 'pros', 'cons', 'visual'] },
          { key: 'technicalConstraints', type: 'array', description: 'Technical limitations' },
          { key: 'businessConstraints', type: 'array', description: 'Business limitations' },
          { key: 'aiModelConstraints', type: 'array', description: 'AI/ML model constraints (NEW)', isNew: true },
          { key: 'decisionRationale', type: 'string', description: 'Why final direction was chosen' },
          { key: 'tradeoffsMade', type: 'array', description: 'Explicit tradeoffs made' }
        ],
        guidelines: [
          'Show at least 2-3 alternatives considered',
          'Be explicit about tradeoffs',
          'Connect decisions to constraints',
          'Show strategic thinking'
        ],
        pdfExtractionHints: ['alternative', 'option', 'exploration', 'tradeoff', 'decision', 'constraint', 'consideration']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 6: PROCESS & EXECUTION
  // ═══════════════════════════════════════════════════════════════════════════
  processExecution: {
    id: 'process-execution',
    name: 'Process & Execution',
    description: 'How the work was done - task flows, system contributions, challenges',
    order: 6,
    sections: [
      {
        id: 'task-mapping',
        name: 'Task Mapping',
        page: 24,
        description: 'User tasks and workflows mapped',
        required: false,
        contentFields: [
          { key: 'tasks', type: 'array', description: 'User tasks identified', itemFields: ['task', 'frequency', 'importance', 'currentPainPoints'] },
          { key: 'taskFlow', type: 'object', description: 'Task flow diagram' },
          { key: 'touchpoints', type: 'array', description: 'Key touchpoints' }
        ],
        guidelines: [
          'Focus on key user tasks',
          'Show current vs. improved state',
          'Include edge cases',
          'Connect to design decisions'
        ],
        pdfExtractionHints: ['task', 'workflow', 'step', 'action', 'process', 'flow']
      },
      {
        id: 'taskflows',
        name: 'Taskflows',
        page: 25,
        description: 'Detailed user journey and task flow diagrams',
        required: false,
        contentFields: [
          { key: 'flows', type: 'array', description: 'Task flows', itemFields: ['name', 'description', 'steps', 'diagram'] },
          { key: 'decisionPoints', type: 'array', description: 'Key decision points' },
          { key: 'errorStates', type: 'array', description: 'Error and edge cases' }
        ],
        guidelines: [
          'Show happy path and edge cases',
          'Include decision points',
          'Show error handling',
          'Keep visually clean'
        ],
        pdfExtractionHints: ['flow', 'journey', 'path', 'step', 'sequence', 'diagram']
      },
      {
        id: 'design-system-contribution',
        name: 'Design System Contribution',
        page: 26,
        description: 'Components and patterns contributed to design system (NEW for 2025)',
        required: false,
        isNew: true,
        contentFields: [
          { key: 'components', type: 'array', description: 'Components created/modified', itemFields: ['name', 'description', 'usage', 'visual'] },
          { key: 'patterns', type: 'array', description: 'Patterns established' },
          { key: 'guidelines', type: 'array', description: 'Guidelines written' },
          { key: 'adoption', type: 'string', description: 'How contributions were adopted' }
        ],
        guidelines: [
          'Show scalable thinking',
          'Include component documentation',
          'Show adoption by other teams',
          'Highlight reusability'
        ],
        pdfExtractionHints: ['design system', 'component', 'pattern', 'guideline', 'library', 'token', 'style guide']
      },
      {
        id: 'challenges-obstacles',
        name: 'Challenges/Obstacles',
        page: 27,
        description: 'Real constraints navigated, framed as catalysts',
        required: false,
        contentFields: [
          { key: 'challenges', type: 'array', description: 'Challenges faced', itemFields: ['challenge', 'context', 'approach', 'resolution'] },
          { key: 'lessonsLearned', type: 'array', description: 'What was learned' }
        ],
        guidelines: [
          'Frame challenges positively',
          'Show problem-solving ability',
          'Be specific, not vague',
          'Include resolution and learning'
        ],
        pdfExtractionHints: ['challenge', 'obstacle', 'difficulty', 'problem', 'blocker', 'setback']
      },
      {
        id: 'turning-point',
        name: 'Turning Point',
        page: 28,
        description: 'The AHA moment that changed project direction',
        required: false,
        contentFields: [
          { key: 'situation', type: 'string', description: 'Context before the turning point' },
          { key: 'insight', type: 'string', description: 'The key realization' },
          { key: 'impact', type: 'string', description: 'How it changed the project' },
          { key: 'evidence', type: 'string', description: 'What triggered this insight' }
        ],
        guidelines: [
          'Create narrative drama',
          'Show intellectual humility',
          'Connect to better outcome',
          'Keep concise and impactful'
        ],
        pdfExtractionHints: ['turning point', 'realization', 'breakthrough', 'pivot', 'shift', 'aha moment']
      },
      {
        id: 'validation-iteration',
        name: 'Validation & Iteration',
        page: 29,
        description: 'Testing cycles and design improvements (NEW for 2025)',
        required: true,
        isNew: true,
        contentFields: [
          { key: 'testingRounds', type: 'array', description: 'Testing iterations', itemFields: ['round', 'method', 'participants', 'findings', 'changes'] },
          { key: 'iterationHighlights', type: 'array', description: 'Key design iterations' },
          { key: 'validationMetrics', type: 'array', description: 'How success was validated' }
        ],
        guidelines: [
          'Show iterative improvement',
          'Include before/after for each iteration',
          'Connect findings to changes',
          'Show validation of final design'
        ],
        pdfExtractionHints: ['test', 'validation', 'iteration', 'feedback', 'usability', 'prototype', 'A/B']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 7: OUTCOME
  // ═══════════════════════════════════════════════════════════════════════════
  outcome: {
    id: 'outcome',
    name: 'Outcome',
    description: 'Final designs, impact, and reflections',
    order: 7,
    sections: [
      {
        id: 'final-designs',
        name: 'Final Designs',
        page: 30,
        description: 'Polished final UI with key flows and annotations',
        required: true,
        contentFields: [
          { key: 'screens', type: 'array', description: 'Final screen designs', itemFields: ['name', 'description', 'annotations', 'image'] },
          { key: 'flows', type: 'array', description: 'Key user flows' },
          { key: 'interactions', type: 'array', description: 'Microinteractions and animations' },
          { key: 'prototypeLink', type: 'string', description: 'Interactive prototype URL' }
        ],
        guidelines: [
          'Show 3-5 key screens, not entire product',
          'Include clear annotations',
          'Show key flows',
          'Include prototype link if available'
        ],
        pdfExtractionHints: ['final design', 'solution', 'screen', 'interface', 'UI', 'mockup']
      },
      {
        id: 'business-impact',
        name: 'Business Impact',
        page: 31,
        description: 'Comprehensive business results (ENHANCED for 2025)',
        required: true,
        isEnhanced: true,
        contentFields: [
          { key: 'quantitativeMetrics', type: 'array', description: 'Hard metrics and KPIs', itemFields: ['metric', 'before', 'after', 'improvement'] },
          { key: 'qualitativeFeedback', type: 'array', description: 'User and stakeholder feedback' },
          { key: 'behavioralChanges', type: 'array', description: 'Changes in user behavior' },
          { key: 'longTermSuccess', type: 'string', description: 'Long-term product success indicators' }
        ],
        guidelines: [
          'Lead with metrics if available',
          'Include qualitative alongside quantitative',
          'Show behavioral changes',
          'Connect impact to original problem'
        ],
        pdfExtractionHints: ['impact', 'result', 'outcome', 'metric', 'improvement', 'success', 'KPI', 'ROI']
      },
      {
        id: 'design-system-impact',
        name: 'Design System Impact',
        page: 32,
        description: 'Scalable patterns and system contributions (NEW for 2025)',
        required: false,
        isNew: true,
        contentFields: [
          { key: 'componentsCreated', type: 'array', description: 'New components added to system' },
          { key: 'patternsEstablished', type: 'array', description: 'New patterns documented' },
          { key: 'adoptionRate', type: 'string', description: 'How widely adopted' },
          { key: 'timeSaved', type: 'string', description: 'Efficiency gains for team' }
        ],
        guidelines: [
          'Quantify reuse where possible',
          'Show adoption by other teams',
          'Include efficiency gains',
          'Demonstrate systems thinking'
        ],
        pdfExtractionHints: ['design system', 'component', 'pattern', 'reuse', 'adoption', 'scale']
      },
      {
        id: 'ui-ux-improvements',
        name: 'UI/UX Improvements',
        page: 33,
        description: 'Before/after comparisons with improvements',
        required: false,
        contentFields: [
          { key: 'comparisons', type: 'array', description: 'Before/after comparisons', itemFields: ['area', 'before', 'after', 'improvement', 'metric'] },
          { key: 'overallImprovement', type: 'string', description: 'Summary of UX improvements' }
        ],
        guidelines: [
          'Use consistent framing for before/after',
          'Attach metrics to improvements',
          'Focus on functional improvements',
          'Keep to 3-5 key comparisons'
        ],
        pdfExtractionHints: ['before', 'after', 'improvement', 'change', 'enhancement', 'comparison']
      },
      {
        id: 'team-organizational-impact',
        name: 'Team & Organizational Impact',
        page: 34,
        description: 'Process improvements and collaboration wins (NEW for 2025)',
        required: false,
        isNew: true,
        contentFields: [
          { key: 'processImprovements', type: 'array', description: 'Process changes introduced' },
          { key: 'collaborationWins', type: 'array', description: 'Cross-functional wins' },
          { key: 'mentorship', type: 'array', description: 'Mentorship and knowledge sharing' },
          { key: 'cultureImpact', type: 'string', description: 'Impact on team culture' }
        ],
        guidelines: [
          'Show leadership beyond design',
          'Include mentorship contributions',
          'Highlight process innovations',
          'Demonstrate organizational influence'
        ],
        pdfExtractionHints: ['team', 'organization', 'process', 'collaboration', 'mentorship', 'culture', 'influence']
      },
      {
        id: 'reflection-next-steps',
        name: 'Reflection & Next Steps',
        page: 35,
        description: 'Learnings, what would change, and future vision',
        required: true,
        contentFields: [
          { key: 'keyLearnings', type: 'array', description: 'What was learned' },
          { key: 'whatWouldChange', type: 'array', description: 'What would be done differently' },
          { key: 'futureIterations', type: 'array', description: 'Planned future improvements' },
          { key: 'personalGrowth', type: 'string', description: 'How you grew from this project' }
        ],
        guidelines: [
          'Be specific to this project',
          'Show intellectual humility',
          'Include actionable next steps',
          'End with forward momentum'
        ],
        pdfExtractionHints: ['learning', 'reflection', 'next step', 'future', 'improvement', 'iteration', 'growth']
      }
    ]
  }
};

// Get all sections flattened
export const getAllSections = () => {
  const allSections = [];
  Object.values(caseStudyIA2025).forEach(category => {
    if (category.sections) {
      allSections.push(...category.sections);
    }
  });
  return allSections;
};

// Get section by ID
export const getSectionById = (sectionId) => {
  const allSections = getAllSections();
  return allSections.find(s => s.id === sectionId);
};

// Get required sections
export const getRequiredSections = () => {
  return getAllSections().filter(s => s.required);
};

// Get new sections for 2025
export const getNewSections = () => {
  return getAllSections().filter(s => s.isNew);
};

// Get enhanced sections for 2025
export const getEnhancedSections = () => {
  return getAllSections().filter(s => s.isEnhanced);
};

// Get sections by category
export const getSectionsByCategory = (categoryId) => {
  const category = caseStudyIA2025[categoryId];
  return category ? category.sections : [];
};

// Get all categories
export const getCategories = () => {
  return Object.entries(caseStudyIA2025).map(([key, value]) => ({
    id: key,
    name: value.name,
    description: value.description,
    order: value.order,
    isNew: value.isNew,
    sectionCount: value.sections?.length || 0
  }));
};

// PDF extraction helper - get all hints
export const getAllExtractionHints = () => {
  const hints = {};
  getAllSections().forEach(section => {
    hints[section.id] = section.pdfExtractionHints || [];
  });
  return hints;
};

export default caseStudyIA2025;
