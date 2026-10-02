import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'
import { Award } from 'lucide-react'
import SectionHeader from '../UI/SectionHeader'
import AnimatedLink from '../UI/AnimatedLink'

export default function Certifications() {
  const { certifications } = portfolioData

  return (
    <section id="certifications" className="py-24 px-6 bg-panel relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="03" title="Certifications" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="relative bg-panel-2 border border-border rounded-sm p-6 overflow-hidden group hover:border-cyan/50 transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan/40" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border border-cyan/40 rounded-sm flex items-center justify-center text-cyan">
                  <Award size={20} />
                </div>
                <span className="font-mono text-xs text-faint tracking-wider">
                  CREDENTIAL
                </span>
              </div>

              <h3 className="text-lg font-display font-semibold text-text mb-2 leading-snug">
                {cert.name}
              </h3>
              <p className="text-cyan text-sm font-medium mb-1">
                {cert.org}
              </p>
              <p className="font-mono text-xs text-amber">
                {'0' + (cert.year % 2000)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}