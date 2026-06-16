import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteLayout, P as PageHero, C as CTASection } from "./Layout-CyaXsrty.mjs";
import { C as ClipboardCheck, H as Hammer, W as Wrench, T as TrendingUp, B as Building2, a as ChevronDown } from "../_libs/lucide-react.mjs";
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
  desc: "We translate vision and capital into bankable, executable plans — site analysis, feasibility, phasing and design briefs.",
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
  desc: "Disciplined construction delivery with cost, quality and time control — from groundbreaking to handover.",
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
  desc: "Submarket research, valuation, demand modelling and ROI strategy to back every investment decision with evidence.",
  benefits: ["Evidence-based decisions", "Accurate valuation", "Demand modelling", "Exit strategy clarity"],
  process: ["Market scan", "Comparables analysis", "Cashflow modelling", "Recommendation report"],
  faqs: [{
    q: "Do you produce formal valuation reports?",
    a: "Yes, prepared in line with industry standards."
  }]
}, {
  icon: ClipboardCheck,
  title: "Securing Building Approvals",
  desc: "We navigate planning permissions, regulatory frameworks and statutory consents to unlock projects without friction.",
  benefits: ["Faster approvals", "Reduced regulatory risk", "Compliance assurance", "Single point of accountability"],
  process: ["Document audit", "Regulatory mapping", "Application & follow-up", "Approval & filing"],
  faqs: [{
    q: "Which agencies do you work with?",
    a: "LASBCA, LASPPPA, urban planning and lands authorities, among others."
  }]
}, {
  icon: Building2,
  title: "Property Maintenance",
  desc: "Proactive facility management that preserves asset value, satisfies occupants and reduces lifecycle costs.",
  benefits: ["Preserved asset value", "Occupant satisfaction", "Predictable opex", "Compliance"],
  process: ["Asset onboarding", "Preventive maintenance plan", "24/7 reactive response", "Reporting & reviews"],
  faqs: [{
    q: "Do you manage residential and commercial?",
    a: "Both, across single assets and portfolios."
  }]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Services", title: "A Full-Spectrum Real Estate Practice", subtitle: "Six integrated services that cover the entire lifecycle of a property — from first concept to long-term management." }),
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
