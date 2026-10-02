import { useState, useRef, useEffect } from 'react'

export default function TerminalInput({ onCommand, onHistoryNav }) {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return

    onCommand(trimmed)
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const newInput = onHistoryNav('up', input)
      if (newInput !== undefined) setInput(newInput)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newInput = onHistoryNav('down', input)
      if (newInput !== undefined) setInput(newInput)
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3">
      <span className="text-cyan font-mono text-sm shrink-0">
        visitor@portfolio:~$
      </span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent border-none outline-none text-text font-mono text-sm caret-cyan"
        placeholder="type 'help' for commands..."
        spellCheck={false}
        autoComplete="off"
      />
    </form>
  )
}