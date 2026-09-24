import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TEAM } from "@/lib/team";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Team | Master Stylists & Colourists in Coquitlam",
  description:
    "Meet the eight stylists at Megas Hair Salon Coquitlam — Bülent, Gazi, Emir, Fulya, Fara, Nadia, Rain, and Sima. Choose by specialty, experience, and languages spoken.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Our Team", path: "/team" }]} />

      <section className="shell pt-10 md:pt-14">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-5">The team</Eyebrow>
          <h1 className="mask-line text-title text-balance">Eight stylists</h1>
          <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
            Experience is not a marketing word in colour work — it is pattern recognition.
            Having seen this exact hair, this exact failure, this exact request, before.
          </p>
        </Reveal>
      </section>

      <div className="shell py-16 md:py-20">
        <TeamGrid members={TEAM} />
      </div>

      <CtaBand
        title="Book with the stylist you want."
        body="Our booking page lists every stylist and their availability. If you are not sure who to pick, choose a complimentary consultation and we will match you."
        secondary={{ href: "/services", label: "Browse services" }}
      />
    </>
  );
}
