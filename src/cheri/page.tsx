import { useState, useRef } from "react";

// ── Confetti ──────────────────────────────────────────────────────────────────
function Confetti() {
  const pieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 7 + 5,
    color: ["#ff85a1","#ffd700","#e0457a","#f9a8c9","#ffffff","#b8860b","#ffc8dd"][Math.floor(Math.random() * 7)],
    duration: `${Math.random() * 5 + 4}s`,
    delay: `${Math.random() * 6}s`,
    round: Math.random() > 0.5,
    opacity: Math.random() * 0.45 + 0.3,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {pieces.map((p) => (
        <div key={p.id} style={{
          position: "absolute", left: p.left, top: -20,
          width: p.size, height: p.size,
          background: p.color, borderRadius: p.round ? "50%" : 2,
          opacity: p.opacity,
          animation: `cheri-fall ${p.duration} linear ${p.delay} infinite`,
        }} />
      ))}
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const TABS = [
  { id: "cover",     label: "Overview" },
  { id: "gem",       label: "Norwegian Gem" },
  { id: "odyssey",   label: "Odyssey of the Seas" },
  { id: "resilient", label: "Resilient Lady" },
  { id: "enchanted", label: "Enchanted Princess" },
];

const sailings = [
  {
    id: "gem",
    line: "Norwegian Cruise Line",
    lineColor: "#005f8c",
    bar: "linear-gradient(90deg,#003f6b,#007298)",
    ship: "Norwegian Gem",
    route: "Venice → Athens",
    departs: "May 30, 2027",
    nights: "8 nights",
    price: "$1,499",
    priceNote: "per person · starting fare (not group rate)",
    perk: "Cheri is Platinum — priority perks onboard",
    embarkPort: "Venice, Italy",
    debarkPort: "Athens, Greece",
    ports: [
      { day: 1, port: "Venice (Ravenna), Italy",     note: "Embark 4:00 PM" },
      { day: 2, port: "Dubrovnik, Croatia",           note: "10:00 AM – 11:59 PM" },
      { day: 3, port: "Kotor, Montenegro",            note: "7:00 AM – 5:00 PM · Tender port" },
      { day: 4, port: "Corfu, Greece",                note: "8:00 AM – 6:00 PM" },
      { day: 5, port: "Olympia (Katakolon), Greece", note: "7:00 AM – 5:00 PM" },
      { day: 6, port: "Mykonos, Greece",              note: "10:00 AM – 10:00 PM" },
      { day: 7, port: "Santorini, Greece",            note: "7:00 AM – 9:00 PM · Tender port" },
      { day: 8, port: "Athens (Piraeus), Greece",     note: "Debark 5:30 AM" },
    ],
    pros: [
      "Departs from magical Venice — one of the world's most iconic cities",
      "Best port lineup of all four — Dubrovnik, Kotor, Santorini, Mykonos",
      "NCL Freestyle dining — no set times, no dress code",
      "Cheri's Platinum status means priority boarding and onboard recognition",
    ],
    cons: [
      "2007 ship — older and smaller than the Escape or Viva she loved",
      "Fewer dining venues and entertainment options than newer NCL ships",
      "One way — ends in Athens, group arranges return travel",
    ],
    groupPerks: [
      { title: "Free at Sea", detail: "NCL's signature promotion typically includes options like free open bar, free specialty dining, free shore excursion credits, free Wi-Fi, and a third/fourth guest free. Exact offers depend on the sailing and booking window — we will confirm what is available once the group is locked in." },
      { title: "Tour Conductor (TC) Fare", detail: "For every 14–16 passengers (7–8 cabins) booked, one guest sails for free. This is one of the best group perks in the industry." },
      { title: "Group Discounts", detail: "Booking as a group typically unlocks additional savings off the standard fare. The exact discount is determined when we lock in the group block." },
      { title: "Onboard Credit (OBC)", detail: "Groups often receive onboard credit per stateroom — amount varies by sailing, cabin category, and group size. Confirmed at time of group booking." },
      { title: "Dedicated Group Concierge", detail: "NCL provides a specialized planner to help organize pre-cruise details, dining arrangements, private parties, and shore excursions." },
      { title: "Amenity Points", detail: "Select bonus perks from a menu including group cocktail party, specialty dining packages, Wi-Fi, photo packages, and prepaid service charges. Available once group is confirmed." },
    ],
    terms: [
      "Group pricing requires a minimum of 8 cabins (16 guests) to qualify.",
      "The price shown is the current standard starting fare — not the group rate. Group pricing is confirmed when the block is locked in.",
      "A deposit is required at time of booking to secure group rates.",
      "Tour Conductor berth is earned at 1 free berth per 14–16 paying passengers.",
      "Free at Sea promotions are subject to availability and may change — confirmed at time of group booking.",
      "Onboard credit is non-refundable and non-transferable.",
      "Name changes may be permitted up to a specified date — contact Eric for details.",
      "Final payment deadlines apply — failure to pay by deadline may result in cancellation.",
      "Travel protection (trip insurance) is strongly recommended for all travelers.",
      "All pricing in USD per person based on double occupancy and subject to change until deposit is made.",
    ],
  },
  {
    id: "odyssey",
    line: "Royal Caribbean",
    lineColor: "#2055b0",
    bar: "linear-gradient(90deg,#003087,#4d8fff)",
    ship: "Odyssey of the Seas",
    route: "Rome → Rome",
    departs: "May 30, 2027",
    nights: "7 nights",
    price: "$1,232",
    priceNote: "per person · starting fare (not group rate)",
    perk: "2021 ship · Eric's top pick for this group",
    embarkPort: "Rome (Civitavecchia), Italy",
    debarkPort: "Rome (Civitavecchia), Italy",
    ports: [
      { day: 1, port: "Rome (Civitavecchia), Italy", note: "Departs 3:00 PM" },
      { day: 2, port: "Day at Sea",                  note: "" },
      { day: 3, port: "Santorini, Greece",           note: "Tendered 9:00 AM – 11:00 PM" },
      { day: 4, port: "Ephesus (Kusadasi), Turkey",  note: "Docked 9:00 AM – 7:00 PM" },
      { day: 5, port: "Mykonos, Greece",             note: "Tendered 7:00 AM – 5:00 PM" },
      { day: 6, port: "Day at Sea",                  note: "" },
      { day: 7, port: "Naples / Capri, Italy",       note: "Docked 7:00 AM – 6:00 PM" },
      { day: 8, port: "Rome (Civitavecchia), Italy", note: "Arrives 5:00 AM" },
    ],
    pros: [
      "Brand new 2021 ship — you will feel the difference the moment you board",
      "North Star observation pod and RipCord by iFLY skydiving experience",
      "Incredible entertainment every night — shows, activities, great dining",
      "RC group program — amenity points, potential free berths, onboard credits",
      "Round trip from Rome — same city in and out, simpler for the group",
    ],
    cons: [
      "Fewer port stops than the Gem itinerary",
      "Drinks and specialty dining are extra",
    ],
    groupPerks: [
      { title: "Cruise Credit", detail: "Royal Caribbean offers a cruise credit for every 8 staterooms (minimum 16 guests). The credit applies toward one person's base fare or can be spread across fares in the group. Exact credit amount is confirmed when the group block is locked in." },
      { title: "Group Amenity Points", detail: "Earn points based on group size redeemable for onboard credit, cocktail parties, specialty dining, photo packages, and more. Options are confirmed at time of group booking." },
      { title: "Locked Group Rate", detail: "Once your group block is created, your rate is protected even if prices increase. This is why locking in early matters." },
      { title: "Dedicated Group Coordinator", detail: "A Royal Caribbean group specialist is assigned to your booking to help with cabin assignments, special requests, and onboard event planning." },
      { title: "Private Event Options", detail: "Groups can request private gatherings, custom dining experiences, and coordinated shore excursions through the group desk." },
    ],
    terms: [
      "Group pricing requires a minimum of 8 staterooms (16 guests) to qualify.",
      "The price shown is the current standard starting fare — not the group rate. Group pricing is confirmed when the block is locked in.",
      "A group deposit is required at time of booking to secure the group block and rate.",
      "Cruise credit is allocated in the same stateroom category as the majority of cabins booked.",
      "Amenity point redemption options vary by sailing and group size — confirmed at booking.",
      "Locked group rates apply from time of deposit through final payment.",
      "Final payment deadlines apply — cabins not paid by deadline may be released.",
      "Name changes are permitted up to a certain date — contact Eric for current policy.",
      "Travel protection (trip insurance) is strongly recommended for all travelers.",
      "All pricing in USD per person based on double occupancy and subject to change until deposit is made.",
    ],
  },
  {
    id: "resilient",
    line: "Virgin Voyages",
    lineColor: "#c2003a",
    bar: "linear-gradient(90deg,#7b0015,#ff4d79)",
    ship: "Resilient Lady",
    route: "Barcelona → Barcelona",
    departs: "May 30, 2027",
    nights: "7 nights",
    price: "From $1,674",
    priceNote: "per Sailor · Balcony · starting fare (not group rate)",
    perk: "Adults only · All restaurants included · Balcony cabins for groups",
    embarkPort: "Barcelona, Spain",
    debarkPort: "Barcelona, Spain",
    ports: [
      { day: 1, port: "Barcelona, Spain",          note: "Departs 5:00 PM" },
      { day: 2, port: "Cannes, France",            note: "10:00 AM – 9:00 PM · Tender to shore" },
      { day: 3, port: "Provence (Toulon), France", note: "8:00 AM – 6:00 PM" },
      { day: 4, port: "Day at Sea",                note: "Sailing" },
      { day: 5, port: "Valencia, Spain",           note: "8:00 AM – 5:00 PM" },
      { day: 6, port: "Ibiza, Spain",              note: "Arrives 7:00 PM" },
      { day: 7, port: "Ibiza, Spain",              note: "Departs 5:00 PM · Overnight stay" },
      { day: 8, port: "Barcelona, Spain",          note: "Arrives 6:30 AM" },
    ],
    pros: [
      "All restaurants included — zero surprise dining bills from day one",
      "Stunning modern ship design with serious wow factor",
      "Overnight in Ibiza — the party capital of Europe",
      "French Riviera stops — Cannes and Provence are breathtaking",
      "Round trip from Barcelona — same city in and out",
    ],
    cons: [
      "Adults only — no children or grandchildren allowed onboard",
      "Group bookings require balcony cabins minimum — higher starting price",
      "Alcohol is not included — Bar Tab system only",
      "Barcelona departure may mean extra travel for the group",
    ],
    groupPerks: [
      { title: "Group Bar Tab Credit", detail: "7-night voyages receive $100 per cabin in Sailor Loot / Bar Tab credit to spend on drinks, shore excursions, or spa treatments. Confirmed at time of group booking." },
      { title: "Group Dining Concierge", detail: "Seamless pre-arranged group dining at any of the 20+ onboard restaurants with priority seating for your crew." },
      { title: "No-Deposit Holds & Locked Pricing", detail: "Group inventory can be held with zero deposit and your fare is locked from the moment the group is created — no risk if prices go up." },
      { title: "Complimentary Berth", detail: "Group organizers may receive a free cabin based on group size (incentive group terms apply). Confirmed when group block is locked in." },
      { title: "Balcony Cabin Minimum", detail: "Virgin Voyages group bookings require balcony cabins as the entry-level category — everyone gets a private outdoor space and ocean view." },
    ],
    terms: [
      "Virgin Voyages is adults-only — all Sailors must be 18 years or older.",
      "Group bookings require a minimum of 8 cabins at balcony category or above.",
      "The price shown is the current starting balcony fare — not the group rate. Group pricing is confirmed when the block is locked in.",
      "No-deposit group holds are available for a limited time — hold periods vary.",
      "Pricing is locked at time of group creation and protected from future rate increases.",
      "Bar Tab credit is per cabin, non-refundable, and must be used during the voyage.",
      "All restaurants are included — no additional fees for standard dining venues.",
      "Alcohol is not included — Sailors purchase drinks via Bar Tab or out of pocket.",
      "Name changes may be permitted up to a specified date — contact Eric for current terms.",
      "Travel protection (trip insurance) is strongly recommended for all travelers.",
      "All pricing in USD per person and subject to change until group block is confirmed.",
    ],
  },
  {
    id: "enchanted",
    line: "Princess Cruises",
    lineColor: "#6a35a0",
    bar: "linear-gradient(90deg,#5b2d8b,#9b59b6)",
    ship: "Enchanted Princess",
    route: "Athens → Rome",
    departs: "June 1, 2027",
    nights: "11 nights",
    price: "$1,254",
    priceNote: "per person · starting fare (not group rate)",
    perk: "Best value per night · Most destinations of the four",
    embarkPort: "Athens (Piraeus), Greece",
    debarkPort: "Rome (Civitavecchia), Italy",
    ports: [
      { day: 1,  port: "Athens (Piraeus), Greece",        note: "Embark" },
      { day: 2,  port: "Crete (Heraklion), Greece",       note: "" },
      { day: 3,  port: "Kusadasi, Turkey (for Ephesus)",  note: "" },
      { day: 4,  port: "Rhodes, Greece",                  note: "" },
      { day: 5,  port: "Mykonos, Greece",                 note: "" },
      { day: 6,  port: "Crete (Chania), Greece",          note: "" },
      { day: 7,  port: "Valletta, Malta",                 note: "" },
      { day: 8,  port: "Sicily (Palermo), Italy",         note: "" },
      { day: 9,  port: "Sicily (Messina), Italy",         note: "" },
      { day: 10, port: "Naples, Italy (Capri & Pompeii)", note: "" },
      { day: 11, port: "Day at Sea",                      note: "" },
      { day: 12, port: "Rome (Civitavecchia), Italy",     note: "Debark" },
    ],
    pros: [
      "9 ports — the most destinations of any sailing on this list",
      "Best price per night of all four options at $1,254 per person",
      "11 nights means real time to celebrate and truly unwind",
      "Ends in Rome — easy international flights home for the whole group",
      "Rhodes, Malta, Ephesus, Mykonos — serious bucket list ports",
    ],
    cons: [
      "Princess skews toward a quieter, older crowd — not a high-energy ship",
      "11 nights requires more time off work for guests",
      "Starts in Athens and ends in Rome — two different cities, group plans both ends",
    ],
    groupPerks: [
      { title: "Group Rates & Low Deposits", detail: "Secure a block of cabins with low bulk deposits — often as low as $25 per bed — without immediate penalty while you build your group. Exact group rate is confirmed when the block is locked in." },
      { title: "Amenity Points", detail: "Earn points based on group size and cabin volume, redeemable for onboard credits, complimentary wine, photo packages, or specialty dinners. Options confirmed at booking." },
      { title: "Tour Conductor (TC) Credits", detail: "For every 15–16 lower berths booked, one passenger's cruise fare (excluding taxes and fees) is usually covered. Great perk for the group organizer." },
      { title: "Name Change Flexibility", detail: "Groups typically enjoy flexible name changes up to 21 days before sailing, making it easier to manage last-minute adjustments." },
      { title: "Private Events", detail: "Request custom activities like private cocktail parties, group excursions, or coordinated dining times in the main dining room." },
      { title: "Princess Celebration Group Program", detail: "Groups of 5 or more cabins get access to the Princess Celebration Group Program for custom event planning — perfect for a 60th birthday." },
    ],
    terms: [
      "Group pricing requires a minimum of 5 cabins to qualify for the Princess group program.",
      "The price shown is the current standard starting fare — not the group rate. Group pricing is confirmed when the block is locked in.",
      "Low group deposits (often $25 per bed) hold your block without immediate full payment.",
      "Amenity points are awarded based on group size and cabin category — redemption options vary.",
      "Tour Conductor credit covers base fare only — taxes, fees, and gratuities are not included.",
      "Name changes are permitted up to 21 days before sailing — restrictions may apply.",
      "Final payment deadlines apply — cabins released after deadline cannot be guaranteed.",
      "Travel protection (trip insurance) is strongly recommended for all travelers.",
      "All pricing in USD per person based on double occupancy and subject to change until deposit is made.",
    ],
  },
];

// ── Small reusable components ─────────────────────────────────────────────────
const Eyebrow = ({ children, color = "#c2587a" }: { children: React.ReactNode; color?: string }) => (
  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color, marginBottom: 10 }}>{children}</p>
);

