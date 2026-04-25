"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface ArticleRow {
  id: string;
  slug: string;
  title: string;
  category: string;
  is_featured: boolean;
  is_hidden: boolean;
  published_at: string;
}

export default function DashboardPage() {
  const [articles, setArticles] = useState<ArticleRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/articles")
      .then((r) => r.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setArticles(data.articles ?? []);
      })
      .catch(() => setError("Failed to load articles"))
      .finally(() => setLoading(false));
  }, []);

  async function toggleHide(id: string, currentState: boolean) {
    const res = await fetch(`/api/admin/articles/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_hidden: !currentState }),
    });
    if (res.ok) {
      setArticles((prev) =>
        prev.map((a) => (a.id === id ? { ...a, is_hidden: !currentState } : a)),
      );
    }
  }

  async function deleteArticle(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    const res = await fetch(`/api/admin/articles/${id}`, { method: "DELETE" });
    if (res.ok) {
      setArticles((prev) => prev.filter((a) => a.id !== id));
    }
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-2xl font-bold text-[#1f1e1b]"
          style={{ fontFamily: "var(--font-crimson-pro)" }}
        >
          Articles
        </h1>
        <Link
          href="/admin/dashboard/new"
          className="px-4 py-2 bg-[#c85a32] text-white text-sm font-semibold rounded-lg hover:bg-[#b04e2b] transition"
          style={{ fontFamily: "var(--font-source-sans)" }}
        >
          + New Article
        </Link>
      </div>

      {loading && (
        <p
          className="text-[#1f1e1b]/50"
          style={{ fontFamily: "var(--font-source-sans)" }}
        >
          Loading…
        </p>
      )}
      {error && (
        <p
          className="text-red-600 text-sm"
          style={{ fontFamily: "var(--font-source-sans)" }}
        >
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="bg-white rounded-xl border border-[#1f1e1b]/10 overflow-hidden">
          <table
            className="w-full text-sm"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            <thead>
              <tr className="bg-[#f9f8f6] border-b border-[#1f1e1b]/10">
                <th className="text-left px-5 py-3 font-semibold text-[#1f1e1b]/60">
                  Title
                </th>
                <th className="text-left px-4 py-3 font-semibold text-[#1f1e1b]/60">
                  Category
                </th>
                <th className="text-left px-4 py-3 font-semibold text-[#1f1e1b]/60">
                  Status
                </th>
                <th className="text-left px-4 py-3 font-semibold text-[#1f1e1b]/60">
                  Published
                </th>
                <th className="text-right px-5 py-3 font-semibold text-[#1f1e1b]/60">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1e1b]/6">
              {articles.map((article) => (
                <tr
                  key={article.id}
                  className="hover:bg-[#f9f8f6]/60 transition"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[#1f1e1b] line-clamp-1">
                        {article.title}
                      </span>
                      {article.is_featured && (
                        <span className="shrink-0 text-xs bg-[#c85a32]/10 text-[#c85a32] px-1.5 py-0.5 rounded font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <span className="text-[#1f1e1b]/40 text-xs">
                      {article.slug}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[#1f1e1b]/70">
                    {article.category}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full font-medium ${
                        article.is_hidden
                          ? "bg-amber-50 text-amber-700"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {article.is_hidden ? "Hidden" : "Published"}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[#1f1e1b]/50 whitespace-nowrap">
                    {new Date(article.published_at).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      },
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/dashboard/${article.id}`}
                        className="text-xs px-3 py-1.5 border border-[#1f1e1b]/20 rounded-md text-[#1f1e1b]/70 hover:border-[#1f1e1b]/40 hover:text-[#1f1e1b] transition"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() =>
                          toggleHide(article.id, article.is_hidden)
                        }
                        className="text-xs px-3 py-1.5 border border-[#1f1e1b]/20 rounded-md text-[#1f1e1b]/70 hover:border-[#1f1e1b]/40 hover:text-[#1f1e1b] transition"
                      >
                        {article.is_hidden ? "Show" : "Hide"}
                      </button>
                      <button
                        onClick={() => deleteArticle(article.id, article.title)}
                        className="text-xs px-3 py-1.5 border border-red-200 rounded-md text-red-500 hover:border-red-400 hover:text-red-700 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {articles.length === 0 && (
            <div
              className="px-5 py-12 text-center text-[#1f1e1b]/40"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              No articles yet.{" "}
              <Link
                href="/admin/dashboard/new"
                className="text-[#c85a32] underline"
              >
                Create the first one.
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
