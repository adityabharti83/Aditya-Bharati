import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { FeaturedProject } from '../components/FeaturedProject';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Skills } from '../components/Skills';
import { CaseStudyHighlight } from '../components/CaseStudyHighlight';
import { EducationExperience } from '../components/EducationExperience';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <FeaturedProjects />
      <Skills />
      <CaseStudyHighlight />
      <EducationExperience />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
