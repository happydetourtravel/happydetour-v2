import { useState, useEffect } from 'react'

const featuredDeals = [
  { tag: "VIRGIN VOYAGES", title: "Caribbean Escape — Bahamas & Key West", date: "Jan 2027", nights: "4 nights", ship: "Scarlet Lady · Miami", originalPrice: "$699", salePrice: "$549", link: "/cruises/bahamas-key-west" },
  { tag: "VIRGIN VOYAGES", title: "Eastern Caribbean & Bimini Beach Club", date: "Mar 2027", nights: "7 nights", ship: "Resilient Lady · Miami", originalPrice: "$1,399", salePrice: "$1,099", link: "/cruises/eastern-caribbean-bimini" },
  { tag: "VIRGIN VOYAGES", title: "French Riviera, Spain & Ibiza Overnight", date: "Jun 2027", nights: "7 nights", ship: "Resilient Lady · Barcelona", originalPrice: "$1,801", salePrice: "$1,253", link: "/cruises/french-riviera-ibiza" },
  { tag: "VIRGIN VOYAGES", title: "Miami to Morocco & Spain Transatlantic", date: "Apr 2027", nights: "14 nights", ship: "Scarlet Lady · Miami", originalPrice: "$1,818", salePrice: "$1,246", link: "/cruises/miami-morocco-transatlantic" },
  { tag: "VIRGIN VOYAGES", title: "Alaska: Hubbard Glacier & Coastal Views", date: "Aug 2027", nights: "9 nights", ship: "Brilliant Lady · Seattle", originalPrice: "$1,597", salePrice: "$1,161", link: "/cruises/alaska-hubbard-glacier" },
]

const linkStyle = { color: '#F59E0B', textDecoration: 'none', fontWeight: '700' }

const cruiseLines = [
  {
    name: "Virgin Voyages",
    tagline: (
      <>
        <a href="https://www.virginvoyages.com/virgin-cruises-101" target="_blank" rel="noopener noreferrer" style={linkStyle}>A</a>dults only. All included.
      </>
    ),
    desc: "No kids, no nickel and diming. Every restaurant included, gratuities covered. Eric is First Mate certified.",
    live: true,
    link: "/cruises/virgin-voyages",
    cta: "View Virgin Voyages Cruises"
  },
  {
    name: "Norwegian (NCL)",
    tagline: (
      <>
        <a href="https://www.ncl.com/cruise-ships" target="_blank" rel="noopener noreferrer" style={linkStyle}>F</a>reedom to do what you want.
      </>
    ),
    desc: "NCL invented Freestyle Cruising. No set dining times, great group pricing.",
    live: true,
    link: "/cruises/norwegian",
    cta: "Explore NCL Sailings"
  },
  {
    name: "MSC Cruises",
    tagline: (
      <>
        <a href="https://www.msccruisesusa.com/about" target="_blank" rel="noopener noreferrer" style={linkStyle}>E</a>uropean elegance at a real price.
      </>
    ),
    desc: "One of the most underrated lines out there. Beautiful ships and a Mediterranean style that feels different.",
    live: true,
    link: "/cruises/msc",
    cta: "Explore MSC Cruises"
  },
  {
    name: "Royal Caribbean",
    tagline: (
      <>
        Big shi<a href="https://www.royalcaribbean.com/cruise-ships" target="_blank" rel="noopener noreferrer" style={linkStyle}>p</a>s. Big fun.
      </>
    ),
    desc: "Rock climbing walls, surf simulators, Broadway shows. If someone wants everything, this is where you go.",
    live: true,
    link: "/cruises/royal-caribbean",
    cta: "See Royal Caribbean Ships"
  },
  {
    name: "Carnival Cruise Line",
    tagline: (
      <>
        Fun for everyon<a href="https://www.carnival.com/cruise-ships" target="_blank" rel="noopener noreferrer" style={linkStyle}>e</a>.
      </>
    ),
    desc: "The most popular cruise line in the world for a reason. Great value, nonstop entertainment, and a party atmosphere that is hard to beat.",
    live: true,
    link: "/cruises/carnival",
    cta: "View Carnival Sailings"
  },
]

