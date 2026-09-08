import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Gallery | Colour, Cuts & Styling in Coquitlam",
  description:
    "Balayage, blonde transformations, precision cuts, blowouts, and the salon itself — work from the team at Megas Hair Salon in Coquitlam.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Gallery", path: "/gallery" }]} />

      <section className="shell pt-10 md:pt-14">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-5">Gallery</Eyebrow>
          <h1 className="mask-line text-title text-balance">The work, and the room</h1>
          <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
            Our Coquitlam build-out is finishing now, and the salon&apos;s own photography is
            being shot as soon as it is done. These stand in until then.
          </p>
        </Reveal>
      </section>

      <div className="shell py-14 md:py-16">
        <GalleryGrid />
      </div>

      <CtaBand
        title="Want something like this?"
        body="Bring a photo. It is the fastest way to tell a colourist what you actually mean — and the consultation to talk it through is complimentary."
        secondary={{ href: "/services", label: "Browse services" }}
      />
    </>
  );
}
