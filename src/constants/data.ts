import type {
  PersonalInfo,
  SkillCategory,
  Project,
  TimelineEntry,
  ContactInfo,
  NavLink,
} from '@/types'

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export const PERSONAL: PersonalInfo = {
  name: 'Akash Singh',
  firstName: 'Akash',
  lastName: 'Singh',
  title: 'CSE Enthusiast | Full Stack Developer',
  tagline:
    'A passionate developer who crafts beautiful, performant digital experiences. I turn complex problems into elegant, user-centric solutions.',
  email: 'akashsinghask2001@gmail.com',
  phone: '+91 8477926811',
  location: 'Agra, Uttar Pradesh, India',
  bio: [
    'Aspiring Software Developer with a strong foundation in web development, programming, and problem-solving. Proficient in HTML, CSS, JavaScript, and Python, with hands-on experience building responsive, user-friendly web applications.',
    'Passionate about crafting innovative digital solutions and continuously learning emerging technologies. Demonstrates strong analytical thinking, adaptability, and collaboration skills, with a commitment to delivering high-quality results.',
    'Strong understanding of software development principles, debugging, and responsive design; eager to leverage technical skills to drive impactful business outcomes.',
  ],
  roles: [
    'Full Stack Developer',
    'CSE Enthusiast',
    'React Developer',
    'Problem Solver',
    'UI/UX Enthusiast',
  ],
  socials: [
    { name: 'GitHub', href: 'https://github.com', iconName: 'Github' },
    { name: 'LinkedIn', href: 'https://linkedin.com', iconName: 'Linkedin' },
    { name: 'Twitter', href: 'https://twitter.com', iconName: 'Twitter' },
  ],
  facts: [
    { icon: '🎓', label: 'Education', value: 'B.Tech CSE' },
    { icon: '📍', label: 'Location', value: 'Agra, UP, India' },
    { icon: '💼', label: 'Available for', value: 'Freelance & Full-time' },
    { icon: '🌐', label: 'Languages', value: 'Hindi, English' },
  ],
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    color: '#7C3AED',
    icon: '💻',
    skills: [
      { name: 'JavaScript', icon: '🟨', level: 90 },
      { name: 'Python', icon: '🐍', level: 85 },
      { name: 'Java', icon: '☕', level: 75 },
      { name: 'C', icon: '⚙️', level: 70 },
      { name: 'SQL', icon: '🗄️', level: 80 },
    ],
  },
  {
    title: 'Frontend',
    color: '#EC4899',
    icon: '🎨',
    skills: [
      { name: 'React.js', icon: '⚛️', level: 88 },
      { name: 'HTML5', icon: '📄', level: 95 },
      { name: 'CSS3', icon: '🎨', level: 92 },
      { name: 'Bootstrap', icon: '🅱️', level: 85 },
      { name: 'Tailwind CSS', icon: '💨', level: 82 },
      { name: 'Responsive Design', icon: '📱', level: 90 },
    ],
  },
  {
    title: 'Tools & Utilities',
    color: '#06B6D4',
    icon: '🛠️',
    skills: [
      { name: 'Postman', icon: '📮', level: 82 },
      { name: 'JIRA', icon: '📋', level: 75 },
      { name: 'Power BI', icon: '📊', level: 70 },
      { name: 'Firebase', icon: '🔥', level: 78 },
      { name: 'MS-Office', icon: '📎', level: 85 },
    ],
  },
  {
    title: 'AI Productivity',
    color: '#F59E0B',
    icon: '🤖',
    skills: [
      { name: 'ChatGPT', icon: '💬', level: 90 },
      { name: 'Claude AI', icon: '🧠', level: 85 },
      { name: 'GitHub Copilot', icon: '🤝', level: 82 },
      { name: 'AI Dev Tools', icon: '⚡', level: 80 },
    ],
  },
]

