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
      <section className="section-pad bg-slate-50">
  <div className="container-pad">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-4xl font-bold text-ink">
        Peshawar Goods Transport Questions Answered
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        Fast answers about cargo transport, truck booking, loading services, and long-route delivery from Peshawar.
      </p>
    </div>

    <div className="mx-auto mt-12 max-w-5xl space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Do you provide goods transport in Peshawar?
        </h3>
        <p className="mt-5 text-lg leading-9 text-slate-600">
          Yes. We provide cargo transport, truck booking, loading services, and house shifting support in Peshawar.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Can I book transport from Peshawar to other cities?
        </h3>
        <p className="mt-5 text-lg leading-9 text-slate-600">
          Yes. Transport can be booked from Peshawar to Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, and other cities across Pakistan.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}