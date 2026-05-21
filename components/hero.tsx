import { CheckCircle2, MoveRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ConversionLink } from "@/components/conversion-link";
import { stats } from "@/data/site";
import type { CmsContent } from "@/lib/cms";

export function Hero({ cms }: { cms?: CmsContent }) {
  const homepage = cms?.homepage;
  const company = cms?.company;
  const whatsappMessage = encodeURIComponent(`Assalam o Alaikum ${company?.name || "Ubaid Good Transport"}, I need a quick transport quote.`);

  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-brand-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-45"
        style={{
          backgroundImage:
            `url('${homepage?.heroImage || "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=80"}')`
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,47,81,0.96),rgba(8,47,81,0.72),rgba(8,47,81,0.2))]" />
      <div className="container-pad flex min-h-[calc(100svh-5rem)] items-center pb-20 pt-16">
        <div className="max-w-3xl animate-rise">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-bold uppercase text-blue-50 backdrop-blur">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
            {homepage?.heroEyebrow || "Transport company in Pakistan"}
          </p>
          <h1 className="text-4xl font-black sm:text-5xl lg:text-7xl">
            {homepage?.heroTitle || "Premium cargo transport, loading, house shifting, and logistics services across Pakistan."}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
            {homepage?.heroDescription || "Ubaid Good Transport connects Lahore, Karachi, Multan, Rawalpindi, and all Pakistan routes with reliable trucks, careful loading teams, and fast WhatsApp booking."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/quote" variant="light">Request a Quote</ButtonLink>
            <ConversionLink
              href={`https://wa.me/${company?.whatsapp || "923234125101"}?text=${whatsappMessage}`}
              eventName="hero_whatsapp_click"
              external
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 bg-white text-sm font-semibold text-brand-900 px-5 py-3 transition hover:bg-brand-50"
            >
              WhatsApp Now
            </ConversionLink>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {["Lahore to Karachi cargo", "House shifting support", "Call & WhatsApp booking"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-blue-50">
                <MoveRight aria-hidden="true" className="h-4 w-4 text-blue-200" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-white/95 text-ink backdrop-blur">
        <div className="container-pad grid grid-cols-2 gap-px sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="py-5">
              <p className="text-2xl font-black text-brand-700">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
