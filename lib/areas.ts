/**
 * Local-SEO landing pages for the neighbourhoods Megas draws from.
 *
 * These describe one salon serving several communities — they are not separate
 * locations, and the copy must never imply otherwise.
 *
 * Only state what the salon has supplied or what is on the menu and team data.
 * No drive times, turn-by-turn routes, "most of our clients" claims, price
 * comparisons or parking promises: those are not ours to assert. Address, hours,
 * phone and parking come from lib/site.ts; for travel time the pages point to
 * the map instead of quoting minutes.
 */

import type { Faq } from "./services";
import { CONTACT, HOURS_DISPLAY, PARKING } from "./site";

export type Area = {
  readonly slug: string;
  readonly name: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly eyebrow: string;
  readonly headline: string;
  readonly lede: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly body: readonly string[];
  readonly gettingHere: readonly { readonly label: string; readonly detail: string }[];
  readonly faqs: readonly Faq[];
};

const HOURS_TEXT = `${HOURS_DISPLAY[0].label}, ${HOURS_DISPLAY[0].value}. ${HOURS_DISPLAY[1].label}: ${HOURS_DISPLAY[1].value}.`;

const PARKING_TEXT = `${PARKING.street} ${PARKING.underground} ${PARKING.free}`;

const ADDRESS_ROW = { label: "Address", detail: CONTACT.addressLine } as const;
const PARKING_ROW = { label: "Parking", detail: PARKING_TEXT } as const;
const PARKING_WARNING_ROW = { label: "Please note", detail: PARKING.warning } as const;

const MAPS_ROW = {
  label: "Driving",
  detail: `Enter ${CONTACT.addressLine} in your maps app for a live route and drive time from where you are.`,
} as const;

