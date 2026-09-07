import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ALL_REVIEWS } from "@/lib/reviews";
import { pageMeta } from "@/lib/seo";
import { RATING, SOCIAL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Reviews | 4.8 Stars from 146 Google Reviews",
  description:
    "What clients say about Megas Hair Salon in Coquitlam — 4.8 stars from 146 Google reviews, covering colour, cuts, blowouts, and treatments.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Reviews", path: "/reviews" }]} />

      <section className="shell pt-10 md:pt-14">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-5">Reviews</Eyebrow>
          <h1 className="text-title text-balance">
            {RATING.value} stars, across {RATING.count} Google reviews.
          </h1>
          <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
            The pattern in them is consistent: people mention the consultation, the honesty,
            and how the cut or colour was still holding weeks later.
          </p>
          <a
            href={SOCIAL.google}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
          >
            Read them on Google →
          </a>
        </Reveal>
      </section>

      <div className="shell grid gap-x-10 gap-y-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-3">
        {ALL_REVIEWS.map((review, index) => (
          <Reveal key={`${review.author}-${index}`} delay={(index % 3) * 80} as="figure">
            <div aria-hidden="true" className="text-copper-soft">
              ★★★★★
            </div>
            <blockquote className="mt-4 font-display text-lg leading-snug text-pretty text-ink">
              “{review.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted">
              {review.author}, {review.city}
              {review.service && <span className="text-muted/70"> · {review.service}</span>}
            </figcaption>
          </Reveal>
        ))}
      </div>

      <CtaBand
        title="See what the fuss is about."
        body="Booking is open around the clock. Consultations are complimentary, and there is no obligation to book a service at the end of one."
        secondary={{ href: "/services", label: "Browse services" }}
      />
    </>
  );
}
