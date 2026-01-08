import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../services/db';

const DesignJourney = () => {
    const navigate = useNavigate();
    const testImage = "/images/hands-ai/hands-ai-cover.png";
    const [publishedCaseStudies, setPublishedCaseStudies] = useState([]);

    // Fallback projects for those without CMS case studies yet
    const fallbackProjects = [
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
            description: "Reengineered Verizon's diagnostic interface by flattening overloaded network hierarchies into a modular, intuitive experience.",
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

    useEffect(() => {
        const fetchPublishedCaseStudies = async () => {
            try {
                const published = await db.caseStudies
                    .where('status')
                    .equals('published')
                    .toArray();
                setPublishedCaseStudies(published);
            } catch (error) {
                console.error('Error fetching published case studies:', error);
            }
        };
        fetchPublishedCaseStudies();
    }, []);

    // Convert CMS case studies to project format
    const cmsProjects = publishedCaseStudies.map((cs, index) => ({
        id: `cms-${cs.id}`,
        title: cs.title,
        subtitle: cs.subtitle || 'Case Study',
        year: new Date(cs.createdAt).getFullYear().toString(),
        description: cs.sections?.[0]?.content?.[0]?.data?.description || cs.subtitle || '',
        tags: cs.tags || [],
        image: cs.coverImage || testImage,
        hasCaseStudy: true,
        slug: cs.slug,
        isCMS: true
    }));

    // Combine CMS projects (shown first) with fallback projects
    const projects = [...cmsProjects, ...fallbackProjects];

    const handleProjectClick = (project) => {
        if (project.hasCaseStudy) {
            if (project.isCMS && project.slug) {
                navigate(`/case-study/${project.slug}`);
            } else {
                navigate(`/project/${project.id}`);
            }
        }
    };

    return (
        <section id="section-3" className="py-24 bg-black text-white border-t border-white/10">
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
        </section>
    );
};

export default DesignJourney;