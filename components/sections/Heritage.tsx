import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Heritage() {
  return (
    <section className="bg-sand">
      <div className="shell grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-4/5 overflow-hidden rounded-sm">
            <Image
              src="/images/ph/about-heritage.svg"
              alt="Megas Hair Salon's origins in Istanbul, 1984"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <Eyebrow className="mb-5">Our story</Eyebrow>
          <h2 className="text-title text-balance">
            It started in Istanbul, in 1984.
          </h2>
          <div className="mt-6 space-y-5 text-lede text-pretty text-muted">
            <p>
              Two salons, four decades, and a way of working that never really changed: a
              long consultation before anything is mixed, colour built for the head in
              front of you, and stylists who have spent their whole careers behind a chair
              rather than a few seasons.
            </p>
            <p>
              In 2025 that practice moved to Coquitlam. Same people, same standard, new
              postcode — and a room built specifically for the way we work.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/12 pt-8">
            {[
              { value: "1984", label: "Founded in Istanbul" },
              { value: "40+", label: "Years of colour work" },
              { value: "8", label: "Stylists on the floor" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl text-ink md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-xs leading-snug tracking-wide text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <ButtonLink href="/about" variant="outline" className="mt-9">
            Read our story
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
