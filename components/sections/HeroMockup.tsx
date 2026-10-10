import Image from "next/image";
import { Check, Coffee, Lock, Search, Video } from "lucide-react";

const steps = [
  { label: "Free consult", done: true },
  { label: "Plan & design", done: true },
  { label: "Build & review", done: true },
  { label: "Launch & pay", done: false },
];

const targets = ["Performance", "Accessibility", "Best practices", "SEO"];

/**
 * Decorative product mockups (aria-hidden): a project dashboard bleeding off
 * the right edge, with a phone booking card layered in front. Shown on large
 * screens only, so mobile visitors download nothing extra.
 */
export function HeroMockup() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-[calc(var(--top-h)+3.5rem)] left-[calc(50%+3rem)] hidden w-[54rem] select-none motion-safe:animate-[hero-in_0.9s_cubic-bezier(.22,1,.36,1)_both] lg:block xl:left-[calc(50%+4.5rem)]"
    >
      {/* Dashboard card */}
      <div className="ml-40 overflow-hidden rounded-xl bg-white/95 shadow-lift ring-1 ring-ink/5">
        <div className="flex items-center gap-4 bg-[linear-gradient(90deg,rgb(169_96_238/0.85),rgb(99_91_255/0.75))] px-5 py-3.5">
          <span className="flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-white uppercase">
            <span className="grid size-6 place-items-center rounded-full bg-white/25 text-[0.65rem]">
              N
            </span>
            Client project
          </span>
          <span className="flex flex-1 items-center gap-2 rounded-md bg-white/90 px-3 py-1.5 text-xs text-ink-muted">
            <Search className="size-3.5" />
            yourcafe.example
          </span>
        </div>

        <div className="grid grid-cols-[1fr_1.05fr] gap-6 py-6 pr-6 pl-[8.75rem]">
          <div>
            <p className="text-lg font-semibold text-ink">Launch checklist</p>
            <ol className="mt-4 space-y-3">
              {steps.map((step, i) => (
                <li key={step.label} className="flex items-center gap-3 text-sm">
                  <span
                    className={
                      step.done
                        ? "grid size-6 place-items-center rounded-full bg-[#e9e8ff] text-brand-dark"
                        : "grid size-6 place-items-center rounded-full border-2 border-dashed border-brand/50 text-[0.7rem] font-bold text-brand-dark"
                    }
                  >
                    {step.done ? <Check className="size-3.5" strokeWidth={3} /> : i + 1}
                  </span>
                  <span className={step.done ? "text-ink-soft" : "font-semibold text-ink"}>
                    {step.label}
                  </span>
                </li>
              ))}
            </ol>

            <p className="mt-7 text-xs font-semibold tracking-wide text-ink-muted uppercase">
              Build targets
            </p>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {targets.map((t) => (
                <div key={t} className="flex flex-col items-center gap-1.5 text-center">
                  <span className="grid size-11 place-items-center rounded-full border-[3px] border-[#22c55e] text-[0.7rem] font-bold text-[#15803d]">
                    95+
                  </span>
                  <span className="text-[0.6rem] leading-tight text-ink-muted">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg ring-1 ring-ink/10">
            <div className="flex items-center gap-1.5 border-b border-ink/5 bg-lilac px-3 py-2">
              <span className="size-2 rounded-full bg-[#ff5f57]" />
              <span className="size-2 rounded-full bg-[#febc2e]" />
              <span className="size-2 rounded-full bg-[#28c840]" />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/portfolio/cafe.jpg"
                alt=""
                fill
                preload
                quality={70}
                sizes="(min-width: 1024px) 340px, 1px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase opacity-80">
                  Specialty coffee
                </p>
                <p className="mt-1 text-lg leading-tight font-bold">Neighbourhood Café</p>
                <span className="mt-2 inline-block rounded-full bg-white px-3 py-1 text-[0.65rem] font-semibold text-ink">
                  View menu
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 border-t border-ink/5 py-5 pr-6 pl-[8.75rem]">
          {["Responsive", "SEO ready", "Accessible"].map((label) => (
            <div key={label}>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-ink">
                <Check className="size-3.5 text-[#15803d]" strokeWidth={3} />
                {label}
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-[linear-gradient(90deg,#635bff,#a960ee)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Phone booking card */}
      <div className="absolute top-14 left-0 w-[17.5rem] rounded-[2.25rem] bg-white p-3 shadow-lift ring-1 ring-ink/10">
        <div className="rounded-[1.75rem] border border-ink/5 px-5 pt-6 pb-5">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,#ffcb57,#ff333d_60%,#a960ee)] text-white shadow-soft">
            <Coffee className="size-7" />
          </div>
          <p className="mt-3 text-center text-sm font-bold text-ink">Free consultation</p>
          <p className="text-center text-xs text-ink-muted">Brisbane · Gold Coast · Online</p>

          <div className="mt-4 grid grid-cols-2 gap-1 rounded-lg bg-lilac p-1 text-xs font-semibold">
            <span className="flex items-center justify-center gap-1 rounded-md bg-white py-1.5 text-ink shadow-soft">
              <Coffee className="size-3.5" /> Coffee
            </span>
            <span className="flex items-center justify-center gap-1 py-1.5 text-ink-muted">
              <Video className="size-3.5" /> Video call
            </span>
          </div>

          {["Name", "Email", "Business"].map((field) => (
            <div key={field} className="mt-3">
              <p className="text-[0.7rem] font-medium text-ink-soft">{field}</p>
              <div className="mt-1 h-8 rounded-md border border-ink/10 bg-white shadow-[inset_0_1px_2px_rgb(17_20_57/0.04)]" />
            </div>
          ))}

          <div className="mt-3">
            <p className="text-[0.7rem] font-medium text-ink-soft">Project</p>
            <div className="mt-1 flex h-8 items-center rounded-md border border-ink/10 px-2.5 text-[0.7rem] text-ink-muted">
              Website development
            </div>
          </div>

          <div className="mt-5 flex h-9 items-center justify-center gap-1.5 rounded-md bg-ink text-xs font-semibold text-white">
            <Lock className="size-3" /> Book my free consult
          </div>
          <p className="mt-2.5 text-center text-[0.65rem] text-ink-muted">
            Pay only when your site is complete
          </p>
        </div>
      </div>
    </div>
  );
}
