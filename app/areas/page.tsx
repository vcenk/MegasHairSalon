import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { AREAS } from "@/lib/areas";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Areas We Serve | Coquitlam, Port Moody, Port Coquitlam & Vancouver",
  description:
    "Megas Hair Salon is on Pacific St in Coquitlam, serving the Tri-Cities and Greater Vancouver. Directions, drive times, and transit for each area.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Areas", path: "/areas" }]} />

      <section className="shell pt-10 md:pt-14">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-5">Areas we serve</Eyebrow>
          <h1 className="mask-line text-title text-balance">One salon, the whole Tri-Cities.</h1>
          <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
            We are on Pacific Street in Coquitlam — a short walk from Burquitlam Station and a
            straightforward drive from anywhere east of the Second Narrows.
          </p>
        </Reveal>
      </section>

      <div className="shell grid gap-x-6 gap-y-12 py-16 sm:grid-cols-2 md:py-20">
        {AREAS.map((area, index) => (
          <Reveal key={area.slug} delay={(index % 2) * 90}>
            <Link href={`/areas/${area.slug}`} className="group block">
              <div className="relative aspect-16/10 overflow-hidden rounded-sm bg-clay">
                <Image
                  src={area.image}
                  alt={area.imageAlt}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>
              <h2 className="mt-5 font-display text-2xl text-ink transition-colors group-hover:text-copper">
                {area.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">{area.lede}</p>
            </Link>
          </Reveal>
        ))}
      </div>

      <CtaBand secondary={{ href: "/contact", label: "Hours & directions" }} />
    </>
  );
}
