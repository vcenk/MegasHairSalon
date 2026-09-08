import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { Visit } from "@/components/sections/Visit";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TEAM_LEADS } from "@/lib/team";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Story | Turkish Hair Salon in Coquitlam Since 1984",
  description:
    "Megas Hair Salon began in Istanbul in 1984 and opened in Coquitlam in 2025. Four decades of Turkish hair artistry — master colourists, long consultations, honest advice.",
  path: "/about",
});

const TIMELINE = [
  {
    year: "1984",
    title: "Istanbul",
    detail:
      "The first Megas chair. Gazi starts the same year — four decades later he is still cutting.",
  },
  {
    year: "1990s",
    title: "Two salons",
    detail:
      "Bülent builds a following across two established salons in Türkiye, specialising in blonde work.",
  },
  {
    year: "2000s",
    title: "The craft travels",
    detail:
      "Training with L'Oréal, Kérastase, and Wella. Emir works across both Türkiye and Canada.",
  },
  {
    year: "2025",
    title: "Coquitlam",
    detail:
      "Under Fulya's direction, the salon opens on Pacific Street — a room designed for the way we work.",
  },
];

const VALUES = [
  {
    title: "The consultation is the service",
    body: "Twenty minutes in natural light before anything is mixed. It is free, and it is the part that decides whether you like your hair in six weeks.",
  },
  {
    title: "We will tell you no",
    body: "If your hair cannot take what you are asking for today, we will say so and give you a route to get there. A colourist who never says no is not protecting your hair.",
  },
  {
    title: "Prices before, not after",
    body: "Every service on our menu is priced. If your hair needs extra time or product, you hear it at the start of the appointment, not at the till.",
  },
  {
    title: "Türkçe konuşuyoruz",
    body: "Bülent, Gazi, Emir, and Fulya all speak Turkish. For the Turkish community across Greater Vancouver, that has turned out to matter more than we expected.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Our Story", path: "/about" }]} />

      <section className="shell pt-10 md:pt-14">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="rv-left lg:col-span-7">
            <Eyebrow className="mb-5">Our story</Eyebrow>
            <h1 className="mask-line text-title text-balance">Getting this right since 1984</h1>
            <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
              Two salons in Istanbul, one in Coquitlam, and a way of working that has not
              changed in forty years.
            </p>
          </Reveal>

          <Reveal delay={120} className="rv-right lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-clay">
              <Image
                src="/images/photos/about-heritage.jpg"
                alt="The origins of Megas Hair Salon in Istanbul, 1984"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell grid gap-12 py-20 md:py-24 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="space-y-6 text-lede text-pretty text-muted">
            <p>
              If you have had your hair done in Istanbul, you know the difference is not a
              technique. It is a set of assumptions — that the consultation matters, that
              colour gets mixed for your head rather than poured from a pre-made bowl, and
              that a stylist with thirty years of experience is normal rather than remarkable.
            </p>
            <p>
              Megas has been operating on those assumptions since 1984. Gazi has been behind a
              chair for forty-one years. Bülent — Bill to everyone who books him — built his
              reputation on blonde work across two salons in Türkiye before bringing it here.
              Emir has spent twenty-three years between the two countries.
            </p>
            <p>
              In 2025 the practice moved to Coquitlam, under Fulya&apos;s direction. The room
              is new; the standard is not. What we brought with us was the long consultation,
              the custom mix, the willingness to say &ldquo;not today, and here is why&rdquo;
              — and eight people who have chosen to do this for a living rather than for now.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="rv-right lg:col-span-5">
          <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-clay">
            <Image
              src="/images/photos/about-today.jpg"
              alt="Megas Hair Salon today, on Pacific Street in Coquitlam"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="bg-espresso text-bone">
        <div className="shell py-20 md:py-28">
          <Reveal className="max-w-xl">
            <Eyebrow tone="light" className="mb-5">
              Forty years
            </Eyebrow>
            <h2 className="mask-line text-title text-balance">Istanbul to Coquitlam.</h2>
          </Reveal>

          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((entry, index) => (
              <Reveal key={entry.year} delay={index * 80} as="li" className="border-t border-bone/20 pt-6">
                <span className="font-display text-3xl text-copper-soft">{entry.year}</span>
                <h3 className="mt-3 font-display text-xl text-bone">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-bone/65">
                  {entry.detail}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="shell py-20 md:py-28">
        <Reveal className="max-w-xl">
          <Eyebrow className="mb-5">How we work</Eyebrow>
          <h2 className="mask-line text-title text-balance">Four things we do not compromise on.</h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} delay={(index % 2) * 90}>
              <h3 className="font-display text-2xl text-balance text-ink">{value.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-pretty text-muted">
                {value.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-sand">
        <div className="shell py-20 md:py-24">
          <Reveal className="max-w-xl">
            <Eyebrow className="mb-5">The people</Eyebrow>
            <h2 className="mask-line text-title text-balance">Who you will be sitting with.</h2>
          </Reveal>
          <div className="mt-12">
            <TeamGrid members={TEAM_LEADS} />
          </div>
          <ButtonLink href="/team" variant="outline" className="mt-12">
            All eight stylists
          </ButtonLink>
        </div>
      </section>

      <Visit />

      <CtaBand />
    </>
  );
}
