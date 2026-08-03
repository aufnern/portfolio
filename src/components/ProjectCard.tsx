import type { Project } from "@/content/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-black/8 p-5 transition-colors hover:border-black/20 dark:border-white/12 dark:hover:border-white/30">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-medium">{project.title}</h3>
        <div className="flex gap-3 text-sm">
          {project.href && (
            <a
              className="text-foreground/60 underline-offset-4 hover:text-foreground hover:underline"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}
          {project.repo && (
            <a
              className="text-foreground/60 underline-offset-4 hover:text-foreground hover:underline"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground/70">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-foreground/6 px-2.5 py-1 font-mono text-xs text-foreground/60"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
