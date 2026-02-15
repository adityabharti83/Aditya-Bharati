import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BarChart3, Brain, GitBranch, Cloud, Users, Target, Lightbulb } from 'lucide-react';
import { skills } from '../data/personalData';

const skillIcons: { [key: string]: React.ComponentType<any> } = {
  'Python': Code,
  'SQL': Database,
  'Power BI': BarChart3,
  'scikit-learn': Brain,
  'Pandas': Database,
  'NumPy': Database,
  'Excel': BarChart3,
  'MySQL': Database,
  'MongoDB': Database,
  'Flask': Code,
  'Django': Code,
  'Git': GitBranch,
  'Data Cleaning': Database,
  'ETL': Cloud,
  'Statistical Analysis': BarChart3,
  'Tableau': BarChart3,
  'Matplotlib': BarChart3,
  'Seaborn': BarChart3,
  'Problem Solving': Brain,
  'Leadership': Users,
  'Team Collaboration': Users,
  'Communication': Lightbulb,
  'Project Management': Target
};

const skillCategories = {
  'Languages': ['Python', 'SQL'],
  'Data Analysis': ['Power BI', 'Pandas', 'NumPy', 'Excel', 'Matplotlib', 'Seaborn', 'Tableau', 'Statistical Analysis'],
  'Machine Learning': ['scikit-learn'],
  'Databases': ['MySQL', 'MongoDB'],
  'Web Development': ['Flask', 'Django'],
  'Tools': ['Git', 'Data Cleaning', 'ETL'],
  'Soft Skills': ['Problem Solving', 'Leadership', 'Team Collaboration', 'Communication', 'Project Management']
};

export const SkillsSection: React.FC = () => {
  const getSkillIcon = (skillName: string) => {
    return skillIcons[skillName] || Code;
  };

  const getSkillLevel = (level: number) => {
    if (level >= 90) return { color: 'bg-green-500', label: 'Expert' };
    if (level >= 80) return { color: 'bg-blue-500', label: 'Advanced' };
    if (level >= 70) return { color: 'bg-yellow-500', label: 'Intermediate' };
    return { color: 'bg-gray-500', label: 'Beginner' };
  };

  const SkillCard: React.FC<{ skill: any; index: number }> = ({ skill, index }) => {
    const Icon = getSkillIcon(skill.name);
    const levelInfo = getSkillLevel(skill.level);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${levelInfo.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                />
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 min-w-[3rem] text-right">
                {skill.level}%
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            skill.level >= 90 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
              : skill.level >= 80 
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
          }`}>
            {levelInfo.label}
          </span>
        </div>
      </motion.div>
    );
  };

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
          Skills & Expertise
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Comprehensive data analysis skillset spanning Python programming, SQL databases, 
          business intelligence tools, and machine learning frameworks.
        </p>
      </motion.div>

      {/* Skills by Category */}
      {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
            {category === 'Languages' && <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            {category === 'Data Analysis' && <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            {category === 'Machine Learning' && <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            {category === 'Databases' && <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            {category === 'Web Development' && <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            {category === 'Tools' && <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            {category === 'Soft Skills' && <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            <span>{category}</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills
              .filter(skill => categorySkills.includes(skill.name))
              .map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={categoryIndex * 20 + index} 
                />
              ))}
          </div>
        </motion.div>
      ))}

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {skills.filter(s => s.category === 'technical').length}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Technical Tools
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {skills.filter(s => s.level >= 85).length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Expert Level Skills
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              3+ Years
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Hands-on Experience
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
