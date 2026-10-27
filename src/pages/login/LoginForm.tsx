import { useState } from 'react'
import { useSignIn } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const { signIn, setActive, isLoaded } = useSignIn()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!isLoaded) return
    setLoading(true)

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      })

      if (result.status === 'complete') {
        // Turn the session on so the member pages know you're logged in
        await setActive({ session: result.createdSessionId })
        navigate('/members')
      } else {
        // Clerk wants an extra step (like an email code). Show a message instead of doing nothing.
        console.log('Sign-in status:', result.status)
        setError('Almost there! Your account needs an extra verification step. Please contact Eric if this keeps happening.')
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.message || 'Invalid email or password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // 16px text on inputs stops iPhones from zooming in when a field is tapped
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid #D1D5DB',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: 'white',
  }
  const labelStyle: React.CSSProperties = { display: 'block', color: '#374151', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }

  // Padding shrinks on small screens, grows on large ones
  const panelPadding = 'clamp(36px, 7vw, 64px) clamp(20px, 5vw, 48px)'

  const EyeIcon = ({ show }: { show: boolean }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {show ? (
        <>
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </>
      ) : (
        <>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  )

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      {/*
        wrap-reverse: on wide screens the panels sit side by side (welcome left, form right).
        On phones they stack with the sign-in form ON TOP, so returning members don't have to scroll.
      */}
      <div style={{ display: 'flex', flexWrap: 'wrap-reverse', minHeight: '100vh' }}>

        {/* Welcome panel: left on desktop, below the form on phones */}
        <div style={{ flex: '1 1 380px', minWidth: 0, backgroundColor: '#007298', padding: panelPadding, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', boxSizing: 'border-box' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/hero-image.webp')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
          <div style={{ position: 'relative', maxWidth: '440px', width: '100%', margin: '0 auto' }}>
            <p style={{ color: '#F59E0B', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0' }}>Welcome Back</p>
            <h1 style={{ color: 'white', fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: '800', lineHeight: '1.2', margin: '0 0 16px 0' }}>
              Good to see you again.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.7', margin: '0 0 28px 0' }}>
              Sign in to access your member deals, group cruise info, and exclusive sailings Eric has put together just for Happy Detour Travel members.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Exclusive group cruise deals',
                'Early access to new sailings',
                'Direct line to Eric',
                'A community of real cruisers',
              ].map((perk, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#F59E0B', fontSize: '18px', lineHeight: '1.3', flexShrink: 0 }}>✓</span>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', lineHeight: '1.5', margin: 0 }}>{perk}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sign-in form: right on desktop, on top on phones */}
        <div style={{ flex: '1 1 380px', minWidth: 0, padding: panelPadding, display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto' }}>
            <h2 style={{ color: '#1F2937', fontSize: 'clamp(24px, 5vw, 28px)', fontWeight: '800', margin: '0 0 8px 0' }}>Sign in to your account</h2>
            <p style={{ color: '#6B7280', fontSize: '15px', margin: '0 0 28px 0' }}>
              Don't have an account?{' '}
              <a href="/join" style={{ color: '#007298', fontWeight: '600', textDecoration: 'none' }}>Join Happy Detour Travel</a>
            </p>

            {error && (
              <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '12px 16px', marginBottom: '24px' }}>
                <p style={{ color: '#DC2626', fontSize: '14px', margin: 0 }}>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@email.com"
                  autoComplete="email"
                  inputMode="email"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Password *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Your password"
                    autoComplete="current-password"
                    style={{ ...inputStyle, padding: '12px 44px 12px 14px' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', padding: '4px', display: 'flex', alignItems: 'center' }}
                  >
                    <EyeIcon show={showPassword} />
                  </button>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <a href="/forgot-password" style={{ color: '#007298', fontSize: '14px', fontWeight: '600', textDecoration: 'none', display: 'inline-block', padding: '4px 0' }}>Forgot your password?</a>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{ width: '100%', backgroundColor: loading ? '#9CA3AF' : '#F59E0B', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '8px' }}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
