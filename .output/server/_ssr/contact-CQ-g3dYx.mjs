import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteLayout, P as PageHero } from "./Layout-CtTmM7iL.mjs";
import { M as MapPin, P as Phone, j as Mail, k as Clock } from "../_libs/lucide-react.mjs";
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
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: "Let's Talk About Your Project", subtitle: "Whether you're planning a development, exploring an investment, or need property management — our team is ready to help." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-16 grid lg:grid-cols-[1.2fr,1fr] gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: MapPin, title: "Office", lines: ["42, Ola Street, Itire,", "Surulere, Lagos, Nigeria"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Phone, title: "Phone", lines: [/* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+2347038088610", className: "hover:text-primary", children: "+234 703 808 8610" }, "1"), /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+2348035204149", className: "hover:text-primary", children: "+234 803 520 4149" }, "2")] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Mail, title: "Email", lines: [/* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:adedaraolaproperties@gmail.com", className: "hover:text-primary break-all", children: "adedaraolaproperties@gmail.com" }, "1"), /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:olaadedarabrand@gmail.com", className: "hover:text-primary break-all", children: "olaadedarabrand@gmail.com" }, "2")] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Clock, title: "Business Hours", lines: ["Mon – Fri: 9:00 – 18:00", "Sat: 10:00 – 14:00", "Sun: Closed"] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border aspect-[16/7] bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Office location map", src: "https://www.google.com/maps?q=Surulere,Lagos&output=embed", className: "h-full w-full", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }) })
  ] });
}
function Info({
  icon: Icon,
  title,
  lines
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-[var(--surface)] border border-border p-6 flex gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-navy", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground space-y-0.5", children: lines.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: l }, i)) })
    ] })
  ] });
}
function ContactForm() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
    e.preventDefault();
    setSent(true);
  }, className: "rounded-2xl bg-white border border-border p-6 md:p-8 shadow-[var(--shadow-card)] space-y-4", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-navy", children: "Message received" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "We'll respond within 1 business day." })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", type: "email", name: "email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company (optional)", name: "company", required: false })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-navy", children: "I'm interested in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Project Planning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Construction" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Refurbishment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Building Approvals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Property Management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Investment Opportunities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-navy", children: "Message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, required: true, className: "mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-primary", placeholder: "Tell us a little about your project..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90", children: "Send message" })
  ] }) });
}
function Field({
  label,
  name,
  type = "text",
  required = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "text-sm font-semibold text-navy", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required, className: "mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-primary" })
  ] });
}
export {
  ContactPage as component
};
