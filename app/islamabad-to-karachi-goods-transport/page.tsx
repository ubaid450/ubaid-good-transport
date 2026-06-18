import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Islamabad to Karachi Goods Transport | Cargo & Truck Booking",
  description:
    "Book Islamabad to Karachi goods transport, cargo trucks, loading services and long route delivery with Ubaid Goods Transport.",
};

export default function IslamabadToKarachiPage() {
  return (
    <>
      <PageHero
        eyebrow="Islamabad to Karachi Transport"
        title="Islamabad to Karachi goods transport and truck booking."
        description="Reliable cargo transport, loading services and long route truck booking from Islamabad to Karachi."
      />

      <section className="section-pad bg-white">
        <div className="container-pad max-w-5xl space-y-6">
          <h2 className="text-3xl font-black text-ink">
            Cargo transport from Islamabad to Karachi
          </h2>

          <p className="text-slate-600">
            Ubaid Goods Transport provides cargo transport from Islamabad to
            Karachi for commercial goods, household items, warehouse stock and
            long route deliveries.
          </p>

          <p className="text-slate-600">
            Customers can book cargo trucks, loading services and transport
            solutions for Islamabad to Karachi routes across Pakistan.
          </p>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}