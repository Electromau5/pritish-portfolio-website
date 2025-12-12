import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const ProjectDetailPage = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState(0);
    const sectionRefs = useRef([]);

    // 8 sections for the project
    const sections = [
        { id: 'overview', title: 'Project Overview', slug: 'project-overview' },
        { id: 'research', title: 'Research & Synthesis', slug: 'research-synthesis' },
        { id: 'ideation', title: 'Ideation & Design', slug: 'ideation-design' },
        { id: 'systems', title: 'Systems & Scalability', slug: 'systems-scalability' },
        { id: 'testing', title: 'Testing & Validation', slug: 'testing-validation' },
        { id: 'outcome', title: 'Outcome & Impact', slug: 'outcome-impact' },
        { id: 'process', title: 'Design Process', slug: 'design-process' },
        { id: 'features', title: 'Key Features', slug: 'key-features' }
    ];

    useEffect(() => {
        // Set up intersection observer to track active section
        const observers = sectionRefs.current.map((ref, index) => {
            if (!ref) return null;
            
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                            setActiveSection(index);
                        }
                    });
                },
                { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
            );
            
            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer?.disconnect());
        };
    }, []);

    const scrollToSection = (index) => {
        const section = sectionRefs.current[index];
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(index);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate('/home')}
                            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            <ArrowLeft size={20} />
                            <span>Back</span>
                        </button>
                        
                        <div className="flex-1 flex justify-center">
                            <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
                                {sections.map((section, index) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(index)}
                                        className={`px-4 py-2 whitespace-nowrap text-sm font-medium transition-all duration-200 rounded-lg ${
                                            activeSection === index
                                                ? 'bg-black text-white'
                                                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="w-20 flex justify-end">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sections */}
            <div className="relative">
                {/* Section 1: Project Overview */}
                <section
                    ref={(el) => (sectionRefs.current[0] = el)}
                    id="project-overview"
                    className="min-h-screen grid grid-cols-2"
                >
                    <div className="bg-black dark:bg-black p-12 md:p-16 flex flex-col justify-center items-center">
                        <div className="space-y-8 text-white leading-relaxed max-w-[62.5%]">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white">
                                Eliminating Guesswork From Public Health Case Management
                            </h3>
                            <p className="text-xl md:text-2xl text-white">
                                I led the design of an AI assistant that predicts which families under public health programs are at risk - giving caseworkers the clarity to intervene before families disengage from health programs.
                            </p>
                            <p className="text-lg md:text-xl text-gray-300 mt-8">
                                Deployed to 250+ caseworkers across 6 state health departments. 40% faster case prep. 30% more early interventions.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 flex items-center justify-center p-8">
                        <img
                            src="/images/hands-ai/hands-ai-cover.png"
                            alt="Emma: Intelligent WIC Assistant"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                </section>

                {/* Section 2: Research & Synthesis */}
                <section
                    ref={(el) => (sectionRefs.current[1] = el)}
                    id="research-synthesis"
                    className="min-h-screen grid grid-cols-2"
                >
                    <div className="bg-white dark:bg-gray-900 p-12 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">
                            Research & Synthesis
                        </h2>
                        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                            <p>
                                In order to gain a transparent understanding of the daily challenges faced by WIC caseworkers, my team and I travelled to a healthcare clinic in Phoenix, Arizona.
                            </p>
                            <p>
                                We used a combination of ethnographic observation and contextual inquiries to observe day-to-day operations of several caseworkers who volunteered to participate in our research.
                            </p>
                            <p>
                                We weren't just studying a system; we were stepping into the lived experiences of professionals who carry the responsibility of supporting vulnerable families every day.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 flex items-center justify-center p-8">
                        <img
                            src="/images/hands-ai/User Research/user-research.png"
                            alt="User Research"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                </section>

                {/* Section 3: Ideation & Design */}
                <section
                    ref={(el) => (sectionRefs.current[2] = el)}
                    id="ideation-design"
                    className="min-h-screen grid grid-cols-2"
                >
                    <div className="bg-white dark:bg-gray-900 p-12 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">
                            Ideation & Design
                        </h2>
                        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                            <p>
                                Rapid prototyping and iterative design to create the perfect AI interaction. We mapped 200+ common queries and designed natural language patterns that feel intuitive to medical professionals.
                            </p>
                            <p>
                                The conversational interface was designed to mirror how healthcare professionals naturally communicate with colleagues, using medical terminology and understanding context.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 flex items-center justify-center p-8">
                        <img
                            src="/images/hands-ai/Prototypes/WIC-search.svg"
                            alt="WIC Search Prototype"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                </section>

                {/* Section 4: Systems & Scalability */}
                <section
                    ref={(el) => (sectionRefs.current[3] = el)}
                    id="systems-scalability"
                    className="min-h-screen grid grid-cols-2"
                >
                    <div className="bg-white dark:bg-gray-900 p-12 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">
                            Systems & Scalability
                        </h2>
                        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                            <p>
                                Established comprehensive design tokens, component library, and interaction patterns that ensure consistency across all touchpoints.
                            </p>
                            <p>
                                Ensured WCAG 2.1 AA compliance with proper contrast ratios, keyboard navigation, and screen reader support for inclusive design.
                            </p>
                            <p>
                                Optimized for efficiency with clear information hierarchy, intuitive navigation, and minimal cognitive load for busy healthcare environments.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 flex items-center justify-center p-8">
                        <div className="text-gray-900 dark:text-white text-center">
                            <p className="text-lg mb-4">Design System Components</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-gray-900 dark:text-white">Tokens</div>
                                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-gray-900 dark:text-white">Components</div>
                                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-gray-900 dark:text-white">Documentation</div>
                                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-gray-900 dark:text-white">Accessibility</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Testing & Validation */}
                <section
                    ref={(el) => (sectionRefs.current[4] = el)}
                    id="testing-validation"
                    className="min-h-screen grid grid-cols-2"
                >
                    <div className="bg-white dark:bg-gray-900 p-12 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">
                            Testing & Validation
                        </h2>
                        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                            <p>
                                Conducted 40+ usability sessions with real patient data (anonymized) to refine the AI's response patterns and interface design.
                            </p>
                            <p>
                                Ensured HIPAA compliance through rigorous testing of data handling, access controls, and audit trail functionality.
                            </p>
                            <p>
                                Ran ethnographic testing and A/B tests to validate design decisions and measure user satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 flex items-center justify-center p-8">
                        <div className="text-gray-900 dark:text-white text-center">
                            <div className="space-y-4">
                                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded">
                                    <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">40+</div>
                                    <div className="text-gray-700 dark:text-gray-300">Usability Sessions</div>
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded">
                                    <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">98%</div>
                                    <div className="text-gray-700 dark:text-gray-300">User Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Outcome & Impact */}
                <section
                    ref={(el) => (sectionRefs.current[5] = el)}
                    id="outcome-impact"
                    className="min-h-screen grid grid-cols-2"
                >
                    <div className="bg-white dark:bg-gray-900 p-12 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">
                            Outcome & Impact
                        </h2>
                        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="text-3xl font-light text-black dark:text-white mb-2">70%</div>
                                    <div className="text-sm">Faster Information Retrieval</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-light text-black dark:text-white mb-2">40%</div>
                                    <div className="text-sm">Reduction in Medical Errors</div>
                                </div>
                            </div>
                            <p>
                                Physicians can now access patient information in seconds instead of minutes, allowing them to spend more time with patients and make better clinical decisions.
                            </p>
                            <p>
                                ROI achieved within 6 months through improved efficiency, reduced errors, and higher patient throughput across all facilities.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 flex items-center justify-center p-8">
                        <img
                            src="/images/hands-ai/Problem Solution/solution.gif"
                            alt="Solution Impact"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                </section>

                {/* Section 7: Design Process */}
                <section
                    ref={(el) => (sectionRefs.current[6] = el)}
                    id="design-process"
                    className="min-h-screen grid grid-cols-2"
                >
                    <div className="bg-white dark:bg-gray-900 p-12 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">
                            Design Process
                        </h2>
                        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                            <div>
                                <h3 className="font-semibold mb-2">1. Initial Ideation Workshop</h3>
                                <p className="text-sm">Gather key stakeholders to align on goals and identify opportunities.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">2. Research & AI Feasibility</h3>
                                <p className="text-sm">Validate assumptions with user research and data analysis.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">3. Concept Development</h3>
                                <p className="text-sm">Define AI features, build prototypes, and test user-AI interactions.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">4. Validation & Feedback Loops</h3>
                                <p className="text-sm">Run usability tests and track design iterations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 flex items-center justify-center p-8">
                        <div className="grid grid-cols-3 gap-4">
                            <img
                                src="/images/hands-ai/Design Process/Ideation.svg"
                                alt="Ideation"
                                className="w-full h-auto"
                            />
                            <img
                                src="/images/hands-ai/Design Process/Research.svg"
                                alt="Research"
                                className="w-full h-auto"
                            />
                            <img
                                src="/images/hands-ai/Design Process/Concept.svg"
                                alt="Concept"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 8: Key Features */}
                <section
                    ref={(el) => (sectionRefs.current[7] = el)}
                    id="key-features"
                    className="min-h-screen grid grid-cols-2"
                >
                    <div className="bg-white dark:bg-gray-900 p-12 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8">
                            Key Features
                        </h2>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <div>
                                <h3 className="font-semibold mb-1">Natural Language Queries</h3>
                                <p className="text-sm">Ask questions in natural speaking patterns with medical terminology support.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Contextual Suggestions</h3>
                                <p className="text-sm">AI proactively suggests relevant information based on current context.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Voice Integration</h3>
                                <p className="text-sm">Hands-free operation for busy clinical environments.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Privacy Protection</h3>
                                <p className="text-sm">Advanced encryption and access controls ensure HIPAA compliance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 flex items-center justify-center p-8">
                        <img
                            src="/images/hands-ai/Prototypes/medical-module.svg"
                            alt="Medical Module"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                </section>
            </div>

            <style>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default ProjectDetailPage;

