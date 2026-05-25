import { ReactNode } from "react";
import { redirect } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const password = "ubaid123";

  return (
    <div>
      {children}
    </div>
  );
}