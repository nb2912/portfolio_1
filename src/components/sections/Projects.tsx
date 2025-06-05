import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FC, ReactNode } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
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
    image: "https://placehold.co/800x400/1A535C/ffffff?text=SymphonySmith",
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
    image: "https://placehold.co/800x400/1A535C/ffffff?text=Library+Management",
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
    image: "https://placehold.co/800x400/1A535C/ffffff?text=AI+Interview+Assistant",
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
    image: "https://placehold.co/800x400/1A535C/ffffff?text=Voice+Assistant",
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="card-glass overflow-hidden">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent flex items-end p-6"
              >
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-text/80">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Project Info */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold heading-gradient">{project.title}</h3>
          <p className="text-text/80">{project.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(78, 205, 196, 0.2)" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
              </motion.a>
            )}
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Code
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="container-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-16"
      >
        {/* Section Header */}
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Featured Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold heading-gradient">
            Innovative Solutions<br />
            <span className="text-text/80">Through Code</span>
          </h2>
          <p className="text-text/80 max-w-2xl mx-auto text-lg">
            Showcasing my expertise in full-stack development, AI/ML integration, and scalable architecture design. 
            Each project demonstrates my commitment to creating impactful solutions using cutting-edge technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <span className="px-4 py-2 rounded-lg bg-primary/5 text-text/60 text-sm">
              1,500+ Hours of Coding
            </span>
            <span className="px-4 py-2 rounded-lg bg-primary/5 text-text/60 text-sm">
              15+ Technologies Mastered
            </span>
            <span className="px-4 py-2 rounded-lg bg-primary/5 text-text/60 text-sm">
              4 Complex Projects
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Tech Stack Highlight */}
        <div className="text-center space-y-6 pt-8">
          <h3 className="text-2xl font-semibold text-primary">Technologies I've Mastered</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from(new Set(projects.flatMap(p => p.tags))).map((tech, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 rounded-lg bg-background-lighter text-text/80"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(78, 205, 196, 0.1)" }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 