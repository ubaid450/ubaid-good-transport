"use client";

import { Calculator } from "lucide-react";
import { useState } from "react";
import { trackLead } from "@/lib/lead-events";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-premium sm:p-7"
      onSubmit={async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setError("");
        setSubmitted(false);

        const formElement = event.currentTarget;
        const form = new FormData(formElement);
        const payload = {
          name: String(form.get("name") || ""),
          phone: String(form.get("phone") || ""),
          pickup: String(form.get("pickup") || ""),
          delivery: String(form.get("delivery") || ""),
          truckType: String(form.get("truckType") || ""),
          serviceNeeded: String(form.get("serviceNeeded") || ""),
          pickupDate: String(form.get("pickupDate") || ""),
          details: String(form.get("details") || "")
        };

        try {
          const response = await fetch("/api/quote", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });

          const result = await response.json() as { success?: boolean; error?: string };

          if (!response.ok || !result.success) {
            throw new Error(result.error || "Unable to submit quote request.");
          }

          trackLead("quote_form_submit");
          formElement.reset();
          setSubmitted(true);
        } catch (submissionError) {
          setError(submissionError instanceof Error ? submissionError.message : "Unable to submit quote request.");
        } finally {
          setSubmitting(false);
        }
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
          <select name="serviceNeeded" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 text-sm font-normal">
            <option>Cargo Transport</option>
            <option>House Shifting</option>
            <option>Loading Services</option>
            <option>Truck Dispatch</option>
            <option>Long Route Delivery</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Pickup date
          <input required type="date" name="pickupDate" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 text-sm font-normal" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Details
        <textarea required name="details" rows={compact ? 3 : 5} placeholder="Tell us goods type, house shifting items, loading labor need, or urgent route details." className="focus-ring rounded-md border border-slate-200 px-4 py-3 text-sm font-normal" />
      </label>
      <button disabled={submitting} type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 text-sm font-bold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70">
        <Calculator aria-hidden="true" className="h-4 w-4" />
        {submitting ? "Submitting..." : "Get Fast Quote"}
      </button>
      {submitted ? <p className="rounded-md bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">Thank you. Your quote request has been submitted successfully.</p> : null}
      {error ? <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}
    </form>
  );
}
