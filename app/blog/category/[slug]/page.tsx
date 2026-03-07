import Link from "next/link"
import { notFound } from "next/navigation"
import { posts, getCategories, getPostsByCategory, formatDate } from "@/lib/posts"
import { categoryColors, categorySlugMap, categoryToSlug } from "@/lib/blog-config"
import Navbar from "@/components/navbar"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return Object.keys(categorySlugMap).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const categoryName = categorySlugMap[params.slug]
  if (!categoryName) return {}
  return {
    title: `${categoryName} — Alashed Блог`,
    description: `Статьи по теме «${categoryName}» — STEM-образование для казахстанских школ.`,
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = categorySlugMap[params.slug]
  if (!categoryName) notFound()

  const categoryPosts = getPostsByCategory(categoryName)
  const cat = categoryColors[categoryName] ?? categoryColors["Образование"]
  const allCategories = getCategories()

  return (
    <div className="w-full min-h-screen bg-[#F7F5F3]">
      {/* Nav */}
      <div className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] sticky top-0 z-30">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 h-14 flex items-center">
          <Navbar />
        </div>
      </div>

      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-[rgba(55,50,47,0.50)] text-sm font-sans hover:text-[#37322F] transition-colors mb-8 group">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Все статьи
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold font-sans border mb-4"
            style={{ color: cat.text, background: cat.bg, borderColor: cat.border }}>
            {categoryName}
          </span>
          <h1 className="text-[#37322F] text-2xl sm:text-3xl font-semibold font-serif leading-tight tracking-tight">
            {categoryName}
          </h1>
          <p className="text-[#605A57] text-sm font-sans leading-6 mt-3">
            {categoryPosts.length} {categoryPosts.length === 1 ? "статья" : categoryPosts.length < 5 ? "статьи" : "статей"}
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link href="/blog"
            className="px-4 py-2 rounded-full text-sm font-semibold font-sans border bg-white text-[#605A57] border-[rgba(55,50,47,0.15)] hover:border-[rgba(55,50,47,0.30)] transition-all">
            Все
          </Link>
          {allCategories.map((c) => {
            const cc = categoryColors[c] ?? categoryColors["Образование"]
            const slug = categoryToSlug[c]
            const isActive = c === categoryName
            return (
              <Link
                key={c}
                href={`/blog/category/${slug}`}
                className={`px-4 py-2 rounded-full text-sm font-semibold font-sans border transition-all ${
                  isActive ? "border-current" : "bg-white border-[rgba(55,50,47,0.15)] hover:border-[rgba(55,50,47,0.30)]"
                }`}
                style={isActive ? { color: cc.text, background: cc.bg, borderColor: cc.border } : undefined}
              >
                {c}
              </Link>
            )
          })}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {categoryPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-[rgba(55,50,47,0.10)] rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(55,50,47,0.08)] hover:border-[rgba(55,50,47,0.18)] transition-all"
            >
              {post.image && (
                <div className="w-full h-[160px] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              )}
              <div className="p-6">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold font-sans border mb-3"
                  style={{ color: cat.text, background: cat.bg, borderColor: cat.border }}>
                  {post.category}
                </span>
                <h3 className="text-[#37322F] text-base sm:text-lg font-semibold font-serif leading-snug mb-2 group-hover:text-[#1A6FA8] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#605A57] text-sm font-sans leading-6 line-clamp-2">
                  {post.description}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[rgba(55,50,47,0.08)] mx-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold font-sans flex-shrink-0"
                    style={{ background: post.author.bg, color: post.author.color }}>
                    {post.author.initials}
                  </div>
                  <span className="text-[rgba(55,50,47,0.55)] text-[11px] font-sans">{formatDate(post.date)}</span>
                </div>
                <span className="text-[rgba(55,50,47,0.40)] text-xs font-sans">{post.readTime} мин</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
