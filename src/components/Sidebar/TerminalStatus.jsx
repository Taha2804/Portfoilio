import { motion } from 'framer-motion'

export default function TerminalStatus({ status = 'connected' }) {
  const statusConfig = {
    connected: { color: 'text-cyan', label: 'CONNECTED', pulse: true },
    connecting: { color: 'text-amber', label: 'CONNECTING...', pulse: true },
    offline: { color: 'text-danger', label: 'OFFLINE', pulse: false },
  }

  const { color, label, pulse } = statusConfig[status] || statusConfig.connected

  return (
    <motion.div
      className={`flex items-center gap-2 px-3 py-1.5 bg-panel-2 border border-border rounded-sm ${color}`}
      animate={{ opacity: pulse ? [1, 0.5, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <span className="w-2 h-2 rounded-full bg-current" />
      <span className="font-mono text-xs tracking-wider">{label}</span>
    </motion.div>
  )
}