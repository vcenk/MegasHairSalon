import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faqs } from "@/components/sections/Faqs";
import { ServiceCard } from "@/components/sections/ServicesGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookButton, ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { getService, SERVICES } from "@/lib/services";
import { getTeamMember } from "@/lib/team";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const stylists = service.stylists.map(getTeamMember).filter((m) => m !== undefined);
  const related = service.related.map(getService).filter((s) => s !== undefined);

  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      {/* Header */}
      <section className="shell pt-10 md:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <Eyebrow className="mb-5">{service.eyebrow}</Eyebrow>
            <h1 className="text-title text-balance">{service.headline}</h1>
            <p className="mt-6 max-w-lg text-lede text-pretty text-muted">{service.lede}</p>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink/12 pt-6">
              <div>
                <dt className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
                  From
                </dt>
                <dd className="mt-1 font-display text-2xl text-ink">{service.priceFrom}</dd>
              </div>
              <div>
                <dt className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
                  Time
                </dt>
                <dd className="mt-1 font-display text-2xl text-ink">{service.duration}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton size="lg" />
              <ButtonLink href="/menu" variant="outline" size="lg">
                See all prices
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-clay">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body + what's included */}
      <section className="shell grid gap-12 py-20 md:py-24 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="space-y-6 text-lede text-pretty text-muted">
            {service.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="rounded-sm bg-sand p-8">
            <h2 className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-copper">
              What&apos;s included
            </h2>
            <ul className="mt-5 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] text-ink">
                  <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-copper" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="bg-espresso text-bone">
        <div className="shell py-20 md:py-28">
          <Reveal className="max-w-xl">
            <Eyebrow tone="light" className="mb-5">
              How it goes
            </Eyebrow>
            <h2 className="text-title text-balance">The appointment, step by step.</h2>
          </Reveal>

          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 70} as="li">
                <span className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-copper-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-bone">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-bone/65">
                  {step.detail}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section className="shell py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow className="mb-5">Pricing</Eyebrow>
            <h2 className="text-title text-balance">{service.name} prices</h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
              Starting prices in CAD. Very long or very dense hair may need extra product and
              time — we confirm that at the consultation, before we start.
            </p>
            <Link
              href="/menu"
              className="mt-5 inline-block font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
            >
              See the full menu →
            </Link>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8">
            <table className="w-full">
              <caption className="sr-only">{service.name} price list</caption>
              <tbody>
                {service.pricing.map((row) => (
                  <tr key={row.name} className="border-t border-ink/12 last:border-b">
                    <th
                      scope="row"
                      className="py-4 pr-4 text-left font-sans text-[0.9375rem] font-normal text-ink"
                    >
                      {row.name}
                    </th>
                    <td className="py-4 text-right font-display text-lg text-ink">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Who does it */}
      {stylists.length > 0 && (
        <section className="bg-sand">
          <div className="shell py-20 md:py-24">
            <Reveal className="max-w-xl">
              <Eyebrow className="mb-5">Who does it</Eyebrow>
              <h2 className="text-title text-balance">Book this with</h2>
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {stylists.map((member, index) => (
                <Reveal key={member.slug} delay={index * 80}>
                  <Link href={`/team/${member.slug}`} className="group flex items-center gap-5">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-clay">
                      <Image
                        src={member.portrait}
                        alt={member.portraitAlt}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-ink transition-colors group-hover:text-copper">
                        {member.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted">{member.title}</p>
                      {member.years !== null && (
                        <p className="mt-0.5 font-sans text-[0.6875rem] uppercase tracking-[0.18em] text-copper">
                          {member.years} years
                        </p>
                      )}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Faqs faqs={service.faqs} title={`${service.name} questions`} />

      {/* Related */}
      {related.length > 0 && (
        <section className="shell border-t border-ink/12 py-20 md:py-24">
          <Reveal>
            <Eyebrow className="mb-5">Also consider</Eyebrow>
            <h2 className="text-title text-balance">Related services</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <ServiceCard key={item.slug} service={item} index={index} />
            ))}
          </div>
        </section>
      )}

      <CtaBand />

      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          path: `/services/${service.slug}`,
          priceValue: service.priceValue,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
    </>
  );
}