export const COMPETENCIES = [
  'Effective Communication',
  'Team Collaboration',
  'Analytical Thinking',
  'Problem Solving',
  'Time Management',
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Krishna Nursery Website',
    description:
      'Designed and developed a fully responsive nursery website featuring a product catalog, shopping cart, and payment integration. Built contact, delivery, and inquiry pages with cross-browser compatibility and optimized performance.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#7C3AED',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    icon: '🌿',
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description:
      'Developed a professional portfolio showcasing technical skills, projects, and personal profile with responsive layouts across desktop, tablet, and mobile. Implemented interactive UI components and smooth navigation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#EC4899',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    icon: '🌐',
  },
]

export const TIMELINE: TimelineEntry[] = [
  {
    type: 'education',
    title: 'B.Tech – Computer Science & Engineering',
    organization: 'PK University, Shivpuri, Madhya Pradesh',
    period: 'Jul 2022 – Jun 2026',
    description:
      'Pursuing Bachelor of Technology in Computer Science & Engineering with focus on software development, data structures, algorithms, and web technologies.',
    tags: ['Data Structures', 'Algorithms', 'Web Development', 'DBMS'],
    color: '#7C3AED',
  },
]

export const CONTACT_INFO: ContactInfo[] = [
  {
    iconName: 'Mail',
    label: 'Email',
    value: 'akashsinghask2001@gmail.com',
    href: 'mailto:akashsinghask2001@gmail.com',
    color: '#7C3AED',
  },
  {
    iconName: 'Phone',
    label: 'Phone',
    value: '+91 8477926811',
    href: 'tel:+918477926811',
    color: '#EC4899',
  },
  {
    iconName: 'MapPin',
    label: 'Location',
    value: 'Agra, Uttar Pradesh, India',
    href: null,
    color: '#06B6D4',
  },
]

export const AI_SYSTEM_PROMPT = `You are Akash's AI Portfolio Assistant. You are embedded in Akash Singh's personal portfolio website. Your job is to answer questions about Akash professionally and helpfully.

Here is everything you know about Akash:

**Personal Information:**
- Full Name: Akash Singh
- Title: CSE Enthusiast | Full Stack Developer
- Email: akashsinghask2001@gmail.com
- Phone: +91 8477926811
- Location: Agra, Uttar Pradesh, India
- Languages: Hindi, English
- Interests: Coding & Web Designing, Exploring AI Tools & Internet Research

**Professional Summary:**
Aspiring Software Developer with a strong foundation in web development, programming, and problem-solving. Proficient in HTML, CSS, JavaScript, and Python, with hands-on experience building responsive, user-friendly web applications. Passionate about crafting innovative digital solutions and continuously learning emerging technologies. Demonstrates strong analytical thinking, adaptability, and collaboration skills, with a commitment to delivering high-quality results.

**Technical Skills:**
- Programming Languages: Python, C, Java, JavaScript, SQL
- Frontend: React.js, HTML5, CSS3, Bootstrap, Tailwind CSS, Responsive Web Design
- Tools & Utilities: Postman, JIRA, Power BI, Firebase, MS-Office
- AI Productivity Tools: ChatGPT, Claude AI, GitHub Copilot, AI-Assisted Development Tools
- Professional Competencies: Effective Communication, Team Collaboration, Analytical Thinking, Problem Solving, Time Management

**Key Projects:**
1. Krishna Nursery Website (HTML, CSS, JavaScript): Fully responsive nursery website with product catalog, shopping cart, payment integration, contact/delivery/inquiry pages, cross-browser compatibility, mobile responsiveness, form validations.
2. Personal Portfolio Website (HTML, CSS, JavaScript): Professional portfolio showcasing skills, projects, responsive layouts, interactive UI components, smooth navigation, modern UI/UX, performance optimization, cross-browser compatibility.

**Education:**
- PK University, Shivpuri, Madhya Pradesh, India
- Bachelor of Technology (B.Tech) – Computer Science & Engineering
- Duration: Jul 2022 – Jun 2026

**Guidelines:**
- Be conversational, professional, and friendly
- If asked something you don't know about Akash, say you don't have that info but suggest they contact Akash directly
- You can also answer general tech/coding questions to showcase knowledge
- Keep responses concise but informative
- Use markdown formatting when helpful
- Always be enthusiastic about Akash's skills and potential`
