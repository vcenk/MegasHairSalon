import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Heritage } from "@/components/sections/Heritage";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Visit } from "@/components/sections/Visit";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
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
            <h2 className="text-title text-balance">A century behind the chair</h2>
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

      <Visit />
    </>
  );
}
