import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-base/80 backdrop-blur border-b border-border z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <a href="#hero" className="text-lg font-display font-semibold flex items-center gap-2">
          <span className="text-cyan font-mono text-sm">&gt;</span>
          <span className="text-text">TB_PORTFOLIO</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-cyan transition-colors font-mono tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-cyan hover:text-amber transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-panel border-t border-border px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-cyan transition-colors font-mono text-sm tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}