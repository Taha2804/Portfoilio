import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TerminalInput from './TerminalInput'
import TerminalOutput from './TerminalOutput'
import TerminalStatus from './TerminalStatus'
import { getCommandResponse, getSectionIdFromCommand } from '../../utils/commandExecutor'
import { scrollToSection } from '../../utils/scrollToSection'
import { Terminal, X, ChevronRight, ChevronLeft } from 'lucide-react'

const WELCOME_LINES = [
  {
    type: 'system',
    content: '╔══════════════════════════════════════════╗',
  },
  {
    type: 'system',
    content: '║  Taha Badami — Portfolio v2.0           ║',
  },
  {
    type: 'system',
    content: '╚══════════════════════════════════════════╝',
  },
  {
    type: 'response',
    content: 'Welcome. Type <span class="text-cyan">help</span> to see available commands.',
  },
]

export default function TerminalShell() {
  const [isOpen, setIsOpen] = useState(false)
  const [lines, setLines] = useState(WELCOME_LINES)
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isHovered, setIsHovered] = useState(false)
  const outputRef = useRef(null)

  // Auto-scroll output
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [lines])

  const handleCommand = (input) => {
    const cmd = input.toLowerCase().trim()
    setHistory((prev) => [...prev, input])
    setHistoryIndex(-1)
    setLines((prev) => [...prev, { type: 'command', content: input }])

    if (cmd === 'clear') {
      setLines(WELCOME_LINES)
      return
    }
    if (cmd === '') return

    // Navigate immediately — don't wait for a typewriter effect
    const sectionId = getSectionIdFromCommand(cmd)
    if (sectionId) {
      scrollToSection(sectionId)
    }

    const response = getCommandResponse(cmd)
    if (response) {
      setLines((prev) => [...prev, { type: 'response', content: response }])
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: 'error',
          content: `command not found: ${input}. Type 'help' for available commands.`,
        },
      ])
    }
  }

  const handleHistoryNav = (dir) => {
    if (history.length === 0) return
    if (dir === 'up') {
      const newIndex =
        historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(newIndex)
      return history[newIndex]
    } else {
      if (historyIndex === -1) return ''
      const newIndex = historyIndex + 1
      if (newIndex >= history.length) {
        setHistoryIndex(-1)
        return ''
      }
      setHistoryIndex(newIndex)
      return history[newIndex]
    }
  }

  return (
    <>
      {/* Floating trigger — always visible on right edge */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={isOpen ? 'Close terminal' : 'Open terminal'}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center justify-center transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="w-14 h-14 bg-cyan/10 border border-cyan/30 rounded-full flex items-center justify-center text-cyan hover:bg-cyan hover:text-base"
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="w-14 h-14 bg-panel/80 backdrop-blur border border-cyan/30 rounded-full flex items-center justify-center text-cyan hover:bg-cyan/20"
            >
              <Terminal size={22} />
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 border border-cyan/40 rounded-full"
                animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Side panel — slides from right, integrated feel */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed right-0 top-0 h-full w-96 max-w-[90vw] bg-base border-l border-border z-40 flex flex-col font-mono shadow-[0_0_80px_rgba(0,0,0,0.6)]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-panel-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-danger" />
                <div className="w-3 h-3 rounded-full bg-amber" />
                <div className="w-3 h-3 rounded-full bg-cyan" />
              </div>
              <span className="text-faint text-xs ml-2 flex-1">
                visitor@portfolio:~
              </span>
              <TerminalStatus status="connected" />
              <button
                onClick={() => setIsOpen(false)}
                className="text-faint hover:text-text transition p-1"
                aria-label="Close terminal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Output */}
            <div
              ref={outputRef}
              className="flex-1 overflow-y-auto px-4 py-4 text-sm leading-relaxed"
            >
              <TerminalOutput lines={lines} />
              <span className="inline-block w-2 h-4 bg-cyan ml-1 caret-blink" />
            </div>

            {/* Input */}
            <div className="border-t border-border bg-panel-2">
              <TerminalInput
                onCommand={handleCommand}
                onHistoryNav={handleHistoryNav}
              />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}