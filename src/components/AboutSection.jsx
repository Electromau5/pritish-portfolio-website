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
                        <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-gray-900 dark:text-white">
                            Bridging Human Needs with AI Possibilities
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            <p>
                                I believe that the best AI experiences don't feel like AI at all — they feel intuitive, trustworthy, and genuinely helpful.
                            </p>
                            <p>
                                Over the past five years, I've specialized in designing enterprise platforms that harness AI's power while maintaining the human touch that makes technology truly valuable.
                            </p>
                            <p>
                                My approach combines rigorous user research, rapid prototyping, and close collaboration with engineering teams to create solutions that scale across complex organizations.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                        <h3 className="text-2xl font-medium mb-6 text-gray-900 dark:text-white">Core Expertise</h3>
                        <div className="space-y-4">
                            {skills.map((skill) => (
                                <div key={skill} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full" />
                                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
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