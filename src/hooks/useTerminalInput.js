import { useState, useCallback } from 'react'

export function useTerminalInput() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [output, setOutput] = useState([
    { type: 'system', text: '$ Welcome to Portfolio CLI' },
    { type: 'system', text: '$ Type "help" for available commands' },
  ])

  const addOutput = useCallback((text, type = 'output') => {
    setOutput((prev) => [...prev, { type, text }])
  }, [])

  const executeCommand = useCallback((command) => {
    const trimmed = command.trim().toLowerCase()

    setHistory((prev) => [...prev, command])
    setHistoryIndex(-1)

    addOutput(`$ ${command}`, 'command')

    return { command: trimmed, addOutput }
  }, [addOutput])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }, [history, historyIndex])

  return {
    input,
    setInput,
    history,
    output,
    addOutput,
    executeCommand,
    handleKeyDown,
  }
}
