import "server-only";
import { z } from "zod";
import { budgetOptions, serviceOptions } from "@/lib/contact";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "That name is a little long."),
  email: z.email("Please enter a valid email address.").trim().max(200),
  phone: z
    .string()
    .trim()
    .max(30, "That phone number looks too long.")
    .regex(/^[+()\d\s-]*$/, "Please use digits, spaces and + ( ) - only.")
    .optional()
    .or(z.literal("")),
  service: z.enum(serviceOptions, { error: "Please choose a service." }),
  budget: z.enum(budgetOptions, { error: "Please choose a budget range." }),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(5000, "Please keep your message under 5,000 characters."),
});
