import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { TrackingWidget } from "@/components/tracking-widget";

export const metadata: Metadata = {
  title: "Shipment Tracking",
  description: "Track cargo transport status, load number, BOL, and delivery milestones through the shipment tracking page."
};

export default function TrackingPage() {
  return (
    <>
      <PageHero
        eyebrow="Tracking"
        title="Shipment visibility for every critical milestone."
        description="Give customers a professional tracking experience for load numbers, BOL references, and dispatch updates."
      />
      <section className="section-pad bg-brand-50">
        <div className="container-pad max-w-5xl">
          <TrackingWidget />
        </div>
      </section>
    </>
  );
}
