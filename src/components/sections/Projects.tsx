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
    title: "AI Interview Platform",
    description: "A comprehensive AI-powered interview preparation platform combining TypeScript frontend and Python backend. Helps users practice interviews with real-time AI feedback and analysis.",
    tags: ["TypeScript", "Python", "React", "FastAPI", "AI/ML", "WebRTC"],
    githubUrl: "https://github.com/nb2912/ai-interview-frontend",
    features: [
      "Real-time video interview simulation with AI analysis",
      "Advanced speech-to-text and sentiment analysis",
      "Personalized feedback and improvement suggestions",
      "Interactive dashboard with performance metrics"
    ]
  },
  {
    id: 2,
    title: "Farmer Market Place",
    description: "An e-commerce platform connecting farmers directly with consumers, eliminating middlemen and ensuring fair prices. Features real-time inventory management and secure payment processing.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/nb2912/farmer-mareket-place",
    features: [
      "Direct farmer-to-consumer marketplace interface",
      "Real-time inventory and order management",
      "Secure payment gateway integration",
      "Location-based farmer discovery system"
    ]
  },
  {
    id: 3,
    title: "Solo Circle",
    description: "A modern social media platform built with JavaScript and modern web technologies. Focused on creating meaningful connections and engaging user experiences through a clean, intuitive interface.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/nb2912/solo-circle",
    features: [
      "Implemented real-time messaging and notifications",
      "Built responsive and interactive UI components",
      "Integrated secure user authentication system",
      "Developed RESTful API endpoints for data management"
    ]
  },
  {
    id: 4,
    title: "Library Management System",
    description: "A comprehensive library management solution built with Python and modern web technologies. Streamlines book tracking, user management, and library operations.",
    tags: ["Python", "Flask", "SQLite", "Bootstrap", "RESTful API"],
    githubUrl: "https://github.com/nb2912/Library-Management",
    features: [
      "Automated book checkout and return system",
      "User authentication and role-based access",
      "Real-time availability tracking",
      "Email notification system for due dates"
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
      className="relative group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-glass overflow-hidden h-full flex flex-col">
        {/* Project Header with Gradient */}
        <div className="p-4 sm:p-6 lg:p-8 flex-grow">
          <div className="relative z-10 h-full flex flex-col">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg -m-4 sm:-m-6 lg:-m-8"
              animate={{
                opacity: isHovered ? 1 : 0.7,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Project Title */}
            <motion.h3 
              className="text-xl sm:text-2xl lg:text-3xl font-bold heading-gradient mb-3 sm:mb-4 relative"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>

            {/* Project Description */}
            <motion.p 
              className="text-sm sm:text-base lg:text-lg text-text/80 mb-6 relative"
              animate={{ opacity: isHovered ? 0.9 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 lg:gap-3 mb-6 relative">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  variants={tagVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  custom={index}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm lg:text-base bg-primary/10 text-primary font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4 relative flex-grow">
              <motion.h4 
                className="text-base sm:text-lg lg:text-xl font-semibold text-primary"
                animate={{ opacity: isHovered ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
              >
                Key Features:
              </motion.h4>
              <ul className="space-y-2 sm:space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={featureVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={index}
                    className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg text-text/80"
                  >
                    <motion.span
                      className="text-primary mt-1.5"
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
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 sm:p-6 lg:p-8 pt-2 sm:pt-4 lg:pt-6 mt-auto">
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm sm:text-base lg:text-lg relative overflow-hidden group flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 py-2 sm:py-2.5 lg:py-3 block text-center">Live Demo</span>
              </motion.a>
            )}
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm sm:text-base lg:text-lg relative overflow-hidden group flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-primary/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 py-2 sm:py-2.5 lg:py-3 block text-center">View Code</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: FC = (): JSX.Element => {
  return (
    <section id="projects" className="container-section py-16 sm:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12 sm:space-y-16 lg:space-y-20"
      >
        {/* Section Header */}
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-sm sm:text-base lg:text-lg font-medium"
          >
            Featured Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold heading-gradient px-4"
          >
            Innovative Solutions<br />
            <span className="text-text/80">Through Code</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-text/80 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg xl:text-xl px-4"
          >
            Showcasing my expertise in full-stack development, AI/ML integration, and scalable architecture design. 
            Each project demonstrates my commitment to creating impactful solutions using cutting-edge technologies.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-primary/5 text-text/60 text-xs sm:text-sm lg:text-base"
          >
            1,500+ Hours of Coding
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-primary/5 text-text/60 text-xs sm:text-sm lg:text-base"
          >
            15+ Technologies Mastered
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-primary/5 text-text/60 text-xs sm:text-sm lg:text-base"
          >
            4 Complex Projects
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 