"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Fades content up as it enters the viewport. CSS owns the motion (and disables
 * it under prefers-reduced-motion); this only flips the flag.
 *
 * Content that is already on screen at mount is revealed synchronously rather
 * than waiting for the observer. IntersectionObserver delivery is tied to the
 * frame loop, so a throttled or occluded tab can leave above-the-fold content
 * stuck at opacity 0 — which is a blank page, not a subtle animation bug.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}: {
  as?: ElementType;
  /** Milliseconds. Use small offsets to stagger siblings. */
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const { top, bottom } = node.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0) {
      setShown(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-shown={shown}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
