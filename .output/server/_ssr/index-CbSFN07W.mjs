import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, C as CTASection } from "./Layout-DcgX_d47.mjs";
import { r as residentialImg, c as commercialImg, m as mixedImg } from "./project-mixed-Coi09pei.mjs";
import { c as constructionImg, i as infraImg } from "./project-infra-B3O6ETfY.mjs";
import { r as refurbImg } from "./project-refurb-CuD5-Gkf.mjs";
import { t as teamImg } from "./about-team-Bmy2APIj.mjs";
import { k as ArrowRight, n as CircleCheck, i as Target, E as Eye, g as Compass, C as ClipboardCheck, H as Hammer, D as DraftingCompass, T as TrendingUp, b as Handshake, B as Building2, S as Shield, A as Award, o as Sparkles, h as ChartColumn, Q as Quote, j as Calendar } from "../_libs/lucide-react.mjs";
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
const heroImg = "/assets/hero-BG2zIWZ3.jpg";
const SERVICES = [{
  icon: ClipboardCheck,
  title: "Project Planning",
  desc: "End-to-end planning that aligns vision, feasibility, and execution from day one."
}, {
  icon: Hammer,
  title: "Project Construction",
  desc: "Quality-driven construction delivery with cost, timeline and standards discipline."
}, {
  icon: DraftingCompass,
  title: "Architectural Concepts & Drawings",
  desc: "Transform ideas into detailed architectural concepts, plans and drawings ready for development."
}, {
  icon: TrendingUp,
  title: "Real Estate Economics",
  desc: "Market intelligence and valuation to maximize asset value and ROI."
}, {
  icon: Handshake,
  title: "Property Sales & Purchases",
  desc: "Connect with the right property opportunities through transparent and professionally guided transactions."
}, {
  icon: Building2,
  title: "Property & Facilities Management",
  desc: "Protect and enhance property value through proactive maintenance, operations and facility oversight."
}];
const WHY = [{
  icon: Compass,
  title: "Strategic Planning",
  desc: "Investment-grade planning that turns vision into bankable projects."
}, {
  icon: Shield,
  title: "Regulatory Expertise",
  desc: "Deep familiarity with Lagos and Nigerian regulatory frameworks."
}, {
  icon: TrendingUp,
  title: "Investment-Focused",
  desc: "Every recommendation is filtered through value creation and ROI."
}, {
  icon: Award,
  title: "Quality Assurance",
  desc: "Rigorous QA across design, construction and management."
}, {
  icon: CircleCheck,
  title: "Reliable Delivery",
  desc: "On-time, on-spec project delivery with transparent reporting."
}, {
  icon: Sparkles,
  title: "Long-Term Value",
  desc: "We build assets that compound in value over decades, not months."
}];
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
}];
const TESTIMONIALS = [{
  name: "Adebola O.",
  role: "Property Investor",
  quote: "Their planning rigor turned a complex parcel into a high-yield mixed-use development. Truly investment-grade thinking.",
  initial: "A"
}, {
  name: "Chinwe N.",
  role: "Corporate Client",
  quote: "From approvals to handover, every milestone was managed with clarity and precision. We will absolutely work with them again.",
  initial: "C"
}, {
  name: "Tunde A.",
  role: "Landowner",
  quote: "Adedara Ola & Co. unlocked value we did not know existed in our family land. Professional, honest, dependable.",
  initial: "T"
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutBand, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedProjects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Investor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CorporateFramework, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Insights, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-b from-[var(--surface)] via-background to-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none opacity-[0.04]", style: {
      backgroundImage: "radial-gradient(circle at 20% 20%, var(--primary) 0%, transparent 50%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative grid lg:grid-cols-[1.05fr,1fr] gap-12 lg:gap-16 items-center py-16 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Real Estate Development • Project Planning • Property Consultancy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02]", children: [
          "Building Sustainable Real Estate ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Value" }),
          " Through Strategic Development"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed", children: "Adedara Ola & Co. helps investors, developers, institutions, and property owners plan, develop, manage, and optimize real estate assets through expert-driven solutions." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary/90 transition-all", children: [
            "Book Consultation ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-md border-2 border-secondary px-6 py-3.5 font-semibold text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all", children: "Explore Services" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3", children: ["Project Planning", "Construction Advisory", "Building Approvals", "Property Maintenance", "Real Estate Economics", "Property Sale/Rental"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }),
          " ",
          t
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[5/6]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Modern real estate development by Adedara Ola & Co.", className: "absolute inset-0 h-full w-full object-cover", width: 1024, height: 1280 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/30 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block absolute -left-6 top-12 bg-white rounded-xl shadow-[var(--shadow-card)] p-4 w-44 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-navy font-display", children: [
            "20",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "+" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Projects Completed" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block absolute -right-4 top-1/3 bg-white rounded-xl shadow-[var(--shadow-card)] p-4 w-44 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-navy font-display", children: [
            "8",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "+" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Years of Experience" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block absolute -left-4 bottom-12 bg-white rounded-xl shadow-[var(--shadow-card)] p-4 w-48 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-navy font-display", children: [
            "98",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Investor Satisfaction" })
        ] })
      ] })
    ] })
  ] });
}
function AboutBand() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[var(--shadow-card)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: teamImg, alt: "Adedara Ola & Co. team reviewing development plans", loading: "lazy", className: "absolute inset-0 h-full w-full object-cover", width: 1280, height: 960 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "About Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight", children: "Turning Vision Into Valuable Real Estate Assets" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg leading-relaxed", children: "We bring together conceptualization, positioning, design, development and management under one disciplined practice — so every asset we touch is planned for performance and built to endure." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-3 gap-4", children: [{
        icon: Target,
        t: "Mission",
        d: "Deliver sustainable property value."
      }, {
        icon: Eye,
        t: "Vision",
        d: "Africa's most trusted real estate brand."
      }, {
        icon: Compass,
        t: "Purpose",
        d: "Plan, build and manage with excellence."
      }].map(({
        icon: Icon,
        t,
        d
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-5 bg-muted/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display font-semibold text-navy", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: d })
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all", children: [
        "More about our story ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] });
}
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[var(--surface)] py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Our Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight", children: "A Full-Spectrum Real Estate Practice" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "From first concept to long-term management, our integrated services protect investment value at every stage." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SERVICES.map(({
      icon: Icon,
      title,
      desc
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-xl bg-white border border-border p-7 hover:border-primary hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-display font-semibold text-navy", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm leading-relaxed", children: desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all", children: [
        "Learn more ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }, title)) })
  ] }) });
}
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-20 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Why Choose Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight", children: "Why Clients Trust Adedara Ola & Co." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "Six principles that guide every brief, every site, every handover." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12", children: WHY.map(({
      icon: Icon,
      title,
      desc
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-display font-semibold text-navy", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-muted-foreground text-sm leading-relaxed", children: desc })
      ] })
    ] }, title)) })
  ] });
}
function FeaturedProjects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[var(--surface)] py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Featured Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight", children: "Developments That Define Markets" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "inline-flex items-center gap-2 font-semibold text-primary self-start md:self-end", children: [
        "View all projects ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: PROJECTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-xl overflow-hidden bg-white border border-border hover:shadow-[var(--shadow-card)] transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700", width: 1024, height: 768 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 rounded-md bg-white/95 backdrop-blur px-2.5 py-1 text-xs font-semibold text-secondary", children: p.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 rounded-md bg-primary/95 px-2.5 py-1 text-xs font-semibold text-primary-foreground", children: p.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-navy", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: p.location })
      ] })
    ] }, p.title)) })
  ] }) });
}
function Investor() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "For Investors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight", children: "Helping Investors Maximize Real Estate Opportunities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg leading-relaxed", children: "We partner with capital — institutional, family-office and HNW — to source, structure, and shepherd Nigerian real estate opportunities from acquisition to exit." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: [{
        icon: ChartColumn,
        t: "ROI Optimization",
        d: "Structures designed for compounding returns."
      }, {
        icon: Compass,
        t: "Development Planning",
        d: "Phasing and capital efficiency from day one."
      }, {
        icon: Shield,
        t: "Risk Reduction",
        d: "Regulatory, title and execution risk de-risked."
      }, {
        icon: TrendingUp,
        t: "Market Intelligence",
        d: "Submarket analytics and demand modelling."
      }].map(({
        icon: Icon,
        t,
        d
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary mt-1 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-navy", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: d })
        ] })
      ] }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/investors", className: "mt-8 inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-navy transition-colors", children: [
        "Investor opportunities ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden aspect-[4/5] shadow-[var(--shadow-card)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: commercialImg, alt: "Investment-grade real estate", loading: "lazy", className: "h-full w-full object-cover", width: 1024, height: 1280 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-[var(--shadow-card)] border border-border max-w-[240px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Avg. Projected IRR" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-4xl font-display font-bold text-navy", children: "18.4%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Across our managed development portfolio." })
      ] })
    ] })
  ] });
}
function CorporateFramework() {
  const cards = [{
    icon: Eye,
    t: "Vision",
    d: "To become Africa’s premier platform-institution, creating multi-dimensional possibilities for real estate practitioners to function effectively and efficiently."
  }, {
    icon: Target,
    t: "Mission",
    d: "To constantly review and improve our platform's capabilities, enabling real estate ecosystem practitioners to maximize dividends, progress, and development."
  }, {
    icon: Shield,
    t: "Governance",
    d: "Determined to make a significant difference, we believe strongly in the principles of impact that should govern our behavior within the communities we seek to reshape."
  }, {
    icon: Compass,
    t: "Objectives",
    d: "To drive real estate growth through cutting-edge innovation, investment opportunities, infrastructure development, and reduced risks for lasting value."
  }];
  const values = ["Totality", "Quality", "Possibility", "Reliability"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[var(--navy)] text-white py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-primary", children: "Corporate Framework" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight", children: "Principles That Anchor Every Decision" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: cards.map(({
      icon: Icon,
      t,
      d
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display font-semibold text-white text-lg", children: t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/70 leading-relaxed", children: d })
    ] }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-12 border-t border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "Core Values" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-2 md:grid-cols-4 gap-4", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-primary/10 border border-primary/30 px-5 py-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-white text-xl font-semibold", children: v }) }, v)) })
    ] })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-x py-20 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight", children: "Trusted By Investors & Institutions" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-6", children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-xl bg-[var(--surface)] border border-border p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-7 w-7 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 text-secondary leading-relaxed", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 flex items-center gap-3 pt-5 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full bg-navy text-white flex items-center justify-center font-display font-semibold", children: t.initial }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-navy text-sm", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] })
    ] }, t.name)) })
  ] });
}
function Insights() {
  const posts = [{
    tag: "Market Trends",
    title: "Lagos Real Estate Outlook 2026",
    date: "May 18, 2026",
    img: commercialImg
  }, {
    tag: "Investment",
    title: "Mixed-Use: The New Yield Frontier",
    date: "Apr 22, 2026",
    img: mixedImg
  }, {
    tag: "Development",
    title: "Securing Approvals Without Delays",
    date: "Mar 10, 2026",
    img: constructionImg
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[var(--surface)] py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Insights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight", children: "Thought Leadership for Real Estate Decision-Makers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/insights", className: "inline-flex items-center gap-2 font-semibold text-primary self-start md:self-end", children: [
        "All articles ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-xl bg-white border border-border overflow-hidden hover:shadow-[var(--shadow-card)] transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700", width: 1024, height: 768 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary uppercase tracking-wider", children: p.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display font-semibold text-navy text-lg leading-snug", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
          " ",
          p.date
        ] })
      ] })
    ] }, p.title)) })
  ] }) });
}
export {
  HomePage as component
};
