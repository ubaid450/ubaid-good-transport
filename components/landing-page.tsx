import { CheckCircle2, MapPinned, PhoneCall } from "lucide-react";
import { ConversionLink } from "@/components/conversion-link";
import { LeadCaptureSection } from "@/components/lead-capture-section";
import { Testimonials } from "@/components/testimonials";
import { TrustBadges } from "@/components/trust-badges";
import { siteConfig } from "@/data/site";
import { getCmsContent } from "@/lib/cms";

type LandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  service: string;
};

export async function LandingPage({ eyebrow, title, description, bullets, service }: LandingPageProps) {
  const cms = await getCmsContent();
  const message = encodeURIComponent(`Assalam o Alaikum ${cms.company.name}, I need ${service}.`);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-900 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,47,81,0.98),rgba(10,79,136,0.84))]" />
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-bold uppercase text-blue-50">
              <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
              {eyebrow}
            </p>
            <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ConversionLink href={`tel:${cms.company.phone}`} eventName="landing_call_click" external className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-black text-brand-900 transition hover:bg-brand-50">
                <PhoneCall aria-hidden="true" className="h-4 w-4" />
                Call {cms.company.phone}
              </ConversionLink>
              <ConversionLink href={`https://wa.me/${cms.company.whatsapp}?text=${message}`} eventName="landing_whatsapp_click" external className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-5 text-sm font-black text-white transition hover:bg-white/10">
                WhatsApp Quote
              </ConversionLink>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm font-bold uppercase text-blue-100">Why customers book</p>
            <div className="mt-5 grid gap-3">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 rounded-md bg-white p-4 text-sm font-bold text-ink">
                  <MapPinned aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-600" />
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <TrustBadges />
      <LeadCaptureSection title={`Book ${service} in Pakistan`} description="Submit the short form and our team can contact you for price, truck size, route, and loading details." />
      <Testimonials items={cms.testimonials} />
    </>
  );
}
