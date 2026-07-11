import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactSection from './ContactSection';

const t = {
  textPrimary:   'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  textTertiary:  'var(--text-tertiary)',
  textInverse:   'var(--text-inverse)',
  bgPage:        'var(--bg-page)',
  bgSubtle:      'var(--bg-subtle)',
  borderSubtle:  'var(--border-subtle)',
};

const CaseStudyNav = ({ onBack }) => (
  <nav
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: t.bgPage,
      borderBottom: `1px solid ${t.borderSubtle}`,
    }}
  >
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 80px' }}
    >
      <button
        onClick={onBack}
        style={{
          fontSize: 19,
          fontWeight: 600,
          color: t.textPrimary,
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          lineHeight: 'normal',
        }}
      >
        Pritish Sai
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        {[
          { label: 'Work',    href: '/#section-3' },
          { label: 'About',   href: '/#section-1' },
          { label: 'Resume',  href: '/resume.pdf'  },
          { label: 'Contact', href: '/#section-4'  },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('/resume') ? '_blank' : undefined}
            rel={href.startsWith('/resume') ? 'noopener noreferrer' : undefined}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: t.textSecondary,
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = t.textPrimary)}
            onMouseLeave={e => (e.currentTarget.style.color = t.textSecondary)}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const Eyebrow = ({ children, style = {} }) => (
  <p
    style={{
      fontSize: 13,
      fontWeight: 500,
      color: t.textTertiary,
      letterSpacing: '1.04px',
      lineHeight: 1.2,
      textTransform: 'uppercase',
      margin: 0,
      ...style,
    }}
  >
    {children}
  </p>
);

const ImagePlaceholder = ({ label, height = 600, style = {} }) => (
  <div
    style={{
      backgroundColor: t.bgSubtle,
      borderRadius: 20,
      height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexShrink: 0,
      ...style,
    }}
  >
    <p style={{ fontSize: 13, color: t.textTertiary, margin: 0 }}>{label}</p>
  </div>
);

const SectionRow = ({ label, children }) => (
  <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', width: '100%' }}>
    <div style={{ width: 220, flexShrink: 0 }}>
      <Eyebrow>{label}</Eyebrow>
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
  </div>
);

const SectionHeading = ({ children }) => (
  <p
    style={{
      fontSize: 24,
      fontWeight: 500,
      color: t.textPrimary,
      lineHeight: 1.24,
      letterSpacing: '-0.12px',
      margin: '0 0 18px 0',
    }}
  >
    {children}
  </p>
);

const BodyLarge = ({ children, style = {} }) => (
  <p
    style={{
      fontSize: 20,
      fontWeight: 400,
      color: t.textSecondary,
      lineHeight: 1.5,
      margin: '0 0 18px 0',
      ...style,
    }}
  >
    {children}
  </p>
);

const BulletList = ({ items }) => (
  <ul style={{ margin: '0 0 18px 0', paddingLeft: 20 }}>
    {items.map((item, i) => (
      <li
        key={i}
        style={{
          fontSize: 20,
          fontWeight: 400,
          color: t.textSecondary,
          lineHeight: 1.5,
          marginBottom: 10,
        }}
      >
        {item}
      </li>
    ))}
  </ul>
);

const RiskTierRow = ({ tier, color, indicators, weight }) => (
  <div
    style={{
      display: 'flex',
      gap: 24,
      padding: '20px 0',
      borderBottom: `1px solid ${t.borderSubtle}`,
      alignItems: 'flex-start',
    }}
  >
    <div style={{ width: 160, flexShrink: 0 }}>
      <span
        style={{
          fontSize: 12,
          fontWeight: 600,
          color,
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
        }}
      >
        {tier}
      </span>
    </div>
    <div style={{ flex: 1 }}>
      {indicators.map((ind, i) => (
        <p key={i} style={{ fontSize: 16, color: t.textSecondary, margin: '0 0 6px 0', lineHeight: 1.5 }}>
          {ind}
        </p>
      ))}
    </div>
    <div style={{ width: 80, flexShrink: 0, textAlign: 'right' }}>
      <span style={{ fontSize: 13, color: t.textTertiary }}>{weight}</span>
    </div>
  </div>
);

