import React from 'react';
import { ArrowLeft } from 'lucide-react';
import UserFlowDiagram from './UserFlowDiagram';

// ============================================
// CAREX TEMPLATE - Exact Figma Replica
// Based on UX Case Study Template by Kailash S R & Mohamed Arshad
// All 15 sections implemented from Figma Blocks page + 6 new editable sections
// ============================================

// Carex Color Palette - Light mode black/white minimal
const carexColors = {
  primary: '#000000',
  dark: '#000000',
  darkSecondary: '#1a1a1a',
  light: '#888888',
  lightSecondary: '#f5f5f5',
  extraLight: '#fafafa',
  extraLightSecondary: '#f0f0f0',
  cons: '#666666',
  white: '#FFFFFF',
  // Eisenhower Matrix colors - muted grayscale
  matrixGreen: '#e8e8e8',
  matrixYellow: '#f0f0f0',
  matrixBlue: '#e0e0e0',
  matrixRed: '#f5f5f5',
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

// Arrow Icon Component (used in multiple sections)
const ArrowBullet = ({ color = carexColors.primary }) => (
  <svg
    className="w-6 h-6 flex-shrink-0 mt-1"
    style={{ color }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
);

// X Icon Component (for challenges/cons)
const XBullet = ({ color = carexColors.cons }) => (
  <svg
    className="w-6 h-6 flex-shrink-0 mt-1"
    style={{ color }}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ============================================
// SECTION COMPONENTS (All 15 from Figma Blocks)
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

    {/* Decorative screens preview */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-32 bg-gradient-to-t from-gray-100 to-transparent opacity-50" />
  </section>
);

// 1. Problem Statement Section (Figma: 52:2415)
// Centered heading + body text with decorative box
const CarexProblemStatement = ({ title = 'Problem Statement', description }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.white }}
  >
    <div className="max-w-4xl mx-auto text-center">
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
      <div className="relative">
        <p
          style={{
            ...carexTypography.body,
            color: carexColors.dark,
            fontSize: 'clamp(16px, 2.5vw, 26px)',
          }}
        >
          {description}
        </p>
        {/* Decorative 3D Box - positioned to the right */}
        <div
          className="absolute -right-16 top-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl transform rotate-12 hidden lg:block"
          style={{
            backgroundColor: carexColors.extraLight,
            boxShadow: '0 20px 40px rgba(24, 138, 236, 0.15)',
          }}
        />
      </div>
    </div>
  </section>
);

// 2. Objectives & Goals Section (Figma: 52:2474)
// Left-aligned heading with 2-column layout (gap: 104px)
const CarexObjectives = ({ title = 'Objectives & Goals', items = [] }) => (
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
          marginBottom: '48px',
        }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
          >
            <div
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
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 3. Our Process Section (Figma: 52:2475)
// Centered heading with 4 process steps: Discover, Define, Ideate, Design
const CarexProcess = ({ title = 'Our Process', steps = ['Discover', 'Define', 'Ideate', 'Design'], descriptions = [] }) => (
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
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-[180px]">
            {/* Icon Circle */}
            <div
              className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4 relative"
              style={{ backgroundColor: carexColors.extraLight }}
            >
              {/* Process Icon */}
              <div className="flex items-center justify-center">
                {index === 0 && (
                  <svg className="w-10 h-10" style={{ color: carexColors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-10 h-10" style={{ color: carexColors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-10 h-10" style={{ color: carexColors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
                {index === 3 && (
                  <svg className="w-10 h-10" style={{ color: carexColors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                )}
              </div>
              {/* Step number badge */}
              <span
                className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
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
                fontSize: 'clamp(18px, 3vw, 28px)',
                marginBottom: '8px',
              }}
            >
              {step}
            </span>
            {/* Step Description */}
            {descriptions[index] && (
              <span
                style={{
                  ...carexTypography.bodySmall,
                  color: carexColors.dark,
                  fontSize: 'clamp(12px, 2vw, 18px)',
                  opacity: 0.7,
                }}
              >
                {descriptions[index]}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 4. Business Challenges Section (Figma: 52:2476)
// List with red X icons (#F57878)
const CarexBusinessChallenges = ({ title = 'Business Challenges', items = [] }) => (
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
      <ul className="space-y-5">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4"
          >
            <XBullet />
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

// 5. User Needs Section (Figma: 52:2479)
// Heading with blue arrow bullets pointing right
const CarexUserNeeds = ({ title = 'User Needs', items = [] }) => (
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
      <ul className="space-y-5">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4"
          >
            <ArrowBullet />
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

// 6. Features & Functionalities Section (Figma: 52:2480)
// Centered heading, subtitle, 3 feature cards with icons
const CarexFeatures = ({ title = 'Features & Functionalities', subtitle, features = [] }) => (
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
          marginBottom: '16px',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-center max-w-2xl mx-auto"
          style={{
            ...carexTypography.body,
            color: carexColors.dark,
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            marginBottom: '48px',
            opacity: 0.8,
          }}
        >
          {subtitle}
        </p>
      )}
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
              <svg className="w-8 h-8" style={{ color: carexColors.primary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3
              style={{
                ...carexTypography.subheading,
                color: carexColors.dark,
                fontSize: 'clamp(18px, 3vw, 24px)',
                marginBottom: '12px',
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                ...carexTypography.bodySmall,
                color: carexColors.dark,
                fontSize: 'clamp(14px, 2vw, 18px)',
                opacity: 0.8,
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

// 7. Product User Challenges Section (Figma: 52:2481)
// Heading with blue arrows and challenge items
const CarexProductUserChallenges = ({ title = 'Product User Challenges', items = [] }) => (
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
      <ul className="space-y-5">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4"
          >
            <ArrowBullet />
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

// 8. Competitor Analysis Section (Figma: 52:2482)
// Competitor sections with name, features, descriptions
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {competitors.map((comp, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: carexColors.extraLight }}
          >
            {/* Competitor Header */}
            <div
              className="p-6"
              style={{ backgroundColor: carexColors.primary }}
            >
              <h3
                className="text-white text-center"
                style={{
                  ...carexTypography.subheading,
                  fontSize: 'clamp(18px, 3vw, 24px)',
                }}
              >
                {comp.name}
              </h3>
            </div>
            {/* Features List */}
            <div className="p-6 space-y-4">
              {comp.features?.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-start gap-3">
                  {comp.hasFeature?.[fIndex] !== false ? (
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <XBullet color={carexColors.cons} />
                  )}
                  <span
                    style={{
                      ...carexTypography.bodySmall,
                      color: carexColors.dark,
                      fontSize: '16px',
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 9. Unique Features Section (Figma: 52:2483)
// Extra Light background (#F6FAFE) with arrow bullets
const CarexUniqueFeatures = ({ title = 'Unique Features', items = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.extraLight }}
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
      <ul className="space-y-5">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4"
          >
            <ArrowBullet />
            <div>
              <span
                style={{
                  ...carexTypography.bodyBold,
                  color: carexColors.dark,
                  fontSize: 'clamp(16px, 2.5vw, 24px)',
                }}
              >
                {item.title || item}
              </span>
              {item.description && (
                <p
                  style={{
                    ...carexTypography.body,
                    color: carexColors.dark,
                    fontSize: 'clamp(14px, 2vw, 20px)',
                    opacity: 0.8,
                    marginTop: '4px',
                  }}
                >
                  {item.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

// 10. User Persona Section (Figma: 52:2484)
// Profile picture, name, occupation, About, Pain Points, Maslow Pyramid, Quotes
const CarexUserPersona = ({ persona }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.extraLight }}
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
        User Persona
      </h2>
      <div
        className="rounded-3xl p-8 md:p-12"
        style={{ backgroundColor: carexColors.white }}
      >
        {/* Top Section: Profile + Demographics */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Avatar */}
          <div className="flex-shrink-0 text-center">
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4"
              style={{ backgroundColor: carexColors.lightSecondary }}
            />
            <h3
              style={{
                ...carexTypography.subheading,
                color: carexColors.dark,
                fontSize: 'clamp(20px, 3vw, 28px)',
              }}
            >
              {persona?.name || 'User Name'}
            </h3>
            <p
              style={{
                ...carexTypography.body,
                color: carexColors.primary,
                fontSize: 'clamp(14px, 2vw, 18px)',
              }}
            >
              {persona?.occupation || 'Occupation'}
            </p>
          </div>

          {/* About Section (Demographics) */}
          <div className="flex-1">
            <h4
              style={{
                ...carexTypography.bodyBold,
                color: carexColors.dark,
                fontSize: '20px',
                marginBottom: '16px',
              }}
            >
              About
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Age', value: persona?.age || '25-35' },
                { label: 'Location', value: persona?.location || 'City' },
                { label: 'Education', value: persona?.education || 'Graduate' },
                { label: 'Occupation', value: persona?.occupation || 'Professional' },
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

            {/* Description */}
            {persona?.description && (
              <p
                className="mt-6"
                style={{
                  ...carexTypography.body,
                  color: carexColors.dark,
                  fontSize: '16px',
                  opacity: 0.8,
                }}
              >
                {persona.description}
              </p>
            )}
          </div>
        </div>

        {/* Middle Section: A Day in Life + Pain Points */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pt-8 border-t" style={{ borderColor: carexColors.lightSecondary }}>
          {/* A Day in Their Life */}
          {persona?.dayInLife && (
            <div>
              <h4
                style={{
                  ...carexTypography.bodyBold,
                  color: carexColors.dark,
                  fontSize: '20px',
                  marginBottom: '16px',
                }}
              >
                A Day in Their Life
              </h4>
              <p
                style={{
                  ...carexTypography.body,
                  color: carexColors.dark,
                  fontSize: '16px',
                  opacity: 0.8,
                }}
              >
                {persona.dayInLife}
              </p>
            </div>
          )}

          {/* Pain Points */}
          <div>
            <h4
              style={{
                ...carexTypography.bodyBold,
                color: carexColors.cons,
                fontSize: '20px',
                marginBottom: '16px',
              }}
            >
              Pain Points
            </h4>
            <ul className="space-y-3">
              {(persona?.painPoints || persona?.frustrations || ['Pain point 1', 'Pain point 2']).map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <XBullet color={carexColors.cons} />
                  <span style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: '16px' }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Maslow Pyramid + Quotes */}
        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t" style={{ borderColor: carexColors.lightSecondary }}>
          {/* Maslow Pyramid */}
          <div>
            <h4
              style={{
                ...carexTypography.bodyBold,
                color: carexColors.dark,
                fontSize: '20px',
                marginBottom: '16px',
              }}
            >
              Maslow's Hierarchy
            </h4>
            <div className="flex flex-col items-center">
              {['Self-Actualization', 'Esteem', 'Love/Belonging', 'Safety', 'Physiological'].map((level, index) => {
                const isHighlighted = persona?.maslowLevel === level || persona?.maslowLevels?.includes(level);
                const width = 100 - (index * 15);
                return (
                  <div
                    key={index}
                    className="text-center py-2 px-4 mb-1 rounded"
                    style={{
                      width: `${width}%`,
                      backgroundColor: isHighlighted ? carexColors.primary : carexColors.extraLight,
                      color: isHighlighted ? carexColors.white : carexColors.dark,
                    }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: isHighlighted ? 600 : 400 }}>{level}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quotes */}
          <div>
            <h4
              style={{
                ...carexTypography.bodyBold,
                color: carexColors.dark,
                fontSize: '20px',
                marginBottom: '16px',
              }}
            >
              Quotes
            </h4>
            <div className="space-y-4">
              {(persona?.quotes || ['"I need a solution that fits my lifestyle."', '"Time is precious, make it count."']).map((quote, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: carexColors.extraLight }}
                >
                  <p
                    className="italic"
                    style={{
                      ...carexTypography.body,
                      color: carexColors.dark,
                      fontSize: '16px',
                    }}
                  >
                    {quote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Goals Section */}
        {persona?.goals && (
          <div className="pt-8 mt-8 border-t" style={{ borderColor: carexColors.lightSecondary }}>
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
            <ul className="grid md:grid-cols-2 gap-3">
              {persona.goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: '16px' }}>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </section>
);

// 11. Task Mapping Section (Figma: 52:2485)
// Table with columns: Task, Steps, Environment, Challenges, Emotions, Thoughts, Urgency Level, Design Opportunity
const CarexTaskMapping = ({ title = 'Task Mapping', tasks = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.white }}
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
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse">
          <thead>
            <tr style={{ backgroundColor: carexColors.extraLight }}>
              {['Task', 'Steps', 'Environment', 'Challenges', 'Emotions', 'Thoughts', 'Urgency', 'Design Opportunity'].map((header, index) => (
                <th
                  key={index}
                  className={`p-4 text-left ${index === 0 ? 'rounded-tl-xl' : ''} ${index === 7 ? 'rounded-tr-xl' : ''}`}
                  style={{
                    ...carexTypography.bodyBold,
                    color: carexColors.dark,
                    fontSize: '14px',
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, tIndex) => (
              <tr
                key={tIndex}
                style={{
                  backgroundColor: tIndex % 2 === 0 ? carexColors.white : carexColors.extraLight,
                }}
              >
                <td className="p-4 align-top" style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: '14px' }}>
                  {task.task}
                </td>
                <td className="p-4 align-top" style={{ ...carexTypography.body, color: carexColors.dark, fontSize: '14px' }}>
                  {Array.isArray(task.steps) ? task.steps.join(' → ') : task.steps}
                </td>
                <td className="p-4 align-top" style={{ ...carexTypography.body, color: carexColors.dark, fontSize: '14px' }}>
                  {task.environment}
                </td>
                <td className="p-4 align-top" style={{ ...carexTypography.body, color: carexColors.dark, fontSize: '14px' }}>
                  {task.challenges}
                </td>
                <td className="p-4 align-top" style={{ ...carexTypography.body, color: carexColors.dark, fontSize: '14px' }}>
                  {task.emotions}
                </td>
                <td className="p-4 align-top" style={{ ...carexTypography.body, color: carexColors.dark, fontSize: '14px' }}>
                  {task.thoughts}
                </td>
                <td className="p-4 align-top">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: task.urgency === 'High' ? '#000000' : task.urgency === 'Medium' ? '#666666' : '#e0e0e0',
                      color: task.urgency === 'High' ? '#ffffff' : task.urgency === 'Medium' ? '#ffffff' : '#000000',
                    }}
                  >
                    {task.urgency || 'Medium'}
                  </span>
                </td>
                <td className="p-4 align-top" style={{ ...carexTypography.body, color: carexColors.primary, fontSize: '14px' }}>
                  {task.designOpportunity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// 12. Eisenhower Matrix Section (Figma: 52:2486)
// 2x2 colored grid: Urgent+Important (green), Not Urgent+Important (blue), Urgent+Not Important (yellow), Not Urgent+Not Important (red)
const CarexEisenhowerMatrix = ({ title = 'Eisenhower Matrix', quadrants = {} }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.white }}
  >
    <div className="max-w-4xl mx-auto">
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

      {/* Matrix Labels */}
      <div className="flex justify-center mb-4">
        <div className="w-1/2 text-center" style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: '16px' }}>
          Urgent
        </div>
        <div className="w-1/2 text-center" style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: '16px' }}>
          Not Urgent
        </div>
      </div>

      <div className="flex">
        {/* Left Label */}
        <div className="flex flex-col justify-around pr-4">
          <div className="transform -rotate-90 whitespace-nowrap" style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: '14px' }}>
            Important
          </div>
          <div className="transform -rotate-90 whitespace-nowrap" style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: '14px' }}>
            Not Important
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 aspect-square max-w-lg mx-auto">
          {/* Q1: Urgent + Important (DO) */}
          <div
            className="rounded-2xl p-6 flex flex-col border"
            style={{ backgroundColor: carexColors.white, borderColor: carexColors.dark }}
          >
            <h4
              className="mb-2"
              style={{
                ...carexTypography.bodyBold,
                color: carexColors.dark,
                fontSize: '16px',
              }}
            >
              Do First
            </h4>
            <ul className="space-y-2 flex-1">
              {(quadrants.doFirst || ['Crisis tasks', 'Deadlines', 'Problems']).map((item, index) => (
                <li key={index} style={{ ...carexTypography.bodySmall, color: carexColors.darkSecondary, fontSize: '13px' }}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Q2: Not Urgent + Important (SCHEDULE) */}
          <div
            className="rounded-2xl p-6 flex flex-col"
            style={{ backgroundColor: carexColors.extraLight }}
          >
            <h4
              className="mb-2"
              style={{
                ...carexTypography.bodyBold,
                color: carexColors.dark,
                fontSize: '16px',
              }}
            >
              Schedule
            </h4>
            <ul className="space-y-2 flex-1">
              {(quadrants.schedule || ['Planning', 'Improvement', 'Development']).map((item, index) => (
                <li key={index} style={{ ...carexTypography.bodySmall, color: carexColors.darkSecondary, fontSize: '13px' }}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Q3: Urgent + Not Important (DELEGATE) */}
          <div
            className="rounded-2xl p-6 flex flex-col"
            style={{ backgroundColor: carexColors.lightSecondary }}
          >
            <h4
              className="mb-2"
              style={{
                ...carexTypography.bodyBold,
                color: carexColors.dark,
                fontSize: '16px',
              }}
            >
              Delegate
            </h4>
            <ul className="space-y-2 flex-1">
              {(quadrants.delegate || ['Interruptions', 'Meetings', 'Activities']).map((item, index) => (
                <li key={index} style={{ ...carexTypography.bodySmall, color: carexColors.darkSecondary, fontSize: '13px' }}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Q4: Not Urgent + Not Important (ELIMINATE) */}
          <div
            className="rounded-2xl p-6 flex flex-col"
            style={{ backgroundColor: carexColors.extraLightSecondary }}
          >
            <h4
              className="mb-2"
              style={{
                ...carexTypography.bodyBold,
                color: carexColors.light,
                fontSize: '16px',
              }}
            >
              Eliminate
            </h4>
            <ul className="space-y-2 flex-1">
              {(quadrants.eliminate || ['Time wasters', 'Distractions', 'Trivial tasks']).map((item, index) => (
                <li key={index} style={{ ...carexTypography.bodySmall, color: carexColors.light, fontSize: '13px' }}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 13. 5 Why Analysis Section (Figma: 52:2487)
// Problem/Cause flowchart: Problem (Primary blue) → Causes (Light-Secondary) → Root Cause (Extra Light-Secondary)
const CarexWhyAnalysis = ({ title = '5 Why Analysis', problem = '', whys = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.white }}
  >
    <div className="max-w-4xl mx-auto">
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

      <div className="flex flex-col items-center space-y-4">
        {/* Problem Box */}
        <div
          className="w-full max-w-md p-6 rounded-2xl text-center"
          style={{ backgroundColor: carexColors.primary }}
        >
          <span
            className="block text-white mb-2"
            style={{ ...carexTypography.bodyExtraSmall, opacity: 0.8 }}
          >
            Problem
          </span>
          <p
            className="text-white"
            style={{ ...carexTypography.bodyBold, fontSize: '18px' }}
          >
            {problem || 'What is the core problem?'}
          </p>
        </div>

        {/* Arrow */}
        <svg className="w-8 h-8" style={{ color: carexColors.light }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>

        {/* Why Chain */}
        {(whys.length > 0 ? whys : ['Why 1?', 'Why 2?', 'Why 3?', 'Why 4?', 'Why 5? (Root Cause)']).map((why, index) => {
          const isRootCause = index === (whys.length > 0 ? whys.length - 1 : 4);
          return (
            <React.Fragment key={index}>
              <div
                className="w-full max-w-md p-5 rounded-xl"
                style={{
                  backgroundColor: isRootCause ? carexColors.extraLightSecondary : carexColors.lightSecondary,
                  borderLeft: `4px solid ${isRootCause ? carexColors.primary : carexColors.light}`,
                }}
              >
                <span
                  className="block mb-1"
                  style={{
                    ...carexTypography.bodyExtraSmall,
                    color: carexColors.primary,
                    fontWeight: 600,
                  }}
                >
                  {isRootCause ? 'Root Cause' : `Why ${index + 1}`}
                </span>
                <p
                  style={{
                    ...carexTypography.body,
                    color: carexColors.dark,
                    fontSize: '16px',
                  }}
                >
                  {why}
                </p>
              </div>
              {index < (whys.length > 0 ? whys.length - 1 : 4) && (
                <svg className="w-6 h-6" style={{ color: carexColors.light }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  </section>
);

// 14. Root Cause Analysis Section (Figma: 52:2488)
// Fishbone/Ishikawa diagram structure
const CarexRootCauseAnalysis = ({ title = 'Root Cause Analysis', problem = '', categories = [] }) => (
  <section
    className="py-24 px-6"
    style={{ backgroundColor: carexColors.extraLight }}
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

      {/* Fishbone Diagram */}
      <div className="relative">
        {/* Main Spine */}
        <div
          className="h-2 rounded-full mx-auto mb-8"
          style={{
            backgroundColor: carexColors.primary,
            width: '80%',
          }}
        />

        {/* Problem (Fish Head) */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 p-6 rounded-2xl"
          style={{
            backgroundColor: carexColors.primary,
            maxWidth: '200px',
          }}
        >
          <p
            className="text-white text-center"
            style={{ ...carexTypography.bodyBold, fontSize: '16px' }}
          >
            {problem || 'Effect/Problem'}
          </p>
        </div>

        {/* Categories (Bones) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {(categories.length > 0 ? categories : [
            { name: 'People', causes: ['Cause 1', 'Cause 2'] },
            { name: 'Process', causes: ['Cause 1', 'Cause 2'] },
            { name: 'Technology', causes: ['Cause 1', 'Cause 2'] },
            { name: 'Environment', causes: ['Cause 1', 'Cause 2'] },
            { name: 'Materials', causes: ['Cause 1', 'Cause 2'] },
            { name: 'Measurement', causes: ['Cause 1', 'Cause 2'] },
          ]).map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: carexColors.white }}
            >
              <h4
                className="mb-4"
                style={{
                  ...carexTypography.bodyBold,
                  color: carexColors.primary,
                  fontSize: '18px',
                }}
              >
                {category.name}
              </h4>
              <ul className="space-y-2">
                {category.causes?.map((cause, cIndex) => (
                  <li
                    key={cIndex}
                    className="flex items-start gap-2"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: carexColors.primary }}
                    />
                    <span
                      style={{
                        ...carexTypography.bodySmall,
                        color: carexColors.dark,
                        fontSize: '14px',
                      }}
                    >
                      {cause}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// 15. Taskflows Section (Figma: 52:2489)
// Scenarios with description and flow step boxes connected by arrows
const CarexTaskflows = ({ title = 'Task Flows', scenarios = [] }) => (
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
          <div className="flex items-baseline gap-4 mb-4">
            <span
              className="px-4 py-1 rounded-full"
              style={{
                backgroundColor: carexColors.primary,
                color: carexColors.white,
                ...carexTypography.bodyBold,
                fontSize: '14px',
              }}
            >
              Scenario {sIndex + 1}
            </span>
            <h3
              style={{
                ...carexTypography.subheading,
                color: carexColors.dark,
                fontSize: 'clamp(18px, 3vw, 24px)',
              }}
            >
              {scenario.title}
            </h3>
          </div>
          <p
            style={{
              ...carexTypography.body,
              color: carexColors.dark,
              fontSize: 'clamp(14px, 2vw, 18px)',
              marginBottom: '24px',
              opacity: 0.8,
            }}
          >
            {scenario.description}
          </p>

          {/* Flow Steps */}
          <div className="flex flex-wrap items-center gap-3">
            {scenario.steps?.map((step, stepIndex) => (
              <React.Fragment key={stepIndex}>
                <div
                  className="px-6 py-4 rounded-xl min-w-[120px] text-center"
                  style={{
                    backgroundColor: stepIndex === 0 ? carexColors.primary : carexColors.extraLight,
                    color: stepIndex === 0 ? carexColors.white : carexColors.dark,
                  }}
                >
                  <span
                    style={{
                      ...carexTypography.body,
                      fontSize: 'clamp(12px, 2vw, 16px)',
                      fontWeight: stepIndex === 0 ? 600 : 500,
                    }}
                  >
                    {step}
                  </span>
                </div>
                {stepIndex < scenario.steps.length - 1 && (
                  <ArrowBullet color={carexColors.primary} />
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

// ============================================
// GENERIC SECTION RENDERER
// Maps section data to appropriate Carex components
// ============================================

// ============================================
// NEW EDITABLE SECTION COMPONENTS
// ============================================

const CarexProjectOverview = ({ title = 'Project Overview', paragraphs = [] }) => (
  <section className="py-24 px-6" style={{ backgroundColor: carexColors.white }}>
    <div className="max-w-4xl mx-auto">
      <div
        className="inline-block px-4 py-2 rounded-full mb-6"
        style={{ backgroundColor: carexColors.extraLight }}
      >
        <span style={{ ...carexTypography.bodyExtraSmall, color: carexColors.light, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Project Overview
        </span>
      </div>
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
      <div className="space-y-6">
        {paragraphs.map((para, idx) => (
          <p
            key={idx}
            style={{
              ...carexTypography.body,
              color: carexColors.dark,
              fontSize: 'clamp(16px, 2.5vw, 26px)',
            }}
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  </section>
);

const CarexProblemSolution = ({
  problemTitle = 'Problem',
  problemDescription = [],
  solutionTitle = 'Solution',
  solutionDescription = []
}) => (
  <section className="py-24 px-6" style={{ backgroundColor: carexColors.white }}>
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div
            className="inline-block px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: '#fee', borderLeft: `4px solid #ef4444` }}
          >
            <span style={{ ...carexTypography.bodyExtraSmall, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
              Problem
            </span>
          </div>
          <h3
            style={{
              ...carexTypography.subheading,
              color: carexColors.dark,
              fontSize: 'clamp(24px, 4vw, 32px)',
              marginBottom: '24px',
            }}
          >
            {problemTitle}
          </h3>
          <div className="space-y-4">
            {problemDescription.map((para, idx) => (
              <p
                key={idx}
                style={{
                  ...carexTypography.bodySmall,
                  color: carexColors.dark,
                  fontSize: 'clamp(14px, 2vw, 22px)',
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div
            className="inline-block px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: '#efe', borderLeft: `4px solid #10b981` }}
          >
            <span style={{ ...carexTypography.bodyExtraSmall, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
              Solution
            </span>
          </div>
          <h3
            style={{
              ...carexTypography.subheading,
              color: carexColors.dark,
              fontSize: 'clamp(24px, 4vw, 32px)',
              marginBottom: '24px',
            }}
          >
            {solutionTitle}
          </h3>
          <div className="space-y-4">
            {solutionDescription.map((para, idx) => (
              <p
                key={idx}
                style={{
                  ...carexTypography.bodySmall,
                  color: carexColors.dark,
                  fontSize: 'clamp(14px, 2vw, 22px)',
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CarexTeamInfo = ({ title = 'Team Information', members = [] }) => (
  <section className="py-24 px-6" style={{ backgroundColor: carexColors.extraLight }}>
    <div className="max-w-4xl mx-auto">
      <div
        className="inline-block px-4 py-2 rounded-full mb-6"
        style={{ backgroundColor: carexColors.white }}
      >
        <span style={{ ...carexTypography.bodyExtraSmall, color: carexColors.light, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Team
        </span>
      </div>
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
      <div className="grid md:grid-cols-2 gap-6">
        {members.map((member, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-6 rounded-2xl"
            style={{ backgroundColor: carexColors.white }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: carexColors.primary }}
            >
              <span style={{ ...carexTypography.bodyBold, color: carexColors.white, fontSize: '24px' }}>
                {member.name?.charAt(0) || '?'}
              </span>
            </div>
            <div>
              <div style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: '20px' }}>
                {member.name}
              </div>
              <div style={{ ...carexTypography.bodySmall, color: carexColors.light, fontSize: '16px' }}>
                {member.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CarexSuccessMetrics = ({ title = 'Success Metrics', items = [] }) => (
  <section className="py-24 px-6" style={{ backgroundColor: carexColors.white }}>
    <div className="max-w-5xl mx-auto">
      <div
        className="inline-block px-4 py-2 rounded-full mb-6"
        style={{ backgroundColor: carexColors.extraLight }}
      >
        <span style={{ ...carexTypography.bodyExtraSmall, color: carexColors.light, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Success Metrics
        </span>
      </div>
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((metric, idx) => (
          <div key={idx} className="text-center">
            <div
              style={{
                ...carexTypography.title,
                color: carexColors.primary,
                fontSize: 'clamp(32px, 6vw, 56px)',
                marginBottom: '12px',
              }}
            >
              {metric.value}
            </div>
            <div
              style={{
                ...carexTypography.bodySmall,
                color: carexColors.light,
                fontSize: 'clamp(12px, 1.5vw, 18px)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CarexUserResearch = ({ title = 'User Research', paragraphs = [], findings = [] }) => (
  <section className="py-24 px-6" style={{ backgroundColor: carexColors.extraLight }}>
    <div className="max-w-4xl mx-auto">
      <div
        className="inline-block px-4 py-2 rounded-full mb-6"
        style={{ backgroundColor: '#dbeafe', borderLeft: `4px solid #3b82f6` }}
      >
        <span style={{ ...carexTypography.bodyExtraSmall, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
          User Research
        </span>
      </div>
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
      <div className="space-y-6 mb-12">
        {paragraphs.map((para, idx) => (
          <p
            key={idx}
            style={{
              ...carexTypography.body,
              color: carexColors.dark,
              fontSize: 'clamp(16px, 2.5vw, 26px)',
            }}
          >
            {para}
          </p>
        ))}
      </div>
      {findings && findings.length > 0 && (
        <>
          <h3
            style={{
              ...carexTypography.subheading,
              color: carexColors.dark,
              fontSize: 'clamp(24px, 4vw, 32px)',
              marginBottom: '24px',
            }}
          >
            Key Findings
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {findings.map((finding, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: '#dbeafe' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#3b82f6' }}
                >
                  <span style={{ ...carexTypography.bodyBold, color: carexColors.white, fontSize: '16px' }}>
                    {idx + 1}
                  </span>
                </div>
                <p
                  style={{
                    ...carexTypography.bodySmall,
                    color: carexColors.dark,
                    fontSize: 'clamp(14px, 2vw, 20px)',
                    marginTop: '6px',
                  }}
                >
                  {finding}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  </section>
);

const CarexConclusion = ({ title = 'Conclusion', paragraphs = [], takeaways = [] }) => (
  <section className="py-24 px-6" style={{ backgroundColor: carexColors.white, borderTop: `2px solid ${carexColors.lightSecondary}` }}>
    <div className="max-w-4xl mx-auto">
      <div
        className="inline-block px-4 py-2 rounded-full mb-6"
        style={{ backgroundColor: carexColors.extraLight }}
      >
        <span style={{ ...carexTypography.bodyExtraSmall, color: carexColors.light, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Conclusion
        </span>
      </div>
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
      <div className="space-y-6 mb-12">
        {paragraphs.map((para, idx) => (
          <p
            key={idx}
            style={{
              ...carexTypography.body,
              color: carexColors.dark,
              fontSize: 'clamp(16px, 2.5vw, 26px)',
            }}
          >
            {para}
          </p>
        ))}
      </div>
      {takeaways && takeaways.length > 0 && (
        <>
          <h3
            style={{
              ...carexTypography.subheading,
              color: carexColors.dark,
              fontSize: 'clamp(24px, 4vw, 32px)',
              marginBottom: '24px',
            }}
          >
            Key Takeaways
          </h3>
          <div className="space-y-4">
            {takeaways.map((takeaway, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: carexColors.extraLight }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: carexColors.primary }}
                >
                  <span style={{ ...carexTypography.bodyBold, color: carexColors.white, fontSize: '16px' }}>
                    {idx + 1}
                  </span>
                </div>
                <p
                  style={{
                    ...carexTypography.bodySmall,
                    color: carexColors.dark,
                    fontSize: 'clamp(14px, 2vw, 22px)',
                    marginTop: '6px',
                  }}
                >
                  {takeaway}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  </section>
);

// ============================================
// 2025 NEW SECTION COMPONENTS
// ============================================

// Business Impact Preview - Key metrics upfront (NEW for 2025)
const CarexBusinessImpactPreview = ({ title = 'Business Impact Preview', primaryMetric, secondaryMetrics = [], impactSummary }) => (
  <section className="py-16 md:py-20 px-6 md:px-16" style={{ backgroundColor: carexColors.extraLight }}>
    <div className="max-w-6xl mx-auto text-center">
      <h2 style={{ ...carexTypography.heading, color: carexColors.dark, fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '48px' }}>
        {title}
      </h2>
      {primaryMetric && (
        <div className="mb-12">
          <div style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 700, color: carexColors.primary, lineHeight: 1 }}>
            {primaryMetric.value}
          </div>
          <div style={{ ...carexTypography.body, color: carexColors.dark, fontSize: 'clamp(18px, 2vw, 26px)', marginTop: '8px' }}>
            {primaryMetric.label}
          </div>
          {primaryMetric.context && (
            <div style={{ ...carexTypography.bodySmall, color: carexColors.light, fontSize: 'clamp(14px, 1.5vw, 22px)', marginTop: '4px' }}>
              {primaryMetric.context}
            </div>
          )}
        </div>
      )}
      {secondaryMetrics.length > 0 && (
        <div className="flex flex-wrap justify-center gap-12">
          {secondaryMetrics.map((metric, idx) => (
            <div key={idx}>
              <div style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 600, color: carexColors.primary }}>{metric.value}</div>
              <div style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 22px)' }}>{metric.label}</div>
            </div>
          ))}
        </div>
      )}
      {impactSummary && (
        <p style={{ ...carexTypography.body, color: carexColors.dark, fontSize: 'clamp(16px, 2vw, 26px)', marginTop: '32px' }}>
          {impactSummary}
        </p>
      )}
    </div>
  </section>
);

// Design Vision & Strategy (NEW for 2025)
const CarexDesignVisionStrategy = ({ title = 'Design Vision & Strategy', vision, strategy, principles = [], northStar }) => (
  <section className="py-16 md:py-20 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">
      <h2 style={{ ...carexTypography.heading, color: carexColors.dark, fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '48px', textAlign: 'center' }}>
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl" style={{ backgroundColor: carexColors.extraLight }}>
          <h3 style={{ ...carexTypography.bodyBold, color: carexColors.primary, fontSize: 'clamp(18px, 2vw, 26px)', marginBottom: '16px' }}>Vision</h3>
          <p style={{ ...carexTypography.body, color: carexColors.dark, fontSize: 'clamp(16px, 1.8vw, 26px)' }}>{vision}</p>
          {strategy && (
            <>
              <h3 style={{ ...carexTypography.bodyBold, color: carexColors.primary, fontSize: 'clamp(18px, 2vw, 26px)', marginBottom: '16px', marginTop: '24px' }}>Strategy</h3>
              <p style={{ ...carexTypography.body, color: carexColors.dark, fontSize: 'clamp(16px, 1.8vw, 26px)' }}>{strategy}</p>
            </>
          )}
        </div>
        <div>
          <h3 style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: 'clamp(18px, 2vw, 26px)', marginBottom: '20px' }}>Design Principles</h3>
          <div className="space-y-4">
            {principles.map((principle, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: carexColors.extraLight }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: carexColors.primary }}>
                  <span style={{ color: carexColors.white, fontWeight: 600 }}>{idx + 1}</span>
                </div>
                <p style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 22px)' }}>{principle}</p>
              </div>
            ))}
          </div>
          {northStar && (
            <div className="mt-6 p-4 rounded-xl border-2" style={{ borderColor: carexColors.primary }}>
              <span style={{ ...carexTypography.bodySmall, color: carexColors.primary, fontSize: 'clamp(12px, 1.2vw, 18px)' }}>North Star</span>
              <p style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 22px)', marginTop: '4px' }}>{northStar}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

// Cross-Functional Alignment (NEW for 2025)
const CarexCrossFunctionalAlignment = ({ title = 'Cross-Functional Alignment', pmPartnership, engineeringCollaboration, dataScienceCoordination }) => (
  <section className="py-16 md:py-20 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">
      <h2 style={{ ...carexTypography.heading, color: carexColors.dark, fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '48px', textAlign: 'center' }}>
        {title}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'PM Partnership', data: pmPartnership, icon: '📋' },
          { title: 'Engineering', data: engineeringCollaboration, icon: '⚙️' },
          { title: 'Data Science', data: dataScienceCoordination, icon: '📊' }
        ].filter(item => item.data).map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl border" style={{ borderColor: carexColors.lightSecondary, backgroundColor: carexColors.white }}>
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: 'clamp(18px, 2vw, 32px)', marginBottom: '16px' }}>{item.title}</h3>
            {item.data.collaboration && <p style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 22px)', marginBottom: '12px' }}>{item.data.collaboration}</p>}
            {item.data.outcomes && (
              <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: carexColors.extraLight }}>
                <span style={{ ...carexTypography.bodySmall, color: carexColors.primary, fontSize: 'clamp(12px, 1.2vw, 18px)' }}>Outcome: </span>
                <span style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(12px, 1.2vw, 18px)' }}>{item.data.outcomes}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Technical Constraints (NEW for 2025)
const CarexTechnicalConstraints = ({ title = 'Technical Constraints', constraints = [], designAdaptations = [], tradeoffs = [] }) => (
  <section className="py-16 md:py-20 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">
      <h2 style={{ ...carexTypography.heading, color: carexColors.dark, fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '48px', textAlign: 'center' }}>
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 style={{ ...carexTypography.bodyBold, color: carexColors.cons, fontSize: 'clamp(18px, 2vw, 26px)', marginBottom: '20px' }}>Constraints</h3>
          <div className="space-y-4">
            {constraints.map((constraint, idx) => (
              <div key={idx} className="p-4 rounded-xl" style={{ backgroundColor: '#fff4ce' }}>
                <p style={{ ...carexTypography.bodySmall, color: '#67530c', fontSize: 'clamp(14px, 1.5vw, 22px)' }}>{constraint}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ ...carexTypography.bodyBold, color: carexColors.primary, fontSize: 'clamp(18px, 2vw, 26px)', marginBottom: '20px' }}>Design Adaptations</h3>
          <div className="space-y-4">
            {designAdaptations.map((adaptation, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: carexColors.extraLight }}>
                <CheckBullet color={carexColors.primary} />
                <p style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 22px)' }}>{adaptation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// AI/ML Considerations (NEW for 2025 - Critical for AI roles)
const CarexAIMlConsiderations = ({ title = 'AI/ML Considerations', modelCapabilities, infrastructureConstraints = [], trustExplainability, ethicalConsiderations }) => (
  <section className="py-16 md:py-20 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-8">
        <h2 style={{ ...carexTypography.heading, color: carexColors.dark, fontSize: 'clamp(28px, 4vw, 48px)' }}>
          {title}
        </h2>
        <span className="px-4 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: carexColors.primary, color: carexColors.white }}>
          Critical for AI Roles
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {modelCapabilities && (
          <div className="p-6 rounded-2xl" style={{ backgroundColor: carexColors.extraLight }}>
            <h3 style={{ ...carexTypography.bodyBold, color: carexColors.primary, fontSize: 'clamp(18px, 2vw, 26px)', marginBottom: '16px' }}>Model Capabilities & Limitations</h3>
            {modelCapabilities.capabilities?.length > 0 && (
              <div className="mb-4">
                <span style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 20px)', fontWeight: 600 }}>Can do:</span>
                <ul className="mt-2 space-y-2">
                  {modelCapabilities.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckBullet color="#8fd818" />
                      <span style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 20px)' }}>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {modelCapabilities.limitations?.length > 0 && (
              <div>
                <span style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 20px)', fontWeight: 600 }}>Cannot do:</span>
                <ul className="mt-2 space-y-2">
                  {modelCapabilities.limitations.map((lim, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <XBullet color={carexColors.cons} />
                      <span style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 20px)' }}>{lim}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {trustExplainability && (
          <div className="p-6 rounded-2xl" style={{ backgroundColor: carexColors.extraLight }}>
            <h3 style={{ ...carexTypography.bodyBold, color: carexColors.primary, fontSize: 'clamp(18px, 2vw, 26px)', marginBottom: '16px' }}>Trust & Explainability</h3>
            {trustExplainability.strategy && <p style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 20px)', marginBottom: '12px' }}>{trustExplainability.strategy}</p>}
            {trustExplainability.implementation && <p style={{ ...carexTypography.bodySmall, color: carexColors.light, fontSize: 'clamp(14px, 1.5vw, 20px)' }}>{trustExplainability.implementation}</p>}
          </div>
        )}
        {ethicalConsiderations && (
          <div className="p-6 rounded-2xl md:col-span-2" style={{ backgroundColor: carexColors.extraLight }}>
            <h3 style={{ ...carexTypography.bodyBold, color: carexColors.primary, fontSize: 'clamp(18px, 2vw, 26px)', marginBottom: '16px' }}>Ethical Considerations</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {ethicalConsiderations.concerns?.length > 0 && (
                <div>
                  <span style={{ ...carexTypography.bodySmall, fontWeight: 600, color: carexColors.dark }}>Concerns:</span>
                  <ul className="mt-2 space-y-1">
                    {ethicalConsiderations.concerns.map((c, i) => <li key={i} style={{ ...carexTypography.bodyExtraSmall, color: carexColors.dark }}>{c}</li>)}
                  </ul>
                </div>
              )}
              {ethicalConsiderations.mitigations?.length > 0 && (
                <div>
                  <span style={{ ...carexTypography.bodySmall, fontWeight: 600, color: carexColors.dark }}>Mitigations:</span>
                  <ul className="mt-2 space-y-1">
                    {ethicalConsiderations.mitigations.map((m, i) => <li key={i} style={{ ...carexTypography.bodyExtraSmall, color: carexColors.dark }}>{m}</li>)}
                  </ul>
                </div>
              )}
              {ethicalConsiderations.guidelines?.length > 0 && (
                <div>
                  <span style={{ ...carexTypography.bodySmall, fontWeight: 600, color: carexColors.dark }}>Guidelines:</span>
                  <ul className="mt-2 space-y-1">
                    {ethicalConsiderations.guidelines.map((g, i) => <li key={i} style={{ ...carexTypography.bodyExtraSmall, color: carexColors.dark }}>{g}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);

// Key Insights (Enhanced for 2025)
const CarexKeyInsights = ({ title = 'Key Insights', insights = [] }) => (
  <section className="py-16 md:py-20 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">
      <h2 style={{ ...carexTypography.heading, color: carexColors.dark, fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '48px', textAlign: 'center' }}>
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {insights.map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl border-2" style={{ borderColor: carexColors.primary }}>
            <div style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: carexColors.primary, marginBottom: '16px' }}>{idx + 1}</div>
            <p style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: 'clamp(16px, 2vw, 26px)', marginBottom: '12px' }}>{item.insight}</p>
            {item.source && <p style={{ ...carexTypography.bodySmall, color: carexColors.light, fontSize: 'clamp(12px, 1.2vw, 18px)', fontStyle: 'italic' }}>Source: {item.source}</p>}
            {item.designImplication && (
              <p style={{ ...carexTypography.bodySmall, color: carexColors.primary, fontSize: 'clamp(14px, 1.5vw, 22px)', marginTop: '12px' }}>
                → {item.designImplication}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Design System Contribution (NEW for 2025)
const CarexDesignSystemContribution = ({ title = 'Design System Contribution', components = [], patterns = [], guidelines = [], adoption }) => (
  <section className="py-16 md:py-20 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">
      <h2 style={{ ...carexTypography.heading, color: carexColors.dark, fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '48px', textAlign: 'center' }}>
        {title}
      </h2>
      {components.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {components.map((comp, idx) => (
            <div key={idx} className="p-6 rounded-2xl border" style={{ borderColor: carexColors.lightSecondary }}>
              <div className="h-32 rounded-xl mb-4" style={{ backgroundColor: carexColors.extraLight }}></div>
              <h3 style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: 'clamp(16px, 2vw, 26px)', marginBottom: '8px' }}>{comp.name}</h3>
              {comp.description && <p style={{ ...carexTypography.bodySmall, color: carexColors.light, fontSize: 'clamp(14px, 1.5vw, 20px)' }}>{comp.description}</p>}
              {comp.usage && <p style={{ ...carexTypography.bodySmall, color: carexColors.primary, fontSize: 'clamp(14px, 1.5vw, 18px)', marginTop: '8px' }}>{comp.usage}</p>}
            </div>
          ))}
        </div>
      )}
      {adoption && (
        <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: carexColors.extraLight }}>
          <p style={{ ...carexTypography.body, color: carexColors.dark, fontSize: 'clamp(16px, 2vw, 26px)' }}>{adoption}</p>
        </div>
      )}
    </div>
  </section>
);

// Turning Point (NEW for 2025)
const CarexTurningPoint = ({ title = 'Turning Point', situation, insight, impact, evidence }) => (
  <section className="py-16 md:py-20 px-6 md:px-16" style={{ background: `linear-gradient(135deg, ${carexColors.extraLight} 0%, ${carexColors.extraLightSecondary} 100%)` }}>
    <div className="max-w-4xl mx-auto text-center">
      <h2 style={{ ...carexTypography.heading, color: carexColors.dark, fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '24px' }}>
        {title}
      </h2>
      <div className="inline-block px-6 py-2 rounded-full mb-8" style={{ backgroundColor: '#ffd52f' }}>
        <span style={{ fontWeight: 700, color: carexColors.dark }}>AHA MOMENT</span>
      </div>
      {insight && (
        <p style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 600, color: carexColors.primary, lineHeight: 1.4, marginBottom: '24px' }}>
          "{insight}"
        </p>
      )}
      {impact && (
        <p style={{ ...carexTypography.body, color: carexColors.dark, fontSize: 'clamp(16px, 2vw, 22px)' }}>
          {impact}
        </p>
      )}
    </div>
  </section>
);

// Validation & Iteration (NEW for 2025)
const CarexValidationIteration = ({ title = 'Validation & Iteration', testingRounds = [], validationMetrics = [] }) => (
  <section className="py-16 md:py-20 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">
      <h2 style={{ ...carexTypography.heading, color: carexColors.dark, fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '48px', textAlign: 'center' }}>
        {title}
      </h2>
      <div className="space-y-6">
        {testingRounds.map((round, idx) => (
          <div key={idx} className="p-6 rounded-2xl border-2" style={{ borderColor: carexColors.primary }}>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-2 rounded-full font-bold" style={{ backgroundColor: carexColors.primary, color: carexColors.white }}>
                Round {round.round}
              </span>
              <span style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: 'clamp(16px, 2vw, 22px)' }}>{round.method}</span>
              {round.participants && <span style={{ ...carexTypography.bodySmall, color: carexColors.light }}>{round.participants}</span>}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {round.findings?.length > 0 && (
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#fff4ce' }}>
                  <span style={{ fontWeight: 600, color: '#67530c', fontSize: 'clamp(14px, 1.5vw, 20px)' }}>Findings:</span>
                  <ul className="mt-2 space-y-1">
                    {round.findings.map((f, i) => <li key={i} style={{ color: '#67530c', fontSize: 'clamp(14px, 1.5vw, 20px)' }}>• {f}</li>)}
                  </ul>
                </div>
              )}
              {round.changes?.length > 0 && (
                <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(143, 216, 24, 0.2)' }}>
                  <span style={{ fontWeight: 600, color: '#3c5612', fontSize: 'clamp(14px, 1.5vw, 20px)' }}>Changes Made:</span>
                  <ul className="mt-2 space-y-1">
                    {round.changes.map((c, i) => <li key={i} style={{ color: '#3c5612', fontSize: 'clamp(14px, 1.5vw, 20px)' }}>✓ {c}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Business Impact Enhanced (2025)
const CarexBusinessImpactEnhanced = ({ title = 'Business Impact', quantitativeMetrics = [], qualitativeFeedback = [], behavioralChanges = [], longTermSuccess }) => (
  <section className="py-16 md:py-20 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">
      <h2 style={{ ...carexTypography.heading, color: carexColors.dark, fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '48px', textAlign: 'center' }}>
        {title}
      </h2>
      {quantitativeMetrics.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {quantitativeMetrics.map((metric, idx) => (
            <div key={idx} className="p-6 rounded-2xl" style={{ backgroundColor: carexColors.extraLight }}>
              {metric.before && <div style={{ fontSize: 'clamp(18px, 2vw, 26px)', color: carexColors.cons, textDecoration: 'line-through' }}>{metric.before}</div>}
              <div style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: carexColors.primary }}>{metric.after || metric.value}</div>
              {metric.improvement && (
                <span className="inline-block px-3 py-1 rounded-full mt-2" style={{ backgroundColor: 'rgba(143, 216, 24, 0.3)', color: '#3c5612', fontWeight: 600, fontSize: 'clamp(14px, 1.5vw, 22px)' }}>
                  {metric.improvement}
                </span>
              )}
              <div style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 22px)', marginTop: '8px' }}>{metric.metric || metric.label}</div>
            </div>
          ))}
        </div>
      )}
      {qualitativeFeedback.length > 0 && (
        <div className="p-6 rounded-2xl border mb-8" style={{ borderColor: carexColors.lightSecondary }}>
          <h3 style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: 'clamp(18px, 2vw, 26px)', marginBottom: '16px' }}>User Feedback</h3>
          {qualitativeFeedback.map((quote, idx) => (
            <p key={idx} className="pl-4 mb-4 italic" style={{ borderLeft: `4px solid ${carexColors.primary}`, color: carexColors.dark, fontSize: 'clamp(16px, 1.8vw, 22px)' }}>
              {quote}
            </p>
          ))}
        </div>
      )}
      {behavioralChanges.length > 0 && (
        <div className="space-y-3">
          <h3 style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: 'clamp(18px, 2vw, 26px)', marginBottom: '16px' }}>Behavioral Changes</h3>
          {behavioralChanges.map((change, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <ArrowBullet color={carexColors.primary} />
              <span style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 22px)' }}>{change}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

// Team & Organizational Impact (NEW for 2025)
const CarexTeamOrganizationalImpact = ({ title = 'Team & Organizational Impact', processImprovements = [], collaborationWins = [], mentorship = [], cultureImpact }) => (
  <section className="py-16 md:py-20 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">
      <h2 style={{ ...carexTypography.heading, color: carexColors.dark, fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '48px', textAlign: 'center' }}>
        {title}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {processImprovements.length > 0 && (
          <div className="p-6 rounded-2xl" style={{ backgroundColor: carexColors.extraLight }}>
            <div className="text-3xl mb-4">🔄</div>
            <h3 style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: 'clamp(16px, 2vw, 26px)', marginBottom: '16px' }}>Process Improvements</h3>
            <ul className="space-y-2">
              {processImprovements.map((item, idx) => <li key={idx} className="flex items-start gap-2"><CheckBullet /><span style={{ fontSize: 'clamp(14px, 1.5vw, 22px)' }}>{item}</span></li>)}
            </ul>
          </div>
        )}
        {collaborationWins.length > 0 && (
          <div className="p-6 rounded-2xl" style={{ backgroundColor: carexColors.extraLight }}>
            <div className="text-3xl mb-4">🤝</div>
            <h3 style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: 'clamp(16px, 2vw, 26px)', marginBottom: '16px' }}>Collaboration Wins</h3>
            <ul className="space-y-2">
              {collaborationWins.map((item, idx) => <li key={idx} className="flex items-start gap-2"><CheckBullet /><span style={{ fontSize: 'clamp(14px, 1.5vw, 22px)' }}>{item}</span></li>)}
            </ul>
          </div>
        )}
        {mentorship.length > 0 && (
          <div className="p-6 rounded-2xl" style={{ backgroundColor: carexColors.extraLight }}>
            <div className="text-3xl mb-4">🎓</div>
            <h3 style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: 'clamp(16px, 2vw, 26px)', marginBottom: '16px' }}>Mentorship</h3>
            <ul className="space-y-2">
              {mentorship.map((item, idx) => <li key={idx} className="flex items-start gap-2"><CheckBullet /><span style={{ fontSize: 'clamp(14px, 1.5vw, 22px)' }}>{item}</span></li>)}
            </ul>
          </div>
        )}
      </div>
      {cultureImpact && (
        <div className="mt-8 p-6 rounded-2xl text-center" style={{ backgroundColor: carexColors.extraLightSecondary }}>
          <p style={{ ...carexTypography.body, color: carexColors.dark, fontSize: 'clamp(16px, 2vw, 26px)' }}>{cultureImpact}</p>
        </div>
      )}
    </div>
  </section>
);

// Reflection & Next Steps (Enhanced for 2025)
const CarexReflectionNextSteps = ({ title = 'Reflection & Next Steps', keyLearnings = [], whatWouldChange = [], futureIterations = [], personalGrowth }) => (
  <section className="py-16 md:py-20 px-6 md:px-16">
    <div className="max-w-6xl mx-auto">
      <h2 style={{ ...carexTypography.heading, color: carexColors.dark, fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: '48px', textAlign: 'center' }}>
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl" style={{ backgroundColor: carexColors.extraLight }}>
          <h3 style={{ ...carexTypography.bodyBold, color: carexColors.primary, fontSize: 'clamp(18px, 2vw, 26px)', marginBottom: '20px' }}>Key Learnings</h3>
          {keyLearnings.map((learning, idx) => (
            <div key={idx} className="mb-4 pl-4" style={{ borderLeft: `3px solid ${carexColors.primary}` }}>
              <p style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 22px)' }}>{learning}</p>
            </div>
          ))}
        </div>
        <div className="p-6 rounded-2xl" style={{ backgroundColor: carexColors.extraLightSecondary }}>
          <h3 style={{ ...carexTypography.bodyBold, color: carexColors.primary, fontSize: 'clamp(18px, 2vw, 26px)', marginBottom: '20px' }}>Next Steps</h3>
          {futureIterations.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: carexColors.primary }}>
                <span style={{ color: carexColors.white, fontWeight: 600, fontSize: '14px' }}>{idx + 1}</span>
              </div>
              <p style={{ ...carexTypography.bodySmall, color: carexColors.dark, fontSize: 'clamp(14px, 1.5vw, 22px)' }}>{step}</p>
            </div>
          ))}
        </div>
      </div>
      {personalGrowth && (
        <div className="mt-8 p-6 rounded-2xl text-center" style={{ backgroundColor: carexColors.extraLight }}>
          <h3 style={{ ...carexTypography.bodyBold, color: carexColors.dark, fontSize: 'clamp(16px, 2vw, 22px)', marginBottom: '12px' }}>Personal Growth</h3>
          <p style={{ ...carexTypography.body, color: carexColors.dark, fontSize: 'clamp(16px, 2vw, 26px)' }}>{personalGrowth}</p>
        </div>
      )}
    </div>
  </section>
);

// ============================================
// CAREX SECTION ROUTER
// ============================================

const CarexSection = ({ section, caseStudy }) => {
  const sectionTitle = section.title?.toLowerCase() || '';

  // Extract content helpers
  const getTextContent = () => {
    const textBlock = section.content?.find(b => b.type === 'text');
    return textBlock?.data?.paragraphs?.join(' ') || textBlock?.data?.description || '';
  };

  const getGridItems = () => {
    const gridBlock = section.content?.find(b => b.type === 'grid');
    return gridBlock?.data?.items || [];
  };

  const getListItems = () => {
    const listBlock = section.content?.find(b => b.type === 'list');
    return listBlock?.data?.items || getGridItems().map(i => i.title || i.description);
  };

  // Check for userflow block in section content
  const getUserFlowBlock = () => {
    return section.content?.find(b => b.type === 'userflow');
  };

  // Render userflow if present
  const renderUserFlow = () => {
    const userflowBlock = getUserFlowBlock();
    if (!userflowBlock) return null;
    return (
      <div className="py-12 px-6" style={{ backgroundColor: carexColors.white }}>
        <div className="max-w-6xl mx-auto">
          <UserFlowDiagram
            data={userflowBlock.data}
            caseStudy={caseStudy}
            colors={{ text: 'text-black', primary: 'bg-black' }}
            template="carex"
          />
        </div>
      </div>
    );
  };

  // Check for specific content block types first (new editable sections)
  const hasBlockType = (type) => section.content?.some(b => b.type === type);

  // NEW: Project Overview
  if (hasBlockType('projectOverview')) {
    const block = section.content.find(b => b.type === 'projectOverview');
    return <><CarexProjectOverview title={block.data.title} paragraphs={block.data.paragraphs} />{renderUserFlow()}</>;
  }

  // NEW: Problem & Solution (check before generic "problem" to avoid conflict)
  if (hasBlockType('problemSolution')) {
    const block = section.content.find(b => b.type === 'problemSolution');
    return <><CarexProblemSolution
      problemTitle={block.data.problemTitle}
      problemDescription={block.data.problemDescription}
      solutionTitle={block.data.solutionTitle}
      solutionDescription={block.data.solutionDescription}
    />{renderUserFlow()}</>;
  }

  // NEW: Team Information
  if (hasBlockType('teamInfo')) {
    const block = section.content.find(b => b.type === 'teamInfo');
    return <><CarexTeamInfo title={block.data.title} members={block.data.members} />{renderUserFlow()}</>;
  }

  // NEW: Success Metrics
  if (hasBlockType('successMetrics')) {
    const block = section.content.find(b => b.type === 'successMetrics');
    return <><CarexSuccessMetrics title={section.title} items={block.data.items} />{renderUserFlow()}</>;
  }

  // NEW: User Research
  if (hasBlockType('userResearch')) {
    const block = section.content.find(b => b.type === 'userResearch');
    return <><CarexUserResearch
      title={block.data.title}
      paragraphs={block.data.paragraphs}
      findings={block.data.findings}
    />{renderUserFlow()}</>;
  }

  // NEW: Conclusion
  if (hasBlockType('conclusion')) {
    const block = section.content.find(b => b.type === 'conclusion');
    return <><CarexConclusion
      title={block.data.title}
      paragraphs={block.data.paragraphs}
      takeaways={block.data.takeaways}
    />{renderUserFlow()}</>;
  }

  // NEW: Business Challenges (AI-generated with challenges array)
  if (hasBlockType('businessChallenges')) {
    const block = section.content.find(b => b.type === 'businessChallenges');
    return <><CarexBusinessChallenges title={block.data.title || section.title} items={block.data.challenges || []} />{renderUserFlow()}</>;
  }

  // NEW: User Needs (AI-generated with needs array)
  if (hasBlockType('userNeeds')) {
    const block = section.content.find(b => b.type === 'userNeeds');
    return <><CarexUserNeeds title={block.data.title || section.title} items={block.data.needs || []} />{renderUserFlow()}</>;
  }

  // NEW: Unique Features (AI-generated with features array)
  if (hasBlockType('uniqueFeatures')) {
    const block = section.content.find(b => b.type === 'uniqueFeatures');
    return <><CarexUniqueFeatures title={block.data.title || section.title} items={block.data.features || []} />{renderUserFlow()}</>;
  }

  // NEW: Competitor Analysis (AI-generated with competitors array)
  if (hasBlockType('competitorAnalysis')) {
    const block = section.content.find(b => b.type === 'competitorAnalysis');
    return <><CarexCompetitorAnalysis title={block.data.title || section.title} competitors={block.data.competitors || []} />{renderUserFlow()}</>;
  }

  // NEW: Quantitative Research (AI-generated with observations array)
  if (hasBlockType('quantitativeResearch')) {
    const block = section.content.find(b => b.type === 'quantitativeResearch');
    return <><CarexQuantitativeResearch
      title={block.data.title || section.title}
      description={block.data.description}
      observations={block.data.observations || []}
    />{renderUserFlow()}</>;
  }

  // NEW: User Persona (AI-generated with persona object)
  if (hasBlockType('userPersona')) {
    const block = section.content.find(b => b.type === 'userPersona');
    return <><CarexUserPersona persona={block.data.persona || block.data} />{renderUserFlow()}</>;
  }

  // NEW: Eisenhower Matrix (AI-generated with quadrants object)
  if (hasBlockType('eisenhowerMatrix')) {
    const block = section.content.find(b => b.type === 'eisenhowerMatrix');
    return <><CarexEisenhowerMatrix title={block.data.title || section.title} quadrants={block.data.quadrants || block.data} />{renderUserFlow()}</>;
  }

  // NEW: Five Why Analysis (AI-generated with problems array)
  if (hasBlockType('fiveWhyAnalysis')) {
    const block = section.content.find(b => b.type === 'fiveWhyAnalysis');
    const problem = block.data.problems?.[0];
    return <><CarexWhyAnalysis
      title={block.data.title || section.title}
      problem={problem?.statement || ''}
      whys={problem?.whys || []}
      rootCause={problem?.rootCause}
    />{renderUserFlow()}</>;
  }

  // NEW: Problem Statement (AI-generated with statement string)
  if (hasBlockType('problemStatement')) {
    const block = section.content.find(b => b.type === 'problemStatement');
    return <><CarexProblemStatement title={block.data.title || section.title} description={block.data.statement || ''} />{renderUserFlow()}</>;
  }

  // NEW: Objectives & Goals (AI-generated with objectives and goals arrays)
  if (hasBlockType('objectivesGoals')) {
    const block = section.content.find(b => b.type === 'objectivesGoals');
    const combinedItems = [...(block.data.objectives || []), ...(block.data.goals || [])];
    return <><CarexObjectives title={block.data.title || section.title} items={combinedItems} />{renderUserFlow()}</>;
  }

  // Match section type by title and render appropriate component
  // 1. Problem Statement
  if (/problem/i.test(sectionTitle)) {
    return <><CarexProblemStatement title={section.title} description={getTextContent()} />{renderUserFlow()}</>;
  }

  // 2. Objectives & Goals
  if (/objective|goal/i.test(sectionTitle)) {
    return <><CarexObjectives title={section.title} items={getListItems()} />{renderUserFlow()}</>;
  }

  // 3. Our Process
  if (/process/i.test(sectionTitle)) {
    return <><CarexProcess title={section.title} />{renderUserFlow()}</>;
  }

  // 4. Business Challenges
  if (/business.*challenge/i.test(sectionTitle)) {
    return <><CarexBusinessChallenges title={section.title} items={getListItems()} />{renderUserFlow()}</>;
  }

  // 5. User Needs
  if (/user.*need/i.test(sectionTitle)) {
    return <><CarexUserNeeds title={section.title} items={getListItems()} />{renderUserFlow()}</>;
  }

  // 6. Features & Functionalities
  if (/feature|functionalit/i.test(sectionTitle)) {
    return <><CarexFeatures title={section.title} features={getGridItems()} />{renderUserFlow()}</>;
  }

  // 7. Product User Challenges
  if (/product.*user.*challenge|user.*challenge/i.test(sectionTitle)) {
    return <><CarexProductUserChallenges title={section.title} items={getListItems()} />{renderUserFlow()}</>;
  }

  // 8. Competitor Analysis
  if (/competitor/i.test(sectionTitle)) {
    return <><CarexCompetitorAnalysis title={section.title} competitors={getGridItems()} />{renderUserFlow()}</>;
  }

  // 9. Unique Features
  if (/unique.*feature/i.test(sectionTitle)) {
    return <><CarexUniqueFeatures title={section.title} items={getGridItems()} />{renderUserFlow()}</>;
  }

  // 10. User Persona
  if (/persona/i.test(sectionTitle)) {
    return <><CarexUserPersona persona={getGridItems()[0]} />{renderUserFlow()}</>;
  }

  // 11. Task Mapping
  if (/task.*map/i.test(sectionTitle)) {
    return <><CarexTaskMapping title={section.title} tasks={getGridItems()} />{renderUserFlow()}</>;
  }

  // 12. Eisenhower Matrix
  if (/eisenhower|matrix/i.test(sectionTitle)) {
    const data = getGridItems()[0] || {};
    return <><CarexEisenhowerMatrix title={section.title} quadrants={data} />{renderUserFlow()}</>;
  }

  // 13. 5 Why Analysis
  if (/why.*analysis|5.*why/i.test(sectionTitle)) {
    const textContent = getTextContent();
    const items = getListItems();
    return <><CarexWhyAnalysis title={section.title} problem={textContent} whys={items} />{renderUserFlow()}</>;
  }

  // 14. Root Cause Analysis
  if (/root.*cause/i.test(sectionTitle)) {
    return <><CarexRootCauseAnalysis title={section.title} problem={getTextContent()} categories={getGridItems()} />{renderUserFlow()}</>;
  }

  // 15. Task Flows
  if (/taskflow|task.*flow|flow/i.test(sectionTitle)) {
    const scenarios = getGridItems().map(i => ({
      title: i.title,
      description: i.description,
      steps: i.steps || i.description?.split(',').map(s => s.trim()) || []
    }));
    return <><CarexTaskflows title={section.title} scenarios={scenarios} />{renderUserFlow()}</>;
  }

  // Screens
  if (/screen/i.test(sectionTitle)) {
    return <><CarexScreens title={section.title} screens={getGridItems().map(i => ({ label: i.title, image: i.image }))} />{renderUserFlow()}</>;
  }

  // Thank you
  if (/thank/i.test(sectionTitle)) {
    return <CarexThankYou />;
  }

  // Default: Generic section with Carex styling
  return (
    <>
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
      {renderUserFlow()}
    </>
  );
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
