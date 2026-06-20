import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteLayout, P as PageHero, C as CTASection } from "./Layout-CYqs6nPr.mjs";
import { C as ClipboardCheck, H as Hammer, W as Wrench, T as TrendingUp, B as Building2, D as DraftingCompass, a as Cuboid, Z as Zap, L as Landmark, b as Handshake, c as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const SERVICES = [{
  icon: ClipboardCheck,
  title: "Project Planning",
  desc: "We provide the best Project Planning services for your real estate development needs by establishing the most suitable land use, building parameters, space allocations, and development possibilities in line with regulatory requirements and project objectives.",
  benefits: ["Investment-grade feasibility", "Risk-mapped phasing", "Stakeholder alignment", "Clear cost & timeline"],
  process: ["Discovery & site analysis", "Feasibility & financial modelling", "Concept & masterplan", "Approvals roadmap"],
  faqs: [{
    q: "How long does planning take?",
    a: "Typical plans run 4–10 weeks depending on site complexity."
  }, {
    q: "Do you handle approvals too?",
    a: "Yes — we can sequence approvals from initial planning."
  }]
}, {
  icon: Hammer,
  title: "Project Construction",
  desc: "Ours are the best Project Construction services for your development needs, transforming approved concepts and designs into quality structures in accordance with project specifications, site conditions, and industry standards.",
  benefits: ["On-time delivery", "Cost discipline", "Quality assurance", "Transparent reporting"],
  process: ["Tender & contractor selection", "Mobilization", "Construction supervision", "Snagging & handover"],
  faqs: [{
    q: "Do you self-perform or manage contractors?",
    a: "We manage best-in-class contractors with rigorous oversight."
  }]
}, {
  icon: Wrench,
  title: "Refurbishment",
  desc: "Modernize aging assets into high-performing properties — repositioned for today's tenants and tomorrow's value.",
  benefits: ["Yield uplift", "Reduced operating cost", "Modernized appeal", "Compliance upgrade"],
  process: ["Asset audit", "Repositioning brief", "Refit & finishing", "Re-leasing strategy"],
  faqs: [{
    q: "Do you work on heritage buildings?",
    a: "Yes — sensitively, with appropriate approvals."
  }]
}, {
  icon: TrendingUp,
  title: "Real Estate Economics",
  desc: "We provide the best Real Estate Economics advice and directions for your real estate investments and developmental needs in such a manner that it offers you the superior edge in proper planning and implementations of projects.",
  benefits: ["Evidence-based decisions", "Accurate valuation", "Demand modelling", "Exit strategy clarity"],
  process: ["Market scan", "Comparables analysis", "Cashflow modelling", "Recommendation report"],
  faqs: [{
    q: "Do you produce formal valuation reports?",
    a: "Yes, prepared in line with industry standards."
  }]
}, {
  icon: ClipboardCheck,
  title: "Land and Building Documentation",
  desc: "We handle the entire approval and documentation process, securing the permits and authorizations required to give your development a firm legal foundation and a smooth path to execution.",
  benefits: ["Faster approvals", "Reduced regulatory risk", "Compliance assurance", "Single point of accountability"],
  process: ["Document audit", "Regulatory mapping", "Application & follow-up", "Approval & filing"],
  faqs: [{
    q: "Which agencies do you work with?",
    a: "LASBCA, LASPPPA, urban planning and lands authorities, among others."
  }]
}, {
  icon: Building2,
  title: "Property and Facilities Management",
  desc: "We provide proactive Property and Facilities Management services that keep your assets functional, well-maintained, secure, and valuable, allowing owners and occupants to enjoy lasting comfort and peace of mind.",
  benefits: ["Preserved asset value", "Occupant satisfaction", "Predictable opex", "Compliance"],
  process: ["Asset onboarding", "Preventive maintenance plan", "24/7 reactive response", "Reporting & reviews"],
  faqs: [{
    q: "Do you manage residential and commercial?",
    a: "Both, across single assets and portfolios."
  }]
}, {
  icon: DraftingCompass,
  title: "Architectural Concepts, Planning and Drawings",
  desc: "We develop thoughtful architectural concepts, planning layouts, and detailed drawings that translate your building vision into a clear, workable, and approval-ready design direction.",
  benefits: ["Clear design direction", "Functional space planning", "Approval-ready drawings", "Better project coordination"],
  process: ["Client brief & site review", "Concept development", "Planning layout & design refinement", "Final architectural drawings"],
  faqs: [{
    q: "Can you create drawings for approval purposes?",
    a: "Yes. We prepare architectural drawings that can support planning, documentation, and approval processes."
  }, {
    q: "Do you work from an existing idea or sketch?",
    a: "Yes. We can refine your rough idea, sketch, or reference concept into a proper architectural direction."
  }]
}, {
  icon: Cuboid,
  title: "3D Designs and Animations",
  desc: "We create stunning 3D Designs and Animations that transform concepts into realistic visual experiences, allowing you to see, assess, and refine your project before it becomes a reality.",
  benefits: ["Realistic project visualization", "Better design decisions", "Improved client presentations", "Early correction of design issues"],
  process: ["Concept and drawing review", "3D modelling", "Material and lighting setup", "Animation/render delivery"],
  faqs: [{
    q: "Can you create 3D visuals before construction starts?",
    a: "Yes. We can create realistic 3D images and animations before construction begins, helping you understand the final look and feel of the project."
  }, {
    q: "Can the design be adjusted after seeing the 3D view?",
    a: "Yes. One major advantage of 3D visualization is that it allows design adjustments before physical work begins."
  }]
}, {
  icon: Zap,
  title: "Mechanical and Electrical Solutions",
  desc: "Our Mechanical and Electrical Engineering designs and installations enhance the functionality, safety, efficiency, and comfort of your buildings through standard operating procedures and industry best practices.",
  benefits: ["Improved building efficiency", "Enhanced occupant comfort", "Reliable utility systems", "Compliance with industry standards"],
  process: ["Requirements assessment", "System design and engineering", "Installation and integration", "Testing and commissioning"],
  faqs: [{
    q: "Do you handle both mechanical and electrical installations?",
    a: "Yes. We provide integrated mechanical and electrical design, installation, testing, and commissioning services for residential, commercial, and mixed-use developments."
  }, {
    q: "Can your team work on existing buildings?",
    a: "Absolutely. We handle both new developments and upgrades to existing facilities, improving performance, safety, and operational efficiency."
  }]
}, {
  icon: Landmark,
  title: "Structural Design and Development",
  desc: "We develop sound structural solutions that ensure the strength, stability, and durability of your buildings, providing the solid framework upon which successful developments are built.",
  benefits: ["Stronger building framework", "Improved safety and stability", "Durable structural performance", "Reduced construction risk"],
  process: ["Site and design review", "Structural concept development", "Engineering calculations and detailing", "Construction support and review"],
  faqs: [{
    q: "Do you provide structural drawings for approval?",
    a: "Yes. We prepare structural designs and drawings that support regulatory approvals and construction execution."
  }, {
    q: "Can you review an existing structural design?",
    a: "Yes. We can assess existing structural drawings or completed works to identify risks, improvement areas, and compliance issues."
  }]
}, {
  icon: Handshake,
  title: "Property Sales and Purchases",
  desc: "We facilitate seamless property sales and purchases, connecting clients with the right opportunities while ensuring transparency, value, and peace of mind throughout the transaction process.",
  benefits: ["Access to suitable opportunities", "Transparent transaction support", "Better value decisions", "Peace of mind from start to finish"],
  process: ["Client requirement review", "Property sourcing or listing", "Negotiation and due diligence support", "Transaction coordination and closure"],
  faqs: [{
    q: "Do you help buyers find suitable properties?",
    a: "Yes. We help clients identify properties that match their goals, budget, location preference, and investment expectations."
  }, {
    q: "Can you assist with selling an existing property?",
    a: "Yes. We support property owners with positioning, buyer sourcing, negotiation, and transaction coordination."
  }]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Services", title: "A Full-Spectrum Real Estate Practice", subtitle: "A variety of integrated services that cover the entire lifecycle of a property, from first concept to long-term management." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x py-16 md:py-24 space-y-20", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceBlock, { service: s, reverse: i % 2 === 1 }, s.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function ServiceBlock({
  service,
  reverse
}) {
  const Icon = service.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `grid lg:grid-cols-2 gap-12 items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl md:text-4xl font-bold", children: service.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg leading-relaxed", children: service.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid sm:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Benefits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm text-secondary", children: service.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "• ",
            b
          ] }, b)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Process" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-3 space-y-2 text-sm text-secondary", children: service.process.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            idx + 1,
            ". ",
            p
          ] }, p)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact", className: "mt-8 inline-flex rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90", children: "Discuss your project" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[var(--surface)] p-6 md:p-8 border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 divide-y divide-border", children: service.faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { q: f.q, a: f.a }, i)) })
    ] })
  ] });
}
function FAQItem({
  q,
  a
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen((v) => !v), className: "w-full flex items-center justify-between gap-4 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-navy", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-5 w-5 text-primary transition-transform ${open ? "rotate-180" : ""}` })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: a })
  ] });
}
export {
  ServicesPage as component
};
