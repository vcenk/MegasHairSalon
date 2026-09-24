import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Faqs } from "@/components/sections/Faqs";
import { Visit } from "@/components/sections/Visit";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookButton, WhatsAppButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { BOOKING, CONTACT, PARKING } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact & Directions | Megas Hair Salon Coquitlam",
  description:
    "Contact Megas Hair Salon at 150-1169 Pacific St, Coquitlam. Find booking details, opening hours, directions, and street, underground, and free parking options.",
  path: "/contact",
});

const FAQS = [
  {
    question: "How do I book an appointment?",
    answer:
      "Online through our Phorest booking page, at any hour — you can choose your stylist, your service, and your time. Or call 778-858-0396 or 236-479-3672 during opening hours and we will book you in.",
  },
  {
    question: "Do you take walk-ins?",
    answer:
      "Sometimes, for quick services like a bang trim. Colour and cuts need blocked time, so booking ahead is far safer. Call first and we will tell you honestly whether there is a gap.",
  },
  {
    question: "Where do I park?",
    answer:
      "Paid street parking is available along Pacific Street using the Flowbird app, and paid underground parking is behind the salon building. Free parking is available on Glen Drive. Please do not use the Coquitlam Square parking lot; vehicles may be towed.",
  },
  {
    question: "What are your hours?",
    answer: "Monday to Saturday, 10:00 am to 6:00 pm. We are closed on Sundays.",
  },
  {
    question: "Do you speak Turkish?",
    answer:
      "Yes — Bülent, Gazi, Emir, and Fulya all speak Turkish and English. Türkçe konuşuyoruz.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Contact", path: "/contact" }]} />

      <section className="shell pt-10 md:pt-14">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-5">Contact</Eyebrow>
          <h1 className="mask-line text-title text-balance">Three ways to reach us.</h1>
          <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
            Booking online is the fastest — it shows real availability for every stylist. For
            anything else, the phone is answered during opening hours.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <Reveal className="rule pt-6">
            <h2 className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
              Book online
            </h2>
            <p className="mt-3 font-display text-xl text-ink">{BOOKING.provider}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Live availability, 24 hours a day. Pick your stylist and service.
            </p>
            <BookButton className="mt-5">Open booking</BookButton>
          </Reveal>

          <Reveal delay={90} className="rule pt-6">
            <h2 className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
              Call
            </h2>
            <div className="mt-3 space-y-1">
              <a
                href={CONTACT.phoneHref}
                className="block font-display text-xl text-ink transition-colors hover:text-copper"
              >
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.secondaryPhoneHref}
                className="block font-display text-xl text-ink transition-colors hover:text-copper"
              >
                {CONTACT.secondaryPhone}
              </a>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Monday to Saturday, 10am–6pm. Best for questions about a big change.
            </p>
            <WhatsAppButton className="mt-5" />
          </Reveal>

          <Reveal delay={180} className="rule pt-6">
            <h2 className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
              Email
            </h2>
            <a
              href={CONTACT.emailHref}
              className="mt-3 block break-all font-display text-xl text-ink transition-colors hover:text-copper"
            >
              {CONTACT.email}
            </a>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              For wedding parties, group bookings, and anything that needs planning.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mt-16 md:mt-20">
        <Visit heading="150-1169 Pacific Street." />
      </div>

      <section id="parking-information" className="bg-bone">
        <div className="shell py-16 md:py-24">
          <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow className="mb-5">Arriving by car</Eyebrow>
              <h2 className="mask-line text-title text-balance">Parking information.</h2>
              <p className="mt-5 max-w-sm text-[0.9375rem] leading-7 text-pretty text-muted">
                Three nearby options make it easy to plan where you will leave your car before
                your appointment.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-7 sm:grid-cols-3">
                <div className="rule pt-5">
                  <p className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-copper">
                    01 · Street
                  </p>
                  <p className="mt-4 text-[0.9375rem] leading-7 text-ink">
                    {PARKING.street} Pay with the {" "}
                    <strong className="font-semibold text-ink">Flowbird app</strong>.
                  </p>
                </div>

                <div className="rule pt-5">
                  <p className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-copper">
                    02 · Underground
                  </p>
                  <p className="mt-4 text-[0.9375rem] leading-7 text-ink">
                    {PARKING.underground}
                  </p>
                </div>

                <div className="rule pt-5">
                  <p className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-copper">
                    03 · Free
                  </p>
                  <p className="mt-4 text-[0.9375rem] leading-7 text-ink">{PARKING.free}</p>
                </div>
              </div>

              <aside className="mt-9 border-l-2 border-copper bg-sand px-6 py-5 md:flex md:items-start md:gap-8 md:px-8">
                <p className="shrink-0 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-copper-deep">
                  Important
                </p>
                <p className="mt-2 text-[0.9375rem] font-medium leading-7 text-pretty text-ink md:mt-0">
                  {PARKING.warning}
                </p>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>

      <Faqs faqs={FAQS} title="Before you come in" eyebrow="Good to know" />

      <JsonLd data={faqSchema(FAQS)} />
    </>
  );
}
