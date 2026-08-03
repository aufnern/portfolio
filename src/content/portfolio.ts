// Edit this file to update the content of the site.

export const profile = {
  name: "Noah Aufner",
  role: "HTL Spengergasse Student",
  location: "Baden, Austria",
  tagline:
    "I'm an IT student at HTL Spengergasse in Vienna. I like building things with computers — from small programming projects to photography on the side.",
  about: [
    "I'm a student at HTL Spengergasse, a technical secondary school in Vienna focused on information technology. I got into computers through gaming and programming, and I enjoy figuring out how things work under the hood.",
    "In summer 2024 I did an internship at fms/Austrosoft, where I worked in a team on research tasks and database administration. It taught me how much structure and efficiency matter in a professional environment.",
    "I'm looking for internships and projects where I can keep learning and work on something real.",
  ],
  email: "noah.aufner@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/noauf" },
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
    title: "Transmute",
    description:
      "A universal file converter that runs entirely on your machine — 70+ formats across images, documents, audio, video, and data, with no uploads and no server. Ships as both a web app and a CLI.",
    tags: ["TypeScript", "Go", "Web", "CLI"],
    href: "https://transmute-everything.netlify.app",
    repo: "https://github.com/noauf/Transmute",
  },
  {
    title: "Typist",
    description:
      "A local writing environment for Typst, built as a desktop app with Electron and Vite. Includes unit and end-to-end tests and packaged macOS releases.",
    tags: ["TypeScript", "Electron", "Vite"],
    repo: "https://github.com/noauf/typist",
  },
  {
    title: "Firefly Aerospace Landing Page",
    description:
      "A multi-page marketing site for Firefly Aerospace's rockets, with a launch cost calculator, dark mode, and a responsive layout — built with plain HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/noauf/FireFlyLandingPage",
  },
];

export const skills = [
  {
    group: "Tech",
    items: ["TypeScript", "Go", "HTML/CSS", "Electron", "Linux", "Windows", "macOS"],
  },
  { group: "Languages", items: ["German (native)", "English (fluent)"] },
  { group: "Interests", items: ["Programming", "Photography", "Gaming", "Cycling", "Hiking"] },
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    title: "HTL Spengergasse",
    org: "Higher technical secondary school, Vienna",
    period: "2023 — present",
    description: "Information technology, with a focus on software development.",
  },
  {
    title: "Intern",
    org: "fms/Austrosoft",
    period: "August 2024",
    description:
      "Supported a team on various projects, including research work and database administration.",
  },
  {
    title: "NMS Baden",
    org: "Secondary school",
    period: "2019 — 2023",
    description: "General secondary education.",
  },
];
