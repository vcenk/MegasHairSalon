import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { BookButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { MENU_ITEM_COUNT } from "@/lib/menu";
import { pageMeta } from "@/lib/seo";
import { BOOKING, CONTACT, HOURS_DISPLAY } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Book an Appointment | Megas Hair Salon Coquitlam",
  description:
    "Book online at Megas Hair Salon in Coquitlam — choose your stylist, service, and time on our Phorest page. Complimentary consultations. Or call (778) 858-0396.",
  path: "/book",
});

const STEPS = [
  {
    title: "Pick your service",
    detail: `All ${MENU_ITEM_COUNT} services are listed with prices. If you are unsure, choose the complimentary consultation — it costs nothing and commits you to nothing.`,
  },
  {
    title: "Pick your stylist",
    detail:
      "Every stylist's live availability is shown. For colour corrections and blonde work, our master colourists are the safer choice.",
  },
  {
    title: "Pick your time",
    detail:
      "Colour appointments need blocked time, so book further ahead. Cuts and blowouts often have same-week gaps.",
  },
];

export default function BookPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Book", path: "/book" }]} />

      <section className="shell pt-10 md:pt-14">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-5">Booking</Eyebrow>
          <h1 className="mask-line text-title text-balance">Book in about ninety seconds.</h1>
          <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
            Our booking runs on {BOOKING.provider}, which shows real-time availability for
            every stylist. It opens in a new tab, so you will not lose your place here.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BookButton size="lg">Open the booking page</BookButton>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center rounded-full border border-ink/25 px-8 py-4 font-sans text-[0.9375rem] tracking-wide text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-bone"
            >
              Or call {CONTACT.phone}
            </a>
          </div>
        </Reveal>
      </section>

      <section className="shell py-20 md:py-24">
        <ol className="grid gap-x-10 gap-y-12 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 90} as="li" className="rule pt-6">
              <span className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-copper">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-display text-2xl text-ink">{step.title}</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-pretty text-muted">
                {step.detail}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-sand">
        <div className="shell grid gap-10 py-16 md:grid-cols-3 md:py-20">
          <Reveal>
            <h2 className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
              Hours
            </h2>
            <dl className="mt-4 space-y-1">
              {HOURS_DISPLAY.map((row) => (
                <div key={row.label} className="flex justify-between gap-6 text-[0.9375rem]">
                  <dt className="text-muted">{row.label}</dt>
                  <dd className="text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
              Where
            </h2>
            <address className="mt-4 not-italic">
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.9375rem] leading-relaxed text-ink transition-colors hover:text-copper"
              >
                {CONTACT.addressLine}
              </a>
            </address>
          </Reveal>

          <Reveal delay={180}>
            <h2 className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
              First visit?
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-pretty text-muted">
              Book the complimentary consultation. Twenty minutes, no charge, and you leave
              with a plan and a firm price.{" "}
              <Link href="/menu" className="text-copper underline-offset-4 hover:underline">
                See the full menu
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
