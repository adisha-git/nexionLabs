/**
 * Central site configuration.
 *
 * Every business detail marked PLACEHOLDER must be replaced before launch.
 * SITE_URL can also be set via NEXT_PUBLIC_SITE_URL (e.g. per Vercel environment).
 */

// PLACEHOLDER: replace with your real production domain (no trailing slash).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nexionlabs.com.au"
).replace(/\/$/, "");

export const site = {
  name: "NexIon Labs",
  legalName: "NexIon Labs", // PLACEHOLDER: registered business / trading name
  tagline: "High-performance websites, built by senior developers",
  description:
    "NexIon Labs is an Australian web development studio. Senior developers with 10+ years of enterprise experience build fast, SEO-ready websites, apps and CRM solutions. Free consultation, pay only on completion.",
  // PLACEHOLDER: replace with your real ABN once registered.
  abn: "XX XXX XXX XXX",
  // PLACEHOLDER: replace with your real contact details.
  email: "hello@nexionlabs.com.au",
  phone: "+61 4XX XXX XXX",
  phoneHref: "tel:+614XXXXXXXX",
  location: {
    locality: "Brisbane",
    region: "QLD",
    country: "AU",
    // PLACEHOLDER: approximate service-area centre used for the map and LocalBusiness schema.
    latitude: -27.4698,
    longitude: 153.0251,
    // PLACEHOLDER: Google Maps embed URL. Swap "Brisbane+QLD" for your address if you have a public office.
    mapEmbedUrl: "https://www.google.com/maps?q=Brisbane+QLD+Australia&z=11&output=embed",
    mapLinkUrl: "https://www.google.com/maps/search/?api=1&query=Brisbane+QLD+Australia",
  },
  serviceAreas: ["Brisbane", "Gold Coast", "Queensland", "Australia"],
  coffeeCities: ["Brisbane", "the Gold Coast"],
  hours: "Mon–Fri, 9am–5pm AEST",
  // PLACEHOLDER: add real profile URLs (used in Organization schema `sameAs`). Leave empty to omit.
  socials: [] as { label: string; href: string }[],
  promo: {
    active: true,
    label: "50% off for our next 10 customers",
    short: "50% off",
  },
} as const;

export const ctas = {
  primary: { label: "Book a Free Consultation", href: "/contact" },
  work: { label: "View Our Work", href: "/#portfolio" },
} as const;
