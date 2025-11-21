import React from 'react';

const AboutSection = () => {
    const timeline = [
        {
            year: "2020",
            company: "Verizon",
            designation: "UX Designer",
            description: "Led enterprise design initiatives for large-scale network management systems, focusing on complex workflows and engineering operations."
        },
        {
            year: "2022",
            company: "NBC Universal",
            designation: "Senior UX Designer",
            description: "Designed media production workflows and content management systems for enterprise broadcast operations."
        },
        {
            year: "2023",
            company: "NYC Public Schools",
            designation: "Lead UX Designer",
            description: "Pioneered AI-powered education analytics platforms, transforming how educators access and utilize student performance data."
        },
        {
            year: "2024",
            company: "CMA Global",
            designation: "Lead Product Designer",
            description: "Leading Enterprise AI product design, shaping intelligent systems that enhance decision-making and operational efficiency."
        },
        {
            year: "2025",
            company: "NYCERS",
            designation: "Lead Product Designer",
            description: "Architected pension management systems and member experience platforms for New York City's largest retirement system."
        }
    ];

    return (
        <section id="section-2" className="py-24 bg-black text-white border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="space-y-5">
                            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Pritish Sai</p>
                            <h2 className="section-title about-title text-white" style={{ textTransform: 'none' }}>
                                I bridge human needs with AI possibilities
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
                        <button className="about-cta" onClick={() => document.getElementById('section-skills')?.scrollIntoView({ behavior: 'smooth' })}>
                            What I can do for you
                        </button>
                    </div>
                    <div className="bg-gray-900/40 border border-white/10 p-8 rounded-2xl backdrop-blur">
                        <h3 className="text-lg tracking-[0.3em] uppercase text-gray-400 mb-8">Career Timeline</h3>
                        <div className="space-y-6">
                            {timeline.map((entry, index) => (
                                <div key={index} className="relative pl-10">
                                    <div className="absolute left-0 top-0 w-px h-full bg-white/20" />
                                    <div className="absolute left-0 top-0 w-5 h-5 bg-white rounded-full border-2 border-gray-900 -translate-x-1/2" />
                                    <div className="space-y-3">
                                        <div className="flex items-baseline gap-3 flex-wrap">
                                            <span className="text-base font-semibold text-white tracking-[0.2em] uppercase">{entry.year}</span>
                                            <span className="text-lg text-gray-300 font-medium">{entry.company}</span>
                                            <span className="text-base text-gray-400 font-medium">• {entry.designation}</span>
                                        </div>
                                        <p className="text-base text-gray-400 leading-relaxed">{entry.description}</p>
                                    </div>
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