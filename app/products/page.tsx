import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faqs } from "@/components/sections/Faqs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { PRODUCT_CATEGORIES, PRODUCT_PARTNERS, RETAIL_BRANDS } from "@/lib/products";
import { pageMeta } from "@/lib/seo";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Products & Aftercare | Megas Hair Salon Coquitlam",
  description:
    "Discover Megas Hair Salon's professional product partnerships with Aveda and Wella Professionals, plus in-salon advice for colour, repair, scalp care, and styling.",
  path: "/products",
});

const FAQS = [
  {
    question: "Can I buy products without booking an appointment?",
    answer:
      "Yes — come in during opening hours, Monday to Saturday 9am to 6pm, and someone will help you find the right thing. You do not need to be booked in.",
  },
  {
    question: "Can you set something aside for me?",
    answer: `Call ${CONTACT.phone} and we will hold it at the front for you.`,
  },
  {
    question: "How do I know which products I actually need?",
    answer:
      "Ask at the end of your service, when your stylist has just had their hands in your hair. You will usually leave with two or three things rather than a shelf — that is deliberate.",
  },
  {
    question: "Which professional brands do you carry?",
    answer:
      "Aveda and Wella Professionals are our product partners. Our stylists recommend across both ranges based on your hair, your service, and how you style at home.",
  },
  {
    question: "Do you sell online?",
    answer:
      "Not at the moment. Retail is in the salon only, which also means you can see, smell, and feel the texture of something before you commit to it.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Products", path: "/products" }]} />

      <section className="shell pt-10 md:pt-14">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-5">Products</Eyebrow>
          <h1 className="mask-line text-title text-balance">What we use, we sell</h1>
          <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
            Our shelves are built around the professional lines we trust behind the chair. Through
            our partnerships with {RETAIL_BRANDS.join(" and ")}, salon performance continues long
            after your appointment.
          </p>
        </Reveal>
      </section>

      <section className="mt-14 bg-espresso text-bone md:mt-20">
        <div className="shell py-16 md:py-24">
          <Reveal className="grid gap-8 border-b border-bone/15 pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-end md:pb-14">
            <Eyebrow className="text-copper-soft">Our product partners</Eyebrow>
            <h2 className="mask-line max-w-3xl text-title text-balance">
              Two professional houses. One considered standard.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2">
            {PRODUCT_PARTNERS.map((partner, index) => (
              <Reveal
                key={partner.name}
                delay={index * 100}
                as="article"
                className={`py-10 md:py-14 ${
                  index === 0
                    ? "border-b border-bone/15 md:border-r md:border-b-0 md:pr-12"
                    : "md:pl-12"
                }`}
              >
                <div className="flex items-baseline justify-between gap-6">
                  <p className="font-display text-[clamp(2rem,5vw,4.25rem)] font-light uppercase leading-none tracking-[-0.03em]">
                    {partner.name}
                  </p>
                  <span className="font-sans text-[0.6875rem] tracking-[0.18em] text-copper-soft">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-5 font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-copper-soft">
                  {partner.focus}
                </p>
                <p className="mt-5 max-w-xl text-[0.9375rem] leading-7 text-bone/70 text-pretty">
                  {partner.description}
                </p>
                <ul aria-label={`${partner.name} strengths`} className="mt-7 flex flex-wrap gap-2">
                  {partner.strengths.map((strength) => (
                    <li
                      key={strength}
                      className="rounded-full border border-bone/20 px-4 py-2 font-sans text-xs tracking-wide text-bone/80"
                    >
                      {strength}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="border-t border-bone/15 pt-8 md:flex md:items-start md:justify-between md:gap-12">
            <p className="font-display text-xl leading-snug text-bone md:max-w-sm md:text-2xl">
              Partnership, translated into personal care.
            </p>
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-7 text-bone/65 text-pretty md:mt-0">
              A product name is only the beginning. We pair the right formula with your cut,
              colour, texture, and routine, then show you how much to use and where to use it.
              The result is a simple regimen chosen for your hair—not a shelf full of guesswork.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="shell py-16 md:py-20">
        <Reveal className="mb-10 max-w-2xl md:mb-14">
          <Eyebrow className="mb-4">Find your routine</Eyebrow>
          <h2 className="mask-line text-title text-balance">Care, chosen by concern</h2>
        </Reveal>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <Reveal key={category.slug} delay={(index % 2) * 90} as="article">
              <div className="relative aspect-16/10 overflow-hidden rounded-sm bg-clay">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h2 className="mt-6 text-3xl font-normal text-balance">{category.name}</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-pretty text-muted">
                {category.summary}
              </p>
              <h3 className="mt-6 font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-copper">
                Worth asking about if
              </h3>
              <ul className="mt-3 space-y-2">
                {category.forYouIf.map((line) => (
                  <li key={line} className="flex gap-3 text-[0.9375rem] text-ink">
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-copper" />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <section className="bg-sand">
        <div className="shell py-16 md:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mb-5">How we sell</Eyebrow>
            <h2 className="mask-line text-title text-balance">Two or three things, not a shelf</h2>
            <p className="mt-6 text-lede text-pretty text-muted">
              Nobody at Megas works on product commission. Ask your stylist at the end of your
              appointment and you will get the short list that actually matters for your hair —
              and an honest answer about what you can skip.
            </p>
            <p className="mt-8">
              <a
                href={CONTACT.phoneHref}
                className="font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
              >
                Call {CONTACT.phone} to reserve something →
              </a>
            </p>
            <p className="mt-3">
              <Link
                href="/faq#products"
                className="font-sans text-sm tracking-wide text-muted transition-colors hover:text-ink"
              >
                Aftercare questions →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <Faqs faqs={FAQS} title="Buying from us" eyebrow="Good to know" />

      <CtaBand
        title="Book, and ask while you are in the chair"
        body="The best product advice happens with your stylist's hands in your hair. Booking is open around the clock."
        secondary={{ href: "/faq", label: "Salon FAQ" }}
      />
    </>
  );
}
