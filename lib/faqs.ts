/**
 * The salon FAQ, grouped for the /faq page.
 *
 * Rule for this file: an answer either states something we know (from Phorest,
 * from lib/site.ts, or from the salon's own copy) or it points the reader at
 * someone who does. Nothing about deposits, cancellation windows, or refunds
 * is invented — those policies have not been supplied.
 */

import type { Faq } from "./services";

export type FaqGroup = {
  readonly slug: string;
  readonly name: string;
  readonly blurb: string;
  readonly faqs: readonly Faq[];
};

export const FAQ_GROUPS: readonly FaqGroup[] = [
  {
    slug: "booking",
    name: "Booking & appointments",
    blurb: "How to get in the chair, and what to expect when you do.",
    faqs: [
      {
        question: "How do I book an appointment at Megas?",
        answer:
          "Online through our Phorest booking page, at any hour — you choose your service, your stylist, and your time from live availability. You can also call 778-858-0396 during opening hours and we will book you in.",
      },
      {
        question: "Do you take walk-ins?",
        answer:
          "Sometimes, for quick services like a bang trim. Colour and cuts need blocked time, so booking ahead is far safer. Call first and we will tell you honestly whether there is a gap today.",
      },
      {
        question: "Is the consultation really free?",
        answer:
          "Yes. A consultation is listed on our menu as complimentary, takes about twenty minutes, and commits you to nothing. You leave with a plan and a firm price. For a first colour appointment — especially blonde work or a correction — it is the single most useful twenty minutes you can spend with us.",
      },
      {
        question: "How far ahead should I book?",
        answer:
          "Cuts and blowouts often have same-week availability. Colour needs longer, because a balayage or a full head of foils blocks three to four hours of a stylist's day. For a Saturday, book further out than you think.",
      },
      {
        question: "Can I book with a specific stylist?",
        answer:
          "Yes — every stylist is listed separately on the booking page with their own availability. If you are not sure who to choose, book a complimentary consultation and we will match you to the right person for what you want.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Cancellation and rescheduling terms are shown on your Phorest booking confirmation. If you need to change an appointment, the fastest thing is to call us on 778-858-0396 so we can offer the slot to someone else.",
      },
      {
        question: "How do I pay?",
        answer:
          "In the salon at the end of your appointment. If you would like to know what your visit will come to before you arrive, every service is priced on our menu and we confirm anything extra at the consultation, never at the till.",
      },
    ],
  },
  {
    slug: "colour",
    name: "Colour",
    blurb: "The service people travel to us for, and the one with the most questions.",
    faqs: [
      {
        question: "How much does colour cost?",
        answer:
          "Full colour starts at $120 for short hair and $150 for long. A root retouch is $95. Full-head highlights are $185 and balayage is $350, both including a toner. The complete list is on our price menu.",
      },
      {
        question: "Why does balayage cost more than highlights?",
        answer:
          "Time. Balayage is painted freehand, strand by strand, over three to four hours. A full head of foils is a faster technique. The trade is maintenance: most balayage clients stretch to three or four months, where foils show a regrowth line at four to six weeks.",
      },
      {
        question: "Can you fix colour that went wrong somewhere else?",
        answer:
          "Often, yes — colour correction is a significant part of what our master colourists do. It is booked as a consultation first, because the plan and the price depend entirely on what is currently on the hair. Bring photos of both the current colour and the goal.",
      },
      {
        question: "I have box dye on my hair. Is that a problem?",
        answer:
          "Not a dealbreaker, but say so when you book. Box dye lifts unevenly, so it changes the plan and sometimes the number of sessions. We would much rather know before we mix than discover it halfway through.",
      },
      {
        question: "Will you tell me if my hair cannot take what I am asking for?",
        answer:
          "Yes, and it is the part of the job we take most seriously. If your hair needs a treatment course before more lightening, we will say so and give you a route to get there over two or three appointments. A colourist who never says no is not protecting your hair.",
      },
      {
        question: "How do I stop blonde going brassy?",
        answer:
          "Purple shampoo about once a week, cooler water, heat protection before hot tools, and a gloss every couple of months — $85, and it refreshes the tone without touching lightener. Your stylist will give you the version of this that fits your hair rather than a generic routine.",
      },
    ],
  },
  {
    slug: "cuts",
    name: "Cuts & styling",
    blurb: "Getting a shape that works on week six, not just on the day.",
    faqs: [
      {
        question: "How much is a haircut?",
        answer:
          "Women's cuts are $60 for short hair and $75 for long or thick hair. Men's cuts are $55. Kids aged 3–11 are $40–$45, and a bang trim on its own is $20.",
      },
      {
        question: "Is a blow-dry included with a cut?",
        answer:
          "A wash and a rough dry are included. A full styled blowout is a separate service — $50 for short hair, $65 for long.",
      },
      {
        question: "Do you cut curly and textured hair?",
        answer:
          "Yes. Curl is cut differently — often dry, and always with shrinkage accounted for. Mention your curl pattern when you book so we allow the right amount of time.",
      },
      {
        question: "I want a big change. Should I do it in one visit?",
        answer:
          "Sometimes yes, sometimes no. We will talk it through dry and standing up, because that is how you will actually wear it. If a shape is better reached over two visits, we would rather tell you that than hand you something you cannot recreate at home.",
      },
      {
        question: "Do you do bridal and wedding party hair?",
        answer:
          "Yes. Updos are $110 and evening styles $90 per person. For a full wedding party, call 778-858-0396 so we can block the right stylists and enough time. We recommend a trial four to six weeks out — bring your headpiece.",
      },
    ],
  },
  {
    slug: "treatments",
    name: "Treatments & hair health",
    blurb: "Smoothing, repair, and knowing which one you actually need.",
    faqs: [
      {
        question: "What is the difference between keratin and hair botox?",
        answer:
          "Keratin smoothing is about frizz control and drying time — it coats and seals the cuticle. Hair botox fills and repairs damaged strands, adding condition and shine but smoothing less. Keratin is $300–$450 depending on length; hair botox is $250. We will recommend the right one after seeing your hair.",
      },
      {
        question: "Will keratin make my curly hair straight?",
        answer:
          "No, and that is by design. It loosens and smooths the curl and roughly halves your drying time, but curls come back. For permanently straight hair you want our permanent straightening service, from $250.",
      },
      {
        question: "How long does keratin last?",
        answer:
          "Three to five months. It fades gradually rather than growing out in a line, so there is no awkward stage. The single biggest factor in how long it holds is using a sulphate-free shampoo.",
      },
      {
        question: "My hair is damaged. Should I still colour it?",
        answer:
          "Come in for a consultation before you decide. Sometimes treating first means the colour takes more evenly and holds longer. Sometimes badly compromised ends simply need to come off — we will tell you that rather than sell you six appointments.",
      },
      {
        question: "Is a treatment worth adding to my colour appointment?",
        answer:
          "For colour-treated hair, adding a $30 treatment to each colour appointment is the easiest habit to keep and the one that makes the most difference over a year.",
      },
    ],
  },
  {
    slug: "visiting",
    name: "Visiting the salon",
    blurb: "Where we are, when we are open, and what to expect.",
    faqs: [
      {
        question: "Where are you?",
        answer:
          "150-1169 Pacific St, Coquitlam, BC V3B 0J1 — in Burquitlam, a short walk from Burquitlam SkyTrain Station. Call 778-858-0396 if you have trouble finding the entrance.",
      },
      {
        question: "What are your hours?",
        answer: "Monday to Saturday, 9:00 am to 6:00 pm. We are closed on Sundays.",
      },
      {
        question: "Where do I park?",
        answer:
          "There is street and building parking on Pacific Street. If you are coming from Port Moody or Vancouver, the SkyTrain drops you a short walk away.",
      },
      {
        question: "Do you speak Turkish?",
        answer:
          "Yes. Bülent, Gazi, Emir, and Fulya all speak Turkish and English. Türkçe konuşuyoruz — hoş geldiniz.",
      },
      {
        question: "Should I come with clean hair?",
        answer:
          "No need. Every service starts with a wash, and for colour a day or two of natural oil on the scalp is actually preferable. Come as you are.",
      },
      {
        question: "How long should I set aside?",
        answer:
          "A cut is 45–60 minutes. A blowout is 30–60. A root retouch is 60–90. Balayage and blonde work run three to five hours. Your booking confirmation will show the time blocked for your specific service.",
      },
    ],
  },
  {
    slug: "products",
    name: "Products & aftercare",
    blurb: "What we use, what we sell, and what to do at home.",
    faqs: [
      {
        question: "Can I buy the products you use on my hair?",
        answer:
          "Yes — we retail the professional lines we use in the salon, including Aveda. Ask your stylist at the end of your appointment and they will tell you which two or three products actually matter for your hair rather than selling you a shelf.",
      },
      {
        question: "Do I really need a sulphate-free shampoo?",
        answer:
          "If you have colour, a keratin treatment, or lightened hair, yes. Sulphates strip both. A cheap bottle can undo two months of a service you paid for, which makes it the least economical saving in haircare.",
      },
      {
        question: "What is the minimum I should be doing at home?",
        answer:
          "A shampoo and conditioner suited to your hair, heat protection before any hot tool, and a mask once a week if your hair is coloured or lightened. That is it. Anything beyond that is optional, and we will say so.",
      },
      {
        question: "Do you sell gift cards?",
        answer:
          "Please call us on 778-858-0396 — we will confirm what is available and arrange it for you.",
      },
    ],
  },
];

/** Flattened, for the FAQPage schema block. */
export const ALL_FAQS: readonly Faq[] = FAQ_GROUPS.flatMap((group) => group.faqs);
