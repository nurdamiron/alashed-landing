import Link from "next/link"
import { notFound } from "next/navigation"
import { posts, getPost, getRelatedPosts, formatDate } from "@/lib/posts"
import { categoryColors, categoryToSlug } from "@/lib/blog-config"
import { ArrowLeft02Icon, Tick01Icon, News01Icon } from "hugeicons-react"
import Navbar from "@/components/navbar"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

const SITE_URL = "https://alashed.kz"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    title: `${post.title} — Alashed Блог`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Alashed",
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      ...(post.image ? { images: [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630, alt: post.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(post.image ? { images: [`${SITE_URL}${post.image}`] } : {}),
    },
  }
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
                <Tick01Icon size={8} color="#2E9DE0" strokeWidth={1.5} />
              </div>
              <span className="text-[#605A57] text-sm font-sans leading-6">{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      )
    } else if (line.startsWith("![")) {
      const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
      if (imgMatch) {
        elements.push(
          <figure key={key++} className="my-6">
            <img src={imgMatch[2]} alt={imgMatch[1]} className="w-full rounded-lg border border-[rgba(55,50,47,0.08)]" />
            {imgMatch[1] && (
              <figcaption className="text-[rgba(55,50,47,0.50)] text-xs font-sans mt-2 text-center">{imgMatch[1]}</figcaption>
            )}
          </figure>
        )
      }
    } else if (line.startsWith("{{video:")) {
      const videoUrl = line.replace("{{video:", "").replace("}}", "").trim()
      const youtubeMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/)
      if (youtubeMatch) {
        elements.push(
          <div key={key++} className="my-6 aspect-video rounded-lg overflow-hidden border border-[rgba(55,50,47,0.08)]">
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${youtubeMatch[1]}`} title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
          </div>
        )
      } else if (videoUrl.endsWith(".mp4")) {
        elements.push(
          <div key={key++} className="my-6 rounded-lg overflow-hidden border border-[rgba(55,50,47,0.08)]">
            <video controls className="w-full"><source src={videoUrl} type="video/mp4" /></video>
          </div>
        )
      }
    } else if (line.startsWith("|") && line.includes("|")) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i])
        i++
      }
      i--
      const rows = tableLines.filter(r => !r.match(/^\|[\s-:|]+\|$/))
      if (rows.length > 0) {
        const headerCells = rows[0].split("|").filter(c => c.trim())
        const bodyRows = rows.slice(1)
        elements.push(
          <div key={key++} className="my-6 overflow-x-auto">
            <table className="w-full text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b border-[rgba(55,50,47,0.12)]">
                  {headerCells.map((cell, ci) => (
                    <th key={ci} className="text-left text-[#37322F] font-semibold py-2 px-3">{cell.trim()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-[rgba(55,50,47,0.06)]">
                    {row.split("|").filter(c => c.trim()).map((cell, ci) => (
                      <td key={ci} className="text-[#605A57] py-2 px-3">{renderInline(cell.trim())}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
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
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-[#37322F] font-semibold">{part.slice(2, -2)}</strong>
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-[#1A6FA8] underline underline-offset-2 hover:text-[#2E9DE0] transition-colors">{linkMatch[1]}</a>
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i} className="px-1.5 py-0.5 bg-[#F0F0F0] rounded text-[13px] font-mono text-[#37322F]">{part.slice(1, -1)}</code>
    }
    return part
  })
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const cat = categoryColors[post.category] ?? categoryColors["Образование"]
  const recommended = getRelatedPosts(post, 2)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image ? `${SITE_URL}${post.image}` : undefined,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author.name },
    publisher: {
      "@type": "Organization",
      name: "Alashed",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/alashed-logo.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  }

  // JSON-LD is safe here — jsonLd is built from our own static MDX frontmatter data,
  // not from user input. No XSS risk as content is fully controlled server-side.
  return (
    <div className="w-full min-h-screen bg-[#F7F5F3]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Nav */}
      <div className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] sticky top-0 z-30">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 h-14 flex items-center">
          <Navbar />
        </div>
      </div>

      <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-[rgba(55,50,47,0.50)] text-sm font-sans hover:text-[#37322F] transition-colors mb-8 group">
          <ArrowLeft02Icon size={14} color="currentColor" strokeWidth={1.5} />
          Все статьи
        </Link>

        {/* Category */}
        <Link href={`/blog/category/${categoryToSlug[post.category] ?? "obrazovanie"}`}
          className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold font-sans border mb-5 hover:opacity-80 transition-opacity"
          style={{ color: cat.text, background: cat.bg, borderColor: cat.border }}>
          {post.category}
        </Link>

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

        {/* Cover image */}
        {post.image && (
          <div className="mb-8 rounded-xl overflow-hidden border border-[rgba(55,50,47,0.08)]">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
          </div>
        )}

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
              <News01Icon size={18} color="#2E9DE0" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="text-[#37322F] text-base font-semibold font-sans mb-1">Попробуйте Alashed</div>
              <p className="text-[#605A57] text-sm font-sans leading-6 mb-4">
                Подключите школу к пилоту. Генерируйте КМЖ за 2 минуты, ведите CodeStudio уроки, заказывайте оборудование — всё в одном месте.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="https://edu.alashed.kz"
                  className="px-5 py-2.5 bg-[#5BB8F5] hover:bg-[#2E9DE0] transition-colors rounded-full text-white text-sm font-semibold font-sans">
                  Начать работу
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
