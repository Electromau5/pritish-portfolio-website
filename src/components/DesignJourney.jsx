import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';
import { handsAIData } from '../data/handsai.data';

const DesignJourney = ({ scrollY }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [expandingCard, setExpandingCard] = useState(null);

    const handleProjectClick = (project, cardElement) => {
        // For now, only the healthcare project has data
        if (project.id === 1) {
            const rect = cardElement.getBoundingClientRect();
            setExpandingCard({
                project,
                position: {
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height
                }
            });
            setSelectedProject(project);
            setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
        setExpandingCard(null);
    };

    const getCaseStudyData = (projectId) => {
        switch (projectId) {
            case 1:
                return handsAIData;
            default:
                return null;
        }
    };

    const projects = [
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
            description: "Reengineered Verizon’s diagnostic interface by flattening overloaded network hierarchies into a modular, intuitive experience. ",
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
    ];

    return (
        <section id="section-1" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900 dark:text-white">My Design Journey</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Five years of evolving from traditional enterprise tools to pioneering AI-powered experiences
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-600" />

                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            scrollY={scrollY}
                            onProjectClick={handleProjectClick}
                        />
                    ))}
                </div>
            </div>

            {/* Case Study Modal */}
            <CaseStudyModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                caseStudyData={getCaseStudyData(selectedProject?.id)}
                accentColor="blue"
                expandingCard={expandingCard}
            />
        </section>
    );
};

const ProjectCard = ({ project, index, scrollY, onProjectClick }) => {
    const isEven = index % 2 === 0;

    const handleClick = (event) => {
        if (onProjectClick) {
            onProjectClick(project, event.currentTarget);
        }
    };

    return (
        <div className={`flex items-center mb-16 ${isEven ? 'flex-row-reverse' : ''}`}>
            <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12'}`}>
                <div
                    className={`${project.color} dark:bg-gray-700 dark:hover:bg-gray-600 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-white dark:border-gray-600`}
                    style={{
                        transform: `translateY(${Math.max(0, scrollY - 800 - index * 200) * -0.1}px)`
                    }}
                    onClick={handleClick}
                >
                    <div className={`flex items-center space-x-3 mb-4 ${isEven ? 'justify-end' : ''}`}>
                        <span className="text-3xl">{project.image}</span>
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
                    <div className={`mt-6 flex items-center space-x-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors ${isEven ? 'justify-end' : ''}`}>
                        <span className="text-sm font-medium">View Case Study</span>
                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 dark:bg-white rounded-full border-4 border-white dark:border-gray-800 shadow" />

            <div className="w-1/2" />
        </div>
    );
};

export default DesignJourney;