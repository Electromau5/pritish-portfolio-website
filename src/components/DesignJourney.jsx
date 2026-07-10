import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../services/db';

const Tag = ({ label }) => (
    <span
        style={{
            padding: '8px 14px',
            border: '1px solid var(--border-subtle)',
            borderRadius: 999,
            fontSize: 14,
            fontWeight: 500,
            color: 'var(--text-secondary)',
            lineHeight: 1.4,
            whiteSpace: 'nowrap',
        }}
    >
        {label}
    </span>
);

const ProjectCard = ({ project, onClick }) => (
    <article
        onClick={onClick}
        style={{ display: 'flex', flexDirection: 'column', gap: 24, cursor: (project.hasCaseStudy || project.caseStudyPath) ? 'pointer' : 'default' }}
    >
        <div
            style={{
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 16,
                overflow: 'hidden',
                height: 420,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
            }}
        >
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            ) : (
                <p style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>
                    1440 × 960 · Project image
                </p>
            )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-tertiary)', lineHeight: 1.4 }}>
                <span>{project.year}</span>
                <span>·</span>
                <span>{project.subtitle}</span>
            </div>

            <h3
                style={{
                    fontSize: 24,
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    lineHeight: 1.24,
                    letterSpacing: '-0.12px',
                    margin: 0,
                }}
            >
                {project.title}
            </h3>

            <p
                style={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: 0,
                }}
            >
                {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 4 }}>
                {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                ))}
            </div>
        </div>
    </article>
);

const DesignJourney = () => {
    const navigate = useNavigate();
    const testImage = "/images/hands-ai/hands-ai-cover.png";
    const [publishedCaseStudies, setPublishedCaseStudies] = useState([]);

    const fallbackProjects = [
        {
            id: 2,
            title: "AI for Smarter School Decisions",
            subtitle: "Education · Data Analytics",
            year: "2023",
            description: "Distilling student and school data into clear, actionable insights that empower educators with real-time clarity and turn data complexity into strategic action.",
            tags: ["AI Insights", "Data Visualization", "Education"],
            image: testImage,
            hasCaseStudy: true,
            caseStudyPath: '/work/ai-school-decisions',
        },
        {
            id: 3,
            title: "Simplifying Verizon's Engineering Operations",
            subtitle: "Enterprise · Project Management",
            year: "2021",
            description: "Redesigned project management workflows to empower Verizon's engineering and network teams to manage complex initiatives from inception to delivery.",
            tags: ["Project Management", "Workflow Design", "Collaboration"],
            image: testImage,
        },
        {
            id: 4,
            title: "Structuring Network Data for Greater Clarity",
            subtitle: "Enterprise · Monitoring Dashboard",
            year: "2021",
            description: "Reengineered Verizon's diagnostic interface by flattening overloaded network hierarchies into a modular, intuitive experience.",
            tags: ["Real-time Data", "Operations", "Data Visibility"],
            image: testImage,
        },
        {
            id: 5,
            title: "Reimagining Network Search for Field Operations",
            subtitle: "Enterprise · Customer Experience",
            year: "2021",
            description: "Redesigned Verizon's internal search function into an intuitive interface that enhanced metadata transparency and reorganized search logic.",
            tags: ["Customer Experience", "Enterprise Search", "Service Design"],
            image: testImage,
        },
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

    const cmsProjects = publishedCaseStudies.map((cs) => ({
        id: `cms-${cs.id}`,
        title: cs.title,
        subtitle: cs.subtitle || 'Case Study',
        year: new Date(cs.createdAt).getFullYear().toString(),
        description: cs.sections?.[0]?.content?.[0]?.data?.description || cs.subtitle || '',
        tags: cs.tags || [],
        image: cs.coverImage || testImage,
        hasCaseStudy: true,
        slug: cs.slug,
        isCMS: true,
    }));

    const projects = [...cmsProjects, ...fallbackProjects];

    const handleProjectClick = (project) => {
        if (project.hasCaseStudy) {
            if (project.caseStudyPath) {
                navigate(project.caseStudyPath);
            } else if (project.isCMS && project.slug) {
                navigate(`/case-study/${project.slug}`);
            } else {
                navigate(`/project/${project.id}`);
            }
        }
    };

    return (
        <section
            id="section-3"
            style={{ backgroundColor: 'var(--bg-page)', borderTop: '1px solid var(--border-subtle)', paddingTop: 96, paddingBottom: 96 }}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                <div style={{ marginBottom: 64 }}>
                    <p
                        className="uppercase mb-4"
                        style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-tertiary)', letterSpacing: '1.04px', lineHeight: 1.2 }}
                    >
                        Selected Work
                    </p>
                    <h2
                        style={{
                            fontSize: 'clamp(32px, 4vw, 48px)',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            lineHeight: 1.1,
                            letterSpacing: '-1px',
                            margin: 0,
                        }}
                    >
                        Featured Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => handleProjectClick(project)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignJourney;
