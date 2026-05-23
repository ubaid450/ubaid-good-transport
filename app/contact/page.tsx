import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MapSection } from "@/components/map-section";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Ubaid Good Transport for cargo transport, loading services, house shifting, truck dispatch Pakistan, and logistics services."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Call or WhatsApp Ubaid Good Transport."
        description="Reach out for cargo transport pricing, loading services, house shifting, long route delivery, or dispatch support."
      />
      <section className="section-pad bg-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid content-start gap-4">
            {[
              { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: MapPin, label: "Address", value: siteConfig.address, href: "#" }
            ].map((item) => (
              <a key={item.label} href={item.href} className="rounded-lg border border-slate-200 p-5 transition hover:border-brand-200 hover:bg-brand-50">
                <item.icon aria-hidden="true" className="h-7 w-7 text-brand-600" />
                <p className="mt-4 text-sm font-bold uppercase text-slate-500">{item.label}</p>
                <p className="mt-2 font-semibold text-ink">{item.value}</p>
              </a>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>
      <MapSection />
    </>
  );
}
