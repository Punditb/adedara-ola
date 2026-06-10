import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Adedara Ola & Co. — Real Estate Developers Lagos" },
      { name: "description", content: "Reach Adedara Ola & Co. at 42 Ola Street, Itire, Surulere, Lagos. Phone +234 703 808 8610. Email adedaraolaproperties@gmail.com." },
      { property: "og:title", content: "Contact Adedara Ola & Co." },
      { property: "og:description", content: "Get in touch with our real estate development team in Lagos." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Project"
        subtitle="Whether you're planning a development, exploring an investment, or need property management — our team is ready to help."
      />

      <section className="container-x py-16 grid lg:grid-cols-[1.2fr,1fr] gap-12">
        <ContactForm />
        <div className="space-y-5">
          <Info icon={MapPin} title="Office" lines={["42, Ola Street, Itire,", "Surulere, Lagos, Nigeria"]} />
          <Info icon={Phone} title="Phone" lines={[
            <a key="1" href="tel:+2347038088610" className="hover:text-primary">+234 703 808 8610</a>,
            <a key="2" href="tel:+2348035204149" className="hover:text-primary">+234 803 520 4149</a>,
          ]} />
          <Info icon={Mail} title="Email" lines={[
            <a key="1" href="mailto:adedaraolaproperties@gmail.com" className="hover:text-primary break-all">adedaraolaproperties@gmail.com</a>,
            <a key="2" href="mailto:olaadedarabrand@gmail.com" className="hover:text-primary break-all">olaadedarabrand@gmail.com</a>,
          ]} />
          <Info icon={Clock} title="Business Hours" lines={["Mon – Fri: 9:00 – 18:00", "Sat: 10:00 – 14:00", "Sun: Closed"]} />
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="rounded-2xl overflow-hidden border border-border aspect-[16/7] bg-muted">
          <iframe
            title="Office location map"
            src="https://www.google.com/maps?q=Surulere,Lagos&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Info({ icon: Icon, title, lines }: { icon: any; title: string; lines: React.ReactNode[] }) {
  return (
    <div className="rounded-xl bg-[var(--surface)] border border-border p-6 flex gap-4">
      <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-display font-semibold text-navy">{title}</p>
        <div className="mt-1 text-sm text-muted-foreground space-y-0.5">
          {lines.map((l, i) => <div key={i}>{l}</div>)}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-[var(--shadow-card)] space-y-4"
    >
      {sent ? (
        <div className="text-center py-12">
          <p className="text-2xl font-display font-bold text-navy">Message received</p>
          <p className="mt-2 text-muted-foreground">We'll respond within 1 business day.</p>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" name="name" />
            <Field label="Email" type="email" name="email" />
            <Field label="Phone" name="phone" />
            <Field label="Company (optional)" name="company" required={false} />
          </div>
          <div>
            <label className="text-sm font-semibold text-navy">I'm interested in</label>
            <select className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-primary">
              <option>Project Planning</option>
              <option>Construction</option>
              <option>Refurbishment</option>
              <option>Building Approvals</option>
              <option>Property Management</option>
              <option>Investment Opportunities</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-navy">Message</label>
            <textarea rows={5} required className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Tell us a little about your project..." />
          </div>
          <button className="w-full rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90">Send message</button>
        </>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-navy">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-1.5 w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
    </div>
  );
}
