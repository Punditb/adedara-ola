import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { useEffect, useRef } from "react";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const sections = Array.from(main.querySelectorAll("section"));

    if (prefersReducedMotion) {
      sections.forEach((section) => {
        section.classList.add("reveal-visible");
      });
      return;
    }

    sections.forEach((section, index) => {
      section.classList.add("reveal-section");

      if (index === 0) {
        section.classList.add("reveal-visible");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    sections.forEach((section, index) => {
      if (index !== 0) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <main ref={mainRef}>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-[var(--surface)] to-background border-b border-border">
      <div className="container-x py-16 md:py-24 max-w-4xl">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="bg-[var(--navy)] text-white">
      <div className="container-x py-16 md:py-20 grid md:grid-cols-[1.4fr,1fr] gap-10 items-center">
        <div>
          <span className="eyebrow text-primary">Let's Build Together</span>
          <h2 className="mt-3 text-white text-3xl md:text-4xl font-bold leading-tight">
            Ready to Bring Your Real Estate Vision to Life?
          </h2>
          <p className="mt-4 text-white/70 text-lg max-w-xl">
            Speak with our team today and discover how we can help you plan, develop,
            manage, and maximize your property investments.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-stretch">
          <a
            href="/book-consultation"
            className="rounded-md bg-primary px-6 py-3.5 text-center font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Book Consultation
          </a>
          <a
            href="/contact"
            className="rounded-md border border-white/20 px-6 py-3.5 text-center font-semibold text-white hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
