'use client'

import { useEffect, useRef } from 'react'

export default function CheriPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
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
        if (p.round) { ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2) }
        else { ctx.rect(p.x + p.tilt, p.y, p.r, p.r * 2) }
        ctx.fill()
      })
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }
    draw()

    // Scroll reveal
    const reveals = document.querySelectorAll('.cheri-reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('cheri-visible') })
    }, { threshold: 0.1 })
    reveals.forEach(r => observer.observe(r))

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@300;400;500;600&display=swap');
        .cheri-page { font-family: 'DM Sans', sans-serif; background: #0a0612; color: #f5eef8; overflow-x: hidden; min-height: 100vh; }
        .cheri-reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .cheri-visible { opacity: 1; transform: translateY(0); }
        .cheri-btn-primary { display: inline-block; padding: 15px 36px; background: linear-gradient(135deg, #e040a0, #9d174d); color: #fff; font-size: 14px; font-weight: 600; border-radius: 100px; text-decoration: none; box-shadow: 0 8px 32px rgba(224,64,160,0.4); transition: transform 0.2s, box-shadow 0.2s; letter-spacing: 0.3px; }
        .cheri-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(224,64,160,0.55); }
        .cheri-btn-secondary { display: inline-block; padding: 15px 36px; background: rgba(255,255,255,0.06); color: #f9a8d4; font-size: 14px; font-weight: 600; border-radius: 100px; text-decoration: none; border: 1px solid rgba(249,168,212,0.25); transition: transform 0.2s, background 0.2s; backdrop-filter: blur(8px); letter-spacing: 0.3px; }
        .cheri-btn-secondary:hover { transform: translateY(-2px); background: rgba(249,168,212,0.1); }
        .cheri-contact-link { font-size: 13px; color: rgba(249,168,212,0.6); text-decoration: none; transition: color 0.2s; }
        .cheri-contact-link:hover { color: #f9a8d4; }
        .cheri-love-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 8px; }
        @media (max-width: 480px) { .cheri-love-grid { grid-template-columns: 1fr; } }
        @keyframes cheri-shimmer { from { filter: drop-shadow(0 0 30px rgba(224,64,160,0.3)); } to { filter: drop-shadow(0 0 60px rgba(224,64,160,0.6)); } }
        .cheri-number { animation: cheri-shimmer 4s ease-in-out infinite alternate; }
        footer a { color: rgba(249,168,212,0.4); text-decoration: none; }
        footer a:hover { color: rgba(249,168,212,0.7); }
      `}</style>

      <div className="cheri-page">

        {/* Stars */}
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.7) 0%, transparent 100%), radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.5) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 45% 10%, rgba(255,255,255,0.8) 0%, transparent 100%), radial-gradient(1px 1px at 60% 55%, rgba(255,255,255,0.4) 0%, transparent 100%), radial-gradient(1px 1px at 75% 20%, rgba(255,255,255,0.6) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 85% 70%, rgba(255,255,255,0.7) 0%, transparent 100%), radial-gradient(1px 1px at 92% 35%, rgba(255,255,255,0.5) 0%, transparent 100%)' }} />

        {/* Confetti */}
        <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />

        {/* HERO */}
        <div style={{ position: 'relative', zIndex: 2, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 24px 80px', background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(180,50,120,0.25) 0%, transparent 70%)' }}>
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
          <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.7, color: 'rgba(252,231,243,0.7)', maxWidth: 480, marginBottom: 44 }}>
            Seven nights. The Mediterranean. The most epic birthday celebration on the high seas. 🛳️
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://traveljoy.com/bookings/Cra63nGeaTzGEHzCBruiESCq" target="_blank" rel="noopener noreferrer" className="cheri-btn-primary">I Want to Be on That Ship</a>
            <a href="mailto:eric@happydetour.com?subject=Cheri's 60th Birthday Cruise" className="cheri-btn-secondary">Get More Info</a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,168,212,0.3), rgba(251,191,36,0.3), transparent)' }} />

        {/* ERIC'S NOTE */}
        <div className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', padding: '72px 24px' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16, display: 'block' }}>A note from Eric</span>
          <div style={{ background: 'linear-gradient(135deg, rgba(180,50,120,0.12), rgba(155,23,77,0.08))', border: '1px solid rgba(249,168,212,0.15)', borderRadius: 20, padding: '36px 40px', position: 'relative', overflow: 'hidden' }}>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(252,231,243,0.85)', fontStyle: 'italic', position: 'relative', zIndex: 1, marginBottom: 16 }}>
              I met Cheri for the first time in February and it took me less than a minute to see what everyone around her already knows. She lights up whatever room she walks into. She&apos;s warm, she&apos;s genuine, and she&apos;s the kind of person who makes everyone feel like they belong.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(252,231,243,0.85)', fontStyle: 'italic', position: 'relative', zIndex: 1, marginBottom: 16 }}>
              I was honored she trusted me to plan something this special. So when she told me she wanted to celebrate turning 60 on a cruise with the people she loves most, I knew we had to make it absolutely epic. And we did.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(252,231,243,0.85)', fontStyle: 'italic', position: 'relative', zIndex: 1, marginBottom: 20 }}>
              This one is for you, Cheri. You deserve every single moment of it. 🥂
            </p>
            <div style={{ fontSize: 14, fontWeight: 600, fontStyle: 'normal', color: '#f9a8d4', position: 'relative', zIndex: 1 }}>— Eric, Happy Detour Travel</div>
          </div>
        </div>

        {/* PHOTO */}
        <div className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 420, margin: '0 auto', padding: '0 24px 60px', textAlign: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src="/cheri.jpg" alt="Eric and Cheri" style={{ width: '100%', maxWidth: 360, borderRadius: 20, display: 'block', border: '3px solid rgba(249,168,212,0.2)', boxShadow: '0 24px 80px rgba(224,64,160,0.25), 0 0 0 1px rgba(249,168,212,0.1)' }} />
            <div style={{ position: 'absolute', bottom: -16, right: -16, background: 'linear-gradient(135deg, #e040a0, #9d174d)', color: '#fff', borderRadius: 100, padding: '8px 18px', fontSize: 12, fontWeight: 700, boxShadow: '0 8px 24px rgba(224,64,160,0.4)', whiteSpace: 'nowrap' }}>✨ February 2026</div>
          </div>
          <p style={{ marginTop: 28, fontSize: 13, color: 'rgba(249,168,212,0.6)', fontStyle: 'italic', lineHeight: 1.6 }}>Less than a minute. That&apos;s all it took. 💕</p>
        </div>

        {/* Divider */}
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

        {/* Divider */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,168,212,0.3), rgba(251,191,36,0.3), transparent)' }} />

        {/* CRUISE DETAILS */}
        <div className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', padding: '72px 24px' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16, display: 'block' }}>The voyage</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, color: '#fce7f3', marginBottom: 28, lineHeight: 1.2 }}>Seven Nights on the Mediterranean</h2>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(249,168,212,0.12)', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(224,64,160,0.2), rgba(155,23,77,0.15))', padding: '28px 32px', borderBottom: '1px solid rgba(249,168,212,0.1)' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 900, color: '#fce7f3', marginBottom: 6 }}>Odyssey of the Seas</h3>
              <p style={{ fontSize: 14, color: 'rgba(252,231,243,0.55)', margin: 0 }}>Royal Caribbean · Rome to Rome · May 30 – June 6, 2027</p>
            </div>
            {[
              { label: 'Ship', value: <><strong style={{ color: '#fce7f3' }}>Odyssey of the Seas</strong> — Royal Caribbean&apos;s stunning 2021 ship. North Star observation pod, skydiving experience, world-class entertainment, and incredible dining every night.</> },
              { label: 'Departs', value: <><strong style={{ color: '#fce7f3' }}>May 30, 2027</strong> from Rome (Civitavecchia), Italy</> },
              { label: 'Returns', value: <><strong style={{ color: '#fce7f3' }}>June 6, 2027</strong> back to Rome (Civitavecchia), Italy</> },
              { label: 'Duration', value: <><strong style={{ color: '#fce7f3' }}>7 nights</strong> · Round trip from Rome</> },
              { label: 'Book by', value: <><strong style={{ color: '#fce7f3' }}>August 22, 2026</strong> — Early bookers receive a $50 onboard credit per cabin toward drinks or gratuities. Final payment due February 20, 2027.</> },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', padding: '18px 32px', borderBottom: i < 4 ? '1px solid rgba(249,168,212,0.07)' : 'none', gap: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#f9a8d4', width: 100, flexShrink: 0, paddingTop: 2 }}>{row.label}</div>
                <div style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(252,231,243,0.8)' }}>{row.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ITINERARY */}
        <div className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', padding: '0 24px 72px' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16, display: 'block' }}>Port by port</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, color: '#fce7f3', marginBottom: 28, lineHeight: 1.2 }}>Where We&apos;re Going</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { day: 1, port: 'Rome (Civitavecchia), Italy', note: 'All aboard — departs 3:00 PM' },
              { day: 2, port: 'Day at Sea 🌊', note: 'Relax, celebrate, explore the ship' },
              { day: 3, port: 'Santorini, Greece', note: '9:00 AM – 11:00 PM · The longest port day — Royal Club awaits' },
              { day: 4, port: 'Ephesus (Kusadasi), Turkey', note: '9:00 AM – 7:00 PM · Ancient wonders' },
              { day: 5, port: 'Mykonos, Greece', note: '7:00 AM – 5:00 PM · Whitewashed bliss' },
              { day: 6, port: 'Day at Sea 🌅', note: 'One more day to soak it all in' },
              { day: 7, port: 'Naples / Capri, Italy', note: '7:00 AM – 6:00 PM · Pizza, views, and pure beauty' },
              { day: 8, port: 'Rome (Civitavecchia), Italy', note: 'Arrives 5:00 AM · Until next time 🛳️' },
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

        {/* Divider */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,168,212,0.3), rgba(251,191,36,0.3), transparent)' }} />

        {/* CTA */}
        <div className="cheri-reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', padding: '72px 24px', textAlign: 'center' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' as const, color: '#f9a8d4', marginBottom: 16, display: 'block' }}>Ready to celebrate?</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, fontStyle: 'italic', color: '#fce7f3', marginBottom: 14, lineHeight: 1.2 }}>Come Celebrate Cheri<br />with Us at Sea</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(252,231,243,0.6)', maxWidth: 440, margin: '0 auto 36px' }}>
            Spots are limited. The earlier you lock yours in the better. Reach out to Eric directly or click below to claim your cabin and be part of the most epic birthday cruise of 2027.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://traveljoy.com/bookings/Cra63nGeaTzGEHzCBruiESCq" target="_blank" rel="noopener noreferrer" className="cheri-btn-primary">I Want to Be on That Ship</a>
            <a href="mailto:eric@happydetour.com?subject=Cheri's 60th Birthday Cruise" className="cheri-btn-secondary">Ask Eric a Question</a>
          </div>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
            <a href="tel:7473338687" className="cheri-contact-link">📞 747-333-8687</a>
            <span style={{ color: 'rgba(249,168,212,0.2)' }}>·</span>
            <a href="mailto:eric@happydetour.com" className="cheri-contact-link">✉ eric@happydetour.com</a>
          </div>
        </div>

        {/* FOOTER */}
        <footer style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(249,168,212,0.08)', padding: '28px 24px 24px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: 'rgba(249,168,212,0.5)', lineHeight: 1.7, marginBottom: 8 }}>
            Real trips. Real value. Someone actually in your corner.
            <span style={{ color: 'rgba(249,168,212,0.2)', margin: '0 8px' }}>·</span>
            Alliance, OH
            <span style={{ color: 'rgba(249,168,212,0.2)', margin: '0 8px' }}>·</span>
            747-333-8687
            <span style={{ color: 'rgba(249,168,212,0.2)', margin: '0 8px' }}>·</span>
            <a href="mailto:eric@happydetour.com">eric@happydetour.com</a>
          </p>
          <p style={{ fontSize: 11, color: 'rgba(249,168,212,0.25)', lineHeight: 1.7, margin: 0 }}>
            © 2026 Happy Detour Travel
            <span style={{ margin: '0 6px' }}>·</span>
            Affiliated with WorldVia Travel Network
            <span style={{ margin: '0 6px' }}>·</span>
            Page created July 14, 2026
          </p>
        </footer>

      </div>
    </>
  )
}