const BulletItem = ({ text }: { text: string }) => (
  <li style={{ fontSize: 13, lineHeight: 1.65, color: "#3d1a2e", paddingLeft: 16, position: "relative", paddingTop: 3, paddingBottom: 3 }}>
    <span style={{ position: "absolute", left: 4, color: "#e0457a", fontWeight: 700 }}>·</span>{text}
  </li>
);

// ── Air & Hotel banner ────────────────────────────────────────────────────────
function AirHotelBanner({ embark, debark }: { embark: string; debark: string }) {
  const isRoundTrip = embark === debark;
  return (
    <div style={{ background: "linear-gradient(135deg,#f0f8ff,#e8f4ff)", border: "1px solid rgba(32,85,176,0.18)", borderRadius: 12, padding: "14px 18px", marginBottom: 16 }}>
      <Eyebrow color="#2055b0">✈ International travel — I can help</Eyebrow>
      <p style={{ fontSize: 13, lineHeight: 1.7, color: "#1a2d5a" }}>
        {isRoundTrip
          ? `This cruise embarks and debarks in ${embark}. Everyone will need to arrange international flights into and out of this city. I can help coordinate airfare and pre or post-cruise hotel stays in ${embark} so the group arrives rested and ready.`
          : `This cruise embarks in ${embark} and debarks in ${debark} — two different international cities. Everyone will need flights into ${embark} and out of ${debark}. I can help coordinate airfare and hotel stays on both ends so the group has a seamless experience from start to finish.`
        }
      </p>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <div style={{
      position: "relative", textAlign: "center", overflow: "hidden",
      background: "linear-gradient(160deg,#ffe4ee 0%,#ffc8dd 40%,#ffb3ce 70%,#ffa0c0 100%)",
      padding: "52px 24px 56px",
    }}>
      <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", background: "rgba(255,182,193,0.35)", top: -80, right: -60, filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", background: "rgba(255,105,150,0.15)", bottom: -40, left: -40, filter: "blur(55px)", pointerEvents: "none" }} />
      <Confetti />
      <p style={{ position: "relative", fontSize: 11, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#c2587a", marginBottom: 18 }}>
        Cheri&apos;s Birthday Cruise
        <span style={{ display: "inline-block", width: 6, height: 6, margin: "0 8px", transform: "rotate(45deg)", verticalAlign: "middle", background: "#e07090" }} />
        Group Cruise 2027
      </p>
      <div style={{ position: "relative", display: "inline-block", borderRadius: 100, padding: "8px 28px", marginBottom: 22, background: "linear-gradient(135deg,#ff85a1,#ff4d79,#ff85a1)", boxShadow: "0 0 22px rgba(255,77,121,0.45)" }}>
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", color: "#fff" }}>✦ The Big 60 ✦</span>
      </div>
      <h1 style={{ position: "relative", fontFamily: "'Playfair Display',serif", fontSize: "clamp(34px,6vw,48px)", fontWeight: 900, lineHeight: 1.1, color: "#2d0a1e", marginBottom: 14 }}>
        Set Sail with <span style={{ color: "#e0457a", fontStyle: "italic" }}>Cheri</span><br />and the Crew
      </h1>
      <div style={{ position: "relative" }}>
        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(22px,4.5vw,30px)", fontWeight: 900, fontStyle: "italic", color: "#2d0a1e" }}>Sixty Years of Grace,</p>
        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(20px,4vw,28px)", fontWeight: 900, fontStyle: "italic", color: "#b8860b" }}>Cheri Lights Up the Place! ✨</p>
      </div>
    </div>
  );
}

