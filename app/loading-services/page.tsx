import type { Metadata } from "next";
import { Boxes, ClipboardCheck, PackageOpen, Users } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Loading Services Pakistan",
  description:
    "Book loading services in Pakistan with Ubaid Good Transport for homes, shops, factories, warehouses, cargo, and long route goods transport."
};

export default function LoadingServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Loading services Pakistan"
        title="Professional loading and unloading teams for cargo and shifting."
        description="Book labor support for loading goods, furniture, shop stock, warehouse items, and commercial cargo with transport coordination."
      />
      <section className="section-pad bg-brand-50">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-brand-600">Safe goods handling</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Loading services for household and commercial goods.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Ubaid Good Transport provides loading support for homes, offices, retailers, warehouses, factories, and long route cargo shipments.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Users, title: "Labor teams", text: "Trained helpers for loading and unloading tasks." },
                { icon: Boxes, title: "Goods handling", text: "Careful movement of cartons, furniture, stock, and cargo." },
                { icon: PackageOpen, title: "Shifting support", text: "Loading help for house shifting and office moves." },
                { icon: ClipboardCheck, title: "Transport coordination", text: "Truck booking and route planning with the loading job." }
              ].map((item) => (
                <article key={item.title} className="rounded-lg border border-brand-100 bg-white p-5 shadow-sm">
                  <item.icon aria-hidden="true" className="h-7 w-7 text-brand-700" />
                  <h3 className="mt-4 font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quote">Book Loading Service</ButtonLink>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-brand-200 bg-white px-5 text-sm font-bold text-brand-700 transition hover:bg-brand-50" href={`tel:${siteConfig.phone}`}>
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
