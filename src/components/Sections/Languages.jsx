import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'
import { Globe } from 'lucide-react'

const levelColor = {
  Native: 'text-amber',
  Professional: 'text-cyan',
  Intermediate: 'text-text',
}

export default function Languages() {
  const { languages } = portfolioData

  return (
    <section id="languages" className="py-24 px-6 bg-panel-2 relative">
      <div className="max-w-5xl mx-auto">
        <ScrollFadeIn>
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-xs tracking-[0.3em] text-cyan">07</span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">
              Languages
            </h2>
          </div>
          <div className="w-16 h-px bg-amber mb-14" />
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              className="bg-panel border border-border rounded-sm p-6 hover:border-cyan/50 transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border border-cyan/40 rounded-sm flex items-center justify-center text-cyan">
                  <Globe size={20} />
                </div>
                <h3 className="text-lg font-display font-semibold text-text">
                  {lang.name}
                </h3>
              </div>
              <span
                className={`px-3 py-1 text-xs font-mono rounded-sm border ${
                  levelColor[lang.proficiency] || 'text-text'
                } border-current/30`}
              >
                {lang.proficiency}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}