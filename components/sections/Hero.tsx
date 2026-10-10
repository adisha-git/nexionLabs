import { Check } from "lucide-react";
import { ctas } from "@/lib/site";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { ButtonLink } from "@/components/ui/Button";
import { PromoBadge } from "@/components/ui/PromoBadge";
import { HeroMockup } from "./HeroMockup";

const assurances = ["No deposit", "No monthly fees", "Brisbane & Gold Coast"];

/**
 * Layout mirrors the reference: animated mesh gradient with an angled bottom
 * edge, a large left-aligned headline over the gradient, supporting copy and
 * CTAs below the angle, and layered product mockups bleeding off the right.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-x-clip bg-lilac">
      {/* Gradient band, clipped with Stripe's skewed bottom edge */}
      <div className="hero-skew absolute inset-x-0 top-0 -z-10 h-[78%] sm:h-[72%] lg:h-full">
        <MeshGradient />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-[calc(var(--top-h)+3rem)] pb-20 sm:px-8 lg:min-h-[820px] lg:pt-[calc(var(--top-h)+4.5rem)] lg:pb-24">
        <div className="relative max-w-xl lg:max-w-[33rem] xl:max-w-[39rem]">
          <PromoBadge />

          <h1
            id="hero-title"
            className="mt-7 text-[2.25rem] leading-[1.04] font-extrabold tracking-[-0.035em] text-balance text-ink min-[400px]:text-[2.5rem] sm:text-6xl lg:text-[3.6rem] xl:text-[4.25rem]"
          >
            High‑performance websites, built by senior developers
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink sm:text-xl lg:mt-16 lg:text-ink-soft">
            We&apos;re an Australia-based team of industry veterans crafting fast, SEO-ready
            websites that turn visitors into customers. Start with a free consultation, and pay only
            when your project is complete.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href={ctas.primary.href} size="lg">
              {ctas.primary.label}
            </ButtonLink>
            <ButtonLink href={ctas.work.href} variant="ghost" size="lg">
              {ctas.work.label}
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-ink-soft">
            {assurances.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check aria-hidden="true" className="size-4 text-brand-dark" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <HeroMockup />
    </section>
  );
}
