import type { LucideIcon } from "lucide-react";
import { Building2, Gauge, ShieldCheck, Users } from "lucide-react";

export type VeteranPoint = { title: string; description: string; icon: LucideIcon };

export const veteranPoints: VeteranPoint[] = [
  {
    title: "10+ years, every developer",
    description:
      "Every developer on your project has more than a decade of commercial experience. No juniors learning on your budget.",
    icon: Users,
  },
  {
    title: "Enterprise-grade practices",
    description:
      "Our team has built and maintained platforms at large enterprise companies, and brings the same standards to small business sites.",
    icon: Building2,
  },
  {
    title: "Performance by default",
    description:
      "We engineer for Core Web Vitals, accessibility and SEO from the first commit, not as an afterthought.",
    icon: Gauge,
  },
  {
    title: "Secure and maintainable",
    description:
      "Clean, typed, well-structured code on proven technologies, so your site is easy to extend and safe to run.",
    icon: ShieldCheck,
  },
];
