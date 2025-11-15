import React from 'react';

const AboutSection = () => {
    const skills = [
        "AI-Driven Workflow Design",
        "Enterprise Systems Architecture",
        "Scalable Design Systems Engineering",
        "Mixed-Methods Research & Behavioral Validation",
        "Cross-Functional Product Alignment",
        "AI Explainability & Trust Modeling",
        "Operational Workflow Reconstruction",
        "Systems Design for Regulated Environments",
        "Data Interaction & Visualization Architecture",
        "High-Fidelity Prototyping for Complex Logic",
        "Multi-Role Interaction Design",
        "Product Strategy & UX Architecture",
        "End-to-End Service & Journey Mapping",
        "Complex Information Architecture",
        "Stakeholder Narrative & Alignment Strategy"
    ];

    return (
        <section id="section-2" className="py-24 bg-black text-white border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-5">
                            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Pritish Sai</p>
                            <h2 className="section-title about-title">
                                <span className="text-gray-500">Bridging Human Needs</span>
                                <span className="block text-white">With AI Possibilities</span>
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <p className="about-text">
                                I began my career in enterprise design at Verizon, focusing on large-scale systems that serve complex workflows and
                                use-cases. At the DOE, I shifted toward Enterprise AI, where the role of design expanded beyond usability to shaping
                                how people work with intelligent systems.
                            </p>
                            <p className="about-text">
                                My belief has evolved: the best AI doesn't feel like AI — it feels human. It guides, supports, and empowers without
                                overwhelming. Human-AI collaboration should enhance decision-making, not replace it.
                            </p>
                            <p className="about-text">
                                I focus on designing AI-powered tools that are scalable, intuitive, and grounded in user research. By collaborating
                                closely with engineers, I ensure these systems meet real needs while staying adaptable in fast-moving environments.
                            </p>
                        </div>
                        <button className="about-cta" onClick={() => document.getElementById('section-1')?.scrollIntoView({ behavior: 'smooth' })}>
                            Featured Work
                        </button>
                    </div>
                    <div className="bg-gray-900/40 border border-white/10 p-8 rounded-2xl backdrop-blur">
                        <h3 className="text-lg tracking-[0.3em] uppercase text-gray-400 mb-8">Core Expertise</h3>
                        <div className="space-y-4">
                            {skills.map((skill) => (
                                <div key={skill} className="flex items-center space-x-3">
                                    <div className="w-1 h-1 bg-white rounded-full" />
                                    <span className="about-text text-white/90">{skill}</span>
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