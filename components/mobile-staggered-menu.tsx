"use client";

import type { navItems } from "@/data/site-content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { Leaf, Sprout } from "lucide-react";
import { useEffect } from "react";

type MobileStaggeredMenuProps = {
  activeSection: string;
  items: typeof navItems;
  onClose: () => void;
  onNavigate: (href: string) => void;
  open: boolean;
};

export function MobileStaggeredMenu({ activeSection, items, onClose, onNavigate, open }: MobileStaggeredMenuProps) {
  const reducedMotion = useReducedMotion();
  useScrollLock(open);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, open]);

  function handleNavigate(href: string) {
    onNavigate(href);
    onClose();
  }

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 overflow-hidden lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-forest-950/35 backdrop-blur-sm transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {[0, 1].map((layer) => (
        <span
          key={layer}
          aria-hidden="true"
          className={`absolute inset-y-0 right-0 w-full transition-transform duration-300 ease-out ${
            layer === 0 ? "bg-sunset" : "bg-forest-500"
          } ${open ? "translate-x-0" : "translate-x-full"} ${reducedMotion ? "!duration-0" : ""}`}
          style={{ transitionDelay: open && !reducedMotion ? `${layer * 36}ms` : "0ms" }}
        />
      ))}

      <aside
        className={`absolute inset-y-0 right-0 flex w-full flex-col overflow-y-auto bg-cream px-6 pb-8 pt-32 text-forest-950 shadow-glass transition-transform duration-300 ease-out dark:bg-forest-950 dark:text-cream sm:max-w-[28rem] ${
          open ? "translate-x-0" : "translate-x-full"
        } ${open && !reducedMotion ? "will-change-transform" : ""} ${reducedMotion ? "!duration-0" : ""}`}
        style={{ transitionDelay: open && !reducedMotion ? "72ms" : "0ms" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(232,137,34,0.18),transparent_15rem),radial-gradient(circle_at_82%_12%,rgba(123,148,65,0.18),transparent_18rem)]" />
        <div className="relative z-10 flex flex-1 flex-col">
          <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--accent)]">
            <Leaf size={14} />
            Daryeel navigation
          </p>

          <ul className="mt-10 grid gap-2" role="list">
            {items.map((item, index) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li
                  key={item.href}
                  className={`overflow-hidden transition duration-300 ease-out ${
                    open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  } ${reducedMotion ? "!translate-y-0 !duration-0" : ""}`}
                  style={{ transitionDelay: open && !reducedMotion ? `${108 + index * 28}ms` : "0ms" }}
                >
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavigate(item.href);
                    }}
                    className={`group flex min-h-16 items-center justify-between rounded-[1.5rem] border px-5 text-2xl font-black transition active:scale-[0.98] ${
                      isActive
                        ? "border-[color:var(--accent)] bg-forest-700 text-white dark:bg-white dark:text-forest-950"
                        : "border-forest-700/12 bg-white/55 text-forest-950 hover:border-forest-700/25 hover:bg-white/80 dark:border-white/14 dark:bg-white/10 dark:text-cream/90 dark:hover:bg-white/14"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-sm font-black text-[color:var(--accent)]">0{index + 1}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            className={`mt-auto pt-10 transition duration-300 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } ${reducedMotion ? "!translate-y-0 !duration-0" : ""}`}
            style={{ transitionDelay: open && !reducedMotion ? "320ms" : "0ms" }}
          >
            <a
              href="#donate"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate("#donate");
              }}
              className="magnetic inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-forest-700 px-6 text-sm font-semibold text-white shadow-soft outline-none transition hover:bg-forest-800 focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 focus-visible:ring-offset-cream dark:bg-[color:var(--accent)] dark:text-[color:var(--accent-contrast)] dark:hover:bg-sunset dark:focus-visible:ring-offset-forest-950"
            >
              <span>Join the Movement</span>
              <Leaf aria-hidden="true" size={17} />
            </a>
            <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
              <Sprout size={14} />
              Climate action for Mogadishu
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
