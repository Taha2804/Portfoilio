import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-bg border-b border-dark-border z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold">
          <span className="text-neon-cyan">$ </span>
          <span className="text-white">TB_PORTFOLIO</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-neon-cyan hover:text-neon-magenta transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-dark-bg border-t border-dark-border px-6 py-4">
          <a href="#skills" className="block py-2 text-neon-cyan hover:text-neon-magenta">
            Skills
          </a>
          <a href="#experience" className="block py-2 text-neon-cyan hover:text-neon-magenta">
            Experience
          </a>
          <a href="#projects" className="block py-2 text-neon-cyan hover:text-neon-magenta">
            Projects
          </a>
          <a href="#about" className="block py-2 text-neon-cyan hover:text-neon-magenta">
            About
          </a>
          <a href="#contact" className="block py-2 text-neon-cyan hover:text-neon-magenta">
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}
