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
      duration: 'Sep 2024 – Sep 2025',
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

  education: [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Abeda Inamdar Senior College, Pune',
      period: '2022 – 2025',
      score: 'CGPA 8.4 / 10',
    },
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Pursuing',
      period: 'In Progress',
      score: '',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Maharashtra State Board',
      period: '2020',
      score: '62%',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Maharashtra State Board',
      period: '2018',
      score: '77%',
    },
  ],

  achievements: [
    'Completed hands-on HackTheBox labs covering enumeration, privilege escalation, and basic lateral movement techniques, with findings documented in structured reports.',
    'Active participant in cybersecurity communities and CTF competitions.',
    'Created Python scripts to automate reconnaissance tasks and basic vulnerability checks during practice labs.',
    'Developed a practical understanding of penetration testing workflows, from reconnaissance through to structured reporting.',
  ],

  languages: [
    { name: 'English', proficiency: 'Professional' },
    { name: 'Hindi', proficiency: 'Native' },
    { name: 'Marathi', proficiency: 'Native' },
  ],

  projects: [
    {
      name: 'Student Management Portal',
      description: 'Full-stack web application for managing student records with create, update, search, and delete operations.',
      period: 'Jan 2025 – Feb 2025',
      technologies: ['React', 'Tailwind CSS', 'REST API', 'JWT Authentication'],
      highlights: [
        'Built a full-stack portal enabling administrators to manage records with advanced filtering, search, and real-time notifications.',
        'Implemented dynamic React forms where department, programme, and batch options update from backend data via REST API.',
        'Integrated JWT-based login flow with protected routes and role-based access control.',
        'Applied client-side validation for email, phone, PRN, and batch formats aligned with backend rules.',
        'Used Axios interceptors for centralised API handling and toast notifications for admin actions.',
      ],
      github: 'https://github.com/Taha2804',
    },
    {
      name: 'Secure Remote Administration Tool',
      description: 'Client-server remote administration utility built in Python for authorised Windows system management.',
      period: 'Dec 2024 – Feb 2025',
      technologies: ['Python', 'Socket Programming', 'Threading'],
      highlights: [
        'Built a client-server tool in Python using socket programming, supporting multiple concurrent clients through multithreading.',
        'Implemented authentication and session logging to maintain audit trails for all system access.',
        'Enabled remote command execution, file transfer, and system monitoring features for authorised management.',
        'Applied secure coding practices and network protocol design while developing client-server communication.',
      ],
      github: 'https://github.com/Taha2804',
    },
    {
      name: 'Penetration Testing Lab Environment',
      description: 'Self-built isolated lab with intentionally vulnerable machines for ethical hacking practice.',
      period: 'Ongoing',
      technologies: ['VirtualBox', 'Kali Linux', 'Metasploitable', 'DVWA', 'Nmap', 'Nessus', 'OpenVAS', 'Metasploit', 'Burp Suite', 'Python'],
      highlights: [
        'Built and provisioned an isolated multi-machine lab using VirtualBox, configuring networked virtual machines to simulate real-world infrastructure.',
        'Conducted vulnerability scans using Nmap, Nessus, and OpenVAS, documenting findings in structured, audit-style reports.',
        'Practised exploitation techniques including SQL injection, XSS, privilege escalation, and post-exploitation in controlled environments and Hack The Box.',
        'Wrote Python scripts to automate reconnaissance and validation checks during lab exercises.',
        'Monitored system logs and network traffic to detect and analyse suspicious activity.',
      ],
      github: 'https://github.com/Taha2804',
    },
    {
      name: 'Smart Video Controller',
      description: 'Gesture- and voice-controlled media application using computer vision and speech recognition.',
      period: 'Mar 2024 – Aug 2024',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Speech Recognition'],
      highlights: [
        'Developed a video control application using hand gestures and voice commands, achieving 92% gesture recognition accuracy.',
        'Integrated OpenCV and MediaPipe hand-tracking models for real-time navigation, playback control, and volume adjustment.',
        'Integrated a speech recognition API for hands-free interaction, reducing user interaction time by 40%.',
        'Optimised the frame processing pipeline to maintain stable 30 FPS performance on mid-range hardware.',
      ],
      github: 'https://github.com/Taha2804',
    },
    {
      name: 'IoT-Based Automatic Liquid Medicine Dispenser',
      description: 'Dose-selection and dispensing system built on an ESP32 microcontroller for precise medical dosing.',
      period: 'Academic project',
      technologies: ['ESP32', 'Embedded C', 'OLED', 'L298N Motor Driver', 'Peristaltic Pump'],
      highlights: [
        'Designed a dose-selection and dispensing system using an ESP32 microcontroller, calibrated peristaltic pump, and OLED display for real-time status feedback.',
        'Implemented a push-button interface allowing dose selection between 2 mL and 20 mL in 0.5 mL increments.',
        'Calculated pump run-time from a calibration constant to control dispensing duration via an L298N motor driver.',
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