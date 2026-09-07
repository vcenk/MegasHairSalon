/**
 * Gallery grid. Every entry is a placeholder until the salon's photo shoot
 * lands (construction finishes ~Sept 2026) — swap `src` in place, keep the alt
 * text, and the layout will not move.
 */

export type GalleryItem = {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
  readonly category: "Colour" | "Cuts" | "Styling" | "The salon";
  /** Renders taller in the masonry grid. */
  readonly tall?: boolean;
};

export const GALLERY: readonly GalleryItem[] = [
  { src: "/images/ph/work-balayage-1.svg", alt: "Hand-painted balayage with soft dimension, Megas Hair Salon Coquitlam", caption: "Balayage, hand-painted", category: "Colour", tall: true },
  { src: "/images/ph/salon-1.svg", alt: "Styling floor at Megas Hair Salon, Coquitlam", caption: "The styling floor", category: "The salon" },
  { src: "/images/ph/work-blonde-1.svg", alt: "Cool platinum blonde transformation, Megas Hair Salon Coquitlam", caption: "Platinum, cooled with a toner", category: "Colour" },
  { src: "/images/ph/work-cut-1.svg", alt: "Precision cut with clean shape and movement, Megas Hair Salon Coquitlam", caption: "Precision cut", category: "Cuts", tall: true },
  { src: "/images/ph/work-blowout-1.svg", alt: "Finished blowout with volume and shine, Megas Hair Salon Coquitlam", caption: "Signature blowout", category: "Styling" },
  { src: "/images/ph/work-colour-1.svg", alt: "Custom-mixed rich brunette colour, Megas Hair Salon Coquitlam", caption: "Custom-mixed brunette", category: "Colour" },
  { src: "/images/ph/salon-2.svg", alt: "Styling chair and mirror detail at Megas Hair Salon, Coquitlam", caption: "Chair and mirror", category: "The salon" },
  { src: "/images/ph/work-blonde-2.svg", alt: "Lived-in blonde with deliberate root depth, Megas Hair Salon Coquitlam", caption: "Lived-in blonde", category: "Colour", tall: true },
  { src: "/images/ph/work-updo-1.svg", alt: "Bridal updo pinned for the full event, Megas Hair Salon Coquitlam", caption: "Bridal updo", category: "Styling" },
  { src: "/images/ph/work-keratin-1.svg", alt: "Glossy smooth finish after keratin smoothing, Megas Hair Salon Coquitlam", caption: "After keratin smoothing", category: "Styling" },
  { src: "/images/ph/work-cut-2.svg", alt: "Men's precision haircut, Megas Hair Salon Coquitlam", caption: "Men's precision cut", category: "Cuts" },
  { src: "/images/ph/salon-3.svg", alt: "Wash station and product shelf at Megas Hair Salon, Coquitlam", caption: "Wash station", category: "The salon", tall: true },
  { src: "/images/ph/work-colour-2.svg", alt: "Seamless root touch-up and grey coverage, Megas Hair Salon Coquitlam", caption: "Root touch-up", category: "Colour" },
  { src: "/images/ph/work-treatment-1.svg", alt: "Aveda restorative treatment at Megas Hair Salon, Coquitlam", caption: "Restorative ritual", category: "The salon" },
  { src: "/images/ph/work-balayage-2.svg", alt: "Close-up of hand-painted balayage placement, Megas Hair Salon Coquitlam", caption: "Placement, up close", category: "Colour" },
  { src: "/images/ph/salon-4.svg", alt: "Tools and materials detail at Megas Hair Salon, Coquitlam", caption: "Tools of the trade", category: "The salon" },
];

export const GALLERY_CATEGORIES = ["All", "Colour", "Cuts", "Styling", "The salon"] as const;
