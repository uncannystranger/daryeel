import { aboutCards } from "@/data/site-content";
import { Button } from "./button";
import { SectionHeader } from "./section-header";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[color:var(--background)] py-24 md:py-32">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal">
          <SectionHeader
            eyebrow="Who we are"
            title="Youth-led climate action,"
            accent="built for survival"
            description="Daryeel was established to address critically low tree survival in Mogadishu, where many planting efforts fail because of water access, livestock damage, and limited post-planting care."
            align="left"
          />
          <div className="mt-8">
            <Button href="#projects" icon="leaf">
              More About Us
            </Button>
          </div>
        </div>

        <div className="glass-strong reveal grid gap-4 rounded-[2rem] p-4 md:grid-cols-3 md:p-6">
          {aboutCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="group rounded-[1.5rem] p-6 transition hover:bg-forest-700/6 dark:hover:bg-white/8 md:min-h-[18rem]"
              >
                <div className="mb-8 grid size-16 place-items-center rounded-full bg-forest-500/12 text-forest-700 transition group-hover:scale-105 group-hover:bg-sunset/16 group-hover:text-sunset dark:bg-white/10 dark:text-forest-200">
                  <Icon size={29} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-forest-950 dark:text-cream">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
