// Case Study Templates
// Based on research from top UX designers at Google, Uber, Canva, and industry leaders
// Inspired by portfolios from Simon Pan, Moritz Oesterlau, Lola Jiang, Gloria Lo, and Pratibha Joshi

export const templates = {
  // Template 1: Simon Pan Uber Style - EXACT REPLICA
  // Based on simonpan.com/work/uber/ - The gold standard for UX case studies
  // Key traits: Full-width hero image, minimal black/white design, metrics as bullet points,
  // generous whitespace, section dividers with hr, high-quality images/GIFs
  simonpan: {
    id: 'simonpan',
    name: 'Simon Pan (Uber)',
    description: 'Exact replica of Simon Pan\'s Uber case study. Minimal black & white, full-width images, metrics as bullet points.',
    thumbnail: 'simonpan',
    inspiration: 'simonpan.com/work/uber/',
    layout: {
      hero: 'full-width-image',
      sections: 'single-column-narrative',
      spacing: 'generous',
      maxWidth: '680px' // Simon Pan uses narrow content width
    },
    colors: {
      background: '#ffffff',
      text: '#000000',
      textSecondary: '#666666',
      accent: '#000000',
      divider: '#e5e5e5'
    },
    typography: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heroTitle: '42px',
      sectionTitle: '32px',
      body: '18px',
      lineHeight: '1.7'
    },
    features: ['Full-width hero', 'Minimal B&W', 'Bullet metrics', 'HR dividers', 'Narrative flow'],
    colorSchemes: ['light'],
    sectionStyles: {
      hero: {
        padding: 'py-0', // No padding - full bleed image
        titleSize: 'text-4xl md:text-5xl',
        layout: 'full-width-image',
        showMetrics: false
      },
      content: {
        padding: 'py-12',
        layout: 'narrative'
      }
    },
    contentOrder: ['hero-image', 'title', 'overview', 'challenge', 'role', 'process', 'solution', 'results'],
    emphasis: 'storytelling-with-data',
    artifactPlacements: {
      journeyMap: 'after-section-2',
      userFlow: 'after-section-3'
    }
  },

  // Template 2: Moritz Oesterlau Style - Process-Documented
  // Inspired by moritzoesterlau.de - UX/UI Designer, CareerFoundry Tutor
  // Key traits: Comprehensive documentation, step-by-step journey, accessible
  moritz: {
    id: 'moritz',
    name: 'Process Journey',
    description: 'Document your complete design journey from concept to implementation. Inspired by Moritz Oesterlau\'s portfolio.',
    thumbnail: 'moritz',
    inspiration: 'moritzoesterlau.de',
    layout: {
      hero: 'conversational',
      sections: 'step-by-step',
      spacing: 'generous',
      maxWidth: '900px'
    },
    features: ['Full process docs', 'Method explanations', 'Learning outcomes', 'Accessible layout'],
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
      }
    },
    contentOrder: ['overview', 'research', 'ideation', 'design', 'testing', 'results', 'learnings'],
    emphasis: 'methodology',
    artifactPlacements: {
      journeyMap: 'after-section-1',
      userFlow: 'after-section-3'
    }
  },

  // Template 3: Lola Jiang Style - Data-Driven Leadership
  // Inspired by lolajiang.com - Product Designer at Google
  // Key traits: Strategic framing, quantified results, leadership narrative
  lola: {
    id: 'lola',
    name: 'Data-Driven',
    description: 'Strategic, metrics-focused presentation with business context. Inspired by Lola Jiang\'s portfolio (Google).',
    thumbnail: 'lola',
    inspiration: 'lolajiang.com',
    layout: {
      hero: 'strategic',
      sections: 'business-focused',
      spacing: 'compact',
      maxWidth: '1100px'
    },
    features: ['Business metrics', 'Strategic context', 'Leadership scope', 'ROI focused'],
    colorSchemes: ['light'],
    sectionStyles: {
      hero: {
        padding: 'py-24 md:py-32',
        titleSize: 'text-4xl md:text-5xl',
        layout: 'strategic',
        showRole: true
      },
      content: {
        padding: 'py-16',
        layout: 'strategic'
      }
    },
    contentOrder: ['context', 'challenge', 'approach', 'solution', 'impact'],
    emphasis: 'business-value',
    artifactPlacements: {
      journeyMap: 'after-section-2',
      userFlow: 'after-section-3'
    }
  },

  // Template 4: Gloria Lo Style - Visual-First Personal
  // Inspired by glorialo.design - Product Designer at Canva
  // Key traits: Visual-first, personal branding, creative expression
  gloria: {
    id: 'gloria',
    name: 'Visual Storyteller',
    description: 'Visual-first presentation with personal branding elements. Inspired by Gloria Lo\'s portfolio (Canva).',
    thumbnail: 'gloria',
    inspiration: 'glorialo.design',
    layout: {
      hero: 'visual-splash',
      sections: 'gallery-driven',
      spacing: 'medium',
      maxWidth: '1200px'
    },
    features: ['Visual-first', 'Image galleries', 'Personal branding', 'Creative flair'],
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
        layout: 'gallery'
      }
    },
    contentOrder: ['hero', 'overview', 'process', 'showcase', 'results'],
    emphasis: 'visual-impact',
    artifactPlacements: {
      journeyMap: 'after-section-2',
      userFlow: 'after-section-4'
    }
  },

  // Template 5: Pratibha Joshi Style - Clean Grid Storytelling
  // Inspired by pratibhajoshi.com - Product Designer at Google, Microsoft
  // Key traits: Clean grid, user-centric, thorough case studies, professional
  pratibha: {
    id: 'pratibha',
    name: 'Clean Professional',
    description: 'Clean grid layout with thorough, user-centric case studies. Inspired by Pratibha Joshi\'s portfolio (Google, Microsoft).',
    thumbnail: 'pratibha',
    inspiration: 'pratibhajoshi.com',
    layout: {
      hero: 'professional',
      sections: 'grid-based',
      spacing: 'balanced',
      maxWidth: '1000px'
    },
    features: ['Clean grid', 'User-centric', 'Thorough studies', 'Professional polish'],
    colorSchemes: ['light'],
    sectionStyles: {
      hero: {
        padding: 'py-20 md:py-28',
        titleSize: 'text-4xl md:text-6xl',
        layout: 'professional',
        showMentions: true
      },
      content: {
        padding: 'py-16',
        layout: 'grid-structured'
      }
    },
    contentOrder: ['overview', 'problem', 'research', 'design', 'solution', 'impact'],
    emphasis: 'user-centered',
    artifactPlacements: {
      journeyMap: 'after-section-2',
      userFlow: 'after-section-3'
    }
  },

  // Template 6: Carex UX Case Study Template
  // Based on Figma Community template by Kailash S R & Mohamed Arshad
  // Key traits: Comprehensive UX process, Double Diamond, personas, analysis frameworks
  carex: {
    id: 'carex',
    name: 'Carex Complete',
    description: 'Comprehensive UX case study template with full research & analysis sections. Based on the popular Figma community template.',
    thumbnail: 'carex',
    inspiration: 'Figma Community - Carex Template',
    layout: {
      hero: 'centered-minimal',
      sections: 'full-process',
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
      body: '16px',
      lineHeight: '1.6'
    },
    features: ['Double Diamond', 'User Personas', 'Competitor Analysis', 'Root Cause Analysis', 'Taskflows'],
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
        layout: 'comprehensive'
      }
    },
    contentOrder: [
      'hero',
      'problem-statement',
      'objectives-goals',
      'process',
      'business-challenges',
      'product-users',
      'quantitative-research',
      'user-needs',
      'features-functionalities',
      'user-challenges',
      'competitor-analysis',
      'unique-features',
      'user-persona',
      'task-mapping',
      'prioritization-matrix',
      'five-why-analysis',
      'root-cause-analysis',
      'taskflows',
      'sketches',
      'major-screens',
      'final-screens',
      'thank-you'
    ],
    emphasis: 'comprehensive-ux-process',
    artifactPlacements: {
      journeyMap: 'after-section-3',
      userFlow: 'after-section-4'
    }
  }
};

// Template section configurations based on portfolio research
export const templateSections = {
  // Simon Pan style - Outcome-first structure
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

  // Moritz style - Comprehensive process documentation
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

  // Lola style - Strategic business-focused
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

  // Gloria style - Visual gallery-driven
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

  // Pratibha style - Thorough user-centric
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

  // Carex style - Comprehensive UX process (from Figma community template)
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

  // Standard UX case study sections (fallback)
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

// Get template by ID
export const getTemplate = (templateId) => {
  return templates[templateId] || templates.pratibha;
};

// Get all templates as array
export const getAllTemplates = () => {
  return Object.values(templates);
};

export default templates;
