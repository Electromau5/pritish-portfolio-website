import React from 'react';
import { ArrowLeft } from 'lucide-react';

// ============================================
// CAREX TEMPLATE - Exact Figma Replica
// Based on UX Case Study Template by Kailash S R & Mohamed Arshad
// ============================================

// Carex Color Palette (from Figma Styling page)
const carexColors = {
  primary: '#188AEC',
  dark: '#282D46',
  darkSecondary: '#143D61',
  light: '#CBD4DC',
  lightSecondary: '#EFEFEF',
  extraLight: '#F6FAFE',
  extraLightSecondary: '#EDF6FE',
  cons: '#F57878',
  white: '#FFFFFF',
};

// Carex Typography Styles (Poppins font from Figma)
const carexTypography = {
  title: {
    fontSize: '72px',
    fontWeight: 600,
    lineHeight: '1.5',
    letterSpacing: '-0.025em',
  },
  heading: {
    fontSize: '48px',
    fontWeight: 600,
    lineHeight: '1.5',
    letterSpacing: '-0.03em',
  },
  subheading: {
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '1.5',
    letterSpacing: '-0.03em',
  },
  body: {
    fontSize: '26px',
    fontWeight: 500,
    lineHeight: '1.82',
  },
  bodyBold: {
    fontSize: '26px',
    fontWeight: 600,
    lineHeight: '1.82',
  },
  bodyLight: {
    fontSize: '26px',
    fontWeight: 400,
    lineHeight: '1.82',
  },
  bodySmall: {
    fontSize: '22px',
    fontWeight: 500,
    lineHeight: '1.73',
  },
  bodyExtraSmall: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '1.48',
  },
};

// ============================================
// SECTION COMPONENTS
// ============================================

// Hero Section - Centered title with tag
const CarexHero = ({ title, subtitle, tag = 'UX Case Study' }) => (
  <section
    className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden"
    style={{ backgroundColor: carexColors.white }}
  >
    {/* Background decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-10"
        style={{ backgroundColor: carexColors.primary }}
      />
      <div
        className="absolute bottom-32 right-20 w-48 h-48 rounded-full opacity-5"
        style={{ backgroundColor: carexColors.primary }}
      />
    </div>

    {/* Tag Badge */}
    <div
      className="px-6 py-2 rounded-full mb-8"
      style={{ backgroundColor: carexColors.extraLight }}
    >
      <span
        style={{
          ...carexTypography.bodyExtraSmall,
          color: carexColors.dark
        }}
      >
        {tag}
      </span>
    </div>

    {/* Title */}
    <h1
      className="text-center max-w-4xl px-6"
      style={{
        ...carexTypography.title,
        color: carexColors.dark,
        fontSize: 'clamp(36px, 8vw, 72px)',
      }}
    >
      {title}
    </h1>

    {/* Subtitle */}
    {subtitle && (
      <p
        className="text-center max-w-2xl px-6 mt-6"
        style={{
          ...carexTypography.body,
          color: carexColors.dark,
          fontSize: 'clamp(18px, 3vw, 26px)',
        }}
      >
        {subtitle}
      </p>
    )}

    {/* Decorative screens preview (optional) */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-32 bg-gradient-to-t from-gray-100 to-transparent opacity-50" />
  </section>
);

// Problem Statement Section
const CarexProblemStatement = ({ title = 'Problem Statement', description }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.white }}
  >
    <div className="max-w-4xl mx-auto">
      <div className="flex items-start gap-12">
        <div className="flex-1">
          <h2
            style={{
              ...carexTypography.heading,
              color: carexColors.dark,
              fontSize: 'clamp(32px, 5vw, 48px)',
              marginBottom: '24px',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              ...carexTypography.body,
              color: carexColors.dark,
              fontSize: 'clamp(16px, 2.5vw, 26px)',
            }}
          >
            {description}
          </p>
        </div>
        {/* Decorative 3D Box */}
        <div
          className="hidden md:block w-32 h-32 rounded-2xl transform rotate-12"
          style={{
            backgroundColor: carexColors.extraLight,
            boxShadow: '0 20px 40px rgba(24, 138, 236, 0.1)',
          }}
        />
      </div>
    </div>
  </section>
);

