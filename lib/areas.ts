/**
 * Local-SEO landing pages for the neighbourhoods Megas draws from.
 *
 * These describe one salon serving several communities — they are not separate
 * locations, and the copy must never imply otherwise.
 */

import type { Faq } from "./services";

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

export const AREAS: readonly Area[] = [
  {
    slug: "hair-salon-coquitlam",
    name: "Coquitlam",
    metaTitle: "Hair Salon in Coquitlam | Master Colourists Since 1984 | Megas",
    metaDescription:
      "Megas Hair Salon on Pacific St in Coquitlam. Balayage, blonde specialists, precision cuts, and keratin — by stylists with 20–40 years' experience. Book online.",
    eyebrow: "Coquitlam · Home salon",
    headline: "Your hair salon in Coquitlam.",
    lede: "On Pacific Street in Burquitlam, minutes from the SkyTrain and the whole Tri-Cities.",
    image: "/images/photos/area-coquitlam.jpg",
    imageAlt: "Megas Hair Salon on Pacific Street in Coquitlam, British Columbia",
    body: [
      "Megas is a Coquitlam salon by address and by temperament. We are on Pacific Street, in the stretch of Burquitlam that has grown up fast around the SkyTrain — and most of our chairs are filled by people who live within fifteen minutes of the door.",
      "What we brought here is not local, though. The salon started in Istanbul in 1984, and the standard it was built on — long consultations, colour mixed for the head in front of you, stylists who have been doing this for decades rather than seasons — came with it.",
      "For Coquitlam clients that means you do not have to drive to Vancouver for master-level colour work. Balayage, blonde correction, keratin smoothing, and precision cutting all happen here, at Tri-Cities prices and with parking you do not have to circle for.",
    ],
    gettingHere: [
      { label: "Address", detail: "150-1169 Pacific St, Coquitlam, BC V3B 0J1" },
      { label: "SkyTrain", detail: "Short walk from Burquitlam Station on the Evergreen Extension." },
      { label: "Driving", detail: "Minutes from Como Lake Ave and the North Road corridor." },
      { label: "Parking", detail: "Street and building parking available on Pacific St." },
    ],
    faqs: [
      {
        question: "Where exactly is Megas Hair Salon in Coquitlam?",
        answer:
          "We are at 150-1169 Pacific St, Coquitlam, BC V3B 0J1 — in Burquitlam, a short walk from Burquitlam SkyTrain Station. Call 778-858-0396 if you have trouble finding the entrance.",
      },
      {
        question: "What are your hours?",
        answer: "Monday to Saturday, 9:00 am to 6:00 pm. Closed Sundays.",
      },
      {
        question: "Do I need an appointment?",
        answer:
          "We strongly recommend booking — colour appointments in particular need blocked time. You can book online through our Phorest booking page at any hour, or call during opening hours.",
      },
    ],
  },
  {
    slug: "hair-salon-port-moody",
    name: "Port Moody",
    metaTitle: "Hair Salon Near Port Moody | Balayage & Colour | Megas Hair Salon",
    metaDescription:
      "Master colourists a short drive from Port Moody. Balayage from $350, highlights from $185, precision cuts from $60 at Megas Hair Salon in Coquitlam.",
    eyebrow: "Port Moody · 10 minutes away",
    headline: "A Port Moody drive worth making.",
    lede: "Ten minutes down the hill from Newport Village for colour work you would otherwise cross a bridge for.",
    image: "/images/photos/area-port-moody.jpg",
    imageAlt: "The route from Port Moody to Megas Hair Salon in Coquitlam",
    body: [
      "Port Moody clients make up a steady share of our chairs, and the reason is usually colour. Balayage, blonde correction, and grey coverage are specialist work, and the pool of colourists with thirty-plus years behind the chair is small anywhere in the Lower Mainland.",
      "The drive from Newport Village or Suter Brook is about ten minutes along Clarke and St Johns. From Heritage Mountain, allow fifteen. Either way it is shorter than the trip into Vancouver that a lot of people were making before they found us.",
      "If you are coming from Port Moody for a first colour appointment, book the complimentary consultation first. It is free, it takes twenty minutes, and it means the colour appointment itself is planned rather than improvised.",
    ],
    gettingHere: [
      { label: "Drive time", detail: "About 10 minutes from Newport Village and Suter Brook." },
      { label: "Route", detail: "St Johns St to Clarke Rd, then across to Pacific St." },
      { label: "SkyTrain", detail: "Moody Centre to Burquitlam is two stops on the Evergreen Extension." },
      { label: "Parking", detail: "Street and building parking on Pacific St." },
    ],
    faqs: [
      {
        question: "How far is Megas from Port Moody?",
        answer:
          "About ten minutes by car from Newport Village, or two SkyTrain stops from Moody Centre to Burquitlam followed by a short walk.",
      },
      {
        question: "Is it worth the drive from Port Moody for a haircut?",
        answer:
          "For a straightforward trim, that is your call. For colour — balayage, blonde work, correction, or grey coverage that has to look right — the experience level here is the reason people travel.",
      },
      {
        question: "Can I book a consultation before committing?",
        answer:
          "Yes, and it costs nothing. Book the complimentary consultation online, come in for twenty minutes, and leave with a plan and a firm price.",
      },
    ],
  },
  {
    slug: "hair-salon-port-coquitlam",
    name: "Port Coquitlam",
    metaTitle: "Hair Salon Near Port Coquitlam | Cuts, Colour & Keratin | Megas",
    metaDescription:
      "Megas Hair Salon serves Port Coquitlam from nearby Burquitlam. Cuts from $60, colour from $120, keratin from $300. Master stylists, easy parking. Book online.",
    eyebrow: "Port Coquitlam · 15 minutes away",
    headline: "PoCo's colour appointment.",
    lede: "Fifteen minutes west along Lougheed, with parking at the door.",
    image: "/images/photos/area-port-coquitlam.jpg",
    imageAlt: "The route from Port Coquitlam to Megas Hair Salon in Coquitlam",
    body: [
      "From downtown Port Coquitlam it is roughly fifteen minutes west along Lougheed Highway to our door on Pacific Street. No bridge, no downtown parking, no meter anxiety.",
      "PoCo clients tend to book cuts and colour together, and that suits us — a cut and a root retouch in one visit is the most efficient appointment in the salon, and it is how most of our regulars run their year.",
      "Families are a good part of that. Kids' cuts are $40 to $45 for ages three to eleven, and we book them alongside a parent's appointment where the schedule allows.",
    ],
    gettingHere: [
      { label: "Drive time", detail: "About 15 minutes from downtown Port Coquitlam." },
      { label: "Route", detail: "Lougheed Hwy west, then north to Pacific St in Burquitlam." },
      { label: "Transit", detail: "West Coast Express and SkyTrain both connect via Coquitlam Central." },
      { label: "Parking", detail: "Street and building parking on Pacific St." },
    ],
    faqs: [
      {
        question: "How long does it take to get there from Port Coquitlam?",
        answer:
          "About fifteen minutes by car from downtown PoCo along Lougheed Highway, outside rush hour.",
      },
      {
        question: "Do you cut children's hair?",
        answer:
          "Yes — $45 for girls and $40 for boys, ages three to eleven. Book it next to your own appointment and we will try to run them back to back.",
      },
      {
        question: "Can I get a cut and colour in the same visit?",
        answer:
          "Yes, and it is the most common booking we take. Select both services when booking online so the right amount of time is blocked.",
      },
    ],
  },
  {
    slug: "turkish-hair-salon-vancouver",
    name: "Vancouver",
    metaTitle: "Turkish Hair Salon Near Vancouver | Istanbul-Trained Since 1984 | Megas",
    metaDescription:
      "Turkish hair salon serving Greater Vancouver from Coquitlam. Istanbul-trained master colourists since 1984 — balayage, blonde work, keratin. Book online.",
    eyebrow: "Vancouver · Turkish salon",
    headline: "A Turkish salon, forty years in.",
    lede: "Istanbul training and Istanbul standards, twenty-five minutes east of downtown Vancouver.",
    image: "/images/photos/area-vancouver.jpg",
    imageAlt: "Megas Hair Salon — a Turkish hair salon serving Greater Vancouver from Coquitlam",
    body: [
      "If you have had your hair done in Istanbul, you know the difference is not a technique — it is a set of assumptions. That the consultation matters. That colour gets mixed for your head, not poured from a pre-made bowl. That a stylist with thirty years of experience is normal rather than remarkable.",
      "Megas has been operating under those assumptions since 1984, first in Istanbul and, since 2025, in Coquitlam. Bülent and Gazi both trained and built careers in Türkiye before bringing the salon here; Emir has worked across both countries.",
      "For the Turkish community across Greater Vancouver — and for anyone else who wants that standard — we are about twenty-five minutes east of downtown, straight out on Highway 1 or two transfers on SkyTrain. Türkçe konuşuyoruz; hoş geldiniz.",
    ],
    gettingHere: [
      { label: "Drive time", detail: "About 25–30 minutes from downtown Vancouver via Highway 1." },
      { label: "SkyTrain", detail: "Expo to Millennium Line, then the Evergreen Extension to Burquitlam." },
      { label: "Language", detail: "Turkish and English spoken in the salon." },
      { label: "Parking", detail: "Free of the downtown parking problem — street and building parking on site." },
    ],
    faqs: [
      {
        question: "Is there a Turkish hair salon near Vancouver?",
        answer:
          "Megas Hair Salon in Coquitlam is Turkish-owned and Istanbul-founded, operating since 1984. It is about twenty-five minutes east of downtown Vancouver, and Turkish is spoken in the salon.",
      },
      {
        question: "Do the stylists speak Turkish?",
        answer: "Yes. Bülent, Gazi, Emir, and Fulya all speak Turkish and English.",
      },
      {
        question: "Is it worth coming from Vancouver?",
        answer:
          "For colour, most of our Vancouver clients think so — and they usually save money doing it, since Tri-Cities pricing runs below downtown for the same level of experience.",
      },
    ],
  },
];

export function getArea(slug: string): Area | undefined {
  return AREAS.find((area) => area.slug === slug);
}
