import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceCard } from "@/components/sections/ServicesGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookButton, ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { getService } from "@/lib/services";
import { getTeamMember, TEAM } from "@/lib/team";
import { personSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TEAM.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};

  return pageMeta({
    title: member.metaTitle,
    description: member.metaDescription,
    path: `/team/${member.slug}`,
    image: member.portrait,
  });
}

export default async function TeamMemberPage({ params }: Params) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const services = member.relatedServices.map(getService).filter((s) => s !== undefined);

  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Our Team", path: "/team" },
          { name: member.name, path: `/team/${member.slug}` },
        ]}
      />

      <section className="shell pt-10 md:pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-3/4 overflow-hidden rounded-sm bg-clay">
              <Image
                src={member.portrait}
                alt={member.portraitAlt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover grayscale"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <Eyebrow className="mb-5">
              {member.title}
              {member.years !== null && ` · ${member.years} years`}
            </Eyebrow>
            <h1 className="mask-line text-title text-balance">{member.headline}</h1>

            <p className="mt-7 text-lede text-pretty text-muted">{member.bio}</p>

            <div className="mt-8 rule pt-6">
              <h2 className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
                Specialties
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {member.specialties.map((specialty) => (
                  <li
                    key={specialty}
                    className="rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink"
                  >
                    {specialty}
                  </li>
                ))}
              </ul>
              {member.level && (
                <p className="mt-4 text-xs tracking-wide text-muted">
                  Booking level: {member.level}
                </p>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton size="lg">Book with {member.name}</BookButton>
              <ButtonLink href="/team" variant="outline" size="lg">
                All stylists
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {member.quote && (
        <section className="bg-sand">
          <div className="shell py-20 md:py-24">
            <Reveal as="figure" className="mx-auto max-w-3xl text-center">
              <div aria-hidden="true" className="text-copper">
                ★★★★★
              </div>
              <blockquote className="mt-6 font-display text-2xl leading-snug text-balance text-ink md:text-3xl">
                “{member.quote.text}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">{member.quote.author}</figcaption>
            </Reveal>
          </div>
        </section>
      )}

      {member.gallery.length > 0 && (
        <section className="shell py-20 md:py-24">
          <Reveal>
            <Eyebrow className="mb-5">Selected work</Eyebrow>
            <h2 className="mask-line text-title text-balance">{member.name}&apos;s work</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {member.gallery.map((shot, index) => (
              <Reveal key={shot.src} delay={index * 70}>
                <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-clay">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {services.length > 0 && (
        <section className="shell border-t border-ink/12 py-20 md:py-24">
          <Reveal>
            <Eyebrow className="mb-5">Book with {member.name}</Eyebrow>
            <h2 className="mask-line text-title text-balance">Services</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </section>
      )}

      <CtaBand />

      <JsonLd
        data={personSchema({
          name: member.name,
          alternateName: member.alternateName,
          jobTitle: member.title,
          description: member.metaDescription,
          path: `/team/${member.slug}`,
          image: member.portrait,
          knowsAbout: member.specialties,
        })}
      />
    </>
  );
}
