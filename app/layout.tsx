import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LeadTracking } from "@/components/lead-tracking";
import { StickyLeadBar } from "@/components/sticky-lead-bar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/data/site";
import { getCmsContent } from "@/lib/cms";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();

  return {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: cms.seo.title,
    template: `%s | ${cms.company.name}`
  },
  description: cms.seo.description,
  keywords: cms.seo.keywords.split(",").map((keyword) => keyword.trim()),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: cms.seo.title,
    description: cms.seo.description,
    url: siteConfig.url,
    siteName: cms.company.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${cms.company.name} transport truck fleet`
      }
    ],
    locale: "en_PK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${cms.company.name} Transport`,
    description: cms.seo.description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
  };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cms = await getCmsContent();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: cms.company.name,
    url: siteConfig.url,
    telephone: cms.company.phone,
    email: cms.company.email,
    image: `${siteConfig.url}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: cms.company.address,
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK"
    },
    sameAs: siteConfig.socialLinks.map((link) => link.href)
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <LeadTracking />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header cms={cms} />
        <main>{children}</main>
        <Footer cms={cms} />
        <WhatsAppButton whatsapp={cms.company.whatsapp} companyName={cms.company.name} />
        <StickyLeadBar phone={cms.company.phone} whatsapp={cms.company.whatsapp} companyName={cms.company.name} />
      </body>
    </html>
  );
}
