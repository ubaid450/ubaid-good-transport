import Link from "next/link";
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
    href: "/quote",
  },
  {
    title: "Pakistan route coverage",
    text: "Lahore, Karachi, Multan, Rawalpindi, and long routes.",
    icon: MapPinned,
    href: "/services",
  },
  {
    title: "Careful loading labor",
    text: "Support for household, office, warehouse, and cargo loading.",
    icon: ShieldCheck,
    href: "/loading-services",
  },
  {
    title: "Trusted local team",
    text: "Professional handling from pickup to delivery.",
    icon: BadgeCheck,
    href: "/about",
  },
  {
    title: "Google Business Profile",
    text: "Verified business presence and customer reviews.",
    icon: Star,
    href: "https://maps.app.goo.gl/9EdQZmouWqSntx9Z6",
    external: true,
  },
  {
    title: "WhatsApp Support",
    text: "Quick responses for bookings and transport inquiries.",
    icon: MessageCircle,
    href: "https://wa.me/923234125101",
    external: true,
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
          {badges.map((badge) =>
            badge.external ? (
              <a
                key={badge.title}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg cursor-pointer"
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
              </a>
            ) : (
              <Link
                key={badge.title}
                href={badge.href}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg cursor-pointer block"
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
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}