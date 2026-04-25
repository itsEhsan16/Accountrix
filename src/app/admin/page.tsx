"use client";

import { useState, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const next = searchParams.get("next") || "/admin/dashboard";
        router.push(next);
      } else {
        const data = await res.json();
        setError(data.error || "Invalid password");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-[#1f1e1b] mb-1.5"
          style={{ fontFamily: "var(--font-source-sans)" }}
        >
          Admin Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className="w-full px-4 py-3 border border-[#1f1e1b]/20 rounded-lg bg-white text-[#1f1e1b] placeholder-[#1f1e1b]/40 focus:outline-none focus:ring-2 focus:ring-[#c85a32]/50 focus:border-[#c85a32] transition"
          placeholder="Enter your password"
          style={{ fontFamily: "var(--font-source-sans)" }}
        />
      </div>

      {error && (
        <p
          className="text-sm text-red-600"
          style={{ fontFamily: "var(--font-source-sans)" }}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 bg-[#c85a32] text-white font-semibold rounded-lg hover:bg-[#b04e2b] disabled:opacity-60 disabled:cursor-not-allowed transition"
        style={{ fontFamily: "var(--font-source-sans)" }}
      >
        {loading ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[#f9f8f6] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1
            className="text-3xl font-bold text-[#1f1e1b] mb-1"
            style={{ fontFamily: "var(--font-crimson-pro)" }}
          >
            Accountrix
          </h1>
          <p
            className="text-sm text-[#1f1e1b]/60"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Admin Panel
          </p>
        </div>

        <div className="bg-white border border-[#1f1e1b]/10 rounded-xl p-8 shadow-sm">
          <h2
            className="text-lg font-semibold text-[#1f1e1b] mb-6"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Sign in to continue
          </h2>
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
