"use client";

import { navItems } from "@/data/site-content";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const shouldDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(shouldDark);
    document.documentElement.classList.toggle("dark", shouldDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="section-shell glass-strong flex min-h-20 items-center justify-between rounded-full px-4 py-2 md:px-5">
        <Link href="#home" className="flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-sunset">
          <Image
            src="/images/daryeel-logo.png"
            alt="Daryeel Climate Organization"
            width={64}
            height={64}
            priority
            className="size-14 rounded-full object-contain shadow-sm"
          />
          <span className="hidden text-sm font-black leading-tight text-forest-900 dark:text-cream sm:block">
            Daryeel
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-forest-600 dark:text-forest-300">
              Climate Organization
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-forest-950/76 transition hover:bg-forest-700/8 hover:text-forest-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset dark:text-cream/78 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-11 place-items-center rounded-full border border-forest-700/15 bg-white/35 text-forest-800 shadow-insetSoft transition hover:bg-white/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset dark:border-white/15 dark:bg-white/8 dark:text-cream"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button href="#donate" className="hidden lg:inline-flex" icon="none">
            Join the Movement
          </Button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full bg-forest-700 text-white transition hover:bg-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`section-shell mt-3 overflow-hidden rounded-3xl border border-forest-700/12 bg-cream/92 shadow-soft backdrop-blur-2xl transition-all duration-300 dark:border-white/12 dark:bg-forest-950/92 lg:hidden ${
          open ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid gap-1 p-4">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-forest-950 transition hover:bg-forest-700/8 dark:text-cream dark:hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Button href="#donate" className="mt-2 w-full" icon="leaf">
            Join the Movement
          </Button>
        </div>
      </div>
    </header>
  );
}
