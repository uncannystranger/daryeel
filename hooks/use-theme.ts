"use client";

import { useCallback, useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof document === "undefined") {
    return false;
  }

  return document.documentElement.classList.contains("dark");
}

function applyTheme(isDark: boolean) {
  const root = document.documentElement;
  root.classList.toggle("dark", isDark);
  root.dataset.theme = isDark ? "dark" : "light";
  root.style.colorScheme = isDark ? "dark" : "light";
}

export function useTheme() {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const hasManualTheme = stored === "dark" || stored === "light";
    const shouldDark = hasManualTheme ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;

    applyTheme(shouldDark);
    setDark(shouldDark);
  }, []);

  const toggleTheme = useCallback(() => {
    setDark((current) => {
      const next = !current;
      applyTheme(next);
      window.localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  return { dark, toggleTheme };
}
