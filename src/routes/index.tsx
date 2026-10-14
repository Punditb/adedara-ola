import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Eye,
  FileText,
  Hammer,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { SiteLayout, CTASection } from "@/components/site/Layout";
import { ArticleTile, AboutPanel } from "@/components/site/BrandTile";
import { getLatestPosts } from "@/lib/insights";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adedara Ola & Co. — Real Estate Development & Consultancy in Lagos" },
      {
        name: "description",
        content:
          "Adedara Ola & Co. is a full-spectrum real estate development and consultancy firm in Lagos, combining strategic planning, Real Estate Economics, professional execution and asset management.",
      },
      { property: "og:title", content: "Adedara Ola & Co. — Real Estate Development & Consultancy" },
      {
        property: "og:description",
        content: "Strategic planning, Real Estate Economics, construction and property management across Nigeria.",
      },
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
          legalName: "Adedara Ola & Co. Limited",
          description:
            "Full-spectrum real estate development and consultancy firm in Lagos, Nigeria, combining strategic planning, Real Estate Economics, professional execution and asset management.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "42, Ola Street, Itire, Surulere",
            addressLocality: "Lagos",
            addressCountry: "NG",
          },
          telephone: "+234-703-808-8610",
          email: "adedaraolaproperties@gmail.com",
          foundingDate: "2022",
          slogan: "....value driven by excellence",
          identifier: "RC 7192962",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "10:00",
              closes: "14:00",
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const CORE_SERVICES = [
  {
    icon: TrendingUp,
    title: "Real Estate Economics",
    desc: "Market-informed economics advice that gives your investment and development decisions a firm footing before money is committed.",
  },
  {
    icon: FileText,
    title: "Land and Building Documentation",
    desc: "We manage the approvals and documentation process, securing the permits and authorizations that give your development a firm legal foundation.",
  },
  {
    icon: Hammer,
    title: "Project Construction",
    desc: "We turn approved designs into quality structures, in line with project specifications, site conditions and industry standards.",
  },
];

const OTHER_SERVICES = [
  "Project Planning",
  "Refurbishment",
  "Architectural Concepts, Planning and Drawings",
  "3D Designs and Animations",
  "Mechanical and Electrical Solutions",
  "Structural Design and Development",
  "Property Sales and Purchases",
  "Property and Facilities Management",
];

const TRACK_RECORD = [
  {
    icon: Building2,
    status: "In progress",
    title: "17-unit apartment building near Murtala Muhammed International Airport, Lagos",
    desc: "Our first major development: fully conceptualised, designed, planned and now being built by our experienced team of associates across the construction professions.",
  },
  {
    icon: FileText,
    status: "Delivered",
    title: "Full building approval for a church development in Aguda, Surulere",
    desc: "We secured the building approval and planning permit that earlier consultants had been unable to deliver for a long time.",
  },
  {
    icon: Clock,
    status: "Delivered",
    title: "Provisional planning permit in about three weeks",
    desc: "For another church location near Sanya, Lagos, after more than a year of protracted delays.",
  },
  {
    icon: Shield,
    status: "Delivered",
    title: "LASBCA contravention cases resolved",
    desc: "We helped development projects in Mushin and Orile Coker through Lagos State Building Control Agency (LASBCA) contravention cases, swiftly.",
  },
];

