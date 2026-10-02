import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CountUp({ end, duration = 1.8, delay = 0, suffix = '', prefix = '', className = '' }) {
  const ref = useRef(null)
  const value = useMotionValue(0)
  const spring = useSpring(value, { stiffness: 100, damping: 25 })
  const [display, setDisplay] = useState('0')

  // Subscribe to spring changes so the component re-renders as the number ticks
  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(Math.round(latest).toString())
    })
    return () => unsubscribe()
  }, [spring])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect()
          const startTime = Date.now() + delay * 1000
          const animate = () => {
            const elapsed = (Date.now() - startTime) / 1000
            const progress = Math.min(Math.max(elapsed / duration, 0), 1)
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3)
            value.set(eased * end)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration, delay, value])

  return (
    <motion.span
      ref={ref}
      data-countup={end}
      className={className}
      style={{ display: 'inline-block' }}
    >
      {prefix}
      {display}
      {suffix}
    </motion.span>
  )
}