import { useUser, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'

export default function MembersContent() {
  const { user } = useUser()

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

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <main style={{ minHeight: '80vh', backgroundColor: '#F9FAFB', padding: '60px 24px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>

            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Members Area</p>
              <h1 style={{ color: '#1F2937', fontSize: '36px', fontWeight: '800', margin: '0 0 12px 0' }}>
                Welcome{user?.firstName ? `, ${user.firstName}` : ''}.
              </h1>
              <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.7', maxWidth: '520px', margin: '0 auto' }}>
                You're in. This is your space for group cruise updates and exclusive sailings hand-picked by Eric.
              </p>
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '32px' }}>🚢</span>
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
                <a href="sms:7473338687" style={{ backgroundColor: '#007298', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                  Text Eric
                </a>
                <a href="mailto:eric@happydetour.com" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                  Email Eric
                </a>
              </div>
            </div>

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
                      <p style={{ color: '#6B7280', fontSize: '13px', margin: 0 }}>{deal.ship} · {deal.nights} · {deal.date}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ color: '#6B7280', fontSize: '11px', margin: '0 0 2px 0' }}>Starting from</p>
                        <p style={{ color: '#1F2937', fontSize: '22px', fontWeight: '800', margin: 0 }}>{deal.from}<span style={{ fontSize: '13px', fontWeight: '400', color: '#6B7280' }}>/person</span></p>
                      </div>
                      <a href={deal.link} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#007298', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px', whiteSpace: 'nowrap' }}>
                        View Sailing
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '12px' }}>
                Prices are estimates. Contact Eric for current availability and to lock in your spot.
              </p>
            </div>

            <div style={{ backgroundColor: '#007298', borderRadius: '16px', padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <h3 style={{ color: 'white', fontSize: '18px', fontWeight: '700', margin: '0 0 4px 0' }}>Have a question? Just ask.</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', margin: 0 }}>Eric is a real person and he actually responds.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="sms:7473338687" style={{ backgroundColor: 'white', color: '#007298', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
                  Text Eric
                </a>
                <a href="mailto:eric@happydetour.com" style={{ backgroundColor: '#F59E0B', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
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
