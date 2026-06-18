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
      <section className="section-pad bg-slate-50">
  <div className="container-pad">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm font-bold uppercase text-brand-600">
        Quick Answers
      </p>

      <h2 className="mt-3 text-4xl font-bold text-ink">
        Islamabad Goods Transport Questions Answered
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        Fast answers about cargo transport, truck booking, loading services, house shifting, and long-route delivery from Islamabad.
      </p>
    </div>

    <div className="mx-auto mt-12 max-w-5xl space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Do you provide goods transport in Islamabad?
        </h3>
        <p className="mt-5 text-lg leading-9 text-slate-600">
          Yes. Ubaid Goods Transport provides cargo transport, truck booking, loading services, and house shifting support in Islamabad.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Can I book a truck from Islamabad to other cities?
        </h3>
        <p className="mt-5 text-lg leading-9 text-slate-600">
          Yes. You can book transport from Islamabad to Lahore, Karachi, Multan, Faisalabad, Rawalpindi, Peshawar, and other cities across Pakistan.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}