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
        className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-blue-50 transition-colors"
        style={{ background: open ? MSC_ACCENT : "white" }}
      >
        <span>{title}</span>
        <span
          className="text-2xl transition-transform duration-200"
          style={{ color: MSC_NAVY, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 py-5 bg-white border-t border-blue-100 text-gray-700 leading-relaxed">
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
        className="relative py-24 px-6 text-center text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${MSC_DARK} 0%, ${MSC_NAVY} 100%)` }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 25%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 leading-tight">MSC Cruises</h1>
          <p className="text-xl mb-6 leading-relaxed" style={{ color: "#CBD5E1" }}>
            European elegance at a real price. MSC is one of the most underrated cruise lines out there and one of the lines Eric knows from personal experience. Beautiful ships, a Mediterranean style that feels genuinely different, and value that is hard to beat.
          </p>
          <p className="text-base" style={{ color: "#94A3B8" }}>
            Everything you need to know about sailing MSC, put together by Eric, your HDT travel advisor who has sailed MSC four times.
          </p>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 shadow-md overflow-x-auto" style={{ background: MSC_DARK }}>
        <div className="flex justify-center min-w-max mx-auto px-4 w-full">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2"
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
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* ABOUT MSC */}
        {activeTab === "about" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>About MSC Cruises</h2>
            <p className="text-gray-500 mb-8">MSC is one of the largest cruise lines in the world and one of the most underrated. If you have not heard as much about them as Royal Caribbean or Carnival, that is not because they are lesser. It is because they built their reputation in Europe first and they are still earning their recognition here in North America. Eric has sailed MSC four times and can tell you firsthand they are worth your attention.</p>

            <Accordion title="Who Is MSC?">
              <p className="mb-3">MSC Cruises is a Swiss-based cruise line and the largest privately owned cruise company in the world. They started as a Mediterranean shipping company and have been building cruise ships since the 1980s. Their home is the Mediterranean and it shows in the design, the food, the entertainment, and the overall feel of the ships.</p>
              <p>When you board an MSC ship you notice it feels different from an American cruise line. The architecture is more European, the dining program leans into Italian and Mediterranean cuisine, and the whole experience has a sophistication that does not feel forced. It is just how they do things.</p>
            </Accordion>

            <Accordion title="Why MSC Is Underrated in America">
              <p className="mb-3">Most American cruisers default to Royal Caribbean, Carnival, or Norwegian because those are the names they grew up hearing. MSC built their brand overseas first, which means a lot of American travelers have simply never had someone point them in that direction.</p>
              <p className="mb-3">That works in your favor. MSC tends to offer strong value on Caribbean itineraries because they are still competing for the American market. You get a beautiful, well-run ship at a price point that often beats the more established American lines for a comparable experience.</p>
              <p>Eric has sailed MSC four times including the Meraviglia out of New York to the Bahamas and the Armonia on a Caribbean itinerary through Belize, Costa Maya, Roatan, and Cozumel. The value and the experience both delivered.</p>
            </Accordion>

            <Accordion title="What Makes MSC Different">
              <p className="mb-3">A few things stand out about MSC that you will not find on other lines:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>European style and design</strong> — The ships feel more like a high-end European hotel than a floating theme park. Clean lines, sophisticated interiors, and thoughtful spaces throughout</li>
                <li><strong>Italian and Mediterranean food culture</strong> — Pasta, pizza, fresh bread, and Mediterranean flavors are taken seriously onboard. The food program reflects genuine culinary heritage</li>
                <li><strong>MSC Yacht Club</strong> — Their ship-within-a-ship luxury experience is one of the best at sea and genuinely competitive with any luxury cruise line</li>
                <li><strong>Ocean Cay MSC Marine Reserve</strong> — Their private island in the Bahamas is one of the most beautiful private island experiences in cruising. It was built with environmental sustainability as a core focus</li>
                <li><strong>International atmosphere</strong> — MSC attracts guests from all over the world. You will be sharing the ship with Europeans, South Americans, and travelers from dozens of countries. It adds a genuinely global feel to the experience</li>
              </ul>
            </Accordion>

            <Accordion title="Eric's Take on MSC">
              <p className="mb-3">I have been on the MSC Meraviglia three times and the MSC Armonia once. Two of my Meraviglia sailings were out of New York City to the Bahamas including Ocean Cay and Nassau, and one went from New York to Florida and the Bahamas. The Armonia took me through Belize, Costa Maya, Roatan, and Cozumel, which is one of the best Caribbean itineraries you can do.</p>
              <p className="mb-3">What I can tell you from those four sailings is that MSC consistently delivers a quality experience at a price point that makes sense. The Meraviglia is a stunning ship. The food is genuinely good. The entertainment is strong. And Ocean Cay is one of the best port days I have had on any cruise line.</p>
              <p>MSC is not a perfect fit for everyone but for the right traveler it is an outstanding choice. Tell me what you are looking for and I can tell you whether MSC makes sense for your trip.</p>
            </Accordion>
          </section>
        )}

        {/* THE SHIPS */}
        {activeTab === "ships" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>The MSC Fleet</h2>
            <p className="text-gray-500 mb-8">MSC has one of the fastest-growing fleets in the world. They have been launching new ships at a pace that most lines cannot match and the newer vessels are genuinely impressive. Here is a look at the ships you are most likely to encounter sailing from US ports.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: MSC_ACCENT, borderLeft: `4px solid ${MSC_NAVY}` }}>
              <strong>Eric's Note:</strong> I have personally sailed on the MSC Meraviglia three times and the MSC Armonia once. If you want to know what either of those ships actually feels like day to day, ask me directly. I can give you a real picture of what to expect.
            </div>

            <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: MSC_NAVY }}>World Class — MSC's Largest Ships</h3>

            {[
              {
                name: "MSC World Europa",
                built: "2022",
                capacity: "6,762",
                notes: "One of the largest cruise ships ever built and MSC's most ambitious vessel. World Europa is packed with features including a Formula 1 simulator, a VR zone, and some of the most spectacular public spaces at sea. She sails primarily from the Middle East and Europe.",
                highlights: ["Formula 1 simulator", "Virtual reality zone", "MSC Yacht Club enclave", "Massive entertainment complex", "One of the largest ships at sea"]
              },
              {
                name: "MSC Seashore",
                built: "2021",
                capacity: "5,632",
                notes: "MSC Seashore is one of their largest North America-based ships and sails from Miami and Port Canaveral. She was designed with more outdoor space than any previous MSC ship and the pool deck experience reflects that. A great choice for Caribbean sailings from Florida.",
                highlights: ["Extended outdoor deck space", "MSC Yacht Club", "Miami and Florida homeports", "Caribbean itineraries", "Strong entertainment lineup"]
              },
              {
                name: "MSC Seascape",
                built: "2022",
                capacity: "5,877",
                notes: "Sister ship to Seashore and based in Miami. Seascape was designed specifically for the North American market and has some features tailored to American travelers including a wider variety of bar concepts and a stronger sports entertainment focus.",
                highlights: ["Designed for North American market", "Miami homeport", "Caribbean itineraries", "MSC Yacht Club", "Strong pool deck experience"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: MSC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {ship.highlights.map((h) => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-lg font-bold mb-3 mt-8" style={{ color: MSC_NAVY }}>Meraviglia Class — Eric's Ship</h3>

            {[
              {
                name: "MSC Meraviglia",
                built: "2017",
                capacity: "4,488",
                notes: "Eric has sailed on the Meraviglia three times. Two sailings were out of New York to the Bahamas including Ocean Cay and Nassau, and one sailed to Florida and the Bahamas. The Meraviglia is one of MSC's signature ships and the one that introduced a lot of American cruisers to the brand. She has a stunning indoor promenade with an LED sky ceiling that is genuinely spectacular, strong specialty dining, and a great entertainment program. A beautiful ship that punches above its weight.",
                highlights: ["Eric has sailed her three times", "LED sky ceiling indoor promenade", "New York City homeport", "Bahamas and Florida itineraries", "MSC Yacht Club", "Strong specialty dining"]
              },
              {
                name: "MSC Bellissima",
                built: "2019",
                capacity: "4,488",
                notes: "Sister ship to the Meraviglia with the same stunning interior design and LED promenade. Bellissima sails Mediterranean and international itineraries and brings the same high standard as her sister ship to a broader range of destinations.",
                highlights: ["LED sky ceiling promenade", "Same layout as Meraviglia", "Mediterranean itineraries", "MSC Yacht Club", "Strong dining and entertainment"]
              },
              {
                name: "MSC Grandiosa",
                built: "2019",
                capacity: "4,888",
                notes: "The largest of the Meraviglia class ships. Grandiosa sails mostly Mediterranean itineraries and is one of the most popular ships in the European market. She has the signature indoor promenade and an even larger entertainment and dining footprint than her Meraviglia class sisters.",
                highlights: ["Largest Meraviglia class ship", "Signature LED promenade", "Mediterranean itineraries", "Expanded dining options", "MSC Yacht Club"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: MSC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {ship.highlights.map((h) => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-lg font-bold mb-3 mt-8" style={{ color: MSC_NAVY }}>Seaside Class</h3>

            {[
              {
                name: "MSC Seaside",
                built: "2017",
                capacity: "4,134",
                notes: "Designed with more outdoor space and a closer connection to the ocean than any previous MSC ship. The Seaside has a unique stern design that puts you right at the water's edge on the lower decks. Sails from Miami on Caribbean itineraries.",
                highlights: ["Innovative stern design at water level", "Extended outdoor decks", "Miami homeport", "Caribbean itineraries", "MSC Yacht Club"]
              },
              {
                name: "MSC Seaview",
                built: "2018",
                capacity: "4,134",
                notes: "Sister ship to Seaside with the same waterfront-focused design. Seaview sails primarily Mediterranean itineraries and brings the outdoor deck innovation of the Seaside class to European ports.",
                highlights: ["Water-level stern design", "Extended outdoor spaces", "Mediterranean itineraries", "MSC Yacht Club"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: MSC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {ship.highlights.map((h) => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-lg font-bold mb-3 mt-8" style={{ color: MSC_NAVY }}>Fantasia Class</h3>

            {[
              {
                name: "MSC Divina",
                built: "2012",
                capacity: "3,502",
                notes: "One of the most beautiful ships in the fleet with an Italian design aesthetic that feels timeless. MSC Divina sails Caribbean itineraries from Miami and has a loyal following among repeat MSC guests who appreciate the classic European styling.",
                highlights: ["Classic Italian design", "Miami homeport", "Caribbean itineraries", "MSC Yacht Club", "Timeless elegant interiors"]
              },
              {
                name: "MSC Splendida",
                built: "2009",
                capacity: "3,274",
                notes: "One of MSC's earlier large ships, still very well maintained and a strong choice for European itineraries. The Splendida has a warm, classic MSC feel and all the core dining and entertainment you expect from the line.",
                highlights: ["Classic MSC experience", "European itineraries", "MSC Yacht Club", "Full specialty dining lineup"]
              },
              {
                name: "MSC Magnifica",
                built: "2010",
                capacity: "2,518",
                notes: "A mid-size MSC ship known for her world cruise and longer international itineraries. Magnifica has a warm intimate feel for MSC and is popular with experienced cruisers who appreciate a slightly smaller ship.",
                highlights: ["World cruise itineraries", "Mid-size intimate feel", "MSC Yacht Club", "International itineraries"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: MSC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {ship.highlights.map((h) => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-lg font-bold mb-3 mt-8" style={{ color: MSC_NAVY }}>Classic Fleet</h3>

            {[
              {
                name: "MSC Armonia",
                built: "2001",
                capacity: "1,566",
                notes: "Eric has sailed on the Armonia on an itinerary that covered Belize, Costa Maya, Roatan, and Cozumel. She is a smaller, older ship that feels intimate and personal compared to the mega ships. The Armonia delivers the core MSC experience on a more manageable scale and that Caribbean itinerary through Belize and Roatan is genuinely one of the best in the region.",
                highlights: ["Eric has personally sailed on the Armonia", "Belize, Costa Maya, Roatan, and Cozumel itinerary", "Smaller intimate experience", "Classic MSC style", "Great entry point for first-time MSC sailors"]
              },
              {
                name: "MSC Sinfonia",
                built: "2002",
                capacity: "1,566",
                notes: "Sister ship to the Armonia with the same classic intimate feel. The Sinfonia sails a variety of itineraries and is a good choice for travelers who prefer a smaller ship experience with the full MSC character.",
                highlights: ["Intimate smaller ship", "Classic MSC experience", "Variety of itineraries", "Sister ship to Armonia"]
              },
              {
                name: "MSC Opera",
                built: "2004",
                capacity: "2,055",
                notes: "A mid-size classic MSC ship that sails South American and Caribbean itineraries. The Opera has a warm, traditional European cruise feel and is popular with travelers who enjoy a more classic cruising experience.",
                highlights: ["Classic European cruise feel", "South American itineraries", "Mid-size comfortable ship", "Traditional MSC character"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: MSC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {ship.highlights.map((h) => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <div className="mt-8 p-5 rounded-xl text-white text-sm" style={{ background: MSC_NAVY }}>
              <strong>Not sure which ship fits you?</strong> MSC has a wide range from intimate classic ships like the Armonia to massive modern vessels like the Seascape. Tell me where you want to go and what kind of experience you are after and I will point you in the right direction.
            </div>
          </section>
        )}

        {/* DINING */}
        {activeTab === "dining" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>Dining Onboard</h2>
            <p className="text-gray-500 mb-8">MSC's dining program reflects their Mediterranean roots. The food is genuinely good, the Italian influence runs through everything from the buffet to the specialty restaurants, and the overall dining experience is one of the things that surprises people most about MSC.</p>

            <Accordion title="Main Dining Room (Included)">
              <p className="mb-3">MSC's main dining rooms are traditional sit-down restaurants with assigned seating times, though flexible dining is available on most ships. The menus rotate nightly and lean heavily into Italian and Mediterranean cuisine alongside international options.</p>
              <p>The bread service alone is worth mentioning. Fresh bread at every meal, properly done, the European way. It sounds like a small thing until you have it and realize how much it adds to the whole dining experience.</p>
            </Accordion>

            <Accordion title="The Buffet (Included)">
              <p className="mb-3">MSC's buffet is called the Marketplace and it runs throughout the day with a wide variety of options. The Italian influence shows up here too with fresh pasta, antipasto, and Mediterranean salads alongside the standard buffet fare.</p>
              <p>The quality is noticeably above what you find on budget cruise lines and reflects the same culinary standards as the main dining room in a more casual format.</p>
            </Accordion>

            <Accordion title="Eataly (Specialty — Select Ships)">
              <p className="mb-3">MSC partnered with Eataly, the famous Italian food marketplace, to bring a specialty dining experience to select ships including the Meraviglia. Eataly onboard offers fresh pasta, quality Italian ingredients, and a menu built around genuine Italian food culture.</p>
              <p>If you have ever visited an Eataly location on land you know the quality level. This is the same philosophy applied to a cruise ship restaurant and it works extremely well. One of the standout specialty dining experiences at sea.</p>
            </Accordion>

            <Accordion title="Butcher's Cut (Specialty)">
              <p className="mb-3">MSC's steakhouse concept available on most modern ships. Butcher's Cut serves aged steaks, quality sides, and a wine list that can handle the food. The atmosphere is warm and the quality is on par with what you would expect from a proper steakhouse on land.</p>
              <p>A solid upcharge restaurant for a celebratory dinner or any night when you want something elevated beyond the main dining room.</p>
            </Accordion>

            <Accordion title="Kaito Sushi Bar (Specialty)">
              <p className="mb-3">A Japanese sushi and teppanyaki restaurant available on select ships. Kaito offers a full sushi menu alongside teppanyaki cooking where the chef prepares your meal at the table. The energy is fun and social and it is a popular choice for groups who want a lively dinner experience.</p>
            </Accordion>

            <Accordion title="Ocean Cay Restaurant (Select Ships)">
              <p className="mb-3">A specialty seafood restaurant available on some ships. Fresh fish, shellfish, and Mediterranean-style seafood preparations. A good option on ships that carry it for anyone who wants a seafood-focused dinner.</p>
            </Accordion>

            <Accordion title="Pizza and Casual Options (Included)">
              <p className="mb-3">MSC takes their pizza seriously. It is thin crust, properly made, and available throughout the day. It is one of those things that seems like a minor detail but when the pizza is actually good you end up having it more than you planned.</p>
              <p>Gelato bars, coffee stations, and casual grab-and-go options round out the included food program for when you want something quick between ports or activities.</p>
            </Accordion>
          </section>
        )}

        {/* SOLO TRAVEL */}
        {activeTab === "solo" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>Solo Travel on MSC</h2>
            <p className="text-gray-500 mb-8">MSC has made real progress on accommodating solo travelers in recent years. They are not quite at the NCL level when it comes to a dedicated solo community experience, but if you are an outgoing person who is comfortable putting yourself out there, MSC can be a great solo cruise.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: MSC_ACCENT, borderLeft: `4px solid ${MSC_NAVY}` }}>
              <strong>Honest comparison:</strong> NCL has a hosted solo meetup every evening at 5pm with games, group dinners, and a crew member running the whole experience. MSC does not have that structured hosted program. MSC has solo cabin options and social spaces but the community-building aspect is more organic. If you are extroverted and comfortable starting conversations, MSC solo works great. If you want a built-in social structure from day one, NCL has the edge.
            </div>

            <Accordion title="Solo Studio Cabins">
              <p className="mb-3">MSC offers solo studio cabins on select ships, priced specifically for one person without a single supplement. These cabins are available on newer ships in the fleet and are a smart, efficient space designed for a single traveler.</p>
              <p>If your ship has solo studio cabins, this is the way to go as a solo traveler. You avoid the single supplement and you get a cabin that actually makes sense for one person. Ask me which ships currently offer solo studios when we talk through your options.</p>
            </Accordion>

            <Accordion title="The Single Supplement on Standard Cabins">
              <p className="mb-3">On ships without dedicated solo studio cabins, MSC charges a single supplement for solo travelers booking standard cabins. The supplement amount varies by ship, sailing, and cabin category and it can add meaningful cost to your trip.</p>
              <p>This is one area where MSC lags behind NCL for solo travelers. On NCL the Studio cabins eliminate the supplement entirely fleetwide. On MSC it depends on which ship you are on. I will always check solo supplement rates before we lock in a sailing so you know the full cost picture upfront.</p>
            </Accordion>

            <Accordion title="Meeting People as a Solo MSC Traveler">
              <p className="mb-3">MSC attracts an international crowd. You will be sharing the ship with guests from Europe, South America, and all over the world. That international mix creates a naturally interesting social environment and conversations tend to happen organically in the bars, at the pool, and at dinner.</p>
              <p className="mb-3">MSC does not have a hosted solo program like NCL's 5pm meetup. There is no crew member running icebreakers and organizing group dinners. What MSC does have is communal dining options and social spaces where meeting people is possible if you are willing to initiate.</p>
              <p>The honest truth is that solo MSC works best for people who are naturally outgoing or who have cruised enough to know how to fall into conversations with strangers. If you are more introverted or it is your first solo cruise, NCL's structured social environment gives you more support. If you are comfortable putting yourself out there, MSC's international atmosphere is genuinely fun.</p>
            </Accordion>

            <Accordion title="Dining Solo on MSC">
              <p className="mb-3">MSC's traditional assigned dining times in the main dining room can actually work well for solo travelers because you may be seated at a shared table with other guests over multiple nights. Over the course of a sailing you can end up with a regular dinner crew without having to try very hard.</p>
              <p>The buffet and casual dining spaces are also easy to navigate solo. MSC's international atmosphere means the ship is full of people from different backgrounds and the casual dining areas tend to have a social energy that makes it easy to strike up a conversation.</p>
            </Accordion>

            <Accordion title="Is MSC Right for You as a Solo Traveler?">
              <p className="mb-3">If you are outgoing, comfortable meeting people on your own terms, and excited by an international cruise atmosphere, MSC is a solid solo option. The value is strong, the ships are beautiful, and the experience is genuinely good.</p>
              <p className="mb-3">If you want a built-in solo community with structured social events and a hosted program from day one, NCL is a better fit. That is not a knock on MSC, it is just an honest comparison based on what each line actually offers.</p>
              <p>Tell me more about what you are looking for and I can help you figure out which line makes the most sense for your solo sailing.</p>
            </Accordion>
          </section>
        )}

        {/* MSC YACHT CLUB */}
        {activeTab === "yacht" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>MSC Yacht Club</h2>
            <p className="text-gray-500 mb-8">The MSC Yacht Club is MSC's ship-within-a-ship luxury experience and it is one of the best premium cruise products at sea. If you want the quality of a luxury cruise line without paying full luxury cruise prices, the Yacht Club deserves a serious look.</p>

            <Accordion title="What Is the MSC Yacht Club?">
              <p className="mb-3">The MSC Yacht Club is a private gated enclave on MSC ships, typically located at the top forward section of the vessel. It has its own restaurant, lounge, sun deck, pool, and butler service, and it operates completely separately from the rest of the ship.</p>
              <p>You can access all the main ship amenities whenever you want but you also have a private retreat to come back to. The Yacht Club has its own keycard entry and the atmosphere inside is calm, exclusive, and genuinely elevated. It is a completely different experience from the main ship while still giving you the entertainment, ports, and itinerary of the larger vessel.</p>
            </Accordion>

            <Accordion title="What Is Included in the Yacht Club?">
              <p className="mb-3">The Yacht Club includes a significant bundle of amenities as part of the cabin rate:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>24-hour butler service</strong> for your cabin handling everything from unpacking to breakfast in bed to booking reservations throughout the ship</li>
                <li><strong>Private Yacht Club restaurant</strong> open for breakfast, lunch, and dinner with a dedicated menu and table service. No reservations needed, no waiting</li>
                <li><strong>Private Yacht Club lounge and bar</strong> with complimentary drinks available throughout the day</li>
                <li><strong>Private sun deck and pool</strong> exclusively for Yacht Club guests with attentive pool service</li>
                <li><strong>Premium drinks package</strong> included in most Yacht Club bookings covering alcoholic and non-alcoholic beverages throughout the ship</li>
                <li><strong>Specialty dining package</strong> included covering a set number of specialty restaurant visits</li>
                <li><strong>Priority embarkation and disembarkation</strong> with a dedicated check-in area and escort to your cabin</li>
                <li><strong>Welcome bottle of champagne</strong> and in-cabin amenities</li>
                <li><strong>Exclusive shore excursion access</strong> and priority tender boarding at certain ports</li>
              </ul>
            </Accordion>

            <Accordion title="The Yacht Club Restaurant">
              <p className="mb-3">The Yacht Club restaurant is where the culinary experience really separates itself from the rest of the ship. It is a full-service, white-tablecloth restaurant serving three meals a day exclusively for Yacht Club guests. The menu is more refined than the main dining rooms with fresh ingredients, a rotating daily menu, and a wine program that takes itself seriously.</p>
              <p>The team that works the Yacht Club restaurant gets to know you over the course of the sailing. By the second or third day they remember how you take your coffee, which table you prefer, and what you enjoyed the night before. It is the kind of personalized service that makes the whole experience feel genuinely special.</p>
            </Accordion>

            <Accordion title="Butler Service in the Yacht Club">
              <p className="mb-3">Every Yacht Club cabin comes with a dedicated butler. Your butler is your main point of contact for everything that happens in your cabin and throughout the ship. They handle unpacking, morning coffee and breakfast delivery, afternoon snacks, specialty restaurant reservations, spa bookings, shore excursion arrangements, and anything else that comes up.</p>
              <p>MSC's Yacht Club butlers have a reputation for being among the best at sea. The level of attentiveness and genuine care for the guest experience is a consistent highlight in reviews from Yacht Club passengers.</p>
            </Accordion>

            <Accordion title="The Private Sun Deck and Pool">
              <p className="mb-3">The Yacht Club sun deck is a private outdoor space with its own pool, hot tubs, and lounge chairs exclusively for Yacht Club guests. On a large MSC ship where the main pool deck can get very busy, having a quiet private outdoor space with attentive service is one of the most practical and enjoyable perks of the Yacht Club.</p>
              <p>The views from the Yacht Club deck tend to be excellent since it is typically positioned at the forward top of the ship. On sea days this becomes a genuinely relaxing retreat that feels more like a private resort than a cruise ship.</p>
            </Accordion>

            <Accordion title="MSC Yacht Club vs MSC Standard — Is the Upgrade Worth It?">
              <p className="mb-3">The Yacht Club costs more than a standard MSC cabin, sometimes significantly more. Whether it is worth the upgrade depends on what you value and how you spend your time at sea.</p>
              <p className="mb-3">Factor in what comes included: the premium drinks package, specialty dining credits, and butler service. When you price those out separately against a standard cabin with the same add-ons, the actual cost difference often narrows considerably. You are paying a premium but you are also getting a premium product that competes directly with standalone luxury cruise lines at a fraction of the price.</p>
              <p>Fill out my form and I can run the comparison for your specific sailing and show you exactly what the Yacht Club upgrade actually costs versus what it includes. For the right traveler it is one of the best value propositions in cruising.</p>
            </Accordion>

            <Accordion title="How Does the Yacht Club Compare to NCL's The Haven?">
              <p className="mb-3">Both the MSC Yacht Club and NCL's The Haven offer a ship-within-a-ship luxury experience with private restaurants, butler service, and exclusive deck areas. They are genuinely comparable products and both are excellent.</p>
              <p className="mb-3">The Yacht Club tends to feel more European and refined in its design and service approach. The Haven tends to have more entertainment amenities available given NCL's investment in onboard activities. The food quality in both is high and the butler service in both is excellent.</p>
              <p>The right choice between them usually comes down to itinerary and which ship fits where you want to go. I can help you compare both options for your specific travel dates and destinations.</p>
            </Accordion>
          </section>
        )}

        {/* WHAT'S INCLUDED */}
        {activeTab === "included" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>What's Included in Your Fare</h2>
            <p className="text-gray-500 mb-8">MSC's base fare covers the essentials well. Here is a clear breakdown of what comes with your cruise and what costs extra so you can plan your budget before you board.</p>

            <Accordion title="What Is Included">
              <ul className="list-disc pl-5 space-y-2">
                <li>Main dining room meals (breakfast, lunch, dinner)</li>
                <li>The Marketplace buffet all day</li>
                <li>Pizza and casual dining venues</li>
                <li>Basic non-alcoholic beverages with meals (water, coffee, tea)</li>
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
                <li><strong>Specialty dining</strong> restaurants like Eataly, Butcher's Cut, and Kaito</li>
                <li><strong>Gratuities</strong> charged as a daily service charge per person</li>
                <li><strong>Shore excursions</strong> booked through MSC or independently</li>
                <li><strong>Spa treatments</strong> and thermal suite access</li>
                <li><strong>WiFi</strong> packages</li>
                <li><strong>Room service</strong> (small fee)</li>
                <li><strong>Specialty coffees</strong> like lattes and cappuccinos</li>
                <li><strong>Casino play</strong></li>
              </ul>
            </Accordion>

            <Accordion title="MSC Drinks Packages">
              <p className="mb-3">MSC offers several drink package options ranging from non-alcoholic packages to premium all-inclusive packages covering spirits, wine, cocktails, and specialty coffee. The packages are priced per person per day and need to be added before or at the start of your sailing.</p>
              <p className="mb-3">For most people who enjoy drinks throughout the day, the math works out in favor of a package. I can walk through the options and pricing for your specific sailing so you know exactly what makes sense before you commit.</p>
              <p>One important note: gratuity is added on top of the drinks package value even when the package is discounted. Factor that in when you are comparing costs.</p>
            </Accordion>

            <Accordion title="Gratuities on MSC">
              <p className="mb-3">MSC charges a daily service charge per person that covers gratuities for your cabin steward and dining staff. The amount varies by region and cabin category.</p>
              <p>Prepaying gratuities before your sailing locks in the rate and means you board knowing your total cost without anything unexpected on your final bill. I always recommend prepaying when we lock in your booking.</p>
            </Accordion>

            <Accordion title="Ocean Cay MSC Marine Reserve">
              <p className="mb-3">Ocean Cay is MSC's private island in the Bahamas and it is one of the best private island experiences in cruising. Eric has visited Ocean Cay on his Meraviglia sailings out of New York and it consistently stands out as one of the best port days on those itineraries.</p>
              <p className="mb-3">The island was built with environmental sustainability as a core principle. MSC restored a former industrial site into a marine reserve with natural beach areas, clear water, and genuine ecological care. It does not feel like a manufactured tourist attraction. It feels like an actual island.</p>
              <p>Beach access is included with your cruise fare. Upgraded beach club areas, water sports rentals, and food beyond the included BBQ lunch are available for an additional cost. Go early to get the best beach spots and plan to stay as long as the port day allows.</p>
            </Accordion>
          </section>
        )}

        {/* SHORE EXCURSIONS */}
        {activeTab === "excursions" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>Shore Excursions</h2>
            <p className="text-gray-500 mb-8">MSC offers shore excursions through their onboard program that you can book before your sailing through the MSC website or onboard at the excursion desk. Here is a look at some of the ports Eric has personally visited on MSC sailings.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: MSC_ACCENT, borderLeft: `4px solid ${MSC_NAVY}` }}>
              <p className="font-semibold mb-1">Two things to know before you book excursions:</p>
              <p className="mb-2">Book before you sail. Pre-cruise pricing is lower and popular excursions sell out. Once you are onboard the best options are often gone or more expensive.</p>
              <p>Book through the ship. If your MSC excursion runs long, the ship waits for you. If you are on your own and running late, the ship will not. I can help you sort through the options for your specific ports before you board.</p>
            </div>

            {[
              {
                port: "Ocean Cay MSC Marine Reserve, Bahamas",
                eric: true,
                about: "MSC's private island and one of the best days you will have at sea. Eric has been here on the Meraviglia and it lives up to the reputation. The water is beautiful, the beach is well maintained, and the island has a genuine natural feel that the best private islands pull off.",
                excursions: ["Private Beach Club Upgrade", "Snorkeling in the Marine Reserve", "Kayaking and Paddleboarding", "Lighthouse Tower Tour", "Sunset Lighthouse Experience (evening sailings)", "Island BBQ Lunch (included)"]
              },
              {
                port: "Nassau, Bahamas",
                eric: true,
                about: "A classic Caribbean port with beaches, history, and shopping within easy reach. Eric has visited Nassau on MSC Meraviglia sailings from New York. The Atlantis resort beach experience is the most popular excursion and worth it if beach time is your priority.",
                excursions: ["Atlantis Beach Day", "Blue Lagoon Island Beach and Snorkel", "Nassau Walking Tour and History", "Swim with Dolphins", "Atlantis Water Park Access"]
              },
              {
                port: "Belize City, Belize",
                eric: true,
                about: "Eric sailed into Belize on the MSC Armonia. Belize is a tender port meaning you take a small boat from the ship to shore. The payoff is access to one of the most diverse ecosystems in Central America including the Belize Barrier Reef, Mayan ruins, and rainforest.",
                excursions: ["Cave Tubing through the Rainforest", "Belize Barrier Reef Snorkel", "Altun Ha Mayan Ruins Tour", "Zip Lining through the Jungle", "River Kayaking and Wildlife Tour"]
              },
              {
                port: "Costa Maya, Mexico",
                eric: true,
                about: "Eric visited Costa Maya on the MSC Armonia. The port area itself is purpose-built for tourists but get beyond it and the Yucatan opens up with Mayan ruins, cenotes, and the Bacalar Lagoon. One of the most underrated port stops in the Caribbean for people who venture out.",
                excursions: ["Chacchoben Mayan Ruins", "Bacalar Lagoon Day Trip", "ATVs and Cenote Swim", "Kayaking in Lagoons", "Fishing in the Caribbean"]
              },
              {
                port: "Roatan, Honduras",
                eric: true,
                about: "One of Eric's favorite port stops on the Armonia itinerary. Roatan is a Bay Island off the coast of Honduras with incredible diving and snorkeling, beautiful beaches, and a laid-back vibe that feels genuinely off the beaten path compared to the more commercial Caribbean ports.",
                excursions: ["Snorkeling at the Barrier Reef", "Scuba Diving for Certified Divers", "Monkey and Sloth Sanctuary Visit", "West Bay Beach Day", "Zip Line and Beach Combo"]
              },
              {
                port: "Cozumel, Mexico",
                eric: true,
                about: "Eric has visited Cozumel on both the Meraviglia and the Armonia itineraries. One of the top snorkeling and diving destinations in the world. The Mesoamerican Barrier Reef runs right through here and even a basic snorkel excursion shows you why people come back to Cozumel over and over.",
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
            <h2 className="text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>Trip Insurance</h2>
            <p className="text-gray-500 mb-8">I always recommend trip insurance when booking a cruise. Sailing internationally or even domestically puts you in situations where things can go sideways in ways that have nothing to do with the cruise line. This is the coverage that makes sure a bad moment does not turn into a financial disaster.</p>

            <div className="p-5 rounded-xl mb-6 text-white text-sm" style={{ background: MSC_NAVY }}>
              <strong>Lock it in at booking.</strong> Trip insurance is cheaper when you buy it at the time of your initial deposit. The longer you wait, the more it costs and the fewer options you have. Some pre-existing condition coverage only applies within a set window of your first payment. Do not wait on this one.
            </div>

            <Accordion title="What If You Get Sick Before You Leave?">
              <p className="mb-3">You have been planning for months. The cruise is booked and two days before you leave you end up in urgent care with something serious. Without insurance you lose every dollar because the cancellation deadline has passed.</p>
              <p>With trip insurance and a covered illness, you cancel and get reimbursed. You reschedule when you feel better and nothing is lost.</p>
            </Accordion>

            <Accordion title="What If a Family Member Has an Emergency?">
              <p>A parent ends up in the hospital the night before you leave. Or a family situation changes everything. Trip insurance covers cancellation for family medical emergencies so you can be where you need to be without the financial hit on top of everything else.</p>
            </Accordion>

            <Accordion title="What If You Get Sick or Hurt at Sea or Overseas?">
              <p className="mb-3">Your regular health insurance often does not cover you outside the United States. A medical evacuation from a ship or from a port like Roatan or Belize City can cost tens of thousands of dollars without coverage.</p>
              <p>Trip insurance with medical and evacuation coverage means you get the care you need and the transport to get home safely regardless of where you are when something happens.</p>
            </Accordion>

            <Accordion title="What If Your Flight Gets Cancelled?">
              <p className="mb-3">You are flying to Miami or New York for your MSC sailing and your flight gets cancelled. Now you are scrambling for last-minute options and a hotel just to make the ship the next day.</p>
              <p>Trip delay coverage reimburses you for unexpected overnight stays, meals, and rebooking costs when your travel gets disrupted.</p>
            </Accordion>

            <Accordion title="What If Your Luggage Gets Lost?">
              <p>Airlines lose bags. If your luggage does not arrive and you are boarding a ship in Miami headed to the Bahamas, baggage delay coverage helps cover essentials while your stuff catches up or gets replaced.</p>
            </Accordion>

            <Accordion title="Why Buy It at Booking?">
              <p className="mb-3">Two reasons. First, it is cheaper. Insurance is priced based on risk and the closer you are to your departure the higher the risk. Buying at booking locks in the best rate.</p>
              <p>Second, pre-existing condition coverage. Most policies include a waiver for pre-existing conditions if you buy within 14 to 21 days of your initial deposit. Wait longer and that coverage disappears. Lock it in early.</p>
            </Accordion>
          </section>
        )}

        {/* ERIC'S TIPS */}
        {activeTab === "tips" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: MSC_DARK }}>Eric's Tips for Your MSC Sailing</h2>
            <p className="text-gray-500 mb-8">I have sailed MSC four times including the Meraviglia three times and the Armonia once. Here is what I actually tell people before they board.</p>

            <Accordion title="Book Your Drinks Package Before You Sail">
              <p>MSC's drink packages are almost always cheaper when you add them before your sailing rather than onboard. Lock it in early, figure out which tier makes sense for your drinking habits, and board the ship knowing that part of your budget is already handled.</p>
            </Accordion>

            <Accordion title="Get to Ocean Cay Early">
              <p className="mb-3">If your itinerary includes Ocean Cay, get on one of the first tender or gangway opportunities to the island. The beach fills up throughout the morning and the best spots go to the people who get there first.</p>
              <p>Plan to spend the full day on the island. It is one of those port stops where people who left early always wish they had stayed longer.</p>
            </Accordion>

            <Accordion title="Try Eataly If Your Ship Has It">
              <p>If you are on the Meraviglia or another ship that carries the Eataly concept, make a reservation and go. It is one of the genuinely special specialty dining experiences at sea and one of the things that sets MSC apart from other lines. Do not skip it to save money on the upcharge. It is worth it.</p>
            </Accordion>

            <Accordion title="Prepay Your Gratuities">
              <p>Add your gratuities at booking. It is the same amount either way but paying upfront means you board knowing your complete cost and you avoid seeing it on your final bill. One less thing to think about when you are supposed to be relaxing.</p>
            </Accordion>

            <Accordion title="Book Excursions Before You Sail">
              <p className="mb-3">Pre-cruise excursion pricing is lower than onboard pricing. More importantly, the excursions that fill up first tend to be the best ones. Belize cave tubing, Roatan snorkeling, and the Cozumel reef snorkel all book up fast.</p>
              <p>I have been to all four of the ports on the Armonia itinerary and the MSC Bahamas ports on Meraviglia. Reach out and I can give you real recommendations for each stop based on what I actually experienced.</p>
            </Accordion>

            <Accordion title="The Indoor Promenade on Meraviglia Is Worth a Slow Walk">
              <p>The LED sky ceiling on the Meraviglia's indoor promenade changes throughout the day and runs different shows in the evening. It is genuinely stunning and one of the most visually impressive spaces on any ship I have sailed. Walk it slowly, especially at night, and take it in. Most people rush through it without stopping to look up.</p>
            </Accordion>

            <Accordion title="Roatan Is a Hidden Gem — Do Not Miss It">
              <p className="mb-3">If your itinerary includes Roatan, Honduras, treat it as a priority port day. It is less commercialized than Cozumel or Nassau, the reef snorkeling is outstanding, and the island has a genuinely laid-back character that feels different from the more polished Caribbean ports.</p>
              <p>I sailed into Roatan on the Armonia and it stood out as one of the most memorable port stops on that itinerary. Do not spend the day on the ship for this one.</p>
            </Accordion>

            <Accordion title="Get Trip Insurance and Get It Early">
              <p>Sailing internationally through Central America or the Bahamas puts you far from home. Medical situations at sea, cancelled flights, lost luggage, and family emergencies happen. Lock in insurance at booking when it is cheapest and you have the most coverage. I flag this for every client upfront so there are no surprises.</p>
            </Accordion>
          </section>
        )}

        {/* CTA */}
        <div className="mt-14 rounded-2xl p-8 text-center text-white" style={{ background: `linear-gradient(135deg, ${MSC_DARK}, ${MSC_NAVY})` }}>
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: MSC_GOLD }}>Ready to Sail MSC</p>
          <h3 className="text-2xl font-bold mb-3">Let's Find Your Perfect Sailing</h3>
          <p className="mb-6 max-w-lg mx-auto" style={{ color: "#CBD5E1" }}>
            I have sailed MSC four times and I know this line well. I book MSC on your behalf so you get the expertise, the right cabin, and someone actually paying attention to the details. Fill out my form and I will be in touch within 24 hours.
          </p>
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-bold text-base transition hover:opacity-90"
            style={{ background: MSC_GOLD, color: MSC_DARK }}
          >
            Start Planning with Eric
          </a>
        </div>

      </div>
    </div>
  );
}