const PrincipleCard = ({ number, title, description }) => (
  <div
    style={{
      padding: '32px',
      border: `1px solid ${t.borderSubtle}`,
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    }}
  >
    <span style={{ fontSize: 13, fontWeight: 600, color: t.textTertiary, letterSpacing: '0.8px' }}>
      {number.toString().padStart(2, '0')}
    </span>
    <p style={{ fontSize: 18, fontWeight: 600, color: t.textPrimary, margin: 0, lineHeight: 1.3 }}>{title}</p>
    <p style={{ fontSize: 16, color: t.textSecondary, margin: 0, lineHeight: 1.6 }}>{description}</p>
  </div>
);

const HandsAICaseStudyPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: t.bgPage, color: t.textPrimary }}>
      <CaseStudyNav onBack={() => navigate('/')} />

      <div style={{ paddingTop: 71 }}>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            padding: '64px 80px 56px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <button
            onClick={() => navigate('/')}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: t.textSecondary,
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              textAlign: 'left',
              lineHeight: 1.4,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = t.textPrimary)}
            onMouseLeave={e => (e.currentTarget.style.color = t.textSecondary)}
          >
            ←  Back to work
          </button>

          <Eyebrow>Product Design  ·  Healthcare AI</Eyebrow>

          <h1
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: t.textPrimary,
              lineHeight: 1.05,
              letterSpacing: '-1.28px',
              margin: 0,
            }}
          >
            'Emma', The AI Assistant<br />Redefining Case Management
          </h1>

          <p
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: t.textSecondary,
              lineHeight: 1.5,
              maxWidth: 820,
              margin: 0,
            }}
          >
            Designing an AI assistant that transforms how healthcare caseworkers manage
            complex caseloads — surfacing the families who need urgent help before
            they fall through the cracks.
          </p>

          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', paddingTop: 24 }}>
            {[
              { label: 'Role',     value: 'Lead Product Designer'                },
              { label: 'Domain',   value: 'Healthcare · Federal Programs'         },
              { label: 'Team',     value: 'Product, Data Science, Engineering'    },
              { label: 'Platform', value: 'Web App · Case Management System'      },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Eyebrow>{label}</Eyebrow>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: t.textPrimary,
                    lineHeight: 1.6,
                    margin: 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HERO VIDEO ───────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          <video
            src="/emma-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              borderRadius: 20,
              display: 'block',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* ── CONTENT SECTIONS ─────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            padding: '64px 80px 80px',
            display: 'flex',
            flexDirection: 'column',
            gap: 80,
          }}
        >

          {/* Overview */}
          <SectionRow label="Overview">
            <BodyLarge>
              WIC — the federal nutrition program serving 6.2 million mothers, infants, and children
              across America — assigns each caseworker a caseload of 200–300 active families.
              Every one of those families deserves timely support, but caseworkers had no systematic
              way to know which families needed them most urgently <em>today</em>.
            </BodyLarge>
            <BodyLarge>
              The data existed — appointment histories, benefit utilization, health screenings,
              communication logs — but nothing connected it into actionable intelligence. Caseworkers
              defaulted to helping whoever called, whoever showed up, or whoever's paperwork crossed
              their desk. Families in genuine crisis stayed invisible until it was too late.
            </BodyLarge>
            <BodyLarge style={{ marginBottom: 0 }}>
              I led the end-to-end design of Emma: defining the AI interaction model, designing
              the priority queue and risk visualization system, structuring the natural language
              search interface, and establishing design principles for human-AI collaboration.
              Emma shipped to six U.S. health departments serving hundreds of caseworkers.
            </BodyLarge>
          </SectionRow>

          {/* The Challenge */}
          <SectionRow label="The Challenge">
            <SectionHeading>Of 250 families in my caseload, who needs me most urgently today?</SectionHeading>
            <BodyLarge>
              Caseworkers spent 80% of their day on administrative tasks — clicking through four
              different screens to piece together a single family's history before each appointment.
              What remained was fragmented time for actual family support, allocated by gut instinct
              rather than evidence.
            </BodyLarge>
            <BodyLarge>
              The consequences compounded silently: families approaching recertification deadlines
              went uncontacted because no report surfaced them. Missed appointments were logged but
              never triaged. Early warning signs — declining benefit redemption, unreturned calls,
              rescheduled appointments — disappeared into disconnected systems.
            </BodyLarge>
            <BodyLarge style={{ marginBottom: 0 }}>
              The fundamental issue wasn't a lack of data. It was a lack of <em>actionable intelligence</em>.
              Caseworker burnout exceeded 40%, driven not by workload alone, but by the awareness
              that families were slipping through cracks that could have been closed.
            </BodyLarge>
          </SectionRow>

          {/* User story image */}
          <ImagePlaceholder label="A day in Sarah's life — before and after Emma  ·  1280 × 640" height={560} />

          {/* Primary User */}
          <SectionRow label="Primary User">
            <SectionHeading>Meet Sarah — WIC Caseworker, Arizona</SectionHeading>
            <BodyLarge>
              Sarah has a degree in public health and eight years of experience. She manages
              247 active cases. She knows many families by name — the mother struggling with
              postpartum depression, the grandmother raising three grandchildren alone, the young
              father working two jobs who kept missing appointments.
            </BodyLarge>
            <BodyLarge>
              She wants to help all of them. She cannot reach all of them. And she has no way
              of knowing which ones need her most urgently today.
            </BodyLarge>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 24,
                marginTop: 8,
              }}
            >
              {[
                {
                  title: 'No visibility into risk',
                  body: 'Data exists across systems but nothing shows which families are trending toward disengagement.',
                },
                {
                  title: 'Reactive workflow',
                  body: 'Her day is shaped by whoever calls or shows up — not by who needs help most.',
                },
                {
                  title: 'Fragmented systems',
                  body: 'Building a complete picture of one family requires navigating four different systems — 15 minutes per family.',
                },
                {
                  title: 'Gut-based prioritization',
                  body: 'Without systematic triage, Sarah relies on intuition. Inconsistent outcomes follow.',
                },
              ].map(({ title, body }) => (
                <div
                  key={title}
                  style={{
                    padding: '24px',
                    backgroundColor: t.bgSubtle,
                    borderRadius: 12,
                  }}
                >
                  <p style={{ fontSize: 16, fontWeight: 600, color: t.textPrimary, margin: '0 0 8px 0' }}>{title}</p>
                  <p style={{ fontSize: 15, color: t.textSecondary, margin: 0, lineHeight: 1.6 }}>{body}</p>
                </div>
              ))}
            </div>
          </SectionRow>

          {/* The Process */}
          <SectionRow label="The Process">
            <SectionHeading>Designing intelligence that earns trust</SectionHeading>
            <BodyLarge>
              The first challenge was understanding what caseworkers actually needed versus what
              a system could reliably provide. We embedded with caseworkers across three WIC
              clinics, shadowing daily routines, conducting contextual interviews, and mapping
              the moments where families fell through the cracks.
            </BodyLarge>
            <BodyLarge style={{ marginBottom: 0 }}>
              The insight that reframed everything: caseworkers didn't need more data — they
              needed the data to follow <em>them</em>. Every pain point traced back to a system
              that required caseworkers to seek out information rather than surfacing it
              proactively at the right moment.
            </BodyLarge>
          </SectionRow>

          {/* Two-column process images */}
          <div style={{ display: 'flex', gap: 32, width: '100%' }}>
            <ImagePlaceholder label="Research synthesis & affinity mapping  ·  620 × 460" height={460} />
            <ImagePlaceholder label="Journey mapping & pain point analysis  ·  620 × 460" height={460} />
          </div>

          {/* Risk Prediction */}
          <SectionRow label="Feature 1: Risk Prediction">
            <SectionHeading>Who needs help today — and why</SectionHeading>
            <BodyLarge>
              Emma continuously analyzes behavioral patterns across every enrolled family and
              calculates a risk score predicting likelihood of program dropout. Each morning,
              caseworkers see a prioritized queue of families requiring attention — with clear
              explanations of <em>why</em> each family is flagged.
            </BodyLarge>

            {/* Risk tier table */}
            <div style={{ marginTop: 8, marginBottom: 18 }}>
              <div style={{ display: 'flex', gap: 24, padding: '0 0 12px 0', borderBottom: `1px solid ${t.borderSubtle}` }}>
                <div style={{ width: 160, flexShrink: 0 }}>
                  <Eyebrow>Tier</Eyebrow>
                </div>
                <div style={{ flex: 1 }}>
                  <Eyebrow>Signals</Eyebrow>
                </div>
                <div style={{ width: 80, flexShrink: 0, textAlign: 'right' }}>
                  <Eyebrow>Weight</Eyebrow>
                </div>
              </div>
              <RiskTierRow
                tier="Critical"
                color="#DC2626"
                indicators={[
                  'Missed recertification deadline',
                  'Multiple consecutive missed appointments',
                  'Unreachable by all contact methods',
                ]}
                weight="Highest"
              />
              <RiskTierRow
                tier="High"
                color="#EA580C"
                indicators={[
                  'Single missed appointment without reschedule',
                  'Appointment rescheduled multiple times',
                  'Approaching recertification with no scheduled appointment',
                ]}
                weight="High"
              />
              <RiskTierRow
                tier="Moderate"
                color="#D97706"
                indicators={[
                  'Child approaching first birthday',
                  'Incomplete health screenings',
                  'No other family members enrolled in WIC',
                ]}
                weight="Medium"
              />
              <RiskTierRow
                tier="Early"
                color="#65A30D"
                indicators={[
                  'Not enrolled in Medicaid or SNAP',
                  'Longer gaps between appointments than required',
                  'Decreasing communication initiation',
                ]}
                weight="Lower"
              />
            </div>

            <BodyLarge style={{ marginBottom: 0 }}>
              Risk scores are dynamic — updating as new data enters the system. A family's
              risk level can escalate or de-escalate based on recent behavior. The Rodriguez
              family scenario: watched closely over four weeks, their score escalated from
              low risk to critical as their child's first birthday approached without a
              recertification appointment — surfaced to the top of Sarah's queue with 30 days
              to intervene.
            </BodyLarge>
          </SectionRow>

          {/* Priority queue image */}
          <ImagePlaceholder label="Priority queue — morning view with risk tiers  ·  1280 × 640" height={580} />

          {/* Intelligent Search */}
          <SectionRow label="Feature 2: Intelligent Search">
            <SectionHeading>Ask a question, get an answer — in seconds</SectionHeading>
            <BodyLarge>
              Instead of navigating fragmented systems, caseworkers ask Emma questions in natural
              language. Emma interprets the request, queries across all relevant data sources
              simultaneously, and returns prioritized results with supporting context.
            </BodyLarge>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 18 }}>
              {[
                {
                  query: '"Show me families with young children who\'ve missed appointments in the last 90 days."',
                  time: 'Seconds vs. 15+ minutes manually',
                },
                {
                  query: '"Which families have children turning one in the next 30 days who haven\'t scheduled recertification?"',
                  time: 'Seconds vs. 20+ minutes manually',
                },
                {
                  query: '"Show me formula-fed infants whose families aren\'t enrolled in Medicaid or SNAP."',
                  time: 'Seconds vs. 25+ minutes — often requiring IT support',
                },
              ].map(({ query, time }) => (
                <div
                  key={query}
                  style={{
                    padding: '24px',
                    backgroundColor: t.bgSubtle,
                    borderRadius: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <p
                    style={{
                      fontSize: 17,
                      fontWeight: 400,
                      color: t.textPrimary,
                      fontStyle: 'italic',
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {query}
                  </p>
                  <p style={{ fontSize: 13, color: t.textTertiary, margin: 0 }}>{time}</p>
                </div>
              ))}
            </div>

            <BodyLarge style={{ marginBottom: 0 }}>
              Each result includes the family's risk score, contributing factors, the data
              points matching the query, upcoming deadlines, and last interaction outcome.
              Emma doesn't return a list of names — she returns context.
            </BodyLarge>
          </SectionRow>

          {/* Search UI image */}
          <ImagePlaceholder label="Intelligent search — results with context  ·  1280 × 640" height={560} />

          {/* AI Design Principles */}
          <SectionRow label="Design Principles">
            <SectionHeading>Six principles that shaped every decision</SectionHeading>
            <BodyLarge style={{ marginBottom: 32 }}>
              Designing for AI required a different mindset than traditional software design.
              AI systems are probabilistic, not deterministic. They surface predictions, not
              certainties. They augment human judgment rather than replace it.
            </BodyLarge>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
              }}
            >
              <PrincipleCard
                number={1}
                title="Transparency Over Black Box"
                description="Users should understand why Emma is surfacing information, not just what she's surfacing. Risk factors are always visible — Sarah sees why the Rodriguez family is high-risk, not just that they are."
              />
              <PrincipleCard
                number={2}
                title="Augmentation Over Automation"
                description="Emma enhances caseworker capabilities — she doesn't replace caseworker judgment. No automated outreach, no action recommendations. All actions require explicit user initiation."
              />
              <PrincipleCard
                number={3}
                title="Calibrated Trust"
                description="Scores are presented as tiers (Critical, High, Moderate, Low) rather than false-precision percentages. When data is incomplete, Emma acknowledges uncertainty explicitly."
              />
              <PrincipleCard
                number={4}
                title="Progressive Disclosure"
                description="The Dashboard answers 'who needs me today?' in seconds. The Priority Queue shows the most important risk factor per family. Family Detail reveals the full context when needed."
              />
              <PrincipleCard
                number={5}
                title="Graceful Degradation"
                description="When AI fails, the system fails visibly and recoverably. If risk scoring fails, users can still filter by traditional criteria. Missing data is explicit — not hidden."
              />
              <PrincipleCard
                number={6}
                title="Feedback Loops"
                description="Emma gets smarter as caseworkers log outcomes, dismiss flags with reasons, and indicate what worked. Sarah's actions feed back into the model to improve future predictions."
              />
            </div>
          </SectionRow>

          {/* Final design image */}
          <ImagePlaceholder label="Family detail view — risk summary + full case context  ·  1280 × 720" height={640} />

          {/* Human-AI Collaboration */}
          <SectionRow label="Human-AI Collaboration">
            <SectionHeading>Emma predicts. Sarah decides. Always.</SectionHeading>
            <BodyLarge>
              The trust model is built on a consistent cycle: Emma surfaces the Rodriguez family
              as high-risk → Sarah calls the family and schedules recertification → the outcome
              is logged → Emma learns that this risk pattern, when addressed, leads to positive
              results. Over time, this cycle builds confidence on both sides.
            </BodyLarge>
            <BodyLarge style={{ marginBottom: 0 }}>
              Emma's design explicitly supports human override. Caseworkers can dismiss flags
              with documented reasons, manually adjust priority, and act on direct knowledge
              when Emma's data is outdated. Emma is confident but not insistent — she presents
              her analysis, then steps back for human decision-making.
            </BodyLarge>
          </SectionRow>

        </div>

        {/* ── OUTCOME ──────────────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: t.bgSubtle,
            padding: '96px 80px',
          }}
        >
          <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Eyebrow>Outcome</Eyebrow>
              <h2
                style={{
                  fontSize: 36,
                  fontWeight: 600,
                  color: t.textPrimary,
                  lineHeight: 1.12,
                  letterSpacing: '-0.36px',
                  margin: 0,
                }}
              >
                What shipped — and what moved
              </h2>
            </div>

            <div style={{ display: 'flex', gap: 48, width: '100%' }}>
              {[
                { stat: '−40%',   label: 'Case preparation time'                     },
                { stat: '+30%',   label: 'Early intervention rate for at-risk families' },
                { stat: '+200%',  label: 'Families identified as needing intervention'  },
                { stat: '6',      label: 'U.S. health departments deployed'             },
              ].map(({ stat, label }) => (
                <div key={stat} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <p
                    style={{
                      fontSize: 48,
                      fontWeight: 600,
                      color: t.textPrimary,
                      lineHeight: 1.08,
                      letterSpacing: '-0.72px',
                      margin: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {stat}
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: t.textSecondary,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                paddingTop: 48,
                borderTop: `1px solid ${t.borderSubtle}`,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <Eyebrow>Long-Term Vision</Eyebrow>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: t.textSecondary,
                  lineHeight: 1.5,
                  maxWidth: 760,
                  margin: 0,
                }}
              >
                Emma's predictive capabilities are expanding into population health intelligence —
                identifying systemic barriers to WIC participation at the state level, enabling
                cross-program coordination with SNAP and Medicaid, and modeling the impact of
                policy changes before implementation.
              </p>
            </div>
          </div>
        </section>

        {/* ── NEXT PROJECT ─────────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            padding: '56px 80px',
            borderTop: `1px solid ${t.borderSubtle}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Eyebrow>Next Project</Eyebrow>
            <p
              style={{
                fontSize: 24,
                fontWeight: 500,
                color: t.textPrimary,
                lineHeight: 1.24,
                letterSpacing: '-0.12px',
                margin: 0,
              }}
            >
              AI for Smarter School Decisions
            </p>
          </div>
          <button
            onClick={() => navigate('/work/ai-school-decisions')}
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              border: `1px solid ${t.borderSubtle}`,
              background: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: 20,
              color: t.textPrimary,
              transition: 'background-color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = t.textPrimary;
              e.currentTarget.style.color = 'var(--bg-page)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = t.textPrimary;
            }}
            aria-label="View next project"
          >
            →
          </button>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <ContactSection
          email="pritish@example.com"
          linkedinUrl="https://linkedin.com/in/pritishpatel"
        />
      </div>
    </div>
  );
};

export default HandsAICaseStudyPage;
