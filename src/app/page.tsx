import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { profile, projects, skills, socials, timeline } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="mx-auto w-full max-w-3xl flex-1 px-6">
        <div className="py-20">
          <p className="font-mono text-sm text-foreground/50">{profile.location}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-foreground/70">{profile.role}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-foreground/70">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-foreground px-4 py-2 text-background transition-opacity hover:opacity-85"
            >
              Get in touch
            </a>
            <a
              href={profile.resumeUrl}
              className="rounded-full border border-black/12 px-4 py-2 transition-colors hover:border-black/30 dark:border-white/20 dark:hover:border-white/40"
            >
              Resume
            </a>
          </div>
        </div>

        <Section id="about" title="About">
          <div className="space-y-4 leading-relaxed text-foreground/70">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-5">
            {timeline.map((item) => (
              <li key={`${item.title}-${item.org}`} className="sm:flex sm:gap-6">
                <p className="font-mono text-sm text-foreground/50 sm:w-36 sm:shrink-0">
                  {item.period}
                </p>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-foreground/60">{item.org}</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-6 sm:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.group}>
                <p className="mb-2 text-sm font-medium">{skill.group}</p>
                <ul className="space-y-1 text-sm text-foreground/70">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-xl leading-relaxed text-foreground/70">
            The fastest way to reach me is email. I&apos;m open to internships, freelance work, and
            collaborating on side projects.
          </p>
          <ul className="mt-6 flex flex-wrap gap-4 text-sm">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  className="underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground"
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <footer className="mx-auto w-full max-w-3xl px-6 py-8 text-sm text-foreground/40">
        {`© ${new Date().getFullYear()} ${profile.name}`}
      </footer>
    </>
  );
}
