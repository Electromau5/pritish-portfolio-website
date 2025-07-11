import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

const CaseStudyCarousel = ({
    caseStudyData,
    onBack,
    accentColor = "blue"
}) => {
    const [activeSection, setActiveSection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const { title, subtitle, sections } = caseStudyData;

    const colorClasses = {
        blue: {
            primary: "bg-blue-600",
            light: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-200",
            hover: "hover:bg-blue-600"
        },
        green: {
            primary: "bg-green-600",
            light: "bg-green-50",
            text: "text-green-600",
            border: "border-green-200",
            hover: "hover:bg-green-600"
        },
        purple: {
            primary: "bg-purple-600",
            light: "bg-purple-50",
            text: "text-purple-600",
            border: "border-purple-200",
            hover: "hover:bg-purple-600"
        }
    };

    const colors = colorClasses[accentColor];

    const navigateToSection = (index) => {
        if (index === activeSection || isAnimating) return;

        setIsAnimating(true);
        setActiveSection(index);

        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    const nextSection = () => {
        const next = activeSection < sections.length - 1 ? activeSection + 1 : 0;
        navigateToSection(next);
    };

    const prevSection = () => {
        const prev = activeSection > 0 ? activeSection - 1 : sections.length - 1;
        navigateToSection(prev);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') prevSection();
            if (e.key === 'ArrowRight') nextSection();
            if (e.key === 'Escape' && onBack) onBack();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [activeSection]);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            {onBack && (
                                <button
                                    onClick={onBack}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <ArrowLeft size={20} />
                                    <span>Back to Portfolio</span>
                                </button>
                            )}
                        </div>
                        <div className="text-sm text-gray-500">
                            {activeSection + 1} of {sections.length}
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation Menu */}
            <nav className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex space-x-1 overflow-x-auto">
                        {sections.map((section, index) => (
                            <button
                                key={index}
                                onClick={() => navigateToSection(index)}
                                className={`px-6 py-4 whitespace-nowrap text-sm font-medium transition-all duration-200 border-b-2 ${activeSection === index
                                    ? `${colors.text} ${colors.primary.replace('bg-', 'border-')} bg-white`
                                    : 'text-gray-600 border-transparent hover:text-gray-900 hover:bg-white/50'
                                    }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className={`${colors.light} py-16`}>
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-extralight mb-4 text-gray-900">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${activeSection * 100}%)`,
                        width: `${sections.length * 100}%`
                    }}
                >
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0"
                            style={{ width: `${100 / sections.length}%` }}
                        >
                            <SectionContent section={section} colors={colors} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200">
                <button
                    onClick={prevSection}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    disabled={isAnimating}
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex space-x-2">
                    {sections.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => navigateToSection(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${activeSection === index
                                ? colors.primary
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSection}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    disabled={isAnimating}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

const SectionContent = ({ section, colors }) => {
    const { content } = section;

    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                {content.map((block, index) => (
                    <ContentBlock key={index} block={block} colors={colors} />
                ))}
            </div>
        </div>
    );
};

const ContentBlock = ({ block, colors }) => {
    const { type, data } = block;

    switch (type) {
        case 'hero':
            return (
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900">
                        {data.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
                </div>
            );

        case 'stats':
            return (
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {data.items.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className={`text-4xl md:text-5xl font-light ${colors.text} mb-2`}>
                                {stat.value}
                            </div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            );

        case 'image':
            return (
                <div className="mb-16">
                    <img
                        src={data.src}
                        alt={data.alt}
                        className="w-full rounded-2xl shadow-lg"
                    />
                    {data.caption && (
                        <p className="text-center text-gray-500 mt-4 italic">{data.caption}</p>
                    )}
                </div>
            );

        case 'text':
            return (
                <div className="mb-16">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-light mb-6 text-gray-900">
                            {data.title}
                        </h3>
                        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                            {data.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            );

        case 'grid':
            return (
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-light mb-8 text-center text-gray-900">
                        {data.title}
                    </h3>
                    <div className={`grid md:grid-cols-${data.columns} gap-8`}>
                        {data.items.map((item, index) => (
                            <div key={index} className={`${colors.light} p-8 rounded-2xl border ${colors.border}`}>
                                <h4 className="text-xl font-medium mb-4 text-gray-900">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'quote':
            return (
                <div className="mb-16">
                    <blockquote className={`${colors.light} p-12 rounded-2xl border-l-4 ${colors.primary.replace('bg-', 'border-')} text-center`}>
                        <p className="text-2xl md:text-3xl font-light text-gray-900 mb-4 italic">
                            "{data.text}"
                        </p>
                        <cite className="text-gray-600">— {data.author}</cite>
                    </blockquote>
                </div>
            );

        default:
            return null;
    }
};

export default CaseStudyCarousel;