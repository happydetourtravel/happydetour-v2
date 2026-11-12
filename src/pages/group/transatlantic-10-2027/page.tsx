// Route: /group/transatlantic-10-2027
import { Link } from 'react-router-dom'

// Public page for the HDT Halloween Transatlantic group sailing.
// No sign-up needed. Visitors text or email Eric directly. These cabins are always booked through Eric.

const PHONE_DISPLAY = '630-823-1253'
const EMAIL = 'eric@happydetour.com'
const SMS_LINK = 'sms:6308231253?body=Hi%20Eric!%20I%27m%20interested%20in%20the%20Halloween%20Transatlantic%20group%20sailing.'
const EMAIL_LINK = 'mailto:eric@happydetour.com?subject=Halloween%20Transatlantic%20Group%20Sailing'

// Text Eric + Email Eric buttons, each with the number or email shown underneath
function ContactButtons() {
  const btn = { display: 'block', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '16px', minWidth: '200px' }
  const small = { color: 'rgba(255,255,255,0.85)', fontSize: '14px', margin: '8px 0 0 0', textDecoration: 'none', display: 'block' }
  return (
    <div className="hdt-hero-btns" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <a href={SMS_LINK} className="hdt-btn hdt-btn-amber" style={{ ...btn, backgroundColor: '#F59E0B', color: 'white' }}>
          {'💬'} Text Eric
        </a>
        <a href="tel:6308231253" className="hdt-text-link" style={small}>{PHONE_DISPLAY}</a>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href={EMAIL_LINK} className="hdt-btn hdt-btn-ghost" style={{ ...btn, backgroundColor: 'transparent', color: 'white', border: '2px solid white', padding: '12px 26px' }}>
          {'✉️'} Email Eric
        </a>
        <a href={EMAIL_LINK} className="hdt-text-link" style={small}>{EMAIL}</a>
      </div>
    </div>
  )
}

