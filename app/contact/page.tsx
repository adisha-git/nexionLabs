import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us: Book a Free Consultation",
  description:
    "Book a free web development consultation with NexIon Labs. Coffee meetings in Brisbane and the Gold Coast, or online anywhere in Australia.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about your project"
        lead="Your first consultation is free, with no obligation. Meet us for a coffee in Brisbane or on the Gold Coast, or online."
      />
      <Contact />
    </>
  );
}
