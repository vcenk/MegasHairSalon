import Link from "next/link";

/**
 * Wordmark lockup. `tone` follows the header state — light while the header
 * is overlaying the dark hero, ink once it settles onto the bone background.
 */
export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  const primary = tone === "light" ? "text-bone" : "text-ink";
  const secondary = tone === "light" ? "text-bone/55" : "text-muted";

  return (
    <Link href="/" className="group flex flex-col leading-none" aria-label="Megas Hair Salon — home">
      <span
        className={`font-display text-[1.625rem] font-normal tracking-[0.3em] whitespace-nowrap transition-colors duration-300 md:text-[2rem] ${primary}`}
      >
        MEGAS
      </span>
      <span
        className={`mt-2 hidden font-sans text-[0.6875rem] whitespace-nowrap uppercase tracking-[0.32em] transition-colors duration-300 sm:block ${secondary}`}
      >
        Hair Salon · Est. 1984
      </span>
    </Link>
  );
}
