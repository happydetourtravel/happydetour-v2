import { useState } from "react";

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill="#D1FAE5"/>
    <path d="M5 9.5L7.5 12L13 6.5" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CLAIM_FORM = "https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/6E9JQLQfrQfUvS85KcGhiHE1/link";
const VV_BASE = "https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK";

// PRICES: fill in "price" from your FirstMates tool (per person, double occupancy).
// Leave it as "" and the card shows "Text Eric for today's price" instead.
const sailings = [
  {
    ship: "Scarlet Lady",
    tag: "Easiest first sailing",
    nights: 5,
    dates: "February 15 to 20, 2027",
    from: "Miami",
    ports: ["Grand Bahama Island", "The Beach Club at Bimini", "Sisters at Sea meetup"],
    blurb: "The shortest way to be there for the big day. Five nights from Miami with a beach day at Bimini.",
    image: "/BiminiBeachClubDrone.jpg",
    loot: 100,
    price: "",
    link: `${VV_BASE}&dateFrom=2027-02-15&dateTo=2027-02-15&durations=5&ships=SC`,
  },
  {
    ship: "Resilient Lady",
    tag: "Full week from Miami",
    nights: 7,
    dates: "February 14 to 21, 2027",
    from: "Miami",
    ports: ["Progreso, Mexico (Yucatán)", "Grand Bahama Island", "The Beach Club at Bimini", "Sisters at Sea meetup"],
    blurb: "A full week with Mexico's Yucatán, the Bahamas, and the meetup in the middle. Sails over Valentine's Day.",
    image: "/eastern-caribbean-bimini.webp",
    loot: 100,
    price: "",
    link: `${VV_BASE}&dateFrom=2027-02-14&dateTo=2027-02-14&durations=6-8&ships=RS`,
  },
  {
    ship: "Valiant Lady",
    tag: "From San Juan",
    nights: 7,
    dates: "February 13 to 20, 2027",
    from: "San Juan, Puerto Rico",
    ports: ["Samaná, Dominican Republic", "Grand Turk", "Sisters at Sea meetup", "Cabo Rojo, Dominican Republic"],
    blurb: "Island hopping from San Juan, including a brand new port for Virgin at Cabo Rojo. Sails over Valentine's Day.",
    image: "/VL-BritishVirginIslands.JPG",
    loot: 100,
    price: "",
    link: `${VV_BASE}&dateFrom=2027-02-13&dateTo=2027-02-13&durations=6-8&ships=VL`,
  },
  {
    ship: "Brilliant Lady",
    tag: "Most ports",
    nights: 10,
    dates: "February 8 to 18, 2027",
    from: "Miami",
    ports: ["St. Maarten", "Tortola", "St. Croix", "San Juan", "Puerto Plata", "Sisters at Sea meetup"],
    blurb: "The longest option with the most islands. Ten nights through the Eastern Caribbean on Virgin's newest ship.",
    image: "/BR-BalconyHammock.JPG",
    loot: 200,
    price: "",
    link: `${VV_BASE}&dateFrom=2027-02-08&dateTo=2027-02-08&durations=9-12&ships=BR`,
  },
];

const eventHighlights = [
  "All four Virgin ships together at sea for the first time ever",
  "A synchronized horn salute with deck parties on every ship",
  "Musical guests and commemorative keepsakes",
  "Aerial filming of the whole fleet together",
  "A first look at what's next for Virgin Voyages, shared onboard",
];

