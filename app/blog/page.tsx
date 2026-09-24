import type { Metadata } from "next";
import { BlogCard } from "@/components/sections/BlogCard";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { POSTS } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Journal | Hair Advice from Coquitlam Colourists",
  description:
    "Practical hair advice from experienced Coquitlam colourists: balayage maintenance, grey blending, consultations, haircuts, keratin, and healthy colour.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Journal", path: "/blog" }]} />

      <section className="shell pt-10 md:pt-14">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-5">Journal</Eyebrow>
          <h1 className="mask-line text-title text-balance">Answers we give in the chair</h1>
          <p className="mt-6 max-w-xl text-lede text-pretty text-muted">
            No trend roundups. Just the questions clients actually ask, answered by people
            who have been doing this for decades.
          </p>
        </Reveal>
      </section>

      <div className="shell grid gap-x-8 gap-y-14 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-3">
        {POSTS.map((post, index) => (
          <Reveal
            key={post.slug}
            delay={(index % 3) * 90}
            className={index === 0 ? "md:col-span-2 lg:col-span-2" : undefined}
          >
            <BlogCard post={post} featured={index === 0} priority={index === 0} />
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
