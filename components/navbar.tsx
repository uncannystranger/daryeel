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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const hasManualTheme = stored === "dark" || stored === "light";
    const shouldDark = hasManualTheme ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(shouldDark);
    document.documentElement.classList.toggle("dark", shouldDark);
    document.documentElement.dataset.theme = shouldDark ? "dark" : "light";
    document.documentElement.style.colorScheme = shouldDark ? "dark" : "light";
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    let frame = 0;

    const updateActiveSection = () => {
      const pageBottom = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= pageBottom - 24) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      const checkpoint = window.scrollY + window.innerHeight * 0.32;
      let current = "home";

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= checkpoint) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateActiveSection();
      });
    };

    const updateFromHash = () => {
      const hashId = window.location.hash.replace("#", "");
      if (sectionIds.includes(hashId)) {
        setActiveSection(hashId);
        return;
      }

      updateActiveSection();
    };

    updateFromHash();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    document.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      document.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="section-shell glass-strong flex min-h-20 items-center justify-between rounded-full px-4 py-2 md:px-5">
        <Link
          href="#home"
          onClick={() => setActiveSection("home")}
          className="flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-sunset"
        >
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
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                href={item.href}
                key={item.href}
                onClick={() => setActiveSection(sectionId)}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset ${
                  isActive
                    ? "text-forest-700 dark:text-[color:var(--accent)]"
                    : "text-forest-950/76 hover:bg-forest-700/8 hover:text-forest-700 dark:text-cream/78 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 -bottom-1 h-0.5 origin-center rounded-full bg-[color:var(--nav-line)] shadow-[0_0_16px_rgba(255,180,90,0.45)] transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
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
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                href={item.href}
                key={item.href}
                onClick={() => {
                  setActiveSection(sectionId);
                  setOpen(false);
                }}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-2xl px-4 py-3 text-base font-semibold transition ${
                  isActive
                    ? "bg-forest-700/10 text-forest-700 dark:bg-white/10 dark:text-[color:var(--accent)]"
                    : "text-forest-950 hover:bg-forest-700/8 dark:text-cream dark:hover:bg-white/10"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-2 left-4 h-0.5 w-10 rounded-full bg-[color:var(--nav-line)] transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
          <Button href="#donate" className="mt-2 w-full" icon="leaf">
            Join the Movement
          </Button>
        </div>
      </div>
    </header>
  );
}
