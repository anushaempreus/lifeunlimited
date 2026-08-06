"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll-reveal fallback for browsers WITHOUT CSS scroll-driven animations
 * (Firefox, older Safari). Chromium-based browsers use the pure-CSS
 * `animation-timeline: view()` rules in globals.css and this component
 * does nothing there.
 *
 * Hydration-safe by construction: it only sets a `data-fx-in` attribute,
 * which React neither renders nor reconciles — className and style are
 * never touched (mutating those caused hydration mismatches previously).
 */
export default function ScrollFx() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof CSS !== "undefined" &&
      CSS.supports("animation-timeline: view()")
    ) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    document.documentElement.classList.add("fx-fallback");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-fx-in", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    const scan = () => {
      const candidates = document.querySelectorAll(
        "main section:not([data-no-reveal]), main .card, main blockquote"
      );
      candidates.forEach((el) => {
        if (el.hasAttribute("data-fx-in")) return;
        // Hero and other self-animating areas reveal immediately
        if (el.closest("[data-no-reveal]")) {
          el.setAttribute("data-fx-in", "");
          return;
        }
        if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
          el.setAttribute("data-fx-in", "");
        } else {
          observer.observe(el);
        }
      });
    };

    // Let streamed content settle before the first scan; re-scan on load
    // in case slow assets shift layout.
    const t = window.setTimeout(scan, 120);
    window.addEventListener("load", scan);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", scan);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
