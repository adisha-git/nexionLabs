import { ctas } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { MeshGradient } from "@/components/ui/MeshGradient";

/** Closing call-to-action band used at the bottom of sub-pages. */
export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="py-20 sm:py-24">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl px-6 py-14 text-center shadow-lift sm:px-12">
          <div className="absolute inset-0 -z-10">
            <MeshGradient />
          </div>
          <div className="absolute inset-0 -z-10 bg-white/40" aria-hidden="true" />
          <h2
            id="cta-title"
            className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl"
          >
            Ready for a website that works as hard as you do?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink">
            Free consultation. No deposit. Pay only when your project is complete.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href={ctas.primary.href} size="lg">
              {ctas.primary.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
