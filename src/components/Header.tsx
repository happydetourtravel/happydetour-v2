import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <>
      <div className="w-full bg-brand-amber text-white text-left py-2 px-4 text-sm font-medium">
        Sailings for 2026–2027 are selling fast.{' '}
        <Link to="/join" className="underline font-bold hover:text-brand-dark transition-colors">
          Learn More
        </Link>
      </div>
      <header className="w-full bg-white border-b border-gray-200 px-6 py-2">
        <div className="w-full flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/HDT.png"
              alt="Happy Detour Travel"
              className="h-14 w-auto"
            />
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-brand-dark">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <Link to="/cruises" className="hover:text-brand-blue transition-colors">Cruises</Link>
            <Link to="/about" className="hover:text-brand-blue transition-colors">About</Link>
            <Link to="/join" className="hover:text-brand-blue transition-colors">Join HDT</Link>
            <Link to="/login" className="hover:text-brand-blue transition-colors">Sign In</Link>

            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                style={{ backgroundColor: '#F59E0B', color: 'white', padding: '8px 16px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                Start Packing
                <span style={{ fontSize: '10px' }}>▼</span>
              </button>
              {dropdownOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 6px)', right: 0, backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', border: '1px solid #F3F4F6', minWidth: '240px', zIndex: 100, overflow: 'hidden' }}>
                  
                  <a href="https://forgehq.app/f/?s=yozjm6l0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-gray-50 transition-colors"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', fontSize: '14px', color: '#1F2937', textDecoration: 'none', fontWeight: '600', borderBottom: '1px solid #F3F4F6' }}
                  >
                    🗺️ Drop Your Trip Wishlist
                  </a>
                  
                  <a href="https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-gray-50 transition-colors"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', fontSize: '14px', color: '#1F2937', textDecoration: 'none', fontWeight: '600' }}
                  >
                    💃 Book Virgin Voyages Directly
                  </a>
                </div>
              )}
            </div>

          </nav>
        </div>
      </header>
    </>
  )
}
