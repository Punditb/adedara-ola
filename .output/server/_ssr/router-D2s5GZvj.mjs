import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-DAvyjxD9.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Adedara Ola & Co. — Real Estate Developers & Property Consultants Lagos" },
      { name: "description", content: "Adedara Ola & Co. is a Lagos-based real estate development, project planning, property consultancy and management firm building sustainable real estate value." },
      { name: "author", content: "Adedara Ola & Co." },
      { property: "og:title", content: "Adedara Ola & Co. — Real Estate Developers & Property Consultants" },
      { property: "og:description", content: "Real estate development, project planning, building approvals, and property management across Lagos and Nigeria." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Adedara Ola & Co." },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const BASE_URL = "";
const Route$9 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/projects", changefreq: "weekly", priority: "0.8" },
          { path: "/investors", changefreq: "monthly", priority: "0.9" },
          { path: "/properties", changefreq: "weekly", priority: "0.8" },
          { path: "/insights", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" }
        ];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$8 = () => import("./services-bnvtNaZa.mjs");
const Route$8 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Real Estate Development, Planning & Consultancy | Adedara Ola & Co."
    }, {
      name: "description",
      content: "Project planning, construction, refurbishment, real estate economics, building approvals and property maintenance across Lagos and Nigeria."
    }, {
      property: "og:title",
      content: "Services — Adedara Ola & Co."
    }, {
      property: "og:description",
      content: "Full-spectrum real estate services from planning to property management."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./properties-DWoAeGI0.mjs");
const Route$7 = createFileRoute("/properties")({
  head: () => ({
    meta: [{
      title: "Properties — Available Listings | Adedara Ola & Co."
    }, {
      name: "description",
      content: "Browse premium residential, commercial and mixed-use properties available through Adedara Ola & Co. in Lagos and across Nigeria."
    }, {
      property: "og:title",
      content: "Properties — Adedara Ola & Co."
    }, {
      property: "og:description",
      content: "Premium properties for sale and lease in Lagos."
    }, {
      property: "og:url",
      content: "/properties"
    }],
    links: [{
      rel: "canonical",
      href: "/properties"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./projects-DrnUHw1F.mjs");
const Route$6 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — Real Estate Developments | Adedara Ola & Co."
    }, {
      name: "description",
      content: "Explore residential, commercial, mixed-use, renovation and infrastructure projects delivered by Adedara Ola & Co. across Nigeria."
    }, {
      property: "og:title",
      content: "Projects — Adedara Ola & Co."
    }, {
      property: "og:description",
      content: "A portfolio of real estate developments across Lagos and Nigeria."
    }, {
      property: "og:url",
      content: "/projects"
    }],
    links: [{
      rel: "canonical",
      href: "/projects"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./investors-C69Bx0_O.mjs");
const Route$5 = createFileRoute("/investors")({
  head: () => ({
    meta: [{
      title: "Investors — Real Estate Investment Opportunities | Adedara Ola & Co."
    }, {
      name: "description",
      content: "Partner with Adedara Ola & Co. to access investment-grade real estate opportunities across Nigeria. ROI optimization, risk mitigation and market expertise."
    }, {
      property: "og:title",
      content: "Investors — Adedara Ola & Co."
    }, {
      property: "og:description",
      content: "Investment-grade real estate opportunities across Nigeria."
    }, {
      property: "og:url",
      content: "/investors"
    }],
    links: [{
      rel: "canonical",
      href: "/investors"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./insights-Diuf7D5f.mjs");
const Route$4 = createFileRoute("/insights")({
  head: () => ({
    meta: [{
      title: "Insights — Real Estate Market Analysis & Investment | Adedara Ola & Co."
    }, {
      name: "description",
      content: "Thought leadership on Nigerian real estate: market trends, investment strategy, construction, regulatory updates and property maintenance."
    }, {
      property: "og:title",
      content: "Insights — Adedara Ola & Co."
    }, {
      property: "og:description",
      content: "Real estate market analysis and investment thinking from Lagos."
    }, {
      property: "og:url",
      content: "/insights"
    }],
    links: [{
      rel: "canonical",
      href: "/insights"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-GBvXXQDi.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Adedara Ola & Co. — Real Estate Developers Lagos"
    }, {
      name: "description",
      content: "Reach Adedara Ola & Co. at 42 Ola Street, Itire, Surulere, Lagos. Phone +234 703 808 8610. Email adedaraolaproperties@gmail.com."
    }, {
      property: "og:title",
      content: "Contact Adedara Ola & Co."
    }, {
      property: "og:description",
      content: "Get in touch with our real estate development team in Lagos."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-BWducoPO.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Adedara Ola & Co. — Real Estate Developers in Lagos"
    }, {
      name: "description",
      content: "Learn about Adedara Ola & Co. — our story, vision, mission, governance and team driving real estate excellence across Nigeria."
    }, {
      property: "og:title",
      content: "About Adedara Ola & Co."
    }, {
      property: "og:description",
      content: "Real estate development, project planning and property consultancy in Lagos."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-Djp4Ogof.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Adedara Ola & Co. — Real Estate Developers & Property Consultants in Lagos"
    }, {
      name: "description",
      content: "Lagos-based real estate developers, project planners, property consultants and managers. Building sustainable real estate value through strategic development."
    }, {
      property: "og:title",
      content: "Adedara Ola & Co. — Real Estate Development & Property Consultancy"
    }, {
      property: "og:description",
      content: "Strategic real estate development, project planning, building approvals and property management across Nigeria."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: "Adedara Ola & Co.",
        description: "Real estate development, project planning, property consultancy and management firm in Lagos, Nigeria.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "42, Ola Street, Itire, Surulere",
          addressLocality: "Lagos",
          addressCountry: "NG"
        },
        telephone: "+234-703-808-8610",
        email: "adedaraolaproperties@gmail.com"
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_slug-CHJ7Pc2u.mjs");
const Route = createFileRoute("/properties/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$9.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$a
});
const ServicesRoute = Route$8.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$a
});
const PropertiesRoute = Route$7.update({
  id: "/properties",
  path: "/properties",
  getParentRoute: () => Route$a
});
const ProjectsRoute = Route$6.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$a
});
const InvestorsRoute = Route$5.update({
  id: "/investors",
  path: "/investors",
  getParentRoute: () => Route$a
});
const InsightsRoute = Route$4.update({
  id: "/insights",
  path: "/insights",
  getParentRoute: () => Route$a
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$a
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const PropertiesSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => PropertiesRoute
});
const PropertiesRouteChildren = {
  PropertiesSlugRoute
};
const PropertiesRouteWithChildren = PropertiesRoute._addFileChildren(
  PropertiesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  InsightsRoute,
  InvestorsRoute,
  ProjectsRoute,
  PropertiesRoute: PropertiesRouteWithChildren,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
