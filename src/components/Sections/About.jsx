import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'
import { Shield, Code, Server, Brain } from 'lucide-react'

const strengthIcons = {
  'Security-First Mindset': Shield,
  'Full-Stack Development': Code,
  'DevOps & Automation': Server,
  'Continuous Learning': Brain,
}

export default function About() {
  const { about } = portfolioData

  return (
    <section id="about" className="py-20 px-6 bg-[#0d1230]">
      <div className="max-w-5xl mx-auto">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            About Me
          </h2>
          <div className="w-16 h-1 bg-neon-magenta mb-12" />
        </ScrollFadeIn>

        {/* Bio */}
        <ScrollFadeIn direction="left">
          <div className="bg-dark-border border border-dark-border rounded-lg p-8 mb-12">
            <p className="text-gray-300 text-lg leading-relaxed font-mono">
              <span className="text-neon-cyan">{'> '}</span>
              {about.bio}
            </p>
          </div>
        </ScrollFadeIn>

        {/* Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {about.strengths.map((strength, index) => {
            const Icon = strengthIcons[strength.title] || Shield
            return (
              <motion.div
                key={index}
                className="bg-dark-border border border-dark-border rounded-lg p-6 hover:border-neon-purple transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-neon-purple/20 rounded-lg flex items-center justify-center">
                    <Icon size={20} className="text-neon-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {strength.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
