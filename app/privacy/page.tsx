import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pageMeta } from "@/lib/seo";
import { BOOKING, BUSINESS, CONTACT } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: `How ${BUSINESS.name} handles personal information collected through this website and our online booking.`,
  path: "/privacy",
});

/**
 * Good-faith placeholder. The salon should have this reviewed against PIPEDA
 * and BC PIPA before launch — see docs/LAUNCH-CHECKLIST.md.
 */
export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Privacy", path: "/privacy" }]} />

      <section className="shell pt-10 pb-24 md:pt-14 md:pb-32">
        <Eyebrow className="mb-5">Legal</Eyebrow>
        <h1 className="text-title text-balance">Privacy policy</h1>

        <div className="mt-10 max-w-2xl space-y-8 text-[0.9375rem] leading-relaxed text-muted">
          <p>
            {BUSINESS.name} respects your privacy. This page explains what information we
            collect through this website and what we do with it.
          </p>

          <div>
            <h2 className="font-display text-xl text-ink">What this website collects</h2>
            <p className="mt-3">
              This site does not run a contact form and does not ask you to create an account.
              We do not collect names, email addresses, or phone numbers directly through these
              pages.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">Booking</h2>
            <p className="mt-3">
              Appointments are handled by {BOOKING.provider}, a third-party booking platform.
              When you click a booking link you leave this website, and any information you
              enter is collected and stored by {BOOKING.provider} under their own privacy
              policy and terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">Maps</h2>
            <p className="mt-3">
              Our contact and location pages embed a Google Maps frame so you can find us.
              Loading that frame involves a request to Google, which may set cookies and
              receive your IP address under Google&apos;s privacy policy.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">In the salon</h2>
            <p className="mt-3">
              When you book and visit, we keep the details needed to serve you well — contact
              information, appointment history, and your colour formula. We do not sell that
              information, and we share it only where required to run the salon.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-ink">Your choices</h2>
            <p className="mt-3">
              You can ask us what we hold about you, ask us to correct it, or ask us to delete
              it. Write to{" "}
              <a href={CONTACT.emailHref} className="text-copper underline-offset-4 hover:underline">
                {CONTACT.email}
              </a>{" "}
              or call {CONTACT.phone}.
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
