import { heroMetrics } from "@/data/site-content";
import { ArrowDown, CheckCircle2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { StatCard } from "./stat-card";

export function Hero() {
  return (
    <section id="home" className="eco-gradient relative min-h-screen overflow-hidden pt-32 md:pt-36">
      <FloatingLeaves />
      <div className="section-shell grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-8">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-balance text-[clamp(3rem,8vw,7.8rem)] font-black leading-[0.94] text-forest-950 dark:text-cream">
            A Greener Today, A Better <span className="text-forest-600 dark:text-forest-300">Tomorrow.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[color:var(--muted)] md:text-xl">
            A youth-led climate initiative in Mogadishu improving tree survival, practical climate education, and community resilience.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#donate" icon="leaf">
              Get Involved
            </Button>
            <Button href="#about" variant="secondary">
              Learn More
            </Button>
          </div>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex -space-x-3">
              {["A", "M", "S", "I"].map((letter, index) => (
                <span
                  key={letter}
                  className="grid size-11 place-items-center rounded-full border-2 border-cream bg-gradient-to-br from-forest-700 to-sunset text-sm font-black text-white shadow-md dark:border-forest-950"
                  style={{ transform: `translateY(${index % 2 ? 5 : 0}px)` }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <p className="max-w-xs text-sm leading-6 text-forest-950/72 dark:text-cream/76">
              Help students, schools, universities, and academies turn tree planting into long-term survival.
            </p>
          </div>
        </div>

        <div className="relative min-h-[34rem] lg:min-h-[46rem]">
          <div className="absolute left-2 top-1/2 z-20 hidden h-[34rem] w-16 -translate-y-1/2 rounded-full border-l border-sunset/45 border-r border-forest-600/35 lg:block" />
          <div className="organic-mask absolute inset-x-0 top-5 mx-auto h-[32rem] max-w-[42rem] overflow-hidden shadow-glass lg:right-0 lg:mx-0 lg:h-[43rem] lg:max-w-[52rem]">
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=88"
              alt="Hands holding a young tree seedling in healthy soil"
              fill
              priority
              sizes="(max-width: 1024px) 95vw, 52vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cream/18 via-transparent to-forest-950/18 dark:from-forest-950/20" />
          </div>

          <div className="glass absolute right-2 top-7 z-30 max-w-[18rem] rounded-[1.75rem] p-4 text-forest-950 dark:text-cream sm:right-12">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-sunset/18 text-sunset">
                <ShieldCheck size={21} />
              </span>
              <div>
                <p className="text-sm font-black">6-month pilot model</p>
                <p className="text-xs text-[color:var(--muted)]">Student care, weekly check-ins, and survival reporting.</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 left-0 right-0 z-30 mx-auto grid max-w-[46rem] grid-cols-1 gap-2.5 rounded-[1.6rem] border border-white/18 bg-forest-700/88 p-3 shadow-glass backdrop-blur-2xl sm:grid-cols-2 lg:right-4 lg:left-auto lg:mx-0 xl:grid-cols-4">
            {heroMetrics.map((metric) => (
              <StatCard key={metric.label} metric={metric} />
            ))}
          </div>

          <div className="absolute bottom-0 left-6 z-20 hidden items-center gap-3 rounded-full bg-white/70 px-4 py-3 text-sm font-bold text-forest-800 shadow-soft backdrop-blur dark:bg-white/10 dark:text-cream md:flex">
            <CheckCircle2 size={18} className="text-sunset" />
            SDG 13 + SDG 4 aligned
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 rounded-full border border-forest-700/15 bg-white/35 p-3 text-forest-700 shadow-insetSoft backdrop-blur transition hover:-translate-x-1/2 hover:translate-y-1 dark:border-white/15 dark:bg-white/10 dark:text-cream md:block"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}

function FloatingLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={index}
          className="leaf-shape absolute size-4 animate-drift bg-gradient-to-br from-forest-500 to-olive opacity-50 blur-[0.2px]"
          style={{
            top: `${12 + ((index * 13) % 72)}%`,
            animationDelay: `${index * -1.6}s`,
            animationDuration: `${15 + (index % 5) * 3}s`
          }}
        />
      ))}
      <span className="absolute right-[8%] top-[18%] size-48 animate-pulseSoft rounded-full bg-sunset/10 blur-3xl" />
      <span className="absolute left-[42%] top-[12%] size-72 rounded-full bg-forest-500/10 blur-3xl" />
    </div>
  );
}
