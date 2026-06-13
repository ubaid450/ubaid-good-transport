import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Goods Transport Faisalabad | Cargo & Truck Booking Service",
  description:
    "Book goods transport in Faisalabad with Ubaid Goods Transport. Cargo truck booking, loading services, commercial goods transport and long route delivery.",
};

export default function FaisalabadGoodsTransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Goods Transport Faisalabad"
        title="Cargo transport and truck booking in Faisalabad."
        description="Reliable goods transport, loading services, commercial cargo movement and long route truck booking from Faisalabad."
      />

      <section className="section-pad bg-white">
        <div className="container-pad max-w-5xl space-y-6">
          <h2 className="text-3xl font-black text-ink">
            Goods transport service in Faisalabad
          </h2>

          <p className="text-slate-600">
            Ubaid Goods Transport provides goods transport services in Faisalabad
            for textile cargo, commercial goods, warehouse movement, market goods,
            loading services and long route truck booking.
          </p>

          <p className="text-slate-600">
            Customers can request trucks from Faisalabad to Lahore, Karachi,
            Islamabad, Rawalpindi, Multan, Peshawar and other cities across
            Pakistan.
          </p>

          <h3 className="text-2xl font-black text-ink">
            Faisalabad transport services
          </h3>

          <ul className="list-disc space-y-2 pl-6 text-slate-600">
            <li>Cargo transport Faisalabad</li>
            <li>Truck booking Faisalabad</li>
            <li>Loading services Faisalabad</li>
            <li>Commercial goods transport Faisalabad</li>
            <li>Faisalabad to Lahore goods transport</li>
            <li>Faisalabad to Karachi cargo transport</li>
          </ul>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}