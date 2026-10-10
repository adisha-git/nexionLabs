import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE_URL, site } from "@/lib/site";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { promoDismissScript } from "@/lib/promo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Web Development Brisbane & Gold Coast | NexIon Labs",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "web development Brisbane",
    "web design Gold Coast",
    "affordable website Australia",
    "CRM solutions",
    "mobile app development Australia",
    "website revamp",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    url: "/",
    title: "NexIon Labs | High-performance websites by senior developers",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "NexIon Labs | High-performance websites by senior developers",
    description: site.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#F8F8F9",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the promo script may add an attribute before hydration.
    <html lang="en-AU" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col font-sans">
        {site.promo.active && <script dangerouslySetInnerHTML={{ __html: promoDismissScript }} />}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
        <Header />
        <main id="main" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
