import { useEffect, useRef } from 'react'

export default function TerminalOutput({ lines }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  return (
    <div className="flex-1 overflow-y-auto px-3 py-2 font-mono text-sm space-y-1 custom-scrollbar">
      {lines.map((line, index) => (
        <div key={index} className="leading-relaxed">
          {line.type === 'command' && (
            <div>
              <span className="text-neon-cyan">visitor@portfolio:~$ </span>
              <span className="text-white">{line.content}</span>
            </div>
          )}
          {line.type === 'response' && (
            <div
              className="text-gray-400 whitespace-pre-wrap pl-2"
              dangerouslySetInnerHTML={{ __html: line.content }}
            />
          )}
          {line.type === 'error' && (
            <div className="text-red-400 pl-2">{line.content}</div>
          )}
          {line.type === 'system' && (
            <div className="text-neon-magenta pl-2">{line.content}</div>
          )}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
