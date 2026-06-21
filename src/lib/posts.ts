// src/lib/posts.ts
// This file handles loading and parsing all blog posts from markdown files.
// To add a new post, just drop a .md file in public/blog/posts/
// and add its filename to the list below.

import matter from 'gray-matter'
import { marked } from 'marked'

// ─── ADD NEW POST FILENAMES HERE ───────────────────────────────────────────
// Just add the filename (without path) each time you create a new post.
const POST_FILES = [
  'what-is-included-on-a-cruise.md',
  '6-things-first-time-cruise-passengers-wish-they-knew.md',
  'virgin-voyages-adults-only-reality-check.md',
  'the-truth-about-all-inclusive-luxury.md',
  'what-to-pack-for-a-7-day-caribbean-cruise.md',
  'why-im-all-in-on-the-msc-seascape-this-september.md',
  '3-reasons-virgin-voyages-is-the-adult-only-vacation-you-need.md',
  'the-first-client.md',
  'the-great-chatbot-experiment.md',
  'building-a-travel-brand-from-scratch.md',
  'the-day-i-built-like-i-meant-it.md',
  'day-2-in-the-lab-and-the-site-got-better.md',
  'i-want-to-go-to-the-dominican-republic-in-october.md',
  'day-in-the-lab-robots-reviews-and-real-deals.md',
  'lab-updates-quick-wins-and-whats-coming-next.md',
  'the-lab-the-list-and-the-art-of-letting-go.md',
  'a-saturday-well-spent.md',
  'bye-bye-templates-hello-custom.md',
  'the-work-nobody-sees.md',
  'the-day-i-stopped-thinking-and-started-building.md',
  'what-ive-been-up-to-lately-at-happy-detour-travel.md',
]
// ───────────────────────────────────────────────────────────────────────────

export interface PostMeta {
  slug: string
  title: string
  date: string
  tag: string
  excerpt: string
  image?: string
}

export interface Post extends PostMeta {
  content: string
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const posts = await Promise.all(
    POST_FILES.map(async (filename) => {
      const slug = filename.replace('.md', '')
      try {
        const raw = await fetch(`/blog/posts/${filename}`).then((r) => r.text())
        const { data } = matter(raw)
        return {
          slug,
          title: data.title || slug,
          date: data.date || '',
          tag: data.tag || 'Travel',
          excerpt: data.excerpt || '',
          image: data.image || '',
        } as PostMeta
      } catch {
        return null
      }
    })
  )

  return posts
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as PostMeta[]
}

export async function getPost(slug: string): Promise<Post | null> {
  const filename = `${slug}.md`
  try {
    const raw = await fetch(`/blog/posts/${filename}`).then((r) => r.text())
    const { data, content } = matter(raw)
    const htmlContent = await marked(content)
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      tag: data.tag || 'Travel',
      excerpt: data.excerpt || '',
      image: data.image || '',
      content: htmlContent,
    }
  } catch {
    return null
  }
}
