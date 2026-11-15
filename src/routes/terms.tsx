import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Adedara Ola & Co." },
      {
        name: "description",
        content: "The terms for using the Adedara Ola & Co. website, booking consultations and applying as an associate.",
      },
      { property: "og:title", content: "Terms of Use | Adedara Ola & Co." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const SECTIONS: LegalSection[] = [
  {
    heading: "About these terms",
    paragraphs: [
      "These Terms of Use apply to your use of the website of Adedara Ola & Co. Limited (RC 7192962), 42, Ola Street, Itire, Surulere, Lagos, Nigeria (“we”, “us”). By using the website you agree to them. If you do not agree, please do not use the site.",
      "Our Privacy Policy explains how we handle your personal data and forms part of these terms.",
    ],
  },
  {
    heading: "General information only",
    paragraphs: [
      "The content on this website is general information about our company and services. It is not legal, financial, valuation, engineering or other professional advice, and you should not rely on it as such. Advice on your own property, investment or project can only be given after we have understood your situation and agreed the scope of our work with you.",
      "We try to keep the site accurate and up to date, but we do not promise that everything on it is complete or current. Project details and statuses can change.",
    ],
  },
  {
    heading: "Project images and visualisations",
    paragraphs: [
      "Many images on this site are 3D visualisations or artist’s impressions, some enhanced with AI tools, and some project photographs show work in progress. Completed buildings may differ slightly in details from the images shown. Where an image is a visualisation, we label it.",
    ],
  },
  {
    heading: "Consultations and our services",
    paragraphs: [
      "Booking or attending a consultation does not, by itself, create an agreement for us to provide services. Our services are provided under a separate written agreement that sets out the scope of work, deliverables, timelines, fees and payment terms. Our initial consultation is currently free of charge, and we may change this in future.",
    ],
  },
  {
    heading: "The Real Estate Associate Platform",
    bullets: [
      "Applying does not guarantee admission, and we may decline any application.",
      "You must give accurate and complete information. We may verify it, including by contacting referees and checking qualifications or registrations.",
      "Admission to the platform does not create an employment relationship and does not guarantee any project, payment or minimum volume of work.",
      "Any project engagement is subject to a separate written agreement covering scope, deliverables, timelines, fees and payment terms.",
      "If your application is not taken forward, we delete your data as set out in our Privacy Policy.",
    ],
  },
  {
    heading: "Newsletters",
    paragraphs: [
      "If you subscribe to our updates, we will email you news and articles about our work. You can unsubscribe at any time using the link in our emails or by writing to info@adedaraolaandco.com.",
    ],
  },
  {
    heading: "Using the website",
    paragraphs: ["You agree to use the site lawfully and sensibly. You must not:"],
    bullets: [
      "give false information in any form on the site;",
      "try to gain unauthorised access to the site, our systems or other people’s data;",
      "send spam, malicious code or automated requests that disrupt the site; or",
      "copy or scrape the site’s content at scale without our written permission.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The website and its content, including text, logos, designs, 3D visualisations, drawings, photographs and videos, belong to us or are used with permission, and are protected by law. You may view the site and share links to it for personal, non-commercial purposes. You may not copy, republish or sell our content without our written permission.",
    ],
  },
  {
    heading: "Third-party links and embedded content",
    paragraphs: [
      "The site links to, and embeds content from, other companies, such as Google Maps, YouTube, Cal.com and WhatsApp. We do not control those services and are not responsible for their content or for how they use your data. Their own terms and privacy policies apply.",
    ],
  },
  {
    heading: "Availability of the site",
    paragraphs: [
      "We aim to keep the website available, but we do not promise that it will always be available or free of errors. We may change or withdraw parts of it at any time.",
    ],
  },
  {
    heading: "Limits of liability",
    paragraphs: [
      "To the fullest extent the law allows, we are not responsible for loss or damage that results from your use of, or reliance on, this website, including indirect or consequential loss. Nothing in these terms limits any liability that cannot be limited by law.",
    ],
  },
  {
    heading: "Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. The date at the top shows the latest version, and continuing to use the site means you accept the updated terms.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the Federal Republic of Nigeria, and any dispute is subject to the courts of Lagos State.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: ["For any question about these terms, email info@adedaraolaandco.com."],
  },
];

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="The rules for using our website and applying through it."
      updated="14 November 2026"
      sections={SECTIONS}
    />
  );
}