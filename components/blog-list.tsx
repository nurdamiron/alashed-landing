"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft02Icon, ArrowRight02Icon } from "hugeicons-react"
import { categoryColors } from "@/lib/blog-config"

interface PostItem {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readTime: number
  author: { name: string; initials: string; color: string; bg: string }
  image?: string
}

const POSTS_PER_PAGE = 12

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
}

export default function BlogList({ posts, categories }: { posts: PostItem[]; categories: string[] }) {
  const [active, setActive] = useState<string | null>(null)
  const [page, setPage] = useState(1)

  const filtered = active ? posts.filter((p) => p.category === active) : posts
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE)
  const visible = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)

  function selectCategory(cat: string | null) {
    setActive(cat)
    setPage(1)
  }

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => selectCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-semibold font-sans border transition-all ${
            active === null
              ? "bg-[#37322F] text-white border-[#37322F]"
              : "bg-white text-[#605A57] border-[rgba(55,50,47,0.15)] hover:border-[rgba(55,50,47,0.30)]"
          }`}
        >
          Все ({posts.length})
        </button>
        {categories.map((cat) => {
          const c = categoryColors[cat] ?? categoryColors["Образование"]
          const count = posts.filter((p) => p.category === cat).length
          return (
            <button
              key={cat}
              onClick={() => selectCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold font-sans border transition-all ${
                active === cat
                  ? "border-current"
                  : "bg-white border-[rgba(55,50,47,0.15)] hover:border-[rgba(55,50,47,0.30)]"
              }`}
              style={
                active === cat
                  ? { color: c.text, background: c.bg, borderColor: c.border }
                  : undefined
              }
            >
              {cat} ({count})
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-5">
        {visible.map((post) => {
          const cat = categoryColors[post.category] ?? categoryColors["Образование"]
          return (
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
              <div className={`flex items-center justify-between pt-4 border-t border-[rgba(55,50,47,0.08)] ${post.image ? "mx-6 mb-6" : "mx-6 mb-6"}`}>
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
          )
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-9 h-9 rounded-full border border-[rgba(55,50,47,0.15)] flex items-center justify-center text-[#605A57] hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft02Icon size={14} color="currentColor" strokeWidth={1.5} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-9 h-9 rounded-full text-sm font-semibold font-sans transition-all ${
                p === page
                  ? "bg-[#37322F] text-white"
                  : "text-[#605A57] hover:bg-white border border-[rgba(55,50,47,0.15)]"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-9 h-9 rounded-full border border-[rgba(55,50,47,0.15)] flex items-center justify-center text-[#605A57] hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ArrowRight02Icon size={14} color="currentColor" strokeWidth={1.5} />
          </button>
        </div>
      )}
    </>
  )
}
