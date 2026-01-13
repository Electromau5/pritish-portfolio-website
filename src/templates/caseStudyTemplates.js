// Case Study Templates - COMPREHENSIVE DETAILED FRAMEWORK
// Updated to integrate full UX Portfolio Documentation Strategy
// Preserves unique design identity while ensuring complete information accessibility
// Structure: Hook → Process → Outcome (with detailed subsections for each)

export const templates = {
  // ═══════════════════════════════════════════════════════════════════════════
  // Template 1: SIMON PAN (UBER) - Outcome-First Narrative
  // ═══════════════════════════════════════════════════════════════════════════
  // Design Philosophy: Minimal black/white, full-width images, generous whitespace
  // Framework Integration: Outcome-first storytelling with 65% visual ratio
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
      maxWidth: '680px' // Narrow for focused reading
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
        padding: 'py-0', // Full bleed
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
    
    // DETAILED CONTENT ORDER - Hook → Process → Outcome
    contentOrder: [
      // ────────────────────────────────────────────────────────────
      // HOOK SECTION (Pages 1-4)
      // ────────────────────────────────────────────────────────────
      {
        id: 'hook-hero-title',
        title: 'Intriguing Title',
        type: 'hook',
        page: 1,
        description: 'Single-sentence value proposition with transformation verb',
        contentTypes: ['title', 'subtitle'],
        guidelines: [
          'Lead with outcome, not product name',
          'Use transformation verbs (reducing, eliminating, unlocking)',
          'Include numbers when available',
          'Max 12 words for title'
        ]
      },
      {
        id: 'hook-project-overview',
        title: 'Project Overview',
        type: 'hook',
        page: 2,
        description: 'Two-column scannable overview with role, timeline, team, constraints',
        contentTypes: ['grid', 'text', 'stats'],
        guidelines: [
          'Fit in single screen without scrolling',
          'Show team structure explicitly',
          'Present constraints as opportunities',
          'Anchor in scale/risk/impact'
        ]
      },
      {
        id: 'hook-problem-statement',
        title: 'Problem Statement',
        type: 'hook',
        page: 3,
        description: 'Core problem distilled to one sentence, then expanded with root cause and stakes',
        contentTypes: ['text', 'quote', 'image'],
        guidelines: [
          'Distilled core problem (1 sentence, large type)',
          'Root cause (2-3 paragraphs)',
          'Business stakes (what happens if unsolved)',
          'Triggering event if applicable',
          'Tie to friction/confusion/risk/cost'
        ]
      },
      {
        id: 'hook-solution-teaser',
        title: 'Solution Teaser',
        type: 'hook',
        page: 4,
        description: 'One high-impact before/after or GIF showing transformation',
        contentTypes: ['image', 'gif', 'stats'],
        guidelines: [
          'Single visual only',
          'Show highest-leverage improvement',
          '2-3 bullets max for impact',
          'Not full solution—just proof of value'
        ]
      },
      
      // ────────────────────────────────────────────────────────────
      // PROCESS SECTION (Pages 5-9)
      // ────────────────────────────────────────────────────────────
      {
        id: 'process-key-insights',
        title: 'Key Insights',
        type: 'process',
        page: 5,
        description: 'The 2-4 insights that actually shaped the solution',
        contentTypes: ['text', 'quote', 'image', 'stats'],
        guidelines: [
          'Show only insights that influenced design',
          'Include source (interview, analytics, research)',
          'Explain implication for design decisions',
          'Use annotated cards, not paragraphs',
          'Present causal chain: insight → decision'
        ],
        subsections: [
          'Insight 1 with source and implication',
          'Insight 2 with source and implication',
          'Insight 3 with source and implication',
          'Insight 4 with source and implication (optional)'
        ]
      },
      {
        id: 'process-design-explorations',
        title: 'Design Explorations & Decision Making',
        type: 'process',
        page: 6,
        description: 'Sequential explorations with decision rationale and tradeoffs',
        contentTypes: ['image', 'text', 'grid'],
        guidelines: [
          'Show 2-3 explorations with "Why this?" annotations',
          'Include decision blocks: intent → reasoning → outcome',
          'Maintain 60-70% visual ratio',
          'Reference earlier insights for narrative tightness',
          'Avoid showing entire Figma boards'
        ],
        subsections: [
          'Exploration 1 with reasoning',
          'Exploration 2 with reasoning',
          'Final direction with decision rationale',
          'Structural changes from exploration'
        ]
      },
      {
        id: 'process-challenges-obstacles',
        title: 'Challenges & Obstacles',
        type: 'process',
        page: 7,
        description: 'Real constraints navigated, framed as catalysts not excuses',
        contentTypes: ['text', 'grid'],
        guidelines: [
          'Use constraint → decision → effect format',
          'Keep brutally concrete, no vague statements',
          'Show how constraints shaped better solutions',
          'Frame as problem-solving, not excuses'
        ],
        subsections: [
          'Challenge 1: Technical/business constraint and response',
          'Challenge 2: Stakeholder/timeline constraint and response',
          'Challenge 3: Resource/data constraint and response (optional)'
        ]
      },
      {
        id: 'process-turning-point',
        title: 'Turning Point (AHA Moment)',
        type: 'process',
        page: 8,
        description: 'Single realization that changed project direction',
        contentTypes: ['text', 'image', 'quote'],
        guidelines: [
          'Present as narrative pivot, not summary',
          'Show before → insight → after shift',
          'Keep compact—one powerful moment',
          'Create story arc peak'
        ]
      },
      {
        id: 'process-validation-testing',
        title: 'Validation & Usability Testing',
        type: 'process',
        page: 9,
        description: 'Testing methodology, findings, and design iterations',
        contentTypes: ['text', 'image', 'grid', 'quote'],
        guidelines: [
          'Show before/after for each finding',
          'Use annotations on visuals',
          'Include 2-3 key findings only',
          'Show changes made as direct result',
          'Avoid vanity metrics'
        ],
        subsections: [
          'What was tested and with whom',
          'Finding 1 → Fix with before/after',
          'Finding 2 → Fix with before/after',
          'Finding 3 → Fix with before/after',
          'Confirmation metrics or quotes'
        ]
      },
      
      // ────────────────────────────────────────────────────────────
      // OUTCOME SECTION (Pages 10-13)
      // ────────────────────────────────────────────────────────────
      {
        id: 'outcome-final-designs',
        title: 'Final Designs',
        type: 'outcome',
        page: 10,
        description: 'Polished final UI with key flows and annotations',
        contentTypes: ['image', 'grid', 'text'],
        guidelines: [
          'Show 3-5 key screens, not entire product',
          'Maintain consistent mockup styling',
          'Add clear annotations showing improvements',
          'Use visual sequencing for flows',
          'Include interactive prototype at bottom (optional)'
        ],
        subsections: [
          'Hero visual: Main feature',
          'Flow screens: 3-5 annotated screens',
          'Before/after comparisons (1-2)',
          'Microinteraction GIFs if essential',
          'Interactive prototype embed (optional)'
        ]
      },
      {
        id: 'outcome-impact-metrics',
        title: 'Impact (Quantitative + Qualitative)',
        type: 'outcome',
        page: 11,
        description: 'Measurable results or behavioral changes tied to problem',
        contentTypes: ['stats', 'quote', 'text'],
        guidelines: [
          'Use metrics block: large numbers, clean layout',
          'If no metrics: quotes → visual deltas → behavior changes',
          'Tie every point back to hook problem',
          'Max 3-4 impact elements',
          'No manufactured numbers'
        ],
        subsections: [
          'Primary metrics (3-4 max)',
          'User quotes and testimonials',
          'Behavioral changes observed',
          'Stakeholder feedback'
        ]
      },
      {
        id: 'outcome-ui-improvements',
        title: 'UI/UX Improvement Summary',
        type: 'outcome',
        page: 12,
        description: 'Before/after analysis with functional improvements',
        contentTypes: ['image', 'text', 'grid'],
        guidelines: [
          'Use side-by-side with same framing',
          'Add 3-5 labels max, no paragraphs',
          'Show functional improvements, not just aesthetics',
          'Align with Process insights and validations'
        ],
        subsections: [
          'Comparison 1: Specific improvement with metric',
          'Comparison 2: Specific improvement with metric',
          'Comparison 3: Specific improvement with metric',
          'Information architecture shifts'
        ]
      },
      {
        id: 'outcome-reflection-learnings',
        title: 'Reflection & Learnings',
        type: 'outcome',
        page: 13,
        description: 'What you learned and what's next',
        contentTypes: ['text'],
        guidelines: [
          'Keep brief: one short section max',
          'Make points specific to this project',
          'Frame reflections as strategic insights',
          'Avoid generic statements',
          'Include future roadmap items'
        ],
        subsections: [
          'Key learning 1 (project-specific)',
          'Key learning 2 (project-specific)',
          'Key learning 3 (project-specific)',
          'What would change with more time',
          'Future roadmap items'
        ]
      }
    ],
    
    emphasis: 'outcome-first-storytelling',
    visualRatio: 0.65, // 65% imagery, 35% text
    
    artifactPlacements: {
      beforeAfterComparisons: 'outcome-ui-improvements',
      journeyMap: 'process-key-insights',
      userFlow: 'process-design-explorations',
      prototypes: 'outcome-final-designs',
      wireframes: 'process-design-explorations',
      usabilityFindings: 'process-validation-testing'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Template 2: MORITZ - Process Journey (Comprehensive Documentation)
  // ═══════════════════════════════════════════════════════════════════════════
  // Design Philosophy: Step-by-step journey, method explanations, accessible
  // Framework Integration: Full process documentation with educational focus
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
    
    contentOrder: [
      // HOOK SECTION
      {
        id: 'hook-hero-title',
        title: 'Project Title',
        type: 'hook',
        page: 1,
        description: 'Conversational title with project tags',
        contentTypes: ['title', 'tags', 'text']
      },
      {
        id: 'hook-project-overview',
        title: 'Project Overview',
        type: 'hook',
        page: 2,
        description: 'What, why, your role, and methodology preview',
        contentTypes: ['grid', 'text', 'stats']
      },
      {
        id: 'hook-problem-statement',
        title: 'The Challenge',
        type: 'hook',
        page: 3,
        description: 'User and business problem with research preview',
        contentTypes: ['text', 'quote', 'image']
      },
      {
        id: 'hook-solution-teaser',
        title: 'Approach Preview',
        type: 'hook',
        page: 4,
        description: 'Overview of design approach and methodology',
        contentTypes: ['image', 'grid', 'text']
      },
      
      // PROCESS SECTION
      {
        id: 'process-research-discovery',
        title: 'Research & Discovery',
        type: 'process',
        page: 5,
        description: 'Research methods, participant details, and discovery process',
        contentTypes: ['text', 'grid', 'image', 'stats'],
        subsections: [
          'Research methods used and why',
          'Participant recruitment and demographics',
          'Research artifacts and data collected',
          'Analysis methodology'
        ]
      },
      {
        id: 'process-key-insights',
        title: 'Synthesis & Key Insights',
        type: 'process',
        page: 6,
        description: 'How insights were synthesized from research',
        contentTypes: ['text', 'image', 'grid', 'quote'],
        subsections: [
          'Synthesis process explanation',
          'Insight 1 with supporting data',
          'Insight 2 with supporting data',
          'Insight 3 with supporting data',
          'Personas or empathy maps (if applicable)'
        ]
      },
      {
        id: 'process-ideation-exploration',
        title: 'Ideation & Exploration',
        type: 'process',
        page: 7,
        description: 'Brainstorming process, sketches, wireframes',
        contentTypes: ['image', 'text', 'grid'],
        subsections: [
          'Ideation methodology',
          'Sketches and early concepts',
          'Wireframe explorations',
          'Design principles established'
        ]
      },
      {
        id: 'process-design-iterations',
        title: 'Design Iterations',
        type: 'process',
        page: 8,
        description: 'Design evolution with rationale for changes',
        contentTypes: ['image', 'text', 'grid'],
        subsections: [
          'Iteration 1 and learnings',
          'Iteration 2 and learnings',
          'Iteration 3 and learnings',
          'Design decisions and tradeoffs'
        ]
      },
      {
        id: 'process-prototyping',
        title: 'Prototyping',
        type: 'process',
        page: 9,
        description: 'Prototype development and testing preparation',
        contentTypes: ['image', 'text'],
        subsections: [
          'Prototype fidelity and tools',
          'Key interactions designed',
          'Testing scenarios created'
        ]
      },
      {
        id: 'process-validation-testing',
        title: 'Usability Testing',
        type: 'process',
        page: 10,
        description: 'Testing methodology, findings, and iterations',
        contentTypes: ['text', 'grid', 'quote', 'image'],
        subsections: [
          'Testing methodology and participants',
          'Finding 1 → Iteration',
          'Finding 2 → Iteration',
          'Finding 3 → Iteration',
          'Success metrics and task completion'
        ]
      },
      
      // OUTCOME SECTION
      {
        id: 'outcome-final-designs',
        title: 'Final Design Solution',
        type: 'outcome',
        page: 11,
        description: 'Polished designs with detailed walkthrough',
        contentTypes: ['image', 'text', 'grid'],
        subsections: [
          'Design system and visual language',
          'Key screens walkthrough',
          'Interaction details',
          'Accessibility considerations'
        ]
      },
      {
        id: 'outcome-impact-metrics',
        title: 'Results & Impact',
        type: 'outcome',
        page: 12,
        description: 'Measurable outcomes and user feedback',
        contentTypes: ['stats', 'quote', 'text'],
        subsections: [
          'Quantitative results',
          'Qualitative feedback',
          'User testimonials',
          'Stakeholder response'
        ]
      },
      {
        id: 'outcome-reflection-learnings',
        title: 'Learnings & Next Steps',
        type: 'outcome',
        page: 13,
        description: 'What you learned and future opportunities',
        contentTypes: ['text', 'grid'],
        subsections: [
          'Methodology learnings',
          'Design skill development',
          'Project management insights',
          'Future iterations planned',
          'What would be done differently'
        ]
      }
    ],
    
    emphasis: 'comprehensive-methodology',
    visualRatio: 0.55, // 55% imagery, 45% text (more explanatory)
    
    artifactPlacements: {
      researchArtifacts: 'process-research-discovery',
      affinityMapping: 'process-key-insights',
      personas: 'process-key-insights',
      journeyMap: 'process-key-insights',
      sketches: 'process-ideation-exploration',
      wireframes: 'process-ideation-exploration',
      userFlow: 'process-design-iterations',
      prototypes: 'process-prototyping',
      usabilityFindings: 'process-validation-testing',
      beforeAfterComparisons: 'outcome-final-designs'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Template 3: LOLA - Data-Driven Leadership
  // ═══════════════════════════════════════════════════════════════════════════
  // Design Philosophy: Strategic framing, business context, quantified results
  // Framework Integration: Business-value focused with leadership narrative
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
    
    contentOrder: [
      // HOOK SECTION
      {
        id: 'hook-hero-title',
        title: 'Strategic Title',
        type: 'hook',
        page: 1,
        description: 'Business-framed title with role and scope',
        contentTypes: ['title', 'role', 'stats']
      },
      {
        id: 'hook-strategic-context',
        title: 'Strategic Context',
        type: 'hook',
        page: 2,
        description: 'Business landscape, market opportunity, and strategic goals',
        contentTypes: ['text', 'stats', 'grid'],
        subsections: [
          'Market context and opportunity',
          'Business objectives and goals',
          'Your role and leadership scope',
          'Team structure and stakeholders',
          'Success metrics defined upfront'
        ]
      },
      {
        id: 'hook-problem-statement',
        title: 'Design Challenge',
        type: 'hook',
        page: 3,
        description: 'Problem framed with business and user impact',
        contentTypes: ['text', 'stats', 'grid'],
        subsections: [
          'Business problem and revenue impact',
          'User problem and pain points',
          'Competitive landscape gap',
          'Why now? Urgency and timing'
        ]
      },
      {
        id: 'hook-solution-teaser',
        title: 'Strategic Approach Preview',
        type: 'hook',
        page: 4,
        description: 'High-level strategy and expected impact',
        contentTypes: ['image', 'stats', 'text']
      },
      
      // PROCESS SECTION
      {
        id: 'process-strategic-approach',
        title: 'Strategic Approach',
        type: 'process',
        page: 5,
        description: 'Design strategy and leadership decisions',
        contentTypes: ['text', 'grid', 'image'],
        subsections: [
          'Design strategy and principles',
          'Prioritization framework used',
          'Stakeholder alignment approach',
          'Cross-functional collaboration model'
        ]
      },
      {
        id: 'process-key-insights',
        title: 'Data-Driven Insights',
        type: 'process',
        page: 6,
        description: 'Research insights with business implications',
        contentTypes: ['stats', 'text', 'grid', 'quote'],
        subsections: [
          'Quantitative data analysis',
          'User behavior patterns',
          'Business opportunity sizing',
          'Competitive intelligence findings'
        ]
      },
      {
        id: 'process-design-decisions',
        title: 'Key Design Decisions',
        type: 'process',
        page: 7,
        description: 'Major decisions with business rationale',
        contentTypes: ['image', 'text', 'grid'],
        subsections: [
          'Decision 1: Rationale and business impact',
          'Decision 2: Rationale and business impact',
          'Decision 3: Rationale and business impact',
          'Tradeoffs and constraints navigated'
        ]
      },
      {
        id: 'process-stakeholder-alignment',
        title: 'Stakeholder Alignment',
        type: 'process',
        page: 8,
        description: 'How alignment was achieved across teams',
        contentTypes: ['text', 'grid', 'quote'],
        subsections: [
          'Leadership buy-in strategy',
          'Engineering feasibility discussions',
          'Product roadmap integration',
          'Go-to-market considerations'
        ]
      },
      {
        id: 'process-validation-testing',
        title: 'Validation & Iteration',
        type: 'process',
        page: 9,
        description: 'Testing approach with business metrics',
        contentTypes: ['text', 'stats', 'grid', 'image'],
        subsections: [
          'Testing methodology and KPIs',
          'A/B test results and learnings',
          'Iteration based on data',
          'Risk mitigation strategies'
        ]
      },
      
      // OUTCOME SECTION
      {
        id: 'outcome-final-designs',
        title: 'Solution Overview',
        type: 'outcome',
        page: 10,
        description: 'Final design with feature prioritization',
        contentTypes: ['image', 'grid', 'text'],
        subsections: [
          'Core value proposition',
          'Key features and their business value',
          'Design system highlights',
          'Scalability considerations'
        ]
      },
      {
        id: 'outcome-business-impact',
        title: 'Business Impact & ROI',
        type: 'outcome',
        page: 11,
        description: 'Quantified business results and KPIs',
        contentTypes: ['stats', 'text', 'grid'],
        subsections: [
          'Revenue impact and growth metrics',
          'User acquisition and retention',
          'Operational efficiency gains',
          'Market position improvement',
          'Customer satisfaction metrics'
        ]
      },
      {
        id: 'outcome-ui-improvements',
        title: 'Product Evolution',
        type: 'outcome',
        page: 12,
        description: 'Before/after with business metrics attached',
        contentTypes: ['image', 'stats', 'text'],
        subsections: [
          'Comparison 1: Metric improvement',
          'Comparison 2: Metric improvement',
          'Comparison 3: Metric improvement'
        ]
      },
      {
        id: 'outcome-strategic-learnings',
        title: 'Strategic Learnings & Future',
        type: 'outcome',
        page: 13,
        description: 'Leadership insights and roadmap',
        contentTypes: ['text', 'grid'],
        subsections: [
          'Strategic insights gained',
          'Organizational impact',
          'Scalability and future roadmap',
          'What would be approached differently'
        ]
      }
    ],
    
    emphasis: 'business-value-and-leadership',
    visualRatio: 0.50, // 50% imagery, 50% text/data
    
    artifactPlacements: {
      marketResearch: 'hook-strategic-context',
      competitiveAnalysis: 'process-key-insights',
      prioritizationMatrix: 'process-strategic-approach',
      journeyMap: 'process-key-insights',
      designSystem: 'outcome-final-designs',
      metricsCharts: 'outcome-business-impact',
      beforeAfterComparisons: 'outcome-ui-improvements'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Template 4: GLORIA - Visual Storyteller
  // ═══════════════════════════════════════════════════════════════════════════
  // Design Philosophy: Visual-first, gallery-driven, personal branding
  // Framework Integration: Creative expression with 70% visual ratio
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
    
    contentOrder: [
      // HOOK SECTION
      {
        id: 'hook-visual-hero',
        title: 'Visual Hero',
        type: 'hook',
        page: 1,
        description: 'Large visual splash with animated title',
        contentTypes: ['hero-image', 'title', 'animation']
      },
      {
        id: 'hook-project-overview',
        title: 'Project Story',
        type: 'hook',
        page: 2,
        description: 'Brief narrative with key visuals',
        contentTypes: ['text', 'image', 'grid'],
        subsections: [
          'Project narrative (storytelling tone)',
          'Your creative role',
          'Visual mood board or inspiration'
        ]
      },
      {
        id: 'hook-problem-statement',
        title: 'The Creative Challenge',
        type: 'hook',
        page: 3,
        description: 'Problem presented through visual storytelling',
        contentTypes: ['image', 'text', 'quote']
      },
      {
        id: 'hook-solution-showcase',
        title: 'Solution Preview',
        type: 'hook',
        page: 4,
        description: 'Visual gallery showcasing key screens',
        contentTypes: ['image', 'grid']
      },
      
      // PROCESS SECTION
      {
        id: 'process-creative-exploration',
        title: 'Creative Exploration',
        type: 'process',
        page: 5,
        description: 'Visual journey through ideation',
        contentTypes: ['image', 'grid', 'text'],
        subsections: [
          'Mood boards and inspiration',
          'Sketches and early concepts',
          'Style explorations',
          'Visual direction chosen'
        ]
      },
      {
        id: 'process-design-evolution',
        title: 'Design Evolution',
        type: 'process',
        page: 6,
        description: 'Visual progression of designs',
        contentTypes: ['image', 'grid', 'text'],
        subsections: [
          'Iteration 1 gallery',
          'Iteration 2 gallery',
          'Final direction gallery',
          'Design rationale'
        ]
      },
      {
        id: 'process-key-insights',
        title: 'User Insights',
        type: 'process',
        page: 7,
        description: 'Insights presented visually',
        contentTypes: ['image', 'quote', 'text', 'grid'],
        subsections: [
          'Visual representation of insights',
          'User quotes with imagery',
          'Journey map or empathy map'
        ]
      },
      {
        id: 'process-interaction-design',
        title: 'Interaction Details',
        type: 'process',
        page: 8,
        description: 'Microinteractions and animations',
        contentTypes: ['gif', 'video', 'image'],
        subsections: [
          'Key microinteractions shown via GIF',
          'Transition designs',
          'Motion principles applied'
        ]
      },
      {
        id: 'process-validation-testing',
        title: 'User Feedback',
        type: 'process',
        page: 9,
        description: 'Testing insights with visual examples',
        contentTypes: ['image', 'quote', 'text'],
        subsections: [
          'User reactions captured visually',
          'Iteration based on feedback',
          'Before/after improvements'
        ]
      },
      
      // OUTCOME SECTION
      {
        id: 'outcome-design-showcase',
        title: 'Design Showcase',
        type: 'outcome',
        page: 10,
        description: 'Full visual gallery of final designs',
        contentTypes: ['image', 'grid'],
        subsections: [
          'Hero screens gallery',
          'Key feature walkthrough',
          'Design details spotlight',
          'Responsive designs showcase'
        ]
      },
      {
        id: 'outcome-impact-story',
        title: 'Impact Story',
        type: 'outcome',
        page: 11,
        description: 'Results told through visuals and testimonials',
        contentTypes: ['stats', 'quote', 'image', 'text'],
        subsections: [
          'Visual metrics presentation',
          'User testimonials with photos',
          'Success stories',
          'Press or recognition received'
        ]
      },
      {
        id: 'outcome-design-system',
        title: 'Design System',
        type: 'outcome',
        page: 12,
        description: 'Visual design system overview',
        contentTypes: ['image', 'grid'],
        subsections: [
          'Color palette showcase',
          'Typography specimens',
          'Component library highlights',
          'Iconography and illustrations'
        ]
      },
      {
        id: 'outcome-reflection',
        title: 'Creative Reflections',
        type: 'outcome',
        page: 13,
        description: 'Personal insights and future vision',
        contentTypes: ['text', 'image'],
        subsections: [
          'Creative learnings',
          'Personal growth moments',
          'Future possibilities',
          'Call to action or next project tease'
        ]
      }
    ],
    
    emphasis: 'visual-impact-and-creativity',
    visualRatio: 0.70, // 70% imagery, 30% text
    
    artifactPlacements: {
      moodBoards: 'process-creative-exploration',
      sketches: 'process-creative-exploration',
      styleExplorations: 'process-creative-exploration',
      journeyMap: 'process-key-insights',
      prototypes: 'process-interaction-design',
      microinteractions: 'process-interaction-design',
      finalScreens: 'outcome-design-showcase',
      designSystem: 'outcome-design-system'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Template 5: PRATIBHA - Clean Professional
  // ═══════════════════════════════════════════════════════════════════════════
  // Design Philosophy: Clean grid, user-centric, thorough, professional
  // Framework Integration: Balanced documentation with grid structure
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
    
    contentOrder: [
      // HOOK SECTION
      {
        id: 'hook-hero-title',
        title: 'Project Title',
        type: 'hook',
        page: 1,
        description: 'Clean professional title with mentions or accolades',
        contentTypes: ['title', 'subtitle', 'mentions']
      },
      {
        id: 'hook-project-overview',
        title: 'Overview',
        type: 'hook',
        page: 2,
        description: 'Comprehensive overview in grid format',
        contentTypes: ['grid', 'text', 'stats'],
        subsections: [
          'Project summary',
          'Your role and responsibilities',
          'Timeline and duration',
          'Team composition',
          'Tools and methods',
          'Key deliverables'
        ]
      },
      {
        id: 'hook-problem-statement',
        title: 'Problem Statement',
        type: 'hook',
        page: 3,
        description: 'User pain points and design opportunity',
        contentTypes: ['text', 'quote', 'image'],
        subsections: [
          'User pain points identified',
          'Business opportunity',
          'Design constraints',
          'Success criteria defined'
        ]
      },
      {
        id: 'hook-solution-teaser',
        title: 'Solution Overview',
        type: 'hook',
        page: 4,
        description: 'High-level solution with key screens',
        contentTypes: ['image', 'grid', 'text']
      },
      
      // PROCESS SECTION
      {
        id: 'process-user-research',
        title: 'User Research',
        type: 'process',
        page: 5,
        description: 'Research methodology and key findings',
        contentTypes: ['text', 'grid', 'stats', 'image'],
        subsections: [
          'Research objectives',
          'Methods: interviews, surveys, observation',
          'Participant demographics',
          'Key findings summary',
          'Data synthesis approach'
        ]
      },
      {
        id: 'process-key-insights',
        title: 'User Insights & Personas',
        type: 'process',
        page: 6,
        description: 'Insights organized with user personas',
        contentTypes: ['grid', 'image', 'text', 'quote'],
        subsections: [
          'Primary user persona',
          'Secondary user persona (if applicable)',
          'User needs and goals',
          'Pain points mapped to insights',
          'Opportunities identified'
        ]
      },
      {
        id: 'process-information-architecture',
        title: 'Information Architecture',
        type: 'process',
        page: 7,
        description: 'IA decisions and user flows',
        contentTypes: ['image', 'grid', 'text'],
        subsections: [
          'Site map or IA diagram',
          'User flows for key tasks',
          'Navigation structure',
          'Content strategy'
        ]
      },
      {
        id: 'process-design-explorations',
        title: 'Design Process',
        type: 'process',
        page: 8,
        description: 'From wireframes to high-fidelity',
        contentTypes: ['image', 'text', 'grid'],
        subsections: [
          'Wireframes and rationale',
          'Visual design explorations',
          'Design system development',
          'Accessibility considerations'
        ]
      },
      {
        id: 'process-validation-testing',
        title: 'Testing & Iteration',
        type: 'process',
        page: 9,
        description: 'Usability testing and refinements',
        contentTypes: ['text', 'grid', 'image', 'quote'],
        subsections: [
          'Testing protocol',
          'Participants and scenarios',
          'Finding 1 → Solution',
          'Finding 2 → Solution',
          'Finding 3 → Solution',
          'Final refinements'
        ]
      },
      
      // OUTCOME SECTION
      {
        id: 'outcome-final-designs',
        title: 'Final Design Solution',
        type: 'outcome',
        page: 10,
        description: 'Detailed walkthrough of solution',
        contentTypes: ['image', 'grid', 'text'],
        subsections: [
          'Design system overview',
          'Key screen 1: Detailed explanation',
          'Key screen 2: Detailed explanation',
          'Key screen 3: Detailed explanation',
          'Responsive considerations',
          'Accessibility features implemented'
        ]
      },
      {
        id: 'outcome-impact-metrics',
        title: 'Impact & Metrics',
        type: 'outcome',
        page: 11,
        description: 'Measurable outcomes and user feedback',
        contentTypes: ['stats', 'quote', 'text', 'grid'],
        subsections: [
          'Quantitative metrics achieved',
          'User satisfaction scores',
          'Behavioral improvements',
          'User testimonials',
          'Stakeholder feedback'
        ]
      },
      {
        id: 'outcome-ui-improvements',
        title: 'Before & After',
        type: 'outcome',
        page: 12,
        description: 'Visual comparison of improvements',
        contentTypes: ['image', 'grid', 'text'],
        subsections: [
          'Improvement 1: Detailed comparison',
          'Improvement 2: Detailed comparison',
          'Improvement 3: Detailed comparison',
          'Overall UX enhancements'
        ]
      },
      {
        id: 'outcome-reflection-learnings',
        title: 'Reflections & Learnings',
        type: 'outcome',
        page: 13,
        description: 'Professional insights and next steps',
        contentTypes: ['text', 'grid'],
        subsections: [
          'Key takeaways',
          'Challenges overcome',
          'Skills developed',
          'Future improvements',
          'Next steps for the product'
        ]
      }
    ],
    
    emphasis: 'user-centered-thoroughness',
    visualRatio: 0.60, // 60% imagery, 40% text
    
    artifactPlacements: {
      researchData: 'process-user-research',
      personas: 'process-key-insights',
      journeyMap: 'process-key-insights',
      siteMap: 'process-information-architecture',
      userFlows: 'process-information-architecture',
      wireframes: 'process-design-explorations',
      designSystem: 'process-design-explorations',
      usabilityFindings: 'process-validation-testing',
      finalScreens: 'outcome-final-designs',
      beforeAfterComparisons: 'outcome-ui-improvements'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Template 6: CAREX - Comprehensive Complete
  // ═══════════════════════════════════════════════════════════════════════════
  // Design Philosophy: Full UX process, Double Diamond, all frameworks
  // Framework Integration: Most comprehensive template with all artifacts
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
      accent: '#000000',
      divider: '#e5e5e5',
      highlight: '#f5f5f5'
    },
    
    typography: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heroTitle: '48px',
      sectionTitle: '36px',
      subsectionTitle: '26px',
      body: '16px',
      caption: '13px',
      lineHeight: '1.6'
    },
    
    features: [
      'Double Diamond process',
      'User Personas',
      'Competitor Analysis',
      '5 Why Analysis',
      'Root Cause Analysis',
      'Prioritization Matrix',
      'Task Mapping',
      'Complete UX frameworks'
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
    
    contentOrder: [
      // HOOK SECTION
      {
        id: 'hook-hero-title',
        title: 'Project Title',
        type: 'hook',
        page: 1,
        description: 'Centered minimal hero with project tag',
        contentTypes: ['title', 'tag', 'image']
      },
      {
        id: 'hook-problem-statement',
        title: 'Problem Statement',
        type: 'hook',
        page: 2,
        description: 'Core problem and context definition',
        contentTypes: ['text', 'quote', 'image'],
        subsections: [
          'Problem definition',
          'Context and background',
          'Why this matters'
        ]
      },
      {
        id: 'hook-objectives-goals',
        title: 'Objectives & Goals',
        type: 'hook',
        page: 3,
        description: 'Project objectives and success criteria',
        contentTypes: ['grid', 'text'],
        subsections: [
          'Business objectives',
          'User goals',
          'Design goals',
          'Success metrics'
        ]
      },
      {
        id: 'hook-process-overview',
        title: 'Our Process',
        type: 'hook',
        page: 4,
        description: 'Double Diamond: Discover, Define, Ideate, Design',
        contentTypes: ['image', 'grid', 'text'],
        subsections: [
          'Discover phase overview',
          'Define phase overview',
          'Ideate phase overview',
          'Design phase overview'
        ]
      },
      
      // PROCESS SECTION - DISCOVER
      {
        id: 'process-business-challenges',
        title: 'Business Challenges',
        type: 'process-discover',
        page: 5,
        description: 'Key business pain points and constraints',
        contentTypes: ['text', 'grid', 'stats'],
        subsections: [
          'Business challenge 1',
          'Business challenge 2',
          'Business challenge 3',
          'Constraints identified'
        ]
      },
      {
        id: 'process-product-users',
        title: 'Product Users',
        type: 'process-discover',
        page: 6,
        description: 'Target audience and user segments',
        contentTypes: ['text', 'image', 'grid'],
        subsections: [
          'Primary user segment',
          'Secondary user segment',
          'User demographics',
          'User behaviors'
        ]
      },
      {
        id: 'process-quantitative-research',
        title: 'Quantitative Research',
        type: 'process-discover',
        page: 7,
        description: 'Survey data, analytics, and statistics',
        contentTypes: ['stats', 'grid', 'text', 'image'],
        subsections: [
          'Survey methodology and participants',
          'Key statistical findings',
          'Analytics data insights',
          'Data synthesis'
        ]
      },
      {
        id: 'process-user-needs',
        title: 'User Needs',
        type: 'process-discover',
        page: 8,
        description: 'Core user requirements and desires',
        contentTypes: ['text', 'grid', 'quote'],
        subsections: [
          'Primary needs identified',
          'Secondary needs',
          'User expectations',
          'Success criteria from user perspective'
        ]
      },
      {
        id: 'process-user-challenges',
        title: 'User Challenges',
        type: 'process-discover',
        page: 9,
        description: 'Pain points users face with current solutions',
        contentTypes: ['text', 'grid', 'quote', 'image'],
        subsections: [
          'Challenge 1 with user quotes',
          'Challenge 2 with user quotes',
          'Challenge 3 with user quotes',
          'Impact of these challenges'
        ]
      },
      {
        id: 'process-competitor-analysis',
        title: 'Competitor Analysis',
        type: 'process-discover',
        page: 10,
        description: 'Market landscape and competitive positioning',
        contentTypes: ['grid', 'image', 'text'],
        subsections: [
          'Competitor 1: Strengths and weaknesses',
          'Competitor 2: Strengths and weaknesses',
          'Competitor 3: Strengths and weaknesses',
          'Market gaps and opportunities'
        ]
      },
      
      // PROCESS SECTION - DEFINE
      {
        id: 'process-user-persona',
        title: 'User Persona',
        type: 'process-define',
        page: 11,
        description: 'Detailed user archetype with demographics and behaviors',
        contentTypes: ['image', 'grid', 'text'],
        subsections: [
          'Persona demographics',
          'Goals and motivations',
          'Pain points and frustrations',
          'Behaviors and preferences',
          'Technology proficiency'
        ]
      },
      {
        id: 'process-five-why-analysis',
        title: '5 Why Analysis',
        type: 'process-define',
        page: 12,
        description: 'Root cause discovery through iterative questioning',
        contentTypes: ['text', 'grid'],
        subsections: [
          'Problem statement',
          'Why 1',
          'Why 2',
          'Why 3',
          'Why 4',
          'Why 5 - Root cause identified'
        ]
      },
      {
        id: 'process-root-cause-analysis',
        title: 'Root Cause Analysis',
        type: 'process-define',
        page: 13,
        description: 'Deep dive into underlying problems',
        contentTypes: ['text', 'image', 'grid'],
        subsections: [
          'Fishbone diagram or framework used',
          'Contributing factors identified',
          'Root causes synthesized',
          'Implications for design'
        ]
      },
      
      // PROCESS SECTION - IDEATE
      {
        id: 'process-features-functionalities',
        title: 'Features & Functionalities',
        type: 'process-ideate',
        page: 14,
        description: 'Key features to address user needs',
        contentTypes: ['grid', 'text', 'image'],
        subsections: [
          'Feature 1: Description and value',
          'Feature 2: Description and value',
          'Feature 3: Description and value',
          'How features map to user needs'
        ]
      },
      {
        id: 'process-prioritization-matrix',
        title: 'Prioritization Matrix',
        type: 'process-ideate',
        page: 15,
        description: 'Eisenhower Matrix - Feature prioritization',
        contentTypes: ['grid', 'image', 'text'],
        subsections: [
          'High priority / High urgency',
          'High priority / Low urgency',
          'Low priority / High urgency',
          'Low priority / Low urgency',
          'Prioritization rationale'
        ]
      },
      {
        id: 'process-unique-features',
        title: 'Unique Features & Value Props',
        type: 'process-ideate',
        page: 16,
        description: 'Differentiating features and value propositions',
        contentTypes: ['grid', 'text', 'image'],
        subsections: [
          'Unique feature 1',
          'Unique feature 2',
          'Unique feature 3',
          'Competitive advantage created'
        ]
      },
      {
        id: 'process-task-mapping',
        title: 'Task Mapping',
        type: 'process-ideate',
        page: 17,
        description: 'User tasks and workflows mapped',
        contentTypes: ['image', 'grid', 'text'],
        subsections: [
          'Primary task flow',
          'Secondary task flows',
          'Task dependencies',
          'Edge cases identified'
        ]
      },
      {
        id: 'process-taskflows',
        title: 'Taskflows & User Journeys',
        type: 'process-ideate',
        page: 18,
        description: 'Detailed user journey and task flow diagrams',
        contentTypes: ['image', 'text'],
        subsections: [
          'Journey map',
          'Task flow diagrams',
          'Decision points',
          'Success/error states'
        ]
      },
      
      // PROCESS SECTION - DESIGN
      {
        id: 'process-sketches',
        title: 'Sketches & Ideation',
        type: 'process-design',
        page: 19,
        description: 'Early ideation and concept sketches',
        contentTypes: ['image', 'text', 'grid'],
        subsections: [
          'Concept sketches',
          'Ideation process',
          'Concepts explored',
          'Concepts selected for development'
        ]
      },
      {
        id: 'process-design-iterations',
        title: 'Design Iterations',
        type: 'process-design',
        page: 20,
        description: 'Evolution from wireframes to high-fidelity',
        contentTypes: ['image', 'text', 'grid'],
        subsections: [
          'Wireframes',
          'Mid-fidelity iterations',
          'High-fidelity designs',
          'Design decisions and rationale'
        ]
      },
      {
        id: 'process-validation-testing',
        title: 'Usability Testing & Validation',
        type: 'process-design',
        page: 21,
        description: 'Testing methodology and iterations',
        contentTypes: ['text', 'grid', 'image', 'quote'],
        subsections: [
          'Testing protocol',
          'Participants',
          'Finding 1 → Iteration',
          'Finding 2 → Iteration',
          'Finding 3 → Iteration',
          'Validation metrics'
        ]
      },
      
      // OUTCOME SECTION
      {
        id: 'outcome-major-screens',
        title: 'Major Screens',
        type: 'outcome',
        page: 22,
        description: 'Key UI screens and interactions',
        contentTypes: ['image', 'grid', 'text'],
        subsections: [
          'Screen 1: Detailed walkthrough',
          'Screen 2: Detailed walkthrough',
          'Screen 3: Detailed walkthrough',
          'Screen 4: Detailed walkthrough',
          'Annotations and explanations'
        ]
      },
      {
        id: 'outcome-final-screens',
        title: 'Final Screens & Prototype',
        type: 'outcome',
        page: 23,
        description: 'Polished high-fidelity designs',
        contentTypes: ['image', 'grid'],
        subsections: [
          'Complete screen gallery',
          'Responsive designs',
          'Accessibility features',
          'Interactive prototype link'
        ]
      },
      {
        id: 'outcome-design-system',
        title: 'Design System',
        type: 'outcome',
        page: 24,
        description: 'Complete design system documentation',
        contentTypes: ['image', 'grid', 'text'],
        subsections: [
          'Color system',
          'Typography scale',
          'Component library',
          'Spacing and layout',
          'Iconography',
          'Design tokens'
        ]
      },
      {
        id: 'outcome-impact-metrics',
        title: 'Impact & Results',
        type: 'outcome',
        page: 25,
        description: 'Comprehensive results and metrics',
        contentTypes: ['stats', 'text', 'grid', 'quote'],
        subsections: [
          'Quantitative metrics achieved',
          'Qualitative feedback',
          'User testimonials',
          'Business impact',
          'Adoption metrics'
        ]
      },
      {
        id: 'outcome-before-after',
        title: 'Before & After Comparison',
        type: 'outcome',
        page: 26,
        description: 'Detailed before/after analysis',
        contentTypes: ['image', 'grid', 'text'],
        subsections: [
          'Comparison 1 with metrics',
          'Comparison 2 with metrics',
          'Comparison 3 with metrics',
          'Overall improvements summary'
        ]
      },
      {
        id: 'outcome-reflection-next-steps',
        title: 'Reflections & Next Steps',
        type: 'outcome',
        page: 27,
        description: 'Learnings and future roadmap',
        contentTypes: ['text', 'grid'],
        subsections: [
          'Key learnings',
          'Challenges overcome',
          'What would be done differently',
          'Future iterations planned',
          'Scalability considerations'
        ]
      },
      {
        id: 'outcome-thank-you',
        title: 'Thank You',
        type: 'outcome',
        page: 28,
        description: 'Closing and credits',
        contentTypes: ['text', 'image'],
        subsections: [
          'Acknowledgments',
          'Team credits',
          'Contact information',
          'Other projects link'
        ]
      }
    ],
    
    emphasis: 'comprehensive-ux-frameworks',
    visualRatio: 0.60, // 60% imagery, 40% text/frameworks
    
    artifactPlacements: {
      doubleDiamond: 'hook-process-overview',
      businessChallenges: 'process-business-challenges',
      userSegments: 'process-product-users',
      surveyData: 'process-quantitative-research',
      competitiveAnalysis: 'process-competitor-analysis',
      persona: 'process-user-persona',
      fiveWhyAnalysis: 'process-five-why-analysis',
      rootCauseAnalysis: 'process-root-cause-analysis',
      featureList: 'process-features-functionalities',
      eisenhowerMatrix: 'process-prioritization-matrix',
      taskMapping: 'process-task-mapping',
      journeyMap: 'process-taskflows',
      userFlows: 'process-taskflows',
      sketches: 'process-sketches',
      wireframes: 'process-design-iterations',
      usabilityFindings: 'process-validation-testing',
      finalScreens: 'outcome-final-screens',
      designSystem: 'outcome-design-system',
      beforeAfterComparisons: 'outcome-before-after'
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// TEMPLATE SECTION CONFIGURATIONS
// ═══════════════════════════════════════════════════════════════════════════

export const templateSections = {
  // These are preserved for backward compatibility but the detailed
  // contentOrder in each template above should be used for new implementations
  
  'outcome-first': [
    {
      id: 'results',
      title: 'Impact & Results',
      description: 'Lead with measurable outcomes and business metrics',
      contentTypes: ['stats', 'hero', 'text']
    },
    {
      id: 'context',
      title: 'Context',
      description: 'Brief project background and your role',
      contentTypes: ['text', 'grid']
    },
    {
      id: 'challenge',
      title: 'The Challenge',
      description: 'Problem definition with user and business pain points',
      contentTypes: ['text', 'quote']
    },
    {
      id: 'solution',
      title: 'Design Solution',
      description: 'Key design decisions and their rationale',
      contentTypes: ['image', 'text', 'grid']
    }
  ],

  'process-journey': [
    {
      id: 'overview',
      title: 'Project Overview',
      description: 'What, why, and your role',
      contentTypes: ['hero', 'text', 'stats']
    },
    {
      id: 'research',
      title: 'Research & Discovery',
      description: 'User interviews, surveys, competitor analysis',
      contentTypes: ['text', 'grid', 'image']
    },
    {
      id: 'synthesis',
      title: 'Synthesis & Personas',
      description: 'Insights, empathy maps, user personas',
      contentTypes: ['grid', 'text', 'image']
    },
    {
      id: 'ideation',
      title: 'Ideation & Wireframes',
      description: 'Brainstorming, sketches, low-fidelity designs',
      contentTypes: ['image', 'text']
    },
    {
      id: 'prototype',
      title: 'Prototyping',
      description: 'Interactive prototypes and design iterations',
      contentTypes: ['image', 'text']
    },
    {
      id: 'testing',
      title: 'Usability Testing',
      description: 'Testing methodology, findings, iterations',
      contentTypes: ['text', 'grid', 'quote']
    },
    {
      id: 'results',
      title: 'Results & Learnings',
      description: 'Outcomes and what you learned',
      contentTypes: ['stats', 'text']
    }
  ],

  'strategic': [
    {
      id: 'context',
      title: 'Strategic Context',
      description: 'Business landscape and opportunity',
      contentTypes: ['text', 'stats']
    },
    {
      id: 'challenge',
      title: 'Design Challenge',
      description: 'Problem framing with business and user goals',
      contentTypes: ['text', 'grid']
    },
    {
      id: 'approach',
      title: 'Strategic Approach',
      description: 'Design strategy and leadership decisions',
      contentTypes: ['text', 'grid']
    },
    {
      id: 'solution',
      title: 'Solution',
      description: 'Final design with key features',
      contentTypes: ['image', 'text', 'grid']
    },
    {
      id: 'impact',
      title: 'Business Impact',
      description: 'Metrics, revenue, and KPIs achieved',
      contentTypes: ['stats', 'quote', 'text']
    }
  ],

  'visual-gallery': [
    {
      id: 'hero',
      title: 'Project Showcase',
      description: 'Visual hero with key screens',
      contentTypes: ['hero', 'image']
    },
    {
      id: 'overview',
      title: 'About the Project',
      description: 'Brief description and context',
      contentTypes: ['text']
    },
    {
      id: 'process',
      title: 'Design Process',
      description: 'Visual process documentation',
      contentTypes: ['image', 'text']
    },
    {
      id: 'showcase',
      title: 'Design Gallery',
      description: 'Full visual showcase of the work',
      contentTypes: ['image', 'grid']
    },
    {
      id: 'results',
      title: 'Outcomes',
      description: 'Results and testimonials',
      contentTypes: ['stats', 'quote']
    }
  ],

  'user-centric': [
    {
      id: 'overview',
      title: 'Overview',
      description: 'Project summary, role, and timeline',
      contentTypes: ['hero', 'grid', 'text']
    },
    {
      id: 'problem',
      title: 'Problem Statement',
      description: 'User pain points and design opportunity',
      contentTypes: ['text', 'quote']
    },
    {
      id: 'research',
      title: 'User Research',
      description: 'Research methodology and key insights',
      contentTypes: ['text', 'grid', 'stats']
    },
    {
      id: 'design',
      title: 'Design Process',
      description: 'From wireframes to high-fidelity',
      contentTypes: ['image', 'text']
    },
    {
      id: 'solution',
      title: 'Final Design',
      description: 'Detailed walkthrough of the solution',
      contentTypes: ['image', 'text', 'grid']
    },
    {
      id: 'impact',
      title: 'Impact & Metrics',
      description: 'Measurable outcomes and user feedback',
      contentTypes: ['stats', 'quote', 'text']
    }
  ],

  'carex-comprehensive': [
    {
      id: 'problem-statement',
      title: 'Problem Statement',
      description: 'Define the core problem and context',
      contentTypes: ['text', 'quote']
    },
    {
      id: 'objectives-goals',
      title: 'Objectives & Goals',
      description: 'What we aim to achieve',
      contentTypes: ['text', 'grid']
    },
    {
      id: 'process',
      title: 'Our Process',
      description: 'Double Diamond: Discover, Define, Ideate, Design',
      contentTypes: ['grid', 'image']
    },
    {
      id: 'business-challenges',
      title: 'Business Challenges',
      description: 'Key business pain points and constraints',
      contentTypes: ['text', 'grid']
    },
    {
      id: 'product-users',
      title: 'Product Users',
      description: 'Target audience and user segments',
      contentTypes: ['text', 'image', 'grid']
    },
    {
      id: 'quantitative-research',
      title: 'Quantitative Research',
      description: 'Survey data, analytics, and statistics',
      contentTypes: ['stats', 'grid', 'text']
    },
    {
      id: 'user-needs',
      title: 'User Needs',
      description: 'Core user requirements and desires',
      contentTypes: ['text', 'grid']
    },
    {
      id: 'features-functionalities',
      title: 'Features & Functionalities',
      description: 'Key features to address user needs',
      contentTypes: ['grid', 'text']
    },
    {
      id: 'user-challenges',
      title: 'Product User Challenges',
      description: 'Pain points users face with current solutions',
      contentTypes: ['text', 'grid', 'quote']
    },
    {
      id: 'competitor-analysis',
      title: 'Competitor Analysis',
      description: 'Market landscape and competitive positioning',
      contentTypes: ['grid', 'image', 'text']
    },
    {
      id: 'unique-features',
      title: 'Unique Features',
      description: 'Differentiating features and value propositions',
      contentTypes: ['grid', 'text']
    },
    {
      id: 'user-persona',
      title: 'User Persona',
      description: 'Detailed user archetype with demographics and behaviors',
      contentTypes: ['image', 'grid', 'text']
    },
    {
      id: 'task-mapping',
      title: 'Task Mapping',
      description: 'User tasks and workflows',
      contentTypes: ['image', 'grid']
    },
    {
      id: 'prioritization-matrix',
      title: 'Eisenhower Matrix',
      description: 'Feature prioritization by urgency and importance',
      contentTypes: ['grid', 'image']
    },
    {
      id: 'five-why-analysis',
      title: '5 Why Analysis',
      description: 'Root cause discovery through iterative questioning',
      contentTypes: ['text', 'grid']
    },
    {
      id: 'root-cause-analysis',
      title: 'Root Cause Analysis',
      description: 'Deep dive into underlying problems',
      contentTypes: ['text', 'image']
    },
    {
      id: 'taskflows',
      title: 'Taskflows',
      description: 'User journey and task flow diagrams',
      contentTypes: ['image', 'text']
    },
    {
      id: 'sketches',
      title: 'Sketches',
      description: 'Early ideation and concept sketches',
      contentTypes: ['image', 'text']
    },
    {
      id: 'major-screens',
      title: 'Major Screens',
      description: 'Key UI screens and interactions',
      contentTypes: ['image', 'grid']
    },
    {
      id: 'final-screens',
      title: 'Final Screens',
      description: 'Polished high-fidelity designs',
      contentTypes: ['image', 'grid']
    },
    {
      id: 'thank-you',
      title: 'Thank You',
      description: 'Closing and credits',
      contentTypes: ['text']
    }
  ],

  standard: [
    {
      id: 'overview',
      title: 'Project Overview',
      description: 'Brief project description, your role, tools and methods used',
      contentTypes: ['hero', 'stats', 'text']
    },
    {
      id: 'problem',
      title: 'The Challenge',
      description: 'The specific problem being solved and its importance',
      contentTypes: ['text', 'quote', 'grid']
    },
    {
      id: 'research',
      title: 'Research & Discovery',
      description: 'Research methods, key insights, user personas',
      contentTypes: ['text', 'grid', 'stats', 'image']
    },
    {
      id: 'ideation',
      title: 'Ideation & Design',
      description: 'Brainstorming, wireframes, prototypes',
      contentTypes: ['text', 'image', 'grid']
    },
    {
      id: 'solution',
      title: 'The Solution',
      description: 'Final design with detailed explanation',
      contentTypes: ['hero', 'image', 'text', 'grid']
    },
    {
      id: 'testing',
      title: 'Testing & Iteration',
      description: 'Usability testing, feedback, iterations',
      contentTypes: ['text', 'grid', 'quote']
    },
    {
      id: 'results',
      title: 'Results & Impact',
      description: 'Measurable outcomes and success metrics',
      contentTypes: ['stats', 'text', 'quote']
    },
    {
      id: 'learnings',
      title: 'Key Learnings',
      description: 'Challenges faced and skills acquired',
      contentTypes: ['text', 'grid']
    }
  ]
};

// Helper functions
export const getTemplate = (templateId) => {
  return templates[templateId] || templates.pratibha;
};

export const getAllTemplates = () => {
  return Object.values(templates);
};

// Get sections by template phase
export const getSectionsByPhase = (template, phase) => {
  if (!template || !template.contentOrder) return [];
  return template.contentOrder.filter(section => section.type === phase);
};

// Get all Hook sections
export const getHookSections = (template) => {
  return getSectionsByPhase(template, 'hook');
};

// Get all Process sections
export const getProcessSections = (template) => {
  if (!template || !template.contentOrder) return [];
  return template.contentOrder.filter(section => 
    section.type && section.type.startsWith('process')
  );
};

// Get all Outcome sections
export const getOutcomeSections = (template) => {
  return getSectionsByPhase(template, 'outcome');
};

export default templates;
