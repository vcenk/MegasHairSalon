/**
 * ⚠️ PLACEHOLDER CONTENT.
 *
 * These quotes are illustrative. Before launch, replace them with real,
 * verbatim Google reviews (the salon has 146 at 4.8 stars). Never publish
 * invented testimonials — and never wire these into Review schema, which is
 * why lib/schema.ts only emits the aggregate rating.
 */

export type Review = {
  readonly quote: string;
  readonly author: string;
  readonly city: string;
  readonly service?: string;
};

export const FEATURED_REVIEWS: readonly Review[] = [
  {
    quote:
      "I had been looking for someone like Bill in Vancouver for years — truly, he has magic hands. He listened, he was honest about what my hair could take, and the colour is exactly what I asked for.",
    author: "Sarah M.",
    city: "Coquitlam",
    service: "Balayage",
  },
  {
    quote:
      "Gazi understood exactly what I wanted without me having to explain it twice. The cut still moves beautifully six weeks later, which has never happened to me before.",
    author: "Rachel B.",
    city: "Port Coquitlam",
    service: "Precision cut",
  },
  {
    quote:
      "The colour work is the best I have seen in the Tri-Cities. I will happily drive from Burnaby again — and I have already booked my mother in.",
    author: "Maya K.",
    city: "Burnaby",
    service: "Full colour",
  },
];

export const ALL_REVIEWS: readonly Review[] = [
  ...FEATURED_REVIEWS,
  {
    quote:
      "Emir's blowouts last for days. I came in before a wedding and it still looked good in the photos the next morning.",
    author: "Hannah W.",
    city: "Coquitlam",
    service: "Blowout",
  },
  {
    quote:
      "Fulya made me feel welcomed from the moment I walked in, and she follows up after every visit. That level of care is rare now.",
    author: "Tara S.",
    city: "Coquitlam",
  },
  {
    quote:
      "Honest, skilled, and unhurried. They told me my hair needed a treatment before more lightening instead of just taking my money. I respect that.",
    author: "Diana K.",
    city: "Burnaby",
    service: "Restorative treatment",
  },
  {
    quote:
      "The keratin treatment cut my morning routine in half. Through a Vancouver winter, that is worth every dollar.",
    author: "Olivia M.",
    city: "Port Moody",
    service: "Keratin smoothing",
  },
  {
    quote:
      "Finally, a salon where someone speaks Turkish and understands the kind of colour I grew up with. It feels like home.",
    author: "Aisha R.",
    city: "Vancouver",
  },
  {
    quote:
      "Patient and thorough — rare these days. My grey coverage is perfect and there is no line at the crown like I used to get.",
    author: "Margaret D.",
    city: "Port Moody",
    service: "Root touch-up",
  },
];
