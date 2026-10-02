import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'
import { Shield, Code, Server, Brain } from 'lucide-react'
import SectionHeader from '../UI/SectionHeader'

const strengthIcons = {
  'security operations': Shield,
  'vulnerability assessment': Shield,
  'penetration testing': Shield,
  'python scripting': Code,
  'automation': Code,
  'network defense': Server,
  'incident response': Server,
  'continuous learning': Brain,
  'problem solving': Brain,
  'adaptability': Brain,
}

export default function About() {
  const { about } = portfolioData

  return (
    <section id="about" className="py-24 px-6 bg-panel relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="08" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Bio */}
          <div className="lg:col-span-3">
            <div className="bg-panel-2 border border-border rounded-sm p-8">
              <p className="text-muted leading-relaxed text-[1.05rem]">
                <span className="text-cyan font-mono mr-2">{'>>'}</span>
                {about.bio}
              </p>
            </div>
          </div>

          {/* Strengths */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-mono text-cyan tracking-wider mb-5">
              Core Competencies
            </h3>
            <div className="space-y-3">
              {about.strengths.map((strength, index) => {
                const Icon = strengthIcons[strength.toLowerCase()] || Shield
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-panel-2 border border-border rounded-sm hover:border-cyan/50 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-9 h-9 border border-cyan/40 rounded-sm flex items-center justify-center text-cyan shrink-0">
                      <Icon size={18} />
                    </div>
                    <span className="text-text text-sm font-medium">
                      {strength}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}