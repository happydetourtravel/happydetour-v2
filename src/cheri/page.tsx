<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Cheri's Epic 60th Birthday Cruise 🛳️</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'DM Sans', sans-serif;
    background: #0a0612;
    color: #f5eef8;
    overflow-x: hidden;
  }

  /* ── Stars background ── */
  .stars {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background:
      radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.7) 0%, transparent 100%),
      radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 45% 10%, rgba(255,255,255,0.8) 0%, transparent 100%),
      radial-gradient(1px 1px at 60% 55%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 75% 20%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 85% 70%, rgba(255,255,255,0.7) 0%, transparent 100%),
      radial-gradient(1px 1px at 92% 35%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 5% 80%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 33% 75%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 55% 85%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 70% 90%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 18% 60%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 40% 30%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 88% 15%, rgba(255,255,255,0.7) 0%, transparent 100%);
  }

  /* ── Confetti canvas ── */
  #confetti-canvas {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: 1;
    overflow: hidden;
  }

  /* ── Hero ── */
  .hero {
    position: relative; z-index: 2;
    min-height: 100vh;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center;
    padding: 60px 24px 80px;
    background: radial-gradient(ellipse 80% 60% at 50% 30%, rgba(180,50,120,0.25) 0%, transparent 70%);
  }

  .hero-eyebrow {
    display: inline-block;
    font-size: 11px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase;
    color: #f9a8d4;
    border: 1px solid rgba(249,168,212,0.3);
    border-radius: 100px;
    padding: 6px 20px;
    margin-bottom: 32px;
    backdrop-filter: blur(8px);
    background: rgba(249,168,212,0.05);
  }

  .hero-number {
    font-family: 'Playfair Display', serif;
    font-size: clamp(130px, 22vw, 220px);
    font-weight: 900;
    line-height: 0.85;
    letter-spacing: -6px;
    background: linear-gradient(135deg, #ff85c2 0%, #e040a0 30%, #b8860b 60%, #ffd700 85%, #fff8dc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
    position: relative;
    filter: drop-shadow(0 0 40px rgba(224,64,160,0.4));
    animation: shimmer 4s ease-in-out infinite alternate;
  }

  @keyframes shimmer {
    from { filter: drop-shadow(0 0 30px rgba(224,64,160,0.3)); }
    to   { filter: drop-shadow(0 0 60px rgba(224,64,160,0.6)); }
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 5vw, 52px);
    font-weight: 900;
    font-style: italic;
    color: #fce7f3;
    line-height: 1.15;
    margin-bottom: 20px;
    letter-spacing: -0.5px;
  }

  .hero-title span {
    background: linear-gradient(90deg, #fbbf24, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    font-size: 15px; font-weight: 400; line-height: 1.7;
    color: rgba(252,231,243,0.7);
    max-width: 480px;
    margin-bottom: 44px;
  }

  .hero-buttons {
    display: flex; gap: 14px; flex-wrap: wrap; justify-content: center;
  }

  .btn-primary {
    display: inline-block;
    padding: 15px 36px;
    background: linear-gradient(135deg, #e040a0, #9d174d);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px; font-weight: 600;
    border-radius: 100px;
    text-decoration: none;
    box-shadow: 0 8px 32px rgba(224,64,160,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    letter-spacing: 0.3px;
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(224,64,160,0.55);
  }

  .btn-secondary {
    display: inline-block;
    padding: 15px 36px;
    background: rgba(255,255,255,0.06);
    color: #f9a8d4;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px; font-weight: 600;
    border-radius: 100px;
    text-decoration: none;
    border: 1px solid rgba(249,168,212,0.25);
    transition: transform 0.2s, background 0.2s;
    backdrop-filter: blur(8px);
    letter-spacing: 0.3px;
  }
  .btn-secondary:hover {
    transform: translateY(-2px);
    background: rgba(249,168,212,0.1);
  }

  /* ── Divider ── */
  .divider {
    position: relative; z-index: 2;
    width: 100%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(249,168,212,0.3), rgba(251,191,36,0.3), transparent);
    margin: 0;
  }

  /* ── Sections ── */
  section {
    position: relative; z-index: 2;
    max-width: 720px; margin: 0 auto;
    padding: 72px 24px;
  }

  .eyebrow {
    font-size: 10px; font-weight: 700; letter-spacing: 4px;
    text-transform: uppercase; color: #f9a8d4;
    margin-bottom: 16px; display: block;
  }

  /* ── Eric's note ── */
  .eric-note {
    background: linear-gradient(135deg, rgba(180,50,120,0.12), rgba(155,23,77,0.08));
    border: 1px solid rgba(249,168,212,0.15);
    border-radius: 20px;
    padding: 36px 40px;
    position: relative;
    overflow: hidden;
  }
  .eric-note::before {
    content: '"';
    position: absolute; top: -20px; left: 24px;
    font-family: 'Playfair Display', serif;
    font-size: 160px; font-weight: 900;
    color: rgba(249,168,212,0.06);
    line-height: 1;
    pointer-events: none;
  }
  .eric-note p {
    font-size: 17px; line-height: 1.8;
    color: rgba(252,231,243,0.85);
    font-style: italic;
    position: relative; z-index: 1;
    margin-bottom: 20px;
  }
  .eric-note .signature {
    font-size: 14px; font-weight: 600; font-style: normal;
    color: #f9a8d4; position: relative; z-index: 1;
  }

  /* ── Photo ── */
  .photo-wrapper {
    position: relative; z-index: 2;
    max-width: 420px; margin: 0 auto;
    padding: 0 24px 60px;
    text-align: center;
  }
  .photo-frame {
    position: relative; display: inline-block;
  }
  .photo-frame img {
    width: 100%; max-width: 360px;
    border-radius: 20px;
    display: block;
    border: 3px solid rgba(249,168,212,0.2);
    box-shadow: 0 24px 80px rgba(224,64,160,0.25), 0 0 0 1px rgba(249,168,212,0.1);
  }
  .photo-badge {
    position: absolute; bottom: -16px; right: -16px;
    background: linear-gradient(135deg, #e040a0, #9d174d);
    color: #fff; border-radius: 100px;
    padding: 8px 18px; font-size: 12px; font-weight: 700;
    box-shadow: 0 8px 24px rgba(224,64,160,0.4);
    white-space: nowrap;
  }
  .photo-caption {
    margin-top: 28px;
    font-size: 13px; color: rgba(249,168,212,0.6);
    font-style: italic; line-height: 1.6;
  }

  /* ── Cruise details ── */
  .cruise-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(249,168,212,0.12);
    border-radius: 20px;
    overflow: hidden;
  }
  .cruise-card-header {
    background: linear-gradient(135deg, rgba(224,64,160,0.2), rgba(155,23,77,0.15));
    padding: 28px 32px;
    border-bottom: 1px solid rgba(249,168,212,0.1);
  }
  .cruise-card-header h3 {
    font-family: 'Playfair Display', serif;
    font-size: 26px; font-weight: 900;
    color: #fce7f3; margin-bottom: 6px;
  }
  .cruise-card-header p {
    font-size: 14px; color: rgba(252,231,243,0.55);
  }

  .cruise-detail-row {
    display: flex; align-items: flex-start;
    padding: 18px 32px;
    border-bottom: 1px solid rgba(249,168,212,0.07);
    gap: 16px;
  }
  .cruise-detail-row:last-child { border-bottom: none; }
  .cruise-detail-label {
    font-size: 11px; font-weight: 700; letter-spacing: 2px;
    text-transform: uppercase; color: #f9a8d4;
    width: 100px; flex-shrink: 0; padding-top: 2px;
  }
  .cruise-detail-value {
    font-size: 14px; line-height: 1.65;
    color: rgba(252,231,243,0.8);
  }
  .cruise-detail-value strong {
    color: #fce7f3; font-weight: 600;
  }

  /* ── Ports ── */
  .port-list {
    display: flex; flex-direction: column; gap: 0;
  }
  .port-item {
    display: flex; align-items: center; gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(249,168,212,0.06);
  }
  .port-item:last-child { border-bottom: none; }
  .port-day {
    width: 32px; height: 32px; border-radius: 50%;
    background: linear-gradient(135deg, rgba(224,64,160,0.3), rgba(155,23,77,0.2));
    border: 1px solid rgba(249,168,212,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; color: #f9a8d4;
    flex-shrink: 0;
  }
  .port-name { font-size: 14px; color: rgba(252,231,243,0.85); }
  .port-note { font-size: 12px; color: rgba(252,231,243,0.4); margin-top: 2px; }

  /* ── Love section ── */
  .love-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
    margin-top: 8px;
  }
  @media (max-width: 480px) { .love-grid { grid-template-columns: 1fr; } }
  .love-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(249,168,212,0.1);
    border-radius: 16px;
    padding: 20px 22px;
  }
  .love-card .icon { font-size: 22px; margin-bottom: 10px; }
  .love-card p { font-size: 13px; line-height: 1.7; color: rgba(252,231,243,0.7); }

  /* ── CTA section ── */
  .cta-section {
    text-align: center;
  }
  .cta-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 5vw, 42px);
    font-weight: 900; font-style: italic;
    color: #fce7f3; margin-bottom: 14px; line-height: 1.2;
  }
  .cta-section p {
    font-size: 14px; line-height: 1.75;
    color: rgba(252,231,243,0.6);
    max-width: 440px; margin: 0 auto 36px;
  }
  .contact-links {
    display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
    margin-top: 24px;
  }
  .contact-link {
    font-size: 13px; color: rgba(249,168,212,0.6);
    text-decoration: none;
    transition: color 0.2s;
  }
  .contact-link:hover { color: #f9a8d4; }

  /* ── Footer ── */
  footer {
    position: relative; z-index: 2;
    border-top: 1px solid rgba(249,168,212,0.08);
    padding: 28px 24px 24px;
    text-align: center;
  }
  footer p {
    font-size: 13px; color: rgba(249,168,212,0.5);
    line-height: 1.7; margin-bottom: 8px;
  }
  footer .footer-small {
    font-size: 11px; color: rgba(249,168,212,0.25);
    line-height: 1.7;
  }
  footer a { color: rgba(249,168,212,0.4); text-decoration: none; }
  footer a:hover { color: rgba(249,168,212,0.7); }

  /* ── Section title ── */
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(26px, 4vw, 36px);
    font-weight: 900;
    color: #fce7f3;
    margin-bottom: 28px;
    line-height: 1.2;
  }

  /* scroll reveal */
  .reveal {
    opacity: 0; transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }
