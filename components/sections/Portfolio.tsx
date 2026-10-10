import { portfolio } from "@/content/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioGrid } from "./PortfolioGrid";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="relative isolate py-24 sm:py-32"
    >
      <div aria-hidden="true" className="wash wash--cool" />
      <Container>
        <SectionHeading
          id="portfolio-title"
          eyebrow="Our work"
          title="Websites built to perform for local businesses"
          lead="A selection of concept projects showing how we approach different industries. Select a project to see the brief, deliverables and tech stack."
        />
        <div className="mt-14">
          <PortfolioGrid projects={portfolio} />
        </div>
      </Container>
    </section>
  );
}
