import { useState, useEffect, useRef } from 'react'

const featuredDeals = [
  { tag: "VIRGIN VOYAGES", title: "Caribbean Escape — Bahamas & Key West", date: "Jan 2027", nights: "4 nights", ship: "Scarlet Lady · Miami", originalPrice: "$699", salePrice: "$549", link: "/cruises/bahamas-key-west" },
  { tag: "VIRGIN VOYAGES", title: "Eastern Caribbean & Bimini Beach Club", date: "Mar 2027", nights: "7 nights", ship: "Resilient Lady · Miami", originalPrice: "$1,399", salePrice: "$1,099", link: "/cruises/eastern-caribbean-bimini" },
  { tag: "VIRGIN VOYAGES", title: "French Riviera, Spain & Ibiza Overnight", date: "Jun 2027", nights: "7 nights", ship: "Resilient Lady · Barcelona", originalPrice: "$1,801", salePrice: "$1,253", link: "/cruises/french-riviera-ibiza" },
  { tag: "VIRGIN VOYAGES", title: "Miami to Morocco & Spain Transatlantic", date: "Apr 2027", nights: "14 nights", ship: "Scarlet Lady · Miami", originalPrice: "$1,818", salePrice: "$1,246", link: "/cruises/miami-morocco-transatlantic" },
  { tag: "VIRGIN VOYAGES", title: "Alaska: Hubbard Glacier & Coastal Views", date: "Aug 2027", nights: "9 nights", ship: "Brilliant Lady · Seattle", originalPrice: "$1,597", salePrice: "$1,161", link: "/cruises/alaska-hubbard-glacier" },
]

const cruiseLines = [
  { name: "Virgin Voyages", tagline: "Adults only. All included.", desc: "No kids, no nickel and diming. Every restaurant included, gratuities covered. Eric is First Mate certified.", live: true, link: "/cruises/virgin-voyages" },
  { name: "Norwegian (NCL)", tagline: "Freedom to do what you want.", desc: "NCL invented Freestyle Cruising. No set dining times, great group pricing.", live: true, link: "/cruises/norwegian" },
  { name: "MSC Cruises", tagline: "European elegance at a real price.", desc: "One of the most underrated lines out there. Beautiful ships and a Mediterranean style that feels different.", live: true, link: "/cruises/msc" },
  { name: "Royal Caribbean", tagline: "Big ships. Big fun.", desc: "Rock climbing walls, surf simulators, Broadway shows. If someone wants everything, this is where you go.", live: true, link: "/cruises/royal-caribbean" },
  { name: "Carnival Cruise Line", tagline: "Fun for everyone.", desc: "The most popular cruise line in the world for a reason. Great value, nonstop entertainment, and a party atmosphere that is hard to beat.", live: true, link: "/cruises/carnival" },
]

const testimonials = [
  { name: "Lana", location: "Alliance, OH", trip: "MSC Cruise — Galveston", quote: "I had no idea where to start and Eric made the whole thing easy. Booked my MSC cruise out of Galveston and had such a great time I am already booked on Virgin Voyages for February 2027. He is the only person I will call for travel from here on out." },
  { name: "JB", location: "Los Angeles, CA", trip: "Virgin Voyages Alaska — Brilliant Lady", quote: "First cruise ever and Eric walked me through everything. Booked my Alaska sailing on Brilliant Lady for June 2027 and the whole process was so easy I could not believe it. Cannot wait to sail." },
]

