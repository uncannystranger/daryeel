import { projects } from "@/data/site-content";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "./section-header";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wash relative overflow-hidden py-24 md:py-32">
      <div className="section-shell">
        <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1fr]">
          <SectionHeader
            eyebrow="Solutions in motion"
            title="Programs designed for"
            accent="measurable resilience"
            description="Daryeel focuses on survival outcomes, student accountability, and green skills instead of planting volume alone."
            align="left"
          />
          <p className="max-w-xl text-base leading-8 text-[color:var(--muted)] lg:justify-self-end">
            The 2026 pilot roadmap starts with 1-3 partner institutions, registers 50-100 students, then expands to 300+ students and 500 distributed trees.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-strong reveal group overflow-hidden rounded-[2rem] transition hover:-translate-y-2 hover:border-[color:var(--accent)]/35 hover:shadow-glass"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/62 via-forest-950/8 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/28 bg-white/74 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-forest-900 shadow-insetSoft backdrop-blur-xl dark:bg-forest-950/70 dark:text-[color:var(--accent)]">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black text-forest-950 dark:text-cream">{project.title}</h3>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-forest-700/12 bg-forest-700/10 text-forest-700 backdrop-blur transition group-hover:rotate-12 group-hover:bg-[color:var(--accent)] group-hover:text-[color:var(--accent-contrast)] dark:border-white/12 dark:bg-white/8 dark:text-[color:var(--accent)]">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{project.description}</p>
                <p className="mt-6 rounded-full border border-forest-700/10 bg-white/42 px-4 py-2 text-sm font-black text-forest-700 backdrop-blur dark:border-white/10 dark:bg-white/8 dark:text-[color:var(--accent)]">
                  {project.stat}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
