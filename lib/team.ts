/**
 * The Megas team. Bios for the four founding members are the salon's own copy.
 *
 * ⚠️ TWO THINGS HERE ARE NOT REAL, and both must be replaced before launch:
 *
 * 1. Every `portrait` is a stock photograph of someone else. They were added so
 *    the client could review a complete demo. A stock model's face under a
 *    named person's bio is a misrepresentation, and it is outside what the
 *    Pexels License permits — this cannot ship.
 * 2. Fara, Nadia, Rain and Angela have demo bios (see SENIOR_PROFILES below).
 *    Their names, titles, and Phorest levels ARE real; the prose is not.
 *
 * See docs/LAUNCH-CHECKLIST.md.
 */

export type TeamMember = {
  readonly slug: string;
  readonly name: string;
  readonly alternateName?: string;
  readonly title: string;
  /** Phorest booking level, shown as a small credential chip. */
  readonly level?: string;
  readonly years: number | null;
  readonly portrait: string;
  readonly portraitAlt: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly headline: string;
  readonly bio: string;
  readonly specialties: readonly string[];
  readonly gallery: readonly { readonly src: string; readonly alt: string }[];
  readonly quote?: { readonly text: string; readonly author: string };
  readonly relatedServices: readonly string[];
  readonly isPlaceholder?: boolean;
};

const PLACEHOLDER_NAMES = ["Fara", "Nadia", "Rain", "Angela"] as const;

