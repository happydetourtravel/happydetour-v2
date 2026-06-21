import { useState } from "react";

export default function BahamasKeyWest() {
  const [contactOpen, setContactOpen] = useState(false);

  const days = [
    { day: 1, port: "Miami, Florida", time: "Departs 05:00 PM", desc: "Your adventure begins in Magic City. Board the Scarlet Lady and get settled in before we set sail into the warm Atlantic." },
    { day: 2, port: "Key West, Florida", time: "08:00 AM - 06:00 PM", desc: "The southernmost point in the US. Stroll Duval Street, grab a slice of key lime pie, and soak in the laid-back island vibe." },
    { day: 3, port: "Beach Club at Bimini, Bahamas", time: "08:00 AM - 06:00 PM", desc: "Virgin's private beach club. Crystal clear water, white sand, and an open bar situation that makes every hour feel like happy hour." },
    { day: 4, port: "Sea Day", time: "", desc: "A full day at sea to enjoy everything the Scarlet Lady has to offer. Eat, relax, explore the ship." },
    { day: 5, port: "Miami, Florida", time: "Arrives 07:00 AM", desc: "Back in Miami with a full memory card and an empty suitcase ready to be repacked." },
  ];

  const cabins = [
    { type: "Insider", desc: "No window, but everything else you need. Great value if you plan to spend most of your time out on deck.", price: "$549", perPerson: true },
    { type: "Sea View", desc: "A porthole window to watch the ocean go by. A step up in comfort without a huge jump in price.", price: "$649", perPerson: true },
    { type: "Sea Terrace", desc: "Your own private balcony. Worth every penny if you want to watch sunsets from your room.", price: "$799", perPerson: true },
    { type: "Rockstar Suite", desc: "The full Virgin experience. Extra space, priority everything, and perks that make you feel like you earned it.", price: "Contact Eric", perPerson: false },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB", fontFamily: "sans-serif" }}>

      {/* Hero */}
      <div style={{ position: "relative", height: "480px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/bahamas-key-west.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.55)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "48px" }}>
          <div style={{ backgroundColor: "#CC0000", color: "white", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", display: "inline-block", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", alignSelf: "flex-start" }}>
            Virgin Voyages
          </div>
          <h1 style={{ color: "white", fontSize: "42px", fontWeight: "800", margin: "0 0 12px 0", lineHeight: "1.2" }}>
            Caribbean Escape — Bahamas & Key West
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>January 2027</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>4 Nights</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>Scarlet Lady</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>Departs Miami</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "48px", alignItems: "start" }}>

          {/* Left Column */}
          <div>

            {/* Overview */}
            <div style={{ marginBottom: "48px" }}>
              <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Sailing Overview</p>
              <h2 style={{ color: "#1F2937", fontSize: "28px", fontWeight: "800", margin: "0 0 16px 0" }}>A quick escape that punches above its weight</h2>
              <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: "0 0 16px 0" }}>
                Four nights is all it takes to remember why you needed this. The Scarlet Lady departs Miami and takes you to Key West — the kind of place where flip flops are formal wear — then on to Virgin's private Beach Club at Bimini in the Bahamas, where the water is so clear it doesn't look real.
              </p>
              <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
                This is a great first cruise. Short enough that it doesn't feel overwhelming, and packed enough that you'll come home already planning your next one. Everything Virgin includes is here: all specialty restaurants, WiFi, fitness classes, and non-alcoholic drinks. Gratuities are paid onboard separately.
              </p>
            </div>

            {/* What's Included */}
            <div style={{ marginBottom: "48px" }}>
              <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>What's Included</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  "All specialty restaurants",
                  "Unlimited WiFi",
                  "Fitness & wellness classes",
                  "Soft drinks, juice & drip coffee",
                  "Room service (delivery fee applies)",
                  "All onboard entertainment",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "#007298", fontWeight: "700", fontSize: "16px" }}>checkmark</span>
                    <span style={{ color: "#374151", fontSize: "14px" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "16px", backgroundColor: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "8px", padding: "12px 16px" }}>
                <p style={{ color: "#92400E", fontSize: "13px", margin: 0 }}>
                  <strong>Not included:</strong> Alcohol, gratuities ($20-$22/sailor/night paid onboard), shore excursions, and spa treatments.
                </p>
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>Day by Day</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {days.map((d, i) => (
                  <div key={i} style={{ display: "flex", gap: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#007298", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "13px", flexShrink: 0 }}>
                        {d.day}
                      </div>
                      {i < days.length - 1 && (
                        <div style={{ width: "2px", flex: 1, backgroundColor: "#E5E7EB", margin: "4px 0" }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: i < days.length - 1 ? "28px" : "0" }}>
                      <p style={{ color: "#1F2937", fontWeight: "700", fontSize: "15px", margin: "0 0 2px 0" }}>{d.port}</p>
                      {d.time && <p style={{ color: "#9CA3AF", fontSize: "12px", margin: "0 0 6px 0" }}>{d.time}</p>}
                      <p style={{ color: "#4B5563", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Booking Card */}
          <div style={{ position: "sticky", top: "88px" }}>
            <div style={{ backgroundColor: "white", borderRadius: "16px", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
              <div style={{ backgroundColor: "#1F2937", padding: "16px 20px" }}>
                <p style={{ color: "#F59E0B", fontSize: "11px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 4px 0" }}>Starting From</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ color: "#9CA3AF", fontSize: "16px", textDecoration: "line-through" }}>$699</span>
                  <span style={{ color: "white", fontSize: "36px", fontWeight: "800" }}>$549</span>
                  <span style={{ color: "#9CA3AF", fontSize: "13px" }}>/person</span>
                </div>
              </div>
              <div style={{ padding: "20px" }}>
                <p style={{ color: "#374151", fontSize: "13px", fontWeight: "600", margin: "0 0 12px 0" }}>Cabin Categories</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                  {cabins.map((c, i) => (
                    <div key={i} style={{ borderBottom: i < cabins.length - 1 ? "1px solid #F3F4F6" : "none", paddingBottom: i < cabins.length - 1 ? "10px" : "0" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                        <span style={{ color: "#1F2937", fontWeight: "600", fontSize: "14px" }}>{c.type}</span>
                        <span style={{ color: "#007298", fontWeight: "700", fontSize: "14px" }}>{c.price}{c.perPerson ? " pp" : ""}</span>
                      </div>
                      <p style={{ color: "#9CA3AF", fontSize: "12px", margin: 0, lineHeight: "1.5" }}>{c.desc}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK&dateFrom=2027-01-01&dateTo=2027-01-31&durations=1-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", textAlign: "center", backgroundColor: "#CC0000", color: "white", padding: "14px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "15px", marginBottom: "10px" }}
                >
                  Book This Cruise
                </a>
                <div style={{ position: "relative", marginBottom: "12px" }}>
                  <button
                    onClick={() => setContactOpen(!contactOpen)}
                    style={{ display: "block", width: "100%", textAlign: "center", backgroundColor: "#F9FAFB", color: "#007298", padding: "12px 16px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", border: "1px solid #E5E7EB", cursor: "pointer" }}
                  >
                    Contact Eric
                  </button>
                  {contactOpen && (
                    <div style={{ position: "absolute", bottom: "100%", left: 0, right: 0, backgroundColor: "white", border: "1px solid #E5E7EB", borderRadius: "8px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", overflow: "hidden", marginBottom: "4px" }}>
                      <a href="sms:7473338687" style={{ display: "block", padding: "12px 16px", color: "#374151", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #F3F4F6" }}>
                        Send a Text
                      </a>
                      <a href="mailto:eric@happydetour.com" style={{ display: "block", padding: "12px 16px", color: "#374151", textDecoration: "none", fontSize: "14px" }}>
                        Send an Email
                      </a>
                    </div>
                  )}
                </div>
                <p style={{ color: "#9CA3AF", fontSize: "11px", textAlign: "center", margin: 0, lineHeight: "1.5" }}>
                  Prices are estimates and subject to change. Contact Eric for current availability and exact pricing.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
