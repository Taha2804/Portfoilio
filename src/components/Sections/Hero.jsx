import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolio'
import { ChevronDown, ArrowRight } from 'lucide-react'
import CountUp from '../Animations/CountUp'
import AnimatedLink from '../UI/AnimatedLink'

export default function Hero() {
  const { name, title, tagline, email } = portfolioData.personal

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden"
    >
      {/* Floating UI hint - zhenyary style */}
      <motion.div
        className="fixed top-8 right-8 z-10 hidden md:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center gap-2 text-cyan font-mono text-xs">
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ▼
          </motion.span>
          <span className="tracking-wider">SCROLL</span>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-4xl text-center">
        {/* Eyebrow - zhenyary style */}
        <motion.p
          className="font-mono text-xs md:text-sm tracking-[0.3em] text-cyan mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          &gt; PORTFOLIO / SEC-OPS
        </motion.p>

        {/* Name - large display type */}
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

        {/* CTAs with AnimatedLink style */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <AnimatedLink
            href="#skills"
            variant="cyan"
            className="px-6 py-3 border border-cyan/40 rounded-sm hover:bg-cyan hover:text-base transition-all"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="flex items-center gap-2">
              Explore Skills
              <ArrowRight size={16} />
            </span>
          </AnimatedLink>
          <AnimatedLink
            href={`mailto:${email}`}
            variant="amber"
            className="px-6 py-3 border border-amber/40 rounded-sm hover:bg-amber hover:text-base transition-all"
          >
            <span className="flex items-center gap-2">
              Get in Touch
              <ArrowRight size={16} />
            </span>
          </AnimatedLink>
        </motion.div>

        {/* Stats with CountUp */}
        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          {[
            { value: 3, label: 'Certifications' },
            { value: 1, label: 'Professional role' },
            { value: 6, label: 'Security toolkits' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-semibold text-cyan">
                <CountUp end={stat.value} duration={1.6} delay={1.7 + i * 0.15} />
              </div>
              <div className="text-xs md:text-sm text-muted mt-1 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <ChevronDown className="text-cyan" size={28} />
        </motion.div>
      </div>
    </section>
  )
}