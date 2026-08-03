import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-black/5 py-14 dark:border-white/10">
      <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-foreground/50">
        {title}
      </h2>
      {children}
    </section>
  );
}
