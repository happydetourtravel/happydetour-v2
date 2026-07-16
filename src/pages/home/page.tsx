import { useState, useEffect } from 'react'

const featuredDeals = [
  { tag: "VIRGIN VOYAGES", title: "Caribbean Escape — Bahamas & Key West", date: "Jan 2027", nights: "4 nights", ship: "Scarlet Lady · Miami", originalPrice: "$699", salePrice: "$549", link: "/cruises/bahamas-key-west" },
  { tag: "VIRGIN VOYAGES", title: "Eastern Caribbean & Bimini Beach Club", date: "Mar 2027", nights: "7 nights", ship: "Resilient Lady · Miami", originalPrice: "$1,399", salePrice: "$1,099", link: "/cruises/eastern-caribbean-bimini" },
  { tag: "VIRGIN VOYAGES", title: "French Riviera, Spain & Ibiza Overnight", date: "Jun 2027", nights: "7 nights", ship: "Resilient Lady · Barcelona", originalPrice: "$1,801", salePrice: "$1,253", link: "/cruises/french-riviera-ibiza" },
  { tag: "VIRGIN VOYAGES", title: "Miami to Morocco & Spain Transatlantic", date: "Apr 2027", nights: "14 nights", ship: "Scarlet Lady · Miami", originalPrice: "$1,818", salePrice: "$1,246", link: "/cruises/miami-morocco-transatlantic" },
  { tag: "VIRGIN VOYAGES", title: "Alaska: Hubbard Glacier & Coastal Views", date: "Aug 2027", nights: "9 nights", ship: "Brilliant Lady · Seattle", originalPrice: "$1,597", salePrice: "$1,161", link: "/cruises/alaska-hubbard-glacier" },
]

// Other lines Eric also books — kept small and quiet, well below the Virgin content
const otherLines = [
  {
    name: "Norwegian (NCL)",
    tagline: "Freedom to do what you want.",
    link: "/cruises/norwegian", cta: "Explore NCL Sailings"
  },
  {
    name: "MSC Cruises",
    tagline: "European elegance at a real price.",
    link: "/cruises/msc", cta: "Explore MSC Cruises"
  },
  {
    name: "Royal Caribbean",
    tagline: "Big ships. Big fun.",
    link: "/cruises/royal-caribbean", cta: "See Royal Caribbean Ships"
  },
  {
    name: "Carnival Cruise Line",
    tagline: "Fun for everyone.",
    link: "/cruises/carnival", cta: "View Carnival Sailings"
  },
]

const testimonials = [
  { name: "Lana", location: "Northeast Ohio", trip: "MSC Cruise — Galveston", quote: "I had no idea where to even start. Eric made the whole thing so easy I could not believe it. Booked my MSC cruise out of Galveston and had the best time. Already booked on Virgin Voyages, Sister at Sea for February 2027. He is literally the only person I will ever call for travel." },
  { name: "JB", location: "Los Angeles, CA", trip: "Carnival Sensation — Grand Cayman & Ocho Rios", quote: "First cruise ever and honestly I was nervous. Eric just walked me through everything, no pressure, no confusion. The whole thing was way easier than I expected. Already looking at my next one." },
  { name: "Jason P.", location: "", trip: "NCL Star — Great Stirrup Cay", quote: "Thanks to Eric, my first cruise was extremely easy. Eric made all the arrangements from flying to overnight hotel stay and to getting right onto the cruise ship. It was so easy I now have my next cruise planned again from Eric. Thanks Eric." },
]

// Virgin selling points, straight from Eric's training/seminar notes
const virginPoints = [
  { label: "All restaurants included", desc: "No buffets, no upcharge dining" },
  { label: "Unlimited WiFi", desc: "Stay connected the whole trip, no extra fee" },
  { label: "Fitness classes included", desc: "Yoga and more, no extra charge" },
  { label: "No planning fee", desc: "Book direct, Eric still looks after everything" },
]

