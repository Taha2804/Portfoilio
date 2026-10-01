import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const { name, title, tagline, email } = portfolioData.personal

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl text-center">
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-xs md:text-sm tracking-[0.3em] text-cyan mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          &gt; PORTFOLIO / SEC-OPS
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-cyan">{name}</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="mt-4 text-2xl md:text-4xl font-display font-medium text-amber"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          {tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <button
            onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary"
          >
            Explore Skills
          </button>
          <a href={`mailto:${email}`} className="btn">
            Get in Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          {[
            { value: '3', label: 'Certifications' },
            { value: '1', label: 'Professional role' },
            { value: '6', label: 'Security toolkits' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-semibold text-cyan">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted mt-1 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <ChevronDown className="text-cyan" size={28} />
      </motion.div>
    </section>
  )
}