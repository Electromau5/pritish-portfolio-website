import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ExternalLink } from 'lucide-react';
import db from '../services/db';
import { getTemplate } from '../templates/caseStudyTemplates';

// ============================================
// CONTENT BLOCK RENDERERS
// ============================================

const HeroBlock = ({ data, colors, template }) => {
  // Simon Pan style - Metrics first
  if (template === 'simonpan') {
    return (
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
          {data.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
          {data.description}
        </p>
      </div>
    );
  }

  // Moritz style - Conversational with tags
  if (template === 'moritz') {
    return (
      <div className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-4">
          {data.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {data.description}
        </p>
      </div>
    );
  }

  // Lola style - Strategic with emphasis
  if (template === 'lola') {
    return (
      <div className="mb-16">
        <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-600 dark:text-gray-400 mb-4">
          Key Insight
        </div>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-6">
          {data.title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
          {data.description}
        </p>
      </div>
    );
  }

  // Gloria style - Visual splash
  if (template === 'gloria') {
    return (
      <div className="mb-12 text-center">
        <h2 className={`text-4xl md:text-5xl font-light mb-6 ${colors.text}`}>
          {data.title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto italic">
          {data.description}
        </p>
      </div>
    );
  }

  // Pratibha style - Clean professional
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-6">
        {data.title}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
        {data.description}
      </p>
    </div>
  );
};

const StatsBlock = ({ data, colors, template }) => {
  // Simon Pan / Lola style - Prominent metrics
  if (template === 'simonpan' || template === 'lola') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl">
        {data.items?.map((stat, index) => (
          <div key={index} className="text-center p-4">
            <div className={`text-3xl md:text-4xl font-bold ${colors.text} mb-2`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Moritz style - Step indicators
  if (template === 'moritz') {
    return (
      <div className="flex flex-wrap gap-6 mb-12 py-6 border-y border-gray-200">
        {data.items?.map((stat, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full ${colors.primary} flex items-center justify-center text-white font-bold`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Gloria style - Floating cards
  if (template === 'gloria') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {data.items?.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className={`text-3xl font-light ${colors.text} mb-2`}>
              {stat.value}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Pratibha style - Clean grid
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {data.items?.map((stat, index) => (
        <div key={index} className={`${colors.light} rounded-xl p-6 text-center`}>
          <div className={`text-3xl md:text-4xl font-light ${colors.text} mb-2`}>
            {stat.value}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

const TextBlock = ({ data, template }) => {
  // Moritz style - Documented steps
  if (template === 'moritz') {
    return (
      <div className="mb-12 pl-6 border-l-2 border-gray-200 dark:border-gray-700">
        {data.title && (
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
            {data.title}
          </h3>
        )}
        <div className="space-y-4">
          {data.paragraphs?.map((paragraph, index) => (
            <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }

  // Gloria style - Visual emphasis
  if (template === 'gloria') {
    return (
      <div className="mb-12 max-w-3xl mx-auto">
        {data.title && (
          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6 text-center">
            {data.title}
          </h3>
        )}
        <div className="space-y-6 text-center">
          {data.paragraphs?.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }

  // Lola style - Strategic framing
  if (template === 'lola') {
    return (
      <div className="mb-12">
        {data.title && (
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            {data.title}
          </h3>
        )}
        <div className="space-y-4 pl-5">
          {data.paragraphs?.map((paragraph, index) => (
            <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }

  // Default (Pratibha / Simon Pan)
  return (
    <div className="mb-12">
      {data.title && (
        <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
          {data.title}
        </h3>
      )}
      <div className="space-y-4">
        {data.paragraphs?.map((paragraph, index) => (
          <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

const GridBlock = ({ data, colors, template }) => {
  const columns = data.columns || 2;

  // Simon Pan style - Outcome cards
  if (template === 'simonpan') {
    return (
      <div className="mb-12">
        {data.title && (
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">{data.title}</h3>
        )}
        <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
          {data.items?.map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <h4 className={`font-medium ${colors.text} mb-2`}>{item.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Moritz style - Process steps
  if (template === 'moritz') {
    return (
      <div className="mb-12">
        {data.title && (
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">{data.title}</h3>
        )}
        <div className="space-y-4">
          {data.items?.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                {index + 1}
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Gloria style - Image gallery cards
  if (template === 'gloria') {
    return (
      <div className="mb-12">
        {data.title && (
          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8 text-center">{data.title}</h3>
        )}
        <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
          {data.items?.map((item, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className={`h-2 ${colors.primary}`}></div>
              <div className="p-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2 group-hover:text-gray-900 transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default (Pratibha / Lola)
  return (
    <div className="mb-12">
      {data.title && (
        <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6">{data.title}</h3>
      )}
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
        {data.items?.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className={`text-lg font-medium ${colors.text} mb-2`}>{item.title}</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuoteBlock = ({ data, colors, template }) => {
  // Gloria style - Artistic
  if (template === 'gloria') {
    return (
      <div className="my-16 text-center">
        <div className={`text-6xl ${colors.text} mb-4`}>"</div>
        <blockquote className="text-2xl md:text-3xl font-light italic text-gray-700 dark:text-gray-200 mb-6 max-w-3xl mx-auto">
          {data.text}
        </blockquote>
        {data.author && (
          <cite className="text-sm text-gray-500 dark:text-gray-400 not-italic">— {data.author}</cite>
        )}
      </div>
    );
  }

  // Lola style - Business testimonial
  if (template === 'lola') {
    return (
      <div className="my-12 bg-gray-900 dark:bg-gray-800 rounded-xl p-8 text-white">
        <blockquote className="text-xl mb-4 leading-relaxed">
          "{data.text}"
        </blockquote>
        {data.author && (
          <cite className="text-sm text-gray-400 not-italic">— {data.author}</cite>
        )}
      </div>
    );
  }

  // Default
  return (
    <div className={`${colors.light} rounded-xl p-8 mb-12`}>
      <blockquote className="text-xl italic text-gray-700 dark:text-gray-200 mb-4">
        "{data.text}"
      </blockquote>
      {data.author && (
        <cite className={`text-sm ${colors.text} not-italic`}>— {data.author}</cite>
      )}
    </div>
  );
};

const ImageBlock = ({ data, template }) => {
  // Gloria style - Full bleed with shadow
  if (template === 'gloria') {
    return (
      <div className="mb-12 -mx-6 md:-mx-12">
        <img src={data.src} alt={data.alt || ''} className="w-full shadow-2xl" />
        {data.caption && (
          <p className="text-sm text-gray-500 mt-4 text-center px-6 italic">{data.caption}</p>
        )}
      </div>
    );
  }

  return (
    <div className="mb-12">
      <img src={data.src} alt={data.alt || ''} className="w-full rounded-xl" />
      {data.caption && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">{data.caption}</p>
      )}
    </div>
  );
};

// ============================================
// JOURNEY MAP RENDERER
// ============================================
const JourneyMapBlock = ({ data, caseStudy, colors, template }) => {
  // Resolve journey data
  const journey =
    data?.ref === 'journeyMap'
      ? caseStudy?.journeyMap
      : data;

  if (!journey || !Array.isArray(journey.stages) || journey.stages.length === 0) {
    return null;
  }

  const personaLabel =
    Array.isArray(journey.personas) && journey.personas.length > 0
      ? `${journey.personas[0].name}${journey.personas[0].role ? ' — ' + journey.personas[0].role : ''}`
      : 'Primary Persona';

  const stageCount = journey.stages.length;

  // Style variants per template (subtle)
  const containerClasses = {
    simonpan: 'max-w-2xl mx-auto',
    moritz: 'max-w-3xl mx-auto',
    lola: 'max-w-5xl mx-auto',
    gloria: 'max-w-4xl mx-auto',
    pratibha: 'max-w-6xl mx-auto',
  }[template] || 'max-w-4xl mx-auto';

  const accent = colors?.text?.replace('text-', '') || 'blue-600';
  const emotionToBar = (n) => Math.max(1, Math.min(5, Number(n || 1)));

  return (
    <div className={`mb-16 ${containerClasses}`}>
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">
          {journey.title || 'User Journey'}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {personaLabel}
        </p>
      </div>

      {/* Stage headers */}
      <div className={`grid gap-3`} style={{ gridTemplateColumns: `repeat(${stageCount}, minmax(0,1fr))` }}>
        {journey.stages.map((stage, idx) => (
          <div key={idx} className="text-center">
            <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs uppercase tracking-wide`}>
              {stage.name}
            </div>
          </div>
        ))}
      </div>

      {/* Steps grid */}
      <div className="mt-4 grid gap-4" style={{ gridTemplateColumns: `repeat(${stageCount}, minmax(0,1fr))` }}>
        {journey.stages.map((stage, idx) => (
          <div key={idx} className="space-y-3">
            {(stage.steps || []).map((step, sIdx) => (
              <div
                key={sIdx}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm"
              >
                <div className="mb-2">
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Action</div>
                  <div className="text-sm text-gray-900 dark:text-white">{step.action}</div>
                </div>
                <div className="mb-2">
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Thoughts</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">{step.thoughts}</div>
                </div>
                <div className="mb-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Feelings</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">{step.feelings}</div>
                </div>
                {/* Emotion bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <span>Emotion</span>
                    <span>{emotionToBar(step.emotion)}/5</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded">
                    <div
                      className={`h-2 rounded ${colors?.primary || 'bg-blue-600'}`}
                      style={{ width: `${(emotionToBar(step.emotion) / 5) * 100}%` }}
                    />
                  </div>
                </div>
                {/* Chips */}
                {(Array.isArray(step.painPoints) && step.painPoints.length > 0) && (
                  <div className="mb-2">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Pain Points</div>
                    <div className="flex flex-wrap gap-2">
                      {step.painPoints.map((p, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-100 dark:border-red-800">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {(Array.isArray(step.opportunities) && step.opportunities.length > 0) && (
                  <div className="mb-2">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Opportunities</div>
                    <div className="flex flex-wrap gap-2">
                      {step.opportunities.map((o, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-100 dark:border-green-800">
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {(Array.isArray(step.touchpoints) && step.touchpoints.length > 0) && (
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Touchpoints</div>
                    <div className="flex flex-wrap gap-2">
                      {step.touchpoints.map((t, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Content block renderer with template support
const ContentBlock = ({ block, colors, template, caseStudy }) => {
  switch (block.type) {
    case 'hero':
      return <HeroBlock data={block.data} colors={colors} template={template} />;
    case 'stats':
      return <StatsBlock data={block.data} colors={colors} template={template} />;
    case 'text':
      return <TextBlock data={block.data} template={template} />;
    case 'grid':
      return <GridBlock data={block.data} colors={colors} template={template} />;
    case 'quote':
      return <QuoteBlock data={block.data} colors={colors} template={template} />;
    case 'image':
      return <ImageBlock data={block.data} template={template} />;
    case 'journey':
      return <JourneyMapBlock data={block.data} caseStudy={caseStudy} colors={colors} template={template} />;
    default:
      return null;
  }
};

// ============================================
// COLOR THEMES
// ============================================

const colorThemes = {
  blue: {
    primary: 'bg-blue-600',
    light: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-600',
    gradient: 'from-blue-600 to-blue-800'
  },
  green: {
    primary: 'bg-green-600',
    light: 'bg-green-50 dark:bg-green-900/20',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-600',
    gradient: 'from-green-600 to-green-800'
  },
  purple: {
    primary: 'bg-purple-600',
    light: 'bg-purple-50 dark:bg-purple-900/20',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-600',
    gradient: 'from-purple-600 to-purple-800'
  },
  orange: {
    primary: 'bg-orange-600',
    light: 'bg-orange-50 dark:bg-orange-900/20',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-600',
    gradient: 'from-orange-600 to-orange-800'
  }
};

// ============================================
// TEMPLATE-SPECIFIC LAYOUTS
// ============================================

// Simon Pan Uber Style - EXACT REPLICA of simonpan.com/work/uber/
// Colors: Pure black (#000) on white (#fff), minimal design
// Typography: System sans-serif, 42px titles, 18px body, 1.7 line-height
// Layout: 680px max content width, full-bleed images, generous spacing
const SimonPanLayout = ({ caseStudy, colors, isPreview, navigate, sectionRefs }) => {
  // Simon Pan's exact color scheme
  const spColors = {
    bg: '#ffffff',
    text: '#1a1a1a',
    textLight: '#666666',
    divider: '#e5e5e5',
    link: '#000000'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: spColors.bg, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Navigation - Simon Pan style: minimal top nav */}
      <nav className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: spColors.divider }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {!isPreview && (
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:opacity-70 transition-opacity"
              style={{ color: spColors.text }}
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Portfolio</span>
            </button>
          )}
          {isPreview && <div />}
          <div className="text-sm" style={{ color: spColors.textLight }}>
            Case Study
          </div>
        </div>
      </nav>

      {/* Hero Image - Full width, no padding (Simon Pan signature) */}
      <div className="w-full bg-gray-100">
        <img
          src="/api/placeholder/1600/800"
          alt={caseStudy.title}
          className="w-full h-auto object-cover"
          style={{ maxHeight: '70vh' }}
        />
      </div>

      {/* Title Section - Narrow content width like Simon Pan */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1
          className="font-semibold mb-6"
          style={{
            fontSize: '42px',
            lineHeight: '1.2',
            color: spColors.text,
            letterSpacing: '-0.02em'
          }}
        >
          {caseStudy.title}
        </h1>
        <p
          className="text-xl"
          style={{
            color: spColors.textLight,
            lineHeight: '1.6',
            fontSize: '20px'
          }}
        >
          {caseStudy.subtitle}
        </p>
      </div>

      {/* Content Sections */}
      <div className="max-w-2xl mx-auto px-6 pb-24">
        {caseStudy.sections?.map((section, index) => (
          <section
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="mb-16"
          >
            {/* Section Divider - Simon Pan uses HR */}
            <hr
              className="mb-12"
              style={{
                border: 'none',
                borderTop: `1px solid ${spColors.divider}`,
                margin: '0 0 48px 0'
              }}
            />

            {/* Section Title */}
            <h2
              className="font-semibold mb-8"
              style={{
                fontSize: '32px',
                lineHeight: '1.3',
                color: spColors.text,
                letterSpacing: '-0.01em'
              }}
            >
              {section.title}
            </h2>

            {/* Section Content */}
            {section.content?.map((block, blockIndex) => (
              <SimonPanContentBlock
                key={blockIndex}
                block={block}
                spColors={spColors}
              />
            ))}
          </section>
        ))}

        {/* Results Section - Simon Pan displays metrics as bullet list */}
        {caseStudy.sections?.find(s => s.content?.find(b => b.type === 'stats')) && (
          <div className="mt-16 pt-12" style={{ borderTop: `1px solid ${spColors.divider}` }}>
            <h2
              className="font-semibold mb-8"
              style={{ fontSize: '32px', color: spColors.text }}
            >
              Results
            </h2>
            <ul className="space-y-4" style={{ fontSize: '18px', lineHeight: '1.7', color: spColors.text }}>
              {caseStudy.sections
                .flatMap(s => s.content || [])
                .filter(b => b.type === 'stats')
                .flatMap(b => b.data?.items || [])
                .map((stat, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3" style={{ color: spColors.textLight }}>•</span>
                    <span>
                      <strong style={{ color: spColors.text }}>{stat.value}</strong>
                      {' '}{stat.label}
                    </span>
                  </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>

      {/* Footer - Minimal like Simon Pan */}
      <footer
        className="py-12 text-center"
        style={{
          borderTop: `1px solid ${spColors.divider}`,
          backgroundColor: spColors.bg
        }}
      >
        <p style={{ fontSize: '14px', color: spColors.textLight }}>
          Template based on{' '}
          <a
            href="https://simonpan.com/work/uber/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
            style={{ color: spColors.text }}
          >
            simonpan.com
          </a>
        </p>
      </footer>
    </div>
  );
};

// Simon Pan specific content blocks - exact styling
const SimonPanContentBlock = ({ block, spColors }) => {
  switch (block.type) {
    case 'text':
      return (
        <div className="mb-8">
          {block.data.title && (
            <h3
              className="font-semibold mb-4"
              style={{ fontSize: '24px', color: spColors.text }}
            >
              {block.data.title}
            </h3>
          )}
          {block.data.paragraphs?.map((p, i) => (
            <p
              key={i}
              className="mb-6"
              style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: spColors.text
              }}
            >
              {p}
            </p>
          ))}
        </div>
      );

    case 'image':
      // Simon Pan uses full-width images that break out of content container
      return (
        <div className="my-12 -mx-6 md:-mx-24">
          <img
            src={block.data.src || '/api/placeholder/1200/600'}
            alt={block.data.alt || ''}
            className="w-full"
          />
          {block.data.caption && (
            <p
              className="text-center mt-4 px-6"
              style={{ fontSize: '14px', color: spColors.textLight }}
            >
              {block.data.caption}
            </p>
          )}
        </div>
      );

    case 'quote':
      // Simon Pan uses italic quotes with attribution
      return (
        <blockquote className="my-12 pl-6" style={{ borderLeft: `3px solid ${spColors.divider}` }}>
          <p
            className="italic mb-4"
            style={{ fontSize: '20px', lineHeight: '1.6', color: spColors.text }}
          >
            "{block.data.text}"
          </p>
          {block.data.author && (
            <cite style={{ fontSize: '14px', color: spColors.textLight, fontStyle: 'normal' }}>
              — {block.data.author}
            </cite>
          )}
        </blockquote>
      );

    case 'grid':
      // Simon Pan uses simple bullet lists for features
      return (
        <div className="my-8">
          {block.data.title && (
            <h3
              className="font-semibold mb-4"
              style={{ fontSize: '24px', color: spColors.text }}
            >
              {block.data.title}
            </h3>
          )}
          <ul className="space-y-3">
            {block.data.items?.map((item, i) => (
              <li
                key={i}
                className="flex items-start"
                style={{ fontSize: '18px', lineHeight: '1.7', color: spColors.text }}
              >
                <span className="mr-3" style={{ color: spColors.textLight }}>•</span>
                <span>
                  <strong>{item.title}</strong>
                  {item.description && ` — ${item.description}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'stats':
      // Simon Pan displays stats as bullet points with bold values
      return (
        <div className="my-8">
          <ul className="space-y-3">
            {block.data.items?.map((stat, i) => (
              <li
                key={i}
                className="flex items-start"
                style={{ fontSize: '18px', lineHeight: '1.7', color: spColors.text }}
              >
                <span className="mr-3" style={{ color: spColors.textLight }}>•</span>
                <span>
                  <strong>{stat.value}</strong> {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'hero':
      return (
        <div className="mb-8">
          <p
            className="text-xl"
            style={{
              fontSize: '20px',
              lineHeight: '1.6',
              color: spColors.textLight
            }}
          >
            {block.data.description}
          </p>
        </div>
      );

    default:
      return null;
  }
};

// Moritz Oesterlau Style - Process Journey
const MoritzLayout = ({ caseStudy, colors, isPreview, navigate, sectionRefs }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    {/* Header with yellow accent */}
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {!isPreview && (
          <button onClick={() => navigate('/home')} className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6">
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-yellow-400 text-gray-900 text-sm font-medium rounded">Case Study</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded">UX Research</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded">Product Design</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-3">
          {caseStudy.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {caseStudy.subtitle}
        </p>
      </div>
    </div>

    {/* Process Steps Indicator */}
    <div className="bg-white dark:bg-gray-800 py-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-between overflow-x-auto">
          {caseStudy.sections?.map((section, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}>
                {index + 1}
              </div>
              {index < caseStudy.sections.length - 1 && (
                <div className="w-8 h-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="max-w-3xl mx-auto px-6 py-12">
      {caseStudy.sections?.map((section, index) => (
        <section key={index} ref={(el) => (sectionRefs.current[index] = el)} className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              {index + 1}
            </div>
            <h2 className="text-2xl font-medium text-gray-900 dark:text-white">
              {section.title}
            </h2>
          </div>
          {section.content?.map((block, blockIndex) => (
            <ContentBlock key={blockIndex} block={block} colors={colors} template="moritz" caseStudy={caseStudy} />
          ))}
        </section>
      ))}
    </div>

    {/* Footer */}
    <div className="text-center py-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <p className="text-xs text-gray-400">Template inspired by <a href="https://moritzoesterlau.de" target="_blank" rel="noopener noreferrer" className="hover:underline">moritzoesterlau.de</a></p>
    </div>
  </div>
);

// Lola Jiang Style - Data-Driven Leadership
const LolaLayout = ({ caseStudy, colors, isPreview, navigate, sectionRefs }) => (
  <div className="min-h-screen bg-white dark:bg-gray-900">
    {/* Dark Hero */}
    <div className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {!isPreview && (
          <button onClick={() => navigate('/home')} className="flex items-center space-x-2 text-gray-400 hover:text-white mb-12">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-medium mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-400">
              {caseStudy.subtitle}
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Role</div>
              <div className="text-white">Lead Product Designer</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Timeline</div>
              <div className="text-white">3 months</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Key Metrics Banner */}
    {caseStudy.sections?.[0]?.content?.find(b => b.type === 'stats') && (
      <div className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.sections[0].content.find(b => b.type === 'stats').data.items?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${colors.text} mb-1`}>{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

    {/* Content */}
    <div className="max-w-5xl mx-auto px-6 py-16">
      {caseStudy.sections?.map((section, index) => (
        <section key={index} ref={(el) => (sectionRefs.current[index] = el)} className="mb-20">
          <h2 className="text-3xl font-medium text-gray-900 dark:text-white mb-8">
            {section.title}
          </h2>
          {section.content?.map((block, blockIndex) => (
            <ContentBlock key={blockIndex} block={block} colors={colors} template="lola" caseStudy={caseStudy} />
          ))}
        </section>
      ))}
    </div>

    {/* Footer */}
    <div className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
      <p className="text-xs text-gray-400">Template inspired by <a href="https://lolajiang.com" target="_blank" rel="noopener noreferrer" className="hover:underline">lolajiang.com</a></p>
    </div>
  </div>
);

// Gloria Lo Style - Visual Storyteller
const GloriaLayout = ({ caseStudy, colors, isPreview, navigate, sectionRefs }) => (
  <div className="min-h-screen bg-amber-50 dark:bg-gray-900">
    {/* Visual Hero */}
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 relative bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      {!isPreview && (
        <button onClick={() => navigate('/home')} className="absolute top-8 left-8 flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      )}

      <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-6 text-center">
        {caseStudy.title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-2xl italic">
        {caseStudy.subtitle}
      </p>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronRight size={32} className="text-gray-400 rotate-90" />
      </div>
    </div>

    {/* Content */}
    <div className="max-w-4xl mx-auto px-6 py-16">
      {caseStudy.sections?.map((section, index) => (
        <section key={index} ref={(el) => (sectionRefs.current[index] = el)} className="mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-12">
            {section.title}
          </h2>
          {section.content?.map((block, blockIndex) => (
            <ContentBlock key={blockIndex} block={block} colors={colors} template="gloria" caseStudy={caseStudy} />
          ))}
        </section>
      ))}
    </div>

    {/* End Card */}
    <div className="text-center py-16 bg-white dark:bg-gray-800">
      <p className="text-sm text-gray-500 mb-4">Thanks for reading!</p>
      {!isPreview && (
        <button onClick={() => navigate('/home')} className={`${colors.text} hover:underline`}>
          View More Projects
        </button>
      )}
      <p className="text-xs text-gray-400 mt-8">Template inspired by <a href="https://glorialo.design" target="_blank" rel="noopener noreferrer" className="hover:underline">glorialo.design</a></p>
    </div>
  </div>
);

// Pratibha Joshi Style - Clean Professional (Default)
const PratibhaLayout = ({ caseStudy, colors, isPreview, navigate, sectionRefs, activeSection, scrollToSection }) => (
  <div className="min-h-screen bg-white dark:bg-gray-900">
    {/* Hero */}
    <div className={`bg-gradient-to-br ${colors.gradient} text-white`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {!isPreview && (
          <button onClick={() => navigate('/home')} className="flex items-center space-x-2 text-white/80 hover:text-white mb-8">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
        )}
        <h1 className="text-4xl md:text-6xl font-light mb-4">{caseStudy.title}</h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl">{caseStudy.subtitle}</p>
      </div>
    </div>

    {/* Sticky Navigation */}
    {caseStudy.sections?.length > 1 && (
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex space-x-1 overflow-x-auto py-4 scrollbar-hide">
            {caseStudy.sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeSection === index
                    ? `${colors.primary} text-white`
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>
    )}

    {/* Content */}
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {caseStudy.sections?.map((section, index) => (
            <section key={index} ref={(el) => (sectionRefs.current[index] = el)} className="mb-16 scroll-mt-24">
              <div className={`border-l-4 ${colors.border} pl-6 mb-8`}>
                <h2 className="text-3xl font-light text-gray-900 dark:text-white">{section.title}</h2>
              </div>
              <div className="pl-6">
                {section.content?.map((block, blockIndex) => (
                  <ContentBlock key={blockIndex} block={block} colors={colors} template="pratibha" caseStudy={caseStudy} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className={`${colors.light} rounded-xl p-6`}>
              <h3 className="font-medium text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {caseStudy.sections?.map((section, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(index)}
                      className={`text-sm ${activeSection === index ? colors.text : 'text-gray-600 dark:text-gray-400'} hover:${colors.text}`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
      <p className="text-xs text-gray-400">Template inspired by <a href="https://pratibhajoshi.com" target="_blank" rel="noopener noreferrer" className="hover:underline">pratibhajoshi.com</a></p>
    </div>
  </div>
);

// ============================================
// MAIN COMPONENT
// ============================================

const CaseStudyDisplay = ({ caseStudyData, isPreview = false }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState(caseStudyData || null);
  const [activeSection, setActiveSection] = useState(0);
  const [loading, setLoading] = useState(!caseStudyData);
  const [error, setError] = useState(null);
  const sectionRefs = useRef([]);

  // no-op

  // Load case study from database
  useEffect(() => {
    if (caseStudyData) {
      setCaseStudy(caseStudyData);
      setLoading(false);
      return;
    }

    if (!slug) return;

    const loadCaseStudy = async () => {
      try {
        const study = await db.caseStudies.where('slug').equals(slug).first();
        if (!study) {
          setError('Case study not found');
        } else if (study.status !== 'published' && !isPreview) {
          setError('This case study is not published yet');
        } else {
          setCaseStudy(study);
        }
      } catch (err) {
        console.error('Error loading case study:', err);
        setError('Failed to load case study');
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudy();
  }, [slug, caseStudyData, isPreview]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [caseStudy]);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const colors = colorThemes[caseStudy?.accentColor] || colorThemes.blue;
  const template = caseStudy?.template || 'pratibha';

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-gray-600 dark:text-gray-400">Loading case study...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-gray-600 dark:text-gray-400 mb-4">{error}</div>
        <button onClick={() => navigate('/home')} className="text-blue-600 hover:underline">
          Return to Home
        </button>
      </div>
    );
  }

  if (!caseStudy) return null;

  // Render based on template
  const layoutProps = { caseStudy, colors, isPreview, navigate, sectionRefs, activeSection, scrollToSection };

  switch (template) {
    case 'simonpan':
      return <SimonPanLayout {...layoutProps} />;
    case 'moritz':
      return <MoritzLayout {...layoutProps} />;
    case 'lola':
      return <LolaLayout {...layoutProps} />;
    case 'gloria':
      return <GloriaLayout {...layoutProps} />;
    case 'pratibha':
    default:
      return <PratibhaLayout {...layoutProps} />;
  }
};

export default CaseStudyDisplay;
