import { motion } from 'framer-motion'

export default function GlitchEffect({ children, className = '' }) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover={{
        textShadow: [
          '0 0 0px #00ff88',
          '-2px 0px #ff00ff, 2px 2px #00ff88',
          '2px 0px #00ff88, -2px -2px #ff00ff',
          '0 0 0px #00ff88',
        ],
      }}
      transition={{ duration: 0.3, repeat: Infinity }}
    >
      {children}
    </motion.div>
  )
}
