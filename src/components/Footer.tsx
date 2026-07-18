630-823-1253import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1F2937', padding: '32px 20px', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', textAlign: 'center' }}>

        {/* Social links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://facebook.com/happydetourtravel" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF', fontSize: '13px', textDecoration: 'none' }}>Facebook</a>
          <a href="https://instagram.com/happydetourtravel" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF', fontSize: '13px', textDecoration: 'none' }}>Instagram</a>
          <a href="https://tiktok.com/@happydetourtravel" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF', fontSize: '13px', textDecoration: 'none' }}>TikTok</a>
          <a href="https://www.facebook.com/groups/somuchtosea" target="_blank" rel="noopener noreferrer" style={{ color: '#F59E0B', fontSize: '13px', textDecoration: 'none', fontWeight: '600' }}>Join the Community</a>
          <Link to="/blog" style={{ color: '#9CA3AF', fontSize: '13px', textDecoration: 'none' }}>Postcards & Updates</Link>
        </div>

        {/* Contact info */}
        <p style={{ color: '#9CA3AF', fontSize: '12px', margin: 0, lineHeight: '1.8' }}>
          Real trips. Real value. Someone actually in your corner. · Northeast, OH ·{' '}
          <a href="tel:7473338687" style={{ color: '#9CA3AF', textDecoration: 'none' }}>747-333-8687</a> ·{' '}
          <a href="mailto:eric@happydetour.com" style={{ color: '#9CA3AF', textDecoration: 'none' }}>eric@happydetour.com</a>
        </p>

        {/* Legal */}
        <p style={{ color: '#6B7280', fontSize: '11px', margin: 0, lineHeight: '1.8' }}>
          © 2026 Happy Detour Travel LLC · Eric · Affiliated with WorldVia Travel Network ·{' '}
          <Link to="/terms" style={{ color: '#6B7280', textDecoration: 'underline' }}>Terms & Conditions</Link>
          {' · '}
          <Link to="/privacy" style={{ color: '#6B7280', textDecoration: 'underline' }}>Privacy Policy</Link>
          {' · '}
          <Link to="/faq" style={{ color: '#6B7280', textDecoration: 'underline' }}>FAQ</Link>
          {' · '}Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>

      </div>
    </footer>
  )
}
