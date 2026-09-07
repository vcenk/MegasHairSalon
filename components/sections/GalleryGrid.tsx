"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY, GALLERY_CATEGORIES } from "@/lib/gallery";

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");

  const items = filter === "All" ? GALLERY : GALLERY.filter((item) => item.category === filter);

  return (
    <>
      <div
        role="group"
        aria-label="Filter gallery by category"
        className="rule flex flex-wrap gap-x-6 gap-y-3 pt-6"
      >
        {GALLERY_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={`font-sans text-sm tracking-wide transition-colors duration-300 ${
              filter === category ? "text-copper" : "text-muted hover:text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <figure key={item.src} className="mb-6 break-inside-avoid">
            <div
              className={`relative overflow-hidden rounded-sm bg-clay ${
                item.tall ? "aspect-3/4" : "aspect-4/3"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm">
              <span className="text-ink">{item.caption}</span>
              <span className="shrink-0 text-xs tracking-wide text-muted">{item.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
