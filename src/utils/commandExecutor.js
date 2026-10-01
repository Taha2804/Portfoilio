export function getCommandResponse(command) {
  const cmd = command.toLowerCase().trim()

  const responses = {
    help: `<span class="text-cyan">Available commands:</span>
  <span class="text-text">view skills</span>       — Navigate to Skills section
  <span class="text-text">view certifications</span> — Navigate to Certifications
  <span class="text-text">view experience</span>   — Navigate to Experience
  <span class="text-text">view projects</span>     — Navigate to Projects
  <span class="text-text">view about</span>        — Navigate to About
  <span class="text-text">view contact</span>      — Navigate to Contact
  <span class="text-text">clear</span>             — Clear terminal
  <span class="text-text">whoami</span>            — About the developer
  <span class="text-text">help</span>              — Show this message
  <span class="text-text">ls</span>                — List sections
  <span class="text-text">cat certifications</span> — Show certifications
  <span class="text-text">cat skills</span>        — Show skill summary
  <span class="text-text">cat projects</span>      — List projects`,
    whoami:
      '<span class="text-cyan">Taha Badami</span> — Cybersecurity Analyst & Network Security Engineer',
    'view skills':
      '<span class="text-cyan">→</span> Navigating to <span class="text-cyan">Skills & Expertise</span>...',
    'view certifications':
      '<span class="text-cyan">→</span> Navigating to <span class="text-cyan">Certifications</span>...',
    'view experience':
      '<span class="text-cyan">→</span> Navigating to <span class="text-cyan">Experience</span>...',
    'view projects':
      '<span class="text-cyan">→</span> Navigating to <span class="text-cyan">Projects</span>...',
    'view about':
      '<span class="text-cyan">→</span> Navigating to <span class="text-cyan">About</span>...',
    'view contact':
      '<span class="text-cyan">→</span> Navigating to <span class="text-cyan">Contact</span>...',
    'ls': `<span class="text-cyan">Sections:</span>
  skills
  certifications
  experience
  projects
  about
  contact`,
    'cat certifications': `<span class="text-cyan">Certifications:</span>
  <span class="text-text">• Certified Ethical Hacker (CEH)</span> — EC-Council, 2025
  <span class="text-text">• Computer Hacking Forensic Investigator (CHFI)</span> — EC-Council, 2026
  <span class="text-text">• Cisco Certified Network Associate (CCNA)</span> — Sysap Technologies, 2023`,
    'cat skills': `<span class="text-cyan">Skill Categories:</span>
  <span class="text-text">Cybersecurity</span>     — 6 competencies (avg 78%)
  <span class="text-text">Security Tooling</span>  — 8 competencies (avg 76%)
  <span class="text-text">Networking</span>        — 6 competencies (avg 80%)
  <span class="text-text">Development</span>       — 7 competencies (avg 78%)
  <span class="text-text">DevOps</span>            — 6 competencies (avg 76%)`,
    'cat projects': `<span class="text-cyan">Projects:</span>
  <span class="text-text">• Student Management Portal</span>      — React, Tailwind, REST API, JWT
  <span class="text-text">• Secure Remote Administration Tool</span> — Python, Sockets, Threading
  <span class="text-text">• Penetration Testing Lab</span>        — VirtualBox, Kali, Nmap, Nessus
  <span class="text-text">• Smart Video Controller</span>         — Python, OpenCV, MediaPipe
  <span class="text-text">• IoT Medicine Dispenser</span>         — ESP32, Embedded C
  <span class="text-text">• Deepfake Image Detection</span>       — Python, ML, CNN`,
  }

  return responses[cmd] || null
}

export function getSectionIdFromCommand(command) {
  const cmd = command.toLowerCase().trim()
  const map = {
    'view skills': 'skills',
    'view certifications': 'certifications',
    'view experience': 'experience',
    'view projects': 'projects',
    'view about': 'about',
    'view contact': 'contact',
  }

  return map[cmd] || null
}