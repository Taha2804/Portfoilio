import { useEffect, useRef, useState } from 'react'

// Each portfolio section becomes a "planet" on the helix
const SECTIONS = [
  { id: 'hero', name: 'HERO', color: '#00e5ff' },
  { id: 'skills', name: 'SKILLS', color: '#ffb020' },
  { id: 'certifications', name: 'CERTS', color: '#a855f7' },
  { id: 'experience', name: 'EXPERIENCE', color: '#10b981' },
  { id: 'projects', name: 'PROJECTS', color: '#ef4444' },
  { id: 'education', name: 'EDUCATION', color: '#38bdf8' },
  { id: 'achievements', name: 'ACHIEVEMENTS', color: '#f59e0b' },
  { id: 'languages', name: 'LANGUAGES', color: '#ec4899' },
  { id: 'about', name: 'ABOUT', color: '#84cc16' },
  { id: 'contact', name: 'CONTACT', color: '#06b6d4' },
]

export default function SpiralBackground() {
  const canvasRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [docHeight, setDocHeight] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let scrollY = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      setDocHeight(document.documentElement.scrollHeight)
    }
    resize()
    window.addEventListener('resize', resize)

    // Track which section is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SECTIONS.findIndex((s) => s.id === entry.target.id)
            if (idx >= 0) setActiveIndex(idx)
          }
        })
      },
      { threshold: 0.5 }
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    // Scroll sync — drives helix rotation
    const onScroll = () => {
      scrollY = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const draw = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      const cx = w / 2
      const totalHeight = Math.max(docHeight, h)
      const R = Math.min(w, h) * 0.16
      const pitch = totalHeight / (SECTIONS.length * 2.2)

      // Rotation driven by scroll — the helix spins around its vertical axis
      const rotation = scrollY * 0.004
      const totalT = (totalHeight / pitch) * Math.PI * 2

      // Central axis (the "straight line" the spiral wraps around)
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.05)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(cx, 0)
      ctx.lineTo(cx, h)
      ctx.stroke()

      // Draw the helix spine
      const steps = 700
      for (let i = 0; i < steps; i++) {
        const t = (i / steps) * totalT
        const angle = t + rotation
        const x = cx + R * Math.cos(angle)
        const y = (t / totalT) * totalHeight - scrollY
        if (y < -60 || y > h + 60) continue

        const depth = (Math.sin(angle) + 1) / 2 // 0 = back, 1 = front
        const scale = 0.4 + 0.6 * depth
        const px = cx + (x - cx) * scale
        const py = y

        ctx.fillStyle = `rgba(0, 229, 255, ${0.03 + depth * 0.1})`
        ctx.beginPath()
        ctx.arc(px, py, 1.2 + depth * 1.8, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw planets (sections) orbiting the helix
      SECTIONS.forEach((section, idx) => {
        const t = (idx / (SECTIONS.length - 1)) * totalT
        const angle = t + rotation
        const x = cx + R * Math.cos(angle)
        const y = (t / totalT) * totalHeight - scrollY
        if (y < -200 || y > h + 200) return

        const depth = (Math.sin(angle) + 1) / 2
        const scale = 0.4 + 0.6 * depth
        const px = cx + (x - cx) * scale
        const py = y

        const isActive = idx === activeIndex
        const planetR = isActive ? 16 : 6 + depth * 5

        // Secondary orbit — each planet spins around its helix position
        const orbitAngle = (Date.now() / 1000) * (1 + idx * 0.25)
        const orbitR = planetR * 2.5
        const ox = px + Math.cos(orbitAngle) * orbitR * scale
        const oy = py + Math.sin(orbitAngle) * orbitR * 0.4

        // Glow halo
        const glow = ctx.createRadialGradient(ox, oy, 0, ox, oy, planetR * 7)
        glow.addColorStop(0, section.color + (isActive ? 'ff' : '50'))
        glow.addColorStop(1, section.color + '00')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(ox, oy, planetR * 7, 0, Math.PI * 2)
        ctx.fill()

        // Planet body
        ctx.fillStyle = section.color
        ctx.beginPath()
        ctx.arc(ox, oy, planetR, 0, Math.PI * 2)
        ctx.fill()

        // Ring around planet
        ctx.strokeStyle = section.color + '55'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.ellipse(ox, oy, planetR * 1.8, planetR * 0.5, orbitAngle, 0, Math.PI * 2)
        ctx.stroke()

        // Label for the active planet
        if (isActive) {
          ctx.fillStyle = section.color
          ctx.font = 'bold 11px monospace'
          ctx.fillText(section.name, ox + planetR + 12, oy + 4)
        }
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [docHeight, activeIndex])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  )
}