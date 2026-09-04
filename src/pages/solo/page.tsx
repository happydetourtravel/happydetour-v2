import { useState } from "react";
import { Link } from "react-router-dom";

// Pricing shown is per person, double occupancy — the cheapest available
// cabin category on each sailing, split in half. Pulled directly from
// Eric's FirstMates affiliate booking tool on 9/4/2026. Taxes & fees
// included. Subject to change and availability — verify before quoting.
const sailings = [
  {
    slug: "bermuda-caribbean-nyc-sanjuan-valiant-1019",
    photo: "/VL-BritishVirginIslands.jpg", // TODO: upload to /public — see note below
    ship: "Valiant Lady",
    title: "Bermuda & Caribbean: NYC to San Juan",
    date: "October 19, 2026",
    nights: "12 Nights",
    price: "$1,188",
    loot: 200,
  },
  {
    slug: "spanish-isles-transatlantic-scarlet-1011",
    photo: "/Transatlantic.jpg", // TODO: upload to /public
    ship: "Scarlet Lady",
    title: "Spanish Isles & Transatlantic Miles",
    date: "October 11, 2026",
    nights: "14 Nights",
    price: "$1,386",
    loot: 200,
  },
  {
    slug: "panama-canal-la-miami-brilliant-1029",
    photo: "/brilliantlady.jpeg",
    ship: "Brilliant Lady",
    title: "Panama Canal: LA to Miami",
    date: "October 29, 2026",
    nights: "17 Nights",
    price: "$5,120",
    loot: 200,
  },
  {
    slug: "western-caribbean-bimini-resilient-1101",
    photo: "/BiminiBeachClubDrone.jpg", // TODO: upload to /public
    ship: "Resilient Lady",
    title: "Western Caribbean & Bimini Beach Club",
    date: "November 1, 2026",
    nights: "7 Nights",
    price: "$693",
    loot: 100,
  },
  {
    slug: "eastern-caribbean-bimini-brilliant-1115",
    photo: "/eastern-caribbean-bimini.webp",
    ship: "Brilliant Lady",
    title: "Eastern Caribbean & Bimini Beach Club",
    date: "November 15, 2026",
    nights: "10 Nights",
    price: "$1,190",
    loot: 200,
  },
  {
    slug: "southern-caribbean-valiant-1120",
    photo: "/SanJuanCouple.jpg", // TODO: upload to /public
    ship: "Valiant Lady",
    title: "Southern Caribbean Cruise",
    date: "November 20, 2026",
    nights: "8 Nights",
    price: "$792",
    loot: 100,
  },
  {
    slug: "eastern-caribbean-bimini-brilliant-0111",
    photo: "/eastern-caribbean-bimini.webp",
    ship: "Brilliant Lady",
    title: "Eastern Caribbean & Bimini Beach Club",
    date: "January 11, 2027",
    nights: "10 Nights",
    price: "$990",
    loot: 200,
  },
  {
    slug: "southern-caribbean-aruban-valiant-0206",
    photo: "/StCroixShoreThings.jpg", // TODO: upload to /public
    ship: "Valiant Lady",
    title: "Southern Caribbean & Aruban Nights",
    date: "February 6, 2027",
    nights: "7 Nights",
    price: "$1,043",
    loot: 100,
  },
  {
    slug: "southern-caribbean-valiant-0306",
    photo: "/BR-BalconyHammock.jpg", // TODO: upload to /public
    ship: "Valiant Lady",
    title: "Southern Caribbean Cruise",
    date: "March 6, 2027",
    nights: "7 Nights",
    price: "$1,113",
    loot: 100,
  },
  {
    slug: "mediterranean-barcelona-athens-resilient-0606",
    photo: "/SC-ItalyFrenchRiviera.jpg",
    ship: "Resilient Lady",
    title: "Mediterranean: Barcelona to Athens",
    date: "June 6, 2027",
    nights: "10 Nights",
    price: "$2,190",
    loot: 200,
  },
  {
    slug: "greek-isles-mykonos-scarlet-0627",
    photo: "/SC-GreekIslesAdriatic.jpg",
    ship: "Scarlet Lady",
    title: "Greek Isles & Mykonos Overnight",
    date: "June 27, 2027",
    nights: "7 Nights",
    price: "$1,533",
    loot: 100,
  },
  {
    slug: "alaska-glacial-fjords-brilliant-0520",
    photo: "/BL-Alaska.png",
    ship: "Brilliant Lady",
    title: "Alaska: Inside Passage & Glacial Fjords",
    date: "May 20, 2027",
    nights: "7 Nights",
    price: "$1,183",
    loot: 100,
  },
];

