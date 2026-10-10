import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerNav } from "@/content/navigation";
import { services } from "@/content/services";
import { site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { CopyrightYear } from "./CopyrightYear";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed">
            High-performance websites, apps and CRM solutions built by senior developers with 10+
            years of enterprise experience. Free consultation, pay on completion.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white">
            <span aria-hidden="true">🇦🇺</span> Proudly Australian
          </p>
        </div>

        <nav aria-labelledby="footer-nav">
          <h2 id="footer-nav" className="text-sm font-semibold tracking-wide text-white uppercase">
            Company
          </h2>
          <ul className="mt-4 space-y-3 text-[0.9375rem]">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-services">
          <h2
            id="footer-services"
            className="text-sm font-semibold tracking-wide text-white uppercase"
          >
            Services
          </h2>
          <ul className="mt-4 space-y-3 text-[0.9375rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">Contact</h2>
          <address className="mt-4 space-y-3 text-[0.9375rem] not-italic">
            <p className="flex items-start gap-2.5">
              <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sky" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p className="flex items-start gap-2.5">
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sky" />
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </p>
            <p className="flex items-start gap-2.5">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sky" />
              <span>Brisbane &amp; Gold Coast, QLD</span>
            </p>
          </address>
          <p className="mt-4 text-sm">ABN: {site.abn}</p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; <CopyrightYear /> {site.legalName}. All rights reserved.
          </p>
          <p>All prices in AUD. One-time payment, no monthly fees.</p>
        </Container>
      </div>
    </footer>
  );
}
