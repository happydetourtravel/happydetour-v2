import { useState } from "react";

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill="#D1FAE5"/>
    <path d="M5 9.5L7.5 12L13 6.5" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ItalyFrenchRivieraScarlet() {
  const [contactOpen, setContactOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const days = [
    { day: 1, port: "Rome (Civitavecchia), Italy", time: "Departs 08:00 PM", desc: "Board the Scarlet Lady in Rome and set sail for the Mediterranean. Your gateway to the Eternal City has served as Rome's seaport since the 13th century." },
    { day: 2, port: "At Sea", time: "", desc: "A full day at sea heading south toward Sicily. Settle in and explore everything the Scarlet Lady has to offer." },
    { day: 3, port: "Catania, Sicily, Italy", time: "08:00 AM - 05:00 PM", desc: "At the foot of Mount Etna, Catania blends baroque architecture with some of the best street food in Italy." },
    { day: 4, port: "Naples, Italy", time: "09:00 AM - 08:00 PM", desc: "Gateway to Pompeii and Capri. Explore ancient ruins frozen in time or hop a boat to the cliffs and grottoes of Capri." },
    { day: 5, port: "At Sea", time: "", desc: "A sea day heading west toward Corsica and the French coast." },
    { day: 6, port: "Ajaccio, Corsica, France", time: "08:00 AM - 06:00 PM", desc: "Napoleon's birthplace, with turquoise water, mountain views, and a laid-back Mediterranean pace." },
    { day: 7, port: "Cannes, France", time: "08:00 AM - 08:00 PM", desc: "The French Riviera at its most glamorous — the Croisette, world-class shopping, and unmistakable Riviera energy." },
    { day: 8, port: "Florence/Pisa (Livorno), Italy", time: "08:00 AM - 06:00 PM", desc: "Tuscany awaits. The Leaning Tower, the Uffizi, or a countryside vineyard — Livorno is your door into it all." },
    { day: 9, port: "At Sea", time: "", desc: "One last day at sea heading back toward Rome. Take in a final sunset dinner before disembarking." },
    { day: 10, port: "Rome (Civitavecchia), Italy", time: "Arrives 08:00 AM", desc: "Back in Rome. Nine nights through Italy and the French Riviera, done the Virgin way." },
  ];

  // NOTE TO ERIC: pricing pulled from multiple sources and inconsistent — verify against
  // your booking tool before this goes live. These are placeholders in the right ballpark.
  // Verified solo (per Sailor) pricing pulled directly from Eric's FirstMates affiliate
  // booking tool. Taxes & fees are included in these prices.
  const cabins = [
    { type: "Insider", desc: "No window, but everything else you need for a port-packed itinerary like this one.", price: "$2,730" },
    { type: "Sea View", desc: "A porthole view of the Mediterranean as you sail between ports.", price: "$2,844" },
    { type: "Sea Terrace", desc: "Your own private balcony with hammock. Includes bar tab when booked with Eric.", price: "$3,023" },
    { type: "RockStar Quarters", desc: "Exclusive Richard's Rooftop access, stocked in-room bar, priority booking. Includes bar tab when booked with Eric.", price: "$7,704" },
    { type: "Mega RockStar Quarters", desc: "The largest spaces on the ship, with daily bar tab and spa access.", price: "$16,164" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB", fontFamily: "sans-serif" }}>
      <div className="h-[320px] md:h-[480px]" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/SC-ItalyFrenchRiviera.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.55)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
        <div className="px-4 md:px-6 pb-8 md:pb-12" style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
            <div style={{ backgroundColor: "#CC0000", color: "white", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", letterSpacing: "1px", textTransform: "uppercase" }}>Virgin Voyages</div>
            <div style={{ backgroundColor: "#F59E0B", color: "#1F2937", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", letterSpacing: "1px", textTransform: "uppercase" }}>Solo Sailor Offer</div>
          </div>
          <h1 className="text-[28px] md:text-[42px]" style={{ color: "white", fontWeight: "800", margin: "0 0 12px 0", lineHeight: "1.2" }}>Italy & French Riviera</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>August 22, 2026</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>9 Nights</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>Scarlet Lady</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>Departs Rome</span>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-6 py-10 md:py-16" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12" style={{ alignItems: "start" }}>
          <div>
            <div style={{ marginBottom: "32px", backgroundColor: "white", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "18px 20px", display: "flex", gap: "16px", alignItems: "center" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#E5E7EB", flexShrink: 0, backgroundImage: "url('/eric-headshot.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
              <div>
                <p style={{ color: "#1F2937", fontWeight: "700", fontSize: "14px", margin: "0 0 4px 0" }}>Hi, I'm Eric.</p>
                <p style={{ color: "#4B5563", fontSize: "13px", margin: 0, lineHeight: "1.5" }}>I handle all the details on this sailing and can often get you extra perks you won't see booking direct.</p>
              </div>
            </div>

            <div style={{ marginBottom: "32px", backgroundColor: "#FFF7ED", border: "1px solid #FDBA74", borderRadius: "10px", padding: "18px 20px" }}>
              <p style={{ color: "#9A3412", fontWeight: "700", fontSize: "15px", margin: "0 0 4px 0" }}>Solo Travel. Big Vibes. Smaller Price.</p>
              <p style={{ color: "#7C2D12", fontSize: "14px", margin: 0, lineHeight: "1.6" }}>
                This sailing is at just 150% single supplement. No paying double to cruise solo.
              </p>
            </div>

            <div style={{ marginBottom: "48px" }}>
              <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Sailing Overview</p>
              <h2 style={{ color: "#1F2937", fontSize: "28px", fontWeight: "800", margin: "0 0 16px 0" }}>Nine nights through Italy and the French Riviera</h2>
              <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: "0 0 16px 0" }}>
                Rome, Sicily, Naples, Corsica, Cannes, and Tuscany — all in nine nights aboard the Scarlet Lady. This is Mediterranean cruising with Virgin's signature no-buffet, all-restaurants-included approach, and every port is a reason to get off the ship.
              </p>
              <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.8", margin: 0 }}>
                Late August is peak Mediterranean season — warm water, long daylight, and the French Riviera at its liveliest. All specialty restaurants, WiFi, and fitness classes are included. Gratuities are paid onboard separately.
              </p>
            </div>

            <div style={{ marginBottom: "48px" }}>
              <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>What's Included</p>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "12px" }}>
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

          <div className="static lg:sticky" style={{ top: "88px" }}>
            <div style={{ backgroundColor: "white", borderRadius: "16px", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
              <div style={{ backgroundColor: "#1F2937", padding: "16px 20px" }}>
                <p style={{ color: "#F59E0B", fontSize: "11px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 4px 0" }}>Starting From</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ color: "white", fontSize: "36px", fontWeight: "800" }}>$2,730</span>
                  <span style={{ color: "#9CA3AF", fontSize: "13px" }}>/sailor</span>
                </div>
                <p style={{ color: "#FDE68A", fontSize: "12px", margin: "6px 0 0 0" }}>150% single supplement. No paying double to cruise solo.</p>
                <p style={{ color: "#A7F3D0", fontSize: "12px", fontWeight: "700", margin: "8px 0 0 0" }}>Book Sea Terrace or higher with Eric and get a bar tab included. Excludes Lock It In rate.</p>
              </div>
              <div style={{ padding: "20px" }}>
                <p style={{ color: "#374151", fontSize: "13px", fontWeight: "600", margin: "0 0 12px 0" }}>Cabin Categories</p>
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
                <a href="https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/6E9JQLQfrQfUvS85KcGhiHE1/link" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", backgroundColor: "#CC0000", color: "white", padding: "14px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "15px", marginBottom: "10px" }}>Claim This Solo Spot</a>
                <div style={{ position: "relative", marginBottom: "10px" }}>
                  <button onClick={() => setContactOpen(!contactOpen)} style={{ width: "100%", display: "block", textAlign: "center", backgroundColor: "#F9FAFB", color: "#007298", padding: "10px 16px", borderRadius: "8px", fontWeight: "600", fontSize: "13px", border: "1px solid #E5E7EB", cursor: "pointer" }}>Or text/email Eric directly</button>
                  {contactOpen && (
                    <div style={{ position: "absolute", bottom: "calc(100% + 6px)", left: 0, right: 0, backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 24px rgba(0,0,0,0.12)", border: "1px solid #F3F4F6", zIndex: 100 }}>
                      <a href="sms:6308231253" style={{ display: "block", padding: "12px 16px", fontSize: "14px", color: "#1F2937", textDecoration: "none", fontWeight: "600", borderBottom: "1px solid #F3F4F6" }}>Send a Text</a>
                      <a href="mailto:eric@happydetour.com" style={{ display: "block", padding: "12px 16px", fontSize: "14px", color: "#1F2937", textDecoration: "none", fontWeight: "600" }}>Send an Email</a>
                    </div>
                  )}
                </div>
                <a href="https://www.virginvoyages.com/book/voyage-planner/choose-a-cabin?agencyId=589&agentId=278796&cabins=1&currencyCode=USD&dateFrom=2026-08-08&dateTo=2026-08-31&packageCode=9NCC&sailors=1&ships=SC&voyageId=SC2608229NCC" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", color: "#D1D5DB", padding: "6px 16px", textDecoration: "underline", fontWeight: "500", fontSize: "11px", marginBottom: "10px" }}>Already know your cabin? Book directly</a>
                <p style={{ color: "#9CA3AF", fontSize: "11px", textAlign: "center", margin: 0, lineHeight: "1.5" }}>Solo pricing shown, taxes & fees included. Subject to change and availability.</p>
                <button onClick={() => setModalOpen(true)} style={{ display: "block", width: "100%", textAlign: "center", background: "none", border: "none", color: "#007298", fontSize: "12px", fontWeight: "600", cursor: "pointer", marginTop: "14px", textDecoration: "underline" }}>Join the mailing list for more deals like this</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "white", borderRadius: "16px", maxWidth: "480px", width: "100%", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
          >
            <div style={{ backgroundColor: "#007298", padding: "28px 28px 20px", position: "relative" }}>
              <button
                onClick={() => setModalOpen(false)}
                style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", color: "white", fontSize: "20px", lineHeight: 1 }}
                aria-label="Close"
              >
                ✕
              </button>
              <p style={{ color: "#F59E0B", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px 0" }}>Happy Detour Travel</p>
              <h2 style={{ color: "white", fontSize: "22px", fontWeight: "700", margin: "0 0 8px 0", lineHeight: "1.3" }}>
                Find your next detour.
              </h2>
              <p style={{ color: "#BAE6FD", fontSize: "14px", margin: 0, lineHeight: "1.5" }}>
                Get first dibs on cruise deals, resort updates, and honest travel tips from someone actually in your corner. No spam. Just good stuff.
              </p>
            </div>
            <div style={{ padding: "24px 28px 28px" }}>
              <iframe
                src="https://preview.mailerlite.io/forms/2458736/190757326102202283/share"
                style={{ width: "100%", height: "300px", border: "none", borderRadius: "8px" }}
                title="Join the Happy Detour Travel mailing list"
              />
              <p style={{ color: "#9CA3AF", fontSize: "11px", textAlign: "center", margin: "12px 0 0 0" }}>
                No selling your info. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
