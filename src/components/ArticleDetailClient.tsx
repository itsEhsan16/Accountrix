"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import Link from "next/link";
import type { ArticleRecord, BodyBlock } from "@/lib/types";
import RenderBlock from "@/components/RenderBlock";

interface RelatedArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  accent_color: string;
  published_at: string;
}

interface Props {
  article: ArticleRecord;
  related: RelatedArticle[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function CoverPlaceholder({
  accentColor,
  category,
  className = "",
}: {
  accentColor: string;
  category: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ backgroundColor: accentColor }}
    >
      <div className="flex flex-col items-center gap-3 opacity-30">
        <BookOpen className="w-14 h-14 text-white" />
        <span className="text-white text-xs uppercase tracking-widest font-semibold">
          {category}
        </span>
      </div>
    </div>
  );
}

function RelatedCard({ article }: { article: RelatedArticle }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group flex gap-4 items-start py-4 border-b border-[#e5e2db] last:border-0 hover:opacity-80 transition-opacity"
    >
      <div
        className="w-16 h-16 shrink-0 flex items-center justify-center"
        style={{ backgroundColor: article.accent_color }}
      >
        <BookOpen className="w-5 h-5 text-white opacity-50" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-[#c85a32] text-xs font-bold uppercase tracking-wider block mb-1">
          {article.category}
        </span>
        <p className="text-sm font-(family-name:--font-crimson-pro) text-[#1f1e1b] leading-snug group-hover:text-[#c85a32] transition-colors line-clamp-3">
          {article.title}
        </p>
      </div>
    </Link>
  );
}

export default function ArticleDetailClient({ article, related }: Props) {
  const body = article.body as BodyBlock[];

  return (
    <main className="flex-1">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#1f1e1b] text-white">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 40%, ${article.accent_color} 0%, transparent 60%)`,
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="pt-16 pb-14 lg:pt-28 lg:pb-20"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Link
                href="/news"
                className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider font-semibold gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Insights
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.span
                  variants={fadeInUp}
                  className="inline-block mb-4 border text-xs uppercase tracking-widest px-4 py-1.5 font-bold"
                  style={{
                    borderColor: article.accent_color,
                    color: article.accent_color,
                  }}
                >
                  {article.category}
                </motion.span>
                <motion.h1
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl lg:text-5xl font-(family-name:--font-crimson-pro) mb-6 leading-tight"
                >
                  {article.title}
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-gray-300 font-sans text-lg leading-relaxed mb-8"
                >
                  {article.excerpt}
                </motion.p>
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-6 text-sm text-gray-400 font-sans"
                >
                  {article.author && (
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4 shrink-0" />
                      {article.author}
                    </span>
                  )}
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 shrink-0" />
                    {formatDate(article.published_at)}
                  </span>
                  {article.read_time && (
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 shrink-0" />
                      {article.read_time}
                    </span>
                  )}
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="relative aspect-4/3 w-full overflow-hidden"
              >
                {article.cover_image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={article.cover_image_url}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <CoverPlaceholder
                    accentColor={article.accent_color}
                    category={article.category}
                    className="absolute inset-0"
                  />
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Body + Sidebar ── */}
      <section className="py-16 lg:py-24 bg-[#f9f8f6]">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Article body */}
            <motion.article
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-2"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white border border-[#e5e2db] px-8 py-10 lg:px-12 lg:py-12"
              >
                {body.map((block, i) => (
                  <RenderBlock key={i} block={block} />
                ))}

                <div className="mt-12 pt-8 border-t border-[#e5e2db] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-sm font-sans text-[#5a5854]">
                    Published{" "}
                    <span className="text-[#1f1e1b] font-semibold">
                      {formatDate(article.published_at)}
                    </span>
                    {article.author && (
                      <>
                        {" "}
                        by{" "}
                        <span className="text-[#1f1e1b] font-semibold">
                          {article.author}
                        </span>
                      </>
                    )}
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 border"
                    style={{
                      borderColor: article.accent_color,
                      color: article.accent_color,
                    }}
                  >
                    {article.category}
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-8 bg-[#1f1e1b] text-white px-8 py-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div>
                  <p className="font-(family-name:--font-crimson-pro) text-2xl mb-1">
                    Need expert guidance on this topic?
                  </p>
                  <p className="text-gray-400 text-sm font-sans">
                    Our team is available for a free initial consultation.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center bg-[#c85a32] hover:bg-[#a64522] transition-colors text-white font-semibold text-sm uppercase px-7 py-3.5 tracking-wide gap-2 group"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-1"
            >
              <div className="sticky top-28 space-y-8">
                {related.length > 0 && (
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white border border-[#e5e2db] p-6"
                  >
                    <h2 className="text-lg font-(family-name:--font-crimson-pro) text-[#1f1e1b] mb-1 leading-snug">
                      Related Articles
                    </h2>
                    <div className="h-0.5 w-10 mb-5 bg-[#c85a32]" />
                    <div>
                      {related.map((rel) => (
                        <RelatedCard key={rel.slug} article={rel} />
                      ))}
                    </div>
                  </motion.div>
                )}

                <motion.div variants={fadeInUp}>
                  <Link
                    href="/news"
                    className="flex items-center justify-center gap-2 border border-[#1f1e1b] text-[#1f1e1b] hover:bg-[#1f1e1b] hover:text-white transition-colors font-semibold text-sm uppercase tracking-wider px-6 py-4 w-full"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    All Insights
                  </Link>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="bg-white border border-[#e5e2db] p-6"
                >
                  <h2 className="text-lg font-(family-name:--font-crimson-pro) text-[#1f1e1b] mb-1">
                    Browse by Category
                  </h2>
                  <div className="h-0.5 w-10 mb-5 bg-[#c85a32]" />
                  <div className="space-y-2">
                    {[
                      "Taxation",
                      "Business Advisory",
                      "Compliance",
                      "Company News",
                    ].map((cat) => (
                      <Link
                        key={cat}
                        href="/news"
                        className="flex items-center justify-between text-sm font-sans text-[#5a5854] hover:text-[#c85a32] transition-colors py-1 group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {cat}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}
