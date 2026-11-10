import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { useClerkReady } from './ClerkReady'

type AuthNavLinkProps = {
  variant?: 'desktop' | 'mobile'
  onNavigate?: () => void
}

export default function AuthNavLink({ variant = 'desktop', onNavigate }: AuthNavLinkProps) {
  const clerkReady = useClerkReady()

  const mobileLinkStyle = {
    display: 'block',
    padding: '12px 8px',
    fontSize: '15px',
    fontWeight: 500,
    color: '#1F2937',
    textDecoration: 'none',
    borderBottom: '1px solid #F9FAFB',
  } as const

  // Until Clerk loads, show the regular "Members" link to /login
  if (!clerkReady) {
    return variant === 'mobile' ? (
      <Link to="/login" onClick={onNavigate} style={mobileLinkStyle}>Members</Link>
    ) : (
      <Link to="/login" className="hover:text-brand-blue transition-colors">Members</Link>
    )
  }

  if (variant === 'mobile') {
    return (
      <>
        <SignedOut>
          <Link to="/login" onClick={onNavigate} style={mobileLinkStyle}>
            Members
          </Link>
        </SignedOut>
        <SignedIn>
          <Link to="/members" onClick={onNavigate} style={mobileLinkStyle}>
            Members
          </Link>
        </SignedIn>
      </>
    )
  }

  return (
    <>
      <SignedOut>
        <Link to="/login" className="hover:text-brand-blue transition-colors">Members</Link>
      </SignedOut>
      <SignedIn>
        <Link to="/members" className="hover:text-brand-blue transition-colors">Members</Link>
      </SignedIn>
    </>
  )
}
