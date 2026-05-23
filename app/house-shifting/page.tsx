import type { Metadata } from "next";
import { Home, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "House Shifting Services in Pakistan",
  description:
    "Professional house shifting services by Ubaid Good Transport with loading labor, furniture handling, cargo trucks, and door-to-door support in Lahore, Karachi, Multan, Rawalpindi, and all Pakistan."
};

export default function HouseShiftingPage() {
  return (
    <>
      <PageHero
        eyebrow="House shifting services"
        title="Careful house shifting with transport, loading, and delivery support."
        description="Move furniture, appliances, boxes, and household goods with Ubaid Good Transport across Lahore, Karachi, Multan, Rawalpindi, and all over Pakistan."
      />
      <section className="section-pad bg-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-brand-600">Move with confidence</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Professional shifting for homes, apartments, and offices.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Our team supports packing coordination, careful loading, truck selection, route planning, unloading, and communication from booking to delivery.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Home, title: "Home moves", text: "Furniture, appliances, boxes, and household goods." },
                { icon: PackageCheck, title: "Packing support", text: "Organized loading for fragile and daily-use items." },
                { icon: Truck, title: "Right truck size", text: "Mazda, cargo, and container trucks as required." },
                { icon: ShieldCheck, title: "Careful handling", text: "A practical process for safe shifting and unloading." }
              ].map((item) => (
                <article key={item.title} className="rounded-lg border border-slate-200 bg-brand-50 p-5">
                  <item.icon aria-hidden="true" className="h-7 w-7 text-brand-700" />
                  <h3 className="mt-4 font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quote">Get Shifting Quote</ButtonLink>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-brand-200 bg-white px-5 text-sm font-bold text-brand-700 transition hover:bg-brand-50" href={`https://wa.me/${siteConfig.whatsapp}`}>
                WhatsApp {siteConfig.phone}
              </a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
