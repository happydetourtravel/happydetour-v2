import { useUser } from '@clerk/clerk-react'

// Home page Sailor Loot button.
// Signed-in members go straight to the Sailor Loot section on /members. Everyone else goes to /join.
// This file uses Clerk, so it must be lazy-loaded and wrapped in ClientOnly + Suspense.
export default function SailorLootButton() {
  const { isLoaded, isSignedIn } = useUser()
  const isMember = isLoaded && isSignedIn

  return (
    <a
      href={isMember ? '/members#sailor-loot' : '/join'}
      aria-label={isMember ? 'See your member perks, including extra Sailor Loot' : 'Become a member for cruises with extra Sailor Loot up to $200'}
      style={{ display: 'block', backgroundColor: 'rgba(255,255,255,0.12)', border: '2px solid #F59E0B', borderRadius: '10px', padding: '14px 18px', margin: '20px 0 0 0', textDecoration: 'none', maxWidth: '520px' }}
    >
      <span style={{ display: 'block', color: 'white', fontSize: '15px', fontWeight: '700', lineHeight: '1.4' }}>
        Looking for cruises with extra Sailor Loot, up to $200?
      </span>
      <span style={{ display: 'block', color: '#F59E0B', fontSize: '14px', fontWeight: '700', margin: '4px 0 0 0' }}>
        {isMember ? 'See your member perks →' : 'Become a member →'}
      </span>
    </a>
  )
}
