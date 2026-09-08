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
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/40 to-ink/60"
      />

      <div className="shell relative z-10 flex flex-col items-center py-28 text-center">
        <p className="text-[0.625rem] tracking-[0.34em] text-bone/70 uppercase">
          Istanbul 1984 · Coquitlam today
        </p>

        <h1 className="mt-7 max-w-4xl text-display tracking-[0.06em] text-balance text-bone">
          Hair salon in Coquitlam since 1984
        </h1>

        <p className="mt-7 max-w-lg text-lede text-pretty text-bone/80">
          Balayage, blonde work, keratin, and cuts that still hold their shape at week
          six — by stylists with 20–40 years behind the chair.
        </p>

        <a
          href={BOOKING.url}
          target="_blank"
          rel="noopener noreferrer"
          className="tracked mt-10 inline-flex items-center rounded-full border border-bone/60 px-11 py-4 text-[0.8125rem] text-bone transition-colors duration-300 hover:bg-bone hover:text-ink"
        >
          Book your appointment
        </a>

        <Link
          href="/menu"
          className="tracked mt-5 text-[0.6875rem] text-bone/60 underline-offset-8 transition-colors duration-300 hover:text-bone hover:underline"
        >
          See prices
        </Link>

        <dl className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-bone/20 pt-6 text-[0.6875rem] tracking-[0.12em] text-bone/65 uppercase">
          <div className="flex items-baseline gap-2">
            <dt className="sr-only">Google rating</dt>
            <dd className="font-display text-base text-bone">{RATING.value}</dd>
            <span aria-hidden="true" className="text-copper-soft">
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
