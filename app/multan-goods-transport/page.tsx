import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Goods Transport Multan | Truck Booking & Cargo Service",
  description:
    "Book goods transport in Multan with Ubaid Goods Transport. Cargo truck booking, loading services, house shifting and long route delivery across Pakistan.",
};

export default function MultanGoodsTransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Goods Transport Multan"
        title="Reliable goods transport and truck booking in Multan."
        description="Book cargo transport, loading services, house shifting and long route delivery from Multan to major cities of Pakistan."
      />

      <section className="section-pad bg-white">
        <div className="container-pad max-w-5xl space-y-6">
          <h2 className="text-3xl font-black text-ink">
            Cargo transport and truck booking in Multan
          </h2>

          <p className="text-slate-600">
            Ubaid Goods Transport provides goods transport services in Multan
            for market goods, commercial cargo, household shifting, loading
            services, warehouse delivery and long route truck booking.
          </p>

          <p className="text-slate-600">
            Customers can request trucks from Multan to Lahore, Karachi,
            Islamabad, Rawalpindi, Faisalabad, Peshawar and other cities across
            Pakistan.
          </p>

          <h3 className="text-2xl font-black text-ink">
            Multan transport services
          </h3>

          <ul className="list-disc space-y-2 pl-6 text-slate-600">
            <li>Cargo transport Multan</li>
            <li>Truck booking Multan</li>
            <li>Loading services Multan</li>
            <li>House shifting Multan</li>
            <li>Multan to Lahore goods transport</li>
            <li>Multan to Karachi cargo transport</li>
          </ul>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}