import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import SkillCard from '../SkillCard'
import { portfolioData } from '../../data/portfolio'

export default function Skills() {
  const { skills } = portfolioData
  const categories = Object.entries(skills)

  return (
    <section id="skills" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-neon-magenta mb-12" />
        </ScrollFadeIn>

        {/* Skills by category */}
        {categories.map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-neon-purple capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </section>
  )
}
