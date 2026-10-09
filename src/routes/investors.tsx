import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";
import { COMING_SOON_HEAD } from "@/lib/site-config";

export const Route = createFileRoute("/investors")({
  head: () => COMING_SOON_HEAD,
  component: InvestorsPage,
});

function InvestorsPage() {
  return (
    <ComingSoon
      eyebrow="Investors"
      title="Investor Information Is Coming Soon"
      message="We're preparing detailed information for investors. In the meantime, book a free consultation and we'll talk through your interests."
      secondaryTo="/"
      secondaryLabel="Back to Home"
    />
  );
}