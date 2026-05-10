import { HandHeart, Quote, UsersRound } from "lucide-react";
import { Button } from "./button";
import { SectionHeader } from "./section-header";

export function CommunitySection() {
  return (
    <section id="community" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-x-0 top-24 -z-10 h-[34rem] bg-gradient-to-r from-forest-500/8 via-sunset/8 to-olive/10 blur-3xl" />
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal">
          <SectionHeader
            eyebrow="Community power"
            title="Students become"
            accent="climate stewards"
            description="The roadmap places students at the center of tree care, monitoring, farm visits, internships, and field-based climate learning."
            align="left"
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {[
              ["20-30", "active students selected for internships"],
              ["50-100", "students registered during launch"]
            ].map(([value, label]) => (
              <div key={label} className="glass rounded-[1.5rem] p-6">
                <p className="text-4xl font-black text-forest-700 dark:text-forest-300">{value}</p>
                <p className="mt-2 text-sm font-semibold text-[color:var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="#donate" icon="leaf">
              Join Movement
            </Button>
          </div>
        </div>

        <div className="grid gap-5">
          <article className="glass-strong reveal rounded-[2rem] p-7 md:p-9">
            <Quote className="mb-6 text-sunset" size={34} aria-hidden="true" />
            <p className="text-pretty text-2xl font-black leading-tight text-forest-950 dark:text-cream">
              “Daryeel turns tree planting into responsibility. Every student learns that climate action continues after the seedling is in the ground.”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-forest-700 to-sunset text-lg font-black text-white">
                F
              </span>
              <div>
                <p className="font-black text-forest-950 dark:text-cream">Daryeel Program Team</p>
                <p className="text-sm text-[color:var(--muted)]">Learning institutions climate model</p>
              </div>
            </div>
          </article>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="glass rounded-[2rem] p-7">
              <UsersRound className="mb-5 text-forest-700 dark:text-forest-300" size={31} />
              <h3 className="text-xl font-black text-forest-950 dark:text-cream">Internship Pathways</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">Active students gain field exposure, practical training, volunteer roles, and participation certificates.</p>
            </div>
            <div className="glass rounded-[2rem] p-7">
              <HandHeart className="mb-5 text-sunset" size={31} />
              <h3 className="text-xl font-black text-forest-950 dark:text-cream">Institution Partnerships</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">Schools, universities, and academies help mobilize students and sustain climate learning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
