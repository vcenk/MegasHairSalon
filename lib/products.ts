/**
 * In-salon retail.
 *
 * The salon sells the professional lines it uses on the floor. Aveda and Wella
 * Professionals are named here as product partners at the client's direction.
 *
 * There are no prices for the same reason — retail pricing was never supplied.
 * The page is written to send people to their stylist or the phone, which is
 * also how the salon actually sells: a recommendation at the end of a service,
 * not a checkout.
 */

export type ProductCategory = {
  readonly slug: string;
  readonly name: string;
  readonly summary: string;
  /** What this solves, in the client's own words rather than marketing copy. */
  readonly forYouIf: readonly string[];
  readonly image: string;
  readonly imageAlt: string;
};

export type ProductPartner = {
  readonly name: string;
  readonly focus: string;
  readonly description: string;
  readonly strengths: readonly string[];
};

export const PRODUCT_PARTNERS: readonly ProductPartner[] = [
  {
    name: "Aveda",
    focus: "Plant-powered care",
    description:
      "Our choice for thoughtful hair and scalp care rooted in high-performance, plant-derived technology. From Botanical Repair to Nutriplenish and Scalp Solutions, Aveda helps us build routines around strength, hydration, and a healthier-feeling scalp.",
    strengths: ["Bond-building repair", "Deep hydration", "Scalp care"],
  },
  {
    name: "Wella Professionals",
    focus: "Colour expertise",
    description:
      "A professional colour authority trusted for precision, tone, and luminous results. We work with Wella Professionals across colour, repair, and styling so the finish created in the salon can be supported with considered care at home.",
    strengths: ["Professional colour", "Tone & vibrancy", "Repair & styling"],
  },
] as const;

export const RETAIL_BRANDS = PRODUCT_PARTNERS.map((partner) => partner.name);

export const PRODUCT_CATEGORIES: readonly ProductCategory[] = [
  {
    slug: "colour-care",
    name: "Colour care",
    summary:
      "Colour-safe shampoo and conditioner, plus toning care for blondes. With professional options from Aveda and Wella, this is the category that helps your colour hold onto its tone, shine, and fresh-from-the-salon finish.",
    forYouIf: [
      "You have highlights, balayage, or a full colour",
      "Your blonde is turning brassy between appointments",
      "Your colour fades faster than it should",
    ],
    image: "/images/photos/work-blonde-2.jpg",
    imageAlt: "Colour-care products for lightened hair at Megas Hair Salon, Coquitlam",
  },
  {
    slug: "repair",
    name: "Masks & repair",
    summary:
      "Weekly masks, bond-building care, and leave-in treatments from our professional partners. Think of it as the at-home continuation of the care your stylist begins in the chair.",
    forYouIf: [
      "Your ends feel dry or your hair has lost elasticity",
      "You are lightening and want to keep lightening",
      "You have had a keratin or botox treatment to protect",
    ],
    image: "/images/photos/work-treatment-1.jpg",
    imageAlt: "Professional masks and repair treatments at Megas Hair Salon, Coquitlam",
  },
  {
    slug: "scalp",
    name: "Scalp",
    summary:
      "Scalp care is the most under-rated shelf in any salon. A lot of what people read as bad hair starts at the root, and it is usually the easiest thing to fix.",
    forYouIf: [
      "Your scalp is itchy, tight, or flaking",
      "Your roots go oily within a day",
      "You have had a scalp treatment with us and want to keep it going",
    ],
    image: "/images/photos/journal-keratin.jpg",
    imageAlt: "Professional scalp care at Megas Hair Salon, Coquitlam",
  },
  {
    slug: "styling",
    name: "Styling & heat protection",
    summary:
      "Heat protection, volume, hold, and finish. If you only ever buy one styling product from us, buy the heat protectant — it is the cheapest insurance your hair will get.",
    forYouIf: [
      "You use a dryer, iron, or wand more than twice a week",
      "Your blowout goes flat by lunchtime",
      "You want to recreate what your stylist did, at home",
    ],
    image: "/images/photos/work-blowout-1.jpg",
    imageAlt: "Styling and heat protection products at Megas Hair Salon, Coquitlam",
  },
];
