export const portfolioData = {
  personal: {
    name: 'Taha Aliasgar Badami',
    title: 'Cybersecurity Analyst',
    subtitle: 'Network Security Engineer',
    tagline: 'Securing systems. Building solutions.',
    email: 'badamitab@gmail.com',
    phone: '+91 8482843350',
    location: 'Pune, Maharashtra',
    education: 'BCA Graduate · MCA Student',
    social: {
      github: 'https://github.com/Taha2804',
      linkedin: 'https://linkedin.com/in/Taha-Badami',
    },
  },

  certifications: [
    { name: 'Certified Ethical Hacker (CEH)', org: 'EC-Council', year: 2025 },
    { name: 'Computer Hacking Forensic Investigator (CHFI)', org: 'EC-Council', year: 2026 },
    { name: 'Cisco Certified Network Associate (CCNA)', org: 'Sysap Technologies', year: 2023 },
  ],

  skills: {
    cybersecurity: [
      { name: 'Penetration Testing', level: 80 },
      { name: 'Vulnerability Assessment', level: 85 },
      { name: 'Threat Detection', level: 75 },
      { name: 'Incident Response', level: 75 },
      { name: 'Log Analysis', level: 80 },
      { name: 'Digital Forensics', level: 75 },
    ],
    securityTools: [
      { name: 'Nmap', level: 85 },
      { name: 'Metasploit Framework', level: 80 },
      { name: 'Burp Suite', level: 80 },
      { name: 'Wireshark', level: 80 },
      { name: 'Nessus', level: 75 },
      { name: 'OpenVAS', level: 70 },
      { name: 'SIEM (Splunk)', level: 70 },
      { name: 'IDS/IPS', level: 70 },
    ],
    networking: [
      { name: 'TCP/IP', level: 85 },
      { name: 'Routing & Switching', level: 80 },
      { name: 'Packet Analysis', level: 80 },
      { name: 'VPN Setup', level: 75 },
      { name: 'Firewall (ufw)', level: 75 },
      { name: 'LAN / Wi-Fi Troubleshooting', level: 85 },
    ],
    development: [
      { name: 'Python', level: 85 },
      { name: 'React', level: 80 },
      { name: 'JavaScript', level: 80 },
      { name: 'REST APIs', level: 75 },
      { name: 'JWT Authentication', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'MongoDB', level: 70 },
    ],
    devops: [
      { name: 'Linux (Kali / Ubuntu)', level: 85 },
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'GitHub Actions', level: 70 },
      { name: 'AWS', level: 70 },
      { name: 'VMware / VirtualBox', level: 80 },
    ],
  },

  experience: [
    {
      role: 'IT Support Engineer / Security Analyst L1',
      company: 'Olympus Computers',
      location: 'Pune, Maharashtra',
      duration: 'Sep 2024 – 2025',
      achievements: [
        'Configured and maintained hardware and OS environments across 100+ workstations, sustaining 99% uptime.',
        'Resolved 70+ weekly technical issues spanning networks, operating systems, and end-user devices with a 90–95% first-contact resolution rate.',
        'Collaborated with system administrators to implement security patches and deliver support initiatives aligned with SLAs.',
        'Monitored network traffic using Wireshark and documented security incidents for compliance reporting.',
        'Managed user accounts, permissions, and Active Directory configuration to maintain secure, organised access control.',
        'Troubleshot LAN / Wi-Fi connectivity and diagnosed network faults across TCP/IP, DNS, and DHCP configurations.',
        'Performed root-cause analysis and patched critical vulnerabilities, reducing recurring security issues by 30%.',
      ],
      technologies: ['Wireshark', 'Active Directory', 'TCP/IP', 'Linux', 'Windows', 'VMware'],
    },
  ],

  projects: [
    {
      name: 'Student Management Portal',
      description: 'Full-stack web application for managing student records with create, update, search, and delete operations.',
      period: 'Jan 2025 – Feb 2025',
      technologies: ['React', 'Tailwind CSS', 'REST API', 'JWT Authentication'],
      highlights: [
        'Dynamic forms where department and programme options update from backend data.',
        'JWT-based login flow with protected routes and role-based access control.',
        'Client-side validation and structured component design for usability and maintainability.',
      ],
      github: 'https://github.com/Taha2804',
    },
    {
      name: 'Deepfake Image Detection',
      description: 'Applied research — hybrid dual-branch CNN analysing spatial and frequency-domain artifacts to distinguish authentic images from AI-manipulated media.',
      period: 'Research project',
      technologies: ['Python', 'Machine Learning', 'CNN', 'Signal Processing'],
      highlights: [
        'Co-authored applied research reaching 83–84% validation accuracy.',
        'Designed a confidence-based filtering mechanism to flag low-certainty classifications for further review.',
        'Mirrors forensic-analysis workflows that separate high-confidence findings from cases needing escalation.',
      ],
      github: 'https://github.com/Taha2804',
    },
    {
      name: 'Secure Remote Administration Tool',
      description: 'Remote administration utility built with an emphasis on secure, authenticated access.',
      period: 'Personal project',
      technologies: ['Python', 'Linux', 'Shell Scripting'],
      highlights: [
        'Designed around secure access patterns drawn from CEH / CHFI coursework.',
        'Automation of recurring administrative tasks with scripted, auditable workflows.',
      ],
      github: 'https://github.com/Taha2804',
    },
    {
      name: 'Vulnerability Assessment Lab',
      description: 'Self-built penetration testing lab producing structured, audit-style vulnerability findings reports.',
      period: 'Ongoing',
      technologies: ['Nmap', 'Nessus', 'OpenVAS', 'Metasploit', 'Burp Suite', 'Python'],
      highlights: [
        'Practiced black / grey box testing and web application security assessment.',
        'Automated reconnaissance and validation scripting in Python.',
        'Translated technical results into clear, reviewable findings documentation.',
      ],
      github: 'https://github.com/Taha2804',
    },
  ],

  about: {
    bio: 'Entry-level cybersecurity analyst based in Pune, currently completing an MCA after a BCA. Holds CEH, CHFI, and CCNA certifications, with hands-on experience in IT support, security operations, and penetration testing lab work. Comfortable triaging high-volume technical issues, monitoring network traffic, and documenting security findings — building toward SOC, VAPT, and digital forensics roles.',
    strengths: [
      'Security testing — VAPT, threat detection, and OWASP Top 10',
      'Network security — packet analysis, firewall configuration, VPN setup',
      'Incident triage and structured findings documentation',
      'Python scripting for reconnaissance and automation',
      'Full-stack development — React, REST APIs, JWT authentication',
    ],
  },
}