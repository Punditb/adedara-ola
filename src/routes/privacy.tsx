import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Adedara Ola & Co." },
      {
        name: "description",
        content: "How Adedara Ola & Co. Limited collects, uses and protects your personal data.",
      },
      { property: "og:title", content: "Privacy Policy | Adedara Ola & Co." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      "This Privacy Policy explains how Adedara Ola & Co. Limited (“we”, “us”, “our”) collects, uses and protects your personal data when you use our website, contact us, book a consultation, subscribe to our updates or apply to join our Real Estate Associate Platform.",
      "We are a company registered in Nigeria (RC 7192962), with our office at 42, Ola Street, Itire, Surulere, Lagos, Nigeria. We decide how and why the personal data described here is used. You can contact us about privacy at info@adedaraolaandco.com.",
    ],
  },
  {
    heading: "What personal data we collect and why",
    bullets: [
      "Contact form: your name, email address, phone number, the service you are interested in and your message. We use it to reply to your enquiry and to discuss our services.",
      "Consultation bookings: the details you give on our booking calendar (for example your name, email and the topic you want to discuss), handled through Cal.com. We use them to schedule and hold the consultation.",
      "Newsletter: your email address, so that we can send you updates, articles and news about our work.",
      "Associate applications: the details you give in Stage 1 and Stage 2, which can include your name, contact details, address, gender (if you choose to give it), qualifications, registration details, experience, portfolio links, fees and working terms, referee details, any professional discipline you disclose, and any documents you upload. We use them to assess your application, verify your details, contact you and, if you are admitted, manage your place on the platform.",
      "Messages by email or WhatsApp: your contact details and what you tell us, so that we can reply.",
      "Technical data: like most websites, our hosting provider records standard technical information such as your IP address, browser type and the pages requested. We use it to keep the site secure and working.",
    ],
  },
  {
    heading: "Our lawful bases for using your data",
    paragraphs: ["We only use your personal data where the law allows. Depending on the situation, we rely on:"],
    bullets: [
      "Your consent, for example when you subscribe to our newsletter or tick the consent box on an application form. You can withdraw consent at any time.",
      "Taking steps at your request before a contract, for example answering an enquiry or booking a consultation.",
      "Our legitimate interests in running and protecting our business, where these are not outweighed by your rights.",
      "Legal obligations, where we must keep or share information by law.",
    ],
  },
  {
    heading: "Who we share your data with",
    paragraphs: [
      "We do not sell your personal data. We share it only with service providers who help us run the website and our business, and only as far as needed:",
    ],
    bullets: [
      "Vercel hosts our website.",
      "Supabase stores form submissions, application records and uploaded files in a private database and private storage.",
      "Resend delivers the emails that our website sends.",
      "ImprovMX and Google (Gmail) receive, forward and send our company email.",
      "Cal.com runs our consultation booking calendar.",
      "Google (Maps and YouTube) and WhatsApp provide the map, videos and chat button on our site.",
      "Within our company, people who have access to our enquiry and application records can see them. We may also share data with professional advisers, or with authorities where the law requires it.",
    ],
  },
  {
    heading: "Transfers outside Nigeria",
    paragraphs: [
      "Some of our providers store or process data outside Nigeria. Where that happens, we choose reputable providers and rely on appropriate safeguards, as the Nigeria Data Protection Act 2023 requires.",
    ],
  },
  {
    heading: "How long we keep your data",
    bullets: [
      "Contact enquiries: up to 24 months after our last contact with you.",
      "Newsletter subscribers: until you unsubscribe.",
      "Associate applications that we do not take forward: deleted within 3 days of our decision.",
      "Associate applications where you are invited to Stage 2 but do not complete it: deleted 30 days after the invitation.",
      "Associates who are admitted: for as long as you remain on the platform, and for a limited period afterwards for record-keeping.",
      "Uploaded documents are deleted together with the application they belong to.",
    ],
    paragraphs: [
      "We may keep information for longer where the law requires it, or where we need it to deal with a dispute.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: ["Under the Nigeria Data Protection Act 2023 you have rights over your personal data, including the right to:"],
    bullets: [
      "ask for a copy of the data we hold about you;",
      "ask us to correct data that is wrong or incomplete;",
      "ask us to delete your data, or to restrict how we use it;",
      "object to certain uses, including direct marketing;",
      "receive your data in a portable format, where this applies;",
      "withdraw your consent at any time, without affecting what we did before; and",
      "complain to the Nigeria Data Protection Commission.",
    ],
  },
  {
    heading: "How to use your rights",
    paragraphs: [
      "To use any of these rights, email info@adedaraolaandco.com. We may need to confirm your identity first, and we will reply within the time the law requires.",
    ],
  },
  {
    heading: "How we keep your data secure",
    paragraphs: [
      "We use reasonable technical and organisational measures to protect your data. Connections to our website are encrypted, application documents are kept in private storage, and access to our records is limited to people who need it. No online system can be completely secure, so we cannot promise absolute security, but we act quickly if something goes wrong.",
    ],
  },
  {
    heading: "Cookies and embedded content",
    paragraphs: [
      "Our website does not currently use analytics, advertising or tracking cookies.",
      "Some content on our site comes from other companies and may set its own cookies or collect data when it loads or when you use it: the map on our Contact page (Google Maps), the booking calendar (Cal.com) and project videos (YouTube, which loads only when you press play). Please see those companies’ own privacy policies.",
      "If we add analytics tools in future, we will update this page and ask for your consent where the law requires it.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "Our website and services are not directed at children under 18, and we do not knowingly collect their personal data. If you believe a child has given us personal data, please contact us and we will delete it.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. The date at the top shows when it was last changed. Please check back occasionally.",
    ],
  },
  {
    heading: "Contact and complaints",
    paragraphs: [
      "For any question about this policy, email info@adedaraolaandco.com or write to Adedara Ola & Co. Limited, 42, Ola Street, Itire, Surulere, Lagos, Nigeria. If you are not satisfied with our response, you have the right to complain to the Nigeria Data Protection Commission.",
    ],
  },
];

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How we collect, use and protect your personal data."
      updated="14 November 2026"
      sections={SECTIONS}
    />
  );
}