import { useState } from 'react'

export default function GreekIslesAdriatic() {
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false)
  const [cardDropdownOpen, setCardDropdownOpen] = useState(false)

  const days = [
    { day: 1, port: "Athens (Piraeus), Greece", time: "Departs 05:00 PM", desc: "Board the Scarlet Lady in the shadow of ancient history. Athens is right there if you want to arrive early and explore before sailing." },
    { day: 2, port: "Mykonos, Greece", time: "08:00 AM - 08:00 PM", desc: "The glamour island of the Aegean. Whitewashed windmills, narrow lanes, and a beach scene that goes until sunrise. Tender boat to shore." },
    { day: 3, port: "Sailing", time: "", desc: "A full day at sea as you cross toward the Adriatic. Rest up — the next few days are packed." },
    { day: 4, port: "Kotor, Montenegro", time: "08:00 AM - 06:00 PM", desc: "One of the most underrated stops in all of Europe. A medieval walled city tucked inside a fjord. Walk the walls for views that don't feel real. Tender boat to shore." },
    { day: 5, port: "Corfu, Greece", time: "09:00 AM - 06:00 PM", desc: "Lush, green, and completely different from the dry Cyclades. Old Corfu Town is a UNESCO site and the food here is worth the trip alone." },
    { day: 6, port: "Dubrovnik, Croatia", time: "08:00 AM - 07:00 PM", desc: "The Pearl of the Adriatic. Walk the ancient city walls, explore the old town, and understand immediately why everyone talks about this place." },
    { day: 7, port: "Sailing", time: "", desc: "Another sea day to decompress between the Adriatic and the Greek islands. Great day for the spa or a long lunch." },
    { day: 8, port: "Santorini, Greece", time: "08:00 AM - 06:00 PM", desc: "The one everyone pictures when they think of Greece. Blue domed churches, caldera views, and sunsets in Oia that will ruin all other sunsets for you. Tender boat to shore." },
    { day: 9, port: "Bodrum, Turkey", time: "08:00 AM - 08:00 PM", desc: "A late stay in one of Turkey's most beautiful coastal cities. Ancient ruins, a stunning castle, and a harbor town that comes alive at night." },
    { day: 10, port: "Chania (Souda Bay), Crete, Greece", time: "08:30 AM - 06:00 PM", desc: "Crete is Greece's largest island and Chania is its most beautiful city. Venetian harbor, incredible food, and beaches that belong on a postcard." },
    { day: 11, port: "Sailing", time: "", desc: "The last sea day. One more meal at your favorite restaurant onboard, one more sunset from your balcony." },
    { day: 12, port: "Athens (Piraeus), Greece", time: "Arrives 06:30 AM", desc: "Back in Athens. Give yourself an extra day to explore the Acropolis before heading home — you've earned it." },
  ]

  const cabins = [
    { type: "Insider", desc: "No window, but everything else you need. Great value for 11 nights if you plan to spend your days in port.", price: "$1,639", perPerson: true },
    { type: "Sea View", desc: "A porthole window to watch the Mediterranean go by. A meaningful upgrade for a longer voyage.", price: "$1,899", perPerson: true },
    { type: "Sea Terrace", desc: "Your own private balcony. On an 11-night European sailing, this is worth every penny.", price: "$2,199", perPerson: true },
    { type: "Rockstar Suite", desc: "The full Virgin experience. Priority everything, extra space, and perks that make an already great trip extraordinary.", price: "Contact Eric", perPerson: false },
  ]

  const dropdownMenu = (
    <>
      
       <a href="sms:7473338687"
        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', fontSize: '14px', color: '#1F2937', textDecoration: 'none', fontWeight: '600', borderBottom: '1px solid #F3F4F6' }}
      >
        📱 Send Eric a Text
      </a>
      
       <a href={"mailto:eric@happydetour.com?subject=Cruise%20Inquiry%20-%20Greek%20Isles%20%26%20The%20Adriatic"}
        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', fontSize: '14px', color: '#1F2937', textDecoration: 'none', fontWeight: '600' }}
      >
        ✉️ Send Eric an Email
      </a>
    </>
  )

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB', fontFamily: 'sans-serif' }}>

      {/* Hero */}
      <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/hero-image.webp')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.55)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '48px' }}>
          <div style={{ backgroundColor: '#CC0000', color: 'white', fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '4px', display: 'inline-block', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px', alignSelf: 'flex-start' }}>
            Virgin Voyages
          </div>
          <h1 style={{ color: 'white', fontSize: '42px', fontWeight: '800', margin: '0 0 12px 0', lineHeight: '1.2' }}>
            Greek Isles &amp; The Adriatic
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px' }}>📅 May 30, 2027</span>
            <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px' }}>🌙 11 Nights</span>
            <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px' }}>🚢 Scarlet Lady</span>
            <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px' }}>📍 Departs Athens</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px', alignItems: 'start' }}>

          {/* Left Column */}
          <div>

            {/* Sailing Overview */}
            <div style={{ marginBottom: '48px' }}>
              <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Sailing Overview</p>
              <h2 style={{ color: '#1F2937', fontSize: '28px', fontWeight: '800', margin: '0 0 16px 0' }}>Eleven nights across the most beautiful corners of Europe</h2>
              <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: '1.8', margin: '0 0 16px 0' }}>
                This is the trip people spend years talking about taking. Eleven nights aboard the Scarlet Lady, hitting Mykonos, Kotor, Corfu, Dubrovnik, Santorini, Bodrum, and Crete — places that belong on everyone's list and that Virgin Voyages does better than almost anyone.
              </p>
              <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                Virgin's longer port stays and overnight stops mean you actually get to experience these places instead of just ticking a box. Late May is the sweet spot — warm enough, not yet peak summer crowds, and the light in the Greek islands at this time of year is something else. All specialty restaurants, WiFi, and fitness classes are included. Gratuities are paid onboard separately.
              </p>
            </div>

            {/* What's Included */}
            <div style={{ marginBottom: '48px' }}>
              <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>What's Included</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  "All specialty restaurants",
                  "Unlimited WiFi",
                  "Fitness & wellness classes",
                  "Soft drinks, juice & drip coffee",
                  "Room service (delivery fee applies)",
                  "All onboard entertainment",
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#007298', fontWeight: '700', fontSize: '16px' }}>✓</span>
                    <span style={{ color: '#374151', fontSize: '14px' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '16px', backgroundColor: '#FEF3C7', border: '1px solid #FCD34D', borderRadius: '8px', padding: '12px 16px' }}>
                <p style={{ color: '#92400E', fontSize: '13px', margin: 0 }}>
                  <strong>Not included:</strong> Alcohol, gratuities ($20–$22/sailor/night paid onboard), shore excursions, and spa treatments.
                </p>
              </div>
            </div>

            {/* Current Offer */}
            <div style={{ marginBottom: '48px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '20px 24px' }}>
              <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Limited Time Offer</p>
              <p style={{ color: '#1F2937', fontSize: '15px', fontWeight: '700', margin: '0 0 4px 0' }}>70% Off 2nd Sailor + Free Balcony Upgrade</p>
              <p style={{ color: '#4B5563', fontSize: '14px', margin: 0 }}>Book now to lock in this rate. Contact Eric to confirm current availability and exact pricing before booking.</p>
            </div>

            {/* Itinerary */}
            <div>
              <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>Day by Day</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {days.map((d, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#007298', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '13px', flexShrink: 0 }}>
                        {d.day}
                      </div>
                      {i < days.length - 1 && (
                        <div style={{ width: '2px', flex: 1, backgroundColor: '#E5E7EB', margin: '4px 0' }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: i < days.length - 1 ? '28px' : '0' }}>
                      <p style={{ color: '#1F2937', fontWeight: '700', fontSize: '15px', margin: '0 0 2px 0' }}>{d.port}</p>
                      {d.time && <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '0 0 6px 0' }}>{d.time}</p>}
                      <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Booking Card */}
          <div style={{ position: 'sticky', top: '88px' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
              <div style={{ backgroundColor: '#1F2937', padding: '16px 20px' }}>
                <p style={{ color: '#F59E0B', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 4px 0' }}>Starting From</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ color: '#9CA3AF', fontSize: '16px', textDecoration: 'line-through' }}>$2,325</span>
                  <span style={{ color: 'white', fontSize: '36px', fontWeight: '800' }}>$1,639</span>
                  <span style={{ color: '#9CA3AF', fontSize: '13px' }}>/person</span>
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                <p style={{ color: '#374151', fontSize: '13px', fontWeight: '600', margin: '0 0 12px 0' }}>Cabin Categories</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {cabins.map((c, i) => (
                    <div key={i} style={{ borderBottom: i < cabins.length - 1 ? '1px solid #F3F4F6' : 'none', paddingBottom: i < cabins.length - 1 ? '10px' : '0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                        <span style={{ color: '#1F2937', fontWeight: '600', fontSize: '14px' }}>{c.type}</span>
                        <span style={{ color: '#007298', fontWeight: '700', fontSize: '14px' }}>{c.price}{c.perPerson ? ' pp' : ''}</span>
                      </div>
                      <p style={{ color: '#9CA3AF', fontSize: '12px', margin: 0, lineHeight: '1.5' }}>{c.desc}</p>
                    </div>
                  ))}
                </div>

                
                 <a href={"https://www.virginvoyages.com/book/voyage-planner/pre-checkout?agencyId=589&agentId=278796&bookingChannel=FMLINK&cabins=1&currencyCode=USD&dateFrom=2027-06-01&dateTo=2027-06-30&packageCode=11NADB&ships=SC&voyageId=SC27053011NADB"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', textAlign: 'center', backgroundColor: '#CC0000', color: 'white', padding: '14px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '15px', marginBottom: '10px' }}
                >
                  Book This Cruise
                </a>

                <div style={{ position: 'relative', marginBottom: '12px' }}>
                  <button
                    onClick={() => setCardDropdownOpen(!cardDropdownOpen)}
                    onBlur={() => setTimeout(() => setCardDropdownOpen(false), 150)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', backgroundColor: '#F9FAFB', color: '#007298', padding: '12px 16px', borderRadius: '8px', fontWeight: '600', fontSize: '14px', border: '1px solid #E5E7EB', cursor: 'pointer' }}
                  >
                    Talk to Eric First
                    <span style={{ fontSize: '10px' }}>▼</span>
                  </button>
                  {cardDropdownOpen && (
                    <div style={{ position: 'absolute', bottom: 'calc(100% + 6px)', left: 0, right: 0, backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', border: '1px solid #F3F4F6', zIndex: 100 }}>
                      {dropdownMenu}
                    </div>
                  )}
                </div>

                <p style={{ color: '#9CA3AF', fontSize: '11px', textAlign: 'center', margin: 0, lineHeight: '1.5' }}>
                  Prices are estimates and subject to change. Contact Eric for current availability and exact pricing.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
