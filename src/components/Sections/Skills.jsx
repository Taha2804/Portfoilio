import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import SkillRing from '../SkillRing'
import { portfolioData } from '../../data/portfolio'

const categoryLabels = {
  cybersecurity: 'Cybersecurity',
  securityTools: 'Security Tooling',
  networking: 'Networking',
  development: 'Development',
  devops: 'DevOps',
}

const categoryOrder = [
  'cybersecurity',
  'securityTools',
  'networking',
  'development',
  'devops',
]

export default function Skills() {
  const { skills } = portfolioData
  const [active, setActive] = useState('cybersecurity')

  const categories = categoryOrder
    .filter((key) => skills[key])
    .map((key) => ({ key, label: categoryLabels[key] || key, items: skills[key] }))

  const activeItems = skills[active] || []

  return (
    <section id="skills" className="py-24 px-6 bg-panel relative">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-xs tracking-[0.3em] text-cyan">02</span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">
              Skills & Expertise
            </h2>
          </div>
          <div className="w-16 h-px bg-amber mb-12" />
        </ScrollFadeIn>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-2 text-sm font-mono tracking-wider rounded-sm border transition-all ${
                active === key
                  ? 'border-cyan bg-cyan/10 text-cyan'
                  : 'border-border text-muted hover:text-cyan hover:border-cyan/40'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skill rings */}
        <motion.div
          key={active}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {activeItems.map((skill, index) => (
            <SkillRing
              key={skill.name}
              name={skill.name}
              level={skill.level}
              index={index}
            />
          ))}
        </motion.div>

        {/* Category summary */}
        <motion.div
          key={active + '-summary'}
          className="mt-12 pt-6 border-t border-border flex items-center justify-between text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <span className="text-cyan">
            {categoryLabels[active] || active}
          </span>
          <span className="text-faint">
            {activeItems.length} competencies
          </span>
          <span className="text-amber">
            avg {Math.round(activeItems.reduce((s, x) => s + x.level, 0) / activeItems.length)}%
          </span>
        </motion.div>
      </div>
    </section>
  )
}