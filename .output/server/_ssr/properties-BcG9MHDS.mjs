import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHero, C as CTASection } from "./Layout-CyaXsrty.mjs";
import { r as residentialImg, c as commercialImg, m as mixedImg } from "./project-mixed-Coi09pei.mjs";
import { r as refurbImg } from "./project-refurb-CuD5-Gkf.mjs";
import { M as MapPin, d as Bed, e as Bath, f as Maximize2 } from "../_libs/lucide-react.mjs";
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
const PROPERTIES = [{
  slug: "4-bedroom-detached-duplex",
  img: residentialImg,
  title: "4-Bedroom Detached Duplex",
  location: "Lekki Phase 1",
  price: "₦185M",
  beds: 4,
  baths: 5,
  area: "420 sqm",
  tag: "For Sale"
}, {
  slug: "grade-a-office-floor",
  img: commercialImg,
  title: "Grade-A Office Floor",
  location: "Victoria Island",
  price: "₦24M/yr",
  beds: 0,
  baths: 4,
  area: "650 sqm",
  tag: "For Lease"
}, {
  slug: "retail-apartments-block",
  img: mixedImg,
  title: "Retail + Apartments Block",
  location: "Ikeja GRA",
  price: "₦920M",
  beds: 12,
  baths: 14,
  area: "1,800 sqm",
  tag: "For Sale"
}, {
  slug: "refurbished-penthouse",
  img: refurbImg,
  title: "Refurbished Penthouse",
  location: "Ikoyi",
  price: "₦310M",
  beds: 3,
  baths: 4,
  area: "280 sqm",
  tag: "For Sale"
}, {
  slug: "serviced-apartments",
  img: residentialImg,
  title: "Serviced Apartments",
  location: "Surulere",
  price: "₦7.5M/yr",
  beds: 2,
  baths: 2,
  area: "120 sqm",
  tag: "For Lease"
}, {
  slug: "retail-showroom",
  img: commercialImg,
  title: "Retail Showroom",
  location: "Allen Avenue",
  price: "₦14M/yr",
  beds: 0,
  baths: 2,
  area: "320 sqm",
  tag: "For Lease"
}];
function PropertiesPage() {
  const {
    location
  } = useRouterState();
  if (location.pathname !== "/properties") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Properties", title: "Premium Properties For Sale & Lease", subtitle: "A curated selection of residential, commercial and mixed-use properties across Lagos." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: PROPERTIES.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/properties/$slug", params: {
      slug: p.slug
    }, className: "group rounded-xl overflow-hidden bg-white border border-border hover:shadow-[var(--shadow-card)] transition-all block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700", width: 1024, height: 768 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground", children: p.tag })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-navy", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
          " ",
          p.location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl font-display font-bold text-primary", children: p.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border flex items-center gap-4 text-xs text-muted-foreground", children: [
          p.beds > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "h-4 w-4" }),
            " ",
            p.beds
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bath, { className: "h-4 w-4" }),
            " ",
            p.baths
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-4 w-4" }),
            " ",
            p.area
          ] })
        ] })
      ] })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  PropertiesPage as component
};
