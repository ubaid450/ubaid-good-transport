import type { Metadata } from "next";
import "./globals.css";

import { StickyLeadBar } from "@/components/sticky-lead-bar";
import { LeadTracking } from "@/components/lead-tracking";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ubaid Goods Transport",
  description:
    "Cargo, loading, logistics and house shifting services in Pakistan.",
  verification: {
    google: "t-3jB4OA5_d4jtx61Znpl1GQPfgJUsauilzZVi1-qtk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <StickyLeadBar />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KPZZ41T3W0"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KPZZ41T3W0');
          `}
        </Script>

        <LeadTracking />
      </body>
    </html>
  );
}