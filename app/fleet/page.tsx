import type { Metadata } from "next";
import { FleetCard } from "@/components/fleet-card";
import { PageHero } from "@/components/page-hero";
import { fleet, truckTypes } from "@/data/site";
import { getCmsContent } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Fleet and Trucks",
  description: "View sample truck options for cargo transport, loading services, house shifting, and long route delivery in Pakistan."
};

export default async function FleetPage() {
  const cms = await getCmsContent();
  const fleetItems = cms.fleet.length ? cms.fleet : fleet;

  return (
    <>
      <PageHero
        eyebrow="Fleet / trucks"
        title="Flexible truck capacity for cargo, shifting, and commercial transport."
        description="Showcase trucks for Ubaid Good Transport, including container trucks, Mazda trucks, flatbeds, and cargo trucks."
      />
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid gap-5 lg:grid-cols-3">
            {fleetItems.map((truck) => (
              <FleetCard key={truck.name} {...truck} />
            ))}
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {truckTypes.map((type) => (
              <div key={type.label} className="rounded-lg border border-slate-200 bg-brand-50 p-5">
                <type.icon aria-hidden="true" className="h-8 w-8 text-brand-700" />
                <h2 className="mt-4 text-lg font-bold text-ink">{type.label}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">Available for quote, loading, shifting, and dispatch planning.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
