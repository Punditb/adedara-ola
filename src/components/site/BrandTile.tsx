import type { ComponentType } from "react";
import { Building2, Check, HardHat, Landmark, Scale, TrendingUp, Wrench } from "lucide-react";

const TAG_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "Real Estate Development": Building2,
  "Real Estate Economics": TrendingUp,
  "Property Investment": Landmark,
  Construction: HardHat,
  "Market Analysis": TrendingUp,
  "Regulatory Updates": Scale,
  "Property Maintenance": Wrench,
};

const TILE_BACKGROUND =
  "radial-gradient(circle at 90% 0%, color-mix(in oklab, var(--primary) 40%, transparent) 0%, transparent 55%), linear-gradient(135deg, var(--navy), var(--secondary))";

// Used where an article photo used to be. The parent must be "relative" and have a fixed shape.
export function ArticleTile({ tag, large = false }: { tag: string; large?: boolean }) {
  const Icon = TAG_ICONS[tag] ?? Building2;
  return (
    <div
      role="img"
      aria-label={tag}
      className="absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden px-6 text-center"
      style={{ background: TILE_BACKGROUND }}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full border border-white/10" />
      <Icon className={`relative text-white ${large ? "h-16 w-16" : "h-12 w-12"}`} />
      <span
        className={`relative font-semibold uppercase tracking-[0.2em] text-white/90 ${large ? "text-sm" : "text-xs"}`}
      >
        {tag}
      </span>
    </div>
  );
}

// To remove a line from either list, delete that whole line.
const FACTS = [
  "Founded in 2022",
  "Registered October 2023 · RC 7192962",
  "11 professional services",
  "Free consultation",
];

const VALUES = [
  { name: "Totality", text: "Making a difference that touches every area of the industry." },
  { name: "Quality", text: "Meeting our clients' requirements without compromise." },
  { name: "Possibility", text: "Using creativity to improve status and unlock growth for everyone." },
  { name: "Reliability", text: "Clients can trust us to deliver on every area of interest to them." },
];

// Used where the team photo used to be (homepage About band and About page).
export function AboutPanel() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-8 text-white shadow-[var(--shadow-card)] md:p-10"
      style={{ background: TILE_BACKGROUND }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
      <div className="relative">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">At a glance</span>
        <ul className="mt-4 space-y-2.5">
          {FACTS.map((fact) => (
            <li key={fact} className="flex items-start gap-3 text-sm md:text-base">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
        <div className="my-7 h-px bg-white/15" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Our values</span>
        <dl className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div key={value.name}>
              <dt className="font-display font-semibold text-white">{value.name}</dt>
              <dd className="mt-1 text-sm leading-snug text-white/75">{value.text}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 border-t border-white/15 pt-5 font-display text-lg italic text-white/90">
          ....value driven by excellence
        </p>
      </div>
    </div>
  );
}