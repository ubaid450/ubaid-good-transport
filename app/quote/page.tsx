import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Booking and Quote Form",
  description: "Request an online quote from Ubaid Goods Transport for cargo transport, house shifting, loading services, truck dispatch, and logistics services."
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Booking / quote form"
        title="Request a transport quote online."
        description="Send pickup, delivery, truck type, cargo, or house shifting details so Ubaid Goods Transport can respond quickly."
      />
      <section className="section-pad bg-brand-50">
        <div className="container-pad max-w-5xl">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
