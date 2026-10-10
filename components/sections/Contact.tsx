import { Coffee, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapFacade } from "@/components/ui/MapFacade";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate py-24 sm:py-32"
    >
      <div aria-hidden="true" className="wash wash--warm" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionHeading
              id="contact-title"
              eyebrow="Contact"
              title="Book your free consultation"
              lead="Tell us a little about your project and we'll arrange a time to chat, over coffee in Brisbane or on the Gold Coast, or online, whichever suits you."
            />

            <ul className="mt-8 space-y-4 text-ink">
              <li className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-amber/40">
                  <Coffee aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <strong className="font-semibold">Coffee chats</strong> in Brisbane &amp; the Gold
                  Coast
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-[#efeeff] text-brand-dark">
                  <Mail aria-hidden="true" className="size-5" />
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-sky/40">
                  <Phone aria-hidden="true" className="size-5" />
                </span>
                <a href={site.phoneHref} className="font-medium underline-offset-4 hover:underline">
                  {site.phone}
                </a>
              </li>
            </ul>

            <div className="mt-10">
              <MapFacade />
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
