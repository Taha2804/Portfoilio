import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TerminalInput from './TerminalInput'
import TerminalOutput from './TerminalOutput'
import { getCommandResponse, getSectionIdFromCommand } from '../../utils/commandExecutor'
import { scrollToSection } from '../../utils/scrollToSection'
import { Terminal, X } from 'lucide-react'

const WELCOME_LINES = [
  {
    type: 'system',
    content: '╔══════════════════════════════════╗',
  },
  {
    type: 'system',
    content: '║   Taha Badami — Portfolio v1.0   ║',
  },
  {
    type: 'system',
    content: '╚══════════════════════════════════╝',
  },
  {
    type: 'response',
    content: 'Welcome! Type <span class="text-neon-cyan">help</span> to see available commands.',
  },
]

export default function TerminalSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [lines, setLines] = useState(WELCOME_LINES)

  const handleCommand = (input) => {
    const cmd = input.toLowerCase().trim()

    // Add the command line
    const newLines = [{ type: 'command', content: input }]

    if (cmd === 'clear') {
      setLines(WELCOME_LINES)
      return
    }

    // Get response
    const response = getCommandResponse(cmd)
    if (response) {
      newLines.push({ type: 'response', content: response })
    } else {
      newLines.push({
        type: 'error',
        content: `Command not found: ${input}. Type 'help' for available commands.`,
      })
    }

    setLines((prev) => [...prev, ...newLines])

    // Navigate if it's a view command
    const sectionId = getSectionIdFromCommand(cmd)
    if (sectionId) {
      setTimeout(() => scrollToSection(sectionId), 300)
    }
  }

  return (
    <>
      {/* Toggle button (mobile + desktop) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-neon-cyan/20 border border-neon-cyan rounded-full flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all shadow-lg shadow-neon-cyan/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <Terminal size={24} />}
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop on mobile */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Terminal panel */}
            <motion.aside
              className="fixed right-0 top-0 h-full w-80 bg-[#0c1025] border-l border-neon-cyan/30 z-40 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-neon-cyan/20 bg-[#080b1e]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-400 text-xs font-mono ml-2 flex-1">
                  terminal — visitor@portfolio
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-white transition"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Terminal output */}
              <TerminalOutput lines={lines} />

              {/* Terminal input */}
              <div className="border-t border-neon-cyan/20 bg-[#080b1e]">
                <TerminalInput onCommand={handleCommand} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
