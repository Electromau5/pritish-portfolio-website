// Carex Template Figma Design Configuration
// Generated from Figma: https://www.figma.com/design/HMa9h6NPWjVfhIzESoGyz3/UX-Case-Study-Template--Free---Community---Copy-?node-id=52-1501
// This file contains the design specifications from the Figma frames for the Carex template

export const carexDesignTokens = {
  // Core Colors from Figma
  colors: {
    dark: '#282D46',           // Primary text color
    primary: '#188AEC',        // Primary accent/action color
    extraLight: '#F6FAFE',     // Light background sections
    light: '#CBD4DC',          // Borders and dividers
    lightSecondary: '#EFEFEF', // Secondary light backgrounds
    extraLightSecondary: '#EDF6FE', // Tertiary backgrounds
    white: '#FFFFFF',          // Main background
    darkSecondary: '#143D61',  // Dark secondary text
    sunglow: '#FFD52F',        // Highlight/warning
    cons: '#F57878',           // Error/negative indicators

    // Eisenhower Matrix Colors
    eisenhower: {
      doFirst: 'rgba(143, 216, 24, 0.3)',     // Green - Important & Urgent
      schedule: 'rgba(125, 209, 255, 0.28)',   // Blue - Important & Not Urgent
      delegate: '#FFF4CE',                      // Yellow - Not Important & Urgent
      eliminate: '#FCCFCF',                     // Red - Not Important & Not Urgent
      doFirstText: '#3C5612',
      scheduleText: '#282D46',
      delegateText: '#67530C',
      eliminateText: '#49010E'
    },

    // Screen label color
    screenLabel: '#6A7D8E'
  },

  // Typography from Figma (Poppins font family)
  typography: {
    fontFamily: "'Poppins', sans-serif",

    // Heading styles
    title: {
      fontSize: '72px',
      fontWeight: 600,
      letterSpacing: '-2.5%',
      lineHeight: '100%',
      style: 'SemiBold'
    },
    heading: {
      fontSize: '48px',
      fontWeight: 600,
      letterSpacing: '-3%',
      lineHeight: '100%',
      style: 'SemiBold'
    },
    subheading: {
      fontSize: '32px',
      fontWeight: 600,
      letterSpacing: '-3%',
      lineHeight: '100%',
      style: 'SemiBold'
    },

    // Body styles
    body: {
      fontSize: '26px',
      fontWeight: 500,
      lineHeight: '1.826',
      style: 'Medium'
    },
    bodyBold: {
      fontSize: '26px',
      fontWeight: 600,
      lineHeight: '1.826',
      style: 'SemiBold'
    },
    bodyLight: {
      fontSize: '26px',
      fontWeight: 400,
      lineHeight: '1.826',
      style: 'Regular'
    },
    bodySmall: {
      fontSize: '22px',
      fontWeight: 500,
      lineHeight: '1.731',
      style: 'Medium'
    },
    bodyExtraSmall: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '1.481',
      style: 'Regular'
    },
    caption: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '100%',
      style: 'Regular'
    }
  },

  // Spacing and layout
  layout: {
    maxWidth: '1512px',
    contentPadding: '172px', // Left padding from Figma frames
    sectionGap: '100px',
    itemGap: '20px'
  }
};

