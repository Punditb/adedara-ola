import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";
import { COMING_SOON_HEAD } from "@/lib/site-config";

export const Route = createFileRoute("/projects")({
  head: () => COMING_SOON_HEAD,
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <ComingSoon
      eyebrow="Our Projects"
      title="Our Project Portfolio Is Coming Soon"
      message="We're documenting our work as detailed case studies. In the meantime, see what we do or speak to us directly."
      secondaryTo="/services"
      secondaryLabel="View Our Services"
    />
  );
}