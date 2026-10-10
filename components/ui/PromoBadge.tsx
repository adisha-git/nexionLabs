import Link from "next/link";
import { Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Chevron } from "./Button";

/** "50% off" promo pill. Toggle via `site.promo.active`. */
export function PromoBadge({
  className,
  href = "/#pricing",
}: {
  className?: string;
  href?: string;
}) {
  if (!site.promo.active) return null;
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full bg-white/85 py-1.5 pr-3 pl-1.5 text-sm font-semibold text-ink shadow-soft ring-1 ring-white/60 backdrop-blur transition hover:bg-white",
        className,
      )}
    >
      <span className="inline-flex items-center gap-1 rounded-full bg-ink px-2.5 py-1 text-xs font-bold text-white">
        <Sparkles aria-hidden="true" className="size-3.5" />
        Offer
      </span>
      {site.promo.label}
      <Chevron />
    </Link>
  );
}
