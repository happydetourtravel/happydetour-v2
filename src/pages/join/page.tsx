import { SignUp } from '@clerk/clerk-react'

export default function Join() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 24px', backgroundColor: '#F9FAFB' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Join HDT</p>
        <h1 style={{ color: '#1F2937', fontSize: '36px', fontWeight: '800', margin: '0 0 16px 0' }}>
          Get access to exclusive deals and group cruises.
        </h1>
        <p style={{ color: '#6B7280', fontSize: '16px', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
          Create a free account to access member-only sailings, group cruise info, and deals I don't post publicly. No spam. Just good trips.
        </p>
      </div>
      <SignUp
        appearance={{
          variables: {
            colorPrimary: '#007298',
            colorTextOnPrimaryBackground: 'white',
          }
        }}
        redirectUrl="/members"
      />
    </main>
  )
}
