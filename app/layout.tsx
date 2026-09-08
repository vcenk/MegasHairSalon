import type { Metadata, Viewport } from "next";
import { Jost, Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { BUSINESS, SITE } from "@/lib/site";

/**
 * Salon Haze sets its display type in Brandon Grotesque, which is licensed
 * through Adobe Fonts. Jost is the closest free geometric equivalent — same
 * Futura lineage, same behaviour in light weights and uppercase.
 */
const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

/** Haze's own UI face, and it is on Google Fonts, so we use the real thing. */
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Megas Hair Salon Coquitlam | Master Colourists Since 1984",
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Turkish-founded hair salon in Coquitlam. Balayage, blonde specialists, precision cuts, and keratin by master stylists with 20–40 years' experience. Book online.",
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name }],
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#fcfaf7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${jost.variable} ${rubik.variable}`}>
      <body className="min-h-screen bg-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-bone"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
