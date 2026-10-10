import type { LucideIcon } from "lucide-react";
import { MapPin, MessagesSquare, Coffee, BadgeCheck, Receipt, FileText } from "lucide-react";
import { site } from "@/lib/site";

export type Reason = { title: string; description: string; icon: LucideIcon };

export const reasons: Reason[] = [
  {
    title: "Australia based",
    description:
      "A local team working in your time zone, who understand Australian businesses and customers.",
    icon: MapPin,
  },
  {
    title: "Free initial consultation",
    description:
      "Talk through your project, get honest advice and a clear quote, with no cost and no obligation.",
    icon: MessagesSquare,
  },
  {
    title: "Coffee meetings",
    description:
      "Prefer face to face? We will meet you for a coffee in Brisbane or on the Gold Coast.",
    icon: Coffee,
  },
  {
    title: "Pay once it is completed",
    description:
      "No deposits. You only pay when your project is finished and you are happy with the result.",
    icon: BadgeCheck,
  },
  {
    title: "One-time payment",
    description: "No monthly fees and no lock-in contracts. Your website is yours, outright.",
    icon: Receipt,
  },
  {
    title: "Invoiced to our ABN",
    description: `A proper tax invoice from a registered Australian business. ABN: ${site.abn}.`,
    icon: FileText,
  },
];
