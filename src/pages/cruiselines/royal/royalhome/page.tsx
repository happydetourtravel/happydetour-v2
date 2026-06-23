import { useState } from "react";

const RC_NAVY = "#00205B";
const RC_BLUE = "#0057B8";
const RC_GOLD = "#C9A84C";
const RC_LIGHT = "#F0F4FA";
const RC_DARK = "#001040";
const RC_ACCENT = "#E8F0FF";

const FORM_LINK = "https://forgehq.app/f/?t=7ro7s57c";

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-blue-100 rounded-xl overflow-hidden mb-3 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-gray-800 hover:bg-blue-50 transition-colors gap-3"
        style={{ background: open ? RC_ACCENT : "white" }}
      >
        <span className="text-sm md:text-base leading-snug">{title}</span>
        <span
          className="text-xl transition-transform duration-200 flex-shrink-0"
          style={{ color: RC_NAVY, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-4 py-4 bg-white border-t border-blue-100 text-gray-700 text-sm md:text-base leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

const TABS = [
  { id: "about", label: "About Royal" },
  { id: "ships", label: "The Ships" },
  { id: "dining", label: "Dining" },
  { id: "unique", label: "What Makes Royal Different" },
  { id: "solo", label: "Solo Travel" },
  { id: "cococay", label: "Perfect Day at CocoCay" },
  { id: "loyalty", label: "Crown & Anchor Society" },
  { id: "excursions", label: "Shore Excursions" },
  { id: "insurance", label: "Trip Insurance" },
  { id: "tips", label: "Eric's Tips" },
];

export default function RoyalCaribbeanPage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen" style={{ background: RC_LIGHT, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Hero */}
      <div
        className="relative py-12 md:py-24 px-4 text-center text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${RC_DARK} 0%, ${RC_NAVY} 50%, ${RC_BLUE} 100%)` }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 30%, white 1px, transparent 1px)",
            backgroundSize: "55px 55px"
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">Royal Caribbean</h1>
          <p className="text-base md:text-xl mb-4 leading-relaxed" style={{ color: "#CBD5E1" }}>
            Big ships. Big fun. Royal Caribbean invented the idea of the cruise ship as a destination and they are still the best at it. Rock climbing walls, surf simulators, Broadway shows, Central Park at sea. If someone wants everything, this is where you go.
          </p>
          <p className="text-xs md:text-base" style={{ color: "#94A3B8" }}>
            Eric has sailed Royal Caribbean four times on Symphony of the Seas, Oasis of the Seas, Anthem of the Seas, and Majesty of the Seas. He is a Platinum Crown and Anchor Society member.
          </p>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 shadow-md overflow-x-auto scrollbar-none" style={{ background: RC_DARK }}>
        <div className="flex justify-start min-w-max px-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-3 py-3 text-xs font-semibold whitespace-nowrap transition-all border-b-2 flex-shrink-0"
              style={{
                color: activeTab === tab.id ? RC_GOLD : "#94A3B8",
                borderBottomColor: activeTab === tab.id ? RC_GOLD : "transparent",
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

        {/* ABOUT ROYAL */}
        {activeTab === "about" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: RC_DARK }}>About Royal Caribbean</h2>
            <p className="text-sm text-gray-500 mb-6">Royal Caribbean is the largest cruise line in the world and the one that changed what people thought a cruise ship could be. They kept building bigger, kept adding more, and kept raising the bar on what you can do at sea. Eric has sailed Royal four times and it remains one of his favorite lines.</p>

            <Accordion title="Who Is Royal Caribbean?">
              <p className="mb-3">Royal Caribbean International is a Miami-based cruise line founded in 1969. They were not the first cruise line but they became the most ambitious one. When other lines were building comfortable ships, Royal Caribbean was asking what else a ship could be.</p>
              <p className="mb-3">Today Royal Caribbean operates some of the largest ships ever built, including the Icon of the Seas which launched in 2024 and became the largest cruise ship in the world. They are a line built on the philosophy that more is more, executed at a level nobody else has matched.</p>
              <p className="text-sm" style={{ color: "#6B7280" }}>
                Royal Caribbean is headquartered in Miami and operates one of the largest and most innovative cruise fleets in the world.{" "}
                <a
                  href="https://www.royalcaribbean.com/cruise-ships"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: RC_NAVY, textDecoration: "underline" }}
                >
                  Learn more about the Royal Caribbean fleet at royalcaribbean.com
                </a>.
              </p>
            </Accordion>

            <Accordion title="What Makes Royal Caribbean Different">
              <p className="mb-3">The honest answer is scale and ambition. Royal Caribbean builds ships that other lines would not attempt. Rock climbing walls, surf simulators, sky diving simulators, ice skating rinks, Central Park with real trees growing eight decks up, a Boardwalk with a carousel. These are not gimmicks. They are genuinely fun.</p>
              <p className="mb-3">The size of the ships also means the dining program, entertainment lineup, and pool areas are bigger and more varied than most lines can offer. On an Oasis class ship you can go a week without doing the same thing twice.</p>
              <p>If you want a quiet, intimate cruise experience, Royal Caribbean is probably not your line. But if you want maximum variety, maximum entertainment, and a ship that feels like an event, nobody does it better.</p>
            </Accordion>

            <Accordion title="Eric's Royal Caribbean Experience">
              <p className="mb-3">I have sailed Royal Caribbean four times on four different ships. The Majesty of the Seas in 2017 for a 4-night Bahamas cruise. The Oasis of the Seas in 2018 for a 7-night Western Caribbean. The Anthem of the Seas in 2018 for a 5-night Bermuda cruise. And the Symphony of the Seas in 2019 for a 7-night Western Caribbean including Perfect Day at CocoCay.</p>
              <p className="mb-3">I am a Platinum member of the Crown and Anchor Society loyalty program with 30 cruise points, which means I have earned real perks and I know firsthand how the loyalty program works.</p>
              <p>CocoCay on the Symphony sailing was genuinely one of the best days I have had on any cruise. The water park, the beach, the lagoon. It is the best private island experience I have come across in all my years of cruising.</p>
            </Accordion>

            <Accordion title="Who Is Royal Caribbean Best For?">
              <ul className="list-disc pl-5 space-y-2">
                <li>Travelers who want the most activities and entertainment options at sea</li>
                <li>Families with kids who want a ship that keeps everyone busy</li>
                <li>First-time cruisers who want to be blown away by the experience</li>
                <li>Anyone who wants to visit Perfect Day at CocoCay, which is exclusively a Royal Caribbean destination</li>
                <li>Solo travelers who are outgoing and want a big social environment</li>
                <li>Groups of friends who want enough variety that everyone finds something they love</li>
              </ul>
            </Accordion>
          </section>
        )}

        {/* THE SHIPS */}
        {activeTab === "ships" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: RC_DARK }}>The Royal Caribbean Fleet</h2>
            <p className="text-sm text-gray-500 mb-6">Royal Caribbean has one of the most iconic fleets at sea organized into ship classes that each represent a different generation of ambition.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: RC_ACCENT, borderLeft: `4px solid ${RC_NAVY}` }}>
              <strong>Eric's Note:</strong> I have personally sailed on Symphony of the Seas, Oasis of the Seas, Anthem of the Seas, and Majesty of the Seas. If you want a real firsthand take on any of those ships, just ask me.
            </div>

            <h3 className="text-base font-bold mb-3 mt-6" style={{ color: RC_NAVY }}>Icon Class — The World's Largest Ships</h3>
            {[
              {
                name: "Icon of the Seas",
                built: "2024",
                capacity: "7,600",
                notes: "The largest cruise ship ever built when she launched in 2024. Icon of the Seas has eight neighborhoods, six water slides, four pools, the largest waterpark at sea, and a lineup of dining and entertainment that would take multiple sailings to fully experience. Sails Caribbean from Miami.",
                highlights: ["World's largest cruise ship at launch", "Eight distinct neighborhoods", "Category 6 waterpark", "Perfect Day at CocoCay itineraries", "Miami homeport"]
              },
              {
                name: "Star of the Seas",
                built: "2025",
                capacity: "7,600",
                notes: "Sister ship to Icon of the Seas and the second Icon class vessel. Star of the Seas sails from Port Canaveral giving Florida-based travelers access to the Icon class experience from Orlando.",
                highlights: ["Icon class next-gen design", "Port Canaveral homeport", "Perfect Day at CocoCay itineraries", "Six waterslides and waterpark"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: RC_NAVY }}>Oasis Class — Eric's Ships</h3>
            {[
              {
                name: "Wonder of the Seas",
                built: "2022",
                capacity: "6,988",
                notes: "The newest Oasis class ship. Wonder of the Seas adds a Suite Neighborhood as a new eighth neighborhood alongside the classic Oasis class neighborhoods. Sails Caribbean from Port Canaveral and Port Everglades.",
                highlights: ["Eight neighborhoods including Suite Neighborhood", "Central Park with real trees", "The Boardwalk with carousel", "FlowRider surf simulator", "AquaTheater"]
              },
              {
                name: "Symphony of the Seas",
                built: "2018",
                capacity: "6,680",
                notes: "Eric sailed on Symphony of the Seas on a 7-night Western Caribbean cruise in 2019, including a stop at Perfect Day at CocoCay. The CocoCay stop was one of the best days Eric has had at sea.",
                highlights: ["Eric sailed on Symphony in 2019", "All Oasis class neighborhoods", "FlowRider surf simulator", "Central Park and Boardwalk", "Perfect Day at CocoCay itineraries", "Miami homeport"]
              },
              {
                name: "Harmony of the Seas",
                built: "2016",
                capacity: "6,422",
                notes: "The third Oasis class ship and one of the most popular in the fleet. Harmony sails from Port Canaveral with a particularly strong entertainment lineup.",
                highlights: ["All Oasis class features", "Grease the musical", "Ultimate Abyss dry slide", "FlowRider surf simulator", "Port Canaveral homeport"]
              },
              {
                name: "Allure of the Seas",
                built: "2010",
                capacity: "6,318",
                notes: "The second Oasis class ship, recently refurbished, sailing from Galveston and giving Gulf Coast travelers access to the full Oasis class experience.",
                highlights: ["Recently refurbished", "Galveston homeport", "All classic Oasis neighborhoods", "Central Park and Boardwalk", "FlowRider surf simulator"]
              },
              {
                name: "Oasis of the Seas",
                built: "2009",
                capacity: "6,296",
                notes: "Eric sailed on the Oasis of the Seas in 2018 for a 7-night Western Caribbean cruise. The original Oasis class ship that redefined what a cruise ship could be. Recently refurbished and still delivering the full Oasis experience.",
                highlights: ["Eric sailed on Oasis in 2018", "The original game-changing Oasis class ship", "Seven neighborhoods", "Central Park and Boardwalk", "Recently refurbished"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: RC_NAVY }}>Quantum Class — Eric's Ship</h3>
            {[
              {
                name: "Anthem of the Seas",
                built: "2015",
                capacity: "4,905",
                notes: "Eric sailed on Anthem of the Seas in 2018 for a 5-night Bermuda cruise. The Anthem has the North Star observation capsule that lifts you 300 feet above sea level, RipCord by iFLY skydiving simulator, and a bumper car arena.",
                highlights: ["Eric sailed on Anthem in 2018 to Bermuda", "North Star observation capsule", "RipCord by iFLY skydiving simulator", "SeaPlex bumper cars and roller skating", "Cape Liberty NJ homeport"]
              },
              {
                name: "Quantum of the Seas",
                built: "2014",
                capacity: "4,905",
                notes: "The original Quantum class ship. Quantum sails from Singapore and is one of Royal Caribbean's premier Asia-Pacific vessels.",
                highlights: ["North Star observation capsule", "RipCord by iFLY", "SeaPlex entertainment complex", "Asia-Pacific itineraries"]
              },
              {
                name: "Ovation of the Seas",
                built: "2016",
                capacity: "4,905",
                notes: "Quantum class ship sailing from Australia and Asia with itineraries including Australia, New Zealand, and Asia.",
                highlights: ["North Star observation capsule", "RipCord by iFLY", "SeaPlex entertainment complex", "Australia and Asia itineraries"]
              },
              {
                name: "Odyssey of the Seas",
                built: "2021",
                capacity: "4,246",
                notes: "The newest Quantum Ultra class ship sailing from Port Everglades with all the Quantum class innovations and updated design elements.",
                highlights: ["North Star observation capsule", "RipCord by iFLY", "SeaPlex entertainment", "Port Everglades homeport", "Caribbean itineraries"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: RC_NAVY }}>Freedom Class</h3>
            {[
              {
                name: "Freedom of the Seas",
                built: "2006",
                capacity: "4,375",
                notes: "The original Freedom class ship and the first vessel to break the 100,000 gross ton barrier. Sails from Miami and Port Canaveral with a FlowRider, rock climbing wall, and solid dining program.",
                highlights: ["FlowRider surf simulator", "Rock climbing wall", "Miami and Port Canaveral homeports", "Caribbean itineraries"]
              },
              {
                name: "Liberty of the Seas",
                built: "2007",
                capacity: "4,375",
                notes: "Sister ship to Freedom of the Seas sailing from Galveston. A great option for Gulf Coast travelers who want the Freedom class experience.",
                highlights: ["FlowRider surf simulator", "Rock climbing wall", "Galveston homeport", "Caribbean itineraries"]
              },
              {
                name: "Independence of the Seas",
                built: "2008",
                capacity: "4,375",
                notes: "Freedom class ship that sails from Port Everglades. Recently updated and continues to deliver the classic Freedom class experience from South Florida.",
                highlights: ["FlowRider surf simulator", "Rock climbing wall", "Port Everglades homeport", "Caribbean itineraries"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: RC_NAVY }}>Voyager Class</h3>
            {[
              {
                name: "Navigator of the Seas",
                built: "1999",
                capacity: "3,807",
                notes: "Recently refurbished with Perfect Day at CocoCay stops. Navigator sails from Miami and remains a popular choice for short Caribbean getaways.",
                highlights: ["Recently refurbished", "Miami homeport", "Perfect Day at CocoCay itineraries", "Rock climbing wall"]
              },
              {
                name: "Mariner of the Seas",
                built: "2003",
                capacity: "3,807",
                notes: "Refurbished Voyager class ship sailing from Port Canaveral with updated amenities from her 2018 refurbishment.",
                highlights: ["Refurbished 2018", "Port Canaveral homeport", "FlowRider surf simulator", "Rock climbing wall"]
              },
              {
                name: "Adventure of the Seas",
                built: "2001",
                capacity: "3,807",
                notes: "Voyager class ship sailing Caribbean itineraries with a rock climbing wall, FlowRider, and solid dining and entertainment.",
                highlights: ["Rock climbing wall", "FlowRider surf simulator", "Caribbean itineraries"]
              },
              {
                name: "Explorer of the Seas",
                built: "2000",
                capacity: "3,807",
                notes: "Voyager class ship sailing from Cape Liberty, New Jersey. A great option for Northeast travelers who want Royal Caribbean without flying to Florida.",
                highlights: ["Cape Liberty NJ homeport", "Rock climbing wall", "Caribbean and Bermuda itineraries"]
              },
              {
                name: "Voyager of the Seas",
                built: "1999",
                capacity: "3,807",
                notes: "The original Voyager class ship that started it all. Now sails Asia-Pacific itineraries.",
                highlights: ["The original Voyager class ship", "Asia-Pacific itineraries", "Rock climbing wall"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: RC_NAVY }}>Vision and Radiance Class</h3>
            {[
              {
                name: "Brilliance of the Seas",
                built: "2002",
                capacity: "2,501",
                notes: "Radiance class ship with a beautiful glass-heavy design. Sails European and transatlantic itineraries with a more intimate feel than the mega ships.",
                highlights: ["Glass-forward ocean views", "European itineraries", "More intimate mid-size feel"]
              },
              {
                name: "Serenade of the Seas",
                built: "2003",
                capacity: "2,501",
                notes: "Radiance class ship sailing Alaska, Caribbean, and transatlantic routes. A well-rounded mid-size option.",
                highlights: ["Alaska itineraries", "Caribbean and transatlantic", "Glass-forward design"]
              },
              {
                name: "Jewel of the Seas",
                built: "2004",
                capacity: "2,501",
                notes: "Radiance class ship sailing European and transatlantic itineraries bringing classic mid-size Royal Caribbean to international destinations.",
                highlights: ["European itineraries", "Transatlantic sailings", "Mid-size comfortable ship"]
              },
              {
                name: "Vision of the Seas",
                built: "1998",
                capacity: "2,435",
                notes: "Vision class ship sailing Caribbean itineraries. A classic smaller ship experience.",
                highlights: ["Smaller classic experience", "Caribbean itineraries", "Good for budget-conscious travelers"]
              },
              {
                name: "Enchantment of the Seas",
                built: "1997",
                capacity: "2,446",
                notes: "One of Royal Caribbean's classic ships sailing short Caribbean getaways. A great entry point for first-time cruisers who want a manageable ship size.",
                highlights: ["Short Caribbean itineraries", "Good for first-time cruisers", "Classic smaller ship feel"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <div className="mt-8 p-4 rounded-xl text-white text-sm" style={{ background: RC_NAVY }}>
              <strong>Not sure which ship is right for you?</strong> I have sailed four Royal Caribbean ships personally. Tell me where you want to go and what kind of experience you are after and I will point you in the right direction.
            </div>
          </section>
        )}

        {/* DINING */}
        {activeTab === "dining" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Dining Onboard</h2>
            <p className="text-sm text-gray-500 mb-6">Royal Caribbean's dining program has grown significantly over the years. The bigger the ship, the more options you have.</p>

            <Accordion title="Main Dining Room (Included)">
              <p className="mb-3">Royal Caribbean's main dining rooms are traditional sit-down restaurants with both My Time Dining (flexible times) and set seating options. The menus rotate nightly with a mix of classic dishes and rotating specials.</p>
              <p>On the larger Oasis and Icon class ships the main dining rooms are impressive spaces spanning multiple decks. The food quality has improved noticeably in recent years.</p>
            </Accordion>

            <Accordion title="Windjammer Buffet (Included)">
              <p className="mb-3">The Windjammer Marketplace is Royal Caribbean's buffet and one of the best in the industry. Available for breakfast, lunch, and dinner with a wide variety of options, international stations, and a carving station at dinner.</p>
              <p>On the mega ships the Windjammer is enormous and rarely feels crowded even at peak times.</p>
            </Accordion>

            <Accordion title="Specialty Dining — Giovanni's and More">
              <p className="mb-3">Royal Caribbean's specialty dining program includes Giovanni's Table (Italian trattoria), Chops Grille steakhouse, Izumi Japanese hibachi and sushi, Playmakers Sports Bar, Hooked seafood, and 150 Central Park on Oasis class ships.</p>
              <p>The lineup varies significantly by ship class so check what is available on your specific sailing.</p>
            </Accordion>

            <Accordion title="150 Central Park (Oasis Class)">
              <p className="mb-3">Exclusive to Oasis class ships and one of the most unique dining experiences at sea. 150 Central Park is a fine dining restaurant overlooking the Central Park neighborhood, eight decks above the waterline surrounded by real trees and plants.</p>
              <p>The most elevated specialty dining experience Royal Caribbean offers. Reserve it early because it fills up fast.</p>
            </Accordion>

            <Accordion title="Park Cafe, El Loco Fresh, and Casual Options (Included)">
              <p className="mb-3">Park Cafe in the Central Park neighborhood is a popular grab-and-go spot with sandwiches, salads, and the famous kumquat cobbler. El Loco Fresh offers Mexican street food-style options at no charge.</p>
              <p>The casual food options on Oasis and Icon class ships mean you can eat well all day without the buffet or main dining room.</p>
            </Accordion>
          </section>
        )}

        {/* WHAT MAKES ROYAL DIFFERENT */}
        {activeTab === "unique" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: RC_DARK }}>What Makes Royal Caribbean Different</h2>
            <p className="text-sm text-gray-500 mb-6">Royal Caribbean has been raising the bar on what a cruise ship can do for decades. Here are the features that set them apart.</p>

            <Accordion title="FlowRider Surf Simulator">
              <p className="mb-3">The FlowRider creates a continuous wave on the back of the ship. You can bodyboard or stand-up surf and the instructors onboard will get you up and riding even if you have never surfed before.</p>
              <p>It is completely free. Lines get long on sea days so get there early or go during meal times.</p>
            </Accordion>

            <Accordion title="Rock Climbing Wall">
              <p className="mb-3">Royal Caribbean put a rock climbing wall on a cruise ship in 1999 and nobody thought it would work. It absolutely worked. The climbing wall is a staple of almost every Royal Caribbean ship and it is free to use.</p>
              <p>Multiple routes at different difficulty levels mean both beginners and experienced climbers have something to work with.</p>
            </Accordion>

            <Accordion title="North Star Observation Capsule (Quantum Class)">
              <p className="mb-3">The North Star is a glass observation capsule that extends out over the side of the ship and lifts guests up to 300 feet above sea level for panoramic views. Eric sailed on Anthem of the Seas and riding it while approaching Bermuda is something you do not forget.</p>
              <p>Free on sea days, costs extra on port days. Book the port day ride for the best experience.</p>
            </Accordion>

            <Accordion title="RipCord by iFLY Skydiving Simulator (Quantum Class)">
              <p className="mb-3">A vertical wind tunnel that simulates the experience of skydiving. Available on Quantum class ships including Anthem of the Seas. No skydiving experience needed.</p>
              <p>Completely free for Royal Caribbean guests with a reservation.</p>
            </Accordion>

            <Accordion title="SeaPlex — Bumper Cars, Roller Skating, and More (Quantum Class)">
              <p className="mb-3">The SeaPlex is a multi-use indoor sports and entertainment complex that converts between bumper cars, roller skating, basketball, circus school trapeze, and dodgeball.</p>
              <p>There is literally nowhere else at sea you can go bumper car racing and then roller skating in the same space. Completely free.</p>
            </Accordion>

            <Accordion title="Central Park (Oasis Class)">
              <p className="mb-3">A real outdoor park in the middle of an Oasis class ship, eight decks above the waterline, with over 12,000 living plants and trees. One of the most serene spaces on any cruise ship.</p>
              <p>Eric walked through it on Oasis and Symphony and it impresses every single time.</p>
            </Accordion>

            <Accordion title="The Boardwalk (Oasis Class)">
              <p className="mb-3">An outdoor neighborhood at the stern of Oasis class ships designed to feel like a classic American boardwalk. It has a hand-carved carousel, a hot dog stand, an arcade, and the AquaTheater which hosts incredible high diving and acrobatics shows.</p>
              <p>The AquaTheater shows are free and genuinely spectacular. Do not miss them.</p>
            </Accordion>

            <Accordion title="Broadway Shows (Oasis and Quantum Class)">
              <p className="mb-3">Full Broadway-licensed productions performed in proper theater venues onboard. Mamma Mia, Grease, Hamilton, Hairspray, and others depending on the ship.</p>
              <p>The shows are free for all guests and they book up. Reserve your seats as soon as the app allows.</p>
            </Accordion>

            <Accordion title="The Suite Life — Royal Suite Class">
              <p className="mb-3">Royal Suite Class gives suite guests access to Coastal Kitchen, an exclusive restaurant for suite guests only, a private sun deck, priority boarding, and dedicated concierge service.</p>
              <p>Royal Caribbean's answer to MSC's Yacht Club and NCL's The Haven. One of the best luxury cruise options at a non-luxury-line price.</p>
            </Accordion>
          </section>
        )}

        {/* SOLO TRAVEL */}
        {activeTab === "solo" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Solo Travel on Royal Caribbean</h2>
            <p className="text-sm text-gray-500 mb-6">Royal Caribbean is a genuinely great line for solo travelers, especially outgoing ones. The ships are so big and so social that meeting people happens naturally.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: RC_ACCENT, borderLeft: `4px solid ${RC_NAVY}` }}>
              <strong>Honest take:</strong> Royal Caribbean does not have a hosted solo program like NCL's 5pm daily meetup. What Royal does have is an enormous social environment on massive ships where meeting people is almost unavoidable if you are open to it. Eric met amazing people on every single one of his Royal sailings.
            </div>

            <Accordion title="Studio Cabins on Select Ships">
              <p className="mb-3">Royal Caribbean offers solo studio cabins on select ships priced for a single occupant without a single supplement.</p>
              <p>Studio cabin availability varies significantly by ship. Ask me which ships currently offer them when we talk through your options.</p>
            </Accordion>

            <Accordion title="The Single Supplement on Standard Cabins">
              <p className="mb-3">On ships without dedicated solo cabins, Royal Caribbean charges a single supplement for standard cabin bookings.</p>
              <p>I always check this before we lock in a sailing so you know the complete picture upfront. Sometimes a specific promotion reduces the supplement significantly.</p>
            </Accordion>

            <Accordion title="Meeting People on Royal Caribbean">
              <p className="mb-3">The sheer size of a Royal Caribbean ship works in a solo traveler's favor. When you are on a ship with 6,000 people there is always someone at the bar, always a crowd at the FlowRider, always something happening that puts you in contact with other guests.</p>
              <p>Eric met genuinely great people on every Royal cruise. The entertainment and activity level keeps people out and engaged rather than retreating to their cabins. People talk to each other on Royal Caribbean ships because they are all doing the same things.</p>
            </Accordion>

            <Accordion title="Best Royal Ships for Solo Travelers">
              <p className="mb-3">The bigger the ship the better the social environment. Oasis and Icon class ships are the best Royal Caribbean options for solo sailing because the variety of activities, bars, and entertainment keeps you in social situations naturally.</p>
              <p>Quantum class ships like Anthem of the Seas are also excellent because unique features like RipCord and SeaPlex create shared experiences and conversations.</p>
            </Accordion>
          </section>
        )}

        {/* COCOCAY */}
        {activeTab === "cococay" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Perfect Day at CocoCay</h2>
            <p className="text-sm text-gray-500 mb-6">Perfect Day at CocoCay is Royal Caribbean's private island in the Bahamas and in Eric's opinion it is the best private island experience in cruising. He has been there on the Symphony of the Seas.</p>

            <div className="p-4 rounded-xl mb-6 text-white text-sm" style={{ background: `linear-gradient(135deg, ${RC_DARK}, ${RC_NAVY})` }}>
              <p className="font-bold mb-1" style={{ color: RC_GOLD }}>Eric's take on CocoCay</p>
              <p className="leading-relaxed">I have been to a lot of private islands. Ocean Cay on MSC, Great Stirrup Cay on NCL, Bimini on Virgin Voyages. CocoCay beats them all. The water park alone makes it the most entertaining private island in cruising. The Oasis Lagoon is the largest freshwater pool in the Bahamas. The snorkeling is excellent. The beaches are beautiful. If your itinerary includes CocoCay, plan to spend the entire day there.</p>
            </div>

            <Accordion title="What Is Perfect Day at CocoCay?">
              <p className="mb-3">CocoCay is a private island in the Berry Islands of the Bahamas owned exclusively by Royal Caribbean. It was completely transformed starting in 2019 with a major investment that added a full water park, the largest freshwater pool in the Bahamas, upgraded beaches, dining venues, and a swim-up bar.</p>
              <p>The island is only accessible through Royal Caribbean sailings. No other cruise line stops here.</p>
            </Accordion>

            <Accordion title="Thrill Waterpark — The Crown Jewel">
              <p className="mb-3">Thrill Waterpark has 13 waterslides including Daredevil's Peak, the tallest waterslide in the Bahamas at 135 feet. There is also a wave pool, a kids aqua park, and various other water attractions.</p>
              <p className="mb-3">The waterpark is an upcharge above your cruise fare. Book it before you sail because it sells out and the onboard price is higher than the pre-cruise price.</p>
              <p>Eric went to the waterpark on his CocoCay visit and it was one of the highlights of that entire sailing.</p>
            </Accordion>

            <Accordion title="Oasis Lagoon — Largest Freshwater Pool in the Bahamas">
              <p className="mb-3">The Oasis Lagoon is a massive 6,000 square foot freshwater pool that is free for all Royal Caribbean guests. It has a full swim-up bar, multiple entrance points, and plenty of space even on busy days.</p>
              <p>If you are not doing the waterpark, Oasis Lagoon is the spot. It has the Caribbean sun, the island atmosphere, and the swim-up bar going all day.</p>
            </Accordion>

            <Accordion title="The Beaches">
              <p className="mb-3">CocoCay has multiple distinct beach areas. South Beach has beautiful white sand and clear water. Chill Island is the more laid-back area with hammocks and beach bars. Sentiment Beach is the adults-only area with premium cabanas.</p>
              <p>Basic beach access with a standard lounger is included in your cruise fare. The standard included beach experience is already excellent.</p>
            </Accordion>

            <Accordion title="Up, Up and Away — Helium Balloon Ride">
              <p className="mb-3">A tethered helium balloon that lifts you 450 feet above the island for panoramic views of the Bahamas. It is a paid upcharge and books up fast.</p>
              <p>Best views are in the morning before the sky haze builds up. Book it before your sailing.</p>
            </Accordion>

            <Accordion title="Dining and Drinks at CocoCay">
              <p className="mb-3">Royal Caribbean includes a BBQ lunch on the island for all guests. It is a full spread with grilled meats, sides, and desserts and runs from midday until early afternoon.</p>
              <p>The swim-up bar at Oasis Lagoon is covered by the Royal Caribbean beverage package if you have one, which makes it one of the best uses of a drinks package across the whole sailing.</p>
            </Accordion>

            <Accordion title="What Is Included vs What Costs Extra">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Included:</strong> Beach access, standard sun lounger, BBQ lunch, Oasis Lagoon pool access, snorkeling in the lagoon area</li>
                <li><strong>Upcharge:</strong> Thrill Waterpark, premium cabanas, Up Up and Away balloon, water sports rentals, adults-only Sentiment Beach premium areas</li>
              </ul>
            </Accordion>
          </section>
        )}

        {/* CROWN AND ANCHOR LOYALTY */}
        {activeTab === "loyalty" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Crown and Anchor Society</h2>
            <p className="text-sm text-gray-500 mb-6">Crown and Anchor Society is Royal Caribbean's loyalty program. Eric is a Platinum member with 30 cruise points and 23 cruise nights.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: RC_ACCENT, borderLeft: `4px solid ${RC_NAVY}` }}>
              <strong>Eric is Platinum.</strong> He has earned 30 Crown and Anchor points across his four Royal Caribbean sailings. He knows the program from personal experience and can walk you through how to maximize your points from day one.
            </div>

            <Accordion title="How Points Are Earned">
              <p className="mb-3">You earn Crown and Anchor points for every night you sail on Royal Caribbean. Standard cabins earn one point per night. Suite guests earn three points per night.</p>
              <p>Points accumulate across all your Royal Caribbean sailings and never expire as long as you sail at least once every three years.</p>
            </Accordion>

            <Accordion title="The Tier Levels and What They Get You">
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>Gold (3-11 points)</strong> — Welcome gift, savings certificates, members-only offers</li>
                <li><strong>Platinum (30-54 points) — Eric's current tier</strong> — Priority check-in, complimentary specialty restaurant dinner, internet package on select sailings, Platinum lounge access, complimentary laundry, balcony discount</li>
                <li><strong>Emerald (55-79 points)</strong> — All Platinum perks plus additional savings and priority tendering</li>
                <li><strong>Diamond (80-174 points)</strong> — Four complimentary drinks per day at select bars, dedicated Diamond Lounge with nightly happy hour drinks, priority boarding, complimentary internet</li>
                <li><strong>Diamond Plus (175-699 points)</strong> — Six complimentary drinks per day, expanded Diamond Lounge access, additional specialty dining credits</li>
                <li><strong>Pinnacle Club (700+ points)</strong> — Unlimited complimentary drinks, dedicated concierge, complimentary specialty dining every night, suite-level perks</li>
              </ul>
              <p>Diamond is where the program really starts to pay for itself financially with the included nightly drinks.</p>
            </Accordion>

            <Accordion title="The Platinum Perks Eric Actually Uses">
              <p className="mb-3">As a Platinum member Eric gets priority check-in which means skipping the regular check-in line. The complimentary specialty dining dinner is essentially a free dinner at a restaurant that would otherwise cost $40 to $60 per person.</p>
              <p>The Platinum lounge access gives you a quieter space to hang out onboard. The internet package on select sailings is one of the most practical perks because staying connected onboard usually costs real money.</p>
            </Accordion>

            <Accordion title="How to Maximize Your Points">
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>Longer sailings earn more points</strong> — A 14-night sailing earns 14 points versus 7 for a 7-night</li>
                <li><strong>Suite bookings triple your points</strong> — One night in a suite earns 3 points versus 1 in a standard cabin</li>
                <li><strong>Stack sailings strategically</strong> — If you are close to a tier threshold, one extra sailing can jump you up and unlock significantly better perks</li>
              </ul>
            </Accordion>
          </section>
        )}

        {/* SHORE EXCURSIONS */}
        {activeTab === "excursions" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Shore Excursions</h2>
            <p className="text-sm text-gray-500 mb-6">Royal Caribbean's shore excursion program is one of the most comprehensive in the industry. You can book through the Royal Caribbean app or website before you sail.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: RC_ACCENT, borderLeft: `4px solid ${RC_NAVY}` }}>
              <p className="font-semibold mb-1">Always book before you sail and always book through the ship.</p>
              <p className="mb-2">Pre-cruise pricing is lower and popular excursions sell out.</p>
              <p>When you book through Royal Caribbean, the ship waits for you if your excursion runs long. If you book independently and you are late, the ship leaves without you.</p>
            </div>

            {[
              {
                port: "Perfect Day at CocoCay, Bahamas",
                eric: true,
                about: "Eric visited CocoCay on Symphony of the Seas and calls it the best private island day he has had in cruising. Go to the waterpark, spend time at Oasis Lagoon, eat the included BBQ, and stay until the last tender.",
                excursions: ["Thrill Waterpark (upcharge, book early)", "Up Up and Away Balloon Ride", "Oasis Lagoon Pool (included)", "Snorkeling Adventure", "Premium Cabana Rental", "Adults-Only Sentiment Beach"]
              },
              {
                port: "Cozumel, Mexico",
                eric: true,
                about: "Eric visited Cozumel on his Oasis of the Seas Western Caribbean sailing. One of the top snorkeling and diving destinations in the world with outstanding water clarity.",
                excursions: ["Snorkel at Palancar Reef", "Scuba Diving for Certified Divers", "Catamaran Sail and Snorkel", "Dune Buggy Island Tour", "Swim with Dolphins", "Mr. Sancho's Beach Club"]
              },
              {
                port: "Labadee, Haiti",
                eric: false,
                about: "Royal Caribbean's other private destination on the northern coast of Haiti. Labadee has a beautiful beach setting, the longest overwater zip line in the world, and a great beach barbecue.",
                excursions: ["Dragon's Breath Zip Line over the Water", "Dragon's Splash Waterslide", "Labadee Beach Break", "Kayaking and Snorkeling", "Haitian Cultural Village Tour"]
              },
              {
                port: "Nassau, Bahamas",
                eric: false,
                about: "A classic Caribbean port with beaches, history, and shopping within easy reach. Atlantis is the big draw for most visitors.",
                excursions: ["Atlantis Beach Day", "Blue Lagoon Island Snorkel and Beach", "Nassau Historical Walking Tour", "Swim with Dolphins", "Atlantis Water Park Access"]
              },
              {
                port: "Bermuda",
                eric: true,
                about: "Eric visited Bermuda on the Anthem of the Seas sailing out of Cape Liberty. Pink sand beaches, pastel architecture, and a sophisticated British-influenced culture make it one of the most unique port stops on any cruise line.",
                excursions: ["Snorkeling at the Bermuda Triangle area", "Glass Bottom Boat Tour", "Pink Sand Beach at Horseshoe Bay", "Bermuda Historical Tour", "Jet Ski Tour around the Island"]
              },
              {
                port: "Falmouth, Jamaica",
                eric: false,
                about: "Gateway to Dunn's River Falls and some of the best adventure excursions in the Caribbean. Jamaica has a vibrant culture and beautiful natural landscape.",
                excursions: ["Dunn's River Falls Climb", "Blue Hole and Secret Falls", "Catamaran Snorkel and Beach", "Reggae Hill Party", "ATV Adventure through the Jungle"]
              },
            ].map((p) => (
              <Accordion key={p.port} title={`${p.port}${p.eric ? " — Eric Has Been Here" : ""}`}>
                <p className="mb-4 text-sm">{p.about}</p>
                <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Popular Excursions Here</p>
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
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Trip Insurance</h2>
            <p className="text-sm text-gray-500 mb-6">I always recommend trip insurance on every cruise booking. This is the coverage that keeps a rough moment from becoming a financial disaster.</p>

            <div className="p-4 rounded-xl mb-6 text-white text-sm" style={{ background: RC_NAVY }}>
              <strong>Buy it at booking.</strong> Trip insurance is cheaper when you add it at the time of your initial deposit and certain pre-existing condition coverage only applies within the first 14 to 21 days of booking.
            </div>

            <Accordion title="What If You Get Sick Before You Leave?">
              <p className="mb-3">Something medical comes up two days before you sail. Without insurance you lose your cruise fare because the cancellation deadline has passed.</p>
              <p>With a covered illness and trip insurance, you cancel and get reimbursed.</p>
            </Accordion>

            <Accordion title="What If a Family Member Has an Emergency?">
              <p>Trip cancellation coverage for family medical emergencies means you can be where you need to be without losing the money you put into the trip.</p>
            </Accordion>

            <Accordion title="What If You Get Hurt at Sea or Overseas?">
              <p className="mb-3">Your regular health insurance often does not cover you outside the United States. A medical evacuation from a ship or from a Caribbean port can cost tens of thousands of dollars without coverage.</p>
            </Accordion>

            <Accordion title="What If Your Flight Gets Cancelled?">
              <p>Trip delay coverage helps cover last-minute hotel stays, meals, and rebooking costs when your travel falls apart.</p>
            </Accordion>

            <Accordion title="What If Your Luggage Gets Lost?">
              <p>Baggage delay coverage helps you cover the essentials while your bags catch up.</p>
            </Accordion>

            <Accordion title="Why Buy at Booking?">
              <p className="mb-3">Two reasons. First, it costs less when you buy early. Second, pre-existing condition coverage requires you to buy within a set window of your initial deposit. Miss that window and that coverage is gone.</p>
            </Accordion>
          </section>
        )}

        {/* ERIC'S TIPS */}
        {activeTab === "tips" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Eric's Tips for Your Royal Caribbean Sailing</h2>
            <p className="text-sm text-gray-500 mb-6">I have sailed Royal Caribbean four times on four different ships. Here is what I actually tell people before they board.</p>

            <Accordion title="Sign Up for Crown and Anchor Before You Board">
              <p>Create your Crown and Anchor account before your sailing and link it to your reservation. Your points will not be credited retroactively. Starting from day one means every night counts toward your tier progress.</p>
            </Accordion>

            <Accordion title="Book the Royal App Reservations Early">
              <p className="mb-3">Download the Royal Caribbean app before you sail and book as soon as your reservation window opens. Broadway shows, specialty dining, CocoCay waterpark, the North Star, RipCord by iFLY, and shore excursions all fill up.</p>
              <p>I always give clients a heads up when their booking window opens so they can get in early.</p>
            </Accordion>

            <Accordion title="CocoCay Waterpark — Book Before You Sail">
              <p>The Thrill Waterpark at CocoCay is almost always cheaper when you book it before your sailing rather than at the island. It also sells out. If CocoCay is on your itinerary and you want the waterpark, lock it in early.</p>
            </Accordion>

            <Accordion title="The AquaTheater Show Is Free and Unmissable">
              <p>On Oasis class ships the AquaTheater at the Boardwalk hosts high diving and acrobatics shows that are completely free and genuinely spectacular. Reserve seats through the app before you sail.</p>
            </Accordion>

            <Accordion title="Ride the North Star During a Port Call">
              <p>On Quantum class ships like Anthem of the Seas the North Star is free on sea days and costs extra on port days. Pay for the port day ride. The view of Bermuda or whatever port you are approaching from 300 feet above the ship is worth every dollar.</p>
            </Accordion>

            <Accordion title="Go to the FlowRider During Off-Peak Times">
              <p>The FlowRider gets long lines on sea days especially in the afternoon. Go early in the morning, during meal times, or later in the evening when the crowd thins. The wait during off-peak times can drop from 45 minutes to almost nothing.</p>
            </Accordion>

            <Accordion title="Central Park at Night Is Something Special">
              <p>On Oasis class ships walk through Central Park late in the evening after dinner. The lighting, the quiet, the real trees growing eight decks above the waterline. It is one of the most unexpected and genuinely beautiful spaces at sea.</p>
            </Accordion>

            <Accordion title="Prepay Gratuities and Book Dining Early">
              <p className="mb-3">Prepay your gratuities at booking so you board knowing your complete cost. Add your specialty dining reservations as soon as your booking window opens.</p>
              <p>The earlier you set everything up the more relaxed your embarkation day will feel.</p>
            </Accordion>

            <Accordion title="Get Trip Insurance at Booking">
              <p>Lock in trip insurance at the time of your initial deposit. It is cheaper then and you get full pre-existing condition coverage within that early window.</p>
            </Accordion>
          </section>
        )}

        {/* CTA */}
        <div className="mt-10 rounded-2xl p-5 md:p-8 text-center text-white" style={{ background: `linear-gradient(135deg, ${RC_DARK}, ${RC_NAVY})` }}>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: RC_GOLD }}>Ready to Sail Royal Caribbean</p>
          <h3 className="text-lg md:text-2xl font-bold mb-3">Real trips. Real value. Someone actually in your corner.</h3>
          <p className="text-sm mb-5 max-w-lg mx-auto leading-relaxed" style={{ color: "#CBD5E1" }}>
            I've sailed Royal Caribbean four times and I'm a Platinum Crown and Anchor member, so I know these massive ships inside and out. When you work with me, you get actual firsthand knowledge and someone who actually answers when you have a question.
          </p>
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg font-bold text-sm transition hover:opacity-90"
            style={{ background: RC_GOLD, color: RC_DARK }}
          >
            Why wait? Let's plan, book, and sail.
          </a>
        </div>

      </div>
    </div>
  );
}
