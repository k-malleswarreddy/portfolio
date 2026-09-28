export const personalInfo = {
  name: 'K Malleswar Reddy',
  shortName: 'Malleswar Reddy',
  title: 'Java Backend Engineer | Spring Boot Developer | Microservices Enthusiast',
  roles: ['Java Backend Engineer', 'Spring Boot Developer', 'Microservices Enthusiast'],
  tagline: 'Building scalable backend systems, secure APIs, and modern microservice architectures.',
  email: 'malleswar863@gmail.com',
  phone: '+91-9347202330',
  location: 'Hyderabad, India',
  linkedin: 'https://www.linkedin.com/in/malleswar-reddy-kalvapalli-014ba12a8',
  github: 'https://github.com/k-malleswarreddy',
  resume: '/resume.pdf'
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export const about = {
  paragraphs: [
    'Java backend engineer with hands-on industry experience building and maintaining services using Spring Boot, Microservices, REST APIs, and SQL.',
    'Currently working at Cognizant and contributing to scalable backend modules, API integrations, and secure implementation practices.',
    'Passionate about backend development, cloud technologies, AI-assisted development, and software architecture.'
  ],
  stats: [
    { value: '1+', label: 'Years Hands-on' },
    { value: '10+', label: 'REST APIs Built' },
    { value: '8.83', label: 'B.Tech CGPA' },
    { value: '4', label: 'Certifications' }
  ]
};

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript', level: 75 }
    ]
  },
  {
    title: 'Backend Technologies',
    icon: 'Server',
    skills: [
      { name: 'Spring Boot', level: 88 },
      { name: 'Microservices', level: 80 },
      { name: 'JPA / Hibernate', level: 85 },
      { name: 'JDBC', level: 85 },
      { name: 'REST APIs', level: 90 }
    ]
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', level: 75 },
      { name: 'HTML', level: 88 },
      { name: 'CSS', level: 80 }
    ]
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: [{ name: 'MySQL', level: 85 }]
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'Swagger / OpenAPI', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'GitHub Copilot', level: 90 }
    ]
  }
];

export const experiences = [
  {
    company: 'Cognizant',
    role: 'Programmer Analyst Trainee',
    duration: 'Feb 2026 – Present',
    current: true,
    points: [
      'Building backend services using Java and Spring Boot',
      'Working with microservice architecture',
      'REST API development and integrations',
      'Debugging and performance improvement',
      'AI-assisted development using GitHub Copilot'
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'REST', 'Copilot']
  },
  {
    company: 'Tap Academy',
    role: 'Java Full Stack Trainee',
    duration: 'Jun 2025 – Dec 2025',
    current: false,
    points: [
      'Developed CRUD applications',
      'JDBC and MySQL development',
      'Query optimization',
      'Debugging backend applications'
    ],
    tags: ['Java', 'JDBC', 'MySQL', 'SQL']
  }
];

export const projects = [
  {
    title: 'GreenGov Platform',
    subtitle: 'Profile & Registration Microservice',
    description:
      'A citizen and business onboarding microservice for a green governance platform, focused on secure document handling, resilient service-to-service communication, and well-documented APIs.',
    tech: ['Java', 'Spring Boot', 'React', 'JPA/Hibernate', 'MySQL'],
    features: [
      'Responsive citizen onboarding dashboard',
      'Secure file upload validation',
      'Magic-byte file verification',
      'Resilience4j Circuit Breaker',
      'REST API integration',
      'Swagger API documentation'
    ],
    github: 'https://github.com/k-malleswarreddy',
    demo: '#'
  }
];

export const certifications = [
  {
    title: 'Claude Certified Developer – Foundations',
    issuer: 'Anthropic',
    gradient: 'from-orange-400 to-amber-600'
  },
  {
    title: 'GitHub Copilot Certification',
    issuer: 'Microsoft',
    gradient: 'from-sky-400 to-indigo-600'
  },
  {
    title: 'Full Stack Java Developer',
    issuer: 'QSpiders',
    gradient: 'from-emerald-400 to-teal-600'
  },
  {
    title: 'Artificial Intelligence',
    issuer: 'edX',
    gradient: 'from-fuchsia-400 to-purple-600'
  }
];

export const education = [
  {
    degree: 'B.Tech – Computer Science Engineering',
    institution: 'Siddhartha Institute of Science and Technology',
    score: 'CGPA: 8.83'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    score: 'Percentage: 89.1%'
  }
];

export const leadership = [
  {
    title: 'Technical Team Lead',
    description: 'Led a 4-member technical team to deliver project milestones.',
    icon: 'Users'
  },
  {
    title: 'Event Coordinator',
    description: 'Coordinated college technical events with 100+ participants.',
    icon: 'CalendarCheck'
  }
];
