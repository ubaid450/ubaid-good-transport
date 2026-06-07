"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { FileText, Home, Image, LayoutDashboard, ListChecks, LogOut, Map, MessageSquare, Search, Settings, Truck } from "lucide-react";

const adminLinks = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/dashboard/homepage", label: "Homepage", icon: Home },
  { href: "/admin/dashboard/services", label: "Services", icon: ListChecks },
  { href: "/admin/dashboard/blog", label: "Blog Posts", icon: FileText },
  { href: "/admin/dashboard/images", label: "Images", icon: Image },
  { href: "/admin/dashboard/fleet", label: "Fleet", icon: Truck },
  { href: "/admin/dashboard/testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "/admin/dashboard/faqs", label: "FAQs", icon: ListChecks },
  { href: "/admin/dashboard/routes", label: "Cities & Routes", icon: Map },
  { href: "/admin/dashboard/seo", label: "SEO", icon: Search },
  { href: "/admin/dashboard/settings", label: "Settings", icon: Settings }
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-100">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 overflow-y-auto border-r border-slate-200 bg-brand-900 p-4 text-white lg:block">
        <div className="rounded-lg bg-white/10 p-4">
          <p className="text-lg font-black">Ubaid Transport</p>
          <p className="mt-1 text-xs font-semibold uppercase text-blue-100">Admin Control Panel</p>
        </div>
        <nav className="mt-6 grid gap-1">
          {adminLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={`flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold transition ${active ? "bg-white text-brand-900" : "text-blue-50 hover:bg-white/10"}`}>
                <link.icon aria-hidden="true" className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button onClick={() => signOut({ callbackUrl: "/admin" })} className="mt-6 flex w-full items-center gap-3 rounded-md border border-white/20 px-3 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-brand-900">
          <LogOut aria-hidden="true" className="h-4 w-4" />
          Sign out
        </button>
      </aside>
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="container-pad flex min-h-16 items-center justify-between gap-4 py-3">
            <div>
              <p className="text-sm font-bold uppercase text-brand-600">Ubaid Goods Transport</p>
              <h2 className="text-xl font-black text-ink">Admin Dashboard</h2>
            </div>
            <button onClick={() => signOut({ callbackUrl: "/admin" })} className="focus-ring rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-ink lg:hidden">
              Sign out
            </button>
          </div>
          <nav className="container-pad flex gap-2 overflow-x-auto pb-3 lg:hidden">
            {adminLinks.map((link) => (
              <Link key={link.href} href={link.href} className="shrink-0 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-ink">
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="container-pad py-8">{children}</main>
      </div>
    </div>
  );
}
