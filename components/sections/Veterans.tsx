import Image from "next/image";
import { veteranPoints } from "@/content/veterans";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Veterans() {
  return (
    <section
      id="veterans"
      aria-labelledby="veterans-title"
      className="relative bg-ink py-24 text-white sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden [background:radial-gradient(50%_60%_at_85%_10%,rgb(99_91_255/0.35),transparent_70%),radial-gradient(40%_50%_at_0%_100%,rgb(169_96_238/0.25),transparent_70%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading
              id="veterans-title"
              tone="dark"
              eyebrow="Built by industry veterans"
              title={
                <>
                  Senior engineers only.{" "}
                  <span className="text-sky">Every developer has 10+ years</span> of commercial
                  experience.
                </>
              }
              lead="The people building your website have spent their careers at large enterprise companies, shipping and maintaining platforms used at scale. You get that same engineering discipline, at a small-business price."
            />

            <div className="mt-10 flex items-end gap-4">
              <span className="bg-[linear-gradient(135deg,#90e0ff,#a960ee_60%,#ff8a8f)] bg-clip-text text-7xl leading-none font-extrabold tracking-tight text-transparent sm:text-8xl">
                10+
              </span>
              <span className="pb-2 text-lg leading-snug font-medium text-white/85">
                years of commercial
                <br />
                experience, per developer
              </span>
            </div>
          </div>

          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lift ring-1 ring-white/10">
              <Image
                src="/images/developers.jpg"
                alt="Two developers reviewing code on large monitors in a bright office"
                fill
                quality={70}
                sizes="(min-width: 1024px) 520px, (min-width: 640px) 90vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {veteranPoints.map(({ title, description, icon: Icon }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 0.06}
              className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10"
            >
              <Icon aria-hidden="true" className="size-6 text-sky" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/75">{description}</p>
            </Reveal>
          ))}
        </ul>

        {/* TODO: add real company logos with permission.
            Once you have written permission, render a logo strip here, e.g.
            <p className="mt-16 text-center text-sm text-white/70">Our developers have previously worked at</p>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-10 opacity-80">…</ul>
            Do not display employer logos without permission. */}
      </Container>
    </section>
  );
}
