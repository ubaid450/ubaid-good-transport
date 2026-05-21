import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Loading Services Pakistan",
  description:
    "Professional loading services in Pakistan for homes, offices, warehouses, shops, factories, cargo, and house shifting transport."
};

export default function LoadingServicesPakistanPage() {
  return (
    <LandingPage
      eyebrow="Loading services Pakistan"
      title="Professional loading services for cargo, shifting, and business goods."
      description="Book loading and unloading labor with transport coordination for household items, commercial stock, warehouse goods, and long route cargo."
      service="loading services"
      bullets={[
        "Loading teams for homes, shops, and warehouses",
        "Support for fragile and heavy household goods",
        "Truck booking with loading labor",
        "Quick call and WhatsApp lead capture"
      ]}
    />
  );
}
