"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { navLinks, siteConfig } from "@/data/site";
import type { CmsContent } from "@/lib/cms";

export function Header({ cms }: { cms?: CmsContent }) {
  const [open, setOpen] = useState(false);
  const company = cms?.company;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="container-pad flex h-20 items-center justify-between">
        <Logo
          name={company?.name}
          tagline={company?.tagline}
          logoUrl={company?.logoUrl}
        />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company?.phone || siteConfig.phone}`}
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-semibold text-ink transition hover:border-brand-300 hover:text-brand-700"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            Call {company?.phone || siteConfig.phone}
          </a>

          <Link
            href="/quote"
            className="focus-ring inline-flex min-h-11 items-center rounded-md bg-brand-600 px-5 text-sm font-bold text-white transition hover:bg-brand-700"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-pad grid gap-1 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={`tel:${company?.phone || siteConfig.phone}`}
              className="rounded-md px-3 py-3 text-sm font-bold text-brand-700"
            >
              Call {company?.phone || siteConfig.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}