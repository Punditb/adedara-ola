import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTASection } from "@/components/site/Layout";
import { CATS, POSTS } from "@/lib/insights";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Layers,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/insights/$slug")({
  component: InsightDetailPage,
});

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function renderBoldText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-navy">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

function InsightDetailPage() {
  const { slug } = Route.useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <SiteLayout>
        <section className="container-x py-24">
          <h1 className="text-3xl font-bold text-navy">Article not found</h1>
          <Link to="/insights" className="mt-6 inline-block text-primary font-semibold">
            Back to Insights
          </Link>
        </section>
      </SiteLayout>
    );
  }

  const headings = post.content.filter((block) => block.type === "heading");
  const relatedPosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const articleCategories = CATS.filter((cat) => cat !== "All");

  return (
    <SiteLayout>
      <article>
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--surface)] via-white to-background border-b border-border">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(0,160,220,0.18),transparent_35%)]" />

          <div className="relative container-x py-14 md:py-24 max-w-5xl">
            <div className="mb-8">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Insights
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              {post.tag}
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-navy max-w-4xl">
              {post.title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="font-semibold text-navy">{post.author}</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        <section className="container-x py-10 md:py-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div>
              <div className="rounded-2xl overflow-hidden border border-border bg-white shadow-[var(--shadow-card)]">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full aspect-[16/8] object-cover"
                />
              </div>

              <div className="mt-10 rounded-2xl bg-white border border-border p-6 md:p-10 shadow-sm">
                <div className="max-w-3xl">
                  {post.content.map((block, index) => {
                    if (block.type === "heading") {
                      const id = slugify(block.text);

                      return (
                        <h2
                          key={index}
                          id={id}
                          className="scroll-mt-28 mt-10 first:mt-0 text-2xl md:text-3xl font-bold text-navy leading-tight"
                        >
                          {block.text}
                        </h2>
                      );
                    }

                    if (block.type === "subheading") {
                      return (
                        <h3
                          key={index}
                          className="mt-8 text-xl md:text-2xl font-bold text-navy leading-tight"
                        >
                          {block.text}
                        </h3>
                      );
                    }

                    if (block.type === "list") {
                      return (
                        <ul key={index} className="mt-5 space-y-3">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-muted-foreground leading-relaxed"
                            >
                              <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    if (block.type === "numbered-list") {
                      return (
                        <ol key={index} className="mt-5 space-y-3 list-decimal pl-6 text-muted-foreground">
                          {block.items.map((item) => (
                            <li key={item} className="leading-relaxed pl-2">
                              {item}
                            </li>
                          ))}
                        </ol>
                      );
                    }

                    return (
                      <p
                        key={index}
                        className="mt-5 text-[17px] text-muted-foreground leading-8"
                      >
                        {renderBoldText(block.text)}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              {headings.length > 0 && (
                <div className="rounded-2xl bg-white border border-border p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-navy font-display font-semibold">
                    <BookOpen className="h-5 w-5 text-primary" />
                    In this article
                  </div>

                  <div className="mt-4 space-y-3">
                    {headings.map((heading) => (
                      <a
                        key={heading.text}
                        href={`#${slugify(heading.text)}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {heading.text}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-2xl bg-[var(--surface)] border border-border p-6">
                <div className="flex items-center gap-2 text-navy font-display font-semibold">
                  <Layers className="h-5 w-5 text-primary" />
                  Categories
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {articleCategories.map((cat) => (
                    <Link
                      key={cat}
                      to="/insights"
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${post.tag === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-white text-secondary hover:text-primary"
                        }`}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[var(--navy)] text-white p-6">
                <p className="eyebrow text-primary">Need Guidance?</p>
                <h3 className="mt-3 font-display text-xl font-bold">
                  Discuss Your Real Estate Decision
                </h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  Speak with our team about planning, development, investment,
                  approvals, or property strategy.
                </p>
                <Link
                  to="/book-consultation"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Book Consultation
                </Link>
              </div>

              {relatedPosts.length > 0 && (
                <div className="rounded-2xl bg-white border border-border p-6 shadow-sm">
                  <h3 className="font-display font-semibold text-navy">
                    More Insights
                  </h3>

                  <div className="mt-4 space-y-4">
                    {relatedPosts.map((item) => (
                      <Link
                        key={item.slug}
                        to="/insights/$slug"
                        params={{ slug: item.slug }}
                        className="group block border-b border-border last:border-0 pb-4 last:pb-0"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {item.tag}
                        </p>
                        <h4 className="mt-1 text-sm font-semibold text-navy group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                          Read article <ArrowRight className="h-3 w-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>
      </article>

      <CTASection />
    </SiteLayout>
  );
}