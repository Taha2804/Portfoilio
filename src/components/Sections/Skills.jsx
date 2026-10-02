import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import SkillRing from '../SkillRing'
import { portfolioData } from '../../data/portfolio'
import SectionHeader from '../UI/SectionHeader'

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
        <SectionHeader number="02" title="Skills & Expertise" />

        {/* Category tabs - pill style */}
        <motion.div
          className="flex flex-wrap gap-2 mt-8 mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-5 py-2.5 text-sm font-mono tracking-wider rounded-full border transition-all ${
                active === key
                  ? 'border-cyan bg-cyan/10 text-cyan shadow-[0_0_20px_rgba(0,229,255,0.15)]'
                  : 'border-border text-muted hover:text-cyan hover:border-cyan/40'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

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
          className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <span className="text-cyan">{categoryLabels[active] || active}</span>
          <span className="text-faint">{activeItems.length} competencies</span>
          <span className="text-amber">
            avg {Math.round(activeItems.reduce((s, x) => s + x.level, 0) / activeItems.length)}%
          </span>
        </motion.div>
      </div>
    </section>
  )
}