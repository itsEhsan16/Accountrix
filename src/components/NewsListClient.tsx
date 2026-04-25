"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ARTICLES_PER_PAGE = 6;

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  accentColor: string;
  author: string;
  readTime: string;
}

const allCategories = [
  "All",
  "Taxation",
  "Business Advisory",
  "Company News",
  "Compliance",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function ArticlePlaceholder({
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
      <div className="flex flex-col items-center gap-3 opacity-40">
        <BookOpen className="w-10 h-10 text-white" />
        <span className="text-white text-xs uppercase tracking-widest font-semibold">
          {category}
        </span>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: NewsArticle }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-white border border-[#e5e2db] flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <ArticlePlaceholder
          accentColor={article.accentColor}
          category={article.category}
          className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <div className="mb-4 text-sm font-sans flex text-[#5a5854]">
          <span className="font-semibold text-[#1f1e1b] mr-2">
            {article.category}
          </span>
          &bull;
          <span className="ml-2">{article.date}</span>
        </div>
        <h3 className="text-2xl font-(family-name:--font-crimson-pro) text-[#1f1e1b] mb-4 group-hover:text-[#c85a32] transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="font-sans text-[#5a5854] mb-8 flex-1 leading-relaxed">
          {article.excerpt}
        </p>
        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center text-[#c85a32] font-semibold text-sm uppercase tracking-wider hover:text-[#a64522] transition-colors mt-auto"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </motion.div>
  );
}

interface Props {
  gridArticles: NewsArticle[];
  featuredArticle: NewsArticle;
}

export default function NewsListClient({
  gridArticles,
  featuredArticle,
}: Props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles =
    activeCategory === "All"
      ? gridArticles
      : gridArticles.filter((a) => a.category === activeCategory);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative pt-24 lg:pt-48 pb-20 lg:pb-28 overflow-hidden bg-[#1f1e1b] text-white">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #c85a32 0%, transparent 50%), radial-gradient(circle at 80% 20%, #5a5854 0%, transparent 40%)",
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6 flex justify-center"
            >
              <span className="border border-[#c85a32] text-[#c85a32] text-xs uppercase tracking-widest px-4 py-1.5 font-bold">
                Latest Insights & Updates
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-(family-name:--font-crimson-pro) mb-6 text-white"
            >
              Financial Clarity, Delivered to You.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-300 md:text-xl font-sans"
            >
              Stay informed with expert analysis on tax regulations, GST
              updates, and strategic advice to help your business grow with
              confidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#e5e2db]">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden">
              <ArticlePlaceholder
                accentColor={featuredArticle.accentColor}
                category={featuredArticle.category}
                className="absolute inset-0"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c85a32] text-sm font-bold uppercase tracking-wider">
                  {featuredArticle.category}
                </span>
                <span className="text-[#5a5854] text-sm font-sans">
                  {featuredArticle.date}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-(family-name:--font-crimson-pro) text-[#1f1e1b] mb-6 leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-lg text-[#5a5854] font-sans mb-8 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <div>
                <Link
                  href={`/news/${featuredArticle.slug}`}
                  className="inline-flex items-center border border-[#1f1e1b] hover:bg-[#1f1e1b] transition-colors text-[#1f1e1b] hover:text-white font-semibold text-sm uppercase px-8 py-4 tracking-wide group"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 lg:py-28 bg-[#f9f8f6]">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm uppercase tracking-wider font-semibold py-2 px-4 transition-colors ${
                  activeCategory === category
                    ? "text-[#c85a32] border-b-2 border-[#c85a32]"
                    : "text-[#5a5854] hover:text-[#1f1e1b]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {paginatedArticles.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginatedArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center text-[#5a5854] py-12 font-sans">
              No articles found in this category.
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-10 h-10 flex items-center justify-center font-semibold transition-colors ${
                      currentPage === page
                        ? "bg-[#1f1e1b] text-white"
                        : "border border-[#e5e2db] text-[#5a5854] hover:bg-[#f0ede8]"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage((p) => p + 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                disabled={currentPage === totalPages}
                className="px-4 h-10 flex items-center justify-center border border-[#e5e2db] text-[#5a5854] hover:bg-[#f0ede8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm uppercase tracking-wider font-semibold"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#c85a32]">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-(family-name:--font-crimson-pro) text-white mb-6"
            >
              Need Expert Advice for Your Business?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 font-sans mb-10"
            >
              Reading about compliance is one thing; implementing it is another.
              Let our experts at Accountrix Solutions handle the complexities
              for you.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex bg-white hover:bg-[#1f1e1b] hover:text-white transition-colors text-[#1f1e1b] font-semibold text-sm uppercase px-8 py-4 tracking-wide"
              >
                Get Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
