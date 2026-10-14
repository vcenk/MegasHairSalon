/** The Megas team. Profile biographies and portraits are salon-supplied. */

export type TeamMember = {
  readonly slug: string;
  readonly name: string;
  readonly alternateName?: string;
  readonly title: string;
  /** Phorest booking level, shown as a small credential chip. */
  readonly level?: string;
  /** Direct Phorest calendar for this team member. */
  readonly bookingUrl: string;
  readonly years: number | null;
  readonly portrait: string;
  readonly portraitAlt: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly headline: string;
  readonly bio: string;
  readonly languages: readonly string[];
  readonly specialties: readonly string[];
  readonly gallery: readonly { readonly src: string; readonly alt: string }[];
  readonly quote?: { readonly text: string; readonly author: string };
  readonly relatedServices: readonly string[];
  readonly isPlaceholder?: boolean;
};

const PLACEHOLDER_NAMES = ["Fara", "Nadia", "Rain", "Sima"] as const;

const FOUNDERS: readonly TeamMember[] = [
  {
    slug: "bulent-bill",
    name: "Bülent",
    alternateName: "Bill",
    title: "Master Colourist",
    level: "Master Hairstylist LV.1",
    bookingUrl: "https://www.phorest.com/salon/megashairsalon/book/services?staffId=vFh7ZCDCExWJ3YUSVJx-Ew",
    years: 35,
    portrait: "/images/photos/stylist-bulent-bill.jpg",
    portraitAlt:
      "Portrait of Bülent (Bill), master colourist at Megas Hair Salon, Coquitlam",
    metaTitle:
      "Bülent “Bill” — Master Colourist & Blonde Specialist | Megas Hair Salon Coquitlam",
    metaDescription:
      "Meet Bülent (Bill), master colourist and blonde specialist at Megas Hair Salon Coquitlam. 35+ years of blonde transformations, balayage, and precision cutting.",
    headline: "Bülent — known to clients as Bill.",
    bio: "Known in the salon as “Bill,” Bülent is a master of his craft with over 35 years of experience — an artist who turns hair into a statement. With two established salons in Türkiye and a thriving career in Canada, he brings vision, precision, and patience to every strand. He is especially celebrated for blonding, precision cutting, and restorative treatments. To Bill, hair is not just something to style; it is something to understand.",
    languages: ["Turkish", "English"],
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
    bookingUrl: "https://www.phorest.com/salon/megashairsalon/book/services?staffId=mjvZaVl8H56e9DUL6IcA5A",
    years: 41,
    portrait: "/images/photos/stylist-gazi.jpg",
    portraitAlt:
      "Portrait of Gazi, master stylist and colour sculptor at Megas Hair Salon, Coquitlam",
    metaTitle: "Gazi — Master Stylist | Megas Hair Salon Coquitlam",
    metaDescription:
      "Meet Gazi, master stylist at Megas Hair Salon Coquitlam. 41+ years of precision colour placement, custom cuts, and transformative restyles.",
    headline: "Gazi — sculptor of confidence.",
    bio: "Since 1984, Gazi has been more than a hairstylist — he has been a force in hair artistry. Fast, innovative, and instinctively skilled, Gazi doesn't just style hair; he leaves his mark. Clients often describe his work not as a service, but as a transformation. For Gazi, hair is not simply cut. It is sculpted. It speaks. It becomes you.",
    languages: ["Turkish", "Arabic", "English"],
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
    bookingUrl: "https://www.phorest.com/salon/megashairsalon/book/services?staffId=2_LtH8tLjirvz0b4xFbRHA",
    years: 23,
    portrait: "/images/photos/stylist-emir.jpg",
    portraitAlt:
      "Portrait of Emir, colour and styling master at Megas Hair Salon, Coquitlam",
    metaTitle: "Emir — Colour & Styling Master | Megas Hair Salon Coquitlam",
    metaDescription:
      "Meet Emir, colour and styling master at Megas Hair Salon Coquitlam. 23+ years of colour, blowouts, and modern styling. Trained with L'Oréal, Kérastase, and Wella.",
    headline: "Emir — the craftsman of modern beauty.",
    bio: "With 23 years of hands-on expertise across both Türkiye and Canada, Emir is a sculptor of confidence. His mastery in colouring, styling, and especially blow-drying sets him apart as a true craftsman of modern beauty. He is constantly evolving, bringing current trends to life with skill, speed, and precision — and he brings a warm, upbeat energy to every session. Emir has worked with industry-leading brands including L'Oréal, Kérastase, and Wella, and has completed multiple advanced training programmes in his field.",
    languages: ["Turkish", "English"],
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
    title: "Director",
    level: "Director",
    bookingUrl: "https://www.phorest.com/salon/megashairsalon/book/services?staffId=6DNwbV7mw8XHqClweJ-Ybw",
    years: 15,
    portrait: "/images/photos/stylist-fulya.jpg",
    portraitAlt: "Portrait of Fulya, director at Megas Hair Salon, Coquitlam",
    metaTitle: "Fulya — Director | Megas Hair Salon Coquitlam",
    metaDescription:
      "Meet Fulya, director of Megas Hair Salon Coquitlam. 15+ years in client experience and salon operations, leading the Vancouver chapter of a 1984 story.",
    headline: "Fulya — the architect of the experience.",
    bio: "A strong vision, refined leadership, and an unwavering commitment to excellence — Fulya is the driving force behind the experience at Megas. With business education across Türkiye, the United States, and Canada, she brings a globally informed perspective to the beauty industry. As director and client relations lead, she oversees every part of the client journey: appointments, team coordination, service quality, and long-term satisfaction. To her, beauty is not just appearance; it is trust, connection, and consistency. The Vancouver chapter of the Megas story was shaped under her leadership.",
    languages: ["English", "Turkish"],
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

/** Senior stylist biographies are salon-supplied; level values come from Phorest. */
const SENIOR_PROFILES: Record<
  (typeof PLACEHOLDER_NAMES)[number],
  {
    headline: string;
    focus: string;
    bookingUrl: string;
    bio: string;
    languages: string[];
    specialties: string[];
    gallery: { src: string; alt: string }[];
  }
> = {
  Fara: {
    headline: "Fara — colour, and the patience it takes.",
    focus: "Colour & foils",
    bookingUrl: "https://www.phorest.com/salon/megashairsalon/book/services?staffId=eeE5Qh-GDv0WcVKeOZDtLg",
    bio: "Hello and welcome! I’m Fara, a passionate hair stylist with over 15 years of experience in precision hair cutting, custom coloring, and advanced hair reconstruction. Over the years, I have continuously updated my skills through specialized training to bring my clients the very best in modern trends and healthy hair care.\n\nI specialize in precision cuts, tailored coloring techniques, and transformative hair care treatments, including Keratin, Hair Botox, and restorative protein therapies. For me, hair styling is about listening to my clients, understanding their unique style, and crafting a personalized look that highlights their natural beauty while keeping their hair healthy and strong.\n\nWhat I love most about being a hairstylist is building genuine connections with my clients and seeing their confidence shine when they look in the mirror. I look forward to welcoming you to my chair and helping you achieve your dream hair!",
    languages: ["Persian", "English"],
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
    bookingUrl: "https://www.phorest.com/salon/megashairsalon/book/services?staffId=oQ4DvCiXMglO2uB5cyEzUQ",
    bio: "Welcome, I’m Nadia!\n\nTo me, exceptional hair care is a blend of artistry, technical precision, and dedicated hair health. With over 15 years of experience, I specialize in precision haircuts, custom color design including seamless balayage, dimensional highlights, and rich gray coverage as well as transformative hair therapies like Keratin smoothing and Hair Botox.\n\nBeyond aesthetic styling, my passion lies in restoring the strength and natural shine of your hair. Every appointment in my chair is a relaxed, personalized experience where I tailor a radiant look that fits effortlessly into your daily lifestyle.",
    languages: ["Persian", "English"],
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
    bookingUrl: "https://www.phorest.com/salon/megashairsalon/book/services?staffId=mpoJM4LU6M36g8tq842-ZQ",
    bio: "Hi, I’m Rain! With 10 years of experience in the hair industry, I specialize in women’s precision haircuts, short styles, long layers, men’s fades, perms for both men and women, and creative colouring techniques, including partial highlights, ombré, and balayage.\n\nWith formal training in hair cutting and colouring in China, I bring strong technical skills, patience, and attention to detail to every appointment. I’m approachable and dedicated, and I take pride in creating personalized styles that complement each client’s features and lifestyle while prioritizing hair health.\n\nI love helping my clients look and feel their best with a style that reflects their individuality.",
    languages: ["Chinese", "English"],
    specialties: ["Keratin smoothing", "Hair botox", "Scalp & Aveda treatments", "Blow-dry"],
    gallery: [
      { src: "/images/photos/work-treatment-1.jpg", alt: "Scalp treatment at the basin by Rain, Megas Coquitlam" },
      { src: "/images/photos/work-keratin-1.jpg", alt: "Post-keratin smooth finish by Rain, Megas Coquitlam" },
      { src: "/images/photos/journal-keratin.jpg", alt: "Repair treatment applied by Rain, Megas Coquitlam" },
      { src: "/images/photos/work-colour-1.jpg", alt: "Condition and shine after treatment by Rain, Megas Coquitlam" },
    ],
  },
  Sima: {
    headline: "Sima — texture, curl, and finished styling.",
    focus: "Texture & styling",
    bookingUrl: "https://www.phorest.com/salon/megashairsalon/book/services?staffId=JVdUy440ZIKW9FGqS8OrpQ",
    bio: "Hi, my name is Sima. I have approximately 25 years of hairstyling experience, working on and off throughout my career, and I have held my hairstyling certification for 25 years. I have been working as a hairstylist in Canada for the past 6 years.\n\nMy main specialties are haircuts, hair coloring, highlights, and balayage, with haircutting being my strongest skill. I also have experience in keratin treatments and perms.\n\nLast year, I updated my professional skills and knowledge and obtained a Pedagogy Certificate to further develop my expertise and qualifications in the hairstyling industry.",
    languages: ["Persian", "English"],
    specialties: ["Curly & textured hair", "Updos & evening styles", "Blowouts", "Braiding"],
    gallery: [
      { src: "/images/photos/work-updo-1.jpg", alt: "Bridal updo by Sima at Megas Hair Salon, Coquitlam" },
      { src: "/images/photos/work-blowout-1.jpg", alt: "Finished blowout by Sima, Megas Coquitlam" },
      { src: "/images/photos/work-balayage-1.jpg", alt: "Textured waves by Sima, Megas Coquitlam" },
      { src: "/images/photos/work-blonde-1.jpg", alt: "Evening style by Sima, Megas Coquitlam" },
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
    bookingUrl: profile.bookingUrl,
    years: null,
    portrait: `/images/photos/stylist-${slug}.jpg`,
    portraitAlt: `Portrait of ${name}, senior stylist at Megas Hair Salon, Coquitlam`,
    metaTitle: `${name} — Senior Stylist | Megas Hair Salon Coquitlam`,
    metaDescription: `Meet ${name}, senior stylist at Megas Hair Salon in Coquitlam — ${profile.focus.toLowerCase()}. Book online or call 778-858-0396.`,
    headline: profile.headline,
    bio: profile.bio,
    languages: profile.languages,
    specialties: profile.specialties,
    gallery: profile.gallery,
    relatedServices: ["precision-haircut-coquitlam", "hair-color-coquitlam", "blow-dry-coquitlam"],
    isPlaceholder: false,
  } satisfies TeamMember;
});

export const TEAM: readonly TeamMember[] = [...FOUNDERS, ...SENIORS];

/** The four leads, used for the homepage teaser. */
export const TEAM_LEADS = FOUNDERS;

export function getTeamMember(slug: string): TeamMember | undefined {
  return TEAM.find((member) => member.slug === slug);
}
