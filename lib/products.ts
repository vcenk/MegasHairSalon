/**
 * In-salon retail.
 *
 * The salon sells the professional lines it uses on the floor. **Aveda is the
 * only brand named here**, and only because it appears on the live Phorest
 * service menu (Aveda Botanical, Nutriplenish, and Scalp treatments). Any other
 * brand has to come from the client before it goes on this page.
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

export const RETAIL_BRANDS = ["Aveda"] as const;

export const PRODUCT_CATEGORIES: readonly ProductCategory[] = [
  {
    slug: "colour-care",
    name: "Colour care",
    summary:
      "Sulphate-free shampoo and conditioner, plus purple toning for blondes. This is the category that decides how long your colour looks like it did the day you left.",
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
      "Weekly masks and leave-in treatments, including the Aveda lines we use at the basin. The at-home version of the treatment your stylist does in the chair.",
    forYouIf: [
      "Your ends feel dry or your hair has lost elasticity",
      "You are lightening and want to keep lightening",
      "You have had a keratin or botox treatment to protect",
    ],
    image: "/images/photos/work-treatment-1.jpg",
    imageAlt: "Aveda masks and repair treatments retailed at Megas Hair Salon, Coquitlam",
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
    imageAlt: "Aveda scalp care products at Megas Hair Salon, Coquitlam",
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
