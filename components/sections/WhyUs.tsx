import Image from "next/image";
import { Coffee } from "lucide-react";
import { reasons } from "@/content/why-us";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-title"
      className="relative isolate bg-white py-24 sm:py-32"
    >
      <div aria-hidden="true" className="wash wash--warm" />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <div>
            <SectionHeading
              id="why-title"
              eyebrow="Why NexIon Labs"
              title={
                <>
                  Local, honest and <span className="text-gradient">zero risk</span>
                </>
              }
              lead="We have removed everything that makes hiring a web developer stressful. No deposits, no lock-in contracts, no surprise subscriptions."
            />
            <Reveal className="relative mt-10 overflow-hidden rounded-2xl shadow-lift">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/coffee-meeting.jpg"
                  alt="Three people raising cups of coffee together over a café table"
                  fill
                  quality={70}
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl bg-white/95 p-4 shadow-soft backdrop-blur">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-amber/40 text-ink">
                  <Coffee aria-hidden="true" className="size-5" />
                </span>
                <p className="text-sm leading-snug text-ink">
                  <strong className="font-semibold">Coffee is on us.</strong> Meet the team in
                  Brisbane or on the Gold Coast.
                </p>
              </div>
            </Reveal>
          </div>

          <ul className="grid content-start gap-x-8 gap-y-10 sm:grid-cols-2">
            {reasons.map(({ title, description, icon: Icon }, i) => (
              <Reveal as="li" key={title} delay={i * 0.05} className="border-t border-ink/10 pt-6">
                <Icon aria-hidden="true" className="size-6 text-brand-dark" />
                <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
