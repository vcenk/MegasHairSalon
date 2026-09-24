/**
 * Single source of truth for business facts.
 *
 * NAP (name / address / phone) must match the Google Business Profile exactly —
 * it is reused in every schema block, the footer, and the contact page.
 */

export const SITE = {
  url: "https://megashairsalon.ca",
  locale: "en_CA",
  name: "Megas Hair Salon",
  ogImage: "/images/photos/hero.jpg",
} as const;

export const BUSINESS = {
  name: "Megas Hair Salon",
  shortName: "Megas",
  legalName: "Megas Hair Salon",
  foundingDate: "1984",
  foundingLocation: "Istanbul, Türkiye",
  vancouverSince: "2025",
  tagline: "Master colourists since 1984.",
  longTagline: "Four decades of European hair artistry — now in Coquitlam.",
  priceRange: "$$",
} as const;

export const CONTACT = {
  address: {
    streetAddress: "150-1169 Pacific St",
    addressLocality: "Coquitlam",
    addressRegion: "BC",
    postalCode: "V3B 0J1",
    addressCountry: "CA",
  },
  addressLine: "150-1169 Pacific St, Coquitlam, BC V3B 0J1",
  phone: "778-858-0396",
  phoneHref: "tel:+17788580396",
  whatsappHref: "https://wa.me/17788580396",
  email: "megashairsalon@gmail.com",
  emailHref: "mailto:megashairsalon@gmail.com",
  geo: { latitude: 49.2814, longitude: -122.7905 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Megas+Hair+Salon+1169+Pacific+St+Coquitlam+BC",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=1169+Pacific+St,+Coquitlam,+BC+V3B+0J1&output=embed",
} as const;

export const PARKING = {
  street: "Paid street parking is available along Pacific Street.",
  underground: "Paid underground parking is available behind the salon building.",
  free: "Free street parking is available on Glen Drive.",
  warning:
    "Please do not park in the Coquitlam Square parking lot. It is reserved for the stores in the square, and vehicles may be towed.",
} as const;

type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export const HOURS: Record<DayKey, { opens: string; closes: string } | null> = {
  monday: { opens: "10:00", closes: "18:00" },
  tuesday: { opens: "10:00", closes: "18:00" },
  wednesday: { opens: "10:00", closes: "18:00" },
  thursday: { opens: "10:00", closes: "18:00" },
  friday: { opens: "10:00", closes: "18:00" },
  saturday: { opens: "10:00", closes: "18:00" },
  sunday: null,
};

/** Grouped for display — consecutive identical days collapse into one row. */
export const HOURS_DISPLAY = [
  { label: "Monday – Saturday", value: "10:00 am – 6:00 pm" },
  { label: "Sunday", value: "Closed" },
] as const;

export const BOOKING = {
  provider: "Phorest",
  /**
   * The salon's direct Phorest booking subdomain. Do not swap this for
   * phorest.com/book/salons/... — that URL redirects to Phorest's own
   * marketing site instead of the salon's booking flow.
   */
  url: "https://megashairsalon.phorest.me",
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/megashairsalon",
  facebook: "https://www.facebook.com/megashairsalon",
  google: "https://www.google.com/maps/place/MEGAS+Hair+Salon",
} as const;

export const RATING = {
  value: 4.8,
  count: 146,
} as const;

export const AREA_SERVED = [
  "Coquitlam",
  "Port Moody",
  "Port Coquitlam",
  "Burnaby",
  "Vancouver",
] as const;
