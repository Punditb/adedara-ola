import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout, P as PageHero, C as CTASection } from "./Layout-CtTmM7iL.js";
import { MapPin, Bed, Bath, Maximize2 } from "lucide-react";
import { r as residentialImg, c as commercialImg, m as mixedImg, a as refurbImg } from "./project-refurb-EAHwJaWV.js";
import "@tanstack/react-router";
import "react";
const PROPERTIES = [{
  img: residentialImg,
  title: "4-Bedroom Detached Duplex",
  location: "Lekki Phase 1",
  price: "₦185M",
  beds: 4,
  baths: 5,
  area: "420 sqm",
  tag: "For Sale"
}, {
  img: commercialImg,
  title: "Grade-A Office Floor",
  location: "Victoria Island",
  price: "₦24M/yr",
  beds: 0,
  baths: 4,
  area: "650 sqm",
  tag: "For Lease"
}, {
  img: mixedImg,
  title: "Retail + Apartments Block",
  location: "Ikeja GRA",
  price: "₦920M",
  beds: 12,
  baths: 14,
  area: "1,800 sqm",
  tag: "For Sale"
}, {
  img: refurbImg,
  title: "Refurbished Penthouse",
  location: "Ikoyi",
  price: "₦310M",
  beds: 3,
  baths: 4,
  area: "280 sqm",
  tag: "For Sale"
}, {
  img: residentialImg,
  title: "Serviced Apartments",
  location: "Surulere",
  price: "₦7.5M/yr",
  beds: 2,
  baths: 2,
  area: "120 sqm",
  tag: "For Lease"
}, {
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
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Properties", title: "Premium Properties For Sale & Lease", subtitle: "A curated selection of residential, commercial and mixed-use properties across Lagos." }),
    /* @__PURE__ */ jsx("section", { className: "container-x py-16", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: PROPERTIES.map((p, i) => /* @__PURE__ */ jsxs("article", { className: "group rounded-xl overflow-hidden bg-white border border-border hover:shadow-[var(--shadow-card)] transition-all", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700", width: 1024, height: 768 }),
        /* @__PURE__ */ jsx("span", { className: "absolute top-3 left-3 rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground", children: p.tag })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-lg text-navy", children: p.title }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mt-1 flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
          " ",
          p.location
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-xl font-display font-bold text-primary", children: p.price }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-border flex items-center gap-4 text-xs text-muted-foreground", children: [
          p.beds > 0 && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Bed, { className: "h-4 w-4" }),
            " ",
            p.beds
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Bath, { className: "h-4 w-4" }),
            " ",
            p.baths
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Maximize2, { className: "h-4 w-4" }),
            " ",
            p.area
          ] })
        ] })
      ] })
    ] }, i)) }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
}
export {
  PropertiesPage as component
};
