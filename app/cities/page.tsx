import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goods Transport Cities Pakistan",
  description:
    "Explore goods transport, cargo transport, truck booking and loading services in major cities across Pakistan.",
};

const cities = [
  {
    name: "Lahore",
    href: "/lahore-goods-transport",
    description:
      "Reliable goods transport and truck booking services in Lahore.",
  },
  {
    name: "Karachi",
    href: "/karachi-goods-transport",
    description:
      "Cargo transport and logistics services across Karachi.",
  },
  {
    name: "Islamabad",
    href: "/islamabad-goods-transport",
    description:
      "Professional goods transport services in Islamabad.",
  },
  {
    name: "Rawalpindi",
    href: "/rawalpindi-goods-transport",
    description:
      "Fast truck booking and loading services in Rawalpindi.",
  },
  {
    name: "Faisalabad",
    href: "/faisalabad-goods-transport",
    description:
      "Trusted transport solutions for businesses and families.",
  },
  {
    name: "Multan",
    href: "/multan-goods-transport",
    description:
      "Cargo and house shifting services in Multan.",
  },
  {
    name: "Peshawar",
    href: "/peshawar-goods-transport",
    description:
      "Reliable transport and logistics services in Peshawar.",
  },
  {
    name: "Gujranwala",
    href: "/gujranwala-goods-transport",
    description:
      "Goods transport and truck dispatch services in Gujranwala.",
  },
];

export default function CitiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-4 text-center text-4xl font-bold">
        Goods Transport Services Across Pakistan
      </h1>

      <p className="mx-auto mb-12 max-w-3xl text-center text-slate-600">
        Ubaid Goods Transport provides cargo transport, loading services,
        logistics, truck booking and house shifting services across Pakistan.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cities.map((city) => (
          <div
            key={city.name}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="mb-3 text-xl font-bold">
              {city.name} Goods Transport
            </h2>

            <p className="mb-6 text-slate-600">
              {city.description}
            </p>

            <Link
              href={city.href}
              className="inline-flex rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white"
            >
              View Service
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}