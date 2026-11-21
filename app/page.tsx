import { BOOKING, CONTACT } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/sections/BlogCard";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Heritage } from "@/components/sections/Heritage";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Visit } from "@/components/sections/Visit";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { POSTS } from "@/lib/blog";
import { FEATURED_SERVICES } from "@/lib/services";
import { TEAM, TEAM_LEADS } from "@/lib/team";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Hair Salon Coquitlam | Colour, Balayage & Haircuts | Megas",
  description:
    "Hair salon in Coquitlam near Coquitlam Centre for balayage, blonde highlights, hair colour, women's and men's cuts, keratin, and styling. Book online.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-b border-ink/10 bg-bone">
        <div className="shell grid gap-8 py-14 md:grid-cols-12 md:gap-12 md:py-20">
          <Reveal className="md:col-span-5">
            <Eyebrow className="mb-5">Coquitlam hair salon</Eyebrow>
            <h2 className="mask-line text-title text-balance">
              Are you ready for an exceptional experience?
            </h2>
          </Reveal>

          <Reveal delay={100} className="md:col-span-7 md:pt-9">
            {/* Client-supplied copy. The original wording read "Vegas Hair Salon";
                corrected to Megas. */}
            <p className="max-w-2xl text-lede text-pretty text-muted">
              Looking for a more personalized approach to your hair? We invite you to
              experience a professional consultation and hair design at Megas Hair Salon in
              Coquitlam. Let&rsquo;s create something beautiful together!
            </p>
            <p className="mt-5 max-w-2xl text-lede text-pretty text-muted">
              We don&rsquo;t just create your hairstyle; we design a look that reflects your
              personality, features, and natural beauty.
            </p>
            {/* Kept for search: names the services and the Coquitlam Centre area. */}
            <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-pretty text-muted">
              Visit us on{" "}
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper underline decoration-copper/40 underline-offset-4 transition-colors hover:text-copper-deep hover:decoration-copper-deep"
              >
                Pacific Street
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
              , near Coquitlam Centre, for balayage, blonde
              highlights, custom hair colour, women&apos;s and men&apos;s haircuts, keratin
              smoothing, and styling.
            </p>
            <nav aria-label="Popular hair services" className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href="/services/balayage-coquitlam"
                className="font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
              >
                Balayage →
              </Link>
              <Link
                href="/services/precision-haircut-coquitlam"
                className="font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
              >
                Haircuts →
              </Link>
              <Link
                href="/services/hair-color-coquitlam"
                className="font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
              >
                Hair colour →
              </Link>
              <Link
                href="/services/keratin-treatment-coquitlam"
                className="font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
              >
                Keratin →
              </Link>
            </nav>
          </Reveal>
        </div>
      </section>

      <ServicesGrid
        services={FEATURED_SERVICES}
        eyebrow="What we do"
        title="Colour is why people drive here"
        intro="Six of the services we are known for. The full list — every cut, colour, treatment, and price — is on the menu."
        footer={
          <>
            <ButtonLink href="/services" variant="outline">
              All services
            </ButtonLink>
            <ButtonLink href={BOOKING.url} variant="outline">
              Full price menu
            </ButtonLink>
          </>
        }
      />

      <Heritage />

      <section className="shell py-20 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow className="mb-5">The team</Eyebrow>
            <h2 className="mask-line text-title text-balance">A century behind the chair</h2>
          </div>
          <Link
            href="/team"
            className="font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
          >
            All {TEAM.length} stylists →
          </Link>
        </Reveal>

        <div className="mt-14">
          <TeamGrid members={TEAM_LEADS} />
        </div>
      </section>

      <Testimonials />

      <section className="bg-sand">
        <div className="shell py-20 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow className="mb-5">From the journal</Eyebrow>
              <h2 className="mask-line text-title text-balance">Good hair starts with a clear plan</h2>
              <p className="mt-5 max-w-xl text-lede text-pretty text-muted">
                Practical answers from our Coquitlam stylists—written for the questions
                clients ask before they book and between appointments.
              </p>
            </div>
            <Link
              href="/blog"
              className="font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
            >
              Read all guides →
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {POSTS.slice(0, 3).map((post, index) => (
              <Reveal key={post.slug} delay={index * 90}>
                <BlogCard post={post} headingLevel="h3" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Visit />
    </>
  );
}
