import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactSection from './ContactSection';

// ─── Shared token shortcuts ───────────────────────────────────────────────────
const t = {
  textPrimary:   'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  textTertiary:  'var(--text-tertiary)',
  textInverse:   'var(--text-inverse)',
  bgPage:        'var(--bg-page)',
  bgSubtle:      'var(--bg-subtle)',
  borderSubtle:  'var(--border-subtle)',
};

// ─── Nav (case-study-specific: all links lead back to home) ──────────────────
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
      className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20"
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

// ─── Eyebrow label ────────────────────────────────────────────────────────────
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

// ─── Image placeholder box ────────────────────────────────────────────────────
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

// ─── Section row: sidebar label + content ─────────────────────────────────────
const SectionRow = ({ label, children }) => (
  <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', width: '100%' }}>
    <div style={{ width: 220, flexShrink: 0 }}>
      <Eyebrow>{label}</Eyebrow>
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
  </div>
);

// ─── Content heading (H3) ─────────────────────────────────────────────────────
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

// ─── Body paragraph ───────────────────────────────────────────────────────────
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

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const CaseStudyPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: t.bgPage, color: t.textPrimary }}>
      <CaseStudyNav onBack={() => navigate('/')} />

      {/* Offset for fixed nav */}
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

          <Eyebrow>Product Design  ·  Enterprise</Eyebrow>

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
            AI for Smarter<br />School Decisions
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
            Distilling complex student performance and operational data into clear,
            actionable insights that empower educators with real-time clarity.
          </p>

          {/* Meta row */}
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', paddingTop: 24 }}>
            {[
              { label: 'Role',     value: 'Lead Product Designer'           },
              { label: 'Timeline', value: '6 months · 2023'                  },
              { label: 'Team',     value: '3 designers, 8 engineers'          },
              { label: 'Platform', value: 'Web App · Internal Dashboard'      },
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

        {/* ── COVER IMAGE ──────────────────────────────────────────────────── */}
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          <ImagePlaceholder label="Cover image  ·  1280 × 640" height={640} />
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
              New York City's school system serves 1.1 million students across 1,800 schools —
              generating an overwhelming volume of operational and academic data. Principals and
              administrators were drowning in disconnected spreadsheets, fragmented reporting tools,
              and delayed data cycles that made proactive decision-making nearly impossible.
            </BodyLarge>
            <BodyLarge style={{ marginBottom: 0 }}>
              I led design end to end — from stakeholder research and journey mapping through a
              shipped web platform, alongside a design system the district's product team builds on today.
            </BodyLarge>
          </SectionRow>

          {/* The Challenge */}
          <SectionRow label="The Challenge">
            <SectionHeading>Two systems, one broken picture</SectionHeading>
            <BodyLarge>
              School administrators told us the same story in every interview: they spent more time
              hunting for data than acting on it. Three separate platforms — the student information
              system, budget tools, and compliance portals — had no shared language. A principal
              needed six steps and two logins to answer a question raised in a staff meeting.
            </BodyLarge>
            <BodyLarge style={{ marginBottom: 0 }}>
              We focused the redesign on the moment of decision: the weekly leadership review,
              where patterns should be obvious, next steps should be surfaced, and every data
              point should have a clear owner.
            </BodyLarge>
          </SectionRow>

          {/* Journey map image */}
          <ImagePlaceholder label="Journey map & problem framing  ·  1280 × 720" height={600} />

          {/* The Process */}
          <SectionRow label="The Process">
            <SectionHeading>From messy research to a north star</SectionHeading>
            <BodyLarge style={{ marginBottom: 0 }}>
              We embedded with school principals and district administrators for three weeks,
              shadowing morning data reviews and attending board meetings. The breakthrough insight
              was that every pain point traced back to a single failure: the data never followed
              the question. We built a flexible insight model that inverts this — the system
              anticipates what you'll ask next and surfaces it before you have to search.
            </BodyLarge>
          </SectionRow>

          {/* Two-column process images */}
          <div style={{ display: 'flex', gap: 32, width: '100%' }}>
            <ImagePlaceholder label="Exploration  ·  620 × 460" height={460} />
            <ImagePlaceholder label="Usability testing  ·  620 × 460" height={460} />
          </div>

          {/* The Solution */}
          <SectionRow label="The Solution">
            <SectionHeading>One view, always current</SectionHeading>
            <BodyLarge style={{ marginBottom: 0 }}>
              The final platform anchors on a personalized briefing view that adapts to each
              administrator's scope of responsibility. Early warnings surface automatically.
              Attendance, budget, and compliance roll up into a single school health score.
              Deep dives are one click away — no login hopping, no exporting to spreadsheets.
            </BodyLarge>
          </SectionRow>

          {/* Final UI image */}
          <ImagePlaceholder label="Final UI showcase  ·  1280 × 720" height={640} />
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
                { stat: '+47%',  label: 'Decision velocity'        },
                { stat: '4.6★',  label: 'Average user rating'      },
                { stat: '−58%',  label: 'Time spent searching data' },
                { stat: '3 mo',  label: 'Pilot to full rollout'    },
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
              Simplifying Verizon's Engineering Operations
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
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

export default CaseStudyPage;
