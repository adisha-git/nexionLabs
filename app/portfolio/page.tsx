import type { Metadata } from "next";
import { portfolio } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Concept website projects for cafés, law firms, fitness studios, real estate agencies, dental clinics and e-commerce boutiques, built by NexIon Labs.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Websites built to perform"
        lead="Concept projects showing how we approach different industries, from a neighbourhood café to an online boutique. Select a project for the full brief."
      />
      <Container className="py-20 sm:py-28">
        <PortfolioGrid projects={portfolio} cardHeading="h2" />
      </Container>
      <CtaBand />
    </>
  );
}
