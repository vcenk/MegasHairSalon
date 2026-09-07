import type { Metadata } from "next";
import { SITE } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Path with a leading slash, e.g. "/services/balayage-coquitlam". */
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

/**
 * Every page gets a unique title, description, canonical, and OG image.
 * Use this rather than hand-rolling `metadata` objects so nothing drifts.
 */
export function pageMeta({
  title,
  description,
  path,
  image = SITE.ogImage,
  type = "website",
  publishedTime,
}: PageMetaInput): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    // `absolute` opts out of the root layout's "%s | Megas Hair Salon"
    // template — these titles already carry the salon name where it helps,
    // and appending it again pushes them past what Google will render.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
