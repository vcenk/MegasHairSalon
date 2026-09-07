export type NavLink = { href: string; label: string };

/** Primary header navigation. Kept deliberately short — Haze-style restraint. */
export const PRIMARY_NAV: readonly NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/menu", label: "Prices" },
  { href: "/team", label: "Our Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

/**
 * Grouped footer, in the spirit of Zazou's Salon / Locations / Academy columns.
 * Megas has no training academy, so that column becomes "Visit".
 */
export const FOOTER_SALON: readonly NavLink[] = [
  { href: "/about", label: "Our Story" },
  { href: "/team", label: "Our Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Journal" },
];

export const FOOTER_VISIT: readonly NavLink[] = [
  { href: "/areas/hair-salon-coquitlam", label: "Coquitlam" },
  { href: "/areas/hair-salon-port-moody", label: "Port Moody" },
  { href: "/areas/hair-salon-port-coquitlam", label: "Port Coquitlam" },
  { href: "/areas/turkish-hair-salon-vancouver", label: "Vancouver" },
  { href: "/contact", label: "Hours & directions" },
];
