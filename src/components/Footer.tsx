import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1F2937', padding: '32px 24px', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <span style={{ color: 'white', fontWeight: '700', fontSize: '16px' }}>Happy Detour Travel</span>
        
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '0 0 4px 0' }}>
            Real trips. Real value. Someone actually in your corner. · Northeast, OH ·{' '}
            <a href="tel:7473338687" style={{ color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-white transition-colors">747-333-8687</a> ·{' '}
            <a href="mailto:eric@happydetour.com" style={{ color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-white transition-colors">eric@happydetour.com</a>
          </p>
          <p style={{ color: '#6B7280', fontSize: '11px', margin: 0 }}>
            © 2026 Happy Detour Travel LLC · Eric · Affiliated with WorldVia Travel Network ·{' '}
            <Link to="/terms" style={{ color: '#6B7280', textDecoration: 'underline' }}>Terms & Conditions</Link>
            {' · '}
            <Link to="/privacy" style={{ color: '#6B7280', textDecoration: 'underline' }}>Privacy Policy</Link>
            {' · '}Last updated: June 2026
          </p>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="https://facebook.com/happydetourtravel" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF', fontSize: '12px', textDecoration: 'none' }} className="hover:text-white transition-colors">Facebook</a>
          <a href="https://instagram.com/happydetourtravel" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF', fontSize: '12px', textDecoration: 'none' }} className="hover:text-white transition-colors">Instagram</a>
          <a href="https://tiktok.com/@happydetourtravel" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF', fontSize: '12px', textDecoration: 'none' }} className="hover:text-white transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  )
}
