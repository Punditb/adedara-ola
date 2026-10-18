import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTASection } from "@/components/site/Layout";
import { AboutPanel } from "@/components/site/BrandTile";
import { Target, Eye, Compass, Shield, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Adedara Ola & Co. — Real Estate Development & Consultancy in Lagos" },
      {
        name: "description",
        content:
          "The story, vision, mission and leadership of Adedara Ola & Co., a Lagos real estate development and consultancy firm building a platform that raises professional standards.",
      },
      { property: "og:title", content: "About Adedara Ola & Co." },
      {
        property: "og:description",
        content: "Real estate development, project planning and property consultancy in Lagos.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const CARDS = [
  { icon: Eye, t: "Vision", d: "To become Africa’s premier platform-institution, creating multi-dimensional possibilities for real estate practitioners to function effectively and efficiently." },
  { icon: Target, t: "Mission", d: "To constantly review and improve our platform's capabilities, enabling real estate ecosystem practitioners to maximize dividends, progress, and development." },
  { icon: Compass, t: "Core Purpose", d: "To drive real estate growth through cutting-edge innovation, investment opportunities, infrastructure development, and reduced risks for lasting value." },
  { icon: Shield, t: "Governance", d: "Determined to make a significant difference, we believe strongly in the principles of impact that should govern our behavior within the communities we seek to reshape." },
];

const OBJECTIVES = [
  "Build a formidable working architecture that powers the real estate ecosystem.",
  "Make it easier and less stressful for practitioners to perform effectively in the industry.",
  "Open up possibilities and prospects that drive major investment into the real estate sector.",
  "Contribute broadly to consumer-end infrastructure development within the industry.",
  "Help reduce the overall cost and risk of real estate investment for existing and intending players.",
];

const MILESTONES = [
  { when: "2022", t: "Founded", d: "Adedara Ola & Co. is established in Lagos." },
  { when: "October 2023", t: "Registered", d: "Incorporated as a limited liability company, RC 7192962." },
  { when: "Now", t: "Our First Major Development", d: "A 17-unit apartment building near Murtala Muhammed International Airport, designed, planned and being built by our own team of associates." },
  { when: "2026", t: "Associate Platform Launches", d: "We open our Real Estate Associate Platform to qualified professionals across the property value chain." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="A Platform Built to Raise the Standard of Real Estate"
        subtitle="Adedara Ola & Co. is a Lagos-based real estate development and consultancy firm that brings planning, economics, construction and management together, so every project starts with a clear plan and ends in lasting value."
      />

      <section data-reveal className="container-x py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <AboutPanel />
        <div>
          <span className="eyebrow">Our Story</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">Real Estate Is More Than Buildings</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Property is one of the biggest decisions anyone makes, yet the industry is a chain of individual
            professionals, and too often the links do not connect. Clients feel it in delays, confusion and avoidable
            risk. Adedara Ola & Co. was founded in 2022 to close that gap.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Since then we have guided landowners, investors, developers and individual clients through buying, selling,
            developing and financing property, and we have secured building approvals and planning permits from agencies
            such as the Lagos State Building Control Agency (LASBCA) in cases that had stalled for a long time.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our first major development, a 17-unit apartment building near Murtala Muhammed International Airport, is
            being built by our own team of associates, from concept and design through to construction.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Now we are opening that model to others. The Adedara Ola & Co. Real Estate Associate Platform brings
            qualified professionals under one roof and one standard, so everyone behind your project answers to the same
            bar. We registered as a limited liability company on 25 October 2023 (RC 7192962), and everything we do is
            guided by one line:
          </p>
          <p className="mt-4 border-l-4 border-primary pl-4 font-display text-xl italic text-navy">
            ....value driven by excellence
          </p>
        </div>
      </section>

      <section data-reveal className="bg-[var(--surface)] py-16 md:py-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl bg-white border border-border p-6">
              <Icon className="h-8 w-8 text-primary" />
              <p className="mt-4 font-display font-semibold text-navy text-lg">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-reveal className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Objectives</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">What We Stand Tall to Achieve</h2>
        </div>
        <ul className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-5">
          {OBJECTIVES.map((o) => (
            <li key={o} className="flex gap-3 items-start">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <span className="text-secondary">{o}</span>
            </li>
          ))}
        </ul>
      </section>

      <section data-reveal className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Milestones</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">A Practice Built Over Time</h2>
        </div>
        <ol className="mt-12 relative border-l-2 border-primary/30 pl-8 space-y-10">
          {MILESTONES.map((m) => (
            <li key={m.when} className="relative">
              <span className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20" />
              <p className="eyebrow">{m.when}</p>
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