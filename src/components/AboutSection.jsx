import React from 'react';

const AboutSection = () => {
    const timeline = [
        {
            year: "2020",
            company: "Verizon",
            designation: "UX Designer",
            description: "Led enterprise design initiatives for large-scale network management systems, focusing on complex workflows and engineering operations.",
        },
        {
            year: "2022",
            company: "NBC Universal",
            designation: "Senior UX Designer",
            description: "Designed media production workflows and content management systems for enterprise broadcast operations.",
        },
        {
            year: "2023",
            company: "NYC Public Schools",
            designation: "Lead UX Designer",
            description: "Pioneered AI-powered education analytics platforms, transforming how educators access and utilize student performance data.",
        },
        {
            year: "2024",
            company: "CMA Global",
            designation: "Lead Product Designer",
            description: "Led Enterprise AI product design, shaping intelligent systems that enhance decision-making and operational efficiency.",
        },
        {
            year: "2025",
            company: "NYCERS",
            designation: "Lead Product Designer",
            description: "Architected pension management systems and member experience platforms for New York City's largest retirement system.",
        },
    ];

    return (
        <section
            id="section-1"
            style={{ backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-subtle)', paddingTop: 96, paddingBottom: 96 }}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid md:grid-cols-[1.4fr_1fr] gap-16 items-start">

                    {/* Left: bio */}
                    <div>
                        <p
                            className="uppercase mb-5"
                            style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-tertiary)', letterSpacing: '1.04px', lineHeight: 1.2 }}
                        >
                            About
                        </p>
                        <h2
                            style={{
                                fontSize: 'clamp(28px, 3.5vw, 44px)',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                lineHeight: 1.1,
                                letterSpacing: '-0.88px',
                                marginBottom: 32,
                            }}
                        >
                            A decade of designing enterprise applications.
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
                            <p style={{ fontSize: 16, fontWeight: 400, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                                I began my career in enterprise design at Verizon, focusing on large-scale systems that serve complex workflows and use-cases. At the DOE, I shifted toward Enterprise AI, where the role of design expanded beyond usability to shaping how people work with intelligent systems.
                            </p>
                            <p style={{ fontSize: 16, fontWeight: 400, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                                My belief has evolved: the best AI doesn't feel like AI — it feels human. It guides, supports, and empowers without overwhelming. Human-AI collaboration should enhance decision-making, not replace it.
                            </p>
                            <p style={{ fontSize: 16, fontWeight: 400, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                                I focus on designing AI-powered tools that are scalable, intuitive, and grounded in user research. By collaborating closely with engineers, I ensure these systems meet real needs while staying adaptable in fast-moving environments.
                            </p>
                        </div>

                        <button
                            onClick={() => document.getElementById('section-3')?.scrollIntoView({ behavior: 'smooth' })}
                            style={{
                                padding: '12px 24px',
                                backgroundColor: 'transparent',
                                color: 'var(--text-primary)',
                                fontSize: 14,
                                fontWeight: 500,
                                borderRadius: 999,
                                border: '1px solid var(--text-primary)',
                                cursor: 'pointer',
                                lineHeight: 1.4,
                                transition: 'background-color 0.15s, color 0.15s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                                e.currentTarget.style.color = 'var(--text-inverse)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                        >
                            View my work
                        </button>
                    </div>

                    {/* Right: career timeline */}
                    <div>
                        <p
                            className="uppercase mb-6"
                            style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-tertiary)', letterSpacing: '1.04px', lineHeight: 1.2 }}
                        >
                            Career
                        </p>
                        <div>
                            {timeline.map((entry, index) => (
                                <div
                                    key={index}
                                    style={{
                                        paddingBottom: 24,
                                        marginBottom: 24,
                                        borderBottom: index < timeline.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 8px', marginBottom: 6 }}>
                                        <span style={{ fontSize: 13, color: 'var(--text-tertiary)', fontWeight: 400 }}>{entry.year}</span>
                                        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{entry.company}</span>
                                        <span style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 400 }}>· {entry.designation}</span>
                                    </div>
                                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                                        {entry.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
