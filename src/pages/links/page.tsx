type LinkItem = { label: string; href: string; external?: boolean }

const sections: { heading: string; links: LinkItem[] }[] = [
  {
    heading: "Start Here",
    links: [
      { label: "🏠 Back to Happy Detour Travel", href: "/" },
      { label: "✈ Start Planning My Trip", href: "https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/6E9JQLQfrQfUvS85KcGhiHE1/link", external: true },
      { label: "🗺️ Drop Your Trip Wishlist", href: "https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/RFxrKCNQTejSeWAhpo4BaaEz/link", external: true },
      { label: "📝 Read Postcards, the HDT Blog", href: "/blog" },
    ]
  },
  {
    heading: "Virgin Voyages",
    links: [
      { label: "💃 Search & Book Virgin Voyages", href: "https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK", external: true },
      { label: "🧍 Solo Sailor Deals", href: "/solo" },
    ]
  },
  {
    heading: "Other Cruise Lines",
    links: [
      { label: "Explore NCL Sailings", href: "/cruises/norwegian" },
      { label: "Explore MSC Cruises", href: "/cruises/msc" },
      { label: "See Royal Caribbean Ships", href: "/cruises/royal-caribbean" },
      { label: "View Carnival Sailings", href: "/cruises/carnival" },
    ]
  },
  {
    heading: "All-Inclusive Resorts",
    links: [
      { label: "🌴 Explore Sandals Resorts", href: "https://www.sandals.com/?referral=101731&agentid=ERCA7707", external: true },
      { label: "🏖️ Explore Beaches Resorts", href: "https://www.beaches.com/?referral=101731&agentid=ERCA7707", external: true },
    ]
  },
  {
    heading: "Group Sailings",
    links: [
      { label: "Mexican Riviera Halloween Cruise", href: "https://www.happydetour.com/group/baja-halloween-2027", external: true },
      { label: "Eastern Caribbean on Allure of the Seas", href: "https://www.happydetour.com/group/allure-eastern-caribbean-2027", external: true },
    ]
  },
  {
    heading: "Follow Along",
    links: [
      { label: "👥 Join the So Much to Sea Group", href: "https://www.facebook.com/groups/somuchtosea", external: true },
      { label: "📸 Instagram", href: "https://www.instagram.com/happydetourtravel", external: true },
      { label: "📘 Facebook", href: "https://www.facebook.com/happydetourtravel", external: true },
      { label: "🎵 TikTok", href: "https://www.tiktok.com/@happydetourtravel", external: true },
    ]
  },
  {
    heading: "Get In Touch",
    links: [
      { label: "💬 Text Eric", href: "sms:6308231253" },
      { label: "✉️ Email Eric", href: "mailto:eric@happydetour.com" },
    ]
  },
]

export default function Links() {
  return (
    <main style={{ backgroundColor: '#F9FAFB', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* Header */}
      <div style={{ backgroundColor: '#007298', padding: '64px 24px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
          Happy Detour Travel
        </p>
        <h1 style={{ color: 'white', fontSize: '42px', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
          Everything in one place.
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '16px', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
          Find your way to a cruise, a resort, a group, or just me. Whatever you need, it's right here.
        </p>
      </div>

      {/* Links List */}
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '64px 24px' }}>
        {sections.map((section) => (
          <div key={section.heading} style={{ marginBottom: '40px' }}>
            <p style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', margin: '0 0 12px 4px' }}>
              {section.heading}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {section.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'block',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    border: '1px solid #E5E7EB',
                    padding: '18px 22px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    color: '#1F2937',
                    fontSize: '15px',
                    fontWeight: '600',
                    transition: 'transform 0.15s ease, border-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#F59E0B'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Footer note */}
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <p style={{ color: '#9CA3AF', fontSize: '13px' }}>
            Real trips. Real value. Someone actually in your corner.
          </p>
        </div>
      </div>

    </main>
  )
}
