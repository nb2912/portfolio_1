import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: string;
  description: string;
}

const techStack: TechItem[] = [
  {
    name: 'Frontend Development',
    icon: '🎨',
    description: 'Building responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.'
  },
  {
    name: 'Backend Development',
    icon: '⚙️',
    description: 'Creating scalable server-side applications using Node.js, Python, and various databases.'
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    description: 'Deploying and managing applications using AWS, Docker, and CI/CD pipelines.'
  },
  {
    name: 'AI & Machine Learning',
    icon: '🤖',
    description: 'Exploring and implementing AI/ML solutions using TensorFlow and PyTorch.'
  }
];

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* About Me Text */}
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold heading-gradient">About Me</h2>
              <div className="space-y-4 text-text/80">
                <p className="text-lg">
                  Hi there! I'm a passionate software engineer with a deep love for creating innovative web solutions
                  and exploring the frontiers of AI/ML technology.
                </p>
              </div>
            </div>

            {/* Tech Stack Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="card-glass p-6 space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{tech.icon}</span>
                    <h3 className="text-xl font-semibold heading-gradient">{tech.name}</h3>
                  </div>
                  <p className="text-text/70">{tech.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center space-y-6 mt-12"
            >
              <p className="text-lg text-text/80">
                With several years of experience in full-stack development, I specialize in building scalable
                applications using modern technologies. My approach combines technical expertise with creative
                problem-solving to deliver exceptional user experiences.
              </p>
              <p className="text-lg text-text/80">
                When I'm not coding, you'll find me contributing to open-source projects, writing technical
                articles, or exploring the latest developments in artificial intelligence.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span>Let's Work Together</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 