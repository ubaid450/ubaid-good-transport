"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { trackLead } from "@/lib/lead-events";

export function WhatsAppButton({ whatsapp = siteConfig.whatsapp, companyName = siteConfig.name }: { whatsapp?: string; companyName?: string }) {
  const message = encodeURIComponent(`Assalam o Alaikum ${companyName}, I want to request a transport quote.`);

  return (
    <a
      href={`https://wa.me/${whatsapp}?text=${message}`}
      onClick={() => trackLead("floating_whatsapp_click")}
      aria-label="Chat on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-slate-900/25 transition hover:scale-105"
    >
      <MessageCircle aria-hidden="true" className="h-7 w-7" />
    </a>
  );
}
