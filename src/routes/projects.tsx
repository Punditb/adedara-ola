import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero, CTASection } from "@/components/site/Layout";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import mixedImg from "@/assets/project-mixed.jpg";
import constructionImg from "@/assets/project-construction.jpg";
import refurbImg from "@/assets/project-refurb.jpg";
import infraImg from "@/assets/project-infra.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Real Estate Developments | Adedara Ola & Co." },
      { name: "description", content: "Explore residential, commercial, mixed-use, renovation and infrastructure projects delivered by Adedara Ola & Co. across Nigeria." },
      { property: "og:title", content: "Projects — Adedara Ola & Co." },
      { property: "og:description", content: "A portfolio of real estate developments across Lagos and Nigeria." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const CATEGORIES = ["All", "Residential", "Commercial", "Mixed Use", "Renovation", "Infrastructure"] as const;

const PROJECTS = [
  { img: residentialImg, title: "Itire Residences", location: "Surulere, Lagos", category: "Residential", status: "Completed" },
  { img: commercialImg, title: "Marina Corporate Tower", location: "Lagos Island", category: "Commercial", status: "In Development" },
  { img: mixedImg, title: "Ola Heights Mixed-Use", location: "Ikeja, Lagos", category: "Mixed Use", status: "Completed" },
  { img: constructionImg, title: "Lekki Phase II Estate", location: "Lekki, Lagos", category: "Residential", status: "Under Construction" },
  { img: refurbImg, title: "Heritage Building Refit", location: "Yaba, Lagos", category: "Renovation", status: "Completed" },
  { img: infraImg, title: "Corridor Infrastructure", location: "Surulere, Lagos", category: "Infrastructure", status: "Planning" },
  { img: commercialImg, title: "Victoria Island Plaza", location: "Victoria Island", category: "Commercial", status: "Completed" },
  { img: residentialImg, title: "Magodo Garden Estate", location: "Magodo, Lagos", category: "Residential", status: "Completed" },
  { img: mixedImg, title: "Allen Avenue Quarter", location: "Ikeja", category: "Mixed Use", status: "In Development" },
];

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <PageHero
  eyebrow="Our Projects"
  title="Developments That Define Markets"
  subtitle={
    <>
      As a platform, our combined stream of professionals have engaged in varied types of building projects ranging from designing commercial structures to raising some of the eye-catching city pride.
      <br />
      <br />
      <em>Take a cursory view of some of these past and ongoing projects.</em>
    </>
  }
/>

      <section className="container-x py-12 md:py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-secondary hover:bg-muted/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article key={i} className="group rounded-xl overflow-hidden bg-white border border-border hover:shadow-[var(--shadow-card)] transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" width={1024} height={768} />
                <span className="absolute top-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-xs font-semibold text-secondary">{p.category}</span>
                <span className="absolute top-3 right-3 rounded-md bg-primary/95 px-2.5 py-1 text-xs font-semibold text-primary-foreground">{p.status}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-navy">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
