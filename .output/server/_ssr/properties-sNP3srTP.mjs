import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHero, C as CTASection } from "./Layout-U-XLLFw7.mjs";
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
function PropertiesPage() {
  const {
    location
  } = useRouterState();
  if (location.pathname !== "/properties") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Properties", title: "Premium Properties For Sale & Lease", subtitle: "A curated selection of residential, commercial and mixed-use properties across Lagos." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  PropertiesPage as component
};
