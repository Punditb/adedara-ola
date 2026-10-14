import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Stage2Form } from "@/components/associates/Stage2Form";

export const Route = createFileRoute("/associates/stage-2")({
  validateSearch: (search: Record<string, unknown>): { ref?: string } => ({
    ref: typeof search.ref === "string" ? search.ref : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Associate Application, Stage 2 | Adedara Ola & Co." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Stage2Page,
});

function Stage2Page() {
  const { ref } = Route.useSearch();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Associates"
        title="Stage 2: Full Assessment"
        subtitle="Thank you for progressing to Stage 2 of the Real Estate Associate Platform application."
      />
      <section className="container-x max-w-3xl py-12 md:py-16">
        <Stage2Form token={ref || ""} />
      </section>
    </SiteLayout>
  );
}