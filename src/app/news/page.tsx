import { supabase } from "@/lib/supabase";
import NewsListClient, { type NewsArticle } from "@/components/NewsListClient";
import type { ArticleRecord } from "@/lib/types";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function mapToNewsArticle(record: ArticleRecord): NewsArticle {
  return {
    slug: record.slug,
    title: record.title,
    excerpt: record.excerpt,
    category: record.category,
    date: formatDate(record.published_at),
    accentColor: record.accent_color,
    author: record.author,
    readTime: record.read_time,
  };
}

const FALLBACK_FEATURED: NewsArticle = {
  slug: "",
  title: "No featured article",
  excerpt: "",
  category: "Insights",
  date: "",
  accentColor: "#c85a32",
  author: "",
  readTime: "",
};

export const revalidate = 60;

export default async function NewsPage() {
  const { data } = await supabase
    .from("articles")
    .select(
      "slug, title, excerpt, category, accent_color, author, read_time, published_at, is_featured, is_hidden",
    )
    .eq("is_hidden", false)
    .order("published_at", { ascending: false });

  const records = (data ?? []) as ArticleRecord[];
  const featuredRecord = records.find((r) => r.is_featured);
  const gridRecords = records.filter((r) => !r.is_featured);

  const featuredArticle = featuredRecord
    ? mapToNewsArticle(featuredRecord)
    : FALLBACK_FEATURED;
  const gridArticles = gridRecords.map(mapToNewsArticle);

  return (
    <NewsListClient
      featuredArticle={featuredArticle}
      gridArticles={gridArticles}
    />
  );
}