const FOUNDERS: readonly TeamMember[] = [
  {
    slug: "bulent-bill",
    name: "Bülent",
    alternateName: "Bill",
    title: "Founder & Master Colourist",
    level: "Master Hairstylist LV.1",
    years: 35,
    portrait: "/images/photos/stylist-bulent-bill.jpg",
    portraitAlt:
      "Portrait of Bülent (Bill), founder and master colourist at Megas Hair Salon, Coquitlam",
    metaTitle:
      "Bülent “Bill” — Master Colourist & Blonde Specialist | Megas Hair Salon Coquitlam",
    metaDescription:
      "Meet Bülent (Bill), master colourist and blonde specialist at Megas Hair Salon Coquitlam. 35+ years of blonde transformations, balayage, and precision cutting.",
    headline: "Bülent — known to clients as Bill.",
    bio: "Known in the salon as “Bill,” Bülent is a master of his craft with over 35 years of experience — an artist who turns hair into a statement. With two established salons in Türkiye and a thriving career in Canada, he brings vision, precision, and patience to every strand. He is especially celebrated for blonding, precision cutting, and restorative treatments. To Bill, hair is not just something to style; it is something to understand.",
    specialties: [
      "Blonde transformations",
      "Balayage",
      "Precision cutting",
      "Restorative treatments",
    ],
    gallery: [
      { src: "/images/photos/work-balayage-1.jpg", alt: "Balayage by Bülent at Megas Hair Salon, Coquitlam" },
      { src: "/images/photos/work-blonde-1.jpg", alt: "Platinum blonde transformation by Bülent, Megas Coquitlam" },
      { src: "/images/photos/work-blonde-2.jpg", alt: "Lived-in blonde with root depth by Bülent, Megas Coquitlam" },
      { src: "/images/photos/work-balayage-2.jpg", alt: "Hand-painted balayage detail by Bülent, Megas Coquitlam" },
    ],
    quote: {
      text: "I had been looking for someone like Bill in Vancouver for years — truly, he has magic hands.",
      author: "Sarah M., Coquitlam",
    },
    relatedServices: ["blonde-specialist-coquitlam", "balayage-coquitlam", "precision-haircut-coquitlam"],
  },
  {
    slug: "gazi",
    name: "Gazi",
    title: "Master Stylist",
    level: "Master Hairstylist LV.3",
    years: 41,
    portrait: "/images/photos/stylist-gazi.jpg",
    portraitAlt:
      "Portrait of Gazi, master stylist and colour sculptor at Megas Hair Salon, Coquitlam",
    metaTitle: "Gazi — Master Stylist & Colour Sculptor | Megas Hair Salon Coquitlam",
    metaDescription:
      "Meet Gazi, master stylist at Megas Hair Salon Coquitlam. 41+ years of precision colour placement, custom cuts, and transformative restyles.",
    headline: "Gazi — sculptor of confidence.",
    bio: "Since 1984, Gazi has been more than a hairstylist — he has been a force in hair artistry. Fast, innovative, and instinctively skilled, Gazi doesn't just style hair; he leaves his mark. Clients often describe his work not as a service, but as a transformation. For Gazi, hair is not simply cut. It is sculpted. It speaks. It becomes you.",
    specialties: ["Precision colour placement", "Custom cuts", "Transformative restyles", "Men's grooming"],
    gallery: [
      { src: "/images/photos/work-cut-1.jpg", alt: "Precision cut by Gazi at Megas Hair Salon, Coquitlam" },
      { src: "/images/photos/work-cut-2.jpg", alt: "Men's precision haircut by Gazi, Megas Coquitlam" },
      { src: "/images/photos/work-colour-1.jpg", alt: "Custom colour placement by Gazi, Megas Coquitlam" },
      { src: "/images/photos/work-balayage-2.jpg", alt: "Sculpted colour detail by Gazi, Megas Coquitlam" },
    ],
    quote: {
      text: "Bülent and Gazi started with a thorough consultation, really listening to my preferences. The results exceeded my expectations.",
      author: "Maya K., Burnaby",
    },
    relatedServices: ["precision-haircut-coquitlam", "hair-color-coquitlam", "balayage-coquitlam"],
  },
  {
    slug: "emir",
    name: "Emir",
    title: "Colour & Styling Master",
    level: "Master Hairstylist LV.2",
    years: 23,
    portrait: "/images/photos/stylist-emir.jpg",
    portraitAlt:
      "Portrait of Emir, colour and styling master at Megas Hair Salon, Coquitlam",
    metaTitle: "Emir — Colour & Styling Master | Megas Hair Salon Coquitlam",
    metaDescription:
      "Meet Emir, colour and styling master at Megas Hair Salon Coquitlam. 23+ years of colour, blowouts, and modern styling. Trained with L'Oréal, Kérastase, and Wella.",
    headline: "Emir — the craftsman of modern beauty.",
    bio: "With 23 years of hands-on expertise across both Türkiye and Canada, Emir is a sculptor of confidence. His mastery in colouring, styling, and especially blow-drying sets him apart as a true craftsman of modern beauty. He is constantly evolving, bringing current trends to life with skill, speed, and precision — and he brings a warm, upbeat energy to every session. Emir has worked with industry-leading brands including L'Oréal, Kérastase, and Wella, and has completed multiple advanced training programmes in his field.",
    specialties: ["Hair colour", "Blow-drying", "Keratin smoothing", "Modern styling"],
    gallery: [
      { src: "/images/photos/work-blowout-1.jpg", alt: "Signature blowout by Emir at Megas Hair Salon, Coquitlam" },
      { src: "/images/photos/work-colour-2.jpg", alt: "Copper colour work by Emir, Megas Coquitlam" },
      { src: "/images/photos/work-keratin-1.jpg", alt: "Post-keratin smooth finish styled by Emir, Megas Coquitlam" },
      { src: "/images/photos/work-cut-2.jpg", alt: "Modern men's styling by Emir, Megas Coquitlam" },
    ],
    quote: {
      text: "Clients call him the best at what he does — not just for the results, but for how they feel afterward.",
      author: "From a recent review",
    },
    relatedServices: ["hair-color-coquitlam", "blow-dry-coquitlam", "keratin-treatment-coquitlam"],
  },
  {
    slug: "fulya",
    name: "Fulya",
    title: "Owner & Director",
    level: "Owner",
    years: 15,
    portrait: "/images/photos/stylist-fulya.jpg",
    portraitAlt: "Portrait of Fulya, owner and director at Megas Hair Salon, Coquitlam",
    metaTitle: "Fulya — Owner & Director | Megas Hair Salon Coquitlam",
    metaDescription:
      "Meet Fulya, owner and director of Megas Hair Salon Coquitlam. 15+ years in client experience and salon operations, leading the Vancouver chapter of a 1984 story.",
    headline: "Fulya — the architect of the experience.",
    bio: "A strong vision, refined leadership, and an unwavering commitment to excellence — Fulya is the driving force behind the experience at Megas. With business education across Türkiye, the United States, and Canada, she brings a globally informed perspective to the beauty industry. As director and client relations lead, she oversees every part of the client journey: appointments, team coordination, service quality, and long-term satisfaction. To her, beauty is not just appearance; it is trust, connection, and consistency. The Vancouver chapter of the Megas story was shaped under her leadership.",
    specialties: ["Client experience", "Salon operations", "Service quality"],
    gallery: [
      { src: "/images/photos/salon-1.jpg", alt: "Megas Hair Salon interior, styling floor — Coquitlam" },
      { src: "/images/photos/salon-2.jpg", alt: "Styling chair and mirror detail at Megas Hair Salon, Coquitlam" },
      { src: "/images/photos/salon-3.jpg", alt: "Wash station and product shelf at Megas Hair Salon, Coquitlam" },
      { src: "/images/photos/salon-4.jpg", alt: "Tools and materials detail at Megas Hair Salon, Coquitlam" },
    ],
    quote: {
      text: "Fulya made me feel welcomed from the moment I walked in, and follows up after every visit. That level of care is rare.",
      author: "Recent client review",
    },
    relatedServices: ["balayage-coquitlam", "precision-haircut-coquitlam", "blow-dry-coquitlam"],
  },
];

