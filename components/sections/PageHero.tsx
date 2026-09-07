import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Standard inner-page header. Sits under the fixed header, so it carries the
 * top padding for the whole site.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-[7.5rem] md:pt-36">
      <div className="shell">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
            <h1 className="text-title text-balance">{title}</h1>
            {lede && (
              <p className="mt-6 max-w-xl text-lede text-pretty text-muted">{lede}</p>
            )}
            {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
          </Reveal>

          {image && (
            <Reveal delay={120} className="lg:col-span-5">
              <div className="relative aspect-4/3 overflow-hidden rounded-sm">
                <Image
                  src={image}
                  alt={imageAlt ?? ""}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
