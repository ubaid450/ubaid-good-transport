import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Goods Transport Peshawar | Truck Booking & Cargo Service",
  description:
    "Book goods transport in Peshawar with Ubaid Goods Transport. Cargo truck booking, loading services, house shifting and long route delivery across Pakistan.",
};

export default function PeshawarGoodsTransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Goods Transport Peshawar"
        title="Professional goods transport and truck booking in Peshawar."
        description="Reliable cargo transport, loading services, house shifting and long route truck booking from Peshawar to all major cities of Pakistan."
      />

      <section className="section-pad bg-white">
        <div className="container-pad max-w-5xl space-y-6">
          <h2 className="text-3xl font-black text-ink">
            Cargo transport and truck booking in Peshawar
          </h2>

          <p className="text-slate-600">
            Ubaid Goods Transport provides cargo transport services in Peshawar
            for commercial goods, market supplies, warehouse deliveries,
            loading services, house shifting and long route transportation.
          </p>

          <p className="text-slate-600">
            Customers can request trucks from Peshawar to Lahore, Karachi,
            Islamabad, Rawalpindi, Faisalabad, Multan and other cities across
            Pakistan.
          </p>

          <h3 className="text-2xl font-black text-ink">
            Peshawar transport services
          </h3>

          <ul className="list-disc space-y-2 pl-6 text-slate-600">
            <li>Cargo transport Peshawar</li>
            <li>Truck booking Peshawar</li>
            <li>Loading services Peshawar</li>
            <li>House shifting Peshawar</li>
            <li>Peshawar to Lahore goods transport</li>
            <li>Peshawar to Karachi cargo transport</li>
          </ul>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}