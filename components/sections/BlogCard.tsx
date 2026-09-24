import Image from "next/image";
import Link from "next/link";
import { formatPostDate, type Post } from "@/lib/blog";

export function BlogCard({
  post,
  featured = false,
  priority = false,
  headingLevel = "h2",
}: {
  post: Post;
  featured?: boolean;
  priority?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <article>
      <Link href={`/blog/${post.slug}`} className="group block">
        <div
          className={`relative overflow-hidden rounded-sm bg-clay ${
            featured ? "aspect-16/8" : "aspect-16/10"
          }`}
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority={priority}
            sizes={
              featured
                ? "(min-width: 1024px) 64vw, 100vw"
                : "(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw"
            }
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </div>
        <div className={featured ? "md:max-w-2xl" : undefined}>
          <p className="mt-5 font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-copper">
            {post.category}
          </p>
          <Heading
            className={`mt-3 font-display leading-tight text-balance text-ink transition-colors group-hover:text-copper ${
              featured ? "text-3xl md:text-4xl" : "text-2xl"
            }`}
          >
            {post.title}
          </Heading>
          <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">{post.excerpt}</p>
          <p className="mt-4 text-xs tracking-wide text-muted">
            {formatPostDate(post.date)} · {post.readingTime}
          </p>
        </div>
      </Link>
    </article>
  );
}
