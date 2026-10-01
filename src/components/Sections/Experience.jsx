import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-24 px-6 bg-base relative">
      <div className="max-w-4xl mx-auto">
        <ScrollFadeIn>
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-xs tracking-[0.3em] text-cyan">03</span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">
              Experience
            </h2>
          </div>
          <div className="w-16 h-px bg-amber mb-16" />
        </ScrollFadeIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-border" />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-14 flex flex-col md:flex-row md:items-stretch"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-14">
                <div className="bg-panel border border-border rounded-sm p-6 hover:border-cyan/50 transition-colors">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-display font-semibold text-cyan">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-amber font-medium text-sm mb-1">
                    {exp.company}
                  </p>
                  <p className="text-muted text-sm font-mono mb-5">
                    {exp.duration} · {exp.location}
                  </p>

                  <ul className="text-muted text-sm space-y-2.5 mb-5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-cyan mt-1.5 shrink-0">▸</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono text-cyan/80 border border-border rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                <motion.div
                  className="w-3 h-3 bg-cyan rounded-full border-2 border-base"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.4 }}
                />
              </div>

              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}