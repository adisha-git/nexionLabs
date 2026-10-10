export type PricingPackage = {
  id: string;
  name: string;
  price: number;
  /** Shown after the price, e.g. "one-time" or "per extra page". */
  unit: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

/** All prices are in AUD. */
export const currency = "AUD";

export const pricing: PricingPackage[] = [
  {
    id: "single-page",
    name: "Single Page Website",
    price: 250,
    unit: "one-time",
    featured: true,
    description:
      "An awesome single-page website with everything a small business needs to look professional and win enquiries.",
    features: [
      "Hero, about and services sections",
      "Gallery or features section",
      "Testimonials-ready section",
      "FAQ section and footer",
      "Contact form delivered to your inbox",
      "Embedded Google Map location",
      "Responsive design for every screen size",
      "Basic SEO setup (titles, meta, sitemap)",
    ],
    cta: "Start my website",
  },
  {
    id: "additional-pages",
    name: "Additional Pages",
    price: 100,
    unit: "per extra page",
    description:
      "Growing beyond one page? Add dedicated pages for services, locations, team or anything else your business needs.",
    features: [
      "Add-on for multi-page websites",
      "Designed to match your site",
      "Responsive and SEO-ready",
      "Linked into your navigation",
      "CMS of your choice, so you can edit content yourself",
    ],
    cta: "Plan a multi-page site",
  },
];

export const pricingNotes = [
  "One-time payment",
  "Pay on completion",
  "No monthly fees",
  "All prices in AUD",
];
