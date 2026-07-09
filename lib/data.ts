// Centralized content, extracted from Vinay Penta's resume.
// Edit this file to update any content shown on the site.

export const profile = {
  name: "Vinay Penta",
  role: "React JS Developer",
  tagline:
    "React.js · JavaScript · TypeScript · Material UI · Python · Django REST Framework",
  location: "Hyderabad, Telangana, India",
  email: "vinaypenta94@gmail.com",
  phone: "+91 6309849311",
  linkedin: "https://linkedin.com/in/vinay-penta/",
  github: "https://github.com/", // placeholder — no GitHub URL was listed on the resume
  yearsExperience: "3+",
  summary:
    "React JS Developer with 3+ years of hands-on experience building scalable, responsive, and high-performance web applications. Strong expertise across HTML5, CSS3, JavaScript, TypeScript, React JS, Bootstrap, Material UI, Python, and Django REST Framework. Experienced in building reusable UI components, handling complex forms, integrating REST APIs, and shipping production-ready applications in Agile teams.",
  resumeFile: "/resume.pdf",
};

export const skillGroups = [
  {
    category: "Frontend",
    accent: "blue" as const,
    skills: [
      { name: "React.js", level: 92 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Material UI (MUI)", level: 88 },
      { name: "Bootstrap", level: 82 },
    ],
  },
  {
    category: "Backend",
    accent: "cyan" as const,
    skills: [
      { name: "Python", level: 78 },
      { name: "Django", level: 75 },
      { name: "Django REST Framework", level: 80 },
      { name: "REST API Development", level: 88 },
    ],
  },
  {
    category: "Tools & Workflow",
    accent: "blue" as const,
    skills: [
      { name: "Git / GitHub / Bitbucket", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Chrome DevTools", level: 85 },
    ],
  },
  {
    category: "Concepts & Practices",
    accent: "cyan" as const,
    skills: [
      { name: "Agile / Scrum", level: 85 },
      { name: "Component-Based Architecture", level: 88 },
      { name: "Performance Optimization", level: 82 },
      { name: "Form Validation & CRUD", level: 88 },
    ],
  },
];

export const experience = [
  {
    role: "React JS Developer",
    company: "Pranathi Software Services Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "August 2023 — Present",
    points: [
      "Developed responsive and interactive user interfaces using React JS and modern JavaScript (ES6+).",
      "Built scalable and modular UI components using Material UI (MUI) and Bootstrap.",
      "Implemented clean, reusable components to improve maintainability and development speed.",
      "Integrated RESTful APIs, ensuring seamless data flow between frontend and backend systems.",
      "Developed backend APIs and services using Python and Django REST Framework (DRF).",
      "Partnered with business analysts and stakeholders to translate requirements into working software.",
      "Optimized application performance through code refactoring, lazy loading, and efficient rendering.",
      "Used Git, GitHub, and Bitbucket for version control and collaborative development.",
    ],
  },
];

export const projects = [
  {
    name: "SEO & SMM Platform",
    domain: "Digital Marketing",
    description:
      "Responsive dashboards for SEO and social media management operations, with full CRUD across campaigns, keywords, competitors, posts, and reports.",
    features: [
      "REST APIs for campaigns, keywords, competitors, posts, and reports",
      "Backend endpoints built with Django REST Framework",
      "Modules for campaign management, social scheduling, and performance tracking",
    ],
    tech: ["React.js", "Material UI", "Python", "Django REST Framework", "REST API", "Git"],
    links: { demo: "#", code: "#" },
  },
  {
    name: "Smart Investor Deck",
    domain: "AI-Powered Pitch Deck Platform",
    description:
      "A drag-and-drop pitch deck builder with real-time preview and multi-user collaboration, built for fundraising teams.",
    features: [
      "Real-time preview with multi-user editing & commenting",
      "Dynamic charts for financial data visualization",
      "Admin portal and subscription billing modules",
    ],
    tech: ["React.js", "Python", "Django REST Framework", "REST API", "Charts"],
    links: { demo: "#", code: "#" },
  },
  {
    name: "Auto SDLC",
    domain: "AI-Driven Documentation Platform",
    description:
      "Dynamic BRD/FRD requirement-collection forms with conditional rendering, plus a template management system for generated documentation.",
    features: [
      "Complex form validation with conditional rendering",
      "Template management module and PDF/Word export",
      "Admin and Customer portals",
      "Reduced document generation time by ~50% via rendering optimizations",
    ],
    tech: ["React.js", "Python", "Django REST Framework", "REST API"],
    links: { demo: "#", code: "#" },
  },
  {
    name: "Talent Scan",
    domain: "AI Recruitment Platform",
    description:
      "Responsive recruitment interfaces with AI-based resume alignment and candidate screening built in.",
    features: [
      "AI-based resume alignment and candidate screening",
      "Candidate data processing APIs with Django REST Framework",
      "UI/functional bug fixes and load-time optimizations",
    ],
    tech: ["React.js", "Material UI", "Python", "Django REST Framework", "Git", "Bitbucket"],
    links: { demo: "#", code: "#" },
  },
];

export const education = [
  {
    degree: "B.Sc — Computer Science",
    institution: "Girraj Government College, Nizamabad",
    year: "2019 — 2022",
    score: "CGPA: 7.49 / 10",
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Sr Junior College, Nizamabad (TSBIE)",
    year: "2019",
    score: "93.30%",
  },
];

export const achievements = [
  "Scored 93.30% in Senior Secondary (Class XII), Telangana State Board of Intermediate Education.",
  "Reduced document generation time by approximately 50% through performance optimization on the Auto SDLC platform.",
  "Successfully delivered 4 production-grade AI-powered platforms across Digital Marketing, FinTech, Documentation, and Recruitment.",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