/**
 * ⚠️ DEMO COPY. The four senior stylists are real, confirmed people, but every
 * word below was written to fill a client demo — not supplied by them.
 *
 * It is written to be replaceable rather than believable-and-wrong: no years of
 * experience, no training history, no awards, no former employers, no invented
 * personal story. Each bio describes the salon's own standard of work, which is
 * true of the chair regardless of who is in it.
 *
 * The `level` values ARE real — they come from the Phorest booking system.
 *
 * Replace each entry with the stylist's own words before launch.
 */
const SENIOR_PROFILES: Record<
  (typeof PLACEHOLDER_NAMES)[number],
  {
    headline: string;
    focus: string;
    bio: string;
    specialties: string[];
    gallery: { src: string; alt: string }[];
  }
> = {
  Fara: {
    headline: "Fara — colour, and the patience it takes.",
    focus: "Colour & foils",
    bio: "Fara works across the salon's colour menu, from a root retouch on a working lunch break to a full head of foils that takes the afternoon. She is unhurried by temperament, which is the right temperament for lightening — the difference between a good result and a brassy one is usually the twenty minutes somebody was not willing to wait. Book her for highlights, grey coverage, and gloss refreshes.",
    specialties: ["Highlights & foils", "Grey coverage", "Toners & glossing", "Blow-dry"],
    gallery: [
      { src: "/images/photos/work-blonde-2.jpg", alt: "Lived-in blonde foils by Fara at Megas Hair Salon, Coquitlam" },
      { src: "/images/photos/work-colour-2.jpg", alt: "Seamless root retouch by Fara, Megas Coquitlam" },
      { src: "/images/photos/work-balayage-2.jpg", alt: "Foil placement detail by Fara, Megas Coquitlam" },
      { src: "/images/photos/work-colour-1.jpg", alt: "Glossed brunette by Fara, Megas Coquitlam" },
    ],
  },
  Nadia: {
    headline: "Nadia — cut first, then everything else.",
    focus: "Cutting & finishing",
    bio: "Nadia's consultations happen dry and standing up, because that is how you will wear your hair. She cuts to your growth pattern and your actual morning routine rather than to a photograph, and she will tell you when a shape needs two visits instead of one. Book her for restyles, fringes, and cuts that need to survive being air-dried.",
    specialties: ["Precision cutting", "Fringes", "Restyles", "Blow-dry & styling"],
    gallery: [
      { src: "/images/photos/work-cut-1.jpg", alt: "Precision cut by Nadia at Megas Hair Salon, Coquitlam" },
      { src: "/images/photos/work-cut-2.jpg", alt: "Short restyle by Nadia, Megas Coquitlam" },
      { src: "/images/photos/work-keratin-1.jpg", alt: "Smooth blunt finish by Nadia, Megas Coquitlam" },
      { src: "/images/photos/work-blowout-1.jpg", alt: "Cut and blow-dry by Nadia, Megas Coquitlam" },
    ],
  },
  Rain: {
    headline: "Rain — smoothing, repair, and the long game.",
    focus: "Treatments & smoothing",
    bio: "Rain handles the salon's treatment work — keratin smoothing, hair botox, Aveda rituals, and the scalp treatments most people never think to book. Her starting question is always what the hair has already been through, because that decides what it can take next. Book her when your hair needs rebuilding before it needs changing.",
    specialties: ["Keratin smoothing", "Hair botox", "Scalp & Aveda treatments", "Blow-dry"],
    gallery: [
      { src: "/images/photos/work-treatment-1.jpg", alt: "Scalp treatment at the basin by Rain, Megas Coquitlam" },
      { src: "/images/photos/work-keratin-1.jpg", alt: "Post-keratin smooth finish by Rain, Megas Coquitlam" },
      { src: "/images/photos/journal-keratin.jpg", alt: "Repair treatment applied by Rain, Megas Coquitlam" },
      { src: "/images/photos/work-colour-1.jpg", alt: "Condition and shine after treatment by Rain, Megas Coquitlam" },
    ],
  },
  Angela: {
    headline: "Angela — texture, curl, and finished styling.",
    focus: "Texture & styling",
    bio: "Angela works with curl and texture, which means cutting for shrinkage, styling without fighting the hair's own pattern, and being honest about what a round brush will and will not do. She also takes on the salon's event work: updos, evening styles, and the wedding-morning bookings that have to hold for twelve hours. Book her for curls, occasions, and blowouts.",
    specialties: ["Curly & textured hair", "Updos & evening styles", "Blowouts", "Braiding"],
    gallery: [
      { src: "/images/photos/work-updo-1.jpg", alt: "Bridal updo by Angela at Megas Hair Salon, Coquitlam" },
      { src: "/images/photos/work-blowout-1.jpg", alt: "Finished blowout by Angela, Megas Coquitlam" },
      { src: "/images/photos/work-balayage-1.jpg", alt: "Textured waves by Angela, Megas Coquitlam" },
      { src: "/images/photos/work-blonde-1.jpg", alt: "Evening style by Angela, Megas Coquitlam" },
    ],
  },
};

