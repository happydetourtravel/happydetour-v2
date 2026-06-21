// src/pages/blog/index/page.tsx
// Blog listing page — lives at /blog
// Automatically shows all posts from public/blog/posts/
// Sorted newest first by date in the markdown frontmatter

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts, PostMeta } from '../../../lib/posts'

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export default function BlogIndex() {
  const [posts, setPosts] = useState<PostMeta[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  return (
    <main style={{ backgroundColor: '#F9FAFB', minHeight: '100vh', padding: '64px 24px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        <p style={{ color: '#007298', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px 0' }}>
          Postcards & Updates
        </p>
        <h1 style={{ color: '#1F2937', fontSize: '36px', fontWeight: '800', margin: '0 0 12px 0', lineHeight: '1.2' }}>
          Real talk about cruises and travel.
        </h1>
        <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.7', margin: '0 0 48px 0' }}>
          No fluff, no sponsored opinions. Just honest stories and advice from someone who has actually been out there.
        </p>

        {loading ? (
          <p style={{ color: '#9CA3AF', fontSize: '15px' }}>Loading posts...</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {posts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E5E7EB', display: 'flex', gap: '0' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: '180px', height: '140px', objectFit: 'cover', flexShrink: 0 }}
                    />
                  )}
                  <div style={{ padding: '24px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                      <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '4px' }}>
                        {post.tag}
                      </span>
                      <span style={{ color: '#9CA3AF', fontSize: '12px' }}>{formatDate(post.date)}</span>
                    </div>
                    <h2 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '700', margin: '0 0 8px 0', lineHeight: '1.3' }}>
                      {post.title}
                    </h2>
                    <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', margin: '0 0 12px 0' }}>
                      {post.excerpt}
                    </p>
                    <span style={{ color: '#007298', fontSize: '13px', fontWeight: '600' }}>
                      Read more &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}
