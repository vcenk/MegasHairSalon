import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceCard } from "@/components/sections/ServicesGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/services";
import { MENU_ITEM_COUNT } from "@/lib/menu";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Hair Services in Coquitlam | Colour, Cuts & Treatments",
  description:
    "Balayage, blonde specialists, hair colour, precision cuts, keratin smoothing, blowouts, and restorative treatments at Megas Hair Salon in Coquitlam. Prices from $20.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Services", path: "/services" }]} />

      <section className="shell pt-10 md:pt-14">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-5">Services</Eyebrow>
          <h1 className="text-title text-balance">
            Eight things we are known for — and everything else besides.
          </h1>
          <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
            These are the services people travel for. The complete list runs to{" "}
            {MENU_ITEM_COUNT} items, all priced, all bookable online.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/menu">Full price menu</ButtonLink>
            <ButtonLink href="/team" variant="outline">
              Meet the stylists
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <div className="shell grid gap-x-6 gap-y-12 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>

      <CtaBand
        title="Not sure which one you need?"
        body="Consultations are complimentary and take about twenty minutes. Book one online and leave with a plan and a firm price — no obligation."
        secondary={{ href: "/contact", label: "Ask us a question" }}
      />
    </>
  );
}
