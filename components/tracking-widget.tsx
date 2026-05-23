"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export function TrackingWidget() {
  const [trackingId, setTrackingId] = useState("");
  const [searched, setSearched] = useState(false);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-premium sm:p-7">
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          setSearched(true);
        }}
      >
        <label className="sr-only" htmlFor="trackingId">Tracking number</label>
        <input
          id="trackingId"
          value={trackingId}
          onChange={(event) => setTrackingId(event.target.value)}
          placeholder="Enter tracking ID, load number, or BOL"
          className="focus-ring min-h-12 flex-1 rounded-md border border-slate-200 px-4 text-sm"
          required
        />
        <button type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 text-sm font-bold text-white transition hover:bg-brand-700">
          <Search aria-hidden="true" className="h-4 w-4" />
          Track Load
        </button>
      </form>
      {searched ? (
        <div className="mt-6 grid gap-4 rounded-lg bg-brand-50 p-5">
          <p className="text-sm font-bold uppercase text-brand-700">Sample tracking result</p>
          <h2 className="text-2xl font-bold text-ink">Load {trackingId} is in transit</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {["Dispatched", "Picked up", "In transit"].map((step) => (
              <div key={step} className="rounded-md bg-white p-4 text-sm font-semibold text-brand-700">
                {step}
              </div>
            ))}
          </div>
          <p className="text-sm leading-7 text-slate-600">
            This is a front-end tracking demo. Connect it to your TMS, spreadsheet, or carrier API for live shipment status.
          </p>
        </div>
      ) : null}
    </div>
  );
}
