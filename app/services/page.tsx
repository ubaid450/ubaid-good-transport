import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { getCmsContent } from "@/lib/cms";
import { iconMap, type IconName } from "@/lib/icon-map";

export const metadata: Metadata = {
  title: "Logistics Services",
  description: "Explore loading services, house shifting, cargo transport, truck dispatch Pakistan, goods transport, and logistics services by Ubaid Goods Transport."
};

export default async function ServicesPage() {
  const cms = await getCmsContent();
  const services = cms.services.map((service) => ({
    ...service,
    icon: iconMap[(service.icon as IconName)] || iconMap.Truck
  }));

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Transport services for cargo, house shifting, loading, dispatch, and delivery."
        description="Support for homes, shops, factories, distributors, and operators that need reliable cargo transport and professional truck dispatch in Pakistan."
      />
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading
            eyebrow="What we do"
            title="Transport solutions built around speed, care, and control."
            description="Each service can stand alone or work as part of a larger logistics plan for local and long route deliveries."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-slate-50">
  <div className="container-pad">
    <SectionHeading
      eyebrow="Quick Answers"
      title="Goods Transport Service Questions Answered"
      description="Fast answers about cargo transport, truck booking, loading services, and logistics in Pakistan."
      align="center"
    />

    <div className="mx-auto mt-10 max-w-4xl space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          What is a goods transport service?
        </h3>
        <p className="mt-3 text-slate-600 leading-8">
          Goods transport service helps individuals and businesses move cargo,
          commercial goods, machinery, household items, and industrial products
          between cities across Pakistan using trucks and logistics support.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          How do I book a truck in Pakistan?
        </h3>
        <p className="mt-3 text-slate-600 leading-8">
          You can call, WhatsApp, or submit an online quote form with pickup
          city, delivery city, goods type, and truck requirements.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Which cities are covered?
        </h3>
        <p className="mt-3 text-slate-600 leading-8">
          We provide goods transport services in Lahore, Karachi, Islamabad,
          Rawalpindi, Faisalabad, Multan, Peshawar, Gujranwala, and long routes
          across Pakistan.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          How quickly can I get a quote?
        </h3>
        <p className="mt-3 text-slate-600 leading-8">
          Most transport quotations are provided within a few minutes after
          receiving your cargo details and route information.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
