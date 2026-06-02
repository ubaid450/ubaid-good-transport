import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}