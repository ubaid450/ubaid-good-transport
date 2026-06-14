import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";
import { FleetCard } from "@/components/fleet-card";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LeadCaptureSection } from "@/components/lead-capture-section";
import { MapSection } from "@/components/map-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { TrustBadges } from "@/components/trust-badges";
import { advantages, fleet, services } from "@/data/site";
import { getCmsContent } from "@/lib/cms";
import { iconMap, type IconName } from "@/lib/icon-map";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "PAKISTAN'S TRUSTED GOODS TRANSPORT COMPANY",
  description:
    "Ubaid Goods Transport offers cargo transport, loading services, house shifting, truck dispatch, and logistics services in Lahore, Karachi, Multan, Rawalpindi, and all Pakistan.",
};

const cityAreas = [
  {
    city: "Lahore",
    href: "/lahore-goods-transport",
    image: "/images/cities/lahore.jpg",
    text: "Cargo transport, truck booking, loading services, and long route delivery from Lahore.",
  },
  {
    city: "Karachi",
    href: "/karachi-goods-transport",
    image: "/images/cities/karachi.jpg",
    text: "Cargo transport, container movement, loading services, and long route delivery from Karachi.",
  },
  {
    city: "Islamabad",
    href: "/islamabad-goods-transport",
    image: "/images/cities/islamabad.jpg",
    text: "Truck booking, cargo transport, house shifting, and delivery support from Islamabad.",
  },
  {
    city: "Rawalpindi",
    href: "/rawalpindi-goods-transport",
    image: "/images/cities/rawalpindi.jpg",
    text: "Goods transport, loading services, house shifting, and cargo delivery from Rawalpindi.",
  },
  {
    city: "Faisalabad",
    href: "/faisalabad-goods-transport",
    image: "/images/cities/faisalabad.jpg",
    text: "Commercial cargo, textile goods transport, truck booking, and loading support from Faisalabad.",
  },
  {
    city: "Multan",
    href: "/multan-goods-transport",
    image: "/images/cities/multan.jpg",
    text: "Cargo transport, truck booking, market goods delivery, and long route service from Multan.",
  },
  {
    city: "Peshawar",
    href: "/peshawar-goods-transport",
    image: "/images/cities/peshawar.jpg",
    text: "Truck booking, cargo transport, loading services, and nationwide delivery from Peshawar.",
  },
  {
    city: "Gujranwala",
    href: "/gujranwala-goods-transport",
    image: "/images/cities/gujranwala.jpg",
    text: "Cargo transport, commercial goods movement, loading services, and truck booking from Gujranwala.",
  },
  {
    city: "Sialkot",
    href: "/sialkot-goods-transport",
    image: "/images/cities/sialkot.jpg",
    text: "Export cargo, commercial goods transport, truck booking, and delivery support from Sialkot.",
  },
];

export default async function HomePage() {
  const cms = await getCmsContent();

  const cmsServices = cms.services.map((service) => ({
    ...service,
    icon: iconMap[(service.icon as IconName)] || iconMap.Truck,
  }));

  return (
    <>
      <Header cms={cms} />
      <Hero cms={cms} />

      <TrustBadges />

      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Transport services"
            title={cms.homepage.introTitle}
            description={cms.homepage.introDescription}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {(cmsServices.length ? cmsServices : services).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-50">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Service areas"
            title="Goods transport services across major Pakistan cities."
            description="Book cargo transport, loading, house shifting, and truck dispatch from Lahore, Karachi, Islamabad, Rawalpindi, Multan, and other major cities."
            align="center"
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cityAreas.map((area) => (
              <Link
                key={area.city}
                href={area.href}
                className="group overflow-hidden rounded-xl border border-brand-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden bg-slate-200">
                  <img
                    src={area.image}
                    alt={`${area.city} goods transport service`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-black text-ink">
                    {area.city} Goods Transport
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {area.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-700">
                    View service
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Why choose us"
            title="Premium communication, careful handling, and dependable Pakistan route coverage."
            description="A modern logistics company should be fast, transparent, and operationally sharp. Our workflows are built around safe loading, clear communication, and practical delivery performance."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-brand-100 bg-white p-5 shadow-sm"
              >
                <item.icon aria-hidden="true" className="h-8 w-8 text-brand-600" />
                <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-50">
        <div className="container-pad">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Fleet showcase"
              title="Truck capacity for cargo, loading, and house shifting."
              description="Sample truck categories for Ubaid Goods Transport service routes across Pakistan."
            />
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900"
            >
              View fleet
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {(cms.fleet.length ? cms.fleet : fleet).map((truck) => (
              <FleetCard key={truck.name} {...truck} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials items={cms.testimonials} />

      <LeadCaptureSection
        title="Need transport, loading, or house shifting today?"
        description="Use the fast quote form for Lahore, Karachi, Multan, Rawalpindi, or any Pakistan route. The form is designed for Google Ads lead capture."
      />

      <FAQ items={cms.faqs} />

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Contact"
            title="Request a fast quote from Ubaid Goods Transport."
            description="Use the quick quote form to request cargo transport, loading services, house shifting, or truck dispatch support."
          />
          <ContactForm />
        </div>
      </section>

      <MapSection cms={cms} />
      <Footer cms={cms} />
    </>
  );
}