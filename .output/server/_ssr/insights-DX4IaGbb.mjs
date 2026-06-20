import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, P as PageHero, C as CTASection } from "./Layout-CYqs6nPr.mjs";
import { c as commercialImg, m as mixedImg, r as residentialImg } from "./project-mixed-Coi09pei.mjs";
import { c as constructionImg, i as infraImg } from "./project-infra-B3O6ETfY.mjs";
import { r as refurbImg } from "./project-refurb-CuD5-Gkf.mjs";
import { j as Calendar, k as ArrowRight } from "../_libs/lucide-react.mjs";
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
const CATS = ["All", "Real Estate Development", "Property Investment", "Construction", "Market Analysis", "Regulatory Updates", "Property Maintenance"];
const POSTS = [{
  tag: "Market Analysis",
  title: "Lagos Real Estate Outlook 2026",
  excerpt: "How macro shifts are repricing Lagos submarkets and where opportunity is concentrating.",
  date: "May 18, 2026",
  img: commercialImg
}, {
  tag: "Property Investment",
  title: "Mixed-Use: The New Yield Frontier",
  excerpt: "Why mixed-use is outperforming single-use in Tier-1 Nigerian cities.",
  date: "Apr 22, 2026",
  img: mixedImg
}, {
  tag: "Regulatory Updates",
  title: "Securing Approvals Without Delays",
  excerpt: "A practitioner's view on accelerating LASBCA and LASPPPA workflows.",
  date: "Mar 10, 2026",
  img: constructionImg
}, {
  tag: "Real Estate Development",
  title: "Phasing Capital in Large Estates",
  excerpt: "Designing capital plans that match construction milestones.",
  date: "Feb 28, 2026",
  img: residentialImg
}, {
  tag: "Property Maintenance",
  title: "Preventive Maintenance Pays Twice",
  excerpt: "The economics of proactive facility management for institutional owners.",
  date: "Feb 04, 2026",
  img: refurbImg
}, {
  tag: "Construction",
  title: "Cost Discipline in Volatile Markets",
  excerpt: "Tooling and reporting that protect margins when prices move.",
  date: "Jan 19, 2026",
  img: infraImg
}];
function InsightsPage() {
  const [cat, setCat] = reactExports.useState("All");
  const list = cat === "All" ? POSTS : POSTS.filter((p) => p.tag === cat);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Insights", title: "Thought Leadership for Real Estate Decision-Makers", subtitle: "Discover profitable real estate trends, market insights, and essential updates from industry leaders and policy makers." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-12 md:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-10", children: CATS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c), className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "bg-muted text-secondary hover:bg-muted/70"}`, children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: list.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-xl bg-white border border-border overflow-hidden hover:shadow-[var(--shadow-card)] transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700", width: 1024, height: 768 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary uppercase tracking-wider", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display font-semibold text-navy text-lg leading-snug", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
              " ",
              p.date
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-primary font-semibold", children: [
              "Read ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ] })
          ] })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  InsightsPage as component
};
