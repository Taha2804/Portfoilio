export const portfolioData = {
  personal: {
    name: 'Taha Badami',
    title: 'Security Specialist & Full-Stack Developer',
    tagline: 'Securing systems. Building solutions.',
    email: 'taha.badami@example.com',
    social: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      website: 'https://yourusername.dev',
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
