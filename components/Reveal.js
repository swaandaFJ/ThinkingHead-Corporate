"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Scroll-triggered fade-in for every element with class "fade-in".
// Content is visible by default; this component adds `reveal-ready` to <html> only once
// it is running, then reveals elements as they scroll into view. It re-scans after every
// page change because Next.js swaps pages without a full reload.
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const els = document.querySelectorAll(".fade-in");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Anything already on screen is shown straight away, so nothing flashes hidden
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add("is-visible");
      else observer.observe(el);
    });
    root.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
