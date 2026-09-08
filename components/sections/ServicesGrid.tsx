import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/lib/services";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  // Curtain wipe rather than a fade, staggered across the row.
  return (
    <Reveal delay={(index % 3) * 120} className="rv-curtain">
      <Link href={`/services/${service.slug}`} className="group block">
        <div className="curtain relative aspect-4/5 overflow-hidden rounded-sm bg-clay">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-copper md:text-2xl">
            {service.name}
          </h3>
          <span className="shrink-0 font-sans text-xs tracking-wide text-muted">
            from {service.priceFrom}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">{service.lede}</p>
      </Link>
    </Reveal>
  );
}

export function ServicesGrid({
  services,
  eyebrow = "What we do",
  title = "Services",
  intro,
  footer,
}: {
  services: readonly Service[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  footer?: React.ReactNode;
}) {
  return (
    <section className="shell py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
        <h2 className="mask-line text-title text-balance">{title}</h2>
        {intro && <p className="mt-5 text-lede text-pretty text-muted">{intro}</p>}
      </Reveal>

      <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>

      {footer && <div className="mt-14 flex flex-wrap items-center gap-3">{footer}</div>}
    </section>
  );
}
