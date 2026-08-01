import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const cLight = {
  primary:      '#1d2029',
  secondary:    '#494c56',
  muted:        '#64748b',
  accent:       '#059669',
  accentSubtle: '#e6fbf4',
  border:       '#e2e8f0',
  borderDark:   '#cbd5e1',
  bg:           '#ffffff',
  bgSubtle:     '#f8fafc',
};

const cDark = {
  primary:      '#f4f4f4',
  secondary:    '#848484',
  muted:        '#848484',
  accent:       '#34d399',
  accentSubtle: '#1a1919',
  border:       '#2c2b2b',
  borderDark:   '#2c2b2b',
  bg:           '#0f0e0e',
  bgSubtle:     '#1a1919',
};

const HandsAICaseStudyPage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const c = isDark ? cDark : cLight;

  return (
    <div style={{ backgroundColor: c.bg, minHeight: '100vh', fontFamily: 'Inter, -apple-system, sans-serif', color: c.primary }}>

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: c.bg,
        borderBottom: `1px solid ${c.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '28px 64px',
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button
            onClick={() => navigate('/')}
            style={{ fontSize: 16, fontWeight: 600, color: c.primary, background: 'none', border: 'none', padding: 0, cursor: 'pointer', lineHeight: 'normal' }}
          >
            Pritish Sai
          </button>
          <span style={{ fontSize: 16, fontWeight: 500, color: c.muted }}>/ Systems Architect</span>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {[['Work', '/#section-3'], ['About', '/#section-1'], ['Resume', '/resume.pdf']].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('/resume') ? '_blank' : undefined}
              rel={href.startsWith('/resume') ? 'noopener noreferrer' : undefined}
              style={{ fontSize: 14, fontWeight: 500, color: c.muted, textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = c.primary)}
              onMouseLeave={e => (e.currentTarget.style.color = c.muted)}
            >
              {label}
            </a>
          ))}
          <div style={{ backgroundColor: c.accentSubtle, border: `0.5px solid ${c.accent}`, borderRadius: 99, padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: c.accent, flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: c.accent, whiteSpace: 'nowrap' }}>Available for Q3 Projects</span>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 96, paddingBottom: 64, paddingLeft: 64, paddingRight: 64, display: 'flex', flexDirection: 'column', gap: 40, marginTop: 73 }}>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.39px', textTransform: 'uppercase' }}>
            Case Study — Design Systems
          </span>
          <span style={{ fontSize: 13, fontWeight: 500, color: c.muted, textTransform: 'uppercase' }}>
            System Deployed 2023–2024
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h1 style={{ fontSize: 96, fontWeight: 700, color: c.primary, lineHeight: 1.02, letterSpacing: '-3.84px', margin: 0 }}>
            CMA Global — AI-Powered Design System Infrastructure
          </h1>
          <p style={{ fontSize: 32, fontWeight: 400, color: c.secondary, lineHeight: 1.4, margin: 0 }}>
            Evolving a static UI kit into an AI-powered design system infrastructure — building custom MCP integrations, token intelligence layers, and automated design-ops utilities that enabled a lean cross-functional team to ship production-ready AI software across six U.S. health departments in six months.
          </p>
        </div>

        <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: 40, display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {[
            { label: 'ROLE',     value: 'Lead Design Systems Architect & UX Design Lead' },
            { label: 'TIMELINE', value: 'Oct 2023 – Dec 2024' },
            { label: 'TEAM',     value: '1 Lead Designer · 2 Jr. Designers · 1 PM · 1 AI Researcher · 4 Engineers' },
            { label: 'PLATFORM', value: 'HANDS AI Platform · WIC Federal Programs' },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: c.muted, letterSpacing: '0.24px', textTransform: 'uppercase' }}>{label}</span>
              <span style={{ fontSize: 15, fontWeight: 500, color: c.primary }}>{value}</span>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: c.bgSubtle, border: `1px solid ${c.border}`, borderRadius: 24, height: 580, overflow: 'hidden', position: 'relative' }}>
          <video
            src="/emma-demo.mp4"
            autoPlay muted loop playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* ── OVERVIEW ────────────────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: '80px 64px', display: 'flex', gap: 64, alignItems: 'flex-start' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: c.accent, letterSpacing: '0.32px', textTransform: 'uppercase' }}>(01) Overview</span>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: c.primary, lineHeight: 1.34, margin: 0 }}>
            Shipping production-ready AI software in six months without design-to-code friction.
          </h2>
          <p style={{ fontSize: 18, fontWeight: 400, color: c.secondary, lineHeight: 1.6, margin: 0 }}>
            To launch the HANDS AI platform efficiently across six U.S. health departments, we evolved a static UI kit into an AI-powered design system infrastructure. By building custom Model Context Protocol (MCP) integrations, token intelligence layers, and automated design-ops utilities, we empowered a small cross-functional product team to ship production-ready AI software in six months without design-to-code friction.
          </p>
          <p style={{ fontSize: 18, fontWeight: 400, color: c.secondary, lineHeight: 1.6, margin: 0 }}>
            I led the design systems architecture and UX design: defining the semantic token intelligence model, building the custom MCP integration engine, standardizing the core AI UX component library, and establishing the automated CI/CD quality gates that enforce compliance across every engineering release.
          </p>
        </div>
        <div style={{ width: 480, flexShrink: 0, display: 'flex', gap: 40 }}>
          {[
            { stat: '85%+', label: 'Design Token Adoption',   desc: 'Standardized semantic tokens deployed across 10+ product modules' },
            { stat: '−35%', label: 'Handoff Time Reduction',  desc: 'Eliminated manual spec writing via MCP-assisted coding workflows' },
          ].map(({ stat, label, desc }) => (
            <div key={stat} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 48, fontWeight: 700, color: c.accent, letterSpacing: '-0.96px', lineHeight: 'normal', whiteSpace: 'nowrap' }}>{stat}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: c.primary }}>{label}</span>
                <span style={{ fontSize: 14, fontWeight: 400, color: c.muted, lineHeight: 1.4 }}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CHALLENGE ───────────────────────────────────────────── */}
      <section style={{ padding: '96px 64px', display: 'flex', gap: 80, alignItems: 'flex-start' }}>
        <div style={{ width: 360, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: c.muted, letterSpacing: '0.26px', textTransform: 'uppercase' }}>(02) The Problem Statements</span>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: c.primary, lineHeight: 1.2, margin: 0 }}>
            The friction points that slowed us down.
          </h2>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <p style={{ fontSize: 22, fontWeight: 400, color: c.secondary, lineHeight: 1.5, margin: 0 }}>
            Before building the internal design system solutions, the cross-functional product team faced major bottlenecks when building complex AI interactions — causing compounding organizational debt that affected velocity, accuracy, and compliance.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                num: '01',
                title: 'Design-to-Code Drift',
                desc: 'Manual handoffs resulted in engineers spending 35% of sprint cycles tweaking CSS, fixing UI alignment, and writing component boilerplate — a direct consequence of design-to-code drift at scale.',
              },
              {
                num: '02',
                title: 'Inconsistent AI Component Implementation',
                desc: 'Different engineers built conversational interfaces, risk badges, and audit trails independently across product modules, producing visual and behavioural divergence that eroded system coherence.',
              },
              {
                num: '03',
                title: 'No Machine-Readable Source of Truth',
                desc: 'Engineers lacked a single machine-readable source of truth combining visual design rules with backend medical data logic — updating guidelines manually delayed sprint releases and introduced federal compliance risk.',
              },
            ].map(({ num, title, desc }, i, arr) => (
              <div
                key={num}
                style={{
                  borderTop: `1px solid ${c.border}`,
                  ...(i === arr.length - 1 ? { borderBottom: `1px solid ${c.border}` } : {}),
                  padding: '24px 0',
                  display: 'flex',
                  gap: 24,
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 600, color: c.accent, width: 40, flexShrink: 0 }}>{num}</span>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontSize: 18, fontWeight: 600, color: c.primary }}>{title}</span>
                  <span style={{ fontSize: 15, fontWeight: 400, color: c.muted, lineHeight: 1.5 }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION PILLARS ────────────────────────────────────── */}
      <section style={{ backgroundColor: c.bgSubtle, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: '96px 64px', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>(03) The Solutions</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>Foundational design system values.</h2>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {[
            {
              num: '01 / Token Intelligence',
              title: 'Semantic Token Layer',
              desc: 'Structured design decisions into a three-tier W3C-compliant token hierarchy — carrying medical context and WCAG 2.1 AA accessibility constraints directly into the codebase, enabling AI tools to apply design rules automatically without manual specification.',
            },
            {
              num: '02 / MCP Integration',
              title: 'Custom MCP Engine',
              desc: 'Built custom MCP server connections linking Figma variables, GitHub repositories, and database schemas directly to developers\' AI environments — enabling Cursor and Claude Code to generate production-ready, compliant components without manual handoff.',
            },
            {
              num: '03 / Automated Quality',
              title: 'CI/CD Quality Gates',
              desc: 'Embedded GitHub Actions running token schema linting, visual regression testing via Chromatic, and WCAG 2.1 AA auditing via Axe on every PR — reducing systemic QC and UI bugs by 31% and cutting maintenance overhead by 50%.',
            },
          ].map(({ num, title, desc }) => (
            <div key={num} style={{ flex: 1, backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: c.accent, letterSpacing: '0.56px', textTransform: 'uppercase' }}>{num}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 20, fontWeight: 600, color: c.primary }}>{title}</span>
                <span style={{ fontSize: 15, fontWeight: 400, color: c.muted, lineHeight: 1.5 }}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AI UX COMPONENT LIBRARY (Tier Cards) ────────────────── */}
      <section style={{ padding: '96px 64px', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>(04) AI UX Component Library</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>Standardized production AI UX components for the team.</h2>
        </div>
        <div style={{ backgroundColor: c.bgSubtle, border: `1px solid ${c.border}`, borderRadius: 20, padding: 40, display: 'flex', gap: 40, alignItems: 'stretch' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { tier: 'Component 01', title: 'Conversational UI Components', desc: 'Chat flows, typing indicators, inline action chips, and reprompting controls — standardized patterns replacing ad hoc implementations across product modules with a single, token-bound component set.' },
              { tier: 'Component 02', title: 'Risk Prediction Cards', desc: 'Color-coded four-tier risk badges with explicit contributing factor disclosures. Each card surfaces AI assessment inputs, keeping caseworkers in control of clinical judgement.' },
            ].map(({ tier, title, desc }) => (
              <div key={tier} style={{ backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: c.accent }}>{tier}</span>
                <span style={{ fontSize: 16, fontWeight: 600, color: c.primary }}>{title}</span>
                <span style={{ fontSize: 14, fontWeight: 400, color: c.muted, lineHeight: 1.5 }}>{desc}</span>
              </div>
            ))}
          </div>
          <div style={{ width: 40, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 20, color: c.muted }}>→</span>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { tier: 'Component 03', title: 'Medical Artifact Containers', desc: 'Card containers for AI-generated summaries with provenance labels, confidence levels, and "continue editing" controls — every AI-authored output visually distinguishable from caseworker-authored content.' },
              { tier: 'Component 04', title: 'Side-by-Side Diff Audit Trails', desc: 'Reversible, timestamped change visualization with Accept/Reject controls. Every AI-assisted patient record modification produces a compliant audit trail — a hard requirement for federal healthcare programs.' },
            ].map(({ tier, title, desc }) => (
              <div key={tier} style={{ backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: c.accent }}>{tier}</span>
                <span style={{ fontSize: 16, fontWeight: 600, color: c.primary }}>{title}</span>
                <span style={{ fontSize: 14, fontWeight: 400, color: c.muted, lineHeight: 1.5 }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MCP INTEGRATION (Component Showcase 2x2) ────────────── */}
      <section style={{ backgroundColor: c.bgSubtle, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: '96px 64px', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>(05) MCP Integration Engine</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>Custom Model Context Protocol connections.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            {
              label: 'Figma MCP',
              title: 'Design-to-Code Context',
              tag: 'Live Token Sync',
              desc: 'Enabled AI to read component variants, spacing, and color tokens directly from Figma frames — generating production React code without manual spec translation.',
            },
            {
              label: 'GitHub MCP',
              title: 'Automated PR Intelligence',
              tag: 'Component Adoption Tracking',
              desc: 'Automated PR code reviews, component adoption tracking, and release changelog generation — keeping design and engineering in constant alignment without handoff meetings.',
            },
            {
              label: 'Token MCP Server',
              title: 'Bidirectional Token Sync',
              tag: 'Real-Time Sync',
              desc: 'Provided real-time, bidirectional token synchronization between Figma design files and the codebase — eliminating manual reconciliation and token drift across all 10+ product modules.',
            },
            {
              label: 'Taste Layer Conditioning',
              title: 'AI Coding Guidelines',
              tag: 'Stable v1.0',
              desc: 'Markdown instruction sets embedded in the codebase encoding team coding guidelines, token usage rules, and negative examples — conditioning Cursor and Claude Code to generate on-system output without manual correction.',
            },
          ].map(({ label, title, tag, desc }) => (
            <div key={label} style={{ backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: c.muted, textTransform: 'uppercase', letterSpacing: '0.56px' }}>{label}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 18, fontWeight: 600, color: c.primary }}>{title}</span>
                <div style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>
                  <span style={{ backgroundColor: c.accentSubtle, border: `0.5px solid ${c.accent}`, borderRadius: 99, padding: '4px 10px', fontSize: 12, fontWeight: 500, color: c.accent }}>{tag}</span>
                </div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 400, color: c.muted, lineHeight: 1.5 }}>{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS / EXECUTION TIMELINE ────────────────────────── */}
      <section style={{ padding: '96px 64px', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>(06) Execution Timeline</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>How we built the system.</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            {
              num: '01',
              title: 'Semantic Token Architecture',
              desc: 'Structured design decisions into a three-tier .token.json hierarchy compliant with W3C 2025.10 standards — carrying medical context and WCAG 2.1 AA accessibility constraints directly into the codebase for AI tool consumption.',
            },
            {
              num: '02',
              title: 'Figma MCP Integration',
              desc: 'Built custom MCP server connections linking Figma variables directly to developers\' AI environments, enabling Cursor and Claude Code to read component tokens and generate compliant production code without manual handoff.',
            },
            {
              num: '03',
              title: 'GitHub MCP + CI/CD Pipeline',
              desc: 'Automated PR code reviews, token schema linting, visual regression testing via Chromatic, and accessibility auditing via Axe on every pull request — enforcing quality before code reaches production.',
            },
            {
              num: '04',
              title: 'AI UX Component Library',
              desc: 'Built and standardized five production React and Figma AI UX components — conversational UI, risk prediction cards, medical artifact containers, diff audit trails, and memory management UI — each with defined token bindings and governance rules.',
            },
            {
              num: '05',
              title: 'Deployment & Adoption Strategy',
              desc: 'Shipped production-ready AI software across six U.S. health departments serving hundreds of healthcare caseworkers — with 100% architectural and WCAG 2.1 AA compliance across all engineering releases.',
            },
          ].map(({ num, title, desc }, i, arr) => (
            <div
              key={num}
              style={{
                borderTop: `1px solid ${c.border}`,
                ...(i === arr.length - 1 ? { borderBottom: `1px solid ${c.border}` } : {}),
                padding: '28px 0',
                display: 'flex',
                gap: 40,
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 700, color: c.accent, width: 60, flexShrink: 0, lineHeight: 'normal' }}>{num}</span>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 20, fontWeight: 600, color: c.primary }}>{title}</span>
                <span style={{ fontSize: 16, fontWeight: 400, color: c.secondary, lineHeight: 1.6 }}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMPACT & METRICS ────────────────────────────────────── */}
      <section style={{ backgroundColor: c.bgSubtle, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: '96px 64px', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>(07) Empirical Metrics</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>Direct, measurable product team results.</h2>
        </div>
        <div style={{ display: 'flex', gap: 32 }}>
          {[
            {
              stat: '−35%',
              label: 'Faster Design-to-Engineering Handoffs',
              desc: 'Eliminated manual spec writing by enabling AI coding tools to read Figma component tokens directly via MCP.',
            },
            {
              stat: '85%+',
              label: 'Design Token Adoption Rate',
              desc: 'Standardized semantic token architecture deployed across 10+ product modules serving federal WIC programs.',
            },
            {
              stat: '−31%',
              label: 'Reduction in Systemic QC & UI Bugs',
              desc: 'Automated token schema validation and visual regression testing in continuous CI/CD pipelines across all engineering releases.',
            },
          ].map(({ stat, label, desc }) => (
            <div key={stat} style={{ flex: 1, borderTop: `1px solid ${c.borderDark}`, paddingTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 64, fontWeight: 700, color: c.accent, letterSpacing: '-1.28px', whiteSpace: 'nowrap', lineHeight: 'normal' }}>{stat}</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: c.primary }}>{label}</span>
              <span style={{ fontSize: 14, fontWeight: 400, color: c.secondary, lineHeight: 1.5 }}>{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEXT PROJECT TEASER ─────────────────────────────────── */}
      <section style={{ padding: '110px 64px', display: 'flex', flexDirection: 'column', gap: 24, overflow: 'hidden' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: c.muted, letterSpacing: '0.26px', textTransform: 'uppercase' }}>
          (Next Project Design Spec)
        </span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h2 style={{ fontSize: 96, fontWeight: 700, color: c.primary, letterSpacing: '-2.88px', lineHeight: 1, margin: 0, whiteSpace: 'nowrap' }}>
              AI for Smarter School Decisions
            </h2>
            <p style={{ fontSize: 32, fontWeight: 400, color: c.secondary, margin: 0 }}>
              An AI-powered tool helping families navigate complex school data.
            </p>
          </div>
          <button
            onClick={() => navigate('/work/ai-school-decisions')}
            style={{
              width: 72, height: 72, borderRadius: 36, flexShrink: 0,
              backgroundColor: c.accent,
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24, color: '#ffffff',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            aria-label="View next project"
          >
            →
          </button>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${c.border}`, paddingTop: 80, paddingBottom: 44, paddingLeft: 64, paddingRight: 64, display: 'flex', flexDirection: 'column', gap: 48 }}>
        <h2 style={{ fontSize: 60, fontWeight: 600, color: c.primary, letterSpacing: '-0.6px', lineHeight: 1.18, margin: 0 }}>
          Let's build the next intelligent system together.
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 22, fontWeight: 500, color: c.primary }}>pritish@example.com</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['LinkedIn', 'GitHub', 'Figma Community'].map(link => (
              <span key={link} style={{ fontSize: 15, fontWeight: 500, color: c.muted }}>{link}</span>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 400, color: c.muted }}>© 2026 Pritish Sai. Constructed with strict tokens.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: c.accent }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: c.accent }}>Available for Q3 Projects</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HandsAICaseStudyPage;