export const AREAS: readonly Area[] = [
  {
    slug: "hair-salon-coquitlam",
    name: "Coquitlam",
    metaTitle: "Hair Salon in Coquitlam | Master Colourists | Megas",
    metaDescription:
      "Megas Hair Salon on Pacific St in Coquitlam, near Coquitlam Centre. Balayage, blonde highlights, women's and men's cuts, colour, and keratin. Book online.",
    eyebrow: "Coquitlam · Our salon",
    headline: "Your hair salon in Coquitlam.",
    lede: "On Pacific Street, near Coquitlam Centre and Lincoln SkyTrain Station.",
    image: "/images/photos/area-coquitlam.jpg",
    imageAlt:
      "Inside Megas Hair Salon: a colour wall, shampoo chairs, and styling stations under pendant lighting",
    body: [
      "Megas is on Pacific Street, near Coquitlam Centre and Lincoln SkyTrain Station. The salon began in Türkiye in 1984 and opened in Coquitlam in 2025.",
      "What came with it is the way the salon works: a consultation before colour, colour mixed for the head in front of us, and stylists with decades behind the chair.",
      "Balayage, blonde work, keratin smoothing, and precision cutting all happen at the Pacific Street salon. See the services for the full list, or book online in Phorest.",
    ],
    gettingHere: [
      ADDRESS_ROW,
      { label: "SkyTrain", detail: "Lincoln Station, on the Millennium Line, is nearby." },
      PARKING_ROW,
      PARKING_WARNING_ROW,
    ],
    faqs: [
      {
        question: "Where exactly is Megas Hair Salon in Coquitlam?",
        answer: `We are at ${CONTACT.addressLine}, near Coquitlam Centre. Call ${CONTACT.phone} if you have trouble finding the entrance.`,
      },
      {
        question: "What are your hours?",
        answer: HOURS_TEXT,
      },
      {
        question: "Do I need an appointment?",
        answer:
          "Booking ahead is the best way to get the time and stylist you want. You can book online through our Phorest booking page at any hour, or call during opening hours.",
      },
      {
        question: "Where do I park?",
        answer: `${PARKING_TEXT} ${PARKING.warning}`,
      },
    ],
  },
  {
    slug: "hair-salon-port-moody",
    name: "Port Moody",
    metaTitle: "Hair Salon Near Port Moody | Balayage & Colour | Megas Hair Salon",
    metaDescription:
      "Megas Hair Salon in Coquitlam, near Port Moody. Balayage, blonde highlights, precision cuts, and keratin by master stylists. Book online.",
    eyebrow: "Port Moody · Megas in Coquitlam",
    headline: "From Port Moody to Megas.",
    lede: "One salon, on Pacific Street in Coquitlam, near Coquitlam Centre.",
    image: "/images/photos/area-port-moody.jpg",
    imageAlt: "A treatment room with a white treatment bed and recessed ceiling lighting",
    body: [
      "If you are in Port Moody and looking for balayage, blonde work, or grey coverage, Megas is nearby in Coquitlam, on Pacific Street.",
      "Our master stylists have decades of experience, and every colour is mixed for the head in front of them rather than poured from a pre-made bowl.",
      "If this is your first colour appointment, book the complimentary consultation first. It costs nothing and lets us plan the colour before we start.",
    ],
    gettingHere: [
      ADDRESS_ROW,
      { label: "SkyTrain", detail: "Millennium Line from Moody Centre to Lincoln Station." },
      MAPS_ROW,
      PARKING_ROW,
      PARKING_WARNING_ROW,
    ],
    faqs: [
      {
        question: "How do I get to Megas from Port Moody?",
        answer: `Megas is on Pacific Street in Coquitlam, near Coquitlam Centre. By car, enter ${CONTACT.addressLine} in your maps app for a live route. By SkyTrain, take the Millennium Line from Moody Centre to Lincoln Station.`,
      },
      {
        question: "What can I book?",
        answer:
          "Women's and men's cuts, colour, balayage, blonde highlights, keratin smoothing, blow-dries, and treatments. The services page has the full list.",
      },
      {
        question: "Can I book a consultation before committing?",
        answer:
          "Yes. The consultation is listed as complimentary on our menu. Book it online in Phorest before your colour appointment.",
      },
    ],
  },
  {
    slug: "hair-salon-port-coquitlam",
    name: "Port Coquitlam",
    metaTitle: "Hair Salon Near Port Coquitlam | Cuts, Colour & Keratin | Megas",
    metaDescription:
      "Megas Hair Salon on Pacific St in Coquitlam, serving Port Coquitlam. Women's and men's cuts, colour, balayage, and keratin. Book online.",
    eyebrow: "Port Coquitlam · Megas in Coquitlam",
    headline: "From Port Coquitlam to Megas.",
    lede: "One salon, on Pacific Street in Coquitlam, near Coquitlam Centre.",
    image: "/images/photos/area-port-coquitlam.jpg",
    imageAlt: "Styling station, colour storage, and shampoo chairs inside Megas Hair Salon",
    body: [
      "Megas is on Pacific Street in Coquitlam, near Coquitlam Centre, in the city next to Port Coquitlam.",
      "A cut and a colour can be booked together: choose both services when you book in Phorest.",
      "Kids' cuts for ages 3 to 11 are on the price menu, so families can book through the same page.",
    ],
    gettingHere: [
      ADDRESS_ROW,
      MAPS_ROW,
      {
        label: "Transit",
        detail: "Use TransLink's trip planner for transit directions to Lincoln Station, near the salon.",
      },
      PARKING_ROW,
      PARKING_WARNING_ROW,
    ],
    faqs: [
      {
        question: "How do I get to Megas from Port Coquitlam?",
        answer: `Megas is at ${CONTACT.addressLine}, near Coquitlam Centre. Enter the address in your maps app for a live route and drive time from where you are.`,
      },
      {
        question: "Do you cut children's hair?",
        answer:
          "Yes. Kids' cuts for ages 3 to 11 are on our price menu. Book them in Phorest.",
      },
      {
        question: "Can I get a cut and colour in the same visit?",
        answer: "Yes. Select both services when booking online.",
      },
    ],
  },
  {
    slug: "turkish-hair-salon-vancouver",
    name: "Vancouver",
    metaTitle: "Turkish Hair Salon Near Vancouver | Master Colourists | Megas",
    metaDescription:
      "Turkish hair salon serving Greater Vancouver from Coquitlam. Founded in Istanbul in 1984 — balayage, blonde work, keratin. Book online.",
    eyebrow: "Vancouver · Turkish salon",
    headline: "A Turkish salon, forty years in.",
    lede: "Since 1984 in Türkiye, now in Coquitlam.",
    image: "/images/photos/area-vancouver.jpg",
    imageAlt: "Long blonde hair in soft waves, seen in profile",
    body: [
      "Megas began in Istanbul in 1984 and opened in Coquitlam in 2025. The way we work comes from there: a real consultation first, colour mixed for the head in front of us, and stylists who have been doing this for decades.",
      "Bülent has two established salons in Türkiye and a career in Canada, and Emir has worked across both countries. Gazi has been working since 1984.",
      "For the Turkish community across Greater Vancouver, and for anyone who wants that standard, we are in Coquitlam, on Pacific Street near Coquitlam Centre. Türkçe konuşuyoruz; hoş geldiniz.",
    ],
    gettingHere: [
      ADDRESS_ROW,
      {
        label: "SkyTrain",
        detail: "Expo Line to Commercial–Broadway, then the Millennium Line to Lincoln Station.",
      },
      MAPS_ROW,
      { label: "Language", detail: "Turkish and English are spoken in the salon." },
      PARKING_ROW,
      PARKING_WARNING_ROW,
    ],
    faqs: [
      {
        question: "Is there a Turkish hair salon near Vancouver?",
        answer:
          "Megas Hair Salon was founded in Istanbul in 1984 and has been in Coquitlam since 2025. Turkish is spoken in the salon.",
      },
      {
        question: "Do the stylists speak Turkish?",
        answer: "Yes. Bülent, Gazi, Emir, and Fulya all speak Turkish and English.",
      },
      {
        question: "How do I get to Megas from Vancouver?",
        answer: `By SkyTrain, take the Expo Line to Commercial–Broadway, then the Millennium Line to Lincoln Station. By car, enter ${CONTACT.addressLine} in your maps app for a live route and drive time.`,
      },
    ],
  },
];

export function getArea(slug: string): Area | undefined {
  return AREAS.find((area) => area.slug === slug);
}
