/**
 * Gallery grid. Photos live in public/images/gallery/ — add a file there, then a
 * line here.
 *
 * ⚠️ These twenty images are AI-generated illustrations supplied for the demo,
 * not photographs of Megas's work or of the Coquitlam salon. The alt text and
 * captions therefore describe what each picture shows and make no claim that
 * Megas did it, and the gallery page says they are illustrative. Replace them
 * with real work (with each client's permission to publish) before launch —
 * see docs/LAUNCH-CHECKLIST.md.
 *
 * Portrait files (`tall: true`) render in a 3:4 frame, landscape ones in 4:3.
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
  { src: "/images/gallery/golden-blonde-balayage-back.jpg", alt: "Long hair with golden-blonde balayage in soft waves, seen from behind", caption: "Golden blonde balayage", category: "Colour", tall: true },
  { src: "/images/gallery/blunt-bob.jpg", alt: "Sleek, blunt, chin-length dark bob", caption: "Blunt bob", category: "Cuts", tall: true },
  { src: "/images/gallery/copper-red-waves.jpg", alt: "Long wavy hair in a rich copper-red colour", caption: "Copper-red waves", category: "Colour" },
  { src: "/images/gallery/bridal-half-up-waves.jpg", alt: "Long waves styled half-up with a hair vine, seen from behind", caption: "Half-up bridal waves", category: "Styling", tall: true },
  { src: "/images/gallery/polished-bob-scissors.jpg", alt: "Polished chin-length bob, with a comb and scissors at the edge of the frame", caption: "Polished bob", category: "Cuts" },
  { src: "/images/gallery/balayage-lived-in-back.jpg", alt: "Long wavy hair seen from behind, with soft brunette-to-caramel balayage", caption: "Lived-in balayage", category: "Colour", tall: true },
  { src: "/images/gallery/bouncy-blowout-chestnut.jpg", alt: "Long chestnut hair in bouncy, voluminous blow-dried waves", caption: "Bouncy blowout waves", category: "Styling" },
  { src: "/images/gallery/mens-side-swept-classic.jpg", alt: "Men's short side-swept brunette cut", caption: "Classic side-swept cut", category: "Cuts", tall: true },
  { src: "/images/gallery/platinum-lob.jpg", alt: "Platinum blonde lob with a shadowed root, styled in loose waves", caption: "Soft platinum lob", category: "Colour", tall: true },
  { src: "/images/gallery/glossy-straight-chestnut.jpg", alt: "Long, glossy, straight chestnut-brown hair", caption: "Glossy straight finish", category: "Styling" },
  { src: "/images/gallery/bridal-updo-textured.jpg", alt: "Low textured updo with a jewelled hair vine, seen from behind", caption: "Textured bridal updo", category: "Styling", tall: true },
  { src: "/images/gallery/copper-red-lob.jpg", alt: "Shoulder-length wavy hair in a copper-red shade", caption: "Copper-red lob", category: "Colour", tall: true },
  { src: "/images/gallery/balayage-money-piece.jpg", alt: "Dark brown waves with bright blonde face-framing balayage", caption: "Money-piece balayage", category: "Colour" },
  { src: "/images/gallery/glass-straight-brunette.jpg", alt: "Very long, glass-straight dark brunette hair, seen from the side", caption: "Glass-straight brunette", category: "Styling", tall: true },
  { src: "/images/gallery/layered-waves-brunette.jpg", alt: "Long dark brunette hair in voluminous layered waves", caption: "Voluminous layered waves", category: "Styling", tall: true },
  { src: "/images/gallery/mens-curly-fade.jpg", alt: "Men's short curly textured top with a skin fade", caption: "Textured crop with fade", category: "Cuts", tall: true },
  { src: "/images/gallery/sleek-straight-brunette.jpg", alt: "Long, sleek, straight dark brunette hair", caption: "Sleek straight length", category: "Styling" },
  { src: "/images/gallery/blonde-face-framing.jpg", alt: "Shoulder-length wavy hair with bright blonde face-framing highlights", caption: "Face-framing blonde", category: "Colour", tall: true },
  { src: "/images/gallery/mens-textured-quiff.jpg", alt: "Men's textured quiff with tapered sides", caption: "Textured quiff, tapered sides", category: "Cuts", tall: true },
  { src: "/images/gallery/layered-shoulder-cut.jpg", alt: "Layered shoulder-length brunette cut with soft movement", caption: "Layered shoulder-length cut", category: "Cuts", tall: true },
];

export const GALLERY_CATEGORIES = ["All", "Colour", "Cuts", "Styling"] as const;
