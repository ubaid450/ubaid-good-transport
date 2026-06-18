import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Multan to Lahore Goods Transport | Cargo & Truck Booking",
  description:
    "Book Multan to Lahore goods transport, cargo trucks, loading services and long route delivery with Ubaid Goods Transport.",
};

export default function MultanToLahorePage() {
  return (
    <>
      <PageHero
        eyebrow="Multan to Lahore Transport"
        title="Multan to Lahore goods transport and truck booking."
        description="Reliable cargo transport, loading services and long route truck booking from Multan to Lahore."
      />

      <section className="section-pad bg-white">
        <div className="container-pad max-w-5xl space-y-6">
          <h2 className="text-3xl font-black text-ink">
            Cargo transport from Multan to Lahore
          </h2>

          <p className="text-slate-600">
            Ubaid Goods Transport provides cargo transport from Multan to
            Lahore for commercial goods, household items, warehouse stock and
            long route deliveries.
          </p>

          <p className="text-slate-600">
            Customers can book cargo trucks, loading services and transport
            solutions for Multan to Lahore routes across Pakistan.
          </p>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}