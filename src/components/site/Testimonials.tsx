import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials";

export function Testimonials({ compact = false }: { compact?: boolean }) {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <section data-reveal className={`container-x ${compact ? "py-12 md:py-16" : "py-20 md:py-28"}`}>
      <div className="max-w-2xl">
        <span className="eyebrow">Testimonials</span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">What Our Clients Say</h2>
        <p className="mt-4 text-muted-foreground text-lg">In their own words, from clients we have served.</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-xl border border-border bg-white p-7">
            <Quote className="h-8 w-8 text-primary" />
            <blockquote className="mt-4 flex-1 leading-relaxed text-secondary">“{t.quote}”</blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="font-display font-semibold text-navy">{t.name}</p>
              {t.role && <p className="text-sm text-muted-foreground">{t.role}</p>}
              <p className="text-sm text-muted-foreground">{t.place}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}