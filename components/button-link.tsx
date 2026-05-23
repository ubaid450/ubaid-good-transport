import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const classes = {
    primary:
      "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-900/15",
    secondary:
      "border border-brand-200 bg-white text-brand-700 hover:border-brand-500 hover:bg-brand-50",
    light:
      "border border-white/30 bg-white text-brand-900 hover:bg-brand-50"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition ${classes[variant]}`}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
