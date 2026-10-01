# Cybersecurity Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fully animated React portfolio website with dark/neon aesthetic, terminal-based navigation sidebar, and consolidated cybersecurity + development skills from multiple resumes.

**Architecture:** React 18 with Vite for fast builds. Framer Motion for animations. Tailwind CSS for styling with custom dark theme and neon colors. Terminal sidebar component handles command input/output with smooth scroll navigation to sections. Main content area displays Hero, Skills, Experience, Projects, About, and Contact sections with scroll-triggered animations. All content pulled from centralized data structure.

**Tech Stack:** React 18, Vite, Framer Motion, Tailwind CSS, React Router DOM (or Scroll), TypeScript (optional), Vercel/Netlify for deployment.

**Spec:** `docs/superpowers/specs/2026-10-02-cybersecurity-portfolio-design.md`

## Global Constraints

- React 18+, Vite build tool
- Tailwind CSS for styling with dark theme
- Framer Motion for animations (primary)
- Color palette: Background `#0a0e27`, Neon cyan `#00ff88`, Magenta `#ff00ff`, Purple `#9d4edd`
- Monospace font for terminal (Courier New or Fira Code)
- Animations run at 60fps, minimal layout thrashing
- Semantic HTML, WCAG AA color contrast, keyboard navigation support
- Mobile responsive (desktop, tablet, mobile breakpoints)
- Deployment: Vercel or Netlify with free tier
- Lighthouse score target >90 across categories

## Review Focus

1. **Terminal command execution** — User types command → page scrolls to section → terminal shows feedback. Must handle invalid commands gracefully (show help, don't crash).
2. **Scroll animations** — Sections fade/slide in as they enter viewport. Must not interfere with native scroll behavior or create jank at 60fps.
3. **Neon glow effects on dark background** — Glows and highlights must be visible and legible without washing out text. Must maintain contrast.
4. **Mobile responsiveness** — Sidebar collapses, layout stacks vertically. Terminal becomes tabs/buttons. Must remain functional and performant.
5. **Resume data consolidation** — Content pulled from multiple resume PDFs merged into single data structure. Duplicate skills/roles deduplicated, organized by domain (security, dev, DevOps).

---

## File Structure

### Core Project Files
```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Top nav bar with logo/mobile menu toggle
│   │   ├── Sidebar/
│   │   │   ├── TerminalSidebar.jsx    # Main sidebar wrapper
│   │   │   ├── TerminalInput.jsx      # Input field with command parsing
│   │   │   └── TerminalOutput.jsx     # Output display with history
│   │   ├── Sections/
│   │   │   ├── Hero.jsx              # Hero with typewriter title
│   │   │   ├── Skills.jsx            # Skill cards grid with categories
│   │   │   ├── Experience.jsx        # Timeline with consolidated roles
│   │   │   ├── Projects.jsx          # Project cards with tech stacks
│   │   │   ├── About.jsx             # Bio section
│   │   │   └── Contact.jsx           # Contact links and CTA
│   │   ├── Animations/
│   │   │   ├── TypewriterText.jsx    # Typewriter effect component
│   │   │   ├── ScrollFadeIn.jsx      # Scroll-triggered fade/slide
│   │   │   └── GlitchEffect.jsx      # Glitch effect wrapper
│   │   └── SkillCard.jsx             # Reusable skill card component
│   ├── data/
│   │   └── portfolio.js             # All content data
│   ├── styles/
│   │   ├── globals.css              # Base styles, color variables
│   │   ├── theme.css                # Neon colors, animations
│   │   └── animations.css           # Keyframes for glitch, scanlines
│   ├── hooks/
│   │   ├── useTerminalInput.js      # Terminal command parsing and state
│   │   ├── useScrollAnimation.js    # Scroll-triggered animation logic
│   │   └── useLocalStorage.js       # Terminal history persistence
│   ├── utils/
│   │   ├── scrollToSection.js       # Smooth scroll utility
│   │   └── commandExecutor.js       # Terminal command routing
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── favicon.ico
│   └── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

### Key Responsibilities
- **TerminalSidebar:** Fixed sidebar, manages terminal state, displays input/output
- **TerminalInput:** Command parsing, history navigation, executes commands
- **TerminalOutput:** Displays command history and responses with animations
- **Sections:** Each section is self-contained, scroll-triggered animations
- **portfolio.js:** Single source of truth for all content (skills, experience, projects, about, contact)
- **Hooks:** Reusable logic for terminal, scroll animations, local storage

---

## Task Breakdown

### Task 1: Project Setup & Configuration

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `public/index.html`
- Create: `.gitignore`

**Interfaces:**
- Produces: React app scaffold, Vite dev server, Tailwind CSS available, ready for component development

- [ ] **Step 1: Initialize Node project**

```bash
cd C:\Users\badam\Desktop\portfolio
npm init -y
```

- [ ] **Step 2: Install core dependencies**

```bash
npm install react react-dom
npm install -D vite @vitejs/plugin-react
npm install -D tailwindcss postcss autoprefixer
npm install -D eslint prettier
```

- [ ] **Step 3: Create Vite config**

File: `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
})
```

- [ ] **Step 4: Create Tailwind config**

File: `tailwind.config.js`
```javascript
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
```

- [ ] **Step 5: Create PostCSS config**

File: `postcss.config.js`
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 6: Create main.jsx**

File: `src/main.jsx`
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

- [ ] **Step 7: Create App.jsx scaffold**

File: `src/App.jsx`
```javascript
import Header from './components/Header'
import TerminalSidebar from './components/Sidebar/TerminalSidebar'
import Hero from './components/Sections/Hero'
import Skills from './components/Sections/Skills'
import Experience from './components/Sections/Experience'
import Projects from './components/Sections/Projects'
import About from './components/Sections/About'
import Contact from './components/Sections/Contact'

