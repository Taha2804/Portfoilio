import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'
import SectionHeader from '../UI/SectionHeader'
import AnimatedLink from '../UI/AnimatedLink'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-24 px-6 bg-base relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeader number="04" title="Experience" />

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative bg-panel border border-border rounded-sm p-6 hover:border-cyan/50 transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-cyan">
                    {exp.role}
                  </h3>
                  <p className="text-amber font-medium text-sm mt-1">
                    {exp.company}
                  </p>
                  <p className="text-muted text-sm font-mono mt-1">
                    {exp.duration} · {exp.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-cyan/80 border border-border rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="text-muted text-sm space-y-2.5">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-cyan mt-1.5 shrink-0">▸</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}