// Section-specific design configurations from Figma
export const carexSectionDesigns = {
  // ═══════════════════════════════════════════════════════════════════════════
  // HERO SECTION
  // ═══════════════════════════════════════════════════════════════════════════
  hero: {
    figmaNodeId: '60:4311',
    name: 'Hero',
    dimensions: { width: 1514, height: 1396 },
    layout: {
      type: 'split', // Left content, right phone mockups
      leftColumnWidth: '45%',
      tagPosition: { top: 459, left: 174 }
    },
    components: {
      tag: {
        background: '#F6FAFE',
        borderRadius: '61px',
        padding: '20px 35px',
        fontSize: '20px',
        textColor: '#282D46'
      },
      title: {
        fontSize: '72px',
        fontWeight: 600,
        letterSpacing: '-1.8px',
        color: '#282D46',
        marginTop: '144px'
      },
      cursor: {
        nameTag: {
          background: '#188AEC',
          borderRadius: '8px',
          padding: '11px 16px',
          fontSize: '17px',
          color: 'white'
        }
      },
      phoneMockups: {
        rotation: 329.628,
        arrangement: 'cascading',
        shadowColor: 'rgba(35, 44, 93, 0.03)'
      }
    },
    contentStructure: {
      tag: 'UX Case Study',
      title: 'UX Case Study\nTemplate',
      mockupCount: 6
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROBLEM STATEMENT
  // ═══════════════════════════════════════════════════════════════════════════
  problemStatement: {
    figmaNodeId: '52:2415',
    name: 'Problem Statement',
    dimensions: { width: 1513, height: 477 },
    layout: {
      type: 'centered',
      textAlign: 'center',
      maxWidth: '920px',
      decorativeBorder: true
    },
    components: {
      border: {
        color: '#188AEC',
        width: '2px',
        style: 'solid',
        cornerSquares: {
          size: 22,
          borderWidth: '1.5px'
        }
      },
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      description: {
        fontSize: '26px',
        fontWeight: 500,
        lineHeight: 1.826,
        color: '#282D46',
        marginTop: '31px'
      }
    },
    contentStructure: {
      title: 'Problem Statement',
      description: '1-2 sentences describing the core problem'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OBJECTIVES & GOALS
  // ═══════════════════════════════════════════════════════════════════════════
  objectivesGoals: {
    figmaNodeId: '52:2474',
    name: 'Objectives & Goals',
    dimensions: { width: 1513, height: 426 },
    layout: {
      type: 'twoColumn',
      columnGap: '104px',
      titlePosition: 'top-left'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      listItems: {
        fontSize: '26px',
        fontWeight: 500,
        lineHeight: 1.826,
        color: '#282D46',
        listStyleType: 'disc',
        marginLeft: '39px'
      }
    },
    contentStructure: {
      title: 'Objectives & Goals',
      columns: 2,
      itemsPerColumn: 1
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OUR PROCESS (Double Diamond)
  // ═══════════════════════════════════════════════════════════════════════════
  ourProcess: {
    figmaNodeId: '52:2475',
    name: 'Our Process',
    dimensions: { width: 1515, height: 673 },
    layout: {
      type: 'centered-grid',
      gridColumns: 4,
      gridGap: '81px'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46',
        textAlign: 'center'
      },
      processStep: {
        iconContainer: {
          size: 188,
          background: '#F6FAFE', // For first, others vary
          borderRadius: '50%'
        },
        iconSize: 71,
        label: {
          fontSize: '32px',
          fontWeight: 500,
          letterSpacing: '-0.66px',
          color: '#282D46',
          marginTop: '32px'
        }
      }
    },
    contentStructure: {
      title: 'Our Process',
      steps: [
        { name: 'Discover', icon: 'discovery' },
        { name: 'Define', icon: 'copywriting' },
        { name: 'Ideate', icon: 'idea' },
        { name: 'Design', icon: 'design' }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BUSINESS CHALLENGES
  // ═══════════════════════════════════════════════════════════════════════════
  businessChallenges: {
    figmaNodeId: '52:2476',
    name: 'Business Challenges',
    dimensions: { width: 1513, height: 643 },
    layout: {
      type: 'list',
      listGap: '9px'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      listItem: {
        icon: {
          type: 'arrow',
          color: '#F57878', // Cons color
          width: 39,
          height: 16
        },
        text: {
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: 1.826,
          color: '#282D46',
          marginLeft: '46px'
        }
      }
    },
    contentStructure: {
      title: 'Business Challenges',
      minItems: 3,
      maxItems: 5
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PRODUCT USERS
  // ═══════════════════════════════════════════════════════════════════════════
  productUsers: {
    figmaNodeId: '52:2477',
    name: 'Product Users',
    dimensions: { width: 1513, height: 1003 },
    layout: {
      type: 'centered-with-avatars',
      background: '#F6FAFE',
      backgroundHeight: 626,
      avatarPositions: 'floating'
    },
    components: {
      background: {
        color: '#F6FAFE',
        marginTop: 172
      },
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46',
        textAlign: 'center'
      },
      description: {
        fontSize: '26px',
        fontWeight: 500,
        lineHeight: 1.826,
        color: '#282D46',
        textAlign: 'center',
        maxWidth: '595px'
      },
      avatars: {
        sizes: [276, 276, 172], // Different sizes for visual hierarchy
        blur: true,
        shadowRings: true
      }
    },
    contentStructure: {
      title: 'Product Users',
      description: '2-3 sentences about target users',
      avatarCount: 3
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // QUANTITATIVE RESEARCH
  // ═══════════════════════════════════════════════════════════════════════════
  quantitativeResearch: {
    figmaNodeId: '52:2478',
    name: 'Quantitative Research',
    dimensions: { width: 1513, height: 1542 },
    layout: {
      type: 'scattered-metrics',
      metricsLayout: 'organic'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      subtitle: {
        fontSize: '32px',
        fontWeight: 600,
        letterSpacing: '-0.96px',
        color: '#282D46',
        label: 'Observations'
      },
      description: {
        fontSize: '26px',
        fontWeight: 500,
        lineHeight: 1.826,
        color: '#282D46'
      },
      metric: {
        value: {
          fontSize: '48px',
          fontWeight: 600,
          letterSpacing: '-1.44px',
          color: '#188AEC' // Primary accent
        },
        label: {
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: 1.826,
          color: '#282D46'
        }
      }
    },
    contentStructure: {
      title: 'Quantitative Research',
      description: 'Explain your research methodology',
      observations: [
        { percentage: '80%', description: 'Finding 1' },
        { percentage: '50%', description: 'Finding 2' },
        { percentage: '30%', description: 'Finding 3' },
        { percentage: '90%', description: 'Finding 4' },
        { percentage: '60%', description: 'Finding 5' }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // USER NEEDS
  // ═══════════════════════════════════════════════════════════════════════════
  userNeeds: {
    figmaNodeId: '52:2479',
    name: 'User Needs',
    dimensions: { width: 1513, height: 667 },
    layout: {
      type: 'list-with-arrows',
      arrowPosition: 'left'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      arrows: {
        color: '#188AEC',
        width: 39,
        height: 276, // Vertical arrow stack
        type: 'sequential'
      },
      listItem: {
        fontSize: '26px',
        fontWeight: 500,
        lineHeight: 1.826,
        color: '#282D46',
        marginLeft: '84px',
        gap: '20px'
      }
    },
    contentStructure: {
      title: 'User Needs',
      itemCount: 3
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FEATURES & FUNCTIONALITIES
  // ═══════════════════════════════════════════════════════════════════════════
  featuresFunctionalities: {
    figmaNodeId: '52:2480',
    name: 'Features & Functionalities',
    dimensions: { width: 1513, height: 713 },
    layout: {
      type: 'centered-icons-grid',
      gridColumns: 3,
      textAlign: 'center'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46',
        textAlign: 'center'
      },
      subtitle: {
        fontSize: '32px',
        fontWeight: 600,
        letterSpacing: '-0.96px',
        color: '#282D46',
        textAlign: 'center'
      },
      feature: {
        iconContainer: {
          size: 131,
          borderRadius: '50%',
          background: '#F6FAFE' // Varies per feature
        },
        iconSize: 48,
        label: {
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: 1.826,
          color: '#282D46',
          textAlign: 'center',
          marginTop: '34px'
        }
      }
    },
    contentStructure: {
      title: 'Features & Functionalities',
      subtitle: 'To resolve user needs',
      featureCount: 3
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PRODUCT USER CHALLENGES
  // ═══════════════════════════════════════════════════════════════════════════
  productUserChallenges: {
    figmaNodeId: '52:2481',
    name: 'Product User Challenges',
    dimensions: { width: 1510, height: 769 },
    layout: {
      type: 'list-with-arrows',
      arrowPosition: 'left'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      arrows: {
        color: '#188AEC',
        width: 39,
        height: 364,
        type: 'sequential'
      },
      listItem: {
        fontSize: '26px',
        fontWeight: 500,
        lineHeight: 1.826,
        color: '#282D46',
        marginLeft: '84px',
        gap: '20px'
      }
    },
    contentStructure: {
      title: 'Product User Challenges',
      itemCount: 4
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPETITOR ANALYSIS
  // ═══════════════════════════════════════════════════════════════════════════
  competitorAnalysis: {
    figmaNodeId: '52:2482',
    name: 'Competitor Analysis',
    dimensions: { width: 1510, height: 1378 },
    layout: {
      type: 'two-column-cards',
      logoPosition: 'right'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      competitor: {
        name: {
          fontSize: '32px',
          fontWeight: 600,
          letterSpacing: '-0.96px',
          color: '#282D46'
        },
        description: {
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: 1.826,
          color: '#282D46'
        },
        featuresLabel: {
          fontSize: '26px',
          fontWeight: 600,
          lineHeight: 1.826,
          color: '#282D46'
        },
        featureItem: {
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: 1.826,
          color: '#282D46',
          icon: {
            color: '#188AEC',
            type: 'arrow'
          }
        }
      }
    },
    contentStructure: {
      title: 'Competitor Analysis',
      competitors: [
        { name: 'Competitor 1', description: '', features: [] },
        { name: 'Competitor 2', description: '', features: [] }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // UNIQUE FEATURES
  // ═══════════════════════════════════════════════════════════════════════════
  uniqueFeatures: {
    figmaNodeId: '52:2483',
    name: 'Unique Features',
    dimensions: { width: 1510, height: 648 },
    layout: {
      type: 'list-with-checkmarks',
      background: '#F6FAFE',
      fullWidth: true
    },
    components: {
      background: {
        color: '#F6FAFE'
      },
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46',
        textAlign: 'center'
      },
      listItem: {
        icon: {
          type: 'checkmark',
          color: '#188AEC',
          width: 39,
          height: 16
        },
        text: {
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: 1.826,
          color: '#282D46',
          marginLeft: '84px'
        },
        gap: '20px'
      }
    },
    contentStructure: {
      title: 'Unique Features',
      itemCount: 3
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // USER PERSONA
  // ═══════════════════════════════════════════════════════════════════════════
  userPersona: {
    figmaNodeId: '52:2484',
    name: 'User Persona',
    dimensions: { width: 1511, height: 1360 },
    layout: {
      type: 'two-column-persona',
      leftColumn: 'profile',
      rightColumn: 'details'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      profile: {
        image: {
          size: 158,
          borderRadius: '50%',
          mask: true
        },
        name: {
          fontSize: '26px',
          fontWeight: 600,
          lineHeight: 1.826,
          color: '#282D46',
          textAlign: 'center'
        },
        role: {
          fontSize: '26px',
          fontWeight: 400,
          lineHeight: 1.826,
          color: '#188AEC',
          textAlign: 'center'
        }
      },
      about: {
        sectionTitle: {
          fontSize: '26px',
          fontWeight: 600,
          lineHeight: 1.826,
          color: '#282D46'
        },
        iconBadge: {
          size: 32,
          background: '#188AEC',
          iconColor: '#F6FAFE'
        },
        infoItem: {
          fontSize: '22px',
          fontWeight: 500,
          lineHeight: 1.731,
          color: '#282D46'
        }
      },
      sections: {
        description: { title: 'Description' },
        dayInLife: { title: 'A day in their life' },
        painPoints: { title: 'Pain points' }
      },
      maslowPyramid: {
        enabled: true,
        levels: ['Physiological', 'Safety', 'Love Belonging', 'Esteem', 'Self Actualisation'],
        activeColor: '#188AEC'
      },
      quote: {
        background: '#F6FAFE',
        borderRadius: '37px 0 0 37px',
        fontSize: '22px',
        fontWeight: 500,
        lineHeight: 1.731,
        color: '#143D61'
      }
    },
    contentStructure: {
      title: 'User Persona',
      persona: {
        name: '',
        role: '',
        age: '',
        location: '',
        education: '',
        status: '',
        description: '',
        dayInLife: [],
        painPoints: [],
        maslowLevel: 'Esteem',
        quote: ''
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TASK MAPPING
  // ═══════════════════════════════════════════════════════════════════════════
  taskMapping: {
    figmaNodeId: '52:2485',
    name: 'Task Mapping',
    dimensions: { width: 1511, height: 1715 },
    layout: {
      type: 'table',
      columns: 5,
      rows: 8
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      table: {
        border: {
          color: '#CBD4DC',
          width: '1px'
        },
        header: {
          fontSize: '22px',
          fontWeight: 500,
          lineHeight: 1.731,
          color: '#282D46',
          background: '#F6FAFE'
        },
        cell: {
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: 1.481,
          color: '#282D46',
          padding: '20px'
        },
        rowLabel: {
          fontSize: '22px',
          fontWeight: 500,
          lineHeight: 1.731,
          color: '#282D46'
        }
      }
    },
    contentStructure: {
      title: 'Task Mapping',
      columns: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
      rows: ['Task', 'Environment', 'Challenges', 'Emotions', 'Thoughts', 'Urgency Level', 'Design Opportunity']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EISENHOWER MATRIX (Prioritization)
  // ═══════════════════════════════════════════════════════════════════════════
  eisenhowerMatrix: {
    figmaNodeId: '52:2486',
    name: 'Eisen Hover Matrix',
    dimensions: { width: 1511, height: 1099 },
    layout: {
      type: '2x2-grid',
      axisLabels: true
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      axisLabel: {
        fontSize: '32px',
        fontWeight: 600,
        letterSpacing: '-0.96px',
        color: '#282D46'
      },
      quadrant: {
        borderRadius: '16px',
        padding: '35px',
        listItem: {
          fontSize: '22px',
          fontWeight: 500,
          lineHeight: 1.731,
          listStyleType: 'disc'
        }
      },
      quadrants: {
        doFirst: {
          background: 'rgba(143, 216, 24, 0.3)',
          textColor: '#3C5612',
          label: 'Important & Urgent'
        },
        schedule: {
          background: 'rgba(125, 209, 255, 0.28)',
          textColor: '#282D46',
          label: 'Important & Not Urgent'
        },
        delegate: {
          background: '#FFF4CE',
          textColor: '#67530C',
          label: 'Not Important & Urgent'
        },
        eliminate: {
          background: '#FCCFCF',
          textColor: '#49010E',
          label: 'Not Important & Not Urgent'
        }
      }
    },
    contentStructure: {
      title: 'Eisen Hover Matrix',
      xAxis: { left: 'Urgent', right: 'Not Urgent' },
      yAxis: { top: 'Important', bottom: 'Not Important' }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 5 WHY ANALYSIS
  // ═══════════════════════════════════════════════════════════════════════════
  fiveWhyAnalysis: {
    figmaNodeId: '52:2487',
    name: '5 Why Analysis',
    dimensions: { width: 1511, height: 1265 },
    layout: {
      type: 'flowchart',
      direction: 'vertical',
      branches: 2
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      problemBox: {
        background: '#188AEC',
        borderRadius: '15px',
        padding: '26px 86px',
        text: {
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: 1.826,
          color: '#FFFFFF'
        }
      },
      causeBox: {
        background: '#EFEFEF',
        borderRadius: '15px',
        padding: '19px 112px',
        minHeight: 95,
        text: {
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: 1.826,
          color: '#282D46',
          textAlign: 'center'
        }
      },
      rootCauseBox: {
        background: '#EDF6FE',
        borderRadius: '15px',
        padding: '21px 87px',
        text: {
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: 1.826,
          color: '#283264',
          textAlign: 'center'
        }
      },
      arrows: {
        color: '#CBD4DC',
        style: 'curved'
      }
    },
    contentStructure: {
      title: '5 Why Analysis',
      problems: ['Problem 1', 'Problem 2'],
      causeLevels: 4,
      rootCause: 'Root Cause'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ROOT CAUSE ANALYSIS (RCA)
  // ═══════════════════════════════════════════════════════════════════════════
  rootCauseAnalysis: {
    figmaNodeId: '52:2488',
    name: 'Root Cause Analysis (RCA)',
    dimensions: { width: 1511, height: 1574 },
    layout: {
      type: 'fishbone',
      branches: 'hierarchical'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      problemBox: {
        background: '#188AEC',
        borderRadius: '10px',
        padding: '20px 50px',
        text: {
          fontSize: '26px',
          fontWeight: 400,
          lineHeight: 1.826,
          color: '#FFFFFF',
          textAlign: 'center'
        }
      },
      cause: {
        primary: {
          fontSize: '26px',
          fontWeight: 400,
          lineHeight: 1.826,
          color: '#282D46'
        },
        highlighted: {
          fontSize: '26px',
          fontWeight: 400,
          lineHeight: 1.826,
          color: '#188AEC'
        }
      },
      rootCauseBox: {
        border: '1.5px dashed #CBD4DC',
        borderRadius: '10px',
        padding: '17px 9px',
        text: {
          fontSize: '26px',
          fontWeight: 400,
          lineHeight: 1.826,
          color: '#188AEC',
          textAlign: 'center'
        }
      },
      arrows: {
        color: '#CBD4DC'
      }
    },
    contentStructure: {
      title: 'Root Cause Analysis (RCA)',
      branches: 3,
      depthLevels: 4
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TASKFLOWS
  // ═══════════════════════════════════════════════════════════════════════════
  taskflows: {
    figmaNodeId: '52:2489',
    name: 'Taskflows',
    dimensions: { width: 1512, height: 2401 },
    layout: {
      type: 'flowchart-scenarios',
      scenarioCount: 2
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      scenarioTitle: {
        fontSize: '32px',
        fontWeight: 600,
        letterSpacing: '-0.96px',
        color: '#282D46'
      },
      scenarioDescription: {
        fontSize: '26px',
        fontWeight: 500,
        lineHeight: 1.826,
        color: '#282D46'
      },
      flowBox: {
        background: '#F6FAFE',
        padding: '19px',
        minHeight: 88,
        text: {
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: 1.826,
          color: '#282D46',
          textAlign: 'center'
        }
      },
      arrows: {
        color: '#CBD4DC',
        style: 'curved'
      }
    },
    contentStructure: {
      title: 'Taskflows',
      scenarios: [
        { title: 'Scenario 1', description: '', steps: [] },
        { title: 'Scenario 2', description: '', steps: [] }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SKETCHES
  // ═══════════════════════════════════════════════════════════════════════════
  sketches: {
    figmaNodeId: '52:2490',
    name: 'Sketches',
    dimensions: { width: 1507, height: 2691 },
    layout: {
      type: 'phone-mockup-grid',
      columns: 3,
      rows: 3,
      gap: { horizontal: 97, vertical: 111 }
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      phoneMockup: {
        type: 'iPhone X light',
        width: 328,
        height: 671,
        wireframeStyle: true
      }
    },
    contentStructure: {
      title: 'Sketches',
      sketchCount: 9,
      setsOf: 3
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MAJOR SCREENS
  // ═══════════════════════════════════════════════════════════════════════════
  majorScreens: {
    figmaNodeId: '52:2491',
    name: 'Major Screens',
    dimensions: { width: 1507, height: 3832 },
    layout: {
      type: 'annotated-screens',
      screensPerRow: 1,
      annotationStyle: 'lines'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      screenTitle: {
        fontSize: '32px',
        fontWeight: 600,
        letterSpacing: '-0.96px',
        color: '#282D46'
      },
      phoneMockup: {
        type: 'Google Pixel',
        width: 138,
        height: 281,
        centered: true
      },
      annotation: {
        line: {
          color: '#188AEC',
          width: 134,
          height: 3
        },
        text: {
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: 1.826,
          color: '#282D46'
        },
        position: 'both-sides' // Left and right annotations
      }
    },
    contentStructure: {
      title: 'Major Screens',
      screens: [
        {
          title: 'Home Screen',
          annotations: {
            left: ['Menu', 'Map view', 'Navigation bar'],
            right: ['Notifications', 'Search bar', 'Upcoming ride details']
          }
        }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SCREENS GALLERY
  // ═══════════════════════════════════════════════════════════════════════════
  screens: {
    figmaNodeId: '52:2493',
    name: 'Screens',
    dimensions: { width: 1512, height: 4945 },
    layout: {
      type: 'categorized-gallery',
      columns: 3,
      rows: 5,
      gap: 40
    },
    components: {
      background: {
        type: 'gradient',
        from: 'rgba(246, 250, 254, 0)',
        to: '#EAF3FD',
        fromPosition: '5.3%',
        toPosition: '35.3%'
      },
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      screenLabel: {
        fontSize: '26px',
        fontWeight: 500,
        lineHeight: 1.826,
        color: '#6A7D8E',
        textAlign: 'center'
      },
      phoneMockup: {
        type: 'iPhone 11 Pro Max',
        width: 313,
        height: 677,
        borderRadius: 26,
        shadow: {
          color: 'rgba(17, 58, 93, 0.03)',
          offset: { x: 0, y: 17 }
        }
      }
    },
    contentStructure: {
      title: 'Screens',
      categories: [
        { row: 1, labels: ['Onboarding', 'Login', 'Personal Details'] },
        { row: 2, labels: ['Additional Details', 'OTP Verification', 'Home'] },
        { row: 3, labels: ['Pickup & Destination', 'Choose Ride', 'Schedule Ride'] },
        { row: 4, labels: ['Book Ride', 'Searching', 'Ride Details'] },
        { row: 5, labels: ['Passenger Details', 'Driver Details'] }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THANK YOU
  // ═══════════════════════════════════════════════════════════════════════════
  thankYou: {
    figmaNodeId: '52:2494',
    name: 'Thank You',
    dimensions: { width: 1512, height: 1028 },
    layout: {
      type: 'centered-celebration',
      background: '#EAF4FD',
      decoration3D: true
    },
    components: {
      background: {
        color: '#EAF4FD'
      },
      title: {
        fontSize: '114px',
        fontWeight: 600,
        letterSpacing: '-2.85px',
        color: '#282D46',
        textAlign: 'center',
        lineHeight: 1
      },
      decoration: {
        elements: ['sphere', 'torus', 'platonic', 'cube'],
        blur: 6,
        positions: 'corners'
      },
      highlight: {
        type: 'sparkle',
        rotation: 75
      }
    },
    contentStructure: {
      title: 'Thank You\nFor Watching'
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NEW 2025 SECTIONS - Strategic Context & Enhanced Sections
  // ═══════════════════════════════════════════════════════════════════════════

  // ═══════════════════════════════════════════════════════════════════════════
  // BUSINESS IMPACT PREVIEW (NEW - Hook Section)
  // ═══════════════════════════════════════════════════════════════════════════
  businessImpactPreview: {
    figmaNodeId: '2025:001',
    name: 'Business Impact Preview',
    isNew: true,
    dimensions: { width: 1513, height: 600 },
    layout: {
      type: 'metrics-showcase',
      primaryMetricPosition: 'center',
      background: '#F6FAFE'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46',
        textAlign: 'center'
      },
      primaryMetric: {
        value: {
          fontSize: '96px',
          fontWeight: 700,
          color: '#188AEC',
          textAlign: 'center'
        },
        label: {
          fontSize: '26px',
          fontWeight: 500,
          color: '#282D46',
          textAlign: 'center'
        }
      },
      secondaryMetrics: {
        container: {
          display: 'flex',
          justifyContent: 'center',
          gap: '60px'
        },
        value: {
          fontSize: '48px',
          fontWeight: 600,
          color: '#188AEC'
        },
        label: {
          fontSize: '22px',
          fontWeight: 500,
          color: '#282D46'
        }
      }
    },
    contentStructure: {
      title: 'Business Impact Preview',
      primaryMetric: { value: '', label: '' },
      secondaryMetrics: []
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DESIGN VISION & STRATEGY (NEW - Strategic Context)
  // ═══════════════════════════════════════════════════════════════════════════
  designVisionStrategy: {
    figmaNodeId: '2025:002',
    name: 'Design Vision & Strategy',
    isNew: true,
    dimensions: { width: 1513, height: 800 },
    layout: {
      type: 'two-column-principles',
      leftColumn: 'vision',
      rightColumn: 'principles'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      vision: {
        container: {
          background: '#F6FAFE',
          borderRadius: '16px',
          padding: '40px'
        },
        label: {
          fontSize: '26px',
          fontWeight: 600,
          color: '#188AEC',
          marginBottom: '16px'
        },
        text: {
          fontSize: '26px',
          fontWeight: 500,
          lineHeight: 1.826,
          color: '#282D46'
        }
      },
      principles: {
        item: {
          icon: {
            size: 48,
            background: '#188AEC',
            color: '#FFFFFF'
          },
          title: {
            fontSize: '26px',
            fontWeight: 600,
            color: '#282D46'
          },
          description: {
            fontSize: '22px',
            fontWeight: 400,
            color: '#666666'
          }
        },
        gap: '24px'
      }
    },
    contentStructure: {
      title: 'Design Vision & Strategy',
      vision: '',
      strategy: '',
      principles: [],
      northStar: ''
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CROSS-FUNCTIONAL ALIGNMENT (NEW - Strategic Context)
  // ═══════════════════════════════════════════════════════════════════════════
  crossFunctionalAlignment: {
    figmaNodeId: '2025:003',
    name: 'Cross-Functional Alignment',
    isNew: true,
    dimensions: { width: 1513, height: 900 },
    layout: {
      type: 'stakeholder-grid',
      columns: 3
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      stakeholderCard: {
        container: {
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid #CBD4DC'
        },
        icon: {
          size: 64,
          background: '#F6FAFE',
          borderRadius: '50%'
        },
        title: {
          fontSize: '32px',
          fontWeight: 600,
          color: '#282D46',
          marginTop: '20px'
        },
        collaboration: {
          fontSize: '22px',
          fontWeight: 500,
          lineHeight: 1.731,
          color: '#282D46'
        },
        outcomes: {
          fontSize: '20px',
          fontWeight: 400,
          color: '#666666'
        }
      }
    },
    contentStructure: {
      title: 'Cross-Functional Alignment',
      pmPartnership: { collaboration: '', sharedGoals: '', outcomes: '' },
      engineeringCollaboration: { collaboration: '', technicalDiscussions: '', outcomes: '' },
      dataScienceCoordination: { collaboration: '', dataInsights: '', outcomes: '' }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TECHNICAL CONSTRAINTS (NEW - Strategic Context)
  // ═══════════════════════════════════════════════════════════════════════════
  technicalConstraints: {
    figmaNodeId: '2025:004',
    name: 'Technical Constraints',
    isNew: true,
    dimensions: { width: 1513, height: 700 },
    layout: {
      type: 'constraints-list',
      twoColumn: true
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      constraint: {
        container: {
          background: '#FFF4CE',
          borderRadius: '12px',
          padding: '24px'
        },
        icon: {
          type: 'warning',
          color: '#67530C'
        },
        text: {
          fontSize: '22px',
          fontWeight: 500,
          color: '#67530C'
        }
      },
      adaptation: {
        container: {
          background: '#EDF6FE',
          borderRadius: '12px',
          padding: '24px'
        },
        icon: {
          type: 'checkmark',
          color: '#188AEC'
        },
        text: {
          fontSize: '22px',
          fontWeight: 500,
          color: '#282D46'
        }
      }
    },
    contentStructure: {
      title: 'Technical Constraints',
      constraints: [],
      designAdaptations: [],
      tradeoffs: []
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // AI/ML CONSIDERATIONS (NEW - Critical for AI Roles)
  // ═══════════════════════════════════════════════════════════════════════════
  aiMlConsiderations: {
    figmaNodeId: '2025:005',
    name: 'AI/ML Considerations',
    isNew: true,
    isCriticalForAI: true,
    dimensions: { width: 1513, height: 1200 },
    layout: {
      type: 'four-quadrant',
      quadrantGap: '32px'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      badge: {
        text: 'CRITICAL FOR AI ROLES',
        background: '#188AEC',
        color: '#FFFFFF',
        fontSize: '14px',
        fontWeight: 600,
        padding: '8px 16px',
        borderRadius: '20px'
      },
      quadrant: {
        container: {
          background: '#F6FAFE',
          borderRadius: '16px',
          padding: '32px'
        },
        title: {
          fontSize: '26px',
          fontWeight: 600,
          color: '#188AEC',
          marginBottom: '16px'
        },
        content: {
          fontSize: '22px',
          fontWeight: 500,
          lineHeight: 1.731,
          color: '#282D46'
        },
        listItem: {
          fontSize: '20px',
          fontWeight: 400,
          color: '#282D46',
          listStyleType: 'disc'
        }
      },
      quadrants: {
        modelCapabilities: {
          icon: 'brain',
          title: 'Model Capabilities & Limitations'
        },
        infrastructureConstraints: {
          icon: 'server',
          title: 'Infrastructure Constraints'
        },
        trustExplainability: {
          icon: 'shield',
          title: 'Trust & Explainability Strategy'
        },
        ethicalConsiderations: {
          icon: 'balance',
          title: 'Ethical Considerations'
        }
      }
    },
    contentStructure: {
      title: 'AI/ML Considerations',
      modelCapabilities: { capabilities: [], limitations: [] },
      infrastructureConstraints: [],
      trustExplainability: { strategy: '', implementation: '', userFeedback: '' },
      ethicalConsiderations: { concerns: [], mitigations: [], guidelines: [] }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KEY INSIGHTS (Enhanced for 2025)
  // ═══════════════════════════════════════════════════════════════════════════
  keyInsights: {
    figmaNodeId: '2025:006',
    name: 'Key Insights',
    isEnhanced: true,
    dimensions: { width: 1513, height: 900 },
    layout: {
      type: 'insight-cards',
      columns: 2
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      insightCard: {
        container: {
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '32px',
          border: '2px solid #188AEC'
        },
        number: {
          fontSize: '48px',
          fontWeight: 700,
          color: '#188AEC'
        },
        insight: {
          fontSize: '26px',
          fontWeight: 600,
          color: '#282D46',
          marginTop: '16px'
        },
        source: {
          fontSize: '18px',
          fontWeight: 500,
          color: '#666666',
          fontStyle: 'italic'
        },
        implication: {
          fontSize: '22px',
          fontWeight: 500,
          color: '#188AEC',
          marginTop: '12px'
        }
      }
    },
    contentStructure: {
      title: 'Key Insights',
      insights: [
        { insight: '', source: '', businessImplication: '', designImplication: '' }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DESIGN EXPLORATIONS & TRADEOFFS (Enhanced for 2025)
  // ═══════════════════════════════════════════════════════════════════════════
  designExplorationsTradeoffs: {
    figmaNodeId: '2025:007',
    name: 'Design Explorations & Tradeoffs',
    isEnhanced: true,
    dimensions: { width: 1513, height: 1400 },
    layout: {
      type: 'exploration-comparison',
      alternativesPerRow: 3
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      alternativeCard: {
        container: {
          background: '#F6FAFE',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #CBD4DC'
        },
        image: {
          width: '100%',
          height: 200,
          borderRadius: '12px',
          objectFit: 'cover'
        },
        name: {
          fontSize: '26px',
          fontWeight: 600,
          color: '#282D46',
          marginTop: '16px'
        },
        pros: {
          icon: { type: 'checkmark', color: '#8FD818' },
          text: { fontSize: '20px', color: '#3C5612' }
        },
        cons: {
          icon: { type: 'x', color: '#F57878' },
          text: { fontSize: '20px', color: '#49010E' }
        }
      },
      constraintSection: {
        container: {
          marginTop: '40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: '24px'
        },
        card: {
          background: '#EFEFEF',
          borderRadius: '12px',
          padding: '20px'
        },
        title: {
          fontSize: '22px',
          fontWeight: 600,
          color: '#282D46'
        },
        items: {
          fontSize: '18px',
          fontWeight: 400,
          color: '#666666'
        }
      },
      decision: {
        container: {
          background: '#EDF6FE',
          borderRadius: '16px',
          padding: '32px',
          marginTop: '40px'
        },
        title: {
          fontSize: '26px',
          fontWeight: 600,
          color: '#188AEC'
        },
        rationale: {
          fontSize: '22px',
          fontWeight: 500,
          color: '#282D46'
        }
      }
    },
    contentStructure: {
      title: 'Design Explorations & Tradeoffs',
      designAlternatives: [],
      technicalConstraints: [],
      businessConstraints: [],
      aiModelConstraints: [],
      decisionRationale: '',
      tradeoffsMade: []
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DESIGN SYSTEM CONTRIBUTION (NEW - Process & Execution)
  // ═══════════════════════════════════════════════════════════════════════════
  designSystemContribution: {
    figmaNodeId: '2025:008',
    name: 'Design System Contribution',
    isNew: true,
    dimensions: { width: 1513, height: 1000 },
    layout: {
      type: 'component-showcase',
      columns: 3
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      componentCard: {
        container: {
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #CBD4DC'
        },
        preview: {
          background: '#F6FAFE',
          borderRadius: '12px',
          padding: '20px',
          height: 150
        },
        name: {
          fontSize: '26px',
          fontWeight: 600,
          color: '#282D46',
          marginTop: '16px'
        },
        description: {
          fontSize: '20px',
          fontWeight: 400,
          color: '#666666'
        },
        usage: {
          fontSize: '18px',
          fontWeight: 500,
          color: '#188AEC'
        }
      },
      adoptionStats: {
        container: {
          background: '#EDF6FE',
          borderRadius: '16px',
          padding: '32px',
          marginTop: '40px'
        },
        stat: {
          value: {
            fontSize: '48px',
            fontWeight: 700,
            color: '#188AEC'
          },
          label: {
            fontSize: '22px',
            fontWeight: 500,
            color: '#282D46'
          }
        }
      }
    },
    contentStructure: {
      title: 'Design System Contribution',
      components: [],
      patterns: [],
      guidelines: [],
      adoption: ''
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHALLENGES & OBSTACLES (Enhanced for 2025)
  // ═══════════════════════════════════════════════════════════════════════════
  challengesObstacles: {
    figmaNodeId: '2025:009',
    name: 'Challenges/Obstacles',
    dimensions: { width: 1513, height: 800 },
    layout: {
      type: 'challenge-resolution',
      style: 'timeline'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      challengeBlock: {
        container: {
          display: 'flex',
          gap: '24px',
          marginBottom: '40px'
        },
        challenge: {
          background: '#FCCFCF',
          borderRadius: '16px',
          padding: '24px',
          flex: 1
        },
        arrow: {
          width: 60,
          color: '#CBD4DC'
        },
        resolution: {
          background: 'rgba(143, 216, 24, 0.3)',
          borderRadius: '16px',
          padding: '24px',
          flex: 1
        },
        title: {
          fontSize: '26px',
          fontWeight: 600,
          marginBottom: '12px'
        },
        text: {
          fontSize: '22px',
          fontWeight: 500,
          lineHeight: 1.731
        }
      }
    },
    contentStructure: {
      title: 'Challenges/Obstacles',
      challenges: [
        { challenge: '', context: '', approach: '', resolution: '' }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TURNING POINT (NEW - Process & Execution)
  // ═══════════════════════════════════════════════════════════════════════════
  turningPoint: {
    figmaNodeId: '2025:010',
    name: 'Turning Point',
    isNew: true,
    dimensions: { width: 1513, height: 600 },
    layout: {
      type: 'narrative-highlight',
      centered: true
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46',
        textAlign: 'center'
      },
      container: {
        background: 'linear-gradient(135deg, #F6FAFE 0%, #EDF6FE 100%)',
        borderRadius: '24px',
        padding: '60px',
        maxWidth: '900px',
        margin: '0 auto'
      },
      badge: {
        text: 'AHA MOMENT',
        background: '#FFD52F',
        color: '#282D46',
        fontSize: '16px',
        fontWeight: 700,
        padding: '8px 20px',
        borderRadius: '20px'
      },
      insight: {
        fontSize: '32px',
        fontWeight: 600,
        color: '#188AEC',
        textAlign: 'center',
        marginTop: '24px',
        lineHeight: 1.4
      },
      impact: {
        fontSize: '22px',
        fontWeight: 500,
        color: '#282D46',
        textAlign: 'center',
        marginTop: '20px'
      }
    },
    contentStructure: {
      title: 'Turning Point',
      situation: '',
      insight: '',
      impact: '',
      evidence: ''
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // VALIDATION & ITERATION (NEW - Process & Execution)
  // ═══════════════════════════════════════════════════════════════════════════
  validationIteration: {
    figmaNodeId: '2025:011',
    name: 'Validation & Iteration',
    isNew: true,
    dimensions: { width: 1513, height: 1100 },
    layout: {
      type: 'iteration-timeline',
      rounds: 3
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      iterationCard: {
        container: {
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '32px',
          border: '2px solid #188AEC'
        },
        roundBadge: {
          background: '#188AEC',
          color: '#FFFFFF',
          fontSize: '18px',
          fontWeight: 700,
          padding: '8px 16px',
          borderRadius: '20px'
        },
        method: {
          fontSize: '22px',
          fontWeight: 600,
          color: '#282D46',
          marginTop: '16px'
        },
        participants: {
          fontSize: '18px',
          fontWeight: 400,
          color: '#666666'
        },
        findings: {
          container: {
            background: '#FFF4CE',
            borderRadius: '12px',
            padding: '16px',
            marginTop: '16px'
          },
          text: {
            fontSize: '20px',
            fontWeight: 500,
            color: '#67530C'
          }
        },
        changes: {
          container: {
            background: 'rgba(143, 216, 24, 0.2)',
            borderRadius: '12px',
            padding: '16px',
            marginTop: '12px'
          },
          text: {
            fontSize: '20px',
            fontWeight: 500,
            color: '#3C5612'
          }
        }
      }
    },
    contentStructure: {
      title: 'Validation & Iteration',
      testingRounds: [
        { round: 1, method: '', participants: '', findings: [], changes: [] }
      ],
      validationMetrics: []
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BUSINESS IMPACT (Enhanced for 2025)
  // ═══════════════════════════════════════════════════════════════════════════
  businessImpact: {
    figmaNodeId: '2025:012',
    name: 'Business Impact',
    isEnhanced: true,
    dimensions: { width: 1513, height: 1200 },
    layout: {
      type: 'impact-dashboard',
      sections: 4
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      metricCard: {
        container: {
          background: '#F6FAFE',
          borderRadius: '16px',
          padding: '32px'
        },
        before: {
          fontSize: '26px',
          fontWeight: 500,
          color: '#F57878',
          textDecoration: 'line-through'
        },
        after: {
          fontSize: '48px',
          fontWeight: 700,
          color: '#188AEC'
        },
        improvement: {
          fontSize: '22px',
          fontWeight: 600,
          color: '#3C5612',
          background: 'rgba(143, 216, 24, 0.3)',
          padding: '4px 12px',
          borderRadius: '12px'
        },
        label: {
          fontSize: '22px',
          fontWeight: 500,
          color: '#282D46'
        }
      },
      qualitativeSection: {
        container: {
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid #CBD4DC'
        },
        title: {
          fontSize: '26px',
          fontWeight: 600,
          color: '#282D46'
        },
        quote: {
          fontSize: '22px',
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#282D46',
          borderLeft: '4px solid #188AEC',
          paddingLeft: '20px'
        }
      },
      behavioralSection: {
        title: {
          fontSize: '26px',
          fontWeight: 600,
          color: '#282D46'
        },
        change: {
          container: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          },
          arrow: {
            color: '#188AEC'
          },
          text: {
            fontSize: '22px',
            fontWeight: 500,
            color: '#282D46'
          }
        }
      }
    },
    contentStructure: {
      title: 'Business Impact',
      quantitativeMetrics: [],
      qualitativeFeedback: [],
      behavioralChanges: [],
      longTermSuccess: ''
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DESIGN SYSTEM IMPACT (NEW - Outcome)
  // ═══════════════════════════════════════════════════════════════════════════
  designSystemImpact: {
    figmaNodeId: '2025:013',
    name: 'Design System Impact',
    isNew: true,
    dimensions: { width: 1513, height: 700 },
    layout: {
      type: 'impact-metrics',
      columns: 4
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      statCard: {
        container: {
          background: '#F6FAFE',
          borderRadius: '16px',
          padding: '32px',
          textAlign: 'center'
        },
        value: {
          fontSize: '64px',
          fontWeight: 700,
          color: '#188AEC'
        },
        label: {
          fontSize: '22px',
          fontWeight: 500,
          color: '#282D46',
          marginTop: '8px'
        }
      }
    },
    contentStructure: {
      title: 'Design System Impact',
      componentsCreated: [],
      patternsEstablished: [],
      adoptionRate: '',
      timeSaved: ''
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // UI/UX IMPROVEMENTS (Enhanced for 2025)
  // ═══════════════════════════════════════════════════════════════════════════
  uiUxImprovements: {
    figmaNodeId: '2025:014',
    name: 'UI/UX Improvements',
    dimensions: { width: 1513, height: 1000 },
    layout: {
      type: 'before-after-grid',
      comparisons: 3
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      comparisonCard: {
        container: {
          background: '#FFFFFF',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid #CBD4DC'
        },
        header: {
          background: '#F6FAFE',
          padding: '16px 24px',
          fontSize: '26px',
          fontWeight: 600,
          color: '#282D46'
        },
        imageContainer: {
          display: 'flex',
          gap: '2px'
        },
        before: {
          background: '#FCCFCF',
          padding: '8px',
          label: {
            fontSize: '14px',
            fontWeight: 600,
            color: '#49010E'
          }
        },
        after: {
          background: 'rgba(143, 216, 24, 0.3)',
          padding: '8px',
          label: {
            fontSize: '14px',
            fontWeight: 600,
            color: '#3C5612'
          }
        },
        metric: {
          background: '#EDF6FE',
          padding: '16px 24px',
          fontSize: '22px',
          fontWeight: 600,
          color: '#188AEC'
        }
      }
    },
    contentStructure: {
      title: 'UI/UX Improvements',
      comparisons: [],
      overallImprovement: ''
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TEAM & ORGANIZATIONAL IMPACT (NEW - Outcome)
  // ═══════════════════════════════════════════════════════════════════════════
  teamOrganizationalImpact: {
    figmaNodeId: '2025:015',
    name: 'Team & Organizational Impact',
    isNew: true,
    dimensions: { width: 1513, height: 800 },
    layout: {
      type: 'impact-categories',
      columns: 3
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      categoryCard: {
        container: {
          background: '#F6FAFE',
          borderRadius: '16px',
          padding: '32px'
        },
        icon: {
          size: 56,
          background: '#188AEC',
          color: '#FFFFFF',
          borderRadius: '50%'
        },
        title: {
          fontSize: '26px',
          fontWeight: 600,
          color: '#282D46',
          marginTop: '20px'
        },
        items: {
          fontSize: '22px',
          fontWeight: 500,
          lineHeight: 1.731,
          color: '#282D46',
          listStyleType: 'disc',
          marginLeft: '20px'
        }
      }
    },
    contentStructure: {
      title: 'Team & Organizational Impact',
      processImprovements: [],
      collaborationWins: [],
      mentorship: [],
      cultureImpact: ''
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // REFLECTION & NEXT STEPS (Enhanced for 2025)
  // ═══════════════════════════════════════════════════════════════════════════
  reflectionNextSteps: {
    figmaNodeId: '2025:016',
    name: 'Reflection & Next Steps',
    dimensions: { width: 1513, height: 800 },
    layout: {
      type: 'two-column-reflection',
      leftColumn: 'learnings',
      rightColumn: 'nextSteps'
    },
    components: {
      title: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '-1.44px',
        color: '#282D46'
      },
      learningsSection: {
        container: {
          background: '#F6FAFE',
          borderRadius: '16px',
          padding: '32px'
        },
        subtitle: {
          fontSize: '26px',
          fontWeight: 600,
          color: '#188AEC',
          marginBottom: '20px'
        },
        item: {
          fontSize: '22px',
          fontWeight: 500,
          lineHeight: 1.731,
          color: '#282D46',
          marginBottom: '16px',
          paddingLeft: '24px',
          borderLeft: '3px solid #188AEC'
        }
      },
      nextStepsSection: {
        container: {
          background: '#EDF6FE',
          borderRadius: '16px',
          padding: '32px'
        },
        subtitle: {
          fontSize: '26px',
          fontWeight: 600,
          color: '#188AEC',
          marginBottom: '20px'
        },
        item: {
          container: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
            marginBottom: '16px'
          },
          number: {
            background: '#188AEC',
            color: '#FFFFFF',
            width: 32,
            height: 32,
            borderRadius: '50%',
            fontSize: '18px',
            fontWeight: 600,
            textAlign: 'center',
            lineHeight: '32px'
          },
          text: {
            fontSize: '22px',
            fontWeight: 500,
            color: '#282D46'
          }
        }
      }
    },
    contentStructure: {
      title: 'Reflection & Next Steps',
      keyLearnings: [],
      whatWouldChange: [],
      futureIterations: [],
      personalGrowth: ''
    }
  }
};

// Helper function to get section design by name
export const getSectionDesign = (sectionName) => {
  const normalizedName = sectionName.toLowerCase().replace(/[^a-z0-9]/g, '');

  const sectionMapping = {
    // Original Carex sections
    'hero': 'hero',
    'problemstatement': 'problemStatement',
    'objectivesgoals': 'objectivesGoals',
    'objectivegoals': 'objectivesGoals',
    'ourprocess': 'ourProcess',
    'process': 'ourProcess',
    'businesschallenges': 'businessChallenges',
    'productusers': 'productUsers',
    'users': 'productUsers',
    'quantitativeresearch': 'quantitativeResearch',
    'research': 'quantitativeResearch',
    'userneeds': 'userNeeds',
    'needs': 'userNeeds',
    'featuresfunctionalities': 'featuresFunctionalities',
    'features': 'featuresFunctionalities',
    'productuserchallenges': 'productUserChallenges',
    'userchallenges': 'productUserChallenges',
    'competitoranalysis': 'competitorAnalysis',
    'competitors': 'competitorAnalysis',
    'uniquefeatures': 'uniqueFeatures',
    'userpersona': 'userPersona',
    'persona': 'userPersona',
    'taskmapping': 'taskMapping',
    'eisenhowermatrix': 'eisenhowerMatrix',
    'eisenhover': 'eisenhowerMatrix',
    'prioritizationmatrix': 'eisenhowerMatrix',
    'prioritization': 'eisenhowerMatrix',
    '5whyanalysis': 'fiveWhyAnalysis',
    'fivewhyanalysis': 'fiveWhyAnalysis',
    'whyanalysis': 'fiveWhyAnalysis',
    'rootcauseanalysis': 'rootCauseAnalysis',
    'rca': 'rootCauseAnalysis',
    'taskflows': 'taskflows',
    'userflows': 'taskflows',
    'sketches': 'sketches',
    'wireframes': 'sketches',
    'majorscreens': 'majorScreens',
    'screens': 'screens',
    'screengallery': 'screens',
    'thankyou': 'thankYou',
    'thanks': 'thankYou',

    // NEW 2025 sections
    'businessimpactpreview': 'businessImpactPreview',
    'impactpreview': 'businessImpactPreview',
    'designvisionstrategy': 'designVisionStrategy',
    'visionstrategy': 'designVisionStrategy',
    'designvision': 'designVisionStrategy',
    'crossfunctionalalignment': 'crossFunctionalAlignment',
    'crossfunctional': 'crossFunctionalAlignment',
    'stakeholderalignment': 'crossFunctionalAlignment',
    'technicalconstraints': 'technicalConstraints',
    'constraints': 'technicalConstraints',
    'aimlconsiderations': 'aiMlConsiderations',
    'aiconsiderations': 'aiMlConsiderations',
    'mlconsiderations': 'aiMlConsiderations',
    'keyinsights': 'keyInsights',
    'insights': 'keyInsights',
    'designexplorationstradeoffs': 'designExplorationsTradeoffs',
    'designexplorations': 'designExplorationsTradeoffs',
    'tradeoffs': 'designExplorationsTradeoffs',
    'explorations': 'designExplorationsTradeoffs',
    'designsystemcontribution': 'designSystemContribution',
    'systemcontribution': 'designSystemContribution',
    'componentcontribution': 'designSystemContribution',
    'challengesobstacles': 'challengesObstacles',
    'challenges': 'challengesObstacles',
    'obstacles': 'challengesObstacles',
    'turningpoint': 'turningPoint',
    'ahahmoment': 'turningPoint',
    'pivot': 'turningPoint',
    'validationiteration': 'validationIteration',
    'validation': 'validationIteration',
    'iteration': 'validationIteration',
    'testing': 'validationIteration',
    'businessimpact': 'businessImpact',
    'impact': 'businessImpact',
    'results': 'businessImpact',
    'designsystemimpact': 'designSystemImpact',
    'systemimpact': 'designSystemImpact',
    'uiuximprovements': 'uiUxImprovements',
    'improvements': 'uiUxImprovements',
    'beforeafter': 'uiUxImprovements',
    'teamorganizationalimpact': 'teamOrganizationalImpact',
    'teamimpact': 'teamOrganizationalImpact',
    'organizationalimpact': 'teamOrganizationalImpact',
    'reflectionnextsteps': 'reflectionNextSteps',
    'reflection': 'reflectionNextSteps',
    'nextsteps': 'reflectionNextSteps',
    'learnings': 'reflectionNextSteps'
  };

  const key = sectionMapping[normalizedName];
  return key ? carexSectionDesigns[key] : null;
};

// Get all available section types for Carex template
export const getCarexSectionTypes = () => {
  return Object.keys(carexSectionDesigns).map(key => ({
    id: key,
    name: carexSectionDesigns[key].name,
    figmaNodeId: carexSectionDesigns[key].figmaNodeId
  }));
};

export default {
  carexDesignTokens,
  carexSectionDesigns,
  getSectionDesign,
  getCarexSectionTypes
};
