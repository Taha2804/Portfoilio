import { motion } from 'framer-motion'
import TypewriterText from '../Animations/TypewriterText'
import { portfolioData } from '../../data/portfolio'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const { title, tagline } = portfolioData.personal

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl -top-48 -left-48"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl -bottom-48 -right-48"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 max-w-4xl text-center">
        {/* Title with typewriter effect */}
        <div className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
          <TypewriterText text={title} duration={5} />
        </div>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          Securing systems. Building solutions. Combining cybersecurity expertise with full-stack development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 0.8 }}
        >
          <button
            onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary"
          >
            Explore My Work
          </button>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="btn"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-neon-cyan" size={32} />
      </motion.div>
    </section>
  )
}
