import { useState } from 'react'
import { useSignIn } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const { signIn, isLoaded } = useSignIn()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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
        navigate('/members')
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.message || 'Invalid email or password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', minHeight: '100vh' }}>

        <div style={{ flex: 1, backgroundColor: '#007298', padding: '64px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/hero-image.webp')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
          <div style={{ position: 'relative', maxWidth: '440px' }}>
            <p style={{ color: '#F59E0B', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Welcome Back</p>
            <h1 style={{ color: 'white', fontSize: '40px', fontWeight: '800', lineHeight: '1.2', margin: '0 0 24px 0' }}>
              Good to see you again.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.7', margin: '0 0 40px 0' }}>
              Sign in to access your member deals, group cruise info, and exclusive sailings Eric has put together just for HDT members.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Exclusive group cruise deals',
                'Early access to new sailings',
                'Direct line to Eric',
                'A community of real cruisers',
              ].map((perk, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#F59E0B', fontSize: '18px', marginTop: '1px' }}>✓</span>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', margin: 0 }}>{perk}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ flex: 1, padding: '64px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '440px', width: '100%' }}>
            <h2 style={{ color: '#1F2937', fontSize: '28px', fontWeight: '800', margin: '0 0 8px 0' }}>Sign in to your account</h2>
            <p style={{ color: '#6B7280', fontSize: '15px', margin: '0 0 32px 0' }}>
              Don't have an account?{' '}
              <a href="/join" style={{ color: '#007298', fontWeight: '600', textDecoration: 'none' }}>Join HDT</a>
            </p>

            {error && (
              <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '12px 16px', marginBottom: '24px' }}>
                <p style={{ color: '#DC2626', fontSize: '14px', margin: 0 }}>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@email.com"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Password *</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Your password"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ textAlign: 'right' }}>
                <a href="/forgot-password" style={{ color: '#007298', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>Forgot your password?</a>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{ backgroundColor: loading ? '#9CA3AF' : '#F59E0B', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '8px' }}
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
