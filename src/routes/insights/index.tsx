import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero, CTASection } from "@/components/site/Layout";
import { Calendar, ArrowRight } from "lucide-react";
import { CATS, getSortedPosts } from "@/lib/insights";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Real Estate Market Analysis & Investment | Adedara Ola & Co." },
      { name: "description", content: "Thought leadership on Nigerian real estate: market trends, investment strategy, construction, regulatory updates and property maintenance." },
      { property: "og:title", content: "Insights — Adedara Ola & Co." },
      { property: "og:description", content: "Real estate market analysis and investment thinking from Lagos." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});


function InsightsPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const sortedPosts = getSortedPosts();
  const list = cat === "All" ? sortedPosts : sortedPosts.filter((p) => p.tag === cat);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Insights"
        title="Thought Leadership for Real Estate Decision-Makers"
        subtitle="Discover profitable real estate trends, market insights, and essential updates from industry leaders and policy makers."
      />

      <section className="container-x py-12 md:py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "bg-muted text-secondary hover:bg-muted/70"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <Link
              key={p.slug}
              to="/insights/$slug"
              params={{ slug: p.slug }}
              className="group rounded-xl bg-white border border-border overflow-hidden hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" width={1024} height={768} />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.tag}</span>
                <h3 className="mt-2 font-display font-semibold text-navy text-lg leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="flex items-center gap-1 text-primary font-semibold">Read <ArrowRight className="h-3.5 w-3.5" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
