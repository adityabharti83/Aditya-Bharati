import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/personalData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
        >
          {/* Name/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Aditya Bharti
            </h3>
            <p className="text-muted text-sm">
              Data Analyst | Python | SQL | Power BI
            </p>
          </div>

          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          )}

          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted text-sm">
              © 2024 Aditya Bharti. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
