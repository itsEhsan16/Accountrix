import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ArticleRecord } from "@/lib/types";
import ArticleDetailClient from "@/components/ArticleDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { data } = await supabase
    .from("articles")
    .select("meta_title, meta_description")
    .eq("slug", id)
    .eq("is_hidden", false)
    .single();

  if (!data) return {};
  return {
    title: data.meta_title,
    description: data.meta_description,
  };
}

export const revalidate = 60;

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", id)
    .eq("is_hidden", false)
    .single();

  if (!article) notFound();

  // Related: same category first, then others; exclude current; limit 4
  const { data: allOthers } = await supabase
    .from("articles")
    .select("slug, title, excerpt, category, accent_color, published_at")
    .eq("is_hidden", false)
    .neq("slug", id)
    .order("published_at", { ascending: false });

  const others = allOthers ?? [];
  const sameCategory = others.filter((a) => a.category === article.category);
  const different = others.filter((a) => a.category !== article.category);
  const related = [...sameCategory, ...different].slice(0, 4);

  return (
    <ArticleDetailClient
      article={article as ArticleRecord}
      related={
        related as Pick<
          ArticleRecord,
          | "slug"
          | "title"
          | "excerpt"
          | "category"
          | "accent_color"
          | "published_at"
        >[]
      }
    />
  );
}
