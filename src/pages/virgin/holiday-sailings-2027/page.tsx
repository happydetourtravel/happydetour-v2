// Holiday Sailings 2027 (Thanksgiving, Christmas, New Year's) on Virgin Voyages.
// To add a price later, fill in "price" with the per-person amount, like "$945".
// Leave it as "" and the card shows "Text Eric for current pricing" instead.

const FM = "https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK";
const bookLink = (date: string) => `${FM}&dateFrom=${date}&dateTo=${date}`;

type Sailing = {
  ship: string;
  dates: string;
  date: string; // sail date, YYYY-MM-DD, used for the booking link
  nights: number;
  route: string;
  price: string;
};

const sections: { id: string; label: string; emoji: string; blurb: string; sailings: Sailing[] }[] = [
  {
    id: "thanksgiving",
    label: "Thanksgiving",
    emoji: "🦃",
    blurb: "Thanksgiving is Thursday, November 25, 2027. Skip the cooking and the dishes, and let someone else make the feast.",
    sailings: [
      { ship: "Resilient Lady", dates: "Nov 20 to 28, 2027", date: "2027-11-20", nights: 8, route: "Miami • Philipsburg • San Juan • Samaná • The Beach Club at Bimini • Miami", price: "" },
      { ship: "Scarlet Lady", dates: "Nov 20 to 27, 2027", date: "2027-11-20", nights: 7, route: "San Juan • Oranjestad • Willemstad • St. John's • Philipsburg • San Juan", price: "" },
      { ship: "Valiant Lady", dates: "Nov 22 to 27, 2027", date: "2027-11-22", nights: 5, route: "Miami • George Town, Grand Cayman • The Beach Club at Bimini • Miami", price: "" },
      { ship: "Brilliant Lady", dates: "Nov 24 to 27, 2027", date: "2027-11-24", nights: 3, route: "Los Angeles • Ensenada • Los Angeles", price: "" },
    ],
  },
  {
    id: "christmas",
    label: "Christmas",
    emoji: "🎄",
    blurb: "Trade the holiday rush for sunshine. Christmas at sea, with no shopping lists and no hosting.",
    sailings: [
      { ship: "Scarlet Lady", dates: "Dec 18 to 26, 2027", date: "2027-12-18", nights: 8, route: "San Juan • Philipsburg • St. John's • Roseau • Oranjestad • Willemstad • San Juan", price: "" },
      { ship: "Resilient Lady", dates: "Dec 19 to 26, 2027", date: "2027-12-19", nights: 7, route: "Miami • Puerto Plata • San Juan • The Beach Club at Bimini • Miami", price: "" },
      { ship: "Valiant Lady", dates: "Dec 20 to 27, 2027", date: "2027-12-20", nights: 7, route: "Miami • George Town, Grand Cayman • Ocho Rios • The Beach Club at Bimini • Miami", price: "" },
      { ship: "Brilliant Lady", dates: "Dec 23 to 28, 2027", date: "2027-12-23", nights: 5, route: "Miami • The Beach Club at Bimini • Cozumel • Miami", price: "" },
    ],
  },
  {
    id: "new-years",
    label: "New Year's",
    emoji: "🎉",
    blurb: "Ring in 2028 on the water. A big party night onboard, then wake up somewhere warm.",
    sailings: [
      { ship: "Scarlet Lady", dates: "Dec 26, 2027 to Jan 2, 2028", date: "2027-12-26", nights: 7, route: "San Juan • Philipsburg • Bridgetown • Fort-de-France • St. John's • Charlotte Amalie • San Juan", price: "" },
      { ship: "Resilient Lady", dates: "Dec 26, 2027 to Jan 2, 2028", date: "2027-12-26", nights: 7, route: "Miami • Costa Maya • Belize City • Roatán • The Beach Club at Bimini • Miami", price: "" },
      { ship: "Brilliant Lady", dates: "Dec 28, 2027 to Jan 4, 2028", date: "2027-12-28", nights: 7, route: "Miami • Nassau • Ocho Rios • George Town, Grand Cayman • The Beach Club at Bimini • Miami", price: "" },
      { ship: "Valiant Lady", dates: "Dec 30, 2027 to Jan 3, 2028", date: "2027-12-30", nights: 4, route: "Miami • Key West • The Beach Club at Bimini • Miami", price: "" },
    ],
  },
];

