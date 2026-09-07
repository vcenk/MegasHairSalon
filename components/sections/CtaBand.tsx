import { BookButton, ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { BOOKING, CONTACT } from "@/lib/site";

export function CtaBand({
  title = "Ready when you are.",
  body = "Booking is open around the clock on our Phorest page — pick your stylist, your service, and your time. Consultations are complimentary.",
  secondary,
}: {
  title?: string;
  body?: string;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-espresso text-bone">
      <div className="shell py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="light" className="mb-5">
            Book with {BOOKING.provider}
          </Eyebrow>
          <h2 className="text-title text-balance">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lede text-pretty text-bone/70">{body}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <BookButton variant="light" size="lg" />
            {secondary ? (
              <ButtonLink href={secondary.href} variant="quiet" size="lg">
                {secondary.label}
              </ButtonLink>
            ) : (
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center rounded-full border border-bone/30 px-8 py-4 font-sans text-[0.9375rem] tracking-wide transition-colors duration-300 hover:bg-bone hover:text-ink"
              >
                {CONTACT.phone}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
