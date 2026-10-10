import { Check, Sparkles } from "lucide-react";
import { pricing, pricingNotes, currency } from "@/content/pricing";
import { site, ctas } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-AU", { style: "currency", currency, maximumFractionDigits: 0 }).format(
    value,
  );

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32"
    >
      <div aria-hidden="true" className="wash wash--glow" />
      <Container>
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing"
          align="center"
          title="Simple, honest pricing"
          lead="Affordable websites for Australian businesses. No hidden costs, no subscriptions, and nothing to pay until your site is finished."
        />

        {site.promo.active && (
          <Reveal className="mx-auto mt-10 max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl p-[2px] shadow-lift [background:linear-gradient(110deg,#ffcb57,#ff333d,#a960ee,#635bff,#90e0ff)]">
              <div className="flex flex-col items-center gap-3 rounded-[14px] bg-ink px-6 py-5 text-center sm:flex-row sm:text-left">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-amber">
                  <Sparkles aria-hidden="true" className="size-5" />
                </span>
                <p className="flex-1 text-white">
                  <strong className="block text-lg font-bold sm:text-xl">{site.promo.label}</strong>
                  <span className="text-white/75">
                    Limited launch offer. Claim it at your free consultation.
                  </span>
                </p>
                <ButtonLink href={ctas.primary.href} variant="light" className="shrink-0">
                  Claim offer
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        )}

        <ul className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {pricing.map((pkg, i) => (
            <Reveal
              as="li"
              key={pkg.id}
              delay={i * 0.08}
              className={cn(
                "relative flex flex-col rounded-2xl p-8",
                pkg.featured
                  ? "bg-white shadow-lift ring-2 ring-brand"
                  : "bg-white/70 shadow-soft ring-1 ring-ink/10 backdrop-blur",
              )}
            >
              {pkg.featured && (
                <span className="absolute -top-3.5 left-8 rounded-full bg-brand-dark px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-ink">
                <span className="block text-sm font-medium text-ink-muted">Package {i + 1}</span>
                {pkg.name}
              </h3>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tight text-ink">
                  {formatPrice(pkg.price)}
                </span>
                <span className="text-sm font-medium text-ink-muted">
                  {currency} {pkg.unit}
                </span>
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">{pkg.description}</p>
              <ul className="mt-6 space-y-3 text-[0.9375rem] text-ink">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-brand-dark"
                      strokeWidth={3}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <ButtonLink
                  href="/contact"
                  variant={pkg.featured ? "primary" : "secondary"}
                  className="w-full"
                >
                  {pkg.cta}
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </ul>

        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-ink-soft">
          {pricingNotes.map((note) => (
            <li key={note} className="inline-flex items-center gap-1.5">
              <Check aria-hidden="true" className="size-4 text-brand-dark" strokeWidth={3} />
              {note}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-ink-muted">
          Need an app, CRM or growth marketing? These are quoted individually after your free
          consultation.
        </p>
      </Container>
    </section>
  );
}
