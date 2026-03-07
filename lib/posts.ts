import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { authors, type Author } from "./blog-config"

const POSTS_DIR = path.join(process.cwd(), "content/blog")

export interface Post {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readTime: number
  author: Author
  tags: string[]
  image?: string
  content: string
}

function readPost(filePath: string): Post {
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  const slug = path.basename(filePath, ".mdx")
  const author = authors[data.author] ?? Object.values(authors)[0]

  return {
    slug,
    title: data.title,
    description: data.description,
    category: data.category,
    date: data.date,
    readTime: data.readTime,
    author,
    tags: data.tags ?? [],
    image: data.image ?? undefined,
    content: content.trim(),
  }
}

function loadPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"))
  const all = files.map((f) => readPost(path.join(POSTS_DIR, f)))
  return all.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const posts: Post[] = loadPosts()

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getCategories(): string[] {
  const cats = new Set(posts.map((p) => p.category))
  return Array.from(cats)
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category)
}

export function getRelatedPosts(post: Post, limit = 2): Post[] {
  const others = posts.filter((p) => p.slug !== post.slug)
  const scored = others.map((p) => {
    let score = 0
    if (p.category === post.category) score += 3
    const sharedTags = p.tags.filter((t) => post.tags.includes(t))
    score += sharedTags.length * 2
    return { post: p, score }
  })
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map((s) => s.post)
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
}
