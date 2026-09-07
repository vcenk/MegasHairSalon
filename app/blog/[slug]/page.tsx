import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceCard } from "@/components/sections/ServicesGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { formatPostDate, getPost, POSTS } from "@/lib/blog";
import { getService } from "@/lib/services";
import { articleSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return pageMeta({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const service = post.relatedService ? getService(post.relatedService) : undefined;
  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Breadcrumbs
        trail={[
          { name: "Journal", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article>
        <header className="shell pt-10 md:pt-14">
          <Reveal className="mx-auto max-w-3xl">
            <Eyebrow className="mb-5">{post.category}</Eyebrow>
            <h1 className="text-title text-balance">{post.title}</h1>
            <p className="mt-6 text-lede text-pretty text-muted">{post.excerpt}</p>
            <p className="mt-6 text-xs tracking-wide text-muted">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.readingTime}
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-12 max-w-4xl">
            <div className="relative aspect-16/9 overflow-hidden rounded-sm bg-clay">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </header>

        <div className="shell py-16 md:py-20">
          <div className="mx-auto max-w-2xl">
            {post.body.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <Reveal key={index} as="h2" className="mt-12 font-display text-2xl text-balance text-ink md:text-3xl">
                    {block.text}
                  </Reveal>
                );
              }
              if (block.type === "ul") {
                return (
                  <Reveal key={index} as="ul" className="mt-6 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[1.0625rem] leading-relaxed text-pretty text-muted">
                        <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-copper" />
                        {item}
                      </li>
                    ))}
                  </Reveal>
                );
              }
              return (
                <Reveal key={index} as="p" className="mt-6 text-[1.0625rem] leading-relaxed text-pretty text-muted">
                  {block.text}
                </Reveal>
              );
            })}
          </div>
        </div>

        {service && (
          <section className="bg-sand">
            <div className="shell py-16 md:py-20">
              <Reveal className="max-w-xl">
                <Eyebrow className="mb-5">Mentioned in this piece</Eyebrow>
                <h2 className="text-title text-balance">{service.name}</h2>
              </Reveal>
              <div className="mt-10 max-w-sm">
                <ServiceCard service={service} />
              </div>
            </div>
          </section>
        )}

        {more.length > 0 && (
          <section className="shell py-16 md:py-20">
            <Reveal>
              <Eyebrow className="mb-5">Keep reading</Eyebrow>
              <h2 className="text-title text-balance">More from the journal</h2>
            </Reveal>
            <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
              {more.map((item, index) => (
                <Reveal key={item.slug} delay={index * 90}>
                  <Link href={`/blog/${item.slug}`} className="group block">
                    <div className="relative aspect-16/10 overflow-hidden rounded-sm bg-clay">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 768px) 48vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <h3 className="mt-5 font-display text-xl text-balance text-ink transition-colors group-hover:text-copper">
                      {item.title}
                    </h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </article>

      <CtaBand />

      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.metaDescription,
          path: `/blog/${post.slug}`,
          image: post.image,
          datePublished: post.date,
        })}
      />
    </>
  );
}
