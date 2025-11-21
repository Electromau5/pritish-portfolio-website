import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ onNavigate, name = "Pritish Sai" }) => {
    const navItems = [
        { label: "Home", sectionIndex: 0 },
        { label: "About", sectionIndex: 2 },
        { label: "Featured Work", sectionIndex: 1 },
        { label: "Resume", href: "/resume.pdf" },
        { label: "Blog", href: "https://medium.com/ai-ui" },
        { label: "Contact", sectionIndex: 3 }
    ];
    const navigate = useNavigate();

    return (
        <nav className="site-nav">
            <div className="site-nav__inner">
                <button
                    className="site-nav__brand"
                    onClick={() => navigate('/home')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                    {name}
                </button>
                <div className="site-nav__links">
                    {navItems.map((item) => (
                        item.href ? (
                            <button
                                key={item.label}
                                onClick={() => window.open(item.href, '_blank', 'noopener,noreferrer')}
                                className="site-nav__link"
                            >
                                {item.label}
                            </button>
                        ) : (
                            <button
                                key={item.label}
                                onClick={() => onNavigate(item.sectionIndex)}
                                className="site-nav__link"
                            >
                                {item.label}
                            </button>
                        )
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;