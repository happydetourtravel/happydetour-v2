import { useMemo, useState, type CSSProperties } from 'react'
import { sailorLootSailings } from './sailorLootData'

export default function SailorLootSection() {
  const [search, setSearch] = useState('')
  const [ship, setShip] = useState('All Ships')
  const [region, setRegion] = useState('All Regions')

  const ships = useMemo(
    () => ['All Ships', ...Array.from(new Set(sailorLootSailings.map((s) => s.ship))).sort()],
    []
  )
  const regions = useMemo(
    () => ['All Regions', ...Array.from(new Set(sailorLootSailings.map((s) => s.region))).sort()],
    []
  )

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return sailorLootSailings.filter((s) => {
      if (ship !== 'All Ships' && s.ship !== ship) return false
      if (region !== 'All Regions' && s.region !== region) return false
      if (q && !`${s.ship} ${s.sailing} ${s.region}`.toLowerCase().includes(q)) return false
      return true
    })
  }, [search, ship, region])

  return (
    <div style={{ marginBottom: '32px' }}>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ color: '#007298', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 4px 0' }}>
          Automatic Onboard Credit
        </p>
        <h2 style={{ color: '#1F2937', fontSize: '22px', fontWeight: '700', margin: '0 0 8px 0' }}>
          Sailor Loot on Virgin Voyages
        </h2>
        <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.7', margin: 0, maxWidth: '640px' }}>
          On the sailings below, Virgin Voyages adds onboard credit to your cabin automatically when you book
          through Eric. No code needed, no extra step. Find your sailing and check the amount.
        </p>
      </div>

      {/* Terms summary */}
      <div style={{ backgroundColor: 'white', borderRadius: '14px', border: '1px solid #E5E7EB', padding: '20px 24px', marginBottom: '20px' }}>
        <h3 style={{ color: '#1F2937', fontSize: '14px', fontWeight: '700', margin: '0 0 10px 0' }}>How it works</h3>
        <ul style={{ color: '#6B7280', fontSize: '13px', lineHeight: '1.8', margin: 0, paddingLeft: '18px' }}>
          <li>Credit amount is based on how long the sailing is: $50 for 4 to 5 nights, $100 for 6 to 9 nights, $200 for 10 or more nights, per cabin.</li>
          <li>Applies to Sea Terrace cabins, Rockstar Quarters, and Mega Rockstar suites. It does not apply to Insider, Sea View, or Solo cabins, or Lock-it-In Guaranteed rates.</li>
          <li>Full-ship charters and group or Circle sailings are not eligible.</li>
          <li>It can stack with things like Pay in Full, Resident Rates, and Military and First Responder Rates, but not with other Sailor Loot promos or reduced rate programs.</li>
          <li>Virgin Voyages can change or end this offer at any time, so amounts here are a guide, not a guarantee. Eric will always confirm the current amount before you book.</li>
        </ul>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by ship or destination"
          style={{
            flex: '1 1 220px',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
            fontSize: '14px',
            color: '#1F2937',
          }}
        />
        <select
          value={ship}
          onChange={(e) => setShip(e.target.value)}
          style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '14px', color: '#1F2937' }}
        >
          {ships.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '14px', color: '#1F2937' }}
        >
          {regions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '0 0 12px 0' }}>
        Showing {filtered.length} of {sailorLootSailings.length} upcoming sailings
      </p>

      {/* Table */}
      <div style={{ backgroundColor: 'white', borderRadius: '14px', border: '1px solid #E5E7EB', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        <div style={{ maxHeight: '520px', overflowY: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ backgroundColor: '#F9FAFB', position: 'sticky', top: 0 }}>
                <th style={thStyle}>Ship</th>
                <th style={thStyle}>Sail Date</th>
                <th style={thStyle}>Nights</th>
                <th style={thStyle}>Sailing</th>
                <th style={thStyle}>Region</th>
                <th style={{ ...thStyle, textAlign: 'right' }}>Sailor Loot</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr key={`${s.ship}-${s.sailDate}-${i}`} style={{ borderTop: '1px solid #E5E7EB' }}>
                  <td style={tdStyle}>{s.ship}</td>
                  <td style={tdStyle}>{s.sailDateLabel}</td>
                  <td style={tdStyle}>{s.nights}</td>
                  <td style={tdStyle}>{s.sailing}</td>
                  <td style={tdStyle}>{s.region}</td>
                  <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 700, color: '#007298' }}>${s.loot}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ ...tdStyle, textAlign: 'center', color: '#9CA3AF', padding: '24px' }}>
                    No sailings match that search. Try a different ship or destination.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '12px' }}>
        Amounts shown are per cabin and are added automatically at booking. Reach out to Eric with any questions
        about a specific sailing.
      </p>
    </div>
  )
}

const thStyle: CSSProperties = {
  textAlign: 'left',
  padding: '10px 16px',
  color: '#6B7280',
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}

const tdStyle: CSSProperties = {
  padding: '10px 16px',
  color: '#1F2937',
}
