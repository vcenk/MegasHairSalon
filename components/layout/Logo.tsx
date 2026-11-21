import Image from "next/image";
import Link from "next/link";

/**
 * The client's approved logo (purple shears, MEGAS, HAIR SALON), not
 * re-typeset. White is removed so it sits straight on the header.
 *
 * `tone` follows the header state: over the dark hero the black lettering
 * would vanish, so a second asset with paper-white lettering and lifted shears
 * is cross-faded in (see scripts/prep-logo.mjs). On the light bar the logo is
 * exactly as supplied.
 */
export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  const size = "h-14 w-auto md:h-[5.5rem]";

  return (
    <Link
      href="/"
      className="relative mr-2 block shrink-0 xl:mr-4"
      aria-label="Megas Hair Salon — home"
    >
      <Image
        src="/images/brands/megas-logo.png"
        alt=""
        width={994}
        height={614}
        priority
        className={`${size} transition-opacity duration-300 ${tone === "ink" ? "opacity-100" : "opacity-0"}`}
      />
      <Image
        src="/images/brands/megas-logo-light.png"
        alt=""
        width={994}
        height={614}
        priority
        className={`${size} absolute inset-0 transition-opacity duration-300 ${tone === "light" ? "opacity-100" : "opacity-0"}`}
      />
    </Link>
  );
}
