"use client";

import { Calculator } from "lucide-react";
import { useState } from "react";
import { trackLead } from "@/lib/lead-events";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-premium sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        trackLead("quote_form_submit");
        setSubmitted(true);
      }}
    >
      <div className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        {[
          ["Name", "name", "Your name"],
          ["Phone / WhatsApp", "phone", "0323 4125101"],
          ["Pickup city", "pickup", "Lahore"],
          ["Delivery city", "delivery", "Karachi"]
        ].map(([label, name, placeholder]) => (
          <label key={name} className="grid gap-2 text-sm font-semibold text-ink">
            {label}
            <input
              required
              type={name === "email" ? "email" : "text"}
              name={name}
              placeholder={placeholder}
              className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 text-sm font-normal"
            />
          </label>
        ))}
      </div>
      <div className={`grid gap-4 ${compact ? "" : "md:grid-cols-3"}`}>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Truck type
          <select name="truckType" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 text-sm font-normal">
            <option>Cargo Truck</option>
            <option>Container Truck</option>
            <option>Mazda Truck</option>
            <option>Flatbed Truck</option>
            <option>House Shifting Truck</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Service needed
          <select name="service" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 text-sm font-normal">
            <option>Cargo Transport</option>
            <option>House Shifting</option>
            <option>Loading Services</option>
            <option>Truck Dispatch</option>
            <option>Long Route Delivery</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Pickup date
          <input type="date" name="date" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 text-sm font-normal" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Details
        <textarea name="details" rows={compact ? 3 : 5} placeholder="Tell us goods type, house shifting items, loading labor need, or urgent route details." className="focus-ring rounded-md border border-slate-200 px-4 py-3 text-sm font-normal" />
      </label>
      <button type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 text-sm font-bold text-white transition hover:bg-brand-700">
        <Calculator aria-hidden="true" className="h-4 w-4" />
        Get Fast Quote
      </button>
      {submitted ? <p className="rounded-md bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">Thank you. Your lead has been captured. The team can connect this form to WhatsApp, email, CRM, or Google Ads enhanced conversions next.</p> : null}
    </form>
  );
}
