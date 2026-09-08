import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { BOOKING } from "@/lib/site";

type Variant = "primary" | "outline" | "light" | "quiet";
type Size = "md" | "lg";

// Haze's buttons are uppercase pills with wide tracking at a small size.
const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans uppercase tracking-[0.18em] transition-colors duration-300 whitespace-nowrap";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-copper text-bone hover:bg-copper-deep",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-bone",
  light: "bg-bone text-ink hover:bg-clay",
  quiet: "border border-bone/50 text-bone hover:bg-bone hover:text-ink",
};

const SIZES: Record<Size, string> = {
  md: "px-7 py-3 text-[0.75rem]",
  lg: "px-9 py-4 text-[0.8125rem]",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md") {
  return `${BASE} ${VARIANTS[variant]} ${SIZES[size]}`;
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${buttonClass(variant, size)} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/**
 * Every booking CTA on the site funnels through here, so the Phorest URL and
 * the new-tab behaviour stay consistent.
 */
export function BookButton({
  variant = "primary",
  size = "md",
  className = "",
  children = "Book an appointment",
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={BOOKING.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonClass(variant, size)} ${className}`}
    >
      {children}
    </a>
  );
}
