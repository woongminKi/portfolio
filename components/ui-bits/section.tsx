"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

export function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // No-op when user prefers reduced motion (also guards jsdom where matchMedia is absent)
    if (typeof window.matchMedia !== "function" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className="fade-in-section mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-20">
      <div className="mb-8 flex items-baseline gap-3">
        <span className="font-mono text-sm text-[var(--color-accent)]">{number}</span>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}
