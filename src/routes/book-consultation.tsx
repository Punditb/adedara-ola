import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { CalendarCheck, MessageSquareText, FileText, Clock } from "lucide-react";

export const Route = createFileRoute("/book-consultation")({
    head: () => ({
        meta: [
            { title: "Book Consultation — Adedara Ola & Co." },
            {
                name: "description",
                content:
                    "Schedule a consultation with Adedara Ola & Co. to discuss your real estate project, investment, property acquisition, or development plans.",
            },
        ],
        links: [{ rel: "canonical", href: "/book-consultation" }],
    }),
    component: BookConsultationPage,
});

function BookConsultationPage() {
    return (
        <SiteLayout>
            <PageHero
                eyebrow="Book Consultation"
                title="Schedule a Consultation With Our Team"
                subtitle="Choose a convenient date and time to discuss your project, property needs, investment plans, or real estate development goals."
            />
            <section className="container-x pt-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                        {
                            icon: CalendarCheck,
                            title: "Choose a Suitable Time",
                            desc: "Select a date and time that works best for your schedule.",
                        },
                        {
                            icon: MessageSquareText,
                            title: "Share Your Needs",
                            desc: "Tell us the service or property matter you would like to discuss.",
                        },
                        {
                            icon: FileText,
                            title: "Prepare Key Details",
                            desc: "Bring relevant project, property, or investment information to the meeting.",
                        },
                        {
                            icon: Clock,
                            title: "Get Clear Next Steps",
                            desc: "Our team will review your enquiry and guide you on the best way forward.",
                        },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="rounded-xl bg-white border border-border p-6 shadow-sm">
                            <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="mt-4 font-display font-semibold text-navy">{title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container-x py-12 md:py-16">
                <div className="rounded-2xl overflow-hidden border border-border bg-white shadow-[var(--shadow-card)]">
                    <iframe
                        src="https://cal.com/adedarao/consultation-meeting"
                        title="Book a consultation with Adedara Ola & Co."
                        className="w-full min-h-[850px]"
                    />
                </div>
            </section>
        </SiteLayout>
    );
}