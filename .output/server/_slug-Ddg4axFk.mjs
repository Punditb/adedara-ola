import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { S as SiteLayout, C as CTASection } from "./_ssr/Layout-DUUi7oVv.mjs";
import { m as mixedImg, c as commercialImg, r as residentialImg } from "./_ssr/project-mixed-Coi09pei.mjs";
import { R as Route$1 } from "./_ssr/router-D3cGY2ul.mjs";
import { r as ArrowLeft, M as MapPin, d as Bed, e as Bath, f as Maximize2, n as CircleCheck } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
const PROPERTY_DETAILS = {
  "4-bedroom-detached-duplex": {
    img: residentialImg,
    title: "4-Bedroom Detached Duplex",
    location: "Lekki Phase 1, Lagos",
    price: "₦185M",
    status: "For Sale",
    beds: 4,
    baths: 5,
    area: "420 sqm",
    description: "A spacious 4-bedroom detached duplex located in the heart of Lekki Phase 1, designed for comfortable family living and long-term property value. The home features generous living areas, ensuite bedrooms, modern fittings, ample parking space, and easy access to major roads, schools, shopping centres, and lifestyle destinations.",
    features: ["4 ensuite bedrooms", "5 bathrooms", "Spacious living and dining areas", "Modern fitted kitchen", "Family lounge", "Secure parking", "Prime residential neighbourhood"],
    cta: "Schedule Inspection"
  },
  "grade-a-office-floor": {
    img: commercialImg,
    title: "Grade-A Office Floor",
    location: "Victoria Island, Lagos",
    price: "₦24M/year",
    status: "For Lease",
    beds: 0,
    baths: 4,
    area: "650 sqm",
    description: "A premium Grade-A office floor in Victoria Island, suitable for corporate organisations, professional service firms, financial institutions, and growing enterprises. The space offers a professional business environment, flexible layout options, reliable access routes, and proximity to major commercial landmarks.",
    features: ["650 sqm office space", "Open-plan layout", "Private office sections", "Reception area", "Elevator access", "Ample parking", "Prime commercial address"],
    cta: "Request Lease Details"
  },
  "retail-apartments-block": {
    img: mixedImg,
    title: "Retail + Apartments Block",
    location: "Ikeja GRA, Lagos",
    price: "₦920M",
    status: "For Sale",
    beds: 12,
    baths: 14,
    area: "1,800 sqm",
    description: "A mixed-use retail and apartment block located in Ikeja GRA, offering strong commercial and residential investment potential. The development combines ground-floor retail visibility with upper-level residential units, making it ideal for investors seeking rental income, asset appreciation, and long-term portfolio growth.",
    features: ["Mixed-use development", "Ground-floor retail spaces", "Residential apartment units", "12 bedrooms/units", "14 bathrooms", "1,800 sqm total area", "High-demand location", "Strong rental income potential"],
    cta: "Speak With an Investment Advisor"
  }
};
function PropertyDetailPage() {
  const {
    slug
  } = Route$1.useParams();
  const property = PROPERTY_DETAILS[slug];
  if (!property) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-navy", children: "Property not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/properties", className: "mt-6 inline-block text-primary font-semibold", children: "Back to properties" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/properties", className: "inline-flex items-center gap-2 text-sm font-semibold text-primary mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        "Back to Properties"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: property.img, alt: property.title, className: "w-full aspect-[4/3] object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground", children: property.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-4xl font-bold text-navy", children: property.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 flex items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
            property.location
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-3xl font-display font-bold text-primary", children: property.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-3 gap-4 border-y border-border py-5 text-sm text-muted-foreground", children: [
            property.beds > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "h-4 w-4" }),
              " ",
              property.beds
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bath, { className: "h-4 w-4" }),
              " ",
              property.baths
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-4 w-4" }),
              " ",
              property.area
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 leading-relaxed text-muted-foreground", children: property.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-navy", children: "Key Features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid sm:grid-cols-2 gap-3", children: property.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary mt-0.5 shrink-0" }),
              feature
            ] }, feature)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-consultation", className: "mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90", children: property.cta })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  PropertyDetailPage as component
};
