import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, P as PageHero } from "./Layout-DUUi7oVv.mjs";
import { l as CalendarCheck, m as MessageSquareText, F as FileText, k as Clock } from "../_libs/lucide-react.mjs";
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
function BookConsultationPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Book Consultation", title: "Schedule a Consultation With Our Team", subtitle: "Choose a convenient date and time to discuss your project, property needs, investment plans, or real estate development goals." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5", children: [{
      icon: CalendarCheck,
      title: "Choose a Suitable Time",
      desc: "Select a date and time that works best for your schedule."
    }, {
      icon: MessageSquareText,
      title: "Share Your Needs",
      desc: "Tell us the service or property matter you would like to discuss."
    }, {
      icon: FileText,
      title: "Prepare Key Details",
      desc: "Bring relevant project, property, or investment information to the meeting."
    }, {
      icon: Clock,
      title: "Get Clear Next Steps",
      desc: "Our team will review your enquiry and guide you on the best way forward."
    }].map(({
      icon: Icon,
      title,
      desc
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white border border-border p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display font-semibold text-navy", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: desc })
    ] }, title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-x py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border bg-white shadow-[var(--shadow-card)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://cal.com/adedarao/consultation-meeting", title: "Book a consultation with Adedara Ola & Co.", className: "w-full min-h-[850px]" }) }) })
  ] });
}
export {
  BookConsultationPage as component
};
