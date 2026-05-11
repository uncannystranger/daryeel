import { impactItems } from "@/data/site-content";
import type { CSSProperties } from "react";
import { SectionHeader } from "./section-header";

export function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative isolate overflow-hidden bg-[#f5f8ef] py-24 text-forest-950 dark:bg-[#06130d] dark:text-cream md:py-32"
      style={
        {
          "--issues-line": "rgba(47, 107, 52, 0.16)",
          "--issues-card": "rgba(255, 255, 255, 0.52)",
          "--issues-card-strong": "rgba(255, 255, 255, 0.72)"
        } as CSSProperties
      }
    >
      <div className="absolute inset-x-0 top-0 h-16 rounded-b-[50%] bg-[color:var(--background)]" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(216,111,26,0.14),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(47,107,52,0.16),transparent_28rem),linear-gradient(180deg,rgba(255,255,255,0.5),transparent_34%)] dark:bg-[radial-gradient(circle_at_18%_12%,rgba(255,180,90,0.13),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(145,194,141,0.12),transparent_28rem),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-4 top-14 -z-10 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-forest-600/20 to-transparent dark:via-cream/14"
        aria-hidden="true"
      />
      <div className="absolute -left-28 top-32 -z-10 size-96 rounded-full bg-sunset/10 blur-3xl dark:bg-sunset/12" aria-hidden="true" />
      <div className="absolute right-0 top-20 hidden text-forest-500/20 dark:text-forest-300/12 lg:block" aria-hidden="true">
        <LeafPattern />
      </div>
      <div className="section-shell relative z-10 pt-12">
        <div className="relative mx-auto max-w-4xl">
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden -translate-x-1/2 -translate-y-1/3 opacity-100 sm:block"
            aria-hidden="true"
          >
            <TopLeafMark />
          </div>
          <div className="mx-auto mb-7 grid size-16 place-items-center rounded-full border border-forest-600/15 bg-white/55 text-forest-600 shadow-[0_18px_60px_rgba(33,85,46,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl dark:border-cream/10 dark:bg-white/[0.06] dark:text-[color:var(--accent)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] sm:hidden">
            <MobileLeafMark />
          </div>
          <SectionHeader
            eyebrow="What we do"
            title="Small Actions,"
            accent="Big Impact"
            description="The model combines learning institutions, home-based planting, demonstration farms, monitoring, and practical climate education into one measurable system."
          />
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-4">
          {impactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="reveal group relative overflow-hidden rounded-[1.75rem] border border-[color:var(--issues-line)] bg-[color:var(--issues-card)] p-6 shadow-[0_24px_80px_rgba(31,85,48,0.1),inset_0_1px_0_rgba(255,255,255,0.62)] backdrop-blur-xl transition hover:-translate-y-2 hover:border-[color:var(--accent)]/45 hover:bg-[color:var(--issues-card-strong)] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_24px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.1)] dark:hover:bg-white/[0.1] md:p-7"
              >
                <div
                  className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-80 dark:via-white/20"
                  aria-hidden="true"
                />
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div className="grid size-16 shrink-0 place-items-center rounded-full border border-forest-600/10 bg-white/50 text-forest-600 shadow-[0_14px_38px_rgba(31,85,48,0.12),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur transition group-hover:border-[color:var(--accent)]/30 group-hover:bg-[color:var(--accent)] group-hover:text-[color:var(--accent-contrast)] dark:border-white/10 dark:bg-white/10 dark:text-[color:var(--accent)] dark:shadow-none">
                    <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <span className="font-serif text-5xl leading-none text-forest-700/10 dark:text-cream/10">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-black text-forest-950 dark:text-cream">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-forest-950/68 dark:text-cream/72">{item.description}</p>
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

function TopLeafMark() {
  return (
    <svg width="260" height="170" viewBox="0 0 260 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
      <path
        d="M130 154C78 113 67 57 130 15C193 57 182 113 130 154Z"
        className="fill-white/50 stroke-forest-600/12 dark:fill-white/[0.045] dark:stroke-cream/10"
        strokeWidth="1"
      />
      <path d="M130 26V144" className="stroke-forest-600/20 dark:stroke-[color:var(--accent)]/30" strokeLinecap="round" strokeWidth="1.5" />
      <path
        d="M130 70C108 69 94 62 80 47M130 94C157 92 175 81 190 61M130 118C107 116 91 104 73 86"
        className="stroke-forest-600/14 dark:stroke-cream/12"
        strokeLinecap="round"
        strokeWidth="1.2"
      />
      <circle cx="130" cy="86" r="82" className="stroke-forest-600/8 dark:stroke-cream/8" strokeDasharray="2 10" />
    </svg>
  );
}

function MobileLeafMark() {
  return (
    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 28C5.5 21.8 4 10 13 2C22 10 20.5 21.8 13 28Z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13 6V25M13 16C9.8 15.8 7.6 14.6 5.4 12.3M13 19C16.6 18.6 19 16.9 21 14.2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.3" />
    </svg>
  );
}
