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
    content: '╔════════════════════════════════════════╗',
  },
  {
    type: 'system',
    content: '║  Taha Badami — Portfolio v2.0          ║',
  },
  {
    type: 'system',
    content: '╚════════════════════════════════════════╝',
  },
  {
    type: 'response',
    content: 'Welcome. Type <span class="text-cyan">help</span> to see available commands.',
  },
]

export default function TerminalSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [lines, setLines] = useState(WELCOME_LINES)

  const handleCommand = (input) => {
    const cmd = input.toLowerCase().trim()

    const newLines = [{ type: 'command', content: input }]

    if (cmd === 'clear') {
      setLines(WELCOME_LINES)
      return
    }

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

    const sectionId = getSectionIdFromCommand(cmd)
    if (sectionId) {
      setTimeout(() => scrollToSection(sectionId), 300)
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close terminal' : 'Open terminal'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 border border-cyan/50 bg-panel/80 backdrop-blur text-cyan rounded-full flex items-center justify-center hover:bg-cyan hover:text-base transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <Terminal size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              className="fixed right-0 top-0 h-full w-80 bg-panel border-l border-border z-40 flex flex-col font-mono"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-panel-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-danger" />
                  <div className="w-3 h-3 rounded-full bg-amber" />
                  <div className="w-3 h-3 rounded-full bg-cyan" />
                </div>
                <span className="text-faint text-xs ml-2 flex-1">
                  terminal — visitor@portfolio
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-faint hover:text-text transition"
                >
                  <X size={16} />
                </button>
              </div>

              <TerminalOutput lines={lines} />
              <div className="border-t border-border bg-panel-2">
                <TerminalInput onCommand={handleCommand} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}