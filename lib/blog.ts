/**
 * Journal posts. Written to answer the questions clients actually ask in the
 * chair, and to earn long-tail search traffic around the service pages.
 *
 * Body is authored as simple blocks so posts stay editable without a CMS.
 */

export type Block =
  | { readonly type: "p"; readonly text: string }
  | { readonly type: "h2"; readonly text: string }
  | { readonly type: "ul"; readonly items: readonly string[] }
  | {
      readonly type: "link";
      readonly before?: string;
      readonly label: string;
      readonly href: string;
      readonly after?: string;
    };

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
  readonly relatedPosts: readonly string[];
};

export const POSTS: readonly Post[] = [
  {
    slug: "how-often-refresh-balayage",
    title: "How often should you refresh balayage?",
    metaTitle: "How Often Should You Refresh Balayage? | Coquitlam Guide",
    metaDescription:
      "A Coquitlam colourist explains when to refresh balayage, when a toner is enough, and how to keep dimensional colour looking intentional between visits.",
    excerpt:
      "A full repaint is rarely the answer every eight weeks. Here is a practical maintenance rhythm for brighter, healthier balayage.",
    date: "2026-09-24",
    readingTime: "5 min read",
    category: "Balayage",
    image: "/images/photos/work-balayage-2.jpg",
    imageAlt: "Dimensional brunette balayage created at a Coquitlam hair salon",
    relatedService: "balayage-coquitlam",
    relatedPosts: ["balayage-vs-highlights", "hair-colour-consultation-coquitlam", "grey-blending-vs-full-coverage"],
    body: [
      { type: "p", text: "Most balayage clients do not need a full lightening appointment every time the colour feels less bright. The right maintenance plan separates three different needs: restoring tone, brightening the hairline, and repainting the full shape." },
      { type: "h2", text: "The short answer: every three to four months" },
      { type: "p", text: "For a soft, lived-in result, a full balayage refresh usually makes sense every twelve to sixteen weeks. Hair that grows quickly, a much lighter target, or a brighter face frame can shorten that window. A subtle brunette balayage can often stretch longer." },
      { type: "h2", text: "When toner is enough" },
      { type: "p", text: "If the placement still looks good but blonde pieces have turned warm or dull, the lightness is already there. A toner can adjust the shade without another round of lightener. That means less time, less stress on the hair, and a more economical appointment." },
      { type: "h2", text: "A practical yearly rhythm" },
      { type: "ul", items: [
        "Full balayage to establish or reshape the colour.",
        "Toner or gloss six to eight weeks later if the tone needs refreshing.",
        "Partial balayage or face-frame refresh at the next visit.",
        "Another full service only when the overall placement needs rebuilding.",
      ] },
      { type: "h2", text: "What makes balayage fade faster" },
      { type: "p", text: "Frequent hot-water washing, strong clarifying shampoo, mineral buildup, sun exposure, and unprotected heat styling all shift toner faster. Colour-safe home care will not stop fading, but it can keep the result balanced for several extra weeks." },
      { type: "link", before: "Still deciding between techniques? Read ", label: "our honest comparison of balayage and highlights", href: "/blog/balayage-vs-highlights", after: " before choosing the appointment type." },
      { type: "p", text: "If you are unsure whether you need a toner, partial refresh, or full balayage, book a complimentary consultation. We can check the regrowth, porosity, and condition before recommending more lightener." },
    ],
  },
  {
    slug: "grey-blending-vs-full-coverage",
    title: "Grey blending or full coverage? Choose by the grow-out",
    metaTitle: "Grey Blending vs Full Coverage | Coquitlam Hair Colour",
    metaDescription:
      "Grey blending and full grey coverage create very different grow-outs. Coquitlam colourists explain the maintenance, finish, and best fit for each approach.",
    excerpt:
      "The best grey-colour plan is not decided on day one. It is decided by how you want the next eight weeks to look.",
    date: "2026-09-17",
    readingTime: "5 min read",
    category: "Grey Colour",
    image: "/images/photos/work-colour-2.jpg",
    imageAlt: "Dimensional professional hair colour with softly blended regrowth",
    relatedService: "hair-color-coquitlam",
    relatedPosts: ["hair-colour-consultation-coquitlam", "balayage-vs-highlights", "how-often-refresh-balayage"],
    body: [
      { type: "p", text: "Grey blending and full coverage solve different problems. Full coverage aims for an even result with no visible grey. Blending uses highlights, lowlights, or softer colour to make grey part of the overall pattern. Both can look polished; the right choice depends on the grow-out you are willing to maintain." },
      { type: "h2", text: "Full coverage: the cleanest first-day result" },
      { type: "p", text: "Permanent colour gives the most complete coverage, especially on resistant grey around the temples and hairline. The tradeoff is a defined root line. For many clients, that means a root appointment every four to six weeks." },
      { type: "h2", text: "Grey blending: the softer return" },
      { type: "p", text: "Blending breaks up the contrast between pigmented hair and silver strands. It will not erase every grey hair, but it grows out with less of a line. Clients who want fewer appointments or are moving toward their natural silver often prefer this approach." },
      { type: "h2", text: "Choose based on these priorities" },
      { type: "ul", items: [
        "Choose full coverage when seeing any grey between appointments bothers you.",
        "Choose blending when a softer, lower-maintenance grow-out matters more than total coverage.",
        "Consider a hybrid plan when the hairline needs coverage but the lengths benefit from dimension.",
        "Plan a gradual transition if years of dark permanent colour sit on the mid-lengths and ends.",
      ] },
      { type: "link", before: "A colour change is easier to plan when the history is clear. Our guide to ", label: "what happens in a hair-colour consultation", href: "/blog/hair-colour-consultation-coquitlam", after: " explains what to bring and what we assess." },
      { type: "p", text: "There is no universal rule that grey must be hidden or grown out. The useful question is which result makes you feel like yourself and fits the appointment schedule you can actually keep." },
    ],
  },
  {
    slug: "hair-colour-consultation-coquitlam",
    title: "What happens in a hair-colour consultation?",
    metaTitle: "Hair Colour Consultation in Coquitlam | What to Expect",
    metaDescription:
      "Planning balayage, blonde, grey blending, or colour correction? Learn what happens in a professional hair-colour consultation at a Coquitlam salon.",
    excerpt:
      "Twenty minutes before the appointment can prevent months of correction. Here is what we look at, what to bring, and what you should ask.",
    date: "2026-09-10",
    readingTime: "4 min read",
    category: "Consultation",
    image: "/images/photos/salon-3.jpg",
    imageAlt: "Hair colour consultation inside Megas Hair Salon in Coquitlam",
    relatedService: "hair-color-coquitlam",
    relatedPosts: ["how-to-choose-a-colourist", "balayage-vs-highlights", "grey-blending-vs-full-coverage"],
    body: [
      { type: "p", text: "A colour consultation is not a sales conversation. It is a technical assessment of what is on your hair, what condition it is in, and whether the result you want is realistic in one visit. For significant lightening or colour correction, that assessment is part of the service—not an optional extra." },
      { type: "h2", text: "We start with your colour history" },
      { type: "p", text: "Professional colour, box dye, henna, keratin, and previous lightener can all change the plan. Tell us what has touched your hair, even if it was a year ago. Colour can remain in the lengths long after the roots have grown out." },
      { type: "h2", text: "Then we assess condition and starting point" },
      { type: "p", text: "We look at density, porosity, elasticity, natural level, percentage of grey, and existing banding. A strand test may be recommended when the history is complex or the target requires a major lift." },
      { type: "h2", text: "Bring references, but bring the right kind" },
      { type: "ul", items: [
        "Two or three photos of results you like—not twenty.",
        "A photo of your own colour when you loved it, if you have one.",
        "Examples of what you do not want; these are often more precise.",
        "An honest idea of how often you want to return and style your hair at home.",
      ] },
      { type: "h2", text: "You should leave with a plan" },
      { type: "p", text: "A useful consultation ends with the recommended service, likely number of sessions, maintenance rhythm, starting price, and home-care priorities. If the target is unsafe in one session, you should hear that before the first foil goes in." },
      { type: "link", before: "If you are comparing professionals, continue with ", label: "how to choose a colourist in the Tri-Cities", href: "/blog/how-to-choose-a-colourist", after: ". It covers the questions that reveal experience quickly." },
    ],
  },
  {
    slug: "how-often-should-you-cut-your-hair",
    title: "How often should you cut your hair? It depends on the shape",
    metaTitle: "How Often Should You Get a Haircut? | Coquitlam Stylist Guide",
    metaDescription:
      "A Coquitlam stylist explains how often to cut short, medium, long, curly, and colour-treated hair—and the signs your shape needs attention.",
    excerpt:
      "The six-week rule is useful for some cuts and wasteful for others. Your shape, texture, and ends decide the real schedule.",
    date: "2026-09-03",
    readingTime: "4 min read",
    category: "Haircuts",
    image: "/images/photos/work-cut-1.jpg",
    imageAlt: "Precision haircut finished by a stylist at Megas Hair Salon",
    relatedService: "precision-haircut-coquitlam",
    relatedPosts: ["hair-colour-consultation-coquitlam", "keratin-treatment-vancouver-winter", "how-to-choose-a-colourist"],
    body: [
      { type: "p", text: "Hair does not expire at six weeks. A haircut loses its shape at a pace set by its length, structure, texture, and condition. The right schedule is the longest interval that still lets the cut behave the way it should." },
      { type: "h2", text: "A useful starting schedule" },
      { type: "ul", items: [
        "Pixies, crops, and sharp short cuts: every four to six weeks.",
        "Bobs and structured medium cuts: every six to eight weeks.",
        "Long layers in healthy hair: every ten to twelve weeks.",
        "Growing-out shapes: a light reshape every eight to twelve weeks.",
        "Bleached or heat-stressed ends: often sooner, based on condition.",
      ] },
      { type: "h2", text: "Watch the styling, not only the ends" },
      { type: "p", text: "Split ends are a late sign. Earlier clues are more useful: the crown stops holding volume, a fringe will not sit, the perimeter looks transparent, or styling suddenly takes longer. That is the shape asking for attention." },
      { type: "h2", text: "Does trimming make hair grow faster?" },
      { type: "p", text: "No. Growth happens at the scalp. Trimming prevents splits from travelling higher and breaking off, so the length you grow is more likely to stay. The benefit is retention, not a faster follicle." },
      { type: "h2", text: "Texture changes the calendar" },
      { type: "p", text: "Curly hair may keep a silhouette longer, but uneven shrinkage can make small changes noticeable. Fine hair often loses a clean perimeter sooner. Thick hair may need internal weight removed before the outside length looks overgrown." },
      { type: "link", before: "If chemical services are part of your routine, a good appointment plan should account for both shape and condition. See ", label: "what we assess during a colour consultation", href: "/blog/hair-colour-consultation-coquitlam", after: "." },
    ],
  },
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
    relatedPosts: ["how-often-refresh-balayage", "hair-colour-consultation-coquitlam", "how-to-choose-a-colourist"],
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
      { type: "link", before: "Already wearing painted colour? Use our ", label: "balayage refresh guide", href: "/blog/how-often-refresh-balayage", after: " to decide whether you need toner, a partial service, or a full repaint." },
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
    relatedPosts: ["how-often-should-you-cut-your-hair", "hair-colour-consultation-coquitlam", "how-to-choose-a-colourist"],
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
      { type: "link", before: "For lightened or colour-treated hair, read ", label: "what we assess during a colour consultation", href: "/blog/hair-colour-consultation-coquitlam", after: " before combining services." },
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
    relatedPosts: ["hair-colour-consultation-coquitlam", "grey-blending-vs-full-coverage", "balayage-vs-highlights"],
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
      { type: "link", before: "Before a major colour change, review ", label: "what to expect from a professional colour consultation", href: "/blog/hair-colour-consultation-coquitlam", after: " so you know what a useful plan should include." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: Post, limit = 3): readonly Post[] {
  return post.relatedPosts
    .flatMap((slug) => {
      const related = getPost(slug);
      return related ? [related] : [];
    })
    .slice(0, limit);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