// ── Tab Bar ───────────────────────────────────────────────────────────────────
function TabBar({ active, onChange }: { active: string; onChange: (id: string) => void }) {
  return (
    <div style={{ background: "#2d0a1e", position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid rgba(255,133,161,0.12)" }}>
      <div style={{ display: "flex", justifyContent: "center", overflowX: "auto", scrollbarWidth: "none" }}>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => onChange(t.id)} style={{
            flexShrink: 0, padding: "13px 16px", fontSize: 13, fontWeight: 600,
            color: active === t.id ? "#ff85a1" : "rgba(255,200,220,0.4)",
            background: "transparent", whiteSpace: "nowrap", cursor: "pointer",
            border: "none", borderBottom: `2px solid ${active === t.id ? "#ff85a1" : "transparent"}`,
            transition: "color 0.15s",
          }}>{t.label}</button>
        ))}
      </div>
    </div>
  );
}

// ── Cover ─────────────────────────────────────────────────────────────────────
function CoverContent() {
  return (
    <div style={{ background: "#fff" }}>
      <div style={{ overflow: "hidden", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" height={40} width="100%">
          <path d="M0,20 C360,40 720,0 1080,24 C1260,34 1380,12 1440,20 L1440,0 L0,0 Z" fill="#ffb3ce" opacity="0.4" />
          <path d="M0,30 C480,8 960,40 1440,18 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "32px 24px 48px" }}>

        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 900, color: "#e0457a", marginBottom: 14 }}>Cheri,</p>
        <p style={{ fontSize: 14, lineHeight: 1.75, color: "#3d1a2e", marginBottom: 8 }}>
          I have been looking at cruises all across Europe and these are the four I came up with just for you and your crew:
        </p>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: "#7b3a55", marginBottom: 20 }}>
          All four of these are international sailings so everyone in the group is going to need flights to get there. Once you pick the one you love and we lock it in, I can help everybody sort out their airfare and any hotel stays before or after the cruise. We will make sure nobody is figuring that out on their own.
        </p>

        {/* Cruise list */}
        <div style={{ background: "#fff8fb", border: "1px solid rgba(194,88,122,0.15)", borderRadius: 12, padding: "18px 20px", marginBottom: 20 }}>
          <Eyebrow>The 4 Cruises</Eyebrow>
          {[
            { n: 1, name: "Norwegian Gem",                       detail: "Venice to Athens, 8 nights, May 30" },
            { n: 2, name: "Royal Caribbean Odyssey of the Seas", detail: "Rome to Rome, 7 nights, May 30" },
            { n: 3, name: "Virgin Voyages Resilient Lady",        detail: "Barcelona to Barcelona, 7 nights, May 30" },
            { n: 4, name: "Princess Enchanted Princess",          detail: "Athens to Rome, 11 nights, June 1" },
          ].map((c) => (
            <div key={c.n} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "9px 0", borderBottom: c.n < 4 ? "1px solid rgba(194,88,122,0.08)" : "none" }}>
              <div style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#ff85a1,#e0457a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700 }}>{c.n}</div>
              <p style={{ fontSize: 13, color: "#3d1a2e", lineHeight: 1.5 }}><strong>{c.name}</strong> — {c.detail}</p>
            </div>
          ))}
        </div>

        {/* Price note */}
        <div style={{ background: "#fffdf0", border: "1px solid rgba(184,134,11,0.2)", borderRadius: 10, padding: "13px 16px", marginBottom: 20 }}>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: "#5a3d1a" }}>
            <strong style={{ color: "#b8860b" }}>About the pricing shown:</strong> The prices on each tab are the standard starting fares, not the group rate. Every cruise line has group discounts but the exact number is not confirmed until we lock in the sailing and create the group block. Right now we are just focused on finding the right trip. Once you pick one I will get the real group pricing confirmed for you.
          </p>
        </div>

        {/* Gem note */}
        <div style={{ background: "#fff3f6", borderLeft: "4px solid #e0457a", borderRadius: "0 10px 10px 0", padding: "16px 18px", marginBottom: 24 }}>
          <Eyebrow>A note on the Norwegian Gem</Eyebrow>
          <p style={{ fontSize: 13, lineHeight: 1.75, color: "#3d1a2e" }}>
            I know you love the NCL Escape and the Viva and I completely understand why. But I want to be straight with you. The Gem is a 2007 ship. It has far fewer dining venues, no racetrack, no go-karts, none of the big entertainment you are used to on those ships. If you loved the Escape and the Viva, the Gem is going to feel flat. Especially for a trip this special where everyone's expectations are going to be sky high.
          </p>
        </div>

        {/* Eric's take */}
        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: "#2d0a1e", marginBottom: 16 }}>Here is what I really think:</p>

        {[
          {
            id: "odyssey", line: "Royal Caribbean", lineColor: "#2055b0", ship: "Odyssey of the Seas",
            verdict: "Strongest Pick", vBg: "#e8f5e9", vColor: "#2e7d32",
            points: [
              "This is a 2021 ship and you are going to feel that the second you walk onboard. It is nothing like the Gem.",
              "North Star, RipCord by iFLY, great entertainment every night. This ship keeps you busy.",
              "Royal Caribbean has a solid group program with amenity points, potential free berths, and onboard credits.",
              "It starts at $1,232 per person before the group discount comes off.",
            ],
          },
          {
            id: "resilient", line: "Virgin Voyages", lineColor: "#c2003a", ship: "Resilient Lady",
            verdict: "Very Strong Second", vBg: "#fff3e0", vColor: "#e65100",
            points: [
              "Stunning ship and the wow factor is real. All restaurants are included from day one, no surprises.",
              "The one thing to check is the adults only policy. If anyone is bringing kids this one comes off the table.",
              "Group bookings start at $1,674 per Sailor for a balcony. The group rate gets confirmed when we lock it in.",
            ],
          },
          {
            id: "enchanted", line: "Princess Cruises", lineColor: "#6a35a0", ship: "Enchanted Princess",
            verdict: "Best Value", vBg: "#f3e8ff", vColor: "#6a35a0",
            points: [
              "Newer ship and perfectly fine but Princess skews older and quieter. Not really the energy you are looking for.",
              "The itinerary is actually incredible with 9 ports and 11 nights but the ship itself is not a party ship.",
              "Probably not the right fit for a 60th birthday celebration but it is the best value per night of the four.",
            ],
          },
        ].map((o) => (
          <div key={o.id} style={{ background: "#fff8fb", border: "1px solid rgba(194,88,122,0.12)", borderRadius: 12, padding: "16px 18px", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: o.lineColor, marginBottom: 2 }}>{o.line}</p>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#2d0a1e" }}>{o.ship}</p>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", padding: "4px 12px", borderRadius: 100, background: o.vBg, color: o.vColor, flexShrink: 0 }}>{o.verdict}</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {o.points.map((pt, i) => <BulletItem key={i} text={pt} />)}
            </ul>
          </div>
        ))}

        <div style={{ marginTop: 28, padding: "18px 20px", borderRadius: 12, background: "linear-gradient(135deg,#fff0f5,#fde8f0)", border: "1px solid rgba(194,88,122,0.18)", textAlign: "center" }}>
          <p style={{ fontSize: 14, color: "#7b3a55", marginBottom: 4 }}>Use the tabs above to explore each cruise in full detail.</p>
          <p style={{ fontSize: 13, color: "#c2587a", fontWeight: 600 }}>Each tab includes the full itinerary, group perks, and terms.</p>
        </div>

      </div>
    </div>
  );
}

