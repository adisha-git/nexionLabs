"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Click-to-load Google Map. The heavy iframe (and its third-party scripts)
 * is only requested after the visitor asks for it, protecting performance.
 */
export function MapFacade({ title = "Map of our Brisbane service area" }: { title?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#e8eaf3] ring-1 ring-ink/10 sm:aspect-[16/10]">
      {loaded ? (
        <iframe
          src={site.location.mapEmbedUrl}
          title={title}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <>
          {/* Lightweight stylised map placeholder (pure CSS, no network). */}
          <div
            aria-hidden="true"
            className="absolute inset-0 [background-image:linear-gradient(rgb(17_20_57/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(17_20_57/0.06)_1px,transparent_1px)] [background-size:28px_28px] opacity-70"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-10 [background:radial-gradient(40%_30%_at_60%_40%,rgb(144_224_255/0.6),transparent),radial-gradient(30%_40%_at_30%_70%,rgb(169_96_238/0.25),transparent)]"
          />
          <div className="relative flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
            <span className="grid size-12 place-items-center rounded-full bg-white text-brand-dark shadow-soft">
              <MapPin aria-hidden="true" className="size-6" />
            </span>
            <p className="font-semibold text-ink">
              {site.location.locality}, {site.location.region} &amp; the Gold Coast
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setLoaded(true)}
                className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[#262a5c]"
              >
                Load interactive map
              </button>
              <a
                href={site.location.mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              >
                Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <p className="max-w-xs text-xs text-ink-muted">
              Loading the map connects to Google and may set cookies.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
