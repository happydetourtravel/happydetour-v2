import { useEffect } from 'react'

type Stop = { name: string; note?: string; been?: boolean }
type PriceBox = { label: string; value: string }
type Sailing = {
  line: string
  ship: string
  theme: string
  fromPrice: string
  forTwo: string
  fromLabel: string
  badges: { text: string; amber?: boolean }[]
  title: string
  dates: string
  stops: Stop[]
  why: string
  prices: PriceBox[]
}

const TEXT_LINK = 'sms:6308231253'
const EMAIL_LINK = 'mailto:eric@happydetour.com?subject=Spring Break Cruise'
const PLANNING_FORM = 'https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/6E9JQLQfrQfUvS85KcGhiHE1/link'

const quickLook = [
  { ship: 'Carnival Sunrise', sails: 'Mon, Mar 29 · Miami', back: 'Sat, Apr 3 · 8 AM', from: '~$425 pp', stops: 'Celebration Key, Half Moon Cay, Nassau', top: true },
  { ship: 'Carnival Freedom', sails: 'Sat, Mar 27 · Port Canaveral', back: 'Thu, Apr 1 · 8 AM', from: '~$541 pp', stops: 'Princess Cays, Nassau, Celebration Key' },
  { ship: 'Royal Caribbean Freedom of the Seas', sails: 'Mon, Mar 29 · Miami', back: 'Sat, Apr 3 · 6 AM', from: '~$555 to $600 pp', stops: 'Nassau, Puerto Plata (Dominican Republic)' },
  { ship: 'Carnival Magic (6 nights)', sails: 'Sun, Mar 28 · Miami', back: 'Sat, Apr 3 · 8 AM', from: '~$574 pp', stops: 'Eastern Caribbean, incl. Amber Cove' },
  { ship: 'Virgin Voyages Scarlet Lady', sails: 'Mon, Mar 29 · Miami', back: 'Sat, Apr 3 · 6:30 AM', from: '~$845 pp', stops: 'Grand Cayman, The Beach Club at Bimini' },
  { ship: 'Norwegian Getaway', sails: 'Fri, Mar 26 · Port Canaveral', back: 'Wed, Mar 31', from: '~$855 pp', stops: 'Great Stirrup Cay, Cozumel' },
]

