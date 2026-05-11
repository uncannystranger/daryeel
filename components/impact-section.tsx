import { impactItems } from "@/data/site-content";
import type { CSSProperties } from "react";
import { SectionHeader } from "./section-header";

export function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-forest-800 py-24 text-white dark:bg-[#07150f] md:py-32"
      style={{ "--muted": "rgba(255, 255, 255, 0.76)" } as CSSProperties}
    >
      <div className="absolute inset-x-0 top-0 h-16 rounded-b-[50%] bg-[color:var(--background)]" aria-hidden="true" />
      <div className="absolute -left-20 top-28 size-80 rounded-full bg-sunset/10 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-20 hidden text-forest-500/30 lg:block" aria-hidden="true">
        <LeafPattern />
      </div>
      <div className="section-shell relative z-10 pt-12">
        <SectionHeader
          eyebrow="What we do"
          title="Small Actions,"
          accent="Big Impact"
          description="The model combines learning institutions, home-based planting, demonstration farms, monitoring, and practical climate education into one measurable system."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {impactItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="reveal group rounded-[2rem] border border-white/10 bg-white/[0.07] p-7 shadow-insetSoft backdrop-blur transition hover:-translate-y-2 hover:border-[color:var(--accent)]/45 hover:bg-white/[0.11]"
              >
                <div className="mb-8 grid size-20 place-items-center rounded-full bg-white/12 text-[color:var(--accent)] shadow-soft backdrop-blur transition group-hover:bg-[color:var(--accent)] group-hover:text-[color:var(--accent-contrast)]">
                  <Icon size={32} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/76">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LeafPattern() {
  return (
    <svg width="260" height="220" viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 8 }).map((_, index) => (
        <path
          key={index}
          d={`M${20 + index * 24} 16 C ${58 + index * 14} ${38 + index * 8}, ${76 + index * 14} ${62 + index * 10}, ${96 + index * 12} ${88 + index * 12}`}
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
