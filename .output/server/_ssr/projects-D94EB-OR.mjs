import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, P as PageHero, C as CTASection } from "./Layout-U-XLLFw7.mjs";
import { r as residentialImg, m as mixedImg } from "./project-mixed-BXuBy6f9.mjs";
import { c as commercialImg } from "./project-commercial-ERgHeQtQ.mjs";
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
const constructionImg = "/assets/project-construction-DpSZ71Bb.jpg";
const refurbImg = "/assets/project-refurb-CVO7x12L.jpg";
const infraImg = "/assets/project-infra-CI2cn3zT.jpg";
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
  filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Projects", title: "Developments That Define Markets", subtitle: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "As a platform, our combined stream of professionals have engaged in varied types of building projects ranging from designing commercial structures to raising some of the eye-catching city pride.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Take a cursory view of some of these past and ongoing projects." })
    ] }) }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  ProjectsPage as component
};
