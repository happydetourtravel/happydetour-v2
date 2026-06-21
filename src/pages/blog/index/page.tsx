// src/pages/blog/index/page.tsx
// Blog listing page — lives at /blog
// To add a new post, add a new entry to the blogPosts array below
// and create a new folder under src/pages/blog/posts/

import { Link } from 'react-router-dom'

const blogPosts = [
  {
    slug: 'what-is-included-on-a-cruise',
    title: 'What Is Actually Included on a Cruise?',
    excerpt: 'Before I booked my first cruise I had no idea what I was actually paying for. Here is what I wish someone had told me.',
    date: 'June 2026',
    readTime: '4 min read',
    tag: 'Cruise Tips',
  },
]

export default function BlogIndex() {
  return (
    <main style={{ backgroundColor: '#F9FAFB', minHeight: '100vh', padding: '64px 24px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* Header */}
        <p style={{ color: '#007298', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px 0' }}>
          The Blog
        </p>
        <h1 style={{ color: '#1F2937', fontSize: '36px', fontWeight: '800', margin: '0 0 12px 0', lineHeight: '1.2' }}>
          Real talk about cruises and travel.
        </h1>
        <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.7', margin: '0 0 48px 0' }}>
          No fluff, no sponsored opinions. Just honest stories and advice from someone who has actually been out there.
        </p>

        {/* Post List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '28px', border: '1px solid #E5E7EB', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '4px' }}>
                    {post.tag}
                  </span>
                  <span style={{ color: '#9CA3AF', fontSize: '12px' }}>{post.date} · {post.readTime}</span>
                </div>
                <h2 style={{ color: '#1F2937', fontSize: '20px', fontWeight: '700', margin: '0 0 10px 0', lineHeight: '1.3' }}>
                  {post.title}
                </h2>
                <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.7', margin: '0 0 16px 0' }}>
                  {post.excerpt}
                </p>
                <span style={{ color: '#007298', fontSize: '14px', fontWeight: '600' }}>
                  Read more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}
