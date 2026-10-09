import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";
import { COMING_SOON_HEAD } from "@/lib/site-config";

export const Route = createFileRoute("/properties")({
  head: () => COMING_SOON_HEAD,
  component: PropertiesPage,
});

function PropertiesPage() {
  return (
    <ComingSoon
      eyebrow="Properties"
      title="Property Listings Are Coming Soon"
      message="We don't have listings to show just yet. Book a free consultation to tell us what you're looking for."
      secondaryTo="/"
      secondaryLabel="Back to Home"
    />
  );
}