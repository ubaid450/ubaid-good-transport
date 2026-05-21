import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { LoginForm } from "@/components/admin/login-form";

export default async function AdminLoginPage() {
  const session = await auth();

  if (session) {
    redirect("/admin/dashboard");
  }

  return (
    <main className="min-h-screen bg-brand-50">
      <div className="container-pad grid min-h-screen items-center py-12">
        <div className="mx-auto w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
