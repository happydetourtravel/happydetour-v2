import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { ClientOnly } from 'vite-react-ssg'
import { VirginLink } from '../../components/VirginRedirect'

// Clerk-aware button (members go to /members, everyone else to /join). Lazy-loaded so Clerk never runs during the build
const SailorLootButton = lazy(() => import('../../components/SailorLootButton'))

const featuredDeals = [
  { tag: "ONE TIME EVENT", title: "Sisters at Sea: All Four Virgin Ships Meet", date: "Feb 2027", nights: "5 to 10 nights", ship: "All 4 Lady Ships · Miami & San Juan", originalPrice: "", salePrice: "$1,790", unit: "/cabin", cta: "See All Four Sailings", link: "/virgin/sisters-at-sea-2027", image: "/sisters-at-sea-ships.png", sort: "2027-02" },
  { tag: "VIRGIN VOYAGES", title: "Caribbean Escape: Bahamas & Key West", date: "Jan 2027", nights: "4 nights", ship: "Scarlet Lady · Miami", originalPrice: "$699", salePrice: "$549", unit: "/person", cta: "Get This Deal", link: "/cruises/bahamas-key-west", image: "/bahamas-key-west.jpg", sort: "2027-01" },
  { tag: "VIRGIN VOYAGES", title: "Eastern Caribbean & Bimini Beach Club", date: "Mar 2027", nights: "7 nights", ship: "Resilient Lady · Miami", originalPrice: "$1,399", salePrice: "$1,099", unit: "/person", cta: "Get This Deal", link: "/cruises/eastern-caribbean-bimini", image: "/eastern-caribbean-bimini.webp", sort: "2027-03" },
  { tag: "THEMED SAILING", title: "True Crime Voyage: Grand Turk & Bimini", date: "Mar 2027", nights: "5 nights", ship: "Scarlet Lady · Miami", originalPrice: "", salePrice: "$1,890", unit: "/cabin", cta: "Book This Sailing", link: "https://www.virginvoyages.com/book/voyage-planner/choose-a-cabin?agencyId=589&agentId=278796&cabins=1&sailors=2&currencyCode=USD&dateFrom=2027-03-20&dateTo=2027-03-25&packageCode=5NTCV&ships=SC&voyageId=SC2703205NTCV&bookingChannel=FMLINK", image: "/true-crime-voyage.png", sort: "2027-03-20" },
  { tag: "VIRGIN VOYAGES", title: "Miami to Morocco & Spain Transatlantic", date: "Apr 2027", nights: "14 nights", ship: "Scarlet Lady · Miami", originalPrice: "$1,818", salePrice: "$1,246", unit: "/person", cta: "Get This Deal", link: "/cruises/miami-morocco-transatlantic", image: "/BCN.png", sort: "2027-04" },
  { tag: "VIRGIN VOYAGES", title: "French Riviera, Spain & Ibiza Overnight", date: "Jun 2027", nights: "7 nights", ship: "Resilient Lady · Barcelona", originalPrice: "$1,801", salePrice: "$1,253", unit: "/person", cta: "Get This Deal", link: "/cruises/french-riviera-ibiza", image: "/ibiza-spain.webp", sort: "2027-06" },
  { tag: "VIRGIN VOYAGES", title: "Alaska: Hubbard Glacier & Coastal Views", date: "Aug 2027", nights: "9 nights", ship: "Brilliant Lady · Seattle", originalPrice: "$1,597", salePrice: "$1,161", unit: "/person", cta: "Get This Deal", link: "/cruises/alaska-hubbard-glacier", image: "/BL-Alaska.png", sort: "2027-08" },
]

// Same sailings for the Featured Sailings tiles: Sisters at Sea first, the rest in date order
const tileDeals = featuredDeals.slice(1).sort((a, b) => a.sort.localeCompare(b.sort))

