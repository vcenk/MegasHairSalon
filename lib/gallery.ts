/**
 * Curated service inspiration. Interior stock photography is deliberately
 * excluded so the page does not imply that another salon is Megas.
 */

export type GalleryItem = {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
  readonly category: "Colour" | "Cuts" | "Styling";
  /** Renders taller in the masonry grid. */
  readonly tall?: boolean;
};

export const GALLERY: readonly GalleryItem[] = [
  { src: "/images/photos/work-balayage-1.jpg", alt: "Hand-painted balayage with soft dimension, Megas Hair Salon Coquitlam", caption: "Balayage, hand-painted", category: "Colour", tall: true },
  { src: "/images/photos/work-blonde-1.jpg", alt: "Cool platinum blonde transformation, Megas Hair Salon Coquitlam", caption: "Platinum, cooled with a toner", category: "Colour" },
  { src: "/images/photos/work-cut-1.jpg", alt: "Precision cut with clean shape and movement, Megas Hair Salon Coquitlam", caption: "Precision cut", category: "Cuts", tall: true },
  { src: "/images/photos/work-blowout-1.jpg", alt: "Finished blowout with volume and shine, Megas Hair Salon Coquitlam", caption: "Signature blowout", category: "Styling" },
  { src: "/images/photos/work-colour-1.jpg", alt: "Custom-mixed rich brunette colour, Megas Hair Salon Coquitlam", caption: "Custom-mixed brunette", category: "Colour" },
  { src: "/images/photos/work-blonde-2.jpg", alt: "Lived-in blonde with deliberate root depth, Megas Hair Salon Coquitlam", caption: "Lived-in blonde", category: "Colour", tall: true },
  { src: "/images/photos/work-updo-1.jpg", alt: "Bridal updo pinned for the full event, Megas Hair Salon Coquitlam", caption: "Bridal updo", category: "Styling" },
  { src: "/images/photos/work-keratin-1.jpg", alt: "Glossy smooth finish after keratin smoothing, Megas Hair Salon Coquitlam", caption: "After keratin smoothing", category: "Styling" },
  { src: "/images/photos/work-cut-2.jpg", alt: "Men's precision haircut, Megas Hair Salon Coquitlam", caption: "Men's precision cut", category: "Cuts" },
  { src: "/images/photos/work-colour-2.jpg", alt: "Seamless root touch-up and grey coverage, Megas Hair Salon Coquitlam", caption: "Root touch-up", category: "Colour" },
  { src: "/images/photos/work-treatment-1.jpg", alt: "Restorative hair treatment at Megas Hair Salon, Coquitlam", caption: "Restorative ritual", category: "Styling" },
  { src: "/images/photos/work-balayage-2.jpg", alt: "Close-up of hand-painted balayage placement, Megas Hair Salon Coquitlam", caption: "Placement, up close", category: "Colour" },
];

export const GALLERY_CATEGORIES = ["All", "Colour", "Cuts", "Styling"] as const;
