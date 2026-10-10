import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center pt-[var(--top-h)] text-center">
      <p className="text-sm font-semibold tracking-wide text-brand-dark uppercase">404</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg text-ink-soft">
        Sorry, we couldn&apos;t find that page. It may have moved, or the link may be incorrect.
      </p>
      <ButtonLink href="/" className="mt-8" size="lg">
        Back to home
      </ButtonLink>
    </Container>
  );
}
