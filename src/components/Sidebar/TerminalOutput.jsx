export default function TerminalOutput({ lines }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 text-sm leading-relaxed">
      {lines.map((line, i) => {
        if (line.type === 'system') {
          return (
            <div key={i} className="text-cyan/70 text-xs mb-1">
              {line.content}
            </div>
          )
        }
        if (line.type === 'command') {
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="text-cyan shrink-0">visitor@portfolio:~$</span>
              <span className="text-text">{line.content}</span>
            </div>
          )
        }
        if (line.type === 'error') {
          return (
            <div key={i} className="text-danger mb-1">
              {line.content}
            </div>
          )
        }
        return (
          <div
            key={i}
            className="text-muted mb-1"
            dangerouslySetInnerHTML={{ __html: line.content }}
          />
        )
      })}
    </div>
  )
}