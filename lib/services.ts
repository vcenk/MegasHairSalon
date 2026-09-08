/**
 * The eight SEO service pages.
 *
 * Prices here must agree with lib/menu.ts (both are snapshots of the live
 * Phorest menu). When Phorest changes, update both.
 */

export type Faq = { readonly question: string; readonly answer: string };

export type Service = {
  readonly slug: string;
  readonly name: string;
  /** Short label for cards and nav. */
  readonly shortName: string;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly eyebrow: string;
  readonly headline: string;
  readonly lede: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly priceFrom: string;
  readonly priceValue: number;
  readonly duration: string;
  /** Body copy — one paragraph per entry. */
  readonly body: readonly string[];
  readonly includes: readonly string[];
  readonly process: readonly { readonly title: string; readonly detail: string }[];
  readonly pricing: readonly { readonly name: string; readonly price: string }[];
  readonly faqs: readonly Faq[];
  readonly stylists: readonly string[];
  readonly related: readonly string[];
};

export const SERVICES: readonly Service[] = [
  {
    slug: "balayage-coquitlam",
    name: "Balayage",
    shortName: "Balayage",
    metaTitle: "Balayage in Coquitlam | Hand-Painted Colour at Megas Hair Salon",
    metaDescription:
      "Hand-painted balayage in Coquitlam by master colourists with 35+ years' experience. From $350 including toner. Book online at Megas Hair Salon.",
    eyebrow: "Colour",
    headline: "Balayage, painted by hand.",
    lede: "Soft, sun-grown dimension that grows out beautifully — no harsh regrowth line, no six-week panic.",
    image: "/images/photos/work-balayage-1.jpg",
    imageAlt: "Hand-painted balayage with soft dimension, by Megas Hair Salon in Coquitlam",
    priceFrom: "$350",
    priceValue: 350,
    duration: "3–4 hours",
    body: [
      "Balayage is freehand lightening — colour swept onto the surface of the hair rather than packed into foils. Done well, it reads like light that has always been there: brighter through the mid-lengths and ends, softer at the root, with no hard line to manage as it grows.",
      "Our colourists have been painting hair since long before balayage had a name in North America. That matters most in the placement: where the light falls depends on how you part your hair, how you wear it, and how it moves. We map that before a single stroke.",
      "Every balayage at Megas includes a toner, because raw lightened hair is rarely the finished colour. The toner is what turns brassy into buttery, or beige into ash — and it is where a lot of cheaper balayage quietly cuts corners.",
    ],
    includes: [
      "Complimentary consultation and colour mapping",
      "Freehand lightening by a master colourist",
      "Toner or gloss to set the final tone",
      "Bond-protecting additive for lightened hair",
      "Finishing wash and rough dry",
    ],
    process: [
      { title: "Consult", detail: "We look at your hair in natural light, talk about upkeep, and agree on how bright is bright enough." },
      { title: "Map", detail: "Placement is planned around your part, your face, and the way your hair actually falls." },
      { title: "Paint", detail: "Colour is applied freehand, section by section, and left to develop under watch." },
      { title: "Tone", detail: "A toner or gloss corrects warmth and sets the exact shade you agreed on." },
      { title: "Finish", detail: "Wash, treatment, and a blow-dry if you have added one — plus honest advice on when to come back." },
    ],
    pricing: [
      { name: "Balayage (includes toner)", price: "$350" },
      { name: "Balayage + blow-dry", price: "$400" },
      { name: "Full-head babylights", price: "$320" },
      { name: "Toner / gloss on its own", price: "$85" },
    ],
    faqs: [
      {
        question: "How much is balayage in Coquitlam?",
        answer:
          "Balayage at Megas starts at $350 and includes a toner. With a finishing blow-dry it is $400. Very long or very dense hair may need extra product and time, which we confirm at the consultation before we start — never after.",
      },
      {
        question: "How long does a balayage appointment take?",
        answer:
          "Plan for three to four hours. Lightening cannot be rushed safely, and the toning step at the end is what makes the colour look expensive rather than brassy.",
      },
      {
        question: "How often do I need to come back?",
        answer:
          "That is the point of balayage: most clients stretch it to three or four months. A $85 gloss in between keeps the tone fresh without touching the lightener.",
      },
      {
        question: "Is balayage damaging?",
        answer:
          "Any lightening changes the hair. We work with bond-protecting additives, and we will tell you honestly if your hair needs a treatment course before we lighten further — a colourist who never says no is not protecting your hair.",
      },
    ],
    stylists: ["bulent-bill", "gazi"],
    related: ["blonde-specialist-coquitlam", "hair-color-coquitlam", "root-touch-up-coquitlam"],
  },
  {
    slug: "blonde-specialist-coquitlam",
    name: "Blonde Specialist",
    shortName: "Blonde",
    metaTitle: "Blonde Specialist Coquitlam | Platinum & Lived-In Blonde | Megas",
    metaDescription:
      "Blonde specialist in Coquitlam. Platinum, beige, and lived-in blonde by colourists with 35+ years' experience. Full-head highlights from $185. Book online.",
    eyebrow: "Colour",
    headline: "Blonde is a specialty, not a service.",
    lede: "Going lighter is the hardest thing you can ask of hair. It should be done by someone who has done it ten thousand times.",
    image: "/images/photos/work-blonde-1.jpg",
    imageAlt: "Cool platinum blonde by the blonde specialists at Megas Hair Salon, Coquitlam",
    priceFrom: "$185",
    priceValue: 185,
    duration: "2.5–5 hours",
    body: [
      "There is a reason people drive across the Lower Mainland for a good blonde. Lightening is chemistry with a narrow margin: too cautious and you get brass, too aggressive and you get damage you cannot undo with conditioner.",
      "Bülent — known in the salon as Bill — built his reputation on blonding across two salons in Türkiye and more than three decades behind the chair. Cool platinum, warm honey, beige, or a lived-in blonde with deliberate root depth: the target is agreed before we mix anything.",
      "If your hair is not ready for where you want to go, we will say so and give you a route to get there over two or three appointments. That is slower. It is also the reason your hair survives the journey.",
    ],
    includes: [
      "Strand assessment and porosity check",
      "Highlights, babylights, or full bleach-out as appropriate",
      "Toner to land the exact shade — cool, neutral, or warm",
      "Bond protection throughout the lightening",
      "A realistic maintenance plan, in writing if you want it",
    ],
    process: [
      { title: "Assess", detail: "We look at your history — box dye, previous lightening, heat damage — because it all changes the plan." },
      { title: "Plan", detail: "One session or three. We tell you which, and what each will cost, before you commit." },
      { title: "Lighten", detail: "Foils, babylights, or freehand, chosen for the effect you asked for rather than the fastest route." },
      { title: "Tone", detail: "The step that decides whether blonde reads expensive or brassy." },
      { title: "Protect", detail: "A treatment to close the cuticle, plus honest homecare advice." },
    ],
    pricing: [
      { name: "Half-head highlights (includes toner)", price: "$145" },
      { name: "Full-head highlights (includes toner)", price: "$185" },
      { name: "Half-head babylights", price: "$200" },
      { name: "Full-head babylights", price: "$320" },
      { name: "Roots bleach out", price: "$150" },
      { name: "Colour correction", price: "Consultation" },
    ],
    faqs: [
      {
        question: "Can you take me platinum in one appointment?",
        answer:
          "Sometimes. It depends on your natural level, what has been on your hair before, and its current condition. We will tell you honestly at the consultation — and if it needs two sessions, we will tell you that too, with the cost of both.",
      },
      {
        question: "What does full-head highlights cost?",
        answer:
          "Full-head highlights are $185 including toner, or $235 with a blow-dry. Half-head is $145. Babylights, which are finer and more time-consuming, start at $200.",
      },
      {
        question: "I have box dye on my hair. Can you still lighten it?",
        answer:
          "Usually, but it is a correction rather than a highlight, and it is booked as a consultation first. Box dye lifts unevenly, so we need to see it in person before quoting.",
      },
      {
        question: "How do I keep blonde from going brassy?",
        answer:
          "Purple shampoo once a week, cooler water, heat protection, and a $85 gloss every couple of months. We will give you the specific routine for your hair, not a generic one.",
      },
    ],
    stylists: ["bulent-bill", "gazi"],
    related: ["balayage-coquitlam", "root-touch-up-coquitlam", "restorative-treatment-coquitlam"],
  },
  {
    slug: "hair-color-coquitlam",
    name: "Hair Colour",
    shortName: "Hair Colour",
    metaTitle: "Hair Colour in Coquitlam | Custom-Mixed Colour | Megas Hair Salon",
    metaDescription:
      "Custom-mixed hair colour in Coquitlam by master colourists. Full colour from $120, root retouch from $95. Complimentary consultation. Book online at Megas.",
    eyebrow: "Colour",
    headline: "Colour mixed for you, not off a chart.",
    lede: "Rich brunettes, warm coppers, deep reds, or a grey-coverage shade that actually suits your skin.",
    image: "/images/photos/work-colour-1.jpg",
    imageAlt: "Custom-mixed rich colour result at Megas Hair Salon, Coquitlam",
    priceFrom: "$120",
    priceValue: 120,
    duration: "1.5–2.5 hours",
    body: [
      "Every colour at Megas is mixed at the bowl for the head in front of us. Two people asking for the same chocolate brown will get two slightly different formulas, because their base, their grey percentage, and their skin tone are not the same.",
      "This is the everyday work of the salon — grey coverage that does not look flat, a copper that holds its life for more than three washes, a brunette with enough depth to look expensive under bad office lighting.",
      "We keep your formula on file. Come back in eight weeks and we are not starting from guesswork.",
    ],
    includes: [
      "Complimentary consultation and shade matching",
      "Custom-mixed permanent or demi-permanent colour",
      "Full grey coverage where wanted",
      "Gloss finish for shine and tone",
      "Formula recorded for your next visit",
    ],
    process: [
      { title: "Match", detail: "Shade chosen against your skin tone and your grey percentage, in natural light." },
      { title: "Mix", detail: "Formula built at the bowl — not pulled ready-made off a shelf." },
      { title: "Apply", detail: "Root first where regrowth needs it, then through the lengths at the right moment." },
      { title: "Process", detail: "Timed and checked, so the colour lands where it was meant to." },
      { title: "Finish", detail: "Wash, gloss, and a style if you have added a blow-dry." },
    ],
    pricing: [
      { name: "Full colour, short hair", price: "$120" },
      { name: "Full colour, long hair", price: "$150" },
      { name: "Full colour, long hair + blow-dry", price: "$200" },
      { name: "Men's colour", price: "$90" },
      { name: "Toner / gloss", price: "$85" },
      { name: "Colour correction", price: "Consultation" },
    ],
    faqs: [
      {
        question: "How much does hair colour cost in Coquitlam?",
        answer:
          "Full colour starts at $120 for short hair and $150 for long hair. Adding a blow-dry is $50. A root retouch on its own is $95. Men's colour is $90.",
      },
      {
        question: "Will it cover my greys completely?",
        answer:
          "Yes — we use permanent colour with the right base tone for full coverage. If you would rather blend grey than erase it, we can do that too; it is a different formula and worth saying at the consultation.",
      },
      {
        question: "Do you fix colour that went wrong somewhere else?",
        answer:
          "Often, yes. Colour correction is booked as a consultation first, because the plan and the price depend entirely on what is currently on the hair.",
      },
      {
        question: "How long does colour last?",
        answer:
          "Roots show at four to six weeks. The tone fades sooner — a $85 gloss between appointments is the cheapest way to keep it looking fresh.",
      },
    ],
    stylists: ["gazi", "emir", "bulent-bill"],
    related: ["root-touch-up-coquitlam", "balayage-coquitlam", "blonde-specialist-coquitlam"],
  },
  {
    slug: "precision-haircut-coquitlam",
    name: "Precision Haircut",
    shortName: "Haircut",
    metaTitle: "Precision Haircut Coquitlam | Women's & Men's Cuts | Megas Hair Salon",
    metaDescription:
      "Precision haircuts in Coquitlam. Women's cuts from $60, men's cuts $55, kids from $40. Cut by master stylists with 20–40 years' experience. Book online.",
    eyebrow: "Cutting",
    headline: "A cut that still works on week six.",
    lede: "Cut to your face, your texture, and the ten minutes you actually spend on your hair in the morning.",
    image: "/images/photos/work-cut-1.jpg",
    imageAlt: "Precision haircut with clean shape and movement, Megas Hair Salon Coquitlam",
    priceFrom: "$60",
    priceValue: 60,
    duration: "45–60 minutes",
    body: [
      "A good cut is an argument between the shape you want and the hair you have. Density, growth pattern, cowlicks, and how much time you will realistically spend with a round brush all change the answer.",
      "Gazi has been cutting since 1984 and works fast — but the speed comes after the thinking, not instead of it. The consultation happens dry, standing up, because that is how you will wear it.",
      "We would rather take length off in stages across two visits than hand you something you cannot recreate at home.",
    ],
    includes: [
      "Dry consultation before anything is cut",
      "Wash and scalp massage",
      "Precision cut by a master stylist",
      "Rough dry and finish",
      "Styling advice specific to your hair, not a product pitch",
    ],
    process: [
      { title: "Talk", detail: "Dry, standing, mirror in front of you — we agree the shape before the scissors come out." },
      { title: "Wash", detail: "Wash and scalp massage at the basin." },
      { title: "Cut", detail: "Sectioned and cut to the shape agreed, checked for balance as we go." },
      { title: "Finish", detail: "Dried and styled so you can see the shape properly." },
      { title: "Show", detail: "How to get it back tomorrow morning, in your bathroom, on your own." },
    ],
    pricing: [
      { name: "Women's cut, short hair", price: "$60" },
      { name: "Women's cut, long or thick hair", price: "$75" },
      { name: "Men's cut", price: "$55" },
      { name: "Kids' cut, girl (3–11)", price: "$45" },
      { name: "Kids' cut, boy (3–11)", price: "$40" },
      { name: "Bang trim", price: "$20" },
    ],
    faqs: [
      {
        question: "How much is a haircut at Megas?",
        answer:
          "Women's cuts are $60 for short hair and $75 for long or thick hair. Men's cuts are $55. Kids aged 3–11 are $40–$45, and a bang trim on its own is $20.",
      },
      {
        question: "Is a wash and blow-dry included?",
        answer:
          "A wash and a rough dry are included with every cut. A full styled blowout is a separate service, $50 for short hair and $65 for long.",
      },
      {
        question: "Do I need to book a consultation first for a big change?",
        answer:
          "Not usually — consultation time is built into the cut. For a dramatic restyle it helps to book the longer slot, so mention it when you book online.",
      },
      {
        question: "Do you cut curly and textured hair?",
        answer:
          "Yes. Curl is cut differently — often dry, and always with the shrinkage accounted for. Tell us your curl pattern when booking so we allow the right time.",
      },
    ],
    stylists: ["gazi", "bulent-bill", "emir"],
    related: ["blow-dry-coquitlam", "hair-color-coquitlam", "restorative-treatment-coquitlam"],
  },
  {
    slug: "keratin-treatment-coquitlam",
    name: "Keratin Smoothing",
    shortName: "Keratin",
    metaTitle: "Keratin Treatment Coquitlam | Smoothing & Frizz Control | Megas",
    metaDescription:
      "Keratin smoothing treatments in Coquitlam. From $300 short hair, $450 long hair. Cuts drying time and frizz for 3–5 months. Book online at Megas Hair Salon.",
    eyebrow: "Treatments",
    headline: "Keratin, for hair that fights the rain.",
    lede: "Three to five months of smoother mornings — cutting drying time roughly in half.",
    image: "/images/photos/work-keratin-1.jpg",
    imageAlt: "Smooth, glossy finish after keratin smoothing at Megas Hair Salon, Coquitlam",
    priceFrom: "$300",
    priceValue: 300,
    duration: "2.5–4 hours",
    body: [
      "This is a Lower Mainland service if ever there was one. Keratin smoothing coats and seals the cuticle, so humidity stops turning your blow-dry into a memory by lunchtime.",
      "It does not make curly hair straight — it makes it smoother, glossier, and dramatically faster to dry. Most clients report cutting their styling time roughly in half.",
      "Results run three to five months depending on your hair and how often you wash. We will tell you which treatment suits your texture at the consultation, including when the answer is a hair botox or a deep conditioning course instead.",
    ],
    includes: [
      "Clarifying wash to open the cuticle",
      "Keratin applied section by section",
      "Sealed with heat, strand by strand",
      "Aftercare instructions for the first 72 hours",
      "Sulphate-free homecare guidance",
    ],
    process: [
      { title: "Consult", detail: "We check whether keratin, hair botox, or a treatment course is the right answer for your hair." },
      { title: "Clarify", detail: "A deep clarifying wash so the treatment can bind properly." },
      { title: "Apply", detail: "Product worked through in fine sections for even coverage." },
      { title: "Seal", detail: "Blow-dried and flat-ironed at a controlled temperature to lock it in." },
      { title: "Aftercare", detail: "What to do — and not do — for the next three days." },
    ],
    pricing: [
      { name: "Keratin smoothing, short hair", price: "$300" },
      { name: "Keratin smoothing, long hair", price: "$450" },
      { name: "Hair botox", price: "$250" },
      { name: "Deep conditioning mask", price: "$40" },
    ],
    faqs: [
      {
        question: "How much is a keratin treatment in Coquitlam?",
        answer:
          "Keratin smoothing is $300 for short hair and $450 for long hair. Hair botox, a gentler repair-focused alternative, is $250.",
      },
      {
        question: "How long does keratin last?",
        answer:
          "Three to five months. It fades gradually rather than growing out in a line, so there is no awkward stage.",
      },
      {
        question: "Will it make my curls straight?",
        answer:
          "No — and that is by design. It loosens and smooths the curl, kills frizz, and speeds up drying. For permanently straight hair you want our permanent straightening service instead, from $250.",
      },
      {
        question: "What is the difference between keratin and hair botox?",
        answer:
          "Keratin is about smoothing and frizz control. Hair botox is about filling and repairing damaged strands — it adds condition and shine but smooths less. We will recommend the right one after seeing your hair.",
      },
    ],
    stylists: ["emir", "bulent-bill"],
    related: ["restorative-treatment-coquitlam", "blow-dry-coquitlam", "precision-haircut-coquitlam"],
  },
  {
    slug: "blow-dry-coquitlam",
    name: "Blowout & Styling",
    shortName: "Blowout",
    metaTitle: "Blowout & Hair Styling Coquitlam | Blow-Dry from $50 | Megas",
    metaDescription:
      "Blowouts and event styling in Coquitlam. Short hair $50, long hair $65, updos $110, evening styles $90. Book online at Megas Hair Salon.",
    eyebrow: "Styling",
    headline: "A blowout that survives the drive home.",
    lede: "Everyday polish, or the finished look for the night that matters.",
    image: "/images/photos/work-blowout-1.jpg",
    imageAlt: "Glossy finished blowout with volume and movement, Megas Hair Salon Coquitlam",
    priceFrom: "$50",
    priceValue: 50,
    duration: "30–60 minutes",
    body: [
      "Emir's blowouts are the reason a lot of clients book on a Friday. Volume at the root, a clean bend through the mid-lengths, and enough hold to get through dinner without going flat.",
      "For weddings, graduations, and anything with a photographer, we take longer: an evening style or updo is a built structure, pinned to survive the whole event rather than the first hour of it.",
      "If you are wearing a veil, a headpiece, or a specific neckline, bring a photo. It changes the shape more than people expect.",
    ],
    includes: [
      "Wash and scalp massage",
      "Heat protection through the lengths",
      "Round-brush blow-dry with root lift",
      "Finishing iron or setting where the look needs it",
      "Light hold, brushed out so it moves",
    ],
    process: [
      { title: "Brief", detail: "Sleek, bouncy, or textured — and what you are wearing it for." },
      { title: "Prep", detail: "Wash, massage, and heat protection." },
      { title: "Dry", detail: "Sectioned and round-brushed for root lift and shape." },
      { title: "Set", detail: "Iron or pins where the look calls for structure." },
      { title: "Finish", detail: "Brushed out and lightly held so it moves rather than freezes." },
    ],
    pricing: [
      { name: "Short hair blowout", price: "$50" },
      { name: "Long hair blowout", price: "$65" },
      { name: "Blowout with extensions", price: "$75" },
      { name: "Braid", price: "$80" },
      { name: "Evening style", price: "$90" },
      { name: "Updo", price: "$110" },
    ],
    faqs: [
      {
        question: "How much is a blowout in Coquitlam?",
        answer:
          "Short hair is $50 and long hair is $65. With extensions it is $75. Evening styles are $90 and updos are $110.",
      },
      {
        question: "How long will it last?",
        answer:
          "Two to four days for most hair types. Dry shampoo at the root and a silk pillowcase buy you an extra day.",
      },
      {
        question: "Do you do bridal and wedding party hair?",
        answer:
          "Yes — updos are $110 and evening styles $90 per person. For a full wedding party, call us at (778) 858-0396 so we can block the right stylists and time.",
      },
      {
        question: "Should I book a trial before my wedding?",
        answer:
          "We recommend it. Book an evening style or updo four to six weeks out, bring your headpiece, and we will note the exact setup for the day.",
      },
    ],
    stylists: ["emir", "fulya"],
    related: ["precision-haircut-coquitlam", "keratin-treatment-coquitlam", "hair-color-coquitlam"],
  },
  {
    slug: "restorative-treatment-coquitlam",
    name: "Restorative Treatments",
    shortName: "Treatments",
    metaTitle: "Hair Repair & Restorative Treatments Coquitlam | Megas Hair Salon",
    metaDescription:
      "Restorative hair treatments in Coquitlam — Aveda rituals from $40, deep conditioning $40, hair botox $250. Repair damage from colour and heat. Book online.",
    eyebrow: "Treatments",
    headline: "Repair first. Then colour.",
    lede: "Aveda rituals, deep conditioning, and bond repair for hair that has been through something.",
    image: "/images/photos/work-treatment-1.jpg",
    imageAlt: "Aveda restorative treatment being applied at Megas Hair Salon, Coquitlam",
    priceFrom: "$40",
    priceValue: 40,
    duration: "30–60 minutes",
    body: [
      "Over-processed, heat-damaged, or just tired after a winter of hot tools — hair reaches a point where more colour is the wrong answer. We would rather spend a visit rebuilding it than sell you a service it cannot take.",
      "We run Aveda botanical, Nutriplenish, and scalp treatments, plus deep conditioning masks and hair botox for structural repair. The scalp treatment in particular is under-rated: a lot of what people read as bad hair starts at the root.",
      "Bill's restorative work is one of the reasons clients follow him between cities. It is unglamorous, it is patient, and it is what makes the next colour appointment possible.",
    ],
    includes: [
      "Hair and scalp assessment",
      "Treatment matched to the actual damage",
      "Steam or heat processing where it helps",
      "Blow-dry finish",
      "A homecare plan you can afford to follow",
    ],
    process: [
      { title: "Assess", detail: "Porosity, elasticity, and scalp condition — the three things that decide the plan." },
      { title: "Choose", detail: "Botanical, Nutriplenish, scalp, mask, or hair botox, depending on what is wrong." },
      { title: "Treat", detail: "Applied and processed properly rather than rinsed off in three minutes." },
      { title: "Finish", detail: "Blow-dried so you can feel the difference before you leave." },
      { title: "Plan", detail: "What to do at home, and when colour will be safe again." },
    ],
    pricing: [
      { name: "Aveda botanical treatment", price: "$45" },
      { name: "Aveda Nutriplenish treatment", price: "$40" },
      { name: "Aveda scalp treatment", price: "$40" },
      { name: "Deep conditioning mask", price: "$40" },
      { name: "Hair botox", price: "$250" },
      { name: "Treatment (add-on to any service)", price: "$30" },
    ],
    faqs: [
      {
        question: "How much are hair treatments at Megas?",
        answer:
          "Aveda treatments and deep conditioning masks are $40–$45. Added on to another service, a treatment is $30. Hair botox, the intensive repair option, is $250.",
      },
      {
        question: "Can you fix my damaged hair?",
        answer:
          "We can usually improve condition significantly, and we will be honest about what treatment cannot fix — badly compromised ends often need to come off. We would rather tell you that than sell you six appointments.",
      },
      {
        question: "How often should I have a treatment?",
        answer:
          "For colour-treated hair, adding a $30 treatment to each colour appointment is the easiest habit. For repair work, a course every two to three weeks for a couple of months.",
      },
      {
        question: "Do I need a treatment before colouring?",
        answer:
          "Sometimes. If your hair is fragile, treating first means the colour takes more evenly and holds longer. We will tell you at the consultation.",
      },
    ],
    stylists: ["bulent-bill", "emir"],
    related: ["keratin-treatment-coquitlam", "blonde-specialist-coquitlam", "precision-haircut-coquitlam"],
  },
  {
    slug: "root-touch-up-coquitlam",
    name: "Root Touch-Up",
    shortName: "Root Touch-Up",
    metaTitle: "Root Touch-Up Coquitlam | Grey Coverage from $95 | Megas Hair Salon",
    metaDescription:
      "Root touch-up and grey coverage in Coquitlam from $95, or $145 with a blow-dry. Colour matched to your existing formula. Book online at Megas Hair Salon.",
    eyebrow: "Colour",
    headline: "Roots, handled in ninety minutes.",
    lede: "Regrowth handled in about ninety minutes, matched to the colour you already have.",
    image: "/images/photos/work-colour-2.jpg",
    imageAlt: "Seamless root touch-up and grey coverage at Megas Hair Salon, Coquitlam",
    priceFrom: "$95",
    priceValue: 95,
    duration: "60–90 minutes",
    body: [
      "Roots show at four to six weeks for most people. A touch-up puts colour only where it is needed, which is cheaper, faster, and far kinder to your hair than re-colouring the whole head every time.",
      "Because we keep your formula on file, a returning client's touch-up is genuinely a match rather than a close approximation — no band of slightly-wrong colour at the crown.",
      "If your tone has faded through the lengths as well, adding a $50 toner at the same appointment brings the whole head back without a full colour.",
    ],
    includes: [
      "Colour matched to your recorded formula",
      "Full grey coverage at the root",
      "Application only where regrowth needs it",
      "Optional gloss to refresh the lengths",
      "Wash and rough dry",
    ],
    process: [
      { title: "Match", detail: "We pull your formula and check it against how the colour has faded." },
      { title: "Apply", detail: "Colour placed at the regrowth only, cleanly along the hairline." },
      { title: "Process", detail: "Timed for full grey coverage without pulling through the lengths." },
      { title: "Refresh", detail: "Optional toner or gloss to bring the mid-lengths back." },
      { title: "Finish", detail: "Wash, rough dry, and rebook for the right interval." },
    ],
    pricing: [
      { name: "Root retouch", price: "$95" },
      { name: "Root retouch + blow-dry", price: "$145" },
      { name: "Base break", price: "$85" },
      { name: "Toner (add-on)", price: "$50" },
      { name: "Roots bleach out", price: "$150" },
    ],
    faqs: [
      {
        question: "How much is a root touch-up in Coquitlam?",
        answer:
          "A root retouch is $95, or $145 with a blow-dry. Adding a toner to refresh the lengths is $50. For blondes, a roots bleach out is $150.",
      },
      {
        question: "How often should I book one?",
        answer:
          "Every four to six weeks for full grey coverage. If you are stretching it, a base break at $85 softens the line between your colour and your natural root.",
      },
      {
        question: "Can I get a touch-up if I coloured somewhere else?",
        answer:
          "Yes. Your first visit takes slightly longer because we are matching to a formula we did not mix, so book the consultation option and we will get it right.",
      },
      {
        question: "How long does it take?",
        answer:
          "Sixty to ninety minutes, or a little longer with a blow-dry. It is the easiest appointment in the salon to fit into a working day.",
      },
    ],
    stylists: ["emir", "gazi", "fulya"],
    related: ["hair-color-coquitlam", "blonde-specialist-coquitlam", "balayage-coquitlam"],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

/** The six shown on the homepage grid. */
export const FEATURED_SERVICES = [
  "balayage-coquitlam",
  "blonde-specialist-coquitlam",
  "hair-color-coquitlam",
  "precision-haircut-coquitlam",
  "keratin-treatment-coquitlam",
  "blow-dry-coquitlam",
].map((slug) => SERVICES.find((s) => s.slug === slug)!);
