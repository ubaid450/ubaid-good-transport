"use client";

import Link from "next/link";
import { trackLead } from "@/lib/lead-events";

type ConversionLinkProps = {
  href: string;
  eventName: string;
  children: React.ReactNode;
  className: string;
  external?: boolean;
};

export function ConversionLink({ href, eventName, children, className, external = false }: ConversionLinkProps) {
  if (external) {
    return (
      <a href={href} onClick={() => trackLead(eventName)} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={() => trackLead(eventName)} className={className}>
      {children}
    </Link>
  );
}
