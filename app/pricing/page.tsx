import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = pageMetadata({
  title: "Affordable Website Pricing in Australia",
  description:
    "Single-page websites from AUD $250 and additional pages for $100 each. One-time payment, pay on completion, no monthly fees. 50% off for our next 10 customers.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Affordable websites. Pay only when it's done."
        lead="Transparent, one-time pricing in AUD. No deposits, no subscriptions and no lock-in contracts."
      />
      <Pricing />
      <Faq />
      <CtaBand />
    </>
  );
}
