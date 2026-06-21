import { useState, useRef } from 'react'
import { useSignUp } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

export default function Verify() {
  const { signUp, isLoaded } = useSignUp()
  const navigate = useNavigate()
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [resent, setResent] = useState(false)
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const newCode = [...code]
    newCode[index] = value.slice(-1)
    setCode(newCode)
    if (value && index < 5) {
      inputs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (pasted.length === 6) {
      setCode(pasted.split(''))
      inputs.current[5]?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const fullCode = code.join('')
    if (fullCode.length < 6) {
      setError('Please enter all 6 digits of your verification code.')
      return
    }
    if (!isLoaded) return
    setLoading(true)
    try {
      const result = await signUp.attemptEmailAddressVerification({ code: fullCode })
      if (result.status === 'complete') {
        navigate('/members')
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.message || 'Invalid code. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    if (!isLoaded) return
    try {
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
      setResent(true)
      setError('')
      setTimeout(() => setResent(false), 5000)
    } catch {
      setError('Could not resend the code. Please try again.')
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '56px 48px', maxWidth: '480px', width: '100%', boxShadow: '0 4px 32px rgba(0,0,0,0.08)', textAlign: 'center' }}>

        <div style={{ width: '64px', height: '64px', backgroundColor: '#EFF6FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#007298" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>

        <h1 style={{ color: '#1F2937', fontSize: '26px', fontWeight: '800', margin: '0 0 8px 0' }}>Check your email</h1>
        <p style={{ color: '#6B7280', fontSize: '15px', lineHeight: '1.6', margin: '0 0 32px 0' }}>
          We sent a 6-digit verification code to your email address. Enter it below to activate your HDT account.
        </p>

        {error && (
          <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '12px 16px', marginBottom: '24px' }}>
            <p style={{ color: '#DC2626', fontSize: '14px', margin: 0 }}>{error}</p>
          </div>
        )}

        {resent && (
          <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: '8px', padding: '12px 16px', marginBottom: '24px' }}>
            <p style={{ color: '#16A34A', fontSize: '14px', margin: 0 }}>✓ A new code has been sent to your email.</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '32px' }}>
            {code.map((digit, i) => (
              <input
                key={i}
                ref={el => { inputs.current[i] = el }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(i, e.target.value)}
                onKeyDown={e => handleKeyDown(i, e)}
                onPaste={i === 0 ? handlePaste : undefined}
                style={{
                  width: '52px',
                  height: '60px',
                  textAlign: 'center',
                  fontSize: '24px',
                  fontWeight: '700',
                  borderRadius: '10px',
                  border: digit ? '2px solid #007298' : '2px solid #D1D5DB',
                  outline: 'none',
                  color: '#1F2937',
                  backgroundColor: digit ? '#EFF6FF' : 'white',
                  transition: 'all 0.15s ease'
                }}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ width: '100%', backgroundColor: loading ? '#9CA3AF' : '#007298', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', marginBottom: '16px' }}
          >
            {loading ? 'Verifying...' : 'Verify My Account'}
          </button>
        </form>

        <p style={{ color: '#6B7280', fontSize: '14px', margin: 0 }}>
          Did not get the email?{' '}
          <button
            onClick={handleResend}
            style={{ color: '#007298', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', padding: 0 }}
          >
            Resend the code
          </button>
        </p>

        <p style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '24px' }}>
          Check your spam folder if you do not see it in your inbox.
        </p>

      </div>
    </div>
  )
}