// ── Sailing Detail ────────────────────────────────────────────────────────────
function SailingDetail({ s }: { s: typeof sailings[0] }) {
  return (
    <div style={{ background: "#fff", maxWidth: 680, margin: "0 auto", padding: "0 24px 48px" }}>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#fff0f5,#fde8f0)", borderRadius: "0 0 16px 16px", padding: "28px 24px 24px", marginBottom: 20 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: s.lineColor, marginBottom: 5 }}>{s.line}</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(22px,5vw,30px)", fontWeight: 900, color: "#2d0a1e", marginBottom: 5 }}>{s.ship}</h2>
        <p style={{ fontSize: 13, color: "#9b7080", marginBottom: 14 }}>{s.route} · {s.nights} · Departs {s.departs}</p>
        <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,6vw,32px)", fontWeight: 900, color: "#b8860b" }}>{s.price}</span>
        <span style={{ fontSize: 12, color: "#b89aa0", marginLeft: 8 }}>{s.priceNote}</span>
        <p style={{ fontSize: 12, color: "#c2587a", marginTop: 6 }}>{s.perk}</p>
      </div>

      {/* Air & Hotel banner */}
      <AirHotelBanner embark={s.embarkPort} debark={s.debarkPort} />

      {/* Itinerary */}
      <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(194,88,122,0.15)", marginBottom: 16 }}>
        <div style={{ background: "#fff0f5", padding: "12px 18px" }}>
          <Eyebrow>Day by day itinerary</Eyebrow>
        </div>
        {s.ports.map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "11px 18px", background: "#fff", borderTop: i > 0 ? "1px solid rgba(194,88,122,0.07)" : "none" }}>
            <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#ff85a1,#e0457a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700 }}>{p.day}</div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#2d0a1e" }}>{p.port}</p>
              {p.note && <p style={{ fontSize: 12, color: "#9b7080", marginTop: 2 }}>{p.note}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Why this sailing */}
      <div style={{ borderRadius: 12, padding: "16px 18px", background: "#f0faf4", border: "1px solid rgba(46,125,50,0.15)", marginBottom: 16 }}>
        <Eyebrow color="#2e7d32">Why this sailing</Eyebrow>
        {s.pros.map((h, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
            <span style={{ color: "#2e7d32", fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✓</span>
            <p style={{ fontSize: 13, lineHeight: 1.65, color: "#1a3d1e" }}>{h}</p>
          </div>
        ))}
      </div>

      {/* Heads up */}
      <div style={{ borderRadius: 12, padding: "16px 18px", background: "#fff3f6", border: "1px solid rgba(224,69,122,0.15)", marginBottom: 16 }}>
        <Eyebrow>Heads up</Eyebrow>
        {s.cons.map((h, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
            <span style={{ color: "#e0457a", fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 1 }}>!</span>
            <p style={{ fontSize: 13, lineHeight: 1.65, color: "#3d1a2e" }}>{h}</p>
          </div>
        ))}
      </div>

      {/* Group Perks */}
      <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(184,134,11,0.2)", marginBottom: 16 }}>
        <div style={{ background: "linear-gradient(135deg,#fef9ec,#fdf3d0)", padding: "12px 18px" }}>
          <Eyebrow color="#b8860b">Group perks & benefits</Eyebrow>
          <p style={{ fontSize: 12, color: "#7a5a1a", lineHeight: 1.6 }}>
            These are the group perks available for this cruise line. The exact benefits for your group are confirmed once we lock in the sailing and create the group block — that is when we find out your specific discount and perks package.
          </p>
        </div>
        {s.groupPerks.map((gp, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 18px", background: "#fffdf5", borderTop: i > 0 ? "1px solid rgba(184,134,11,0.08)" : "none" }}>
            <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg,#ffd700,#b8860b)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>★</div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#2d0a1e", marginBottom: 3 }}>{gp.title}</p>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: "#5a3d1a" }}>{gp.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Terms */}
      <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(194,88,122,0.12)", marginBottom: 16 }}>
        <div style={{ background: "#fdf5f8", padding: "12px 18px" }}>
          <Eyebrow>Terms & conditions</Eyebrow>
        </div>
        <div style={{ background: "#fff", padding: "16px 18px" }}>
          {s.terms.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 11, color: "#c2587a", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{i + 1}.</span>
              <p style={{ fontSize: 12, lineHeight: 1.7, color: "#5a3040" }}>{t}</p>
            </div>
          ))}
          <p style={{ fontSize: 11, color: "#b89aa0", marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(194,88,122,0.08)" }}>
            Terms are subject to change. Contact Eric for the most current policies before booking. All prices in USD per person based on double occupancy unless otherwise noted.
          </p>
        </div>
      </div>

    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CheriPage() {
  const [tab, setTab] = useState("cover");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (id: string) => {
    setTab(id);
    setTimeout(() => contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const activeSailing = sailings.find((s) => s.id === tab);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; font-family: 'Plus Jakarta Sans', sans-serif; }
        button { cursor: pointer; border: none; background: none; }
        ::-webkit-scrollbar { display: none; }
        @keyframes cheri-fall {
          0%   { transform: translateY(-20px) rotate(0deg);   opacity: 0.85; }
          100% { transform: translateY(750px)  rotate(720deg); opacity: 0; }
        }
      `}</style>
      <div style={{ minHeight: "100vh", background: "#fff" }}>
        <Hero />
        <TabBar active={tab} onChange={handleTabChange} />
        <div ref={contentRef}>
          {tab === "cover" ? <CoverContent /> : activeSailing ? <SailingDetail s={activeSailing} /> : null}
        </div>

        {/* Footer */}
        <div style={{ background: "#2d0a1e", padding: "28px 24px 20px", marginTop: 40 }}>
          <p style={{ textAlign: "center", fontSize: 13, color: "#f9a8c9", marginBottom: 10, lineHeight: 1.7 }}>
            Real trips. Real value. Someone actually in your corner.
            <span style={{ color: "#ff85a1", margin: "0 8px" }}>·</span>
            Northeast, OH
            <span style={{ color: "#ff85a1", margin: "0 8px" }}>·</span>
            747-333-8687
            <span style={{ color: "#ff85a1", margin: "0 8px" }}>·</span>
            eric@happydetour.com
          </p>
          <p style={{ textAlign: "center", fontSize: 11, color: "rgba(255,182,193,0.4)", lineHeight: 1.7 }}>
            © 2026 Happy Detour Travel LLC
            <span style={{ margin: "0 6px" }}>·</span>
            Eric
            <span style={{ margin: "0 6px" }}>·</span>
            Affiliated with WorldVia Travel Network
            <span style={{ margin: "0 6px" }}>·</span>
            <a href="/terms" style={{ color: "rgba(255,182,193,0.55)", textDecoration: "none" }}>Terms &amp; Conditions</a>
            <span style={{ margin: "0 6px" }}>·</span>
            <a href="/faq" style={{ color: "rgba(255,182,193,0.55)", textDecoration: "none" }}>FAQ</a>
            <span style={{ margin: "0 6px" }}>·</span>
            Last updated: June 2026
          </p>
        </div>

      </div>
    </>
  );
}
