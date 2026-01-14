// Case Study Templates - Updated for 2025
// All templates follow the same IA structure from caseStudyIA2025.js
// Each template adapts the structure to its unique visual style

import { caseStudyIA2025, getAllSections, getCategories } from './caseStudyIA2025';

// Shared content structure - all templates use the same IA
const contentStructure2025 = [
  // ═══════════════════════════════════════════════════════════════════════════
  // HOOK - Pages 1-5
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'intriguing-title',
    title: 'Intriguing Title',
    type: 'hook',
    page: 1,
    category: 'hook',
    description: 'Impact-focused title with transformation verb',
    contentTypes: ['title', 'subtitle', 'heroImage'],
    guidelines: [
      'Lead with outcome, not product name',
      'Use transformation verbs (reducing, eliminating, unlocking)',
      'Include numbers when available',
      'Max 12 words for title'
    ]
  },
  {
    id: 'project-overview',
    title: 'Project Overview + Role',
    type: 'hook',
    page: 2,
    category: 'hook',
    description: 'Two-column overview with role, timeline, team, constraints',
    contentTypes: ['grid', 'text', 'stats'],
    guidelines: [
      'Fit in single screen without scrolling',
      'Show team structure explicitly',
      'Present constraints as opportunities',
      'Anchor in scale/risk/impact'
    ],
    subsections: [
      'Project summary (2-3 sentences)',
      'Your role and responsibilities',
      'Timeline and duration',
      'Team composition',
      'Tools and methods',
      'Key deliverables'
    ]
  },
  {
    id: 'problem-statement',
    title: 'Problem Statement',
    type: 'hook',
    page: 3,
    category: 'hook',
    description: 'Core problem distilled, then expanded with stakes',
    contentTypes: ['text', 'quote', 'image'],
    guidelines: [
      'Distilled core problem (1 sentence, large type)',
      'Root cause (2-3 paragraphs)',
      'Business stakes (what happens if unsolved)',
      'Tie to friction/confusion/risk/cost'
    ]
  },
  {
    id: 'business-impact-preview',
    title: 'Business Impact Preview',
    type: 'hook',
    page: 4,
    category: 'hook',
    isNew: true,
    description: 'Key metrics/outcomes upfront to hook reader',
    contentTypes: ['stats', 'metrics', 'text'],
    guidelines: [
      'Show 1 primary metric prominently',
      '2-3 supporting metrics',
      'Tie metrics to business outcomes',
      'If no hard metrics, use qualitative indicators'
    ]
  },
  {
    id: 'teaser-visual',
    title: 'Teaser Visual',
    type: 'hook',
    page: 5,
    category: 'hook',
    description: 'One high-impact before/after or transformation visual',
    contentTypes: ['image', 'gif', 'beforeAfter'],
    guidelines: [
      'Single visual only',
      'Show highest-leverage improvement',
      '2-3 bullets max for impact',
      'Not full solution—just proof of value'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // STRATEGIC CONTEXT - Pages 6-9 (NEW SECTION)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'design-vision-strategy',
    title: 'Design Vision & Strategy',
    type: 'strategic-context',
    page: 6,
    category: 'strategicContext',
    isNew: true,
    description: 'High-level design direction and strategic alignment',
    contentTypes: ['text', 'grid', 'principles'],
    guidelines: [
      'Articulate the "why" behind design decisions',
      'Connect design to business strategy',
      'Show systems thinking',
      'Demonstrate strategic influence'
    ],
    subsections: [
      'Design vision statement',
      'Strategic approach',
      'Design principles guiding the work',
      'North star metric or goal'
    ]
  },
  {
    id: 'cross-functional-alignment',
    title: 'Cross-Functional Alignment',
    type: 'strategic-context',
    page: 7,
    category: 'strategicContext',
    isNew: true,
    description: 'Collaboration with PM, Engineering, Data Science',
    contentTypes: ['grid', 'text', 'quote'],
    guidelines: [
      'Show collaborative leadership',
      'Demonstrate influence without authority',
      'Highlight cross-functional wins',
      'Show how you navigated disagreements'
    ],
    subsections: [
      'PM Partnership',
      'Engineering Collaboration',
      'Data Science Coordination',
      'Other key stakeholders'
    ]
  },
  {
    id: 'technical-constraints',
    title: 'Technical Constraints',
    type: 'strategic-context',
    page: 8,
    category: 'strategicContext',
    isNew: true,
    description: 'Technical limitations that shaped design decisions',
    contentTypes: ['text', 'grid'],
    guidelines: [
      'Frame constraints as design opportunities',
      'Show technical understanding',
      'Demonstrate problem-solving within limits',
      'Highlight creative solutions'
    ]
  },
  {
    id: 'ai-ml-considerations',
    title: 'AI/ML Considerations',
    type: 'strategic-context',
    page: 9,
    category: 'strategicContext',
    isNew: true,
    isCriticalForAI: true,
    description: 'Model capabilities, trust, ethics (CRITICAL for AI roles)',
    contentTypes: ['text', 'grid', 'diagram'],
    guidelines: [
      'Show understanding of AI/ML constraints',
      'Demonstrate ethical design thinking',
      'Highlight trust-building strategies',
      'Show how you designed for uncertainty'
    ],
    subsections: [
      'Model Capabilities & Limitations',
      'Infrastructure Constraints',
      'Trust & Explainability Strategy',
      'Ethical Considerations'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DISCOVERY & RESEARCH - Pages 10-16
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'our-process',
    title: 'Our Process',
    type: 'discovery-research',
    page: 10,
    category: 'discoveryResearch',
    description: 'Design process overview (Double Diamond, Design Thinking)',
    contentTypes: ['grid', 'image', 'text'],
    guidelines: [
      'Show intentional process selection',
      'Explain why this process fit the project',
      'Highlight adaptations made',
      'Keep visual and scannable'
    ]
  },
  {
    id: 'product-users-personas',
    title: 'Product Users & Personas',
    type: 'discovery-research',
    page: 11,
    category: 'discoveryResearch',
    description: 'Target users, segments, and detailed personas',
    contentTypes: ['persona', 'grid', 'image', 'text'],
    guidelines: [
      'Ground personas in research data',
      'Include behavioral details, not just demographics',
      'Show persona evolution during project',
      'Connect personas to design decisions'
    ]
  },
  {
    id: 'user-needs',
    title: 'User Needs',
    type: 'discovery-research',
    page: 12,
    category: 'discoveryResearch',
    description: 'Core user requirements and desires',
    contentTypes: ['text', 'grid', 'list'],
    guidelines: [
      'Frame as user jobs or goals',
      'Prioritize by impact and frequency',
      'Show evidence for each need',
      'Connect needs to features'
    ]
  },
  {
    id: 'user-business-challenges',
    title: 'User & Business Challenges',
    type: 'discovery-research',
    page: 13,
    category: 'discoveryResearch',
    description: 'Pain points from user and business perspectives',
    contentTypes: ['text', 'grid', 'quote'],
    guidelines: [
      'Balance user and business perspectives',
      'Show tension and how it was resolved',
      'Include evidence (quotes, data)',
      'Prioritize by severity'
    ]
  },
  {
    id: 'quantitative-research',
    title: 'Quantitative Research',
    type: 'discovery-research',
    page: 14,
    category: 'discoveryResearch',
    description: 'Survey data, analytics, and statistical findings',
    contentTypes: ['stats', 'grid', 'chart', 'text'],
    guidelines: [
      'Show statistical rigor',
      'Visualize data clearly',
      'Connect data to design decisions',
      'Include confidence levels where relevant'
    ]
  },
  {
    id: 'competitor-analysis',
    title: 'Competitor Analysis',
    type: 'discovery-research',
    page: 15,
    category: 'discoveryResearch',
    description: 'Market landscape and competitive positioning',
    contentTypes: ['grid', 'image', 'text', 'comparison'],
    guidelines: [
      'Focus on UX patterns, not just features',
      'Identify gaps as opportunities',
      'Show how analysis influenced design',
      'Include direct and indirect competitors'
    ]
  },
  {
    id: 'key-insights',
    title: 'Key Insights',
    type: 'discovery-research',
    page: 16,
    category: 'discoveryResearch',
    description: 'Synthesized insights tied to business goals',
    contentTypes: ['text', 'grid', 'quote'],
    guidelines: [
      'Show causal chain: insight → decision',
      'Tie insights to business goals',
      'Include source attribution',
      'Limit to 3-5 key insights'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROBLEM ANALYSIS - Pages 17-19
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'five-why-analysis',
    title: '5 Why Analysis',
    type: 'problem-analysis',
    page: 17,
    category: 'problemAnalysis',
    description: 'Root cause discovery through iterative questioning',
    contentTypes: ['diagram', 'text', 'flowchart'],
    guidelines: [
      'Show logical progression',
      'Reach genuine root cause',
      'Can have multiple branches',
      'Connect to solution direction'
    ]
  },
  {
    id: 'root-cause-analysis',
    title: 'Root Cause Analysis',
    type: 'problem-analysis',
    page: 18,
    category: 'problemAnalysis',
    description: 'Comprehensive root cause investigation (fishbone)',
    contentTypes: ['diagram', 'text', 'grid'],
    guidelines: [
      'Use established framework',
      'Show systematic analysis',
      'Prioritize root causes',
      'Connect to solution strategy'
    ]
  },
  {
    id: 'objectives-goals',
    title: 'Objectives & Goals',
    type: 'problem-analysis',
    page: 19,
    category: 'problemAnalysis',
    description: 'User, Business, and Technical goals',
    contentTypes: ['grid', 'text', 'list'],
    guidelines: [
      'Balance all three goal types',
      'Make goals measurable (SMART)',
      'Show goal alignment/conflicts',
      'Define success criteria'
    ],
    subsections: [
      'User Goals',
      'Business Goals',
      'Technical Goals (NEW)',
      'Success Metrics'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // IDEATION & PRIORITIZATION - Pages 20-23
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'unique-features',
    title: 'Unique Features',
    type: 'ideation-prioritization',
    page: 20,
    category: 'ideationPrioritization',
    description: 'Differentiating features and value propositions',
    contentTypes: ['grid', 'text', 'list'],
    guidelines: [
      'Focus on differentiation',
      'Tie to user needs and business goals',
      'Show competitive advantage',
      'Keep focused on 3-5 key features'
    ]
  },
  {
    id: 'features-functionalities',
    title: 'Features & Functionalities',
    type: 'ideation-prioritization',
    page: 21,
    category: 'ideationPrioritization',
    description: 'Complete feature set addressing user needs',
    contentTypes: ['grid', 'text', 'icons'],
    guidelines: [
      'Map features to user needs',
      'Show prioritization rationale',
      'Include must-have vs nice-to-have',
      'Consider MVP scope'
    ]
  },
  {
    id: 'eisenhower-matrix',
    title: 'Eisenhower Matrix',
    type: 'ideation-prioritization',
    page: 22,
    category: 'ideationPrioritization',
    description: 'Feature prioritization by urgency and importance',
    contentTypes: ['matrix', 'grid', 'text'],
    guidelines: [
      'Be honest about what to eliminate',
      'Show strategic thinking',
      'Connect to resource constraints',
      'Explain tradeoff decisions'
    ],
    subsections: [
      'Do First (Important & Urgent)',
      'Schedule (Important & Not Urgent)',
      'Delegate (Not Important & Urgent)',
      'Eliminate (Not Important & Not Urgent)'
    ]
  },
  {
    id: 'design-explorations-tradeoffs',
    title: 'Design Explorations & Tradeoffs',
    type: 'ideation-prioritization',
    page: 23,
    category: 'ideationPrioritization',
    isEnhanced: true,
    description: 'Design alternatives, constraints, and decision rationale',
    contentTypes: ['image', 'grid', 'text', 'comparison'],
    guidelines: [
      'Show at least 2-3 alternatives considered',
      'Be explicit about tradeoffs',
      'Connect decisions to constraints',
      'Show strategic thinking'
    ],
    subsections: [
      'Design Alternatives Considered',
      'Technical Constraints',
      'Business Constraints',
      'AI Model Constraints (NEW)',
      'Strategic Decision Rationale'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROCESS & EXECUTION - Pages 24-29
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'task-mapping',
    title: 'Task Mapping',
    type: 'process-execution',
    page: 24,
    category: 'processExecution',
    description: 'User tasks and workflows mapped',
    contentTypes: ['table', 'grid', 'text'],
    guidelines: [
      'Focus on key user tasks',
      'Show current vs. improved state',
      'Include edge cases',
      'Connect to design decisions'
    ]
  },
  {
    id: 'taskflows',
    title: 'Taskflows',
    type: 'process-execution',
    page: 25,
    category: 'processExecution',
    description: 'Detailed user journey and task flow diagrams',
    contentTypes: ['flowchart', 'diagram', 'text'],
    guidelines: [
      'Show happy path and edge cases',
      'Include decision points',
      'Show error handling',
      'Keep visually clean'
    ]
  },
  {
    id: 'design-system-contribution',
    title: 'Design System Contribution',
    type: 'process-execution',
    page: 26,
    category: 'processExecution',
    isNew: true,
    description: 'Components and patterns contributed to design system',
    contentTypes: ['grid', 'image', 'text', 'components'],
    guidelines: [
      'Show scalable thinking',
      'Include component documentation',
      'Show adoption by other teams',
      'Highlight reusability'
    ]
  },
  {
    id: 'challenges-obstacles',
    title: 'Challenges/Obstacles',
    type: 'process-execution',
    page: 27,
    category: 'processExecution',
    description: 'Real constraints navigated, framed as catalysts',
    contentTypes: ['text', 'grid'],
    guidelines: [
      'Frame challenges positively',
      'Show problem-solving ability',
      'Be specific, not vague',
      'Include resolution and learning'
    ]
  },
  {
    id: 'turning-point',
    title: 'Turning Point',
    type: 'process-execution',
    page: 28,
    category: 'processExecution',
    description: 'The AHA moment that changed project direction',
    contentTypes: ['text', 'image', 'quote'],
    guidelines: [
      'Create narrative drama',
      'Show intellectual humility',
      'Connect to better outcome',
      'Keep concise and impactful'
    ]
  },
  {
    id: 'validation-iteration',
    title: 'Validation & Iteration',
    type: 'process-execution',
    page: 29,
    category: 'processExecution',
    isNew: true,
    description: 'Testing cycles and design improvements',
    contentTypes: ['grid', 'image', 'text', 'beforeAfter'],
    guidelines: [
      'Show iterative improvement',
      'Include before/after for each iteration',
      'Connect findings to changes',
      'Show validation of final design'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OUTCOME - Pages 30-35
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'final-designs',
    title: 'Final Designs',
    type: 'outcome',
    page: 30,
    category: 'outcome',
    description: 'Polished final UI with key flows and annotations',
    contentTypes: ['image', 'grid', 'text', 'annotations'],
    guidelines: [
      'Show 3-5 key screens, not entire product',
      'Include clear annotations',
      'Show key flows',
      'Include prototype link if available'
    ]
  },
  {
    id: 'business-impact',
    title: 'Business Impact',
    type: 'outcome',
    page: 31,
    category: 'outcome',
    isEnhanced: true,
    description: 'Comprehensive business results',
    contentTypes: ['stats', 'grid', 'text', 'quote'],
    guidelines: [
      'Lead with metrics if available',
      'Include qualitative alongside quantitative',
      'Show behavioral changes',
      'Connect impact to original problem'
    ],
    subsections: [
      'Quantitative Metrics',
      'Qualitative Feedback',
      'Behavioral Changes',
      'Long-term Product Success'
    ]
  },
  {
    id: 'design-system-impact',
    title: 'Design System Impact',
    type: 'outcome',
    page: 32,
    category: 'outcome',
    isNew: true,
    description: 'Scalable patterns and system contributions',
    contentTypes: ['grid', 'image', 'text', 'stats'],
    guidelines: [
      'Quantify reuse where possible',
      'Show adoption by other teams',
      'Include efficiency gains',
      'Demonstrate systems thinking'
    ]
  },
  {
    id: 'ui-ux-improvements',
    title: 'UI/UX Improvements',
    type: 'outcome',
    page: 33,
    category: 'outcome',
    description: 'Before/after comparisons with improvements',
    contentTypes: ['beforeAfter', 'image', 'grid', 'text'],
    guidelines: [
      'Use consistent framing for before/after',
      'Attach metrics to improvements',
      'Focus on functional improvements',
      'Keep to 3-5 key comparisons'
    ]
  },
  {
    id: 'team-organizational-impact',
    title: 'Team & Organizational Impact',
    type: 'outcome',
    page: 34,
    category: 'outcome',
    isNew: true,
    description: 'Process improvements and collaboration wins',
    contentTypes: ['text', 'grid', 'list'],
    guidelines: [
      'Show leadership beyond design',
      'Include mentorship contributions',
      'Highlight process innovations',
      'Demonstrate organizational influence'
    ],
    subsections: [
      'Process improvements introduced',
      'Cross-functional collaboration wins',
      'Mentorship contributions'
    ]
  },
  {
    id: 'reflection-next-steps',
    title: 'Reflection & Next Steps',
    type: 'outcome',
    page: 35,
    category: 'outcome',
    description: 'Learnings, what would change, and future vision',
    contentTypes: ['text', 'grid'],
    guidelines: [
      'Be specific to this project',
      'Show intellectual humility',
      'Include actionable next steps',
      'End with forward momentum'
    ]
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// TEMPLATE DEFINITIONS - All follow the same IA with unique visual styles
// ═══════════════════════════════════════════════════════════════════════════

export const templates = {
  // ═══════════════════════════════════════════════════════════════════════════
  // Template 1: SIMON PAN (UBER) - Outcome-First Narrative
  // ═══════════════════════════════════════════════════════════════════════════
  simonpan: {
    id: 'simonpan',
    name: 'Simon Pan (Uber)',
    description: 'Outcome-first narrative with minimal black & white aesthetic. Full-width images, metrics-driven storytelling.',
    thumbnail: 'simonpan',
    inspiration: 'simonpan.com/work/uber/',

    layout: {
      hero: 'full-width-image',
      sections: 'single-column-narrative',
      spacing: 'generous',
      maxWidth: '680px'
    },

    colors: {
      background: '#ffffff',
      text: '#000000',
      textSecondary: '#666666',
      accent: '#000000',
      divider: '#e5e5e5',
      highlight: '#f5f5f5'
    },

    typography: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heroTitle: '42px',
      sectionTitle: '32px',
      subsectionTitle: '24px',
      body: '18px',
      caption: '14px',
      lineHeight: '1.7'
    },

    features: [
      'Full-width hero',
      'Minimal B&W aesthetic',
      'Bullet-point metrics',
      'HR section dividers',
      'Narrative flow',
      'Before/after comparisons',
      'Annotated visuals'
    ],

    colorSchemes: ['light'],

    sectionStyles: {
      hero: {
        padding: 'py-0',
        titleSize: 'text-4xl md:text-5xl',
        layout: 'full-width-image',
        showMetrics: false
      },
      content: {
        padding: 'py-12',
        layout: 'narrative',
        showDividers: true
      },
      subsection: {
        padding: 'py-8',
        layout: 'nested-narrative'
      }
    },

    contentOrder: contentStructure2025,
    emphasis: 'outcome-first-storytelling',
    visualRatio: 0.65,

    // Template-specific adaptations
    templateAdaptations: {
      'business-impact-preview': { position: 'early', prominence: 'high' },
      'strategic-context': { style: 'compact' },
      'ai-ml-considerations': { optional: true }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Template 2: MORITZ - Process Journey (Comprehensive Documentation)
  // ═══════════════════════════════════════════════════════════════════════════
  moritz: {
    id: 'moritz',
    name: 'Process Journey',
    description: 'Comprehensive design journey from concept to implementation with method explanations.',
    thumbnail: 'moritz',
    inspiration: 'moritzoesterlau.de',

    layout: {
      hero: 'conversational',
      sections: 'step-by-step',
      spacing: 'generous',
      maxWidth: '900px'
    },

    colors: {
      background: '#ffffff',
      text: '#1a1a1a',
      textSecondary: '#666666',
      accent: '#2563eb',
      divider: '#e5e7eb',
      highlight: '#f3f4f6'
    },

    typography: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heroTitle: '40px',
      sectionTitle: '32px',
      subsectionTitle: '24px',
      body: '17px',
      caption: '14px',
      lineHeight: '1.7'
    },

    features: [
      'Full process documentation',
      'Method explanations',
      'Learning outcomes',
      'Accessible layout',
      'Step-by-step narrative',
      'Educational tone'
    ],

    colorSchemes: ['light'],

    sectionStyles: {
      hero: {
        padding: 'py-16 md:py-24',
        titleSize: 'text-3xl md:text-5xl',
        layout: 'conversational',
        showTags: true
      },
      content: {
        padding: 'py-12',
        layout: 'documented'
      },
      subsection: {
        padding: 'py-8',
        layout: 'step-numbered'
      }
    },

    contentOrder: contentStructure2025,
    emphasis: 'comprehensive-methodology',
    visualRatio: 0.55,

    templateAdaptations: {
      'our-process': { prominence: 'high', expanded: true },
      'validation-iteration': { prominence: 'high' },
      'design-system-contribution': { style: 'educational' }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Template 3: LOLA - Data-Driven Leadership
  // ═══════════════════════════════════════════════════════════════════════════
  lola: {
    id: 'lola',
    name: 'Data-Driven Leadership',
    description: 'Strategic, metrics-focused presentation with business context and ROI emphasis.',
    thumbnail: 'lola',
    inspiration: 'lolajiang.com',

    layout: {
      hero: 'strategic',
      sections: 'business-focused',
      spacing: 'compact',
      maxWidth: '1100px'
    },

    colors: {
      background: '#ffffff',
      text: '#0a0a0a',
      textSecondary: '#525252',
      accent: '#000000',
      divider: '#e5e5e5',
      highlight: '#f5f5f5'
    },

    typography: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heroTitle: '44px',
      sectionTitle: '34px',
      subsectionTitle: '26px',
      body: '18px',
      caption: '15px',
      lineHeight: '1.6'
    },

    features: [
      'Business metrics forefront',
      'Strategic context',
      'Leadership scope clarity',
      'ROI focused outcomes',
      'Stakeholder alignment',
      'Data-driven decisions'
    ],

    colorSchemes: ['light'],

    sectionStyles: {
      hero: {
        padding: 'py-24 md:py-32',
        titleSize: 'text-4xl md:text-5xl',
        layout: 'strategic',
        showRole: true,
        showMetrics: true
      },
      content: {
        padding: 'py-16',
        layout: 'strategic-grid'
      },
      subsection: {
        padding: 'py-10',
        layout: 'business-focused'
      }
    },

    contentOrder: contentStructure2025,
    emphasis: 'business-value-and-leadership',
    visualRatio: 0.50,

    templateAdaptations: {
      'business-impact-preview': { prominence: 'very-high' },
      'strategic-context': { prominence: 'high', expanded: true },
      'cross-functional-alignment': { prominence: 'high' },
      'business-impact': { prominence: 'very-high' },
      'team-organizational-impact': { prominence: 'high' }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Template 4: GLORIA - Visual Storyteller
  // ═══════════════════════════════════════════════════════════════════════════
  gloria: {
    id: 'gloria',
    name: 'Visual Storyteller',
    description: 'Visual-first presentation with personal branding and creative flair.',
    thumbnail: 'gloria',
    inspiration: 'glorialo.design',

    layout: {
      hero: 'visual-splash',
      sections: 'gallery-driven',
      spacing: 'medium',
      maxWidth: '1200px'
    },

    colors: {
      background: '#ffffff',
      text: '#1a1a1a',
      textSecondary: '#737373',
      accent: '#6366f1',
      divider: '#e5e7eb',
      highlight: '#f9fafb'
    },

    typography: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heroTitle: '56px',
      sectionTitle: '38px',
      subsectionTitle: '28px',
      body: '18px',
      caption: '14px',
      lineHeight: '1.6'
    },

    features: [
      'Visual-first layouts',
      'Image galleries',
      'Personal branding',
      'Creative animations',
      'Bold typography',
      'Storytelling through visuals'
    ],

    colorSchemes: ['light'],

    sectionStyles: {
      hero: {
        padding: 'py-16 md:py-24',
        titleSize: 'text-5xl md:text-7xl',
        layout: 'visual-splash',
        showAnimations: true
      },
      content: {
        padding: 'py-12',
        layout: 'gallery-grid'
      },
      subsection: {
        padding: 'py-8',
        layout: 'visual-focused'
      }
    },

    contentOrder: contentStructure2025,
    emphasis: 'visual-impact-and-creativity',
    visualRatio: 0.70,

    templateAdaptations: {
      'teaser-visual': { prominence: 'very-high' },
      'final-designs': { prominence: 'very-high', style: 'gallery' },
      'design-system-contribution': { style: 'visual' },
      'ui-ux-improvements': { style: 'gallery-comparison' }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Template 5: PRATIBHA - Clean Professional
  // ═══════════════════════════════════════════════════════════════════════════
  pratibha: {
    id: 'pratibha',
    name: 'Clean Professional',
    description: 'Clean grid layout with thorough, user-centric case studies and professional polish.',
    thumbnail: 'pratibha',
    inspiration: 'pratibhajoshi.com',

    layout: {
      hero: 'professional',
      sections: 'grid-based',
      spacing: 'balanced',
      maxWidth: '1000px'
    },

    colors: {
      background: '#ffffff',
      text: '#171717',
      textSecondary: '#525252',
      accent: '#000000',
      divider: '#e5e5e5',
      highlight: '#f5f5f5'
    },

    typography: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heroTitle: '48px',
      sectionTitle: '36px',
      subsectionTitle: '26px',
      body: '17px',
      caption: '14px',
      lineHeight: '1.65'
    },

    features: [
      'Clean grid structure',
      'User-centric approach',
      'Thorough documentation',
      'Professional polish',
      'Balanced visual/text ratio',
      'Clear hierarchy'
    ],

    colorSchemes: ['light'],

    sectionStyles: {
      hero: {
        padding: 'py-20 md:py-28',
        titleSize: 'text-4xl md:text-6xl',
        layout: 'professional-centered',
        showMentions: true
      },
      content: {
        padding: 'py-16',
        layout: 'grid-structured'
      },
      subsection: {
        padding: 'py-10',
        layout: 'grid-balanced'
      }
    },

    contentOrder: contentStructure2025,
    emphasis: 'user-centered-thoroughness',
    visualRatio: 0.60,

    templateAdaptations: {
      'product-users-personas': { prominence: 'high' },
      'user-needs': { prominence: 'high' },
      'validation-iteration': { prominence: 'high' }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Template 6: CAREX - Comprehensive Complete (Full UX Process)
  // ═══════════════════════════════════════════════════════════════════════════
  carex: {
    id: 'carex',
    name: 'Carex Complete',
    description: 'Most comprehensive UX case study with full research, analysis frameworks, and Double Diamond process.',
    thumbnail: 'carex',
    inspiration: 'Figma Community - Carex Template',

    layout: {
      hero: 'centered-minimal',
      sections: 'comprehensive-full',
      spacing: 'generous',
      maxWidth: '1200px'
    },

    colors: {
      background: '#ffffff',
      text: '#000000',
      textSecondary: '#666666',
      accent: '#188AEC',
      divider: '#e5e5e5',
      highlight: '#f5f5f5',
      extraLight: '#F6FAFE'
    },

    typography: {
      fontFamily: "'Poppins', sans-serif",
      heroTitle: '72px',
      sectionTitle: '48px',
      subsectionTitle: '32px',
      body: '26px',
      caption: '18px',
      lineHeight: '1.826'
    },

    features: [
      'Double Diamond process',
      'User Personas',
      'Competitor Analysis',
      '5 Why Analysis',
      'Root Cause Analysis',
      'Prioritization Matrix',
      'Task Mapping',
      'Complete UX frameworks',
      'All 2025 IA sections'
    ],

    colorSchemes: ['light'],

    sectionStyles: {
      hero: {
        padding: 'py-16 md:py-24',
        titleSize: 'text-4xl md:text-6xl',
        layout: 'centered-minimal',
        showTag: true
      },
      content: {
        padding: 'py-12',
        layout: 'comprehensive-structured'
      },
      subsection: {
        padding: 'py-8',
        layout: 'framework-focused'
      }
    },

    contentOrder: contentStructure2025,
    emphasis: 'comprehensive-ux-frameworks',
    visualRatio: 0.60,

    // Carex shows ALL sections with full prominence
    templateAdaptations: {
      'all': { prominence: 'high', expanded: true }
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

// Get template by ID
export const getTemplate = (templateId) => {
  return templates[templateId] || templates.pratibha;
};

// Get all templates
export const getAllTemplates = () => {
  return Object.values(templates);
};

// Get sections by category
export const getSectionsByCategory = (categoryId) => {
  return contentStructure2025.filter(section => section.category === categoryId);
};

// Get all new sections for 2025
export const getNewSections = () => {
  return contentStructure2025.filter(section => section.isNew);
};

// Get enhanced sections for 2025
export const getEnhancedSections = () => {
  return contentStructure2025.filter(section => section.isEnhanced);
};

// Get sections by type
export const getSectionsByType = (type) => {
  return contentStructure2025.filter(section => section.type === type);
};

// Get template content structure
export const getTemplateContentStructure = (templateId) => {
  const template = getTemplate(templateId);
  return template ? template.contentOrder : contentStructure2025;
};

// Get section by ID
export const getSectionById = (sectionId) => {
  return contentStructure2025.find(section => section.id === sectionId);
};

// Get all categories with their sections
export const getCategoriesWithSections = () => {
  const categories = [
    { id: 'hook', name: 'Hook', order: 1 },
    { id: 'strategicContext', name: 'Strategic Context', order: 2, isNew: true },
    { id: 'discoveryResearch', name: 'Discovery & Research', order: 3 },
    { id: 'problemAnalysis', name: 'Problem Analysis', order: 4 },
    { id: 'ideationPrioritization', name: 'Ideation & Prioritization', order: 5 },
    { id: 'processExecution', name: 'Process & Execution', order: 6 },
    { id: 'outcome', name: 'Outcome', order: 7 }
  ];

  return categories.map(cat => ({
    ...cat,
    sections: getSectionsByCategory(cat.id)
  }));
};

// Export the shared content structure
export const sharedContentStructure = contentStructure2025;

// Legacy section configurations (for backward compatibility)
export const templateSections = {
  'carex-comprehensive': contentStructure2025.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description,
    contentTypes: s.contentTypes
  })),
  standard: contentStructure2025.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description,
    contentTypes: s.contentTypes
  }))
};

export default templates;
