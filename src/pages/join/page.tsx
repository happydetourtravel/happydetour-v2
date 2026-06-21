import { useState } from 'react'
import { useSignUp } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

export default function Join() {
  const { signUp, isLoaded } = useSignUp()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    sailsWith: '',
  })
  const [acceptsMarketing, setAcceptsMarketing] = useState(false)
  const [acceptsTerms, setAcceptsTerms] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!acceptsTerms) {
      setError('You must accept the Terms and Conditions and Privacy Policy to continue.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    if (!isLoaded) return

    setLoading(true)

    try {
      await signUp.create({
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailAddress: formData.email,
        password: formData.password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
      navigate('/verify')
    } catch (err: any) {
      setError(err?.errors?.[0]?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const perks = [
    'Access to exclusive HDT group cruise deals',
    'Early access to new sailings before they fill up',
    'Direct line to Eric for questions and planning',
    'A community of real cruisers just like you',
  ]

  const getPasswordStrength = (password: string) => {
    if (password.length === 0) return null
    if (password.length < 6) return { label: 'Weak', color: '#DC2626', width: '33%' }
    if (password.length < 10 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) return { label: 'Moderate', color: '#F59E0B', width: '66%' }
    return { label: 'Strong', color: '#16A34A', width: '100%' }
  }

  const strength = getPasswordStrength(formData.password)
  const passwordsMatch = formData.confirmPassword.length > 0 && formData.password === formData.confirmPassword

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
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', minHeight: '100vh' }}>

        {/* Left Panel */}
        <div style={{ flex: 1, backgroundColor: '#007298', padding: '64px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/hero-image.webp')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
          <div style={{ position: 'relative', maxWidth: '440px' }}>
            <p style={{ color: '#F59E0B', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>HDT Members</p>
            <h1 style={{ color: 'white', fontSize: '40px', fontWeight: '800', lineHeight: '1.2', margin: '0 0 24px 0' }}>
              Join the HDT Club
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: '1.7', margin: '0 0 40px 0' }}>
              Get exclusive access to group cruise deals that Eric organizes personally. Real trips, real savings, and someone actually in your corner.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {perks.map((perk, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#F59E0B', fontSize: '18px', marginTop: '1px' }}>✓</span>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', margin: 0 }}>{perk}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div style={{ flex: 1, padding: '64px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '440px', width: '100%' }}>
            <h2 style={{ color: '#1F2937', fontSize: '28px', fontWeight: '800', margin: '0 0 8px 0' }}>Create your account</h2>
            <p style={{ color: '#6B7280', fontSize: '15px', margin: '0 0 32px 0' }}>
              Already have an account?{' '}
              <a href="/login" style={{ color: '#007298', fontWeight: '600', textDecoration: 'none' }}>Sign In</a>
            </p>

            {error && (
              <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '12px 16px', marginBottom: '24px' }}>
                <p style={{ color: '#DC2626', fontSize: '14px', margin: 0 }}>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>First Name *</label>
                  <input name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="First name" style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Last Name *</label>
                  <input name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Last name" style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Email Address *</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@email.com" style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              <div>
                <label style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Who do you usually sail with?</label>
                <select name="sailsWith" value={formData.sailsWith} onChange={handleChange} style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', outline: 'none', backgroundColor: 'white', boxSizing: 'border-box' }}>
                  <option value="">Select one...</option>
                  <option value="partner">My partner</option>
                  <option value="family">Family</option>
                  <option value="friends">Friends</option>
                  <option value="solo">Solo</option>
                  <option value="group">A group</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Password *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="At least 8 characters"
                    style={{ width: '100%', padding: '10px 44px 10px 14px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', padding: 0, display: 'flex', alignItems: 'center' }}
                  >
                    <EyeIcon show={showPassword} />
                  </button>
                </div>
                {strength && (
                  <div style={{ marginTop: '8px' }}>
                    <div style={{ height: '4px', backgroundColor: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: strength.width, backgroundColor: strength.color, borderRadius: '4px', transition: 'all 0.3s ease' }} />
                    </div>
                    <p style={{ fontSize: '12px', color: strength.color, fontWeight: '600', margin: '4px 0 0 0' }}>{strength.label} password</p>
                  </div>
                )}
              </div>

              <div>
                <label style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>Confirm Password *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="Repeat your password"
                    style={{ width: '100%', padding: '10px 44px 10px 14px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', padding: 0, display: 'flex', alignItems: 'center' }}
                  >
                    <EyeIcon show={showConfirmPassword} />
                  </button>
                </div>
                {formData.confirmPassword.length > 0 && (
                  <p style={{ fontSize: '12px', fontWeight: '600', margin: '4px 0 0 0', color: passwordsMatch ? '#16A34A' : '#DC2626' }}>
                    {passwordsMatch ? '✓ Passwords match!' : 'Passwords do not match'}
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <input type="checkbox" id="acceptsMarketing" checked={acceptsMarketing} onChange={(e) => setAcceptsMarketing(e.target.checked)} style={{ marginTop: '2px', accentColor: '#007298', width: '16px', height: '16px', flexShrink: 0 }} />
                <label htmlFor="acceptsMarketing" style={{ color: '#374151', fontSize: '13px', lineHeight: '1.5', cursor: 'pointer' }}>
                  Send me member exclusive deals, perks, and updates
                </label>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <input type="checkbox" id="acceptsTerms" checked={acceptsTerms} onChange={(e) => setAcceptsTerms(e.target.checked)} style={{ marginTop: '2px', accentColor: '#007298', width: '16px', height: '16px', flexShrink: 0 }} />
                <label htmlFor="acceptsTerms" style={{ color: '#374151', fontSize: '13px', lineHeight: '1.5', cursor: 'pointer' }}>
                  I accept the{' '}
                  <a href="/terms" style={{ color: '#007298', textDecoration: 'none', fontWeight: '600' }}>Terms and Conditions</a>
                  {' '}and{' '}
                  <a href="/privacy" style={{ color: '#007298', textDecoration: 'none', fontWeight: '600' }}>Privacy Policy</a> *
                </label>
              </div>

              <button type="submit" disabled={loading} style={{ backgroundColor: loading ? '#9CA3AF' : '#F59E0B', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '8px' }}>
                {loading ? 'Creating your account...' : 'Join the HDT Club'}
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
