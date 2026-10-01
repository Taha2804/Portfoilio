import { motion } from 'framer-motion'

export default function SkillCard({ name, level, index }) {
  return (
    <motion.div
      className="bg-panel border border-border rounded-sm p-5 hover:border-cyan/60 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-medium text-text text-sm">{name}</h4>
        <span className="text-xs font-mono text-faint">{level}%</span>
      </div>

      <div className="w-full bg-base rounded-sm h-1 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan to-amber"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.9, delay: index * 0.05 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}