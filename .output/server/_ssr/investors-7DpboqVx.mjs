import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteLayout, P as PageHero, C as CTASection } from "./Layout-DUUi7oVv.mjs";
import { T as TrendingUp, g as Compass, S as Shield, h as ChartColumn, i as Target, A as Award } from "../_libs/lucide-react.mjs";
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
const investorsImg = "/assets/investors-BX3ce-j5.jpg";
function InvestorsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "For Investors", title: "Helping Investors Maximize Real Estate Opportunities", subtitle: "We partner with institutional capital, family offices and HNW investors to source, structure and shepherd Nigerian real estate opportunities." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden aspect-[4/3] shadow-[var(--shadow-card)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: investorsImg, alt: "Real estate investor reviewing portfolio", loading: "lazy", className: "h-full w-full object-cover", width: 1280, height: 960 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: [{
        k: "Avg. IRR",
        v: "18.4%",
        d: "Across managed portfolio"
      }, {
        k: "Capital Deployed",
        v: "₦12B+",
        d: "Cumulative"
      }, {
        k: "Active Projects",
        v: "24",
        d: "In pipeline"
      }, {
        k: "Investor Retention",
        v: "92%",
        d: "Repeat capital"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-[var(--surface)] border border-border p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", children: s.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-3xl font-display font-bold text-navy", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: s.d })
      ] }, s.k)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[var(--surface)] py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Investment Pillars" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold", children: "A Framework Built for Compounding Returns" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: [{
        icon: TrendingUp,
        t: "ROI Optimization",
        d: "Structures tuned for cash-on-cash returns and exit multiples."
      }, {
        icon: Compass,
        t: "Development Planning",
        d: "Phased capital deployment and de-risked execution."
      }, {
        icon: Shield,
        t: "Risk Mitigation",
        d: "Title, regulatory and execution risk identified and managed."
      }, {
        icon: ChartColumn,
        t: "Market Intelligence",
        d: "Submarket data and demand modelling guide every decision."
      }, {
        icon: Target,
        t: "Value Creation",
        d: "Active asset management to grow ROI year over year."
      }, {
        icon: Award,
        t: "Aligned Incentives",
        d: "We co-invest where appropriate to align outcomes."
      }].map(({
        icon: Icon,
        t,
        d
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white border border-border p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display font-semibold text-navy text-lg", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: d })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InvestorForm, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function InvestorForm() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-16 md:py-24 grid lg:grid-cols-[1fr,1.2fr] gap-12 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Investor Inquiry" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl font-bold", children: "Explore Active Opportunities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Tell us a little about your investment thesis and we will follow up confidentially with relevant opportunities from our pipeline." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
      e.preventDefault();
      setSubmitted(true);
    }, className: "rounded-2xl bg-white border border-border p-6 md:p-8 shadow-[var(--shadow-card)] space-y-4", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-navy", children: "Thank you" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Our investor relations team will be in touch within 1 business day." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Organization", name: "org" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", type: "email", name: "email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-navy", children: "Ticket size" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Under ₦50M" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "₦50M – ₦250M" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "₦250M – ₦1B" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "₦1B+" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-navy", children: "Investment focus" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, className: "mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm", placeholder: "Residential, commercial, mixed-use, expected horizon..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90", children: "Submit inquiry" })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "text-sm font-semibold text-navy", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required: true, className: "mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-primary" })
  ] });
}
export {
  InvestorsPage as component
};
