import { useUser, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'

export default function Members() {
  const { user } = useUser()

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <main style={{ minHeight: '80vh', backgroundColor: '#F9FAFB', padding: '80px 24px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Members Area</p>
            <h1 style={{ color: '#1F2937', fontSize: '36px', fontWeight: '800', margin: '0 0 16px 0' }}>
              Welcome{user?.firstName ? `, ${user.firstName}` : ''}.
            </h1>
            <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.7', maxWidth: '480px', margin: '0 auto 48px auto' }}>
              You're in. Group cruise deals and exclusive sailings are coming soon. Check back closer to September when things go live.
            </p>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              <p style={{ color: '#F59E0B', fontSize: '48px', margin: '0 0 16px 0' }}>🚢</p>
              <h2 style={{ color: '#1F2937', fontSize: '22px', fontWeight: '700', margin: '0 0 12px 0' }}>Group Cruises Coming Soon</h2>
              <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.7', margin: '0 0 24px 0' }}>
                Eric is putting together exclusive group sailings for HDT members. When they're ready, you'll be the first to know.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="sms:7473338687" style={{ backgroundColor: '#007298', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '14px' }}>
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
