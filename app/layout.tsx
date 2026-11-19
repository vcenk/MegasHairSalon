import type { Metadata, Viewport } from "next";
import { Jost, Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { getGoogleRating } from "@/lib/google-rating";
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

/**
 * Pages re-render at most every six hours so the live Google rating in the hero,
 * reviews page, and schema picks up new reviews without a deploy. Matches the
 * fetch revalidate in lib/google-rating.ts.
 */
export const revalidate = 21_600;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Hair Salon Coquitlam | Colour, Balayage & Haircuts | Megas",
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Hair salon in Coquitlam near Coquitlam Centre for balayage, blonde highlights, hair colour, women's and men's cuts, keratin, and styling. Book online.",
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const rating = await getGoogleRating();

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
        <JsonLd data={localBusinessSchema(rating)} />
      </body>
    </html>
  );
}
