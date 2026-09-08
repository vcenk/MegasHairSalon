import { BookButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT, HOURS_DISPLAY } from "@/lib/site";

export function Visit({ heading = "Come and find us." }: { heading?: string }) {
  return (
    <section className="bg-sand">
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <Eyebrow className="mb-5">Visit</Eyebrow>
          <h2 className="mask-line text-title text-balance">{heading}</h2>

          <div className="mt-8 space-y-7">
            <div>
              <h3 className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
                Address
              </h3>
              <address className="mt-2 not-italic">
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl leading-snug text-ink transition-colors hover:text-copper"
                >
                  {CONTACT.address.streetAddress}
                  <br />
                  {CONTACT.address.addressLocality}, {CONTACT.address.addressRegion}{" "}
                  {CONTACT.address.postalCode}
                </a>
              </address>
            </div>

            <div>
              <h3 className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
                Hours
              </h3>
              <dl className="mt-2 space-y-1">
                {HOURS_DISPLAY.map((row) => (
                  <div key={row.label} className="flex justify-between gap-6 text-[0.9375rem]">
                    <dt className="text-muted">{row.label}</dt>
                    <dd className="text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-muted">
                Contact
              </h3>
              <p className="mt-2 space-x-3">
                <a
                  href={CONTACT.phoneHref}
                  className="text-[0.9375rem] text-ink underline decoration-copper/40 underline-offset-4 transition-colors hover:text-copper"
                >
                  {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.emailHref}
                  className="text-[0.9375rem] text-ink underline decoration-copper/40 underline-offset-4 transition-colors hover:text-copper"
                >
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>

          <BookButton className="mt-9" size="lg" />
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="relative aspect-4/3 overflow-hidden rounded-sm border border-ink/10 bg-clay lg:aspect-auto lg:h-full lg:min-h-[26rem]">
            <iframe
              title="Map showing Megas Hair Salon at 150-1169 Pacific St, Coquitlam"
              src={CONTACT.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.35]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
