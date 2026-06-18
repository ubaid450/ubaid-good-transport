import type { Metadata } from "next";
import { Home, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { siteConfig } from "@/data/site";
import Script from "next/script";

export const metadata: Metadata = {
  title: "House Shifting Services in Pakistan",
  description:
    "Professional house shifting services by Ubaid Goods Transport with loading labor, furniture handling, cargo trucks, and door-to-door support in Lahore, Karachi, Multan, Rawalpindi, and all Pakistan."
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a house shifting service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "House shifting service helps families and businesses move furniture, appliances, boxes, and household items safely from one location to another."
      }
    },
    {
      "@type": "Question",
      name: "How do I book a house shifting service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can call, WhatsApp, or submit an online quote form with pickup location, destination, and shifting requirements."
      }
    },
    {
      "@type": "Question",
      name: "Which cities are covered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide house shifting services in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Gujranwala, and across Pakistan."
      }
    },
    {
      "@type": "Question",
      name: "How quickly can I get a shifting quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most house shifting quotations are provided within a few minutes after receiving your moving details."
      }
    }
  ]
};
export default function HouseShiftingPage() {
  return (
    <>
    <Script
  id="house-shifting-faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
      <PageHero
        eyebrow="House shifting services"
        title="Careful house shifting with transport, loading, and delivery support."
        description="Move furniture, appliances, boxes, and household goods with Ubaid Goods Transport across Lahore, Karachi, Multan, Rawalpindi, and all over Pakistan."
      />
      <section className="section-pad bg-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-brand-600">Move with confidence</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Professional shifting for homes, apartments, and offices.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Our team supports packing coordination, careful loading, truck selection, route planning, unloading, and communication from booking to delivery.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Home, title: "Home moves", text: "Furniture, appliances, boxes, and household goods." },
                { icon: PackageCheck, title: "Packing support", text: "Organized loading for fragile and daily-use items." },
                { icon: Truck, title: "Right truck size", text: "Mazda, cargo, and container trucks as required." },
                { icon: ShieldCheck, title: "Careful handling", text: "A practical process for safe shifting and unloading." }
              ].map((item) => (
                <article key={item.title} className="rounded-lg border border-slate-200 bg-brand-50 p-5">
                  <item.icon aria-hidden="true" className="h-7 w-7 text-brand-700" />
                  <h3 className="mt-4 font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quote">Get Shifting Quote</ButtonLink>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-brand-200 bg-white px-5 text-sm font-bold text-brand-700 transition hover:bg-brand-50" href={`https://wa.me/${siteConfig.whatsapp}`}>
                WhatsApp {siteConfig.phone}
              </a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
      <section className="section-pad bg-slate-50">
  <div className="container-pad">
    <p className="text-center text-sm font-bold uppercase text-brand-600">
      Quick Answers
    </p>

    <h2 className="mt-3 text-center text-4xl font-bold text-ink">
      House Shifting Questions Answered
    </h2>

    <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
      Fast answers about house shifting, furniture moving, truck booking,
      and relocation services in Pakistan.
    </p>

    <div className="mx-auto mt-10 max-w-4xl space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          What is a house shifting service?
        </h3>
        <p className="mt-3 text-slate-600 leading-8">
          House shifting service helps families and businesses move furniture,
          appliances, boxes, and household items safely between locations.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          How do I book a house shifting service?
        </h3>
        <p className="mt-3 text-slate-600 leading-8">
          You can call, WhatsApp, or submit an online quote form with pickup
          location, destination, and shifting requirements.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          Which cities are covered?
        </h3>
        <p className="mt-3 text-slate-600 leading-8">
          We provide house shifting services in Lahore, Karachi, Islamabad,
          Rawalpindi, Faisalabad, Multan, Peshawar, Gujranwala, and across
          Pakistan.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-bold text-ink">
          How quickly can I get a shifting quote?
        </h3>
        <p className="mt-3 text-slate-600 leading-8">
          Most house shifting quotations are provided within a few minutes
          after receiving your moving details.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
