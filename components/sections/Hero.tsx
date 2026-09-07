import Image from "next/image";
import { BookButton, ButtonLink } from "@/components/ui/Button";
import { CONTACT, RATING } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[38rem] items-end overflow-hidden bg-espresso md:min-h-[92svh]">
      <Image
        src="/images/ph/hero.svg"
        alt="Megas Hair Salon in Coquitlam — master colourists since 1984"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Legibility scrim — dark at the bottom where the copy sits. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/45 to-espresso/25"
      />

      <div className="shell relative z-10 pb-14 pt-40 md:pb-20">
        <p className="font-sans text-[0.6875rem] uppercase tracking-[0.24em] text-bone/60">
          Istanbul 1984 · Coquitlam today
        </p>

        <h1 className="mt-6 max-w-4xl text-display text-balance text-bone">
          Four decades of hair,
          <br />
          <span className="text-copper-soft">in the right hands.</span>
        </h1>

        <p className="mt-7 max-w-xl text-lede text-pretty text-bone/75">
          Master colourists and precision cutters in Coquitlam — balayage, blonde work,
          keratin, and cuts that still hold their shape at week six.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <BookButton size="lg" />
          <ButtonLink href="/menu" variant="quiet" size="lg">
            See prices
          </ButtonLink>
        </div>

        {/* Trust row */}
        <dl className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-bone/15 pt-6 text-bone/70">
          <div className="flex items-baseline gap-2">
            <dt className="sr-only">Google rating</dt>
            <dd className="font-display text-2xl text-bone">{RATING.value}</dd>
            <span aria-hidden="true" className="text-copper-soft">
              ★★★★★
            </span>
            <span className="text-xs tracking-wide">{RATING.count} Google reviews</span>
          </div>
          <div className="text-xs tracking-wide">
            <dt className="sr-only">Experience</dt>
            <dd>Stylists with 20–40 years behind the chair</dd>
          </div>
          <div className="text-xs tracking-wide">
            <dt className="sr-only">Location</dt>
            <dd>{CONTACT.address.streetAddress}, Coquitlam</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
