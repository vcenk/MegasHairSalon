import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/ui/Button";
import { getGoogleRating } from "@/lib/google-rating";
import { BOOKING, CONTACT } from "@/lib/site";

/**
 * Salon Haze's hero shape: one full-bleed photograph of the room, everything
 * centred over it, and a single outlined call to action. The only departure is
 * a light scrim — Haze runs white type straight onto a bright photo, which does
 * not hold up to a contrast check.
 */
export async function Hero() {
  const rating = await getGoogleRating();

  return (
    <section className="relative flex min-h-[34rem] items-center justify-center overflow-hidden bg-espresso md:min-h-[94svh]">
      <Image
        src="/images/photos/hero.jpg"
        alt="The styling floor at Megas Hair Salon in Coquitlam"
        fill
        priority
        sizes="100vw"
        className="hero-zoom object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/40 to-ink/60"
      />

      <div className="shell relative z-10 flex flex-col items-center py-28 text-center">
        {/* Heavier than the h1/h2 default of 300 — this is the one place on
            the site where the type carries the whole composition.
            The h1 states only what is true here: a salon in Coquitlam. The
            1984 origin lives in the timeline below, tied to Türkiye. */}
        <h1 className="enter enter-1 max-w-4xl text-display font-normal tracking-[0.04em] text-balance text-bone">
          Hair salon in Coquitlam
        </h1>

        {/* Client wording: "Since 1984 in Türkiye, now in Coquitlam." Drawn as a
            timeline so the two chapters read as a journey rather than a date
            attached to this address. */}
        <p className="enter enter-2 mt-8 flex w-full max-w-xl items-center gap-4 text-bone [text-shadow:0_1px_16px_rgba(0,0,0,0.7)] md:gap-6">
          <span className="text-left">
            <span className="block text-[0.6875rem] font-medium tracking-[0.3em] text-bone/90 uppercase">
              Since 1984
            </span>
            <span className="mt-1 block font-display text-lg tracking-[0.12em] uppercase md:text-xl">
              In Türkiye
            </span>
          </span>

          <span aria-hidden="true" className="relative flex h-px flex-1 items-center">
            <span className="draw-line absolute inset-x-0 h-px bg-bone/80" />
            <span className="absolute left-0 h-1.5 w-1.5 -translate-y-px rounded-full bg-copper-soft" />
            <span className="absolute right-0 h-1.5 w-1.5 -translate-y-px rounded-full bg-copper-soft" />
          </span>

          <span className="text-right">
            <span className="block text-[0.6875rem] font-medium tracking-[0.3em] text-bone/90 uppercase">
              Now
            </span>
            <span className="mt-1 block font-display text-lg tracking-[0.12em] uppercase md:text-xl">
              In Coquitlam
            </span>
          </span>
        </p>

        <p className="enter enter-3 mt-9 max-w-lg text-[1.0625rem] leading-relaxed text-pretty text-bone/80 md:text-[1.125rem]">
          Balayage, blonde work, keratin, and cuts that still hold their shape at week
          six — by stylists with 20–40 years behind the chair.
        </p>

        <BookButton
          variant="light"
          size="lg"
          className="enter enter-4 mt-10 min-w-[15rem] shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
        >
          Book with {BOOKING.provider}
        </BookButton>

        <Link
          href={BOOKING.url}
          className="tracked sweep enter enter-5 mt-6 text-[0.8125rem] text-bone/65 transition-colors duration-300 hover:text-bone"
        >
          See prices
        </Link>

        <dl className="enter enter-6 mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-bone/25 pt-7 text-[0.8125rem] tracking-[0.12em] text-bone/70 uppercase">
          {/* Live from Google (see lib/google-rating.ts); links to the reviews. */}
          <div>
            <dt className="sr-only">Google rating</dt>
            <dd>
              <a
                href={rating.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Rated ${rating.value.toFixed(1)} out of 5 from ${rating.count} Google reviews — read them on Google`}
                className="flex items-baseline gap-2.5 transition-colors duration-300 hover:text-bone"
              >
                <span className="font-display text-xl font-normal text-bone">
                  {rating.value.toFixed(1)}
                </span>
                <span aria-hidden="true" className="text-sm text-copper-soft">
                  ★★★★★
                </span>
                <span>{rating.count} Google reviews</span>
              </a>
            </dd>
          </div>
          <div>
            <dt className="sr-only">Location</dt>
            <dd>{CONTACT.address.streetAddress}</dd>
          </div>
          <div>
            <dt className="sr-only">Hours</dt>
            <dd>Mon–Sat 9–6</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
