import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            Experience
          </h2>
          <div className="w-16 h-1 bg-neon-magenta mb-12" />
        </ScrollFadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-1 bg-gradient-to-b from-neon-cyan to-neon-magenta top-0 bottom-0"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />

          {/* Experience entries */}
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
                <div className="bg-dark-border border border-neon-cyan/20 rounded-lg p-6 hover:border-neon-cyan transition-all hover:shadow-lg hover:shadow-neon-cyan/10">
                  <h3 className="text-xl font-bold text-neon-cyan mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-neon-magenta font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {exp.duration} • {exp.location}
                  </p>

                  {/* Achievements */}
                  <ul className="text-gray-400 text-sm space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-neon-cyan mr-2 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-neon-cyan/10 text-neon-cyan rounded border border-neon-cyan/30"
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
                  className="w-4 h-4 bg-neon-cyan rounded-full border-4 border-dark-bg"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </div>

              {/* Empty space for alternating */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
