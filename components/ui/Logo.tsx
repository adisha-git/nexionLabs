import Link from "next/link";
import { cn } from "@/lib/cn";

/** Wordmark: "NexIon Labs", signed off with a small kangaroo for our Australian roots. */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex shrink-0 items-center gap-2 text-xl font-extrabold tracking-tight whitespace-nowrap",
        tone === "dark" ? "text-ink" : "text-white",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-lg bg-[linear-gradient(135deg,#635bff,#a960ee_55%,#ff333d)] text-sm font-black text-white shadow-soft"
      >
        N
      </span>
      <span>
        NexIon<span className="font-semibold opacity-80"> Labs</span>
        <span className="sr-only"> home</span>
      </span>
      <Kangaroo tone={tone} />
    </Link>
  );
}

/**
 * Hopping kangaroo in a brand gradient; hops a little when the logo is hovered.
 * The dark tone uses deeper stops so it stays visible over the hero mesh.
 */
const rooStops = {
  dark: ["#e0245e", "#a03ce0", "#4b44e6"],
  light: ["#ffcb57", "#ff333d", "#a960ee"],
};

function Kangaroo({ tone }: { tone: "dark" | "light" }) {
  const gradientId = `logo-roo-${tone}`;
  const [from, via, to] = rooStops[tone];
  return (
    <svg
      aria-hidden="true"
      viewBox="3 1 57 44"
      className="-ml-0.5 h-[1.15rem] w-auto -translate-y-0.5 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:-rotate-6"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor={from} />
          <stop offset="0.45" stopColor={via} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M4 41.5C12 38 20 34 25.5 30 25 22 31 15 40 14c3-1 5-3 6-6l-1-6 3 4.5L49.5 1.5 50.5 7c2.5 1 5.5 2.5 7.5 4 .6 1.4-.8 2.4-3 2.3-2.5 0-4 1.7-4.5 4.2-.2 2 1 3.8 3 5.3l1 2.2c-2 0-4.5-.8-6.5-1.4-.5 4.4-1.5 8.4-4 11.4-1.4 1.6-1.6 3.3 0 4.4l8 2.4c1.4.5 1.2 2.2-.4 2.2H36c-3.5 0-5.5-2-6-4.7-4-.7-14 2.2-26 3.3Z"
      />
    </svg>
  );
}
