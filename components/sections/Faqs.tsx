import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import type { Faq } from "@/lib/services";

/** Native <details> — keyboard-accessible and works without JavaScript. */
export function Faqs({
  faqs,
  title = "Questions we get asked",
  eyebrow = "FAQ",
}: {
  faqs: readonly Faq[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="shell py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <h2 className="text-title text-balance">{title}</h2>
        </Reveal>

        <div className="lg:col-span-8">
          <dl>
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 60}>
                <details className="group border-t border-ink/12 py-5 last:border-b">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                    <dt className="font-display text-lg text-ink md:text-xl">{faq.question}</dt>
                    <span
                      aria-hidden="true"
                      className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center text-copper transition-transform duration-300 group-open:rotate-45"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14">
                        <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1.25" />
                      </svg>
                    </span>
                  </summary>
                  <dd className="mt-3 max-w-2xl pr-10 text-[0.9375rem] leading-relaxed text-pretty text-muted">
                    {faq.answer}
                  </dd>
                </details>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
