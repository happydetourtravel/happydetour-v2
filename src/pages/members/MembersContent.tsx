import { useUser, useClerk, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom'
import SailorLootSection from './SailorLootSection'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

export default function MembersContent() {
  const { user } = useUser()
  const { signOut } = useClerk()
  const navigate = useNavigate()

  // Signs the member out, then sends them to the homepage
  const handleLogout = async () => {
    await signOut()
    navigate('/')
  }

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

  // Featured sailings (booked through Eric). To add another, copy one block and change the details.
  const groupSailings = [
    {
      line: 'Virgin Voyages',
      name: 'Halloween Transatlantic from Spain',
      ship: 'Scarlet Lady',
      nights: '12 nights',
      dates: 'Oct 31 \u2013 Nov 12, 2027',
      ports: ['Barcelona, Spain', 'Tangier, Morocco', 'Lanzarote, Canary Islands', 'San Juan, Puerto Rico'],
      blurb: 'Twelve nights from Barcelona to San Juan on Scarlet Lady, with Halloween at sea, stops in Morocco and the Canary Islands, and plenty of sea days to relax and make some new friends.',
      publicPage: '/group/transatlantic-10-2027',
      // The date you last priced this cruise (shows in the price disclaimer)
      pricedOn: 'October 20, 2026',
      // Lock It In rate, per person based on two sharing a cabin, taxes and fees included
      cabins: [
        { type: 'Insider', price: '$1,068' },
        { type: 'Sea View', price: '$1,188' },
        { type: 'Sea Terrace', price: '$1,308', barTab: true },
        { type: 'RockStar Quarters', price: '$4,428', barTab: true },
        { type: 'Mega RockStar Quarters', price: '$7,860', barTab: true },
      ],
    },
  ]

  type Perk = { icon: string; title: string; desc: string; link?: { href: string; label: string } }

  // Perks that apply to every trip booked with Eric
  const everyTripPerks: Perk[] = [
    {
      icon: '\ud83c\udf9f\ufe0f',
      title: 'First Dibs on Featured Sailings',
      desc: 'New featured sailings show up for members first, before Eric posts them anywhere else. Best cabins go fast.',
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
      title: 'Sailor Loot Onboard Credit',
      desc: 'Book through Eric and his WorldVia network, and Virgin adds $50 to $200 in onboard credit to your cabin on eligible sailings. Added automatically, no code needed.',
      link: { href: '#sailor-loot', label: 'See eligible sailings' },
    },
    {
      icon: '\ud83c\udf79',
      title: '$200 Bar Tab on Featured Sailings',
      desc: 'Book a Sea Terrace cabin or higher at the Essentials rate on one of Eric\u2019s featured Virgin Voyages sailings and a $200 bar tab is included.',
    },
  ]

  // Smooth-scrolls to a section on the page and briefly highlights it
  const jumpToSection = (e: React.MouseEvent, href: string) => {
    const el = document.getElementById(href.replace('#', ''))
    if (!el) return
    e.preventDefault()
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    el.classList.remove('hdt-flash')
    void el.offsetWidth
    el.classList.add('hdt-flash')
    setTimeout(() => el.classList.remove('hdt-flash'), 2600)
  }

  const renderPerkCards = (list: Perk[]) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      {list.map((perk, i) => {
        const inner = (
          <>
            <span style={{ fontSize: '28px' }}>{perk.icon}</span>
            <h3 style={{ color: '#1F2937', fontSize: '15px', fontWeight: '700', margin: '10px 0 6px 0' }}>{perk.title}</h3>
            <p style={{ color: '#6B7280', fontSize: '13px', lineHeight: '1.6', margin: perk.link ? '0 0 10px 0' : 0 }}>{perk.desc}</p>
            {perk.link && (
              <span className="hdt-text-link" style={{ color: '#007298', fontSize: '13px', fontWeight: '700' }}>
                {perk.link.label} &rarr;
              </span>
            )}
          </>
        )
        return perk.link ? (
          <a
            key={i}
            href={perk.link.href}
            onClick={(e) => jumpToSection(e, perk.link!.href)}
            className="hdt-card-link"
            style={{ ...cardStyle, display: 'block', textDecoration: 'none' }}
          >
            {inner}
          </a>
        ) : (
          <div key={i} style={cardStyle}>
            {inner}
          </div>
        )
      })}
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
            .hdt-text-link:hover, .hdt-card-link:hover .hdt-text-link { color: #F59E0B !important; text-decoration: underline !important; }
            #sailor-loot { border-radius: 16px; }
            .hdt-flash { animation: hdtFlash 2.6s ease; }
            @keyframes hdtFlash {
              0% { outline: 3px solid rgba(245,158,11,0); outline-offset: 14px; }
              15% { outline: 3px solid rgba(245,158,11,1); outline-offset: 14px; }
              70% { outline: 3px solid rgba(245,158,11,1); outline-offset: 14px; }
              100% { outline: 3px solid rgba(245,158,11,0); outline-offset: 14px; }
            }
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
              <div style={{ marginTop: '12px' }}>
                <button onClick={handleLogout} className="hdt-text-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#007298', fontSize: '13px', fontWeight: '700' }}>
                  Log out
                </button>
              </div>
            </div>

            {/* Note from Eric */}
            <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', borderLeft: '5px solid #F59E0B', padding: '28px 32px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', marginBottom: '32px' }}>
              <p style={{ color: '#007298', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 10px 0' }}>A Note From Eric</p>
              <p style={{ color: '#374151', fontSize: '15px', lineHeight: '1.8', margin: '0 0 12px 0' }}>
                {firstName ? `Hey ${firstName}, thanks` : 'Thanks'} for being here. This page is where I keep the perks, deals, and sailings I think are actually worth your time. No pressure and no sales pitch, just the good stuff.
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
                Sailor Loot (through Eric&rsquo;s WorldVia network) and the $200 bar tab are offered by Virgin Voyages and are subject to change or end at any time. Eric will always confirm what applies before you book.
              </p>
            </div>

            {/* Featured Sailings */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ marginBottom: '20px' }}>
                <p style={{ color: '#007298', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 4px 0' }}>Featured Sailings</p>
                <h2 style={{ color: '#1F2937', fontSize: '22px', fontWeight: '700', margin: '0 0 6px 0' }}>Sail With Eric</h2>
                <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  Members get first dibs. Book a Sea Terrace cabin or higher at the Essentials rate through Eric and a $200 bar tab is included.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {groupSailings.map((g, i) => (
                  <div key={i} style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', borderTop: '5px solid #CC0000', padding: '28px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                      <div>
                        <p style={{ color: '#CC0000', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 4px 0' }}>{g.line}</p>
                        <h3 style={{ color: '#1F2937', fontSize: '20px', fontWeight: '800', margin: '0 0 4px 0' }}>{g.name}</h3>
                        <p style={{ color: '#6B7280', fontSize: '14px', margin: 0 }}>{g.ship} &middot; {g.nights} &middot; {g.dates}</p>
                      </div>
                      <span style={{ backgroundColor: '#FEF3C7', color: '#92400E', fontSize: '12px', fontWeight: '700', padding: '6px 12px', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                        {'\ud83c\udf79'} $200 bar tab: Sea Terrace+ at Essentials rate
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                      {g.ports.map((port, pi) => (
                        <span key={pi} style={{ fontSize: '12px', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', color: '#4B5563', padding: '4px 10px', borderRadius: '999px' }}>
                          {port}
                        </span>
                      ))}
                    </div>
                    <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.7', margin: '0 0 20px 0' }}>{g.blurb}</p>

                    <p style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 10px 0' }}>Cabin Prices</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
                      {g.cabins.map((c, ci) => (
                        <div key={ci} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', backgroundColor: '#F9FAFB', borderRadius: '10px', padding: '10px 14px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                            <span style={{ color: '#1F2937', fontSize: '14px', fontWeight: '600' }}>{c.type}</span>
                            {c.barTab && (
                              <span style={{ backgroundColor: '#FEF3C7', color: '#92400E', fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '999px' }}>
                                Bar tab eligible
                              </span>
                            )}
                          </div>
                          <span style={{ color: '#007298', fontSize: '16px', fontWeight: '800' }}>
                            from {c.price} <span style={{ color: '#9CA3AF', fontSize: '12px', fontWeight: '400' }}>/ person</span>
                          </span>
                        </div>
                      ))}
                    </div>
                    <p style={{ color: '#9CA3AF', fontSize: '12px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                      Prices shown are the Lock It In rate, per person based on two sharing a cabin, with taxes and fees included. The $200 bar tab applies to Sea Terrace and higher booked at the Essentials rate, which is priced a little higher. Eric will quote your exact price. Prices are subject to change and were current at the time this cruise was priced on {g.pricedOn}.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <a href={`sms:6308231253?body=${encodeURIComponent(`Hi Eric! I'm interested in the ${g.name} sailing.`)}`} className="hdt-btn hdt-btn-teal" style={{ backgroundColor: '#007298', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                        Text Eric to Hold a Cabin
                      </a>
                      <a href={`mailto:eric@happydetour.com?subject=${encodeURIComponent(`${g.name} sailing`)}`} className="hdt-btn hdt-btn-amber" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                        Email Eric
                      </a>
                    </div>
                    <p style={{ fontSize: '13px', margin: '16px 0 0 0', color: '#6B7280' }}>
                      Know someone who&rsquo;d love this?{' '}
                      <Link to={g.publicPage} className="hdt-text-link" style={{ color: '#007298', fontWeight: '700', textDecoration: 'none' }}>
                        Share the sailing page &rarr;
                      </Link>
                    </p>
                  </div>
                ))}
              </div>

              <p style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '12px' }}>
                Have a destination or cruise line in mind for a future sailing? Let Eric know. He&rsquo;s picking these around what members actually want.
              </p>
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

            {/* Log out (bottom of page) */}
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button onClick={handleLogout} className="hdt-text-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#6B7280', fontSize: '13px', fontWeight: '600' }}>
                Log out
              </button>
            </div>

          </div>
        </main>
      </SignedIn>
    </>
  )
}
