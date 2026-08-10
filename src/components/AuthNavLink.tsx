import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

type AuthNavLinkProps = {
  variant?: 'desktop' | 'mobile'
  onNavigate?: () => void
}

export default function AuthNavLink({ variant = 'desktop', onNavigate }: AuthNavLinkProps) {
  const mobileLinkStyle = {
    display: 'block',
    padding: '12px 8px',
    fontSize: '15px',
    fontWeight: 500,
    color: '#1F2937',
    textDecoration: 'none',
    borderBottom: '1px solid #F9FAFB',
  } as const

  if (variant === 'mobile') {
    return (
      <>
        <SignedOut>
          <Link to="/login" onClick={onNavigate} style={mobileLinkStyle}>
            Sign In
          </Link>
          <Link to="/join" onClick={onNavigate} style={mobileLinkStyle}>
            Sign Up
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
        <Link to="/login" className="hover:text-brand-blue transition-colors">Sign In</Link>
        <Link to="/join" className="hover:text-brand-blue transition-colors">Sign Up</Link>
      </SignedOut>
      <SignedIn>
        <Link to="/members" className="hover:text-brand-blue transition-colors">Members</Link>
      </SignedIn>
    </>
  )
}
