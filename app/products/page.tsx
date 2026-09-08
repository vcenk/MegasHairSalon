import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faqs } from "@/components/sections/Faqs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { PRODUCT_CATEGORIES, RETAIL_BRANDS } from "@/lib/products";
import { pageMeta } from "@/lib/seo";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Products & Aftercare | Megas Hair Salon Coquitlam",
  description:
    "The professional haircare we use and retail in Coquitlam, including Aveda — colour care, masks, scalp treatments, and heat protection. Ask your stylist or call (778) 858-0396.",
  path: "/products",
});

const FAQS = [
  {
    question: "Can I buy products without booking an appointment?",
    answer:
      "Yes — come in during opening hours, Monday to Saturday 10am to 6pm, and someone will help you find the right thing. You do not need to be booked in.",
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
            We retail the professional lines we work with on the floor — {RETAIL_BRANDS.join(", ")}{" "}
            among them. Nothing on our shelf is there because a rep left it; it is there because
            our stylists use it.
          </p>
        </Reveal>
      </section>

      <div className="shell py-16 md:py-20">
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
