import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Transport Company in Pakistan",
  description:
    "Book Ubaid Goods Transport for cargo transport, goods transport, truck dispatch, loading, and long route delivery across Lahore, Karachi, Multan, Rawalpindi, and all Pakistan."
};

export default function TransportCompanyPakistanPage() {
  return (
    <LandingPage
      eyebrow="Transport company in Pakistan"
      title="Reliable transport company for cargo, goods, and long route delivery."
      description="Get fast truck booking, loading support, and route coordination for homes, businesses, shops, factories, and distributors across Pakistan."
      service="transport services"
      bullets={[
        "Call and WhatsApp booking for urgent transport leads",
        "Cargo transport for Lahore, Karachi, Multan, and Rawalpindi",
        "Truck options for goods, shifting, and commercial cargo",
        "Lead-focused quote form for fast pricing"
      ]}
    />
  );
}