export default function App() {
  return (
    <div className="bg-dark-bg text-white min-h-screen">
      <Header />
      <div className="flex">
        <TerminalSidebar />
        <main className="flex-1 overflow-auto">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  )
}
```

- [ ] **Step 8: Create public/index.html**

File: `public/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Taha Badami | Security Specialist & Developer</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

- [ ] **Step 9: Create src/index.css with Tailwind directives**

File: `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0a0e27;
  color: #e0e0e0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

- [ ] **Step 10: Create .gitignore**

File: `.gitignore`
```
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
.vite/
```

- [ ] **Step 11: Update package.json scripts**

File: `package.json`
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

- [ ] **Step 12: Test dev server**

```bash
npm run dev
```

Expected: Vite dev server starts on port 3000, browser opens, shows error (components not yet created — expected).

- [ ] **Step 13: Commit**

```bash
git add .
git commit -m "chore: initialize React + Vite + Tailwind setup"
```

---

### Task 2: Global Styles & Theme

**Files:**
- Create: `src/styles/globals.css`
- Create: `src/styles/theme.css`
- Create: `src/styles/animations.css`
- Modify: `src/index.css` (import new styles)

**Interfaces:**
- Produces: CSS custom properties for colors, reusable animation classes, neon glow effects, scanline overlay

- [ ] **Step 1: Create globals.css**

File: `src/styles/globals.css`
```css
:root {
  --bg-dark: #0a0e27;
  --bg-darker: #050810;
  --border-dark: #1a1f3a;
  --text-primary: #e0e0e0;
  --text-secondary: #808080;
  
  --neon-cyan: #00ff88;
  --neon-magenta: #ff00ff;
  --neon-purple: #9d4edd;
  
  --glow-blur: 20px;
}

body {
  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  margin-bottom: 0.5em;
}

h1 { font-size: 3rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }

a {
  color: var(--neon-cyan);
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  text-shadow: 0 0 10px var(--neon-cyan);
}

/* Utility classes */
.neon-glow-cyan {
  text-shadow: 0 0 10px var(--neon-cyan), 0 0 20px var(--neon-cyan);
  box-shadow: 0 0 20px var(--neon-cyan);
}

.neon-glow-magenta {
  text-shadow: 0 0 10px var(--neon-magenta), 0 0 20px var(--neon-magenta);
  box-shadow: 0 0 20px var(--neon-magenta);
}

.neon-glow-purple {
  text-shadow: 0 0 10px var(--neon-purple), 0 0 20px var(--neon-purple);
  box-shadow: 0 0 20px var(--neon-purple);
}

.border-neon-cyan {
  border-color: var(--neon-cyan);
  border-width: 1px;
}

.border-neon-magenta {
  border-color: var(--neon-magenta);
  border-width: 1px;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-dark);
}

::-webkit-scrollbar-thumb {
  background: var(--neon-cyan);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--neon-magenta);
}
```

- [ ] **Step 2: Create theme.css**

File: `src/styles/theme.css`
```css
/* Scanline effect overlay */
.scanline {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;;
  pointer-events: none;
  background: linear-gradient(
    0deg,
    rgba(0, 255, 136, 0.03) 1px,
    transparent 1px
  );
  background-size: 100% 2px;
  animation: scan 8s linear infinite;
}

@keyframes scan {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
}

/* Glitch text effect */
.glitch {
  position: relative;
  color: var(--text-primary);
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  animation: glitch-anim 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  color: var(--neon-cyan);
  z-index: -1;
  text-shadow: -2px 0 var(--neon-magenta);
}

.glitch::after {
  animation: glitch-anim 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite reverse;
  color: var(--neon-magenta);
  z-index: -2;
  text-shadow: 2px 0 var(--neon-cyan);
}

@keyframes glitch-anim {
  0% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(-2px, -2px);
  }
  20% {
    clip-path: inset(92% 0 1% 0);
    transform: translate(2px, 2px);
  }
  40% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(-2px, 2px);
  }
  60% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(2px, -2px);
  }
  80% {
    clip-path: inset(54% 0 7% 0);
    transform: translate(-2px, -2px);
  }
  100% {
    clip-path: inset(58% 0 43% 0);
    transform: translate(2px, 2px);
  }
}

/* Button styles */
.btn {
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--neon-cyan);
  background: transparent;
  color: var(--neon-cyan);
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.btn:hover {
  background: rgba(0, 255, 136, 0.1);
  box-shadow: 0 0 15px var(--neon-cyan);
  transform: scale(1.05);
}

.btn-primary {
  background: var(--neon-cyan);
  color: var(--bg-dark);
  border-color: var(--neon-cyan);
}

