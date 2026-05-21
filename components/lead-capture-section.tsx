import { PhoneCall } from "lucide-react";
import { ConversionLink } from "@/components/conversion-link";
import { QuoteForm } from "@/components/quote-form";
import { siteConfig } from "@/data/site";

export function LeadCaptureSection({ title = "Get a fast transport quote today.", description = "Tell us pickup, delivery, goods type, and service needed. Our team can respond by call or WhatsApp." }: { title?: string; description?: string }) {
  return (
    <section className="section-pad bg-brand-50">
      <div className="container-pad grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase text-brand-600">Fast quote form</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
          <ConversionLink href={`tel:${siteConfig.phone}`} eventName="lead_section_call_click" external className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-md bg-brand-900 px-5 text-sm font-black text-white transition hover:bg-brand-700">
            <PhoneCall aria-hidden="true" className="h-4 w-4" />
            Call {siteConfig.phone}
          </ConversionLink>
        </div>
        <QuoteForm compact />
      </div>
    </section>
  );
}
