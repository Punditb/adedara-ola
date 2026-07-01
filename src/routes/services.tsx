import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTASection } from "@/components/site/Layout";
import { ClipboardCheck, Hammer, Wrench, TrendingUp, Building2, ChevronDown, DraftingCompass, Cuboid, Zap, Landmark, Handshake } from "lucide-react";
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
    desc: "We provide the best Project Planning services for your real estate development needs by establishing the most suitable land use, building parameters, space allocations, and development possibilities in line with regulatory requirements and project objectives.",
    benefits: ["Maximized land potential", "Regulatory alignment", "Clear project direction", "Lower planning risk"],
    process: ["Site assessment", "Feasibility analysis", "Space planning", "Development roadmap"],
    faqs: [
      { q: "What is project planning in real estate development?", a: "It determines what can be built on a site, how space should be utilized, and the requirements needed for successful development." },
      { q: "Can you help if I am unsure what to build?", a: "Yes. We evaluate your land, goals, and market opportunities to recommend suitable development options." },
      { q: "What makes your planning approach different?", a: "We combine feasibility, regulatory compliance, and value creation to ensure every project starts on a solid foundation and ends as a landmark address." }
    ],
  },
  {
    icon: Hammer,
    title: "Project Construction",
    desc: "Ours are the best Project Construction services for your development needs, transforming approved concepts and designs into quality structures in accordance with project specifications, site conditions, and industry standards.",
    benefits: [
      "Quality execution",
      "Site-specific solutions",
      "Construction oversight",
      "Project durability",
    ],
    process: [
      "Design review",
      "Site evaluation",
      "Construction execution",
      "Project delivery",
    ],
    faqs: [
      {
        q: "What does project construction involve?",
        a: "It is the process of transforming approved concepts and designs into completed structures through proper site execution and supervision.",
      },
      {
        q: "Can construction details change after designs are prepared?",
        a: "Yes. Certain adjustments may be required to accommodate site conditions while preserving the project's objectives and quality standards.",
      },
      {
        q: "Do you supervise construction activities?",
        a: "Yes. We oversee construction processes to ensure compliance with specifications, quality requirements, and project expectations.",
      },
    ],
  },
  {
    icon: Wrench,
    title: "Refurbishment",
    desc: "Modernize aging assets into high-performing properties, repositioned for today's tenants and tomorrow's value.",
    benefits: [
      "Improved property value",
      "Modernized facilities",
      "Enhanced functionality",
      "Extended asset lifespan",
    ],
    process: [
      "Property assessment",
      "Improvement planning",
      "Upgrade execution",
      "Quality review",
    ],
    faqs: [
      {
        q: "What is property refurbishment?",
        a: "It involves upgrading, repairing, or modernizing an existing property to improve its appearance, performance, and value.",
      },
      {
        q: "Can refurbishment increase property value?",
        a: "Yes. Strategic improvements can enhance market appeal, usability, and long-term investment value.",
      },
      {
        q: "Do you handle both residential and commercial projects?",
        a: "Yes. We undertake refurbishment projects across residential, commercial, and mixed-use properties.",
      },
      {
        q: "What is your refurbishment approach?",
        a: "We focus on practical improvements that enhance durability, functionality, aesthetics, and overall property performance.",
      },
    ],
  },
  {
    icon: TrendingUp,
    title: "Real Estate Economics",
    desc: "We provide the best Real Estate Economics advice and directions for your real estate investments and developmental needs in such a manner that it offers you the superior edge in proper planning and implementations of projects.",
    benefits: [
      "Better investment decisions",
      "Balanced project economics",
      "Improved return potential",
      "Reduced financial risk",
    ],
    process: [
      "Project evaluation",
      "Cost analysis",
      "Return assessment",
      "Investment guidance",
    ],
    faqs: [
      {
        q: "What is Real Estate Economics?",
        a: "It is the process of evaluating development costs and expected returns to guide better real estate investment decisions.",
      },
      {
        q: "Can it improve project profitability?",
        a: "Yes. It helps identify development approaches that can deliver stronger returns without unnecessary expenditure.",
      },
      {
        q: "Can you help assess a proposed development idea?",
        a: "Yes. We evaluate project feasibility, market potential, development costs, and expected performance.",
      },
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Land and Building Documentation",
    desc: "We handle the entire approval and documentation process, securing the permits and authorizations required to give your development a firm legal foundation and a smooth path to execution.",
    benefits: [
      "Regulatory compliance",
      "Approval support",
      "Reduced project delays",
      "Proper documentation",
    ],
    process: [
      "Document review",
      "Approval planning",
      "Application processing",
      "Permit documentation",
    ],
    faqs: [
      {
        q: "Why are building approvals important?",
        a: "They ensure proposed developments comply with planning regulations and applicable development standards.",
      },
      {
        q: "Do you assist with LASPPPA approvals?",
        a: "Yes. We guide clients through the documentation and approval process required by relevant planning authorities.",
      },
      {
        q: "What documents are typically required?",
        a: "Requirements vary by project, but generally include property documents, survey plans, drawings, and supporting applications.",
      },
      {
        q: "What is your role in the approval process?",
        a: "We coordinate documentation, monitor application progress, and help clients navigate regulatory requirements efficiently.",
      },
    ],
  },
  {
    icon: Building2,
    title: "Property and Facilities Management",
    desc: "We provide proactive Property and Facilities Management services that keep your assets functional, well-maintained, secure, and valuable, allowing owners and occupants to enjoy lasting comfort and peace of mind.",
    benefits: [
      "Protected asset value",
      "Efficient operations",
      "Occupant comfort",
      "Preventive maintenance",
    ],
    process: [
      "Property assessment",
      "Maintenance planning",
      "Facility management",
      "Performance review",
    ],
    faqs: [
      {
        q: "What is Property and Facilities Management?",
        a: "It involves managing properties, facilities, and maintenance activities to ensure assets remain functional and valuable.",
      },
      {
        q: "Do you manage both residential and commercial properties?",
        a: "Yes. We provide management services for residential, commercial, and mixed-use developments.",
      },
      {
        q: "Can facilities management reduce operating costs?",
        a: "Yes. Planned maintenance and efficient facility operations often help reduce long-term operating expenses.",
      },
      {
        q: "What is your management approach?",
        a: "We focus on proactive maintenance, operational efficiency, and protecting the long-term value of every property.",
      },
    ],
  },
  {
    icon: DraftingCompass,
    title: "Architectural Concepts, Planning and Drawings",
    desc: "We develop thoughtful architectural concepts, planning layouts, and detailed drawings that translate your building vision into a clear, workable, and approval-ready design direction.",
    benefits: [
      "Functional designs",
      "Creative solutions",
      "Planning compliance",
      "Clear visualization",
    ],
    process: [
      "Project briefing",
      "Concept design",
      "Drawing development",
      "Design refinement",
    ],
    faqs: [
      {
        q: "What are architectural concepts and drawings?",
        a: "They are the visual and technical plans that transform your ideas into a buildable design.",
      },
      {
        q: "Can you design according to my budget?",
        a: "Yes. Our designs are developed with your functional needs, budget, and project objectives in mind.",
      },
      {
        q: "Do your designs comply with planning regulations?",
        a: "Yes. We prepare designs that align with applicable planning requirements and development standards.",
      },
    ],
  },
  {
    icon: Cuboid,
    title: "3D Designs and Animations",
    desc: "We create stunning 3D Designs and Animations that transform concepts into realistic visual experiences, allowing you to see, assess, and refine your project before it becomes a reality.",
    benefits: [
      "Realistic visualization",
      "Better design decisions",
      "Improved client confidence",
      "Reduced design revisions",
    ],
    process: [
      "Concept review",
      "3D modelling",
      "Visual refinement",
      "Animation delivery",
    ],
    faqs: [
      {
        q: "Why are 3D designs important?",
        a: "They allow clients to visualize their projects realistically before construction begins, making design decisions easier.",
      },
      {
        q: "Can I request design changes after viewing the 3D model?",
        a: "Yes. The visualization process makes it easier to identify and refine design details before construction.",
      },
      {
        q: "Do your 3D visuals reflect the final design?",
        a: "They are developed to accurately represent the approved concept, materials, and overall architectural intent.",
      },
    ],
  },
  {
    icon: Zap,
    title: "Mechanical and Electrical Solutions",
    desc: "Our Mechanical and Electrical Engineering designs and installations enhance the functionality, safety, efficiency, and comfort of your buildings through standard operating procedures and industry best practices.",

    benefits: [
      "Reliable building systems",
      "Improved energy efficiency",
      "Enhanced occupant comfort",
      "Safe installations",
    ],

    process: [
      "Project assessment",
      "System design",
      "Professional installation",
      "Testing & commissioning",
    ],

    faqs: [
      {
        q: "What do Mechanical and Electrical Solutions include?",
        a: "They cover the design and installation of essential building systems such as electrical, plumbing, HVAC, lighting, and related services.",
      },
      {
        q: "Do your installations comply with industry standards?",
        a: "Absolutely. Our work follows established engineering practices and applicable safety standards.",
      },
      {
        q: "What makes your M&E approach different?",
        a: "We integrate mechanical and electrical systems with the overall building design to achieve dependable performance, safety, and user comfort.",
      },
    ],
  },
  {
    icon: Landmark,
    title: "Structural Design and Development",
    desc: "We develop sound structural solutions that ensure the strength, stability, and durability of your buildings, providing the solid framework upon which successful developments are built.",

    benefits: [
      "Structural integrity",
      "Long-term durability",
      "Safety assurance",
      "Optimized performance",
    ],

    process: [
      "Structural assessment",
      "Design development",
      "Engineering analysis",
      "Implementation support",
    ],

    faqs: [
      {
        q: "What is structural design?",
        a: "It is the engineering process of designing a building's framework to ensure strength, stability, and long-term safety.",
      },
      {
        q: "Do you design structures for different building types?",
        a: "Yes. We develop structural solutions for residential, commercial, and mixed-use developments.",
      },
      {
        q: "How do you ensure structural safety?",
        a: "We apply sound engineering principles and appropriate design standards to achieve safe and dependable structures.",
      },
    ],
  },
  {
    icon: Handshake,
    title: "Property Sales and Purchases",
    desc: "We facilitate seamless property sales and purchases, connecting clients with the right opportunities while ensuring transparency, value, and peace of mind throughout the transaction process.",

    benefits: [
      "Trusted guidance",
      "Transparent transactions",
      "Verified opportunities",
      "Value-driven decisions",
    ],

    process: [
      "Client consultation",
      "Property evaluation",
      "Transaction support",
      "Successful completion",
    ],

    faqs: [
      {
        q: "Can you help me sell my property?",
        a: "Yes. We assist property owners in positioning and marketing their properties to attract suitable buyers.",
      },
      {
        q: "Do you verify property documentation?",
        a: "Yes. We help review available documentation and advise clients on important due diligence before transactions are concluded.",
      },
      {
        q: "Can you advise on investment properties?",
        a: "Absolutely. We help clients identify properties that align with their investment objectives and long-term value expectations.",
      },
      {
        q: "What makes your property advisory different?",
        a: "We combine market knowledge, professional guidance, and our Real Estate Economics approach to help clients make sound property decisions.",
      },
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="A Full-Spectrum Real Estate Practice"
        subtitle="A variety of integrated services that cover the entire lifecycle of a property, from first concept to long-term management."
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