// Objectives & Goals Section
const CarexObjectives = ({ title = 'Objectives & Goals', items = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.white }}
  >
    <div className="max-w-4xl mx-auto">
      <h2
        style={{
          ...carexTypography.heading,
          color: carexColors.dark,
          fontSize: 'clamp(32px, 5vw, 48px)',
          marginBottom: '32px',
        }}
      >
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4"
          >
            <span
              className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
              style={{ backgroundColor: carexColors.primary }}
            />
            <span
              style={{
                ...carexTypography.body,
                color: carexColors.dark,
                fontSize: 'clamp(16px, 2.5vw, 26px)',
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

// Our Process Section - Double Diamond (Discover, Define, Ideate, Design)
const CarexProcess = ({ title = 'Our Process', steps = ['Discover', 'Define', 'Ideate', 'Design'] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.white }}
  >
    <div className="max-w-5xl mx-auto">
      <h2
        className="text-center"
        style={{
          ...carexTypography.heading,
          color: carexColors.dark,
          fontSize: 'clamp(32px, 5vw, 48px)',
          marginBottom: '48px',
        }}
      >
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Icon Circle */}
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-4 relative"
              style={{ backgroundColor: carexColors.extraLight }}
            >
              {/* Process Icon (simplified representation) */}
              <div
                className="w-12 h-12 md:w-16 md:h-16 rounded-lg"
                style={{
                  backgroundColor: carexColors.primary,
                  opacity: 0.2 + (index * 0.2),
                }}
              />
              {/* Step number */}
              <span
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: carexColors.primary }}
              >
                {index + 1}
              </span>
            </div>
            {/* Step Name */}
            <span
              style={{
                ...carexTypography.subheading,
                color: carexColors.dark,
                fontSize: 'clamp(18px, 3vw, 32px)',
              }}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Business Challenges Section
