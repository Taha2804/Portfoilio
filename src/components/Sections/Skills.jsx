import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import SkillCard from '../SkillCard'
import { portfolioData } from '../../data/portfolio'

const categoryLabels = {
  cybersecurity: 'Cybersecurity',
  securityTools: 'Security Tooling',
  networking: 'Networking',
  development: 'Development',
  devops: 'DevOps',
}

export default function Skills() {
  const { skills } = portfolioData
  const categories = Object.entries(skills)

  return (
    <section id="skills" className="py-24 px-6 bg-panel relative">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <div className="flex items-center gap-4 mb-3">
            <span className="font-mono text-xs tracking-[0.3em] text-cyan">01</span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">
              Skills & Expertise
            </h2>
          </div>
          <div className="w-16 h-px bg-amber mb-12" />
        </ScrollFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-display font-medium text-cyan mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-amber rounded-full" />
                {categoryLabels[category] || category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categorySkills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}