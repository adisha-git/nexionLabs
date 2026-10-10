import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { Hero } from "@/components/sections/Hero";
import { Veterans } from "@/components/sections/Veterans";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = pageMetadata({ description: site.description, path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Veterans />
      <Services />
      <WhyUs />
      <Portfolio />
      <Pricing />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
