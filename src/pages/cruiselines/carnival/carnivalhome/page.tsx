import { useState } from "react";

const CARNIVAL_RED = "#CC0000";
const CARNIVAL_LIGHT = "#FFF5F5";
const CARNIVAL_DARK = "#1A0000";
const CARNIVAL_GOLD = "#C9A84C";
const CARNIVAL_ACCENT = "#FFE8E8";

const FORM_LINK = "https://forgehq.app/f/?t=7ro7s57c";

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-red-100 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-4 text-left font-semibold text-gray-800 hover:bg-red-50 transition-colors gap-4"
        style={{ background: open ? CARNIVAL_ACCENT : "white" }}
      >
        <span className="text-sm md:text-base leading-snug">{title}</span>
        <span
          className="text-2xl transition-transform duration-200 flex-shrink-0"
          style={{ color: CARNIVAL_RED, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-4 py-4 bg-white border-t border-red-100 text-gray-700 leading-relaxed text-sm md:text-base">
          {children}
        </div>
      )}
    </div>
  );
}

const TABS = [
  { id: "about", label: "About Carnival" },
  { id: "ships", label: "The Ships" },
  { id: "dining", label: "Dining" },
  { id: "fun", label: "What Makes Carnival Fun" },
  { id: "solo", label: "Solo Travel" },
  { id: "island", label: "Celebration Key" },
  { id: "cheers", label: "CHEERS! Package" },
  { id: "vifp", label: "VIFP Club" },
  { id: "excursions", label: "Shore Excursions" },
  { id: "insurance", label: "Trip Insurance" },
  { id: "tips", label: "Eric's Tips" },
];

