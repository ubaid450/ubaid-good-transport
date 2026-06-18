import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Karachi to Lahore Goods Transport | Cargo & Truck Booking",
  description:
    "Book Karachi to Lahore goods transport, cargo trucks, loading services and long route delivery with Ubaid Goods Transport.",
};

export default function KarachiToLahorePage() {
  return (
    <>
      <PageHero
        eyebrow="Karachi to Lahore Transport"
        title="Karachi to Lahore goods transport and truck booking."
        description="Reliable cargo transport, loading services and long route truck booking from Karachi to Lahore."
      />

      <section className="section-pad bg-white">
        <div className="container-pad max-w-5xl space-y-6">
          <h2 className="text-3xl font-black text-ink">
            Cargo transport from Karachi to Lahore
          </h2>

          <p className="text-slate-600">
            Ubaid Goods Transport provides cargo transport from Karachi to
            Lahore for commercial goods, household items, warehouse stock and
            long route deliveries.
          </p>

          <p className="text-slate-600">
            Customers can book cargo trucks, loading services and transport
            solutions for Karachi to Lahore routes across Pakistan.
          </p>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}