import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/sections/BlogCard";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Heritage } from "@/components/sections/Heritage";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Visit } from "@/components/sections/Visit";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { POSTS } from "@/lib/blog";
import { FEATURED_SERVICES } from "@/lib/services";
import { TEAM, TEAM_LEADS } from "@/lib/team";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Megas Hair Salon Coquitlam | Master Colourists Since 1984",
  description:
    "Turkish-founded hair salon in Coquitlam. Balayage from $350, highlights from $185, precision cuts from $60 — by master stylists with 20–40 years' experience. Book online.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <ServicesGrid
        services={FEATURED_SERVICES}
        eyebrow="What we do"
        title="Colour is why people drive here"
        intro="Six of the services we are known for. The full list — every cut, colour, treatment, and price — is on the menu."
        footer={
          <>
            <ButtonLink href="/services" variant="outline">
              All services
            </ButtonLink>
            <ButtonLink href="/menu" variant="outline">
              Full price menu
            </ButtonLink>
          </>
        }
      />

      <Heritage />

      <section className="shell py-20 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow className="mb-5">The team</Eyebrow>
            <h2 className="mask-line text-title text-balance">A century behind the chair</h2>
          </div>
          <Link
            href="/team"
            className="font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
          >
            All {TEAM.length} stylists →
          </Link>
        </Reveal>

        <div className="mt-14">
          <TeamGrid members={TEAM_LEADS} />
        </div>
      </section>

      <Testimonials />

      <section className="bg-sand">
        <div className="shell py-20 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow className="mb-5">From the journal</Eyebrow>
              <h2 className="mask-line text-title text-balance">Good hair starts with a clear plan</h2>
              <p className="mt-5 max-w-xl text-lede text-pretty text-muted">
                Practical answers from our Coquitlam stylists—written for the questions
                clients ask before they book and between appointments.
              </p>
            </div>
            <Link
              href="/blog"
              className="font-sans text-sm tracking-wide text-copper transition-colors hover:text-copper-deep"
            >
              Read all guides →
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {POSTS.slice(0, 3).map((post, index) => (
              <Reveal key={post.slug} delay={index * 90}>
                <BlogCard post={post} headingLevel="h3" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Visit />
    </>
  );
}