.btn-primary:hover {
  box-shadow: 0 0 30px var(--neon-cyan);
}
```

- [ ] **Step 3: Create animations.css**

File: `src/styles/animations.css`
```css
/* Typewriter effect */
@keyframes typewriter {
  0% { width: 0; }
  100% { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid var(--neon-cyan);
  animation: typewriter 5s steps(60, end), blink 0.75s step-end infinite;
}

/* Fade in on scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Slide in from left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-left {
  animation: slideInLeft 0.6s ease-out forwards;
}

/* Slide in from right */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-right {
  animation: slideInRight 0.6s ease-out forwards;
}

/* Glow pulse */
@keyframes glowPulse {
  0%, 100% {
    text-shadow: 0 0 10px currentColor;
  }
  50% {
    text-shadow: 0 0 20px currentColor, 0 0 30px currentColor;
  }
}

.glow-pulse {
  animation: glowPulse 2s ease-in-out infinite;
}
```

- [ ] **Step 4: Update src/index.css to import styles**

File: `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './styles/globals.css';
@import './styles/theme.css';
@import './styles/animations.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 5: Test styles load**

```bash
npm run dev
```

Expected: App loads without errors, dark background visible, no console errors.

- [ ] **Step 6: Commit**

```bash
git add src/styles/
git commit -m "feat: add global styles, theme, and animations"
```

---

### Task 3: Data Structure & Content

**Files:**
- Create: `src/data/portfolio.js`

**Interfaces:**
- Produces: `portfolioData` object with structure: `{ personal, skills: { cybersecurity, development, devops }, experience[], projects[], about }`

- [ ] **Step 1: Extract content from resumes**

Manually consolidate from your resumes:
- Skills from each resume (remove duplicates, organize by category)
- Experience entries (company, role, dates, achievements)
- Technologies used
- Any projects mentioned

- [ ] **Step 2: Create portfolio.js data structure**

File: `src/data/portfolio.js`
```javascript
export const portfolioData = {
  personal: {
    name: 'Taha Badami',
    title: 'Security Specialist & Full-Stack Developer',
    tagline: 'Securing systems. Building solutions.',
    email: 'taha@example.com',
    links: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      twitter: 'https://twitter.com/yourusername',
    },
  },

  skills: {
    cybersecurity: [
      { name: 'SOC Monitoring', level: 85 },
      { name: 'Incident Response', level: 80 },
      { name: 'Vulnerability Assessment', level: 80 },
      { name: 'Penetration Testing (VAPT)', level: 75 },
      { name: 'Digital Forensics', level: 75 },
      { name: 'Compliance & Regulations', level: 70 },
    ],
    development: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Full-Stack Web Dev', level: 85 },
      { name: 'REST APIs', level: 85 },
    ],
    devops: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'Cloud Security', level: 75 },
    ],
    tools: [
      { name: 'Metasploit', level: 75 },
      { name: 'Burp Suite', level: 80 },
      { name: 'Git', level: 90 },
      { name: 'SIEM Tools', level: 70 },
      { name: 'Linux', level: 85 },
    ],
  },

  experience: [
    {
      role: 'Associate Developer',
      company: 'Accenture',
      duration: '2021 - 2022',
      location: 'India',
      achievements: [
        'Developed React-based web applications for enterprise clients',
        'Collaborated with security teams on secure coding practices',
        'Participated in code reviews and mentored junior developers',
      ],
      technologies: ['React', 'JavaScript', 'Node.js', 'AWS'],
    },
    {
      role: 'Software Engineer',
      company: 'Capgemini',
      duration: '2022 - 2023',
      location: 'India',
      achievements: [
        'Built full-stack applications using React and Node.js',
        'Implemented security features and data encryption',
        'Deployed applications on AWS with CI/CD pipelines',
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker'],
    },
    {
      role: 'Cybersecurity Analyst (SOC)',
      company: 'Various Organizations',
      duration: '2023 - Present',
      location: 'Remote',
      achievements: [
        'Monitored security alerts and threats in real-time',
        'Conducted vulnerability assessments and penetration testing',
        'Performed digital forensics investigations',
        'Maintained incident response procedures',
      ],
      technologies: ['Metasploit', 'Burp Suite', 'SIEM', 'Linux', 'Python'],
    },
  ],

  projects: [
    {
      name: 'Security Dashboard',
      description: 'Real-time SOC monitoring dashboard for threat detection',
      technologies: ['React', 'Node.js', 'Python', 'MongoDB'],
      highlights: {
        dev: 'Full-stack React + Node.js application with real-time data visualization',
        security: 'Integrates with SIEM tools, secure data handling, user authentication',
      },
      github: 'https://github.com/yourusername/security-dashboard',
    },
    {
      name: 'Vulnerability Scanner',
      description: 'Automated vulnerability scanning and reporting tool',
      technologies: ['Python', 'JavaScript', 'Nessus API'],
      highlights: {
        dev: 'RESTful API with scheduled scanning and reporting',
        security: 'Security assessment automation, compliance reporting',
      },
      github: 'https://github.com/yourusername/vuln-scanner',
    },
    {
      name: 'DevOps Security Suite',
      description: 'Container security and compliance checking for CI/CD pipelines',
      technologies: ['Python', 'Docker', 'Kubernetes', 'Jenkins'],
      highlights: {
        dev: 'Integrated CI/CD pipeline with automated deployments',
        security: 'Container scanning, policy enforcement, security gates',
      },
      github: 'https://github.com/yourusername/devsec-suite',
    },
  ],

  about: {
    bio: 'I am a security specialist and full-stack developer with expertise in cybersecurity, cloud infrastructure, and modern web development. Passionate about building secure systems and mentoring others in security best practices.',
    strengths: [
      'Cybersecurity expertise across SOC, incident response, and VAPT',
      'Full-stack development with React, Node.js, and Python',
      'Cloud architecture and DevOps practices',
      'Security-first development mindset',
    ],
  },
}
```

- [ ] **Step 3: Test data loads**

```bash
npm run dev
# In browser console, verify no import errors
```

- [ ] **Step 4: Commit**

```bash
git add src/data/portfolio.js
git commit -m "feat: add portfolio data structure and content"
```

---

### Task 4: Header Component

**Files:**
- Create: `src/components/Header.jsx`

**Interfaces:**
- Consumes: none (static component)
- Produces: Header component with logo, mobile menu toggle

- [ ] **Step 1: Create Header.jsx**

File: `src/components/Header.jsx`
```javascript
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-bg border-b border-dark-border z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold">
          <span className="text-neon-cyan">$ </span>
          <span className="text-white">TB_PORTFOLIO</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-neon-cyan hover:text-neon-magenta transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-dark-bg border-t border-dark-border px-6 py-4">
          <a href="#skills" className="block py-2 text-neon-cyan hover:text-neon-magenta">
            Skills
          </a>
          <a href="#experience" className="block py-2 text-neon-cyan hover:text-neon-magenta">
            Experience
          </a>
          <a href="#projects" className="block py-2 text-neon-cyan hover:text-neon-magenta">
            Projects
          </a>
          <a href="#about" className="block py-2 text-neon-cyan hover:text-neon-magenta">
            About
          </a>
          <a href="#contact" className="block py-2 text-neon-cyan hover:text-neon-magenta">
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Install lucide-react for icons**

```bash
npm install lucide-react
```

- [ ] **Step 3: Test Header renders**

```bash
npm run dev
```

Expected: Header appears at top with logo and mobile menu button. No errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.jsx
git commit -m "feat: add Header component with mobile menu"
```

---

### Task 5: Utility Hooks & Helpers

**Files:**
- Create: `src/hooks/useScrollAnimation.js`
- Create: `src/hooks/useTerminalInput.js`
- Create: `src/utils/scrollToSection.js`
- Create: `src/utils/commandExecutor.js`

**Interfaces:**
- Produces: Custom hooks for scroll animations, terminal input; utility functions for scroll navigation, command parsing

- [ ] **Step 1: Create useScrollAnimation hook**

File: `src/hooks/useScrollAnimation.js`
```javascript
import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isVisible]
}
```

- [ ] **Step 2: Create useTerminalInput hook**

File: `src/hooks/useTerminalInput.js`
```javascript
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
    
    // Add to history
    setHistory((prev) => [...prev, command])
    setHistoryIndex(-1)
    
    // Add command to output
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
```

- [ ] **Step 3: Create scrollToSection utility**

File: `src/utils/scrollToSection.js`
```javascript
export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
```

- [ ] **Step 4: Create commandExecutor utility**

File: `src/utils/commandExecutor.js`
```javascript
export function parseCommand(command) {
  const parts = command.trim().split(/\s+/)
  const action = parts[0]
  const target = parts[1] || ''

  return { action, target }
}

export function getCommandResponse(action, target) {
  const commands = {
    help: 'Available commands: view <section> | clear | help',
    'view skills': 'Navigating to skills section...',
    'view experience': 'Navigating to experience section...',
    'view projects': 'Navigating to projects section...',
    'view about': 'Navigating to about section...',
    'view contact': 'Navigating to contact section...',
    clear: '',
  }

  const key = action === 'view' ? `view ${target}` : action
  return commands[key] || `Unknown command: ${action}`
}

export function getSectionIdFromCommand(action, target) {
  const sections = {
    skills: 'skills',
    experience: 'experience',
    projects: 'projects',
    about: 'about',
    contact: 'contact',
  }

  return action === 'view' ? sections[target] : null
}
```

- [ ] **Step 5: Test hooks load without errors**

```bash
npm run dev
```

Expected: No console errors on import.

- [ ] **Step 6: Commit**

```bash
git add src/hooks/ src/utils/
git commit -m "feat: add custom hooks and utility functions"
```

---

### Task 6: Animation Components

**Files:**
- Create: `src/components/Animations/TypewriterText.jsx`
- Create: `src/components/Animations/ScrollFadeIn.jsx`
- Create: `src/components/Animations/GlitchEffect.jsx`

**Interfaces:**
- Consumes: Text content, animation settings
- Produces: Reusable animated components for typewriter, scroll fade, glitch effects

- [ ] **Step 1: Create TypewriterText component**

File: `src/components/Animations/TypewriterText.jsx`
```javascript
import { motion } from 'framer-motion'

export default function TypewriterText({ text, duration = 5 }) {
  const characters = text.split('')

  return (
    <motion.div className="inline">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: (duration / characters.length) * i,
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-1 h-8 bg-neon-cyan ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </motion.div>
  )
}
```

- [ ] **Step 2: Create ScrollFadeIn component**

File: `src/components/Animations/ScrollFadeIn.jsx`
```javascript
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function ScrollFadeIn({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) {
  const [ref, isVisible] = useScrollAnimation()

  const variants = {
    up: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 3: Create GlitchEffect component**

File: `src/components/Animations/GlitchEffect.jsx`
```javascript
import { motion } from 'framer-motion'

export default function GlitchEffect({ children, className = '' }) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover={{
        textShadow: [
          '0 0 0px #00ff88',
          '-2px 0px #ff00ff, 2px 2px #00ff88',
          '2px 0px #00ff88, -2px -2px #ff00ff',
          '0 0 0px #00ff88',
        ],
      }}
      transition={{ duration: 0.3, repeat: Infinity }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 4: Install Framer Motion**

```bash
npm install framer-motion
```

- [ ] **Step 5: Test animations load**

```bash
npm run dev
```

Expected: No console errors on import.

- [ ] **Step 6: Commit**

```bash
git add src/components/Animations/
git commit -m "feat: add animation components (typewriter, scroll fade, glitch)"
```

---

### Task 7: Hero Section

**Files:**
- Create: `src/components/Sections/Hero.jsx`

**Interfaces:**
- Consumes: `portfolioData.personal` (title, tagline, email)
- Produces: Hero section with typewriter title, CTA button, scrolling indicator

- [ ] **Step 1: Create Hero.jsx**

File: `src/components/Sections/Hero.jsx`
```javascript
import { motion } from 'framer-motion'
import TypewriterText from '../Animations/TypewriterText'
import { portfolioData } from '../../data/portfolio'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const { title, tagline } = portfolioData.personal

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl -top-48 -left-48"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl -bottom-48 -right-48"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 max-w-4xl text-center">
        {/* Title with typewriter effect */}
        <div className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
          <TypewriterText text={title} duration={5} />
        </div>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-text-secondary mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          Securing systems. Building solutions. Combining cybersecurity expertise with full-stack development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 0.8 }}
        >
          <button
            onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary"
          >
            Explore My Work
          </button>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="btn"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-neon-cyan" size={32} />
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Test Hero renders**

```bash
npm run dev
```

Expected: Hero section displays with typewriter title, tagline, CTA buttons, no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Sections/Hero.jsx
git commit -m "feat: add Hero section with typewriter animation"
```

---

### Task 8: Skills Component

**Files:**
- Create: `src/components/SkillCard.jsx`
- Create: `src/components/Sections/Skills.jsx`

**Interfaces:**
- Consumes: `portfolioData.skills` (categories with skills and levels)
- Produces: Skills section with categorized cards, proficiency bars, animations

- [ ] **Step 1: Create SkillCard component**

File: `src/components/SkillCard.jsx`
```javascript
import { motion } from 'framer-motion'

export default function SkillCard({ name, level, index }) {
  return (
    <motion.div
      className="bg-dark-border border border-dark-border rounded-lg p-6 hover:border-neon-cyan transition-all hover:shadow-lg hover:shadow-neon-cyan/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-neon-cyan">{name}</h4>
        <span className="text-sm text-text-secondary">{level}%</span>
      </div>

      {/* Proficiency bar */}
      <div className="w-full bg-dark-bg rounded h-2">
        <motion.div
          className="bg-gradient-to-r from-neon-cyan to-neon-magenta h-2 rounded"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.05 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}
```

- [ ] **Step 2: Create Skills section**

File: `src/components/Sections/Skills.jsx`
```javascript
import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import SkillCard from '../SkillCard'
import { portfolioData } from '../../data/portfolio'

export default function Skills() {
  const { skills } = portfolioData
  const categories = Object.entries(skills)

  return (
    <section id="skills" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-neon-magenta mb-12" />
        </ScrollFadeIn>

        {/* Skills by category */}
        {categories.map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-neon-purple capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categorySkills.map((skill, skillIndex) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={skillIndex}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Test Skills section**

```bash
npm run dev
# Scroll to skills section
```

Expected: Skills display in categories with animated proficiency bars, cards animate on scroll, no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/SkillCard.jsx src/components/Sections/Skills.jsx
git commit -m "feat: add Skills section with categorized skill cards"
```

---

### Task 9: Experience Section

**Files:**
- Create: `src/components/Sections/Experience.jsx`

**Interfaces:**
- Consumes: `portfolioData.experience` (roles, companies, dates, achievements)
- Produces: Experience section with timeline, animated cards

- [ ] **Step 1: Create Experience.jsx**

File: `src/components/Sections/Experience.jsx`
```javascript
import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            Experience
          </h2>
          <div className="w-16 h-1 bg-neon-magenta mb-12" />
        </ScrollFadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-neon-cyan to-neon-magenta"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />

          {/* Experience entries */}
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className="w-1/2 pr-12">
                <div className="bg-dark-border border border-neon-cyan/30 rounded-lg p-6 hover:border-neon-cyan transition-all">
                  <h3 className="text-xl font-bold text-neon-cyan mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-neon-magenta font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-text-secondary text-sm mb-4">
                    {exp.duration} • {exp.location}
                  </p>

                  {/* Achievements */}
                  <ul className="text-text-secondary text-sm space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-neon-cyan mr-2">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-neon-cyan/10 text-neon-cyan rounded border border-neon-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="w-1/2 flex justify-center">
                <motion.div
                  className="w-4 h-4 bg-neon-cyan rounded-full border-4 border-dark-bg"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Test Experience section**

```bash
npm run dev
# Scroll to experience section
```

Expected: Timeline displays with alternating cards, animated dots, slide-in animations, no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Sections/Experience.jsx
git commit -m "feat: add Experience section with animated timeline"
```

---

### Task 10: Projects Section

**Files:**
- Create: `src/components/Sections/Projects.jsx`

**Interfaces:**
- Consumes: `portfolioData.projects` (name, description, technologies, highlights)
- Produces: Projects section with project cards, tech badges, links

- [ ] **Step 1: Create Projects.jsx**

File: `src/components/Sections/Projects.jsx`
```javascript
import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const { projects } = portfolioData

  return (
    <section id="projects" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            Projects
          </h2>
          <div className="w-16 h-1 bg-neon-magenta mb-12" />
        </ScrollFadeIn>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark-border border border-dark-border rounded-lg overflow-hidden hover:border-neon-cyan transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-neon-cyan mb-3">
                  {project.name}
                </h3>

                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4 text-sm space-y-2">
                  <p className="text-neon-purple">
                    <span className="font-semibold">Dev:</span> {project.highlights.dev}
                  </p>
                  <p className="text-neon-cyan">
                    <span className="font-semibold">Security:</span> {project.highlights.security}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-neon-cyan/10 text-neon-cyan rounded border border-neon-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neon-cyan hover:text-neon-magenta transition"
                    >
                      <Github size={18} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Test Projects section**

```bash
npm run dev
# Scroll to projects section
```

Expected: Project cards display in grid, hover effects work, links functional, no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Sections/Projects.jsx
git commit -m "feat: add Projects section with project cards and links"
```

---

### Task 11: About & Contact Sections

**Files:**
- Create: `src/components/Sections/About.jsx`
- Create: `src/components/Sections/Contact.jsx`

**Interfaces:**
- Consumes: `portfolioData.about` (bio, strengths), `portfolioData.personal` (email, links)
- Produces: About and Contact sections with animations

- [ ] **Step 1: Create About.jsx**

File: `src/components/Sections/About.jsx`
```javascript
import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'

export default function About() {
  const { about } = portfolioData

  return (
    <section id="about" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            About Me
          </h2>
          <div className="w-16 h-1 bg-neon-magenta mb-12" />
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              {about.bio}
            </p>
          </motion.div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-neon-purple mb-6">
              Key Strengths
            </h3>
            <ul className="space-y-4">
              {about.strengths.map((strength, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-neon-cyan mr-3 font-bold">✓</span>
                  <span className="text-text-secondary">{strength}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create Contact.jsx**

File: `src/components/Sections/Contact.jsx`
```javascript
import { motion } from 'framer-motion'
import ScrollFadeIn from '../Animations/ScrollFadeIn'
import { portfolioData } from '../../data/portfolio'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const { personal } = portfolioData

  const socialLinks = [
    { icon: Mail, url: `mailto:${personal.email}`, label: 'Email', color: 'text-neon-cyan' },
    { icon: Github, url: personal.links.github, label: 'GitHub', color: 'text-neon-magenta' },
    { icon: Linkedin, url: personal.links.linkedin, label: 'LinkedIn', color: 'text-neon-purple' },
    { icon: Twitter, url: personal.links.twitter, label: 'Twitter', color: 'text-neon-cyan' },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-neon-magenta mx-auto mb-12" />
        </ScrollFadeIn>

        <motion.p
          className="text-lg text-text-secondary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm always interested in connecting with talented teams and exploring new opportunities.
          Feel free to reach out!
        </motion.p>

        {/* Social links */}
        <motion.div
          className="flex justify-center gap-8 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg border border-dark-border hover:border-neon-cyan transition-all ${link.color}`}
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px currentColor' }}
              >
                <Icon size={28} />
              </motion.a>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.button
          className="btn btn-primary text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          onClick={() => window.location.href = `mailto:${personal.email}`}
        >
          Send Me an Email
        </motion.button>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Test About and Contact sections**

```bash
npm run dev
# Scroll to about and contact sections
```

Expected: About displays with bio and strengths, Contact displays with social links and CTA, all animations work, no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/Sections/About.jsx src/components/Sections/Contact.jsx
git commit -m "feat: add About and Contact sections with animations"
```

---

### Task 12: Terminal Sidebar Components

**Files:**
- Create: `src/components/Sidebar/TerminalInput.jsx`
- Create: `src/components/Sidebar/TerminalOutput.jsx`
- Create: `src/components/Sidebar/TerminalSidebar.jsx`

**Interfaces:**
- Consumes: `useTerminalInput` hook, command utilities
- Produces: Interactive terminal sidebar with command execution, smooth scrolling to sections

- [ ] **Step 1: Create TerminalInput component**

File: `src/components/Sidebar/TerminalInput.jsx`
```javascript
import { motion } from 'framer-motion'

export default function TerminalInput({
  input,
  onInputChange,
  onKeyDown,
  onSubmit,
}) {
  return (
    <motion.div className="flex items-center gap-2 bg-dark-bg border-t border-dark-border p-3">
      <span className="text-neon-cyan font-bold">$</span>
      <input
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => {
          onKeyDown(e)
          if (e.key === 'Enter') {
            onSubmit(input)
            onInputChange('')
          }
        }}
        placeholder="Type command or press help"
        className="flex-1 bg-transparent border-0 outline-none text-neon-cyan font-mono placeholder-text-secondary"
      />
    </motion.div>
  )
}
```

- [ ] **Step 2: Create TerminalOutput component**

File: `src/components/Sidebar/TerminalOutput.jsx`
```javascript
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function TerminalOutput({ output }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [output])

  return (
    <motion.div
      ref={scrollRef}
      className="flex-1 overflow-y-auto p-4 space-y-2 font-mono text-sm"
    >
      {output.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 }}
          className={
            line.type === 'command'
              ? 'text-neon-cyan'
              : line.type === 'system'
              ? 'text-neon-magenta'
              : 'text-neon-purple'
          }
        >
          {line.text}
        </motion.div>
      ))}
    </motion.div>
  )
}
```

- [ ] **Step 3: Create TerminalSidebar component**

File: `src/components/Sidebar/TerminalSidebar.jsx`
```javascript
import { motion } from 'framer-motion'
import { useState } from 'react'
import TerminalInput from './TerminalInput'
import TerminalOutput from './TerminalOutput'
import { useTerminalInput } from '../../hooks/useTerminalInput'
import { parseCommand, getCommandResponse, getSectionIdFromCommand } from '../../utils/commandExecutor'
import { scrollToSection } from '../../utils/scrollToSection'

