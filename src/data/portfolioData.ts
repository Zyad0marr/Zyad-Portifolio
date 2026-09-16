import { SkillCategory, ServiceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Ziad Omar",
  logoName: "ZIAD OMAR",
  logoRole: "SOFTWARE TESTER",
  roleLabel: "SOFTWARE TESTER | QA",
  coverGreeting: "Hi, I’m Ziad Omar.",
  coverSecondaryHeading: "Software Tester passionate about quality and reliability.",
  coverIntro: "I’m a Software Tester focused on software quality, reliability, and delivering better user experiences. Detail-oriented, analytical, and dedicated to helping teams deliver dependable software through thorough testing.",
  
  aboutTitle: "About",
  aboutParagraph1: "I’m Ziad Omar, a Software Tester focused on software quality, reliability, and delivering better user experiences.",
  aboutParagraph2: "I work on understanding software requirements, designing clear and effective test cases, executing tests carefully, identifying defects, and documenting issues in a structured way.",
  aboutParagraph3: "I focus on thinking from both the user’s and the system’s perspective to help identify problems that could affect functionality, usability, or the overall user experience.",
  aboutParagraph4: "I approach testing with attention to detail, logical thinking, and a commitment to continuous learning that contributes to delivering stable, reliable software.",
  aboutText: "I’m Ziad Omar, a Software Tester focused on software quality, reliability, and delivering better user experiences.\n\nI work on understanding software requirements, designing clear and effective test cases, executing tests carefully, identifying defects, and documenting issues in a structured way.\n\nI focus on thinking from both the user’s and the system’s perspective to help identify problems that could affect functionality, usability, or the overall user experience.\n\nI approach testing with attention to detail, logical thinking, and a commitment to continuous learning that contributes to delivering stable, reliable software.",

  projectsTitle: "Projects (In Progress)",
  projectsHeading: "Projects Underway",
  projectsText: "Projects are currently in progress. I’m building practical projects as I continue developing my Software Testing and technical skills. More projects will be added soon.",

  servicesTitle: "What I Can Help With",
  servicesSubtitle: "Current Skills & Areas of Focus",
  servicesIntro: "Here are the core Software Testing areas and capabilities I am actively developing and practicing through hands-on exercises:",

  ctaHeading: "Ready to make your software better?",
  ctaText: "If you need someone to test your application, find bugs, and help improve its quality and reliability, let’s work together.",
  ctaButtonText: "Let’s Test Your Software",

  email: "zyadomar333@gmail.com",
  gmailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=zyadomar333@gmail.com&su=Software%20Testing%20%2F%20QA%20Opportunity%20-%20Ziad%20Omar&body=Hi%20Ziad,%0D%0A%0D%0AI%20reviewed%20your%20Software%20Testing%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.",
  mailtoUrl: "mailto:zyadomar333@gmail.com?subject=Software%20Testing%20%2F%20QA%20Opportunity%20-%20Ziad%20Omar&body=Hi%20Ziad,%0D%0A%0D%0AI%20reviewed%20your%20Software%20Testing%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.",
  phone: "01554846669",
  phoneInternational: "+20 155 484 6669",
  phoneTel: "tel:+201554846669",
  whatsappUrl: "https://wa.me/201554846669?text=Hello%20Ziad,%20I%20reviewed%20your%20Software%20Testing%20portfolio%20and%20would%20like%20to%20connect.",
  linkedinUrl: "https://www.linkedin.com/in/zyad-0marr?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  githubUrl: "https://github.com",
  footerText: "© 2026 Ziad Omar. Software Tester"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Software Testing",
    subtitle: "Core QA & Verification Methods",
    icon: "CheckCircle2",
    skills: [
      "Manual Software Testing",
      "Functional Testing",
      "Regression Testing",
      "UI Testing",
      "Test Case Design",
      "Test Scenario Creation",
      "Bug Reporting",
      "SDLC & STLC Concepts"
    ]
  },
  {
    category: "API & Database",
    subtitle: "Backend & Data Integrity Basics",
    icon: "Database",
    skills: [
      "Basic API Testing",
      "REST APIs",
      "Postman",
      "HTTP Requests & Statuses",
      "JSON Validation",
      "Basic SQL Queries",
      "Basic Database Testing"
    ]
  },
  {
    category: "Programming Basics",
    subtitle: "Code Literacy & Web Fundamentals",
    icon: "Code2",
    skills: [
      "Java",
      "JavaScript",
      "C++",
      "HTML",
      "CSS"
    ]
  }
];

export const OFFERED_SERVICES: ServiceItem[] = [
  {
    id: "manual-software-testing",
    title: "Manual Software Testing",
    description: "Executing thorough step-by-step functional tests to verify software behaves according to requirements.",
    iconName: "Search",
    tag: "Core Focus"
  },
  {
    id: "test-case-design",
    title: "Test Case Design",
    description: "Writing clear, structured test cases with defined preconditions, inputs, test steps, and expected results.",
    iconName: "FileSpreadsheet",
    tag: "Core Focus"
  },
  {
    id: "test-scenario-creation",
    title: "Test Scenario Creation",
    description: "Identifying user paths, positive and negative flows, and edge cases to ensure broad test coverage.",
    iconName: "ListChecks",
    tag: "Core Focus"
  },
  {
    id: "bug-reporting",
    title: "Bug Reporting",
    description: "Documenting defects with precise reproduction steps, expected vs. actual outcomes, screenshots, and logs.",
    iconName: "Bug",
    tag: "Core Focus"
  },
  {
    id: "functional-testing",
    title: "Functional Testing",
    description: "Validating that individual features, forms, and business logic work as expected across the application.",
    iconName: "CheckSquare",
    tag: "Quality Verification"
  },
  {
    id: "regression-testing",
    title: "Regression Testing",
    description: "Retesting existing features following bug fixes or code changes to verify that no new defects were introduced.",
    iconName: "RotateCcw",
    tag: "Quality Verification"
  },
  {
    id: "ui-testing",
    title: "UI Testing",
    description: "Checking user interfaces for visual alignment, layout consistency across screen sizes, and intuitive navigation.",
    iconName: "Layout",
    tag: "User Experience"
  },
  {
    id: "basic-api-testing",
    title: "Basic API Testing",
    description: "Sending HTTP requests (GET, POST, PUT, DELETE) in Postman and inspecting status codes and JSON payloads.",
    iconName: "Network",
    tag: "Backend Verification"
  },
  {
    id: "basic-database-testing",
    title: "Basic Database Testing",
    description: "Using foundational SQL queries to verify data persistence, record updates, and table values.",
    iconName: "Database",
    tag: "Data Integrity"
  }
];

export const NAV_LINKS = [
  { id: "cover", label: "Cover" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" }
];

