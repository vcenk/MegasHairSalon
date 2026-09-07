import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { formatPostDate, POSTS } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Journal | Hair Advice from Coquitlam Colourists",
  description:
    "Straight answers from the team at Megas Hair Salon — balayage vs highlights, keratin in a wet winter, and how to choose a colourist you can trust.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Journal", path: "/blog" }]} />

      <section className="shell pt-10 md:pt-14">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-5">Journal</Eyebrow>
          <h1 className="text-title text-balance">
            The answers we give in the chair, written down.
          </h1>
          <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
            No trend roundups. Just the questions clients actually ask, answered by people
            who have been doing this for decades.
          </p>
        </Reveal>
      </section>

      <div className="shell grid gap-x-8 gap-y-14 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-3">
        {POSTS.map((post, index) => (
          <Reveal key={post.slug} delay={(index % 3) * 90} as="article">
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="relative aspect-16/10 overflow-hidden rounded-sm bg-clay">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-5 font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-copper">
                {post.category}
              </p>
              <h2 className="mt-3 font-display text-2xl leading-tight text-balance text-ink transition-colors group-hover:text-copper">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">{post.excerpt}</p>
              <p className="mt-4 text-xs tracking-wide text-muted">
                {formatPostDate(post.date)} · {post.readingTime}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>

      <CtaBand
        title="Rather just ask us?"
        body="A complimentary consultation answers more in twenty minutes than any article can. Book one online, or call and we will talk it through."
        secondary={{ href: "/contact", label: "Contact us" }}
      />
    </>
  );
}
