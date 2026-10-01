import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TerminalInput from './TerminalInput'
import TerminalOutput from './TerminalOutput'
import { getCommandResponse, getSectionIdFromCommand } from '../../utils/commandExecutor'
import { scrollToSection } from '../../utils/scrollToSection'
import { Terminal, X, ChevronUp, ChevronDown } from 'lucide-react'

const WELCOME_LINES = [
  {
    type: 'system',
    content: '╔══════════════════════════════════════════╗',
  },
  {
    type: 'system',
    content: '║   Taha Badami — Portfolio v2.0           ║',
    content2: '║   visitor@portfolio ~                    ║',
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

export default function TerminalSidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [lines, setLines] = useState(WELCOME_LINES)
  const [isTyping, setIsTyping] = useState(false)
  const [typed, setTyped] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const outputRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll output to bottom
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [lines, isTyping, typed])

  // Type out a response character-by-character
  const typeResponse = (html) => {
    return new Promise((resolve) => {
      let i = 0
      const step = () => {
        setTyped((prev) => prev + html[i])
        i++
        if (i < html.length) {
          setTimeout(step, 18)
        } else {
          resolve()
        }
      }
      step()
    })
  }

  const handleCommand = async (input) => {
    const cmd = input.toLowerCase().trim()

    // Record history
    setHistory((prev) => [...prev, input])
    setHistoryIndex(-1)

    // Echo the command
    setLines((prev) => [...prev, { type: 'command', content: input }])

    if (cmd === 'clear') {
      setLines(WELCOME_LINES)
      setTyped('')
      return
    }

    if (cmd === '') return

    const response = getCommandResponse(cmd)
    if (response) {
      // Typewriter reveal
      setIsTyping(true)
      setTyped('')
      await typeResponse(response)
      setLines((prev) => [...prev, { type: 'response', content: typed + response }])
      setTyped('')
      setIsTyping(false)
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: 'error',
          content: `command not found: ${input}. Type 'help' for available commands.`,
        },
      ])
    }

    const sectionId = getSectionIdFromCommand(cmd)
    if (sectionId) {
      setTimeout(() => scrollToSection(sectionId), 250)
    }
  }

  const handleHistoryNav = (dir, currentInput) => {
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
      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close terminal' : 'Open terminal'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 border border-cyan/50 bg-panel/80 backdrop-blur text-cyan rounded-full flex items-center justify-center hover:bg-cyan hover:text-base transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={22} /> : <Terminal size={22} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              className="fixed right-0 top-0 h-full w-96 max-w-[90vw] bg-panel border-l border-border z-40 flex flex-col font-mono shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-panel-2">
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
                  aria-label="Close terminal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Output */}
              <div
                ref={outputRef}
                className="flex-1 overflow-y-auto px-4 py-3 text-sm leading-relaxed"
              >
                <TerminalOutput lines={lines} />
                {isTyping && (
                  <div className="text-muted mt-1" dangerouslySetInnerHTML={{ __html: typed }} />
                )}
                {isTyping && (
                  <span className="inline-block w-2 h-4 bg-cyan ml-1 caret-blink" />
                )}
              </div>

              {/* Input */}
              <div className="border-t border-border bg-panel-2">
                <TerminalInput
                  onCommand={handleCommand}
                  onHistoryNav={handleHistoryNav}
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}