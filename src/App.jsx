import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import DesignJourney from './components/DesignJourney';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ProjectDetailPage from './components/ProjectDetailPage';
import CaseStudyDisplay from './components/CaseStudyDisplay';
import CMSApp from './cms/CMSApp';
import { Routes, Route } from 'react-router-dom';

const UXPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionIndex) => {
    // 0: Hero, 1: About, 2: Skills, 3: Featured Work, 4: Contact
    const section = document.getElementById(`section-${sectionIndex}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    scrollToSection(1); // Scrolls to AboutSection
  };

  const handleScrollDown = () => {
    scrollToSection(1); // Scrolls to AboutSection
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-light transition-colors duration-200">
                <Navigation onNavigate={scrollToSection} name="Pritish Sai" />
                <HeroSection
                  scrollY={scrollY}
                  onExploreClick={handleExploreClick}
                  onScrollDown={handleScrollDown}
                />
                <AboutSection />
                <SkillsSection />
                <DesignJourney />
                <ContactSection
                  email="pritish@example.com"
                  linkedinUrl="https://linkedin.com/in/pritishpatel"
                />
              </div>
            }
          />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
          <Route path="/case-study/:slug" element={<CaseStudyDisplay />} />
          <Route path="/cms/*" element={<CMSApp />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default UXPortfolio;