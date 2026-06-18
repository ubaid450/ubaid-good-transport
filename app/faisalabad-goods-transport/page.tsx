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
      <section className="section-pad bg-slate-50">
  <div className="container-pad">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-4xl font-bold text-ink">
        Faisalabad Goods Transport Questions Answered
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        Fast answers about textile cargo, commercial goods transport, and truck booking from Faisalabad.
      </p>
    </div>

    <div className="mx-auto mt-12 max-w-5xl space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Do you provide goods transport in Faisalabad?
        </h3>
        <p className="mt-5 text-lg leading-9 text-slate-600">
          Yes. We provide textile cargo transport, truck booking, loading services, and commercial goods transport in Faisalabad.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Can I book transport from Faisalabad to other cities?
        </h3>
        <p className="mt-5 text-lg leading-9 text-slate-600">
          Yes. Transport can be booked from Faisalabad to Lahore, Karachi, Islamabad, Rawalpindi, Multan, and other cities across Pakistan.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
