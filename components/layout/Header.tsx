"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { BookButton } from "@/components/ui/Button";
import { PRIMARY_NAV } from "@/lib/nav";
import { CONTACT } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /** Only the homepage has a dark full-bleed hero for the bar to float over. */
  const canOverlay = pathname === "/";
  const overlaying = canOverlay && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkTone = overlaying ? "text-bone/85 hover:text-bone" : "text-ink/70 hover:text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        overlaying
          ? "bg-transparent"
          : "border-b border-ink/10 bg-bone/90 backdrop-blur-md supports-[backdrop-filter]:bg-bone/75"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-6 md:h-28">
        <Logo tone={overlaying ? "light" : "ink"} />

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {PRIMARY_NAV.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`sweep font-sans text-[0.9375rem] whitespace-nowrap uppercase tracking-[0.13em] transition-colors duration-300 ${linkTone} ${
                  active ? (overlaying ? "!text-bone" : "!text-copper") : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.phoneHref}
            className={`hidden font-sans text-[0.9375rem] whitespace-nowrap tracking-[0.08em] transition-colors duration-300 md:inline ${linkTone}`}
          >
            {CONTACT.phone}
          </a>
          <BookButton variant={overlaying ? "quiet" : "primary"} className="hidden sm:inline-flex">
            Book
          </BookButton>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`flex h-10 w-10 items-center justify-center xl:hidden ${
              overlaying ? "text-bone" : "text-ink"
            }`}
          >
            <span className="sr-only">Menu</span>
            <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true">
              <path
                d={menuOpen ? "M2 1 L20 13" : "M0 1.5 H22"}
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d={menuOpen ? "M20 1 L2 13" : "M0 12.5 H22"}
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              {!menuOpen && <path d="M0 7 H14" stroke="currentColor" strokeWidth="1.5" fill="none" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-ink/10 bg-bone xl:hidden"
      >
        <nav aria-label="Mobile" className="shell flex flex-col py-6">
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-ink/8 py-4 font-display text-2xl uppercase tracking-[0.12em] text-ink"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <BookButton size="lg" />
            <a
              href={CONTACT.phoneHref}
              className="tracked text-center font-sans text-[0.6875rem] text-muted"
            >
              {CONTACT.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
