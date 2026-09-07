/**
 * Renders a JSON-LD block. Content is our own structured data — never user
 * input — so the stringify is safe; the `<` escape guards against a stray
 * closing tag inside any copy we feed it.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
