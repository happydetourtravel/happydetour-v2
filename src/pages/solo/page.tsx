import { useState } from "react";
import { Link } from "react-router-dom";

type Sailing = {
  slug: string;
  photo: string;
  ship: string;
  title: string;
  date: string;
  nights: string;
  price: string;
  loot: number;
  sailed?: boolean;
  booked?: boolean;
  full?: boolean;
};

const sailings: Sailing[] = [
  
const sailings = [
  {
    slug: "scarlet-italy-french-riviera-0822",
    photo: "/SC-ItalyFrenchRiviera.jpg",
    ship: "Scarlet Lady",
    title: "Italy & French Riviera",
    date: "August 22, 2026",
    nights: "9 Nights",
    price: "$2,730",
    loot: 100,
    sailed: true,
  },
  {
    slug: "portsmouth-iceland-valiant-0827",
    photo: "/VL-PortsmouthIceland.jpg",
    ship: "Valiant Lady",
    title: "Northern Europe: Portsmouth to Iceland",
    date: "August 27, 2026",
    nights: "10 Nights",
    price: "$3,026",
    loot: 200,
    sailed: true,
  },
  {
    slug: "scarlet-mediterranean-rome-athens-0831",
    photo: "/SC-GreekIslesAdriatic.jpg",
    ship: "Scarlet Lady",
    title: "Mediterranean: Rome to Athens",
    date: "August 31, 2026",
    nights: "10 Nights",
    price: "$3,458",
    loot: 200,
    sailed: true,
  },
  {
    slug: "dominican-bimini-resilient-0831",
    photo: "/RS-DominicanBiminiAug31.jpg",
    ship: "Resilient Lady",
    title: "Dominican Republic & Bimini Beach Club",
    date: "August 31, 2026",
    nights: "5 Nights",
    price: "$1,788",
    loot: 50,
    sailed: true,
  },
  {
    slug: "alaska-seattle-vancouver-brilliant-0903",
    photo: "/BL-Alaska.png",
    ship: "Brilliant Lady",
    title: "Alaska: Seattle to Vancouver",
    date: "September 3, 2026",
    nights: "8 Nights",
    price: "$1,610",
    loot: 100,
  },
  {
    slug: "iceland-greenland-nyc-valiant-0906",
    photo: "/VL-IcelandGreenlandNYC.jpg",
    ship: "Valiant Lady",
    title: "Iceland, Greenland, Canada & NYC",
    date: "September 6, 2026",
    nights: "13 Nights",
    price: "$3,098",
    loot: 200,
  },
  {
    slug: "greek-isles-adriatic-scarlet-0910",
    photo: "/SC-GreekIslesAdriatic.jpg",
    ship: "Scarlet Lady",
    title: "Greek Isles & The Adriatic",
    date: "September 10, 2026",
    nights: "10 Nights",
    price: "$4,984",
    loot: 200,
  },
  {
    slug: "dominican-bimini-resilient-0914",
    photo: "/RS-DominicanBiminiAug31.jpg",
    ship: "Resilient Lady",
    title: "Dominican Republic & Bimini Beach Club",
    date: "September 14, 2026",
    nights: "5 Nights",
    price: "$1,097",
    loot: 50,
  },
  {
    slug: "mexican-riviera-brilliant-0919",
    photo: "/BR-MexicanRiviera.jpg",
    ship: "Brilliant Lady",
    title: "Mexican Riviera",
    date: "September 19, 2026",
    nights: "7 Nights",
    price: "$1,452",
    loot: 100,
  },
];

export default function SoloSailingsHub() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB", fontFamily: "sans-serif" }}>
      <div style={{ backgroundColor: "#1F2937", position: "relative", overflow: "hidden" }}>
        <div className="px-4 md:px-6 py-12 md:py-16" style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", gap: "8px", marginBottom: "16px" }}>
            <div style={{ backgroundColor: "#CC0000", color: "white", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", letterSpacing: "1px", textTransform: "uppercase" }}>Virgin Voyages</div>
            <div style={{ backgroundColor: "#F59E0B", color: "#1F2937", fontSize: "11px", fontWeight: "800", padding: "4px 10px", borderRadius: "4px", letterSpacing: "1px", textTransform: "uppercase" }}>Solo Sailor Offers</div>
          </div>
          <h1 className="text-[28px] md:text-[42px]" style={{ color: "white", fontWeight: "800", margin: "0 0 12px 0", lineHeight: "1.2" }}>Solo Travel. Big Vibes. Smaller Price.</h1>
          <p style={{ color: "#D1D5DB", fontSize: "16px", maxWidth: "640px", margin: "0 auto", lineHeight: "1.6" }}>
            These sailings are at just 150% single supplement, so cruising solo does not mean paying double. Nine dates across four ships, from a five-night Caribbean getaway to a one-time transatlantic crossing. And you do not have to be solo to book. Couples and groups are welcome on every one of these sailings too.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-6 py-10 md:py-16" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sailings.filter((s) => !s.sailed && !s.booked && !s.full).map((s) => (
            <Link
              key={s.slug}
              to={`/solo/${s.slug}`}
              style={{ textDecoration: "none", backgroundColor: "white", borderRadius: "12px", border: "1px solid #E5E7EB", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}
            >
              <div style={{ height: "160px", backgroundImage: `url('${s.photo}')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                <div style={{ position: "absolute", top: "10px", left: "10px", backgroundColor: "#CC0000", color: "white", fontSize: "10px", fontWeight: "800", padding: "3px 8px", borderRadius: "4px", letterSpacing: "0.5px", textTransform: "uppercase" }}>{s.ship}</div>
                {s.loot > 0 && (
                  <div style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "#007298", color: "white", fontSize: "10px", fontWeight: "800", padding: "3px 8px", borderRadius: "4px", letterSpacing: "0.5px" }}>
                    +${s.loot} Sailor Loot
                  </div>
                )}
              </div>
              <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ color: "#1F2937", fontWeight: "700", fontSize: "16px", margin: "0 0 6px 0", lineHeight: "1.3" }}>{s.title}</p>
                <p style={{ color: "#9CA3AF", fontSize: "13px", margin: "0 0 12px 0" }}>{s.date} · {s.nights}</p>
                <div style={{ marginTop: "auto", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ color: "#9CA3AF", fontSize: "11px" }}>From </span>
                    <span style={{ color: "#007298", fontWeight: "800", fontSize: "18px" }}>{s.price}</span>
                    <span style={{ color: "#9CA3AF", fontSize: "11px" }}> /sailor</span>
                  </div>
                  <span style={{ color: "#CC0000", fontWeight: "700", fontSize: "13px" }}>View →</span>
                </div>
                {s.loot > 0 && (
                  <p style={{ color: "#007298", fontSize: "11px", fontWeight: "600", margin: "8px 0 0 0" }}>
                    Includes ${s.loot} onboard credit when booked with Eric
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "48px", textAlign: "center", backgroundColor: "white", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "32px 20px" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#E5E7EB", margin: "0 auto 12px auto", backgroundImage: "url('/eric-headshot.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <p style={{ color: "#1F2937", fontWeight: "700", fontSize: "16px", margin: "0 0 6px 0" }}>Not sure which sailing is right for you?</p>
          <p style={{ color: "#4B5563", fontSize: "14px", margin: "0 0 16px 0" }}>I've sailed Virgin myself and I'll help you pick the right ship, itinerary, and cabin.</p>
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
