"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-premium"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Full name
          <input required name="name" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 text-sm font-normal" placeholder="Alex Morgan" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email address
          <input required type="email" name="email" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 text-sm font-normal" placeholder="alex@company.com" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Phone
        <input name="phone" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 text-sm font-normal" placeholder="+1 555 0123" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Message
        <textarea required name="message" rows={5} className="focus-ring rounded-md border border-slate-200 px-4 py-3 text-sm font-normal" placeholder="Tell us about your shipment or dispatch needs." />
      </label>
      <button type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 text-sm font-bold text-white transition hover:bg-brand-700">
        <Send aria-hidden="true" className="h-4 w-4" />
        Send Message
      </button>
      {sent ? <p className="rounded-md bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">Thanks. Your message is ready for backend integration.</p> : null}
    </form>
  );
}
