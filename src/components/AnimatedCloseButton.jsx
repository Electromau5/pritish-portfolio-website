import React, { useState } from 'react';
import { X } from 'lucide-react';

const AnimatedCloseButton = ({ onClick, className = "", size = 20 }) => {
    const [isRotating, setIsRotating] = useState(false);

    const handleClick = () => {
        setIsRotating(true);
        // Trigger the rotation animation
        setTimeout(() => {
            setIsRotating(false);
            onClick();
        }, 300); // Match the animation duration
    };

    return (
        <button
            onClick={handleClick}
            className={`relative group p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200 hover:scale-110 active:scale-95 ${className}`}
            aria-label="Close modal"
        >
            {/* Circle background */}
            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 scale-0 group-hover:scale-100 transform origin-center" />
            
            {/* X icon with rotation animation */}
            <div className={`relative z-10 transition-transform duration-300 ease-in-out ${isRotating ? 'rotate-180 scale-110' : ''}`}>
                <X size={size} />
            </div>
            
            {/* Pulse effect on hover */}
            <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-200 scale-0 group-hover:scale-100 transform origin-center animate-pulse" />
        </button>
    );
};

export default AnimatedCloseButton; 