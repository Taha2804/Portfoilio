import { motion } from 'framer-motion'
import AnimatedLink from './AnimatedLink'

// Section header with "=====" separator and number — zhenyary editorial style
export default function SectionHeader({
  number,
  title,
  linkHref,
  linkText = 'View all',
  className = '',
}) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 ${className}`}>
      <div className="relative">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-cyan tracking-[0.3em]">
            {number}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">
            {title}
          </h2>
        </div>
        {/* ===== separator */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1 h-px bg-border" />
          <span className="text-cyan font-mono text-xs tracking-widest">=====</span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      {linkHref && (
        <AnimatedLink href={linkHref} variant="cyan" className="mt-4 sm:mt-0">
          {linkText}
        </AnimatedLink>
      )}
    </div>
  )
}