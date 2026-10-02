import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Organic, drifting blurred blobs — zhenyary-style ambient background
const blobs = [
  {
    color: 'rgba(0, 229, 255, 0.32)',
    size: 620,
    initial: { x: '-15%', y: '-10%' },
    path: [
      { x: '-10%', y: '-5%' },
      { x: '8%', y: '12%' },
      { x: '-5%', y: '18%' },
      { x: '12%', y: '8%' },
      { x: '-10%', y: '-5%' },
    ],
    dur: 26,
  },
  {
    color: 'rgba(255, 176, 32, 0.28)',
    size: 540,
    initial: { x: '65%', y: '60%' },
    path: [
      { x: '60%', y: '65%' },
      { x: '72%', y: '48%' },
      { x: '58%', y: '42%' },
      { x: '66%', y: '60%' },
      { x: '60%', y: '65%' },
    ],
    dur: 30,
    delay: -8,
  },
  {
    color: 'rgba(0, 229, 255, 0.18)',
    size: 420,
    initial: { x: '50%', y: '-5%' },
    path: [
      { x: '52%', y: '2%' },
      { x: '62%', y: '18%' },
      { x: '48%', y: '22%' },
      { x: '56%', y: '8%' },
      { x: '52%', y: '2%' },
    ],
    dur: 34,
    delay: -16,
  },
  {
    color: 'rgba(255, 93, 93, 0.14)',
    size: 360,
    initial: { x: '-5%', y: '55%' },
    path: [
      { x: '-2%', y: '58%' },
      { x: '10%', y: '68%' },
      { x: '4%', y: '78%' },
      { x: '-2%', y: '58%' },
    ],
    dur: 28,
    delay: -4,
  },
]

export default function DriftingBlobs() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            background: b.color,
            filter: 'blur(110px)',
            opacity: 0.85,
          }}
          initial={b.initial}
          animate={b.path}
          transition={{
            duration: b.dur,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: b.delay,
          }}
        />
      ))}
    </div>
  )
}