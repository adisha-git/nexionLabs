import Link from "next/link";
import { Check } from "lucide-react";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Chevron } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="Everything you need to win customers online"
          lead="From a sharp single-page site to apps, CRM and growth marketing, all built to the same senior standard by our Brisbane and Gold Coast team."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, title, summary, highlights, icon: Icon, featured }, i) => (
            <Reveal
              as="li"
              key={slug}
              delay={i * 0.05}
              className={cn(
                "group relative flex flex-col rounded-2xl p-7 transition-shadow",
                featured
                  ? "overflow-hidden bg-ink text-white shadow-lift md:col-span-2 lg:col-span-1 lg:row-span-2"
                  : "bg-white shadow-soft ring-1 ring-ink/5 hover:shadow-lift",
              )}
            >
              {featured && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-0 [background:radial-gradient(80%_60%_at_100%_0%,rgb(169_96_238/0.55),transparent_70%),radial-gradient(70%_50%_at_0%_100%,rgb(99_91_255/0.45),transparent_70%)]"
                />
              )}
              <div className="relative flex flex-1 flex-col">
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-xl",
                    featured ? "bg-white/15 text-white" : "bg-[#efeeff] text-brand-dark",
                  )}
                >
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                {featured && (
                  <span className="mt-5 w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                    Our specialty
                  </span>
                )}
                <h3
                  className={cn(
                    "mt-5 text-xl font-semibold",
                    featured ? "text-white lg:text-2xl" : "text-ink",
                  )}
                >
                  {title}
                </h3>
                <p
                  className={cn(
                    "mt-3 leading-relaxed",
                    featured ? "text-white/80" : "text-ink-soft",
                  )}
                >
                  {summary}
                </p>
                {featured && (
                  <ul className="mt-6 space-y-2.5 text-[0.9375rem] text-white/90">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-sky"
                          strokeWidth={3}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href={`/services#${slug}`}
                  className={cn(
                    "mt-auto inline-flex items-center gap-1 pt-6 text-[0.9375rem] font-semibold after:absolute after:inset-0",
                    featured ? "text-white" : "text-brand-dark",
                  )}
                >
                  Learn more<span className="sr-only"> about {title}</span>
                  <Chevron />
                </Link>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
