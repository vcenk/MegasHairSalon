import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Faqs } from "@/components/sections/Faqs";
import { Visit } from "@/components/sections/Visit";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { BOOKING, CONTACT } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact & Directions | Megas Hair Salon Coquitlam",
  description:
    "Megas Hair Salon, 150-1169 Pacific St, Coquitlam BC. Call (778) 858-0396, email us, or book online. Open Monday to Saturday, 10am–6pm.",
  path: "/contact",
});

const FAQS = [
  {
    question: "How do I book an appointment?",
    answer:
      "Online through our Phorest booking page, at any hour — you can choose your stylist, your service, and your time. Or call (778) 858-0396 during opening hours and we will book you in.",
  },
  {
    question: "Do you take walk-ins?",
    answer:
      "Sometimes, for quick services like a bang trim. Colour and cuts need blocked time, so booking ahead is far safer. Call first and we will tell you honestly whether there is a gap.",
  },
  {
    question: "Where do I park?",
    answer:
      "There is street and building parking on Pacific Street. If you are arriving by SkyTrain, Burquitlam Station is a short walk away.",
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
            <a
              href={CONTACT.phoneHref}
              className="mt-3 block font-display text-xl text-ink transition-colors hover:text-copper"
            >
              {CONTACT.phone}
            </a>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Monday to Saturday, 10am–6pm. Best for questions about a big change.
            </p>
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

      <Faqs faqs={FAQS} title="Before you come in" eyebrow="Good to know" />

      <JsonLd data={faqSchema(FAQS)} />
    </>
  );
}
