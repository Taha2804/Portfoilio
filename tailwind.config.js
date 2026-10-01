export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#050811',
        panel: '#0b1226',
        'panel-2': '#111a33',
        border: '#1c2744',
        cyan: '#00e5ff',
        amber: '#ffb020',
        text: '#e6e9f2',
        muted: '#7c8499',
        faint: '#4a5470',
        danger: '#ff5d5d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}