import { SITE_URL, site } from "@/lib/site";
import { services } from "@/content/services";
import { pricing, currency } from "@/content/pricing";
import type { Faq } from "@/content/faq";

const orgId = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    email: site.email,
    telephone: site.phone,
    description: site.description,
    ...(site.socials.length ? { sameAs: site.socials.map((s) => s.href) } : {}),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    name: site.name,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    priceRange: "$$",
    currenciesAccepted: currency,
    parentOrganization: { "@id": orgId },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.locality,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.location.latitude,
      longitude: site.location.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Brisbane" },
      { "@type": "City", name: "Gold Coast" },
      { "@type": "State", name: "Queensland" },
      { "@type": "Country", name: "Australia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web development services",
      itemListElement: [
        ...services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.summary },
        })),
        ...pricing.map((p) => ({
          "@type": "Offer",
          name: p.name,
          price: p.price,
          priceCurrency: currency,
          description: p.description,
        })),
      ],
    },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
