import { motion } from 'framer-motion'

export default function SkillCard({ name, level, index }) {
  return (
    <motion.div
      className="bg-dark-border border border-dark-border rounded-lg p-6 hover:border-neon-cyan transition-all hover:shadow-lg hover:shadow-neon-cyan/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-neon-cyan">{name}</h4>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>

      {/* Proficiency bar */}
      <div className="w-full bg-dark-bg rounded h-2">
        <motion.div
          className="bg-gradient-to-r from-neon-cyan to-neon-magenta h-2 rounded"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.05 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}
