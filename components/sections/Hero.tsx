import Image from "next/image";
import Link from "next/link";
import { BOOKING, CONTACT, RATING } from "@/lib/site";

/**
 * Salon Haze's hero shape: one full-bleed photograph of the room, everything
 * centred over it, and a single outlined call to action. The only departure is
 * a light scrim — Haze runs white type straight onto a bright photo, which does
 * not hold up to a contrast check.
 */
export function Hero() {
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
        <p className="enter enter-1 text-[0.8125rem] font-medium tracking-[0.3em] text-bone/75 uppercase">
          Istanbul 1984 · Coquitlam today
        </p>

        {/* Heavier than the h1/h2 default of 300 — this is the one place on
            the site where the type carries the whole composition. */}
        <h1 className="enter enter-2 mt-7 max-w-5xl text-display font-normal tracking-[0.04em] text-balance text-bone">
          Hair salon in Coquitlam since 1984
        </h1>

        <p className="enter enter-3 mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-pretty text-bone/80 md:text-[1.25rem]">
          Balayage, blonde work, keratin, and cuts that still hold their shape at week
          six — by stylists with 20–40 years behind the chair.
        </p>

        <a
          href={BOOKING.url}
          target="_blank"
          rel="noopener noreferrer"
          className="tracked enter enter-4 mt-11 inline-flex items-center rounded-full border border-bone/70 px-12 py-5 text-[0.9375rem] font-medium text-bone transition-colors duration-300 hover:bg-bone hover:text-ink"
        >
          Book your appointment
        </a>

        <Link
          href="/menu"
          className="tracked sweep enter enter-5 mt-6 text-[0.8125rem] text-bone/65 transition-colors duration-300 hover:text-bone"
        >
          See prices
        </Link>

        <dl className="enter enter-6 mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-bone/25 pt-7 text-[0.8125rem] tracking-[0.12em] text-bone/70 uppercase">
          <div className="flex items-baseline gap-2.5">
            <dt className="sr-only">Google rating</dt>
            <dd className="font-display text-xl font-normal text-bone">{RATING.value}</dd>
            <span aria-hidden="true" className="text-sm text-copper-soft">
              ★★★★★
            </span>
            <span>{RATING.count} reviews</span>
          </div>
          <div>
            <dt className="sr-only">Location</dt>
            <dd>{CONTACT.address.streetAddress}</dd>
          </div>
          <div>
            <dt className="sr-only">Hours</dt>
            <dd>Mon–Sat 10–6</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
