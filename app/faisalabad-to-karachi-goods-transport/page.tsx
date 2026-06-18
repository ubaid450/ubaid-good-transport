import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Faisalabad to Karachi Goods Transport | Cargo & Truck Booking",
  description:
    "Book Faisalabad to Karachi goods transport, cargo trucks, loading services and long route delivery with Ubaid Goods Transport.",
};

export default function FaisalabadToKarachiPage() {
  return (
    <>
      <PageHero
        eyebrow="Faisalabad to Karachi Transport"
        title="Faisalabad to Karachi goods transport and truck booking."
        description="Reliable cargo transport, loading services and long route truck booking from Faisalabad to Karachi."
      />

      <section className="section-pad bg-white">
        <div className="container-pad max-w-5xl space-y-6">
          <h2 className="text-3xl font-black text-ink">
            Cargo transport from Faisalabad to Karachi
          </h2>

          <p className="text-slate-600">
            Ubaid Goods Transport provides cargo transport from Faisalabad to
            Karachi for commercial goods, textile products, warehouse stock and
            long route deliveries.
          </p>

          <p className="text-slate-600">
            Customers can book cargo trucks, loading services and transport
            solutions for Faisalabad to Karachi routes across Pakistan.
          </p>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}