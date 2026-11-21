import Image from "next/image";
import Link from "next/link";

/**
 * The client's approved logo, exactly as supplied: purple shears and black
 * lettering on white. It is not recoloured or re-typeset.
 *
 * On the light bar the white ground is multiplied away so the logo sits
 * straight on the paper tone. Over the dark hero it would vanish, so it keeps
 * its own white ground and reads as a small white badge instead.
 */
export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <Link
      href="/"
      className="mr-2 block shrink-0 xl:mr-4"
      aria-label="Megas Hair Salon — home"
    >
      <Image
        src="/images/brands/megas-logo.png"
        alt=""
        width={994}
        height={614}
        priority
        className={`h-14 w-auto md:h-[5.5rem] ${
          tone === "light" ? "rounded-sm" : "mix-blend-multiply"
        }`}
      />
    </Link>
  );
}
