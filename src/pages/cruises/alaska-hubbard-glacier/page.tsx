import { useState } from "react";

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill="#D1FAE5"/>
    <path d="M5 9.5L7.5 12L13 6.5" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function AlaskaHubbardGlacier() {
  const [contactOpen, setContactOpen] = useState(false);

  const days = [
    { day: 1, port: "Seattle, Washington", time: "Departs 05:00 PM", desc: "Board the Brilliant Lady in Seattle and set sail north. The Pacific Northwest is beautiful even before Alaska begins." },
    { day: 2, port: "At Sea", time: "", desc: "A full day at sea as you head up the coast. Settle in, explore the ship, and watch the scenery change." },
    { day: 3, port: "Ketchikan, Alaska", time: "09:00 AM - 05:00 PM", desc: "Alaska's first city. Known as the Salmon Capital of the World, Ketchikan is a colorful port town with totem poles, rainforest, and some of the best seafood you'll ever eat. Tender boat to shore." },
    { day: 4, port: "Icy Strait Point, Alaska", time: "12:00 PM - 08:00 PM", desc: "One of Alaska's most authentic ports — a preserved Tlingit village turned world-class adventure destination. Whale watching, zip lines, and brown bears are all on the table." },
    { day: 5, port: "Hubbard Glacier (Cruising), Alaska", time: "", desc: "No port today — just the glacier. The Brilliant Lady spends the day cruising past Hubbard Glacier, the largest tidewater glacier in North America. Chunks of ice the size of buildings calving into the sea. This is the one you'll talk about for years." },
    { day: 6, port: "Sitka, Alaska", time: "09:00 AM - 07:00 PM", desc: "Sitka is Alaska at its most beautiful. Russian history, bald eagles, sea otters, and a harbor that looks like it belongs on a postcard. One of the best ports in the entire itinerary." },
    { day: 7, port: "At Sea", time: "", desc: "Heading south. A great day to process everything you've seen and enjoy one more long dinner aboard." },
    { day: 8, port: "At Sea", time: "", desc: "Another sea day as you make your way back toward the Pacific Northwest." },
    { day: 9, port: "Victoria, British Columbia", time: "08:00 AM - 06:00 PM", desc: "End in one of Canada's most elegant cities. Victoria is charming, walkable, and an unexpected highlight for first-timers. The Butchart Gardens are worth every minute if you have time." },
    { day: 10, port: "Seattle, Washington", time: "Arrives 07:00 AM", desc: "Back in Seattle. You came for Alaska and left with memories that will last a very long time." },
  ];

  const cabins = [
    { type: "Insider", desc: "No window, but everything else you need. Great value on a sailing where you'll spend most of your time on deck watching glaciers.", price: "$1,161", perPerson: true },
    { type: "Sea View", desc: "A porthole window for the Inside Passage. On a sailing this scenic, the upgrade is worth it.", price: "$1,521", perPerson: true },
    { type: "Sea Terrace", desc: "Your own private balcony. Watching Hubbard Glacier from your room is an experience you won't forget.", price: "$2,062", perPerson: true },
    { type: "RockStar Quarters", desc: "Rooftop access, in-room bar, priority everything. The ultimate way to see Alaska.", price: "$5,121", perPerson: true },
    { type: "Mega RockStar Quarters", desc: "The largest spaces on the ship. Daily bar tab, spa access, and the best views onboard.", price: "$8,991", perPerson: true },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB", fontFamily: "sans-serif" }}>
      <div style={{ position: "relative", height: "480px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/BL-Alaska.jpeg')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.55)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "48px" }}>
          <div style={{ backgroundColor: "#CC0000", color: "white", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", display: "inline-block", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", alignSelf: "flex-start" }}>Virgin Voyages</div>
          <h1 style={{ color: "white", fontSize: "42px", fontWeight: "800", margin: "0 0 12px 0", lineHeight: "1.2" }}>Alaska: Hubbard Glacier & Coastal Views</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>August 24, 2027</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>9 Nights</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>Brilliant Lady</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>Departs Seattle</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "48px", alignItems: "start" }}>
          <div>
            <div style={{ marginBottom: "48px" }}>
              <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Sailing Overview</p>
              <h2 style={{ color: "#1F2937", fontSize: "28px", fontWeight: "800", margin: "0 0 16px 0" }}>Nine nights through the last great wilderness</h2>
              <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: "0 0 16px 0" }}>
                Alaska is unlike anywhere else on earth, and this itinerary doesn't hold back. Nine nights aboard the Brilliant Lady, stopping in Ketchikan, Icy Strait Point, and Sitka — with a full day cruising past Hubbard Glacier, the largest tidewater glacier in North America — before ending in Victoria, British Columbia.
              </p>
              <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
                Late August is peak season in Alaska. The weather is at its best, the wildlife is active, and the light is extraordinary. This is a trip that changes your sense of scale. All specialty restaurants, WiFi, and fitness classes are included. Gratuities are paid onboard separately.
              </p>
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
                  <span style={{ color: "#9CA3AF", fontSize: "16px", textDecoration: "line-through" }}>$1,597</span>
                  <span style={{ color: "white", fontSize: "36px", fontWeight: "800" }}>$1,161</span>
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
                <a href="https://www.virginvoyages.com/book/voyage-planner/pre-checkout?agencyId=589&agentId=278796&currencyCode=USD&dateFrom=2027-08-01&dateTo=2027-08-31&durations=9-12&packageCode=9NSABC2&ships=BR&voyageId=BR2708249NSABC2" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", backgroundColor: "#CC0000", color: "white", padding: "14px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "15px", marginBottom: "10px" }}>Book This Cruise</a>
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
