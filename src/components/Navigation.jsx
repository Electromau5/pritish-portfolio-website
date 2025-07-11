import React from 'react';

const Navigation = ({ onNavigate, name = "Pritish Patel" }) => {
    const navItems = [
        { label: "Work", sectionIndex: 0 },
        { label: "About", sectionIndex: 2 },
        { label: "Contact", sectionIndex: 3 }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-medium">{name}</div>
                <div className="flex space-x-8">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => onNavigate(item.sectionIndex)}
                            className="hover:text-gray-600 transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;