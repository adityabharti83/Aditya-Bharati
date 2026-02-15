import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/personalData';

export const CTA: React.FC = () => {
  const navigateToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Main Message */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Open to Data Analyst Roles
            </h2>
            <p className="text-2xl text-accent font-semibold">
              Available for immediate joining
            </p>
          </div>

          {/* Description */}
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to apply my expertise in fraud detection, predictive modeling, and business intelligence 
            to help your team make data-driven decisions.
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={navigateToContact}
            className="inline-flex items-center space-x-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Me</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center space-x-2 text-muted hover:text-white transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors duration-200"
            >
              LinkedIn Profile
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors duration-200"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
