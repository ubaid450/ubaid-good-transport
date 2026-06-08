import type { Metadata } from "next";
import "./globals.css";

import { StickyLeadBar } from "@/components/sticky-lead-bar";

export const metadata: Metadata = {
  title: "Ubaid Goods Transport",
  description: "Cargo, loading, logistics and house shifting services in Pakistan.",
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
      </body>
    </html>
  );
}