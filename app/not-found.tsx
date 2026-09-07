import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70svh] flex-col justify-center py-32">
      <Eyebrow className="mb-5">404</Eyebrow>
      <h1 className="text-title text-balance">This page has grown out.</h1>
      <p className="mt-6 max-w-lg text-lede text-pretty text-muted">
        The link you followed does not exist any more. The services, the price menu, and the
        booking page are all still where you left them.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/menu" variant="outline">
          Price menu
        </ButtonLink>
      </div>
    </section>
  );
}