</style>
</head>
<body>

<div class="stars"></div>
<canvas id="confetti-canvas"></canvas>

<!-- HERO -->
<div class="hero">
  <div class="hero-eyebrow">✦ Mediterranean · May 30 – June 6, 2027 ✦</div>
  <div class="hero-number">60</div>
  <h1 class="hero-title">Cheri is Turning <span>Sixty</span><br />and We're Setting Sail</h1>
  <p class="hero-sub">Seven nights. The Mediterranean. The most epic birthday celebration on the high seas. 🛳️</p>
  <div class="hero-buttons">
    <a href="https://traveljoy.com/bookings/Cra63nGeaTzGEHzCBruiESCq" target="_blank" class="btn-primary">I Want to Be on That Ship</a>
    <a href="mailto:eric@happydetour.com" class="btn-secondary">Get More Info</a>
  </div>
</div>

<div class="divider"></div>

<!-- ERIC'S NOTE -->
<section class="reveal">
  <span class="eyebrow">A note from Eric</span>
  <div class="eric-note">
    <p>I met Cheri for the first time in February and it took me less than a minute to see what everyone around her already knows. She lights up whatever room she walks into. She's warm, she's genuine, and she's the kind of person who makes everyone feel like they belong.</p>
    <p>I was honored she trusted me to plan something this special. So when she told me she wanted to celebrate turning 60 on a cruise with the people she loves most, I knew we had to make it absolutely epic. And we did.</p>
    <p>This one is for you, Cheri. You deserve every single moment of it. 🥂</p>
    <div class="signature">— Eric, Happy Detour Travel</div>
  </div>
