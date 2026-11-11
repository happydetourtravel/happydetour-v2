import { useState } from "react";

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill="#D1FAE5"/>
    <path d="M5 9.5L7.5 12L13 6.5" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TrueCrimeVoyage() {
  const [contactOpen, setContactOpen] = useState(false);

  const days = [
    { day: 1, port: "Miami, Florida", time: "Saturday, March 20 · Departs 05:00 PM", desc: "Board Scarlet Lady at Terminal V and get settled in. Grab a drink, find your favorite spot, and get ready for five nights of mystery and sunshine." },
    { day: 2, port: "Sea Day", time: "Sunday, March 21", desc: "Your first full day onboard, and a big one for the True Crime programming. Live podcast recordings, themed trivia, and plenty of time to explore the ship." },
    { day: 3, port: "Grand Turk, Turks and Caicos", time: "Monday, March 22", desc: "Soft white sand, bright blue water, and some of the best snorkeling around. The Grand Turk Wall is famous for its marine life, and the lighthouse has great views of the island." },
    { day: 4, port: "Sea Day", time: "Tuesday, March 23", desc: "Another full day at sea. Catch a live show, meet your favorite hosts, sit in on a How to Podcast session, or just relax by the pool." },
    { day: 5, port: "The Beach Club at Bimini, Bahamas", time: "Wednesday, March 24", desc: "Virgin's private beach club. Turquoise water, white sand, and a pool scene that's hard to leave. A perfect last day in the sun." },
    { day: 6, port: "Miami, Florida", time: "Thursday, March 25 · Arrives early morning", desc: "Back in Miami with a few new favorite podcasts and a lot of stories to tell." },
  ];

  const cabins = [
    { type: "Insider", desc: "No window, but everything else you need. Great value if you plan to be out enjoying the shows and the ship.", price: "$1,890" },
    { type: "Sea View", desc: "A window to watch the ocean go by. A step up in comfort without a big jump in price.", price: "$1,990" },
    { type: "Sea Terrace", desc: "Your own private balcony with a hammock. Perfect for morning coffee and sunsets.", price: "$2,290" },
    { type: "RockStar Suite", desc: "The full Virgin experience. Extra space, priority everything, and perks that make the whole trip feel elevated.", price: "$5,100" },
  ];

  const onboard = [
    "Live podcast recordings",
    "Meet-and-greets with the hosts",
    "How to Podcast sessions",
    "Themed trivia and events",
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB", fontFamily: "sans-serif" }}>
      <div style={{ position: "relative", height: "480px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/true-crime-voyage.png')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.55)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "48px" }}>
          <div style={{ backgroundColor: "#CC0000", color: "white", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", display: "inline-block", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", alignSelf: "flex-start" }}>Themed Sailing · Virgin Voyages</div>
          <h1 style={{ color: "white", fontSize: "42px", fontWeight: "800", margin: "0 0 12px 0", lineHeight: "1.2" }}>True Crime Voyage: Grand Turk & Bimini</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>March 20 to 25, 2027</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>5 Nights</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>Scarlet Lady</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>Round Trip from Miami</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "48px", alignItems: "start" }}>
          <div>
            <div style={{ marginBottom: "48px" }}>
              <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Sailing Overview</p>
              <h2 style={{ color: "#1F2937", fontSize: "28px", fontWeight: "800", margin: "0 0 16px 0" }}>Your favorite true crime podcasts, live at sea</h2>
              <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: "0 0 16px 0" }}>If you listen to true crime on your commute, while you clean, or late at night when you should be sleeping, this one is for you. Virgin Voyages is bringing back its True Crime Voyage for a second year after the first one sold out. Five nights on Scarlet Lady, with stops at Grand Turk and Virgin's private Beach Club at Bimini.</p>
              <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>It's part of Virgin's On Air at Sea collection, with iHeartPodcasts shows like Disgraceland, Buried Bones, and Wisecrack on the lineup so far. Two full sea days give you plenty of time for the shows, and the rest is the usual Virgin experience. Adults only, great food, and no nickel and diming.</p>
            </div>

            <div style={{ marginBottom: "48px" }}>
              <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>What Happens Onboard</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {onboard.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Check />
                    <span style={{ color: "#374151", fontSize: "14px" }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: "#9CA3AF", fontSize: "12px", margin: "12px 0 0 0" }}>Virgin sets the programming and may add or change shows before the sailing.</p>
            </div>

            <div style={{ marginBottom: "48px" }}>
              <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>What's Included</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {["All specialty restaurants","Unlimited WiFi","Fitness & wellness classes","Soft drinks, juice & drip coffee","All True Crime programming","All onboard entertainment"].map((item, i) => (
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
                  <span style={{ color: "white", fontSize: "36px", fontWeight: "800" }}>$1,890</span>
                  <span style={{ color: "#9CA3AF", fontSize: "13px" }}>/cabin for 2</span>
                </div>
              </div>
              <div style={{ padding: "20px" }}>
                <p style={{ color: "#374151", fontSize: "13px", fontWeight: "600", margin: "0 0 12px 0" }}>Cabin Categories (per cabin, 2 sailors)</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                  {cabins.map((c, i) => (
                    <div key={i} style={{ borderBottom: i < cabins.length - 1 ? "1px solid #F3F4F6" : "none", paddingBottom: i < cabins.length - 1 ? "10px" : "0" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                        <span style={{ color: "#1F2937", fontWeight: "600", fontSize: "14px" }}>{c.type}</span>
                        <span style={{ color: "#007298", fontWeight: "700", fontSize: "14px" }}>{c.price}</span>
                      </div>
                      <p style={{ color: "#9CA3AF", fontSize: "12px", margin: 0, lineHeight: "1.5" }}>{c.desc}</p>
                    </div>
                  ))}
                </div>
                <a href="https://www.virginvoyages.com/book/voyage-planner/pre-checkout?agencyId=589&agentId=278796&bookingChannel=FMLINK&cabins=1&currencyCode=USD&dateFrom=2027-03-01&dateTo=2027-03-31&packageCode=5NTCV&priceType=perCabin&ships=SC&voyageId=SC2703205NTCV" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", backgroundColor: "#CC0000", color: "white", padding: "14px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "15px", marginBottom: "10px" }}>Book This Cruise</a>
                <div style={{ position: "relative", marginBottom: "12px" }}>
                  <button onClick={() => setContactOpen(!contactOpen)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", backgroundColor: "#F9FAFB", color: "#007298", padding: "12px 16px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", border: "1px solid #E5E7EB", cursor: "pointer" }}>Contact Eric</button>
                  {contactOpen && (
                    <div style={{ position: "absolute", bottom: "calc(100% + 6px)", left: 0, right: 0, backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 24px rgba(0,0,0,0.12)", border: "1px solid #F3F4F6", zIndex: 100 }}>
                      <a href="sms:6308231253" style={{ display: "block", padding: "12px 16px", fontSize: "14px", color: "#1F2937", textDecoration: "none", fontWeight: "600", borderBottom: "1px solid #F3F4F6" }}>Send a Text</a>
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
