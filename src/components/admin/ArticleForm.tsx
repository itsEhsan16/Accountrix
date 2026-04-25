"use client";

import { useState, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { BodyBlock, ArticleRecord } from "@/lib/types";
import BlockEditor from "./BlockEditor";

const CATEGORIES = [
  "Taxation",
  "Business Advisory",
  "Company News",
  "Compliance",
];

interface Props {
  /** Pass an existing article to edit; omit for new article */
  initial?: Partial<ArticleRecord>;
}

interface FormState {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  accentColor: string;
  author: string;
  readTime: string;
  body: BodyBlock[];
  isFeatured: boolean;
  isHidden: boolean;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  coverImageUrl: string;
}

function toDatetimeLocal(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function ArticleForm({ initial }: Props) {
  const router = useRouter();
  const isEdit = Boolean(initial?.id);
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<FormState>({
    title: initial?.title ?? "",
    slug: initial?.slug ?? "",
    excerpt: initial?.excerpt ?? "",
    category: initial?.category ?? CATEGORIES[0],
    accentColor: initial?.accent_color ?? "#c85a32",
    author: initial?.author ?? "Accountrix Editorial Team",
    readTime: initial?.read_time ?? "",
    body: initial?.body ?? [],
    isFeatured: initial?.is_featured ?? false,
    isHidden: initial?.is_hidden ?? false,
    metaTitle: initial?.meta_title ?? "",
    metaDescription: initial?.meta_description ?? "",
    publishedAt: toDatetimeLocal(
      initial?.published_at ?? new Date().toISOString(),
    ),
    coverImageUrl: initial?.cover_image_url ?? "",
  });

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function autoSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }

  async function uploadCoverImage(file: File) {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      set("coverImageUrl", data.url);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt,
      category: form.category,
      accent_color: form.accentColor,
      author: form.author,
      read_time: form.readTime,
      body: form.body,
      is_featured: form.isFeatured,
      is_hidden: form.isHidden,
      meta_title: form.metaTitle || form.title,
      meta_description: form.metaDescription || form.excerpt,
      published_at: form.publishedAt
        ? new Date(form.publishedAt).toISOString()
        : new Date().toISOString(),
      cover_image_url: form.coverImageUrl || null,
    };

    try {
      const url = isEdit
        ? `/api/admin/articles/${initial!.id}`
        : "/api/admin/articles";
      const res = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save");
      router.push("/admin/dashboard");
      router.refresh();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  const labelClass = "block text-sm font-medium text-[#1f1e1b] mb-1.5";
  const inputClass =
    "w-full px-4 py-2.5 border border-[#1f1e1b]/15 rounded-lg bg-white text-[#1f1e1b] text-sm placeholder-[#1f1e1b]/35 focus:outline-none focus:ring-2 focus:ring-[#c85a32]/40 focus:border-[#c85a32] transition";

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1
          className="text-2xl font-bold text-[#1f1e1b]"
          style={{ fontFamily: "var(--font-crimson-pro)" }}
        >
          {isEdit ? "Edit Article" : "New Article"}
        </h1>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push("/admin/dashboard")}
            className="px-4 py-2 text-sm text-[#1f1e1b]/60 hover:text-[#1f1e1b] transition"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 bg-[#c85a32] text-white text-sm font-semibold rounded-lg hover:bg-[#b04e2b] disabled:opacity-60 transition"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            {saving ? "Saving…" : isEdit ? "Save Changes" : "Publish Article"}
          </button>
        </div>
      </div>

      {error && (
        <div
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700"
          style={{ fontFamily: "var(--font-source-sans)" }}
        >
          {error}
        </div>
      )}

      <div className="grid grid-cols-3 gap-8">
        {/* Main column */}
        <div className="col-span-2 space-y-6">
          {/* Title */}
          <div>
            <label
              className={labelClass}
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => {
                set("title", e.target.value);
                if (!isEdit && !form.slug)
                  set("slug", autoSlug(e.target.value));
              }}
              className={inputClass}
              style={{ fontFamily: "var(--font-source-sans)" }}
              placeholder="Article title"
            />
          </div>

          {/* Slug */}
          <div>
            <label
              className={labelClass}
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Slug <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.slug}
              onChange={(e) =>
                set(
                  "slug",
                  e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""),
                )
              }
              className={inputClass}
              style={{
                fontFamily: "var(--font-source-sans)",
                fontVariantLigatures: "none",
              }}
              placeholder="url-friendly-slug"
            />
            <p
              className="mt-1 text-xs text-[#1f1e1b]/40"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Will appear as /news/{form.slug || "…"}
            </p>
          </div>

          {/* Excerpt */}
          <div>
            <label
              className={labelClass}
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Excerpt <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={form.excerpt}
              onChange={(e) => set("excerpt", e.target.value)}
              className={inputClass}
              style={{
                fontFamily: "var(--font-source-sans)",
                resize: "vertical",
              }}
              placeholder="Short summary shown on the news listing page"
            />
          </div>

          {/* Body */}
          <div>
            <label
              className={`${labelClass} mb-3`}
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Article Body <span className="text-red-500">*</span>
            </label>
            <BlockEditor value={form.body} onChange={(b) => set("body", b)} />
          </div>

          {/* SEO section */}
          <div className="border-t border-[#1f1e1b]/10 pt-6">
            <h2
              className="text-base font-semibold text-[#1f1e1b] mb-4"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              SEO
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  className={labelClass}
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  Meta Title
                </label>
                <input
                  type="text"
                  value={form.metaTitle}
                  onChange={(e) => set("metaTitle", e.target.value)}
                  className={inputClass}
                  style={{ fontFamily: "var(--font-source-sans)" }}
                  placeholder={form.title || "Defaults to title"}
                  maxLength={60}
                />
                <p
                  className="mt-1 text-xs text-[#1f1e1b]/40"
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  {form.metaTitle.length}/60 characters
                </p>
              </div>
              <div>
                <label
                  className={labelClass}
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  Meta Description
                </label>
                <textarea
                  rows={2}
                  value={form.metaDescription}
                  onChange={(e) => set("metaDescription", e.target.value)}
                  className={inputClass}
                  style={{
                    fontFamily: "var(--font-source-sans)",
                    resize: "vertical",
                  }}
                  placeholder={form.excerpt || "Defaults to excerpt"}
                  maxLength={160}
                />
                <p
                  className="mt-1 text-xs text-[#1f1e1b]/40"
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  {form.metaDescription.length}/160 characters
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Publish settings */}
          <div className="bg-white border border-[#1f1e1b]/10 rounded-xl p-5 space-y-4">
            <h3
              className="text-sm font-semibold text-[#1f1e1b]"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Publish Settings
            </h3>

            <div>
              <label
                className={labelClass}
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Published At
              </label>
              <input
                type="datetime-local"
                value={form.publishedAt}
                onChange={(e) => set("publishedAt", e.target.value)}
                className={inputClass}
                style={{ fontFamily: "var(--font-source-sans)" }}
              />
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.isHidden}
                onChange={(e) => set("isHidden", e.target.checked)}
                className="w-4 h-4 accent-[#c85a32]"
              />
              <span
                className="text-sm text-[#1f1e1b]"
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Hide from public listing
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.isFeatured}
                onChange={(e) => set("isFeatured", e.target.checked)}
                className="w-4 h-4 accent-[#c85a32]"
              />
              <span
                className="text-sm text-[#1f1e1b]"
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Set as featured article
              </span>
            </label>
          </div>

          {/* Category & metadata */}
          <div className="bg-white border border-[#1f1e1b]/10 rounded-xl p-5 space-y-4">
            <h3
              className="text-sm font-semibold text-[#1f1e1b]"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Details
            </h3>

            <div>
              <label
                className={labelClass}
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Category
              </label>
              <select
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
                className={inputClass}
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                className={labelClass}
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Author
              </label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => set("author", e.target.value)}
                className={inputClass}
                style={{ fontFamily: "var(--font-source-sans)" }}
              />
            </div>

            <div>
              <label
                className={labelClass}
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Read Time
              </label>
              <input
                type="text"
                value={form.readTime}
                onChange={(e) => set("readTime", e.target.value)}
                className={inputClass}
                style={{ fontFamily: "var(--font-source-sans)" }}
                placeholder="e.g. 5 min read"
              />
            </div>

            <div>
              <label
                className={labelClass}
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Accent Colour
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={form.accentColor}
                  onChange={(e) => set("accentColor", e.target.value)}
                  className="h-9 w-16 rounded border border-[#1f1e1b]/15 cursor-pointer p-0.5 bg-white"
                />
                <input
                  type="text"
                  value={form.accentColor}
                  onChange={(e) => set("accentColor", e.target.value)}
                  className={`${inputClass} flex-1`}
                  style={{ fontFamily: "var(--font-source-sans)" }}
                  placeholder="#c85a32"
                />
              </div>
            </div>
          </div>

          {/* Cover image */}
          <div className="bg-white border border-[#1f1e1b]/10 rounded-xl p-5 space-y-4">
            <h3
              className="text-sm font-semibold text-[#1f1e1b]"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Cover Image
            </h3>

            {form.coverImageUrl && (
              <img
                src={form.coverImageUrl}
                alt="Cover preview"
                className="w-full h-32 object-cover rounded-lg border border-[#1f1e1b]/10"
              />
            )}

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) uploadCoverImage(file);
              }}
            />

            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              className="w-full py-2 px-4 border border-dashed border-[#1f1e1b]/25 rounded-lg text-sm text-[#1f1e1b]/50 hover:border-[#c85a32] hover:text-[#c85a32] disabled:opacity-60 transition"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              {uploading
                ? "Uploading…"
                : form.coverImageUrl
                  ? "Replace image"
                  : "Upload image"}
            </button>

            {form.coverImageUrl && (
              <button
                type="button"
                onClick={() => set("coverImageUrl", "")}
                className="w-full py-2 px-4 text-sm text-red-500 hover:text-red-700 transition"
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Remove image
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
