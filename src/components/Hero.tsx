import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/personalData';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('featured-project')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Aditya_Bharti_Data_Analyst.pdf';
    link.download = 'Aditya_Bharti_Data_Analyst.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-background text-text"
      style={{ paddingTop: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hello, I'm</span>{' '}
                <span className="text-primary">Aditya</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-muted font-light">
                Data Analyst | Python | SQL | Power BI
              </h2>
            </div>

            {/* Short Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted leading-relaxed max-w-lg"
            >
              Turning complex data into actionable business insights through 
              advanced analytics and interactive dashboards.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-lg shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Projects</span>
                <ExternalLink className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={downloadResume}
                className="border-2 border-border hover:bg-card text-muted hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-lg hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download Resume</span>
                <Download className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 lg:w-80 lg:h-80"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                  {personalInfo.profileImage ? (
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary">
                        {personalInfo.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-xs font-bold">AVAILABLE</span>
                </motion.div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center space-x-4 mt-6"
              >
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-200 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-muted hover:text-white" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-200 hover:scale-110"
                >
                  <Github className="w-6 h-6 text-muted hover:text-white" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-200 hover:scale-110"
                >
                  <Mail className="w-6 h-6 text-muted hover:text-white" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center pt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-muted"
          >
            <span className="text-sm font-medium">Scroll to explore my work</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
