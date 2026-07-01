import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "2347038088610";

const WHATSAPP_MESSAGE =
  "Hello Adedara Ola & Co., I visited your website and would like to make an enquiry about your real estate services.";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Adedara Ola & Co. on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}