import { FileText, Hammer, TrendingUp } from "lucide-react";
import type { ComponentType } from "react";

export type ServiceDetail = {
  slug: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  summary: string;
  metaDescription: string;
  overview: string[];
  problems: string[];
  approach: { title: string; text: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  relatedTags: string[];
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "real-estate-economics",
    title: "Real Estate Economics",
    icon: TrendingUp,
    summary:
      "Market-informed economics advice that gives your investment and development decisions a firm footing before money is committed.",
    metaDescription:
      "Real Estate Economics advice in Lagos: feasibility, costs, returns and risk analysis for land owners, investors and developers, from Adedara Ola & Co.",
    overview: [
      "Real Estate Economics is the thinking behind every sound project. Before any money is committed, we analyse the problems, prospects and positioning of the project: what it will cost, what it can realistically earn, and where its value comes from.",
      "Whether you hold land you want to put to better use, are weighing an investment, or are planning a development, we help you see the numbers and the risks clearly, so the decision is yours and is made on evidence.",
    ],
    problems: [
      "You own land but are unsure what to build on it, or whether to build at all.",
      "A development idea looks attractive, but you cannot tell whether the costs and returns add up.",
      "You are comparing investment options and need an honest view of risk and return.",
      "You want to improve the returns on an existing property by giving it a better use.",
    ],
    approach: [
      { title: "Understand your goal", text: "We start with your land or idea, your budget, your timeline and how much risk you are comfortable with." },
      { title: "Evaluate the project", text: "We assess feasibility, market potential and expected development costs." },
      { title: "Test the returns", text: "We compare the realistic options and what each is likely to earn." },
      { title: "Advise and guide", text: "You receive a clear recommendation and the practical next steps to act on it." },
    ],
    benefits: [
      "Better-informed investment decisions",
      "Balanced project economics",
      "A clearer view of risk before you commit",
      "Higher-value uses for land and property",
    ],
    faqs: [
      {
        q: "What is Real Estate Economics?",
        a: "It is the analysis of what a property or development will cost and what it can realistically earn, so that investment and development decisions are made on evidence rather than guesswork.",
      },
      {
        q: "Can you help me decide what to do with my land?",
        a: "Yes. We assess the land, your goals and the market, then outline options such as developing, renovating, repositioning or selling, together with the likely economics of each.",
      },
      {
        q: "Can you assess a development idea I already have?",
        a: "Yes. We review its feasibility, market potential, expected costs and likely performance, and tell you plainly where it is strong and where it is weak.",
      },
      {
        q: "Is it worth doing for a small project?",
        a: "Projects of any size benefit from knowing the numbers before building. We scale the analysis to the size and complexity of your project.",
      },
    ],
    relatedTags: ["Real Estate Economics"],
  },
  {
    slug: "land-and-building-documentation",
    title: "Land and Building Documentation",
    icon: FileText,
    summary:
      "We manage the approvals and documentation process, securing the permits and authorizations that give your development a firm legal foundation.",
    metaDescription:
      "Land and building documentation in Lagos: building approvals, planning permits and compliance support with agencies such as LASBCA and LASPPPA, from Adedara Ola & Co.",
    overview: [
      "Few things delay a property project like missing or stalled paperwork. We take on the approvals and documentation process for you: reviewing your documents, preparing and submitting applications, following them up with the relevant authorities, and keeping you informed until the permit is in your hands.",
      "We have handled building approvals and planning permits with agencies such as the Lagos State Building Control Agency (LASBCA) and the Lagos State Physical Planning Permit Authority (LASPPPA), including cases that had stalled for a long time under earlier consultants.",
    ],
    problems: [
      "You are not sure which approvals your project needs, or in what order to obtain them.",
      "Your application has been stuck with an agency for months.",
      "Your building faces a contravention or compliance issue.",
      "You want to understand your land and property documents before you buy, sell or develop.",
    ],
    approach: [
      { title: "Review your documents", text: "We go through your title and property documents, survey plans and drawings to see what is in place and what is missing." },
      { title: "Plan the approvals", text: "We identify the approvals and permits your project needs and put them in the right order." },
      { title: "Process the applications", text: "We prepare and submit the applications and follow them up with the relevant agencies." },
      { title: "Deliver and explain", text: "We hand over the permits and explain each document, so you understand exactly what you hold." },
    ],
    benefits: [
      "Compliance with planning and building regulations",
      "Fewer avoidable delays",
      "Properly prepared and organised documentation",
      "A clear explanation of every stage",
    ],
    faqs: [
      {
        q: "Why are building approvals important?",
        a: "They confirm that your development complies with planning regulations and building standards, which protects your investment and helps you avoid penalties.",
      },
      {
        q: "Do you assist with LASPPPA and LASBCA matters?",
        a: "Yes. We guide clients through the documentation and approval process with these and other relevant authorities.",
      },
      {
        q: "What documents are typically required?",
        a: "Requirements vary by project, but they generally include property title documents, survey plans, architectural drawings and the supporting application forms. We will tell you exactly what your project needs.",
      },
      {
        q: "Can you help if my application has stalled?",
        a: "Yes. We review where the application stands and what is missing, then take the follow-up with the relevant agency from there. We cannot promise a timeline, because that depends on the authority, but we have helped clients move cases that had been stuck for a long time.",
      },
      {
        q: "Can you help with a contravention notice?",
        a: "We have helped clients through LASBCA contravention cases. Contact us with the details and we will advise you on the way forward.",
      },
    ],
    relatedTags: [],
  },
  {
    slug: "project-construction",
    title: "Project Construction",
    icon: Hammer,
    summary:
      "We turn approved designs into quality structures, in line with project specifications, site conditions and industry standards.",
    metaDescription:
      "Project construction in Lagos: approved designs turned into quality structures, with site supervision, by a team of associates from the construction professions. Adedara Ola & Co.",
    overview: [
      "Construction is where plans meet reality. We turn approved concepts and designs into completed structures through careful site execution and supervision, delivered by a team of associates drawn from the construction professions.",
      "Our first major development, a 17-unit apartment building near Murtala Muhammed International Airport, was conceived, designed and planned by our team and is being built by our own associates, so the approach we offer clients is the one we use ourselves.",
    ],
    problems: [
      "You have approved drawings but no reliable team to build them.",
      "You want one accountable party coordinating the different trades on your site.",
      "Site conditions require adjustments without losing the project's objectives.",
      "You want to know what is happening on your site and whether it meets the specification.",
    ],
    approach: [
      { title: "Review the design", text: "We go through the approved drawings and specifications so that everyone builds from the same plan." },
      { title: "Evaluate the site", text: "We assess site conditions and agree any adjustments needed to protect the project's objectives." },
      { title: "Execute and supervise", text: "Our associates carry out the work, and we supervise it against the specification and quality requirements." },
      { title: "Deliver the project", text: "We check the completed work and hand it over to you." },
    ],
    benefits: [
      "Quality execution to specification",
      "Site-specific solutions",
      "Construction oversight",
      "Durable results",
    ],
    faqs: [
      {
        q: "What does project construction involve?",
        a: "It is the process of transforming approved concepts and designs into completed structures through proper site execution and supervision.",
      },
      {
        q: "Who does the building work?",
        a: "Our team of associates: qualified professionals and tradespeople from across the construction trades, working to one standard under our supervision.",
      },
      {
        q: "Can construction details change after designs are prepared?",
        a: "Yes. Certain adjustments may be required to suit site conditions while preserving the project's objectives and quality standards.",
      },
      {
        q: "Do you supervise construction activities?",
        a: "Yes. We oversee the construction process to ensure compliance with specifications, quality requirements and project expectations.",
      },
    ],
    relatedTags: ["Construction", "Real Estate Development"],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((service) => service.slug === slug);
}