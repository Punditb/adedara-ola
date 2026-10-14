import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Stage1Form } from "@/components/associates/Stage1Form";

export const Route = createFileRoute("/associates/")({
  head: () => ({
    meta: [
      { title: "Real Estate Associate Platform | Adedara Ola & Co." },
      {
        name: "description",
        content:
          "Architects, engineers, surveyors, tradespeople and other property professionals can apply to join the Adedara Ola & Co. Real Estate Associate Platform.",
      },
      { property: "og:title", content: "Join the Real Estate Associate Platform | Adedara Ola & Co." },
      { property: "og:url", content: "/associates" },
    ],
    links: [{ rel: "canonical", href: "/associates" }],
  }),
  component: AssociatesPage,
});

const STEPS = [
  { t: "Apply (Stage 1)", d: "Complete a short form with your basic details, profession and experience. It takes about 10 minutes." },
  { t: "Preliminary review", d: "Our founder reviews every application personally and replies within 5 business days." },
  { t: "Stage 2", d: "If your details are a good fit, we email you a private link to the full assessment form, where you can also attach supporting documents." },
  { t: "Admission decision", d: "We assess your Stage 2 submission, may verify qualifications or references, and may invite you to an interview. Only applicants who complete the assessment are considered for admission." },
];

const GROUPS = [
  { t: "Design and planning", d: "Architects, architectural designers, interior designers, 3D visualizers and animators, CAD technicians, landscape designers" },
  { t: "Engineering", d: "Structural, civil, electrical and mechanical engineers, HVAC and generator technicians" },
  { t: "Surveying, valuation and property", d: "Quantity, building and estate surveyors, valuers, real estate agents, property consultants and managers, facility management professionals" },
  { t: "Project delivery", d: "Project managers, construction managers, site supervisors, builders" },
  { t: "Construction trades", d: "Bricklayers, carpenters, plumbers, electricians, painters, tilers, roofers, welders, POP and ceiling installers, aluminium and glass fabricators, furniture and cabinet makers" },
  { t: "Marketing and media", d: "Real estate photographers and videographers, property marketing specialists, graphic designers" },
  { t: "Supply and support", d: "Building materials suppliers, cleaning and post-construction specialists, security systems installers" },
];

const OFFER = [
  "A centrally managed platform that sets the quality standard for every professional on it.",
  "Opportunities opened to skilled professionals as projects come in.",
  "A system designed to raise productivity at an overall reduced cost.",
];

const EXPECT = [
  "Comply with agreed project specifications, timelines, quality standards and safety requirements.",
  "Provide progress updates and communicate promptly throughout a project.",
  "Protect confidential information about the company, its clients and its projects.",
  "Correct verified defects in your work, in line with the terms agreed for the project.",
];

function AssociatesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Associates"
        title="Join the Real Estate Associate Platform"
        subtitle="We are open to competent, confident professionals across the property value chain. Join our team and be part of the real estate industry of tomorrow, with more prospects and professionalism in every perspective."
      />

      <section className="container-x py-16 md:py-20">
        <span className="eyebrow">How it works</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">Two stages, one clear process</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.t} className="rounded-xl border border-border bg-white p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-display font-bold text-primary">{i + 1}</span>
              <p className="mt-4 font-display font-semibold text-navy">{step.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface)] py-16 md:py-20">
        <div className="container-x">
          <span className="eyebrow">Who can apply</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">All property professions are open</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {GROUPS.map((g) => (
              <div key={g.t} className="rounded-xl border border-border bg-white p-6">
                <p className="font-display font-semibold text-navy">{g.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <span className="eyebrow">What the platform offers</span>
          <ul className="mt-5 space-y-3">
            {OFFER.map((t) => (
              <li key={t} className="flex items-start gap-3 text-secondary">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="eyebrow">What we expect of associates</span>
          <ul className="mt-5 space-y-3">
            {EXPECT.map((t) => (
              <li key={t} className="flex items-start gap-3 text-secondary">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-lg bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground">
            Admission to the platform does not guarantee any project, payment or minimum volume of work. Any project
            engagement is subject to a separate written agreement covering scope, deliverables, timelines, fees and
            payment terms.
          </p>
        </div>
      </section>

      <section id="apply" className="bg-[var(--surface)] py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Apply now</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">Stage 1 application</h2>
          <p className="mt-3 mb-8 text-muted-foreground">
            Fields marked * are required. You will receive an email confirmation, and we will reply within 5 business
            days.
          </p>
          <Stage1Form />
        </div>
      </section>
    </SiteLayout>
  );
}