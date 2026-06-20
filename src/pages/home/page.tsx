import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const featuredDeals = [
  {
    tag: "VIRGIN VOYAGES",
    title: "Caribbean Escape — Bahamas & Key West",
    date: "Jan 2027",
    nights: "4 nights",
    ship: "Scarlet Lady · Miami",
    originalPrice: "$699",
    salePrice: "$549",
    link: "/cruises/bahamas-key-west",
  },
  {
    tag: "VIRGIN VOYAGES",
    title: "Eastern Caribbean & Bimini Beach Club",
    date: "Mar 2027",
    nights: "7 nights",
    ship: "Resilient Lady · Miami",
    originalPrice: "$1,399",
    salePrice: "$1,099",
    link: "/contact",
  },
  {
    tag: "VIRGIN VOYAGES",
    title: "Southern Caribbean — Aruban Nights",
    date: "Jun 2027",
    nights: "7 nights",
    ship: "Scarlet Lady · San Juan",
    originalPrice: "$1,599",
    salePrice: "$1,249",
    link: "/contact",
  },
  {
    tag: "VIRGIN VOYAGES",
    title: "Greek Isles & The Adriatic",
    date: "May 2027",
    nights: "11 nights",
    ship: "Scarlet Lady · Athens",
    originalPrice: "$2,325",
    salePrice: "$1,639",
    link: "/contact",
  },
  {
    tag: "VIRGIN VOYAGES",
    title: "Alaska & Beyond — Inside Passage",
    date: "Aug 2027",
    nights: "7 nights",
    ship: "Brilliant Lady · Seattle",
    originalPrice: "$1,899",
    salePrice: "$1,499",
    link: "/contact",
  },
]

const cruiseLines = [
  { name: "Virgin Voyages", tagline: "Adults only. All included.", desc: "No kids, no nickel and diming. Every restaurant included, gratuities covered. Eric is First Mate certified.", live: true },
  { name: "Norwegian (NCL)", tagline: "Freedom to do what you want.", desc: "NCL invented Freestyle Cruising. No set dining times, great group pricing.", live: false },
  { name: "MSC Cruises", tagline: "European elegance at a real price.", desc: "One of the most underrated lines out there. Beautiful ships and a Mediterranean style that feels different.", live: false },
  { name: "Royal Caribbean", tagline: "Big ships. Big fun.", desc: "Rock climbing walls, surf simulators, Broadway shows. If someone wants everything, this is where you go.", live: false },
]

import { useState, useEffect } from 'react'

function Home() {
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
      <div style={{ position: 'relative', minHeight: '520px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/hero-image.webp')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.38)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,114,152,0.80) 0%, rgba(0,0,0,0.15) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '64px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', minHeight: '520px', flexWrap: 'wrap' }}>

          {/* Left */}
          <div style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}>
            <h1 style={{ color: 'white', fontSize: '46px', fontWeight: '800', lineHeight: '1.15', margin: '0 0 16px 0' }}>
              Real trips. Real value. Someone actually in your corner.
            </h1>
            <p style={{ color: '#F59E0B', fontSize: '18px', fontWeight: '700', margin: '0 0 16px 0' }}>
              Your personal travel advisor from start to finish.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '1.7', margin: '0 0 32px 0', maxWidth: '480px' }}>
              Anyone can book a trip. I am the one who answers the phone when things do not go as planned.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '13px 26px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
                Talk to Eric
              </a>
              <a href="#cruise-lines" style={{ border: '2px solid rgba(255,255,255,0.5)', color: 'white', padding: '13px 26px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
                View Cruises
              </a>
            </div>
          </div>

          {/* Featured Deal Card */}
          <div style={{ width: '320px', flexShrink: 0 }}>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.25)' }}>
              <div style={{ backgroundColor: '#1F2937', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#F59E0B', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>Featured Deal</span>
                <span style={{ color: '#9CA3AF', fontSize: '11px' }}>{dealIndex + 1} of {featuredDeals.length} deals</span>
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px' }}>
                  {deal.tag}
                </span>
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
                <a href={deal.link} style={{ display: 'block', textAlign: 'center', backgroundColor: '#007298', color: 'white', padding: '11px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                  Get This Deal
                </a>
                <p style={{ color: '#9CA3AF', fontSize: '11px', textAlign: 'center', margin: '10px 0 0 0', lineHeight: '1.5' }}>
                  Prices are estimates. Contact Eric for current availability.
                </p>
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

      {/* About Eric */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px' }}>
        <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>About Eric</p>
        <h2 style={{ color: '#1F2937', fontSize: '32px', fontWeight: '800', margin: '0 0 24px 0' }}>I help people plan trips without making it complicated.</h2>
        <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
          I'm Eric. Most people know they want to travel. They just don't know where to start. And honestly, the research can feel like a second job. That's where I come in.
        </p>
        <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
          You share a rough idea. I take it from there. I find the options, sort through the details, and help you pick something that actually fits your budget, your timeline, your vibe.
        </p>
        <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
          I am a professional travel advisor. Planning fees start at $50 depending on the complexity of your trip. We talk through it together before anything is confirmed so there are no surprises. Cruise lines and resorts pay me when you travel, and that is already built into the price you would pay anyway.
        </p>
        <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
          And if something goes wrong while you are out there, I am the one making the calls so you do not have to.
        </p>
        <p style={{ color: '#007298', fontSize: '17px', fontWeight: '600', fontStyle: 'italic', marginBottom: '8px' }}>
          "Sometimes the best journeys begin with a Happy Detour."
        </p>
        <p style={{ color: '#6B7280', fontSize: '14px' }}>Eric Carney, Happy Detour Travel</p>
      </div>

      {/* Cruise Lines */}
      <div id="cruise-lines" style={{ backgroundColor: '#F3F4F6', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Where We Specialize</p>
            <h2 style={{ color: '#1F2937', fontSize: '36px', fontWeight: '800', margin: 0 }}>Cruise lines we work with</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
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
                  {line.live && (
                    <a href="/cruises" style={{ color: '#007298', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>View sailings</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ color: '#1F2937', fontSize: '32px', fontWeight: '800', margin: '0 0 16px 0' }}>Ready to start planning?</h2>
        <p style={{ color: '#6B7280', fontSize: '16px', maxWidth: '480px', margin: '0 auto 32px auto', lineHeight: '1.6' }}>
          Reach out and let's figure out the right trip for you. No pressure, no surprises.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="sms:7473338687" style={{ backgroundColor: '#007298', color: 'white', padding: '13px 26px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Text Eric
          </a>
          <a href="mailto:eric@happydetour.com" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '13px 26px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
            Email Eric
          </a>
        </div>
      </div>

    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
