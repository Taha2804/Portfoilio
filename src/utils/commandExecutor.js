export function getCommandResponse(command) {
  const cmd = command.toLowerCase().trim()

  const responses = {
    help: `<span class="text-cyan">Available commands:</span>
  <span class="text-text">view skills</span>       — Navigate to skills section
  <span class="text-text">view experience</span>   — Navigate to experience
  <span class="text-text">view projects</span>     — Navigate to projects
  <span class="text-text">view about</span>        — Navigate to about section
  <span class="text-text">view contact</span>      — Navigate to contact
  <span class="text-text">clear</span>             — Clear terminal
  <span class="text-text">whoami</span>            — About the developer
  <span class="text-text">help</span>              — Show this message`,
    whoami:
      '<span class="text-cyan">Taha Badami</span> — Cybersecurity Analyst & Network Security Engineer',
    'view skills':
      '<span class="text-cyan">→</span> Navigating to <span class="text-cyan">Skills & Expertise</span>...',
    'view experience':
      '<span class="text-cyan">→</span> Navigating to <span class="text-cyan">Experience</span>...',
    'view projects':
      '<span class="text-cyan">→</span> Navigating to <span class="text-cyan">Projects</span>...',
    'view about':
      '<span class="text-cyan">→</span> Navigating to <span class="text-cyan">About</span>...',
    'view contact':
      '<span class="text-cyan">→</span> Navigating to <span class="text-cyan">Contact</span>...',
  }

  return responses[cmd] || null
}

export function getSectionIdFromCommand(command) {
  const cmd = command.toLowerCase().trim()
  const map = {
    'view skills': 'skills',
    'view experience': 'experience',
    'view projects': 'projects',
    'view about': 'about',
    'view contact': 'contact',
  }

  return map[cmd] || null
}