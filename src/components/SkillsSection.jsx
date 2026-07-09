import React from 'react';

const expertiseAreas = [
    {
        title: "End-to-End Product Design for Enterprise AI",
        skills: [
            "Product Strategy & UX Architecture",
            "AI-Driven Workflow Design",
            "Complex Information Architecture",
            "End-to-End Service & Journey Mapping",
        ],
    },
    {
        title: "Mixed-Methods Research & Validation",
        skills: [
            "Behavioral Research & Synthesis",
            "Multi-Role Interaction Design",
            "Systems Design for Regulated Environments",
        ],
    },
    {
        title: "High-Fidelity Prototyping & Interface Design",
        skills: [
            "Prototyping for Complex Logic",
            "Data Interaction & Visualization",
            "AI Explainability & Trust Modeling",
        ],
    },
    {
        title: "Scalable Design Systems",
        skills: [
            "Component Engineering",
            "Design Token Architecture",
            "Enterprise Systems Architecture",
        ],
    },
    {
        title: "Cross-Functional Leadership",
        skills: [
            "Stakeholder Alignment Strategy",
            "Cross-Functional Product Alignment",
            "Executive Communication",
        ],
    },
];

const SkillsSection = () => {
    return (
        <section
            id="section-2"
            style={{ backgroundColor: 'var(--bg-page)', borderTop: '1px solid var(--border-subtle)', paddingTop: 96, paddingBottom: 96 }}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                <div style={{ marginBottom: 64 }}>
                    <p
                        className="uppercase mb-4"
                        style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-tertiary)', letterSpacing: '1.04px', lineHeight: 1.2 }}
                    >
                        Expertise
                    </p>
                    <h2
                        style={{
                            fontSize: 'clamp(32px, 4vw, 48px)',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            lineHeight: 1.1,
                            letterSpacing: '-1px',
                            margin: 0,
                        }}
                    >
                        Core Capabilities
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--border-subtle)' }}>
                    {expertiseAreas.map((area, index) => (
                        <div
                            key={index}
                            style={{ backgroundColor: 'var(--bg-page)', padding: '32px 28px' }}
                        >
                            <h3
                                style={{
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                    lineHeight: 1.4,
                                    marginBottom: 20,
                                }}
                            >
                                {area.title}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {area.skills.map((skill, i) => (
                                    <li
                                        key={i}
                                        style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: 10 }}
                                    >
                                        <span style={{ color: 'var(--text-tertiary)', marginTop: 1, flexShrink: 0 }}>—</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