const COMMANDS = [
  { label: 'Skills', value: 'view skills' },
  { label: 'Experience', value: 'view experience' },
  { label: 'Projects', value: 'view projects' },
  { label: 'About', value: 'view about' },
  { label: 'Contact', value: 'view contact' },
  { label: 'Clear', value: 'clear' },
]

export default function TerminalSidebar() {
  const { input, setInput, output, addOutput, executeCommand, handleKeyDown } = useTerminalInput()
  const [isHidden, setIsHidden] = useState(false)

  const handleCommandSubmit = (command) => {
    if (!command.trim()) return

    const { command: action } = executeCommand(command)

    if (action === 'clear') {
      // Clear output (reset to initial state)
      return
    }

    if (action.startsWith('view')) {
      const parts = action.split(' ')
      const section = parts[1]
      const sectionId = getSectionIdFromCommand('view', section)

      if (sectionId) {
        addOutput(`Navigating to ${section} section...`, 'response')
        setTimeout(() => scrollToSection(sectionId), 300)
      } else {
        addOutput(`Unknown section: ${section}`, 'error')
      }
    } else if (action === 'help') {
      addOutput('Available commands:', 'response')
      addOutput('  view skills - Show skills', 'response')
      addOutput('  view experience - Show experience', 'response')
      addOutput('  view projects - Show projects', 'response')
      addOutput('  view about - Show about section', 'response')
      addOutput('  view contact - Show contact', 'response')
      addOutput('  clear - Clear terminal', 'response')
    } else {
      addOutput(`Unknown command: ${action}. Type "help" for available commands.`, 'error')
    }
  }

  return (
    <motion.aside
      className="hidden md:flex fixed left-0 top-0 h-screen w-80 bg-dark-bg border-r border-dark-border flex-col mt-16 z-40"
      initial={{ x: -320 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="p-4 border-b border-dark-border">
        <div className="text-sm font-mono">
          <div className="text-neon-cyan">$ PORTFOLIO_CLI v1.0</div>
          <div className="text-text-secondary text-xs mt-1">Type "help" for commands</div>
        </div>
      </div>

      {/* Output area */}
      <TerminalOutput output={output} />

      {/* Quick command buttons */}
      <div className="p-3 border-t border-dark-border space-y-2">
        <div className="text-xs text-text-secondary mb-2">Quick Navigate:</div>
        <div className="grid grid-cols-2 gap-2">
          {COMMANDS.map((cmd) => (
            <motion.button
              key={cmd.value}
              onClick={() => {
                setInput(cmd.value)
                handleCommandSubmit(cmd.value)
              }}
              className="px-3 py-2 bg-dark-border border border-neon-cyan/30 text-neon-cyan text-xs rounded hover:border-neon-cyan hover:bg-neon-cyan/10 transition"
              whileHover={{ scale: 1.05 }}
            >
              {cmd.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Input */}
      <TerminalInput
        input={input}
        onInputChange={setInput}
        onKeyDown={handleKeyDown}
        onSubmit={handleCommandSubmit}
      />
    </motion.aside>
  )
}
```

- [ ] **Step 4: Test Terminal sidebar**

```bash
npm run dev
# Type commands in terminal sidebar (e.g., "view skills", "help")
```

Expected: Terminal sidebar displays, commands execute, page scrolls to sections, no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/Sidebar/
git commit -m "feat: add Terminal sidebar with command navigation"
```

---

### Task 13: Layout & Responsive Design

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/styles/globals.css`

**Interfaces:**
- Consumes: All section components, header, sidebar
- Produces: Responsive layout for desktop, tablet, mobile

- [ ] **Step 1: Update App.jsx for layout**

File: `src/App.jsx`
```javascript
import Header from './components/Header'
import TerminalSidebar from './components/Sidebar/TerminalSidebar'
import Hero from './components/Sections/Hero'
import Skills from './components/Sections/Skills'
import Experience from './components/Sections/Experience'
import Projects from './components/Sections/Projects'
import About from './components/Sections/About'
import Contact from './components/Sections/Contact'

export default function App() {
  return (
    <div className="bg-dark-bg text-white min-h-screen overflow-x-hidden">
      <Header />
      <div className="flex">
        <TerminalSidebar />
        <main className="flex-1 md:ml-80 pt-16">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Add responsive CSS**

Append to `src/styles/globals.css`:
```css
/* Responsive adjustments */
@media (max-width: 768px) {
  :root {
    font-size: 14px;
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
}

@media (max-width: 480px) {
  :root {
    font-size: 12px;
  }

  h1 { font-size: 1.5rem; }
  h2 { font-size: 1.25rem; }
}
```

- [ ] **Step 3: Test responsive layout**

```bash
npm run dev
# Test on desktop (1920px), tablet (768px), mobile (375px)
```

Expected: Layout responds correctly, sidebar hides on mobile, content readable at all breakpoints, no horizontal scroll.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx src/styles/globals.css
git commit -m "feat: implement responsive layout for desktop, tablet, mobile"
```

---

### Task 14: Performance Optimization & Testing

**Files:**
- Modify: `vite.config.js` (code splitting)
- Create: `src/utils/lazyLoad.js` (lazy loading component)

**Interfaces:**
- Produces: Optimized bundle with code splitting, lazy-loaded sections

- [ ] **Step 1: Update Vite config for optimizations**

File: `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion'],
        },
      },
    },
  },
  server: {
    port: 3000,
  },
})
```

- [ ] **Step 2: Test build**

```bash
npm run build
```

Expected: Build succeeds, no errors, dist/ folder created with optimized files.

- [ ] **Step 3: Preview build**

```bash
npm run preview
```

Expected: Production build loads in browser, all functionality works, smooth animations.

- [ ] **Step 4: Test performance**

Open browser DevTools (F12):
- Lighthouse: Run audit, target >90 score
- Network: Check bundle size (should be <500KB gzipped)
- Performance: Check for layout thrashing, FPS

Expected: Lighthouse score >90, smooth 60fps animations, good load performance.

- [ ] **Step 5: Commit**

```bash
git add vite.config.js
git commit -m "chore: optimize build with code splitting and minification"
```

---

### Task 15: Deployment Setup

**Files:**
- Create: `.gitignore` (already done in Task 1, but add deployment files)
- Create: `vercel.json` (optional, for Vercel config)
- Create: `README.md` (deployment instructions)

**Interfaces:**
- Produces: Ready-to-deploy portfolio, CI/CD ready

- [ ] **Step 1: Create vercel.json**

File: `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "env": {
    "VITE_APP_NAME": "Taha Badami Portfolio"
  }
}
```

- [ ] **Step 2: Create README.md**

File: `README.md`
```markdown
# Taha Badami - Portfolio Website

