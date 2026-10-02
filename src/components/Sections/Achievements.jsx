import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'
import { Trophy, Cpu, GitBranch } from 'lucide-react'
import SectionHeader from '../UI/SectionHeader'

const iconFor = (text) => {
  const t = text.toLowerCase()
  if (t.includes('hackthebox') || t.includes('ctf')) return Trophy
  if (t.includes('python') || t.includes('script')) return Cpu
  return GitBranch
}

export default function Achievements() {
  const { achievements } = portfolioData

  return (
    <section id="achievements" className="py-24 px-6 bg-panel relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="07" title="Achievements & Activities" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((item, index) => {
            const Icon = iconFor(item)
            return (
              <motion.div
                key={index}
                className="relative bg-panel-2 border border-border rounded-sm p-6 overflow-hidden hover:border-cyan/50 transition-colors"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan/40" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-cyan/40 rounded-sm flex items-center justify-center text-cyan shrink-0">
                    <Icon size={20} />
                  </div>
                  <p className="text-muted text-sm leading-relaxed pt-1">
                    {item}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}