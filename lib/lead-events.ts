export function trackLead(eventName: string) {
  if (typeof window === "undefined") return;

  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

  if (window.gtag && conversionId && conversionLabel) {
    window.gtag("event", "conversion", {
      send_to: `${conversionId}/${conversionLabel}`,
      event_category: "lead",
      event_label: eventName
    });
  }

  if (window.fbq) {
    window.fbq("track", "Lead", {
      content_name: eventName
    });
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}