export default function TransatlanticPage() {
  const included = [
    'All restaurants on board',
    'Unlimited WiFi',
    'Group fitness classes',
    'Soft drinks, juice, and drip coffee',
  ]

  const notIncluded = [
    'Alcohol (that’s where the bar tab comes in)',
    'Gratuities (a separate line item)',
    'Shore excursions',
    'Spa treatments',
  ]

  const ports = ['Barcelona, Spain', 'Tangier, Morocco', 'Lanzarote, Canary Islands', 'San Juan, Puerto Rico']

  // Starting prices per person, from Virgin's site (Nov 2026). Update these when prices change.
  // badge: short label on top of the card. barTab: true only for cabins that get Virgin's $200 bar tab
  const cabins = [
    { name: 'Insider', price: '$1,068', note: 'Cozy inside cabin with a rainshower and mood lighting. The lowest price way to join the group.', badge: '💰 Lowest price', barTab: false },
    { name: 'Sea View', price: '$1,188', note: 'Porthole window for ocean views, for a little more than an Insider.', badge: '', barTab: false },
    { name: 'Sea Terrace', price: '$1,374', note: 'Private balcony with a hammock. Booked at the Essentials rate, so the $200 bar tab comes with it.', badge: '🍹 Gets the $200 bar tab', barTab: true },
  ]

  // Perks every cabin gets, plus the bar tab bonus for Sea Terrace and up
  const memberPerks = [
    { icon: '🎉', title: 'Sail With the Group', desc: 'Every cabin type is part of the group. Insider, Sea View, Sea Terrace, or a suite, you are in. Come solo or bring your crew.' },
    { icon: '💸', title: 'No Planning Fee', desc: 'There’s no planning fee on this sailing, whatever cabin you pick. You still get Eric handling every detail.' },
    { icon: '🤝', title: 'Booked by Eric', desc: 'Eric books your cabin himself, so you have someone actually in your corner from booking to back home.' },
    { icon: '🍹', title: 'Bonus: $200 Bar Tab', desc: 'Virgin adds a $200 bar tab for Sea Terrace cabins and higher booked at the Essentials rate through Eric.' },
  ]

  return (
    <main style={{ backgroundColor: '#F9FAFB', minHeight: '80vh' }}>
      <style>{`
        .hdt-btn { transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease; text-align: center; }
        .hdt-text-link { transition: color 0.2s ease; }

        /* Hover effects only on devices with a mouse, so the red doesn't "stick" after a tap on phones */
        @media (hover: hover) {
          .hdt-btn:hover { transform: translateY(-1px); }
          /* Hover: Virgin Voyages red (#CC0000) */
          .hdt-btn-amber:hover { background-color: #CC0000 !important; }
          .hdt-btn-ghost:hover { background-color: #CC0000 !important; border-color: #CC0000 !important; color: white !important; }
          .hdt-btn-teal:hover { background-color: #CC0000 !important; }
          /* Text links on dark or blue backgrounds: underline instead of red so they stay readable */
          .hdt-text-link:hover { color: white !important; text-decoration: underline !important; }
        }

        /* Phones: stack the top buttons full width so they line up neatly */
        @media (max-width: 600px) {
          .hdt-hero-btns { flex-direction: column; align-items: stretch; max-width: 360px; margin: 0 auto; }
        }
      `}</style>

      {/* Halloween banner (full image, never cropped) */}
      <img
        src="/halloween-voyage.png"
        alt="Halloween Voyage with Virgin Voyages"
        style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#1E1B2E' }}
      />

      {/* Hero text, on a dark night-sky color that matches the banner */}
      <section style={{ backgroundColor: '#1E1B2E', padding: '40px 16px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ color: '#FDE68A', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
            A Happy Detour Travel Sailing
          </p>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: '800', lineHeight: '1.15', margin: '0 0 16px 0' }}>
            Halloween Transatlantic from Spain
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '18px', lineHeight: '1.6', margin: '0 0 8px 0' }}>
            Barcelona to San Juan &middot; Scarlet Lady &middot; 12 nights
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', margin: '0 0 20px 0' }}>
            Oct 31 &ndash; Nov 12, 2027
          </p>
          <p style={{ color: 'white', fontSize: '15px', margin: '0 0 20px 0' }}>
            From <span style={{ fontSize: '30px', fontWeight: '800' }}>$1,068</span> per person*
          </p>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', margin: '0 0 14px 0' }}>
            Every cabin type is welcome in the group.
          </p>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '14px', fontWeight: '700', padding: '8px 16px', borderRadius: '999px', marginBottom: '28px' }}>
            {'🍹'} Bonus $200 bar tab with Sea Terrace cabins and up (from $1,374)
          </div>
          <ContactButtons />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', margin: '16px 0 0 0' }}>
            No pressure, no planning fee. Just ask your questions.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 16px' }}>

        {/* Route */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', padding: '28px', marginBottom: '40px' }}>
          <p style={{ color: '#CC0000', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 4px 0' }}>The Route</p>
          <h2 style={{ color: '#1F2937', fontSize: '22px', fontWeight: '700', margin: '0 0 16px 0' }}>Spain to the Caribbean, With Halloween at Sea</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
            {ports.map((port, i) => (
              <span key={port} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', padding: '6px 12px', borderRadius: '999px' }}>{port}</span>
                {i < ports.length - 1 && <span style={{ color: '#CC0000', fontWeight: '700' }}>&rarr;</span>}
              </span>
            ))}
          </div>
          <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.7', margin: '16px 0 0 0' }}>
            Start in Barcelona, explore Tangier and the Canary Islands, then cross the Atlantic with plenty of sea days to relax and make some new friends before arriving in San Juan.
          </p>
        </div>

        {/* Cabin prices (public, no sign-up needed) */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ color: '#CC0000', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 4px 0' }}>Cabin Prices</p>
          <h2 style={{ color: '#1F2937', fontSize: '24px', fontWeight: '700', margin: '0 0 8px 0' }}>What It Costs</h2>
          <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.7', margin: '0 0 20px 0' }}>
            Starting prices per person, based on two sharing, with taxes and fees included.* Pick the cabin that fits your budget. You get the group either way.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {cabins.map((c) => (
              <div
                key={c.name}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '14px',
                  border: c.badge ? '2px solid #F59E0B' : '1px solid #E5E7EB',
                  padding: '24px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  position: 'relative',
                }}
              >
                {c.badge && (
                  <span style={{ position: 'absolute', top: '-12px', left: '20px', backgroundColor: '#F59E0B', color: 'white', fontSize: '12px', fontWeight: '700', padding: '4px 10px', borderRadius: '999px' }}>
                    {c.badge}
                  </span>
                )}
                <h3 style={{ color: '#1F2937', fontSize: '18px', fontWeight: '700', margin: '6px 0 6px 0' }}>{c.name}</h3>
                <p style={{ color: '#1F2937', margin: '0 0 8px 0' }}>
                  <span style={{ fontSize: '13px', color: '#6B7280' }}>from </span>
                  <span style={{ fontSize: '26px', fontWeight: '800' }}>{c.price}</span>
                  <span style={{ fontSize: '13px', color: '#6B7280' }}> per person</span>
                </p>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{c.note}</p>
                <p style={{ color: '#007298', fontSize: '13px', fontWeight: '600', margin: '10px 0 0 0' }}>
                  {c.barTab ? '✓ Group + no planning fee + $200 bar tab' : '✓ Group + no planning fee'}
                </p>
              </div>
            ))}
          </div>
          <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.7', margin: '16px 0 0 0' }}>
            Want to go big? RockStar Quarters start around $4,428 per person and Mega RockStar around $7,860. Both get the bar tab too.{' '}
            <a href="sms:6308231253?body=Hi%20Eric!%20I%27m%20curious%20about%20RockStar%20suites%20on%20the%20Halloween%20Transatlantic." style={{ color: '#007298', fontWeight: '700', textDecoration: 'none' }}>
              Text Eric
            </a>{' '}
            for details.
          </p>
        </div>

        {/* Why book */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ color: '#007298', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 4px 0' }}>Group Perks</p>
          <h2 style={{ color: '#1F2937', fontSize: '24px', fontWeight: '700', margin: '0 0 8px 0' }}>Why Book This Sailing With Eric</h2>
          <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.7', margin: '0 0 20px 0' }}>
            Book any cabin through Eric and you&rsquo;re part of the group. Sea Terrace and up also get the bar tab.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {memberPerks.map((p, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: '14px', border: '1px solid #E5E7EB', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '28px' }}>{p.icon}</span>
                <h3 style={{ color: '#1F2937', fontSize: '16px', fontWeight: '700', margin: '10px 0 6px 0' }}>{p.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Included / not included */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '14px', border: '1px solid #E5E7EB', padding: '24px' }}>
            <h3 style={{ color: '#1F2937', fontSize: '16px', fontWeight: '700', margin: '0 0 12px 0' }}>Included With Virgin</h3>
            <ul style={{ color: '#374151', fontSize: '14px', lineHeight: '1.9', margin: 0, paddingLeft: '18px' }}>
              {included.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '14px', border: '1px solid #E5E7EB', padding: '24px' }}>
            <h3 style={{ color: '#1F2937', fontSize: '16px', fontWeight: '700', margin: '0 0 12px 0' }}>Not Included</h3>
            <ul style={{ color: '#374151', fontSize: '14px', lineHeight: '1.9', margin: 0, paddingLeft: '18px' }}>
              {notIncluded.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        {/* How it works */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', borderLeft: '5px solid #F59E0B', padding: '28px', marginBottom: '40px' }}>
          <h2 style={{ color: '#1F2937', fontSize: '20px', fontWeight: '700', margin: '0 0 16px 0' }}>How It Works</h2>
          <ol style={{ color: '#374151', fontSize: '15px', lineHeight: '1.9', margin: 0, paddingLeft: '20px' }}>
            <li><strong>Pick your cabin</strong> from the prices above.</li>
            <li><strong>Text or email Eric</strong> with any questions. No pressure, no planning fee.</li>
            <li><strong>Eric walks you through the deposit and payment dates</strong> so there are no surprises.</li>
            <li><strong>Eric books your cabin into the group</strong> for you.</li>
          </ol>
          <p style={{ color: '#6B7280', fontSize: '13px', lineHeight: '1.6', margin: '16px 0 0 0' }}>
            Book through Eric to be part of the group. Booking on your own through Virgin&rsquo;s site won&rsquo;t add you to the group or include the bar tab.
          </p>
        </div>

        {/* Getting there: flights, hotel, insurance */}
        <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', padding: '28px', marginBottom: '40px' }}>
          <p style={{ color: '#007298', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 4px 0' }}>Getting There and Home</p>
          <h2 style={{ color: '#1F2937', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0' }}>I Can Help With the Rest Too</h2>
          <p style={{ color: '#374151', fontSize: '15px', lineHeight: '1.7', margin: '0 0 10px 0' }}>
            This sailing starts in Barcelona and ends in San Juan, so you will need a flight over and a flight home. I can help with both, plus a hotel night in Barcelona before you board.
          </p>
          <p style={{ color: '#374151', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
            I always recommend trip insurance for a sailing like this. It costs less when you get it at booking, and it protects you if a flight gets delayed or plans change.
          </p>
        </div>

        {/* Final CTA */}
        <div style={{ backgroundColor: '#007298', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
          <h3 style={{ color: 'white', fontSize: '22px', fontWeight: '700', margin: '0 0 8px 0' }}>Want in?</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', margin: '0 0 20px 0' }}>Reach out and Eric will get back to you personally. Questions are always welcome.</p>
          <ContactButtons />
        </div>

        {/* Optional membership (secondary, not required to book) */}
        <div style={{ backgroundColor: 'white', borderRadius: '14px', border: '1px solid #E5E7EB', padding: '20px 24px', marginTop: '20px', textAlign: 'center' }}>
          <p style={{ color: '#374151', fontSize: '15px', margin: 0, lineHeight: '1.6' }}>
            Wish to be a member of Happy Detour Travel?{' '}
            <Link to="/join" style={{ color: '#007298', fontWeight: '700', textDecoration: 'underline' }}>
              Sign up here.
            </Link>
          </p>
          <p style={{ color: '#9CA3AF', fontSize: '13px', margin: '6px 0 0 0' }}>
            Totally optional. You don&rsquo;t need it to book this sailing.
          </p>
        </div>

        <p style={{ color: '#9CA3AF', fontSize: '12px', lineHeight: '1.6', marginTop: '16px', textAlign: 'center' }}>
          *Insider and Sea View prices are at the Lock It In rate. The Sea Terrace price is at the Essentials rate, which is the rate that comes with the $200 bar tab. All prices are per person based on two sharing, with taxes and fees included. Prices and the bar tab offer are set by Virgin Voyages and can change at any time. Eric will always confirm your exact price before you book.
        </p>
      </div>
    </main>
  )
}
