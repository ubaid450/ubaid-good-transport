import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Goods Transport Rawalpindi | Truck Booking & Cargo Service",
  description:
    "Book goods transport in Rawalpindi with Ubaid Goods Transport. Cargo truck booking, loading services, house shifting and delivery across Pakistan.",
};

export default function RawalpindiGoodsTransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Goods Transport Rawalpindi"
        title="Trusted goods transport and truck booking in Rawalpindi."
        description="Cargo transport, loading support, house shifting and long route delivery from Rawalpindi to major cities across Pakistan."
      />

      <section className="section-pad bg-white">
        <div className="container-pad max-w-5xl space-y-6">
          <h2 className="text-3xl font-black text-ink">
            Cargo transport and truck booking in Rawalpindi
          </h2>

          <p className="text-slate-600">
            Ubaid Goods Transport provides goods transport services in Rawalpindi
            for commercial cargo, household shifting, loading services, market
            goods, warehouse movement and long route delivery.
          </p>

          <p className="text-slate-600">
            Customers can request trucks from Rawalpindi to Lahore, Karachi,
            Islamabad, Faisalabad, Multan, Peshawar and other cities across
            Pakistan.
          </p>

          <h3 className="text-2xl font-black text-ink">
            Rawalpindi transport services
          </h3>

          <ul className="list-disc space-y-2 pl-6 text-slate-600">
            <li>Cargo transport Rawalpindi</li>
            <li>Truck booking Rawalpindi</li>
            <li>Loading services Rawalpindi</li>
            <li>House shifting Rawalpindi</li>
            <li>Rawalpindi to Lahore goods transport</li>
            <li>Rawalpindi to Karachi cargo transport</li>
          </ul>

          <QuoteForm />
        </div>
      </section>
      <section className="section-pad bg-slate-50">
  <div className="container-pad">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-4xl font-bold text-ink">
        Rawalpindi Goods Transport Questions Answered
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        Fast answers about cargo transport, truck booking, loading services, and house shifting in Rawalpindi.
      </p>
    </div>

    <div className="mx-auto mt-12 max-w-5xl space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Do you provide goods transport in Rawalpindi?
        </h3>
        <p className="mt-5 text-lg leading-9 text-slate-600">
          Yes. We provide cargo transport, truck booking, loading services, and house shifting support in Rawalpindi.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Can I book transport from Rawalpindi to other cities?
        </h3>
        <p className="mt-5 text-lg leading-9 text-slate-600">
          Yes. Transport can be booked from Rawalpindi to Lahore, Karachi, Islamabad, Faisalabad, Multan, and other cities across Pakistan.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

