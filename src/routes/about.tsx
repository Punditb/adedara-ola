import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTASection } from "@/components/site/Layout";
import { Target, Eye, Compass, Shield, CheckCircle2 } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Adedara Ola & Co. — Real Estate Developers in Lagos" },
      { name: "description", content: "Learn about Adedara Ola & Co. — our story, vision, mission, governance and team driving real estate excellence across Nigeria." },
      { property: "og:title", content: "About Adedara Ola & Co." },
      { property: "og:description", content: "Real estate development, project planning and property consultancy in Lagos." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="A Practice Built on Discipline, Vision and Long-Term Value"
        subtitle="Adedara Ola & Co. is a Lagos-based real estate development, project planning, consultancy and management firm helping investors and property owners create assets that endure."
      />

      <section className="container-x py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-[var(--shadow-card)]">
          <img src={teamImg} alt="Adedara Ola & Co. team" loading="lazy" className="h-full w-full object-cover" width={1280} height={960} />
        </div>
        <div>
          <span className="eyebrow">Our Story</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Turning Vision Into Valuable Real Estate Assets</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            From our founding, we have approached every project with one belief: real
            estate is more than buildings — it is sustainable value, carefully planned
            and patiently built. We work alongside investors, developers, institutions
            and government agencies to plan, develop, manage and optimize real estate
            portfolios across Nigeria.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our practice integrates conceptualization and planning, positioning and
            design, and development and management — a continuous chain of expertise
            that protects investment value at every stage.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Eye, t: "Vision", d: "To become Africa's most trusted real estate development and consultancy brand." },
            { icon: Target, t: "Mission", d: "Deliver sustainable real estate value through expert planning, development and management." },
            { icon: Compass, t: "Core Purpose", d: "Empower clients to plan, develop and manage with absolute confidence." },
            { icon: Shield, t: "Governance", d: "Operate with transparency, accountability and uncompromising ethics." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl bg-white border border-border p-6">
              <Icon className="h-8 w-8 text-primary" />
              <p className="mt-4 font-display font-semibold text-navy text-lg">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Objectives</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">What We Set Out to Achieve</h2>
        </div>
        <ul className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-5">
          {[
            "Maximize return on investment for property owners and investors",
            "Deliver projects on time, on budget and to specification",
            "Champion regulatory compliance and ethical practice",
            "Build assets that endure economic and environmental cycles",
            "Mentor the next generation of real estate professionals",
            "Contribute to Nigeria's sustainable urban development",
          ].map((o) => (
            <li key={o} className="flex gap-3 items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <span className="text-secondary">{o}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">The People Behind the Practice</h2>
            <p className="mt-4 text-muted-foreground">Leadership profiles will be added soon.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-xl bg-white border border-border overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-navy/20" />
                <div className="p-5">
                  <p className="font-display font-semibold text-navy">Executive Name</p>
                  <p className="text-sm text-muted-foreground mt-1">Position / Role</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Milestones</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">A Practice Built Over Time</h2>
        </div>
        <ol className="mt-12 relative border-l-2 border-primary/30 pl-8 space-y-10">
          {[
            { year: "2010", t: "Founded", d: "Adedara Ola & Co. is established in Lagos." },
            { year: "2014", t: "First Major Development", d: "Delivery of flagship mixed-use development." },
            { year: "2019", t: "Consultancy Practice", d: "Formalization of investor-focused advisory services." },
            { year: "2024", t: "Expanding Horizons", d: "Active project pipeline across multiple Nigerian states." },
          ].map((m) => (
            <li key={m.year} className="relative">
              <span className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20" />
              <p className="eyebrow">{m.year}</p>
              <p className="mt-1 font-display font-semibold text-navy text-lg">{m.t}</p>
              <p className="text-muted-foreground text-sm mt-1">{m.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
