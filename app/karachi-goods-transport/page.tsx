import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Goods Transport Karachi | Cargo Truck Booking Service",
  description:
    "Ubaid Goods Transport provides goods transport in Karachi, cargo truck booking, loading services, container transport and long route delivery across Pakistan.",
};

const faqs = [
  {
    question: "Do you provide goods transport in Karachi?",
    answer:
      "Yes, Ubaid Goods Transport provides goods transport, cargo truck booking, loading services and long route transport support in Karachi.",
  },
  {
    question: "Can I book a truck from Karachi to Lahore?",
    answer:
      "Yes, you can request truck transport from Karachi to Lahore, Karachi to Islamabad, Karachi to Multan, Karachi to Faisalabad and other cities across Pakistan.",
  },
  {
    question: "Do you provide container transport in Karachi?",
    answer:
      "Yes, container transport and cargo truck booking can be arranged for commercial goods, market cargo, warehouse movement and long route delivery.",
  },
];

export default function KarachiGoodsTransportPage() {
  const whatsappMessage = encodeURIComponent(
    "Assalam o Alaikum Ubaid Goods Transport, I need goods transport service in Karachi."
  );

  return (
    <>
      <PageHero
        eyebrow="Goods Transport Karachi"
        title="Cargo transport and truck booking service in Karachi."
        description="Book cargo trucks, container transport, loading support and long route goods transport services from Karachi to major cities across Pakistan."
      />

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-black text-ink">
              Karachi goods transport service for cargo, containers and long routes.
            </h2>
            <p className="text-slate-600">
              Ubaid Goods Transport helps customers arrange reliable goods
              transport in Karachi for commercial cargo, container movement,
              loading services, warehouse shifting, market goods and long route
              deliveries.
            </p>
            <p className="text-slate-600">
              Whether you need a cargo truck from Karachi to Lahore, Karachi to
              Islamabad, Karachi to Multan or Karachi to Faisalabad, our team
              can guide you with truck type, route details and transport quote.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Cargo truck booking Karachi",
                "Container transport Karachi",
                "Loading services Karachi",
                "Karachi to Lahore transport",
                "Karachi to Islamabad cargo",
                "Long route goods transport",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-md border border-slate-200 p-3 text-sm font-semibold text-ink"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-600" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-md bg-brand-600 px-5 text-sm font-bold text-white"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
                className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-md bg-[#25D366] px-5 text-sm font-bold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Quote
              </a>
            </div>
          </div>

          <QuoteForm compact />
        </div>
      </section>

      <section className="section-pad bg-brand-50">
        <div className="container-pad">
          <h2 className="text-3xl font-black text-ink">
            Karachi Transport FAQs
          </h2>
          <div className="mt-6 grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg border border-slate-200 bg-white p-5"
              >
                <h3 className="text-lg font-black text-ink">{faq.question}</h3>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-slate-50">
  <div className="container-pad">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm font-bold uppercase text-brand-600">
        Quick Answers
      </p>

      <h2 className="mt-3 text-4xl font-bold text-ink">
        Karachi Goods Transport Questions Answered
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        Fast answers about cargo transport, truck booking, container transport,
        loading services, and long-route delivery from Karachi.
      </p>
    </div>

    <div className="mx-auto mt-12 max-w-5xl space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Do you provide goods transport in Karachi?
        </h3>

        <p className="mt-5 text-lg leading-9 text-slate-600">
          Yes. Ubaid Goods Transport provides cargo transport, truck booking,
          loading services, container transport, and long-route delivery
          services in Karachi and nearby areas.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Can I book a truck from Karachi to other cities?
        </h3>

        <p className="mt-5 text-lg leading-9 text-slate-600">
          Yes. You can book transport from Karachi to Lahore, Islamabad,
          Multan, Faisalabad, Rawalpindi, and other cities across Pakistan.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}