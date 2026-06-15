import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTASection } from "@/components/site/Layout";
import { MapPin, Bed, Bath, Maximize2 } from "lucide-react";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import mixedImg from "@/assets/project-mixed.jpg";
import refurbImg from "@/assets/project-refurb.jpg";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — Available Listings | Adedara Ola & Co." },
      { name: "description", content: "Browse premium residential, commercial and mixed-use properties available through Adedara Ola & Co. in Lagos and across Nigeria." },
      { property: "og:title", content: "Properties — Adedara Ola & Co." },
      { property: "og:description", content: "Premium properties for sale and lease in Lagos." },
      { property: "og:url", content: "/properties" },
    ],
    links: [{ rel: "canonical", href: "/properties" }],
  }),
  component: PropertiesPage,
});

const PROPERTIES = [
  {
    slug: "4-bedroom-detached-duplex",
    img: residentialImg,
    title: "4-Bedroom Detached Duplex",
    location: "Lekki Phase 1",
    price: "₦185M",
    beds: 4,
    baths: 5,
    area: "420 sqm",
    tag: "For Sale",
  },
  {
    slug: "grade-a-office-floor",
    img: commercialImg,
    title: "Grade-A Office Floor",
    location: "Victoria Island",
    price: "₦24M/yr",
    beds: 0,
    baths: 4,
    area: "650 sqm",
    tag: "For Lease",
  },
  {
    slug: "retail-apartments-block",
    img: mixedImg,
    title: "Retail + Apartments Block",
    location: "Ikeja GRA",
    price: "₦920M",
    beds: 12,
    baths: 14,
    area: "1,800 sqm",
    tag: "For Sale",
  },
  {
    slug: "refurbished-penthouse",
    img: refurbImg,
    title: "Refurbished Penthouse",
    location: "Ikoyi",
    price: "₦310M",
    beds: 3,
    baths: 4,
    area: "280 sqm",
    tag: "For Sale",
  },
  {
    slug: "serviced-apartments",
    img: residentialImg,
    title: "Serviced Apartments",
    location: "Surulere",
    price: "₦7.5M/yr",
    beds: 2,
    baths: 2,
    area: "120 sqm",
    tag: "For Lease",
  },
  {
    slug: "retail-showroom",
    img: commercialImg,
    title: "Retail Showroom",
    location: "Allen Avenue",
    price: "₦14M/yr",
    beds: 0,
    baths: 2,
    area: "320 sqm",
    tag: "For Lease",
  },
];

function PropertiesPage() {
  const { location } = useRouterState();

  if (location.pathname !== "/properties") {
    return <Outlet />;
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Properties"
        title="Premium Properties For Sale & Lease"
        subtitle="A curated selection of residential, commercial and mixed-use properties across Lagos."
      />

      <section className="container-x py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.map((p, i) => (
            <Link
              key={i}
              to="/properties/$slug"
              params={{ slug: p.slug }}
              className="group rounded-xl overflow-hidden bg-white border border-border hover:shadow-[var(--shadow-card)] transition-all block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width={1024}
                  height={768}
                />
                <span className="absolute top-3 left-3 rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                  {p.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-navy">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </p>
                <p className="mt-3 text-xl font-display font-bold text-primary">{p.price}</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-4 text-xs text-muted-foreground">
                  {p.beds > 0 && (
                    <span className="flex items-center gap-1">
                      <Bed className="h-4 w-4" /> {p.beds}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" /> {p.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize2 className="h-4 w-4" /> {p.area}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
