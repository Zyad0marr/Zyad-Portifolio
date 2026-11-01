import { SkillCategory, ServiceItem, QAProjectItem } from '../types';

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

  projectsTitle: "Projects",
  projectsBadge: "QA Case Studies",
  projectsHeading: "Featured Testing Projects",
  projectsText: "Hands-on software testing case studies demonstrating end-to-end quality assurance, test documentation, and defect management.",

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

export const PROJECTS_DATA: QAProjectItem[] = [
  {
    id: "manage-employee-break-tickets",
    title: "Manage Employee Break Tickets",
    category: "Manual Software Testing",
    type: "Practical Manual Testing Project",
    shortDescription: "Performed manual testing on the Manage Employee Break Tickets system to evaluate its functionality, verify expected behavior, and identify potential defects.",
    description: "Performed manual testing on the Manage Employee Break Tickets system to evaluate its functionality, verify expected behavior, and identify potential defects.",
    workPerformed: [
      "Analyzed the application requirements and functionality.",
      "Created detailed Test Scenarios.",
      "Designed and documented Test Cases.",
      "Executed manual test cases.",
      "Identified and documented bugs in professional Bug Reports.",
      "Verified expected versus actual results."
    ],
    deliverableTags: [
      "Test Scenarios",
      "Test Cases",
      "Bug Reports"
    ],
    testCases: [
      {
        testId: "TC_NAME_1",
        testName: "Alphabetic characters and spaces only",
        testDescription: "Verify that name field accepts a valid name input contains alphabetic characters and spaces",
        testPrecondition: "1- The user should be logged into the system as an employee\n2- The test should be run during shift hours\n3- The user should be located at the \"Break Ticket\" section",
        testData: "Name: Jhon Doe\nStart: 15:00\nDuration: 30",
        testSteps: "1- Fill name\n2- Fill start time\n3- Fill duration\n4- Click submit",
        expectedResult: "1- The break ticket should be submitted successfully\n2- A success message is displayed\n3- Ticket appears in\"pending approval\" section",
        actualResult: "Ticket submit successfully and appears in pending approval section",
        status: "Passed"
      },
      {
        testId: "TC_NAME_2",
        testName: "Name with less than 2 characters",
        testDescription: "Verify the name field doesn't accept name input with characters number < 2",
        testPrecondition: "1- The user should be logged into the system as an employee\n2- The test should be run during shift hours\n3- The user should be located at the \"Break Ticket\" section",
        testData: "Name: J\nStart: 15:00\nDuration: 30",
        testSteps: "1- Fill name\n2- Fill start\n3- Fill duration\n4- Click submit",
        expectedResult: "1- the break ticket should'nt submitted\n2- Error message displayed at name field",
        actualResult: "Error message at name field \"enter 2–50 alphabetic characters and spaces\"",
        status: "Passed"
      },
      {
        testId: "TC_NAME_3",
        testName: "Name with more than 50 characters",
        testDescription: "Verify the name field doesn't accept name input with characters number > 50",
        testPrecondition: "1- The user should be logged into the system as an employee\n2- The test should be run during shift hours\n3- The user should be located at the \"Break Ticket\" section",
        testData: "Name: (More than 50 characters)\nStart: 15:00\nDuration: 30",
        testSteps: "1- Fill name\n2- Fill start\n3- Fill duration\n4- Click submit",
        expectedResult: "1- the break ticket should'nt submitted\n2- Error message displayed at name field",
        actualResult: "Error message at name field \"enter 2–50 alphabetic characters and spaces\"",
        status: "Passed"
      },
      {
        testId: "TC_NAME_4",
        testName: "Unregistered Employee Name",
        testDescription: "Verify the name must match the registered employee name in the system",
        testPrecondition: "1- The user should be logged into the system as an employee\n2- The test should be run during shift hours\n3- The user should be located at the \"Break Ticket\" section\n4- A registered employee name should exist in the system",
        testData: "Name: Ali Ali\nStart: 15:00\nDuration: 30",
        testSteps: "1- Fill name\n2- Fill start\n3- Fill duration\n4- Click submit",
        expectedResult: "1- the break ticket should'nt submitted\n2- Error message displayed at name field",
        actualResult: "Error message at name field \"Name is not in the registered employee list\"",
        status: "Passed"
      },
      {
        testId: "TC_ST_TIME_2",
        testName: "Start time must be in shift hours",
        testDescription: "The employee break must be in shift hour (8:00 - 17:00)",
        testPrecondition: "1- The user should be logged into the system as an employee\n2- The employee should be within their scheduled shift hours (08:00–17:00)",
        testData: "Name: Jhon Doe\nStart: 15:00\nDuration: 30",
        testSteps: "1- Fill name\n2- Fill start\n3- Fill duration\n4- Click submit",
        expectedResult: "1- The break ticket should be submitted successfully\n2- A success message is displayed\n3- Ticket appears in\"pending approval\" section",
        actualResult: "Ticket submit successfully and appears in pending approval section",
        status: "Passed"
      },
      {
        testId: "TC_ST_TIME_3",
        testName: "Start time must be greater than current system time",
        testDescription: "Verify system reject any start time that is equal to or earlier than the current system time and accepts only a future time",
        testPrecondition: "1- The user should be logged into the system as an employee\n2- The employee should be within their scheduled shift hours (08:00–17:00)",
        testData: "Current time: 14:00\nStart: 15:00\nDuration: 30",
        testSteps: "1- Fill name\n2- Fill start\n3- Fill duration\n4- Click submit",
        expectedResult: "1- The break ticket should be submitted successfully\n2- A success message is displayed\n3- Ticket appears in\"pending approval\" section",
        actualResult: "Ticket submit successfully and appears in pending approval section",
        status: "Passed"
      },
      {
        testId: "TC_ST_TIME_4",
        testName: "Can't be left blank",
        testDescription: "Verify system display a required field when you left blank",
        testPrecondition: "1- The user should be logged into the system as an employee.\n2- The employee should have access to the break ticket section.\n3- The required field should be available and empty",
        testData: "Name: Empty\nStart: 15:00\nDuration: 30",
        testSteps: "1- Fill start\n2- Fill duration\n3- Click submit",
        expectedResult: "1- the break ticket should'nt submitted\n2- Error message displayed at name field required",
        actualResult: "Error message at name field (Required)",
        status: "Passed"
      },
      {
        testId: "TC_BC_TIME_1",
        testName: "Break duration 60 minutes.",
        testDescription: "Verify the break duration doesn't exceed 60 minutes",
        testPrecondition: "1- The user should be logged into the system as an employee.\n2- The employee should have access to the break ticket section.\n3- The maximum break duration should be set to 60 minutes",
        testData: "Name: Jhon Doe\nStart: 15:00\nDuration: 50",
        testSteps: "1- Fill name\n2- Fill start\n3- Fill duration\n4- Click submit",
        expectedResult: "1- The break ticket should be submitted successfully\n2- A success message is displayed\n3- Ticket appears in\"pending approval\" section",
        actualResult: "Ticket submit successfully and appears in pending approval section",
        status: "Passed"
      },
      {
        testId: "TC_BC_TIME_2",
        testName: "Return time must be greater than the start time",
        testDescription: "Verify the return time greater than start time",
        testPrecondition: "1- The user should be logged into the system as an employee\n2- The employee should be within their scheduled shift hours (08:00–17:00)",
        testData: "Start time: 14:00\nReturn time: 15:00",
        testSteps: "1- Fill name\n2- Fill start\n3- Fill duration\n4- Click submit",
        expectedResult: "1- The break ticket should be submitted successfully\n2- A success message is displayed\n3- Ticket appears in\"pending approval\" section",
        actualResult: "Ticket submit successfully and appears in pending approval section",
        status: "Passed"
      }
    ],
    bugReports: [
      {
        bugId: "TC_ST_TIME_1",
        testName: "24-Hour Time Format",
        description: "Verify that the time field accepts only the 24-hour format",
        preconditions: "1- The user should be logged into the system as an employee\n2- The test should be run during shift hours\n3- The user should be located at the \"Break Ticket\" section",
        testData: "Name: Jhon Doe\nStart: 15:00\nDuration: 30",
        stepsToReproduce: "1- Fill name\n2- Fill start\n3- Fill duration\n4- Click submit",
        expectedResult: "1- the break ticket should submitted",
        actualResult: "The time field accepts 12-hour format instead of 24-hour format.",
        status: "Fail",
        sourceSheet: "Test Cases Matrix – Sheet 1 (Row 6)",
        screenshotSrc: "/assets/aistudio/__________2026-10-25_000403_b82f97f3.png"
      }
    ],
    documentationImages: [
      {
        id: "doc-tc-1",
        section: "Test Cases",
        sheetName: "Sheet 1: Input Validation & Time Format",
        title: "Test Cases Matrix – Field & Input Validation",
        subtitle: "TC_NAME_1 to TC_ST_TIME_1 (Character bounds, unregistered user & time format)",
        src: "/assets/aistudio/__________2026-10-25_000403_b82f97f3.png",
        caption: "Original execution spreadsheet recording input validation rules, character lengths (2–50 characters), and execution statuses.",
        notes: "Includes documented defect TC_ST_TIME_1 where the time field accepted 12-hour format instead of the specified 24-hour format."
      },
      {
        id: "doc-tc-2",
        section: "Test Cases",
        sheetName: "Sheet 2: Shift Hours & Duration Limits",
        title: "Test Cases Matrix – Working Hours & Duration Rules",
        subtitle: "TC_ST_TIME_2 to TC_BC_TIME_2 (Shift hours 08:00–17:00, blank checks & max duration)",
        src: "/assets/aistudio/__________2026-10-25_000417_fa6cb15c.png",
        caption: "Execution matrix for business rules including shift boundary verification, system time constraints, required fields, and 60-minute maximum duration limits.",
        notes: "All test cases executed with verified preconditions, test data, and expected vs. actual outcomes."
      },
      {
        id: "doc-bug-1",
        section: "Bug Reports",
        sheetName: "Execution Defect Log: TC_ST_TIME_1",
        title: "Bug Report Evidence – 24-Hour Time Format Validation Failure",
        subtitle: "Logged Defect from Test Matrix: System accepts 12-hour format instead of 24-hour format",
        src: "/assets/aistudio/__________2026-10-25_000403_b82f97f3.png",
        caption: "Execution matrix defect record: TC_ST_TIME_1 highlighted in red with status 'Fail'. Actual behavior allowed 12-hour format contrary to specification.",
        highlightDefect: "TC_ST_TIME_1: The time field accepts 12-hour format instead of 24-hour format. (Status: Fail)"
      }
    ]
  }
];

export const NAV_LINKS = [
  { id: "cover", label: "Cover" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

