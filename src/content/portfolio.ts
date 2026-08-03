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
  { label: "GitHub", href: "https://github.com/aufnern" },
  { label: "Email", href: `mailto:${profile.email}` },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

// Replace these with your own projects — school projects and things you built
// for fun both count.
export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of what you built, the problem it solves, and what you learned along the way.",
    tags: ["Add", "your", "stack"],
    repo: "https://github.com/aufnern",
  },
  {
    title: "Project Two",
    description:
      "A school project from HTL, or something you made in your free time. Two sentences is plenty.",
    tags: ["Add", "your", "stack"],
    repo: "https://github.com/aufnern",
  },
];

export const skills = [
  { group: "IT", items: ["Programming", "Linux", "Windows", "macOS", "Microsoft Office"] },
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
