import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { SiteLayout, PageHero, CTASection } from "@/components/site/Layout";
import { ArticleTile } from "@/components/site/BrandTile";
import { getServiceDetail } from "@/lib/services";
import { getLatestPosts } from "@/lib/insights";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceDetail(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service | Adedara Ola & Co." }] };
    return {
      meta: [
        { title: `${s.title} in Lagos | Adedara Ola & Co.` },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: `${s.title} | Adedara Ola & Co.` },
        { property: "og:description", content: s.summary },
        { property: "og:url", content: `/services/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const related = getLatestPosts(10)
    .filter((post) => service.relatedTags.includes(post.tag))
    .slice(0, 2);

  return (
    <SiteLayout>
      <PageHero eyebrow="Our Services" title={service.title} subtitle={service.summary} />

      <section data-reveal className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-[1.3fr,1fr]">
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-7 w-7" />
          </div>
          <span className="eyebrow mt-6 inline-block">Overview</span>
          {service.overview.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
          <Link
            to="/book-consultation"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary/90 transition-all"
          >
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-2xl border border-border bg-[var(--surface)] p-6 md:p-8">
          <p className="eyebrow">Problems we solve</p>
          <ul className="mt-5 space-y-4">
            {service.problems.map((problem) => (
              <li key={problem} className="flex items-start gap-3 text-secondary">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-reveal className="bg-[var(--surface)] py-16 md:py-20">
        <div className="container-x">
          <span className="eyebrow">Our approach</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">How we work</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-border bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-display font-bold text-primary">
                  {index + 1}
                </span>
                <p className="mt-4 font-display font-semibold text-navy">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="container-x py-16 md:py-20">
        <span className="eyebrow">Benefits</span>
        <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">What you gain</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 rounded-xl border border-border bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-secondary">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section data-reveal className="bg-[var(--surface)] py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Common questions</h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white px-6">
            {service.faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section data-reveal className="container-x py-16 md:py-20">
          <span className="eyebrow">Related reading</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">From our Insights</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {related.map((post) => (
              <Link
                key={post.slug}
                to="/insights/$slug"
                params={{ slug: post.slug }}
                className="group overflow-hidden rounded-xl border border-border bg-white transition-all hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[16/7] overflow-hidden">
                  <ArticleTile tag={post.tag} />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.tag}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </SiteLayout>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-4 text-left">
        <span className="font-semibold text-navy">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}