export default function SistersAtSea2027() {
  const [contactOpen, setContactOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB", fontFamily: "sans-serif" }}>
      {/* Hero */}
      <div className="h-[340px] md:h-[500px]" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/BiminiBeachClubDrone.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.5)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }} />
        <div className="px-4 md:px-6 pb-8 md:pb-12" style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
            <div style={{ backgroundColor: "#CC0000", color: "white", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", letterSpacing: "1px", textTransform: "uppercase" }}>Virgin Voyages</div>
            <div style={{ backgroundColor: "#F59E0B", color: "#1F2937", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", letterSpacing: "1px", textTransform: "uppercase" }}>One Time Only Event</div>
          </div>
          <h1 className="text-[30px] md:text-[46px]" style={{ color: "white", fontWeight: "800", margin: "0 0 12px 0", lineHeight: "1.15" }}>Sisters at Sea 2027</h1>
          <p className="text-[16px] md:text-[19px]" style={{ color: "rgba(255,255,255,0.92)", margin: 0, maxWidth: "640px", lineHeight: "1.5" }}>
            On February 16, 2027, all four Virgin Voyages ships meet in the Caribbean for the first time. Four sailings. One party. Pick your ship.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-6 py-10 md:py-16" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Eric intro */}
        <div style={{ marginBottom: "32px", backgroundColor: "white", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "18px 20px", display: "flex", gap: "16px", alignItems: "center", maxWidth: "820px" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#E5E7EB", flexShrink: 0, backgroundImage: "url('/eric-headshot.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div>
            <p style={{ color: "#1F2937", fontWeight: "700", fontSize: "14px", margin: "0 0 4px 0" }}>Hi, I'm Eric.</p>
            <p style={{ color: "#4B5563", fontSize: "14px", margin: 0, lineHeight: "1.6" }}>
              Not sure which ship fits you best? Text me. I'll help you pick, handle every detail, and add Sailor Loot onboard credit you won't get booking direct.
            </p>
          </div>
        </div>

        {/* What is it */}
        <div style={{ marginBottom: "48px", maxWidth: "820px" }}>
          <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>The Event</p>
          <h2 style={{ color: "#1F2937", fontSize: "28px", fontWeight: "800", margin: "0 0 16px 0" }}>This has never happened before</h2>
          <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: "0 0 16px 0" }}>
            Scarlet Lady, Valiant Lady, Resilient Lady, and Brilliant Lady will all sail to the same spot in the Caribbean on Tuesday, February 16, 2027. Virgin is calling it the biggest celebration ever held on the open ocean, and Sir Richard Branson plans to be part of it.
          </p>
          <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: "0 0 20px 0" }}>
            The only way to be there is to be on one of these four sailings. Once it's done, it's done.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "12px" }}>
            {eventHighlights.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Check />
                <span style={{ color: "#374151", fontSize: "14px" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sailings */}
        <div style={{ marginBottom: "48px" }}>
          <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Choose Your Ship</p>
          <h2 style={{ color: "#1F2937", fontSize: "28px", fontWeight: "800", margin: "0 0 24px 0" }}>Four ways to be there</h2>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "24px" }}>
            {sailings.map((s, i) => (
              <div key={i} style={{ backgroundColor: "white", borderRadius: "16px", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", height: "190px", backgroundImage: `url('${s.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <span style={{ backgroundColor: "#1F2937", color: "white", fontSize: "11px", fontWeight: "700", padding: "4px 10px", borderRadius: "4px" }}>{s.tag}</span>
                    <span style={{ backgroundColor: "#F59E0B", color: "#1F2937", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px" }}>+${s.loot} Sailor Loot</span>
                  </div>
                </div>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ color: "#1F2937", fontSize: "21px", fontWeight: "800", margin: "0 0 4px 0" }}>{s.ship}</h3>
                  <p style={{ color: "#6B7280", fontSize: "14px", margin: "0 0 12px 0" }}>
                    {s.nights} nights · {s.dates} · Departs {s.from}
                  </p>
                  <p style={{ color: "#4B5563", fontSize: "14px", lineHeight: "1.6", margin: "0 0 14px 0" }}>{s.blurb}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
                    {s.ports.map((p, j) => (
                      <span key={j} style={{ backgroundColor: p === "Sisters at Sea meetup" ? "#FEE2E2" : "#EFF6FF", color: p === "Sisters at Sea meetup" ? "#991B1B" : "#1E40AF", fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "999px" }}>{p}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: "auto" }}>
                    <p style={{ color: "#1F2937", fontSize: "15px", fontWeight: "700", margin: "0 0 12px 0" }}>
                      {s.price ? <>From <span style={{ color: "#007298", fontSize: "22px" }}>{s.price}</span> <span style={{ color: "#9CA3AF", fontSize: "12px", fontWeight: "500" }}>/person</span></> : "Text Eric for today's price"}
                    </p>
                    <a href={CLAIM_FORM} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", backgroundColor: "#CC0000", color: "white", padding: "12px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "15px", marginBottom: "8px" }}>Claim a Spot on {s.ship}</a>
                    <a href={s.link} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", color: "#9CA3AF", fontSize: "12px", textDecoration: "underline" }}>Already know your cabin? Book directly</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Included */}
        <div style={{ marginBottom: "48px", maxWidth: "820px" }}>
          <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>What's Included on Every Sailing</p>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "12px" }}>
            {["All restaurants, no buffets","Unlimited WiFi","Fitness and yoga classes","Soft drinks, juice and drip coffee","All onboard entertainment","Everyone onboard is 18+"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Check />
                <span style={{ color: "#374151", fontSize: "14px" }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "16px", backgroundColor: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "8px", padding: "12px 16px" }}>
            <p style={{ color: "#92400E", fontSize: "13px", margin: 0 }}><strong>Not included:</strong> Alcohol, gratuities (paid separately), shore excursions, and spa treatments.</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ backgroundColor: "#007298", borderRadius: "16px", padding: "32px 24px", textAlign: "center" }}>
          <h2 style={{ color: "white", fontSize: "24px", fontWeight: "800", margin: "0 0 8px 0" }}>Want to be there on February 16?</h2>
          <p style={{ color: "#BAE6FD", fontSize: "15px", margin: "0 auto 20px auto", maxWidth: "560px", lineHeight: "1.6" }}>
            These sailings are tied to a one time event, so cabins won't sit around. We talk through everything before anything is confirmed so there are no surprises.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", position: "relative" }}>
            <a href={CLAIM_FORM} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#F59E0B", color: "#1F2937", padding: "14px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: "800", fontSize: "15px" }}>Start Planning My Trip</a>
            <div style={{ position: "relative" }}>
              <button onClick={() => setContactOpen(!contactOpen)} style={{ backgroundColor: "transparent", color: "white", padding: "14px 24px", borderRadius: "8px", fontWeight: "700", fontSize: "15px", border: "2px solid white", cursor: "pointer" }}>Text or Email Eric</button>
              {contactOpen && (
                <div style={{ position: "absolute", bottom: "calc(100% + 6px)", left: 0, right: 0, minWidth: "180px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 24px rgba(0,0,0,0.12)", border: "1px solid #F3F4F6", zIndex: 100, textAlign: "left" }}>
                  <a href="sms:6308231253" style={{ display: "block", padding: "12px 16px", fontSize: "14px", color: "#1F2937", textDecoration: "none", fontWeight: "600", borderBottom: "1px solid #F3F4F6" }}>Send a Text</a>
                  <a href="mailto:eric@happydetour.com" style={{ display: "block", padding: "12px 16px", fontSize: "14px", color: "#1F2937", textDecoration: "none", fontWeight: "600" }}>Send an Email</a>
                </div>
              )}
            </div>
          </div>
          <p style={{ color: "#E0F2FE", fontSize: "13px", margin: "16px 0 0 0" }}>Text 630-823-1253 · eric@happydetour.com</p>
          <button onClick={() => setModalOpen(true)} style={{ background: "none", border: "none", color: "#FDE68A", fontSize: "13px", fontWeight: "600", cursor: "pointer", marginTop: "12px", textDecoration: "underline" }}>Join the mailing list for more sailings like this</button>
        </div>

        <p style={{ color: "#9CA3AF", fontSize: "11px", textAlign: "center", margin: "20px auto 0 auto", maxWidth: "720px", lineHeight: "1.6" }}>
          Prices are per person, double occupancy, taxes and fees included, and are subject to change and availability. Sailor Loot applies to Sea Terrace cabins and above on Essential or Premium fares booked with Eric. Itineraries and event details are set by Virgin Voyages and may change.
        </p>
      </div>

      {modalOpen && (
        <div onClick={() => setModalOpen(false)} style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ backgroundColor: "white", borderRadius: "16px", maxWidth: "480px", width: "100%", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ backgroundColor: "#007298", padding: "28px 28px 20px", position: "relative" }}>
              <button onClick={() => setModalOpen(false)} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", color: "white", fontSize: "20px", lineHeight: 1 }} aria-label="Close">✕</button>
              <p style={{ color: "#F59E0B", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px 0" }}>Happy Detour Travel</p>
              <h2 style={{ color: "white", fontSize: "22px", fontWeight: "700", margin: "0 0 8px 0", lineHeight: "1.3" }}>Find your next detour.</h2>
              <p style={{ color: "#BAE6FD", fontSize: "14px", margin: 0, lineHeight: "1.5" }}>Get first dibs on cruise deals and honest travel tips from someone actually in your corner. No spam. Just good stuff.</p>
            </div>
            <div style={{ padding: "24px 28px 28px" }}>
              <iframe src="https://preview.mailerlite.io/forms/2458736/190757326102202283/share" style={{ width: "100%", height: "300px", border: "none", borderRadius: "8px" }} title="Join the Happy Detour Travel mailing list" />
              <p style={{ color: "#9CA3AF", fontSize: "11px", textAlign: "center", margin: "12px 0 0 0" }}>No selling your info. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