export default function Home() {
  const [dealIndex, setDealIndex] = useState(0)
  const [ericDropdownOpen, setEricDropdownOpen] = useState(false)
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
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '48px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexDirection: 'column' }} className="hero-inner">
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <h1 style={{ color: 'white', fontSize: 'clamp(28px, 6vw, 46px)', fontWeight: '800', lineHeight: '1.15', margin: '0 0 16px 0' }}>
              Real trips. Real value. Someone actually in your corner.
            </h1>
            <p style={{ color: '#F59E0B', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: '700', margin: '0 0 16px 0' }}>
              Vacations Planned Without The Overwhelming Complications
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '1.7', margin: '0 0 12px 0', maxWidth: '480px' }}>
              Our founder Eric helps you skip the corporate fluff and endless hold music. As the head of Happy Detour Travel, he cuts through the noise to build your perfect cruise or all-inclusive resort getaway in 2026 and 2027, proving that sometimes the best journeys begin with a Happy Detour.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', margin: '0 0 28px 0' }}>
              Also booking NCL, MSC, Royal Caribbean, Carnival, Sandals &amp; Beaches
            </p>
          </div>

          {/* Deal Card */}
          <div style={{ width: '100%', maxWidth: '380px' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.25)' }}>
              <div style={{ backgroundColor: '#1F2937', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#F59E0B', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>Featured Virgin Voyages Deal</span>
                <span style={{ color: '#9CA3AF', fontSize: '11px' }}>{dealIndex + 1} of {featuredDeals.length}</span>
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

      <style>{`
        @media (min-width: 768px) {
          .hero-inner { flex-direction: row !important; padding: 64px 24px !important; min-height: 520px; }
          .group-card-inner { flex-direction: row !important; }
          .group-card-image { width: 210px !important; height: auto !important; min-height: 100%; }
          .group-card-pricing { border-top: none !important; border-left: 1px solid #F3F4F6; }
          .why-eric-inner { flex-direction: row !important; }
          .why-virgin-inner { flex-direction: row !important; }
        }
      `}</style>

      {/* Why Book With Eric */}
      <div style={{ backgroundColor: '#F9FAFB', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', textAlign: 'center' }}>Why Book With Eric</p>
          <h2 style={{ color: '#1F2937', fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: '800', margin: '0 0 32px 0', textAlign: 'center' }}>Not just booked. Looked after.</h2>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }} className="why-eric-inner">
            <div style={{ flex: '0 0 140px', textAlign: 'center', margin: '0 auto' }}>
              <img
                src="/eric-headshot.jpeg"
                alt="Eric Carney, founder of Happy Detour Travel"
                style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px auto', display: 'block' }}
              />
              <p style={{ color: '#1F2937', fontWeight: '700', fontSize: '15px', margin: 0 }}>Eric Carney</p>
              <p style={{ color: '#6B7280', fontSize: '12px', margin: '2px 0 0 0' }}>Founder, Happy Detour Travel</p>
            </div>

            <div style={{ flex: '1', minWidth: '280px' }}>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.7', margin: '0 0 20px 0' }}>
                Anyone can book a trip. I am the one who answers the phone when things do not go as planned. I have sailed over 20 cruises myself, so when I recommend a ship or a resort, it comes from actually being there, not a brochure.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div style={{ backgroundColor: 'white', border: '1px solid #F3F4F6', borderRadius: '12px', padding: '16px' }}>
                  <p style={{ color: '#007298', fontWeight: '700', fontSize: '14px', margin: '0 0 4px 0' }}>20+ cruises, 100+ nights at sea</p>
                  <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>Real experience, not just a booking screen</p>
                </div>
                <div style={{ backgroundColor: 'white', border: '1px solid #F3F4F6', borderRadius: '12px', padding: '16px' }}>
                  <p style={{ color: '#007298', fontWeight: '700', fontSize: '14px', margin: '0 0 4px 0' }}>Virgin Voyages First Mate, Gold Tier</p>
                  <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>Also certified across NCL, Royal Caribbean, MSC</p>
                </div>
                <div style={{ backgroundColor: 'white', border: '1px solid #F3F4F6', borderRadius: '12px', padding: '16px' }}>
                  <p style={{ color: '#007298', fontWeight: '700', fontSize: '14px', margin: '0 0 4px 0' }}>No surprises, no pressure</p>
                  <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>Whichever way you book</p>
                </div>
                <div style={{ backgroundColor: 'white', border: '1px solid #F3F4F6', borderRadius: '12px', padding: '16px' }}>
                  <p style={{ color: '#007298', fontWeight: '700', fontSize: '14px', margin: '0 0 4px 0' }}>Here when something goes wrong</p>
                  <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>A real person, not a hold line</p>
                </div>
              </div>

              <div style={{ position: 'relative', marginTop: '24px', display: 'inline-block' }}>
                <button
                  onClick={() => setEricDropdownOpen(!ericDropdownOpen)}
                  onBlur={() => setTimeout(() => setEricDropdownOpen(false), 150)}
                  style={{ backgroundColor: '#F59E0B', color: 'white', padding: '12px 24px', borderRadius: '100px', border: 'none', cursor: 'pointer', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  Text or Email Eric
                  <span style={{ fontSize: '10px' }}>▼</span>
                </button>
                {ericDropdownOpen && (
                  <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', border: '1px solid #F3F4F6', minWidth: '200px', zIndex: 100, overflow: 'hidden' }}>
                    <a
                      href="sms:7473338687"
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', fontSize: '14px', color: '#1F2937', textDecoration: 'none', fontWeight: '600', borderBottom: '1px solid #F3F4F6' }}
                    >
                      📱 Text Eric
                    </a>
                    <a
                      href="mailto:eric@happydetour.com"
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', fontSize: '14px', color: '#1F2937', textDecoration: 'none', fontWeight: '600' }}
                    >
                      ✉️ Email Eric
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ WHY VIRGIN VOYAGES — the new headline section ============ */}
      <div id="virgin-voyages" style={{ backgroundColor: '#007298', padding: '64px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }} className="why-virgin-inner">

            <div style={{ flex: '1', minWidth: '280px' }}>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#F59E0B', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', padding: '4px 12px', borderRadius: '100px', textTransform: 'uppercase' }}>Our Specialty</span>
              <h2 style={{ color: 'white', fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: '800', margin: '14px 0 10px 0' }}>Virgin Voyages is what we do best.</h2>
              <p style={{ color: '#F59E0B', fontSize: '15px', fontWeight: '600', margin: '0 0 16px 0' }}>Voted best cruise line in the world, 2023 to 2026.</p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: '1.7', margin: '0 0 24px 0' }}>
                No nickel and diming, everything that matters is already included. Eric is First Mate Gold certified and can search live sailings and book you directly, with no planning fee.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '28px' }}>
                {virginPoints.map((p) => (
                  <div key={p.label} style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '14px' }}>
                    <p style={{ color: 'white', fontWeight: '700', fontSize: '13px', margin: '0 0 3px 0' }}>{p.label}</p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', margin: 0 }}>{p.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href="https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: '#F59E0B', color: 'white', textAlign: 'center', padding: '13px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}
                >
                  Search &amp; Book Virgin Voyages
                </a>
                <a
                  href="sms:7473338687"
                  style={{ backgroundColor: 'transparent', color: 'white', textAlign: 'center', padding: '13px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px', border: '1px solid rgba(255,255,255,0.4)' }}
                >
                  Reach Out With Questions
                </a>
              </div>
            </div>

            <div style={{ flex: '0 0 200px', textAlign: 'center', margin: '0 auto' }}>
              <img
                src="/firstmate-gold.png"
                alt="Virgin Voyages First Mate Gold Tier badge"
                style={{ width: '160px', height: 'auto', margin: '0 auto', display: 'block' }}
              />
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginTop: '10px' }}>First Mate, Gold Tier</p>
            </div>

          </div>
        </div>
      </div>

      {/* Also Booking These Lines — plain text links, no tiles, stays out of Virgin's way */}
      <div id="cruise-lines" style={{ backgroundColor: '#F3F4F6', padding: '32px 20px', textAlign: 'center' }}>
        <p style={{ color: '#6B7280', fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Also Booking</p>
        <p style={{ color: '#6B7280', fontSize: '13px', margin: '0 0 14px 0' }}>If Virgin is not the right fit, we've got you covered too.</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '14px', fontWeight: '600' }}>
          {otherLines.map((line, i) => (
            <span key={line.name} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a href={line.link} style={{ color: '#007298', textDecoration: 'none' }}>{line.name}</a>
              {i < otherLines.length - 1 && <span style={{ color: '#D1D5DB' }}>&middot;</span>}
            </span>
          ))}
        </div>
      </div>

      {/* All-Inclusive Resorts */}
      <div style={{ backgroundColor: '#FFFBF0', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>All Inclusive Vacations</p>
            <h2 style={{ color: '#1F2937', fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: '800', margin: 0 }}>Cruise not your thing? Let's find your sunset.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ color: '#1F2937', fontWeight: '700', fontSize: '18px', margin: '0 0 4px 0' }}>Sandals Resorts</h3>
              <p style={{ color: '#F59E0B', fontSize: '14px', fontWeight: '600', margin: 0 }}>Luxury. Couples only. Truly all-inclusive.</p>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>The gold standard for couples getaways. Unlimited premium drinks, gourmet dining, water sports, and accommodations that actually live up to the photos.</p>
              <a href="/resorts/sandals" style={{ color: '#007298', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>Explore Sandals Resorts</a>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ color: '#1F2937', fontWeight: '700', fontSize: '18px', margin: '0 0 4px 0' }}>Beaches Resorts</h3>
              <p style={{ color: '#F59E0B', fontSize: '14px', fontWeight: '600', margin: 0 }}>Family all-inclusive done right.</p>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>Everything Sandals does for couples, Beaches does for families. Kids clubs, water parks, unlimited food and drinks, and a resort where everyone actually has a great time.</p>
              <a href="/resorts/beaches" style={{ color: '#007298', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>View Beaches Resort Packages</a>
            </div>
          </div>
        </div>
      </div>

      {/* Group Cruise — Virgin sailings shown first */}
      <div style={{ backgroundColor: '#F3F4F6', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Group Sailings</p>
            <h2 style={{ color: '#1F2937', fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: '800', margin: '0 0 16px 0' }}>Locked in early. Priced to move.</h2>
            <p style={{ color: '#374151', fontSize: '15px', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}>
              These are promotional sailings I book directly with the cruise line before prices go up. I hold a block of cabins on each one, usually 10 inside, 4 balcony, and 2 ocean view, so I can offer a better rate than booking on your own. Space is limited, so it is smart to grab your spot early. I can also help with airfare and a hotel stay before or after the cruise if you need one.
            </p>
          </div>

          {/* Card 1 — Virgin Voyages Alaska (Jun 2027) */}
          <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden', maxWidth: '900px', margin: '0 auto 16px auto', display: 'flex', flexDirection: 'column' }} className="group-card-inner">
            <div style={{ position: 'relative', flexShrink: 0, width: '100%', height: '190px', overflow: 'hidden' }} className="group-card-image">
              <img src="/brilliantlady.jpeg" alt="Brilliant Lady cruise ship" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#007298', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>🧑‍✈️ Group Rate</span>
            </div>
            <div style={{ flex: 1, padding: '20px 24px' }}>
              <p style={{ color: '#6B7280', fontSize: '12px', fontWeight: '600', margin: '0 0 6px 0' }}>Alaska</p>
              <h3 style={{ color: '#1F2937', fontSize: '19px', fontWeight: '700', margin: '0 0 5px 0', lineHeight: '1.3' }}>Alaska: Glacial Fjords &amp; Coastal Views</h3>
              <p style={{ color: '#6B7280', fontSize: '13px', margin: '0 0 10px 0' }}>June 17, 2027 &middot; 7 nights &middot; Brilliant Lady &middot; Virgin Voyages</p>
              <p style={{ color: '#007298', fontSize: '13px', margin: '0 0 10px 0', lineHeight: '1.7' }}>Seattle, WA &rarr; Ketchikan, AK &rarr; Sitka, AK &rarr; Tracy Arm Fjord, AK &rarr; Prince Rupert, BC &rarr; Seattle, WA</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>🏔️ Alaska</span>
                <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>✦ Virgin Voyages</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#F9FAFB', padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', minWidth: '210px', flexShrink: 0, borderTop: '1px solid #F3F4F6' }} className="group-card-pricing">
              <p style={{ color: '#6B7280', fontSize: '12px', fontWeight: '600', margin: 0 }}>Sea Terrace from</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <p style={{ color: '#007298', fontSize: '12px', fontWeight: '600', margin: 0 }}>+ Group rate locked in</p>
                <p style={{ color: '#007298', fontSize: '12px', fontWeight: '600', margin: 0 }}>+ 10 cabins available</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ color: '#1F2937', fontSize: '26px', fontWeight: '800' }}>$1,797</span>
                <span style={{ color: '#6B7280', fontSize: '12px' }}>/person</span>
              </div>
              <a href="https://www.happydetour.com/group/alaska-glacial-fjords-2027" style={{ display: 'block', textAlign: 'center', backgroundColor: '#007298', color: 'white', padding: '11px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>View Details &rarr;</a>
            </div>
          </div>

          {/* Card 2 — Virgin Voyages Mexican Riviera Halloween (Oct 2027) */}
          <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden', maxWidth: '900px', margin: '0 auto 16px auto', display: 'flex', flexDirection: 'column' }} className="group-card-inner">
            <div style={{ position: 'relative', flexShrink: 0, width: '100%', height: '190px', overflow: 'hidden' }} className="group-card-image">
              <img src="/brilliantlady.jpeg" alt="Brilliant Lady cruise ship" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#007298', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>🧑‍✈️ Group Rate</span>
            </div>
            <div style={{ flex: 1, padding: '20px 24px' }}>
              <p style={{ color: '#6B7280', fontSize: '12px', fontWeight: '600', margin: '0 0 6px 0' }}>Mexican Riviera</p>
              <h3 style={{ color: '#1F2937', fontSize: '19px', fontWeight: '700', margin: '0 0 5px 0', lineHeight: '1.3' }}>Mexican Riviera Halloween Cruise</h3>
              <p style={{ color: '#6B7280', fontSize: '13px', margin: '0 0 10px 0' }}>October 23, 2027 &middot; 7 nights &middot; Brilliant Lady &middot; Virgin Voyages</p>
              <p style={{ color: '#007298', fontSize: '13px', margin: '0 0 10px 0', lineHeight: '1.7' }}>Los Angeles, CA &rarr; Cabo San Lucas &rarr; Mazatlan &rarr; Puerto Vallarta &rarr; Los Angeles, CA</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>🎃 Halloween Sailing</span>
                <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>✦ Virgin Voyages</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#F9FAFB', padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', minWidth: '210px', flexShrink: 0, borderTop: '1px solid #F3F4F6' }} className="group-card-pricing">
              <p style={{ color: '#6B7280', fontSize: '12px', fontWeight: '600', margin: 0 }}>Sea Terrace from</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <p style={{ color: '#007298', fontSize: '12px', fontWeight: '600', margin: 0 }}>+ Group rate locked in</p>
                <p style={{ color: '#007298', fontSize: '12px', fontWeight: '600', margin: 0 }}>+ 20 cabins available</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ color: '#1F2937', fontSize: '26px', fontWeight: '800' }}>$1,286</span>
                <span style={{ color: '#6B7280', fontSize: '12px' }}>/person</span>
              </div>
              <a href="https://www.happydetour.com/group/baja-halloween-2027" style={{ display: 'block', textAlign: 'center', backgroundColor: '#007298', color: 'white', padding: '11px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>View Details &rarr;</a>
            </div>
          </div>

          {/* Card 3 — Royal Caribbean Allure */}
          <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden', maxWidth: '900px', margin: '0 auto 16px auto', display: 'flex', flexDirection: 'column' }} className="group-card-inner">
            <div style={{ position: 'relative', flexShrink: 0, width: '100%', height: '190px', overflow: 'hidden' }} className="group-card-image">
              <img src="/allureoftheseas.jpeg" alt="Allure of the Seas cruise ship" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#007298', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>🧑‍✈️ Group Rate</span>
            </div>
            <div style={{ flex: 1, padding: '20px 24px' }}>
              <p style={{ color: '#6B7280', fontSize: '12px', fontWeight: '600', margin: '0 0 6px 0' }}>Eastern Caribbean</p>
              <h3 style={{ color: '#1F2937', fontSize: '19px', fontWeight: '700', margin: '0 0 5px 0', lineHeight: '1.3' }}>Eastern Caribbean on Allure of the Seas</h3>
              <p style={{ color: '#6B7280', fontSize: '13px', margin: '0 0 10px 0' }}>January 10, 2027 &middot; 4 nights &middot; Allure of the Seas</p>
              <p style={{ color: '#007298', fontSize: '13px', margin: '0 0 10px 0', lineHeight: '1.7' }}>Miami, FL &rarr; Cozumel, Mexico &rarr; Miami, FL</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>🚢 Royal Caribbean</span>
                <span style={{ backgroundColor: '#FEF3C7', color: '#92400E', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>⏰ Deposit Due October 12</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#F9FAFB', padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', minWidth: '210px', flexShrink: 0, borderTop: '1px solid #F3F4F6' }} className="group-card-pricing">
              <p style={{ color: '#6B7280', fontSize: '12px', fontWeight: '600', margin: 0 }}>Interior cabins as low as</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <p style={{ color: '#007298', fontSize: '12px', fontWeight: '600', margin: 0 }}>+ Group rate locked in</p>
                <p style={{ color: '#007298', fontSize: '12px', fontWeight: '600', margin: 0 }}>+ Limited cabins available</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ color: '#9CA3AF', fontSize: '13px', textDecoration: 'line-through' }}>$529</span>
                <span style={{ color: '#1F2937', fontSize: '26px', fontWeight: '800' }}>$462</span>
                <span style={{ color: '#6B7280', fontSize: '12px' }}>/person</span>
              </div>
              <a href="https://www.happydetour.com/group/allure-eastern-caribbean-2027" style={{ display: 'block', textAlign: 'center', backgroundColor: '#007298', color: 'white', padding: '11px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>View Details &rarr;</a>
            </div>
          </div>

          {/* Card 4 — Carnival Halloween — BOOKED / SOLD OUT, pushed to the bottom */}
          <div style={{ position: 'relative', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column' }} className="group-card-inner">
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(20,20,20,0.55)', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div style={{ backgroundColor: '#A32D2D', color: '#FCEBEB', fontSize: '22px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '10px 48px', transform: 'rotate(-6deg)', boxShadow: '0 0 0 2px #791F1F' }}>Booked</div>
            </div>
            <div style={{ position: 'relative', flexShrink: 0, width: '100%', height: '190px', overflow: 'hidden' }} className="group-card-image">
              <img src="/carnivalmagic.jpeg" alt="Carnival Magic cruise ship" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#007298', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}>🧑‍✈️ Group Rate</span>
            </div>
            <div style={{ flex: 1, padding: '20px 24px' }}>
              <p style={{ color: '#6B7280', fontSize: '12px', fontWeight: '600', margin: '0 0 6px 0' }}>Eastern Caribbean</p>
              <h3 style={{ color: '#1F2937', fontSize: '19px', fontWeight: '700', margin: '0 0 5px 0', lineHeight: '1.3' }}>Halloween Eastern Caribbean Cruise</h3>
              <p style={{ color: '#6B7280', fontSize: '13px', margin: '0 0 10px 0' }}>October 31, 2026 &middot; 8 nights &middot; Carnival Magic</p>
              <p style={{ color: '#007298', fontSize: '13px', margin: '0 0 10px 0', lineHeight: '1.7' }}>Miami, FL &rarr; Half Moon Cay &rarr; San Juan &rarr; St. Maarten &rarr; St. Thomas &rarr; Miami, FL</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>🎉 Fun Ship</span>
                <span style={{ backgroundColor: '#FEF3C7', color: '#92400E', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>⏰ Deposit Due July 5</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#F9FAFB', padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', minWidth: '210px', flexShrink: 0, borderTop: '1px solid #F3F4F6' }} className="group-card-pricing">
              <p style={{ color: '#6B7280', fontSize: '12px', fontWeight: '600', margin: 0 }}>Interior cabins as low as</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <p style={{ color: '#007298', fontSize: '12px', fontWeight: '600', margin: 0 }}>+ Group rate locked in</p>
                <p style={{ color: '#007298', fontSize: '12px', fontWeight: '600', margin: 0 }}>+ Limited cabins available</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ color: '#9CA3AF', fontSize: '13px', textDecoration: 'line-through' }}>$768</span>
                <span style={{ color: '#1F2937', fontSize: '26px', fontWeight: '800' }}>$643</span>
                <span style={{ color: '#6B7280', fontSize: '12px' }}>/person</span>
              </div>
              <div style={{ display: 'block', textAlign: 'center', backgroundColor: '#E5E7EB', color: '#9CA3AF', padding: '11px 16px', borderRadius: '8px', fontWeight: '700', fontSize: '14px' }}>Sold Out</div>
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
            href="https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/RFxrKCNQTejSeWAhpo4BaaEz/link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Start planning your trip with Happy Detour Travel"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'white', color: '#D97706', padding: '14px 28px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}
          >
            ✈ Start Planning My Trip
          </a>
        </div>
      </div>

      {/* Subtle credentials line */}
      <div style={{ padding: '14px 20px', textAlign: 'center' }}>
        <p style={{ color: '#9CA3AF', fontSize: '13px', margin: 0 }}>
          Eric has sailed 20+ cruises and 100+ nights at sea &middot; Virgin Voyages Gold First Mate &middot; NCL University Master's Degree &middot; Royal Caribbean Platinum &middot; MSC Voyagers Club
        </p>
      </div>

    </main>
  )
}
