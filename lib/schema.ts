import { BUSINESS, CONTACT, HOURS, RATING, SITE, SOCIAL, AREA_SERVED } from "./site";
import { MENU } from "./menu";
import type { Faq } from "./services";

const DAY_SCHEMA: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export const BUSINESS_ID = `${SITE.url}/#salon`;

/** Sitewide LocalBusiness node. Emitted once, in the root layout. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE.url,
    telephone: [CONTACT.phone, CONTACT.secondaryPhone],
    email: CONTACT.email,
    priceRange: BUSINESS.priceRange,
    foundingDate: BUSINESS.foundingDate,
    foundingLocation: BUSINESS.foundingLocation,
    image: `${SITE.url}${SITE.ogImage}`,
    address: {
      "@type": "PostalAddress",
      ...CONTACT.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.geo.latitude,
      longitude: CONTACT.geo.longitude,
    },
    areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: Object.entries(HOURS)
      .filter(([, hours]) => hours !== null)
      .map(([day, hours]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAY_SCHEMA[day],
        opens: hours!.opens,
        closes: hours!.closes,
      })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING.value,
      reviewCount: RATING.count,
      bestRating: 5,
    },
    sameAs: [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.google],
    knowsLanguage: ["en", "tr"],
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  priceValue: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    serviceType: input.name,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      price: input.priceValue,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "CAD",
        minPrice: input.priceValue,
      },
      availability: "https://schema.org/InStock",
    },
  };
}

export function personSchema(input: {
  name: string;
  alternateName?: string;
  jobTitle: string;
  description: string;
  path: string;
  image: string;
  knowsAbout: readonly string[];
  knowsLanguage: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    ...(input.alternateName ? { alternateName: input.alternateName } : {}),
    jobTitle: input.jobTitle,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    image: `${SITE.url}${input.image}`,
    knowsAbout: [...input.knowsAbout],
    knowsLanguage: [...input.knowsLanguage],
    worksFor: { "@id": BUSINESS_ID },
  };
}

export function faqSchema(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(trail: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE.url}${crumb.path}`,
    })),
  };
}

/** The full price list, for the /menu page. */
export function offerCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `${BUSINESS.name} price menu`,
    url: `${SITE.url}/menu`,
    provider: { "@id": BUSINESS_ID },
    itemListElement: MENU.map((category) => ({
      "@type": "OfferCatalog",
      name: category.name,
      itemListElement: category.items
        .filter((item) => item.priceValue !== undefined)
        .map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item.name },
          priceCurrency: "CAD",
          price: item.priceValue,
        })),
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    image: `${SITE.url}${input.image}`,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    author: { "@type": "Organization", name: BUSINESS.name, "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
  };
}
