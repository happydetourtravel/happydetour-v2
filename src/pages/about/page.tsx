export default function About() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet">
  <style>
    :root { --blue: #007298; --blue-dark: #005a78; --blue-light: #e6f4f8; --blue-mid: #cce9f1; --amber: #F59E0B; --amber-dark: #d97706; --amber-light: #fef3c7; --bg: #F9FAFB; --white: #FFFFFF; --text: #1F2937; --soft: #6B7280; --border: #E5E7EB; --font: 'Plus Jakarta Sans', sans-serif; }
    .about-wrap { font-family: var(--font); background: var(--bg); color: var(--text); line-height: 1.75; -webkit-font-smoothing: antialiased; }
    .hero { background: var(--blue); background-image: radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245,158,11,0.12) 0%, transparent 50%); color: var(--white); padding: 5rem 1.5rem 4.5rem; text-align: center; position: relative; overflow: hidden; }
    .hero-eyebrow { display: inline-block; background: rgba(245,158,11,0.2); border: 1px solid rgba(245,158,11,0.35); color: var(--amber); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.35rem 1rem; border-radius: 100px; margin-bottom: 1.5rem; }
    .hero h1 { font-size: clamp(2.5rem, 6vw, 3.75rem); font-weight: 800; line-height: 1.15; margin-bottom: 1rem; letter-spacing: -0.02em; }
    .hero-sub { font-size: 1.05rem; color: rgba(255,255,255,0.7); max-width: 480px; margin: 0 auto; font-style: italic; }
    .container { max-width: 800px; margin: 0 auto; padding: 0 1.5rem; }
    .section { padding: 4.5rem 0; }
    .section-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--amber); margin-bottom: 0.5rem; }
    .section h2 { font-size: clamp(1.6rem, 3vw, 2.1rem); font-weight: 800; color: var(--blue); line-height: 1.25; margin-bottom: 1.5rem; letter-spacing: -0.01em; }
    .section p { font-size: 1rem; color: #374151; line-height: 1.85; margin-bottom: 1.2rem; }
    .intro-grid { display: grid; grid-template-columns: 1fr 240px; gap: 3.5rem; align-items: start; }
    .eric-photo { width: 240px; height: 290px; object-fit: cover; object-position: center top; border-radius: 20px; box-shadow: 0 0 0 6px var(--white), 0 0 0 8px var(--blue-mid), 0 12px 40px rgba(0,114,152,0.2); }
    .pull-quote { background: var(--blue); color: var(--white); border-radius: 16px; padding: 1.75rem 2rem; margin: 2rem 0; position: relative; }
    .pull-quote::before { content: '"'; position: absolute; top: -0.25rem; left: 1.25rem; font-size: 5rem; color: rgba(245,158,11,0.4); font-family: Georgia, serif; line-height: 1; }
    .pull-quote p { font-size: 1.05rem; font-style: italic; font-weight: 600; color: var(--white); margin: 0 0 0.5rem; padding-left: 0.5rem; }
    .pull-quote span { font-size: 0.8rem; color: rgba(255,255,255,0.6); padding-left: 0.5rem; }
    .cruiser { background: var(--white); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .trip-tags { display: flex; flex-wrap: wrap; gap: 0.6rem; margin: 1.5rem 0; }
    .tag { background: var(--blue); color: var(--white); font-size: 0.82rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: 100px; }
    .tag.amber { background: var(--amber-light); color: #92400e; border: 1px solid #fcd34d; }
    .teamwork-box { background: var(--blue-light); border: 1px solid var(--blue-mid); border-radius: 20px; padding: 2.25rem 2.5rem; }
    .teamwork-box p { color: #1e4d5e; }
    .eeat { background: var(--white); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .eeat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }
    .eeat-card { background: var(--bg); border: 1px solid var(--border); border-top: 3px solid var(--blue); border-radius: 14px; padding: 1.5rem 1.25rem; transition: transform 0.2s, box-shadow 0.2s; }
    .eeat-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,114,152,0.12); }
    .eeat-icon { width: 40px; height: 40px; background: var(--blue-light); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 0.85rem; }
    .eeat-icon svg { width: 20px; height: 20px; stroke: var(--blue); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    .eeat-card h3 { font-size: 0.72rem; font-weight: 700; color: var(--blue); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.3rem; }
    .eeat-card h4 { font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem; }
    .eeat-card p { font-size: 0.85rem; color: var(--soft); line-height: 1.6; margin: 0; }
    .vitals-list { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1.5rem; }
    .vitals-list li { display: flex; align-items: center; gap: 1rem; background: var(--white); border: 1px solid var(--border); border-radius: 12px; padding: 1rem 1.35rem; font-size: 0.95rem; color: #374151; transition: border-color 0.2s; }
    .vitals-list li:hover { border-color: var(--blue-mid); }
    .vitals-list li .vi { font-size: 1.5rem; flex-shrink: 0; width: 36px; text-align: center; }
    .vitals-list li strong { color: var(--text); font-weight: 700; }
    .cta { background: var(--blue); background-image: radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 60%); color: var(--white); text-align: center; padding: 5rem 1.5rem; }
    .cta h2 { font-size: clamp(1.75rem, 4vw, 2.5rem); font-weight: 800; color: var(--white); margin-bottom: 0.75rem; letter-spacing: -0.02em; }
    .cta p { color: rgba(255,255,255,0.72); font-size: 1rem; max-width: 420px; margin: 0 auto 2.25rem; }
    .btn { display: inline-flex; align-items: center; gap: 0.6rem; background: var(--amber); color: var(--white); font-weight: 700; font-size: 1rem; padding: 0.95rem 2.5rem; border-radius: 100px; text-decoration: none; transition: background 0.2s, transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 16px rgba(245,158,11,0.35); }
    .btn:hover { background: var(--amber-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(245,158,11,0.4); }
    .cta-note { margin-top: 1.25rem; font-size: 0.82rem; color: rgba(255,255,255,0.45); }
    .ig-link { display: inline-block; margin-top: 0.5rem; font-size: 0.85rem; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
    .ig-link:hover { color: var(--amber); }
    @media (max-width: 720px) { .intro-grid { grid-template-columns: 1fr; } .eric-photo { width: 100%; height: 300px; order: -1; } .eeat-grid { grid-template-columns: 1fr 1fr; } .teamwork-box { padding: 1.5rem; } }
    @media (max-width: 480px) { .eeat-grid { grid-template-columns: 1fr; } }
  </style>

  <div class="about-wrap">

    <section class="hero">
      <div class="hero-eyebrow">About Happy Detour Travel</div>
      <h1>The Anti Second Job.</h1>
      <p class="hero-sub">Real trips. Real value. Someone actually in your corner.</p>
    </section>

    <section class="section">
      <div class="container">
        <div class="intro-grid">
          <div>
            <p class="section-label">My Story</p>
            <h2>Hi, I am Eric. I am here to make travel simple.</h2>
            <p>For as long as I can remember, definitely since at least 2017, I have been that guy in the group chat. I was the one finding the weirdly good flight deals, obsessing over cruise deck plans, and basically acting as an unpaid travel advisor for my friends and family just for the fun of it. I did not do it for the thanks. I did it because I genuinely love the puzzle of a perfect itinerary.</p>
            <p>Eventually, the hints from everyone I knew became too loud to ignore: Eric, you are already doing the work. You should actually do this for real.</p>
            <p>So, I listened. Happy Detour Travel started as a late night idea in late 2025 and officially came to life in March of 2026. I will be the first to tell you that I am still building this dream. There is a learning curve, and some days I am leaning on a lot of Dunkin iced coffee, a few Coke Zeros, and a healthy dose of determination to figure out the technical side of things from my home base in Ohio. But I am working through it every single day to build a travel brand that is vibrant, fun, and something I am proud of.</p>
            <div class="pull-quote">
              <p>Sometimes the best journeys begin with a Happy Detour.</p>
              <span>Eric Carney, Happy Detour Travel</span>
            </div>
          </div>
          <img src="/IMG_2781.jpeg" alt="Eric Carney, travel advisor at Happy Detour Travel" class="eric-photo" />
        </div>
      </div>
    </section>

    <section class="section cruiser">
      <div class="container">
        <p class="section-label">Where I have Been</p>
        <h2>A Cruiser at Heart</h2>
        <p>I believe the world is far too big to stay in one spot. You only live once and most of us do not see nearly enough of what is out there. I am a cruiser at heart. I love that the biggest decision of the day is which pool deck to lounge on. But I have also spent time navigating London and getting lost in the absolute bliss of Caribbean resorts where everything is included. One trip is never enough. There is always more to see.</p>
        <p>Right now, I am deep in the weeds researching a safari in Tanzania. It is a major bucket list item, and I am going to make it happen soon.</p>
        <div class="trip-tags">
          <span class="tag">🚢 Cruises</span>
          <span class="tag">🏖️ All Inclusives</span>
          <span class="tag">🏰 London</span>
          <span class="tag">🗼 Tokyo</span>
          <span class="tag amber">🦁 Tanzania (coming soon)</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="section-label">How We Work Together</p>
        <h2>Travel planning is a conversation, not a transaction.</h2>
        <div class="teamwork-box">
          <p>I am not a magician, and I am probably not going to hit the perfect trip on the very first try. But that is okay. That is not how good travel planning works anyway.</p>
          <p>You will still be doing the fun research, scoping out excursions and dreaming about the views, while I handle the tedious parts. Think of me as your filter. You tell me what you are looking for, and I do the deep dive research, check the logistics, and navigate the bookings. We will go back and forth until the itinerary feels exactly right.</p>
          <p style="margin:0;font-weight:600;color:#005a78;">No pressure. No sales tactics. Just honest teamwork.</p>
        </div>
      </div>
    </section>

    <section class="section eeat">
      <div class="container">
        <p class="section-label">Why Trust Me</p>
        <h2>What I bring to every trip I help plan.</h2>
        <div class="eeat-grid">
          <div class="eeat-card">
            <div class="eeat-icon">
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3>Experience</h3>
            <h4>I Have Been There</h4>
            <p>Scouting Caribbean resorts, navigating London, and planning cruise decks since 2017.</p>
          </div>
          <div class="eeat-card">
            <div class="eeat-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h3>Expertise</h3>
            <h4>I Do the Homework</h4>
            <p>Proud member of the WorldVia Travel Network, staying current on deals and destinations.</p>
          </div>
          <div class="eeat-card">
            <div class="eeat-icon">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3>Authoritativeness</h3>
            <h4>Your Personal Filter</h4>
            <p>I cut through 50 open tabs and sponsored reviews to give you the straight facts.</p>
          </div>
          <div class="eeat-card">
            <div class="eeat-icon">
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <h3>Trustworthiness</h3>
            <h4>Transparent and Honest</h4>
            <p>Paid via commissions from providers. Planning fees start at $50 depending on your trip. We talk through everything before anything is confirmed.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="section-label">A Little More About Me</p>
        <h2>The quick version.</h2>
        <ul class="vitals-list">
          <li><span class="vi">☕</span><div><strong>Fuel of Choice:</strong> Dunkin Iced Coffee and Coke Zero.</div></li>
          <li><span class="vi">🦁</span><div><strong>Current Mission:</strong> The Tanzania Safari.</div></li>
          <li><span class="vi">💻</span><div><strong>Built by hand on a Citrus MacBook</strong> from Ohio, with love.</div></li>
        </ul>
      </div>
    </section>

    <section class="cta">
      <h2>Ready to go somewhere amazing?</h2>
      <p>Let us figure out where that is. No pressure, no commitment. Just a real conversation about your next trip.</p>
      <a href="https://forgehq.app/f/?s=yozjm6l0" class="btn">✈️ Start Planning My Trip</a>
      <p class="cta-note">No pressure. Everyone welcome.</p>
      <a href="https://www.instagram.com/happydetourtravel/" target="_blank" rel="noopener" class="ig-link">@happydetourtravel</a>
    </section>

  </div>
` }} />
  )
}
