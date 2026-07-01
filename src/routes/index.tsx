import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  HardHat,
  Wrench,
  TrendingUp,
  ClipboardCheck,
  Hammer,
  Quote,
  Target,
  Eye,
  Compass,
  Shield,
  Award,
  Sparkles,
  BarChart3,
  Calendar,
  DraftingCompass,
  Handshake,
} from "lucide-react";
import { SiteLayout, CTASection } from "@/components/site/Layout";
import { getLatestPosts } from "@/lib/insights";
import heroImg from "@/assets/hero.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import mixedImg from "@/assets/project-mixed.jpg";
import constructionImg from "@/assets/project-construction.jpg";
import refurbImg from "@/assets/project-refurb.jpg";
import infraImg from "@/assets/project-infra.jpg";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adedara Ola & Co. — Real Estate Developers & Property Consultants in Lagos" },
      { name: "description", content: "Lagos-based real estate developers, project planners, property consultants and managers. Building sustainable real estate value through strategic development." },
      { property: "og:title", content: "Adedara Ola & Co. — Real Estate Development & Property Consultancy" },
      { property: "og:description", content: "Strategic real estate development, project planning, building approvals and property management across Nigeria." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
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
            addressCountry: "NG",
          },
          telephone: "+234-703-808-8610",
          email: "adedaraolaproperties@gmail.com",
        }),
      },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    icon: ClipboardCheck,
    title: "Project Planning",
    desc: "End-to-end planning that aligns vision, feasibility, and execution from day one.",
  },
  {
    icon: Hammer,
    title: "Project Construction",
    desc: "Quality-driven construction delivery with cost, timeline and standards discipline.",
  },
  {
    icon: DraftingCompass,
    title: "Architectural Concepts & Drawings",
    desc: "Transform ideas into detailed architectural concepts, plans and drawings ready for development.",
  },
  {
    icon: TrendingUp,
    title: "Real Estate Economics",
    desc: "Market intelligence and valuation to maximize asset value and ROI.",
  },
  {
    icon: Handshake,
    title: "Property Sales & Purchases",
    desc: "Connect with the right property opportunities through transparent and professionally guided transactions.",
  },
  {
    icon: Building2,
    title: "Property & Facilities Management",
    desc: "Protect and enhance property value through proactive maintenance, operations and facility oversight.",
  },
];

const WHY = [
  { icon: Compass, title: "Strategic Planning", desc: "Investment-grade planning that turns vision into bankable projects." },
  { icon: Shield, title: "Regulatory Expertise", desc: "Deep familiarity with Lagos and Nigerian regulatory frameworks." },
  { icon: TrendingUp, title: "Investment-Focused", desc: "Every recommendation is filtered through value creation and ROI." },
  { icon: Award, title: "Quality Assurance", desc: "Rigorous QA across design, construction and management." },
  { icon: CheckCircle2, title: "Reliable Delivery", desc: "On-time, on-spec project delivery with transparent reporting." },
  { icon: Sparkles, title: "Long-Term Value", desc: "We build assets that compound in value over decades, not months." },
];

const PROJECTS = [
  { img: residentialImg, title: "Itire Residences", location: "Surulere, Lagos", category: "Residential", status: "Completed" },
  { img: commercialImg, title: "Marina Corporate Tower", location: "Lagos Island", category: "Commercial", status: "In Development" },
  { img: mixedImg, title: "Ola Heights Mixed-Use", location: "Ikeja, Lagos", category: "Mixed Use", status: "Completed" },
  { img: constructionImg, title: "Lekki Phase II Estate", location: "Lekki, Lagos", category: "Residential", status: "Under Construction" },
  { img: refurbImg, title: "Heritage Building Refit", location: "Yaba, Lagos", category: "Renovation", status: "Completed" },
  { img: infraImg, title: "Corridor Infrastructure", location: "Surulere, Lagos", category: "Infrastructure", status: "Planning" },
];