const WHY = [
  { icon: Compass, title: "Strategic Planning", desc: "Planning that turns a vision into a workable, well-costed project." },
  { icon: Shield, title: "Regulatory Know-How", desc: "Hands-on experience securing building approvals and planning permits in Lagos." },
  { icon: TrendingUp, title: "Economics-Led", desc: "Every recommendation is tested against Real Estate Economics before you commit." },
  { icon: Award, title: "One Quality Standard", desc: "A central system sets the quality expected of every professional we work with." },
  { icon: CheckCircle2, title: "Prompt Responses", desc: "We respond to consultation requests within two hours." },
  { icon: Sparkles, title: "Long-Term Value", desc: "We plan assets to hold their value over time, not just to be built." },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <AboutBand />
      <Services />
      <TrackRecord />
      <WhyUs />
      <AssociatesBand />
      <CorporateFramework />
      <Insights />
      <CTASection />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section data-reveal className="relative overflow-hidden bg-gradient-to-b from-[var(--surface)] via-background to-background">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--primary) 0%, transparent 50%)" }}
      />
      <div className="container-x relative grid lg:grid-cols-[1.05fr,1fr] gap-12 lg:gap-16 items-center py-16 md:py-24">
        <div>
          <span className="eyebrow">Real Estate Development • Project Planning • Property Consultancy</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02]">
            Real Estate Done Right, from First Plan to <span className="text-primary">Lasting Value</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            From land documentation and Real Estate Economics to construction and asset management, Adedara Ola & Co.
            plans every project around long-term value for landowners, investors, developers and property owners
            across Nigeria.
          </p>
          <p className="mt-5 font-display text-xl italic text-secondary">....value driven by excellence</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary/90 transition-all"
            >
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border-2 border-secondary px-6 py-3.5 font-semibold text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              Explore Services
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
            {[
              "Real Estate Economics",
              "Land and Building Documentation",
              "Project Construction",
              "Project Planning",
              "Architectural Drawings",
              "Property Management",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-secondary">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[5/6]">
            <img
              src={heroImg}
              alt="Modern buildings with landscaped grounds"
              className="absolute inset-0 h-full w-full object-cover"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBand() {
  const points = [
    { icon: Award, t: "One standard", d: "A central system sets the quality expected of every professional who works with us." },
    { icon: Shield, t: "Protected clients", d: "Clients' interests are protected and quality expectations are raised on every project." },
    { icon: Users, t: "Open to skilled professionals", d: "We admit qualified professionals as associates as projects come in." },
  ];
  return (
    <section data-reveal className="container-x py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <AboutPanel />
      <div>
        <span className="eyebrow">About Us</span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          A Platform That Brings the Right Professionals Together
        </h2>
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
          Adedara Ola & Co. is building a centrally managed platform that brings qualified professionals across the
          property value chain under one roof, so landowners, investors and developers get planning, economics,
          construction and management from people held to a common standard.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {points.map(({ icon: Icon, t, d }) => (
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
    <section data-reveal className="bg-[var(--surface)] py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            A Full-Spectrum Real Estate Practice
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From first concept to long-term management, our integrated services protect investment value at every
            stage.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {CORE_SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl bg-white border border-border p-8 hover:border-primary hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="h-14 w-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-7 w-7" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Core service</p>
              <h3 className="mt-2 text-xl font-display font-semibold text-navy">{title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{desc}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="eyebrow">More services</p>
          <ul className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {OTHER_SERVICES.map((s) => (
              <li key={s} className="flex items-start gap-2 rounded-lg bg-white border border-border px-4 py-3 text-sm text-secondary">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary shrink-0" /> {s}
              </li>
            ))}
          </ul>
          <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrackRecord() {
  return (
    <section data-reveal className="container-x py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="eyebrow">Our Track Record</span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">What We've Delivered</h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Real work for real clients since 2022. Detailed case studies are on the way, and client names are withheld
          for confidentiality.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {TRACK_RECORD.map(({ icon: Icon, status, title, desc }) => (
          <div key={title} className="rounded-xl border border-border bg-white p-7 flex gap-5">
            <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{status}</span>
              <h3 className="mt-1 text-lg font-display font-semibold text-navy leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm text-muted-foreground leading-relaxed">
        We have also advised landowners, investors, developers and individual clients on property purchases, sales,
        development and financing in areas including Ogudu GRA, Ikeja GRA, Ilupeju and Computer Village, Ikeja.
      </p>
      <Link to="/book-consultation" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
        Discuss your project <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

function WhyUs() {
  return (
    <section data-reveal className="bg-[var(--surface)] py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Why Work With Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Why Work With Adedara Ola & Co.
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
      </div>
    </section>
  );
}

function AssociatesBand() {
  return (
    <section data-reveal className="container-x py-20 md:py-28">
      <div className="rounded-2xl border border-border bg-[var(--surface)] p-8 md:p-12 grid lg:grid-cols-[1.5fr,1fr] gap-8 items-center">
        <div>
          <span className="eyebrow">For Professionals</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">Join Our Real Estate Associate Platform</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            We are open to architects, engineers, surveyors, tradespeople and other property professionals. If you are
            competent and confident in your field, you can join our team and be part of the real estate industry of
            tomorrow, with more prospects and professionalism in every perspective.
          </p>
        </div>
        <div className="lg:text-right">
          <a
            href="/associates"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary/90 transition-all"
          >
            Become an Associate <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Applications are reviewed in two stages. We reply within 5 business days.
          </p>
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
    <section data-reveal className="bg-[var(--navy)] text-white py-20 md:py-28">
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

function Insights() {
  const posts = getLatestPosts(3);

  return (
    <section data-reveal className="bg-[var(--surface)] py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Insights</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Thought Leadership for Real Estate Decision-Makers
            </h2>
          </div>

          <Link to="/insights" className="inline-flex items-center gap-2 font-semibold text-primary self-start md:self-end">
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
                <ArticleTile tag={post.tag} />
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.tag}</span>
                <h3 className="mt-2 font-display font-semibold text-navy text-lg leading-snug">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>

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