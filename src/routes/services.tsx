import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTASection } from "@/components/site/Layout";
import { ClipboardCheck, Hammer, Wrench, TrendingUp, Building2, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Real Estate Development, Planning & Consultancy | Adedara Ola & Co." },
      { name: "description", content: "Project planning, construction, refurbishment, real estate economics, building approvals and property maintenance across Lagos and Nigeria." },
      { property: "og:title", content: "Services — Adedara Ola & Co." },
      { property: "og:description", content: "Full-spectrum real estate services from planning to property management." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: ClipboardCheck,
    title: "Project Planning",
    desc: "We translate vision and capital into bankable, executable plans — site analysis, feasibility, phasing and design briefs.",
    benefits: ["Investment-grade feasibility", "Risk-mapped phasing", "Stakeholder alignment", "Clear cost & timeline"],
    process: ["Discovery & site analysis", "Feasibility & financial modelling", "Concept & masterplan", "Approvals roadmap"],
    faqs: [
      { q: "How long does planning take?", a: "Typical plans run 4–10 weeks depending on site complexity." },
      { q: "Do you handle approvals too?", a: "Yes — we can sequence approvals from initial planning." },
    ],
  },
  {
    icon: Hammer,
    title: "Project Construction",
    desc: "Disciplined construction delivery with cost, quality and time control — from groundbreaking to handover.",
    benefits: ["On-time delivery", "Cost discipline", "Quality assurance", "Transparent reporting"],
    process: ["Tender & contractor selection", "Mobilization", "Construction supervision", "Snagging & handover"],
    faqs: [
      { q: "Do you self-perform or manage contractors?", a: "We manage best-in-class contractors with rigorous oversight." },
    ],
  },
  {
    icon: Wrench,
    title: "Refurbishment",
    desc: "Modernize aging assets into high-performing properties — repositioned for today's tenants and tomorrow's value.",
    benefits: ["Yield uplift", "Reduced operating cost", "Modernized appeal", "Compliance upgrade"],
    process: ["Asset audit", "Repositioning brief", "Refit & finishing", "Re-leasing strategy"],
    faqs: [
      { q: "Do you work on heritage buildings?", a: "Yes — sensitively, with appropriate approvals." },
    ],
  },
  {
    icon: TrendingUp,
    title: "Real Estate Economics",
    desc: "Submarket research, valuation, demand modelling and ROI strategy to back every investment decision with evidence.",
    benefits: ["Evidence-based decisions", "Accurate valuation", "Demand modelling", "Exit strategy clarity"],
    process: ["Market scan", "Comparables analysis", "Cashflow modelling", "Recommendation report"],
    faqs: [
      { q: "Do you produce formal valuation reports?", a: "Yes, prepared in line with industry standards." },
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Securing Building Approvals",
    desc: "We navigate planning permissions, regulatory frameworks and statutory consents to unlock projects without friction.",
    benefits: ["Faster approvals", "Reduced regulatory risk", "Compliance assurance", "Single point of accountability"],
    process: ["Document audit", "Regulatory mapping", "Application & follow-up", "Approval & filing"],
    faqs: [
      { q: "Which agencies do you work with?", a: "LASBCA, LASPPPA, urban planning and lands authorities, among others." },
    ],
  },
  {
    icon: Building2,
    title: "Property Maintenance",
    desc: "Proactive facility management that preserves asset value, satisfies occupants and reduces lifecycle costs.",
    benefits: ["Preserved asset value", "Occupant satisfaction", "Predictable opex", "Compliance"],
    process: ["Asset onboarding", "Preventive maintenance plan", "24/7 reactive response", "Reporting & reviews"],
    faqs: [
      { q: "Do you manage residential and commercial?", a: "Both, across single assets and portfolios." },
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="A Full-Spectrum Real Estate Practice"
        subtitle="Six integrated services that cover the entire lifecycle of a property — from first concept to long-term management."
      />

      <div className="container-x py-16 md:py-24 space-y-20">
        {SERVICES.map((s, i) => (
          <ServiceBlock key={s.title} service={s} reverse={i % 2 === 1} />
        ))}
      </div>

      <CTASection />
    </SiteLayout>
  );
}

function ServiceBlock({ service, reverse }: { service: (typeof SERVICES)[number]; reverse: boolean }) {
  const Icon = service.icon;
  return (
    <section className={`grid lg:grid-cols-2 gap-12 items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          <Icon className="h-7 w-7" />
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl font-bold">{service.title}</h2>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{service.desc}</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div>
            <p className="eyebrow">Benefits</p>
            <ul className="mt-3 space-y-2 text-sm text-secondary">
              {service.benefits.map((b) => <li key={b}>• {b}</li>)}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Process</p>
            <ol className="mt-3 space-y-2 text-sm text-secondary">
              {service.process.map((p, idx) => <li key={p}>{idx + 1}. {p}</li>)}
            </ol>
          </div>
        </div>

        <a href="/contact" className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
          Discuss your project
        </a>
      </div>

      <div className="rounded-2xl bg-[var(--surface)] p-6 md:p-8 border border-border">
        <p className="eyebrow">FAQ</p>
        <div className="mt-4 divide-y divide-border">
          {service.faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 text-left">
        <span className="font-semibold text-navy">{q}</span>
        <ChevronDown className={`h-5 w-5 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}