A fully animated React portfolio website showcasing cybersecurity expertise and full-stack development skills.

## Features

- **Dark/Neon Aesthetic**: Hacker-inspired design with cyan, magenta, and purple neon accents
- **Terminal Navigation**: Interactive terminal sidebar for command-based navigation
- **Smooth Animations**: Powered by Framer Motion with scroll-triggered effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Performance Optimized**: Fast load times, smooth 60fps animations

## Tech Stack

- React 18
- Vite
- Framer Motion
- Tailwind CSS
- Deployed on Vercel/Netlify

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on vercel.com
3. Vercel automatically builds and deploys

### Netlify

1. Push code to GitHub
2. Connect repository on netlify.com
3. Netlify automatically builds and deploys

## Sections

- **Hero**: Animated title with typewriter effect
- **Skills**: Categorized skills with proficiency bars
- **Experience**: Timeline view of work history
- **Projects**: Showcasing key projects and tech stacks
- **About**: Bio and key strengths
- **Contact**: Social links and CTA

## Terminal Commands

Type in the sidebar terminal:
- `view skills` - Navigate to skills section
- `view experience` - Navigate to experience section
- `view projects` - Navigate to projects section
- `view about` - Navigate to about section
- `view contact` - Navigate to contact section
- `help` - Show available commands
- `clear` - Clear terminal output