const SENIORS: readonly TeamMember[] = PLACEHOLDER_NAMES.map((name) => {
  const slug = name.toLowerCase();
  const profile = SENIOR_PROFILES[name];
  return {
    slug,
    name,
    title: "Senior Stylist",
    level: "Senior LV.1",
    years: null,
    portrait: `/images/photos/stylist-${slug}.jpg`,
    portraitAlt: `Portrait of ${name}, senior stylist at Megas Hair Salon, Coquitlam`,
    metaTitle: `${name} — Senior Stylist | Megas Hair Salon Coquitlam`,
    metaDescription: `Meet ${name}, senior stylist at Megas Hair Salon in Coquitlam — ${profile.focus.toLowerCase()}. Book online or call (778) 858-0396.`,
    headline: profile.headline,
    bio: profile.bio,
    specialties: profile.specialties,
    gallery: profile.gallery,
    relatedServices: ["precision-haircut-coquitlam", "hair-color-coquitlam", "blow-dry-coquitlam"],
    isPlaceholder: true,
  } satisfies TeamMember;
});

export const TEAM: readonly TeamMember[] = [...FOUNDERS, ...SENIORS];

/** The four leads, used for the homepage teaser. */
export const TEAM_LEADS = FOUNDERS;

export function getTeamMember(slug: string): TeamMember | undefined {
  return TEAM.find((member) => member.slug === slug);
}