// Other lines Eric also books. Kept small and quiet, well below the Virgin content
const otherLines = [
  { name: "Norwegian (NCL)", link: "/cruises/norwegian" },
  { name: "MSC Cruises", link: "/cruises/msc" },
  { name: "Royal Caribbean", link: "/cruises/royal-caribbean" },
  { name: "Carnival", link: "/cruises/carnival" },
]

const testimonials = [
  { name: "Lana", location: "Northeast Ohio", trip: "MSC Cruise, Galveston", quote: "I had no idea where to even start. Eric made the whole thing so easy I could not believe it. Booked my MSC cruise out of Galveston and had the best time. Already booked on Virgin Voyages, Sister at Sea for February 2027. He is literally the only person I will ever call for travel." },
  { name: "JB", location: "Los Angeles, CA", trip: "Carnival Sensation, Grand Cayman & Ocho Rios", quote: "First cruise ever and honestly I was nervous. Eric just walked me through everything, no pressure, no confusion. The whole thing was way easier than I expected. Already looking at my next one." },
  { name: "Jason P.", location: "", trip: "NCL Star, Great Stirrup Cay", quote: "Thanks to Eric, my first cruise was extremely easy. Eric made all the arrangements from flying to overnight hotel stay and to getting right onto the cruise ship. It was so easy I now have my next cruise planned again from Eric. Thanks Eric." },
  { name: "Colon & Smith Family", location: "Lagrange, Ohio", trip: "Allure of the Seas, Royal Caribbean, Southern Caribbean", quote: "It was great! We really enjoyed it! Thank you again for getting it together for us. We really appreciate it!" },
]

// Virgin selling points, straight from Eric's training/seminar notes
const virginPoints = [
  { label: "All restaurants included", desc: "No buffets, no upcharge dining" },
  { label: "Unlimited WiFi", desc: "Stay connected the whole trip, no extra fee" },
  { label: "Fitness classes included", desc: "Yoga and more, no extra charge" },
  { label: "No planning fee with Eric", desc: "Book through Eric and he still looks after everything" },
]

// Quick Virgin Voyages FAQ, shown right inside the Virgin section
const virginFaqs = [
  { q: "Is there a planning fee to book Virgin Voyages through you?", a: "No. Virgin Voyages bookings go through my direct affiliate link, so there is no planning fee. I still handle the details, you just do not pay extra for it." },
  { q: "What is actually included in the fare?", a: "All restaurants onboard, unlimited WiFi, group fitness classes, and sodas and sparkling water. No buffets and no upcharge dining like you find on most other lines." },
  { q: "What is Bar Tab or Sailor Loot credit?", a: "Bar Tab is credit just for drinks. Sailor Loot works on almost anything onboard. You can get both through promotions, a referral, or booking a Sea Terrace cabin or higher with me." },
  { q: "Who is Virgin Voyages a good fit for?", a: "Couples, friend groups, and solo sailors who want a more upscale, relaxed vibe. Everyone onboard is 18 and up." },
]

