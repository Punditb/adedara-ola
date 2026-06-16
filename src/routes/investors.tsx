import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero, CTASection } from "@/components/site/Layout";
import { TrendingUp, Shield, BarChart3, Target, Compass, Award } from "lucide-react";
import investorsImg from "@/assets/investors.jpg";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors — Real Estate Investment Opportunities | Adedara Ola & Co." },
      { name: "description", content: "Partner with Adedara Ola & Co. to access investment-grade real estate opportunities across Nigeria. ROI optimization, risk mitigation and market expertise." },
      { property: "og:title", content: "Investors — Adedara Ola & Co." },
      { property: "og:description", content: "Investment-grade real estate opportunities across Nigeria." },
      { property: "og:url", content: "/investors" },
    ],
    links: [{ rel: "canonical", href: "/investors" }],
  }),
  component: InvestorsPage,
});

function InvestorsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="For Investors"
        title="Helping Investors Maximize Real Estate Opportunities"
        subtitle="We partner with institutional capital, family offices and HNW investors to source, structure and shepherd Nigerian real estate opportunities."
      />

      <section className="container-x py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-[var(--shadow-card)]">
          <img src={investorsImg} alt="Real estate investor reviewing portfolio" loading="lazy" className="h-full w-full object-cover" width={1280} height={960} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { k: "Avg. IRR", v: "18.4%", d: "Across managed portfolio" },
            { k: "Capital Deployed", v: "₦12B+", d: "Cumulative" },
            { k: "Active Projects", v: "24", d: "In pipeline" },
            { k: "Investor Retention", v: "92%", d: "Repeat capital" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl bg-[var(--surface)] border border-border p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{s.k}</p>
              <p className="mt-2 text-3xl font-display font-bold text-navy">{s.v}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Investment Pillars</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">A Framework Built for Compounding Returns</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: TrendingUp, t: "ROI Optimization", d: "Structures tuned for cash-on-cash returns and exit multiples." },
              { icon: Compass, t: "Development Planning", d: "Phased capital deployment and de-risked execution." },
              { icon: Shield, t: "Risk Mitigation", d: "Title, regulatory and execution risk identified and managed." },
              { icon: BarChart3, t: "Market Intelligence", d: "Submarket data and demand modelling guide every decision." },
              { icon: Target, t: "Value Creation", d: "Active asset management to grow ROI year over year." },
              { icon: Award, t: "Aligned Incentives", d: "We co-invest where appropriate to align outcomes." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-xl bg-white border border-border p-6">
                <Icon className="h-7 w-7 text-primary" />
                <p className="mt-4 font-display font-semibold text-navy text-lg">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InvestorForm />
      <CTASection />
    </SiteLayout>
  );
}

function InvestorForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="container-x py-16 md:py-24 grid lg:grid-cols-[1fr,1.2fr] gap-12 items-start">
      <div>
        <span className="eyebrow">Investor Inquiry</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">Explore Active Opportunities</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Tell us a little about your investment thesis and we will follow up confidentially
          with relevant opportunities from our pipeline.
        </p>
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-[var(--shadow-card)] space-y-4"
      >
        {submitted ? (
          <div className="text-center py-10">
            <p className="text-2xl font-display font-bold text-navy">Thank you</p>
            <p className="mt-2 text-muted-foreground">Our investor relations team will be in touch within 1 business day.</p>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" />
              <Field label="Organization" name="org" />
              <Field label="Email" type="email" name="email" />
              <Field label="Phone" name="phone" />
            </div>
            <div>
              <label className="text-sm font-semibold text-navy">Ticket size</label>
              <select className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm">
                <option>Under ₦50M</option>
                <option>₦50M – ₦250M</option>
                <option>₦250M – ₦1B</option>
                <option>₦1B+</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-navy">Investment focus</label>
              <textarea rows={4} className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm" placeholder="Residential, commercial, mixed-use, expected horizon..." />
            </div>
            <button className="w-full rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">Submit inquiry</button>
          </>
        )}
      </form>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-navy">{label}</label>
      <input id={name} name={name} type={type} required className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
    </div>
  );
}
