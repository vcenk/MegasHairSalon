import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faqs } from "@/components/sections/Faqs";
import { ServiceCard } from "@/components/sections/ServicesGrid";
import { Visit } from "@/components/sections/Visit";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookButton, ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { AREAS, getArea } from "@/lib/areas";
import { FEATURED_SERVICES } from "@/lib/services";
import { faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  return pageMeta({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
    image: area.image,
  });
}

export default async function AreaPage({ params }: Params) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Areas", path: "/areas" },
          { name: area.name, path: `/areas/${area.slug}` },
        ]}
      />

      <section className="shell pt-10 md:pt-14">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <Eyebrow className="mb-5">{area.eyebrow}</Eyebrow>
            <h1 className="text-title text-balance">{area.headline}</h1>
            <p className="mt-6 max-w-lg text-lede text-pretty text-muted">{area.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton size="lg" />
              <ButtonLink href="/menu" variant="outline" size="lg">
                See prices
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <div className="relative aspect-16/10 overflow-hidden rounded-sm bg-clay">
              <Image
                src={area.image}
                alt={area.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell grid gap-12 py-20 md:py-24 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="space-y-6 text-lede text-pretty text-muted">
            {area.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="rounded-sm bg-sand p-8">
            <h2 className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-copper">
              Getting here from {area.name}
            </h2>
            <dl className="mt-5 space-y-4">
              {area.gettingHere.map((row) => (
                <div key={row.label}>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted">{row.label}</dt>
                  <dd className="mt-1 text-[0.9375rem] leading-relaxed text-ink">{row.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      <section className="bg-sand">
        <div className="shell py-20 md:py-24">
          <Reveal className="max-w-xl">
            <Eyebrow className="mb-5">Popular with {area.name} clients</Eyebrow>
            <h2 className="text-title text-balance">What people book</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_SERVICES.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Faqs faqs={area.faqs} title={`${area.name} — good to know`} eyebrow="FAQ" />

      <Visit heading={`Getting here from ${area.name}.`} />

      <CtaBand />

      <JsonLd data={faqSchema(area.faqs)} />
    </>
  );
}
