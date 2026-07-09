import React from 'react';

const HeroSection = ({ onExploreClick }) => {
    return (
        <section
            id="section-0"
            className="min-h-screen flex items-center"
            style={{ backgroundColor: 'var(--bg-page)', paddingTop: 71 }}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 w-full">
                <p
                    className="mb-8 uppercase"
                    style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: 'var(--text-tertiary)',
                        letterSpacing: '1.04px',
                        lineHeight: 1.2,
                    }}
                >
                    Pritish Sai · Lead Product Designer
                </p>

                <h1
                    className="mb-8"
                    style={{
                        fontSize: 'clamp(48px, 6vw, 80px)',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        lineHeight: 1.05,
                        letterSpacing: '-1.6px',
                        maxWidth: 900,
                    }}
                >
                    Designing enterprise AI that feels human.
                </h1>

                <p
                    className="mb-12"
                    style={{
                        fontSize: 20,
                        fontWeight: 400,
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        maxWidth: 520,
                    }}
                >
                    I architect design systems, drive cross-functional alignment, and lead end-to-end product strategy for complex enterprise applications.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <button
                        onClick={onExploreClick}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: 'var(--text-primary)',
                            color: 'var(--text-inverse)',
                            fontSize: 14,
                            fontWeight: 500,
                            borderRadius: 999,
                            border: 'none',
                            cursor: 'pointer',
                            lineHeight: 1.4,
                            transition: 'background-color 0.15s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#333'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--text-primary)'}
                    >
                        View work
                    </button>
                    <a
                        href="mailto:pritish@example.com"
                        style={{
                            padding: '12px 24px',
                            backgroundColor: 'transparent',
                            color: 'var(--text-primary)',
                            fontSize: 14,
                            fontWeight: 500,
                            borderRadius: 999,
                            border: '1px solid var(--text-primary)',
                            cursor: 'pointer',
                            lineHeight: 1.4,
                            textDecoration: 'none',
                            transition: 'background-color 0.15s, color 0.15s',
                            display: 'inline-block',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                            e.currentTarget.style.color = 'var(--text-inverse)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
