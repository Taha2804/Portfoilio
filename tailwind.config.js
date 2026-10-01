export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0e27',
        'dark-border': '#1a1f3a',
        'neon-cyan': '#00ff88',
        'neon-magenta': '#ff00ff',
        'neon-purple': '#9d4edd',
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
        terminal: ['Fira Code', 'monospace'],
      },
    },
  },
  darkMode: 'class',
}
