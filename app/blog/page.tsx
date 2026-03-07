import Link from "next/link"
import { posts, formatDate } from "@/lib/posts"
import Navbar from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Блог — Alashed",
  description: "Статьи о STEM-образовании, ГОСО 2026, программировании и робототехнике для казахстанских школ.",
}

const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  "ГОСО 2026":     { text: "#DC2626", bg: "#FEF2F2", border: "#FCA5A5" },
  "Программирование": { text: "#059669", bg: "#ECFDF5", border: "#6EE7B7" },
  "Соревнования":  { text: "#D97706", bg: "#FEF3C7", border: "#FCD34D" },
  "Alashed EDU":   { text: "#1A6FA8", bg: "#EBF7FF", border: "#5BB8F5" },
  "Образование":   { text: "#7C3AED", bg: "#F5F3FF", border: "#C4B5FD" },
}

export default function BlogPage() {
  const [featured, ...rest] = posts

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
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 2h8v1.5L6 7 2 3.5V2zM2 5v5h8V5" stroke="#2E9DE0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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
            {/* Image placeholder */}
            <div className="relative bg-gradient-to-br from-[#1A6FA8] to-[#0F2744] min-h-[220px] md:min-h-[300px] flex items-center justify-center p-8">
              <div className="absolute inset-0 opacity-10" style={{backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mx-auto mb-3">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M4 6h20M4 12h14M4 18h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-white/60 text-sm font-sans">Главная статья</span>
              </div>
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {rest.map((post) => {
            const cat = categoryColors[post.category] ?? categoryColors["Образование"]
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-[rgba(55,50,47,0.10)] rounded-2xl p-6 flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(55,50,47,0.08)] hover:border-[rgba(55,50,47,0.18)] transition-all"
              >
                <div>
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
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-[rgba(55,50,47,0.08)]">
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

        {/* Bottom CTA */}
        <div className="mt-16 p-8 sm:p-10 bg-white border border-[rgba(55,50,47,0.12)] rounded-2xl text-center">
          <h3 className="text-[#37322F] text-xl sm:text-2xl font-semibold font-serif mb-2">
            Готовы подключить школу?
          </h3>
          <p className="text-[#605A57] text-sm font-sans leading-6 mb-6 max-w-md mx-auto">
            Бесплатный доступ на весь пилотный период. Подключение за 48 часов.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="https://edu.alashed.kz/login"
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
