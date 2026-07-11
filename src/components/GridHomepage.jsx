import React, { useState } from 'react';
import { Mail, Linkedin, User, Briefcase, MessageSquare, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GridHomepage = () => {
    const navigate = useNavigate();
    const [selectedSection, setSelectedSection] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [expandingCard, setExpandingCard] = useState(null);

    const handleSectionClick = (section, cardElement) => {
        const rect = cardElement.getBoundingClientRect();
        setExpandingCard({
            section,
            position: {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height
            }
        });
        setSelectedSection(section);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedSection(null);
        setExpandingCard(null);
    };

    const sections = [
        {
            id: 'about',
            title: 'About Me',
            subtitle: 'Bridging Human Needs with AI Possibilities',
            icon: User,
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            size: 'col-span-2 row-span-2', // Large square
            content: {
                type: 'about',
                data: {
                    title: 'Bridging Human Needs with AI Possibilities',
                    description: 'I began my career in enterprise design at Verizon, focusing on large-scale systems that serve complex workflows and use-cases. At the DOE, I shifted toward Enterprise AI, where the role of design expanded beyond usability to shaping how people work with intelligent systems.',
                    skills: [
                        "AI/ML User Experience Design",
                        "Enterprise Platform Design",
                        "Design Systems & Scalability",
                        "User Research & Testing",
                        "Cross-functional Collaboration"
                    ]
                }
            }
        },
        {
            id: 'work',
            title: 'My Work',
            subtitle: 'Design Journey & Case Studies',
            icon: Briefcase,
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
            size: 'col-span-3 row-span-1', // Wide rectangle
            content: {
                type: 'work',
                data: {
                    title: 'My Design Journey',
                    description: 'Five years of evolving from traditional enterprise tools to pioneering AI-powered experiences',
                    projects: [
                        {
                            id: 1,
                            title: "Transforming Healthcare with Smart Automation",
                            subtitle: "Healthcare • AI Chatbot",
                            year: "2024",
                            description: "Redefining healthcare case management by embedding an intelligent assistant that turns complex case workflows into seamless, insight-driven experiences.",
                            tags: ["Healthcare", "Conversational AI", "Case Automation"],
                            color: "bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30"
                        },
                        {
                            id: 2,
                            title: "AI for Smarter School Decisions",
                            subtitle: "Education • Data Analytics",
                            year: "2023",
                            description: "Distilling student and school data into clear, actionable insights that empower educators with real-time clarity and turn data complexity into strategic action.",
                            tags: ["AI Insights", "Data Visualization", "Education"],
                            color: "bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30"
                        },
                        {
                            id: 3,
                            title: "Simplifying Verizon's Engineering Operations",
                            subtitle: "Enterprise • Project Management",
                            year: "2021",
                            description: "Redesigned project management workflows to empower Verizon's engineering and network teams to manage complex initiatives from inception to delivery.",
                            tags: ["Project Management", "Workflow Design", "Collaboration"],
                            color: "bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30"
                        },
                        {
                            id: 4,
                            title: "Structuring Network Data for Greater Clarity and Speed",
                            subtitle: "Enterprise • Monitoring Dashboard",
                            year: "2021",
                            description: "Reengineered Verizon's diagnostic interface by flattening overloaded network hierarchies into a modular, intuitive experience.",
                            tags: ["Real-time Data", "Project Management", "Operations"],
                            color: "bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/30"
                        },
                        {
                            id: 5,
                            title: "Reimagining Network Search for Faster Field Operations",
                            subtitle: "Enterprise • Customer Experience",
                            year: "2021",
                            description: "Redesigned Verizon's internal search function into a intuitive interface that enhanced metadata transparency, and reorganized search logic.",
                            tags: ["Customer Experience", "Enterprise Search", "Service Design"],
                            color: "bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/30"
                        }
                    ]
                }
            }
        },
        {
            id: 'contact',
            title: 'Contact',
            subtitle: "Let's Shape the Future Together",
            icon: MessageSquare,
            color: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
            size: 'col-span-1 row-span-2', // Tall rectangle
            content: {
                type: 'contact',
                data: {
                    title: "Let's Shape the Future Together",
                    description: "I'm always excited to discuss new opportunities, collaborate on innovative projects, or simply chat about the future of AI and design.",
                    email: "pritish@example.com",
                    linkedinUrl: "https://linkedin.com/in/pritishpatel"
                }
            }
        },
        {
            id: 'blog',
            title: 'Blog',
            subtitle: 'Thoughts on AI & Design',
            icon: FileText,
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-900/20',
            size: 'col-span-2 row-span-1', // Medium rectangle
            content: {
                type: 'blog',
                data: {
                    title: 'Thoughts on AI & Design',
                    description: 'Exploring the intersection of artificial intelligence and human-centered design.',
                    posts: [
                        {
                            title: "The Future of AI in Enterprise Design",
                            excerpt: "How AI is transforming the way we approach enterprise software design...",
                            date: "2024"
                        },
                        {
                            title: "Designing for Human-AI Collaboration",
                            excerpt: "Key principles for creating interfaces that enhance human capabilities...",
                            date: "2024"
                        }
                    ]
                }
            }
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-6xl md:text-7xl font-extralight mb-4 text-gray-900 dark:text-white">
                        Hi, I'm Pritish
                    </h1>
                    <p className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-100 mb-4">
                        A Design Leader in Enterprise AI
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        For the past five years, I've led design teams across large-scale private and federal organizations, solving some of the most complex enterprise challenges impacting thousands of users across the United States.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-6 grid-rows-3 gap-6 h-[600px]">
                    {sections.map((section) => (
                        <GridCard
                            key={section.id}
                            section={section}
                            onClick={handleSectionClick}
                        />
                    ))}
                </div>
            </div>

            {/* Section Modal */}
            <SectionModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                section={selectedSection}
                expandingCard={expandingCard}
                navigate={navigate}
            />
        </div>
    );
};

const GridCard = ({ section, onClick }) => {
    const IconComponent = section.icon;

    const handleClick = (event) => {
        onClick(section, event.currentTarget);
    };

    return (
        <div
            className={`${section.size} ${section.bgColor} rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-gray-200 dark:border-gray-700 group`}
            onClick={handleClick}
        >
            <div className="h-full flex flex-col justify-between">
                <div>
                    <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                            <IconComponent size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                {section.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {section.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-auto">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                        <span className="text-sm font-medium">View Details</span>
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const SectionModal = ({ isOpen, onClose, section, expandingCard, navigate }) => {
    if (!isOpen || !section) return null;

    const renderContent = () => {
        switch (section.content.type) {
            case 'about':
                return <AboutModalContent data={section.content.data} />;
            case 'work':
                return <WorkModalContent data={section.content.data} navigate={navigate} />;
            case 'contact':
                return <ContactModalContent data={section.content.data} />;
            case 'blog':
                return <BlogModalContent data={section.content.data} />;
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full h-full max-w-7xl max-h-[95vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between p-6">
                        <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                                <section.icon size={24} className="text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-light text-gray-900 dark:text-white">{section.title}</h1>
                                <p className="text-gray-600 dark:text-gray-300">{section.subtitle}</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

const AboutModalContent = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 dark:text-white">
                    {data.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    {data.description}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">My Philosophy</h3>
                    <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                            I began my career in enterprise design at Verizon, focusing on large-scale systems that serve complex workflows and use-cases. At the DOE, I shifted toward Enterprise AI, where the role of design expanded beyond usability to shaping how people work with intelligent systems.
                        </p>
                        <p>
                            My belief has evolved: the best AI doesn't feel like AI — it feels human. It guides, supports, and empowers without overwhelming. Human-AI collaboration should enhance decision-making, not replace it.
                        </p>
                        <p>
                            I focus on designing AI-powered tools that are scalable, intuitive, and grounded in user research. By collaborating closely with engineers, I ensure these systems meet real needs while staying adaptable in fast-moving environments.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                    <h3 className="text-2xl font-medium mb-6 text-gray-900 dark:text-white">Core Expertise</h3>
                    <div className="space-y-4">
                        {data.skills.map((skill) => (
                            <div key={skill} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full" />
                                <span className="text-gray-700 dark:text-gray-300 font-normal">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const WorkModalContent = ({ data, navigate }) => {
    const handleProjectClick = (project) => {
        if (project.id === 1) {
            navigate('/work/hands-ai');
        } else if (project.id === 2) {
            navigate('/work/ai-school-decisions');
        }
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900 dark:text-white">
                    {data.title}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    {data.description}
                </p>
            </div>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-600" />

                {data.projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onProjectClick={handleProjectClick}
                    />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ project, index, onProjectClick }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex items-center mb-16 ${isEven ? 'flex-row-reverse' : ''}`}>
            <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12'}`}>
                <div
                    className={`${project.color} dark:bg-gray-700 dark:hover:bg-gray-600 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-white dark:border-gray-600`}
                    onClick={() => onProjectClick(project)}
                >
                    <div className={`flex items-center space-x-3 mb-4 ${isEven ? 'justify-end' : ''}`}>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{project.year}</span>
                    </div>
                    <h3 className="text-2xl font-medium mb-2 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-end' : ''}`}>
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white/80 dark:bg-gray-600/80 rounded-full text-sm text-gray-700 dark:text-gray-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 dark:bg-white rounded-full border-4 border-white dark:border-gray-800 shadow" />

            <div className="w-1/2" />
        </div>
    );
};

const ContactModalContent = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-gray-900 dark:text-white">
                {data.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                {data.description}
            </p>
            <div className="flex justify-center space-x-6">
                <a
                    href={`mailto:${data.email}`}
                    className="group flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                    <Mail size={20} />
                    <span>Get in Touch</span>
                </a>
                <a
                    href={data.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    );
};

const BlogModalContent = ({ data }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-gray-900 dark:text-white">
                    {data.title}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {data.description}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {data.posts.map((post, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{post.date}</span>
                        </div>
                        <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center space-x-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                            <span className="text-sm font-medium">Read More</span>
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridHomepage; 