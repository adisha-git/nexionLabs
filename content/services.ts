import type { LucideIcon } from "lucide-react";
import { Code2, RefreshCw, Smartphone, Database, Megaphone } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  highlights: string[];
  /** Visually emphasised as the key service. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    icon: Code2,
    featured: true,
    summary:
      "Custom, lightning-fast websites engineered for search rankings, conversions and effortless growth.",
    description:
      "Our core craft. We design and hand-build modern websites on Next.js and React, with clean code, strong Core Web Vitals and SEO baked in from day one. No bloated page builders, no rented templates: a site you own outright that loads instantly on any device.",
    highlights: [
      "Mobile-first, responsive design",
      "Technical SEO and structured data",
      "Core Web Vitals optimised",
      "Accessible (WCAG 2.2 AA)",
      "Contact forms, maps and analytics",
    ],
  },
  {
    slug: "website-revamps",
    title: "Website Revamps",
    icon: RefreshCw,
    summary:
      "Turn a slow, dated site into a fast, modern, high-performing one, using the latest technologies.",
    description:
      "Stuck on an ageing WordPress theme or a sluggish site builder? We rebuild your site on a modern stack, keep the content and search equity you have earned, and set up proper redirects so nothing is lost in the move.",
    highlights: [
      "Performance and UX audit",
      "Modern rebuild, same content",
      "SEO-safe migration and redirects",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    summary:
      "Cross-platform iOS and Android apps with polished interfaces and reliable, scalable back ends.",
    description:
      "From booking apps to customer portals, we build cross-platform mobile apps with React Native, sharing one codebase across iOS and Android without compromising on feel or performance.",
    highlights: [
      "iOS and Android from one codebase",
      "API and back-end integration",
      "App Store submission support",
    ],
  },
  {
    slug: "crm-solutions",
    title: "CRM Solutions",
    icon: Database,
    summary:
      "CRM set-up, customisation and integrations that keep every lead, client and follow-up in one place.",
    description:
      "We configure and integrate CRM platforms around how your business actually works: website forms flowing straight into your pipeline, automated follow-ups, and dashboards your team will use.",
    highlights: [
      "CRM set-up and customisation",
      "Website and form integrations",
      "Workflow automation",
    ],
  },
  {
    slug: "crm-growth-marketing",
    title: "CRM & Growth Marketing",
    icon: Megaphone,
    summary:
      "Lead generation, social media management and ad campaigns that turn traffic into enquiries.",
    description:
      "A fast website is only half the story. We plan and run lead-generation funnels, manage your social media presence and build ad campaigns, all connected to your CRM so you can see what is working.",
    highlights: ["Lead generation", "Social media marketing management", "Ad campaign management"],
  },
];
