import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ALL_FAQS, FAQ_GROUPS } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Salon FAQ | Megas Hair Salon Coquitlam",
  description:
    "Answers on booking, colour pricing, balayage vs highlights, keratin, parking, and aftercare at Megas Hair Salon in Coquitlam. Consultations are complimentary.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Salon FAQ", path: "/faq" }]} />

      <section className="shell pt-10 md:pt-14">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-5">Salon FAQ</Eyebrow>
          <h1 className="mask-line text-title text-balance">Everything people ask us</h1>
          <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
            {ALL_FAQS.length} answers, in the order they usually come up. If yours is not
            here, call {CONTACT.phone} — someone who actually does the work will answer.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BookButton />
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center rounded-full border border-ink/30 px-8 py-3.5 font-sans text-[0.8125rem] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-bone"
            >
              {CONTACT.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <nav aria-label="FAQ sections" className="rule flex flex-wrap gap-x-6 gap-y-3 pt-6">
            {FAQ_GROUPS.map((group) => (
              <a
                key={group.slug}
                href={`#${group.slug}`}
                className="font-sans text-sm tracking-wide text-muted transition-colors hover:text-copper"
              >
                {group.name}
              </a>
            ))}
          </nav>
        </Reveal>
      </section>

      <div className="shell pb-8 pt-16 md:pt-20">
        {FAQ_GROUPS.map((group) => (
          <section
            key={group.slug}
            id={group.slug}
            className="grid gap-8 border-t border-ink/12 py-14 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-14"
          >
            <Reveal className="lg:col-span-4">
              <h2 className="text-3xl font-normal text-balance md:text-4xl">{group.name}</h2>
              <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-pretty text-muted">
                {group.blurb}
              </p>
            </Reveal>

            <div className="lg:col-span-8">
              <dl>
                {group.faqs.map((faq, index) => (
                  <Reveal key={faq.question} delay={index * 50}>
                    <details className="group border-t border-ink/10 py-5 first:border-t-0 last:border-b last:border-ink/10">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                        <dt className="font-display text-lg text-ink md:text-xl">
                          {faq.question}
                        </dt>
                        <span
                          aria-hidden="true"
                          className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center text-copper transition-transform duration-300 group-open:rotate-45"
                        >
                          <svg width="14" height="14" viewBox="0 0 14 14">
                            <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1.25" />
                          </svg>
                        </span>
                      </summary>
                      <dd className="mt-3 max-w-2xl pr-10 text-[0.9375rem] leading-relaxed text-pretty text-muted">
                        {faq.answer}
                      </dd>
                    </details>
                  </Reveal>
                ))}
              </dl>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-sand">
        <div className="shell py-16 md:py-20">
          <Reveal className="max-w-2xl">
            <Eyebrow className="mb-5">Still looking</Eyebrow>
            <h2 className="mask-line text-title text-balance">Try these next</h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
              Every service page carries its own questions and a full price table.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {[
                { href: "/menu", label: "Full price menu" },
                { href: "/services", label: "All services" },
                { href: "/products", label: "Products we retail" },
                { href: "/contact", label: "Hours & directions" },
                { href: "/blog", label: "Journal" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Or just ask us in person"
        body="A complimentary consultation answers more in twenty minutes than any page can. Book one online, or call and we will talk it through."
        secondary={{ href: "/contact", label: "Contact us" }}
      />

      <JsonLd data={faqSchema(ALL_FAQS)} />
    </>
  );
}
