import { processSteps } from "@/content/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Full-bleed mesh band echoing the hero, angled top and bottom. A light veil
 * over the gradient keeps ink text comfortably above AA contrast.
 */
export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative isolate bg-white py-32 sm:py-40"
    >
      <div aria-hidden="true" className="skew-both absolute inset-0 -z-10">
        <MeshGradient />
        <div className="absolute inset-0 bg-white/30" />
      </div>
      <Container>
        <SectionHeading
          id="process-title"
          tone="vivid"
          eyebrow="How it works"
          align="center"
          title="From coffee to launch in four simple steps"
          lead="A clear, collaborative process with no surprises, and you only pay at the very end."
        />
        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute top-6 right-[12%] left-[12%] hidden h-0.5 bg-white/70 lg:block"
          />
          <ol className="relative grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 0.08}
                className="relative mt-6 rounded-2xl bg-white/85 px-6 pb-7 text-center shadow-lift ring-1 ring-white/60 backdrop-blur"
              >
                <span className="relative mx-auto -mt-6 grid size-12 place-items-center rounded-full bg-ink text-lg font-bold text-white shadow-lift ring-4 ring-white/70">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