const included = ["All specialty restaurants", "Unlimited WiFi", "Fitness & wellness classes", "Soft drinks, juice & drip coffee"];

export default function HolidaySailings2027() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB", fontFamily: "sans-serif" }}>
      <style>{`
        .hs-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 700px) { .hs-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>

      {/* Banner */}
      <div style={{ backgroundColor: "#1F2937" }}>
        <img
          src="/holiday-sailings-2027.png"
          alt="Holiday Sailings 2027 with Virgin Voyages: Thanksgiving, Christmas, and New Year's Eve"
          width="1983"
          height="793"
          fetchPriority="high"
          style={{ display: "block", width: "100%", maxWidth: "1400px", height: "auto", margin: "0 auto" }}
        />
      </div>

      {/* Intro */}
      <div style={{ backgroundColor: "#1F2937" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "36px 20px 48px 20px", textAlign: "center" }}>
          <h1 style={{ color: "white", fontSize: "clamp(24px, 5vw, 34px)", fontWeight: "800", margin: "0 0 14px 0", lineHeight: "1.2" }}>Spend the holidays at sea this year.</h1>
          <p style={{ color: "#D1D5DB", fontSize: "16px", maxWidth: "640px", margin: "0 auto 24px auto", lineHeight: "1.7" }}>
            Thanksgiving, Christmas, and New Year's on Virgin Voyages. Twelve sailings from 3 to 8 nights, out of Miami, San Juan, and Los Angeles. Holiday dates tend to fill up first, so it's smart to look early.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.25)", padding: "10px 18px", borderRadius: "100px", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>
                {s.emoji} {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>

        {/* Why book with Eric */}
        <div style={{ backgroundColor: "white", border: "1px solid #E5E7EB", borderLeft: "4px solid #007298", borderRadius: "12px", padding: "20px 22px", marginBottom: "48px" }}>
          <p style={{ color: "#1F2937", fontWeight: "700", fontSize: "16px", margin: "0 0 6px 0" }}>Book with me, and I'm in your corner the whole way.</p>
          <p style={{ color: "#4B5563", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
            No planning fee. I help you pick the right cabin, book your dining reservations, and check for price drops before final payment. Booking a Sea Terrace or higher? Ask me about adding Sailor Loot to your cabin.
          </p>
        </div>

        {/* Holiday sections */}
        {sections.map((section) => (
          <div key={section.id} id={section.id} style={{ marginBottom: "56px", scrollMarginTop: "90px" }}>
            <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px 0" }}>{section.emoji} {section.label} 2027</p>
            <h2 style={{ color: "#1F2937", fontSize: "clamp(24px, 5vw, 30px)", fontWeight: "800", margin: "0 0 8px 0" }}>{section.label} Sailings</h2>
            <p style={{ color: "#4B5563", fontSize: "15px", lineHeight: "1.7", margin: "0 0 22px 0", maxWidth: "700px" }}>{section.blurb}</p>

            <div className="hs-grid">
              {section.sailings.map((s) => (
                <div key={s.ship + s.date} style={{ backgroundColor: "white", borderRadius: "14px", border: "1px solid #E5E7EB", boxShadow: "0 4px 18px rgba(0,0,0,0.05)", padding: "20px", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <span style={{ backgroundColor: "#CC0000", color: "white", fontSize: "10px", fontWeight: "800", padding: "3px 8px", borderRadius: "4px", letterSpacing: "0.5px", textTransform: "uppercase" }}>{s.ship}</span>
                    <span style={{ color: "#007298", fontSize: "12px", fontWeight: "700" }}>{s.nights} nights</span>
                  </div>
                  <p style={{ color: "#1F2937", fontWeight: "700", fontSize: "17px", margin: "0 0 6px 0" }}>{s.dates}</p>
                  <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: "1.6", margin: "0 0 16px 0" }}>{s.route}</p>

                  <div style={{ marginTop: "auto", borderTop: "1px solid #F3F4F6", paddingTop: "14px" }}>
                    {s.price ? (
                      <p style={{ margin: "0 0 12px 0" }}>
                        <span style={{ color: "#9CA3AF", fontSize: "11px" }}>Starting from </span>
                        <span style={{ color: "#1F2937", fontSize: "22px", fontWeight: "800" }}>{s.price}</span>
                        <span style={{ color: "#6B7280", fontSize: "12px" }}> /person</span>
                      </p>
                    ) : (
                      <p style={{ color: "#6B7280", fontSize: "13px", fontWeight: "600", margin: "0 0 12px 0" }}>Text Eric for current pricing</p>
                    )}
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      <a href={bookLink(s.date)} target="_blank" rel="noopener noreferrer" style={{ flex: "1 1 140px", textAlign: "center", backgroundColor: "#CC0000", color: "white", padding: "11px 14px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>Book This Sailing</a>
                      <a href="sms:6308231253" style={{ flex: "1 1 180px", textAlign: "center", backgroundColor: "#F9FAFB", color: "#007298", border: "1px solid #E5E7EB", padding: "10px 14px", borderRadius: "8px", textDecoration: "none", fontWeight: "600", fontSize: "14px" }}>Text Eric: 630-823-1253</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* What's included */}
        <div style={{ backgroundColor: "white", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "24px", marginBottom: "32px" }}>
          <p style={{ color: "#007298", fontSize: "12px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 14px 0" }}>Included on Every Sailing</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px" }}>
            {included.map((item) => (
              <p key={item} style={{ color: "#374151", fontSize: "14px", margin: 0 }}>✓ {item}</p>
            ))}
          </div>
          <div style={{ marginTop: "16px", backgroundColor: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "8px", padding: "12px 16px" }}>
            <p style={{ color: "#92400E", fontSize: "13px", margin: 0 }}><strong>Not included:</strong> Alcohol, gratuities, shore excursions, and spa treatments.</p>
          </div>
        </div>

        {/* Contact */}
        <div style={{ textAlign: "center", backgroundColor: "white", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "32px 20px" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "50%", margin: "0 auto 12px auto", backgroundImage: "url('/eric-headshot.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <p style={{ color: "#1F2937", fontWeight: "700", fontSize: "17px", margin: "0 0 6px 0" }}>Not sure which holiday sailing fits?</p>
          <p style={{ color: "#4B5563", fontSize: "14px", lineHeight: "1.7", margin: "0 auto 18px auto", maxWidth: "520px" }}>Tell me who's going and what you want the trip to feel like. I'll help you pick the right one, no pressure.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="sms:6308231253" style={{ flex: "1 1 220px", maxWidth: "280px", textAlign: "center", backgroundColor: "#007298", color: "white", padding: "13px 20px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>Text Eric: 630-823-1253</a>
            <a href="mailto:eric@happydetour.com" style={{ flex: "1 1 220px", maxWidth: "280px", textAlign: "center", backgroundColor: "white", color: "#007298", border: "2px solid #007298", padding: "11px 20px", borderRadius: "8px", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>Email Eric: eric@happydetour.com</a>
          </div>
        </div>

        <p style={{ color: "#9CA3AF", fontSize: "11px", textAlign: "center", margin: "20px 0 0 0", lineHeight: "1.6" }}>
          Prices and availability change. Contact Eric for current pricing. Updated November 2026.
        </p>
      </div>
    </div>
  );
}
