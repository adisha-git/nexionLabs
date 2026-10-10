"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

/**
 * Subtle fade-up on scroll, powered by Motion's `animate` + `inView`.
 * Motion is imported lazily after hydration so it never delays first paint.
 * The initial hidden state lives in CSS ([data-reveal] in globals.css), which
 * is skipped for reduced-motion users and overridden when JS is unavailable.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.reveal === "done") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let stop: VoidFunction | undefined;
    let cancelled = false;
    const show = () => el.setAttribute("data-reveal", "done");

    import("motion")
      .then(({ animate, inView }) => {
        if (cancelled) return;
        stop = inView(
          el,
          () => {
            stop?.();
            animate(
              el,
              { opacity: [0, 1], y: [24, 0] },
              { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
            ).then(show);
          },
          { margin: "0px 0px -60px 0px" },
        );
      })
      .catch(show); // Never leave content hidden if the chunk fails to load.

    return () => {
      cancelled = true;
      stop?.();
    };
  }, [delay]);

  return (
    <Tag ref={ref as React.Ref<never>} data-reveal="" className={className}>
      {children}
    </Tag>
  );
}
