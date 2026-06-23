import { useState } from "react";

const MSC_NAVY = "#00235F";
const MSC_GOLD = "#C9A84C";
const MSC_LIGHT = "#F0F4FA";
const MSC_DARK = "#001040";
const MSC_ACCENT = "#E8F0FF";

const FORM_LINK = "https://forgehq.app/f/?t=7ro7s57c";

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-blue-100 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-4 text-left font-semibold text-gray-800 hover:bg-blue-50 transition-colors gap-4"
        style={{ background: open ? MSC_ACCENT : "white" }}
      >
        <span className="text-sm md:text-base leading-snug">{title}</span>
        <span
          className="text-2xl transition-transform duration-200 flex-shrink-0"
          style={{ color: MSC_NAVY, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-4 py-4 bg-white border-t border-blue-100 text-gray-700 leading-relaxed text-sm md:text-base">
          {children}
        </div>
      )}
    </div>
  );
}

const TABS = [
  { id: "about", label: "About MSC" },
  { id: "ships", label: "The Ships" },
  { id: "dining", label: "Dining" },
  { id: "rewards", label: "Voyagers Club" },
  { id: "solo", label: "Solo Travel" },
  { id: "yacht", label: "MSC Yacht Club" },
  { id: "included", label: "What's Included" },
  { id: "excursions", label: "Shore Excursions" },
  { id: "insurance", label: "Trip Insurance" },
  { id: "tips", label: "Eric's Tips" },
];

