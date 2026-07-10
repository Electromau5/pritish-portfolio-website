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
import CaseStudyPage from './components/CaseStudyPage';
import CMSApp from './cms/CMSApp';
import AccessibilityFAB from './components/AccessibilityFAB';
import { Routes, Route } from 'react-router-dom';
import { migrateToArtifactsSystem } from './services/db';

const UXPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  // Run database migration on app load
  useEffect(() => {
    migrateToArtifactsSystem()
      .then(result => {
        if (result.success) {
          console.log('✓ Artifacts migration:', result.message);
        } else {
          console.error('✗ Artifacts migration failed:', result.error);
        }
      });
  }, []);

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
              <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
                <Navigation onNavigate={scrollToSection} name="Pritish Sai" />
                <HeroSection onExploreClick={handleExploreClick} />
                <DesignJourney />
                <AboutSection />
                <SkillsSection />
                <ContactSection
                  email="pritish@example.com"
                  linkedinUrl="https://linkedin.com/in/pritishpatel"
                />
              </div>
            }
          />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
          <Route path="/work/ai-school-decisions" element={<CaseStudyPage />} />
          <Route path="/case-study/:slug" element={<CaseStudyDisplay />} />
          <Route path="/cms/*" element={<CMSApp />} />
        </Routes>
        <AccessibilityFAB />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default UXPortfolio;