import Link from "next/link";
import { Plus } from "lucide-react";
import { faqs } from "@/content/faq";
import { faqSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";

/** Native <details> accordion: accessible, keyboard friendly and zero JS. */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-24 sm:py-32">
      <JsonLd data={faqSchema(faqs)} />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Questions, answered"
          lead={
            <>
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link
                href="/contact"
                className="font-semibold text-brand-dark underline underline-offset-4"
              >
                Ask us directly
              </Link>
              .
            </>
          }
        />
        <div className="divide-y divide-ink/10 rounded-2xl bg-lilac px-6 ring-1 ring-ink/5 sm:px-8">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <h3>{faq.question}</h3>
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-brand-dark transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="pb-6 leading-relaxed text-ink-soft">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
