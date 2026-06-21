import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-brand-amber text-white text-left py-2 px-4 text-sm font-medium">
        Sailings for 2026–2027 are selling fast.{' '}
        <Link to="/join" className="underline font-bold hover:text-brand-dark transition-colors">
          Learn More
        </Link>
      </div>

      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200 px-6 py-2">
        <div className="w-full flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/HDT.png" alt="Happy Detour Travel" className="h-14 w-auto" />
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-brand-dark">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <Link to="/about" className="hover:text-brand-blue transition-colors">About</Link>
            <a
              href="https://www.facebook.com/groups/somuchtosea"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-blue transition-colors"
            >
              Community
            </a>
            <button
              onClick={() => setModalOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#1F2937', fontSize: '14px', fontWeight: '500' }}
              className="hover:text-brand-blue transition-colors"
            >
              Join the List
            </button>
            <Link to="/join" className="hover:text-brand-blue transition-colors">Join HDT</Link>
            <Link to="/login" className="hover:text-brand-blue transition-colors">Sign In</Link>

            {/* Start Packing Dropdown */}
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
                  <a
                    href="https://forgehq.app/f/?s=20bejr4j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-gray-50 transition-colors"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', fontSize: '14px', color: '#1F2937', textDecoration: 'none', fontWeight: '600', borderBottom: '1px solid #F3F4F6' }}
                  >
                    🗺️ Drop Your Trip Wishlist
                  </a>
                  <a
                    href="https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK"
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

      {/* Mailing List Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: 'white', borderRadius: '16px', maxWidth: '480px', width: '100%', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
          >
            {/* Modal Header */}
            <div style={{ backgroundColor: '#007298', padding: '28px 28px 20px', position: 'relative' }}>
              <button
                onClick={() => setModalOpen(false)}
                style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontSize: '20px', lineHeight: 1 }}
                aria-label="Close"
              >
                ✕
              </button>
              <p style={{ color: '#F59E0B', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px 0' }}>Happy Detour Travel</p>
              <h2 style={{ color: 'white', fontSize: '22px', fontWeight: '700', margin: '0 0 8px 0', lineHeight: '1.3' }}>
                Good travel tips. No spam.
              </h2>
              <p style={{ color: '#BAE6FD', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                Get first dibs on cruise deals, resort updates, and honest travel tips from someone actually in your corner.
              </p>
            </div>

            {/* Embedded MailerLite Form */}
            <div style={{ padding: '24px 28px 28px' }}>
              <iframe
                src="https://preview.mailerlite.io/forms/2458736/190757326102202283/share"
                style={{ width: '100%', height: '300px', border: 'none', borderRadius: '8px' }}
                title="Join the Happy Detour Travel mailing list"
              />
              <p style={{ color: '#9CA3AF', fontSize: '11px', textAlign: 'center', margin: '12px 0 0 0' }}>
                No selling your info. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
