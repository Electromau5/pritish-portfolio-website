import React, { useState } from 'react';
import CaseStudyModal from './CaseStudyModal';
import { handsAIData } from '../data/handsai.data';

const DesignJourney = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const testImage = "/images/hands-ai/hands-ai-cover.png";

    const projects = [
        {
            id: 1,
            title: "Transforming Healthcare with Smart Automation",
            subtitle: "Healthcare • AI Chatbot",
            year: "2024",
            description: "Redefining healthcare case management by embedding an intelligent assistant that turns complex case workflows into seamless, insight-driven experiences.",
            tags: ["Healthcare", "Conversational AI", "Case Automation"],
            image: "/images/hands-ai/hands-ai-cover.png",
            hasCaseStudy: true
        },
        {
            id: 2,
            title: "AI for Smarter School Decisions",
            subtitle: "Education • Data Analytics",
            year: "2023",
            description: "Distilling student and school data into clear, actionable insights that empower educators with real-time clarity and turn data complexity into strategic action.",
            tags: ["AI Insights", "Data Visualization", "Education"],
            image: testImage
        },
        {
            id: 3,
            title: "Simplifying Verizon's Engineering Operations",
            subtitle: "Enterprise • Project Management",
            year: "2021",
            description: "Redesigned project management workflows to empower Verizon's engineering and network teams to manage complex initiatives from inception to delivery.",
            tags: ["Project Management", "Workflow Design", "Collaboration"],
            image: testImage
        },
        {
            id: 4,
            title: "Structuring Network Data for Greater Clarity and Speed",
            subtitle: "Enterprise • Monitoring Dashboard",
            year: "2021",
            description: "Reengineered Verizon’s diagnostic interface by flattening overloaded network hierarchies into a modular, intuitive experience.",
            tags: ["Real-time Data", "Operations", "Data Visibility"],
            image: testImage
        },
        {
            id: 5,
            title: "Reimagining Network Search for Faster Field Operations",
            subtitle: "Enterprise • Customer Experience",
            year: "2021",
            description: "Redesigned Verizon's internal search function into an intuitive interface that enhanced metadata transparency and reorganized search logic.",
            tags: ["Customer Experience", "Enterprise Search", "Service Design"],
            image: testImage
        }
    ];

    const handleProjectClick = (project) => {
        if (project.hasCaseStudy && project.id === 1) {
            setSelectedProject(project);
            setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id="section-1" className="py-24 bg-black text-white border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 space-y-12">
                <div className="space-y-4">
                    <div className="section-divider" />
                    <p className="section-eyebrow text-gray-500">Featured Work</p>
                    <h2 className="section-title text-white">Featured Projects</h2>
                </div>
                <div className="space-y-16">
                    {projects.map((project) => (
                        <article key={project.id} className="featured-project">
                            <div className="featured-project__media">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="featured-project__body">
                                <p className="featured-project__eyebrow">{project.subtitle} • {project.year}</p>
                                <h3 className="featured-project__title">{project.title}</h3>
                                <p className="featured-project__description">{project.description}</p>
                                <div className="featured-project__tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="featured-project__tag">{tag}</span>
                                    ))}
                                </div>
                                {project.hasCaseStudy && (
                                    <button className="about-cta mt-8" onClick={() => handleProjectClick(project)}>
                                        View Case Study
                                    </button>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <CaseStudyModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                caseStudyData={selectedProject?.id === 1 ? handsAIData : null}
                accentColor="blue"
            />
        </section>
    );
};

export default DesignJourney;