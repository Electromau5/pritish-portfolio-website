import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = ({ scrollY, onExploreClick, onScrollDown }) => {
    return (
        <section id="section-0" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div
                className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
                style={{
                    transform: `translateY(${scrollY * 0.5}px)`
                }}
            />
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <div
                    className="opacity-0 animate-fade-in"
                    style={{
                        animation: 'fadeInUp 1s ease-out forwards',
                        animationDelay: '0.3s'
                    }}
                >
                    <h1 className="text-6xl md:text-7xl font-extralight mb-6 leading-tight text-gray-900 dark:text-white">
                        Designing the Future of
                        <span className="block font-light bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            Enterprise AI
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                        Senior UX Designer crafting intelligent, human-centered experiences for complex enterprise platforms
                    </p>
                    <div className="flex flex-col items-center space-y-8">
                        <button
                            onClick={onExploreClick}
                            className="group flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            <span>Explore My Journey</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <ChevronDown
                            size={24}
                            className="text-gray-400 dark:text-gray-500 animate-bounce cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            onClick={onScrollDown}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          opacity: 0;
        }
      `}</style>
        </section>
    );
};

export default HeroSection;