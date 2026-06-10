import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero, CTASection } from "@/components/site/Layout";
import { Calendar, ArrowRight } from "lucide-react";
import commercialImg from "@/assets/project-commercial.jpg";
import mixedImg from "@/assets/project-mixed.jpg";
import constructionImg from "@/assets/project-construction.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import refurbImg from "@/assets/project-refurb.jpg";
import infraImg from "@/assets/project-infra.jpg";

export const Route = createFileRoute("/insights")({
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

const CATS = ["All", "Real Estate Development", "Property Investment", "Construction", "Market Analysis", "Regulatory Updates", "Property Maintenance"] as const;

const POSTS = [
  { tag: "Market Analysis", title: "Lagos Real Estate Outlook 2026", excerpt: "How macro shifts are repricing Lagos submarkets and where opportunity is concentrating.", date: "May 18, 2026", img: commercialImg },
  { tag: "Property Investment", title: "Mixed-Use: The New Yield Frontier", excerpt: "Why mixed-use is outperforming single-use in Tier-1 Nigerian cities.", date: "Apr 22, 2026", img: mixedImg },
  { tag: "Regulatory Updates", title: "Securing Approvals Without Delays", excerpt: "A practitioner's view on accelerating LASBCA and LASPPPA workflows.", date: "Mar 10, 2026", img: constructionImg },
  { tag: "Real Estate Development", title: "Phasing Capital in Large Estates", excerpt: "Designing capital plans that match construction milestones.", date: "Feb 28, 2026", img: residentialImg },
  { tag: "Property Maintenance", title: "Preventive Maintenance Pays Twice", excerpt: "The economics of proactive facility management for institutional owners.", date: "Feb 04, 2026", img: refurbImg },
  { tag: "Construction", title: "Cost Discipline in Volatile Markets", excerpt: "Tooling and reporting that protect margins when prices move.", date: "Jan 19, 2026", img: infraImg },
];

function InsightsPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const list = cat === "All" ? POSTS : POSTS.filter((p) => p.tag === cat);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Insights"
        title="Thought Leadership for Real Estate Decision-Makers"
        subtitle="Market analysis, development insight and investment strategy from our practice."
      />

      <section className="container-x py-12 md:py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === c ? "bg-primary text-primary-foreground" : "bg-muted text-secondary hover:bg-muted/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <article key={i} className="group rounded-xl bg-white border border-border overflow-hidden hover:shadow-[var(--shadow-card)] transition-all">
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
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