export default function Home() {
  const [dealIndex, setDealIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const deal = featuredDeals[dealIndex]

  useEffect(() => {
    const timer = setInterval(() => {
      setDealIndex((prev) => (prev + 1) % featuredDeals.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let animFrame: number
    let pos = 0
    const speed = 0.5
    const step = () => {
      pos += speed
      if (pos >= el.scrollWidth / 2) pos = 0
      el.scrollLeft = pos
      animFrame = requestAnimationFrame(step)
    }
    animFrame = requestAnimationFrame(step)
    const pause = () => cancelAnimationFrame(animFrame)
    const resume = () => { animFrame = requestAnimationFrame(step) }
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    return () => {
      cancelAnimationFrame(animFrame)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
    }
  }, [])

  const doubled = [...testimonials, ...testimonials]

  return (
    <main>

      {/* Hero */}
      <div style={{ position: 'relative', minHeight: '520px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/hero-image.webp')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.38)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,114,152,0.80) 0%, rgba(0,0,0,0.15) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '64px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', minHeight: '520px', flexWrap: 'wrap' }}>

          <div style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}>
            <h1 style={{ color: 'white', fontSize: '46px', fontWeight: '800', lineHeight: '1.15', margin: '0 0 16px 0' }}>
              Real trips. Real value. Someone actually in your corner.
            </h1>
            <p style={{ color: '#F59E0B', fontSize: '20px', fontWeight: '700', margin: '0 0 16px 0' }}>
              Vacations Planned Without The Overwhelming Complications
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '1.7', margin: '0 0 32px 0', maxWidth: '480px' }}>
              Our founder Eric helps you skip the corporate fluff and endless hold music. As the head of Happy Detour Travel, he cuts through the noise to build your perfect cruise or all-inclusive resort getaway, proving that sometimes the best journeys begin with a Happy Detour.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/join" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '13px 26px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
                Join HDT
              </a>
              <a href="#cruise-lines" style={{ border: '2px solid rgba(255,255,255,0.5)', color: 'white', padding: '13px 26px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
                View Cruises
              </a>
            </div>
          </div>

          <div style={{ width: '320px', flexShrink: 0 }}>
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
                <a href={deal.link} style={{ display: 'block', textAlign: 'center', backgroundColor: '#007298', color: 'white', padding: '11px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>Get This Deal</a>
                <p style={{ color: '#9CA3AF', fontSize: '11px', textAlign: 'center', margin: '10px 0 0 0', lineHeight: '1.5' }}>Prices are estimates. Contact Eric for current availability.</p>
              </div>
              <div style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', borderTop: '1px solid #F3F4F6' }}>
                {featuredDeals.map((_, i) => (
                  <button key={i} onClick={() => setDealIndex(i)} style={{ width: i === dealIndex ? '20px' : '8px', height: '8px', borderRadius: '4px', backgroundColor: i === dealIndex ? '#007298' : '#D1D5DB', border: 'none', cursor: 'pointer', padding: 0 }} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Cruise Lines */}
      <div id="cruise-lines" style={{ backgroundColor: '#F3F4F6', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Where We Specialize</p>
            <h2 style={{ color: '#1F2937', fontSize: '36px', fontWeight: '800', margin: 0 }}>Take a look at our cruise offerings</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }}>
            {cruiseLines.map((line) => (
              <div key={line.name} style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
                {!line.live && (
                  <div style={{ position: 'absolute', top: '18px', right: '-28px', backgroundColor: '#DC2626', color: 'white', fontSize: '11px', fontWeight: '700', padding: '4px 36px', transform: 'rotate(45deg)', zIndex: 10, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Coming Soon
                  </div>
                )}
                <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', gap: '12px', opacity: line.live ? 1 : 0.6, height: '100%' }}>
                  <h3 style={{ color: '#1F2937', fontWeight: '700', fontSize: '18px', margin: '0 0 4px 0' }}>{line.name}</h3>
                  <p style={{ color: '#007298', fontSize: '14px', fontWeight: '600', margin: 0 }}>{line.tagline}</p>
                  <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{line.desc}</p>
                  {line.live && <a href={line.link} style={{ color: '#007298', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>Learn More</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All-Inclusive Resorts */}
      <div style={{ backgroundColor: '#FFFBF0', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>All-Inclusive Resorts</p>
            <h2 style={{ color: '#1F2937', fontSize: '36px', fontWeight: '800', margin: 0 }}>Beaches and Sandals — the best in all-inclusive</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ color: '#1F2937', fontWeight: '700', fontSize: '18px', margin: '0 0 4px 0' }}>Sandals Resorts</h3>
              <p style={{ color: '#007298', fontSize: '14px', fontWeight: '600', margin: 0 }}>Luxury. Couples only. Truly all-inclusive.</p>
              <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>The gold standard for couples getaways. Unlimited premium drinks, gourmet dining, water sports, and accommodations that actually live up to the photos.</p>
              <a href="/resorts/sandals" style={{ color: '#007298', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>Learn More</a>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ color: '#1F2937', fontWeight: '700', fontSize: '18px', margin: '0 0 4px 0' }}>Beaches Resorts</h3>
              <p style={{ color: '#007298', fontSize: '14px', fontWeight: '600', margin: 0 }}>Family all-inclusive done right.</p>
              <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>Everything Sandals does for couples, Beaches does for families. Kids clubs, water parks, unlimited food and drinks, and a resort where everyone actually has a great time.</p>
              <a href="/resorts/beaches" style={{ color: '#007298', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#F9FAFB', padding: '80px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px', padding: '0 24px' }}>
          <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>What People Say</p>
          <h2 style={{ color: '#1F2937', fontSize: '36px', fontWeight: '800', margin: 0 }}>Real people. Real trips. No surprises.</h2>
        </div>
        <div
          ref={scrollRef}
          style={{ display: 'flex', overflowX: 'hidden', gap: '20px', padding: '0 24px', cursor: 'grab', userSelect: 'none' }}
        >
          {doubled.map((t, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #E5E7EB', minWidth: '300px', maxWidth: '300px', flexShrink: 0 }}>
              <p style={{ color: '#1F2937', fontSize: '14px', lineHeight: '1.7', fontStyle: 'italic', margin: '0 0 16px 0' }}>"{t.quote}"</p>
              <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '16px' }}>
                <p style={{ color: '#1F2937', fontWeight: '600', fontSize: '14px', margin: '0 0 2px 0' }}>{t.name}</p>
                <p style={{ color: '#9CA3AF', fontSize: '11px', margin: '0 0 2px 0' }}>{t.location}</p>
                <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>{t.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ borderTop: '1px solid #E5E7EB', padding: '64px 24px', textAlign: 'center' }}>
        <h2 style={{ color: '#1F2937', fontSize: '32px', fontWeight: '800', margin: '0 0 16px 0' }}>Ready to start planning?</h2>
        <p style={{ color: '#6B7280', fontSize: '16px', maxWidth: '480px', margin: '0 auto 32px auto', lineHeight: '1.6' }}>
          Reach out and let's figure out the right trip for you. No pressure, no surprises.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="sms:7473338687" style={{ backgroundColor: '#007298', color: 'white', padding: '13px 26px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Text Eric</a>
          <a href="mailto:eric@happydetour.com" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '13px 26px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Email Eric</a>
        </div>
      </div>

    </main>
  )
}
