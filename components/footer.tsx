"use client";

import { footerLinks } from "@/data/site-content";
import { Facebook, Instagram, Linkedin, Mail, Send, Twitter } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";

export function Footer() {
  const [joined, setJoined] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setJoined(true);
  }

  return (
    <footer id="contact" className="relative overflow-hidden bg-forest-950 px-4 py-16 text-cream md:px-6 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(232,137,34,0.18),transparent_25rem),radial-gradient(circle_at_84%_0%,rgba(123,148,65,0.28),transparent_28rem)]" />
      <div className="section-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image src="/images/daryeel-logo.png" alt="Daryeel Climate Organization" width={84} height={84} className="size-20 rounded-full bg-white object-contain p-1" />
              <div>
                <h2 className="text-2xl font-black">Daryeel Climate Organization</h2>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-forest-200">A greener today, a better tomorrow</p>
              </div>
            </div>
            <p className="mt-8 max-w-2xl text-pretty text-3xl font-black leading-tight md:text-5xl">
              “Growing resilience. Empowering youth. Healing the land.”
            </p>
            <div className="mt-8 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  href="#contact"
                  key={index}
                  className="grid size-11 place-items-center rounded-full bg-white/10 text-cream transition hover:bg-sunset hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset"
                  aria-label="Social media link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-glass backdrop-blur-2xl md:p-8">
            <h3 className="text-2xl font-black">Stay connected</h3>
            <p className="mt-3 text-sm leading-7 text-cream/72">
              Receive roadmap updates, partnership opportunities, and practical climate education resources.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cream/52" size={18} />
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="h-[3.25rem] w-full rounded-full border border-white/12 bg-white/10 px-11 text-sm font-semibold text-white outline-none placeholder:text-cream/45 focus:border-sunset"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-sunset px-6 text-sm font-black text-white transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset"
              >
                <Send size={17} />
                Subscribe
              </button>
            </form>
            {joined ? <p className="mt-3 text-sm font-semibold text-forest-200">Thank you. You are on the update list.</p> : null}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="font-black">{group}</h3>
              <div className="mt-4 grid gap-3">
                {links.map((link) => (
                  <a key={link} href="#home" className="text-sm text-cream/68 transition hover:text-white">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-cream/58 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Daryeel Climate Organization. All rights reserved.</p>
          <p>Mogadishu, Somalia · info@daryeelclimate.org</p>
        </div>
      </div>
    </footer>
  );
}
