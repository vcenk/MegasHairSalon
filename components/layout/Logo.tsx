import Image from "next/image";
import Link from "next/link";

/**
 * Header lockup: the crossed-shears mark, the MEGAS wordmark, and the line
 * "Since 1984 in Türkiye" beneath it.
 *
 * 1984 is the year the salon began in Türkiye. It must never read as a
 * Coquitlam date — the salon opened here in 2025 — so it is always tied to
 * Türkiye in the same line.
 *
 * `tone` follows the header state: light while it floats over the dark hero,
 * ink once it settles onto the bone bar. The mark is silver on transparent, so
 * on the light bar it is inverted rather than swapped for a second asset.
 */
export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  const primary = tone === "light" ? "text-bone" : "text-ink";
  const secondary = tone === "light" ? "text-bone/60" : "text-muted";

  return (
    <Link
      href="/"
      className="group mr-2 flex shrink-0 items-center gap-3 leading-none xl:mr-4"
      aria-label="Megas Hair Salon — home"
    >
      <Image
        src="/images/brands/megas-mark.png"
        alt=""
        width={344}
        height={240}
        priority
        className={`h-9 w-auto transition-[filter] duration-300 md:h-12 ${
          tone === "light" ? "" : "invert"
        }`}
      />

      <span className="flex flex-col">
        <span
          className={`relative font-display text-[1.625rem] font-normal tracking-[0.3em] whitespace-nowrap transition-colors duration-300 md:text-[2rem] ${primary}`}
        >
          MEGAS
        </span>
        <span
          className={`mt-2 hidden font-sans text-[0.625rem] whitespace-nowrap uppercase tracking-[0.2em] transition-colors duration-300 sm:block ${secondary}`}
        >
          Since 1984 in Türkiye
        </span>
      </span>
    </Link>
  );
}
