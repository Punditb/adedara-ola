import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHero, C as CTASection } from "./Layout-DUUi7oVv.mjs";
import { a as getSortedPosts, C as CATS } from "./insights-CRXJdPDA.mjs";
import { q as Calendar, o as ArrowRight } from "../_libs/lucide-react.mjs";
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
function InsightsPage() {
  const [cat, setCat] = reactExports.useState("All");
  const sortedPosts = getSortedPosts();
  const list = cat === "All" ? sortedPosts : sortedPosts.filter((p) => p.tag === cat);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Insights", title: "Thought Leadership for Real Estate Decision-Makers", subtitle: "Discover profitable real estate trends, market insights, and essential updates from industry leaders and policy makers." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-12 md:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-10", children: CATS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c), className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "bg-muted text-secondary hover:bg-muted/70"}`, children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: list.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights/$slug", params: {
        slug: p.slug
      }, className: "group rounded-xl bg-white border border-border overflow-hidden hover:shadow-[var(--shadow-card)] transition-all", children: [
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
      ] }, p.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  InsightsPage as component
};
