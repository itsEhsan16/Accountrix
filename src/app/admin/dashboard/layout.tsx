"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Articles", href: "/admin/dashboard" },
  { label: "New Article", href: "/admin/dashboard/new" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  return (
    <div className="min-h-screen bg-[#f9f8f6] flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[#1f1e1b] flex flex-col shrink-0">
        <div className="px-6 py-5 border-b border-white/10">
          <span
            className="text-white font-bold text-lg"
            style={{ fontFamily: "var(--font-crimson-pro)" }}
          >
            Accountrix
          </span>
          <p
            className="text-white/40 text-xs mt-0.5"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Admin Panel
          </p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/admin/dashboard"
                ? pathname === "/admin/dashboard"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-[#c85a32] text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/10 transition"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
