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

const CaseStudyPage = () => {
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
            Case Study — Data & AI Products
          </span>
          <span style={{ fontSize: 13, fontWeight: 500, color: c.muted, textTransform: 'uppercase' }}>
            Platform Launched 2023
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h1 style={{ fontSize: 96, fontWeight: 700, color: c.primary, lineHeight: 1.02, letterSpacing: '-3.84px', margin: 0 }}>
            AI for Smarter School Decisions
          </h1>
          <p style={{ fontSize: 32, fontWeight: 400, color: c.secondary, lineHeight: 1.4, margin: 0 }}>
            Distilling complex student performance and operational data into clear, actionable insights — empowering 1,800 NYC school administrators with real-time clarity and turning data complexity into strategic action.
          </p>
        </div>
        <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: 40, display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {[
            { label: 'ROLE',     value: 'Lead Product Designer' },
            { label: 'TIMELINE', value: '6 Months · 2023' },
            { label: 'TEAM',     value: '3 Designers · 8 Engineers · 2 Data Scientists' },
            { label: 'PLATFORM', value: 'Web App · Internal Dashboard' },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: c.muted, letterSpacing: '0.24px', textTransform: 'uppercase' }}>{label}</span>
              <span style={{ fontSize: 15, fontWeight: 500, color: c.primary }}>{value}</span>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: c.bgSubtle, border: `1px solid ${c.border}`, borderRadius: 24, height: 580, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: c.muted }}>AI School Decisions — Platform Interface</span>
        </div>
      </section>

      {/* ── OVERVIEW ────────────────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: '80px 64px', display: 'flex', gap: 64, alignItems: 'flex-start' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: c.accent, letterSpacing: '0.32px', textTransform: 'uppercase' }}>(01) Overview</span>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: c.primary, lineHeight: 1.34, margin: 0 }}>
            Scaling data clarity for 1.1 million students across 1,800 NYC schools.
          </h2>
          <p style={{ fontSize: 18, fontWeight: 400, color: c.secondary, lineHeight: 1.6, margin: 0 }}>
            NYC's school system generates an overwhelming volume of operational and academic data across fragmented platforms. Principals and administrators were drowning in disconnected spreadsheets and delayed data cycles that made proactive decision-making nearly impossible. I led design end-to-end — from stakeholder research and journey mapping through a shipped web platform, alongside a design system the district's product team builds on today.
          </p>
        </div>
        <div style={{ width: 480, flexShrink: 0, display: 'flex', gap: 40 }}>
          {[
            { stat: '+47%', label: 'Decision Velocity',    desc: 'Administrators act on insights surfaced the same day they occur' },
            { stat: '−58%', label: 'Time Searching Data',  desc: 'Replaced six-step cross-platform lookups with a single unified view' },
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
            School administrators told us the same story in every interview: they spent more time hunting for data than acting on it. Three separate platforms had no shared language — a principal needed six steps and two logins to answer a question raised in a staff meeting.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { num: '01', title: 'Fragmented Data Ecosystem',  desc: 'Student information, budget tools, and compliance portals were siloed across three platforms with no unified view — requiring multiple logins and manual data reconciliation every single day.' },
              { num: '02', title: 'Reactive Decision-Making',    desc: 'No proactive early warning signals meant administrators only identified problems after they escalated — attendance drops, budget overruns, and compliance gaps caught too late to course-correct.' },
              { num: '03', title: 'Excessive Manual Reporting',  desc: 'Generating a single leadership briefing required exporting from five sources, formatting in spreadsheets, and distributing manually — consuming hours of administrative time per week.' },
            ].map(({ num, title, desc }, i, arr) => (
              <div
                key={num}
                style={{
                  borderTop: `1px solid ${c.border}`,
                  ...(i === arr.length - 1 ? { borderBottom: `1px solid ${c.border}` } : {}),
                  padding: '24px 0', display: 'flex', gap: 24, alignItems: 'flex-start',
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

      {/* ── DESIGN PRINCIPLES ───────────────────────────────────── */}
      <section style={{ backgroundColor: c.bgSubtle, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: '96px 64px', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>(03) Design Principles</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>Foundational platform values.</h2>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {[
            { num: '01 / Anticipatory Intelligence', title: 'Data Follows the Question',  desc: 'The system anticipates what an administrator will ask next and surfaces it before they search — inverting the traditional hunt-then-act model into a surface-then-act experience.' },
            { num: '02 / Unified Data View',          title: 'Single Source of Truth',    desc: 'Attendance, budget, and compliance data roll up into a unified school health score accessible in one dashboard — eliminating multi-platform login chains and manual reconciliation.' },
            { num: '03 / Scoped Personalization',     title: 'Role-Adaptive Briefings',   desc: 'The platform adapts its briefing view to each administrator\'s scope — a principal sees building-level data, a district director sees portfolio patterns across all schools.' },
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

      {/* ── PLATFORM ARCHITECTURE ───────────────────────────────── */}
      <section style={{ padding: '96px 64px', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>(04) Platform Architecture</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>Structured data schema from source to dashboard.</h2>
        </div>
        <div style={{ backgroundColor: c.bgSubtle, border: `1px solid ${c.border}`, borderRadius: 20, padding: 40, display: 'flex', gap: 40, alignItems: 'stretch' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { tier: 'MODULE 01', title: 'Attendance Intelligence',   desc: 'Real-time absence pattern detection with automated early-warning flags for chronic absenteeism risk at individual student and cohort levels.' },
              { tier: 'MODULE 02', title: 'Budget Tracking & Alerts',  desc: 'Predictive spend-rate monitoring with variance alerts against quarterly targets — surfacing over/underspend before it impacts program delivery.' },
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
              { tier: 'MODULE 03', title: 'Compliance Monitoring',     desc: 'Automated compliance scorecards across federal and state program requirements — with drill-down audit trails and certification deadline tracking.' },
              { tier: 'MODULE 04', title: 'AI Recommendation Engine',  desc: 'Contextual next-best-action suggestions powered by pattern analysis across schools — surfacing proven interventions from high-performing peer institutions.' },
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

      {/* ── RESEARCH METHODOLOGY ────────────────────────────────── */}
      <section style={{ backgroundColor: c.bgSubtle, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: '96px 64px', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>(05) Research Methodology</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>Embedded with administrators for three weeks.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            { label: 'Field Research',    title: 'Ethnographic Observation',     tag: '30+ Administrator Interviews',     desc: 'Shadowed morning data reviews and attended board meetings across five NYC schools — understanding the lived experience of data-driven decision moments in real administrative contexts.' },
            { label: 'Journey Mapping',   title: 'Problem Framing Session',      tag: 'Journey Maps & HMW Frameworks',    desc: 'Mapped administrator workflows from data question to action — uncovering that every pain point traced back to one failure: the data never followed the question.' },
            { label: 'Prototype Testing', title: 'Iterative Usability Cycles',   tag: '4 Rounds of Testing',              desc: 'Ran four iterative prototype rounds with principals and district directors, refining the briefing model until the cognitive load of the weekly data review was eliminated.' },
            { label: 'Design System',     title: 'Component Library & Tokens',   tag: 'Adopted by District Product Team', desc: 'Delivered a token-bound React component library and design system that the NYC DOE product team adopted as the standard for all internal dashboard development.' },
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
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>How we built the platform.</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { num: '01', title: 'Stakeholder & Field Research',           desc: 'Embedded with principals and district directors across five NYC schools for three weeks — shadowing daily data reviews, attending board sessions, and conducting 30+ contextual inquiry interviews.' },
            { num: '02', title: 'Journey Mapping & Problem Framing',      desc: 'Synthesized field findings into a cross-platform journey map surfacing the core failure: data never followed the question. Formulated the design thesis: anticipatory data intelligence.' },
            { num: '03', title: 'Information Architecture & Prototyping', desc: 'Designed the unified briefing model, school health score, and early warning system — iterating across four prototype rounds with real administrator cohorts using live anonymized data.' },
            { num: '04', title: 'Usability Testing & Design System',      desc: 'Validated through 40+ usability sessions. Shipped a token-bound React component library adopted by the NYC DOE product team as the standard for all internal dashboard tooling.' },
            { num: '05', title: 'Pilot Rollout & Full Deployment',        desc: 'Three-month pilot across six schools, measured against pre-baseline data workflows. Full district rollout to 1,800 schools — adopted as the primary analytics interface for all NYC administrators.' },
          ].map(({ num, title, desc }, i, arr) => (
            <div
              key={num}
              style={{
                borderTop: `1px solid ${c.border}`,
                ...(i === arr.length - 1 ? { borderBottom: `1px solid ${c.border}` } : {}),
                padding: '28px 0', display: 'flex', gap: 40, alignItems: 'flex-start',
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
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>Direct, measurable district impact.</h2>
        </div>
        <div style={{ display: 'flex', gap: 32 }}>
          {[
            { stat: '+47%', label: 'Decision Velocity',    desc: 'Administrators act on insights the same day they occur — up from a 3-day average lag between data availability and leadership action.' },
            { stat: '4.6★', label: 'Average User Rating',  desc: 'Rated by 250+ administrators across the pilot cohort on ease of use and insight value after four weeks of usage.' },
            { stat: '−58%', label: 'Time Searching Data',  desc: 'Replaced six-step cross-platform lookups with a single unified briefing view — eliminating the daily manual data-gathering cycle entirely.' },
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
              CMA Global — Healthcare AI
            </h2>
            <p style={{ fontSize: 32, fontWeight: 400, color: c.secondary, margin: 0 }}>
              AI-powered design system infrastructure for federal healthcare programs.
            </p>
          </div>
          <button
            onClick={() => navigate('/work/hands-ai')}
            style={{
              width: 72, height: 72, borderRadius: 36, flexShrink: 0,
              backgroundColor: c.accent, border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24, color: '#ffffff', transition: 'opacity 0.15s',
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

export default CaseStudyPage;
