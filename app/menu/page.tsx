import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { BookButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { MENU, MENU_ITEM_COUNT, MENU_UPDATED } from "@/lib/menu";
import { offerCatalogSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { BOOKING } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Price Menu | Megas Hair Salon Coquitlam",
  description:
    "The full price list at Megas Hair Salon Coquitlam — colour, cuts, styling, treatments, perms, brows, and extensions. Cuts from $20, colour from $85, balayage $350.",
  path: "/menu",
});

const UPDATED_LABEL = new Date(`${MENU_UPDATED}T12:00:00Z`).toLocaleDateString("en-CA", {
  year: "numeric",
  month: "long",
  timeZone: "UTC",
});

export default function MenuPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Prices", path: "/menu" }]} />

      <section className="shell pt-10 md:pt-14">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-5">Price menu</Eyebrow>
          <h1 className="mask-line text-title text-balance">Every service, every price.</h1>
          <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
            All {MENU_ITEM_COUNT} services we offer, in Canadian dollars. Prices are starting
            points — long or dense hair sometimes needs more product and time, which we confirm
            before we begin rather than after.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BookButton size="lg" />
          </div>
          <p className="mt-6 text-xs tracking-wide text-muted">
            Updated {UPDATED_LABEL} from our {BOOKING.provider} booking system.
          </p>
        </Reveal>

        {/* Jump nav */}
        <Reveal delay={120} className="mt-12">
          <nav aria-label="Menu categories" className="rule flex flex-wrap gap-x-6 gap-y-3 pt-6">
            {MENU.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="font-sans text-sm tracking-wide text-muted transition-colors hover:text-copper"
              >
                {category.name}
              </a>
            ))}
          </nav>
        </Reveal>
      </section>

      <div className="shell pb-8 pt-16 md:pt-20">
        {MENU.map((category) => (
          <section
            key={category.slug}
            id={category.slug}
            className="grid gap-8 border-t border-ink/12 py-14 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-14"
          >
            <Reveal className="lg:col-span-4">
              <h2 className="text-3xl font-normal text-balance md:text-4xl">{category.name}</h2>
              <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-pretty text-muted">
                {category.blurb}
              </p>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-8">
              <table className="w-full">
                <caption className="sr-only">{category.name} prices</caption>
                <tbody>
                  {category.items.map((item) => (
                    <tr key={item.name} className="border-t border-ink/10 first:border-t-0">
                      <th
                        scope="row"
                        className="py-3.5 pr-6 text-left font-sans text-[0.9375rem] font-normal text-ink"
                      >
                        {item.name}
                        {item.note && (
                          <span className="text-xs text-muted"> ({item.note})</span>
                        )}
                      </th>
                      <td className="whitespace-nowrap py-3.5 text-right font-display text-lg text-ink">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </section>
        ))}
      </div>

      <CtaBand
        title="Prices are one thing. Fit is another."
        body="A complimentary consultation takes twenty minutes and tells you exactly what your hair needs — and what it will cost — before you commit to anything."
        secondary={{ href: "/services", label: "Browse services" }}
      />

      <JsonLd data={offerCatalogSchema()} />
    </>
  );
}
