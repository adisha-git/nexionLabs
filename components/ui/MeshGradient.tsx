"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Stripe-style animated mesh gradient, implemented with composited CSS
 * transforms (no canvas, no WebGL, ~0 main-thread cost). The animation is
 * paused while off-screen; with prefers-reduced-motion it renders statically.
 */
export function MeshGradient({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => el.setAttribute("data-paused", String(!entry.isIntersecting)),
      { rootMargin: "100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className={cn("mesh", className)}>
      <div className="mesh__blob mesh__blob--1" />
      <div className="mesh__blob mesh__blob--2" />
      <div className="mesh__blob mesh__blob--3" />
      <div className="mesh__blob mesh__blob--4" />
      <div className="mesh__blob mesh__blob--5" />
    </div>
  );
}
