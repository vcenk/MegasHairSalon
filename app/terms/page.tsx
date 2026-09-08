import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pageMeta } from "@/lib/seo";
import { BOOKING, BUSINESS, CONTACT } from "@/lib/site";
import { MENU_UPDATED } from "@/lib/menu";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description: `Terms covering use of the ${BUSINESS.name} website, published prices, and online booking.`,
  path: "/terms",
});

/**
 * Good-faith placeholder. Confirm the salon's actual cancellation and deposit
 * policy with the client before launch — nothing here should be invented.
 */
export default function TermsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Terms", path: "/terms" }]} />

      <section className="shell pt-10 pb-24 md:pt-14 md:pb-32">
        <Eyebrow className="mb-5">Legal</Eyebrow>
        <h1 className="mask-line text-title text-balance">Terms of use</h1>

        <div className="mt-10 max-w-2xl space-y-8 text-[0.9375rem] leading-relaxed text-muted">
          <p>
            These terms cover your use of this website. They do not replace anything agreed
            with you in the salon.
          </p>

          <div>
            <h2 className="font-display text-xl text-ink">Prices</h2>
            <p className="mt-3">
              Prices shown on this site are starting prices in Canadian dollars, current as of{" "}
              {MENU_UPDATED}. Hair length, density, and condition affect the time and product a
              service needs. Where that changes the price, we tell you at the consultation —
              before the service begins.
            </p>
            <p className="mt-3">
              Our {BOOKING.provider} booking page is the authoritative source for current
              services and prices. If the two ever disagree, {BOOKING.provider} is correct.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">Booking and cancellations</h2>
            <p className="mt-3">
              Appointments are made and managed through {BOOKING.provider}, subject to their
              terms. For cancellation and rescheduling terms, see your booking confirmation or
              call us at {CONTACT.phone}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">Results</h2>
            <p className="mt-3">
              Photographs on this site show work carried out on real hair. Colour and cut
              results vary with your hair&apos;s starting condition, history, and texture. Any
              guidance on this site is general — the advice that applies to you is what your
              stylist gives you in the consultation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">Content</h2>
            <p className="mt-3">
              Text, photographs, and design on this site belong to {BUSINESS.name}. Please do
              not republish them without asking.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">Contact</h2>
            <address className="mt-3 not-italic">
              {BUSINESS.name}
              <br />
              {CONTACT.addressLine}
              <br />
              {CONTACT.phone}
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
