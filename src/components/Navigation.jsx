import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = ({ onNavigate }) => {
    const navItems = [
        { label: "Home", sectionIndex: 0 },
        { label: "About", sectionIndex: 1 },
        { label: "Featured Work", sectionIndex: 3 },
        { label: "Resume", href: "/resume.pdf" },
        { label: "Blog", href: "https://medium.com/ai-ui" },
        { label: "Contact", sectionIndex: 4 }
    ];
    const navigate = useNavigate();
    const { isDark } = useTheme();

    return (
        <nav className="site-nav">
            <div className="site-nav__inner">
                <button
                    className="site-nav__brand"
                    onClick={() => navigate('/')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                    <img
                        src={isDark ? '/images/logo-dark.png' : '/images/logo-light.png'}
                        alt="Artemis Design Labs"
                        className="h-8 w-auto"
                    />
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