const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

const QUOTE_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_QUOTE_CONVERSION_LABEL ||
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

const WHATSAPP_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL;

const CALL_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION_LABEL;

function getGoogleAdsLabel(eventName: string) {
  if (eventName.includes("whatsapp")) {
    return WHATSAPP_CONVERSION_LABEL;
  }

  if (eventName.includes("call") || eventName.includes("phone")) {
    return CALL_CONVERSION_LABEL;
  }

  if (eventName.includes("quote")) {
    return QUOTE_CONVERSION_LABEL;
  }

  return QUOTE_CONVERSION_LABEL;
}

export function trackLead(eventName: string) {
  if (typeof window === "undefined") return;

  const conversionLabel = getGoogleAdsLabel(eventName);

  if (window.gtag && GOOGLE_ADS_ID && conversionLabel) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
      value: 1.0,
      currency: "PKR",
      event_category: "lead",
      event_label: eventName,
    });
  }

  if (window.fbq) {
    window.fbq("track", "Lead", {
      content_name: eventName,
    });
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}