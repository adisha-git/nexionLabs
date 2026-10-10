/**
 * SAMPLE WORK: these are fictional concept projects used to demonstrate the
 * portfolio layout. Replace them with real client projects (with permission)
 * before launch. Images live in /public/images/portfolio (see CREDITS.md).
 */

export type PortfolioProject = {
  slug: string;
  name: string;
  industry: string;
  location: string;
  summary: string;
  description: string;
  deliverables: string[];
  tech: string[];
  image: { src: string; alt: string };
};

export const portfolio: PortfolioProject[] = [
  {
    slug: "neighbourhood-cafe",
    name: "Neighbourhood Café",
    industry: "Café",
    location: "Brisbane, QLD",
    summary: "A warm, single-page site with an online menu, opening hours and a one-tap map.",
    description:
      "A concept site for a neighbourhood specialty coffee shop. The brief: help locals find the café, check today's hours and browse the menu in seconds on a phone. We designed a single, fast-loading page with a menu that updates from a simple content file and an embedded map.",
    deliverables: ["Single-page website", "Digital menu", "Google Map embed", "Local SEO setup"],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    image: {
      src: "/images/portfolio/cafe.jpg",
      alt: "Bright café interior with arched windows and a wall-mounted coffee menu",
    },
  },
  {
    slug: "boutique-law-firm",
    name: "Boutique Law Firm",
    industry: "Law firm",
    location: "Gold Coast, QLD",
    summary:
      "A credible, multi-page presence for a boutique firm, built around clear practice areas.",
    description:
      "A concept site for a boutique family and property law practice. We structured each practice area as its own SEO-focused page, added a confidential enquiry form that routes to the right solicitor, and kept the visual language calm and trustworthy.",
    deliverables: [
      "Multi-page website",
      "Practice area pages",
      "Secure enquiry form",
      "CRM integration",
    ],
    tech: ["Next.js", "TypeScript", "HubSpot CRM"],
    image: {
      src: "/images/portfolio/law-firm.jpg",
      alt: "Rows of leather-bound law books on a dark wooden shelf",
    },
  },
  {
    slug: "strength-studio",
    name: "Strength & Fitness Studio",
    industry: "Fitness studio",
    location: "Brisbane, QLD",
    summary: "An energetic site and companion app for class timetables and member bookings.",
    description:
      "A concept build for an independent strength and conditioning studio. The website showcases coaches and programs, while a cross-platform app lets members view the timetable and book classes, sharing one back end.",
    deliverables: ["Website", "iOS and Android app", "Class booking", "Social media campaigns"],
    tech: ["Next.js", "React Native", "Supabase"],
    image: {
      src: "/images/portfolio/fitness.jpg",
      alt: "Gym interior with free weights, benches and training equipment",
    },
  },
  {
    slug: "coastal-real-estate",
    name: "Coastal Real Estate Agency",
    industry: "Real estate",
    location: "Gold Coast, QLD",
    summary: "Fast, filterable property listings with enquiry tracking straight into the CRM.",
    description:
      "A concept site for a coastal real estate agency. Listings load instantly with optimised imagery, buyers can filter by suburb and price, and every enquiry lands in the agency's CRM with the property attached.",
    deliverables: ["Website revamp", "Property listings", "CRM pipeline", "Lead-generation ads"],
    tech: ["Next.js", "Sanity CMS", "Salesforce"],
    image: {
      src: "/images/portfolio/real-estate.jpg",
      alt: "Modern two-storey white home with large windows under a blue sky",
    },
  },
  {
    slug: "family-dental-clinic",
    name: "Family Dental Clinic",
    industry: "Dental clinic",
    location: "Brisbane, QLD",
    summary: "A reassuring, accessible clinic site that makes booking an appointment effortless.",
    description:
      "A concept revamp for a family dental clinic. We replaced a slow template with a lightweight, accessible site, clearly explained each treatment, and connected online booking so patients can choose a time without calling.",
    deliverables: [
      "Website revamp",
      "Treatment pages",
      "Online booking integration",
      "Accessibility audit",
    ],
    tech: ["Next.js", "Tailwind CSS", "Cliniko API"],
    image: {
      src: "/images/portfolio/dental.jpg",
      alt: "Clean, modern dental treatment room with a patient chair and equipment",
    },
  },
  {
    slug: "fashion-boutique",
    name: "Fashion Boutique Store",
    industry: "E-commerce boutique",
    location: "Gold Coast, QLD",
    summary: "A refined online store for a fashion boutique, tuned for speed on mobile.",
    description:
      "A concept online store for an independent fashion boutique. Product pages are statically generated for instant loads, checkout is handled by a trusted commerce platform, and abandoned-cart emails run through the CRM.",
    deliverables: [
      "E-commerce website",
      "Product catalogue",
      "Checkout integration",
      "Email marketing",
    ],
    tech: ["Next.js", "Shopify Storefront API", "Klaviyo"],
    image: {
      src: "/images/portfolio/boutique.jpg",
      alt: "Boutique clothing store with garments hanging on wooden racks",
    },
  },
];
