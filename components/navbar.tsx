"use client";

import { navItems } from "@/data/site-content";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useTheme } from "@/hooks/use-theme";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { Button } from "./button";
import { MobileStaggeredMenu } from "./mobile-staggered-menu";

const navSectionIds = navItems.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();
  const activeSection = useIntersectionObserver(navSectionIds);
  const smoothScroll = useSmoothScroll();

  const closeMenu = useCallback(() => setOpen(false), []);
  const handleMobileNavigate = useCallback(
    (href: string) => {
      smoothScroll(href);
    },
    [smoothScroll]
  );

  const mobileItems = useMemo(() => navItems, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="section-shell glass-strong relative z-50 flex min-h-20 items-center justify-between rounded-full px-4 py-2 md:px-5">
        <Link
          href="#home"
          className="flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-sunset"
        >
          <Image
            src="/images/daryeel-logo.webp"
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

      <MobileStaggeredMenu
        activeSection={activeSection}
        items={mobileItems}
        onClose={closeMenu}
        onNavigate={handleMobileNavigate}
        open={open}
      />
    </header>
  );
}
