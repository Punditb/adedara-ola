export type ProjectImage = {
  file: string; // file name without the -small / -large ending
  alt: string;
  kind: "render" | "ai";
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  status: string;
  summary: string;
  details: string[];
  facts: { label: string; value: string }[];
  images: ProjectImage[];
};

export const RENDER_NOTE = "3D Visualisation. The completed building may differ slightly in details.";
export const AI_NOTE = "AI-enhanced artist’s impression. The completed building may differ slightly in details.";

export function imageUrl(slug: string, file: string, size: "small" | "large") {
  return `/images/projects/${slug}/${file}-${size}.webp`;
}

export const PROJECTS: Project[] = [
  {
    slug: "apartment-oshodi",
    title: "17-Unit Apartment Building, Oshodi",
    location: "Mafoluku, Oshodi, Lagos",
    status: "Under construction",
    summary:
      "A G+2 building with a penthouse, offering 17 apartments from studios to one- and two-bedroom units, designed with Think Living™ in mind.",
    details: [
      "Fully conceptualised, designed and engineered by Adedara Ola & Co. Limited, the building brings studio, one-bedroom and two-bedroom apartments together in one development.",
      "It is our first major development, and it is being built by our team of associates across the construction professions.",
    ],
    facts: [
      { label: "Location", value: "Mafoluku, Oshodi, Lagos" },
      { label: "Units", value: "17 apartments" },
      { label: "Types", value: "Studio, 1-bed and 2-bed" },
      { label: "Structure", value: "G+2 with a penthouse" },
      { label: "Our role", value: "Concept, design, engineering and construction" },
      { label: "Status", value: "Under construction" },
    ],
    images: [
      { file: "exterior-dusk", kind: "render", alt: "Dusk view of the 17-unit apartment building with warm facade lighting" },
      { file: "exterior-day-1", kind: "render", alt: "Daytime view of the apartment building from the street" },
      { file: "exterior-day-2", kind: "render", alt: "Daytime corner view of the apartment building" },
      { file: "exterior-night", kind: "render", alt: "Night view of the apartment building with lit balconies" },
      { file: "interior-living", kind: "render", alt: "Living room of an apartment with an L-shaped sofa" },
      { file: "interior-bedroom-1", kind: "render", alt: "Bedroom with a panelled headboard wall and fitted wardrobe" },
      { file: "interior-studio", kind: "render", alt: "Studio apartment with a TV wall and kitchenette" },
      { file: "interior-bedroom-2", kind: "render", alt: "Bedroom with a patterned feature wall and pendant lights" },
      { file: "interior-bedroom-3", kind: "render", alt: "Bedroom with a geometric feature wall" },
      { file: "exterior-day-3", kind: "render", alt: "Daytime view of the apartment building entrance side" },
      { file: "ai-dusk-1", kind: "ai", alt: "AI-enhanced dusk view of the apartment building" },
      { file: "ai-dusk-2", kind: "ai", alt: "AI-enhanced dusk view of the apartment building from another angle" },
      { file: "ai-night-1", kind: "ai", alt: "AI-enhanced night view of the apartment building" },
      { file: "ai-night-2", kind: "ai", alt: "AI-enhanced night view of the apartment building from another angle" },
    ],
  },
  {
    slug: "church-sanya",
    title: "Deeper Life Bible Church Auditorium, Sanya",
    location: "Sanya, Lagos",
    status: "Proposed design",
    summary:
      "A proposed 500-seater auditorium for Deeper Life Bible Church, Sanya, fully redesigned and planned by Adedara Ola & Co. Limited.",
    details: [
      "The design aims for a simple yet sophisticated look, with comfort and affordability in mind.",
      "The project is planned to start in 2027.",
    ],
    facts: [
      { label: "Client", value: "Deeper Life Bible Church, Sanya" },
      { label: "Capacity", value: "500 seats" },
      { label: "Our role", value: "Redesign and planning" },
      { label: "Status", value: "Proposed design" },
    ],
    images: [
      { file: "exterior-corner", kind: "render", alt: "Corner view of the proposed church auditorium with a cross and pointed-arch windows" },
      { file: "exterior-front", kind: "render", alt: "Front entrance of the proposed church auditorium with a canopy and access ramp" },
      { file: "exterior-ramp", kind: "render", alt: "Side view of the proposed church auditorium with an access ramp" },
      { file: "exterior-stair", kind: "render", alt: "Side entrance and decorative staircase of the proposed church auditorium" },
    ],
  },
];