</section>

<!-- PHOTO -->
<div class="photo-wrapper reveal">
  <div class="photo-frame">
    <img src="Cheri.jpg" alt="Eric and Cheri" />
    <div class="photo-badge">✨ February 2026</div>
  </div>
  <p class="photo-caption">Less than a minute. That's all it took. 💕</p>
</div>

<div class="divider"></div>

<!-- WE LOVE CHERI -->
<section class="reveal">
  <span class="eyebrow">Why we love Cheri</span>
  <h2 class="section-title">Sixty Years of Pure Magic</h2>
  <div class="love-grid">
    <div class="love-card">
      <div class="icon">🌟</div>
      <p>She walks into a room and the energy shifts. Every single time.</p>
    </div>
    <div class="love-card">
      <div class="icon">🥂</div>
      <p>She knows how to celebrate life and she brings everyone along for the ride.</p>
    </div>
    <div class="love-card">
      <div class="icon">💕</div>
      <p>She makes the people around her feel seen, loved, and like they belong.</p>
    </div>
    <div class="love-card">
      <div class="icon">🌊</div>
      <p>Sixty years of grace, joy, and showing up for the people she loves.</p>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- CRUISE DETAILS -->
<section class="reveal">
  <span class="eyebrow">The voyage</span>
  <h2 class="section-title">Seven Nights on the Mediterranean</h2>
  <div class="cruise-card">
    <div class="cruise-card-header">
      <h3>Odyssey of the Seas</h3>
      <p>Royal Caribbean · Rome to Rome · May 30 – June 6, 2027</p>
    </div>
    <div class="cruise-detail-row">
      <div class="cruise-detail-label">Ship</div>
      <div class="cruise-detail-value"><strong>Odyssey of the Seas</strong> — Royal Caribbean's stunning 2021 ship. North Star observation pod, skydiving experience, world-class entertainment, and incredible dining every night.</div>
    </div>
    <div class="cruise-detail-row">
      <div class="cruise-detail-label">Departs</div>
      <div class="cruise-detail-value"><strong>May 30, 2027</strong> from Rome (Civitavecchia), Italy</div>
    </div>
    <div class="cruise-detail-row">
      <div class="cruise-detail-label">Returns</div>
      <div class="cruise-detail-value"><strong>June 6, 2027</strong> back to Rome (Civitavecchia), Italy</div>
    </div>
    <div class="cruise-detail-row">
      <div class="cruise-detail-label">Duration</div>
      <div class="cruise-detail-value"><strong>7 nights</strong> · Round trip from Rome</div>
    </div>
    <div class="cruise-detail-row">
      <div class="cruise-detail-label">Book by</div>
      <div class="cruise-detail-value"><strong>August 22, 2026</strong> — Early bookers receive a $50 onboard credit per cabin toward drinks or gratuities. Final payment due February 20, 2027.</div>
    </div>
  </div>
