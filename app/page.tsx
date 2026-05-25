import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";
import { FleetCard } from "@/components/fleet-card";
import { Hero } from "@/components/hero";
import { LeadCaptureSection } from "@/components/lead-capture-section";
import { MapSection } from "@/components/map-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Testimonials } from "@/components/testimonials";
import { TrustBadges } from "@/components/trust-badges";
import { advantages, fleet, services } from "@/data/site";
import { getCmsContent } from "@/lib/cms";
import { iconMap, type IconName } from "@/lib/icon-map";

export const metadata: Metadata = {
  title: "Transport Company in Pakistan",
  description:
    "Ubaid Goods Transport offers cargo transport, loading services, house shifting, truck dispatch, and logistics services in Lahore, Karachi, Multan, Rawalpindi, and all Pakistan."
};

export default async function HomePage() {
  const cms = await getCmsContent();
  const cmsServices = cms.services.map((service) => ({
    ...service,
    icon: iconMap[(service.icon as IconName)] || iconMap.Truck
  }));

  return (
    <>
      <Hero cms={cms} />
      <TrustBadges />
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Transport services"
            title={cms.homepage.introTitle}
            description={cms.homepage.introDescription}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {(cmsServices.length ? cmsServices : services).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-50">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Service areas"
            title="Reliable transport coverage in major Pakistan cities."
            description="Book cargo transport, loading, house shifting, and truck dispatch from Lahore, Karachi, Multan, Rawalpindi, and long routes all over Pakistan."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {cms.cities.map((city) => (
              <div key={city} className="rounded-lg border border-brand-100 bg-white p-5 text-center shadow-sm">
                <p className="text-lg font-black text-brand-700">{city}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Cargo, loading, dispatch, and shifting support.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Why choose us"
            title="Premium communication, careful handling, and dependable Pakistan route coverage."
            description="A modern logistics company should be fast, transparent, and operationally sharp. Our workflows are built around safe loading, clear communication, and practical delivery performance."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <article key={item.title} className="rounded-lg border border-brand-100 bg-white p-5 shadow-sm">
                <item.icon aria-hidden="true" className="h-8 w-8 text-brand-600" />
                <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-50">
        <div className="container-pad">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Fleet showcase"
              title="Truck capacity for cargo, loading, and house shifting."
              description="Sample truck categories for Ubaid Goods Transport service routes across Pakistan."
            />
            <Link href="/fleet" className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900">
              View fleet
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {(cms.fleet.length ? cms.fleet : fleet).map((truck) => (
              <FleetCard key={truck.name} {...truck} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials items={cms.testimonials} />
      <LeadCaptureSection title="Need transport, loading, or house shifting today?" description="Use the fast quote form for Lahore, Karachi, Multan, Rawalpindi, or any Pakistan route. The form is designed for Google Ads lead capture." />
      <FAQ items={cms.faqs} />

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Contact"
            title="Request a fast quote from Ubaid Goods Transport."
            description="Use the quick quote form to request cargo transport, loading services, house shifting, or truck dispatch support."
          />
          <ContactForm />
        </div>
      </section>

      <MapSection />
    </>
  );
}
