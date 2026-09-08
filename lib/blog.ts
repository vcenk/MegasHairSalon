/**
 * Journal posts. Written to answer the questions clients actually ask in the
 * chair, and to earn long-tail search traffic around the service pages.
 *
 * Body is authored as simple blocks so posts stay editable without a CMS.
 */

export type Block =
  | { readonly type: "p"; readonly text: string }
  | { readonly type: "h2"; readonly text: string }
  | { readonly type: "ul"; readonly items: readonly string[] };

export type Post = {
  readonly slug: string;
  readonly title: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly excerpt: string;
  readonly date: string;
  readonly readingTime: string;
  readonly category: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly body: readonly Block[];
  readonly relatedService?: string;
};

export const POSTS: readonly Post[] = [
  {
    slug: "balayage-vs-highlights",
    title: "Balayage or highlights? A colourist's honest answer",
    metaTitle: "Balayage vs Highlights — Which Should You Book? | Megas Hair Salon",
    metaDescription:
      "A Coquitlam colourist explains the real difference between balayage and highlights, what each costs, how they grow out, and which one suits your hair.",
    excerpt:
      "They are not the same technique, they do not grow out the same way, and one of them costs almost twice the other. Here is how to choose.",
    date: "2026-08-18",
    readingTime: "5 min read",
    category: "Colour",
    image: "/images/photos/journal-balayage.jpg",
    imageAlt: "Comparison of balayage and foil highlight placement",
    relatedService: "balayage-coquitlam",
    body: [
      { type: "p", text: "Clients ask for balayage when they mean highlights, and highlights when they mean balayage, roughly once a week. The words have blurred, but the techniques have not — and the difference decides how your colour grows out, what it costs, and how often you are back in the chair." },
      { type: "h2", text: "The mechanical difference" },
      { type: "p", text: "Highlights are packed into foil. The foil holds heat and keeps the lightener saturated, so it lifts further and more evenly — right up to the root if that is what you want. Balayage is painted freehand onto the surface of the hair, left open to the air. It lifts more gently and fades out toward the root rather than stopping at a hard line." },
      { type: "p", text: "That single difference explains almost everything else." },
      { type: "h2", text: "How they grow out" },
      { type: "ul", items: [
        "Highlights create a defined regrowth line. At four to six weeks it is visible; at eight it is a decision.",
        "Balayage is designed to blur. Most clients comfortably stretch it to three or four months.",
        "Babylights sit in between — foiled, but so fine that the line stays soft.",
      ] },
      { type: "h2", text: "What they cost at Megas" },
      { type: "p", text: "Full-head highlights are $185 including toner. Balayage is $350, also including toner. The gap is time: balayage is painted strand by strand and takes three to four hours, where a full head of foils is faster." },
      { type: "p", text: "Cost per year, though, often lands closer together. Four highlight appointments beat three balayage appointments on paper, but the balayage client usually gets away with three." },
      { type: "h2", text: "Which one suits your hair" },
      { type: "ul", items: [
        "Want maximum brightness, especially near the root? Foils.",
        "Want low maintenance and a soft, sun-grown look? Balayage.",
        "Covering grey as well as brightening? Foils, usually alongside a base colour.",
        "Very dark natural base and want to go significantly lighter? Foils first, balayage later.",
      ] },
      { type: "p", text: "If you are still unsure, book the complimentary consultation. Twenty minutes in natural light with someone who has been doing this for thirty-five years will settle it faster than another hour of scrolling." },
    ],
  },
  {
    slug: "keratin-treatment-vancouver-winter",
    title: "Why keratin makes sense in a Lower Mainland winter",
    metaTitle: "Keratin Treatments and Vancouver Humidity — Is It Worth It? | Megas",
    metaDescription:
      "Does keratin smoothing actually help with Vancouver rain and frizz? A Coquitlam salon explains what it does, what it costs, and who it suits.",
    excerpt:
      "Eight months of damp air is a specific problem, and keratin is a specific answer to it. What it does, what it does not, and what it costs.",
    date: "2026-08-04",
    readingTime: "4 min read",
    category: "Treatments",
    image: "/images/photos/journal-keratin.jpg",
    imageAlt: "Smooth, frizz-free hair after a keratin treatment",
    relatedService: "keratin-treatment-coquitlam",
    body: [
      { type: "p", text: "Frizz is not a texture problem. It is a moisture problem — hair with a raised cuticle pulls water out of humid air, swells unevenly, and lifts. In a climate that is damp from October to May, that is most of the year." },
      { type: "h2", text: "What keratin actually does" },
      { type: "p", text: "A keratin treatment coats and seals the cuticle. Water stops getting in as easily, so the hair stays where you put it. The two effects clients notice most are the end of afternoon frizz and a drying time that is roughly halved." },
      { type: "h2", text: "What it does not do" },
      { type: "p", text: "It does not straighten curly hair permanently. Curls come back — looser, smoother, and far more cooperative, but still curls. If you want genuinely straight hair, that is permanent straightening, which is a different chemistry and starts at $250." },
      { type: "h2", text: "How long it lasts and what it costs" },
      { type: "ul", items: [
        "Three to five months, fading gradually rather than growing out in a line.",
        "$300 for short hair, $450 for long hair.",
        "Hair botox, at $250, is the repair-focused alternative for damaged hair.",
      ] },
      { type: "h2", text: "Aftercare that decides the outcome" },
      { type: "p", text: "The first seventy-two hours matter more than anything you do afterward: no washing, no tying it up, no clips. After that, a sulphate-free shampoo is the single biggest factor in how long the result holds. Sulphates strip the treatment, and a $12 bottle can cost you two months of a $450 service." },
      { type: "p", text: "If your hair is already fragile from lightening, we will often suggest a treatment course before keratin rather than instead of it. Ask at your consultation — it is free." },
    ],
  },
  {
    slug: "how-to-choose-a-colourist",
    title: "How to choose a colourist (from people who have hired a few)",
    metaTitle: "How to Choose a Hair Colourist in the Tri-Cities | Megas Hair Salon",
    metaDescription:
      "What separates a good colourist from a risky one — the questions to ask, the answers that should worry you, and why the consultation tells you everything.",
    excerpt:
      "The consultation tells you almost everything. Here is what to listen for — and the one answer that should make you leave.",
    date: "2026-07-21",
    readingTime: "4 min read",
    category: "Salon",
    image: "/images/photos/journal-colourist.jpg",
    imageAlt: "A colourist consulting with a client in natural light",
    relatedService: "blonde-specialist-coquitlam",
    body: [
      { type: "p", text: "Colour is the one salon service where a bad decision can take a year to grow out. It is worth twenty minutes of due diligence — and the consultation is where you get it." },
      { type: "h2", text: "Watch where they look" },
      { type: "p", text: "A good colourist looks at your hair in natural light, near a window, before they say a number. They will lift sections, check your regrowth, and ask what has been on your hair — including the box dye you would rather not mention. Someone who quotes you from across the room is quoting a photo, not your head." },
      { type: "h2", text: "Ask these four questions" },
      { type: "ul", items: [
        "Can my hair actually take this in one session?",
        "What will this look like in eight weeks?",
        "What will maintenance cost me per year?",
        "What happens if it does not land where we want it?",
      ] },
      { type: "p", text: "You are not testing their patience. You are testing whether they have thought past today's appointment." },
      { type: "h2", text: "The answer that should worry you" },
      { type: "p", text: "\"Yes, no problem\" — to everything. Hair has limits. A colourist who never says \"not in one session\" or \"let's treat this first\" is either inexperienced or unwilling to lose the booking. Both cost you more in the end than being told no." },
      { type: "h2", text: "Experience is not a marketing word" },
      { type: "p", text: "Colour correction in particular is pattern recognition: having seen this exact failure before and knowing which way it moves. There is no shortcut to it. When you are choosing between salons, years behind the chair is a fair thing to weigh — ask, and expect a straight answer." },
      { type: "p", text: "At Megas, that is 41 years for Gazi, 35 for Bülent, and 23 for Emir. Not because it makes a good line, but because it is why people bring us hair that somebody else has already been at." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
