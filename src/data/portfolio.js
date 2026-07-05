export const PROFILE = {
  name: "Anmol Kumar Shrivastava",
  shortName: "Anmol",
  handle: "ANMOL.DEV",
  title: "Full Stack Developer Specialist",
  location: "Vadodara, Gujarat — IN",
  email: "anmolaks.0322@gmail.com",
  phone: "+91 74890 48815",
  linkedin: "https://www.linkedin.com/in/anmol-shrivastava-fullstack/",
  linkedinHandle: "anmol-shrivastava-fullstack",
  github: "https://github.com/Nisys-Anmol",
  githubHandle: "Nisys-Anmol",
  resumeUrl:
    "https://drive.google.com/file/d/1crkQm4H-SkJJOOxW1Ac819vbUwpnysr7/view?usp=sharing",
  tagline:
    "3+ years building production-grade systems that power real businesses — from FinTech loan engines to enterprise CRM platforms handling thousands of daily transactions.",
  about:
    "I specialize in turning complex business requirements into reliable, scalable software. Over 3+ years at a FinTech company powering multiple lending brands, I've architected microservices that handle the full loan lifecycle — from customer acquisition and underwriting to servicing and collections. My sweet spot is backend-heavy full stack — NestJS/Node.js APIs, PostgreSQL performance tuning, AWS infrastructure — wrapped in clean React/Next.js interfaces. I ship code that handles real money, real compliance, and real scale.",
  yearsExperience: "3+",
  portrait: "/images/linkedInImage.jpg",
};

export const SKILLS = [
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "C#"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Angular", "HTML5", "CSS3", "Bootstrap", "Material UI"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "REST APIs", "Microservices", "Auth & RBAC", "Swagger/OpenAPI"],
  },
  {
    group: "Databases & Search",
    items: ["PostgreSQL", "MySQL", "SQL Server", "OpenSearch", "Elasticsearch"],
  },
  {
    group: "Cloud & Tools",
    items: ["AWS Cloud Services", "Git", "GitHub", "Postman", "JIRA"],
  },
  {
    group: "ORMs & Practices",
    items: ["TypeORM", "Entity Framework", "Agile/Scrum", "SOLID", "Code Reviews", "Perf Optimization"],
  },
];

export const EXPERIENCE = [
  {
    company: "Thrivos Financial Services",
    companyDesc: "FinTech leader powering digital lending, loan servicing & underwriting platforms across multiple brands — 25+ years in consumer & business financing.",
    role: "Full Stack Developer",
    period: "Jun 2023 — Present",
    stack: ["React.js", "Next.js", "Node.js", "NestJS", "PostgreSQL", "AWS", ".NET / C#"],
    bullets: [
      "Designed and developed scalable full-stack applications using React.js, Next.js, Node.js, NestJS, and PostgreSQL, supporting CRM and financial platforms serving high-volume transaction workflows.",
      "Built and maintained RESTful APIs and microservices for customer onboarding, billing, vehicle management, payment processing, and loan workflows — reducing API response times by 30%.",
      "Optimized backend workflows and database queries using C#/.NET, NestJS, and TypeORM — improving performance and reducing production incidents by 20%.",
      "Integrated AWS CloudWatch, S3, and Elasticsearch for centralized logging, monitoring, and search — reducing debugging time by 25%.",
      "Implemented clean architecture and SOLID principles across large codebases, improving maintainability and reducing onboarding time for new developers.",
      "Authored and deployed critical .NET/C# patches to resolve production defects, eliminating recurring support tickets and preventing future regressions.",
      "Participated in code reviews, root cause analysis, and sprint planning in Agile/Scrum teams, consistently delivering within sprint timelines.",
    ],
  },
];

export const PROJECTS = [
  {
    code: "P-01",
    title: "Digital Lending & Loan Servicing Platform",
    type: "Case Study · Enterprise",
    summary:
      "Architected end-to-end loan lifecycle platform — customer acquisition, underwriting, KYC verification, EMI billing, payment reconciliation, and collections — serving multiple lending brands under one unified tech stack.",
    stack: ["NestJS", "PostgreSQL", "Next.js", "TypeORM", ".NET"],
    impact:
      "Reduced billing errors by 60% through modular service refactoring. Shipped .NET patches that resolved critical data inconsistencies affecting 2K+ active loans in production.",
    metrics: ["2K+ active loans", "60% fewer billing errors", "Multi-brand platform"],
    image: "/images/lending-platform-arch.svg",
  },
  {
    code: "P-02",
    title: "Scalable Microservices Architecture",
    type: "Case Study · Backend",
    summary:
      "Designed and deployed a distributed microservices layer handling authentication, role-based access, payment gateways, and inter-service communication for high-volume financial operations.",
    stack: ["Node.js", "NestJS", "PostgreSQL", "REST", "Microservices"],
    impact:
      "Achieved 3x improvement in API response times under peak load. Clean service boundaries reduced cross-team deployment conflicts by 40%.",
    metrics: ["3x faster response", "10K+ daily requests", "40% fewer deploy conflicts"],
    image: "/images/microservices-arch.svg",
  },
  {
    code: "P-03",
    title: "AWS Cloud Integration & Monitoring",
    type: "Case Study · Infrastructure",
    summary:
      "Built a centralized observability stack — real-time CloudWatch dashboards, automated S3 storage pipelines, and Elasticsearch-powered log search across all production services.",
    stack: ["AWS CloudWatch", "S3", "Elasticsearch", "Node.js"],
    impact:
      "Cut incident triage time from hours to minutes. Proactive monitoring identified performance bottlenecks before they hit users, reducing P1 incidents by 50%.",
    metrics: ["50% fewer P1s", "Real-time alerting", "Centralized logs"],
    image: "/images/aws-monitoring-arch.svg",
  },
];

export const EDUCATION = {
  degree: "B.Tech, Computer Science",
  institution: "Sagar Institute of Research & Technology, Bhopal",
  cgpa: "8.8 / 10",
};

export const TESTIMONIAL = {
  quote: "Anmol is the kind of developer you trust with your most critical systems. He took ownership of our entire loan management backend — from database architecture to API deployment — and delivered solutions that just work, even under heavy load. His code is clean, his communication is sharp, and he ships faster than engineers with twice his experience.",
  name: "Engineering Lead",
  role: "Thrivos Financial Services",
};

export const MARQUEE_TECH = [
  "REACT.JS",
  "NEXT.JS",
  "NODE.JS",
  "NESTJS",
  "TYPESCRIPT",
  "POSTGRESQL",
  "AWS",
  "MICROSERVICES",
  "ELASTICSEARCH",
  "C# / .NET",
  "ANGULAR",
  "TYPEORM",
];
