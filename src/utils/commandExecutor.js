export function getCommandResponse(command) {
  const cmd = command.toLowerCase().trim()

  const responses = {
    help: `<span class="text-neon-cyan">Available commands:</span>
  <span class="text-white">view skills</span>      — Navigate to skills section
  <span class="text-white">view experience</span>  — Navigate to experience
  <span class="text-white">view projects</span>    — Navigate to projects
  <span class="text-white">view about</span>       — Navigate to about section
  <span class="text-white">view contact</span>     — Navigate to contact
  <span class="text-white">clear</span>            — Clear terminal
  <span class="text-white">whoami</span>           — About the developer
  <span class="text-white">help</span>             — Show this message`,
    whoami:
      '<span class="text-neon-cyan">Taha Badami</span> — Security Specialist & Full-Stack Developer',
    'view skills':
      '<span class="text-green-400">→</span> Navigating to <span class="text-neon-cyan">Skills & Expertise</span>...',
    'view experience':
      '<span class="text-green-400">→</span> Navigating to <span class="text-neon-cyan">Experience</span>...',
    'view projects':
      '<span class="text-green-400">→</span> Navigating to <span class="text-neon-cyan">Projects</span>...',
    'view about':
      '<span class="text-green-400">→</span> Navigating to <span class="text-neon-cyan">About</span>...',
    'view contact':
      '<span class="text-green-400">→</span> Navigating to <span class="text-neon-cyan">Contact</span>...',
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
