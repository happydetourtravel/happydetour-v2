import { useUser, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import SailorLootSection from './SailorLootSection'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

export default function MembersContent() {
  const { user } = useUser()

  const firstName = user?.firstName || ''
  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : ''

  const deals = [
    {
      line: 'Virgin Voyages',
      ship: 'Scarlet Lady',
      route: 'Bahamas + Key West',
      date: 'January 2027',
      nights: '5 nights',
      from: '$1,099',
      link: 'https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK',
    },
    {
      line: 'Virgin Voyages',
      ship: 'Resilient Lady',
      route: 'Eastern Caribbean + Bimini',
      date: 'March 2027',
      nights: '7 nights',
      from: '$1,199',
      link: 'https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK',
    },
    {
      line: 'Virgin Voyages',
      ship: 'Resilient Lady',
      route: 'French Riviera + Ibiza',
      date: 'June 2027',
      nights: '7 nights',
      from: '$1,253',
      link: 'https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK',
    },
  ]

  type Perk = { icon: string; title: string; desc: string; link?: { href: string; label: string } }

  // Perks that apply to every trip booked with Eric
  const everyTripPerks: Perk[] = [
    {
      icon: '\ud83c\udf9f\ufe0f',
      title: 'First Dibs on Group Sailings',
      desc: 'New group sailings show up for members first, before Eric posts them anywhere else. Best cabins go fast.',
    },
    {
      icon: '\ud83d\udcc9',
      title: 'Price-Drop Check',
      desc: 'Before your final payment, Eric rechecks your fare. If a lower eligible price is available, he\u2019ll work to get it for you.',
    },
  ]

  // Virgin Voyages perks (Sea Terrace cabins and above)
  // To add another cruise line later, copy this list and its section below.
  const virginPerks: Perk[] = [
    {
      icon: '\u2b50',
      title: 'Sailor Loot, Added Automatically',
      desc: 'On eligible sailings, Virgin adds $50 to $200 in onboard credit to your cabin when you book through Eric. No code needed.',
      link: { href: '#sailor-loot', label: 'See eligible sailings' },
    },
    {
      icon: '\ud83c\udf79',
      title: '$200 Bar Tab on Group Sailings',
      desc: 'Book a Sea Terrace cabin or higher on one of Eric\u2019s Virgin Voyages group sailings and a $200 bar tab is included.',
    },
    {
      icon: '\ud83e\udd1d',
      title: 'WorldVia Network Perks',
      desc: 'Eric books through the WorldVia travel network, which adds extra perks on Sea Terrace cabins and above. He\u2019ll tell you exactly what\u2019s included when you book.',
    },
  ]

  const renderPerkCards = (list: Perk[]) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      {list.map((perk, i) => (
        <div key={i} style={cardStyle}>
          <span style={{ fontSize: '28px' }}>{perk.icon}</span>
          <h3 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '700', margin: '10px 0 6px 0' }}>{perk.title}</h3>
          <p style={{ color: '#6B7280', fontSize: '13px', lineHeight: '1.6', margin: perk.link ? '0 0 10px 0' : 0 }}>{perk.desc}</p>
          {perk.link && (
            <a href={perk.link.href} className="hdt-text-link" style={{ color: '#007298', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>
              {perk.link.label} &rarr;
            </a>
          )}
        </div>
      ))}
    </div>
  )

  const quickActions = [
    {
      icon: '\ud83d\uddfa\ufe0f',
      title: 'Drop Your Trip Wishlist',
      desc: 'Tell Eric where you want to go next.',
      href: 'https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/dDfyxMMy8gucAddKpaipPB4Z/link',
      external: true,
    },
    {
      icon: '\ud83e\uddf3',
      title: 'Browse Virgin Deals',
      desc: 'See current sailings Eric recommends.',
      href: '/virgin',
      external: false,
    },
    {
      icon: '\ud83d\udcac',
      title: 'Text Eric',
      desc: 'Quick question? Just send a text.',
      href: 'sms:6308231253',
      external: true,
    },
  ]

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '14px',
    border: '1px solid #E5E7EB',
    padding: '24px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  }

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <main style={{ minHeight: '80vh', backgroundColor: '#F9FAFB', padding: '60px 24px' }}>
          {/* Hover effects (inline styles can't do hover, so they live here) */}
          <style>{`
            .hdt-card-link { transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease; }
            .hdt-card-link:hover { border-color: #007298 !important; box-shadow: 0 6px 20px rgba(0,114,152,0.18) !important; transform: translateY(-2px); }
            .hdt-card-link:hover h3 { color: #007298 !important; }
            .hdt-btn { transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease; }
            .hdt-btn:hover { transform: translateY(-1px); }
            .hdt-btn-teal:hover { background-color: #005A78 !important; }
            .hdt-btn-amber:hover { background-color: #D97706 !important; }
            .hdt-btn-white:hover { background-color: #F59E0B !important; color: white !important; }
            .hdt-text-link { transition: color 0.2s ease; }
            .hdt-text-link:hover { color: #F59E0B !important; text-decoration: underline !important; }
          `}</style>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>

            {/* Personal Welcome */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Members Area</p>
              <h1 style={{ color: '#1F2937', fontSize: '36px', fontWeight: '800', margin: '0 0 8px 0' }}>
                {getGreeting()}{firstName ? `, ${firstName}` : ''}.
              </h1>
              {memberSince && (
                <p style={{ color: '#9CA3AF', fontSize: '13px', margin: 0 }}>
                  Happy Detour Travel member since {memberSince}
                </p>
              )}
            </div>

            {/* Note from Eric */}
            <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', borderLeft: '5px solid #F59E0B', padding: '28px 32px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', marginBottom: '32px' }}>
              <p style={{ color: '#007298', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 10px 0' }}>A Note From Eric</p>
              <p style={{ color: '#374151', fontSize: '15px', lineHeight: '1.8', margin: '0 0 12px 0' }}>
                {firstName ? `Hey ${firstName}, thanks` : 'Thanks'} for being here. This page is where I keep the perks, deals, and group sailings I think are actually worth your time. No pressure and no sales pitch, just the good stuff.
              </p>
              <p style={{ color: '#374151', fontSize: '15px', lineHeight: '1.8', margin: '0 0 12px 0' }}>
                If you ever have a question, big or small, text me. I&rsquo;m a real person and I&rsquo;ll get back to you.
              </p>
              <p style={{ color: '#1F2937', fontSize: '15px', fontWeight: '700', margin: 0 }}>Eric</p>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '40px' }}>
              {quickActions.map((action, i) => {
                const inner = (
                  <>
                    <span style={{ fontSize: '26px' }}>{action.icon}</span>
                    <h3 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '700', margin: '10px 0 4px 0' }}>{action.title}</h3>
                    <p style={{ color: '#6B7280', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>{action.desc}</p>
                  </>
                )
                const style = { ...cardStyle, display: 'block', textDecoration: 'none' }
                return action.external ? (
                  <a
                    key={i}
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={style}
                    className="hdt-card-link"
                  >
                    {inner}
                  </a>
                ) : (
                  <Link key={i} to={action.href} style={style} className="hdt-card-link">
                    {inner}
                  </Link>
                )
              })}
            </div>

            {/* Perks for Every Trip */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ marginBottom: '20px' }}>
                <p style={{ color: '#007298', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 4px 0' }}>Member Perks</p>
                <h2 style={{ color: '#1F2937', fontSize: '22px', fontWeight: '700', margin: '0 0 6px 0' }}>Perks for Every Trip</h2>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  Cruise or all-inclusive, these come with any trip you book with Eric.
                </p>
              </div>
              {renderPerkCards(everyTripPerks)}
            </div>

            {/* Virgin Voyages Perks */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ marginBottom: '20px' }}>
                <p style={{ color: '#CC0000', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 4px 0' }}>Virgin Voyages</p>
                <h2 style={{ color: '#1F2937', fontSize: '22px', fontWeight: '700', margin: '0 0 6px 0' }}>Extra Perks on Virgin Voyages</h2>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  For Sea Terrace cabins and above when you book through Eric.
                </p>
              </div>
              {renderPerkCards(virginPerks)}
              <p style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '12px' }}>
                Perks are offered by Virgin Voyages and WorldVia and can change. Eric will always confirm what applies before you book.
              </p>
            </div>

            {/* Group Sailings */}
            <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '32px' }}>{'\ud83d\udea2'}</span>
                <div>
                  <p style={{ color: '#007298', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 4px 0' }}>Group Sailings</p>
                  <h2 style={{ color: '#1F2937', fontSize: '22px', fontWeight: '700', margin: 0 }}>Group Cruises Coming Soon</h2>
                </div>
              </div>
              <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.7', margin: '0 0 12px 0' }}>
                Eric is putting together exclusive group sailings for HDT members on Virgin Voyages and Norwegian. When they're ready, you'll be the first to know. Target launch is September 2027.
              </p>
              <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.7', margin: '0 0 24px 0' }}>
                Have a destination or cruise line in mind? Reach out and let Eric know. He's building these around what members actually want.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="sms:6308231253" className="hdt-btn hdt-btn-teal" style={{ backgroundColor: '#007298', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                  Text Eric
                </a>
                <a href="mailto:eric@happydetour.com" className="hdt-btn hdt-btn-amber" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                  Email Eric
                </a>
              </div>
            </div>

            {/* Exclusive Deals */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ marginBottom: '20px' }}>
                <p style={{ color: '#007298', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 4px 0' }}>Exclusive Deals</p>
                <h2 style={{ color: '#1F2937', fontSize: '22px', fontWeight: '700', margin: 0 }}>Sailings Worth Looking At</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {deals.map((deal, i) => (
                  <div key={i} style={{ backgroundColor: 'white', borderRadius: '14px', border: '1px solid #E5E7EB', padding: '24px 28px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                      <p style={{ color: '#007298', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 4px 0' }}>{deal.line}</p>
                      <h3 style={{ color: '#1F2937', fontSize: '17px', fontWeight: '700', margin: '0 0 4px 0' }}>{deal.route}</h3>
                      <p style={{ color: '#6B7280', fontSize: '13px', margin: 0 }}>{deal.ship} &middot; {deal.nights} &middot; {deal.date}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ color: '#6B7280', fontSize: '11px', margin: '0 0 2px 0' }}>Starting from</p>
                        <p style={{ color: '#1F2937', fontSize: '22px', fontWeight: '800', margin: 0 }}>{deal.from}<span style={{ fontSize: '13px', fontWeight: '400', color: '#6B7280' }}>/person</span></p>
                      </div>
                      <a href={deal.link} target="_blank" rel="noopener noreferrer" className="hdt-btn hdt-btn-teal" style={{ backgroundColor: '#007298', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px', whiteSpace: 'nowrap' }}>
                        View Sailing
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '12px' }}>
                Prices are estimates and don't include gratuities or alcohol. Contact Eric for current availability and to lock in your spot.
              </p>
            </div>

            <SailorLootSection />

            {/* Contact */}
            <div style={{ backgroundColor: '#007298', borderRadius: '16px', padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <h3 style={{ color: 'white', fontSize: '18px', fontWeight: '700', margin: '0 0 4px 0' }}>Have a question? Just ask.</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', margin: 0 }}>Eric is a real person and he actually responds.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="sms:6308231253" className="hdt-btn hdt-btn-white" style={{ backgroundColor: 'white', color: '#007298', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                  Text Eric
                </a>
                <a href="mailto:eric@happydetour.com" className="hdt-btn hdt-btn-amber" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                  Email Eric
                </a>
              </div>
            </div>

          </div>
        </main>
      </SignedIn>
    </>
  )
}
