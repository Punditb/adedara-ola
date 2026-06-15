import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTASection } from "@/components/site/Layout";
import { MapPin, Bed, Bath, Maximize2, ArrowLeft, CheckCircle2 } from "lucide-react";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import mixedImg from "@/assets/project-mixed.jpg";

const PROPERTY_DETAILS = {
  "4-bedroom-detached-duplex": {
    img: residentialImg,
    title: "4-Bedroom Detached Duplex",
    location: "Lekki Phase 1, Lagos",
    price: "₦185M",
    status: "For Sale",
    beds: 4,
    baths: 5,
    area: "420 sqm",
    description:
      "A spacious 4-bedroom detached duplex located in the heart of Lekki Phase 1, designed for comfortable family living and long-term property value. The home features generous living areas, ensuite bedrooms, modern fittings, ample parking space, and easy access to major roads, schools, shopping centres, and lifestyle destinations.",
    features: [
      "4 ensuite bedrooms",
      "5 bathrooms",
      "Spacious living and dining areas",
      "Modern fitted kitchen",
      "Family lounge",
      "Secure parking",
      "Prime residential neighbourhood",
    ],
    cta: "Schedule Inspection",
  },
  "grade-a-office-floor": {
    img: commercialImg,
    title: "Grade-A Office Floor",
    location: "Victoria Island, Lagos",
    price: "₦24M/year",
    status: "For Lease",
    beds: 0,
    baths: 4,
    area: "650 sqm",
    description:
      "A premium Grade-A office floor in Victoria Island, suitable for corporate organisations, professional service firms, financial institutions, and growing enterprises. The space offers a professional business environment, flexible layout options, reliable access routes, and proximity to major commercial landmarks.",
    features: [
      "650 sqm office space",
      "Open-plan layout",
      "Private office sections",
      "Reception area",
      "Elevator access",
      "Ample parking",
      "Prime commercial address",
    ],
    cta: "Request Lease Details",
  },
  "retail-apartments-block": {
    img: mixedImg,
    title: "Retail + Apartments Block",
    location: "Ikeja GRA, Lagos",
    price: "₦920M",
    status: "For Sale",
    beds: 12,
    baths: 14,
    area: "1,800 sqm",
    description:
      "A mixed-use retail and apartment block located in Ikeja GRA, offering strong commercial and residential investment potential. The development combines ground-floor retail visibility with upper-level residential units, making it ideal for investors seeking rental income, asset appreciation, and long-term portfolio growth.",
    features: [
      "Mixed-use development",
      "Ground-floor retail spaces",
      "Residential apartment units",
      "12 bedrooms/units",
      "14 bathrooms",
      "1,800 sqm total area",
      "High-demand location",
      "Strong rental income potential",
    ],
    cta: "Speak With an Investment Advisor",
  },
};

export const Route = createFileRoute("/properties/$slug")({
  component: PropertyDetailPage,
});

function PropertyDetailPage() {
  const { slug } = Route.useParams();
  const property = PROPERTY_DETAILS[slug as keyof typeof PROPERTY_DETAILS];

  if (!property) {
    return (
      <SiteLayout>
        <section className="container-x py-24">
          <h1 className="font-display text-3xl font-bold text-navy">Property not found</h1>
          <Link to="/properties" className="mt-6 inline-block text-primary font-semibold">
            Back to properties
          </Link>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container-x py-10">
        <Link to="/properties" className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Properties
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden border border-border bg-white">
            <img src={property.img} alt={property.title} className="w-full aspect-[4/3] object-cover" />
          </div>

          <div>
            <span className="rounded-md bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
              {property.status}
            </span>

            <h1 className="mt-5 font-display text-4xl font-bold text-navy">
              {property.title}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {property.location}
            </p>

            <p className="mt-5 text-3xl font-display font-bold text-primary">
              {property.price}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4 border-y border-border py-5 text-sm text-muted-foreground">
              {property.beds > 0 && (
                <span className="flex items-center gap-2">
                  <Bed className="h-4 w-4" /> {property.beds}
                </span>
              )}
              <span className="flex items-center gap-2">
                <Bath className="h-4 w-4" /> {property.baths}
              </span>
              <span className="flex items-center gap-2">
                <Maximize2 className="h-4 w-4" /> {property.area}
              </span>
            </div>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              {property.description}
            </p>

            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold text-navy">Key Features</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {property.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              {property.cta}
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}