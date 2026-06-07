import { MapPinned } from "lucide-react";
import type { CmsContent } from "@/lib/cms";

export function MapSection({ cms }: { cms?: CmsContent }) {
  return (
    <section className="section-pad bg-brand-50">
      <div className="container-pad grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase text-brand-600">
            Pakistan coverage
          </p>

          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Transport support for Lahore, Karachi, Multan, Rawalpindi, and all Pakistan routes.
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Use this map block with your verified Google Business Profile embed.
            The placeholder keeps the layout fast while the site is ready for your real office location.
          </p>

          <p className="mt-5 flex items-start gap-3 text-sm font-semibold text-brand-700">
            <MapPinned aria-hidden="true" className="mt-0.5 h-5 w-5" />
            {cms?.company?.address}
          </p>
        </div>

        <div className="grid min-h-[360px] place-items-center rounded-lg border border-brand-100 bg-white p-8 shadow-premium">
          <div className="text-center">
            <MapPinned aria-hidden="true" className="mx-auto h-14 w-14 text-brand-600" />
            <p className="mt-4 text-xl font-bold text-ink">
              Google Maps Embed Placeholder
            </p>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">
              Replace this with your Google Maps iframe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}