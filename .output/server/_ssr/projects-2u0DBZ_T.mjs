import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, P as PageHero, C as CTASection } from "./Layout-CYqs6nPr.mjs";
import { r as residentialImg, c as commercialImg, m as mixedImg } from "./project-mixed-Coi09pei.mjs";
import { c as constructionImg, i as infraImg } from "./project-infra-B3O6ETfY.mjs";
import { r as refurbImg } from "./project-refurb-CuD5-Gkf.mjs";
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
import "../_libs/lucide-react.mjs";
const CATEGORIES = ["All", "Residential", "Commercial", "Mixed Use", "Renovation", "Infrastructure"];
const PROJECTS = [{
  img: residentialImg,
  title: "Itire Residences",
  location: "Surulere, Lagos",
  category: "Residential",
  status: "Completed"
}, {
  img: commercialImg,
  title: "Marina Corporate Tower",
  location: "Lagos Island",
  category: "Commercial",
  status: "In Development"
}, {
  img: mixedImg,
  title: "Ola Heights Mixed-Use",
  location: "Ikeja, Lagos",
  category: "Mixed Use",
  status: "Completed"
}, {
  img: constructionImg,
  title: "Lekki Phase II Estate",
  location: "Lekki, Lagos",
  category: "Residential",
  status: "Under Construction"
}, {
  img: refurbImg,
  title: "Heritage Building Refit",
  location: "Yaba, Lagos",
  category: "Renovation",
  status: "Completed"
}, {
  img: infraImg,
  title: "Corridor Infrastructure",
  location: "Surulere, Lagos",
  category: "Infrastructure",
  status: "Planning"
}, {
  img: commercialImg,
  title: "Victoria Island Plaza",
  location: "Victoria Island",
  category: "Commercial",
  status: "Completed"
}, {
  img: residentialImg,
  title: "Magodo Garden Estate",
  location: "Magodo, Lagos",
  category: "Residential",
  status: "Completed"
}, {
  img: mixedImg,
  title: "Allen Avenue Quarter",
  location: "Ikeja",
  category: "Mixed Use",
  status: "In Development"
}];
function ProjectsPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Projects", title: "Developments That Define Markets", subtitle: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "As a platform, our combined stream of professionals have engaged in varied types of building projects ranging from designing commercial structures to raising some of the eye-catching city pride.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Take a cursory view of some of these past and ongoing projects." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-12 md:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-10", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(c), className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === c ? "bg-primary text-primary-foreground" : "bg-muted text-secondary hover:bg-muted/70"}`, children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-xl overflow-hidden bg-white border border-border hover:shadow-[var(--shadow-card)] transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700", width: 1024, height: 768 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-xs font-semibold text-secondary", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 rounded-md bg-primary/95 px-2.5 py-1 text-xs font-semibold text-primary-foreground", children: p.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-navy", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: p.location })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  ProjectsPage as component
};
