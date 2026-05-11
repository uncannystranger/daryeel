"use client";

import { useCallback } from "react";
import { useReducedMotion } from "./use-reduced-motion";

export function useSmoothScroll() {
  const reducedMotion = useReducedMotion();

  return useCallback(
    (href: string) => {
      const targetId = href.startsWith("#") ? href.slice(1) : href;
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start"
      });

      window.history.replaceState(null, "", `#${targetId}`);
    },
    [reducedMotion]
  );
}
