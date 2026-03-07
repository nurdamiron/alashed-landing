import Link from "next/link"
import { notFound } from "next/navigation"
import { posts, getPost, formatDate } from "@/lib/posts"
import Navbar from "@/components/navbar"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Alashed Блог`,
    description: post.description,
  }
}

const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  "ГОСО 2026":        { text: "#DC2626", bg: "#FEF2F2", border: "#FCA5A5" },
  "Программирование": { text: "#059669", bg: "#ECFDF5", border: "#6EE7B7" },
  "Соревнования":     { text: "#D97706", bg: "#FEF3C7", border: "#FCD34D" },
  "Alashed EDU":      { text: "#1A6FA8", bg: "#EBF7FF", border: "#5BB8F5" },
  "Образование":      { text: "#7C3AED", bg: "#F5F3FF", border: "#C4B5FD" },
}

function renderContent(md: string) {
  const lines = md.trim().split("\n")
  const elements: React.ReactNode[] = []
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-[#37322F] text-xl sm:text-2xl font-semibold font-serif mt-10 mb-4 leading-snug">
          {line.replace("## ", "")}
        </h2>
      )
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-[#37322F] text-base sm:text-lg font-semibold font-sans mt-7 mb-3 leading-snug">
          {line.replace("### ", "")}
        </h3>
      )
    } else if (line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**")) {
      elements.push(
        <p key={key++} className="text-[#37322F] text-sm font-semibold font-sans mb-2">
          {line.slice(2, -2)}
        </p>
      )
    } else if (line.startsWith("- ")) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].replace("- ", ""))
        i++
      }
      i--
      elements.push(
        <ul key={key++} className="my-4 flex flex-col gap-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#EBF7FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4l1.5 1.5 3-3" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#605A57] text-sm font-sans leading-6">{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      )
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={key++} className="my-6 pl-5 border-l-2 border-[#5BB8F5]">
          <p className="text-[#49423D] text-base font-serif italic leading-7">
            {line.replace("> ", "")}
          </p>
        </blockquote>
      )
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p key={key++} className="text-[#605A57] text-sm sm:text-base font-sans leading-7 mb-4">
          {renderInline(line)}
        </p>
      )
    }
  }

  return elements
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-[#37322F] font-semibold">{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const cat = categoryColors[post.category] ?? categoryColors["Образование"]
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)
  const others = posts.filter((p) => p.slug !== post.slug && p.category !== post.category).slice(0, 2 - related.length)
  const recommended = [...related, ...others].slice(0, 2)

  return (
    <div className="w-full min-h-screen bg-[#F7F5F3]">
      {/* Nav */}
      <div className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] sticky top-0 z-30">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 h-14 flex items-center">
          <Navbar />
        </div>
      </div>

      <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-[rgba(55,50,47,0.50)] text-sm font-sans hover:text-[#37322F] transition-colors mb-8 group">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Все статьи
        </Link>

        {/* Category */}
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold font-sans border mb-5"
          style={{ color: cat.text, background: cat.bg, borderColor: cat.border }}>
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-[#37322F] text-xl sm:text-2xl md:text-[30px] font-semibold font-serif leading-tight tracking-tight mb-5">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 pb-8 border-b border-[rgba(55,50,47,0.12)] mb-8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold font-sans flex-shrink-0"
              style={{ background: post.author.bg, color: post.author.color }}>
              {post.author.initials}
            </div>
            <div>
              <div className="text-[#37322F] text-sm font-semibold font-sans leading-tight">{post.author.name}</div>
              <div className="text-[rgba(55,50,47,0.50)] text-xs font-sans">{post.author.role}</div>
            </div>
          </div>
          <div className="w-px h-8 bg-[rgba(55,50,47,0.12)]" />
          <span className="text-[rgba(55,50,47,0.50)] text-sm font-sans">{formatDate(post.date)}</span>
          <div className="w-px h-8 bg-[rgba(55,50,47,0.12)]" />
          <span className="text-[rgba(55,50,47,0.50)] text-sm font-sans">{post.readTime} мин чтения</span>
        </div>

        {/* Description lead */}
        <p className="text-[#49423D] text-base sm:text-lg font-sans leading-7 mb-8 font-medium">
          {post.description}
        </p>

        {/* Content */}
        <div className="prose-custom">
          {renderContent(post.content)}
        </div>

        {/* Divider */}
        <div className="mt-14 pt-10 border-t border-[rgba(55,50,47,0.12)]" />

        {/* CTA box */}
        <div className="my-10 p-6 sm:p-8 bg-white border border-[rgba(55,50,47,0.12)] rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#EBF7FF] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 5h12M3 9h8M3 13h5" stroke="#2E9DE0" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-[#37322F] text-base font-semibold font-sans mb-1">Попробуйте Alashed бесплатно</div>
              <p className="text-[#605A57] text-sm font-sans leading-6 mb-4">
                Подключите школу к пилоту. Генерируйте КМЖ за 2 минуты, ведите CodeStudio уроки, заказывайте оборудование — всё в одном месте.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="https://edu.alashed.kz/login"
                  className="px-5 py-2.5 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full text-white text-sm font-semibold font-sans">
                  Начать бесплатно
                </Link>
                <Link href="/#contact"
                  className="px-5 py-2.5 bg-white border border-[rgba(55,50,47,0.20)] hover:bg-[#F7F5F3] transition-colors rounded-full text-[#37322F] text-sm font-medium font-sans">
                  Запросить демо
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended */}
        {recommended.length > 0 && (
          <div className="mt-12">
            <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-5">Читайте также</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {recommended.map((p) => {
                const c = categoryColors[p.category] ?? categoryColors["Образование"]
                return (
                  <Link key={p.slug} href={`/blog/${p.slug}`}
                    className="group bg-white border border-[rgba(55,50,47,0.10)] rounded-xl p-5 hover:shadow-[0px_4px_16px_rgba(55,50,47,0.08)] transition-all">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold font-sans border mb-2"
                      style={{ color: c.text, background: c.bg, borderColor: c.border }}>
                      {p.category}
                    </span>
                    <h4 className="text-[#37322F] text-sm font-semibold font-serif leading-snug group-hover:text-[#1A6FA8] transition-colors mb-1">
                      {p.title}
                    </h4>
                    <span className="text-[rgba(55,50,47,0.40)] text-xs font-sans">{p.readTime} мин</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
