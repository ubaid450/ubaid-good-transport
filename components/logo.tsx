import Link from "next/link";
import { Truck } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Logo({ inverted = false, name = siteConfig.name, tagline = "Cargo | Loading | Logistics", logoUrl = "" }: { inverted?: boolean; name?: string; tagline?: string; logoUrl?: string }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${name} home`}>
      <span className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg shadow-lg shadow-brand-900/20 ${inverted ? "bg-white text-brand-700" : "bg-brand-600 text-white"}`}>
        {logoUrl ? (
          <img src={logoUrl} alt="" className="h-full w-full object-cover" />
        ) : (
          <>
            <span className="absolute inset-x-2 top-2 h-1 rounded-full bg-white/30" />
            <Truck aria-hidden="true" className="h-6 w-6" />
          </>
        )}
      </span>
      <span className="leading-tight">
        <span className={`block text-base font-black ${inverted ? "text-white" : "text-ink"}`}>{name}</span>
        <span className={`block text-xs font-semibold uppercase ${inverted ? "text-blue-100" : "text-brand-600"}`}>
          {tagline}
        </span>
      </span>
    </Link>
  );
}
