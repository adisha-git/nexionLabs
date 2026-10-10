import { BadgePercent, MessageSquareHeart, ShieldCheck, Sparkles } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { site, ctas } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Shows real client testimonials from content/testimonials.ts. Until the first
 * one is added, an honest "founding clients" invitation takes its place.
 */
export function Testimonials() {
  if (testimonials.length === 0) return <FoundingClients />;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="testimonials-title"
          eyebrow="Testimonials"
          title="What our clients say"
          align="center"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="h-full rounded-2xl bg-white p-7 shadow-soft ring-1 ring-ink/5">
                <blockquote className="leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-ink">{t.name}</span>
                  <span className="text-ink-muted">
                    , {t.role}
                    {t.company ? `, ${t.company}` : ""}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const foundingPerks = [
  ...(site.promo.active
    ? [
        {
          icon: BadgePercent,
          title: "Founding client pricing",
          text: `${site.promo.label}. Claim it at your free consultation.`,
        },
      ]
    : []),
  {
    icon: Sparkles,
    title: "Senior developers, start to finish",
    text: "Every line of your site is written by an engineer with 10+ years of experience.",
  },
  {
    icon: ShieldCheck,
    title: "Pay only on completion",
    text: "No deposit and no risk. You pay once your website is finished and you are happy.",
  },
];

function FoundingClients() {
  return (
    <section
      id="founding-clients"
      aria-labelledby="founding-title"
      className="bg-white pt-24 sm:pt-32"
    >
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-3xl bg-ink px-6 py-14 text-white shadow-lift sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 [background:radial-gradient(45%_60%_at_100%_0%,rgb(99_91_255/0.45),transparent_70%),radial-gradient(40%_55%_at_0%_100%,rgb(255_51_61/0.25),transparent_70%),radial-gradient(30%_40%_at_15%_10%,rgb(255_203_87/0.18),transparent_70%)]"
          />
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                id="founding-title"
                tone="dark"
                eyebrow="Founding clients"
                title="Your review could be the first one here"
                lead="We are a new studio, so instead of borrowed praise, here is an honest offer. Work with us as one of our founding clients and get senior-level work on launch terms."
              />
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <ButtonLink href={ctas.primary.href} variant="light" size="lg">
                  {ctas.primary.label}
                </ButtonLink>
                <p className="inline-flex items-center gap-2 text-sm text-white/75">
                  <MessageSquareHeart aria-hidden="true" className="size-4 text-amber" />
                  Love the result? We would be grateful for a review.
                </p>
              </div>
            </div>

            <ul className="grid gap-4">
              {foundingPerks.map(({ icon: Icon, title, text }, i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={i * 0.08}
                  className="flex gap-4 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10 sm:p-6"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,#635bff,#a960ee_55%,#ff333d)] text-white shadow-soft">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 leading-relaxed text-white/75">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
