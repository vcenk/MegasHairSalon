import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { BOOKING, CONTACT } from "@/lib/site";

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
  md: "px-8 py-3.5 text-[0.8125rem]",
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

export function WhatsAppButton({
  variant = "outline",
  size = "md",
  className = "",
  children = "WhatsApp",
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message Megas Hair Salon on WhatsApp at ${CONTACT.phone}`}
      className={`${buttonClass(variant, size)} ${className}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M20 11.7a8 8 0 0 1-11.7 7.1L4 20l1.2-4.1A8 8 0 1 1 20 11.7Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.4 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.7 1.7c.1.3 0 .5-.2.7l-.5.6c-.2.2-.1.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.2.6 0l.7-.8c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.2-.6 1.6-.4.5-1.1.8-1.8.8-1.1 0-2.7-.6-4.4-2.1-1.3-1.2-2.4-2.8-2.6-4-.2-.8.1-1.6.6-2.3Z"
          fill="currentColor"
        />
      </svg>
      {children}
    </a>
  );
}
