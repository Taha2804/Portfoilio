import { motion } from 'framer-motion'

// Link with sweeping underline — zhenyary style
export default function AnimatedLink({
  children,
  href,
  className = '',
  variant = 'default',
  ...props
}) {
  const color = variant === 'cyan' ? '#00e5ff' : '#ffb020'
  const textColor = variant === 'cyan' ? 'text-cyan' : 'text-amber'

  return (
    <a
      href={href}
      className={`relative inline-flex items-center ${textColor} font-mono text-sm tracking-wider ${className}`}
      {...props}
    >
      {children}
      <motion.span
        className="absolute bottom-[-2px] left-0 h-[1px] w-full"
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0, originX: 1 }}
        whileHover={{ scaleX: 1, originX: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </a>
  )
}