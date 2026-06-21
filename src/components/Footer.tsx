import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1F2937', padding: '32px 24px', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Top row: left social | center info | right social */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>

          {/* Left: Facebook + Instagram */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <a href="https://facebook.com/happydetourtravel" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF', fontSize: '12px', textDecoration: 'none' }}>Facebook</a>
            <a href="https://instagram.com/happydetourtravel" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF', fontSize: '12px', textDecoration: 'none' }}>Instagram</a>
          </div>

          {/* Center: info */}
          <div style={{ textAlign: 'center', flex: 1 }}>
            <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '0 0 4px 0' }}>
              Real trips. Real value. Someone actually in your corner. · Northeast, OH ·{' '}
              <a href="tel:7473338687" style={{ color: '#9CA3AF', textDecoration: 'none' }}>747-333-8687</a> ·{' '}
              <a href="mailto:eric@happydetour.com" style={{ color: '#9CA3AF', textDecoration: 'none' }}>eric@happydetour.com</a>
            </p>
            <p style={{ color: '#6B7280', fontSize: '11px', margin: 0 }}>
              © 2026 Happy Detour Travel LLC · Eric · Affiliated with WorldVia Travel Network ·{' '}
              <Link to="/terms" style={{ color: '#6B7280', textDecoration: 'underline' }}>Terms & Conditions</Link>
              {' · '}
              <Link to="/privacy" style={{ color: '#6B7280', textDecoration: 'underline' }}>Privacy Policy</Link>
              {' · '}
              <Link to="/faq" style={{ color: '#6B7280', textDecoration: 'underline' }}>FAQ</Link>
              {' · '}Last updated: June 2026
            </p>
          </div>

          {/* Right: TikTok + Join the Group + Postcards & Updates */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <a href="https://tiktok.com/@happydetourtravel" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF', fontSize: '12px', textDecoration: 'none' }}>TikTok</a>
            <a href="https://www.facebook.com/groups/somuchtosea" target="_blank" rel="noopener noreferrer" style={{ color: '#F59E0B', fontSize: '12px', textDecoration: 'none', fontWeight: '600' }}>Join the Group</a>
            <Link to="/blog" style={{ color: '#9CA3AF', fontSize: '12px', textDecoration: 'none' }}>Postcards & Updates</Link>
          </div>

        </div>
      </div>
    </footer>
  )
}
