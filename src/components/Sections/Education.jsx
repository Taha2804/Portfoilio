import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  const { education } = portfolioData

  return (
    <section id="education" className="py-24 px-6 bg-base relative">
      <div className="max-w-5xl mx-auto">
        <ScrollFadeIn>
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-xs tracking-[0.3em] text-cyan">05</span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">
              Education
            </h2>
          </div>
          <div className="w-16 h-px bg-amber mb-14" />
        </ScrollFadeIn>

        <div className="space-y-5">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="group bg-panel border border-border rounded-sm p-6 hover:border-cyan/50 transition-colors flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 border border-cyan/40 rounded-sm flex items-center justify-center text-cyan shrink-0">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-text group-hover:text-cyan transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-muted text-sm mt-0.5">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 sm:gap-8">
                <span className="font-mono text-xs text-faint">{edu.period}</span>
                {edu.score && (
                  <span className="px-3 py-1 text-xs font-mono text-amber border border-amber/30 rounded-sm">
                    {edu.score}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}