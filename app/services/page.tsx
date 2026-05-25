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
    </>
  );
}
