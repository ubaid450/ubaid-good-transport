"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-premium"
      onSubmit={async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setSent(false);
        setError("");

        const formElement = event.currentTarget;
        const form = new FormData(formElement);

        const payload = {
          name: String(form.get("name") || ""),
          phone: String(form.get("phone") || ""),
          pickup: "Contact Form",
          delivery: "Contact Form",
          truckType: "Contact Request",
          serviceNeeded: "General Contact",
          pickupDate: new Date().toISOString().slice(0, 10),
          details: `Email: ${String(form.get("email") || "")}\nMessage: ${String(
            form.get("message") || ""
          )}`,
        };

        try {
          const response = await fetch("/api/quote", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          const result = (await response.json()) as {
            success?: boolean;
            error?: string;
          };

          if (!response.ok || !result.success) {
            throw new Error(result.error || "Message submit nahi hua.");
          }

          formElement.reset();
          setSent(true);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Message submit nahi hua.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Full name
          <input required name="name" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 text-sm font-normal" placeholder="Your name" />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email address
          <input required type="email" name="email" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 text-sm font-normal" placeholder="your@email.com" />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-ink">
        Phone
        <input name="phone" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 text-sm font-normal" placeholder="0323 4125101" />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-ink">
        Message
        <textarea required name="message" rows={5} className="focus-ring rounded-md border border-slate-200 px-4 py-3 text-sm font-normal" placeholder="Tell us about your shipment or dispatch needs." />
      </label>

      <button disabled={submitting} type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 text-sm font-bold text-white transition hover:bg-brand-700 disabled:opacity-70">
        <Send aria-hidden="true" className="h-4 w-4" />
        {submitting ? "Sending..." : "Send Message"}
      </button>

      {sent ? <p className="rounded-md bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">Thanks. Your message has been submitted.</p> : null}
      {error ? <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}
    </form>
  );
}