import { useUser } from '@clerk/clerk-react'
import { useClerkReady } from './ClerkReady'

// Home page Sailor Loot button.
// Signed-in members go straight to the Sailor Loot section on /members. Everyone else goes to /join.
// Until Clerk loads, it shows the /join version.
export default function SailorLootButton() {
  const clerkReady = useClerkReady()
  return clerkReady ? <MemberAwareButton /> : <LootLink isMember={false} />
}

function MemberAwareButton() {
  const { isLoaded, isSignedIn } = useUser()
  return <LootLink isMember={!!(isLoaded && isSignedIn)} />
}

function LootLink({ isMember }: { isMember: boolean }) {
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
