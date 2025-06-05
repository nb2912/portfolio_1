import { useState } from 'react';
import { motion } from 'framer-motion';
import type { FC } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "SymphonySmith",
    description: "Developed a sophisticated music generation system using Python and TensorFlow that creates original compositions through deep learning. Implemented advanced audio processing algorithms and achieved 85% user satisfaction in beta testing.",
    tags: ["Python", "TensorFlow", "Music21", "NumPy", "Scikit-learn"],
    githubUrl: "https://github.com/archeeetah/SymphonySmith",
    features: [
      "Engineered ML models with 90% accuracy in style replication",
      "Processed and analyzed 10,000+ MIDI files for training",
      "Implemented real-time audio visualization with WebGL",
      "Reduced generation time by 40% through optimization"
    ]
  },
  {
    id: 2,
    title: "Library Management System",
    description: "Built a full-stack library management solution that streamlined operations for 1000+ books and 500+ users. Reduced manual processing time by 60% and implemented automated notification system with 99% delivery rate.",
    tags: ["Python", "SQLite", "Flask", "Bootstrap", "RESTful API"],
    githubUrl: "https://github.com/nb2912/Library-Management",
    features: [
      "Designed scalable database schema handling 1000+ records",
      "Implemented RESTful API with 99.9% uptime",
      "Reduced book checkout time from 5 mins to 30 seconds",
      "Automated overdue notifications with email integration"
    ]
  },
  {
    id: 3,
    title: "AI Interview Assistant",
    description: "Created an innovative AI-powered interview preparation platform using TypeScript and OpenAI API. Achieved 92% positive user feedback and helped 100+ users prepare for technical interviews through smart feedback generation.",
    tags: ["TypeScript", "React", "OpenAI API", "TailwindCSS", "Next.js"],
    githubUrl: "https://github.com/nb2912/ai-interview-frontend",
    features: [
      "Integrated OpenAI API for real-time response analysis",
      "Built responsive UI with 98% mobile compatibility",
      "Implemented custom algorithms for feedback generation",
      "Achieved 45% improvement in user interview performance"
    ]
  },
  {
    id: 4,
    title: "Voice Assistant",
    description: "Engineered a powerful voice assistant using Python and advanced NLP techniques. Supports 50+ custom commands and achieved 95% accuracy in voice recognition across different accents and environments.",
    tags: ["Python", "Speech Recognition", "NLP", "APIs", "PyAudio"],
    githubUrl: "https://github.com/nb2912/Voice-Assistant",
    features: [
      "Implemented wake word detection with 98% accuracy",
      "Integrated 10+ external APIs for diverse functionality",
      "Optimized response time to under 1 second",
      "Developed custom NLP model for intent recognition"
    ]
  }
];

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -5 }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1 }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1
      }
    })
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-glass overflow-hidden">
        {/* Project Header with Gradient - Adjusted for mobile */}
        <div className="h-40 sm:h-48 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
            animate={{
              opacity: isHovered ? 1 : 0.7,
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-between">
            <motion.h3 
              className="text-xl sm:text-2xl font-bold heading-gradient"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            <motion.p 
              className="text-sm sm:text-base text-text/80 line-clamp-2 sm:line-clamp-3"
              animate={{ opacity: isHovered ? 0.9 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>
          </div>
        </div>

        {/* Project Info - Mobile optimized spacing */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Tags with staggered animation - Responsive sizing */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag, index) => (
              <motion.span
                key={index}
                variants={tagVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                custom={index}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm bg-primary/10 text-primary"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Features with animated bullets - Adjusted spacing */}
          <div className="space-y-2 sm:space-y-3">
            <motion.h4 
              className="text-base sm:text-lg font-semibold text-primary"
              animate={{ opacity: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              Key Features:
            </motion.h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  className="flex items-start gap-1.5 sm:gap-2 text-text/80"
                >
                  <motion.span
                    className="text-primary mt-1"
                    animate={{ scale: isHovered ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    •
                  </motion.span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Action Buttons - Mobile-friendly touch targets */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm relative overflow-hidden group min-h-[2.5rem] px-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                Live Demo
              </motion.a>
            )}
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs sm:text-sm relative overflow-hidden group min-h-[2.5rem] px-4 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-primary/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              View Code
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: FC = (): JSX.Element => {
  return (
    <section id="projects" className="container-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12 sm:space-y-16"
      >
        {/* Section Header - Mobile optimized */}
        <div className="text-center space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium"
          >
            Featured Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold heading-gradient px-4"
          >
            Innovative Solutions<br />
            <span className="text-text/80">Through Code</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-text/80 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4"
          >
            Showcasing my expertise in full-stack development, AI/ML integration, and scalable architecture design. 
            Each project demonstrates my commitment to creating impactful solutions using cutting-edge technologies.
          </motion.p>
          
          {/* Stats - Mobile responsive grid */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 pt-2 sm:pt-4 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-primary/5 text-text/60 text-xs sm:text-sm"
            >
              1,500+ Hours of Coding
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-primary/5 text-text/60 text-xs sm:text-sm"
            >
              15+ Technologies Mastered
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-primary/5 text-text/60 text-xs sm:text-sm"
            >
              4 Complex Projects
            </motion.div>
          </div>
        </div>

        {/* Projects Grid - Responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Tech Stack - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 sm:space-y-6 pt-4 sm:pt-8 px-4"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-primary">Technologies I've Mastered</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {Array.from(new Set(projects.flatMap(p => p.tags))).map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(78, 205, 196, 0.2)" }}
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-lg bg-background-lighter text-text/80 text-xs sm:text-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects; 