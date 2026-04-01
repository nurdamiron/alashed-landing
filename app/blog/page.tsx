import Link from "next/link"
import { posts, getCategories, formatDate } from "@/lib/posts"
import { categoryColors } from "@/lib/blog-config"
import { News01Icon } from "hugeicons-react"
import Navbar from "@/components/navbar"
import BlogList from "@/components/blog-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Блог — Alashed",
  description: "Статьи о STEM-образовании, ГОСО 2026, программировании и робототехнике для казахстанских школ.",
}

export default function BlogPage() {
  const [featured, ...rest] = posts
  const categories = getCategories()

  const listPosts = rest.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    date: p.date,
    readTime: p.readTime,
    author: { name: p.author.name, initials: p.author.initials, color: p.author.color, bg: p.author.bg },
    image: p.image,
  }))

  return (
    <div className="w-full min-h-screen bg-[#F7F5F3]">
      {/* Nav */}
      <div className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] sticky top-0 z-30">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 h-14 flex items-center">
          <Navbar />
        </div>
      </div>

      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#EBF7FF] rounded-full border border-[#5BB8F5]/30 mb-5">
            <News01Icon size={12} color="#2E9DE0" strokeWidth={1} />
            <span className="text-[#2E9DE0] text-xs font-semibold font-sans uppercase tracking-wide">Блог</span>
          </div>
          <h1 className="text-[#37322F] text-2xl sm:text-3xl md:text-[36px] font-semibold font-serif leading-tight tracking-tight">
            STEM-образование<br className="hidden sm:block" /> в Казахстане
          </h1>
          <p className="text-[#605A57] text-base font-sans leading-7 mt-4 max-w-[520px]">
            Статьи о ГОСО 2026, программировании, робототехнике и цифровизации школ — для учителей и директоров.
          </p>
        </div>

        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-12">
          <div className="grid md:grid-cols-2 gap-0 border border-[rgba(55,50,47,0.12)] rounded-2xl overflow-hidden bg-white hover:shadow-[0px_8px_32px_rgba(55,50,47,0.08)] transition-shadow">
            {/* Image */}
            <div className="relative bg-gradient-to-br from-[#1A6FA8] to-[#0F2744] min-h-[220px] md:min-h-[300px] flex items-center justify-center overflow-hidden">
              {featured.image ? (
                <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <>
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mx-auto mb-3">
                      <News01Icon size={28} color="white" strokeWidth={2} />
                    </div>
                    <span className="text-white/60 text-sm font-sans">Главная статья</span>
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {(() => {
                  const cat = categoryColors[featured.category] ?? categoryColors["Образование"]
                  return (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold font-sans border mb-4"
                      style={{ color: cat.text, background: cat.bg, borderColor: cat.border }}>
                      {featured.category}
                    </span>
                  )
                })()}
                <h2 className="text-[#37322F] text-xl sm:text-2xl font-semibold font-serif leading-snug mb-3 group-hover:text-[#1A6FA8] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[#605A57] text-sm font-sans leading-6 line-clamp-3">
                  {featured.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-[rgba(55,50,47,0.08)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold font-sans flex-shrink-0"
                    style={{ background: featured.author.bg, color: featured.author.color }}>
                    {featured.author.initials}
                  </div>
                  <div>
                    <div className="text-[#37322F] text-xs font-semibold font-sans">{featured.author.name}</div>
                    <div className="text-[rgba(55,50,47,0.50)] text-[11px] font-sans">{formatDate(featured.date)}</div>
                  </div>
                </div>
                <span className="text-[rgba(55,50,47,0.40)] text-xs font-sans">{featured.readTime} мин</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[#37322F] text-base font-semibold font-sans">Все статьи</span>
          <div className="flex-1 h-px bg-[rgba(55,50,47,0.12)]" />
        </div>

        {/* Filterable list with pagination */}
        <BlogList posts={listPosts} categories={categories} />

        {/* Bottom CTA */}
        <div className="mt-16 p-8 sm:p-10 bg-white border border-[rgba(55,50,47,0.12)] rounded-2xl text-center">
          <h3 className="text-[#37322F] text-xl sm:text-2xl font-semibold font-serif mb-2">
            Готовы подключить школу?
          </h3>
          <p className="text-[#605A57] text-sm font-sans leading-6 mb-6 max-w-md mx-auto">
            Бесплатный доступ на весь пилотный период. Подключение за 48 часов.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="https://edu.alashed.kz"
              className="px-6 py-3 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full text-white text-sm font-semibold font-sans">
              Попробовать бесплатно
            </Link>
            <Link href="/#contact"
              className="px-6 py-3 bg-white border border-[rgba(55,50,47,0.20)] hover:bg-[#F7F5F3] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans">
              Запросить демо
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
