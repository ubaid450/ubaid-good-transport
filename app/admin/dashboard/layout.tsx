import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: 280,
          background: "#0b3a5b",
          color: "white",
          padding: 24,
        }}
      >
        <div
          style={{
            background: "#214f73",
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <h2>UGT Admin CMS</h2>
          <p>CONTENT CONTROL PANEL</p>
        </div>

        <nav style={{ display: "grid", gap: 18, fontWeight: "bold" }}>
          <Link href="/admin/dashboard" style={{ color: "white" }}>Dashboard</Link>
          <Link href="/admin/dashboard/homepage" style={{ color: "white" }}>Homepage</Link>
          <Link href="/admin/dashboard/services" style={{ color: "white" }}>Services</Link>
          <Link href="/admin/dashboard/blog" style={{ color: "white" }}>Blog Posts</Link>
          <Link href="/admin/dashboard/images" style={{ color: "white" }}>Images</Link>
          <Link href="/admin/dashboard/fleet" style={{ color: "white" }}>Fleet</Link>
          <Link href="/admin/dashboard/testimonials" style={{ color: "white" }}>Testimonials</Link>
          <Link href="/admin/dashboard/faqs" style={{ color: "white" }}>FAQs</Link>
          <Link href="/admin/dashboard/routes" style={{ color: "white" }}>Cities & Routes</Link>
          <Link href="/admin/dashboard/seo" style={{ color: "white" }}>SEO</Link>
          <Link href="/admin/dashboard/settings" style={{ color: "white" }}>Settings</Link>
        </nav>
      </aside>

      <main style={{ flex: 1, background: "#f4f7fb" }}>
        <div
          style={{
            background: "white",
            padding: "22px 35px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            gap: 28,
            fontWeight: "bold",
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/fleet">Fleet</Link>
          <Link href="/quote">Quote</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div style={{ padding: 40 }}>{children}</div>
      </main>
    </div>
  );
}