import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const CaseStudyModal = ({
    isOpen,
    onClose,
    caseStudyData,
    initialPosition,
    accentColor = "blue",
    expandingCard
}) => {
    const [activeSection, setActiveSection] = useState(0);
    const [activeSubsection, setActiveSubsection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [menuStartIndex, setMenuStartIndex] = useState(0);
    const modalRef = useRef(null);

    const { title, subtitle, sections } = caseStudyData || {};

    const colorClasses = {
        blue: {
            primary: "bg-blue-600",
            light: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-200"
        },
        green: {
            primary: "bg-green-600",
            light: "bg-green-50",
            text: "text-green-600",
            border: "border-green-200"
        },
        purple: {
            primary: "bg-purple-600",
            light: "bg-purple-50",
            text: "text-purple-600",
            border: "border-purple-200"
        }
    };

    const colors = colorClasses[accentColor];

    // Standardized case study sections for all projects
    const standardizedSections = [
        "Project Overview",
        "Discovery & Research",
        "Design Thinking",
        "Ideation & Prototyping",
        "Design Systems & Usability",
        "Testing & Validation",
        "Outcome & Impact"
    ];

    // Internal navigation items for Project Overview
    const projectOverviewSubsections = [
        "Project Overview",
        "Primary Roles",
        "Project Impact",
        "Problem & Solution",
        "Design Process"
    ];

    // Subsection arrays for each primary section
    const sectionSubsections = {
        "Project Overview": [
            "Project Overview",
            "Primary Roles",
            "Project Impact",
            "Problem & Solution",
            "Design Process"
        ],
        "Discovery & Research": [
            "Research Strategy",
            "Methodologies",
            "Participants",
            "Research Insights"
        ],
        "Design Thinking": [
            "Journey Maps",
            "JTBD",
            "Prioritization Framework",
            "Vision"
        ],
        "Ideation & Prototyping": [
            "Wireframes",
            "Prototypes",
            "Design Collaboration",
            "Key Design Decisions"
        ],
        "Design Systems & Usability": [
            "Accessibility Standards",
            "Tokens, Components, Documentation",
            "Design System",
            "Usability"
        ],
        "Testing & Validation": [
            "Usability Testing",
            "Ethnographic Testing",
            "A/B Tests",
            "Analytics"
        ],
        "Outcome & Impact": [
            "Business Results",
            "User Outcomes",
            "Lessons Learned",
            "The Future"
        ]
    };

    const currentSubsections = sectionSubsections[standardizedSections[activeSection]] || [];

    const visibleMenuItems = 5; // Number of menu items visible at once
    const maxMenuStartIndex = Math.max(0, standardizedSections.length - visibleMenuItems);

    const nextMenuItems = () => {
        setMenuStartIndex(Math.min(maxMenuStartIndex, menuStartIndex + 1));
    };

    const prevMenuItems = () => {
        setMenuStartIndex(Math.max(0, menuStartIndex - 1));
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            modalRef.current?.focus();

            // Handle expansion animation
            if (expandingCard && modalRef.current) {
                // Start with card position
                const card = modalRef.current;
                card.style.position = 'fixed';
                card.style.top = `${expandingCard.position.top}px`;
                card.style.left = `${expandingCard.position.left}px`;
                card.style.width = `${expandingCard.position.width}px`;
                card.style.height = `${expandingCard.position.height}px`;
                card.style.zIndex = '50';
                card.style.transition = 'all 0.8s ease-out';
                card.style.transform = 'scale(1)';
                card.style.borderRadius = '1rem';
                card.style.overflow = 'hidden';

                // Trigger expansion after a brief delay
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        card.style.top = '50%';
                        card.style.left = '50%';
                        card.style.width = '100%';
                        card.style.height = '100%';
                        card.style.transform = 'translate(-50%, -50%) scale(1)';
                        card.style.borderRadius = '1rem';
                    });
                });
            }
        } else {
            document.body.style.overflow = 'unset';
            setActiveSection(0);
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, expandingCard]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!isOpen) return;

            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') {
                if (currentSubsections.length > 0) {
                    prevSubsection();
                } else {
                    prevSection();
                }
            }
            if (e.key === 'ArrowRight') {
                if (currentSubsections.length > 0) {
                    nextSubsection();
                } else {
                    nextSection();
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isOpen, activeSection, activeSubsection, currentSubsections.length]);

    const navigateToSection = (index) => {
        if (index === activeSection || isAnimating) return;

        setIsAnimating(true);
        setActiveSection(index);
        setActiveSubsection(0); // Reset subsection when switching sections

        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    const navigateToSubsection = (index) => {
        if (index === activeSubsection || isAnimating) return;

        setIsAnimating(true);
        setActiveSubsection(index);

        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    const nextSection = () => {
        const next = activeSection < standardizedSections.length - 1 ? activeSection + 1 : 0;
        navigateToSection(next);
    };

    const prevSection = () => {
        const prev = activeSection > 0 ? activeSection - 1 : standardizedSections.length - 1;
        navigateToSection(prev);
    };

    const nextSubsection = () => {
        const next = activeSubsection < currentSubsections.length - 1 ? activeSubsection + 1 : 0;
        navigateToSubsection(next);
    };

    const prevSubsection = () => {
        const prev = activeSubsection > 0 ? activeSubsection - 1 : currentSubsections.length - 1;
        navigateToSubsection(prev);
    };

    if (!isOpen || !caseStudyData) return null;

    // Calculate expansion styles
    const expansionStyles = expandingCard ? {
        position: 'fixed',
        top: expandingCard.position.top,
        left: expandingCard.position.left,
        width: expandingCard.position.width,
        height: expandingCard.position.height,
        zIndex: 50,
        transition: 'all 0.8s ease-out',
        transform: 'scale(1)',
        borderRadius: '1rem',
        overflow: 'hidden'
    } : {};

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
                style={{
                    animation: isOpen ? 'fadeIn 0.3s ease-out' : 'fadeOut 0.3s ease-out'
                }}
            />

            {/* Modal */}
            <div
                ref={modalRef}
                tabIndex={-1}
                className="relative w-full h-full max-w-7xl max-h-[95vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden focus:outline-none"
                style={{
                    ...expansionStyles,
                    animation: expandingCard ? 'none' : (isOpen ? 'modalSlideIn 0.8s ease-out' : 'modalSlideOut 0.6s ease-out')
                }}
            >
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between p-6">
                        <div className="flex-1">
                            <h1 className="text-2xl font-light text-gray-900 dark:text-white">{title}</h1>
                            <p className="text-gray-600 dark:text-gray-300 mt-1">{subtitle}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {activeSection + 1} of {standardizedSections?.length}
                            </span>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Section Navigation */}
                    <div className="px-6 pb-4">
                        <div className="flex items-center space-x-2">
                            {menuStartIndex > 0 && (
                                <button
                                    onClick={prevMenuItems}
                                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                            )}
                            <div className="flex-1 flex space-x-1 justify-center">
                                {standardizedSections?.slice(menuStartIndex, menuStartIndex + visibleMenuItems).map((section, index) => (
                                    <button
                                        key={menuStartIndex + index}
                                        onClick={() => navigateToSection(menuStartIndex + index)}
                                        className={`px-4 py-2 whitespace-nowrap text-sm font-medium transition-all duration-200 rounded-lg ${activeSection === menuStartIndex + index
                                            ? `${colors.text} ${colors.light} dark:bg-gray-800`
                                            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        {section}
                                    </button>
                                ))}
                            </div>
                            {menuStartIndex < maxMenuStartIndex && (
                                <button
                                    onClick={nextMenuItems}
                                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            )}
                        </div>

                        {/* Internal Navigation for all sections */}
                        {currentSubsections.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center space-x-2">
                                    <div className="flex-1 flex space-x-1 justify-center">
                                        {currentSubsections.map((subsection, index) => (
                                            <button
                                                key={index}
                                                onClick={() => navigateToSubsection(index)}
                                                className={`px-3 py-1.5 whitespace-nowrap text-xs font-medium transition-all duration-200 rounded-md ${activeSubsection === index
                                                    ? `${colors.text} ${colors.light} dark:bg-gray-700`
                                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                    }`}
                                            >
                                                {subsection}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="relative">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${activeSection * 100}%)`,
                                width: `${standardizedSections?.length * 100}%`
                            }}
                        >
                            {standardizedSections?.map((section, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 px-12 pt-8 pb-16"
                                    style={{ width: `${100 / standardizedSections.length}%` }}
                                >
                                    <SectionContent section={section} colors={colors} activeSubsection={activeSubsection} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(100vh);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes modalSlideOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(100vh);
          }
        }
      `}</style>
            <style>{`
.project-impact-scroll::-webkit-scrollbar {
  width: 6px;
}
.project-impact-scroll::-webkit-scrollbar-thumb {
  background: rgba(12,92,138,0.3);
  border-radius: 6px;
}
.project-impact-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(12,92,138,0.3) transparent;
}
`}</style>
        </div>
    );
};

const SectionContent = ({ section, colors, activeSubsection = 0 }) => {
    // For Project Overview section, show different content based on activeSubsection
    if (section === "Project Overview") {
        return (
            <div className="space-y-12 max-w-7xl mx-auto">
                {activeSubsection === 0 && (
                    // Project Overview content
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto pt-2 pb-8 px-8">
                            <div className="space-y-4 pt-2">
                                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                    The Special Supplemental Nutrition Program for Women, Infants, and Children (WIC) serves millions of families across the country, providing critical nutrition assistance and healthcare support.
                                </p>
                                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                    HANDS, a trusted platform in WIC management, has partnered with me to create Emma—an intelligent assistant designed to streamline operations, enhance efficiency, and ensure that professionals can focus on their core mission: <span className="text-black dark:text-white font-bold">supporting the health and well-being of families in need.</span>
                                </p>
                            </div>
                            <div className="flex justify-center items-start">
                                <img
                                    src="/images/hands-ai/hands-ai-cover.png"
                                    alt="Emma: Intelligent WIC Assistant"
                                    className="rounded-2xl max-w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                )}
                {activeSubsection === 1 && (
                    // Primary Roles content
                    <div className="space-y-2 max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-start">
                            {/* Left column: Team */}
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold mb-0 uppercase" style={{ color: '#0C5C8A' }}>TEAM</h2>
                                <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.12)', marginBottom: '0.25rem' }} />
                                <div>
                                    <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                        <li>1 Lead Designer (Pritish)</li>
                                        <li>2 Junior Designers</li>
                                        <li>1 Product Manager</li>
                                        <li>1 AI Researcher</li>
                                        <li>2 Backend Engineers</li>
                                        <li>2 Frontend Engineers</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Right column: My Primary Roles */}
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold mb-0 uppercase" style={{ color: '#0C5C8A' }}>MY PRIMARY ROLES</h2>
                                <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.12)', marginBottom: '0.25rem' }} />
                                <div>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                            <span className="font-semibold text-gray-900 dark:text-white">Design Leadership</span>: Took full ownership of the design process, ensuring alignment, on-time delivery, and a cohesive user experience.
                                        </li>
                                        <li className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                            <span className="font-semibold text-gray-900 dark:text-white">Human-Centered Approach</span>: Led extensive research and usability testing to understand user pain points and identify areas where the AI could deliver real value.
                                        </li>
                                        <li className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                            <span className="font-semibold text-gray-900 dark:text-white">Cross-Functional Delivery</span>: Facilitated collaboration between design, engineering, and AI teams to ensure seamless integration of AI capabilities into the platform’s core features.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeSubsection === 2 && (
                    // Project Impact content
                    <div className="max-w-5xl mx-auto overflow-y-auto max-h-[70vh] project-impact-scroll">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="text-xl font-medium mb-2" style={{ color: '#0C5C8A' }}>$250K</div>
                                <div className="text-gray-600 dark:text-gray-300 text-sm">Projected Reduction in Administrative Overhead Costs</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="text-xl font-medium mb-2" style={{ color: '#0C5C8A' }}>45%</div>
                                <div className="text-gray-600 dark:text-gray-300 text-sm">Increase in Documentation Accuracy</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="text-xl font-medium mb-2" style={{ color: '#0C5C8A' }}>40%</div>
                                <div className="text-gray-600 dark:text-gray-300 text-sm">Reduction in Manual Data Entry Time</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="text-xl font-medium mb-2" style={{ color: '#0C5C8A' }}>68%</div>
                                <div className="text-gray-600 dark:text-gray-300 text-sm">Percentage of Missing Records Flagged</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="text-xl font-medium mb-2" style={{ color: '#0C5C8A' }}>30%</div>
                                <div className="text-gray-600 dark:text-gray-300 text-sm">Faster Case Processing</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="text-xl font-medium mb-2" style={{ color: '#0C5C8A' }}>60%</div>
                                <div className="text-gray-600 dark:text-gray-300 text-sm">Reduction in Certification Errors</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="text-xl font-medium mb-2" style={{ color: '#0C5C8A' }}>20%</div>
                                <div className="text-gray-600 dark:text-gray-300 text-sm">Faster Benefit Processing</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="text-xl font-medium mb-2" style={{ color: '#0C5C8A' }}>90%</div>
                                <div className="text-gray-600 dark:text-gray-300 text-sm">Faster Report Generation</div>
                            </div>
                        </div>
                    </div>
                )}
                {activeSubsection === 3 && (
                    // Problem & Solution content
                    <div className="space-y-12">
                        <div className="text-center mb-12">
                            <h2 className="text-xl font-semibold mb-4" style={{ color: '#0C5C8A' }}>Problem & Solution</h2>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                Understanding the challenge and designing the right solution
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                                <h3 className="text-lg font-semibold mb-6" style={{ color: '#0C5C8A' }}>The Problem</h3>
                                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <p>Healthcare professionals were spending 40% of their time searching through complex medical records across multiple fragmented systems.</p>
                                    <p>This led to delayed patient care, physician burnout, and increased risk of medical errors due to incomplete information access.</p>
                                    <p>The existing systems required extensive training and were not optimized for the fast-paced clinical environment.</p>
                                </div>
                            </div>
                            <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                                <h3 className="text-lg font-semibold mb-6" style={{ color: '#0C5C8A' }}>The Solution</h3>
                                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <p>An intelligent AI assistant that understands natural language queries and instantly retrieves relevant patient information with complete HIPAA compliance.</p>
                                    <p>The system provides contextual suggestions and real-time confidence scoring, ensuring accuracy while maintaining transparency.</p>
                                    <p>Mobile-first design enables hands-free operation in busy clinical environments, with voice integration for seamless workflow integration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeSubsection === 4 && (
                    // Design Process content
                    <div className="space-y-12">
                        <div className="text-center mb-12">
                            <h2 className="text-xl font-semibold mb-4" style={{ color: '#0C5C8A' }}>Design Process</h2>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                A systematic approach to creating human-centered AI experiences
                            </p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className={`${colors.light} dark:bg-gray-800 p-6 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm text-center`}>
                                <div className={`text-3xl font-light ${colors.text} mb-3`}>1</div>
                                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Discover</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">Research and understand user needs</p>
                            </div>
                            <div className={`${colors.light} dark:bg-gray-800 p-6 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm text-center`}>
                                <div className={`text-3xl font-light ${colors.text} mb-3`}>2</div>
                                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Define</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">Synthesize insights and define problems</p>
                            </div>
                            <div className={`${colors.light} dark:bg-gray-800 p-6 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm text-center`}>
                                <div className={`text-3xl font-light ${colors.text} mb-3`}>3</div>
                                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Design</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">Create solutions and prototypes</p>
                            </div>
                            <div className={`${colors.light} dark:bg-gray-800 p-6 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm text-center`}>
                                <div className={`text-3xl font-light ${colors.text} mb-3`}>4</div>
                                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Deliver</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">Test, iterate, and implement</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Handle other standardized sections
    switch (section) {
        case "Discovery & Research":
            return (
                <div className="space-y-12 max-w-7xl mx-auto">
                    {activeSubsection === 0 && (
                        // Research Strategy
                        <div className="space-y-12">
                            <div className="text-center mb-12">
                                <h2 className="text-xl font-semibold mb-4" style={{ color: '#0C5C8A' }}>Research Strategy</h2>
                                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                    Comprehensive approach to understanding healthcare workflows and user needs
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Research Goals</h3>
                                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                        <p>Understand the complete user journey of healthcare professionals accessing patient information.</p>
                                        <p>Identify pain points and inefficiencies in current workflows.</p>
                                        <p>Discover opportunities for AI-powered improvements.</p>
                                    </div>
                                </div>
                                <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Research Questions</h3>
                                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                        <p>How do healthcare professionals currently access patient information?</p>
                                        <p>What are the most time-consuming tasks in their daily workflow?</p>
                                        <p>What would make their information access more efficient?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeSubsection === 1 && (
                        // Methodologies
                        <div className="space-y-12">
                            <div className="text-center mb-12">
                                <h2 className="text-xl font-semibold mb-4" style={{ color: '#0C5C8A' }}>Methodologies</h2>
                                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                    Multi-faceted research approach combining qualitative and quantitative methods
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Qualitative Methods</h3>
                                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                        <p><strong>Shadowing:</strong> Observed 50+ healthcare professionals during their daily workflows.</p>
                                        <p><strong>Contextual Interviews:</strong> Conducted 30+ in-depth interviews at point of use.</p>
                                        <p><strong>Time-Motion Studies:</strong> Measured task completion times and identified bottlenecks.</p>
                                    </div>
                                </div>
                                <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Quantitative Methods</h3>
                                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                        <p><strong>Usage Analytics:</strong> Analyzed existing system usage patterns and metrics.</p>
                                        <p><strong>Survey Research:</strong> Distributed comprehensive surveys to 200+ healthcare professionals.</p>
                                        <p><strong>Performance Metrics:</strong> Measured current system response times and error rates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeSubsection === 2 && (
                        // Participants
                        <div className="space-y-12">
                            <div className="text-center mb-12">
                                <h2 className="text-xl font-semibold mb-4" style={{ color: '#0C5C8A' }}>Participants</h2>
                                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                    Diverse group of healthcare professionals across multiple facilities
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm text-center`}>
                                    <div className={`text-3xl font-light ${colors.text} mb-3`}>25</div>
                                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Physicians</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">Emergency, Internal Medicine, Cardiology</p>
                                </div>
                                <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm text-center`}>
                                    <div className={`text-3xl font-light ${colors.text} mb-3`}>15</div>
                                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Nurses</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">RNs, Nurse Practitioners, Charge Nurses</p>
                                </div>
                                <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm text-center`}>
                                    <div className={`text-3xl font-light ${colors.text} mb-3`}>10</div>
                                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Medical Assistants</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">Clinical Support Staff</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeSubsection === 3 && (
                        // Research Insights
                        <div className="space-y-12">
                            <div className="text-center mb-12">
                                <h2 className="text-xl font-semibold mb-4" style={{ color: '#0C5C8A' }}>Research Insights</h2>
                                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                    Key findings that shaped the design direction
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Time Pressure</h3>
                                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                        <p>Physicians had an average of 15 minutes per patient, with 6 minutes spent on data lookup.</p>
                                        <p>73% of information lookup tasks were repetitive queries that could be automated.</p>
                                        <p>Time spent searching for information directly impacted patient care quality.</p>
                                    </div>
                                </div>
                                <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>System Fragmentation</h3>
                                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                        <p>Medical staff used 4-7 different systems daily, causing cognitive load and errors.</p>
                                        <p>67% of queries happened while moving between patients, requiring mobile-first design.</p>
                                        <p>No unified interface existed for cross-system information retrieval.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );

        case "Design Thinking":
            return (
                <div className="space-y-12 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-xl font-semibold mb-4" style={{ color: '#0C5C8A' }}>Design Thinking</h2>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Human-centered approach to solving complex healthcare challenges
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Empathy</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Deep understanding of healthcare professionals' daily challenges, time constraints, and emotional needs in high-pressure environments.
                            </p>
                        </div>
                        <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Ideation</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Collaborative brainstorming sessions with cross-functional teams to explore innovative solutions for healthcare data access.
                            </p>
                        </div>
                        <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Iteration</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Continuous refinement based on user feedback and testing, ensuring the solution evolves to meet real-world needs.
                            </p>
                        </div>
                    </div>
                </div>
            );

        case "Ideation & Prototyping":
            return (
                <div className="space-y-12 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-xl font-semibold mb-4" style={{ color: '#0C5C8A' }}>Ideation & Prototyping</h2>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Rapid prototyping and iterative design to create the perfect AI interaction
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Conversation Design</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Mapped 200+ common queries and designed natural language patterns that feel intuitive to medical professionals, ensuring the AI understands medical terminology and context.
                            </p>
                        </div>
                        <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Interface Prototyping</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Created low and high-fidelity prototypes to test interaction patterns, visual hierarchy, and user flow across different devices and screen sizes.
                            </p>
                        </div>
                    </div>
                </div>
            );

        case "Design Systems & Usability":
            return (
                <div className="space-y-12 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-xl font-semibold mb-4" style={{ color: '#0C5C8A' }}>Design Systems & Usability</h2>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Creating scalable, accessible, and intuitive design systems
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Design System</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Established comprehensive design tokens, component library, and interaction patterns that ensure consistency across all touchpoints.
                            </p>
                        </div>
                        <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Accessibility</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Ensured WCAG 2.1 AA compliance with proper contrast ratios, keyboard navigation, and screen reader support for inclusive design.
                            </p>
                        </div>
                        <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Usability</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Optimized for efficiency with clear information hierarchy, intuitive navigation, and minimal cognitive load for busy healthcare environments.
                            </p>
                        </div>
                    </div>
                </div>
            );

        case "Testing & Validation":
            return (
                <div className="space-y-12 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-xl font-semibold mb-4" style={{ color: '#0C5C8A' }}>Testing & Validation</h2>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Rigorous testing to ensure accuracy, usability, and compliance
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Usability Testing</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Conducted 40+ usability sessions with real patient data (anonymized) to refine the AI's response patterns and interface design.
                            </p>
                        </div>
                        <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Compliance Validation</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Ensured HIPAA compliance through rigorous testing of data handling, access controls, and audit trail functionality.
                            </p>
                        </div>
                    </div>
                </div>
            );

        case "Outcome & Impact":
            return (
                <div className="space-y-12 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-xl font-semibold mb-4" style={{ color: '#0C5C8A' }}>Outcome & Impact</h2>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Measurable results and lasting impact on healthcare delivery
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className={`text-4xl md:text-5xl font-light ${colors.text} mb-3`}>70%</div>
                                <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">Faster Information Retrieval</div>
                            </div>
                            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className={`text-4xl md:text-5xl font-light ${colors.text} mb-3`}>40%</div>
                                <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">Reduction in Medical Errors</div>
                            </div>
                            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className={`text-4xl md:text-5xl font-light ${colors.text} mb-3`}>98%</div>
                                <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">User Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Clinical Efficiency</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Physicians can now access patient information in seconds instead of minutes, allowing them to spend more time with patients and make better clinical decisions.
                            </p>
                        </div>
                        <div className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm`}>
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#0C5C8A' }}>Business Impact</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                ROI achieved within 6 months through improved efficiency, reduced errors, and higher patient throughput across all facilities.
                            </p>
                        </div>
                    </div>
                </div>
            );

        default:
            return (
                <div className="space-y-12 max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-4" style={{ color: '#0C5C8A' }}>
                            {section}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Content for this section is coming soon.
                        </p>
                    </div>
                </div>
            );
    }
};

const ContentBlock = ({ block, colors }) => {
    const { type, data } = block;

    switch (type) {
        case 'hero':
            return (
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900 dark:text-white leading-tight">
                        {data.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
                </div>
            );

        case 'stats':
            return (
                <div className="mb-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        {data.items.map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className={`text-4xl md:text-5xl font-light ${colors.text} mb-3`}>
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'text':
            return (
                <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-light mb-6 text-gray-900 dark:text-white">
                        {data.title}
                    </h3>
                    <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {data.paragraphs.map((paragraph, index) => (
                            <p key={index} className="max-w-4xl">{paragraph}</p>
                        ))}
                    </div>
                </div>
            );

        case 'grid':
            return (
                <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-light mb-8 text-center text-gray-900 dark:text-white">
                        {data.title}
                    </h3>
                    <div className={`grid md:grid-cols-${data.columns} gap-6`}>
                        {data.items.map((item, index) => (
                            <div key={index} className={`${colors.light} dark:bg-gray-800 p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300`}>
                                <h4 className="font-semibold mb-4 text-gray-900 dark:text-white text-xl">{item.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'quote':
            return (
                <div className="mb-12">
                    <blockquote className={`${colors.light} dark:bg-gray-800 p-10 rounded-2xl border-l-4 ${colors.primary.replace('bg-', 'border-')} text-center max-w-4xl mx-auto`}>
                        <p className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-4 italic leading-relaxed">
                            "{data.text}"
                        </p>
                        <cite className="text-gray-600 dark:text-gray-300 text-lg">— {data.author}</cite>
                    </blockquote>
                </div>
            );

        default:
            return null;
    }
};

export default CaseStudyModal;