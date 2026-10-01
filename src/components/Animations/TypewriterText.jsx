import { motion } from 'framer-motion'

export default function TypewriterText({ text, duration = 5 }) {
  const characters = text.split('')

  return (
    <motion.div className="inline">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: (duration / characters.length) * i,
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-1 h-8 bg-neon-cyan ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </motion.div>
  )
}
