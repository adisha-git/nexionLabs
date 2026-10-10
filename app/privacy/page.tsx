import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How NexIon Labs collects, uses and protects your personal information.",
  path: "/privacy",
});

// TODO: have this policy reviewed against your actual data practices before launch.
// It is a plain-English starting point aligned with the Australian Privacy Principles, not legal advice.
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="We respect your privacy and only collect what we need to respond to you and deliver your project."
      />
      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-10 text-lg leading-relaxed text-ink-soft [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
          {/* PLACEHOLDER: update this date whenever the policy changes. */}
          <p className="text-base text-ink-muted">Last updated: [DATE]</p>

          <section>
            <h2>Who we are</h2>
            <p>
              {site.legalName} (ABN: {site.abn}) is an Australian web development business. This
              policy explains how we handle personal information in line with the Privacy Act 1988
              (Cth) and the Australian Privacy Principles.
            </p>
          </section>

          <section>
            <h2>What we collect</h2>
            <p>When you contact us through our website, we collect:</p>
            <ul>
              <li>Your name, email address and (optionally) phone number</li>
              <li>The service you are interested in, your budget range and your message</li>
            </ul>
            <p>
              Our hosting provider may also record standard technical information, such as your IP
              address and browser type, for security and performance purposes.
            </p>
          </section>

          <section>
            <h2>How we use it</h2>
            <p>
              We use your information only to respond to your enquiry, arrange consultations, and
              deliver and invoice the work you engage us for. We do not sell or rent your personal
              information.
            </p>
          </section>

          <section>
            <h2>Third-party services</h2>
            <p>
              Enquiries are delivered to us by email through a third-party email provider. If you
              choose to load the interactive map, Google may collect information in line with its
              own privacy policy. The map is not loaded unless you select &ldquo;Load interactive
              map&rdquo;.
            </p>
          </section>

          <section>
            <h2>Storage and security</h2>
            <p>
              We take reasonable steps to protect your information from misuse, loss and
              unauthorised access, and we delete enquiries we no longer need.
            </p>
          </section>

          <section>
            <h2>Access, correction and complaints</h2>
            <p>
              You can ask to access or correct the personal information we hold about you, or raise
              a privacy concern, by emailing{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-dark underline">
                {site.email}
              </a>
              . If you are not satisfied with our response, you may contact the Office of the
              Australian Information Commissioner (OAIC).
            </p>
          </section>

          <p>
            <Link href="/" className="font-semibold text-brand-dark underline">
              Back to home
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
