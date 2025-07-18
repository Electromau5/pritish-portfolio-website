import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ onNavigate, name = "Pritish Sai" }) => {
    const navItems = [
        { label: "Work", sectionIndex: 0 },
        { label: "About", sectionIndex: 2 },
        { label: "Contact", sectionIndex: 3 }
    ];
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <button
                    className="text-xl font-medium text-gray-900 dark:text-white focus:outline-none hover:underline"
                    onClick={() => navigate('/home')}
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                    Pritish Sai
                </button>
                <div className="flex items-center space-x-8">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => onNavigate(item.sectionIndex)}
                            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-gray-900 dark:text-white"
                        >
                            {item.label}
                        </button>
                    ))}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;