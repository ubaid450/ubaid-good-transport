import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "House Shifting Services Pakistan",
  description:
    "Book house shifting services in Pakistan with Ubaid Good Transport. Careful loading, furniture transport, Mazda trucks, and door-to-door shifting support."
};

export default function HouseShiftingServicesPakistanPage() {
  return (
    <LandingPage
      eyebrow="House shifting services"
      title="House shifting services with careful loading and reliable trucks."
      description="Move furniture, appliances, cartons, and home goods with a professional transport team serving Lahore, Karachi, Multan, Rawalpindi, and all Pakistan."
      service="house shifting services"
      bullets={[
        "Furniture and appliance loading support",
        "Mazda and cargo trucks for home shifting",
        "Door-to-door shifting coordination",
        "Fast quote by phone or WhatsApp"
      ]}
    />
  );
}
