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
    <div className="border border-blue-100 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-blue-50 transition-colors"
        style={{ background: open ? RC_ACCENT : "white" }}
      >
        <span>{title}</span>
        <span
          className="text-2xl transition-transform duration-200"
          style={{ color: RC_NAVY, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
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
        className="relative py-24 px-6 text-center text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${RC_DARK} 0%, ${RC_NAVY} 50%, ${RC_BLUE} 100%)` }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 30%, white 1px, transparent 1px)",
            backgroundSize: "55px 55px"
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 leading-tight">Royal Caribbean</h1>
          <p className="text-xl mb-6 leading-relaxed" style={{ color: "#CBD5E1" }}>
            Big ships. Big fun. Royal Caribbean invented the idea of the cruise ship as a destination and they are still the best at it. Rock climbing walls, surf simulators, Broadway shows, Central Park at sea. If someone wants everything, this is where you go.
          </p>
          <p className="text-base" style={{ color: "#94A3B8" }}>
            Eric has sailed Royal Caribbean four times on Symphony of the Seas, Oasis of the Seas, Anthem of the Seas, and Majesty of the Seas. He is a Platinum Crown and Anchor Society member. When he says Royal is worth it, he means it.
          </p>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 shadow-md overflow-x-auto" style={{ background: RC_DARK }}>
        <div className="flex justify-center min-w-max mx-auto px-4 w-full">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2"
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
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* ABOUT ROYAL */}
        {activeTab === "about" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: RC_DARK }}>About Royal Caribbean</h2>
            <p className="text-gray-500 mb-8">Royal Caribbean is the largest cruise line in the world and the one that changed what people thought a cruise ship could be. They kept building bigger, kept adding more, and kept raising the bar on what you can do at sea. Eric has sailed Royal four times and it remains one of his favorite lines.</p>

            <Accordion title="Who Is Royal Caribbean?">
              <p className="mb-3">Royal Caribbean International is a Miami-based cruise line founded in 1969. They were not the first cruise line but they became the most ambitious one. When other lines were building comfortable ships, Royal Caribbean was asking what else a ship could be. The answer turned out to be a lot.</p>
              <p>Today Royal Caribbean operates some of the largest ships ever built, including the Icon of the Seas which launched in 2024 and became the largest cruise ship in the world at the time. They are a line built on the philosophy that more is more, executed at a level nobody else has matched.</p>
            </Accordion>

            <Accordion title="What Makes Royal Caribbean Different">
              <p className="mb-3">The honest answer is scale and ambition. Royal Caribbean builds ships that other lines would not attempt. Rock climbing walls, surf simulators, sky diving simulators, ice skating rinks, Central Park with real trees growing eight decks up, a Boardwalk with a carousel. These are not gimmicks. They are genuinely fun and they give the ships an energy that is hard to find anywhere else at sea.</p>
              <p className="mb-3">The size of the ships also means the dining program, entertainment lineup, and pool areas are bigger and more varied than most lines can offer. On an Oasis class ship you can go a week without doing the same thing twice.</p>
              <p>It is not the right fit for every traveler. If you want a quiet, intimate cruise experience, Royal Caribbean is probably not your line. But if you want maximum variety, maximum entertainment, and a ship that feels like an event, nobody does it better.</p>
            </Accordion>

            <Accordion title="Eric's Royal Caribbean Experience">
              <p className="mb-3">I have sailed Royal Caribbean four times and each sailing was on a different ship. The Majesty of the Seas in 2017 for a 4-night Bahamas cruise. The Oasis of the Seas in 2018 for a 7-night Western Caribbean. The Anthem of the Seas in 2018 for a 5-night Bermuda cruise. And the Symphony of the Seas in 2019 for a 7-night Western Caribbean including Perfect Day at CocoCay.</p>
              <p className="mb-3">I am a Platinum member of the Crown and Anchor Society loyalty program with 30 cruise points, which means I have earned real perks and I know firsthand how the loyalty program works and what it is worth pursuing.</p>
              <p>CocoCay on the Symphony sailing was genuinely one of the best days I have had on any cruise. The water park, the beach, the lagoon. It is the best private island experience I have come across in all my years of cruising and I say that having visited a lot of them.</p>
            </Accordion>

            <Accordion title="Who Is Royal Caribbean Best For?">
              <ul className="list-disc pl-5 space-y-2">
                <li>Travelers who want the most activities and entertainment options at sea</li>
                <li>Families with kids who want a ship that keeps everyone busy</li>
                <li>First-time cruisers who want to be blown away by the experience</li>
                <li>People who have cruised before and want to step things up significantly</li>
                <li>Anyone who wants to visit Perfect Day at CocoCay, which is exclusively a Royal Caribbean destination</li>
                <li>Solo travelers who are outgoing and want a big social environment to meet people</li>
                <li>Groups of friends who want enough variety that everyone finds something they love</li>
              </ul>
            </Accordion>
          </section>
        )}

        {/* THE SHIPS */}
        {activeTab === "ships" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: RC_DARK }}>The Royal Caribbean Fleet</h2>
            <p className="text-gray-500 mb-8">Royal Caribbean has one of the most iconic fleets at sea organized into ship classes that each represent a different generation of ambition. Here is a breakdown by class so you can find the right ship for your trip.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: RC_ACCENT, borderLeft: `4px solid ${RC_NAVY}` }}>
              <strong>Eric's Note:</strong> I have personally sailed on Symphony of the Seas, Oasis of the Seas, Anthem of the Seas, and Majesty of the Seas. If you want a real firsthand take on any of those ships, just ask me.
            </div>

            <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: RC_NAVY }}>Icon Class — The World's Largest Ships</h3>
            {[
              {
                name: "Icon of the Seas",
                built: "2024",
                capacity: "7,600",
                notes: "The largest cruise ship ever built when she launched in 2024. Icon of the Seas takes everything Royal Caribbean has ever done and amplifies it. She has eight neighborhoods each with their own identity, six water slides, four pools, the largest waterpark at sea, and a lineup of dining and entertainment that would take multiple sailings to fully experience. Sails Caribbean from Miami.",
                highlights: ["World's largest cruise ship at launch", "Eight distinct neighborhoods", "Category 6 waterpark", "Perfect Day at CocoCay itineraries", "Miami homeport", "Suite Neighborhood luxury enclave"]
              },
              {
                name: "Star of the Seas",
                built: "2025",
                capacity: "7,600",
                notes: "Sister ship to Icon of the Seas and the second Icon class vessel. Star of the Seas continues the same next-generation design philosophy with some updated features. She also sails from Port Canaveral giving Florida-based travelers access to the Icon class experience from Orlando.",
                highlights: ["Icon class next-gen design", "Port Canaveral homeport", "Perfect Day at CocoCay itineraries", "Suite Neighborhood", "Six waterslides and waterpark"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-lg font-bold mb-3 mt-8" style={{ color: RC_NAVY }}>Oasis Class — Eric's Ships</h3>
            {[
              {
                name: "Wonder of the Seas",
                built: "2022",
                capacity: "6,988",
                notes: "The newest Oasis class ship and one of the largest in the fleet. Wonder of the Seas adds a Suite Neighborhood as a new eighth neighborhood alongside the classic Oasis class neighborhoods. Sails Caribbean from Port Canaveral and Port Everglades.",
                highlights: ["Eight neighborhoods including Suite Neighborhood", "Central Park with real trees", "The Boardwalk with carousel", "FlowRider surf simulator", "Rock climbing wall", "AquaTheater"]
              },
              {
                name: "Symphony of the Seas",
                built: "2018",
                capacity: "6,680",
                notes: "Eric sailed on Symphony of the Seas on a 7-night Western Caribbean cruise in 2019, including a stop at Perfect Day at CocoCay. Symphony is the fourth Oasis class ship and one of the most well-rounded in the fleet. She has all the signature Oasis features at their most refined. The CocoCay stop on that sailing was one of the best days Eric has had at sea.",
                highlights: ["Eric sailed on Symphony in 2019", "All Oasis class neighborhoods", "FlowRider surf simulator", "Central Park and Boardwalk", "Perfect Day at CocoCay itineraries", "Miami homeport"]
              },
              {
                name: "Harmony of the Seas",
                built: "2016",
                capacity: "6,422",
                notes: "The third Oasis class ship and one of the most popular in the fleet. Harmony sails from Port Canaveral and has the full Oasis neighborhood experience with a particularly strong entertainment lineup including Grease the musical.",
                highlights: ["All Oasis class features", "Grease the musical", "Ultimate Abyss dry slide", "FlowRider surf simulator", "Port Canaveral homeport"]
              },
              {
                name: "Allure of the Seas",
                built: "2010",
                capacity: "6,318",
                notes: "The second Oasis class ship and still one of the most impressive vessels at sea. Allure recently completed a major refurbishment and sails from Galveston giving Gulf Coast travelers access to the full Oasis class experience.",
                highlights: ["Recently refurbished", "Galveston homeport", "All classic Oasis neighborhoods", "Central Park and Boardwalk", "FlowRider surf simulator"]
              },
              {
                name: "Oasis of the Seas",
                built: "2009",
                capacity: "6,296",
                notes: "Eric sailed on the Oasis of the Seas in 2018 for a 7-night Western Caribbean cruise. The original Oasis class ship and still one of the most extraordinary vessels ever built. She redefined what a cruise ship could be and everything that came after owes something to her. Recently refurbished and still delivering the full Oasis experience.",
                highlights: ["Eric sailed on Oasis in 2018", "The original game-changing Oasis class ship", "Seven neighborhoods", "Central Park and Boardwalk", "FlowRider and AquaTheater", "Recently refurbished"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-lg font-bold mb-3 mt-8" style={{ color: RC_NAVY }}>Quantum Class — Eric's Ship</h3>
            {[
              {
                name: "Anthem of the Seas",
                built: "2015",
                capacity: "4,905",
                notes: "Eric sailed on Anthem of the Seas in 2018 for a 5-night Bermuda cruise. The Anthem is one of the most technologically innovative ships in the fleet with the North Star observation capsule that lifts you 300 feet above sea level, RipCord by iFLY skydiving simulator, and a bumper car arena. A fantastic ship for Bermuda sailings out of Cape Liberty, New Jersey.",
                highlights: ["Eric sailed on Anthem in 2018 to Bermuda", "North Star observation capsule", "RipCord by iFLY skydiving simulator", "SeaPlex bumper cars and roller skating", "Cape Liberty NJ homeport", "Bermuda itineraries"]
              },
              {
                name: "Quantum of the Seas",
                built: "2014",
                capacity: "4,905",
                notes: "The original Quantum class ship with all the same innovative features as Anthem. Quantum sails from Singapore and is one of Royal Caribbean's premier Asia-Pacific vessels.",
                highlights: ["North Star observation capsule", "RipCord by iFLY", "SeaPlex entertainment complex", "Asia-Pacific itineraries"]
              },
              {
                name: "Ovation of the Seas",
                built: "2016",
                capacity: "4,905",
                notes: "Quantum class ship sailing from Australia and Asia. Ovation brings the full Quantum class experience to the southern hemisphere with itineraries including Australia, New Zealand, and Asia.",
                highlights: ["North Star observation capsule", "RipCord by iFLY", "SeaPlex entertainment complex", "Australia and Asia itineraries"]
              },
              {
                name: "Spectrum of the Seas",
                built: "2019",
                capacity: "4,246",
                notes: "An enhanced Quantum class ship built specifically for the Chinese market. Spectrum sails Asian itineraries and features some upgraded design elements and dining concepts tailored to Asian travelers.",
                highlights: ["Enhanced Quantum class design", "North Star observation capsule", "Asian itineraries", "Elevated interior design"]
              },
              {
                name: "Odyssey of the Seas",
                built: "2021",
                capacity: "4,246",
                notes: "The newest Quantum Ultra class ship sailing from Port Everglades. Odyssey has all the Quantum class innovations with updated design elements and sails Caribbean itineraries from South Florida.",
                highlights: ["North Star observation capsule", "RipCord by iFLY", "SeaPlex entertainment", "Port Everglades homeport", "Caribbean itineraries"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-lg font-bold mb-3 mt-8" style={{ color: RC_NAVY }}>Freedom Class</h3>
            {[
              {
                name: "Freedom of the Seas",
                built: "2006",
                capacity: "4,375",
                notes: "The original Freedom class ship and the first vessel to break the 100,000 gross ton barrier. Freedom sails from Miami and Port Canaveral and remains a strong mid-size option with a FlowRider, rock climbing wall, and solid dining program.",
                highlights: ["FlowRider surf simulator", "Rock climbing wall", "Miami and Port Canaveral homeports", "Caribbean itineraries", "Classic Royal Caribbean experience"]
              },
              {
                name: "Liberty of the Seas",
                built: "2007",
                capacity: "4,375",
                notes: "Sister ship to Freedom of the Seas sailing from Galveston. A great option for Gulf Coast travelers who want the Freedom class experience with Caribbean itineraries from Texas.",
                highlights: ["FlowRider surf simulator", "Rock climbing wall", "Galveston homeport", "Caribbean itineraries"]
              },
              {
                name: "Independence of the Seas",
                built: "2008",
                capacity: "4,375",
                notes: "Freedom class ship that sails from Port Everglades. Independence recently underwent updates and continues to deliver the classic Freedom class experience from South Florida.",
                highlights: ["FlowRider surf simulator", "Rock climbing wall", "Port Everglades homeport", "Caribbean itineraries", "Updated amenities"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-lg font-bold mb-3 mt-8" style={{ color: RC_NAVY }}>Voyager Class</h3>
            {[
              {
                name: "Navigator of the Seas",
                built: "1999",
                capacity: "3,807",
                notes: "One of the original Voyager class ships, recently refurbished and updated with new features including Perfect Day at CocoCay stops. Navigator sails from Miami and remains a popular choice for short Caribbean getaways.",
                highlights: ["Recently refurbished", "Miami homeport", "Perfect Day at CocoCay itineraries", "Rock climbing wall", "Classic Royal Caribbean experience"]
              },
              {
                name: "Mariner of the Seas",
                built: "2003",
                capacity: "3,807",
                notes: "Refurbished Voyager class ship sailing from Port Canaveral. Mariner offers a strong classic Royal Caribbean experience with updated amenities from her 2018 refurbishment.",
                highlights: ["Refurbished 2018", "Port Canaveral homeport", "FlowRider surf simulator", "Rock climbing wall", "Caribbean itineraries"]
              },
              {
                name: "Adventure of the Seas",
                built: "2001",
                capacity: "3,807",
                notes: "Voyager class ship sailing Caribbean itineraries. Adventure offers the classic Royal Caribbean mid-size experience with a rock climbing wall, FlowRider, and solid dining and entertainment.",
                highlights: ["Rock climbing wall", "FlowRider surf simulator", "Caribbean itineraries", "Classic Voyager class design"]
              },
              {
                name: "Explorer of the Seas",
                built: "2000",
                capacity: "3,807",
                notes: "Voyager class ship sailing from Cape Liberty, New Jersey. Explorer is a great option for Northeast travelers who want a classic Royal Caribbean experience without flying to Florida.",
                highlights: ["Cape Liberty NJ homeport", "Rock climbing wall", "Caribbean and Bermuda itineraries", "Classic Voyager class design"]
              },
              {
                name: "Voyager of the Seas",
                built: "1999",
                capacity: "3,807",
                notes: "The original Voyager class ship that started it all. Voyager sails Asia-Pacific itineraries and continues to deliver the classic Royal Caribbean experience in a new part of the world.",
                highlights: ["The original Voyager class ship", "Asia-Pacific itineraries", "Rock climbing wall", "Classic Royal Caribbean"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-lg font-bold mb-3 mt-8" style={{ color: RC_NAVY }}>Vision and Radiance Class</h3>
            {[
              {
                name: "Brilliance of the Seas",
                built: "2002",
                capacity: "2,501",
                notes: "Radiance class ship with a beautiful glass-heavy design that keeps you connected to the ocean. Sails European and transatlantic itineraries with a more intimate feel than the mega ships.",
                highlights: ["Glass-forward ocean views", "European itineraries", "More intimate mid-size feel", "Classic Royal Caribbean dining"]
              },
              {
                name: "Serenade of the Seas",
                built: "2003",
                capacity: "2,501",
                notes: "Radiance class ship sailing a variety of itineraries including Alaska, Caribbean, and transatlantic routes. A well-rounded mid-size option with the signature Radiance class ocean-view design.",
                highlights: ["Alaska itineraries", "Caribbean and transatlantic", "Glass-forward design", "Mid-size intimate feel"]
              },
              {
                name: "Jewel of the Seas",
                built: "2004",
                capacity: "2,501",
                notes: "Radiance class ship sailing European and transatlantic itineraries. Jewel brings the classic mid-size Royal Caribbean experience to a variety of international destinations.",
                highlights: ["European itineraries", "Transatlantic sailings", "Classic Radiance design", "Mid-size comfortable ship"]
              },
              {
                name: "Vision of the Seas",
                built: "1998",
                capacity: "2,435",
                notes: "Vision class ship sailing Caribbean itineraries. One of Royal Caribbean's older vessels but well maintained and a good option for travelers who prefer a smaller more classic ship experience.",
                highlights: ["Smaller classic experience", "Caribbean itineraries", "Vision class design", "Good for budget-conscious travelers"]
              },
              {
                name: "Enchantment of the Seas",
                built: "1997",
                capacity: "2,446",
                notes: "One of Royal Caribbean's classic ships sailing short Caribbean getaways. Enchantment is a great entry point for first-time cruisers who want a manageable ship size with the full Royal Caribbean character.",
                highlights: ["Short Caribbean itineraries", "Good for first-time cruisers", "Classic smaller ship feel", "Full Royal Caribbean experience"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: RC_NAVY }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <div className="mt-8 p-5 rounded-xl text-white text-sm" style={{ background: RC_NAVY }}>
              <strong>Not sure which ship is right for you?</strong> Royal Caribbean has ships ranging from intimate classic vessels to the largest cruise ships ever built. I have sailed four of them personally. Tell me where you want to go and what kind of experience you are after and I will point you in the right direction.
            </div>
          </section>
        )}

        {/* DINING */}
        {activeTab === "dining" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Dining Onboard</h2>
            <p className="text-gray-500 mb-8">Royal Caribbean's dining program has grown significantly over the years. The bigger the ship, the more options you have. Here is a breakdown of what to expect across the fleet.</p>

            <Accordion title="Main Dining Room (Included)">
              <p className="mb-3">Royal Caribbean's main dining rooms are traditional sit-down restaurants with both My Time Dining (flexible times) and set seating options. The menus rotate nightly with a mix of classic dishes and rotating specials. The quality is solid and the service is genuinely attentive.</p>
              <p>On the larger Oasis and Icon class ships the main dining rooms are impressive spaces in their own right, spanning multiple decks with dramatic interiors. The food quality has improved noticeably in recent years and the overall dining experience in the MDR is one of the better ones in the mainstream cruise market.</p>
            </Accordion>

            <Accordion title="Windjammer Buffet (Included)">
              <p className="mb-3">The Windjammer Marketplace is Royal Caribbean's buffet and it is one of the best in the industry. Available for breakfast, lunch, and dinner with a wide variety of hot and cold options, international stations, and a carving station at dinner.</p>
              <p>On the mega ships the Windjammer is enormous and rarely feels crowded even at peak times. The variety is impressive and the quality is consistently above what you expect from a cruise ship buffet.</p>
            </Accordion>

            <Accordion title="Specialty Dining — Giovanni's and More">
              <p className="mb-3">Royal Caribbean's specialty dining program includes a solid roster of upcharge restaurants. Giovanni's Table is their Italian trattoria and one of the most consistently praised specialty restaurants in the fleet. Warm bread, handmade pasta, and a menu that feels genuinely Italian rather than Americanized Italian.</p>
              <p>Other specialty options depending on the ship include Chops Grille steakhouse, Izumi Japanese hibachi and sushi, Playmakers Sports Bar, Jamie's Italian on select ships, Hooked seafood, and 150 Central Park on Oasis class ships. The lineup varies significantly by ship class so check what is available on your specific sailing.</p>
            </Accordion>

            <Accordion title="150 Central Park (Oasis Class)">
              <p className="mb-3">Exclusive to Oasis class ships and one of the most unique dining experiences at sea. 150 Central Park is a fine dining restaurant overlooking the Central Park neighborhood, eight decks above the waterline surrounded by real trees and plants. The menu is contemporary and refined with a focus on local and seasonal ingredients.</p>
              <p>It is the most elevated specialty dining experience Royal Caribbean offers and a genuinely special dinner on any Oasis class sailing. Reserve it early because it fills up fast.</p>
            </Accordion>

            <Accordion title="Park Cafe, El Loco Fresh, and Casual Options (Included)">
              <p className="mb-3">Royal Caribbean does casual included dining well on the larger ships. Park Cafe in the Central Park neighborhood is a popular grab-and-go spot with sandwiches, salads, and the famous kumquat cobbler. El Loco Fresh offers Mexican street food-style options at no charge.</p>
              <p>The casual food options on Oasis and Icon class ships are genuinely good and mean you can eat well all day without ever setting foot in the Windjammer or the MDR if you prefer a more casual experience.</p>
            </Accordion>
          </section>
        )}

        {/* WHAT MAKES ROYAL DIFFERENT */}
        {activeTab === "unique" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: RC_DARK }}>What Makes Royal Caribbean Different</h2>
            <p className="text-gray-500 mb-8">Royal Caribbean has been raising the bar on what a cruise ship can do for decades. Here are the features that set them apart from every other line at sea.</p>

            <Accordion title="FlowRider Surf Simulator">
              <p className="mb-3">The FlowRider is a surf simulator that creates a continuous wave on the back of the ship. You can bodyboard or stand-up surf depending on your skill level and the instructors onboard will get you up and riding even if you have never surfed before.</p>
              <p>It is one of the most fun things you can do at sea and it is completely free. Lines can get long on sea days so get there early or go during meal times when the crowd thins out. Eric has been on ships with the FlowRider and it never gets old watching people wipe out and get right back up.</p>
            </Accordion>

            <Accordion title="Rock Climbing Wall">
              <p className="mb-3">Royal Caribbean put a rock climbing wall on a cruise ship in 1999 and nobody thought it would work. It absolutely worked. The climbing wall is a staple of almost every Royal Caribbean ship and it is free to use throughout your sailing.</p>
              <p>Multiple routes at different difficulty levels mean both beginners and experienced climbers have something to work with. The view from the top of the wall on a sea day is genuinely spectacular.</p>
            </Accordion>

            <Accordion title="North Star Observation Capsule (Quantum Class)">
              <p className="mb-3">The North Star is a glass observation capsule that extends out over the side of the ship and lifts guests up to 300 feet above sea level for panoramic views of the ocean and wherever you happen to be sailing. It is one of the most dramatic experiences you can have at sea.</p>
              <p>Eric sailed on Anthem of the Seas which has the North Star and riding it while approaching Bermuda is something you do not forget. It is free on sea days and costs extra on port days when the views are most spectacular. Book the port day ride if you want the best experience.</p>
            </Accordion>

            <Accordion title="RipCord by iFLY Skydiving Simulator (Quantum Class)">
              <p className="mb-3">A vertical wind tunnel that simulates the experience of skydiving. RipCord by iFLY is available on Quantum class ships including the Anthem of the Seas. Trained instructors guide you through the experience and you do not need any skydiving experience to participate.</p>
              <p>It is one of those things you walk past and think you probably would not do, and then you do it and immediately want to go again. Completely free for Royal Caribbean guests with a reservation.</p>
            </Accordion>

            <Accordion title="SeaPlex — Bumper Cars, Roller Skating, and More (Quantum Class)">
              <p className="mb-3">The SeaPlex is a multi-use indoor sports and entertainment complex on Quantum class ships. It converts between different configurations throughout the day and sailing including bumper cars, roller skating, basketball, circus school trapeze, and dodgeball.</p>
              <p>There is literally nowhere else at sea you can go bumper car racing and then roller skating and then watch a circus school performance all in the same space. It is ridiculous and it is brilliant and it is completely free.</p>
            </Accordion>

            <Accordion title="Central Park (Oasis Class)">
              <p className="mb-3">Central Park is a real outdoor park in the middle of an Oasis class ship, eight decks above the waterline, with over 12,000 living plants and trees. It is one of the most serene spaces you will find on any cruise ship and one of the most visually stunning.</p>
              <p>Walking through Central Park at sea, surrounded by real greenery with specialty restaurants on both sides and open sky above you, is an experience that genuinely does not feel like you are on a ship. It is one of the things that separates Oasis class from everything else at sea. Eric walked through it on Oasis and Symphony and it impresses every single time.</p>
            </Accordion>

            <Accordion title="The Boardwalk (Oasis Class)">
              <p className="mb-3">The Boardwalk is an outdoor neighborhood at the stern of Oasis class ships designed to feel like a classic American boardwalk. It has a hand-carved carousel, a classic hot dog and pretzel stand, an arcade, and the AquaTheater which hosts incredible high diving and acrobatics shows over the open ocean.</p>
              <p>The AquaTheater shows are free and genuinely spectacular. They are performed in an outdoor amphitheater with the ocean as the backdrop and the performances involve high diving, water acrobatics, and choreography that rivals anything you would see in a traditional theater. Do not miss it.</p>
            </Accordion>

            <Accordion title="Broadway Shows (Oasis and Quantum Class)">
              <p className="mb-3">Royal Caribbean has full Broadway-licensed productions performed in proper theater venues onboard. Mamma Mia, Grease, Hamilton, Hairspray, and others depending on the ship. These are not cruise ship approximations of Broadway shows. They are proper productions with full costumes, sets, and professional performers.</p>
              <p>The shows are free for all guests and they book up. Reserve your seats as soon as the app allows you to. On the bigger ships the theaters are enormous and the production values are genuinely impressive.</p>
            </Accordion>

            <Accordion title="The Suite Life — Royal Suite Class">
              <p className="mb-3">Royal Caribbean's suite program called Royal Suite Class gives suite guests access to Coastal Kitchen, an exclusive restaurant for suite guests only, a private sun deck, priority boarding, and dedicated concierge service. On Oasis class ships the Suite Neighborhood creates a ship-within-a-ship experience with its own pool and lounge areas.</p>
              <p>It is Royal Caribbean's answer to MSC's Yacht Club and NCL's The Haven. If you want the full luxury cruise experience without booking a standalone luxury line, the Royal Suite Class on a large Royal Caribbean ship is one of the best options in the industry.</p>
            </Accordion>
          </section>
        )}

        {/* SOLO TRAVEL */}
        {activeTab === "solo" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Solo Travel on Royal Caribbean</h2>
            <p className="text-gray-500 mb-8">Royal Caribbean is a genuinely great line for solo travelers, especially outgoing ones. The ships are so big and so social that meeting people happens naturally. Eric has experienced this firsthand and here is what you need to know.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: RC_ACCENT, borderLeft: `4px solid ${RC_NAVY}` }}>
              <strong>Honest take:</strong> Royal Caribbean does not have a hosted solo program like NCL's 5pm daily meetup with organized group dinners and a crew host. What Royal does have is an enormous social environment on massive ships where meeting people is almost unavoidable if you are open to it. Eric did not have a solo group on his Royal sailings but met amazing people on every single one.
            </div>

            <Accordion title="Studio Cabins on Select Ships">
              <p className="mb-3">Royal Caribbean offers solo studio cabins on select ships priced for a single occupant without a single supplement. These are available on some of the newer ships and give solo travelers a fair price without paying for a second person who is not there.</p>
              <p>Studio cabin availability varies significantly by ship. Ask me which ships currently offer them when we talk through your options so you know upfront what the solo pricing looks like on your specific sailing.</p>
            </Accordion>

            <Accordion title="The Single Supplement on Standard Cabins">
              <p className="mb-3">On ships without dedicated solo cabins, Royal Caribbean charges a single supplement for standard cabin bookings. The amount varies by ship and sailing and it can add meaningful cost to your trip.</p>
              <p>This is something I always check before we lock in a sailing so you know the complete picture upfront. Sometimes the timing of a booking or a specific promotion reduces the supplement significantly. I keep an eye on these things so you do not have to.</p>
            </Accordion>

            <Accordion title="Meeting People on Royal Caribbean">
              <p className="mb-3">The sheer size of a Royal Caribbean ship works in a solo traveler's favor in a way that smaller ships cannot match. When you are on a ship with 6,000 people there is always someone at the bar, always a crowd at the FlowRider, always a table open at Park Cafe, always something happening that puts you in contact with other guests.</p>
              <p className="mb-3">Eric did not have a structured solo group on his Royal sailings but met genuinely great people on every cruise. The social energy on Royal Caribbean ships is different from other lines because the entertainment and activity level keeps people out and engaged rather than retreating to their cabins. People talk to each other on Royal Caribbean ships because they are all doing the same things and having the same experiences.</p>
              <p>If you are outgoing and willing to say hello, you will not spend a night alone on a Royal Caribbean sailing unless you choose to.</p>
            </Accordion>

            <Accordion title="Royal Caribbean Solo Groups — What to Look For">
              <p className="mb-3">While Royal Caribbean does not run a daily hosted solo meetup like NCL, they do occasionally organize solo traveler social events on certain sailings. Check the Cruise Compass daily newsletter when you board for any listed solo or single traveler gatherings.</p>
              <p className="mb-3">There is also an active Royal Caribbean solo cruising community online through Facebook groups and cruise forums. Many solo Royal Caribbean travelers connect before their sailing so they already know people by the time they board. If you are interested I can point you toward those communities before your trip.</p>
              <p>The Virgin Voyages solo experience is also worth mentioning here. Virgin has been developing strong solo group programming that rivals NCL in some ways. If solo community is your top priority, Virgin or NCL may have an edge. But if you want the Royal Caribbean experience specifically, the social environment on the ships is genuinely conducive to meeting people.</p>
            </Accordion>

            <Accordion title="Best Royal Ships for Solo Travelers">
              <p className="mb-3">The bigger the ship the better the social environment for solo travelers. Oasis and Icon class ships are the best Royal Caribbean options for solo sailing because the sheer variety of activities, bars, and entertainment keeps you in social situations naturally throughout the day and night.</p>
              <p>Quantum class ships like Anthem of the Seas are also excellent for solo travelers because the unique features like RipCord and SeaPlex create shared experiences and conversations. When you are both waiting to do the skydiving simulator you end up talking to people.</p>
            </Accordion>
          </section>
        )}

        {/* COCOCAY */}
        {activeTab === "cococay" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Perfect Day at CocoCay</h2>
            <p className="text-gray-500 mb-8">Perfect Day at CocoCay is Royal Caribbean's private island in the Bahamas and in Eric's opinion it is the best private island experience in cruising. He has been there on the Symphony of the Seas and it is one of the best port days he has had on any sailing on any line.</p>

            <div className="p-5 rounded-xl mb-6 text-white text-sm" style={{ background: `linear-gradient(135deg, ${RC_DARK}, ${RC_NAVY})` }}>
              <p className="font-bold mb-1" style={{ color: RC_GOLD }}>Eric's take on CocoCay</p>
              <p>I have been to a lot of private islands. Ocean Cay on MSC, Great Stirrup Cay on NCL, Bimini on Virgin Voyages. CocoCay beats them all. The water park alone makes it the most entertaining private island in cruising. The Oasis Lagoon is the largest freshwater pool in the Bahamas. The snorkeling is excellent. The beaches are beautiful. And the entire island has been developed with a level of investment and thought that makes it feel genuinely special rather than just a beach with a bar. If your itinerary includes CocoCay, plan to spend the entire day there.</p>
            </div>

            <Accordion title="What Is Perfect Day at CocoCay?">
              <p className="mb-3">CocoCay is a private island in the Berry Islands of the Bahamas owned exclusively by Royal Caribbean. It was completely transformed starting in 2019 with a major investment that added a full water park, the largest freshwater pool in the Bahamas, upgraded beaches, dining venues, and a swim-up bar.</p>
              <p>The island is only accessible through Royal Caribbean sailings. No other cruise line stops here and no independent travelers can visit. The entire island on any given day is shared only with guests from your ship or ships in port that day.</p>
            </Accordion>

            <Accordion title="Thrill Waterpark — The Crown Jewel">
              <p className="mb-3">Thrill Waterpark is the centerpiece of CocoCay and it is extraordinary. It has 13 waterslides including Daredevil's Peak, the tallest waterslide in the Bahamas at 135 feet. There is also a wave pool, a kids aqua park, and various other water attractions spread across the park.</p>
              <p className="mb-3">The waterpark is an upcharge above your cruise fare. Prices vary by sailing but it is worth every dollar if waterslides are your thing. Book it before you sail because it sells out and the onboard price is higher than the pre-cruise price.</p>
              <p>Eric went to the waterpark on his CocoCay visit and it was genuinely one of the highlights of that entire sailing. Daredevil's Peak is not for the faint of heart but the rush is worth it.</p>
            </Accordion>

            <Accordion title="Oasis Lagoon — Largest Freshwater Pool in the Bahamas">
              <p className="mb-3">The Oasis Lagoon is a massive freshwater pool that is free for all Royal Caribbean guests on CocoCay. At 6,000 square feet it is the largest freshwater pool in the Bahamas and it has a full swim-up bar, multiple entrance points, and plenty of space even on busy days.</p>
              <p>If you are not doing the waterpark, Oasis Lagoon is the spot. It has the Caribbean sun, the island atmosphere, and the swim-up bar going all day. A genuinely excellent pool day that comes with your cruise fare.</p>
            </Accordion>

            <Accordion title="The Beaches">
              <p className="mb-3">CocoCay has multiple distinct beach areas. South Beach has beautiful white sand and clear water with both included and upgrade lounge options. Chill Island is the more laid-back beach area with hammocks, beach bars, and a relaxed pace. Sentiment Beach is the adults-only beach area with premium cabanas and upgraded service.</p>
              <p>Basic beach access with a standard lounger is included in your cruise fare. Premium loungers, cabanas, and the adults-only area are upgrades. The standard included beach experience is already excellent and worth your time even without the upgrades.</p>
            </Accordion>

            <Accordion title="Up, Up and Away — Helium Balloon Ride">
              <p className="mb-3">CocoCay has a tethered helium balloon called Up, Up and Away that lifts you 450 feet above the island for panoramic views of the Bahamas. It is a paid upcharge and books up fast but the view from 450 feet over a private Bahamian island is something most people never get to experience.</p>
              <p>Best views are in the morning before the sky haze builds up. Book it before your sailing if this is something you want to do.</p>
            </Accordion>

            <Accordion title="Dining and Drinks at CocoCay">
              <p className="mb-3">Royal Caribbean includes a BBQ lunch on the island for all guests. It is a full spread with grilled meats, sides, and desserts and it runs from midday until the early afternoon. The food quality is genuinely good for an outdoor island cookout.</p>
              <p>There are additional dining and bar options around the island that you pay for separately unless you have a beverage package. The swim-up bar at Oasis Lagoon is covered by the Royal Caribbean beverage package if you have one, which makes it one of the best uses of a drinks package across the whole sailing.</p>
            </Accordion>

            <Accordion title="What Is Included vs What Costs Extra">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Included:</strong> Beach access, standard sun lounger, BBQ lunch, Oasis Lagoon pool access, snorkeling in the lagoon area</li>
                <li><strong>Upcharge:</strong> Thrill Waterpark, premium cabanas and loungers, Up, Up and Away balloon, water sports rentals, adults-only Sentiment Beach premium areas, specialty food and drinks beyond the included BBQ</li>
              </ul>
            </Accordion>
          </section>
        )}

        {/* CROWN AND ANCHOR LOYALTY */}
        {activeTab === "loyalty" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Crown and Anchor Society</h2>
            <p className="text-gray-500 mb-8">Crown and Anchor Society is Royal Caribbean's loyalty program and it rewards you for every night you sail. Eric is a Platinum member with 30 cruise points and 23 cruise nights. Here is everything you need to know about how the program works and why it is worth paying attention to from your very first sailing.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: RC_ACCENT, borderLeft: `4px solid ${RC_NAVY}` }}>
              <strong>Eric is Platinum.</strong> He has earned 30 Crown and Anchor points across his four Royal Caribbean sailings on Symphony, Oasis, Anthem, and Majesty. He knows the program from personal experience and can walk you through how to maximize your points from day one.
            </div>

            <Accordion title="How Points Are Earned">
              <p className="mb-3">You earn Crown and Anchor points for every night you sail on Royal Caribbean. Standard cabins earn one point per night. Suite guests earn three points per night. So a 7-night sailing in a standard cabin earns you 7 points, while the same sailing in a suite earns 21 points.</p>
              <p>Points accumulate across all your Royal Caribbean sailings and never expire as long as you sail at least once every three years. The program is completely free to join and your points start accumulating on your first sailing.</p>
            </Accordion>

            <Accordion title="The Tier Levels and What They Get You">
              <p className="mb-3">Crown and Anchor has six tiers and the perks get meaningfully better as you climb:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>Gold (3-11 points)</strong> — Welcome gift, savings certificates for future sailings, members-only offers</li>
                <li><strong>Platinum (30-54 points) — Eric's current tier</strong> — Priority check-in, a complimentary dinner at a specialty restaurant, complimentary internet package on select sailings, exclusive access to the Platinum and above lounge onboard, complimentary bag of laundry, balcony discount</li>
                <li><strong>Emerald (55-79 points)</strong> — All Platinum perks plus additional savings and priority tendering at certain ports</li>
                <li><strong>Diamond (80-174 points)</strong> — Four complimentary drinks per day at select bars onboard, dedicated Diamond Lounge access with complimentary happy hour drinks nightly, priority boarding, complimentary internet</li>
                <li><strong>Diamond Plus (175-699 points)</strong> — Six complimentary drinks per day, expanded Diamond Lounge access, additional specialty dining credits, concierge service</li>
                <li><strong>Pinnacle Club (700+ points)</strong> — The highest tier with unlimited complimentary drinks, dedicated concierge, complimentary specialty dining every night, suite-level perks regardless of cabin, and invitation to exclusive Pinnacle events</li>
              </ul>
              <p>Diamond is where the program really starts to pay for itself financially with the included nightly drinks. Chasing Diamond is a legitimate goal for frequent Royal Caribbean sailors.</p>
            </Accordion>

            <Accordion title="The Platinum Perks Eric Actually Uses">
              <p className="mb-3">As a Platinum member Eric gets priority check-in which means skipping the regular check-in line and getting onboard faster. The complimentary specialty dining dinner is a genuine perk, essentially a free dinner at a restaurant that would otherwise cost $40 to $60 per person.</p>
              <p className="mb-3">The Platinum lounge access gives you a quieter space to hang out onboard separate from the main public areas. It is a nice perk on busy sea days when the main areas get crowded.</p>
              <p>The internet package on select sailings is one of the most practical perks because staying connected onboard usually costs real money and having it covered is something you notice immediately.</p>
            </Accordion>

            <Accordion title="How to Maximize Your Points">
              <p className="mb-3">A few strategies that make a real difference in how fast you accumulate Crown and Anchor points:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>Longer sailings earn more points</strong> — A 7-night sailing earns 7 points. A 14-night sailing earns 14. If you have flexibility, longer itineraries accelerate your tier progress significantly</li>
                <li><strong>Suite bookings triple your points</strong> — One night in a suite earns 3 points versus 1 point in a standard cabin. If a suite fits your budget, the point acceleration is a meaningful benefit</li>
                <li><strong>Book early and transfer to me</strong> — Royal Caribbean allows bookings made directly to be transferred to a travel advisor within a certain window. You can grab a good early booking price and still get my support and any advisor perks that apply</li>
                <li><strong>Stack sailings strategically</strong> — If you are close to a tier threshold, one extra sailing can jump you up and unlock significantly better perks for every future trip</li>
              </ul>
            </Accordion>

            <Accordion title="Crown and Anchor vs Other Loyalty Programs">
              <p className="mb-3">Every major cruise line has a loyalty program and they are all worth enrolling in from day one. Here is a quick comparison of what Eric knows firsthand:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>Royal Caribbean Crown and Anchor</strong> — Strong program with meaningful perks at Diamond and above. The drinks benefit at Diamond level is one of the best financial perks in cruise loyalty programs</li>
                <li><strong>NCL Latitudes</strong> — NCL's loyalty program with similar tier structure. Priority boarding and specialty dining credits are highlights at higher tiers</li>
                <li><strong>MSC Voyagers Club</strong> — MSC's program which offers discounts on future sailings and some onboard perks. Growing in value as MSC expands its North America presence</li>
                <li><strong>Virgin Voyages Sailing Club</strong> — Virgin's loyalty program is newer but offers some strong perks including bar tab credits and cabin upgrades for returning sailors</li>
              </ul>
              <p>The best strategy is to pick one or two lines you love and sail them consistently to build toward meaningful tier levels rather than spreading your sailings across too many lines and never reaching the tiers where the real perks kick in.</p>
            </Accordion>
          </section>
        )}

        {/* SHORE EXCURSIONS */}
        {activeTab === "excursions" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Shore Excursions</h2>
            <p className="text-gray-500 mb-8">Royal Caribbean's shore excursion program is one of the most comprehensive in the industry. You can book through the Royal Caribbean app or website before you sail. Here is what to know and a look at some of the ports Eric has visited on Royal sailings.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: RC_ACCENT, borderLeft: `4px solid ${RC_NAVY}` }}>
              <p className="font-semibold mb-1">Always book before you sail and always book through the ship.</p>
              <p className="mb-2">Pre-cruise pricing is lower and popular excursions sell out. The best port experiences go fast.</p>
              <p>When you book through Royal Caribbean, the ship waits for you if your excursion runs long. If you book independently and you are late, the ship leaves without you. That risk matters more on a port-heavy Caribbean itinerary where the next port might be a different country.</p>
            </div>

            {[
              {
                port: "Perfect Day at CocoCay, Bahamas",
                eric: true,
                about: "Eric visited CocoCay on Symphony of the Seas and calls it the best private island day he has had in cruising. The full breakdown is in the CocoCay tab but the short version is: go to the waterpark, spend time at Oasis Lagoon, eat the included BBQ, and stay until the last tender.",
                excursions: ["Thrill Waterpark (upcharge, book early)", "Up Up and Away Balloon Ride", "Oasis Lagoon Pool (included)", "Snorkeling Adventure", "Premium Cabana Rental", "Adults-Only Sentiment Beach"]
              },
              {
                port: "Cozumel, Mexico",
                eric: true,
                about: "Eric visited Cozumel on his Oasis of the Seas Western Caribbean sailing. One of the top snorkeling and diving destinations in the world. The reef here is part of the Mesoamerican Barrier Reef and the visibility is outstanding.",
                excursions: ["Snorkel at Palancar Reef", "Scuba Diving for Certified Divers", "Catamaran Sail and Snorkel", "Dune Buggy Island Tour", "Swim with Dolphins", "Mr. Sancho's Beach Club"]
              },
              {
                port: "Labadee, Haiti",
                eric: false,
                about: "Royal Caribbean's other private destination on the northern coast of Haiti. Labadee has a beautiful beach setting, the longest overwater zip line in the world, and a great beach barbecue. A completely different feel from CocoCay with a more lush, tropical landscape.",
                excursions: ["Dragon's Breath Zip Line over the Water", "Dragon's Splash Waterslide", "Labadee Beach Break", "Kayaking and Snorkeling", "Haitian Cultural Village Tour", "Dragon's Tail Roller Coaster"]
              },
              {
                port: "Nassau, Bahamas",
                eric: false,
                about: "A classic Caribbean port with beaches, history, and shopping within easy reach. Atlantis is the big draw for most visitors and worth it if beach and water park time is the priority.",
                excursions: ["Atlantis Beach Day", "Blue Lagoon Island Snorkel and Beach", "Nassau Historical Walking Tour", "Swim with Dolphins", "Atlantis Water Park Access"]
              },
              {
                port: "Bermuda",
                eric: true,
                about: "Eric visited Bermuda on the Anthem of the Seas sailing out of Cape Liberty. Bermuda is a completely different experience from the Caribbean ports. Pink sand beaches, pastel architecture, and a sophisticated British-influenced culture make it one of the most unique port stops you can do on any cruise line.",
                excursions: ["Snorkeling at the Bermuda Triangle area", "Glass Bottom Boat Tour", "Pink Sand Beach at Horseshoe Bay", "Bermuda Historical Tour", "Jet Ski Tour around the Island", "Cliff Jumping at Church Bay"]
              },
              {
                port: "Falmouth, Jamaica",
                eric: false,
                about: "Gateway to Dunn's River Falls and some of the best adventure excursions in the Caribbean. Jamaica has a vibrant culture and beautiful natural landscape. The port area itself is well developed but the real Jamaica is a short ride away.",
                excursions: ["Dunn's River Falls Climb", "Blue Hole and Secret Falls", "Catamaran Snorkel and Beach", "Reggae Hill Party", "ATV Adventure through the Jungle"]
              },
            ].map((p) => (
              <Accordion key={p.port} title={`${p.port}${p.eric ? " — Eric Has Been Here" : ""}`}>
                <p className="mb-4">{p.about}</p>
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
            <h2 className="text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Trip Insurance</h2>
            <p className="text-gray-500 mb-8">I always recommend trip insurance on every cruise booking. Travel puts you in situations where things can go sideways in ways nobody plans for. This is the coverage that keeps a rough moment from becoming a financial disaster.</p>

            <div className="p-5 rounded-xl mb-6 text-white text-sm" style={{ background: RC_NAVY }}>
              <strong>Buy it at booking.</strong> Trip insurance is cheaper when you add it at the time of your initial deposit and certain pre-existing condition coverage only applies within the first 14 to 21 days of booking. Do not wait on this one.
            </div>

            <Accordion title="What If You Get Sick Before You Leave?">
              <p className="mb-3">You have planned and saved for this trip and something medical comes up two days before you sail. Without insurance you lose your cruise fare because the cancellation deadline has passed.</p>
              <p>With a covered illness and trip insurance, you cancel and get reimbursed. You reschedule when you feel better and nothing is permanently lost.</p>
            </Accordion>

            <Accordion title="What If a Family Member Has an Emergency?">
              <p>A parent ends up in the hospital. A family situation changes everything. Trip cancellation coverage for family medical emergencies means you can be where you need to be without losing the money you put into the trip.</p>
            </Accordion>

            <Accordion title="What If You Get Hurt at Sea or Overseas?">
              <p className="mb-3">Your regular health insurance often does not cover you outside the United States. A medical evacuation from a ship or from a Caribbean port can cost tens of thousands of dollars without coverage.</p>
              <p>Trip insurance with medical and evacuation coverage means you get the care you need and the transport home safely no matter where you are when something happens.</p>
            </Accordion>

            <Accordion title="What If Your Flight Gets Cancelled?">
              <p>You are flying to Miami, Port Canaveral, or Cape Liberty for your Royal Caribbean sailing and your flight gets cancelled. Trip delay coverage helps cover last-minute hotel stays, meals, and rebooking costs when your travel falls apart.</p>
            </Accordion>

            <Accordion title="What If Your Luggage Gets Lost?">
              <p>Airlines lose bags. If your luggage does not make the connection and you are boarding in Miami, baggage delay coverage helps you cover the essentials while your bags catch up. No starting a Caribbean cruise in the clothes you flew in.</p>
            </Accordion>

            <Accordion title="Why Buy at Booking?">
              <p className="mb-3">Two reasons. First, it costs less when you buy early because risk is lower. Second, pre-existing condition coverage requires you to buy within a set window of your initial deposit. Miss that window and that coverage is gone.</p>
              <p>I flag this for every client upfront. Lock it in at booking and you are covered for whatever comes up.</p>
            </Accordion>
          </section>
        )}

        {/* ERIC'S TIPS */}
        {activeTab === "tips" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: RC_DARK }}>Eric's Tips for Your Royal Caribbean Sailing</h2>
            <p className="text-gray-500 mb-8">I have sailed Royal Caribbean four times on four different ships. Here is what I actually tell people before they board.</p>

            <Accordion title="Sign Up for Crown and Anchor Before You Board">
              <p>If you do not have a Crown and Anchor account, create one before your sailing and make sure it is linked to your reservation. Your points will not be credited retroactively if you forget to enroll. Starting from day one means every night counts toward your tier progress from the very first sailing.</p>
            </Accordion>

            <Accordion title="Book the Royal App Reservations Early">
              <p className="mb-3">Download the Royal Caribbean app before you sail and start booking as soon as your reservation window opens. Broadway shows, specialty dining, CocoCay waterpark, the North Star, RipCord by iFLY, and shore excursions all fill up. The best seats and time slots go to the people who book earliest.</p>
              <p>I always give clients a heads up when their booking window opens so they can get in early.</p>
            </Accordion>

            <Accordion title="CocoCay Waterpark — Book Before You Sail">
              <p>The Thrill Waterpark at CocoCay is almost always cheaper when you book it before your sailing rather than at the island. It also sells out. If CocoCay is on your itinerary and you want the waterpark, lock it in early. You will not regret it. Eric went and it was one of the highlights of his entire Royal Caribbean sailing history.</p>
            </Accordion>

            <Accordion title="The AquaTheater Show Is Free and Unmissable">
              <p>On Oasis class ships the AquaTheater at the Boardwalk hosts high diving and acrobatics shows that are completely free and genuinely spectacular. Reserve seats through the app before you sail. The shows book up and the reserved seats go fast. Standing room is available but you want a good seat for this one.</p>
            </Accordion>

            <Accordion title="Ride the North Star During a Port Call">
              <p>On Quantum class ships like Anthem of the Seas the North Star observation capsule is free on sea days and costs extra on port days. Pay for the port day ride. The view of Bermuda or whatever port you are approaching from 300 feet above the ship is something you will not get any other way. Worth every dollar.</p>
            </Accordion>

            <Accordion title="Go to the FlowRider During Off-Peak Times">
              <p>The FlowRider gets long lines on sea days, especially in the afternoon. Go early in the morning, during meal times, or later in the evening when the crowd thins. The wait during off-peak times can drop from 45 minutes to almost nothing. More rides, less standing around.</p>
            </Accordion>

            <Accordion title="Central Park at Night Is Something Special">
              <p>On Oasis class ships walk through Central Park late in the evening after dinner. The lighting, the quiet, the real trees growing eight decks above the waterline with the ocean somewhere beyond it all. It is one of the most unexpected and genuinely beautiful spaces at sea. Take it slowly and take it in.</p>
            </Accordion>

            <Accordion title="Prepay Gratuities and Book Dining Early">
              <p className="mb-3">Prepay your gratuities at booking so you board knowing your complete cost. Add your specialty dining reservations as soon as your booking window opens. On the larger ships the popular restaurants including 150 Central Park and Giovanni's fill up well before the sailing starts.</p>
              <p>The earlier you set everything up the more relaxed your embarkation day will feel. You board and everything is already handled.</p>
            </Accordion>

            <Accordion title="Get Trip Insurance at Booking">
              <p>Lock in trip insurance at the time of your initial deposit. It is cheaper then and you get full pre-existing condition coverage within that early window. Sailing internationally or even domestically on a large ship puts you in situations your regular health insurance was not built for. Cover yourself from the start.</p>
            </Accordion>
          </section>
        )}

        {/* CTA */}
        <div className="mt-14 rounded-2xl p-8 text-center text-white" style={{ background: `linear-gradient(135deg, ${RC_DARK}, ${RC_NAVY})` }}>
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: RC_GOLD }}>Ready to Sail Royal Caribbean</p>
          <h3 className="text-2xl font-bold mb-3">Big Ships. Real Value. Someone In Your Corner.</h3>
          <p className="mb-6 max-w-lg mx-auto" style={{ color: "#CBD5E1" }}>
            I've sailed Royal Caribbean four times and I'm a Platinum Crown & Anchor member, so I know these massive ships inside and out. When you work with me, you get that actual firsthand knowledge to find the right ship for your style, and someone who actually answers the phone when you have a question. Drop your info below and let's get it sorted.
          </p>
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-bold text-base transition hover:opacity-90"
            style={{ background: RC_GOLD, color: RC_DARK }}
          >
            Why wait? Let's plan, book, and sail.
          </a>
        </div>

      </div>
    </div>
  );
}
