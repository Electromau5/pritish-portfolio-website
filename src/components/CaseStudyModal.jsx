import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import AnimatedCloseButton from './AnimatedCloseButton';

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
        "Problem & Solution",
        "Project Impact",
        "Design Process"
    ];

    // Subsection arrays for each primary section
    const sectionSubsections = {
        "Project Overview": [
            "Project Overview",
            "Primary Roles",
            "Problem & Solution",
            "Project Impact",
            "Design Process"
        ],
        "Discovery & Research": [
            "Research Strategy",
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
                    animation: isOpen ? 'modalSlideIn 0.8s ease-out' : 'modalSlideOut 0.6s ease-out'
                }}
            >
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between p-6">
                        <div className="flex-1 min-w-0">
                            <h1 className="text-2xl font-light text-gray-900 dark:text-white truncate">{title}</h1>
                            <p className="text-gray-600 dark:text-gray-300 mt-1 truncate">{subtitle}</p>
                        </div>
                        <div className="flex items-center space-x-4 flex-shrink-0">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {activeSection + 1} of {standardizedSections?.length}
                            </span>
                            <AnimatedCloseButton onClick={onClose} />
                        </div>
                    </div>

                    {/* Section Navigation */}
                    <div className="px-6 pb-4 overflow-x-hidden">
                        <div className="flex items-center space-x-2">
                            {menuStartIndex > 0 && (
                                <button
                                    onClick={prevMenuItems}
                                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex-shrink-0"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                            )}
                            <div className="flex-1 flex space-x-1 justify-center overflow-x-auto scrollbar-hide">
                                {standardizedSections?.slice(menuStartIndex, menuStartIndex + visibleMenuItems).map((section, index) => (
                                    <button
                                        key={menuStartIndex + index}
                                        onClick={() => navigateToSection(menuStartIndex + index)}
                                        className={`px-4 py-2 whitespace-nowrap text-sm font-medium transition-all duration-200 rounded-lg flex-shrink-0 ${activeSection === menuStartIndex + index
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
                                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex-shrink-0"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            )}
                        </div>

                        {/* Internal Navigation for all sections */}
                        {currentSubsections.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 overflow-x-hidden">
                                <div className="flex items-center space-x-2">
                                    <div className="flex-1 flex space-x-1 justify-center overflow-x-auto scrollbar-hide">
                                        {currentSubsections.map((subsection, index) => (
                                            <button
                                                key={index}
                                                onClick={() => navigateToSubsection(index)}
                                                className={`px-3 py-1.5 whitespace-nowrap text-xs font-medium transition-all duration-200 rounded-md flex-shrink-0 ${activeSubsection === index
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
                <div className="flex-1 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-200px)]">
                    <div className="relative w-full">
                        <div className="px-6 md:px-12 pt-8 pb-16 overflow-y-auto section-scroll">
                            <SectionContent section={standardizedSections[activeSection]} colors={colors} activeSubsection={activeSubsection} />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-6 right-6 z-[9999] bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-lg p-1">
                    <ThemeToggle />
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
            transform: translate(-50%, 100vh);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
        
        @keyframes modalSlideOut {
          from {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          to {
            opacity: 0;
            transform: translate(-50%, 100vh);
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

/* Hide scrollbar for navigation */
.scrollbar-hide {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}

/* Custom scrollbar for sections */
.section-scroll::-webkit-scrollbar {
  width: 8px;
}
.section-scroll::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.1);
  border-radius: 4px;
}
.section-scroll::-webkit-scrollbar-thumb {
  background: rgba(12,92,138,0.6);
  border-radius: 4px;
}
.section-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(12,92,138,0.8);
}
.section-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(12,92,138,0.6) rgba(0,0,0,0.1);
}
`}</style>
        </div>
    );
};

const SectionContent = ({ section, colors, activeSubsection = 0 }) => {
    // For Project Overview section, show different content based on activeSubsection
    if (section === "Project Overview") {
        return (
            <div className="space-y-12 max-w-7xl mx-auto w-full">
                {activeSubsection === 0 && (
                    // Project Overview content
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto pt-2 pb-8 px-4 md:px-8">
                            <div className="space-y-4 pt-2">
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    The Special Supplemental Nutrition Program for Women, Infants, and Children (WIC) is a federally funded public health initiative that supports millions of low-income families by providing access to nutritious foods, healthcare referrals, and nutrition education.
                                </p>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-8 mb-4">
                                    Who is Emma?
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    HANDS, a trusted platform in WIC management, has partnered with me to create Emma—an intelligent assistant designed to streamline operations, enhance efficiency, and ensure that professionals can focus on their core mission: <span className="text-black dark:text-white font-bold">supporting the health and well-being of families in need.</span>
                                </p>
                            </div>
                            <div className="flex justify-center items-start">
                                <img
                                    src="/images/hands-ai/hands-ai-cover.png"
                                    alt="Emma: Intelligent WIC Assistant"
                                    className="rounded-2xl max-w-full h-auto w-full md:w-auto md:max-w-lg lg:max-w-xl"
                                />
                            </div>
                        </div>
                    </div>
                )}
                {activeSubsection === 1 && (
                    // Primary Roles content - Minimal Clean Design
                    <div className="max-w-6xl mx-auto space-y-8 lg:space-y-12 px-4 py-4">
                        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
                            {/* Left column: Team */}
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h2 className="text-xl lg:text-2xl font-light text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-2">Team</h2>
                                    <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto"></div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <img
                                            src="/images/hands-ai/lead-designer.svg"
                                            alt="Lead Designer"
                                            className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full mx-auto mb-2 object-cover"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                imageRendering: '-webkit-optimize-contrast',
                                                imageRendering: 'optimizeQuality'
                                            }}
                                        />
                                        <div className="text-base md:text-lg lg:text-xl font-extralight text-gray-900 dark:text-white mb-1">1</div>
                                        <div className="text-xs font-medium text-gray-900 dark:text-white">Lead Designer</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">(Pritish)</div>
                                    </div>
                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <img
                                            src="/images/hands-ai/junior-designer.svg"
                                            alt="Junior Designer"
                                            className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full mx-auto mb-2 object-cover"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                imageRendering: '-webkit-optimize-contrast',
                                                imageRendering: 'optimizeQuality'
                                            }}
                                        />
                                        <div className="text-base md:text-lg lg:text-xl font-extralight text-gray-900 dark:text-white mb-1">2</div>
                                        <div className="text-xs font-medium text-gray-900 dark:text-white">Junior Designers</div>
                                    </div>
                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <img
                                            src="/images/hands-ai/product-manager.svg"
                                            alt="Product Manager"
                                            className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full mx-auto mb-2 object-cover"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                imageRendering: '-webkit-optimize-contrast',
                                                imageRendering: 'optimizeQuality'
                                            }}
                                        />
                                        <div className="text-base md:text-lg lg:text-xl font-extralight text-gray-900 dark:text-white mb-1">1</div>
                                        <div className="text-xs font-medium text-gray-900 dark:text-white">Product Manager</div>
                                    </div>
                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <img
                                            src="/images/hands-ai/AI Researcher.svg"
                                            alt="AI Researcher"
                                            className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full mx-auto mb-2 object-cover"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                imageRendering: '-webkit-optimize-contrast',
                                                imageRendering: 'optimizeQuality'
                                            }}
                                        />
                                        <div className="text-base md:text-lg lg:text-xl font-extralight text-gray-900 dark:text-white mb-1">1</div>
                                        <div className="text-xs font-medium text-gray-900 dark:text-white">AI Researcher</div>
                                    </div>
                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <img
                                            src="/images/hands-ai/Backend Engineer.svg"
                                            alt="Backend Engineer"
                                            className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full mx-auto mb-2 object-cover"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                imageRendering: '-webkit-optimize-contrast',
                                                imageRendering: 'optimizeQuality'
                                            }}
                                        />
                                        <div className="text-base md:text-lg lg:text-xl font-extralight text-gray-900 dark:text-white mb-1">2</div>
                                        <div className="text-xs font-medium text-gray-900 dark:text-white">Backend Engineers</div>
                                    </div>
                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <img
                                            src="/images/hands-ai/Frontend Engineer.svg"
                                            alt="Frontend Engineer"
                                            className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full mx-auto mb-2 object-cover"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                imageRendering: '-webkit-optimize-contrast',
                                                imageRendering: 'optimizeQuality'
                                            }}
                                        />
                                        <div className="text-base md:text-lg lg:text-xl font-extralight text-gray-900 dark:text-white mb-1">2</div>
                                        <div className="text-xs font-medium text-gray-900 dark:text-white">Frontend Engineers</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right column: My Primary Roles */}
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h2 className="text-xl lg:text-2xl font-light text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-2">My Primary Roles</h2>
                                    <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto"></div>
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    <div className="text-center py-4 md:py-6 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-colors duration-300">
                                        <h3 className="text-sm md:text-base lg:text-lg font-medium text-gray-900 dark:text-white mb-2 md:mb-3">Design Leadership</h3>
                                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto px-2">
                                            Took full ownership of the design process, ensuring alignment, on-time delivery, and a cohesive user experience.
                                        </p>
                                    </div>

                                    <div className="text-center py-4 md:py-6 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-colors duration-300">
                                        <h3 className="text-sm md:text-base lg:text-lg font-medium text-gray-900 dark:text-white mb-2 md:mb-3">Human-Centered Approach</h3>
                                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto px-2">
                                            Led extensive research and usability testing to understand user pain points and identify areas where the AI could deliver real value.
                                        </p>
                                    </div>

                                    <div className="text-center py-4 md:py-6 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-colors duration-300">
                                        <h3 className="text-sm md:text-base lg:text-lg font-medium text-gray-900 dark:text-white mb-2 md:mb-3">Cross-Functional Delivery</h3>
                                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto px-2">
                                            Facilitated collaboration between design, engineering, and AI teams to ensure seamless integration of AI capabilities into the platform's core features.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSubsection === 2 && (
                    // Problem & Solution content
                    <div className="space-y-8 lg:space-y-12 px-4 py-4">
                        <div className="text-center mb-8 lg:mb-12">
                            <h2 className="text-xl lg:text-2xl font-light text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-4">Problem & Solution</h2>
                            <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto"></div>
                        </div>
                        {/* 2x2 Grid for Problem & Solution */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-6 lg:gap-8 -mt-4">
                            {/* Column 1, Row 1: The Problem */}
                            <div className={`row-start-1 col-start-1 p-6 md:p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm flex flex-col justify-center`}>
                                <h3 className="text-lg font-semibold mb-4 md:mb-6 text-white">
                                    The Problem
                                </h3>
                                <div className="space-y-3 md:space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <p className="text-sm">Healthcare professionals were spending 40% of their time searching through complex medical records across multiple fragmented systems.</p>
                                    <p className="text-sm">This led to delayed patient care, physician burnout, and increased risk of medical errors due to incomplete information access.</p>
                                    <p className="text-sm">The existing systems required extensive training and were not optimized for the fast-paced clinical environment.</p>
                                </div>
                            </div>
                            {/* Column 1, Row 2: The Solution */}
                            <div className={`row-start-2 col-start-1 p-6 md:p-8 rounded-2xl border ${colors.border} dark:border-gray-700 shadow-sm flex flex-col justify-center`}>
                                <h3 className="text-lg font-semibold mb-4 md:mb-6 text-white">
                                    The Solution
                                </h3>
                                <div className="space-y-3 md:space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <p className="text-sm">An intelligent AI assistant that understands natural language queries and instantly retrieves relevant patient information with complete HIPAA compliance.</p>
                                    <p className="text-sm">The system provides contextual suggestions and real-time confidence scoring, ensuring accuracy while maintaining transparency.</p>
                                    <p className="text-sm">Mobile-first design enables hands-free operation in busy clinical environments, with voice integration for seamless workflow integration.</p>
                                </div>
                            </div>
                            {/* Column 2, Row 1: problem.gif image */}
                            <div className="row-start-1 col-start-2 flex items-center justify-center rounded-2xl overflow-hidden bg-black">
                                <img
                                    src="/images/hands-ai/Problem Solution/problem.gif"
                                    alt="Problem demo"
                                    className="w-full h-full max-h-80 rounded-2xl object-contain bg-black"
                                    style={{ imageRendering: 'crisp-edges', imageRendering: '-webkit-optimize-contrast', imageRendering: 'optimizeQuality' }}
                                />
                            </div>
                            {/* Column 2, Row 2: solution.gif image */}
                            <div className="row-start-2 col-start-2 flex items-center justify-center rounded-2xl overflow-hidden bg-black">
                                <img
                                    src="/images/hands-ai/Problem Solution/solution.gif"
                                    alt="Solution demo"
                                    className="w-full h-full max-h-80 rounded-2xl object-contain bg-black"
                                    style={{ imageRendering: 'crisp-edges', imageRendering: '-webkit-optimize-contrast', imageRendering: 'optimizeQuality' }}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {activeSubsection === 3 && (
                    // Project Impact content - Minimal Clean Design
                    <div className="max-w-6xl mx-auto space-y-8 lg:space-y-12 px-4 py-4">
                        <div className="text-center mb-8 lg:mb-12">
                            <h2 className="text-xl lg:text-2xl font-light text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-4">Project Impact</h2>
                            <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto"></div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                            {/* Left column: Product Objectives */}
                            <div>
                                <h3 className="text-lg lg:text-xl font-medium text-gray-900 dark:text-white mb-6 lg:mb-8 text-center">Product Objectives</h3>
                                <div className="space-y-3 md:space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 dark:text-blue-400 font-medium mt-1">•</span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Minimize administrative burden through smart automation</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 dark:text-blue-400 font-medium mt-1">•</span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Improve data accuracy and compliance</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 dark:text-blue-400 font-medium mt-1">•</span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Support faster, clearer decision-making</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 dark:text-blue-400 font-medium mt-1">•</span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Scale across multiple states with modular architecture</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-blue-600 dark:text-blue-400 font-medium mt-1">•</span>
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Prioritize human impact by reducing burnout and focusing on care</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right column: Impact Metrics */}
                            <div>
                                <h3 className="text-lg lg:text-xl font-medium text-gray-900 dark:text-white mb-6 lg:mb-8 text-center">Impact Metrics</h3>
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <div className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-blue-600 dark:text-blue-400">$250K</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-2">Projected Reduction in Administrative Overhead Costs</div>
                                    </div>

                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <div className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-blue-600 dark:text-blue-400">45%</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-2">Increase in Documentation Accuracy</div>
                                    </div>

                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <div className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-blue-600 dark:text-blue-400">40%</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-2">Reduction in Manual Data Entry Time</div>
                                    </div>

                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <div className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-blue-600 dark:text-blue-400">68%</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-2">Percentage of Missing Records Flagged</div>
                                    </div>

                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <div className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-blue-600 dark:text-blue-400">30%</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-2">Faster Case Processing</div>
                                    </div>

                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <div className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-blue-600 dark:text-blue-400">60%</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-2">Reduction in Certification Errors</div>
                                    </div>

                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <div className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-blue-600 dark:text-blue-400">20%</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-2">Faster Benefit Processing</div>
                                    </div>

                                    <div className="text-center py-3 md:py-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-sm">
                                        <div className="text-lg md:text-xl lg:text-2xl font-medium mb-2 text-blue-600 dark:text-blue-400">90%</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-2">Faster Report Generation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeSubsection === 4 && (
                    // Design Process content
                    <div className="space-y-8 lg:space-y-12 px-4 py-4">
                        <div className="text-center mb-8 lg:mb-12">
                            <h2 className="text-xl lg:text-2xl font-light text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-4">Design Process</h2>
                            <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto"></div>
                        </div>
                        
                        <div className="max-w-7xl mx-auto">
                            {/* Top Row - Steps 1-3 */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {/* Step 1: Initial Ideation Workshop */}
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                                        <img
                                            src="/images/hands-ai/Design Process/Ideation.svg"
                                            alt="Initial Ideation Workshop"
                                            className="w-12 h-12"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                imageRendering: '-webkit-optimize-contrast',
                                                imageRendering: 'optimizeQuality'
                                            }}
                                        />
                                    </div>
                                    <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">1. Initial Ideation Workshop</h3>
                                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-48">Gather key stakeholders to align on goals and identify opportunities.</p>
                                </div>

                                {/* Step 2: Research & AI Feasibility */}
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center">
                                        <img
                                            src="/images/hands-ai/Design Process/Research.svg"
                                            alt="Research & AI Feasibility"
                                            className="w-12 h-12"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                imageRendering: '-webkit-optimize-contrast',
                                                imageRendering: 'optimizeQuality'
                                            }}
                                        />
                                    </div>
                                    <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">2. Research & AI Feasibility</h3>
                                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-48">Validate assumptions with user research and data analysis</p>
                                </div>

                                {/* Step 3: Concept Development */}
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center">
                                        <img
                                            src="/images/hands-ai/Design Process/Concept.svg"
                                            alt="Concept Development"
                                            className="w-12 h-12"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                imageRendering: '-webkit-optimize-contrast',
                                                imageRendering: 'optimizeQuality'
                                            }}
                                        />
                                    </div>
                                    <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">3. Concept Development</h3>
                                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-48">Define AI features, build prototypes, and test user-AI interactions.</p>
                                </div>
                            </div>

                            {/* Bottom Row - Steps 4-6 */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Step 4: Validation & Feedback Loops */}
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center">
                                        <img
                                            src="/images/hands-ai/Design Process/Validation.svg"
                                            alt="Validation & Feedback Loops"
                                            className="w-12 h-12"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                imageRendering: '-webkit-optimize-contrast',
                                                imageRendering: 'optimizeQuality'
                                            }}
                                        />
                                    </div>
                                    <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">4. Validation & Feedback Loops</h3>
                                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-48">Run usability tests and to prevent bias and track design iterations.</p>
                                </div>

                                {/* Step 5: Implementation & Design System */}
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-24 h-24 bg-yellow-600 rounded-full flex items-center justify-center">
                                        <img
                                            src="/images/hands-ai/Design Process/Implementation.svg"
                                            alt="Implementation & Design System"
                                            className="w-12 h-12"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                imageRendering: '-webkit-optimize-contrast',
                                                imageRendering: 'optimizeQuality'
                                            }}
                                        />
                                    </div>
                                    <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">5. Implementation & Design System</h3>
                                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-48">Ship designs, and integrate AI guidelines into the design system.</p>
                                </div>

                                {/* Step 6: Post Launch Evaluation */}
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                                        <img
                                            src="/images/hands-ai/Design Process/Post-Launch.svg"
                                            alt="Post Launch Evaluation"
                                            className="w-12 h-12"
                                            style={{ 
                                                imageRendering: 'crisp-edges',
                                                imageRendering: '-webkit-optimize-contrast',
                                                imageRendering: 'optimizeQuality'
                                            }}
                                        />
                                    </div>
                                    <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">6. Post Launch Evaluation</h3>
                                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-48">Measure adoption, analyze user behavior, and fine-tune models.</p>
                                </div>
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
            if (activeSubsection === 0) {
                // Research Strategy content
                return (
                    <div className="space-y-12 max-w-7xl mx-auto w-full">
                        <div className="text-center mb-12">
                        <h2 className="text-xl lg:text-2xl font-light text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-4">Research Strategy</h2>
                        <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto mb-8"></div>
                
                        </div>

                        {/* The Challenge That Started It All */}
                        <div className="mb-16">
                            <div className="grid lg:grid-cols-2 gap-8 items-start">
                                {/* Left column: The Challenge That Started It All */}
                                <div>
                                    <h3 className="text-lg lg:text-xl font-medium text-gray-900 dark:text-white mb-6"> Uncovering the human story behind WIC operations</h3>
                                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                            To design a meaningful AI solution for WIC, we knew we couldn't just analyze workflows—we had to understand the people behind them. So we began our research by embedding ourselves in the clinics, and observing day-to-day operations.
                                      </p>      
                                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                            We weren't just studying a system; we were stepping into the lived experiences of professionals who carry the responsibility of supporting vulnerable families every day.
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            Our goal was to uncover where their pain truly lived—whether it was the cognitive load of managing complex cases, the friction in handoffs between roles, or the emotional toll of navigating broken tools.
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Right column: User Research Image */}
                                <div className="flex justify-center items-start">
                                    <img
                                        src="/images/hands-ai/User Research/user-research.png"
                                        alt="User Research"
                                        className="w-full max-w-md lg:max-w-lg rounded-2xl object-cover"
                                        style={{ 
                                            imageRendering: 'crisp-edges',
                                            imageRendering: '-webkit-optimize-contrast',
                                            imageRendering: 'optimizeQuality'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Research Methods Visual */}
                        <div className="mb-16">
                            <h3 className="text-lg lg:text-xl font-medium text-gray-900 dark:text-white mb-8 text-center">Our Multi-Method Approach</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">12-15</span>
                                    </div>
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">In-Depth Interviews</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Conversations about purpose and frustration</p>
                                </div>
                                
                                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">5-7</span>
                                    </div>
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Contextual Observations</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Gap between policy and practice</p>
                                </div>
                                
                                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">4</span>
                                    </div>
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Diary Studies</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">5-day emotional labor insights</p>
                                </div>
                                
                                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">✓</span>
                                    </div>
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Task Flow Mapping</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Visualizing invisible labor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else if (activeSubsection === 1) {
                // Research Insights content
                return (
                    <div className="space-y-12 max-w-7xl mx-auto w-full">
                        <div className="text-center mb-12">
                            <h2 className="text-xl lg:text-2xl font-light text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-4">Research Insights</h2>
                            <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto mb-8"></div>
                        </div>

                        {/* Following Sarah Through Her Day */}
                        <div className="mb-16">
                            <h3 className="text-lg lg:text-xl font-medium text-gray-900 dark:text-white mb-6">Key Findings</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-600">
                                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                                        "I spend more time fixing errors and hunting for information than actually helping families. It feels like I'm constantly juggling outdated records, missing data, and scattered documents across different places. It's exhausting and really slows me down."
                                    </p>
                                    <div>
                                        <cite className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Maria Lopez</cite>
                                        <div className="text-gray-500 dark:text-gray-400 text-xs">Senior Caseworker at Phoenix WIC Clinic</div>
                                    </div>
                                </div>

                                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-l-4 border-green-600">
                                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                                        "I can't tell you how many times I've missed a key health indicator because the data is buried or incomplete. It's almost impossible to get a full picture of a client's health at once. Every minute spent digging through records means a missed opportunity for early intervention."
                                    </p>
                                    <div>
                                        <cite className="text-green-600 dark:text-green-400 font-semibold text-sm">Dr. Kevin Singh</cite>
                                        <div className="text-gray-500 dark:text-gray-400 text-xs">Nutritionist at Denver County Health</div>
                                    </div>
                                </div>

                                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-600">
                                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                                        "Our no-show rate is out of control, and it's because our scheduling system is so clunky. Families miss appointments because reminders don't go out on time, or they can't get the slots they need. It really cuts into how many people we can help each day."
                                    </p>
                                    <div>
                                        <cite className="text-purple-600 dark:text-purple-400 font-semibold text-sm">Janet White</cite>
                                        <div className="text-gray-500 dark:text-gray-400 text-xs">Clinic Manager at Tucson WIC Center</div>
                                    </div>
                                </div>

                                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border-l-4 border-orange-600">
                                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                                        "It takes forever to find the right client file, and half the time, I'm not even sure if it's accurate. Switching between different modules just to piece together basic information is frustrating and makes us look disorganized to the families we serve."
                                    </p>
                                    <div>
                                        <cite className="text-orange-600 dark:text-orange-400 font-semibold text-sm">Derek Thompson</cite>
                                        <div className="text-gray-500 dark:text-gray-400 text-xs">Program Supervisor at Maricopa County Public Health</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The Stories That Emerged */}
                        <div className="mb-16">
                            <h3 className="text-lg lg:text-xl font-medium text-gray-900 dark:text-white mb-8">The Primary User Needs</h3>
                            
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl">
                                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-3">Faster Prioritization</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Ensure faster and more accurate access to clients who require high-priority assistance 
                                    </p>
                                </div>
                                
                                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 p-6 rounded-xl">
                                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-3">Efficient Decision Making</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Allow professionals to manage data effortlessly and make informed decisions with confidence
                                    </p>
                                </div>
                                
                                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl">
                                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3">Maximize Operational Efficiency</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Enhance operational efficiency including tracking inconsistent no-shows for critical appointments
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Insights */}
                 
                    </div>
                );
            }
            break;

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
            if (activeSubsection === 1) {
                // Prototypes subsection with Figma embed
                return (
                    <div className="space-y-8 max-w-7xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-xl lg:text-2xl font-light text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-4">Prototypes</h2>
                            <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto mb-8"></div>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                Explore the interactive Figma prototype below:
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <iframe
                                title="Figma Prototype"
                                width="100%"
                                height="600"
                                style={{ border: '1px solid #ccc', borderRadius: '1rem' }}
                                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/3VHOm6u72jABRY24G3HLdJ/HANDS-AI?node-id=6466-21219&t=LYxvw2mxMjwmq44m-1"
                                allowFullScreen
                            />
                        </div>
                    </div>
                );
            }
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