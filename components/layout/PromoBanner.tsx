"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { site, ctas } from "@/lib/site";
import { promoDismissKey } from "@/lib/promo";

/** Slim, dismissible offer bar above the header. Toggle via `site.promo.active`. */
export function PromoBanner() {
  if (!site.promo.active) return null;

  const dismiss = () => {
    document.documentElement.setAttribute("data-promo-dismissed", "");
    try {
      localStorage.setItem(promoDismissKey, "1");
    } catch {
      // Storage unavailable (private mode): hide for this visit only.
    }
  };

  return (
    <div className="promo-banner relative bg-[linear-gradient(90deg,#c81e5a,#8b35d6_50%,#4b44e6)] text-white">
      <div className="mx-auto flex h-[var(--banner-h)] w-full max-w-6xl items-center justify-center px-9 text-center text-[0.8125rem] font-medium sm:px-12 sm:text-sm">
        <p className="truncate">
          <span aria-hidden="true" className="max-sm:hidden">
            🎉{" "}
          </span>
          <span className="max-sm:hidden">Limited time offer: </span>
          {site.promo.label}!{" "}
          <Link
            href={ctas.primary.href}
            className="font-semibold underline decoration-white/60 underline-offset-4 hover:decoration-white"
          >
            <span className="max-sm:hidden">Get in touch today</span>
            <span className="sm:hidden">Book now</span>
          </Link>
        </p>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="absolute top-1/2 right-2 grid size-8 -translate-y-1/2 place-items-center rounded-full transition hover:bg-white/15 sm:right-4"
      >
        <span className="sr-only">Dismiss offer</span>
        <X aria-hidden="true" className="size-4" />
      </button>
    </div>
  );
}
