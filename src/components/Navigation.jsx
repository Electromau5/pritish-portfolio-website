import React from 'react';

const Navigation = ({ onNavigate, name = "Pritish Sai" }) => {
    const navItems = [
        { label: "Work", sectionIndex: 3 },
        { label: "About", sectionIndex: 1 },
        { label: "Resume", href: "/resume.pdf" },
        { label: "Contact", sectionIndex: 4 },
    ];

    return (
        <nav
            className="fixed top-0 inset-x-0 z-50"
            style={{ backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-subtle)' }}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-[24px] flex items-center justify-between">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{
                        fontSize: 19,
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        lineHeight: 'normal',
                        letterSpacing: 0,
                    }}
                >
                    {name}
                </button>
                <div className="flex items-center gap-9">
                    {navItems.map((item) =>
                        item.href ? (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'color 0.15s',
                                }}
                                onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <button
                                key={item.label}
                                onClick={() => onNavigate(item.sectionIndex)}
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: 'var(--text-secondary)',
                                    background: 'none',
                                    border: 'none',
                                    padding: 0,
                                    cursor: 'pointer',
                                    transition: 'color 0.15s',
                                }}
                                onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                            >
                                {item.label}
                            </button>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