export default function Home() {
  const [dealIndex, setDealIndex] = useState(0)
  const deal = featuredDeals[dealIndex]
  const testimonialScrollRef = useRef<HTMLDivElement>(null)
  const dealPausedRef = useRef(false)
  const dealResumeRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  // Deals rotate every 7 seconds, and hold still while someone hovers or taps the card
  useEffect(() => {
    const timer = setInterval(() => {
      if (dealPausedRef.current) return
      setDealIndex((prev) => (prev + 1) % featuredDeals.length)
    }, 7000)
    return () => {
      clearInterval(timer)
      clearTimeout(dealResumeRef.current)
    }
  }, [])

  const pauseDeals = () => {
    dealPausedRef.current = true
    clearTimeout(dealResumeRef.current)
  }
  const resumeDeals = (delay = 0) => {
    clearTimeout(dealResumeRef.current)
    dealResumeRef.current = setTimeout(() => { dealPausedRef.current = false }, delay)
  }

  useEffect(() => {
    const el = testimonialScrollRef.current
    if (!el) return
    const scrollAmount = 300 // roughly one card width + gap
    let paused = false
    let resumeTimeout: ReturnType<typeof setTimeout>

    const pauseThenResume = () => {
      paused = true
      clearTimeout(resumeTimeout)
      resumeTimeout = setTimeout(() => { paused = false }, 8000)
    }
    const pauseOnHover = () => { paused = true; clearTimeout(resumeTimeout) }
    const resumeAfterHover = () => { paused = false }
    el.addEventListener('touchstart', pauseThenResume)
    el.addEventListener('wheel', pauseThenResume)
    el.addEventListener('mouseenter', pauseOnHover)
    el.addEventListener('mouseleave', resumeAfterHover)

    const interval = setInterval(() => {
      if (paused) return
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }, 6000)

    return () => {
      clearInterval(interval)
      clearTimeout(resumeTimeout)
      el.removeEventListener('touchstart', pauseThenResume)
      el.removeEventListener('wheel', pauseThenResume)
      el.removeEventListener('mouseenter', pauseOnHover)
      el.removeEventListener('mouseleave', resumeAfterHover)
    }
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
            <span style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.15)', color: '#F59E0B', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', padding: '5px 12px', borderRadius: '100px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
              Virgin Voyages Specialist · First Mate Gold
            </span>
            <h1 style={{ color: 'white', fontSize: 'clamp(28px, 6vw, 46px)', fontWeight: '800', lineHeight: '1.15', margin: '0 0 16px 0' }}>
              Your Virgin Voyages specialist, from first question to back home.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '1.7', margin: '0 0 28px 0', maxWidth: '480px' }}>
              Skip the corporate fluff and the hold music. I help you find the right sailing, talk through every detail before anything is confirmed, and stay in your corner the whole way.
            </p>
          </div>

          {/* Deal Card */}
          <div
            style={{ width: '100%', maxWidth: '380px' }}
            onMouseEnter={pauseDeals}
            onMouseLeave={() => resumeDeals()}
            onTouchStart={() => { pauseDeals(); resumeDeals(10000) }}
          >
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
                    {deal.originalPrice && <span style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'line-through' }}>{deal.originalPrice}</span>}
                    <span style={{ color: '#1F2937', fontSize: '28px', fontWeight: '800' }}>{deal.salePrice}</span>
                    <span style={{ color: '#6B7280', fontSize: '12px' }}>{deal.unit}</span>
                  </div>
                </div>
                <a href={deal.link} {...(deal.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} aria-label={`Get this deal: ${deal.title}`} style={{ display: 'block', textAlign: 'center', backgroundColor: '#007298', color: 'white', padding: '11px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>{deal.cta}</a>
                <a href="sms:6308231253" style={{ display: 'block', textAlign: 'center', color: '#6B7280', fontSize: '12px', fontWeight: '600', textDecoration: 'none', margin: '10px 0 0 0' }}>Prefer help? Text Eric →</a>
                <p style={{ color: '#9CA3AF', fontSize: '11px', textAlign: 'center', margin: '8px 0 0 0', lineHeight: '1.5' }}>Prices are estimates. Contact Eric for current availability.</p>
                <p style={{ color: '#D1D5DB', fontSize: '10px', textAlign: 'center', margin: '4px 0 0 0' }}>Updated November 2026</p>
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
          .event-card-inner { flex-direction: row !important; text-align: left !important; }
          .event-card-image { width: 240px !important; }
          .event-card-buttons { justify-content: flex-start !important; }
        }
        .testimonial-scroll::-webkit-scrollbar { height: 6px; }
        .testimonial-scroll::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 10px; }
      `}</style>

      {/* ============ WHY VIRGIN VOYAGES (headline section, now right under the hero) ============ */}
      <div id="virgin-voyages" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 94%, rgba(255,255,255,1) 100%), linear-gradient(to right, #CC0000 0%, #CC0000 35%, #F0A39D 100%)', padding: '64px 20px 48px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }} className="why-virgin-inner">

            <div style={{ flex: '1', minWidth: '280px' }}>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#F59E0B', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', padding: '4px 12px', borderRadius: '100px', textTransform: 'uppercase' }}>My Specialty</span>
              <h2 style={{ color: 'white', fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: '800', margin: '14px 0 10px 0' }}>Virgin Voyages is what I do best.</h2>
              <p style={{ color: '#F59E0B', fontSize: '15px', fontWeight: '600', margin: '0 0 16px 0' }}>Voted Travel + Leisure's #1 Mega-Ship Ocean Cruise Line, four years in a row (2023 to 2026).</p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: '1.7', margin: '0 0 24px 0' }}>
                No nickel and diming, everything that matters is already included. I'm First Mate Gold certified and can search live sailings and book you directly, with no planning fee.
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
                <VirginLink
                  style={{ backgroundColor: '#F59E0B', color: 'white', textAlign: 'center', padding: '13px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}
                >
                  Search &amp; Book Virgin Voyages
                </VirginLink>
                <a
                  href="/cruises/virgin-voyages#bar-tab"
                  style={{ backgroundColor: 'white', color: '#CC0000', textAlign: 'center', padding: '13px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}
                >
                  Virgin Guide &amp; Bar Tab Optimizer
                </a>
              </div>
              <a
                href="sms:6308231253"
                style={{ display: 'inline-block', color: 'white', fontSize: '13px', fontWeight: '600', textDecoration: 'none', margin: '14px 0 0 0' }}
              >
                Questions first? Text Eric →
              </a>

              {/* Members: extra Sailor Loot button. Shows the /join version until sign-in status loads */}
              <ClientOnly>
                {() => (
                  <Suspense
                    fallback={
                      <a
                        href="/join"
                        aria-label="Become a member for cruises with extra Sailor Loot up to $200"
                        style={{ display: 'block', backgroundColor: 'rgba(255,255,255,0.12)', border: '2px solid #F59E0B', borderRadius: '10px', padding: '14px 18px', margin: '20px 0 0 0', textDecoration: 'none', maxWidth: '520px' }}
                      >
                        <span style={{ display: 'block', color: 'white', fontSize: '15px', fontWeight: '700', lineHeight: '1.4' }}>
                          Looking for cruises with extra Sailor Loot, up to $200?
                        </span>
                        <span style={{ display: 'block', color: '#F59E0B', fontSize: '14px', fontWeight: '700', margin: '4px 0 0 0' }}>
                          Become a member →
                        </span>
                      </a>
                    }
                  >
                    <SailorLootButton />
                  </Suspense>
                )}
              </ClientOnly>
            </div>

            <div style={{ flex: '0 0 280px', textAlign: 'center', margin: '0 auto' }}>
              <img
                src="/firstmate-gold.png"
                alt="Virgin Voyages First Mate Gold Tier badge"
                style={{
                  width: '260px',
                  height: 'auto',
                  margin: '0 auto',
                  display: 'block',
                  filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.25))',
                }}
              />
              <p style={{ color: 'white', fontWeight: '600', fontSize: '14px', marginTop: '14px' }}>First Mate, Gold Tier</p>
            </div>

          </div>

          {/* Quick Virgin Voyages FAQ */}
          <div style={{ marginTop: '48px' }}>
            <p style={{ color: '#F59E0B', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>Quick Questions</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
              {virginFaqs.map((f) => (
                <div key={f.q} style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '16px 18px' }}>
                  <p style={{ color: 'white', fontWeight: '700', fontSize: '13px', margin: '0 0 6px 0' }}>{f.q}</p>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Featured Sailings. Sisters at Sea wide tile on top, the rest in date order */}
      <div style={{ backgroundColor: '#F9FAFB', padding: '56px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Featured Sailings</p>
          <h2 style={{ color: '#1F2937', fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: '800', margin: 0 }}>Where are you headed next?</h2>
        </div>
        <div style={{ maxWidth: '1100px', margin: '0 auto 28px auto', backgroundColor: '#0B2530', borderRadius: '16px', padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', textAlign: 'center' }} className="event-card-inner">
          <img
            src="/sisters-at-sea-ships.png"
            alt="Four ships sailing together toward a Caribbean sunset"
            loading="lazy"
            className="event-card-image"
            style={{ width: '100%', maxWidth: '320px', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.35)', flexShrink: 0, display: 'block' }}
          />
          <div style={{ flex: 1 }}>
            <span style={{ display: 'inline-block', backgroundColor: '#F59E0B', color: '#1F2937', fontSize: '11px', fontWeight: '800', letterSpacing: '1px', padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase' }}>One Time Only Event</span>
            <h2 style={{ color: 'white', fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: '800', margin: '12px 0 10px 0', lineHeight: '1.2' }}>Sisters at Sea 2027</h2>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '15px', lineHeight: '1.7', margin: '0 0 8px 0' }}>
              On February 16, 2027, all four Virgin Voyages ships meet in the Caribbean for the first time ever. Four sailings, 5 to 10 nights, from Miami and San Juan. Once it's done, it's done.
            </p>
            <p style={{ color: '#FDE68A', fontSize: '14px', fontWeight: '600', margin: '0 0 22px 0' }}>Starting from $1,790 per cabin for 2 sailors.</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }} className="event-card-buttons">
              <a href="/virgin/sisters-at-sea-2027" style={{ backgroundColor: '#CC0000', color: 'white', padding: '13px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>See All Four Sailings</a>
              <a href="sms:6308231253" style={{ color: 'white', border: '2px solid white', padding: '11px 22px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>Text Eric: 630-823-1253</a>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {tileDeals.map((d) => (
            <a key={d.link} href={d.link} {...(d.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '14px', overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 4px 18px rgba(0,0,0,0.06)', textDecoration: 'none' }}>
              <img src={d.image} alt={d.title} loading="lazy" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <p style={{ color: '#007298', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 6px 0' }}>{d.date} · {d.nights}</p>
                <h3 style={{ color: '#1F2937', fontSize: '17px', fontWeight: '700', margin: '0 0 4px 0', lineHeight: '1.3' }}>{d.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '13px', margin: '0 0 14px 0' }}>{d.ship}</p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '10px' }}>
                  <div>
                    <p style={{ color: '#9CA3AF', fontSize: '11px', margin: 0 }}>Starting from</p>
                    <p style={{ margin: 0 }}><span style={{ color: '#1F2937', fontSize: '22px', fontWeight: '800' }}>{d.salePrice}</span> <span style={{ color: '#6B7280', fontSize: '12px' }}>{d.unit}</span></p>
                  </div>
                  <span style={{ backgroundColor: '#007298', color: 'white', padding: '9px 14px', borderRadius: '8px', fontWeight: '700', fontSize: '13px', whiteSpace: 'nowrap' }}>View Sailing</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <p style={{ color: '#9CA3AF', fontSize: '11px', textAlign: 'center', margin: '18px 0 0 0' }}>Fares can change. Text Eric for current availability.</p>
      </div>

      {/* Also Booking These Lines. Plain text links, stays right under Virgin as the "not the right fit?" option */}
      <div id="cruise-lines" style={{ backgroundColor: '#F3F4F6', padding: '32px 20px', textAlign: 'center' }}>
        <p style={{ color: '#6B7280', fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Also Booking</p>
        <p style={{ color: '#6B7280', fontSize: '13px', margin: '0 0 14px 0' }}>If Virgin is not the right fit, I've got you covered too.</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '14px', fontWeight: '600' }}>
          {otherLines.map((line, i) => (
            <span key={line.name} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a href={line.link} style={{ color: '#007298', textDecoration: 'none' }}>{line.name}</a>
              {i < otherLines.length - 1 && <span style={{ color: '#D1D5DB' }}>&middot;</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Why Book With Eric (white background so it stands apart from the gray strip above) */}
      <div style={{ backgroundColor: 'white', padding: '60px 20px' }}>
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
                Anyone can book a trip. I am the one who answers the phone when things do not go as planned. I have sailed over 25 cruises myself, so when I recommend a ship, it comes from actually being there, not a brochure.
              </p>

              <div style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #007298', borderRadius: '8px', padding: '18px 20px', margin: '0 0 20px 0' }}>
                <p style={{ color: '#1F2937', fontSize: '14px', lineHeight: '1.7', fontStyle: 'italic', margin: '0 0 10px 0' }}>
                  "Not every cruise line is right for every person. I don't start by asking which cruise is the cheapest. I want to know what you actually want your vacation to feel like. Do you want quiet and relaxing? Lots to do? Adults only? Great food? A ship that's good for the whole family? The right cruise isn't always the one with the best deal. It's the one that fits you. That's where I come in."
                </p>
                <p style={{ color: '#007298', fontWeight: '700', fontSize: '13px', margin: 0 }}>Eric Carney, Happy Detour Travel</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div style={{ backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '16px' }}>
                  <p style={{ color: '#007298', fontWeight: '700', fontSize: '14px', margin: '0 0 4px 0' }}>25+ cruises, 150+ nights at sea</p>
                  <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>Real experience, not just a booking screen</p>
                </div>
                <div style={{ backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '16px' }}>
                  <p style={{ color: '#007298', fontWeight: '700', fontSize: '14px', margin: '0 0 4px 0' }}>Virgin Voyages First Mate, Gold Tier</p>
                  <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>Also certified across NCL, Royal Caribbean, MSC</p>
                </div>
                <div style={{ backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '16px' }}>
                  <p style={{ color: '#007298', fontWeight: '700', fontSize: '14px', margin: '0 0 4px 0' }}>No surprises, no pressure</p>
                  <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>Whichever way you book</p>
                </div>
                <div style={{ backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '16px' }}>
                  <p style={{ color: '#007298', fontWeight: '700', fontSize: '14px', margin: '0 0 4px 0' }}>Here when something goes wrong</p>
                  <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>A real person, not a hold line</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', marginTop: '24px', flexWrap: 'wrap' }}>
                <a href="sms:6308231253" style={{ color: '#F59E0B', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>
                  Text Eric: 630-823-1253
                </a>
                <a href="mailto:eric@happydetour.com" style={{ color: '#F59E0B', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>
                  Email Eric
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Group Sailing: Scarlet Lady Halloween Transatlantic (only active group). Light gray so it doesn't blend into the white section above */}
      <div style={{ backgroundColor: '#F9FAFB', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Group Sailing</p>
            <h2 style={{ color: '#1F2937', fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: '800', margin: '0 0 16px 0' }}>Sail with the Happy Detour Travel crew.</h2>
            <p style={{ color: '#374151', fontSize: '15px', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}>
              This is a group sailing I set up directly with Virgin Voyages. I am holding a block of Sea Terrace cabins, so group guests get perks you will not get booking on your own. Space is limited, so it is smart to grab your spot early. I can also help with airfare and a hotel stay before or after the cruise if you need one.
            </p>
          </div>

          {/* Scarlet Lady Halloween Transatlantic, Oct 31, 2027 */}
          <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column' }} className="group-card-inner">
            <div style={{ position: 'relative', flexShrink: 0, width: '100%', height: '190px', overflow: 'hidden', backgroundColor: '#CC0000' }} className="group-card-image">
              <img src="/HWthumbnail.png" alt="Halloween Transatlantic on Virgin Voyages Scarlet Lady" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }} />
              <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#F59E0B', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '5px' }}>Happy Detour Travel Group</span>
            </div>
            <div style={{ flex: 1, padding: '20px 24px' }}>
              <p style={{ color: '#6B7280', fontSize: '12px', fontWeight: '600', margin: '0 0 6px 0' }}>Transatlantic &middot; Barcelona to San Juan</p>
              <h3 style={{ color: '#1F2937', fontSize: '19px', fontWeight: '700', margin: '0 0 5px 0', lineHeight: '1.3' }}>Halloween Transatlantic on Scarlet Lady</h3>
              <p style={{ color: '#6B7280', fontSize: '13px', margin: '0 0 10px 0' }}>Departs October 31, 2027 &middot; Scarlet Lady &middot; Virgin Voyages</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ backgroundColor: '#FEF2F2', color: '#CC0000', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>🎃 Halloween Sailing</span>
                <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>✦ Virgin Voyages</span>
                <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '100px' }}>Sea Terrace Cabins</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#F9FAFB', padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', minWidth: '210px', flexShrink: 0, borderTop: '1px solid #F3F4F6' }} className="group-card-pricing">
              <p style={{ color: '#6B7280', fontSize: '12px', fontWeight: '600', margin: 0 }}>Group perks</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <p style={{ color: '#007298', fontSize: '13px', fontWeight: '600', margin: 0 }}>+ $200 bar tab (Sea Terrace and up)</p>
                <p style={{ color: '#007298', fontSize: '13px', fontWeight: '600', margin: 0 }}>+ No planning fee</p>
              </div>
              <a href="/group/transatlantic-10-2027" style={{ display: 'block', textAlign: 'center', backgroundColor: '#F59E0B', color: 'white', padding: '12px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px', marginTop: '4px' }}>See the Sailing</a>
              <a href="/join" style={{ display: 'block', textAlign: 'center', color: '#007298', fontSize: '13px', fontWeight: '600', textDecoration: 'none', padding: '4px 0' }}>Create an account for group pricing &rarr;</a>
              <p style={{ color: '#9CA3AF', fontSize: '11px', textAlign: 'center', margin: 0, lineHeight: '1.5' }}>Just your name and email. Members see pricing and booking details.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials. White background to alternate with the gray group section above */}
      <div style={{ backgroundColor: 'white', padding: '60px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>What People Say</p>
          <h2 style={{ color: '#1F2937', fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: '800', margin: 0 }}>Real people. Real trips. No surprises.</h2>
        </div>
        <div
          className="testimonial-scroll"
          ref={testimonialScrollRef}
          style={{ display: 'flex', gap: '20px', overflowX: 'auto', padding: '4px 20px 16px 20px', maxWidth: '1100px', margin: '0 auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {testimonials.map((t, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #E5E7EB', flex: '0 0 280px', scrollSnapAlign: 'start' }}>
              <p style={{ color: '#1F2937', fontSize: '14px', lineHeight: '1.7', fontStyle: 'italic', margin: '0 0 16px 0' }}>"{t.quote}"</p>
              <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '16px' }}>
                <p style={{ color: '#1F2937', fontWeight: '600', fontSize: '14px', margin: '0 0 2px 0' }}>{t.name}</p>
                {t.location && <p style={{ color: '#9CA3AF', fontSize: '11px', margin: '0 0 2px 0' }}>{t.location}</p>}
                <p style={{ color: '#6B7280', fontSize: '12px', margin: 0 }}>{t.trip}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: '#9CA3AF', fontSize: '12px', marginTop: '8px' }}>Scrolls automatically. Swipe anytime to browse at your own pace.</p>
      </div>

      {/* Final CTA */}
      <div style={{ padding: '48px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: '#F59E0B', borderRadius: '20px', padding: '48px 24px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>What Are You Waiting For?</p>
          <p style={{ color: 'white', fontSize: '16px', fontWeight: '600', fontStyle: 'italic', margin: '0 0 14px 0' }}>"Every great trip has a happy detour."</p>
          <h2 style={{ color: 'white', fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: '800', margin: '0 0 12px 0', lineHeight: '1.2' }}>Stop scrolling, start packing.</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', margin: '0 0 28px 0' }}>Let's find your happy detour.</p>
          <a
            href="https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/dDfyxMMy8gucAddKpaipPB4Z/link"
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
