import Link from "next/link";
import { BookButton } from "@/components/ui/Button";
import { FOOTER_SALON, FOOTER_VISIT } from "@/lib/nav";
import { SERVICES } from "@/lib/services";
import { BUSINESS, CONTACT, HOURS_DISPLAY, SOCIAL } from "@/lib/site";

/**
 * Grouped footer in the spirit of Zazou's Salon / Locations / Academy columns.
 * Megas runs no training academy, so that slot becomes Visit — the same
 * wayfinding depth, without inventing an offering.
 */
export function Footer() {
  return (
    <footer className="bg-espresso text-bone">
      <div className="shell py-16 md:py-20">
        {/* Brand + booking CTA */}
        <div className="flex flex-col gap-8 border-b border-bone/15 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-[1.6rem] tracking-[0.3em]">MEGAS</p>
            <p className="mt-4 font-display text-3xl leading-tight text-balance md:text-4xl">
              {BUSINESS.longTagline}
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <BookButton variant="light" size="lg" />
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center rounded-full border border-bone/30 px-8 py-4 font-sans text-[0.9375rem] tracking-wide transition-colors duration-300 hover:bg-bone hover:text-ink"
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>

        {/* Grouped columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Salon">
            {FOOTER_SALON.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {SERVICES.map((service) => (
              <FooterLink key={service.slug} href={`/services/${service.slug}`}>
                {service.name}
              </FooterLink>
            ))}
            <FooterLink href="/menu" accent>
              Full price menu
            </FooterLink>
          </FooterColumn>

          <FooterColumn title="Visit">
            {FOOTER_VISIT.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Find us">
            <address className="not-italic">
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm leading-relaxed text-bone/70 transition-colors hover:text-bone"
              >
                {CONTACT.address.streetAddress}
                <br />
                {CONTACT.address.addressLocality}, {CONTACT.address.addressRegion}{" "}
                {CONTACT.address.postalCode}
              </a>
              <a
                href={CONTACT.emailHref}
                className="mt-3 block text-sm text-bone/70 transition-colors hover:text-bone"
              >
                {CONTACT.email}
              </a>
            </address>

            {/* Stacked rather than justified — the column is too narrow for
                "Monday – Saturday" and a time range on one line. */}
            <dl className="mt-4 space-y-2 text-sm">
              {HOURS_DISPLAY.map((row) => (
                <div key={row.label}>
                  <dt className="text-bone/50">{row.label}</dt>
                  <dd className="text-bone/75">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex gap-4 text-sm">
              <SocialLink href={SOCIAL.instagram}>Instagram</SocialLink>
              <SocialLink href={SOCIAL.facebook}>Facebook</SocialLink>
              <SocialLink href={SOCIAL.google}>Google</SocialLink>
            </div>
          </FooterColumn>
        </div>

        {/* Baseline */}
        <div className="flex flex-col gap-4 border-t border-bone/15 pt-8 text-xs text-bone/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. Istanbul {BUSINESS.foundingDate} →
            Coquitlam {BUSINESS.vancouverSince}.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-bone">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-bone">
              Terms
            </Link>
            <span lang="tr" className="text-copper-soft">
              Hoş geldiniz
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-copper-soft">
        {title}
      </h2>
      <div className="mt-5 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  accent = false,
}: {
  href: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-sm transition-colors duration-300 hover:text-bone ${
        accent ? "text-copper-soft" : "text-bone/70"
      }`}
    >
      {children}
    </Link>
  );
}

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-bone/70 transition-colors duration-300 hover:text-bone"
    >
      {children}
    </a>
  );
}
