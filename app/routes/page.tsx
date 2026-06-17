import Link from "next/link";

const routes = [
  {
    title: "Lahore to Karachi Goods Transport",
    description: "Fast and reliable cargo transport from Lahore to Karachi."
  },
  {
    title: "Karachi to Islamabad Goods Transport",
    description: "Professional truck booking and logistics services."
  },
  {
    title: "Lahore to Multan Goods Transport",
    description: "Safe transport solutions for commercial and household goods."
  },
  {
    title: "Rawalpindi to Karachi Goods Transport",
    description: "Long-route truck transport services across Pakistan."
  },
  {
    title: "Faisalabad to Lahore Goods Transport",
    description: "Reliable cargo movement between major industrial cities."
  },
  {
    title: "Multan to Karachi Goods Transport",
    description: "Efficient logistics and loading services."
  }
];

export default function RoutesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-4 text-center text-4xl font-bold">
        Transport Routes Across Pakistan
      </h1>

      <p className="mx-auto mb-12 max-w-3xl text-center text-slate-600">
        Explore major goods transport routes served by Ubaid Goods Transport
        across Pakistan.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => (
          <div
            key={route.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="mb-3 text-xl font-bold">
              {route.title}
            </h2>

            <p className="text-slate-600">
              {route.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}