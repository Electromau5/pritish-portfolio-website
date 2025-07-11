import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = ({ email = "pritish@example.com", linkedinUrl = "https://linkedin.com" }) => {
    return (
        <section id="section-3" className="py-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extralight mb-8">
                    Let's Shape the Future Together
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    I'm always excited to discuss new opportunities, collaborate on innovative projects, or simply chat about the future of AI and design.
                </p>
                <div className="flex justify-center space-x-6">
                    <a
                        href={`mailto:${email}`}
                        className="group flex items-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                        <Mail size={20} />
                        <span>Get in Touch</span>
                    </a>
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-3 border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;