"use server";

import { z } from "zod";
import { type ContactField, type ContactState } from "@/lib/contact";
import { contactSchema } from "@/lib/contact-schema";
import { getEmailProvider } from "@/lib/email";
import { site } from "@/lib/site";

const FIELDS: ContactField[] = ["name", "email", "phone", "service", "budget", "message"];

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = Object.fromEntries(
    FIELDS.map((f) => [f, String(formData.get(f) ?? "")]),
  ) as Record<ContactField, string>;

  // Honeypot: real visitors never see this field. Pretend success for bots.
  if (String(formData.get("company_website") ?? "").length > 0) {
    return { status: "success" };
  }

  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    const { fieldErrors } = z.flattenError(parsed.error);
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors: Object.fromEntries(
        Object.entries(fieldErrors).map(([k, v]) => [k, v?.[0]]),
      ) as ContactState["fieldErrors"],
      values,
    };
  }

  const data = parsed.data;
  const provider = getEmailProvider();
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!provider || (!from && process.env.NODE_ENV === "production")) {
    console.error("[contact] Email delivery is not configured. See .env.example.");
    return {
      status: "error",
      message: `Sorry, our form is temporarily unavailable. Please email us at ${site.email}.`,
      values,
    };
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Service", data.service],
    ["Budget", data.budget],
  ];

  try {
    await provider.send({
      to,
      from: from ?? "NexIon Labs <onboarding@resend.dev>",
      replyTo: data.email,
      subject: `New enquiry: ${data.service} from ${data.name}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${data.message}`,
      html: `<h2>New website enquiry</h2><table>${rows
        .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
        .join("")}</table><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
    });
  } catch (error) {
    console.error("[contact] Failed to send enquiry", error);
    return {
      status: "error",
      message: `Sorry, something went wrong sending your message. Please try again or email ${site.email}.`,
      values,
    };
  }

  return {
    status: "success",
    message:
      "Thanks! Your message is on its way. We'll be in touch shortly to arrange your free consultation.",
  };
}
