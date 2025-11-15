import React from 'react';
import { ArrowRight, Minus } from 'lucide-react';

const HeroSection = ({ scrollY = 0, onExploreClick, onScrollDown }) => {
    return (
        <section id="section-0" className="min-h-screen bg-black text-white relative overflow-hidden flex items-center">
            <div
                className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black to-black opacity-90"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            />
            <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
            <div className="relative z-10 w-full">
                <div className="max-w-6xl mx-auto px-6 md:px-8 py-32">
                    <div className="grid gap-16 md:grid-cols-[1.05fr_0.95fr] items-center">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <h1 className="banner-title">
                                    <span className="block text-gray-400">Pritish Sai, Lead Product Designer,</span>
                                    <span className="block text-white">Enterprise AI</span>
                                </h1>
                            </div>
                            <p className="banner-text">
                                I architect high-performance design systems, drive cross-functional alignment, and lead the end-to-end product
                                strategy that enable organizations to move faster with precision and confidence.
                            </p>
                            <div className="flex flex-wrap items-center gap-6">
                                <button
                                    onClick={onExploreClick}
                                    className="about-cta bg-transparent border-white/30"
                                >
                                    About me
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                className="absolute -inset-6 bg-gradient-to-tr from-orange-500/40 via-rose-500/30 to-indigo-500/30 blur-3xl opacity-60"
                                aria-hidden="true"
                                style={{ transform: `translateY(${scrollY * -0.08}px)` }}
                            />
                            <div className="relative rounded-[2.5rem] border border-white/10 bg-[#111] shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                                <img
                                    src="/pritish-welcome.gif"
                                    alt="Geometric hero artwork"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;