import "server-only";
import { Resend } from "resend";

export type EmailMessage = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
};

export interface EmailProvider {
  send(message: EmailMessage): Promise<void>;
}

class ResendProvider implements EmailProvider {
  private client: Resend;
  constructor(apiKey: string) {
    this.client = new Resend(apiKey);
  }
  async send(message: EmailMessage) {
    const { error } = await this.client.emails.send(message);
    if (error) throw new Error(`Resend error: ${error.message}`);
  }
}

/** Logs instead of sending. Useful for local development. */
class ConsoleProvider implements EmailProvider {
  async send(message: EmailMessage) {
    console.info("[contact] Email (console provider):\n", message.subject, "\n", message.text);
  }
}

/**
 * Picks the provider from EMAIL_PROVIDER. To add another provider (Postmark,
 * SES, SMTP...), implement EmailProvider and add a case here.
 */
export function getEmailProvider(): EmailProvider | null {
  const provider =
    process.env.EMAIL_PROVIDER ?? (process.env.RESEND_API_KEY ? "resend" : "console");

  switch (provider) {
    case "resend": {
      const key = process.env.RESEND_API_KEY;
      return key ? new ResendProvider(key) : null;
    }
    case "console":
      // Never silently drop real enquiries in production.
      return process.env.NODE_ENV === "production" ? null : new ConsoleProvider();
    default:
      return null;
  }
}