const sailings: Sailing[] = [
  {
    line: 'Carnival',
    ship: 'Carnival Sunrise',
    theme: 'js-carnival',
    fromLabel: 'Inside from about',
    fromPrice: '$425',
    forTwo: 'per person · about $850 for two',
    badges: [{ text: '⭐ Lowest price', amber: true }, { text: '3 stops in the Bahamas' }],
    title: '5 Night Bahamas from Miami',
    dates: 'Monday, March 29 to Saturday, April 3, 2027 · back in Miami 8 AM',
    stops: [
      { name: 'Miami' },
      { name: 'Celebration Key', note: "Carnival's beach destination" },
      { name: 'Half Moon Cay', note: 'Private island beach' },
      { name: 'Sea day' },
      { name: 'Nassau', been: true },
      { name: 'Miami' },
    ],
    why: "This is the best price I found for your dates, and you get three beach stops with only one day at sea. It's a fun, lively ship. You'd lose a few days at the start of spring break, but you'd be home on the 3rd with plenty of time for an afternoon flight.",
    prices: [{ label: 'Inside', value: '~$425' }, { label: 'Balcony', value: '~$755' }],
  },
  {
    line: 'Carnival',
    ship: 'Carnival Freedom',
    theme: 'js-carnival',
    fromLabel: 'Inside from about',
    fromPrice: '$541',
    forTwo: 'per person · about $1,080 for two',
    badges: [{ text: '⭐ Best fit for your dates', amber: true }, { text: 'Near Orlando' }],
    title: '5 Night Bahamas from Port Canaveral',
    dates: 'Saturday, March 27 to Thursday, April 1, 2027 · back in port 8 AM',
    stops: [
      { name: 'Port Canaveral' },
      { name: 'Sea day' },
      { name: 'Princess Cays', note: 'Private beach' },
      { name: 'Nassau', been: true },
      { name: 'Celebration Key', note: "Carnival's beach destination" },
      { name: 'Port Canaveral' },
    ],
    why: "This one lines up with your break almost perfectly. Fly in on the 26th (or early on the 27th), sail on Saturday, and you're home on April 1 with a day to rest before work or school. Three stops, one sea day, and a great price.",
    prices: [{ label: 'Inside', value: '~$541' }, { label: 'Ocean view', value: '~$711' }, { label: 'Balcony', value: '~$921' }],
  },
  {
    line: 'Royal Caribbean',
    ship: 'Freedom of the Seas',
    theme: 'js-royal',
    fromLabel: 'Inside from about',
    fromPrice: '$555',
    forTwo: 'per person · about $1,110 to $1,200 for two',
    badges: [{ text: 'Big ship, lots to do' }, { text: '2 sea days' }],
    title: '5 Night Western Caribbean from Miami',
    dates: 'Monday, March 29 to Saturday, April 3, 2027 · back in Miami 6 AM',
    stops: [
      { name: 'Miami' },
      { name: 'Nassau', been: true },
      { name: 'Sea day' },
      { name: 'Puerto Plata', note: 'Amber Cove, Dominican Republic' },
      { name: 'Sea day' },
      { name: 'Miami' },
    ],
    why: 'If you like having a lot going on aboard, this ship delivers: a surf simulator, rock climbing, ice skating shows, and plenty of places to eat. Two sea days give you time to enjoy all of it. Early arrival back in Miami makes a same day flight home easy.',
    prices: [{ label: 'Inside', value: '~$555 to $600' }, { label: 'Other rooms', value: 'Ask Eric' }],
  },
  {
    line: 'Carnival · Bonus pick',
    ship: 'Carnival Magic',
    theme: 'js-magic',
    fromLabel: 'Inside from about',
    fromPrice: '$574',
    forTwo: 'per person · about $1,150 for two',
    badges: [{ text: 'One extra night', amber: true }, { text: '6 nights' }],
    title: '6 Night Eastern Caribbean from Miami',
    dates: 'Sunday, March 28 to Saturday, April 3, 2027 · back in Miami 8 AM',
    stops: [
      { name: 'Miami' },
      { name: 'Eastern Caribbean ports' },
      { name: 'Amber Cove', note: 'Dominican Republic' },
      { name: 'Sea day' },
      { name: 'Miami' },
    ],
    why: 'You said about 5 nights, so this one is a little longer. I added it because 6 nights for close to the price of a 5 night trip is worth a look. I can pull up the full port list if this one interests you.',
    prices: [{ label: 'Inside', value: '~$574' }],
  },
  {
    line: 'Virgin Voyages',
    ship: 'Scarlet Lady',
    theme: 'js-virgin',
    fromLabel: 'Insider cabin from about',
    fromPrice: '$845',
    forTwo: 'per person · about $1,700 for two',
    badges: [{ text: 'Adults only', amber: true }, { text: 'More included' }, { text: 'My specialty' }],
    title: 'Grand Cayman & Bimini Beach Club from Miami',
    dates: 'Monday, March 29 to Saturday, April 3, 2027 · back in Miami 6:30 AM',
    stops: [
      { name: 'Miami' },
      { name: 'Sea day' },
      { name: 'Grand Cayman' },
      { name: 'Sea day' },
      { name: 'The Beach Club at Bimini', note: "Virgin's private beach club" },
      { name: 'Miami' },
    ],
    why: "The starting price is higher, but more comes with it. Every restaurant on board is included (no extra charge for the specialty spots), plus WiFi and group fitness classes. It's adults only, so it's a calmer, more grown up vibe. A great pick for a couple who wants a real getaway. Gratuities are a separate charge.",
    prices: [{ label: 'Insider (inside)', value: '~$845' }, { label: 'Sea Terrace (balcony)', value: '~$995' }],
  },
  {
    line: 'Norwegian',
    ship: 'Norwegian Getaway',
    theme: 'js-ncl',
    fromLabel: 'Inside from about',
    fromPrice: '$855',
    forTwo: 'per person · about $1,710 for two',
    badges: [{ text: 'Starts day 1 of break' }, { text: 'Relaxed, no set dinner times' }],
    title: '5 Night Caribbean from Port Canaveral',
    dates: 'Friday, March 26 to Wednesday, March 31, 2027',
    stops: [
      { name: 'Port Canaveral' },
      { name: 'Sea day' },
      { name: 'Cozumel', note: 'Mexico', been: true },
      { name: 'Sea day' },
      { name: 'Great Stirrup Cay', note: "Norwegian's private island", been: true },
      { name: 'Port Canaveral' },
    ],
    why: "This is the only one that leaves on the first day of your break, which matches the plan of flying in on the 25th and sailing on the 26th. You'd be home by March 31 with a couple of days to spare. Norwegian is easygoing: eat when you want, no dress code.",
    prices: [{ label: 'Inside', value: '~$855' }, { label: 'Other rooms', value: 'Ask Eric' }],
  },
]

