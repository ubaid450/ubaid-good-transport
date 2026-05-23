import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Cargo Transport Lahore Karachi",
  description:
    "Book cargo transport Lahore to Karachi with Ubaid Good Transport. Long route delivery, goods transport, truck dispatch, and loading support."
};

export default function CargoTransportLahoreKarachiPage() {
  return (
    <LandingPage
      eyebrow="Cargo transport Lahore Karachi"
      title="Cargo transport from Lahore to Karachi with fast quote support."
      description="Move business goods, cartons, furniture, machinery, and commercial stock with route coordination, loading support, and truck dispatch."
      service="cargo transport Lahore to Karachi"
      bullets={[
        "Lahore to Karachi cargo and long route delivery",
        "Truck dispatch and route coordination",
        "Loading and unloading support available",
        "Quote form built for Google Ads leads"
      ]}
    />
  );
}
