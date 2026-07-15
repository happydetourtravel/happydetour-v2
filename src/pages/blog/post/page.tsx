https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/RFxrKCNQTejSeWAhpo4BaaEz/link// src/pages/blog/post/page.tsx

import { useParams, Link } from 'react-router-dom'
import { getPost } from '../../../lib/posts'

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = getPost(slug || '')

  if (!post) {
    return (
      <main style={{ backgroundColor: '#F9FAFB', minHeight: '100vh', padding: '64px 24px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h1 style={{ color: '#1F2937' }}>Post not found</h1>
          <Link to="/blog" style={{ color: '#007298' }}>Back to Postcards & Updates</Link>
        </div>
      </main>
    )
  }

  return (
    <main style={{ backgroundColor: '#F9FAFB', minHeight: '100vh', padding: '64px 24px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '4px' }}>
            {post.tag}
          </span>
          <span style={{ color: '#9CA3AF', fontSize: '12px' }}>{formatDate(post.date)}</span>
        </div>

        <h1 style={{ color: '#1F2937', fontSize: '38px', fontWeight: '800', lineHeight: '1.2', margin: '0 0 20px 0' }}>
          {post.title}
        </h1>

        {post.excerpt && (
          <p style={{ color: '#6B7280', fontSize: '17px', lineHeight: '1.8', margin: '0 0 36px 0', fontStyle: 'italic' }}>
            {post.excerpt}
          </p>
        )}

        {post.image && (
          <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '40px' }}>
            <img src={post.image} alt={post.title} style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }} />
          </div>
        )}

        <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: '0 0 40px 0' }} />

        <div
          className="blog-content"
          style={{ color: '#1F2937', fontSize: '16px', lineHeight: '1.95' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div style={{ marginTop: '56px', backgroundColor: '#007298', borderRadius: '16px', padding: '36px 32px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px 0' }}>
            Ready to plan your trip?
          </p>
          <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '700', margin: '0 0 12px 0', lineHeight: '1.3' }}>
            Let's figure out what works for you.
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', margin: '0 0 24px 0' }}>
            We will talk through everything before anything is confirmed so there are no surprises.
          </p>
          <a
            href="https://forgehq.app/f/?s=20bejr4j"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#F59E0B', color: 'white', padding: '13px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}
          >
            Start Planning My Trip
          </a>
        </div>

        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link to="/blog" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none' }}>
            &larr; Back to Postcards & Updates
          </Link>
        </div>

      </div>

      <style>{`
        .blog-content h2 { color: #1F2937; font-size: 26px; font-weight: 800; margin: 40px 0 16px 0; line-height: 1.3; }
        .blog-content h3 { color: #1F2937; font-size: 20px; font-weight: 700; margin: 32px 0 12px 0; }
        .blog-content p { margin: 0 0 24px 0; }
        .blog-content p.caption { color: #9CA3AF; font-size: 13px; text-align: center; margin: -12px 0 24px 0; font-style: italic; }
        .blog-content img { width: 100%; border-radius: 16px; margin: 16px 0 8px 0; display: block; }
        .blog-content a { color: #007298; font-weight: 600; }
        .blog-content ul, .blog-content ol { padding-left: 24px; margin: 0 0 24px 0; }
        .blog-content li { margin-bottom: 8px; line-height: 1.7; }
        .blog-content hr { border: none; border-top: 1px solid #E5E7EB; margin: 40px 0; }
        .blog-content blockquote { border-left: 4px solid #007298; padding-left: 20px; margin: 24px 0; color: #6B7280; font-style: italic; }
      `}</style>

    </main>
  )
}
