import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, Target, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Ubaid Goods Transport, a modern transport company in Pakistan for cargo, loading, house shifting, truck dispatch, and logistics services."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A modern transport and logistics partner for Pakistan."
        description="Ubaid Goods Transport was built for customers who need careful loading, dependable cargo transport, professional house shifting, and clear communication."
      />
      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
              alt="Logistics dispatch team coordinating transport routes"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase text-brand-600">Our mission</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Make cargo transport feel predictable.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We combine experienced drivers, loading teams, route coordination, and customer-first communication to deliver a premium logistics services experience across Lahore, Karachi, Multan, Rawalpindi, and all over Pakistan.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                { icon: Target, title: "Operational precision", text: "Route timing, loading coordination, and delivery follow-up are handled with discipline." },
                { icon: Users, title: "Human support", text: "Customers get responsive call and WhatsApp support instead of vague freight handoffs." },
                { icon: BadgeCheck, title: "Professional standards", text: "Every booking receives the communication and care a modern transport customer expects." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-lg border border-slate-200 p-5">
                  <item.icon aria-hidden="true" className="h-7 w-7 shrink-0 text-brand-600" />
                  <div>
                    <h3 className="font-bold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-slate-50">
  <div className="container-pad max-w-4xl">
    <h2 className="text-3xl font-bold text-ink">
      Why Choose Ubaid Goods Transport?
    </h2>


<p className="mt-5 text-base leading-8 text-slate-600">
  Ubaid Goods Transport is a trusted transport company in Pakistan providing
  cargo transport, house shifting, loading services, truck dispatch, and
  logistics solutions across Pakistan. We help families, businesses, and
  commercial customers move goods safely and efficiently.
</p>

<ul className="mt-6 space-y-3 text-slate-600">
  <li>✅ Reliable cargo transport across Pakistan</li>
  <li>✅ Professional loading and unloading services</li>
  <li>✅ House shifting services for homes and offices</li>
  <li>✅ Quick booking through phone and WhatsApp</li>
  <li>✅ Experienced transport and logistics team</li>
  <li>✅ Service available in Lahore, Karachi, Islamabad, Rawalpindi, Multan, Faisalabad, and other cities</li>
</ul>

<h2 className="mt-10 text-3xl font-bold text-ink">
  Contact Us
</h2>

<p className="mt-5 text-base leading-8 text-slate-600">
  Need transport services in Pakistan? Call or WhatsApp
  <strong> 03234125101 </strong>
  for a quick quote and reliable cargo transport services across Pakistan.
</p>


  </div>
</section>

    </>
  );
}
