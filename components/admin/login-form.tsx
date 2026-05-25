"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { LockKeyhole } from "lucide-react";

export function LoginForm() {
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirect: false,
      callbackUrl: "/admin/dashboard"
    });

    if (result?.error) {
      setError("Invalid admin email or password.");
      return;
    }

    window.location.href = "/admin/dashboard";
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-premium">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-600 text-white">
        <LockKeyhole aria-hidden="true" className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-2xl font-black text-ink">Admin Login</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">Manage Ubaid Good Transport website content securely.</p>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Email
        <input name="email" type="email" defaultValue="admin@ubaidgoodstransport.com" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 font-normal" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Password
        <input name="password" type="password" defaultValue="admin12345" className="focus-ring min-h-12 rounded-md border border-slate-200 px-4 font-normal" required />
      </label>
      <button type="submit" className="focus-ring min-h-12 rounded-md bg-brand-600 px-5 text-sm font-bold text-white transition hover:bg-brand-700">
        Sign In
      </button>
      {error ? <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}
      <div className="rounded-md bg-brand-50 p-4 text-sm leading-6 text-brand-900">
        <strong>Default credentials:</strong><br />
        Email: admin@ubaidgoodstransport.com<br />
        Password: admin12345
      </div>
    </form>
  );
}
