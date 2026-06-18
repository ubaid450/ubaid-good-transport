import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goods Transport Routes Pakistan",
  description:
    "Explore major goods transport routes across Pakistan including Lahore to Karachi, Karachi to Lahore, Islamabad, Multan, Peshawar and other cities.",
};

const routes = [
  {
    name: "Lahore to Karachi",
    href: "/lahore-to-karachi-goods-transport",
    description: "Cargo transport and truck booking from Lahore to Karachi.",
  },
  {
    name: "Karachi to Lahore",
    href: "/karachi-to-lahore-goods-transport",
    description: "Reliable goods transport from Karachi to Lahore.",
  },
  {
    name: "Lahore to Islamabad",
    href: "/lahore-to-islamabad-goods-transport",
    description: "Truck booking and cargo transport from Lahore to Islamabad.",
  },
  {
    name: "Islamabad to Karachi",
    href: "/islamabad-to-karachi-goods-transport",
    description: "Long route cargo transport from Islamabad to Karachi.",
  },
  {
    name: "Multan to Lahore",
    href: "/multan-to-lahore-goods-transport",
    description: "Goods transport and truck booking from Multan to Lahore.",
  },
  {
    name: "Peshawar to Karachi",
    href: "/peshawar-to-karachi-goods-transport",
    description: "Cargo and commercial goods transport from Peshawar to Karachi.",
  },
  {
    name: "Rawalpindi to Lahore",
    href: "/rawalpindi-to-lahore-goods-transport",
    description: "Reliable truck booking from Rawalpindi to Lahore.",
  },
  {
    name: "Faisalabad to Karachi",
    href: "/faisalabad-to-karachi-goods-transport",
    description: "Commercial cargo transport from Faisalabad to Karachi.",
  },
];

export default function RoutesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-4 text-center text-4xl font-bold">
        Goods Transport Routes Across Pakistan
      </h1>

      <p className="mx-auto mb-12 max-w-3xl text-center text-slate-600">
        Explore major transport routes for cargo transport, truck booking,
        loading services and long route deliveries across Pakistan.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {routes.map((route) => (
          <div
            key={route.name}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="mb-3 text-xl font-bold">
              {route.name}
            </h2>

            <p className="mb-6 text-slate-600">
              {route.description}
            </p>

            <Link
              href={route.href}
              className="inline-flex rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white"
            >
              View Route
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}