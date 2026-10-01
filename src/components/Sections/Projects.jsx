import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'
import { Github } from 'lucide-react'

export default function Projects() {
  const { projects } = portfolioData

  return (
    <section id="projects" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            Projects
          </h2>
          <div className="w-16 h-1 bg-neon-magenta mb-12" />
        </ScrollFadeIn>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark-border border border-dark-border rounded-lg overflow-hidden hover:border-neon-cyan transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-neon-cyan mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4 text-sm space-y-2">
                  <p className="text-neon-purple">
                    <span className="font-semibold">Dev:</span> {project.highlights.dev}
                  </p>
                  <p className="text-neon-cyan">
                    <span className="font-semibold">Security:</span> {project.highlights.security}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-neon-cyan/10 text-neon-cyan rounded border border-neon-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neon-cyan hover:text-neon-magenta transition"
                    >
                      <Github size={18} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
