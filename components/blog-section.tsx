import { articles } from "@/data/site-content";
import { CalendarDays, MoveUpRight } from "lucide-react";
import { SectionHeader } from "./section-header";

export function BlogSection() {
  return (
    <section
      id="blog"
      className="bg-cream/70 py-24 [--muted:#314637] dark:bg-forest-950/42 dark:[--muted:#d8e6d4] md:py-32"
    >
      <div className="section-shell">
        <SectionHeader
          eyebrow="News and resources"
          title="Climate knowledge for"
          accent="student action"
          description="Program notes, learning resources, and evidence from the roadmap help partners understand how Daryeel measures progress."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="glass-strong reveal group flex min-h-[19rem] flex-col rounded-[2rem] p-7 transition hover:-translate-y-2 hover:shadow-glass"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-sunset/14 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-sunset">
                  {article.label}
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-[color:var(--muted)]">
                  <CalendarDays size={15} />
                  {article.date}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-black leading-tight text-forest-950 dark:text-cream">{article.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-[color:var(--muted)]">{article.description}</p>
              <a
                href="#blog"
                className="mt-7 inline-flex items-center gap-2 text-sm font-black text-forest-700 transition group-hover:text-sunset dark:text-forest-300"
              >
                Read update
                <MoveUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
