import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

const PROJECTS = {
  3: {
    eyebrow:    'Case Study — Enterprise Operations',
    date:       'Platform Launched 2021',
    title:      "Simplifying Verizon's Engineering Operations",
    subtitle:   "Redesigned project management workflows to empower Verizon's engineering and network teams to manage 500+ concurrent initiatives from inception to delivery without losing cross-team visibility.",
    meta: [
      { label: 'ROLE',     value: 'UX Designer' },
      { label: 'TIMELINE', value: '8 Months · 2021' },
      { label: 'TEAM',     value: '2 Designers · 12 Engineers' },
      { label: 'PLATFORM', value: 'Internal Web App · Enterprise' },
    ],
    overviewH2:    'Unifying 500+ concurrent engineering projects across 12 regional divisions.',
    overviewBody:  "Verizon's engineering and network teams managed hundreds of concurrent infrastructure projects across 12 regional divisions — each tracked in separate spreadsheets and regional reporting tools. With no unified status layer, missed dependencies and delayed escalations were costing the business 40% of project managers' weekly time on status-gathering alone. I led end-to-end design of a unified project operations platform — from field research through a shipped internal tool used by 200+ project managers.",
    metrics: [
      { stat: '−40%', label: 'Status Reporting Overhead', desc: 'Automated cross-team rollups eliminated manual weekly status decks' },
      { stat: '+60%', label: 'On-Time Delivery Rate',     desc: 'Dependency visibility surfaced blockers before they caused cascading delays' },
    ],
    challengeIntro: "Project managers across Verizon's 12 divisions were responsible for complex interdependent infrastructure programs with no shared visibility layer — resulting in cascading delays and invisible dependencies that only surfaced at the point of impact.",
    challenges: [
      { num: '01', title: 'Fragmented Project Visibility',     desc: 'Each regional division tracked engineering milestones in separate spreadsheets and tools — there was no cross-team status view, making portfolio-level decisions impossible without time-consuming manual aggregation.' },
      { num: '02', title: 'Manual Status Reporting Cycles',    desc: "Project managers spent 40% of their workweek compiling, formatting, and distributing status reports — time entirely displaced from actual project delivery and risk management." },
      { num: '03', title: 'Invisible Cross-Team Dependencies', desc: "Dependencies between engineering workstreams weren't tracked in any shared system — blockers only surfaced when deadlines slipped, with no upstream warning to allow proactive mitigation." },
    ],
    principlesLabel: '(03) Design Principles',
    principlesH2:    'Foundational operations platform values.',
    principles: [
      { num: '01 / Shared Visibility',       title: 'Unified Project Board',       desc: 'A single real-time portfolio view aggregates all regional workstreams — giving portfolio directors cross-division clarity without requiring individual team status check-ins.' },
      { num: '02 / Automated Intelligence',  title: 'Status Automation Engine',    desc: 'Automated rollup logic converts individual task completions into portfolio-level health scores — eliminating manual report compilation from project managers\' workflows.' },
      { num: '03 / Dependency Mapping',      title: 'Visual Dependency Graph',     desc: 'An interactive dependency visualization surfaces upstream blockers before they propagate — enabling project managers to escalate proactively rather than reactively.' },
    ],
    archLabel: '(04) Platform Architecture',
    archH2:    'Structured operations schema from task to portfolio.',
    archLeft: [
      { tier: 'LAYER 01', title: 'Task & Milestone Tracking',  desc: 'Granular task management with milestone dependencies, owner assignments, and deadline tracking across all engineering workstreams and regional divisions.' },
      { tier: 'LAYER 02', title: 'Cross-Team Status Rollups',  desc: 'Automated aggregation of task completions into project health scores — updated in real-time without manual data entry or weekly status cycles.' },
    ],
    archRight: [
      { tier: 'LAYER 03', title: 'Portfolio Risk Surfacing',   desc: 'Proactive risk flagging based on dependency chains and milestone slippage — surfaced to portfolio directors before downstream project impact.' },
      { tier: 'LAYER 04', title: 'Executive Reporting Layer',  desc: 'Auto-generated executive briefings pulling from live project data — replacing weekly manual status decks with real-time portfolio dashboards.' },
    ],
    showcaseLabel: '(05) Research & Discovery',
    showcaseH2:    'Three weeks embedded with project managers across four divisions.',
    showcase: [
      { label: 'Field Research',    title: 'Workflow Observation Sessions',    tag: '25+ PM Interviews',              desc: 'Shadowed project managers across four regional divisions during weekly status cycles — mapping the exact time drain from manual aggregation to report distribution.' },
      { label: 'Process Mapping',   title: 'End-to-End Status Flow Mapping',  tag: 'Cross-Division Journey Maps',    desc: 'Mapped the complete status reporting workflow from task entry to executive distribution — identifying 12 manual handoff points that the new platform eliminated.' },
      { label: 'Prototype Testing', title: 'Iterative Board Testing',          tag: '3 Rounds of Usability Testing', desc: 'Tested three prototypes with active project managers against live project data — iterating the portfolio view until cross-team dependency visibility was instinctive.' },
      { label: 'Adoption Strategy', title: 'Phased Rollout Design',            tag: '200+ PMs Adopted in 90 Days',   desc: 'Designed a phased onboarding strategy with migration templates and training docs — achieving full adoption across 200+ project managers within 90 days of launch.' },
    ],
    processLabel: '(06) Execution Timeline',
    processH2:    'How we built the platform.',
    steps: [
      { num: '01', title: 'Discovery & Stakeholder Alignment',  desc: 'Embedded with Verizon engineering operations teams across four regional divisions — conducting contextual inquiry sessions and workflow observation with 25+ project managers.' },
      { num: '02', title: 'Information Architecture',           desc: 'Designed the unified project hierarchy, health score model, and dependency visualization framework — validated against the mental models surfaced in field research.' },
      { num: '03', title: 'Prototype & Iterative Testing',      desc: 'Built three prototype rounds tested with active project managers against live anonymized project data — iterating until cross-team dependency awareness was instinctive.' },
      { num: '04', title: 'Design System & Component Library',  desc: "Delivered an enterprise-grade component library aligned to Verizon's internal design standards — providing the engineering team with production-ready patterns for all dashboard surfaces." },
      { num: '05', title: 'Phased Deployment & Adoption',       desc: 'Managed a 90-day phased rollout across 12 regional divisions with migration templates and training documentation — achieving full adoption by 200+ project managers within the first quarter.' },
    ],
    metricsLabel: '(07) Empirical Metrics',
    metricsH2:    'Direct, measurable operations impact.',
    stats: [
      { stat: '−40%', label: 'Status Reporting Overhead',    desc: 'Eliminated manual weekly status decks through automated cross-team rollup intelligence built into the platform.' },
      { stat: '+60%', label: 'On-Time Delivery Rate',         desc: 'Dependency visibility surfaced blockers 2–3 weeks earlier, enabling proactive mitigation before cascade impact.' },
      { stat: '500+', label: 'Projects Unified in One View',  desc: 'All active engineering workstreams across 12 regional divisions visible in a single real-time portfolio.' },
    ],
    nextTitle:    'Structuring Network Data for Clarity',
    nextSubtitle: "Reengineering Verizon's diagnostic interface for network operations teams.",
    nextPath:     '/project/4',
  },

  4: {
    eyebrow:    'Case Study — Enterprise Monitoring',
    date:       'Platform Launched 2021',
    title:      'Structuring Network Data for Greater Clarity',
    subtitle:   "Reengineered Verizon's diagnostic interface by flattening overloaded network hierarchies into a modular, intelligence-layered monitoring experience that halved mean time to resolve.",
    meta: [
      { label: 'ROLE',     value: 'UX Designer' },
      { label: 'TIMELINE', value: '6 Months · 2021' },
      { label: 'TEAM',     value: '2 Designers · 8 Engineers' },
      { label: 'PLATFORM', value: 'Internal Web App · Network Ops' },
    ],
    overviewH2:    'Flattening 10,000+ network nodes into a diagnostic interface that surfaces signal over noise.',
    overviewBody:  "Verizon's network operations teams monitored over 10,000 active nodes across a diagnostic interface that had grown into an overloaded hierarchy — burying critical alerts in noise and forcing operators to navigate five levels deep to identify a root cause. I led end-to-end design of a modular monitoring dashboard that restructured the information hierarchy, introduced smart alert filtering, and reduced mean time to resolve by 55%.",
    metrics: [
      { stat: '−55%', label: 'Mean Time to Resolve',  desc: 'Root causes identified in under 3 minutes vs. the previous 7-minute average across P1 incidents' },
      { stat: '+70%', label: 'Signal Clarity Score',  desc: 'Noise-to-signal ratio reduced through smart alert severity filtering and correlated event aggregation' },
    ],
    challengeIntro: "Network operations engineers were responsible for 10,000+ nodes across a diagnostic interface that surfaced everything at equal visual weight — making genuine alerts invisible in the noise and forcing engineers to build personal workarounds to do their jobs.",
    challenges: [
      { num: '01', title: 'Information Overload',             desc: 'The existing interface displayed 10,000+ node statuses at identical visual weight — critical P1 alerts were indistinguishable from routine informational events, requiring exhaustive manual scanning to identify genuine issues.' },
      { num: '02', title: 'Slow Root Cause Identification',   desc: 'Navigating from a surface-level alert to the root cause required five levels of hierarchy drilling — averaging 7 minutes per incident at a time when network uptime was measured in fractions of a percent.' },
      { num: '03', title: 'Static, Non-Contextual Views',     desc: 'The dashboard displayed uniform data regardless of operator role or incident context — a field technician and an executive saw identical dense tables with no role-adaptive intelligence.' },
    ],
    principlesLabel: '(03) Design Principles',
    principlesH2:    'Foundational monitoring platform values.',
    principles: [
      { num: '01 / Signal Over Noise',  title: 'Severity-Weighted Filtering',   desc: 'Alert severity is visually encoded at every level — P1 incidents surface immediately, informational events are collapsed by default, and custom filter profiles persist across sessions.' },
      { num: '02 / Minimal Drill Depth', title: 'Flat Navigation Architecture',  desc: 'Restructured the five-level hierarchy into a two-level contextual model — root cause access in under two clicks from any alert state, regardless of network topology complexity.' },
      { num: '03 / Role-Adaptive Views', title: 'Context-Aware Interface',       desc: 'Interface adapts to operator role and current incident context — a field technician sees node-level detail, an operations director sees regional health aggregates.' },
    ],
    archLabel: '(04) Platform Architecture',
    archH2:    'Modular monitoring schema from node to network.',
    archLeft: [
      { tier: 'LAYER 01', title: 'Node Status Intelligence',  desc: 'Real-time node health monitoring with P0–P3 severity classification, automated correlation, and parent-child relationship mapping across 10,000+ network entities.' },
      { tier: 'LAYER 02', title: 'Smart Alert Aggregation',   desc: 'Noise-reduction engine that collapses correlated alerts into parent incidents — surfacing the root event rather than cascading downstream symptoms to the operator.' },
    ],
    archRight: [
      { tier: 'LAYER 03', title: 'Contextual Drill-Down',      desc: 'Two-click root cause navigation from any alert state — with contextual metadata panels surfacing topology relationships, recent changes, and historical incident patterns.' },
      { tier: 'LAYER 04', title: 'Role-Adaptive Dashboard',    desc: 'Operator profile-driven view configuration — field technicians, NOC engineers, and operations directors each receive a role-optimized dashboard preset without manual configuration.' },
    ],
    showcaseLabel: '(05) Research & Discovery',
    showcaseH2:    'Embedded in the network operations center for two weeks.',
    showcase: [
      { label: 'Field Research',    title: 'NOC Observation Sessions',         tag: '20+ Engineer Interviews',       desc: 'Observed network operations engineers during active P1 incidents — mapping the exact decision flow from alert notification to root cause identification in real conditions.' },
      { label: 'Alert Taxonomy',    title: 'Severity Classification Workshop', tag: 'Cross-Team Signal Mapping',     desc: 'Facilitated workshops with NOC engineers and network architects to define a universal alert severity taxonomy — the foundation of the noise-reduction filtering model.' },
      { label: 'Prototype Testing', title: 'Incident Response Simulation',     tag: '3 Rounds with Live Data',       desc: 'Tested three dashboard iterations against live anonymized incident data — measuring time-to-root-cause against the 7-minute baseline to validate each design decision.' },
      { label: 'Component Library', title: 'Monitoring UI Design System',      tag: 'Adopted by Network Ops Team',   desc: 'Delivered a monitoring-specific React component library with severity-encoded visual patterns — adopted as the standard for all Verizon network operations tooling.' },
    ],
    processLabel: '(06) Execution Timeline',
    processH2:    'How we rebuilt the monitoring interface.',
    steps: [
      { num: '01', title: 'NOC Embedded Discovery',              desc: "Spent two weeks embedded in Verizon's primary network operations center — observing P1 incident response in real time and conducting contextual inquiry with 20+ NOC engineers." },
      { num: '02', title: 'Alert Taxonomy & Hierarchy Design',   desc: 'Facilitated cross-functional workshops to define a universal severity taxonomy and restructure the five-level alert hierarchy into a flat two-level contextual model.' },
      { num: '03', title: 'Modular Dashboard Architecture',      desc: 'Designed the severity-filtered dashboard, smart alert aggregation engine, and role-adaptive preset system — prototyped against live anonymized incident data.' },
      { num: '04', title: 'Incident Response Prototype Testing', desc: 'Ran three rounds of incident simulation testing with NOC engineers — measuring time-to-root-cause at each iteration against the 7-minute baseline.' },
      { num: '05', title: 'Phased Deployment & Training',        desc: 'Managed staged rollout across 8 regional NOC facilities with role-specific training materials — achieving full adoption and a 55% MTTR reduction within 60 days of launch.' },
    ],
    metricsLabel: '(07) Empirical Metrics',
    metricsH2:    'Direct, measurable network operations impact.',
    stats: [
      { stat: '−55%',  label: 'Mean Time to Resolve',    desc: 'Root cause identification reduced from 7 minutes to under 3 — across all P1 and P2 incident types in production.' },
      { stat: '+70%',  label: 'Signal Clarity Score',    desc: 'Noise-to-signal ratio reduced by 70% through smart severity-weighted alert aggregation and event correlation.' },
      { stat: '10K+',  label: 'Network Nodes Monitored', desc: 'All active Verizon network entities visible in a single, intelligently filtered and role-adaptive monitoring surface.' },
    ],
    nextTitle:    'Reimagining Network Search',
    nextSubtitle: "Redesigning Verizon's internal search for field operations precision.",
    nextPath:     '/project/5',
  },

  5: {
    eyebrow:    'Case Study — Enterprise Search UX',
    date:       'Platform Launched 2021',
    title:      'Reimagining Network Search for Field Operations',
    subtitle:   "Redesigned Verizon's internal search function into an intuitive interface that enhanced metadata transparency, reorganized search logic, and cut field operator search time by 45%.",
    meta: [
      { label: 'ROLE',     value: 'UX Designer' },
      { label: 'TIMELINE', value: '5 Months · 2021' },
      { label: 'TEAM',     value: '2 Designers · 6 Engineers' },
      { label: 'PLATFORM', value: 'Internal Web App · Field Ops' },
    ],
    overviewH2:    'Turning a broken search experience into a precision field operations tool.',
    overviewBody:  "Verizon's field operations teams relied on an internal search tool to locate network assets, service tickets, and customer records — but inconsistent metadata, opaque ranking logic, and no contextual filtering meant finding the right result required multiple failed queries and manual browsing. I led end-to-end redesign introducing faceted filtering, metadata intelligence panels, and a field-first UX that reduced average search time by 45% and tripled result precision.",
    metrics: [
      { stat: '−45%', label: 'Average Search Time',  desc: 'Field operators locate target assets in under 90 seconds vs. the previous 2.7-minute average' },
      { stat: '3×',   label: 'Result Precision',     desc: 'First-result relevance tripled through contextual ranking and metadata enrichment across all asset types' },
    ],
    challengeIntro: "Field operations teams conducting live service calls and network inspections relied on the internal search tool to locate assets in real time — but opaque ranking, inconsistent metadata, and no contextual filtering turned every lookup into a multi-query guessing game.",
    challenges: [
      { num: '01', title: 'Poor Metadata Visibility',      desc: "Search results displayed minimal metadata — operators couldn't distinguish between similar assets without clicking into each result individually, multiplying lookup time for every field visit." },
      { num: '02', title: 'Inconsistent Result Ranking',   desc: 'The ranking algorithm prioritized recency over relevance — returning recently modified but unrelated records above the target asset, requiring operators to scan multiple result pages per query.' },
      { num: '03', title: 'No Contextual Filtering',       desc: 'Without faceted filters for asset type, region, status, or service tier, every search returned undifferentiated result sets — operators built manual workarounds using concatenated query strings to approximate filtering.' },
    ],
    principlesLabel: '(03) Design Principles',
    principlesH2:    'Foundational search UX values.',
    principles: [
      { num: '01 / Contextual Precision',   title: 'Faceted Filtering System',    desc: 'Asset type, region, service tier, and status filters as first-class interface elements — enabling operators to narrow any query to a precise result set in a single search cycle.' },
      { num: '02 / Metadata Transparency',  title: 'Inline Result Intelligence',  desc: 'Results display contextual metadata inline — asset ID, region, last service date, and current status visible without clicking, reducing per-result evaluation time to under 3 seconds.' },
      { num: '03 / Field-First UX',         title: 'Mobile-Optimized Interface',  desc: 'Redesigned for primary use on mobile devices in field conditions — larger touch targets, thumb-zone filter placement, and offline-resilient result caching for poor-connectivity areas.' },
    ],
    archLabel: '(04) Platform Architecture',
    archH2:    'Structured search schema from query to result.',
    archLeft: [
      { tier: 'LAYER 01', title: 'Query Intelligence Engine',   desc: 'Context-aware query parsing that identifies asset types, region codes, and service identifiers in natural language input — routing each query to the appropriate indexed data source.' },
      { tier: 'LAYER 02', title: 'Metadata Enrichment Layer',   desc: 'Inline metadata augmentation appending asset status, region, and service tier to every result — sourced from live operational databases without additional lookup requests.' },
    ],
    archRight: [
      { tier: 'LAYER 03', title: 'Faceted Filter Architecture',  desc: 'Multi-dimensional filter system built on Elasticsearch facets — supporting compound filter combinations without performance degradation across 15K+ daily search volume.' },
      { tier: 'LAYER 04', title: 'Mobile-First Result Rendering', desc: 'Progressive result rendering optimized for field device performance — prioritizing above-fold result visibility, touch-optimized targets, and offline caching for low-connectivity zones.' },
    ],
    showcaseLabel: '(05) Research & Discovery',
    showcaseH2:    'Accompanied field operators on live service calls.',
    showcase: [
      { label: 'Field Research',    title: 'Live Service Call Shadowing',       tag: '15+ Field Operator Sessions',    desc: 'Accompanied field operators during active network service calls — observing real-time search behavior and documenting every failed query and workaround pattern in field conditions.' },
      { label: 'Query Analysis',    title: 'Search Log Pattern Analysis',       tag: '90-Day Query Log Review',         desc: 'Analyzed 90 days of search logs — identifying the top 50 query patterns, failure rates by asset type, and the manual workaround strings operators used to approximate filtering.' },
      { label: 'Prototype Testing', title: 'Field Condition Usability Tests',   tag: '3 Rounds of Mobile Testing',     desc: 'Tested three prototypes with field operators under simulated field conditions — measuring time-to-target-result at each iteration against the 2.7-minute baseline.' },
      { label: 'Adoption Results',  title: 'Zero-Training Adoption',            tag: '15K+ Daily Searches at Launch',  desc: 'Launched without a training program — adopted at full usage volume within 2 weeks, with zero support tickets filed in the first 30 days.' },
    ],
    processLabel: '(06) Execution Timeline',
    processH2:    'How we rebuilt the search experience.',
    steps: [
      { num: '01', title: 'Field Operator Discovery',            desc: 'Accompanied field operators on 15+ live service calls across two regions — documenting real-time search behavior, failed query patterns, and the manual workarounds built to compensate for the existing interface.' },
      { num: '02', title: 'Query Log Analysis & Taxonomy',       desc: 'Analyzed 90 days of search logs — mapping query failure rates by asset type, identifying the top 50 search patterns, and defining the facet taxonomy from real operator behavior data.' },
      { num: '03', title: 'Faceted Filter Architecture Design',  desc: 'Designed the multi-dimensional filter system, metadata intelligence panels, and context-aware query parsing model — validated against the operator query taxonomy before engineering handoff.' },
      { num: '04', title: 'Field Condition Prototype Testing',   desc: 'Ran three rounds of usability testing with field operators under simulated field conditions — measuring time-to-target against the 2.7-minute baseline at each prototype iteration.' },
      { num: '05', title: 'Zero-Training Launch & Adoption',     desc: 'Launched without a training program — relying on interface clarity to drive adoption. Reached 15,000+ daily searches within two weeks with no support tickets filed in the first 30 days.' },
    ],
    metricsLabel: '(07) Empirical Metrics',
    metricsH2:    'Direct, measurable field operations impact.',
    stats: [
      { stat: '−45%',  label: 'Average Search Time',     desc: 'Field operators locate target assets in under 90 seconds vs. the previous 2.7-minute average across all asset types.' },
      { stat: '3×',    label: 'First-Result Precision',  desc: 'Contextual ranking and metadata enrichment tripled first-result relevance across all network asset search categories.' },
      { stat: '15K+',  label: 'Daily Searches',          desc: 'Full usage adoption achieved within two weeks of launch — with zero training program or support tickets in 30 days.' },
    ],
    nextTitle:    'AI for Smarter School Decisions',
    nextSubtitle: 'Distilling student data into clear, actionable insights for NYC educators.',
    nextPath:     '/work/ai-school-decisions',
  },
};

const ProjectDetailPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { isDark } = useTheme();
  const c = isDark ? cDark : cLight;
  const p = PROJECTS[Number(projectId)] || PROJECTS[3];

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
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.39px', textTransform: 'uppercase' }}>{p.eyebrow}</span>
          <span style={{ fontSize: 13, fontWeight: 500, color: c.muted, textTransform: 'uppercase' }}>{p.date}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h1 style={{ fontSize: 96, fontWeight: 700, color: c.primary, lineHeight: 1.02, letterSpacing: '-3.84px', margin: 0 }}>{p.title}</h1>
          <p style={{ fontSize: 32, fontWeight: 400, color: c.secondary, lineHeight: 1.4, margin: 0 }}>{p.subtitle}</p>
        </div>
        <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: 40, display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {p.meta.map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: c.muted, letterSpacing: '0.24px', textTransform: 'uppercase' }}>{label}</span>
              <span style={{ fontSize: 15, fontWeight: 500, color: c.primary }}>{value}</span>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: c.bgSubtle, border: `1px solid ${c.border}`, borderRadius: 24, height: 580, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: c.muted }}>{p.title} — Platform Interface</span>
        </div>
      </section>

      {/* ── OVERVIEW ────────────────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: '80px 64px', display: 'flex', gap: 64, alignItems: 'flex-start' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: c.accent, letterSpacing: '0.32px', textTransform: 'uppercase' }}>(01) Overview</span>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: c.primary, lineHeight: 1.34, margin: 0 }}>{p.overviewH2}</h2>
          <p style={{ fontSize: 18, fontWeight: 400, color: c.secondary, lineHeight: 1.6, margin: 0 }}>{p.overviewBody}</p>
        </div>
        <div style={{ width: 480, flexShrink: 0, display: 'flex', gap: 40 }}>
          {p.metrics.map(({ stat, label, desc }) => (
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
          <h2 style={{ fontSize: 32, fontWeight: 700, color: c.primary, lineHeight: 1.2, margin: 0 }}>The friction points that slowed us down.</h2>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <p style={{ fontSize: 22, fontWeight: 400, color: c.secondary, lineHeight: 1.5, margin: 0 }}>{p.challengeIntro}</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {p.challenges.map(({ num, title, desc }, i, arr) => (
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
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>{p.principlesLabel}</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>{p.principlesH2}</h2>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {p.principles.map(({ num, title, desc }) => (
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
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>{p.archLabel}</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>{p.archH2}</h2>
        </div>
        <div style={{ backgroundColor: c.bgSubtle, border: `1px solid ${c.border}`, borderRadius: 20, padding: 40, display: 'flex', gap: 40, alignItems: 'stretch' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {p.archLeft.map(({ tier, title, desc }) => (
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
            {p.archRight.map(({ tier, title, desc }) => (
              <div key={tier} style={{ backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: c.accent }}>{tier}</span>
                <span style={{ fontSize: 16, fontWeight: 600, color: c.primary }}>{title}</span>
                <span style={{ fontSize: 14, fontWeight: 400, color: c.muted, lineHeight: 1.5 }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH & DISCOVERY ────────────────────────────────── */}
      <section style={{ backgroundColor: c.bgSubtle, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, padding: '96px 64px', display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>{p.showcaseLabel}</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>{p.showcaseH2}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {p.showcase.map(({ label, title, tag, desc }) => (
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
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>{p.processLabel}</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>{p.processH2}</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {p.steps.map(({ num, title, desc }, i, arr) => (
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
          <span style={{ fontSize: 13, fontWeight: 600, color: c.accent, letterSpacing: '0.26px', textTransform: 'uppercase' }}>{p.metricsLabel}</span>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: c.primary, margin: 0 }}>{p.metricsH2}</h2>
        </div>
        <div style={{ display: 'flex', gap: 32 }}>
          {p.stats.map(({ stat, label, desc }) => (
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
            <h2 style={{ fontSize: 96, fontWeight: 700, color: c.primary, letterSpacing: '-2.88px', lineHeight: 1, margin: 0, whiteSpace: 'nowrap' }}>{p.nextTitle}</h2>
            <p style={{ fontSize: 32, fontWeight: 400, color: c.secondary, margin: 0 }}>{p.nextSubtitle}</p>
          </div>
          <button
            onClick={() => navigate(p.nextPath)}
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

export default ProjectDetailPage;
