'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    storage: {
      get: (key: string) => Promise<{ value: string } | null>
      set: (key: string, value: string) => Promise<void>
    }
  }
}

export default function CheriPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownOpen2, setDropdownOpen2] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Bar Tab Optimizer state
  const [nights] = useState(7)
  const [wine, setWine] = useState(0)
  const [beer, setBeer] = useState(0)
  const [cocktails, setCocktails] = useState(0)
  const [mixed, setMixed] = useState(0)
  const [coffee, setCoffee] = useState(0)
  const [other, setOther] = useState(0)

  const [soda, setSoda] = useState(0)
  const drinkPrices = { wine: 14, beer: 9, cocktails: 16, mixed: 13, coffee: 6, soda: 4.50, other: 8 }
  const GRATUITY = 0.18
  const dailySpend = wine * drinkPrices.wine + beer * drinkPrices.beer + cocktails * drinkPrices.cocktails + mixed * drinkPrices.mixed + coffee * drinkPrices.coffee + soda * drinkPrices.soda + other * drinkPrices.other
  const totalSpend = dailySpend * nights

  // Package prices per person with 18% gratuity included
  const deluxePerPersonPerDay = 83.99 * (1 + GRATUITY)
  const deluxePerPerson = deluxePerPersonPerDay * nights
  const deluxeForTwo = deluxePerPerson * 2  // both in cabin must buy
  const refreshPerPersonPerDay = 28.99 * (1 + GRATUITY)
  const refreshPerPerson = refreshPerPersonPerDay * nights
  const refreshForTwo = refreshPerPerson * 2

  const hasCoffeeOrSoft = coffee > 0 || soda > 0 || other > 0
  const hasAlcohol = wine > 0 || beer > 0 || cocktails > 0 || mixed > 0

  let recommendation = ''
  let savings = 0
  if (totalSpend === 0) {
    recommendation = 'Enter your estimated daily drinks above to get a recommendation.'
  } else if (hasAlcohol && (totalSpend * 2) > deluxeForTwo) {
    savings = (totalSpend * 2) - deluxeForTwo
    recommendation = `A drink package looks worth it for your cabin. You and your cabin mate would spend an estimated $${(totalSpend * 2).toFixed(2)} paying as you go versus $${deluxeForTwo.toFixed(2)} for both of you on the Deluxe Package including 18% gratuity. That saves you around $${savings.toFixed(2)}.`
  } else if (!hasAlcohol && hasCoffeeOrSoft && (totalSpend * 2) > refreshForTwo) {
    savings = (totalSpend * 2) - refreshForTwo
    recommendation = `The Refreshment Package looks worth it for your cabin. You and your cabin mate would spend an estimated $${(totalSpend * 2).toFixed(2)} paying as you go versus $${refreshForTwo.toFixed(2)} for both of you on the Refreshment Package including 18% gratuity. That saves you around $${savings.toFixed(2)}.`
  } else {
    recommendation = `Based on your estimates paying as you go may be the better option. Remember both people in your cabin have to purchase the same package so the total cost for two would be $${deluxeForTwo.toFixed(2)} for the Deluxe Package or $${refreshForTwo.toFixed(2)} for the Refreshment Package. Both include 18% gratuity.`
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    window.addEventListener('resize', handleResize)
    const COLORS = ['#ff85c2','#ffd700','#e040a0','#f9a8d4','#ffffff','#b8860b','#ffc8dd','#ff4d79']
    const pieces = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 5 + 3,
      d: Math.random() * 4 + 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngle: 0,
      tiltSpeed: Math.random() * 0.1 + 0.05,
      round: Math.random() > 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }))
    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pieces.forEach(p => {
        p.tiltAngle += p.tiltSpeed
        p.y += p.d
        p.tilt = Math.sin(p.tiltAngle) * 12
        if (p.y > canvas.height + 20) { p.y = -10; p.x = Math.random() * canvas.width }
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = p.color
        ctx.beginPath()
        if (p.round) { ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2) } else { ctx.rect(p.x + p.tilt, p.y, p.r, p.r * 2) }
        ctx.fill()
      })
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }
    draw()
    const reveals = document.querySelectorAll('.cheri-reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('cheri-visible') })
    }, { threshold: 0.1 })
    reveals.forEach(r => observer.observe(r))
    return () => { window.removeEventListener('resize', handleResize); cancelAnimationFrame(animId); observer.disconnect() }
  }, [])

  const faqs = [
    {
      q: "How much does it cost?",
      a: "Inside cabins are $1,437.63 per person and balcony cabins are $2,032.13 per person. Both prices include port fees and taxes and are based on double occupancy. Gratuities are not included and run $18.50 per person per day, so $129.50 per person for the full 7 nights. Book with a $500 deposit by August 22, 2026 and your cabin gets a $50 onboard credit toward whatever you want. Flex pay options are available so reach out to Eric and he will help you find a payment plan that works for you."
    },
    {
      q: "Do I have to book by August 22?",
      a: "You do not have to but here is why it is worth it. Book with a $500 deposit by August 22, 2026 and every cabin gets a $50 onboard credit. That is money toward drinks, gratuities, shore excursions, whatever you want. You can absolutely still join the group after that date right up until the final payment deadline of February 20, 2027. You just won't get that extra credit. So August 22 is not a hard deadline to join. It is just a real reason to commit early instead of waiting until the last minute. And honestly the sooner you are in the better because Cheri is planning group activities and wants to know who is coming!"
    },
    {
      q: "What is included in the price?",
      a: "Your cabin fare includes 7 nights aboard the Odyssey of the Seas, all onboard meals at the main dining venues, port fees and taxes, and entertainment. Not included are gratuities at $18.50 per person per day, flights to and from Rome, pre or post cruise hotel, drink packages, specialty dining, and shore excursions."
    },
    {
      q: "What about drink packages?",
      a: "Drinks are not included in the fare but Royal Caribbean runs sales regularly. Eric will email the group whenever Royal drops a sale on drink packages so you can grab it at the best price. The Deluxe Beverage Package normally runs $120 per guest per day and has been on sale for as low as $83.99. The Refreshment Package normally runs $42 and has been on sale for $28.99. One important thing to know: everyone staying in the same cabin has to purchase the same drink package. You cannot have one person in the cabin get it and the other opt out. Use the drink calculator on this page to figure out if a package makes sense for you."
    },
    {
      q: "How do I book and what are my payment options?",
      a: "You have two ways to book. Option 1 is through the booking link on this page. You can pay by credit card or ACH bank transfer. A convenience fee is added to cover credit card processing. For example a $500 deposit would be $518.50 with the convenience fee. ACH bank transfer has a lower processing fee. Option 2 is to contact Eric directly and pay by card over the phone or Venmo. Your card number goes directly into the Royal Caribbean booking system and is never saved anywhere. Eric handles this the same way he would want someone to handle his own payment information. We can talk through what works best for you when the time comes. Call 630-823-1253 after 6pm EST, text or email any time at eric@happydetour.com."
    },
    {
      q: "What is flex pay?",
      a: "Flex pay lets you pay for your cruise in weekly or monthly installments through Affirm instead of all at once. Your interest rate depends on your credit score. Flex pay is available to guests in North America and the UK only. It is a great way to lock in your spot now and spread the cost out over time. Ask Eric about this when you reach out."
    },
    {
      q: "What if I am traveling solo?",
      a: "Do not let traveling solo stop you from coming. I am actively matching solo travelers with cabin mates so nobody has to pay double on their own. If you are traveling solo reach out to me and I will connect you with others in the group who are also looking for a cabin mate. Some of you may already know each other and some may not but either way we will figure it out. Text or call 630-823-1253 after 6pm EST or email eric@happydetour.com any time and let me know you are interested."
    },
    {
      q: "What about flights and a hotel before the cruise?",
      a: "The cruise departs from Rome on May 30, 2027 and returns June 6, 2027. Everyone will need to arrange flights into and out of Rome. Eric can help coordinate airfare and a pre or post cruise hotel stay so nobody is figuring that out on their own. Flights have not been released yet for those dates but Eric will keep everyone updated as soon as they are available."
    },
    {
      q: "Some guests are coming from Europe. Does onboard credit work for them?",
      a: "Yes! Onboard credit is in USD and can be used for anything on the ship including drinks, shore excursions, spa, and more. For guests paying in Euros Eric can take payment directly and the rate would be converted to USD at the time of payment. Depending on the exchange rate the conversion can actually work in your favor."
    },
    {
      q: "Who do I contact with questions?",
      a: "Eric at Happy Detour Travel is your guy. Calls work best after 6pm EST at 630-823-1253. Text or email any time at eric@happydetour.com. He is based in Alliance, OH and is personally sailing on this cruise to celebrate Cheri with everyone."
    },
  ]

  const Counter = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <button onClick={() => onChange(Math.max(0, value - 1))} style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(249,168,212,0.3)', background: 'rgba(249,168,212,0.1)', color: '#f9a8d4', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'inherit' }}>−</button>
      <span style={{ fontSize: 15, fontWeight: 700, color: '#fce7f3', minWidth: 20, textAlign: 'center' }}>{value}</span>
      <button onClick={() => onChange(value + 1)} style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(249,168,212,0.3)', background: 'rgba(249,168,212,0.1)', color: '#f9a8d4', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'inherit' }}>+</button>
    </div>
  )

  // Solo Matcher
  const [soloName, setSoloName] = useState('')
  const [soloSubmitting, setSoloSubmitting] = useState(false)
  const [soloSubmitted, setSoloSubmitted] = useState(false)
  const [soloList, setSoloList] = useState<{name: string; date: string}[]>([])
  const [soloError, setSoloError] = useState('')

  useEffect(() => {
    const loadSolos = async () => {
      try {
        const result = await window.storage.get('cheri-solos')
        if (result) setSoloList(JSON.parse(result.value))
      } catch {}
    }
    loadSolos()
  }, [])

  const handleSoloSubmit = async () => {
    if (!soloName.trim()) { setSoloError('Please enter your name.'); return }
    setSoloSubmitting(true)
    setSoloError('')
    try {
      const newEntry = { name: soloName.trim(), date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) }
      const updated = [...soloList, newEntry]
      await window.storage.set('cheri-solos', JSON.stringify(updated))
      setSoloList(updated)
      setSoloName('')
      setSoloSubmitted(true)
    } catch { setSoloError('Something went wrong. Please reach out to Eric directly.') }
    setSoloSubmitting(false)
  }

  const SoloMatcher = () => (
    <div id="solo" className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', padding: '72px 24px' }}>
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16, display: 'block' }}>Traveling Solo?</span>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, color: '#fce7f3', marginBottom: 12, lineHeight: 1.2 }}>Find a Cabin Mate</h2>
      <p style={{ fontSize: 14, color: 'rgba(252,231,243,0.6)', lineHeight: 1.75, marginBottom: 32 }}>
        Do not let traveling solo stop you from coming. Add your name to the list below and Eric will reach out to connect you with others who are also looking for a cabin mate. Both people have to say yes before any introductions are made.
      </p>

      {/* Submit form */}
      {!soloSubmitted ? (
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(249,168,212,0.12)', borderRadius: 20, padding: '28px 28px', marginBottom: 32 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 20 }}>Add yourself to the list</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input
              type="text"
              placeholder="Your first name"
              value={soloName}
              onChange={e => setSoloName(e.target.value)}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(249,168,212,0.2)', borderRadius: 12, padding: '12px 16px', color: '#fce7f3', fontSize: 14, fontFamily: 'DM Sans, sans-serif', outline: 'none', width: '100%' }}
            />
            {soloError && <p style={{ fontSize: 13, color: '#ff85c2', margin: 0 }}>{soloError}</p>}
            <button
              onClick={handleSoloSubmit}
              disabled={soloSubmitting}
              style={{ background: 'linear-gradient(135deg, #e040a0, #9d174d)', color: '#fff', border: 'none', borderRadius: 100, padding: '13px 28px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', opacity: soloSubmitting ? 0.7 : 1 }}
            >
              {soloSubmitting ? 'Adding you...' : 'Add Me to the List'}
            </button>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(252,231,243,0.3)', marginTop: 14, lineHeight: 1.6 }}>By adding your name you are letting Eric know you are open to being matched. He will reach out to both parties before making any introduction.</p>
        </div>
      ) : (
        <div style={{ background: 'rgba(224,64,160,0.1)', border: '1px solid rgba(249,168,212,0.2)', borderRadius: 16, padding: '24px 28px', marginBottom: 32, textAlign: 'center' }}>
          <p style={{ fontSize: 22, marginBottom: 8 }}>🎉</p>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#fce7f3', marginBottom: 6 }}>You are on the list!</p>
          <p style={{ fontSize: 13, color: 'rgba(252,231,243,0.6)', lineHeight: 1.6 }}>Eric will reach out when there is a potential match. In the meantime feel free to reach out at 630-823-1253 or eric@happydetour.com.</p>
        </div>
      )}

      {/* The list */}
      {soloList.length > 0 && (
        <div>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16 }}>Looking for a cabin mate</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {soloList.map((s, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(249,168,212,0.1)', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#fce7f3', margin: 0 }}>{s.name}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 11, color: 'rgba(252,231,243,0.3)' }}>Joined {s.date}</span>
                  <a href="sms:6308231253" style={{ fontSize: 12, fontWeight: 700, color: '#f9a8d4', textDecoration: 'none', background: 'rgba(249,168,212,0.1)', border: '1px solid rgba(249,168,212,0.2)', borderRadius: 100, padding: '5px 14px' }}>Text Eric</a>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: 'rgba(252,231,243,0.3)', marginTop: 16, lineHeight: 1.6 }}>Interested in rooming with someone on this list? Text or email Eric and he will reach out to both of you to see if it is a good fit.</p>
        </div>
      )}

      {soloList.length === 0 && soloSubmitted === false && (
        <p style={{ fontSize: 13, color: 'rgba(252,231,243,0.3)', textAlign: 'center' }}>No one on the list yet. Be the first!</p>
      )}
    </div>
  )

  const AskEricButton = ({ id }: { id: string }) => {
    const isOpen = id === '1' ? dropdownOpen : dropdownOpen2
    const setOpen = id === '1' ? setDropdownOpen : setDropdownOpen2
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button onClick={() => setOpen(!isOpen)} onBlur={() => setTimeout(() => setOpen(false), 150)} className="cheri-btn-secondary" style={{ cursor: 'pointer', border: '1px solid rgba(249,168,212,0.25)' }}>
          Ask Eric a Question ▾
        </button>
        {isOpen && (
          <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, backgroundColor: 'white', borderRadius: 10, boxShadow: '0 4px 24px rgba(0,0,0,0.2)', minWidth: 200, zIndex: 100, overflow: 'hidden' }}>
            <a href="tel:6308231253" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', fontSize: 14, color: '#1F2937', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid #F3F4F6' }}>📱 Call Eric</a>
            <a href="sms:6308231253" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', fontSize: 14, color: '#1F2937', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid #F3F4F6' }}>💬 Text Eric</a>
            <a href="mailto:eric@happydetour.com?subject=Cheri's 60th Birthday Cruise" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', fontSize: 14, color: '#1F2937', textDecoration: 'none', fontWeight: 600 }}>✉️ Email Eric</a>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@300;400;500;600&display=swap');
        .cheri-page { font-family: 'DM Sans', sans-serif; background: #0a0612; color: #f5eef8; overflow-x: hidden; min-height: 100vh; }
        .cheri-reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .cheri-visible { opacity: 1; transform: translateY(0); }
        .cheri-btn-primary { display: inline-block; padding: 15px 36px; background: linear-gradient(135deg, #e040a0, #9d174d); color: #fff; font-size: 14px; font-weight: 600; border-radius: 100px; text-decoration: none; box-shadow: 0 8px 32px rgba(224,64,160,0.4); transition: transform 0.2s, box-shadow 0.2s; letter-spacing: 0.3px; }
        .cheri-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(224,64,160,0.55); }
        .cheri-btn-secondary { display: inline-block; padding: 15px 36px; background: rgba(255,255,255,0.06); color: #f9a8d4; font-size: 14px; font-weight: 600; border-radius: 100px; text-decoration: none; transition: transform 0.2s, background 0.2s; backdrop-filter: blur(8px); letter-spacing: 0.3px; }
        .cheri-btn-secondary:hover { transform: translateY(-2px); background: rgba(249,168,212,0.1); }
        .cheri-contact-link { font-size: 13px; color: rgba(249,168,212,0.6); text-decoration: none; transition: color 0.2s; }
        .cheri-contact-link:hover { color: #f9a8d4; }
        .cheri-love-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 8px; }
        @media (max-width: 480px) { .cheri-love-grid { grid-template-columns: 1fr; } .cheri-pkg-cards { flex-direction: column !important; } .cheri-price-pills { flex-direction: column !important; } }
        @keyframes cheri-shimmer { from { filter: drop-shadow(0 0 30px rgba(224,64,160,0.3)); } to { filter: drop-shadow(0 0 60px rgba(224,64,160,0.6)); } }
        .cheri-number { animation: cheri-shimmer 4s ease-in-out infinite alternate; }
        .cheri-footer a { color: rgba(249,168,212,0.4); text-decoration: none; }
        .cheri-footer a:hover { color: rgba(249,168,212,0.7); }
        .cheri-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50; background: rgba(10,6,18,0.88); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(249,168,212,0.1); }
        .cheri-nav-inner { max-width: 760px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: flex-start; height: 56px; gap: 4px; }
        .cheri-nav-links { display: flex; gap: 2px; align-items: center; }
        .cheri-nav-link { font-size: 13px; font-weight: 600; color: rgba(252,231,243,0.6); text-decoration: none; padding: 6px 10px; border-radius: 100px; transition: color 0.2s, background 0.2s; cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; }
        .cheri-nav-link:hover { color: #f9a8d4; background: rgba(249,168,212,0.08); }
        .cheri-nav-book { font-size: 12px; font-weight: 700; color: #fff; background: linear-gradient(135deg, #e040a0, #9d174d); padding: 8px 18px; border-radius: 100px; text-decoration: none; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: opacity 0.2s; white-space: nowrap; }
        .cheri-nav-book:hover { opacity: 0.85; }
        .cheri-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; flex-direction: column; gap: 5px; }
        .cheri-hamburger span { display: block; width: 22px; height: 2px; background: #f9a8d4; border-radius: 2px; }
        .cheri-mobile-menu { flex-direction: column; padding: 12px 24px 20px; gap: 4px; border-top: 1px solid rgba(249,168,212,0.08); }
        @media (max-width: 600px) {
          .cheri-nav-links { display: none !important; }
          .cheri-nav-book-desktop { display: none !important; }
          .cheri-hamburger { display: flex !important; }
        }
        .faq-item { border-bottom: 1px solid rgba(249,168,212,0.08); }
        .faq-question { width: 100%; text-align: left; background: none; border: none; cursor: pointer; padding: 18px 0; display: flex; justify-content: space-between; align-items: center; gap: 16px; color: #fce7f3; font-size: 15px; font-weight: 600; font-family: 'DM Sans', sans-serif; }
        .faq-answer { font-size: 14px; line-height: 1.75; color: rgba(252,231,243,0.7); padding-bottom: 18px; }
      `}</style>

      <div className="cheri-page">

        {/* NAV */}
        <nav className="cheri-nav">
          <div className="cheri-nav-inner">
            <div className="cheri-nav-links">
              {[
                { label: 'About', href: '#about' },
                { label: 'Cruise', href: '#cruise' },
                { label: 'Itinerary', href: '#itinerary' },
                { label: 'Drinks', href: '#drinks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Solo', href: '#solo' },
              ].map((item) => (
                <a key={item.label} href={item.href} className="cheri-nav-link">{item.label}</a>
              ))}
              <a
                href="https://www.facebook.com/groups/cheribirthdaycruise"
                target="_blank"
                rel="noopener noreferrer"
                className="cheri-nav-link"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 8px' }}
                aria-label="Join Facebook Group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
            </div>
            <button className="cheri-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span />
              <span />
              <span />
            </button>
          </div>
          {menuOpen && (
            <div className="cheri-mobile-menu" style={{ display: 'flex' }}>
              {[
                { label: 'About', href: '#about' },
                { label: 'The Cruise', href: '#cruise' },
                { label: 'Itinerary', href: '#itinerary' },
                { label: 'Drink Calculator', href: '#drinks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Find a Cabin Mate', href: '#solo' },
              ].map((item) => (
                <a key={item.label} href={item.href} className="cheri-nav-link" onClick={() => setMenuOpen(false)}>{item.label}</a>
              ))}
              <a
                href="https://www.facebook.com/groups/cheribirthdaycruise"
                target="_blank"
                rel="noopener noreferrer"
                className="cheri-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Join the Facebook group
              </a>
            </div>
          )}
        </nav>

        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.7) 0%, transparent 100%), radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.5) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 45% 10%, rgba(255,255,255,0.8) 0%, transparent 100%), radial-gradient(1px 1px at 60% 55%, rgba(255,255,255,0.4) 0%, transparent 100%), radial-gradient(1px 1px at 75% 20%, rgba(255,255,255,0.6) 0%, transparent 100%)' }} />
        <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />

        {/* HERO */}
        <div id="home" style={{ position: 'relative', zIndex: 2, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '116px 24px 80px', background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(180,50,120,0.25) 0%, transparent 70%)' }}>
          <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: '#f9a8d4', border: '1px solid rgba(249,168,212,0.3)', borderRadius: 100, padding: '6px 20px', marginBottom: 32, backdropFilter: 'blur(8px)', background: 'rgba(249,168,212,0.05)' }}>
            ✦ Mediterranean · May 30 – June 6, 2027 ✦
          </div>
          <div className="cheri-number" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(130px, 22vw, 220px)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-6px', background: 'linear-gradient(135deg, #ff85c2 0%, #e040a0 30%, #b8860b 60%, #ffd700 85%, #fff8dc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 8 }}>
            60
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900, fontStyle: 'italic', color: '#fce7f3', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.5px' }}>
            Cheri is Turning{' '}
            <span style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Sixty</span>
            <br />and We&apos;re Setting Sail
          </h1>
          <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.7, color: 'rgba(252,231,243,0.7)', maxWidth: 480, marginBottom: 24 }}>
            Seven nights. The Mediterranean. The most epic birthday celebration on the high seas. 🛳️
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 16 }} className="cheri-price-pills">
            <div style={{ background: 'rgba(249,168,212,0.08)', border: '1px solid rgba(249,168,212,0.2)', borderRadius: 12, padding: '12px 20px', textAlign: 'center' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f9a8d4', margin: '0 0 4px 0' }}>Inside Cabin</p>
              <p style={{ fontSize: 22, fontWeight: 900, color: '#fce7f3', margin: 0 }}>$1,437.63<span style={{ fontSize: 12, fontWeight: 400, color: 'rgba(252,231,243,0.5)' }}>/person</span></p>
            </div>
            <div style={{ background: 'rgba(249,168,212,0.08)', border: '1px solid rgba(249,168,212,0.2)', borderRadius: 12, padding: '12px 20px', textAlign: 'center' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f9a8d4', margin: '0 0 4px 0' }}>Balcony Cabin</p>
              <p style={{ fontSize: 22, fontWeight: 900, color: '#fce7f3', margin: 0 }}>$2,032.13<span style={{ fontSize: 12, fontWeight: 400, color: 'rgba(252,231,243,0.5)' }}>/person</span></p>
            </div>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(252,231,243,0.4)', marginBottom: 36 }}>Per person · double occupancy · port fees and taxes included · gratuities not included · flex pay available</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#book" className="cheri-btn-primary">I&apos;m In — Let&apos;s Celebrate Cheri!</a>
            <AskEricButton id="1" />
          </div>
          <div style={{ marginTop: 20 }}>
            <a
              href="https://www.facebook.com/groups/cheribirthdaycruise"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'rgba(252,231,243,0.4)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
              Join the Facebook group
            </a>
          </div>
        </div>

        {/* ERIC'S NOTE */}
        <div id="about" className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', padding: '72px 24px' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16, display: 'block' }}>A note from Eric</span>
          <div style={{ background: 'linear-gradient(135deg, rgba(180,50,120,0.12), rgba(155,23,77,0.08))', border: '1px solid rgba(249,168,212,0.15)', borderRadius: 20, padding: 'clamp(20px, 5vw, 36px) clamp(16px, 5vw, 40px)', position: 'relative', overflow: 'hidden' }}>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(252,231,243,0.85)', fontStyle: 'italic', position: 'relative', zIndex: 1, marginBottom: 16 }}>
              I met Cheri for the first time in February and it took me less than a minute to see what everyone around her already knows. She lights up whatever room she walks into. She&apos;s warm, she&apos;s genuine, and she&apos;s the kind of person who makes everyone feel like they belong.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(252,231,243,0.85)', fontStyle: 'italic', position: 'relative', zIndex: 1, marginBottom: 16 }}>
              I was honored she trusted me to plan something this special. So when she told me she wanted to celebrate turning 60 on a cruise with the people she loves most, I knew we had to make it absolutely epic. And we did.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(252,231,243,0.85)', fontStyle: 'italic', position: 'relative', zIndex: 1, marginBottom: 20 }}>
              This one is for you, Cheri. You deserve every single moment of it. 🥂
            </p>
            <div style={{ fontSize: 14, fontWeight: 600, fontStyle: 'normal', color: '#f9a8d4', position: 'relative', zIndex: 1 }}>— Eric, Happy Detour Travel · Alliance, OH</div>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,168,212,0.3), rgba(251,191,36,0.3), transparent)' }} />

        {/* WE LOVE CHERI */}
        <div className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', padding: '72px 24px' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16, display: 'block' }}>Why we love Cheri</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, color: '#fce7f3', marginBottom: 28, lineHeight: 1.2 }}>Sixty Years of Pure Magic</h2>
          <div className="cheri-love-grid">
            {[
              { icon: '🌟', text: 'She walks into a room and the energy shifts. Every single time.' },
              { icon: '🥂', text: 'She knows how to celebrate life and she brings everyone along for the ride.' },
              { icon: '💕', text: 'She makes the people around her feel seen, loved, and like they belong.' },
              { icon: '🌊', text: 'Sixty years of grace, joy, and showing up for the people she loves.' },
            ].map((card, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(249,168,212,0.1)', borderRadius: 16, padding: '20px 22px' }}>
                <div style={{ fontSize: 22, marginBottom: 10 }}>{card.icon}</div>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(252,231,243,0.7)', margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,168,212,0.3), rgba(251,191,36,0.3), transparent)' }} />

        {/* CRUISE DETAILS */}
        <div id="cruise" className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', padding: '72px 24px' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16, display: 'block' }}>The voyage</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, color: '#fce7f3', marginBottom: 28, lineHeight: 1.2 }}>Seven Nights on the Mediterranean</h2>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(249,168,212,0.12)', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(224,64,160,0.2), rgba(155,23,77,0.15))', padding: 'clamp(16px, 4vw, 28px) clamp(16px, 4vw, 32px)', borderBottom: '1px solid rgba(249,168,212,0.1)' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 900, color: '#fce7f3', marginBottom: 6 }}>Odyssey of the Seas</h3>
              <p style={{ fontSize: 14, color: 'rgba(252,231,243,0.55)', margin: 0 }}>Royal Caribbean · Rome to Rome · May 30 – June 6, 2027</p>
            </div>
            {[
              { label: 'Ship', value: <><strong style={{ color: '#fce7f3' }}>Odyssey of the Seas</strong> — Royal Caribbean&apos;s stunning 2021 ship. North Star observation pod, skydiving experience, world-class entertainment, and incredible dining every night.</> },
              { label: 'Departs', value: <><strong style={{ color: '#fce7f3' }}>May 30, 2027</strong> from Rome (Civitavecchia), Italy</> },
              { label: 'Returns', value: <><strong style={{ color: '#fce7f3' }}>June 6, 2027</strong> back to Rome (Civitavecchia), Italy</> },
              { label: 'Duration', value: <><strong style={{ color: '#fce7f3' }}>7 nights</strong> · Round trip from Rome</> },
              { label: 'Pricing', value: <>Inside cabin <strong style={{ color: '#fce7f3' }}>$1,437.63/person</strong> · Balcony <strong style={{ color: '#fce7f3' }}>$2,032.13/person</strong> · Double occupancy · Port fees and taxes included · Gratuities $18.50/person/day not included</> },              { label: 'Book by', value: <>Book with a $500 deposit by <strong style={{ color: '#fbbf24' }}>August 22, 2026</strong> and your cabin gets a $50 onboard credit toward drinks, gratuities, or whatever you want. <span style={{ color: 'rgba(252,231,243,0.5)' }}>You can still join the group after that date right up until the final payment deadline of February 20, 2027. You just won't get the extra credit.</span></> },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', padding: 'clamp(12px, 3vw, 18px) clamp(16px, 4vw, 32px)', borderBottom: i < 5 ? '1px solid rgba(249,168,212,0.07)' : 'none', gap: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#f9a8d4', width: 80, flexShrink: 0, paddingTop: 2 }}>{row.label}</div>
                <div style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(252,231,243,0.8)' }}>{row.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ITINERARY */}
        <div id="itinerary" className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', padding: '0 24px 72px' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16, display: 'block' }}>Port by port</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, color: '#fce7f3', marginBottom: 28, lineHeight: 1.2 }}>Where We&apos;re Going</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { day: 1, port: 'Rome (Civitavecchia), Italy', note: 'All aboard — departs 3:00 PM' },
              { day: 2, port: 'Day at Sea', note: 'Relax, celebrate, explore the ship' },
              { day: 3, port: 'Santorini, Greece', note: '9:00 AM to 11:00 PM · The longest port day · Royal Club awaits' },
              { day: 4, port: 'Ephesus (Kusadasi), Turkey', note: '9:00 AM – 7:00 PM · Ancient wonders' },
              { day: 5, port: 'Mykonos, Greece', note: '7:00 AM – 5:00 PM · Whitewashed bliss' },
              { day: 6, port: 'Day at Sea', note: 'One more day to soak it all in' },
              { day: 7, port: 'Naples / Capri, Italy', note: '7:00 AM – 6:00 PM · Pizza, views, and pure beauty' },
              { day: 8, port: 'Rome (Civitavecchia), Italy', note: 'Arrives 5:00 AM · Until next time' },
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: i < 7 ? '1px solid rgba(249,168,212,0.06)' : 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(224,64,160,0.3), rgba(155,23,77,0.2))', border: '1px solid rgba(249,168,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#f9a8d4', flexShrink: 0 }}>{p.day}</div>
                <div>
                  <div style={{ fontSize: 14, color: 'rgba(252,231,243,0.85)' }}>{p.port}</div>
                  <div style={{ fontSize: 12, color: 'rgba(252,231,243,0.4)', marginTop: 2 }}>{p.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,168,212,0.3), rgba(251,191,36,0.3), transparent)' }} />

        {/* DRINK CALCULATOR */}
        <div id="drinks" className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', padding: '72px 24px' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16, display: 'block' }}>Do you need a drink package?</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, color: '#fce7f3', marginBottom: 12, lineHeight: 1.2 }}>Drink Package Calculator</h2>
          <p style={{ fontSize: 14, color: 'rgba(252,231,243,0.6)', marginBottom: 28, lineHeight: 1.7 }}>
            Drinks are not included in your fare. Royal Caribbean runs sales regularly and Eric will email the group when a deal drops. Everyone in the same cabin has to purchase the same package. You cannot split it. Use this calculator to see if a package makes sense for you. Please note the drink prices shown are current estimates and are subject to change.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(249,168,212,0.12)', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ padding: '24px 28px', borderBottom: '1px solid rgba(249,168,212,0.08)' }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f9a8d4', marginBottom: 20 }}>How many drinks per day per person?</p>
              {[
                { label: 'Wine (glass)', value: wine, onChange: setWine, price: drinkPrices.wine },
                { label: 'Beer', value: beer, onChange: setBeer, price: drinkPrices.beer },
                { label: 'Fancy cocktails', value: cocktails, onChange: setCocktails, price: drinkPrices.cocktails },
                { label: 'Mixed drinks', value: mixed, onChange: setMixed, price: drinkPrices.mixed },
                { label: 'Specialty coffees', value: coffee, onChange: setCoffee, price: drinkPrices.coffee },
                { label: 'Soda', value: soda, onChange: setSoda, price: drinkPrices.soda },
                { label: 'Juices / smoothies / mocktails', value: other, onChange: setOther, price: drinkPrices.other },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 6 ? '1px solid rgba(249,168,212,0.05)' : 'none' }}>
                  <div>
                    <span style={{ fontSize: 14, color: 'rgba(252,231,243,0.85)' }}>{item.label}</span>
                    <span style={{ fontSize: 12, color: 'rgba(252,231,243,0.3)', marginLeft: 8 }}>~${item.price}/drink</span>
                  </div>
                  <Counter value={item.value} onChange={item.onChange} />
                </div>
              ))}
            </div>
            <div style={{ padding: '24px 28px', background: 'linear-gradient(135deg, rgba(180,50,120,0.1), rgba(155,23,77,0.06))' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: 'rgba(252,231,243,0.6)' }}>Estimated daily spend</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#fce7f3' }}>${dailySpend.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                <span style={{ fontSize: 13, color: 'rgba(252,231,243,0.6)' }}>Estimated total for 7 nights</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#fce7f3' }}>${totalSpend.toFixed(2)}</span>
              </div>
              <div style={{ background: 'rgba(249,168,212,0.08)', border: '1px solid rgba(249,168,212,0.15)', borderRadius: 12, padding: '16px 18px' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#f9a8d4', marginBottom: 8 }}>Our recommendation</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(252,231,243,0.8)', margin: 0 }}>{recommendation}</p>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }} className="cheri-pkg-cards">
                <div style={{ flex: 1, minWidth: 160, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(249,168,212,0.1)', borderRadius: 10, padding: '12px 14px' }}>
                  <p style={{ fontSize: 11, color: 'rgba(252,231,243,0.5)', margin: '0 0 4px 0' }}>Deluxe Package (alcoholic)</p>
                  <p style={{ fontSize: 16, fontWeight: 700, color: '#fce7f3', margin: 0 }}>${deluxePerPerson.toFixed(2)} <span style={{ fontSize: 11, fontWeight: 400, color: 'rgba(252,231,243,0.4)' }}>per person</span></p>
                  <p style={{ fontSize: 11, color: 'rgba(252,231,243,0.4)', margin: '2px 0 0 0' }}>${deluxeForTwo.toFixed(2)} for both · 18% gratuity included</p>
                </div>
                <div style={{ flex: 1, minWidth: 160, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(249,168,212,0.1)', borderRadius: 10, padding: '12px 14px' }}>
                  <p style={{ fontSize: 11, color: 'rgba(252,231,243,0.5)', margin: '0 0 4px 0' }}>Refreshment Package (non-alcoholic)</p>
                  <p style={{ fontSize: 16, fontWeight: 700, color: '#fce7f3', margin: 0 }}>${refreshPerPerson.toFixed(2)} <span style={{ fontSize: 11, fontWeight: 400, color: 'rgba(252,231,243,0.4)' }}>per person</span></p>
                  <p style={{ fontSize: 11, color: 'rgba(252,231,243,0.4)', margin: '2px 0 0 0' }}>${refreshForTwo.toFixed(2)} for both · 18% gratuity included</p>
                </div>
              </div>
            </div>
            <p style={{ fontSize: 11, color: 'rgba(252,231,243,0.3)', padding: '12px 28px', lineHeight: 1.6 }}>Drink package prices shown are current sale prices and are subject to change. Eric will notify the group when sales are available.</p>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,168,212,0.3), rgba(251,191,36,0.3), transparent)' }} />

        {/* FAQ */}
        <div id="faq" className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', padding: '72px 24px' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16, display: 'block' }}>Got questions?</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, color: '#fce7f3', marginBottom: 32, lineHeight: 1.2 }}>We've Got Answers</h2>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span style={{ fontSize: 18, color: '#f9a8d4', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
            {/* Ask Eric at bottom of FAQ */}
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(249,168,212,0.1)', textAlign: 'center' }}>
              <p style={{ fontSize: 14, color: 'rgba(252,231,243,0.6)', marginBottom: 16 }}>Still have a question? Eric is here to help.</p>
              <AskEricButton id="3" />
            </div>
          </div>
        </div>


        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,168,212,0.3), rgba(251,191,36,0.3), transparent)' }} />

        {/* SOLO MATCHER */}
        <SoloMatcher />

        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,168,212,0.3), rgba(251,191,36,0.3), transparent)' }} />

        {/* CTA */}
        <div id="book" className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', padding: '72px 24px', textAlign: 'center' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16, display: 'block' }}>Ready to celebrate?</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, fontStyle: 'italic', color: '#fce7f3', marginBottom: 14, lineHeight: 1.2 }}>Come Celebrate Cheri<br />with Us at Sea</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(252,231,243,0.6)', maxWidth: 440, margin: '0 auto 36px' }}>
            Spots are limited. The earlier you lock yours in the better. Cheri is planning group activities and wants to know who is coming.
          </p>

          {/* I'm In button with popup */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
              onClick={() => setBookingOpen(!bookingOpen)}
              onBlur={() => setTimeout(() => setBookingOpen(false), 200)}
              className="cheri-btn-primary"
              style={{ cursor: 'pointer', border: 'none' }}
            >
              I&apos;m In — Let&apos;s Celebrate Cheri! ▾
            </button>
            {bookingOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#1a0a28', border: '1px solid rgba(249,168,212,0.2)', borderRadius: 16, boxShadow: '0 12px 48px rgba(0,0,0,0.5)', minWidth: 280, zIndex: 100, overflow: 'hidden' }}>
                <a
                  href="https://traveljoy.com/bookings/Cra63nGeaTzGEHzCBruiESCq"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', textDecoration: 'none', borderBottom: '1px solid rgba(249,168,212,0.1)' }}
                >
                  <span style={{ fontSize: 20 }}>💳</span>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#fce7f3', margin: 0 }}>Book Online</p>
                    <p style={{ fontSize: 12, color: 'rgba(252,231,243,0.5)', margin: '2px 0 0 0' }}>Credit card or ACH · convenience fee applies</p>
                  </div>
                </a>
                <a
                  href="tel:6308231253"
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', textDecoration: 'none', borderBottom: '1px solid rgba(249,168,212,0.1)' }}
                >
                  <span style={{ fontSize: 20 }}>📞</span>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#fce7f3', margin: 0 }}>Call Eric</p>
                    <p style={{ fontSize: 12, color: 'rgba(252,231,243,0.5)', margin: '2px 0 0 0' }}>Card over phone or Venmo · calls after 6pm EST</p>
                  </div>
                </a>
                <a
                  href="sms:6308231253"
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', textDecoration: 'none' }}
                >
                  <span style={{ fontSize: 20 }}>💬</span>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#fce7f3', margin: 0 }}>Text Eric</p>
                    <p style={{ fontSize: 12, color: 'rgba(252,231,243,0.5)', margin: '2px 0 0 0' }}>Card over phone or Venmo · text any time</p>
                  </div>
                </a>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 28 }}>
            <a href="tel:6308231253" className="cheri-contact-link">📞 630-823-1253 (calls after 6pm EST · text any time)</a>
            <span style={{ color: 'rgba(249,168,212,0.2)' }}>·</span>
            <a href="mailto:eric@happydetour.com" className="cheri-contact-link">✉ eric@happydetour.com</a>
          </div>

          {/* Facebook Group */}
          <div style={{ marginTop: 24 }}>
            <a
              href="https://www.facebook.com/groups/cheribirthdaycruise"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(252,231,243,0.45)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
              Join the Facebook group
            </a>
          </div>
        </div>

                {/* FOOTER */}
        <footer className="cheri-footer" style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(249,168,212,0.08)', padding: '28px 24px 24px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: 'rgba(249,168,212,0.5)', lineHeight: 1.7, marginBottom: 8 }}>
            Real trips. Real value. Someone actually in your corner.
            <span style={{ color: 'rgba(249,168,212,0.2)', margin: '0 8px' }}>·</span>
            Alliance, OH
            <span style={{ color: 'rgba(249,168,212,0.2)', margin: '0 8px' }}>·</span>
            630-823-1253
            <span style={{ color: 'rgba(249,168,212,0.2)', margin: '0 8px' }}>·</span>
            <a href="mailto:eric@happydetour.com">eric@happydetour.com</a>
          </p>
          <p style={{ fontSize: 11, color: 'rgba(249,168,212,0.25)', lineHeight: 1.7, margin: 0 }}>
            © 2026 Happy Detour Travel
            <span style={{ margin: '0 6px' }}>·</span>
            Affiliated with WorldVia Travel Network
            <span style={{ margin: '0 6px' }}>·</span>
            Page created July 15, 2026
          </p>
        </footer>

      </div>
    </>
  )
}
