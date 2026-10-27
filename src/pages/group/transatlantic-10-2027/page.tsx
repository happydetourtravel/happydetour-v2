// Route: /group/transatlantic-10-2027
import { Link } from 'react-router-dom'

// Public teaser page for the HDT Transatlantic 12 group sailing.
// Full booking details live on the members page. Group sailings are always booked through Eric.

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

  const memberPerks = [
    { icon: '🍹', title: '$200 Bar Tab', desc: 'Included with Sea Terrace cabins and higher booked at the Essentials rate in the HDT group.' },
    { icon: '💸', title: 'No Planning Fee', desc: 'Virgin Voyages group bookings have no planning fee. You still get Eric handling every detail.' },
    { icon: '🎟️', title: 'First Dibs on Cabins', desc: 'Members hear about group cabins before anyone else. Best cabins go fast.' },
    { icon: '🤝', title: 'Booked by Eric', desc: 'Eric places you directly in the group so you get the perk and someone actually in your corner.' },
  ]

  return (
    <main style={{ backgroundColor: '#F9FAFB', minHeight: '80vh' }}>
      <style>{`
        .hdt-btn { transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease; }
        .hdt-btn:hover { transform: translateY(-1px); }
        /* Hover: Virgin Voyages red (#CC0000) */
        .hdt-btn-amber:hover { background-color: #CC0000 !important; }
        .hdt-btn-ghost:hover { background-color: #CC0000 !important; border-color: #CC0000 !important; color: white !important; }
        .hdt-btn-teal:hover { background-color: #CC0000 !important; }
        /* Text links on dark or blue backgrounds: underline instead of red so they stay readable */
        .hdt-text-link { transition: color 0.2s ease; }
        .hdt-text-link:hover { color: white !important; text-decoration: underline !important; }
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
            Happy Detour Travel Group Sailing
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
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '14px', fontWeight: '700', padding: '8px 16px', borderRadius: '999px', marginBottom: '28px' }}>
            {'🍹'} $200 bar tab with Sea Terrace cabins and up
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/join" className="hdt-btn hdt-btn-amber" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '16px' }}>
              Join to Claim Your Spot
            </Link>
            <Link to="/login" className="hdt-btn hdt-btn-ghost" style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Already a Member? Sign In
                          <a href="sms:6308231253?body=Hi%20Eric!%20I%20saw%20your%20Halloween%20Transatlantic%20ad." className="hdt-btn hdt-btn-ghost" style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              Text Eric
            </a>
            </Link>
          </div>
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
            Start in Barcelona, explore Tangier and the Canary Islands, then cross the Atlantic with plenty of sea days to relax and meet the group before arriving in San Juan.
          </p>
        </div>

        {/* Why join */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ color: '#007298', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 4px 0' }}>Member Perks</p>
          <h2 style={{ color: '#1F2937', fontSize: '24px', fontWeight: '700', margin: '0 0 8px 0' }}>Why Sail With the HDT Group</h2>
          <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.7', margin: '0 0 20px 0' }}>
            Joining just takes your name and email. It&rsquo;s how you get into the group and unlock the perks below.
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
            <li><strong>Join the group.</strong> Takes about a minute, just your name and email.</li>
            <li><strong>See every cabin price</strong> on your members page.</li>
            <li><strong>Text or email Eric</strong> to hold your cabin. He books you straight into the group.</li>
          </ol>
          <p style={{ color: '#6B7280', fontSize: '13px', lineHeight: '1.6', margin: '16px 0 0 0' }}>
            Group cabins need to be booked through Eric to get the bar tab. Booking on your own through Virgin&rsquo;s site won&rsquo;t place you in the group.
          </p>
        </div>

        {/* Final CTA */}
        <div style={{ backgroundColor: '#007298', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
          <h3 style={{ color: 'white', fontSize: '22px', fontWeight: '700', margin: '0 0 8px 0' }}>Want in?</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', margin: '0 0 20px 0' }}>Join and grab first dibs on a group cabin.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/join" className="hdt-btn hdt-btn-amber" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '16px' }}>
              Join the Group
            </Link>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', margin: '20px 0 0 0' }}>
            Questions first?{' '}
            <a href="sms:6308231253?body=Hi%20Eric!%20I%20have%20a%20question%20about%20the%20Transatlantic%20group%20sailing." className="hdt-text-link" style={{ color: 'white', fontWeight: '700', textDecoration: 'none' }}>
              Text Eric
            </a>
          </p>
        </div>

        <p style={{ color: '#9CA3AF', fontSize: '12px', lineHeight: '1.6', marginTop: '16px', textAlign: 'center' }}>
          *Starting price is for an Insider cabin at the Lock It In rate, per person based on two sharing, with taxes and fees included. The $200 bar tab applies to Sea Terrace and higher booked at the Essentials rate, which is priced a little higher. Prices and the group bar tab are set by Virgin Voyages and can change at any time. Eric will always confirm your exact price before you book.
        </p>
      </div>
    </main>
  )
}
