export type NavLink = { href: string; label: string };

/**
 * Primary header navigation. Labels are single words wherever possible — at
 * 15px with wide uppercase tracking, "Our Team" and "Our Story" cost about
 * 90px of bar for two words of no extra meaning. The footer carries the long
 * version.
 */
export const PRIMARY_NAV: readonly NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/menu", label: "Prices" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "Story" },
  { href: "/contact", label: "Contact" },
];

/**
 * Grouped footer, in the spirit of Zazou's Salon / Academy / Locations / Shop
 * columns — the thing the client liked, which is really a site map that shows
 * the whole business at a glance.
 *
 * Mapped to what Megas actually is rather than copied heading for heading:
 * Zazou's ACADEMY has no Megas equivalent (no training offering has been
 * confirmed), and their LOCATIONS lists two real salons where Megas has one, so
 * that becomes Visit — the neighbourhoods we serve.
 */
export const FOOTER_SALON: readonly NavLink[] = [
  { href: "/about", label: "Our Story" },
  { href: "/team", label: "Our Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "Salon FAQ" },
  { href: "/blog", label: "Journal" },
];

/** Zazou's SHOP column. Megas retails in-salon only — no checkout. */
export const FOOTER_PRODUCTS: readonly NavLink[] = [
  { href: "/products#colour-care", label: "Colour care" },
  { href: "/products#repair", label: "Masks & repair" },
  { href: "/products#scalp", label: "Scalp" },
  { href: "/products#styling", label: "Styling & heat" },
  { href: "/products", label: "All products" },
];

export const FOOTER_VISIT: readonly NavLink[] = [
  { href: "/areas/hair-salon-coquitlam", label: "Coquitlam" },
  { href: "/areas/hair-salon-port-moody", label: "Port Moody" },
  { href: "/areas/hair-salon-port-coquitlam", label: "Port Coquitlam" },
  { href: "/areas/turkish-hair-salon-vancouver", label: "Vancouver" },
  { href: "/contact", label: "Hours & directions" },
];
