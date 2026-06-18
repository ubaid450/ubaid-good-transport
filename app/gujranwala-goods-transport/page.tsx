import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Goods Transport Gujranwala | Cargo & Truck Booking Service",
  description:
    "Book goods transport in Gujranwala with Ubaid Goods Transport. Cargo truck booking, loading services and long route delivery across Pakistan.",
};

export default function GujranwalaGoodsTransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Goods Transport Gujranwala"
        title="Reliable goods transport and truck booking in Gujranwala."
        description="Cargo transport, loading services, commercial goods movement and long route delivery from Gujranwala."
      />

      <section className="section-pad bg-white">
        <div className="container-pad max-w-5xl space-y-6">
          <h2 className="text-3xl font-black text-ink">
            Cargo Transport and Truck Booking in Gujranwala
          </h2>

          <p className="text-slate-600">
            Ubaid Goods Transport provides professional cargo transport
            services in Gujranwala for commercial goods, warehouse movement,
            loading services and long route deliveries across Pakistan.
          </p>

          <p className="text-slate-600">
            Customers can book trucks from Gujranwala to Lahore, Karachi,
            Islamabad, Rawalpindi, Faisalabad, Multan and other major cities.
          </p>

          <h3 className="text-2xl font-black text-ink">
            Our Gujranwala Transport Services
          </h3>

          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Cargo Transport Gujranwala</li>
            <li>Truck Booking Gujranwala</li>
            <li>Loading Services Gujranwala</li>
            <li>Commercial Goods Transport</li>
            <li>Gujranwala to Lahore Goods Transport</li>
            <li>Gujranwala to Karachi Cargo Transport</li>
          </ul>

          <QuoteForm />
        </div>
      </section>
      <section className="section-pad bg-slate-50">
  <div className="container-pad">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-4xl font-bold text-ink">
        Gujranwala Goods Transport Questions Answered
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        Fast answers about cargo transport, truck booking, loading services, and commercial goods movement from Gujranwala.
      </p>
    </div>

    <div className="mx-auto mt-12 max-w-5xl space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Do you provide goods transport in Gujranwala?
        </h3>
        <p className="mt-5 text-lg leading-9 text-slate-600">
          Yes. We provide cargo transport, truck booking, loading services, and commercial goods transport in Gujranwala.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Can I book transport from Gujranwala to other cities?
        </h3>
        <p className="mt-5 text-lg leading-9 text-slate-600">
          Yes. Transport can be booked from Gujranwala to Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, and other cities across Pakistan.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}