const tips = [
  { icon: '💵', title: 'Starting prices move', text: "These are the lowest fares I saw on November 5, 2026. Prices change daily, and taxes, port fees and tips can add to the total. I'll give you the real all-in number before you decide." },
  { icon: '✈️', title: 'Flying in', text: 'Most people fly in the day before sailing. It takes the stress out of a delayed flight. The Miami sailings get back early in the morning, so a same day flight home on April 3 works well.' },
  { icon: '🛡️', title: 'Trip insurance', text: 'I recommend it on every trip. It costs less when you buy it at booking, and it covers things like illness, flight trouble or lost bags.' },
]

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  .js-page{--blue:#007298;--blue-dark:#005a78;--amber:#F59E0B;--amber-soft:#FEF3C7;--bg:#F9FAFB;--text:#1F2937;--soft:#6B7280;--line:#E5E7EB;--teal-soft:#E0F2F7;font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.6;font-size:16px;min-height:100vh}
  .js-page *{box-sizing:border-box}
  .js-page h1,.js-page h2,.js-page h3,.js-page h4,.js-page p{margin:0}
  .js-wrap{max-width:1040px;margin:0 auto;padding:0 20px}
  .js-hero{background:linear-gradient(135deg,var(--blue) 0%,#00a3c4 100%);color:#fff;padding:56px 0 72px;position:relative;overflow:hidden}
  .js-hero::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:48px;background:var(--bg);clip-path:ellipse(70% 100% at 50% 100%)}
  .js-eyebrow{display:inline-block;background:var(--amber);color:#1F2937;font-weight:700;font-size:13px;letter-spacing:.06em;text-transform:uppercase;padding:6px 12px;border-radius:999px}
  .js-hero h1{font-size:clamp(32px,5vw,48px);line-height:1.15;font-weight:800;margin:18px 0 12px}
  .js-hero p{font-size:18px;max-width:640px;opacity:.95}
  .js-facts{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
  .js-fact{background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.3);padding:8px 14px;border-radius:12px;font-size:14px;font-weight:600}
  .js-section{padding:40px 0}
  .js-page h2{font-size:clamp(24px,3.5vw,32px);font-weight:800;line-height:1.2;margin-bottom:8px}
  .js-sub{color:var(--soft);font-size:16px;margin-bottom:24px !important;max-width:700px}
  .js-note{background:#fff;border-radius:20px;padding:28px;box-shadow:0 4px 20px rgba(0,0,0,.05);border-left:6px solid var(--amber);margin-top:-30px;position:relative;z-index:2}
  .js-note p+p{margin-top:10px}
  .js-sig{font-weight:700;color:var(--blue)}
  .js-table-wrap{overflow-x:auto;background:#fff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,.05)}
  .js-table-wrap table{width:100%;border-collapse:collapse;min-width:720px}
  .js-table-wrap th,.js-table-wrap td{text-align:left;padding:14px 16px;border-bottom:1px solid var(--line);font-size:15px;vertical-align:top}
  .js-table-wrap th{background:var(--blue);color:#fff;font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:.04em}
  .js-table-wrap tr:last-child td{border-bottom:none}
  .js-price{font-weight:800;color:var(--blue);white-space:nowrap}
  .js-table-wrap tr.js-top td{background:var(--amber-soft)}
  .js-cards{display:grid;gap:24px}
  .js-card{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.06);display:grid;grid-template-columns:260px 1fr}
  .js-side{padding:26px;color:#fff;display:flex;flex-direction:column;justify-content:space-between;gap:18px}
  .js-line{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;opacity:.9}
  .js-ship{font-size:24px;font-weight:800;line-height:1.2;margin-top:4px}
  .js-from,.js-pp{font-size:13px;opacity:.9}
  .js-big{font-size:36px;font-weight:800;line-height:1}
  .js-carnival{background:linear-gradient(160deg,#1d4ed8,#0e7490)}
  .js-royal{background:linear-gradient(160deg,#0b3c7a,#007298)}
  .js-ncl{background:linear-gradient(160deg,#0f766e,#007298)}
  .js-virgin{background:linear-gradient(160deg,#b91c1c,#7f1d1d)}
  .js-magic{background:linear-gradient(160deg,#6d28d9,#1d4ed8)}
  .js-body{padding:26px}
  .js-badges{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}
  .js-badge{font-size:12px;font-weight:700;padding:5px 10px;border-radius:999px;background:var(--teal-soft);color:var(--blue-dark)}
  .js-badge.js-amber{background:var(--amber-soft);color:#92400E}
  .js-body h3{font-size:20px;font-weight:800;margin-bottom:6px}
  .js-dates{color:var(--soft);font-size:15px;margin-bottom:14px}
  .js-route{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-bottom:16px}
  .js-stop{background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:6px 10px;font-size:14px;font-weight:600}
  .js-stop small{display:block;font-weight:500;color:var(--soft);font-size:12px}
  .js-stop.js-been{border-color:var(--amber);background:var(--amber-soft)}
  .js-arrow{color:var(--soft)}
  .js-why{font-size:15px}
  .js-why strong{color:var(--blue)}
  .js-prices{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
  .js-pbox{border:1px solid var(--line);border-radius:12px;padding:8px 12px;font-size:13px;color:var(--soft)}
  .js-pbox b{display:block;color:var(--text);font-size:16px}
  .js-legend{font-size:13px;color:var(--soft);margin-top:14px !important}
  .js-legend span{background:var(--amber-soft);border:1px solid var(--amber);padding:1px 8px;border-radius:6px;font-weight:600;color:#92400E}
  .js-grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
  .js-tip{background:#fff;border-radius:16px;padding:22px;box-shadow:0 4px 20px rgba(0,0,0,.05)}
  .js-tip-ico{font-size:26px}
  .js-tip h4{font-size:17px;font-weight:700;margin:8px 0 6px}
  .js-tip p{font-size:15px;color:var(--soft)}
  .js-cta{background:var(--blue);color:#fff;border-radius:24px;padding:40px 28px;text-align:center}
  .js-cta h2{color:#fff}
  .js-cta p{opacity:.95;max-width:620px;margin:0 auto 22px}
  .js-btns{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
  .js-btn{display:inline-block;text-decoration:none;font-weight:700;padding:14px 22px;border-radius:12px;font-size:16px}
  .js-btn-amber{background:var(--amber);color:#1F2937}
  .js-btn-ghost{border:2px solid rgba(255,255,255,.7);color:#fff}
  .js-contact-text{margin-top:16px !important;font-size:14px}
  .js-fine{font-size:13px;color:var(--soft);margin-top:24px !important}
  .js-footer{background:#0f2b36;color:#cbd5e1;padding:32px 0;margin-top:40px;font-size:14px}
  .js-footer-brand{color:#fff;font-weight:800;font-size:18px}
  .js-footer-tag{color:var(--amber);font-weight:600;margin:4px 0 10px}
  @media (max-width:760px){.js-card{grid-template-columns:1fr}.js-grid3{grid-template-columns:1fr}}
`

export default function JSisterPage() {
  useEffect(() => {
    document.title = 'Your Spring Break Cruise Options | Happy Detour Travel'
  }, [])

  return (
    <div className="js-page">
      <style>{css}</style>

      <header className="js-hero">
        <div className="js-wrap">
          <span className="js-eyebrow">Happy Detour Travel</span>
          <h1>Your Spring Break Cruise Options</h1>
          <p>Six Caribbean sailings from Florida that fit your spring break, picked for two travelers who want a good price.</p>
          <div className="js-facts">
            <div className="js-fact">👥 2 adults</div>
            <div className="js-fact">📅 Spring break: Mar 26 to Apr 2, 2027</div>
            <div className="js-fact">🛳️ About 5 nights</div>
            <div className="js-fact">🌴 Caribbean from East Coast ports</div>
          </div>
        </div>
      </header>

      <main className="js-wrap">
        <div className="js-note">
          <p>Hi there! Jay passed along your dates, so I went looking at what's sailing from Florida during your spring break.</p>
          <p>Good news: there are some really nice options in your window, and a couple of them come in at great prices. Take a look, see what catches your eye, and we'll go from there. No rush, and no pressure.</p>
          <p className="js-sig">Eric, Happy Detour Travel</p>
        </div>

        <section className="js-section">
          <h2>Quick look</h2>
          <p className="js-sub">Sorted from lowest starting price. Prices are per person for an inside cabin, for two people sharing the room.</p>
          <div className="js-table-wrap">
            <table>
              <thead>
                <tr><th>Ship</th><th>Sails</th><th>Back in port</th><th>From</th><th>Stops</th></tr>
              </thead>
              <tbody>
                {quickLook.map((row) => (
                  <tr key={row.ship} className={row.top ? 'js-top' : undefined}>
                    <td><b>{row.ship}</b></td>
                    <td>{row.sails}</td>
                    <td>{row.back}</td>
                    <td><span className="js-price">{row.from}</span></td>
                    <td>{row.stops}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="js-section" style={{ paddingTop: 0 }}>
          <h2>A closer look at each one</h2>
          <p className="js-sub">What each sailing is like, and who it's a good fit for.</p>
          <div className="js-cards">
            {sailings.map((s) => (
              <article key={s.ship} className="js-card">
                <div className={`js-side ${s.theme}`}>
                  <div>
                    <div className="js-line">{s.line}</div>
                    <div className="js-ship">{s.ship}</div>
                  </div>
                  <div>
                    <div className="js-from">{s.fromLabel}</div>
                    <div className="js-big">{s.fromPrice}</div>
                    <div className="js-pp">{s.forTwo}</div>
                  </div>
                </div>
                <div className="js-body">
                  <div className="js-badges">
                    {s.badges.map((b) => (
                      <span key={b.text} className={b.amber ? 'js-badge js-amber' : 'js-badge'}>{b.text}</span>
                    ))}
                  </div>
                  <h3>{s.title}</h3>
                  <div className="js-dates">{s.dates}</div>
                  <div className="js-route">
                    {s.stops.map((stop, i) => (
                      <span key={`${stop.name}-${i}`} style={{ display: 'contents' }}>
                        {i > 0 && <span className="js-arrow">→</span>}
                        <span className={stop.been ? 'js-stop js-been' : 'js-stop'}>
                          {stop.name}
                          {stop.note && <small>{stop.note}</small>}
                        </span>
                      </span>
                    ))}
                  </div>
                  <p className="js-why"><strong>Why it's on the list:</strong> {s.why}</p>
                  <div className="js-prices">
                    {s.prices.map((p) => (
                      <div key={p.label} className="js-pbox">{p.label}<b>{p.value}</b></div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="js-legend"><span>Highlighted stops</span> are places I've been myself, so ask me anything about them.</p>
        </section>

        <section className="js-section" style={{ paddingTop: 0 }}>
          <h2>Good to know</h2>
          <p className="js-sub">A few things that help you compare these the right way.</p>
          <div className="js-grid3">
            {tips.map((t) => (
              <div key={t.title} className="js-tip">
                <div className="js-tip-ico">{t.icon}</div>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="js-section">
          <div className="js-cta">
            <h2>Which one caught your eye?</h2>
            <p>Just text me your top one or two, plus the room type you're leaning toward. I'll check live pricing and any current promotions, and we'll talk through everything before anything is confirmed so there are no surprises.</p>
            <div className="js-btns">
              <a className="js-btn js-btn-amber" href={TEXT_LINK}>Text Eric</a>
              <a className="js-btn js-btn-ghost" href={EMAIL_LINK}>Email Eric</a>
              <a className="js-btn js-btn-ghost" href={PLANNING_FORM} target="_blank" rel="noopener noreferrer">Start Planning My Trip</a>
            </div>
            <p className="js-contact-text">Text: 630-823-1253 · Email: eric@happydetour.com</p>
          </div>
          <p className="js-fine">Prices shown are approximate starting fares per person, based on two people sharing a cabin, gathered from published cruise listings on November 5, 2026. They are not quotes and are not guaranteed. Itineraries and times can change. Final pricing is confirmed with you before booking.</p>
        </section>
      </main>

      <footer className="js-footer">
        <div className="js-wrap">
          <div className="js-footer-brand">Happy Detour Travel</div>
          <div className="js-footer-tag">Real trips. Real value. Someone actually in your corner.</div>
          <div>Alliance, OH · 630-823-1253 · eric@happydetour.com · happydetour.com</div>
        </div>
      </footer>
    </div>
  )
}
