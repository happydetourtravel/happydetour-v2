import { useState, useEffect, type ReactNode, type CSSProperties, type MouseEvent } from 'react'

// Eric's First Mate booking link. Bookings made through it stay tied to Happy Detour Travel.
export const VIRGIN_AFFILIATE_LINK =
  'https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK'

const COUNTDOWN_SECONDS = 8
const EVENT_NAME = 'hdt:virgin-redirect'

type Sailing = { title: string; details: string }
type RedirectDetail = { href: string; sailing?: Sailing }

// Call this from anywhere to show the "Heading to Virgin Voyages" popup.
export function openVirginRedirect(href: string = VIRGIN_AFFILIATE_LINK, sailing?: Sailing) {
  window.dispatchEvent(new CustomEvent<RedirectDetail>(EVENT_NAME, { detail: { href, sailing } }))
}

// Drop-in replacement for a plain <a href={affiliate link}>.
// Keeps whatever styling you give it. If JavaScript is off, it still works as a normal link.
export function VirginLink({
  children,
  href = VIRGIN_AFFILIATE_LINK,
  sailing,
  className,
  style,
  onClick,
}: {
  children: ReactNode
  href?: string
  sailing?: Sailing
  className?: string
  style?: CSSProperties
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        onClick?.()
        openVirginRedirect(href, sailing)
      }}
    >
      {children}
    </a>
  )
}

// Mount this ONCE (it lives in Header.tsx) and every VirginLink on the site will use it.
export function VirginRedirectModal() {
  const [detail, setDetail] = useState<RedirectDetail | null>(null)
  const [seconds, setSeconds] = useState(COUNTDOWN_SECONDS)

  // Listen for any VirginLink click on the site
  useEffect(() => {
    const handler = (e: Event) => {
      setDetail((e as CustomEvent<RedirectDetail>).detail)
      setSeconds(COUNTDOWN_SECONDS)
    }
    window.addEventListener(EVENT_NAME, handler)
    return () => window.removeEventListener(EVENT_NAME, handler)
  }, [])

  // Catch ANY plain link to Eric's First Mate booking link, on any page of the site,
  // so every "Search / Book / Browse Sailings" button gets the popup automatically.
  useEffect(() => {
    const onClick = (e: globalThis.MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as HTMLElement | null)?.closest?.('a') as HTMLAnchorElement | null
      if (!link) return
      const href = link.href || ''
      if (!href.includes('virginvoyages.com/book') || !href.includes('agentId=278796')) return
      e.preventDefault()
      setDetail({ href })
      setSeconds(COUNTDOWN_SECONDS)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  // Countdown. When it hits zero, send them on to Virgin.
  // Browsers block new tabs that open on a timer, so the automatic hop happens in the same tab.
  // Clicking the button opens Virgin in a new tab, so your site stays open behind it.
  useEffect(() => {
    if (!detail) return
    if (seconds <= 0) {
      window.location.href = detail.href
      return
    }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [detail, seconds])

  // Escape key closes it
  useEffect(() => {
    if (!detail) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDetail(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [detail])

  if (!detail) return null

  const goNow = () => {
    window.open(detail.href, '_blank', 'noopener,noreferrer')
    setDetail(null)
  }

  return (
    <div
      onClick={() => setDetail(null)}
      style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="vv-redirect-title"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: 'white', borderRadius: '16px', maxWidth: '440px', width: '100%', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', position: 'relative', textAlign: 'center' }}
      >
        <div style={{ height: '6px', background: 'linear-gradient(to right, #007298, #CC0000)' }} />

        <button
          onClick={() => setDetail(null)}
          aria-label="Close"
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: '18px', lineHeight: 1 }}
        >
          ✕
        </button>

        <div style={{ padding: '28px 28px 24px' }}>
          <img src="/HDT.png" alt="Happy Detour Travel" style={{ height: '48px', width: 'auto', margin: '0 auto 16px auto', display: 'block' }} />

          <h2 id="vv-redirect-title" style={{ color: '#1F2937', fontSize: '20px', fontWeight: '800', margin: '0 0 10px 0' }}>
            Heading to Virgin Voyages
          </h2>
          <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
            You're about to search and book on Virgin's site through my link. That keeps your booking connected to Happy Detour Travel, so I'm still in your corner for questions, perks, and anything that comes up. No planning fee.
          </p>

          {detail.sailing && (
            <div style={{ backgroundColor: '#F9FAFB', border: '1px solid #F3F4F6', borderRadius: '10px', padding: '14px 16px', margin: '0 0 20px 0', textAlign: 'left' }}>
              <p style={{ color: '#1F2937', fontWeight: '700', fontSize: '15px', margin: '0 0 4px 0' }}>{detail.sailing.title}</p>
              <p style={{ color: '#6B7280', fontSize: '13px', margin: 0 }}>{detail.sailing.details}</p>
            </div>
          )}

          <button
            onClick={goNow}
            style={{ display: 'block', width: '100%', backgroundColor: '#CC0000', color: 'white', padding: '13px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: '700', fontSize: '14px' }}
          >
            Continue to Virgin Voyages →
          </button>

          <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '12px 0 0 0' }}>
            Taking you there in {seconds}...
          </p>
          <a href="sms:6308231253" onClick={() => setDetail(null)} style={{ display: 'inline-block', color: '#007298', fontSize: '12px', fontWeight: '600', textDecoration: 'none', marginTop: '6px' }}>
            Rather talk first? Text Eric
          </a>
        </div>
      </div>
    </div>
  )
}
