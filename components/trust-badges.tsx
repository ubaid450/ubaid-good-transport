import { BadgeCheck, Clock3, MapPinned, ShieldCheck } from "lucide-react";

const badges = [
  { title: "Fast quote response", text: "Call or WhatsApp for urgent cargo and shifting leads.", icon: Clock3 },
  { title: "Pakistan route coverage", text: "Lahore, Karachi, Multan, Rawalpindi, and long routes.", icon: MapPinned },
  { title: "Careful loading labor", text: "Support for household, office, warehouse, and cargo loading.", icon: ShieldCheck },
  { title: "Trusted local team", text: "Professional handling from pickup to delivery.", icon: BadgeCheck }
];

export function TrustBadges() {
  return (
    <section className="bg-white py-8">
      <div className="container-pad grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {badges.map((badge) => (
          <div key={badge.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <badge.icon aria-hidden="true" className="h-7 w-7 text-brand-600" />
            <h2 className="mt-3 text-base font-black text-ink">{badge.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{badge.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
