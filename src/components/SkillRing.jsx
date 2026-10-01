import { motion } from 'framer-motion'

export default function SkillRing({ name, level, index }) {
  const radius = 34
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (level / 100) * circumference

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 140 140">
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="rgba(28, 39, 68, 0.6)"
            strokeWidth="6"
          />
          <motion.circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="url(#grad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ filter: 'drop-shadow(0 0 4px rgba(0,229,255,0.4))' }}
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00e5ff" />
              <stop offset="100%" stopColor="#ffb020" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-display font-semibold text-text">
            {level}<span className="text-cyan text-sm">%</span>
          </span>
        </div>
      </div>
      <span className="mt-2 text-sm text-muted leading-snug">
        {name}
      </span>
    </motion.div>
  )
}