</section>

<!-- ITINERARY -->
<section class="reveal">
  <span class="eyebrow">Port by port</span>
  <h2 class="section-title">Where We're Going</h2>
  <div class="port-list">
    <div class="port-item">
      <div class="port-day">1</div>
      <div>
        <div class="port-name">Rome (Civitavecchia), Italy</div>
        <div class="port-note">All aboard — departs 3:00 PM</div>
      </div>
    </div>
    <div class="port-item">
      <div class="port-day">2</div>
      <div>
        <div class="port-name">Day at Sea 🌊</div>
        <div class="port-note">Relax, celebrate, explore the ship</div>
      </div>
    </div>
    <div class="port-item">
      <div class="port-day">3</div>
      <div>
        <div class="port-name">Santorini, Greece</div>
        <div class="port-note">9:00 AM – 11:00 PM · The longest port day — Royal Club awaits</div>
      </div>
    </div>
    <div class="port-item">
      <div class="port-day">4</div>
      <div>
        <div class="port-name">Ephesus (Kusadasi), Turkey</div>
        <div class="port-note">9:00 AM – 7:00 PM · Ancient wonders</div>
      </div>
    </div>
    <div class="port-item">
      <div class="port-day">5</div>
      <div>
        <div class="port-name">Mykonos, Greece</div>
        <div class="port-note">7:00 AM – 5:00 PM · Whitewashed bliss</div>
      </div>
    </div>
    <div class="port-item">
      <div class="port-day">6</div>
      <div>
        <div class="port-name">Day at Sea 🌅</div>
        <div class="port-note">One more day to soak it all in</div>
      </div>
    </div>
    <div class="port-item">
      <div class="port-day">7</div>
      <div>
        <div class="port-name">Naples / Capri, Italy</div>
        <div class="port-note">7:00 AM – 6:00 PM · Pizza, views, and pure beauty</div>
      </div>
    </div>
    <div class="port-item">
      <div class="port-day">8</div>
      <div>
        <div class="port-name">Rome (Civitavecchia), Italy</div>
        <div class="port-note">Arrives 5:00 AM · Until next time 🛳️</div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- CTA -->
