import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'
import { Github } from 'lucide-react'
import SectionHeader from '../UI/SectionHeader'
import AnimatedLink from '../UI/AnimatedLink'

export default function Projects() {
  const { projects } = portfolioData

  return (
    <section id="projects" className="py-24 px-6 bg-panel relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="05" title="Projects" linkHref="#contact" linkText="View Code" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-panel-2 border border-border rounded-sm p-6 hover:border-cyan/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-display font-semibold text-text group-hover:text-cyan transition-colors">
                  {project.name}
                </h3>
                <span className="text-xs font-mono text-faint shrink-0 ml-3">
                  {project.period}
                </span>
              </div>

              <p className="text-muted text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <ul className="text-sm space-y-2 mb-5">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-muted">
                    <span className="text-amber mt-1.5 shrink-0">▸</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono text-cyan/80 border border-border rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <AnimatedLink
                  href={project.github}
                  variant="cyan"
                  className="inline-flex items-center gap-2 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} /> View Code
                </AnimatedLink>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}