export default function MSCPage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen" style={{ background: MSC_LIGHT, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Hero */}
      <div
        className="relative py-12 md:py-24 px-4 text-center text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${MSC_DARK} 0%, ${MSC_NAVY} 100%)` }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 25%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-5xl font-bold mb-3 leading-tight">MSC Cruises</h1>
          <p className="text-base md:text-xl mb-4 leading-relaxed" style={{ color: "#CBD5E1" }}>
            European elegance at a real price. MSC is one of the most underrated cruise lines out there and one of the lines Eric knows from personal experience. Beautiful ships, a Mediterranean style that feels genuinely different, and value that is hard to beat.
          </p>
          <p className="text-xs md:text-base" style={{ color: "#94A3B8" }}>
            Everything you need to know about sailing MSC, put together by Eric, your HDT travel advisor who has sailed MSC four times.
          </p>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 shadow-md overflow-x-auto" style={{ background: MSC_DARK }}>
        <div className="flex justify-start min-w-max px-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-3 md:px-5 py-3 text-xs font-semibold whitespace-nowrap transition-all border-b-2"
              style={{
                color: activeTab === tab.id ? MSC_GOLD : "#94A3B8",
                borderBottomColor: activeTab === tab.id ? MSC_GOLD : "transparent",
                background: "transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto px-3 md:px-6 py-6 md:py-12">

        {/* ABOUT MSC */}
        {activeTab === "about" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>About MSC Cruises</h2>
            <p className="text-gray-500 text-sm mb-6">MSC is one of the largest cruise lines in the world and one of the most underrated. If you have not heard as much about them as Royal Caribbean or Carnival, that is not because they are lesser. It is because they built their reputation in Europe first and they are still earning their recognition here in North America. Eric has sailed MSC four times and can tell you firsthand they are worth your attention.</p>

            <Accordion title="Who Is MSC?">
              <p className="mb-3">MSC Cruises is a Swiss-based cruise line and the largest privately owned cruise company in the world. They started as a Mediterranean shipping company and have been building cruise ships since the 1980s. Their home is the Mediterranean and it shows in the design, the food, the entertainment, and the overall feel of the ships.</p>
              <p className="mb-3">When you board an MSC ship you notice it feels different from an American cruise line. The architecture is more European, the dining program leans into Italian and Mediterranean cuisine, and the whole experience has a sophistication that does not feel forced. It is just how they do things.</p>
              <p className="text-sm" style={{ color: "#6B7280" }}>
                MSC operates one of the largest and fastest-growing cruise fleets in the world, with ships sailing everywhere from the Caribbean to the Mediterranean, Alaska, and beyond.{" "}
                
                 <a href="https://www.msccruises.com/en-us/discover-msc/our-ships"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: MSC_NAVY, textDecoration: "underline" }}
                >
                  Learn more about the MSC fleet at msccruises.com
                </a>.
              </p>
            </Accordion>

            <Accordion title="Why MSC Is Underrated in America">
              <p className="mb-3">Most American cruisers default to Royal Caribbean, Carnival, or Norwegian because those are the names they grew up hearing. MSC built their brand overseas first, which means a lot of American travelers have simply never had someone point them in that direction.</p>
              <p className="mb-3">That works in your favor. MSC tends to offer strong value on Caribbean itineraries because they are still competing for the American market. You get a beautiful, well-run ship at a price point that often beats the more established American lines for a comparable experience.</p>
              <p>Eric has sailed MSC four times including the Meraviglia out of New York to the Bahamas and the Armonia on a Caribbean itinerary through Belize, Costa Maya, Roatan, and Cozumel. The value and the experience both delivered.</p>
            </Accordion>

            <Accordion title="What Makes MSC Different">
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>European style and design</strong> — The ships feel more like a high-end European hotel than a floating theme park</li>
                <li><strong>Italian and Mediterranean food culture</strong> — Pasta, pizza, fresh bread, and Mediterranean flavors are taken seriously onboard</li>
                <li><strong>MSC Yacht Club</strong> — Their ship-within-a-ship luxury experience is one of the best at sea</li>
                <li><strong>Ocean Cay MSC Marine Reserve</strong> — Their private island in the Bahamas is one of the most beautiful private island experiences in cruising</li>
                <li><strong>International atmosphere</strong> — MSC attracts guests from all over the world, adding a genuinely global feel</li>
              </ul>
            </Accordion>

            <Accordion title="Eric's Take on MSC">
              <p className="mb-3">I have been on the MSC Meraviglia three times and the MSC Armonia once. Two of my Meraviglia sailings were out of New York City to the Bahamas including Ocean Cay and Nassau, and one sailed to Florida and the Bahamas. The Armonia took me through Belize, Costa Maya, Roatan, and Cozumel, which is one of the best Caribbean itineraries you can do.</p>
              <p className="mb-3">What I can tell you from those four sailings is that MSC consistently delivers a quality experience at a price point that makes sense. The Meraviglia is a stunning ship. The food is genuinely good. The entertainment is strong. And Ocean Cay is one of the best port days I have had on any cruise line.</p>
              <p>MSC is not a perfect fit for everyone but for the right traveler it is an outstanding choice. Tell me what you are looking for and I can tell you whether MSC makes sense for your trip.</p>
            </Accordion>
          </section>
        )}

        {/* THE SHIPS */}
        {activeTab === "ships" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>The MSC Fleet</h2>
            <p className="text-gray-500 text-sm mb-6">MSC has one of the largest and fastest growing fleets in the world with ships sailing everywhere from the Caribbean to the Mediterranean, Alaska, South America, and beyond.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: MSC_ACCENT, borderLeft: `4px solid ${MSC_NAVY}` }}>
              <strong>Eric's Note:</strong> I have personally sailed on the MSC Meraviglia three times and the MSC Armonia once. If you want to know what either of those ships actually feels like day to day, ask me directly.
            </div>

            <h3 className="text-base font-bold mb-3 mt-6" style={{ color: MSC_NAVY }}>World Class — Coming Soon and Newest</h3>

            {[
              {
                name: "MSC World Atlantic",
                status: "Debuting 2027",
                homeport: "Orlando (Port Canaveral)",
                destinations: "Caribbean and Bahamas",
                notes: "The newest World Class ship debuting in 2027 and homeporting in Orlando. MSC World Atlantic brings the same next-generation design as World America with the full World Class feature set to the East Coast.",
                highlights: ["Debuting 2027", "Orlando homeport", "MSC Yacht Club", "World Class next-gen design", "Caribbean and Bahamas itineraries"]
              },
              {
                name: "MSC World Asia",
                status: "Debuting 2026",
                homeport: "Mediterranean",
                destinations: "Mediterranean",
                notes: "Debuting in 2026 and sailing the Mediterranean. MSC World Asia is the third World Class ship and brings the brand's most advanced technology and features to European waters.",
                highlights: ["Debuting 2026", "Mediterranean itineraries", "MSC Yacht Club", "World Class design", "Latest MSC technology"]
              },
              {
                name: "MSC World America",
                status: "Now Sailing",
                homeport: "Miami",
                destinations: "Caribbean and Bahamas",
                notes: "MSC's newest ship and their first World Class vessel sailing from Miami. World America is designed for immersive Caribbean experiences and brings the most innovative features MSC has ever put on a ship to the North American market.",
                highlights: ["MSC's newest ship in Miami", "World Class innovative design", "MSC Yacht Club", "Caribbean and Bahamas itineraries", "Most advanced features in the fleet"]
              },
              {
                name: "MSC World Europa",
                status: "Now Sailing",
                homeport: "Dubai and Mediterranean",
                destinations: "Southern Caribbean, Dubai, Middle East, Mediterranean",
                notes: "One of the largest cruise ships ever built and MSC's most ambitious vessel to date. World Europa features a Formula 1 simulator, a VR zone, and some of the most spectacular public spaces at sea.",
                highlights: ["Formula 1 simulator onboard", "Virtual reality zone", "MSC Yacht Club", "One of the largest ships at sea", "Dubai and Mediterranean homeports"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — ${ship.status} · ${ship.homeport}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="mb-3">{ship.notes}</p>
                      <p className="text-xs text-gray-500">Destinations: {ship.destinations}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: MSC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: MSC_NAVY }}>Seashore Class</h3>

            {[
              {
                name: "MSC Seascape",
                homeport: "Galveston, TX",
                destinations: "Caribbean and Bahamas",
                notes: "Based in Galveston and a great option for Gulf Coast travelers who want to cruise without flying. Seascape was designed with the North American market in mind and has a strong outdoor deck experience.",
                highlights: ["Galveston homeport", "Designed for North American market", "MSC Yacht Club", "Caribbean and Bahamas itineraries", "Strong outdoor deck experience"]
              },
              {
                name: "MSC Seashore",
                homeport: "Orlando (Port Canaveral)",
                destinations: "Caribbean and Bahamas",
                notes: "Sailing from Port Canaveral, MSC Seashore was designed with more outdoor deck space than any previous MSC ship. A great choice for Florida-based travelers.",
                highlights: ["Orlando homeport", "Maximized outdoor deck space", "MSC Yacht Club", "Caribbean and Bahamas itineraries"]
              },
              {
                name: "MSC Seaside",
                homeport: "Miami",
                destinations: "Caribbean and Bahamas",
                notes: "The original Seashore class ship with a pioneering design that puts guests closer to the water than any previous MSC vessel. The unique stern design creates a water-level experience on the lower decks.",
                highlights: ["Innovative water-level stern design", "Miami homeport", "MSC Yacht Club", "Caribbean and Bahamas itineraries"]
              },
              {
                name: "MSC Seaview",
                homeport: "Caribbean and Mediterranean",
                destinations: "Caribbean and Bahamas, Mediterranean",
                notes: "Sister ship to Seaside with the same waterfront-focused design. Seaview splits time between Caribbean and Mediterranean itineraries.",
                highlights: ["Water-level stern design", "MSC Yacht Club", "Caribbean and Mediterranean itineraries"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} · ${ship.homeport}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="mb-3">{ship.notes}</p>
                      <p className="text-xs text-gray-500">Destinations: {ship.destinations}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: MSC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: MSC_NAVY }}>Meraviglia Class — Eric's Ship</h3>

            {[
              {
                name: "MSC Virtuosa",
                homeport: "Mediterranean and international",
                destinations: "Mediterranean, Northern Europe, South America",
                notes: "One of MSC's most sophisticated ships with a stunning design and the full Meraviglia class experience. Sails a wide variety of itineraries.",
                highlights: ["MSC Yacht Club", "Meraviglia class design", "Wide itinerary variety", "Mediterranean and international routes"]
              },
              {
                name: "MSC Euribia",
                homeport: "Northern Europe and Mediterranean",
                destinations: "Northern Europe, Mediterranean",
                notes: "A newer addition to the Meraviglia class and one of the most environmentally advanced ships in the fleet.",
                highlights: ["MSC Yacht Club", "Environmentally advanced design", "Northern Europe itineraries", "Signature LED promenade"]
              },
              {
                name: "MSC Grandiosa",
                homeport: "Miami and Mediterranean",
                destinations: "Caribbean and Bahamas, Mediterranean",
                notes: "The largest of the Meraviglia class ships and one of the most popular in the fleet. Grandiosa splits time between Miami for Caribbean sailings and the Mediterranean.",
                highlights: ["Miami and Mediterranean homeports", "Largest Meraviglia class ship", "MSC Yacht Club", "Signature LED promenade"]
              },
              {
                name: "MSC Meraviglia",
                homeport: "Miami and New York",
                destinations: "Caribbean and Bahamas, Mediterranean",
                notes: "Eric has sailed on the Meraviglia three times. Two sailings were out of New York to the Bahamas including Ocean Cay and Nassau. She has a stunning indoor promenade with an LED sky ceiling that is genuinely spectacular.",
                highlights: ["Eric has sailed her three times", "LED sky ceiling indoor promenade", "New York and Miami homeports", "MSC Yacht Club", "Eataly specialty dining onboard"]
              },
              {
                name: "MSC Bellissima",
                homeport: "Asia",
                destinations: "Asia",
                notes: "Sister ship to the Meraviglia with the same stunning interior design and LED promenade. Currently sails Asian itineraries.",
                highlights: ["LED sky ceiling promenade", "Same layout as Meraviglia", "MSC Yacht Club", "Asian itineraries"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} · ${ship.homeport}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="mb-3">{ship.notes}</p>
                      <p className="text-xs text-gray-500">Destinations: {ship.destinations}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: MSC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: MSC_NAVY }}>Fantasia Class</h3>

            {[
              {
                name: "MSC Divina",
                homeport: "Miami and Mediterranean",
                destinations: "Mediterranean, South America",
                notes: "One of the most beautifully designed ships in the fleet with a timeless Italian aesthetic. MSC Divina sails from Miami on Caribbean itineraries.",
                highlights: ["Classic Italian design", "Miami homeport", "MSC Yacht Club", "Caribbean and Mediterranean itineraries"]
              },
              {
                name: "MSC Fantasia",
                homeport: "Mediterranean",
                destinations: "Canary Islands, Mediterranean",
                notes: "The original Fantasia class ship sailing Mediterranean and Canary Island itineraries with the classic large-ship MSC feel.",
                highlights: ["MSC Yacht Club", "Mediterranean itineraries", "Canary Islands sailings"]
              },
              {
                name: "MSC Preziosa",
                homeport: "Northern Europe",
                destinations: "Northern Europe",
                notes: "Fantasia class ship sailing Northern European itineraries. A great option for travelers interested in the fjords, Baltic capitals, or British Isles.",
                highlights: ["MSC Yacht Club", "Northern Europe itineraries", "Fantasia class comfort"]
              },
              {
                name: "MSC Splendida",
                homeport: "Mediterranean",
                destinations: "Mediterranean, South America",
                notes: "One of MSC's well-established large ships with a warm classic feel. The Splendida sails Mediterranean and South American itineraries.",
                highlights: ["MSC Yacht Club", "Mediterranean and South American itineraries", "Full specialty dining lineup"]
              },
              {
                name: "MSC Magnifica",
                homeport: "Mediterranean and Northern Europe",
                destinations: "Mediterranean, Northern Europe",
                notes: "A mid-size ship with a warm intimate character. Popular with experienced cruisers who prefer a slightly smaller vessel.",
                highlights: ["MSC Yacht Club", "Mediterranean and Northern Europe", "More intimate mid-size feel"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} · ${ship.homeport}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="mb-3">{ship.notes}</p>
                      <p className="text-xs text-gray-500">Destinations: {ship.destinations}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: MSC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: MSC_NAVY }}>Musica Class</h3>

            {[
              {
                name: "MSC Musica",
                homeport: "Mediterranean",
                destinations: "Canary Islands, Mediterranean, South America",
                notes: "The original Musica class ship with a classic intimate design. Sails Mediterranean, Canary Island, and South American itineraries.",
                highlights: ["MSC Yacht Club", "Mediterranean and Canary Islands", "South American itineraries"]
              },
              {
                name: "MSC Orchestra",
                homeport: "Mediterranean",
                destinations: "Mediterranean",
                notes: "Sister ship to Musica sailing Mediterranean itineraries with the warm classic MSC character of the Musica class.",
                highlights: ["MSC Yacht Club", "Mediterranean itineraries", "Classic Musica class feel"]
              },
              {
                name: "MSC Poesia",
                homeport: "Miami and Seattle",
                destinations: "Alaska, Caribbean, Panama Canal",
                notes: "A Musica class ship with a notably diverse itinerary range including Alaska sailings from Seattle, Caribbean from Miami, and Panama Canal Grand Voyages.",
                highlights: ["MSC Yacht Club", "Alaska sailings from Seattle", "Caribbean from Miami", "Panama Canal Grand Voyages"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} · ${ship.homeport}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="mb-3">{ship.notes}</p>
                      <p className="text-xs text-gray-500">Destinations: {ship.destinations}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: MSC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: MSC_NAVY }}>Lirica Class — Classic Fleet</h3>

            {[
              {
                name: "MSC Armonia",
                homeport: "Mediterranean and South Africa",
                destinations: "Mediterranean, South Africa",
                notes: "Eric has sailed on the Armonia on a Caribbean itinerary covering Belize, Costa Maya, Roatan, and Cozumel. She is a smaller, older ship that delivers an intimate and personal experience.",
                highlights: ["Eric has personally sailed the Armonia", "Intimate smaller ship experience", "Classic MSC style", "Great for first-time MSC travelers"]
              },
              {
                name: "MSC Lirica",
                homeport: "Mediterranean",
                destinations: "Mediterranean",
                notes: "A classic smaller MSC ship sailing Mediterranean itineraries with a warm intimate feel.",
                highlights: ["Intimate classic design", "Mediterranean itineraries", "Classic MSC character"]
              },
              {
                name: "MSC Opera",
                homeport: "Caribbean and Mediterranean",
                destinations: "Caribbean and Bahamas, Mediterranean",
                notes: "A Lirica class ship sailing both Caribbean and Mediterranean itineraries with a warm traditional European cruise feel.",
                highlights: ["MSC Yacht Club", "Caribbean and Mediterranean itineraries", "Classic European cruise feel"]
              },
              {
                name: "MSC Sinfonia",
                homeport: "Mediterranean",
                destinations: "Mediterranean",
                notes: "Sister ship to the Armonia with the same classic intimate design. Sails Mediterranean itineraries.",
                highlights: ["Classic intimate design", "Mediterranean itineraries", "Sister ship to Armonia"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} · ${ship.homeport}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="mb-3">{ship.notes}</p>
                      <p className="text-xs text-gray-500">Destinations: {ship.destinations}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: MSC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <div className="mt-8 p-4 rounded-xl text-white text-sm" style={{ background: MSC_NAVY }}>
              <strong>Not sure which ship fits you?</strong> MSC has over 20 ships sailing everywhere from the Bahamas to Alaska to South Africa. Tell me where you want to go and I will point you in the right direction.
            </div>
          </section>
        )}

        {/* DINING */}
        {activeTab === "dining" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>Dining Onboard</h2>
            <p className="text-gray-500 text-sm mb-6">MSC's dining program reflects their Mediterranean roots. The food is genuinely good, the Italian influence runs through everything from the buffet to the specialty restaurants, and the overall dining experience is one of the things that surprises people most about MSC.</p>

            <Accordion title="Main Dining Room (Included)">
              <p className="mb-3">MSC's main dining rooms are traditional sit-down restaurants with assigned seating times, though flexible dining is available on most ships. The menus rotate nightly and lean heavily into Italian and Mediterranean cuisine alongside international options.</p>
              <p>The bread service alone is worth mentioning. Fresh bread at every meal, properly done, the European way.</p>
            </Accordion>

            <Accordion title="The Buffet (Included)">
              <p className="mb-3">MSC's buffet is called the Marketplace and it runs throughout the day with a wide variety of options. The Italian influence shows up here too with fresh pasta, antipasto, and Mediterranean salads alongside the standard buffet fare.</p>
              <p>The quality is noticeably above what you find on budget cruise lines.</p>
            </Accordion>

            <Accordion title="Eataly (Specialty — Select Ships)">
              <p className="mb-3">MSC partnered with Eataly, the famous Italian food marketplace, to bring a specialty dining experience to select ships including the Meraviglia. Eataly onboard offers fresh pasta, quality Italian ingredients, and a menu built around genuine Italian food culture.</p>
              <p>One of the standout specialty dining experiences at sea. If your ship has it, go.</p>
            </Accordion>

            <Accordion title="Butcher's Cut (Specialty)">
              <p className="mb-3">MSC's steakhouse concept available on most modern ships. Aged steaks, quality sides, and a wine list that can handle the food.</p>
              <p>A solid upcharge restaurant for a celebratory dinner or any night when you want something elevated beyond the main dining room.</p>
            </Accordion>

            <Accordion title="Kaito Sushi Bar (Specialty)">
              <p>A Japanese sushi and teppanyaki restaurant available on select ships. The teppanyaki cooking where the chef prepares your meal at the table is fun and social -- a popular choice for groups who want a lively dinner experience.</p>
            </Accordion>

            <Accordion title="Pizza and Casual Options (Included)">
              <p className="mb-3">MSC takes their pizza seriously. Thin crust, properly made, and available throughout the day. Gelato bars, coffee stations, and casual grab-and-go options round out the included food program.</p>
            </Accordion>
          </section>
        )}

        {/* MSC VOYAGERS CLUB */}
        {activeTab === "rewards" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>MSC Voyagers Club</h2>
            <p className="text-gray-500 text-sm mb-6">MSC's loyalty program rewards you every time you sail, but their best feature is that they will honor your loyalty status from other cruise lines, hotels, and tour operators before you even book your first MSC cruise.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: MSC_ACCENT, borderLeft: `4px solid ${MSC_NAVY}` }}>
              <strong>Eric's Loyalty Hack:</strong> Do not miss out on their Loyalty Match program. If you have status with Royal Caribbean, Carnival, Marriott, or Hilton, MSC will match it. You get the perks on day one without earning them from scratch.
            </div>

            <Accordion title="How the Status Match Works">
              <p className="mb-3">MSC is unique in the cruise industry for offering a true Loyalty Match program. If you hold elite status with another major cruise line, a hotel brand, or a major tour operator, you can apply to have that status matched to an equivalent tier in the MSC Voyagers Club.</p>
              <p className="mb-3">This must be done before you book your cruise. Once approved, you immediately start receiving the corresponding tier discounts and onboard perks on your very first MSC sailing.</p>
              <p>There is no cost to apply for the status match.</p>
            </Accordion>

            <Accordion title="Membership Tiers and Points">
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>Welcome Tier</strong> (1 point) — Confirmed enrollment and newsletter access</li>
                <li><strong>Classic Tier</strong> (1 to 2,199 points) — 5% cruise discount on standard bookings</li>
                <li><strong>Silver Tier</strong> (2,200 to 4,399 points) — 5% discount, milestones certificate, welcome cocktail</li>
                <li><strong>Gold Tier</strong> (4,400 to 9,999 points) — Complimentary one-hour thermal spa session and a complimentary gift</li>
                <li><strong>Diamond Tier</strong> (10,000+ points) — Priority boarding, complimentary specialty dinner, sparkling wine, late checkout</li>
              </ul>
            </Accordion>

            <Accordion title="Key Onboard Perks">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Onboard Discounts</strong> — Discounts on photo packages, spa treatments, fitness classes, and logo shop items</li>
                <li><strong>Priority Privileges</strong> — Diamond members receive priority disembarkation and priority boarding</li>
                <li><strong>Special Events</strong> — Invitations to exclusive welcome cocktails and member-only gatherings</li>
              </ul>
            </Accordion>

            <Accordion title="Voyagers Selection Discounts">
              <p className="mb-3">In addition to the standard 5% membership discount, MSC regularly designates specific itineraries as Voyagers Selection cruises. These sailings offer members extra savings, frequently ranging from an additional 5% to 15% off the standard cruise fare.</p>
              <p>Booking a Voyagers Selection itinerary is one of the cleanest strategies for stacking your loyalty status with seasonal promotions.</p>
            </Accordion>
          </section>
        )}

        {/* SOLO TRAVEL */}
        {activeTab === "solo" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>Solo Travel on MSC</h2>
            <p className="text-gray-500 text-sm mb-6">MSC has made real progress on accommodating solo travelers in recent years. They are not quite at the NCL level when it comes to a dedicated solo community experience, but if you are an outgoing person who is comfortable putting yourself out there, MSC can be a great solo cruise.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: MSC_ACCENT, borderLeft: `4px solid ${MSC_NAVY}` }}>
              <strong>Honest comparison:</strong> NCL has a hosted solo meetup every evening at 5pm with games, group dinners, and a crew member running the whole experience. MSC does not have that structured hosted program. If you are extroverted and comfortable starting conversations, MSC solo works great. If you want a built-in social structure from day one, NCL has the edge.
            </div>

            <Accordion title="Solo Studio Cabins">
              <p className="mb-3">MSC offers solo studio cabins on select ships, priced specifically for one person without a single supplement.</p>
              <p>Ask me which ships currently offer solo studios when we talk through your options.</p>
            </Accordion>

            <Accordion title="The Single Supplement on Standard Cabins">
              <p className="mb-3">On ships without dedicated solo studio cabins, MSC charges a single supplement for solo travelers booking standard cabins.</p>
              <p>I will always check solo supplement rates before we lock in a sailing so you know the full cost picture upfront.</p>
            </Accordion>

            <Accordion title="Meeting People as a Solo MSC Traveler">
              <p className="mb-3">MSC attracts an international crowd. You will be sharing the ship with guests from Europe, South America, and all over the world. That international mix creates a naturally interesting social environment.</p>
              <p>The honest truth is that solo MSC works best for people who are naturally outgoing. If you are comfortable putting yourself out there, MSC's international atmosphere is genuinely fun.</p>
            </Accordion>

            <Accordion title="Dining Solo on MSC">
              <p className="mb-3">MSC's traditional assigned dining times in the main dining room can work well for solo travelers because you may be seated at a shared table with other guests over multiple nights.</p>
              <p>Over the course of a sailing you can end up with a regular dinner crew without having to try very hard.</p>
            </Accordion>

            <Accordion title="Is MSC Right for You as a Solo Traveler?">
              <p className="mb-3">If you are outgoing and excited by an international cruise atmosphere, MSC is a solid solo option. If you want a built-in solo community with structured social events from day one, NCL is a better fit.</p>
              <p>Tell me more about what you are looking for and I can help you figure out which line makes the most sense.</p>
            </Accordion>
          </section>
        )}

        {/* MSC YACHT CLUB */}
        {activeTab === "yacht" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>MSC Yacht Club</h2>
            <p className="text-gray-500 text-sm mb-6">The MSC Yacht Club is MSC's ship-within-a-ship luxury experience and it is one of the best premium cruise products at sea. If you want the quality of a luxury cruise line without paying full luxury cruise prices, the Yacht Club deserves a serious look.</p>

            <Accordion title="What Is the MSC Yacht Club?">
              <p className="mb-3">The MSC Yacht Club is a private gated enclave on MSC ships, typically located at the top forward section of the vessel. It has its own restaurant, lounge, sun deck, pool, and butler service, and it operates completely separately from the rest of the ship.</p>
              <p>You can access all the main ship amenities whenever you want but you also have a private retreat to come back to.</p>
            </Accordion>

            <Accordion title="What Is Included in the Yacht Club?">
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>24-hour butler service</strong> for your cabin</li>
                <li><strong>Private Yacht Club restaurant</strong> open for breakfast, lunch, and dinner</li>
                <li><strong>Private Yacht Club lounge and bar</strong> with complimentary drinks throughout the day</li>
                <li><strong>Private sun deck and pool</strong> exclusively for Yacht Club guests</li>
                <li><strong>Premium drinks package</strong> included in most Yacht Club bookings</li>
                <li><strong>Specialty dining package</strong> covering a set number of specialty restaurant visits</li>
                <li><strong>Priority embarkation and disembarkation</strong></li>
                <li><strong>Welcome bottle of champagne</strong> and in-cabin amenities</li>
              </ul>
            </Accordion>

            <Accordion title="The Yacht Club Restaurant">
              <p className="mb-3">A full-service, white-tablecloth restaurant serving three meals a day exclusively for Yacht Club guests. The menu is more refined than the main dining rooms with fresh ingredients and a wine program that takes itself seriously.</p>
              <p>By the second or third day the team knows how you take your coffee and which table you prefer. It is the kind of personalized service that makes the whole experience feel genuinely special.</p>
            </Accordion>

            <Accordion title="Butler Service in the Yacht Club">
              <p className="mb-3">Every Yacht Club cabin comes with a dedicated butler who handles unpacking, morning coffee delivery, specialty restaurant reservations, spa bookings, and anything else that comes up.</p>
              <p>MSC's Yacht Club butlers have a reputation for being among the best at sea.</p>
            </Accordion>

            <Accordion title="The Private Sun Deck and Pool">
              <p className="mb-3">A private outdoor space with its own pool, hot tubs, and lounge chairs exclusively for Yacht Club guests. On a large MSC ship where the main pool deck can get very busy, having a quiet private outdoor space is one of the most practical perks of the Yacht Club.</p>
            </Accordion>

            <Accordion title="MSC Yacht Club vs MSC Standard — Is the Upgrade Worth It?">
              <p className="mb-3">The Yacht Club costs more than a standard MSC cabin. But when you factor in what comes included -- the premium drinks package, specialty dining credits, and butler service -- the actual cost difference often narrows considerably.</p>
              <p>Fill out my form and I can run the comparison for your specific sailing and show you exactly what the Yacht Club upgrade actually costs versus what it includes.</p>
            </Accordion>

            <Accordion title="How Does the Yacht Club Compare to NCL's The Haven?">
              <p className="mb-3">Both are excellent ship-within-a-ship luxury experiences. The Yacht Club tends to feel more European and refined. The Haven tends to have more entertainment amenities given NCL's investment in onboard activities.</p>
              <p>The right choice usually comes down to itinerary. I can help you compare both for your specific travel dates.</p>
            </Accordion>
          </section>
        )}

        {/* WHAT'S INCLUDED */}
        {activeTab === "included" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>What's Included in Your Fare</h2>
            <p className="text-gray-500 text-sm mb-6">MSC's base fare covers the essentials well. Here is a clear breakdown of what comes with your cruise and what costs extra so you can plan your budget before you board.</p>

            <Accordion title="What Is Included">
              <ul className="list-disc pl-5 space-y-2">
                <li>Main dining room meals (breakfast, lunch, dinner)</li>
                <li>The Marketplace buffet all day</li>
                <li>Pizza and casual dining venues</li>
                <li>Basic non-alcoholic beverages with meals</li>
                <li>Entertainment including shows, live music, and onboard activities</li>
                <li>Pool and deck access</li>
                <li>Fitness center</li>
                <li>Kids clubs (if applicable)</li>
                <li>Port fees and taxes</li>
              </ul>
            </Accordion>

            <Accordion title="What Is NOT Included">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Alcoholic beverages</strong> unless you add a drinks package</li>
                <li><strong>Specialty dining</strong> like Eataly, Butcher's Cut, and Kaito</li>
                <li><strong>Gratuities</strong> charged as a daily service charge per person</li>
                <li><strong>Shore excursions</strong></li>
                <li><strong>Spa treatments</strong> and thermal suite access</li>
                <li><strong>WiFi</strong> packages</li>
                <li><strong>Specialty coffees</strong> like lattes and cappuccinos</li>
                <li><strong>Casino play</strong></li>
              </ul>
            </Accordion>

            <Accordion title="MSC Drinks Packages">
              <p className="mb-3">MSC offers several drink package options ranging from non-alcoholic packages to premium all-inclusive packages covering spirits, wine, cocktails, and specialty coffee.</p>
              <p>I can walk through the options and pricing for your specific sailing so you know exactly what makes sense before you commit.</p>
            </Accordion>

            <Accordion title="Gratuities on MSC">
              <p className="mb-3">MSC charges a daily service charge per person covering gratuities for your cabin steward and dining staff.</p>
              <p>Prepaying gratuities before your sailing locks in the rate. I always recommend prepaying when we lock in your booking.</p>
            </Accordion>

            <Accordion title="Ocean Cay MSC Marine Reserve">
              <p className="mb-3">Ocean Cay is MSC's private island in the Bahamas and one of the best private island experiences in cruising. Eric has visited Ocean Cay on his Meraviglia sailings out of New York and it consistently stands out as one of the best port days on those itineraries.</p>
              <p className="mb-3">The island was built with environmental sustainability as a core principle. It does not feel like a manufactured tourist attraction. It feels like an actual island.</p>
              <p>Beach access is included with your cruise fare. Go early to get the best beach spots.</p>
            </Accordion>
          </section>
        )}

        {/* SHORE EXCURSIONS */}
        {activeTab === "excursions" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>Shore Excursions</h2>
            <p className="text-gray-500 text-sm mb-6">MSC offers shore excursions through their onboard program that you can book before your sailing. Here is a look at some of the ports Eric has personally visited on MSC sailings.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: MSC_ACCENT, borderLeft: `4px solid ${MSC_NAVY}` }}>
              <p className="font-semibold mb-1">Two things to know before you book excursions:</p>
              <p className="mb-2">Book before you sail. Pre-cruise pricing is lower and popular excursions sell out.</p>
              <p>Book through the ship. If your MSC excursion runs long, the ship waits. If you are on your own and running late, the ship will not.</p>
            </div>

            {[
              {
                port: "Ocean Cay MSC Marine Reserve, Bahamas",
                eric: true,
                about: "MSC's private island and one of the best days you will have at sea. Eric has been here on the Meraviglia and it lives up to the reputation. The water is beautiful and the island has a genuine natural feel.",
                excursions: ["Private Beach Club Upgrade", "Snorkeling in the Marine Reserve", "Kayaking and Paddleboarding", "Lighthouse Tower Tour", "Island BBQ Lunch (included)"]
              },
              {
                port: "Nassau, Bahamas",
                eric: true,
                about: "A classic Caribbean port with beaches, history, and shopping within easy reach. Eric has visited Nassau on MSC Meraviglia sailings from New York.",
                excursions: ["Atlantis Beach Day", "Blue Lagoon Island Beach and Snorkel", "Nassau Walking Tour", "Swim with Dolphins", "Atlantis Water Park Access"]
              },
              {
                port: "Belize City, Belize",
                eric: true,
                about: "Eric sailed into Belize on the MSC Armonia. Belize is a tender port with access to one of the most diverse ecosystems in Central America including the Belize Barrier Reef, Mayan ruins, and rainforest.",
                excursions: ["Cave Tubing through the Rainforest", "Belize Barrier Reef Snorkel", "Altun Ha Mayan Ruins Tour", "Zip Lining through the Jungle", "River Kayaking and Wildlife Tour"]
              },
              {
                port: "Costa Maya, Mexico",
                eric: true,
                about: "Eric visited Costa Maya on the MSC Armonia. Get beyond the port area and the Yucatan opens up with Mayan ruins, cenotes, and the Bacalar Lagoon.",
                excursions: ["Chacchoben Mayan Ruins", "Bacalar Lagoon Day Trip", "ATVs and Cenote Swim", "Kayaking in Lagoons"]
              },
              {
                port: "Roatan, Honduras",
                eric: true,
                about: "One of Eric's favorite port stops on the Armonia itinerary. Roatan is a Bay Island with incredible diving and snorkeling, beautiful beaches, and a laid-back vibe that feels genuinely off the beaten path.",
                excursions: ["Snorkeling at the Barrier Reef", "Scuba Diving for Certified Divers", "Monkey and Sloth Sanctuary Visit", "West Bay Beach Day", "Zip Line and Beach Combo"]
              },
              {
                port: "Cozumel, Mexico",
                eric: true,
                about: "Eric has visited Cozumel on both the Meraviglia and the Armonia itineraries. One of the top snorkeling and diving destinations in the world.",
                excursions: ["Snorkel at Palancar Reef", "Scuba Diving for Certified Divers", "Catamaran Sail and Snorkel", "Dune Buggy Island Tour", "Swim with Dolphins", "Mr. Sancho's Beach Club"]
              },
            ].map((p) => (
              <Accordion key={p.port} title={`${p.port}${p.eric ? " — Eric Has Been Here" : ""}`}>
                <p className="mb-4">{p.about}</p>
                <p className="font-semibold mb-2" style={{ color: MSC_NAVY }}>Popular Excursions Here</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {p.excursions.map((e) => <li key={e}>{e}</li>)}
                </ul>
              </Accordion>
            ))}
          </section>
        )}

        {/* TRIP INSURANCE */}
        {activeTab === "insurance" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>Trip Insurance</h2>
            <p className="text-gray-500 text-sm mb-6">I always recommend trip insurance when booking a cruise. Sailing internationally puts you in situations where things can go sideways in ways that have nothing to do with the cruise line.</p>

            <div className="p-4 rounded-xl mb-6 text-white text-sm" style={{ background: MSC_NAVY }}>
              <strong>Lock it in at booking.</strong> Trip insurance is cheaper when you buy it at the time of your initial deposit. Some pre-existing condition coverage only applies within a set window of your first payment. Do not wait on this one.
            </div>

            <Accordion title="What If You Get Sick Before You Leave?">
              <p className="mb-3">You have been planning for months and two days before you leave you end up in urgent care. Without insurance you lose every dollar because the cancellation deadline has passed.</p>
              <p>With trip insurance and a covered illness, you cancel and get reimbursed.</p>
            </Accordion>

            <Accordion title="What If a Family Member Has an Emergency?">
              <p>Trip insurance covers cancellation for family medical emergencies so you can be where you need to be without the financial hit on top of everything else.</p>
            </Accordion>

            <Accordion title="What If You Get Sick or Hurt at Sea or Overseas?">
              <p className="mb-3">Your regular health insurance often does not cover you outside the United States. A medical evacuation from a ship or from a port like Roatan or Belize City can cost tens of thousands of dollars without coverage.</p>
            </Accordion>

            <Accordion title="What If Your Flight Gets Cancelled?">
              <p>Trip delay coverage reimburses you for unexpected overnight stays, meals, and rebooking costs when your travel gets disrupted.</p>
            </Accordion>

            <Accordion title="What If Your Luggage Gets Lost?">
              <p>Baggage delay coverage helps cover essentials while your stuff catches up or gets replaced.</p>
            </Accordion>

            <Accordion title="Why Buy It at Booking?">
              <p className="mb-3">It is cheaper early and pre-existing condition coverage requires buying within 14 to 21 days of your initial deposit. Miss that window and that coverage disappears.</p>
            </Accordion>
          </section>
        )}

        {/* ERIC'S TIPS */}
        {activeTab === "tips" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>Eric's Tips for Your MSC Sailing</h2>
            <p className="text-gray-500 text-sm mb-6">I have sailed MSC four times including the Meraviglia three times and the Armonia once. Here is what I actually tell people before they board.</p>

            <Accordion title="Book Your Drinks Package Before You Sail">
              <p>MSC's drink packages are almost always cheaper when you add them before your sailing. Lock it in early and board the ship knowing that part of your budget is already handled.</p>
            </Accordion>

            <Accordion title="Get to Ocean Cay Early">
              <p className="mb-3">If your itinerary includes Ocean Cay, get on one of the first gangway opportunities to the island. The beach fills up throughout the morning and the best spots go to the people who get there first.</p>
              <p>Plan to spend the full day on the island. People who left early always wish they had stayed longer.</p>
            </Accordion>

            <Accordion title="Try Eataly If Your Ship Has It">
              <p>If you are on the Meraviglia or another ship that carries the Eataly concept, make a reservation and go. It is one of the genuinely special specialty dining experiences at sea. Do not skip it to save money on the upcharge. It is worth it.</p>
            </Accordion>

            <Accordion title="Prepay Your Gratuities">
              <p>Add your gratuities at booking. It is the same amount either way but paying upfront means you board knowing your complete cost.</p>
            </Accordion>

            <Accordion title="Book Excursions Before You Sail">
              <p className="mb-3">Pre-cruise excursion pricing is lower than onboard pricing. Belize cave tubing, Roatan snorkeling, and the Cozumel reef snorkel all book up fast.</p>
              <p>I have been to all four ports on the Armonia itinerary and the MSC Bahamas ports on Meraviglia. Reach out and I can give you real recommendations based on what I actually experienced.</p>
            </Accordion>

            <Accordion title="The Indoor Promenade on Meraviglia Is Worth a Slow Walk">
              <p>The LED sky ceiling on the Meraviglia's indoor promenade changes throughout the day and runs different shows in the evening. Walk it slowly, especially at night, and take it in. Most people rush through it without stopping to look up.</p>
            </Accordion>

            <Accordion title="Roatan Is a Hidden Gem — Do Not Miss It">
              <p className="mb-3">If your itinerary includes Roatan, Honduras, treat it as a priority port day. It is less commercialized than Cozumel or Nassau and the reef snorkeling is outstanding.</p>
              <p>I sailed into Roatan on the Armonia and it stood out as one of the most memorable port stops on that itinerary.</p>
            </Accordion>

            <Accordion title="Get Trip Insurance and Get It Early">
              <p>Sailing internationally through Central America or the Bahamas puts you far from home. Lock in insurance at booking when it is cheapest. I flag this for every client upfront so there are no surprises.</p>
            </Accordion>
          </section>
        )}

        {/* CTA */}
        <div className="mt-10 rounded-2xl p-5 md:p-8 text-center text-white" style={{ background: `linear-gradient(135deg, ${MSC_DARK}, ${MSC_NAVY})` }}>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: MSC_GOLD }}>Ready to Sail MSC</p>
          <h3 className="text-lg md:text-2xl font-bold mb-3">Let's Find Your Perfect Sailing</h3>
          <p className="text-sm mb-5 max-w-lg mx-auto" style={{ color: "#CBD5E1" }}>
            I've sailed MSC four times and know the line inside and out. When you book with me, you get that actual firsthand experience, the right cabin for your style, and someone who is genuinely paying attention to the details.
          </p>
          
           <a href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg font-bold text-sm transition hover:opacity-90"
            style={{ background: MSC_GOLD, color: MSC_DARK }}
          >
            Let's build your trip.
          </a>
        </div>

      </div>
    </div>
  );
}
