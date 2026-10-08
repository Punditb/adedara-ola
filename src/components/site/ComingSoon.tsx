import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";

type Props = {
  eyebrow: string;
  title: string;
  message: string;
  secondaryTo: "/" | "/services";
  secondaryLabel: string;
};

export function ComingSoon({ eyebrow, title, message, secondaryTo, secondaryLabel }: Props) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={message} />
      <section className="container-x py-16 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Clock className="h-7 w-7 text-primary" />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary/90 transition-all"
            >
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={secondaryTo}
              className="inline-flex items-center gap-2 rounded-md border-2 border-secondary px-6 py-3.5 font-semibold text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}