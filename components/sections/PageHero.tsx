import { MeshGradient } from "@/components/ui/MeshGradient";
import { PromoBadge } from "@/components/ui/PromoBadge";

/** Compact gradient header for sub-pages, sharing the hero's skewed edge. */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section aria-labelledby="page-title" className="relative isolate overflow-hidden">
      <div className="hero-skew absolute inset-0 -z-10">
        <MeshGradient />
      </div>
      <div className="mx-auto w-full max-w-6xl px-5 pt-[calc(var(--top-h)+3.5rem)] pb-28 sm:px-8 lg:pb-36">
        <PromoBadge />
        <p className="mt-8 text-sm font-semibold tracking-wide text-ink uppercase">{eyebrow}</p>
        <h1
          id="page-title"
          className="mt-3 max-w-3xl text-4xl leading-[1.05] font-extrabold tracking-[-0.03em] text-balance text-ink sm:text-6xl"
        >
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink sm:text-xl">{lead}</p>
      </div>
    </section>
  );
}