const CarexChallenges = ({ title = 'Business Challenges', items = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.white }}
  >
    <div className="max-w-4xl mx-auto">
      <h2
        style={{
          ...carexTypography.heading,
          color: carexColors.dark,
          fontSize: 'clamp(32px, 5vw, 48px)',
          marginBottom: '32px',
        }}
      >
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4"
          >
            {/* X Icon for challenges */}
            <svg
              className="w-6 h-6 flex-shrink-0 mt-1"
              style={{ color: carexColors.cons }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span
              style={{
                ...carexTypography.body,
                color: carexColors.dark,
                fontSize: 'clamp(16px, 2.5vw, 26px)',
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

// Product Users Section
const CarexProductUsers = ({ title = 'Product Users', description, users = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.extraLight }}
  >
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2
            style={{
              ...carexTypography.heading,
              color: carexColors.dark,
              fontSize: 'clamp(32px, 5vw, 48px)',
              marginBottom: '16px',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              ...carexTypography.body,
              color: carexColors.dark,
              fontSize: 'clamp(16px, 2.5vw, 26px)',
            }}
          >
            {description}
          </p>
        </div>
        {/* User Avatars */}
        <div className="flex gap-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="w-20 h-20 md:w-28 md:h-28 rounded-full"
              style={{
                backgroundColor: carexColors.lightSecondary,
                border: `3px solid ${carexColors.white}`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Quantitative Research Section
const CarexQuantitativeResearch = ({ title = 'Quantitative Research', subtitle = 'Observations', stats = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.white }}
  >
    <div className="max-w-5xl mx-auto">
      <h2
        style={{
          ...carexTypography.heading,
          color: carexColors.dark,
          fontSize: 'clamp(32px, 5vw, 48px)',
          marginBottom: '16px',
        }}
      >
        {title}
      </h2>
      <h3
        style={{
          ...carexTypography.subheading,
          color: carexColors.dark,
          fontSize: 'clamp(24px, 4vw, 32px)',
          marginBottom: '32px',
        }}
      >
        {subtitle}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-start gap-4">
            <span
              style={{
                ...carexTypography.heading,
                color: carexColors.primary,
                fontSize: 'clamp(32px, 5vw, 48px)',
              }}
            >
              {stat.value}
            </span>
            <p
              className="pt-2"
              style={{
                ...carexTypography.body,
                color: carexColors.dark,
                fontSize: 'clamp(16px, 2.5vw, 26px)',
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// User Needs Section
const CarexUserNeeds = ({ title = 'User Needs', items = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.white }}
  >
    <div className="max-w-5xl mx-auto">
      <h2
        style={{
          ...carexTypography.heading,
          color: carexColors.dark,
          fontSize: 'clamp(32px, 5vw, 48px)',
          marginBottom: '32px',
        }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl"
            style={{ backgroundColor: carexColors.extraLight }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: carexColors.primary }}
            >
              <span className="text-white font-bold">{index + 1}</span>
            </div>
            <p
              style={{
                ...carexTypography.body,
                color: carexColors.dark,
                fontSize: 'clamp(16px, 2vw, 22px)',
              }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Features & Functionalities Section
const CarexFeatures = ({ title = 'Features & Functionalities', features = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.extraLightSecondary }}
  >
    <div className="max-w-5xl mx-auto">
      <h2
        className="text-center"
        style={{
          ...carexTypography.heading,
          color: carexColors.dark,
          fontSize: 'clamp(32px, 5vw, 48px)',
          marginBottom: '48px',
        }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl text-center"
            style={{ backgroundColor: carexColors.white }}
          >
            {/* Feature Icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: carexColors.extraLight }}
            >
              <div
                className="w-8 h-8 rounded"
                style={{ backgroundColor: carexColors.primary }}
              />
            </div>
            <h3
              style={{
                ...carexTypography.subheading,
                color: carexColors.dark,
                fontSize: 'clamp(20px, 3vw, 28px)',
                marginBottom: '12px',
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                ...carexTypography.bodySmall,
                color: carexColors.dark,
                fontSize: 'clamp(14px, 2vw, 20px)',
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Competitor Analysis Section
const CarexCompetitorAnalysis = ({ title = 'Competitor Analysis', competitors = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.white }}
  >
    <div className="max-w-6xl mx-auto">
      <h2
        className="text-center"
        style={{
          ...carexTypography.heading,
          color: carexColors.dark,
          fontSize: 'clamp(32px, 5vw, 48px)',
          marginBottom: '48px',
        }}
      >
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr style={{ backgroundColor: carexColors.extraLight }}>
              <th className="p-4 text-left rounded-tl-2xl" style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: '18px' }}>Feature</th>
              {competitors.map((comp, index) => (
                <th
                  key={index}
                  className={`p-4 text-center ${index === competitors.length - 1 ? 'rounded-tr-2xl' : ''}`}
                  style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: '18px' }}
                >
                  {comp.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitors[0]?.features?.map((feature, fIndex) => (
              <tr key={fIndex} style={{ backgroundColor: fIndex % 2 === 0 ? carexColors.white : carexColors.extraLight }}>
                <td className="p-4" style={{ ...carexTypography.body, color: carexColors.dark, fontSize: '16px' }}>{feature}</td>
                {competitors.map((comp, cIndex) => (
                  <td key={cIndex} className="p-4 text-center">
                    {comp.hasFeature?.[fIndex] ? (
                      <span className="text-green-500 text-xl">✓</span>
                    ) : (
                      <span style={{ color: carexColors.cons }} className="text-xl">✗</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// User Persona Section
const CarexUserPersona = ({ persona }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.extraLight }}
  >
    <div className="max-w-5xl mx-auto">
      <h2
        className="text-center"
        style={{
          ...carexTypography.heading,
          color: carexColors.dark,
          fontSize: 'clamp(32px, 5vw, 48px)',
          marginBottom: '48px',
        }}
      >
        User Persona
      </h2>
      <div
        className="rounded-3xl p-8 md:p-12"
        style={{ backgroundColor: carexColors.white }}
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto"
              style={{ backgroundColor: carexColors.lightSecondary }}
            />
          </div>
          {/* Info */}
          <div className="flex-1">
            <h3
              style={{
                ...carexTypography.subheading,
                color: carexColors.dark,
                fontSize: 'clamp(24px, 4vw, 32px)',
                marginBottom: '8px',
              }}
            >
              {persona?.name || 'User Name'}
            </h3>
            <p
              style={{
                ...carexTypography.body,
                color: carexColors.primary,
                fontSize: 'clamp(16px, 2.5vw, 22px)',
                marginBottom: '24px',
              }}
            >
              {persona?.occupation || 'Occupation'}
            </p>
            {/* Demographics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Age', value: persona?.age || '25-35' },
                { label: 'Location', value: persona?.location || 'City' },
                { label: 'Education', value: persona?.education || 'Graduate' },
                { label: 'Family', value: persona?.family || 'Single' },
              ].map((item, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...carexTypography.bodyExtraSmall,
                      color: carexColors.light,
                      marginBottom: '4px',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      ...carexTypography.bodyBold,
                      color: carexColors.dark,
                      fontSize: '16px',
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Goals & Frustrations */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t" style={{ borderColor: carexColors.lightSecondary }}>
          <div>
            <h4
              style={{
                ...carexTypography.bodyBold,
                color: carexColors.primary,
                fontSize: '20px',
                marginBottom: '16px',
              }}
            >
              Goals
            </h4>
            <ul className="space-y-2">
              {(persona?.goals || ['Goal 1', 'Goal 2']).map((goal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: '16px' }}>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              style={{
                ...carexTypography.bodyBold,
                color: carexColors.cons,
                fontSize: '20px',
                marginBottom: '16px',
              }}
            >
              Frustrations
            </h4>
            <ul className="space-y-2">
              {(persona?.frustrations || ['Frustration 1', 'Frustration 2']).map((frustration, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span style={{ color: carexColors.cons }}>✗</span>
                  <span style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: '16px' }}>{frustration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Taskflows Section
const CarexTaskflows = ({ title = 'Taskflows', scenarios = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.white }}
  >
    <div className="max-w-6xl mx-auto">
      <h2
        style={{
          ...carexTypography.heading,
          color: carexColors.dark,
          fontSize: 'clamp(32px, 5vw, 48px)',
          marginBottom: '48px',
        }}
      >
        {title}
      </h2>
      {scenarios.map((scenario, sIndex) => (
        <div key={sIndex} className="mb-16">
          <h3
            style={{
              ...carexTypography.subheading,
              color: carexColors.dark,
              fontSize: 'clamp(20px, 3vw, 28px)',
              marginBottom: '8px',
            }}
          >
            Scenario {sIndex + 1}:
          </h3>
          <p
            style={{
              ...carexTypography.body,
              color: carexColors.dark,
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              marginBottom: '24px',
            }}
          >
            {scenario.description}
          </p>
          {/* Flow Steps */}
          <div className="flex flex-wrap items-center gap-4">
            {scenario.steps?.map((step, stepIndex) => (
              <React.Fragment key={stepIndex}>
                <div
                  className="px-6 py-3 rounded-lg"
                  style={{ backgroundColor: carexColors.extraLight }}
                >
                  <span
                    style={{
                      ...carexTypography.body,
                      color: carexColors.dark,
                      fontSize: 'clamp(14px, 2vw, 20px)',
                    }}
                  >
                    {step}
                  </span>
                </div>
                {stepIndex < scenario.steps.length - 1 && (
                  <svg className="w-6 h-6 flex-shrink-0" style={{ color: carexColors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Screens Section
const CarexScreens = ({ title = 'Screens', screens = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.extraLightSecondary }}
  >
    <div className="max-w-7xl mx-auto">
      <h2
        style={{
          ...carexTypography.heading,
          color: carexColors.dark,
          fontSize: 'clamp(32px, 5vw, 48px)',
          marginBottom: '48px',
        }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {screens.map((screen, index) => (
          <div key={index} className="text-center">
            {/* Screen Mockup */}
            <div
              className="aspect-[9/19] rounded-3xl mb-4 overflow-hidden"
              style={{
                backgroundColor: carexColors.white,
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              }}
            >
              {screen.image ? (
                <img src={screen.image} alt={screen.label} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: carexColors.lightSecondary }}>
                  <span className="text-4xl opacity-30">📱</span>
                </div>
              )}
            </div>
            {/* Screen Label */}
            <span
              style={{
                ...carexTypography.body,
                color: carexColors.dark,
                fontSize: 'clamp(14px, 2vw, 20px)',
              }}
            >
              {screen.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Thank You Section
const CarexThankYou = () => (
  <section
    className="py-32 px-6 text-center relative overflow-hidden"
    style={{ backgroundColor: carexColors.extraLightSecondary }}
  >
    {/* Decorative elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-10 right-10 w-24 h-24 rounded-full opacity-20"
        style={{ backgroundColor: carexColors.primary }}
      />
      <div
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full opacity-10"
        style={{ backgroundColor: carexColors.primary }}
      />
    </div>

    <h2
      style={{
        ...carexTypography.title,
        color: carexColors.dark,
        fontSize: 'clamp(48px, 10vw, 96px)',
      }}
    >
      Thank You
    </h2>
    <p
      className="mt-4"
      style={{
        ...carexTypography.heading,
        color: carexColors.dark,
        fontSize: 'clamp(24px, 5vw, 48px)',
      }}
    >
      For Watching
    </p>
  </section>
);

// Generic Section Renderer
const CarexSection = ({ section, caseStudy }) => {
  const sectionType = section.id || section.title?.toLowerCase().replace(/\s+/g, '-');

  // Map section content to Carex components
  const getTextContent = () => {
    const textBlock = section.content?.find(b => b.type === 'text');
    return textBlock?.data?.paragraphs?.join(' ') || textBlock?.data?.description || '';
  };

  const getGridItems = () => {
    const gridBlock = section.content?.find(b => b.type === 'grid');
    return gridBlock?.data?.items || [];
  };

  const getStatsItems = () => {
    const statsBlock = section.content?.find(b => b.type === 'stats');
    return statsBlock?.data?.items || [];
  };

  // Render based on section type/title
  switch (true) {
    case /problem/i.test(section.title):
      return <CarexProblemStatement title={section.title} description={getTextContent()} />;

    case /objective|goal/i.test(section.title):
      return <CarexObjectives title={section.title} items={getGridItems().map(i => i.title || i.description)} />;

    case /process/i.test(section.title):
      return <CarexProcess title={section.title} />;

    case /challenge/i.test(section.title):
      return <CarexChallenges title={section.title} items={getGridItems().map(i => i.title || i.description)} />;

    case /user.*need/i.test(section.title):
      return <CarexUserNeeds title={section.title} items={getGridItems().map(i => i.title || i.description)} />;

    case /feature|functionalit/i.test(section.title):
      return <CarexFeatures title={section.title} features={getGridItems()} />;

    case /quantitative|research|observation/i.test(section.title):
      return <CarexQuantitativeResearch title={section.title} stats={getStatsItems()} />;

    case /persona/i.test(section.title):
      return <CarexUserPersona persona={getGridItems()[0]} />;

    case /taskflow|flow/i.test(section.title):
      return <CarexTaskflows title={section.title} scenarios={getGridItems().map(i => ({ description: i.title, steps: i.description?.split(',').map(s => s.trim()) || [] }))} />;

    case /screen/i.test(section.title):
      return <CarexScreens title={section.title} screens={getGridItems().map(i => ({ label: i.title, image: i.image }))} />;

    case /thank/i.test(section.title):
      return <CarexThankYou />;

    default:
      // Generic section with Carex styling
      return (
        <section className="py-24 px-6" style={{ backgroundColor: carexColors.white }}>
          <div className="max-w-4xl mx-auto">
            <h2
              style={{
                ...carexTypography.heading,
                color: carexColors.dark,
                fontSize: 'clamp(32px, 5vw, 48px)',
                marginBottom: '24px',
              }}
            >
              {section.title}
            </h2>
            <p
              style={{
                ...carexTypography.body,
                color: carexColors.dark,
                fontSize: 'clamp(16px, 2.5vw, 26px)',
              }}
            >
              {getTextContent()}
            </p>
            {getGridItems().length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {getGridItems().map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl"
                    style={{ backgroundColor: carexColors.extraLight }}
                  >
                    <h3 style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: '18px', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: '16px' }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      );
  }
};

// ============================================
// MAIN CAREX LAYOUT COMPONENT
// ============================================

const CarexLayout = ({ caseStudy, colors, isPreview, navigate, sectionRefs }) => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: carexColors.white,
        fontFamily: '"Poppins", system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Import Poppins font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Navigation */}
      {!isPreview && (
        <nav
          className="sticky top-0 z-50 px-6 py-4"
          style={{
            backgroundColor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${carexColors.lightSecondary}`,
          }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ color: carexColors.dark }}
            >
              <ArrowLeft size={20} />
              <span style={{ ...carexTypography.bodySmall, fontSize: '16px' }}>Back</span>
            </button>
            <span style={{ ...carexTypography.bodyExtraSmall, color: carexColors.light }}>
              UX Case Study
            </span>
          </div>
        </nav>
      )}

      {/* Hero */}
      <CarexHero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
      />

      {/* Sections */}
      {caseStudy.sections?.map((section, index) => (
        <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
          <CarexSection section={section} caseStudy={caseStudy} />
        </div>
      ))}

      {/* Thank You */}
      <CarexThankYou />

      {/* Footer */}
      <footer
        className="py-8 text-center"
        style={{
          backgroundColor: carexColors.white,
          borderTop: `1px solid ${carexColors.lightSecondary}`,
        }}
      >
        <p style={{ ...carexTypography.bodyExtraSmall, color: carexColors.light }}>
          Template based on{' '}
          <a
            href="https://www.figma.com/community/file/1023359866080504675"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
            style={{ color: carexColors.primary }}
          >
            Carex UX Case Study Template
          </a>
          {' '}by Kailash S R & Mohamed Arshad
        </p>
      </footer>
    </div>
  );
};

export default CarexLayout;
export { carexColors, carexTypography };