export default function CarnivalPage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen" style={{ background: CARNIVAL_LIGHT, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Hero */}
      <div
        className="relative py-12 md:py-24 px-4 text-center text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${CARNIVAL_DARK} 0%, ${CARNIVAL_RED} 60%, #FF4444 100%)` }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 25%, white 1px, transparent 1px)",
            backgroundSize: "55px 55px"
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-5xl font-bold mb-3 leading-tight">Carnival Cruise Line</h1>
          <p className="text-base md:text-xl mb-4 leading-relaxed" style={{ color: "#FFD0D0" }}>
            The Fun Ship. The most popular cruise line in the world for a reason. Great value, nonstop entertainment, and an atmosphere where strangers become friends by night two. Eric has sailed Carnival and the good time is real.
          </p>
          <p className="text-xs md:text-base" style={{ color: "#FFA0A0" }}>
            Everything you need to know about sailing Carnival, put together by Eric, your HDT travel advisor.
          </p>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 shadow-md overflow-x-auto scrollbar-none" style={{ background: CARNIVAL_DARK }}>
        <div className="flex justify-start min-w-max px-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-3 md:px-5 py-3 text-xs font-semibold whitespace-nowrap transition-all border-b-2"
              style={{
                color: activeTab === tab.id ? CARNIVAL_GOLD : "#94A3B8",
                borderBottomColor: activeTab === tab.id ? CARNIVAL_GOLD : "transparent",
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

        {/* ABOUT CARNIVAL */}
        {activeTab === "about" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: CARNIVAL_DARK }}>About Carnival Cruise Line</h2>
            <p className="text-gray-500 text-sm mb-6">Carnival is the most popular cruise line in the world and they earned that title by doing one thing better than anyone else. Making people have a good time. Eric sailed Carnival once and the experience was exactly what the brand promises. Great people, great energy, and memories that stick.</p>

            <Accordion title="Who Is Carnival?">
              <p className="mb-3">Carnival Cruise Line is an American cruise company founded in 1972 and based in Miami. They started with one ship and a vision to make cruising accessible and fun for everyday people rather than just the wealthy. That philosophy never changed and it is why they became the largest cruise line in the world by passenger volume.</p>
              <p className="mb-3">Carnival is not trying to be the most refined or the most sophisticated line at sea. They are trying to make sure you have the most fun. And they are very, very good at it. The ships are colorful, the staff is energetic, the food is solid, and the atmosphere is unlike anything else on the water.</p>
              <p className="text-sm" style={{ color: "#6B7280" }}>
                Carnival operates one of the largest cruise fleets in the world, sailing from more U.S. homeports than any other cruise line.{" "}
                
                  href="https://www.carnival.com/cruise-ships"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: CARNIVAL_RED, textDecoration: "underline" }}
                >
                  Learn more about the Carnival fleet at carnival.com
                </a>.
              </p>
            </Accordion>

            <Accordion title="The Fun Ship Philosophy">
              <p className="mb-3">Every Carnival ship is called a Fun Ship and that is not just marketing. The entire onboard experience is designed around the idea that a vacation should feel like a party. The public spaces are lively, the entertainment runs all day and into the night, the bars are busy, and the energy builds as the sailing progresses.</p>
              <p className="mb-3">By night two on a Carnival sailing most people have met more strangers who feel like friends than they would in a month of regular life. Something about the combination of the ship, the ocean, the open bar, and the shared experience accelerates social connections in a way that is genuinely unique to Carnival.</p>
              <p>Eric sailed Carnival once with his friend JB and the energy onboard was exactly that. New people everywhere, a great time every night, and the kind of trip you talk about for years afterward.</p>
            </Accordion>

            <Accordion title="Who Is Carnival Best For?">
              <ul className="list-disc pl-5 space-y-2">
                <li>First-time cruisers who want to ease in with a fun approachable experience</li>
                <li>Groups of friends who want maximum energy and entertainment</li>
                <li>Travelers on a budget who do not want to sacrifice a good time</li>
                <li>Anyone who has been told cruises are boring and wants to be proven wrong immediately</li>
                <li>People who love meeting strangers and making new friends on vacation</li>
                <li>Families with kids who want a ship that keeps everyone entertained</li>
                <li>Anyone who just wants to go somewhere warm, eat well, drink something cold, and laugh a lot</li>
              </ul>
            </Accordion>

            <Accordion title="Eric's Carnival Experience">
              <p className="mb-3">I sailed Carnival once with my friend JB and it was one of those trips that just worked from the moment we boarded. The energy on the ship was immediate. People were already talking to strangers at the pool bar before we even left port.</p>
              <p className="mb-3">We met a group of girls early in the sailing and ended up spending most of the trip together exploring ports, eating together, dancing at night, and having the kind of vacation where you completely lose track of what day it is. That is Carnival doing exactly what it is designed to do.</p>
              <p>Is it the most refined cruise experience? No. Is it an absolute blast? Every single time for the right person. If you want to have fun and meet people, Carnival is a genuinely great choice and I am happy to help you find the right ship and itinerary for it.</p>
            </Accordion>
          </section>
        )}

        {/* THE SHIPS */}
        {activeTab === "ships" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: CARNIVAL_DARK }}>The Carnival Fleet</h2>
            <p className="text-gray-500 text-sm mb-6">Carnival has one of the largest fleets in the world with ships sailing from ports all over the United States. From classic mid-size ships to their massive new Excel class vessels, here is a breakdown of what is out there.</p>

            <h3 className="text-base font-bold mb-3 mt-6" style={{ color: CARNIVAL_RED }}>Excel Class — Carnival's Biggest and Newest</h3>
            {[
              {
                name: "Carnival Celebration",
                built: "2022",
                capacity: "5,374",
                homeport: "Miami",
                notes: "The newest Excel class ship and one of the most feature-packed vessels in the Carnival fleet. Celebration is homeported in Miami and sails Caribbean itineraries with Carnival's most advanced entertainment and dining options including the first roller coaster at sea on a Carnival ship.",
                highlights: ["BOLT roller coaster at sea", "Celebration Key private island access", "Lido Deck with multiple pools", "Multiple specialty dining venues", "Miami homeport", "Caribbean itineraries"]
              },
              {
                name: "Mardi Gras",
                built: "2021",
                capacity: "5,282",
                homeport: "Port Canaveral, FL",
                notes: "The first Excel class ship and the first Carnival vessel to feature BOLT, the first roller coaster at sea. Mardi Gras sails from Port Canaveral and was a complete game changer for the Carnival fleet when she launched. She has six themed zones across the ship each with its own restaurants, bars, and entertainment.",
                highlights: ["BOLT roller coaster at sea", "Six themed zones onboard", "Port Canaveral homeport", "Celebration Key itineraries", "Largest Carnival ship at launch", "Summer Landing outdoor bar area"]
              },
              {
                name: "Carnival Jubilee",
                built: "2023",
                capacity: "5,374",
                homeport: "Galveston, TX",
                notes: "The third Excel class ship and the first large Carnival ship homeported in Galveston. Jubilee gives Gulf Coast travelers access to the full Excel class experience including BOLT, the six zone design, and all the new dining and entertainment concepts without flying to Florida.",
                highlights: ["BOLT roller coaster", "Galveston homeport", "Six themed zones", "Gulf Coast Caribbean itineraries", "Celebration Key access"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · ${ship.homeport} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: CARNIVAL_RED }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: CARNIVAL_RED }}>Vista Class</h3>
            {[
              {
                name: "Carnival Panorama",
                built: "2019",
                capacity: "4,008",
                homeport: "Long Beach, CA",
                notes: "The only large Carnival ship homeported on the West Coast. Panorama sails Mexican Riviera itineraries from Long Beach making her the go-to option for West Coast travelers who want a Carnival sailing without flying east. She has the SkyRide aerial attraction and a strong pool deck setup.",
                highlights: ["West Coast homeport in Long Beach", "Mexican Riviera itineraries", "SkyRide aerial attraction", "WaterWorks water park", "Seafood Shack specialty dining"]
              },
              {
                name: "Carnival Vista",
                built: "2016",
                capacity: "3,934",
                homeport: "Galveston, TX",
                notes: "The original Vista class ship and the one that introduced several features now standard across the fleet including the SkyRide, the IMAX theater, and the expanded Serenity adults-only retreat. Vista sails from Galveston on Caribbean itineraries.",
                highlights: ["SkyRide aerial bikes over the ocean", "IMAX Theater onboard", "Serenity adults-only area", "WaterWorks water park", "Galveston homeport"]
              },
              {
                name: "Carnival Horizon",
                built: "2018",
                capacity: "3,934",
                homeport: "Miami and New York",
                notes: "Sister ship to Vista sailing from both Miami and New York. Horizon gives Northeast travelers the ability to sail Carnival from Manhattan without flying south. She has all the Vista class features and an excellent pool deck setup.",
                highlights: ["Miami and New York homeports", "SkyRide aerial bikes", "WaterWorks water park", "Dr. Seuss WaterWorks for kids", "Serenity adults-only retreat"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · ${ship.homeport} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: CARNIVAL_RED }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: CARNIVAL_RED }}>Dream Class</h3>
            {[
              {
                name: "Carnival Dream",
                built: "2009",
                capacity: "3,646",
                homeport: "New Orleans, LA",
                notes: "The original Dream class ship homeported in New Orleans. Carnival Dream gives Gulf South travelers a convenient homeport option with Caribbean itineraries. She has the full Dream class feature set including the Serenity adults-only deck and a solid entertainment lineup.",
                highlights: ["New Orleans homeport", "Serenity adults-only area", "WaterWorks splash zone", "Multiple pool areas", "Caribbean itineraries"]
              },
              {
                name: "Carnival Magic",
                built: "2011",
                capacity: "3,652",
                homeport: "Port Canaveral and Baltimore",
                notes: "Dream class ship sailing from Port Canaveral and Baltimore. Magic gives East Coast travelers access to Carnival without flying to Florida with seasonal Baltimore sailings to the Bahamas and Caribbean.",
                highlights: ["Baltimore and Port Canaveral homeports", "Serenity adults-only area", "WaterWorks water park", "Multiple dining venues", "Caribbean and Bahamas itineraries"]
              },
              {
                name: "Carnival Breeze",
                built: "2012",
                capacity: "3,690",
                homeport: "Miami",
                notes: "The newest Dream class ship with a tropical beach-inspired design. Breeze sails from Miami and has a particularly well-designed pool deck and outdoor entertainment area. One of the more popular ships in the fleet for first-time Carnival cruisers.",
                highlights: ["Miami homeport", "Tropical beach design theme", "WaterWorks water park", "Serenity adults-only area", "Thrill Theater", "Caribbean itineraries"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · ${ship.homeport} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: CARNIVAL_RED }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: CARNIVAL_RED }}>Sunshine and Splendor Class</h3>
            {[
              {
                name: "Carnival Sunshine",
                built: "1996, Refurbished 2013",
                capacity: "3,006",
                homeport: "Charleston, SC and Port Canaveral",
                notes: "Originally Carnival Destiny, Sunshine underwent a major transformation in 2013 that made her one of the most updated ships in the classic fleet. She homeports in Charleston, one of the most convenient embarkation cities on the East Coast, and sails Caribbean itineraries.",
                highlights: ["Charleston homeport", "Major 2013 refurbishment", "Guy's Burger Joint onboard", "BlueIguana Cantina", "Multiple pool areas", "Caribbean itineraries"]
              },
              {
                name: "Carnival Splendor",
                built: "2008",
                capacity: "3,006",
                homeport: "Long Beach, CA",
                notes: "Sailing from Long Beach alongside Panorama, Splendor offers another West Coast option for Carnival travelers. She sails Mexican Riviera and Baja California itineraries and has a classic Carnival feel with updates from her refurbishments.",
                highlights: ["Long Beach West Coast homeport", "Mexican Riviera itineraries", "Classic Carnival atmosphere", "Multiple pool areas"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — ${ship.built} · ${ship.homeport} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: CARNIVAL_RED }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: CARNIVAL_RED }}>Spirit Class</h3>
            {[
              {
                name: "Carnival Spirit",
                built: "2001",
                capacity: "2,124",
                homeport: "Seattle, WA",
                notes: "Carnival's Alaska ship sailing from Seattle. Spirit brings the Carnival Fun Ship experience to the Pacific Northwest and Alaska itineraries. A great option for travelers who want Carnival's value and atmosphere on a scenic Alaska sailing.",
                highlights: ["Seattle homeport", "Alaska itineraries", "Classic Spirit class design", "Full Carnival entertainment"]
              },
              {
                name: "Carnival Legend",
                built: "2002",
                capacity: "2,124",
                homeport: "Tampa, FL",
                notes: "Spirit class ship sailing from Tampa on Caribbean itineraries. Legend is a popular choice for Florida-based travelers who prefer the Tampa homeport over Miami or Port Canaveral.",
                highlights: ["Tampa homeport", "Caribbean itineraries", "Classic Fun Ship atmosphere", "Serenity adults-only area"]
              },
              {
                name: "Carnival Miracle",
                built: "2004",
                capacity: "2,124",
                homeport: "Tampa and Seattle",
                notes: "Spirit class ship sailing from both Tampa and Seattle depending on the season. Miracle offers solid Caribbean sailings in winter and transitions to Alaska in summer, giving it one of the more interesting seasonal itinerary ranges in the fleet.",
                highlights: ["Tampa winter, Seattle summer homeports", "Caribbean and Alaska itineraries", "Classic Spirit class experience", "Flexible seasonal deployment"]
              },
              {
                name: "Carnival Pride",
                built: "2002",
                capacity: "2,124",
                homeport: "Baltimore, MD",
                notes: "One of the most convenient Carnival options for Mid-Atlantic travelers. Pride homeports in Baltimore making it a drive-to option for guests from Virginia, Maryland, DC, Pennsylvania, and the surrounding region. Sails Caribbean and Bermuda itineraries.",
                highlights: ["Baltimore homeport", "Drive-to option for Mid-Atlantic", "Caribbean and Bermuda itineraries", "Classic Fun Ship atmosphere"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · ${ship.homeport} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: CARNIVAL_RED }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <h3 className="text-base font-bold mb-3 mt-8" style={{ color: CARNIVAL_RED }}>Conquest Class</h3>
            {[
              {
                name: "Carnival Conquest",
                built: "2002",
                capacity: "2,974",
                homeport: "New Orleans, LA",
                notes: "Conquest class ship sailing from New Orleans alongside Carnival Dream. A classic mid-size Carnival ship with strong Caribbean itineraries from one of the most fun embarkation cities in the country.",
                highlights: ["New Orleans homeport", "Caribbean itineraries", "Classic Carnival experience", "Multiple pool areas"]
              },
              {
                name: "Carnival Glory",
                built: "2003",
                capacity: "2,974",
                homeport: "Miami and New Orleans",
                notes: "Conquest class ship sailing from Miami. Glory has a colorful design and the classic mid-size Carnival feel with a solid entertainment program and multiple dining options.",
                highlights: ["Miami homeport", "Caribbean itineraries", "WaterWorks splash zone", "Classic Carnival atmosphere"]
              },
              {
                name: "Carnival Valor",
                built: "2004",
                capacity: "2,974",
                homeport: "New Orleans, LA",
                notes: "Conquest class ship with a patriotic American theme sailing from New Orleans. Valor is a popular choice for Gulf South travelers and has a loyal repeat guest following.",
                highlights: ["New Orleans homeport", "American patriotic theme", "Caribbean itineraries", "Classic mid-size Carnival"]
              },
              {
                name: "Carnival Liberty",
                built: "2005",
                capacity: "2,974",
                homeport: "Port Canaveral, FL",
                notes: "Conquest class ship sailing from Port Canaveral. Liberty is a solid classic Carnival option for Florida-based travelers who want a proven mid-size ship with a strong Caribbean itinerary lineup.",
                highlights: ["Port Canaveral homeport", "Caribbean itineraries", "Classic Conquest class design", "Full Carnival entertainment"]
              },
              {
                name: "Carnival Freedom",
                built: "2007",
                capacity: "2,974",
                homeport: "Port Canaveral, FL",
                notes: "The newest Conquest class ship with an American freedom theme. Freedom sails from Port Canaveral and has been updated with several new features including Guy's Burger Joint and BlueIguana Cantina.",
                highlights: ["Port Canaveral homeport", "Guy's Burger Joint", "BlueIguana Cantina", "Caribbean itineraries", "Updated features"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-3">
                <Accordion title={`${ship.name} — Built ${ship.built} · ${ship.homeport} · Capacity ${ship.capacity}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><p className="mb-3">{ship.notes}</p></div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: CARNIVAL_RED }}>Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <div className="mt-8 p-4 rounded-xl text-white text-sm" style={{ background: CARNIVAL_RED }}>
              <strong>Not sure which ship is right for you?</strong> Carnival sails from more US homeports than any other cruise line. Chances are there is a Carnival ship within driving distance of wherever you are. Tell me where you are and where you want to go and I will find you the right fit.
            </div>
          </section>
        )}

        {/* DINING */}
        {activeTab === "dining" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: CARNIVAL_DARK }}>Dining Onboard</h2>
            <p className="text-gray-500 text-sm mb-6">Carnival's dining program has evolved significantly in recent years. The food is better than it used to be and the casual dining options are some of the best freebies in the cruise industry. Here is what to expect.</p>

            <Accordion title="Main Dining Room (Included)">
              <p className="mb-3">Carnival's main dining rooms offer both Your Time Dining with flexible seating times and set early and late seatings. The menus rotate nightly with a mix of classic American comfort food, international options, and Carnival signature dishes.</p>
              <p>The food quality in the MDR has improved noticeably over recent years and the service is warm and attentive. The lobster night on formal nights is a Carnival tradition that still holds up.</p>
            </Accordion>

            <Accordion title="Guy's Burger Joint (Included)">
              <p className="mb-3">Created in partnership with Food Network personality Guy Fieri, Guy's Burger Joint is one of the most talked about free dining options on any cruise ship. Hand-crafted burgers, fresh-cut fries, and a variety of toppings available all day during pool hours.</p>
              <p>The burgers are genuinely good. Not cruise ship approximation of a burger. Actually good burgers. It is one of the things Carnival gets right that nobody expects them to get right. There is always a line and it is always worth the wait.</p>
            </Accordion>

            <Accordion title="BlueIguana Cantina (Included)">
              <p className="mb-3">A Mexican street food concept available for breakfast and lunch with burritos, tacos, and fresh-made tortillas. The breakfast burritos are a crowd favorite and a great way to start a port day when you want something quick and satisfying before heading ashore.</p>
              <p>Available on most ships in the fleet and completely free. One of those casual options you end up going back to multiple times during the sailing.</p>
            </Accordion>

            <Accordion title="Pig and Anchor Smokehouse (Included on Select Ships)">
              <p className="mb-3">A full barbecue smokehouse restaurant available on Excel class ships at no charge during lunch hours. Smoked brisket, pulled pork, ribs, and all the sides. On a ship where most comparable specialty food elsewhere would cost extra, having a proper BBQ restaurant included is one of the standout features of the newer Carnival ships.</p>
              <p>If your ship has Pig and Anchor, go. It is one of the best free dining experiences on any cruise ship period.</p>
            </Accordion>

            <Accordion title="Specialty Dining — Fahrenheit 555 Steakhouse">
              <p className="mb-3">Carnival's premium steakhouse available on most ships at an additional charge. Aged steaks, quality sides, and a wine list that holds up. The atmosphere is more intimate and refined than the main dining room and it is a good option for a special dinner or when you want something elevated.</p>
              <p>Worth the upcharge for a celebratory night or when the main dining room menu does not appeal. Reserve early because it books up.</p>
            </Accordion>

            <Accordion title="Bonsai Sushi (Specialty)">
              <p>A sushi restaurant available on select ships with a menu of rolls, nigiri, and Japanese-inspired small plates. Available for lunch and dinner at an additional charge. A good option when you want something lighter or different from the main dining program.</p>
            </Accordion>

            <Accordion title="24-Hour Pizza and Late Night">
              <p className="mb-3">Carnival's 24-hour pizza is a fleet staple and it is solid. Fresh dough, reasonable toppings, and always available. Late night after a long day at a port or a night out at the casino and bars, the pizza line is always humming and always delivering.</p>
              <p>Room service is also available around the clock for a small delivery fee. Good for early mornings before a port day or late nights when you want something without going out.</p>
            </Accordion>
          </section>
        )}

        {/* WHAT MAKES CARNIVAL FUN */}
        {activeTab === "fun" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: CARNIVAL_DARK }}>What Makes Carnival Fun</h2>
            <p className="text-gray-500 text-sm mb-6">Carnival has been the Fun Ship for over 50 years and they have kept adding to the experience with every new ship class. Here are the features that define the Carnival experience.</p>

            <Accordion title="BOLT — The First Roller Coaster at Sea">
              <p className="mb-3">BOLT is an electric roller coaster on the top deck of Excel class ships that reaches speeds up to 40 mph while you ride above the ocean. It is the first roller coaster ever installed on a cruise ship and it is genuinely thrilling.</p>
              <p>Individual rides are available for a per-ride charge or you can get an unlimited package. On a sea day with the ocean stretching out in every direction below you, it is one of the most unique experiences you can have on any cruise ship anywhere. Do not skip it if your ship has it.</p>
            </Accordion>

            <Accordion title="WaterWorks — The Water Park">
              <p className="mb-3">Carnival's WaterWorks is a multi-slide water park on the top deck available on most ships in the fleet. The waterslides range from a twisting tube slide to the Twister which can stretch over 300 feet, and they are all completely free to use throughout your sailing.</p>
              <p>On sea days WaterWorks is one of the most popular spots on the ship. Go early in the morning or during dinner hours when the lines are shorter. The rides are fun for all ages and the water park area has a great energy that is pure Carnival.</p>
            </Accordion>

            <Accordion title="SkyRide — Aerial Bikes Over the Ocean (Vista Class)">
              <p className="mb-3">Available on Vista class ships, SkyRide puts you on a pedal-powered aerial vehicle that rides a track suspended over the sides of the ship. You are literally cycling above the ocean while the ship moves through the Caribbean.</p>
              <p>It is one of the more unusual and memorable experiences on any cruise ship. Free on sea days with a reservation. The views from the track looking out over the water are spectacular.</p>
            </Accordion>

            <Accordion title="Serenity — Adults Only Retreat">
              <p className="mb-3">Carnival knows their ships can get loud and their Serenity adults-only area provides a quieter retreat for guests 21 and over. Hammocks, comfortable lounge chairs, a pool or hot tubs depending on the ship, and a bar nearby.</p>
              <p>It is the spot when you want to enjoy the sun and sea without the water park energy. On ships where kids are running around the main pool deck, Serenity is genuinely peaceful by comparison. Stake your claim early on sea days.</p>
            </Accordion>

            <Accordion title="Hasbro The Game Show (Select Ships)">
              <p className="mb-3">A live game show based on classic Hasbro games including Monopoly, Battleship, and Scrabble where audience members become contestants competing in larger-than-life versions of the games on a full stage. Free for all guests to watch or participate and one of the most entertaining shows Carnival has ever put together.</p>
              <p>It sounds like it should not be this much fun but it absolutely is. The crowd energy during Hasbro shows is some of the best onboard entertainment atmosphere on any cruise line.</p>
            </Accordion>

            <Accordion title="Punchliner Comedy Club">
              <p className="mb-3">Carnival partnered with the Punchliner Comedy Club to bring stand-up comedy to their ships. There are both family-friendly early shows and adults-only late-night shows with professional comedians performing in a dedicated comedy venue.</p>
              <p>The comedy clubs on Carnival ships consistently get strong reviews from guests and they are completely free. A great option for an evening show that is not a Broadway production.</p>
            </Accordion>

            <Accordion title="The Casino">
              <p className="mb-3">Carnival has some of the most active casinos at sea. Slots, table games, poker rooms, and regular tournaments throughout the sailing. The casino tends to stay busy well into the night and has an energy that fits the overall Carnival vibe perfectly.</p>
              <p>You do not have to be a serious gambler to enjoy a few hours at the slots or a hand of blackjack. The casino atmosphere on a Carnival ship on a sea night is a genuinely fun way to spend a few hours.</p>
            </Accordion>

            <Accordion title="Pool Deck Parties and Live Music">
              <p className="mb-3">The pool deck on a Carnival ship on a sea day is its own event. Live music, deck parties, games, towel-folding demonstrations, belly flop contests, and a crowd that is almost universally in a great mood. The energy is infectious.</p>
              <p>Carnival's pool deck atmosphere is one of the things that separates them from more subdued cruise lines. If you want a lively, social, party-adjacent pool day experience, nobody does it better.</p>
            </Accordion>
          </section>
        )}

        {/* SOLO TRAVEL */}
        {activeTab === "solo" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: CARNIVAL_DARK }}>Solo Travel on Carnival</h2>
            <p className="text-gray-500 text-sm mb-6">Carnival is actually one of the more naturally social cruise lines for solo travelers even though it is not marketed as a solo-focused brand. The energy onboard makes meeting people almost unavoidable if you are open to it.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: CARNIVAL_ACCENT, borderLeft: `4px solid ${CARNIVAL_RED}` }}>
              <strong>Eric's honest take:</strong> Carnival does not have a structured solo program like NCL's hosted 5pm meetup with organized group dinners. What Carnival has is an atmosphere where people talk to strangers naturally, constantly, everywhere on the ship. Eric went with a friend but met people immediately and spent much of the trip with new friends they made onboard. For outgoing solo travelers, Carnival's social energy works in your favor.
            </div>

            <Accordion title="Solo Studio Cabins on Select Ships">
              <p className="mb-3">Carnival offers solo studio cabins on select ships priced for a single occupant without a full single supplement. These cabins are available on some of the newer ships in the fleet and are a smart, compact space designed for one person.</p>
              <p>Studio cabin availability varies by ship. Ask me which ships currently offer them and what the solo pricing looks like for your specific sailing before we commit to anything.</p>
            </Accordion>

            <Accordion title="The Single Supplement on Standard Cabins">
              <p className="mb-3">On ships without dedicated solo cabins, Carnival charges a single supplement for solo travelers booking standard cabins. The supplement amount varies by sailing and can range from modest to significant depending on the timing and ship.</p>
              <p>This is something I always check upfront so you know your complete cost before we lock anything in. Sometimes a promotion or specific sailing drops the supplement considerably.</p>
            </Accordion>

            <Accordion title="Why Carnival Works for Solo Travelers">
              <p className="mb-3">The Carnival atmosphere is naturally social in a way that benefits solo travelers who are outgoing. The pool deck is loud and communal. The bars are busy and inviting. The casino is a conversation waiting to happen. The comedy shows and deck parties put you in crowds of people who are all in a great mood.</p>
              <p className="mb-3">Eric sailed with a friend but they met a group of strangers on the first day and spent most of the trip as a larger crew. That kind of thing happens constantly on Carnival because the environment encourages it.</p>
              <p>If you are comfortable saying hello to a stranger at a pool bar, you will not spend a night alone on a Carnival sailing unless you choose to. The ship does the social work for you.</p>
            </Accordion>

            <Accordion title="Best Carnival Ships for Solo Travelers">
              <p className="mb-3">The larger the ship the more opportunities there are to meet people. Excel class ships like Mardi Gras, Carnival Celebration, and Carnival Jubilee have six distinct zones each with their own bars and entertainment which means there are constantly different crowds to find and mix with.</p>
              <p>Vista class ships are also strong for solo travelers because SkyRide, the pool deck parties, and Serenity create varied social environments throughout the day. The medium-large size keeps it manageable without feeling overwhelming.</p>
            </Accordion>
          </section>
        )}

        {/* CELEBRATION KEY */}
        {activeTab === "island" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: CARNIVAL_DARK }}>Celebration Key</h2>
            <p className="text-gray-500 text-sm mb-6">Celebration Key is Carnival's brand new private island destination in the Bahamas, opened in 2024. It is the newest private island in cruising and was built from the ground up to match the Carnival Fun Ship energy on land.</p>

            <Accordion title="What Is Celebration Key?">
              <p className="mb-3">Celebration Key is a purpose-built private island destination on Grand Bahama Island in the Bahamas. Carnival invested heavily in the development and it shows. The island has multiple distinct beach areas, a massive lagoon pool, water attractions, dining venues, and a signature party atmosphere that matches the ships.</p>
              <p>The island opened in 2024 and is exclusively accessible through Carnival sailings. No other cruise line stops here and no independent travelers can visit. It is designed to be an extension of the Carnival experience on land and it delivers on that promise.</p>
            </Accordion>

            <Accordion title="Pearl Cove Beach — The Main Beach">
              <p className="mb-3">The signature beach area on Celebration Key with white sand, clear Bahamian water, and a lineup of beach bars and casual dining. Pearl Cove is the central social hub of the island with a lively atmosphere that feels like the pool deck moved to the beach.</p>
              <p>Basic beach access with a standard lounger is included in your cruise fare. Premium loungers and beach club upgrades are available at an additional cost. The included experience is already excellent.</p>
            </Accordion>

            <Accordion title="The Calypso Lagoon">
              <p className="mb-3">Celebration Key's freshwater lagoon pool is one of the largest in the Bahamas and is the centerpiece of the island experience. It has a swim-up bar, multiple entry points, hot tubs, and plenty of space even on busy days.</p>
              <p>The lagoon is free for all Carnival guests and it is the go-to spot if you want a pool experience with the island atmosphere. The swim-up bar runs all day and the energy is pure Carnival.</p>
            </Accordion>

            <Accordion title="Water Attractions and Activities">
              <p className="mb-3">Celebration Key has water slides, a splash zone, and a variety of water sports rentals available throughout the day. Some attractions are included with your cruise fare and others are upcharges.</p>
              <p>Kayaking, snorkeling equipment, paddleboarding, and other rentals are available at the island's water sports center. The snorkeling around the island is good and worth doing even if you just rent equipment and explore on your own.</p>
            </Accordion>

            <Accordion title="Dining and Drinks on the Island">
              <p className="mb-3">Carnival includes a beach BBQ lunch for all guests on Celebration Key days. The food is served from multiple stations around the island and covers the basics well with grilled meats, sides, and tropical fruit.</p>
              <p>Additional dining and drink options are available at the island's bars and food venues at an extra charge unless you have a CHEERS! beverage package, which covers alcoholic drinks at the island bars. If you have CHEERS! the drinks on the island are already paid for which makes the day even better.</p>
            </Accordion>

            <Accordion title="How Does It Compare to Other Private Islands?">
              <p className="mb-3">Celebration Key is the newest private island in cruising so it has the freshest facilities and the most modern design. It was built with the Carnival energy in mind which means it leans into the fun, social, party-adjacent atmosphere rather than the relaxed tropical vibe of some other private islands.</p>
              <p className="mb-3">If you want the most serene and beautiful private island experience, Perfect Day at CocoCay on Royal Caribbean or Ocean Cay on MSC might edge it out on pure natural beauty. If you want the most fun and energetic private island day with the best facilities and the most activities, Celebration Key competes right at the top.</p>
              <p>It is a genuinely excellent island day and one of the best additions to Carnival's offering in years.</p>
            </Accordion>
          </section>
        )}

        {/* CHEERS PACKAGE */}
        {activeTab === "cheers" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: CARNIVAL_DARK }}>CHEERS! Beverage Package</h2>
            <p className="text-gray-500 text-sm mb-6">CHEERS! is Carnival's all-inclusive beverage package and it is one of the most comprehensive drink programs in the cruise industry. Here is everything you need to know about how it works and whether it makes sense for your sailing.</p>

            <Accordion title="What Is CHEERS!?">
              <p className="mb-3">CHEERS! is an unlimited beverage package that covers alcoholic and non-alcoholic drinks throughout your sailing. Once you have it activated you can order drinks at any bar, restaurant, or venue on the ship and at Carnival's private destinations without signing a check.</p>
              <p>The package covers cocktails, beer, wine by the glass, spirits, non-alcoholic specialty beverages, bottled water, energy drinks, and specialty coffees up to a per-drink value. Drinks above that value have the difference charged to your account.</p>
            </Accordion>

            <Accordion title="What Is Included in CHEERS!?">
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>Cocktails, spirits, and mixed drinks up to $20 per drink value</li>
                <li>Beer including premium and craft options</li>
                <li>Wine by the glass</li>
                <li>Non-alcoholic specialty beverages including smoothies, fresh juices, and mocktails</li>
                <li>Bottled water, sodas, and energy drinks</li>
                <li>Specialty coffees like lattes, cappuccinos, and espresso drinks</li>
                <li>Drinks at Carnival private destinations like Celebration Key</li>
              </ul>
              <p>The package is capped at 15 alcoholic beverages per person per day. After 15 drinks additional alcoholic beverages are not covered. For most people 15 is more than enough.</p>
            </Accordion>

            <Accordion title="What Is NOT Included in CHEERS!?">
              <ul className="list-disc pl-5 space-y-2">
                <li>Drinks above the $20 per drink value threshold</li>
                <li>Bottles of wine or spirits by the bottle</li>
                <li>Room service beverages</li>
                <li>Mini bar items in the cabin</li>
                <li>Souvenir cups or commemorative glasses</li>
              </ul>
            </Accordion>

            <Accordion title="How Is CHEERS! Priced?">
              <p className="mb-3">CHEERS! is priced per person per day and must be purchased for the full duration of the sailing. Both guests in a cabin who are 21 or older must purchase the package together.</p>
              <p className="mb-3">The price varies by ship and sailing length but typically runs between $50 and $80 per person per day before the mandatory 18 percent gratuity. Whether CHEERS! is worth it depends entirely on how much you drink. For someone who has 5 or more drinks per day including specialty coffees and bottled waters, it usually pays off.</p>
            </Accordion>

            <Accordion title="When Should You Buy CHEERS!?">
              <p className="mb-3">The package is almost always cheaper when you purchase it before your sailing through the Carnival website rather than onboard. Look for CHEERS! sales and promotions in the weeks before your sailing.</p>
              <p>I always let clients know when a good CHEERS! sale is running for their sailing so they can lock it in at the best price.</p>
            </Accordion>

            <Accordion title="CHEERS! at Celebration Key">
              <p className="mb-3">One of the best things about CHEERS! is that it works at Celebration Key and Carnival's other private destinations. On a hot day at Celebration Key going through several tropical drinks at the beach, CHEERS! pays for itself quickly.</p>
            </Accordion>
          </section>
        )}

        {/* VIFP CLUB */}
        {activeTab === "vifp" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: CARNIVAL_DARK }}>VIFP Club</h2>
            <p className="text-gray-500 text-sm mb-6">VIFP stands for Very Important Fun Person and it is Carnival's loyalty program. It rewards you for every night you sail with Carnival and the perks get genuinely valuable at the higher tiers.</p>

            <Accordion title="How VIFP Points Are Earned">
              <p className="mb-3">You earn one VIFP point for every night you sail on Carnival. A 7-night sailing earns 7 points. Points accumulate across all your Carnival sailings and your tier is determined by your total lifetime cruise nights.</p>
              <p>The program is free to join and your points start accumulating on your first Carnival sailing. Enroll before you board so your first sailing counts from day one.</p>
            </Accordion>

            <Accordion title="The VIFP Tier Levels">
              <ul className="list-disc pl-5 space-y-3 mb-3">
                <li><strong>Blue (0 points)</strong> — Welcome gift onboard and access to VIFP members-only offers</li>
                <li><strong>Red (1-24 points)</strong> — Priority check-in, complimentary water in your cabin, exclusive sale fares</li>
                <li><strong>Gold (25-74 points)</strong> — All Red perks plus complimentary wine or cocktail on boarding, priority boarding, casino credit</li>
                <li><strong>Platinum (75-199 points)</strong> — All Gold perks plus specialty dining for two, mini bar setup, internet package, priority disembarkation</li>
                <li><strong>Diamond (200+ points)</strong> — All Platinum perks plus upgraded mini bar, additional onboard credits, laundry service, exclusive events</li>
              </ul>
              <p>Platinum and Diamond are where the program delivers real financial value with specialty dining, internet, and mini bar included on every sailing.</p>
            </Accordion>

            <Accordion title="VIFP Members-Only Sale Fares">
              <p className="mb-3">Carnival regularly runs VIFP-exclusive promotions with discounted cruise fares, reduced CHEERS! package pricing, and cabin upgrade offers not available to the general public.</p>
              <p>I keep an eye on VIFP sales for clients and can flag when a particularly good one comes up for your preferred itinerary.</p>
            </Accordion>

            <Accordion title="How to Maximize Your VIFP Points">
              <ul className="list-disc pl-5 space-y-2">
                <li>Longer sailings earn more points</li>
                <li>Enroll before your first sailing — points cannot be added retroactively</li>
                <li>Stay loyal to Carnival to move up faster</li>
                <li>Stack multiple sailings in a calendar year to accelerate tier progress</li>
              </ul>
            </Accordion>
          </section>
        )}

        {/* SHORE EXCURSIONS */}
        {activeTab === "excursions" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: CARNIVAL_DARK }}>Shore Excursions</h2>
            <p className="text-gray-500 text-sm mb-6">Carnival offers shore excursions through their Hub app and website that you can book before your sailing. Here is what to know and a look at some popular ports on Carnival Caribbean itineraries.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: CARNIVAL_ACCENT, borderLeft: `4px solid ${CARNIVAL_RED}` }}>
              <p className="font-semibold mb-1">Book before you sail and book through Carnival.</p>
              <p className="mb-2">Pre-cruise pricing is lower than onboard pricing and popular excursions sell out.</p>
              <p>When you book through Carnival, if your excursion runs long the ship waits for you. If you book independently and you are late, the ship leaves without you.</p>
            </div>

            {[
              {
                port: "Celebration Key, Grand Bahama Island",
                about: "Carnival's brand new private island destination opened in 2024. Spend the whole day there, do the lagoon, eat the included BBQ, and get to the beach early for the best spots.",
                excursions: ["Calypso Lagoon Pool (included)", "Beach BBQ Lunch (included)", "Snorkeling Adventure", "Kayak and Paddleboard Rentals", "Premium Beach Club Upgrade", "Water Sports Package"]
              },
              {
                port: "Nassau, Bahamas",
                about: "A classic Caribbean port with beaches, history, and shopping. Atlantis is the big draw and worth it if you want a full beach and water park day.",
                excursions: ["Atlantis Beach Day", "Blue Lagoon Island Snorkel and Beach", "Nassau Walking Tour", "Swim with Dolphins", "Atlantis Water Park Access", "Snorkel and Beach Combo"]
              },
              {
                port: "Cozumel, Mexico",
                about: "One of the best snorkeling and diving destinations in the Caribbean. The Mesoamerican Barrier Reef runs right through here and even a beginner snorkeling excursion shows you why people come back to Cozumel repeatedly.",
                excursions: ["Snorkel at Palancar Reef", "Scuba Diving for Certified Divers", "Catamaran Sail and Snorkel", "Dune Buggy Tour", "Swim with Dolphins", "Mr. Sancho's Beach Club"]
              },
              {
                port: "Mahogany Bay, Roatan, Honduras",
                about: "Carnival's private beach area on the island of Roatan. The beach itself is excellent and the water is clear. Roatan is one of the most underrated port stops in the Caribbean.",
                excursions: ["Carnival's Mahogany Bay Beach (included access)", "Chair Lift to the Beach", "Snorkeling at the Barrier Reef", "Monkey and Sloth Sanctuary", "West Bay Beach Day", "ATV Adventure"]
              },
              {
                port: "Grand Cayman",
                about: "One of the most beautiful and upscale port stops in the Caribbean. Grand Cayman is a tender port so you take a boat from the ship to shore. Stingray City is the iconic excursion here.",
                excursions: ["Stingray City Sandbar Tour", "Seven Mile Beach Day", "Snorkel and Stingray Combo", "Catamaran Sail", "Dolphin Discovery", "Island Jeep Tour"]
              },
              {
                port: "Belize City, Belize",
                about: "Gateway to an extraordinary natural environment including the Belize Barrier Reef, Mayan ruins, and rainforest. Belize is a tender port but the excursions here are some of the most memorable in the Caribbean.",
                excursions: ["Cave Tubing Through the Rainforest", "Belize Barrier Reef Snorkel", "Altun Ha Mayan Ruins", "Zip Lining Through the Jungle", "River Tubing and Wildlife Tour"]
              },
            ].map((p) => (
              <Accordion key={p.port} title={p.port}>
                <p className="mb-4">{p.about}</p>
                <p className="font-semibold mb-2" style={{ color: CARNIVAL_RED }}>Popular Excursions Here</p>
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
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: CARNIVAL_DARK }}>Trip Insurance</h2>
            <p className="text-gray-500 text-sm mb-6">I always recommend trip insurance on every cruise booking. Travel can throw curveballs that have nothing to do with the cruise line. This is the coverage that keeps a bad situation from becoming a financial disaster.</p>

            <div className="p-4 rounded-xl mb-6 text-white text-sm" style={{ background: CARNIVAL_RED }}>
              <strong>Buy it at booking.</strong> Trip insurance is cheaper when you add it at your initial deposit and pre-existing condition coverage only applies within 14 to 21 days of your first payment. Do not wait on this one.
            </div>

            <Accordion title="What If You Get Sick Before You Leave?">
              <p className="mb-3">You have been looking forward to this trip for months and something medical comes up two days before you sail. Without insurance you lose the full cost of your cruise because the cancellation deadline has passed.</p>
              <p>With trip insurance and a covered illness, you cancel and get reimbursed. You rebook when you feel better and nothing is permanently lost.</p>
            </Accordion>

            <Accordion title="What If a Family Member Has an Emergency?">
              <p>Something comes up at home that means you cannot go. Trip cancellation coverage for family medical emergencies means you can handle the situation without also losing the money you put into the vacation.</p>
            </Accordion>

            <Accordion title="What If You Get Hurt at Sea or Overseas?">
              <p className="mb-3">Your regular health insurance often does not cover you outside the United States. A medical situation in the Bahamas or Belize can get expensive fast without coverage.</p>
              <p>Trip insurance with medical and evacuation coverage means you get the care you need no matter where you are.</p>
            </Accordion>

            <Accordion title="What If Your Flight Gets Cancelled?">
              <p>Trip delay coverage helps cover last-minute hotels, meals, and rebooking costs so a disrupted travel day does not become a financial hit on top of the stress.</p>
            </Accordion>

            <Accordion title="What If Your Luggage Gets Lost?">
              <p>Airlines lose bags. Baggage delay coverage helps cover the essentials while your luggage catches up. Nobody wants to start a Caribbean vacation in airport clothes.</p>
            </Accordion>

            <Accordion title="Why Buy at Booking?">
              <p className="mb-3">It is cheaper early and pre-existing condition coverage requires buying within a set window of your deposit. Miss that window and that coverage is gone permanently.</p>
              <p>I flag this for every client when we lock in a booking. Lock it in early and you are covered for whatever comes up between booking day and sailing day.</p>
            </Accordion>
          </section>
        )}

        {/* ERIC'S TIPS */}
        {activeTab === "tips" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: CARNIVAL_DARK }}>Eric's Tips for Your Carnival Sailing</h2>
            <p className="text-gray-500 text-sm mb-6">Eric sailed Carnival once and has helped clients plan Carnival cruises. Here is what actually matters before you board.</p>

            <Accordion title="Sign Up for VIFP Before You Board">
              <p>Create your VIFP account before your sailing and make sure it is linked to your reservation. Your cruise nights cannot be added retroactively if you forget to enroll. Every night counts from your very first sailing so get in the program before the ship leaves the dock.</p>
            </Accordion>

            <Accordion title="Buy CHEERS! Before You Sail">
              <p className="mb-3">The CHEERS! package is almost always cheaper when you purchase it pre-cruise. Watch for CHEERS! sales in the weeks before your sailing because Carnival discounts it regularly.</p>
              <p>If you plan to drink throughout the day including specialty coffees and bottled water, CHEERS! tends to pay for itself. Do the math based on your habits before you commit.</p>
            </Accordion>

            <Accordion title="Try Guy's Burger Joint at Least Once">
              <p>It sounds too simple but Guy's Burger Joint is legitimately one of the best things on the ship and it is completely free. Go at least once, preferably on a sea day. The line moves fast and the burger is worth it every time.</p>
            </Accordion>

            <Accordion title="Get to the Pool Deck Early on Sea Days">
              <p>Sea days on Carnival get busy fast. The best deck chairs around the main pool fill up by mid-morning. Get out there early. If you want peace and quiet, head to Serenity where it stays significantly calmer throughout the day.</p>
            </Accordion>

            <Accordion title="Book Excursions Before You Sail">
              <p className="mb-3">Pre-cruise excursion pricing is lower than onboard pricing. Popular excursions like Stingray City in Grand Cayman and cave tubing in Belize sell out well before the ship arrives in port.</p>
              <p>I can help you sort through the excursion options for your specific ports. Reach out before you finalize your plans.</p>
            </Accordion>

            <Accordion title="Go to the Comedy Club">
              <p>The Punchliner Comedy Club shows are free and consistently one of the best entertainment options on the ship. Reserve seats through the Carnival Hub app because they fill up.</p>
            </Accordion>

            <Accordion title="If Your Ship Has BOLT, Ride It">
              <p>The BOLT roller coaster on Excel class ships is genuinely thrilling. Do it on a sea day when you can see the ocean in every direction below you.</p>
            </Accordion>

            <Accordion title="Say Yes to People">
              <p className="mb-3">This one is for solo travelers or anyone who tends to keep to themselves. Carnival's social environment rewards openness. Eric sailed with a friend and still ended up spending most of the trip with new people they met on day one.</p>
              <p>Say yes when someone at the pool bar asks if you want to join them. The best Carnival memories come from those moments.</p>
            </Accordion>

            <Accordion title="Get Trip Insurance at Booking">
              <p>Lock it in when you pay your deposit. It is cheaper then and you get full pre-existing condition coverage in that early window.</p>
            </Accordion>
          </section>
        )}

        {/* CTA */}
        <div className="mt-10 rounded-2xl p-5 md:p-8 text-center text-white" style={{ background: `linear-gradient(135deg, ${CARNIVAL_DARK}, ${CARNIVAL_RED})` }}>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: CARNIVAL_GOLD }}>Ready to Have Some Fun</p>
          <h3 className="text-lg md:text-2xl font-bold mb-3">Let's Get You on a Fun Ship</h3>
          <p className="text-sm mb-5 max-w-lg mx-auto" style={{ color: "#FFD0D0" }}>
            Carnival is the most popular cruise line in the world for a reason and I have been on one. I book Carnival on your behalf so you get the right ship, the right itinerary, and someone who actually answers when you have a question.
          </p>
          
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg font-bold text-sm transition hover:opacity-90"
            style={{ background: CARNIVAL_GOLD, color: CARNIVAL_DARK }}
          >
            Let's Plan Your Carnival Cruise
          </a>
        </div>

      </div>
    </div>
  );
}
