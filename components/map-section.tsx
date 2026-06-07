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
            Visit our Google Business Profile location or contact us for cargo,
            loading, logistics, and house shifting support across Pakistan.
          </p>
          <p className="mt-5 flex items-start gap-3 text-sm font-semibold text-brand-700">
            <MapPinned aria-hidden="true" className="mt-0.5 h-5 w-5" />
            {cms?.company?.address}
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-brand-100 bg-white shadow-premium">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5432869.108652696!2d70.60361105!3d29.2056539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac2e96982425a619%3A0x90deb0979bbf6e14!2sUbaid%20Best%20Logistics%20Service!5e1!3m2!1sen!2s!4v1780841630488!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubaid Best Logistics Service Google Map"
          />
        </div>
      </div>
    </section>
  );
}