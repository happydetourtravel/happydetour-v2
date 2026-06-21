import { useState } from "react";

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill="#D1FAE5"/>
    <path d="M5 9.5L7.5 12L13 6.5" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function FrenchRivieraSpainIbiza() {
  const [contactOpen, setContactOpen] = useState(false);

  const days = [
    { day: 1, port: "Barcelona, Spain", time: "Departs 05:00 PM", desc: "Start in one of Europe's most electric cities. Board the Resilient Lady and get settled before setting sail along the Mediterranean coast." },
    { day: 2, port: "Nice (Villefranche), France", time: "10:00 AM - 07:00 PM", desc: "The French Riviera at its finest. Arrive by tender boat to the charming port of Villefranche, with Nice just a short ride away. Azure water, pastel buildings, and world-class food." },
    { day: 3, port: "Provence (Toulon), France", time: "08:00 AM - 06:00 PM", desc: "Gateway to Provence. Lavender fields, ancient Roman ruins, and a slower pace of life that makes you wish you could stay longer." },
    { day: 4, port: "At Sea", time: "", desc: "A full day at sea in the Mediterranean. Relax on deck, try a new restaurant, or just watch the water go by." },
    { day: 5, port: "Valencia, Spain", time: "08:00 AM - 05:00 PM", desc: "The birthplace of paella and home to the futuristic City of Arts and Sciences. Valencia is the kind of place that surprises you." },
    { day: 6, port: "Ibiza, Spain", time: "Arrives 07:00 PM", desc: "Arrive in Ibiza as the evening begins. The island is known for its nightlife, but the old town — a UNESCO World Heritage Site — is stunning any time of day." },
    { day: 7, port: "Ibiza, Spain", time: "Departs 05:00 PM", desc: "A full day in Ibiza. Explore the whitewashed old town, find a beach, or just take it all in before heading back to Barcelona." },
    { day: 8, port: "Barcelona, Spain", time: "Arrives 06:30 AM", desc: "Back in Barcelona. You'll have seen more of the Mediterranean in a week than most people do in a lifetime." },
  ];

  const cabins = [
    { type: "Insider", desc: "No window, but everything else you need. Great value if you plan to spend most of your time in port.", price: "$1,253", perPerson: true },
    { type: "Sea View", desc: "A porthole window with Mediterranean views. A step up in comfort on a sailing this beautiful.", price: "$1,533", perPerson: true },
    { type: "Sea Terrace", desc: "Your own private balcony. Watching the French Riviera go by from here is hard to beat.", price: "$1,603", perPerson: true },
    { type: "RockStar Quarters", desc: "The full Virgin experience. Rooftop access, in-room bar, priority everything.", price: "$3,570", perPerson: true },
    { type: "Mega RockStar Quarters", desc: "The largest spaces on the ship. Daily bar tab, spa access, and a prime location.", price: "$5,495", perPerson: true },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB", fontFamily: "sans-serif" }}>
      <div style={{ position: "relative", height: "480px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/ibiza-spain.webp')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.55)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "48px" }}>
          <div style={{ backgroundColor: "#CC0000", color: "white", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", display: "inline-block", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", alignSelf: "flex-start" }}>Virgin Voyages</div>
          <h1 style={{ color: "white", fontSize: "42px", fontWeight: "800", margin: "0 0 12px 0", lineHeight: "1.2" }}>French Riviera, Spain & Ibiza Overnight</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>June 27, 2027</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>7 Nights</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>Resilient Lady</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>Departs Barcelona</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "48px", alignItems: "start" }}>
          <div>
            <div style={{ marginBottom: "48px" }}>
              <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Sailing Overview</p>
              <h2 style={{ color: "#1F2937", fontSize: "28px", fontWeight: "800", margin: "0 0 16px 0" }}>Seven nights along the best coastline in Europe</h2>
              <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: "0 0 16px 0" }}>Barcelona to the French Riviera to Ibiza — this itinerary hits the Mediterranean highlights that people spend years dreaming about. Seven nights aboard the Resilient Lady, with stops in Nice, Provence, Valencia, and two full days in Ibiza.</p>
              <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>Late June is one of the best times to sail the Med. Long days, warm water, and every port in full summer swing. All specialty restaurants, WiFi, and fitness classes are included. Gratuities are paid onboard separately.</p>
            </div>

            <div style={{ marginBottom: "48px" }}>
              <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>What's Included</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {["All specialty restaurants","Unlimited WiFi","Fitness & wellness classes","Soft drinks, juice & drip coffee","Room service (delivery fee applies)","All onboard entertainment"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Check />
                    <span style={{ color: "#374151", fontSize: "14px" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "16px", backgroundColor: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "8px", padding: "12px 16px" }}>
                <p style={{ color: "#92400E", fontSize: "13px", margin: 0 }}><strong>Not included:</strong> Alcohol, gratuities ($20-$22/sailor/night paid onboard), shore excursions, and spa treatments.</p>
              </div>
            </div>

            <div>
              <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>Day by Day</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {days.map((d, i) => (
                  <div key={i} style={{ display: "flex", gap: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#007298", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "13px", flexShrink: 0 }}>{d.day}</div>
                      {i < days.length - 1 && <div style={{ width: "2px", flex: 1, backgroundColor: "#E5E7EB", margin: "4px 0" }} />}
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

          <div style={{ position: "sticky", top: "88px" }}>
            <div style={{ backgroundColor: "white", borderRadius: "16px", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
              <div style={{ backgroundColor: "#1F2937", padding: "16px 20px" }}>
                <p style={{ color: "#F59E0B", fontSize: "11px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 4px 0" }}>Starting From</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ color: "#9CA3AF", fontSize: "16px", textDecoration: "line-through" }}>$1,801</span>
                  <span style={{ color: "white", fontSize: "36px", fontWeight: "800" }}>$1,253</span>
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
                    </div>
                  ))}
                </div>
                <a href="https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK&dateFrom=2027-06-01&dateTo=2027-06-30&durations=6-8&ships=RS" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", backgroundColor: "#CC0000", color: "white", padding: "14px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "15px", marginBottom: "10px" }}>Book This Cruise</a>
                <div style={{ position: "relative", marginBottom: "12px" }}>
                  <button onClick={() => setContactOpen(!contactOpen)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", backgroundColor: "#F9FAFB", color: "#007298", padding: "12px 16px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", border: "1px solid #E5E7EB", cursor: "pointer" }}>Contact Eric</button>
                  {contactOpen && (
                    <div style={{ position: "absolute", bottom: "calc(100% + 6px)", left: 0, right: 0, backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 24px rgba(0,0,0,0.12)", border: "1px solid #F3F4F6", zIndex: 100 }}>
                      <a href="sms:7473338687" style={{ display: "block", padding: "12px 16px", fontSize: "14px", color: "#1F2937", textDecoration: "none", fontWeight: "600", borderBottom: "1px solid #F3F4F6" }}>Send a Text</a>
                      <a href="mailto:eric@happydetour.com" style={{ display: "block", padding: "12px 16px", fontSize: "14px", color: "#1F2937", textDecoration: "none", fontWeight: "600" }}>Send an Email</a>
                    </div>
                  )}
                </div>
                <p style={{ color: "#9CA3AF", fontSize: "11px", textAlign: "center", margin: 0, lineHeight: "1.5" }}>Prices are estimates and subject to change. Contact Eric for current availability and exact pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
