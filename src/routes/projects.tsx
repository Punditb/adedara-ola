import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTASection } from "@/components/site/Layout";
import { Gallery } from "@/components/site/Gallery";
import { PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Adedara Ola & Co. — Real Estate Development in Lagos" },
      {
        name: "description",
        content:
          "See our first major development, a 17-unit apartment building in Oshodi, Lagos, and a proposed church auditorium in Sanya, designed and planned by Adedara Ola & Co.",
      },
      { property: "og:title", content: "Projects | Adedara Ola & Co." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Projects"
        title="Projects That Show How We Work"
        subtitle="Our first major development and a proposed institutional building, from concept and design through to construction."
      />

      {PROJECTS.map((project, index) => (
        <section
          key={project.slug}
          id={project.slug}
          data-reveal
          className={`scroll-mt-24 py-16 md:py-20 ${index % 2 === 1 ? "bg-[var(--surface)]" : ""}`}
        >
          <div className="container-x">
            <div className="grid gap-10 lg:grid-cols-[1.3fr,1fr]">
              <div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  {project.status}
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{project.title}</h2>
                <p className="mt-2 text-muted-foreground">{project.location}</p>
                <p className="mt-5 text-lg leading-relaxed text-secondary">{project.summary}</p>
                {project.details.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              <dl className="h-fit rounded-2xl border border-border bg-white p-6 md:p-8">
                {project.facts.map((fact) => (
                  <div key={fact.label} className="border-b border-border py-3 first:pt-0 last:border-0 last:pb-0">
                    <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">{fact.label}</dt>
                    <dd className="mt-1 text-secondary">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10">
              <Gallery slug={project.slug} images={project.images} />
              <p className="mt-4 text-xs text-muted-foreground">
                Images are 3D visualisations and the completed building may differ slightly in details.
                {project.images.some((image) => image.kind === "ai") &&
                  " Images marked “AI-enhanced” are artist’s impressions."}
              </p>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </SiteLayout>
  );
}