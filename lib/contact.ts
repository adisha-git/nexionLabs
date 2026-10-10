/**
 * Contact form options and types. Kept free of Zod so the client bundle stays
 * small; the validation schema lives in lib/contact-schema.ts (server only).
 */
import { services } from "@/content/services";

export const serviceOptions = [...services.map((s) => s.title), "Not sure yet"] as const;

export const budgetOptions = [
  "Under $500",
  "$500 – $2,000",
  "$2,000 – $5,000",
  "$5,000+",
  "Not sure yet",
] as const;

export type ContactField = "name" | "email" | "phone" | "service" | "budget" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
};
