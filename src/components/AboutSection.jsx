import React from 'react';

const AboutSection = () => {
    const skills = [
        "AI/ML User Experience Design",
        "Enterprise Platform Design",
        "Design Systems & Scalability",
        "User Research & Testing",
        "Cross-functional Collaboration"
    ];

    return (
        <section id="section-2" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 dark:text-white">
                            Bridging Human Needs with AI Possibilities
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            <p className="font-normal">
                                I began my career in enterprise design at Verizon, focusing on large-scale systems that serve complex workflows and use-cases. At the DOE, I shifted toward Enterprise AI, where the role of design expanded beyond usability to shaping how people work with intelligent systems.
                            </p>
                            <p className="font-normal">
                                My belief has evolved: the best AI doesn't feel like AI — it feels human. It guides, supports, and empowers without overwhelming. Human-AI collaboration should enhance decision-making, not replace it.
                            </p>
                            <p className="font-normal">
                                I focus on designing AI-powered tools that are scalable, intuitive, and grounded in user research. By collaborating closely with engineers, I ensure these systems meet real needs while staying adaptable in fast-moving environments.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                        <h3 className="text-2xl font-medium mb-6 text-gray-900 dark:text-white">Core Expertise</h3>
                        <div className="space-y-4">
                            {skills.map((skill) => (
                                <div key={skill} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full" />
                                    <span className="text-gray-700 dark:text-gray-300 font-normal">{skill}</span>
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