const TESTIMONIALS = [
  { name: "Adebola O.", role: "Property Investor", quote: "Their planning rigor turned a complex parcel into a high-yield mixed-use development. Truly investment-grade thinking.", initial: "A" },
  { name: "Chinwe N.", role: "Corporate Client", quote: "From approvals to handover, every milestone was managed with clarity and precision. We will absolutely work with them again.", initial: "C" },
  { name: "Tunde A.", role: "Landowner", quote: "Adedara Ola & Co. unlocked value we did not know existed in our family land. Professional, honest, dependable.", initial: "T" },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <AboutBand />
      <Services />
      <WhyUs />
      <FeaturedProjects />
      <Investor />
      <CorporateFramework />
      <Testimonials />
      <Insights />
      <CTASection />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--surface)] via-background to-background">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, var(--primary) 0%, transparent 50%)",
      }} />
      <div className="container-x relative grid lg:grid-cols-[1.05fr,1fr] gap-12 lg:gap-16 items-center py-16 md:py-24">
        <div>
          <span className="eyebrow">Real Estate Development • Project Planning • Property Consultancy</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02]">
            Building Sustainable Real Estate <span className="text-primary">Value</span> Through Strategic Development
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Adedara Ola & Co. helps investors, developers, institutions, and property owners
            plan, develop, manage, and optimize real estate assets through expert-driven solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book-consultation" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary/90 transition-all">
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md border-2 border-secondary px-6 py-3.5 font-semibold text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all">
              Explore Services
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
            {["Project Planning", "Construction Advisory", "Building Approvals", "Property Maintenance", "Real Estate Economics", "Property Sale/Rental"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-secondary">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[5/6]">
            <img src={heroImg} alt="Modern real estate development by Adedara Ola & Co." className="absolute inset-0 h-full w-full object-cover" width={1024} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/30 to-transparent" />
          </div>

          <div className="hidden sm:block absolute -left-6 top-12 bg-white rounded-xl shadow-[var(--shadow-card)] p-4 w-44 border border-border">
            <p className="text-3xl font-bold text-navy font-display">20<span className="text-primary">+</span></p>
            <p className="text-xs text-muted-foreground mt-1">Projects Completed</p>
          </div>
          <div className="hidden sm:block absolute -right-4 top-1/3 bg-white rounded-xl shadow-[var(--shadow-card)] p-4 w-44 border border-border">
            <p className="text-3xl font-bold text-navy font-display">8<span className="text-primary">+</span></p>
            <p className="text-xs text-muted-foreground mt-1">Years of Experience</p>
          </div>
          <div className="hidden sm:block absolute -left-4 bottom-12 bg-white rounded-xl shadow-[var(--shadow-card)] p-4 w-48 border border-border">
            <p className="text-3xl font-bold text-navy font-display">98<span className="text-primary">%</span></p>
            <p className="text-xs text-muted-foreground mt-1">Investor Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBand() {
  return (
    <section className="container-x py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[var(--shadow-card)]">
        <img src={teamImg} alt="Adedara Ola & Co. team reviewing development plans" loading="lazy" className="absolute inset-0 h-full w-full object-cover" width={1280} height={960} />
      </div>
      <div>
        <span className="eyebrow">About Us</span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Turning Vision Into Valuable Real Estate Assets
        </h2>
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
          We bring together conceptualization, positioning, design, development and
          management under one disciplined practice — so every asset we touch is
          planned for performance and built to endure.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Target, t: "Mission", d: "Deliver sustainable property value." },
            { icon: Eye, t: "Vision", d: "Africa's most trusted real estate brand." },
            { icon: Compass, t: "Purpose", d: "Plan, build and manage with excellence." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl border border-border p-5 bg-muted/40">
              <Icon className="h-7 w-7 text-primary" />
              <p className="mt-3 font-display font-semibold text-navy">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
          More about our story <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-[var(--surface)] py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            A Full-Spectrum Real Estate Practice
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From first concept to long-term management, our integrated services protect
            investment value at every stage.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl bg-white border border-border p-7 hover:border-primary hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-display font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{desc}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <span className="eyebrow">Why Choose Us</span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Why Clients Trust Adedara Ola & Co.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Six principles that guide every brief, every site, every handover.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {WHY.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-5">
            <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-navy">{title}</h3>
              <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="bg-[var(--surface)] py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Featured Projects</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Developments That Define Markets
            </h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 font-semibold text-primary self-start md:self-end">
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group rounded-xl overflow-hidden bg-white border border-border hover:shadow-[var(--shadow-card)] transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" width={1024} height={768} />
                <span className="absolute top-3 left-3 rounded-md bg-white/95 backdrop-blur px-2.5 py-1 text-xs font-semibold text-secondary">{p.category}</span>
                <span className="absolute top-3 right-3 rounded-md bg-primary/95 px-2.5 py-1 text-xs font-semibold text-primary-foreground">{p.status}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-navy">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Investor() {
  return (
    <section className="container-x py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div>
        <span className="eyebrow">For Investors</span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Helping Investors Maximize Real Estate Opportunities
        </h2>
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
          We partner with capital — institutional, family-office and HNW — to source,
          structure, and shepherd Nigerian real estate opportunities from acquisition to exit.
        </p>
        <ul className="mt-8 space-y-3">
          {[
            { icon: BarChart3, t: "ROI Optimization", d: "Structures designed for compounding returns." },
            { icon: Compass, t: "Development Planning", d: "Phasing and capital efficiency from day one." },
            { icon: Shield, t: "Risk Reduction", d: "Regulatory, title and execution risk de-risked." },
            { icon: TrendingUp, t: "Market Intelligence", d: "Submarket analytics and demand modelling." },
          ].map(({ icon: Icon, t, d }) => (
            <li key={t} className="flex gap-4 items-start">
              <Icon className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-navy">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link to="/investors" className="mt-8 inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-navy transition-colors">
          Investor opportunities <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="relative">
        <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-[var(--shadow-card)]">
          <img src={commercialImg} alt="Investment-grade real estate" loading="lazy" className="h-full w-full object-cover" width={1024} height={1280} />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-[var(--shadow-card)] border border-border max-w-[240px]">
          <p className="eyebrow">Avg. Projected IRR</p>
          <p className="mt-1 text-4xl font-display font-bold text-navy">18.4%</p>
          <p className="text-xs text-muted-foreground mt-1">Across our managed development portfolio.</p>
        </div>
      </div>
    </section>
  );
}

function CorporateFramework() {
  const cards = [
    { icon: Eye, t: "Vision", d: "To become Africa’s premier platform-institution, creating multi-dimensional possibilities for real estate practitioners to function effectively and efficiently." },
    { icon: Target, t: "Mission", d: "To constantly review and improve our platform's capabilities, enabling real estate ecosystem practitioners to maximize dividends, progress, and development." },
    { icon: Shield, t: "Governance", d: "Determined to make a significant difference, we believe strongly in the principles of impact that should govern our behavior within the communities we seek to reshape." },
    { icon: Compass, t: "Objectives", d: "To drive real estate growth through cutting-edge innovation, investment opportunities, infrastructure development, and reduced risks for lasting value." },
  ];
  const values = ["Totality", "Quality", "Possibility", "Reliability"];
  return (
    <section className="bg-[var(--navy)] text-white py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow text-primary">Corporate Framework</span>
          <h2 className="mt-3 text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Principles That Anchor Every Decision
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
              <Icon className="h-7 w-7 text-primary" />
              <p className="mt-4 font-display font-semibold text-white text-lg">{t}</p>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="eyebrow text-primary">Core Values</p>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v} className="rounded-lg bg-primary/10 border border-primary/30 px-5 py-6 text-center">
                <p className="font-display text-white text-xl font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <span className="eyebrow">Testimonials</span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Trusted By Investors & Institutions
        </h2>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="rounded-xl bg-[var(--surface)] border border-border p-7">
            <Quote className="h-7 w-7 text-primary" />
            <blockquote className="mt-4 text-secondary leading-relaxed">"{t.quote}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
              <div className="h-11 w-11 rounded-full bg-navy text-white flex items-center justify-center font-display font-semibold">{t.initial}</div>
              <div>
                <p className="font-semibold text-navy text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

    </section>
  );
}

function Insights() {
  const posts = getLatestPosts(3);

  return (
    <section className="bg-[var(--surface)] py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Insights</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Thought Leadership for Real Estate Decision-Makers
            </h2>
          </div>

          <Link
            to="/insights"
            className="inline-flex items-center gap-2 font-semibold text-primary self-start md:self-end"
          >
            All articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/insights/$slug"
              params={{ slug: post.slug }}
              className="group rounded-xl bg-white border border-border overflow-hidden hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width={1024}
                  height={768}
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {post.tag}
                </span>

                <h3 className="mt-2 font-display font-semibold text-navy text-lg leading-snug">
                  {post.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>

                  <span className="flex items-center gap-1 text-primary font-semibold">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
