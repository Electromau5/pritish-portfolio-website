import React from 'react';

const SkillsSection = () => {
    const expertiseCards = [
        {
            title: "End-to-End Product Design for Enterprise AI",
            skills: [
                "Product Strategy & UX Architecture",
                "AI-Driven Workflow Design",
                "Complex Information Architecture",
                "End-to-End Service & Journey Mapping",
                "Enterprise Systems Architecture",
                "Operational Workflow Reconstruction"
            ]
        },
        {
            title: "Mixed-Methods Research & Behavioral Validation",
            skills: [
                "Mixed-Methods Research & Behavioral Validation",
                "Multi-Role Interaction Design",
                "Systems Design for Regulated Environments"
            ]
        },
        {
            title: "High-Fidelity Prototyping & Interface Design",
            skills: [
                "High-Fidelity Prototyping for Complex Logic",
                "Data Interaction & Visualization Architecture",
                "AI Explainability & Trust Modeling"
            ]
        },
        {
            title: "Scalable Design Systems & Component Engineering",
            skills: [
                "Scalable Design Systems Engineering",
                "Complex Information Architecture",
                "Enterprise Systems Architecture"
            ]
        },
        {
            title: "Cross-Functional Leadership & Stakeholder Alignment",
            skills: [
                "Cross-Functional Product Alignment",
                "Stakeholder Narrative & Alignment Strategy",
                "Product Strategy & UX Architecture"
            ]
        }
    ];

    return (
        <section id="section-2" className="py-24 bg-black text-white border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="space-y-4 mb-12">
                    <p className="section-eyebrow text-gray-500">Expertise</p>
                    <h2 className="section-title text-white">Core Expertise</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expertiseCards.map((card, index) => (
                        <div key={index} className="bg-gray-900/40 border border-white/10 p-6 rounded-2xl backdrop-blur">
                            <h3 className="text-xl font-medium text-white mb-4">{card.title}</h3>
                            <div className="space-y-3">
                                {card.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="flex items-start space-x-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-base text-gray-300 leading-relaxed">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 flex justify-center">
                    <button className="about-cta" onClick={() => document.getElementById('section-3')?.scrollIntoView({ behavior: 'smooth' })}>
                        Featured Work
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