const testimonials = [
  { name: "Lana", location: "Northeast Ohio", trip: "MSC Cruise — Galveston", quote: "I had no idea where to even start. Eric made the whole thing so easy I could not believe it. Booked my MSC cruise out of Galveston and had the best time. Already booked on Virgin Voyages, Sister at Sea for February 2027. He is literally the only person I will ever call for travel." },
  { name: "JB", location: "Los Angeles, CA", trip: "Carnival Sensation — Grand Cayman & Ocho Rios", quote: "First cruise ever and honestly I was nervous. Eric just walked me through everything, no pressure, no confusion. The whole thing was way easier than I expected. Already looking at my next one." },
  { name: "Jason P.", location: "", trip: "NCL Star — Great Stirrup Cay", quote: "Thanks to Eric, my first cruise was extremely easy. Eric made all the arrangements from flying to overnight hotel stay and to getting right onto the cruise ship. It was so easy I now have my next cruise planned again from Eric. Thanks Eric." },
]

export default function Home() {
  const [dealIndex, setDealIndex] = useState(0)
  const deal = featuredDeals[dealIndex]

  useEffect(() => {
    const timer = setInterval(() => {
      setDealIndex((prev) => (prev + 1) % featuredDeals.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main>

      {/* Hero */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="/hero-image.webp"
          alt=""
          fetchPriority="high"
          width="1600"
          height="900"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.38)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,114,152,0.80) 0%, rgba(0,0,0,0.15) 100%)' }} />
        <div style={{
          position: 'relative',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '48px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          flexDirection: 'column',
        }}
          className="hero-inner"
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <h1 style={{ color: 'white', fontSize: 'clamp(28px, 6vw, 46px)', fontWeight: '800', lineHeight: '1.15', margin: '0 0 16px 0' }}>
              Real trips. Real value. Someone actually in your corner.
            </h1>
            <p style={{ color: '#F59E0B', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: '700', margin: '0 0 16px 0' }}>
              Vacations Planned Without The Overwhelming Complications
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '1.7', margin: '0 0 28px 0', maxWidth: '480px' }}>
              Our founder Eric helps you skip the corporate fluff and endless hold music. As the head of Happy Detour Travel, he cuts through the noise to build your perfect cruise or all-inclusive resort getaway in 2026 and 2027, proving that sometimes the best journeys begin with a Happy Detour.
            </p>
          </div>

          {/* Deal Card */}
          <div style={{ width: '100%', maxWidth: '380px' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.25)' }}>
              <div style={{ backgroundColor: '#1F2937', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#F59E0B', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>Featured Deal</span>
                <span style={{ color: '#9CA3AF', fontSize: '11px' }}>{dealIndex + 1} of {featuredDeals.length} deals</span>
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px' }}>{deal.tag}</span>
                <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '700', margin: '10px 0 6px 0', lineHeight: '1.3' }}>{deal.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '13px', margin: '0 0 16px 0' }}>{deal.date} · {deal.nights} · {deal.ship}</p>
                <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '16px', marginBottom: '16px' }}>
                  <p style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 4px 0' }}>Starting From</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'line-through' }}>{deal.originalPrice}</span>
                    <span style={{ color: '#1F2937', fontSize: '28px', fontWeight: '800' }}>{deal.salePrice}</span>
                    <span style={{ color: '#6B7280', fontSize: '12px' }}>/person</span>
                  </div>
                </div>
                <a href={deal.link} aria-label={`Get this deal: ${deal.title}`} style={{ display: 'block', textAlign: 'center', backgroundColor: '#007298', color: 'white', padding: '11px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>Get This Deal</a>
                <p style={{ color: '#9CA3AF', fontSize: '11px', textAlign: 'center', margin: '10px 0 0 0', lineHeight: '1.5' }}>Prices are estimates. Contact Eric for current availability.</p>
                <p style={{ color: '#D1D5DB', fontSize: '10px', textAlign: 'center', margin: '4px 0 0 0' }}>Updated June 2026</p>
              </div>
              <div style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', borderTop: '1px solid #F3F4F6' }}>
                {featuredDeals.map((_, i) => (
                  <button key={i} onClick={() => setDealIndex(i)} aria-label={`View deal ${i + 1} of ${featuredDeals.length}`} style={{ width: i === dealIndex ? '20px' : '8px', height: '8px', borderRadius: '4px', backgroundColor: i === dealIndex ? '#007298' : '#D1D5DB', border: 'none', cursor: 'pointer', padding: 0 }} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Responsive hero layout */}
      <style>{`
        @media (min-width: 768px) {
          .hero-inner {
            flex-direction: row !important;
            padding: 64px 24px !important;
            min-height: 520px;
          }
        }
      `}</style>

      {/* Cruise Lines */}
      <div id="cruise-lines" style={{ backgroundColor: '#F3F4F6', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Where We Specialize</p>
            <h2 style={{ color: '#1F2937', fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: '800', margin: 0 }}>Take a look at our cruise offerings</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {cruiseLines.map((line) => (
              <div key={line.name} style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
                {!line.live && (
                  <div style={{ position: 'absolute', top: '18px', right: '-28px', backgroundColor: '#DC2626', color: 'white', fontSize: '11px', fontWeight: '700', padding: '4px 36px', transform: 'rotate(45deg)', zIndex: 10, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Coming Soon
                  </div>
                )}
                <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', gap: '12px', opacity: line.live ? 1 : 0.6, height: '100%', boxSizing: 'border-box' }}>
                  <h3 style={{ color: '#1F2937', fontWeight: '700', fontSize: '18px', margin: '0 0 4px 0' }}>{line.name}</h3>
                  <p style={{ color: '#F59E0B', fontSize: '14px', fontWeight: '600', margin: 0 }}>{line.tagline}</p>
                  <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{line.desc}</p>
                  {line.live && <a href={line.link} style={{ color: '#007298', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>{line.cta}</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All-Inclusive Resorts */}
      <div style={{ backgroundColor: '#FFFBF0', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>All Inclusive Vacations</p>
            <h2 style={{ color: '#1F2937', fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: '800', margin: 0 }}>Experience premium luxury with Sandals and Beaches</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ color: '#1F2937', fontWeight: '700', fontSize: '18px', margin: '0 0 4px 0' }}>Sandals Resorts</h3>
              <p style={{ color: '#F59E0B', fontSize: '14px', fontWeight: '600', margin: 0 }}>
                Luxury. Couples only. Truly all<a href="https://www.sandals.com/weddings/inquiry/" target="_blank" rel="noopener noreferrer" style={linkStyle}>-</a>inclusive.
              </p>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>The gold standard for couples getaways. Unlimited premium drinks, gourmet dining, water sports, and accommodations that actually live up to the photos.</p>
              <a href="/resorts/sandals" style={{ color: '#007298', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>Explore Sandals Resorts</a>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ color: '#1F2937', fontWeight: '700', fontSize: '18px', margin: '0 0 4px 0' }}>Beaches Resorts</h3>
              <p style={{ color: '#F59E0B', fontSize: '14px', fontWeight: '600', margin: 0 }}>
                Family all<a href="https://www.beaches.com/weddings/test-drive/" target="_blank" rel="noopener noreferrer" style={linkStyle}>-</a>inclusive done right.
              </p>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>Everything Sandals does for couples, Beaches does for families. Kids clubs, water parks, unlimited food and drinks, and a resort where everyone actually has a great time.</p>
              <a href="/resorts/beaches" style={{ color: '#007298', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>View Beaches Resort Packages</a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ backgroundColor: '#F9FAFB', padding: '60px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>What People Say</p>
          <h2 style={{ color: '#1F2937', fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: '800', margin: 0 }}>Real people. Real trips. No surprises.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #E5E7EB' }}>
              <p style={{ color: '#1F2937', fontSize: '14px', lineHeight: '1.7', fontStyle: 'italic', margin: '0 0 16px 0' }}>"{t.quote}"</p>
              <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '16px' }}>
                <p style={{ color: '#1F2937', fontWeight: '600', fontSize: '14px', margin: '0 0 2px 0' }}>{t.name}</p>
                {t.location && <p style={{ color: '#9CA3AF', fontSize: '11px', margin: '0 0 2px 0' }}>{t.location}</p>}
                <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>{t.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ padding: '48px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: '#F59E0B', borderRadius: '20px', padding: '48px 24px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>What Are You Waiting For?</p>
          <h2 style={{ color: 'white', fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: '800', margin: '0 0 12px 0', lineHeight: '1.2' }}>Stop scrolling, start packing.</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', margin: '0 0 28px 0' }}>Let's find your happy detour.</p>
          <a
            href="https://forgehq.app/f/?s=20bejr4j"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Start planning your trip with Happy Detour Travel"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'white', color: '#D97706', padding: '14px 28px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}
          >
            ✈ Start Planning My Trip
          </a>
        </div>
      </div>

    </main>
  )
}
