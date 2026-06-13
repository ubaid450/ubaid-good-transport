import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Goods Transport Islamabad | Truck Booking & Cargo Service",
  description:
    "Book goods transport in Islamabad with Ubaid Goods Transport. Cargo truck booking, loading services, house shifting and long route delivery across Pakistan.",
};

export default function IslamabadGoodsTransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Goods Transport Islamabad"
        title="Reliable goods transport and truck booking in Islamabad."
        description="Get cargo transport, loading support, house shifting and long route truck booking from Islamabad to major cities across Pakistan."
      />

      <section className="section-pad bg-white">
        <div className="container-pad max-w-5xl space-y-6">
          <h2 className="text-3xl font-black text-ink">
            Cargo transport and truck booking in Islamabad
          </h2>

          <p className="text-slate-600">
            Ubaid Goods Transport provides goods transport services in Islamabad
            for commercial cargo, household shifting, loading services,
            warehouse movement and long route delivery.
          </p>

          <p className="text-slate-600">
            Customers can request trucks from Islamabad to Lahore, Karachi,
            Faisalabad, Multan, Peshawar, Rawalpindi and other cities across
            Pakistan.
          </p>

          <h3 className="text-2xl font-black text-ink">
            Islamabad transport services
          </h3>

          <ul className="list-disc space-y-2 pl-6 text-slate-600">
            <li>Cargo transport Islamabad</li>
            <li>Truck booking Islamabad</li>
            <li>Loading services Islamabad</li>
            <li>House shifting Islamabad</li>
            <li>Islamabad to Lahore goods transport</li>
            <li>Islamabad to Karachi cargo transport</li>
          </ul>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}