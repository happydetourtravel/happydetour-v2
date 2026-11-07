import { Link } from 'react-router-dom'

// Quick links to the main pages, so people at the bottom of any page know where to go next
const quickLinks = [
  { label: 'Virgin Voyages Guide', to: '/cruises/virgin-voyages' },
  { label: 'Virgin Deals', to: '/virgin' },
  { label: 'Group Sailing', to: '/group/transatlantic-10-2027' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1F2937', padding: '32px 20px', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', textAlign: 'center' }}>

        {/* Quick links */}
        <nav aria-label="Footer" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', justifyContent: 'center', alignItems: 'center' }}>
          {quickLinks.map((l) => (
            <Link key={l.to} to={l.to} style={{ color: 'white', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
        </nav>

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
          Real trips. Real value. Someone actually in your corner. · Virgin Voyages First Mate Gold · Alliance, OH ·{' '}
          <a href="tel:6308231253" style={{ color: '#9CA3AF', textDecoration: 'none' }}>630-823-1253</a> ·{' '}
          <a href="mailto:eric@happydetour.com" style={{ color: '#9CA3AF', textDecoration: 'none' }}>eric@happydetour.com</a>
        </p>

        {/* Legal */}
        <p style={{ color: '#6B7280', fontSize: '11px', margin: 0, lineHeight: '1.8' }}>
          © 2026 Happy Detour Travel LLC · Eric Carney · Affiliated with WorldVia Travel Network ·{' '}
          <Link to="/terms" style={{ color: '#6B7280', textDecoration: 'underline' }}>Terms & Conditions</Link>
          {' · '}
          <Link to="/privacy" style={{ color: '#6B7280', textDecoration: 'underline' }}>Privacy Policy</Link>
          {' · '}
          <Link to="/faq" style={{ color: '#6B7280', textDecoration: 'underline' }}>FAQ</Link>
        </p>
      </div>
    </footer>
  )
}
