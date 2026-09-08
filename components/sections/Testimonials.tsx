import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { FEATURED_REVIEWS } from "@/lib/reviews";
import { RATING } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="shell py-20 md:py-28">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <Eyebrow className="mb-5">In their words</Eyebrow>
          <h2 className="mask-line text-title text-balance">
            {RATING.value} stars, {RATING.count} reviews.
          </h2>
        </div>
        <Link
          href="/reviews"
          className="font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
        >
          Read all reviews →
        </Link>
      </Reveal>

      <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-3">
        {FEATURED_REVIEWS.map((review, index) => (
          <Reveal key={review.author} delay={index * 90} as="figure">
            <div aria-hidden="true" className="text-copper-soft">
              ★★★★★
            </div>
            <blockquote className="mt-4 font-display text-lg leading-snug text-pretty text-ink md:text-xl">
              “{review.quote}”
            </blockquote>
            <figcaption className="mt-5 text-sm text-muted">
              {review.author}, {review.city}
              {review.service && <span className="text-muted/70"> · {review.service}</span>}
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
