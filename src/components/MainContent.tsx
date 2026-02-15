import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationSection } from '../types';
import { HeroSection } from '../sections/HeroSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { CaseStudySection } from '../sections/CaseStudySection';
import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';

interface MainContentProps {
  activeSection: NavigationSection;
  onSectionChange?: (section: NavigationSection) => void;
}

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const MainContent: React.FC<MainContentProps> = ({ activeSection, onSectionChange }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroSection onSectionChange={onSectionChange} />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection onSectionChange={onSectionChange} />;
      case 'caseStudy':
        return <CaseStudySection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection onSectionChange={onSectionChange} />;
    }
  };

  return (
    <main className="lg:ml-96 lg:mr-4 mx-4 mt-24 mb-8 px-4 lg:px-0">
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl min-h-[calc(100vh-8rem)] p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};
