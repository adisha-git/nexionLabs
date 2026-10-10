import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";
import { cn } from "@/lib/cn";

export const metadata: Metadata = pageMetadata({
  title: "Web Development, Apps & CRM Services in Brisbane",
  description:
    "Website development, website revamps, mobile app development, CRM solutions and growth marketing for Brisbane, Gold Coast and Australian businesses. Built by senior developers.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Web development and digital services for Australian businesses"
        lead="Fast websites, modern revamps, mobile apps and CRM solutions, all delivered by senior developers with 10+ years of commercial experience."
      />
      <Container className="py-20 sm:py-28">
        <ul className="space-y-8">
          {services.map(({ slug, title, description, highlights, icon: Icon, featured }) => (
            <li
              key={slug}
              id={slug}
              className={cn(
                "grid scroll-mt-28 gap-8 rounded-3xl p-8 sm:p-10 lg:grid-cols-[1.3fr_1fr]",
                featured
                  ? "bg-ink text-white shadow-lift"
                  : "bg-white shadow-soft ring-1 ring-ink/5",
              )}
            >
              <div>
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-xl",
                    featured ? "bg-white/15" : "bg-[#efeeff] text-brand-dark",
                  )}
                >
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h2
                  className={cn(
                    "mt-5 text-2xl font-bold sm:text-3xl",
                    featured ? "text-white" : "text-ink",
                  )}
                >
                  {title}
                </h2>
                <p
                  className={cn(
                    "mt-4 text-lg leading-relaxed",
                    featured ? "text-white/80" : "text-ink-soft",
                  )}
                >
                  {description}
                </p>
                <ButtonLink
                  href="/contact"
                  variant={featured ? "light" : "primary"}
                  className="mt-7"
                >
                  Discuss your project
                </ButtonLink>
              </div>
              <ul className={cn("space-y-3 self-center", featured ? "text-white/90" : "text-ink")}>
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <Check
                      aria-hidden="true"
                      className={cn(
                        "mt-0.5 size-5 shrink-0",
                        featured ? "text-sky" : "text-brand-dark",
                      )}
                      strokeWidth={3}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
      <Process />
      <CtaBand />
    </>
  );
}