<section class="cta-section reveal">
  <span class="eyebrow">Ready to celebrate?</span>
  <h2>Come Celebrate Cheri<br />with Us at Sea</h2>
  <p>Spots are limited. The earlier you lock yours in the better. Reach out to Eric directly or click below to claim your cabin and be part of the most epic birthday cruise of 2027.</p>
  <div class="hero-buttons">
    <a href="https://traveljoy.com/bookings/Cra63nGeaTzGEHzCBruiESCq" target="_blank" class="btn-primary">I Want to Be on That Ship</a>
    <a href="mailto:eric@happydetour.com?subject=Cheri's 60th Birthday Cruise" class="btn-secondary">Ask Eric a Question</a>
  </div>
  <div class="contact-links">
    <a href="tel:7473338687" class="contact-link">📞 747-333-8687</a>
    <span style="color:rgba(249,168,212,0.2)">·</span>
    <a href="mailto:eric@happydetour.com" class="contact-link">✉ eric@happydetour.com</a>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <p>Real trips. Real value. Someone actually in your corner.
    <span style="color:rgba(249,168,212,0.2);margin:0 8px">·</span>
    Alliance, OH
    <span style="color:rgba(249,168,212,0.2);margin:0 8px">·</span>
    747-333-8687
    <span style="color:rgba(249,168,212,0.2);margin:0 8px">·</span>
    <a href="mailto:eric@happydetour.com">eric@happydetour.com</a>
  </p>
  <p class="footer-small">
    © 2026 Happy Detour Travel
    <span style="margin:0 6px">·</span>
    Affiliated with WorldVia Travel Network
    <span style="margin:0 6px">·</span>
    Page created July 14, 2026
  </p>
</footer>

<script>
// ── Confetti ──
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const COLORS = ['#ff85c2','#ffd700','#e040a0','#f9a8d4','#ffffff','#b8860b','#ffc8dd','#ff4d79'];
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
}));

let frame = 0;
function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  frame++;
  pieces.forEach(p => {
    p.tiltAngle += p.tiltSpeed;
    p.y += p.d;
    p.tilt = Math.sin(p.tiltAngle) * 12;
    if (p.y > canvas.height + 20) {
      p.y = -10; p.x = Math.random() * canvas.width;
    }
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    if (p.round) {
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    } else {
      ctx.rect(p.x + p.tilt, p.y, p.r, p.r * 2);
    }
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(drawConfetti);
}
drawConfetti();

// ── Scroll reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));
</script>
</body>
</html>