export default function VirginDealsHub() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB", fontFamily: "sans-serif" }}>
      <div style={{ backgroundColor: "#1F2937", position: "relative", overflow: "hidden" }}>
        <div className="px-4 md:px-6 py-12 md:py-16" style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", gap: "8px", marginBottom: "16px" }}>
            <div style={{ backgroundColor: "#CC0000", color: "white", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", letterSpacing: "1px", textTransform: "uppercase" }}>Virgin Voyages</div>
            <div style={{ backgroundColor: "#F59E0B", color: "#1F2937", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", letterSpacing: "1px", textTransform: "uppercase" }}>Sailor Loot Included</div>
          </div>
          <h1 className="text-[28px] md:text-[42px]" style={{ color: "white", fontWeight: "800", margin: "0 0 12px 0", lineHeight: "1.2" }}>Real trips. Real value.</h1>
          <p style={{ color: "#D1D5DB", fontSize: "16px", maxWidth: "640px", margin: "0 auto", lineHeight: "1.6" }}>
            Twelve Virgin Voyages sailings I've picked out myself, from a quick Caribbean getaway to a bucket-list Panama Canal crossing. Book any one of these with me and I'll add onboard credit to your cabin — up to $200 per cabin, no extra cost to you.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-6 py-10 md:py-16" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sailings.map((s) => (
            <Link
              key={s.slug}
              to={`/solo/${s.slug}`}
              style={{ textDecoration: "none", backgroundColor: "white", borderRadius: "12px", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}
            >
              <div style={{ height: "160px", backgroundImage: `url('${s.photo}')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                <div style={{ position: "absolute", top: "10px", left: "10px", backgroundColor: "#CC0000", color: "white", fontSize: "10px", fontWeight: "800", padding: "3px 8px", borderRadius: "4px", letterSpacing: "0.5px", textTransform: "uppercase" }}>{s.ship}</div>
                <div style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "#007298", color: "white", fontSize: "10px", fontWeight: "800", padding: "3px 8px", borderRadius: "4px", letterSpacing: "0.5px" }}>
                  +${s.loot} Sailor Loot
                </div>
              </div>
              <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ color: "#1F2937", fontWeight: "700", fontSize: "16px", margin: "0 0 6px 0", lineHeight: "1.3" }}>{s.title}</p>
                <p style={{ color: "#9CA3AF", fontSize: "13px", margin: "0 0 12px 0" }}>{s.date} · {s.nights}</p>
                <div style={{ marginTop: "auto", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ color: "#9CA3AF", fontSize: "11px" }}>From </span>
                    <span style={{ color: "#007298", fontWeight: "800", fontSize: "18px" }}>{s.price}</span>
                    <span style={{ color: "#9CA3AF", fontSize: "11px" }}> /person</span>
                  </div>
                  <span style={{ color: "#CC0000", fontWeight: "700", fontSize: "13px" }}>View →</span>
                </div>
                <p style={{ color: "#007298", fontSize: "11px", fontWeight: "600", margin: "8px 0 0 0" }}>
                  Includes ${s.loot} onboard credit when booked with Eric
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <p style={{ color: "#9CA3AF", fontSize: "12px" }}>
            Pricing shown is per person, double occupancy, taxes & fees included. Subject to change and availability. Gratuities and alcohol not included.
          </p>
        </div>

        <div style={{ marginTop: "32px", textAlign: "center", backgroundColor: "white", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "32px 20px" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#E5E7EB", margin: "0 auto 12px auto", backgroundImage: "url('/eric-headshot.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <p style={{ color: "#1F2937", fontWeight: "700", fontSize: "16px", margin: "0 0 6px 0" }}>Don't see the sailing you want?</p>
          <p style={{ color: "#4B5563", fontSize: "14px", margin: "0 0 16px 0" }}>I can check pricing on any Virgin Voyages sailing and add the same onboard credit perk.</p>
          <button onClick={() => setModalOpen(true)} style={{ backgroundColor: "#CC0000", color: "white", padding: "12px 24px", borderRadius: "8px", fontWeight: "700", fontSize: "14px", border: "none", cursor: "pointer" }}>Join the mailing list for more deals like this</button>
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
