import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const scrollY = useMotionValue(0)
  const docHeight = useMotionValue(
    typeof document !== 'undefined' ? document.documentElement.scrollHeight : 1
  )

  const spring = useSpring(0, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const h = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      )
      scrollY.set(y)
      docHeight.set(h)
      spring.set(y / h)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollY, docHeight, spring])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan via-amber to-cyan z-50 origin-left"
      style={{ scaleX: spring }}
    />
  )
}