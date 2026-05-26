import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { navLinks, services, siteConfig } from "@/data/site";
import type { CmsContent } from "@/lib/cms";

export function Footer({ cms }: { cms?: CmsContent }) {
  const company = cms?.company;
  const footerServices = cms?.services || services;

  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo inverted name={company?.name} tagline={company?.tagline} logoUrl={company?.logoUrl} />
          <p className="mt-5 text-sm leading-7 text-blue-100">
            Premium transport company in Pakistan providing cargo transport, loading services, house shifting, truck dispatch, and logistics services.
          </p>
          <p className="mt-6 text-sm text-slate-400">
            Ubaid Goods Transport provides reliable cargo transport, loading, logistics, truck dispatch, and house shifting services across Pakistan.
          </p>
        </div>

         <div>
          <h3 className="text-sm font-bold uppercase text-blue-100">Pages</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.slice(0, 6).map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-blue-50 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-blue-100">Services</h3>
          <div className="mt-4 grid gap-3">
            {footerServices.slice(0, 5).map((service) => (
              <Link key={service.title} href="/services" className="text-sm text-blue-50 transition hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-blue-100">Contact</h3>
          <div className="mt-4 grid gap-4 text-sm text-blue-50">
            <a className="flex gap-3 hover:text-white" href={`tel:${company?.phone || siteConfig.phone}`}>
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4" />
              {company?.phone || siteConfig.phone}
            </a>
            <a className="flex gap-3 hover:text-white" href={`mailto:${company?.email || siteConfig.email}`}>
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4" />
              {company?.email || siteConfig.email}
            </a>
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              {company?.address || siteConfig.address}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {siteConfig.socialLinks.map((link) => (
              <a key={link.label} href={link.href} className="rounded-md border border-white/20 px-3 py-2 text-xs font-bold text-white transition hover:bg-white hover:text-brand-900">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-pad flex flex-col gap-3 text-sm text-blue-100 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company?.name || siteConfig.name}. © 2026 Ubaid Goods Transport. All rights reserved.</p>
          <p>SEO-ready Next.js logistics website.</p>
        </div>
      </div>
    </footer>
  );
}
