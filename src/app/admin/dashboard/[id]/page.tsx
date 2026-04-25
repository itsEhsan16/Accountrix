import { supabaseAdmin } from "@/lib/supabase-server";
import { notFound } from "next/navigation";
import ArticleForm from "@/components/admin/ArticleForm";
import type { ArticleRecord } from "@/lib/types";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditArticlePage({ params }: Props) {
  const { id } = await params;

  const { data, error } = await supabaseAdmin
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) notFound();

  return <ArticleForm initial={data as ArticleRecord} />;
}
