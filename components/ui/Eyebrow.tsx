import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
  tone = "copper",
}: {
  children: ReactNode;
  className?: string;
  tone?: "copper" | "muted" | "light";
}) {
  const colour =
    tone === "copper" ? "text-copper" : tone === "light" ? "text-bone/60" : "text-muted";

  return (
    <p className={`font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] ${colour} ${className}`}>
      {children}
    </p>
  );
}
