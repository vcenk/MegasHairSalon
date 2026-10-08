import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SOCIAL } from "@/lib/site";

const INSTAGRAM_HANDLE = "@megashairsalon";
const FEED_LIMIT = 6;

type InstagramMedia = {
  readonly id: string;
  readonly caption?: string;
  readonly media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  readonly media_url?: string;
  readonly thumbnail_url?: string;
  readonly permalink: string;
  readonly timestamp: string;
};

type InstagramResponse = {
  readonly data?: readonly InstagramMedia[];
};

async function getInstagramMedia(): Promise<readonly InstagramMedia[]> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!accessToken || !userId) return [];

  const apiVersion = process.env.INSTAGRAM_API_VERSION || "v26.0";
  const endpoint = new URL(`https://graph.instagram.com/${apiVersion}/${userId}/media`);
  endpoint.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
  );
  endpoint.searchParams.set("limit", String(FEED_LIMIT));
  endpoint.searchParams.set("access_token", accessToken);

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 21_600 },
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) {
      console.error(`Instagram feed request failed with status ${response.status}.`);
      return [];
    }

    const payload = (await response.json()) as InstagramResponse;
    return (payload.data ?? [])
      .filter((item) => item.media_url || item.thumbnail_url)
      .slice(0, FEED_LIMIT);
  } catch (error) {
    console.error("Instagram feed request failed.", error);
    return [];
  }
}

function mediaImage(media: InstagramMedia) {
  return media.media_type === "VIDEO"
    ? media.thumbnail_url || media.media_url
    : media.media_url || media.thumbnail_url;
}

function mediaAlt(media: InstagramMedia) {
  const caption = media.caption?.replace(/\s+/g, " ").trim();
  if (!caption) return `Recent hair work from ${INSTAGRAM_HANDLE}`;
  return caption.length > 120 ? `${caption.slice(0, 117)}...` : caption;
}

export async function InstagramFeed() {
  const media = await getInstagramMedia();

  return (
    <section className="bg-sand">
      <div className="shell py-16 md:py-20">
        <Reveal className="grid gap-7 border-b border-ink/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow className="mb-5">Fresh from the chair</Eyebrow>
            <h2 className="mask-line text-title text-balance">Latest from {INSTAGRAM_HANDLE}</h2>
            <p className="mt-5 max-w-2xl text-lede text-pretty text-muted">
              New colour, cuts, and transformations from the team—shared directly from the
              salon&apos;s Instagram.
            </p>
          </div>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noreferrer"
            className="sweep w-fit font-sans text-xs uppercase tracking-[0.18em] text-copper"
          >
            Follow on Instagram ↗
          </a>
        </Reveal>

        {media.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
            {media.map((item, index) => {
              const imageUrl = mediaImage(item);
              if (!imageUrl) return null;

              return (
                <Reveal key={item.id} delay={index * 60}>
                  <a
                    href={item.permalink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View post from ${INSTAGRAM_HANDLE} on Instagram`}
                    className="group relative block aspect-square overflow-hidden bg-clay"
                  >
                    <Image
                      src={imageUrl}
                      alt={mediaAlt(item)}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/70 to-transparent px-3 pb-3 pt-10 font-sans text-[0.625rem] uppercase tracking-[0.16em] text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      {item.media_type === "VIDEO" ? "Watch reel" : "View post"}
                      <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <Reveal className="mt-10 border border-ink/10 bg-bone/65 px-6 py-10 sm:px-10 md:flex md:items-center md:justify-between md:gap-10">
            <div>
              <p className="font-display text-2xl leading-tight">See the newest work on Instagram</p>
              <p className="mt-3 max-w-xl leading-7 text-muted">
                Follow Megas Hair Salon for recent transformations, colour inspiration, and
                behind-the-chair updates.
              </p>
            </div>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex shrink-0 items-center bg-ink px-6 py-3 font-sans text-xs uppercase tracking-[0.16em] text-bone transition-colors hover:bg-copper md:mt-0"
            >
              Open {INSTAGRAM_HANDLE} ↗
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