## Customization

Edit `src/data/portfolio.js` to update:
- Personal information
- Skills and proficiency levels
- Experience entries
- Projects
- About and strengths

## License

MIT
```

- [ ] **Step 3: Final commit**

```bash
git add vercel.json README.md
git commit -m "chore: add deployment config and documentation"
```

- [ ] **Step 4: Test final deployment**

Push to GitHub (if applicable):
```bash
git remote add origin <your-repo-url>
git push -u origin main
```

Connect to Vercel/Netlify and deploy.

Expected: Portfolio live and accessible, all features working, animations smooth.

---

### Task 16: Final Testing & Polish

**Files:**
- All project files (verification)

**Interfaces:**
- Produces: Fully functional, polished, production-ready portfolio

- [ ] **Step 1: Cross-browser testing**

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Expected: All animations smooth, no console errors, layout correct.

- [ ] **Step 2: Mobile testing**

Test on:
- iPhone 12/13 (Safari)
- Android (Chrome)
- Tablet (iPad, Android tablet)

Expected: Responsive layout works, touch interactions responsive, no horizontal scroll.

- [ ] **Step 3: Accessibility audit**

Use browser accessibility tools:
- Check color contrast (WCAG AA)
- Keyboard navigation (Tab, Enter, etc.)
- Screen reader testing (if possible)

Expected: All interactive elements keyboard accessible, contrast meets WCAG AA, semantic HTML.

- [ ] **Step 4: Performance audit**

```bash
npm run build && npm run preview
# Run Lighthouse audit
```

Expected: Lighthouse score >90 across all categories.

- [ ] **Step 5: Manual feature verification**

Checklist:
- [ ] Hero typewriter animation works
- [ ] Skills cards animate on scroll
- [ ] Experience timeline animates
- [ ] Project cards hover/animate
- [ ] Terminal commands execute and navigate
- [ ] All links (social, contact) functional
- [ ] Responsive layout works at all breakpoints
- [ ] No console errors
- [ ] All sections accessible via scroll and terminal

- [ ] **Step 6: Final commit**

```bash
git add .
git commit -m "chore: complete testing and polish"
```

---

## Summary

This plan builds a complete, production-ready animated portfolio website in 16 focused tasks:

1. **Project Setup** — Initialize React + Vite + Tailwind
2. **Global Styles** — Theme, colors, animations
3. **Data Structure** — Consolidated portfolio content
4. **Header** — Top navigation with mobile menu
5. **Utilities** — Hooks and helper functions
6. **Animation Components** — Reusable animated elements
7. **Hero Section** — Typewriter title with CTA
8. **Skills Section** — Categorized skill cards with proficiency bars
9. **Experience Section** — Timeline with animated entries
10. **Projects Section** — Project showcase with tech badges
11. **About & Contact** — Bio, strengths, social links
12. **Terminal Sidebar** — Interactive command-based navigation
13. **Responsive Layout** — Mobile, tablet, desktop optimization
14. **Performance** — Optimization and build tuning
15. **Deployment** — Vercel/Netlify ready
16. **Testing & Polish** — Cross-browser, mobile, accessibility, performance

Each task is self-contained, testable, and builds toward a complete portfolio.
