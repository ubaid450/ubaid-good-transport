import {
  BadgeCheck,
  Clock3,
  MapPinned,
  ShieldCheck,
  Star,
  MessageCircle,
} from "lucide-react";

const badges = [
  {
    title: "Fast quote response",
    text: "Call or WhatsApp for urgent cargo and shifting leads.",
    icon: Clock3,
  },
  {
    title: "Pakistan route coverage",
    text: "Lahore, Karachi, Multan, Rawalpindi, and long routes.",
    icon: MapPinned,
  },
  {
    title: "Careful loading labor",
    text: "Support for household, office, warehouse, and cargo loading.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted local team",
    text: "Professional handling from pickup to delivery.",
    icon: BadgeCheck,
  },
  {
    title: "Google Business Profile",
    text: "Verified business presence and customer reviews.",
    icon: Star,
  },
  {
    title: "WhatsApp Support",
    text: "Quick responses for bookings and transport inquiries.",
    icon: MessageCircle,
  },
];

export function TrustBadges() {
  return (
    <section className="bg-white py-12">
      <div className="container-pad">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase text-brand-600">
            Trusted Across Pakistan
          </p>

          <h2 className="mt-3 text-4xl font-black text-ink">
            Trusted By Customers Across Pakistan
          </h2>

          <p className="mt-4 text-slate-600">
            Ubaid Goods Transport provides cargo transport, house shifting,
            loading services, and truck booking support across Pakistan with
            fast quotes and reliable communication.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <badge.icon
                aria-hidden="true"
                className="h-7 w-7 text-brand-600"
              />

              <h3 className="mt-3 text-base font-black text-ink">
                {badge.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {badge.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}