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
    <section id="about" className="relative min-h-screen py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl" />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-5 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(78,205,196,0.3)_1px,transparent_1px),linear-gradient(to_right,rgba(78,205,196,0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container-section relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* About Me Text */}
            <div className="text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h2 className="text-4xl md:text-5xl font-bold heading-gradient mb-2">About Me</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
              </motion.div>
              <div className="space-y-4 text-text/80">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed"
                >
                  Hi there! I'm a passionate software engineer with a deep love for creating innovative web solutions
                  and exploring the frontiers of AI/ML technology.
                </motion.p>
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
                  className="card-glass p-8 space-y-4 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <h3 className="text-xl font-semibold heading-gradient">{tech.name}</h3>
                    </div>
                    <p className="text-text/70 leading-relaxed">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center space-y-8 mt-16"
            >
              <div className="space-y-6">
                <p className="text-lg text-text/80 leading-relaxed">
                  With several years of experience in full-stack development, I specialize in building scalable
                  applications using modern technologies. My approach combines technical expertise with creative
                  problem-solving to deliver exceptional user experiences.
                </p>
                <p className="text-lg text-text/80 leading-relaxed">
                  When I'm not coding, you'll find me contributing to open-source projects, writing technical
                  articles, or exploring the latest developments in artificial intelligence.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center gap-3 group relative overflow-hidden"
                >
                  <span className="relative z-10">Let's Work Together</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                  <motion.div
                    className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
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