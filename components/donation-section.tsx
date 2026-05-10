"use client";

import { donationGoals } from "@/data/site-content";
import { CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { SectionHeader } from "./section-header";

const amounts = [25, 50, 100, 250];

export function DonationSection() {
  const [selected, setSelected] = useState(50);

  return (
    <section id="donate" className="relative overflow-hidden py-24 md:py-32">
      <div className="section-shell">
        <div className="glass-strong grid overflow-hidden rounded-[2.4rem] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative bg-forest-800 p-8 text-white md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,137,34,0.24),transparent_18rem)]" />
            <div className="relative z-10">
              <SectionHeader
                eyebrow="Take action"
                title="Support the next"
                accent="6-month pilot"
                description="The proposed pilot budget is $3,500, covering registration, seedlings and farm setup, training materials, operations, monitoring, and incentives."
                align="left"
              />
              <div className="mt-10 grid gap-4">
                {donationGoals.map((goal) => (
                  <ProgressBar key={goal.label} label={goal.label} value={goal.value} />
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-7 flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full bg-sunset/16 text-sunset">
                <HeartHandshake size={24} />
              </span>
              <div>
                <h3 className="text-2xl font-black text-forest-950 dark:text-cream">Choose your impact</h3>
              <p className="text-sm text-[color:var(--muted)]">Pilot support preview</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setSelected(amount)}
                  className={`rounded-2xl border px-4 py-4 text-lg font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset ${
                    selected === amount
                      ? "border-forest-700 bg-forest-700 text-white shadow-soft dark:border-forest-300 dark:bg-forest-300 dark:text-forest-950"
                      : "border-forest-700/12 bg-white/35 text-forest-800 hover:border-forest-700/30 dark:border-white/12 dark:bg-white/8 dark:text-cream"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="mt-7 rounded-[1.6rem] border border-forest-700/12 bg-forest-500/8 p-6 dark:border-white/12 dark:bg-white/8">
              <p className="text-sm font-semibold text-[color:var(--muted)]">Estimated outcome</p>
              <p className="mt-2 text-3xl font-black text-forest-950 dark:text-cream">
                {Math.max(3, Math.round(selected / 7))} seedling-care units funded
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                Supports seedling production, student monitoring, post-planting care, and training materials.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button type="button" icon="leaf">
                Donate ${selected}
              </Button>
              <Button href="#contact" variant="secondary">
                Become a Partner
              </Button>
            </div>

            <div className="mt-7 grid gap-3 text-sm font-semibold text-[color:var(--muted)] sm:grid-cols-2">
              <span className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-forest-600 dark:text-forest-300" />
                Transparent goals
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-forest-600 dark:text-forest-300" />
                Community-led reporting
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4 text-sm font-bold">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/12">
        <div className="h-full rounded-full bg-gradient-to-r from-sunset to-cream" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
