"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { trackLead } from "@/lib/lead-events";

export function StickyLeadBar({ phone = siteConfig.phone, whatsapp = siteConfig.whatsapp, companyName = siteConfig.name }: { phone?: string; whatsapp?: string; companyName?: string }) {
  const message = encodeURIComponent(`Assalam o Alaikum ${companyName}, I need a transport quote.`);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a onClick={() => trackLead("sticky_call_click")} href={`tel:${phone}`} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-4 text-sm font-black text-white">
          <Phone aria-hidden="true" className="h-4 w-4" />
          Call Now
        </a>
        <a onClick={() => trackLead("sticky_whatsapp_click")} href={`https://wa.me/${whatsapp}?text=${message}`} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 text-sm font-black text-white">
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
