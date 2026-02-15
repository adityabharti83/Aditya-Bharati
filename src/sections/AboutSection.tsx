import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, MapPin, Calendar, GraduationCap, Briefcase, Trophy, Target, Users } from 'lucide-react';
import { aboutData, contactData } from '../data/personalData';

export const AboutSection: React.FC = () => {
  const timelineItems = [
    // Education
    ...aboutData.education.map((edu, index) => ({
      id: `edu-${index}`,
      year: edu.period.split('–')[0],
      title: edu.degree,
      subtitle: edu.institution,
      description: edu.grade,
      type: 'education',
      icon: GraduationCap,
      color: 'blue' as const
    })),
    // Experience
    ...aboutData.experience.map((exp, index) => ({
      id: `exp-${index}`,
      year: exp.period.split(' ')[0],
      title: exp.title,
      subtitle: exp.company,
      description: exp.description,
      type: 'experience',
      icon: Briefcase,
      color: 'green' as const
    })),
    // Certifications
    ...aboutData.certifications.map((cert, index) => ({
      id: `cert-${index}`,
      year: '2024',
      title: cert,
      subtitle: 'Professional Certification',
      description: 'Industry-recognized credential',
      type: 'certification',
      icon: Trophy,
      color: 'yellow' as const
    }))
  ].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  const interests = [
    'Data Analysis', 'Machine Learning', 'Data Visualization', 
    'Python Development', 'Business Intelligence', 'Statistical Analysis'
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Computer Science Engineering student specializing in data analysis, fraud detection, 
          and creating actionable business insights through data-driven solutions.
        </p>
      </motion.div>

      {/* Personal Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          My Journey
        </h3>
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My passion for data analysis began during my Computer Science studies when I discovered 
            how data could reveal critical business insights and drive decision-making. This led me to 
            specialize in fraud detection and predictive analytics.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Through internships at Cluster Computing and Physics Wallah, I've developed expertise in 
            Python, SQL, Power BI, and machine learning. I'm particularly proud of my fraud detection 
            project that achieved 95% accuracy while reducing false positives by 35%.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I believe in clean data, meaningful visualizations, and statistical rigor. Every dataset 
            tells a story, and I'm passionate about uncovering those stories to help organizations 
            make informed decisions.
          </p>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-8"
      >
        <div className="flex items-center space-x-3">
          <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Timeline
          </h3>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
          
          <div className="space-y-8">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const colorClasses = {
                blue: 'bg-blue-600 text-blue-100 dark:bg-blue-500',
                green: 'bg-green-600 text-green-100 dark:bg-green-500',
                yellow: 'bg-yellow-600 text-yellow-100 dark:bg-yellow-500'
              };
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Dot */}
                  <div className={`flex-shrink-0 w-16 h-16 ${colorClasses[item.color]} rounded-full flex items-center justify-center shadow-lg z-10`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-sm font-bold ${
                        item.type === 'education' ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30' :
                        item.type === 'experience' ? 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30' :
                        'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30'
                      } px-3 py-1 rounded-full`}>
                        {item.year}
                      </span>
                      <span className={`text-xs font-medium ${
                        item.type === 'education' ? 'text-blue-600 dark:text-blue-400' :
                        item.type === 'experience' ? 'text-green-600 dark:text-green-400' :
                        'text-yellow-600 dark:text-yellow-400'
                      } uppercase tracking-wide`}>
                        {item.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    
                    {item.subtitle && (
                      <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                        {item.subtitle}
                      </p>
                    )}
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Leadership & Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-8"
      >
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Leadership & Achievements
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutData.leadership.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                  {role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="space-y-8"
      >
        <div className="flex items-center space-x-3">
          <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Areas of Focus
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 border border-orange-200 dark:border-orange-800"
            >
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {interest}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Location & Availability */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Location & Availability
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Based in {contactData.address}, actively seeking data analyst opportunities 
              where I can apply my skills in fraud detection, predictive modeling, and business intelligence.
            </p>
            <div className="flex items-center space-x-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700 dark:text-green-300 font-medium">
                Open to new opportunities
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              What I Bring
            </h4>
            <div className="space-y-3">
              {[
                'Strong analytical and problem-solving skills',
                'Expertise in Python, SQL, and data visualization',
                'Experience with real-world fraud detection systems',
                'Ability to translate data into business insights',
                'Collaborative team player with leadership experience'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
