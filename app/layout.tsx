import type { Metadata } from "next";
import "./globals.css";

import { StickyLeadBar } from "@/components/sticky-lead-bar";
import { LeadTracking } from "@/components/lead-tracking";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ubaid Goods Transport | Goods Transport Company in Pakistan",
  description:
    "Ubaid Goods Transport provides cargo transport, loading services, logistics, truck booking and house shifting services across Pakistan.",
  verification: {
    google: "t-3jB4OA5_d4jtx61Znpl1GQPfgJUsauilzZVi1-qtk",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Ubaid Goods Transport",
  url: "https://ubaidgoodstransport.com",
  telephone: "+923234125101",
  priceRange: "$$",
  areaServed: "Pakistan",
  description:
    "Ubaid Goods Transport provides cargo transport, loading services, logistics, truck booking and house shifting services across Pakistan.",
  sameAs: [
    "https://ubaidgoodstransport.com",
    "https://web.facebook.com/profile.php?id=61586241350310",
    "https://maps.app.goo.gl/9EdQZmouWqSntx9Z6"
  ],
  serviceType: [
    "Goods Transport",
    "Cargo Transport",
    "House Shifting",
    "Loading Services",
    "Truck Booking",
    "Logistics Services"
  ],
  areaServed: [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Gujranwala"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ubaidgoodstransport.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://ubaidgoodstransport.com/services"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Blog",
      item: "https://ubaidgoodstransport.com/blog"
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Quote",
      item: "https://ubaidgoodstransport.com/quote"
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: "https://ubaidgoodstransport.com/contact"
    }
  ]
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
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
       
        <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
         }}
       />
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
            gtag('config', 'AW-18228898204');
          `}
        </Script>

        <LeadTracking />
      </body>
    </html>
  );
}