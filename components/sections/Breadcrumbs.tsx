import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ trail }: { trail: readonly Crumb[] }) {
  const full = [{ name: "Home", path: "/" }, ...trail];

  return (
    <>
      <nav aria-label="Breadcrumb" className="shell pt-28 md:pt-32">
        <ol className="flex flex-wrap items-center gap-2 font-sans text-xs tracking-wide text-muted">
          {full.map((crumb, index) => {
            const last = index === full.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-ink/70">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="transition-colors hover:text-copper">
                    {crumb.name}
                  </Link>
                )}
                {!last && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(full)} />
    </>
  );
}
