// Edit this file to update the content of the site.

export const profile = {
  name: "Noah",
  role: "Computer Science Student",
  location: "Your City, Country",
  tagline:
    "I'm a student who likes building things for the web. Currently looking for internships and side projects to learn from.",
  about: [
    "I'm a computer science student focused on web development and software engineering. I spend most of my free time building small projects, reading about system design, and picking up new tools.",
    "Right now I'm looking for an internship where I can work on real products with people who care about craft.",
  ],
  email: "aufner.n@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/aufnern" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
  { label: "Email", href: `mailto:${profile.email}` },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of what you built, the problem it solves, and what you learned along the way.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://example.com",
    repo: "https://github.com/aufnern/project-one",
  },
  {
    title: "Project Two",
    description:
      "Another project. Mention scale or impact if you have numbers: users, requests handled, time saved.",
    tags: ["Python", "FastAPI", "Postgres"],
    repo: "https://github.com/aufnern/project-two",
  },
  {
    title: "Project Three",
    description:
      "A course project, hackathon build, or something you made for fun. Keep it to two sentences.",
    tags: ["React", "Node.js"],
    repo: "https://github.com/aufnern/project-three",
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { group: "Backend & Tools", items: ["Node.js", "PostgreSQL", "Git", "Docker", "Linux"] },
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    title: "BSc Computer Science",
    org: "Your University",
    period: "2023 — present",
    description:
      "Coursework in algorithms, databases, operating systems, and web development.",
  },
  {
    title: "Software Engineering Intern",
    org: "Company Name",
    period: "Summer 2025",
    description:
      "Describe what you shipped and the stack you used. One or two lines is plenty.",
  },
];
