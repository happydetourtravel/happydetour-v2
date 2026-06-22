import { useState } from "react";

const VV_RED = "#D4273C";
const VV_DARK = "#1A0A0E";
const VV_GOLD = "#C9A84C";
const VV_CREAM = "#FDF6EE";

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-red-100 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-red-50 transition-colors"
        style={{ background: open ? "#FFF5F5" : "white" }}
      >
        <span>{title}</span>
        <span
          className="text-2xl transition-transform duration-200"
          style={{ color: VV_RED, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 py-5 bg-white border-t border-red-100 text-gray-700 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

const TABS = [
  { id: "included", label: "What's Included" },
  { id: "ships", label: "The Ships" },
  { id: "dining", label: "Dining" },
  { id: "bars", label: "Bars" },
  { id: "perks", label: "Bar Tab & Extras" },
  { id: "loyalty", label: "Sailing Club" },
  { id: "solo", label: "Solo Travel" },
  { id: "excursions", label: "Shore Excursions" },
  { id: "insurance", label: "Trip Insurance" },
  { id: "tips", label: "Eric's Tips" },
];

const AFFILIATE_LINK = "https://www.virginvoyages.com/?agencyId=589&agentId=278796";

export default function VirginVoyagesPage() {
  const [activeTab, setActiveTab] = useState("included");

  return (
    <div className="min-h-screen" style={{ background: VV_CREAM, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Hero */}
      <div
        className="relative py-24 px-6 text-center text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${VV_DARK} 0%, ${VV_RED} 100%)` }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: VV_GOLD }}>Adults Only. All Included.</p>
          <h1 className="text-5xl font-bold mb-4 leading-tight">Virgin Voyages</h1>
          <p className="text-xl text-red-100 mb-6 leading-relaxed">
            No kids. No nickel and diming. No set dining times. Just you, the sea, and a ship that actually wants you to have fun.
          </p>
          <p className="text-base text-red-200 mb-8">
            Everything you need to know before you sail, put together by Eric, your HDT travel advisor and Virgin Voyages First Mate certified agent.
          </p>
          <img
            src="/firstmate-gold.png"
            alt="Virgin Voyages Certified First Mate Gold Tier"
            style={{ height: '160px', width: 'auto', margin: '0 auto', opacity: 0.95 }}
          />
        </div>
      </div>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 shadow-md overflow-x-auto" style={{ background: VV_DARK }}>
        <div className="flex min-w-max mx-auto px-4 justify-center w-full">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2"
              style={{
                color: activeTab === tab.id ? VV_GOLD : "#ccc",
                borderBottomColor: activeTab === tab.id ? VV_GOLD : "transparent",
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

        {/* WHAT'S INCLUDED */}
        {activeTab === "included" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: VV_DARK }}>What Comes With Your Fare</h2>
            <p className="text-gray-500 mb-8">Virgin Voyages bundles in things that other cruise lines charge extra for. Here is a breakdown of what you get the moment you step onboard.</p>
            <Accordion title="All Restaurants Included">
              <p>Every single restaurant on the ship is included in your fare. No specialty dining surcharge. No reservation fee. You just show up and eat. Virgin Voyages has between 6 and 20 restaurant options depending on the ship, ranging from a Korean BBQ concept to a proper steakhouse to a pasta bar. You book dining times in advance through the Sailor app, which makes the whole process smooth and easy.</p>
            </Accordion>
            <Accordion title="Unlimited WiFi">
              <p>High speed WiFi is included for every sailor on every sailing. It is not the slow, barely-works kind either. You can stream, post, video call, and work from sea if you need to. This is one of the biggest things people do not realize is covered until they get onboard and never see a charge.</p>
            </Accordion>
            <Accordion title="Fitness Classes">
              <p>Group fitness classes like yoga, spin, barre, and bootcamp are included. The gym itself is open to everyone at no charge. If you want a personal training session that is separate, but the group classes are yours to take as many times as you want throughout the sailing.</p>
            </Accordion>
            <Accordion title="Soft Drinks, Juice and Drip Coffee">
              <p>Non-alcoholic beverages are covered. That includes sodas, juices, still and sparkling water, and drip coffee. Specialty coffee drinks like espresso and lattes are not included, but your everyday coffee is taken care of.</p>
            </Accordion>
            <Accordion title="What Is NOT Included">
              <p className="mb-3">A few things to know before you sail so you are not caught off guard:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Alcohol</strong> is not included in the base fare. You can add a Bar Tab or pay as you go.</li>
                <li><strong>Gratuities</strong> are a separate charge. Lock them in at booking because they cost more if you wait.</li>
                <li><strong>Shore excursions</strong> are an additional cost at each port. Book before you sail for the best savings.</li>
                <li><strong>Spa treatments</strong> are not included. The spa is available but priced separately.</li>
                <li><strong>Specialty coffee</strong> drinks like lattes and espresso are separate.</li>
                <li><strong>Casino play</strong> is not included.</li>
              </ul>
            </Accordion>
          </section>
        )}

        {/* THE SHIPS */}
        {activeTab === "ships" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: VV_DARK }}>The Fleet</h2>
            <p className="text-gray-500 mb-8">Virgin Voyages currently has four ships. They are all adults only, all similar in size, and all carry the same brand identity. Here is what makes each one a little different.</p>
            {[
              { name: "Scarlet Lady", year: "2021", capacity: "2,770 sailors", homeport: "Miami, FL", description: "The original. Scarlet Lady was the first Virgin Voyages ship and helped define the brand. She sails mostly Caribbean itineraries out of Miami. She has all the signature Virgin features including The Dock outdoor deck, The Manor nightclub, and a full lineup of restaurants.", deckHighlights: ["The Manor (nightclub and main event space)", "The Dock (outdoor stern deck, swim platform)", "Richard's Rooftop (top deck pool and lounge)", "Redemption Spa (rooftop spa pool)", "Athletic Club (gym, fitness classes)", "The Runway (promenade retail deck)", "Pool Deck with The Groupie hot tubs"] },
              { name: "Valiant Lady", year: "2021", capacity: "2,770 sailors", homeport: "Barcelona (Europe seasonally), Caribbean", description: "Sister ship to Scarlet Lady with the same layout and restaurants. Valiant Lady tends to sail European itineraries in summer and pivots to the Caribbean in other seasons. Same great experience, different ports.", deckHighlights: ["Same core layout as Scarlet Lady", "The Wake (steakhouse at the stern)", "Sun Club pool area", "The Manor entertainment complex", "Squid Ink tattoo studio onboard"] },
              { name: "Resilient Lady", year: "2023", capacity: "2,770 sailors", homeport: "Various (Mediterranean, Caribbean, Australia)", description: "The third ship in the fleet. Resilient Lady added some new features and a few new dining concepts. She has been deployed globally and is known for some of the more adventurous itineraries Virgin offers.", deckHighlights: ["All core features of the original ships", "Additional bar and lounge concepts", "Same spa, gym, and entertainment footprint", "Expanded Pool Club area"] },
              { name: "Brilliant Lady", year: "2024", capacity: "2,770 sailors", homeport: "San Francisco, CA (Alaska and Pacific)", description: "The newest addition to the fleet. Brilliant Lady homeports in San Francisco and was the first Virgin Voyages ship to offer Alaska sailings. She brought the brand's approach to a whole new part of the country and a whole new kind of itinerary.", deckHighlights: ["All flagship Virgin features", "Alaska-ready with glacier viewing areas", "New dining concept exclusive to Brilliant Lady", "West Coast debut for the brand"] },
            ].map((ship) => (
              <div key={ship.name} className="mb-4">
                <Accordion title={`${ship.name} — ${ship.homeport}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="mb-3">{ship.description}</p>
                      <p className="text-sm text-gray-500">Launched {ship.year} &bull; Capacity {ship.capacity}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: VV_RED }}>Key Deck Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.deckHighlights.map((d) => <li key={d}>{d}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}
            <div className="mt-6 p-5 rounded-xl text-white text-sm" style={{ background: VV_RED }}>
              <strong>Note from Eric:</strong> All four ships share the same core layout, restaurants, and experience. If you have sailed one, you will feel right at home on any of the others. The biggest differences are itinerary and homeport, not the ship itself.
            </div>
          </section>
        )}

        {/* DINING */}
        {activeTab === "dining" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Dining Onboard</h2>
            <p className="text-gray-500 mb-8">Every restaurant is included in your fare. You book your reservations ahead of time through the Sailor app and show up ready to eat.</p>
            {[
              { name: "The Wake", type: "Steakhouse", description: "Located at the stern of the ship with panoramic ocean views. The Wake is the upscale steakhouse experience on Virgin Voyages. Think dry aged cuts, a wine list, and a dinner that feels like a proper occasion. This one books up fast so reserve it early in the Sailor app." },
              { name: "Razzle Dazzle", type: "Vegetarian Forward", description: "Do not let the name throw you. Razzle Dazzle is a fun, colorful spot with a plant-forward menu that also has meat options. The brunch here is one of the most talked about meals on the ship. The eggs benedict and the bar cart that comes around make it a must." },
              { name: "Pink Agave", type: "Elevated Mexican", description: "This is not cruise ship Mexican food. Pink Agave is a serious upscale Mexican restaurant with craft cocktails and a menu that goes beyond tacos and burritos. Real chiles, real technique, and a festive atmosphere that makes it a go-to for a fun dinner." },
              { name: "Test Kitchen", type: "Chef's Tasting Experience", description: "One of the more unique dining experiences at sea. Test Kitchen runs as a multi-course chef's tasting menu where each course is paired with a drink. The whole table participates together and it turns dinner into more of a shared event. Seats are limited so book it as soon as reservations open." },
              { name: "The Galley", type: "All-Day Casual", description: "Your casual, grab-and-go option available all day. Breakfast in the morning, sandwiches and quick bites during the day, and lighter fare in the evening." },
              { name: "Extra Virgin", type: "Italian Pasta Bar", description: "A cozy, intimate Italian restaurant that feels like a real neighborhood spot. Handmade pasta, simple sauces done right, and a wine selection that pairs well with everything. One of the favorites on the ship and another one that books up fast." },
              { name: "Gunbae", type: "Korean BBQ", description: "Korean BBQ right at your table. You cook your own meats over a tabletop grill, and the experience is as much about the fun as the food. Gunbae also has soju flights and a high-energy vibe that makes it great for a group dinner or a fun night out." },
              { name: "Noodle Around", type: "Pan Asian", description: "Casual Asian noodle dishes available during lunch. Think ramen, noodle soups, and bao. A quick, satisfying option when you want something light and flavorful between ports." },
              { name: "The Pizza Place", type: "Late Night Pizza", description: "Open late for when you need something after a night out. Simple, solid pizza by the slice. Exactly what it sounds like and exactly what you need at midnight." },
            ].map((r) => (
              <Accordion key={r.name} title={`${r.name} — ${r.type}`}><p>{r.description}</p></Accordion>
            ))}
            <p className="mt-6 text-sm text-gray-500 italic">Restaurant availability can vary slightly by ship. Brilliant Lady has an additional dining concept not available on other ships.</p>
          </section>
        )}

        {/* BARS */}
        {activeTab === "bars" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Bars and Lounges</h2>
            <p className="text-gray-500 mb-8">The bar program on Virgin Voyages is one of the best at sea. Every bar has its own identity, its own menu, and its own vibe.</p>
            {[
              { name: "Voyage Vinyl", vibe: "Record Bar", description: "A record store turned cocktail bar. Voyage Vinyl has an actual vinyl collection, great acoustics, and a cocktail menu built around music themes. It is one of the coolest bars at sea and tends to become a go-to for people who find it early in the sailing." },
              { name: "The Dock", vibe: "Outdoor Stern Bar", description: "Located at the very back of the ship on the lower deck. The Dock has an open-air swim platform, sun loungers, and a bar with easy tropical drinks. It is the most laid-back spot on the ship and one of the best places to watch the ocean go by." },
              { name: "On the Rocks", vibe: "Cocktail Lounge", description: "A classic craft cocktail bar with a menu built around proper technique. If you are someone who enjoys a well-made drink more than a frozen one, this is your spot. Great bartenders and a quieter atmosphere than some of the other bars." },
              { name: "The Manor Bar", vibe: "Nightclub Adjacent", description: "The bar inside The Manor, which is the main entertainment and nightclub space on the ship. Busy at night but a cool hang during the day when it is quieter. The Manor comes alive late and runs events and themed nights throughout the sailing." },
              { name: "Richard's Rooftop", vibe: "Rooftop Pool Bar", description: "The adults-only rooftop pool area with a bar. Smaller and more intimate than the main pool deck. Limited loungers make it feel exclusive." },
              { name: "The Groupie", vibe: "Hot Tub Bar", description: "Hot tubs with a bar nearby. The Groupie is social and fun, and tends to be a gathering spot for people meeting other sailors. The vibe is celebratory." },
              { name: "Squid Ink", vibe: "Tattoo Studio and Social Space", description: "A real tattoo studio onboard where you can get a tattoo at sea. The bar next to it makes the whole thing a bit of a social moment. You do not have to get a tattoo to enjoy the vibe." },
            ].map((b) => (
              <Accordion key={b.name} title={`${b.name} — ${b.vibe}`}><p>{b.description}</p></Accordion>
            ))}
          </section>
        )}

        {/* BAR TAB & EXTRAS */}
        {activeTab === "perks" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Bar Tab and Sailor Perks</h2>
            <p className="text-gray-500 mb-8">Virgin Voyages does not sell traditional drinks packages. Instead they do a Bar Tab system where you load credit onto your onboard account to cover drinks.</p>
            <Accordion title="What Is the Bar Tab?">
              <p className="mb-3">The Bar Tab is onboard credit that goes specifically toward drinks. Instead of a flat drinks package where you pay per day, you load Bar Tab credit onto your account and use it as you go at any bar on the ship.</p>
              <p>The Bar Tab credit shows in your Sailor app so you can keep an eye on your balance throughout the sailing. Any unused credit does not carry over after the trip, so use it up while you are onboard.</p>
            </Accordion>
            <Accordion title="How to Get Free Bar Tab Money">
              <p className="mb-3">Here are the main ways to get Bar Tab credit at no extra cost:</p>
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Book During a Promotion</strong> — Virgin Voyages runs Bar Tab promotions throughout the year. These can range from $100 to $300 or more per cabin depending on the sailing length and current offer.</li>
                <li><strong>Sailor Loot Offers</strong> — Bar Tab is often included as part of a Sailor Loot package when you book through a travel advisor. These deals are not always visible when booking directly.</li>
                <li><strong>Book Through Eric's Link</strong> — Booking through my affiliate link ensures your reservation is tied to my agency. I track current Virgin Voyages offers and can let you know when a good Bar Tab promotion is running.</li>
                <li><strong>Longer Sailings</strong> — Bar Tab credit amounts often scale with sailing length.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">Bar Tab promotions change often. Reach out before you book and I will check what is currently available for your sailing.</p>
            </Accordion>
            <Accordion title="Sailor Loot — Other Credits and Perks">
              <p className="mb-3">Beyond Bar Tab, Virgin Voyages occasionally runs Sailor Loot promotions that include spa credit, Shore Things credit toward excursions, or general onboard spending credit.</p>
              <p>These promotions are time-sensitive and vary by sailing. Booking at the right time with the right promotion is the difference between a good deal and a great one.</p>
            </Accordion>
            <Accordion title="The Sailor App — Your Onboard Hub">
              <p className="mb-3">Download the Virgin Voyages Sailor app before you sail. You will use it for booking dining reservations, checking your Bar Tab balance, looking at Shore Things excursions, and managing your account.</p>
              <p>Dining reservations open before your sailing and the most popular restaurants fill up fast. Get on the app early and lock in your favorites as soon as your window opens.</p>
            </Accordion>
          </section>
        )}

        {/* SAILING CLUB LOYALTY — NEW TAB */}
        {activeTab === "loyalty" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: VV_DARK }}>The Sailing Club</h2>
            <p className="text-gray-500 mb-8">Virgin Voyages rewards sailors who come back. The program is called the Sailing Club and it works differently from most cruise loyalty programs. No points. No complicated calculations based on nights sailed. Just voyages completed.</p>

            {/* Tier Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                {
                  tier: "Sailing Club Member",
                  voyages: "After your 1st voyage",
                  color: "#6B7280",
                  perks: [
                    "Automatic enrollment after one paid sailing",
                    "Access to members-only offers",
                    "Quarterly newsletter",
                    "Foundation for earning toward higher tiers",
                  ],
                  note: "Think of this as your welcome to the club. The real perks start on your next sailing.",
                },
                {
                  tier: "Blue Extras",
                  voyages: "3rd and 4th voyages",
                  color: "#007298",
                  perks: [
                    "One specialty coffee per day",
                    "Invitation to an exclusive Sailing Club cocktail event",
                    "One free bag of laundry",
                    "Dedicated Sailor Services support line",
                  ],
                  note: "These kick in on your third sailing and stay with you on your fourth.",
                },
                {
                  tier: "Deep Blue Extras",
                  voyages: "5th voyage and beyond",
                  color: VV_RED,
                  perks: [
                    "Two specialty coffees per day",
                    "Priority boarding at embarkation",
                    "Unlimited premium WiFi (streaming capable)",
                    "Two pressed items plus one specialty cleaned item",
                    "Full laundry bag included",
                    "All Blue Extras perks",
                  ],
                  note: "The top tier. Unlimited premium WiFi and priority boarding make this one worth working toward.",
                },
              ].map((t) => (
                <div key={t.tier} className="rounded-xl overflow-hidden border border-gray-100">
                  <div className="px-5 py-4" style={{ background: t.color }}>
                    <p className="text-white font-bold text-base mb-1">{t.tier}</p>
                    <p className="text-white text-xs opacity-80">{t.voyages}</p>
                  </div>
                  <div className="px-5 py-4 bg-white">
                    <ul className="space-y-2 mb-4">
                      {t.perks.map((p) => (
                        <li key={p} className="text-sm text-gray-700 flex gap-2">
                          <span style={{ color: t.color, flexShrink: 0 }}>✓</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-400 italic">{t.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <Accordion title="How the Program Works">
              <p className="mb-3">The Sailing Club is based entirely on how many eligible voyages you have completed. No points. No night calculations. Just sailings.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete one paid voyage and you are automatically enrolled.</li>
                <li>Blue Extras perks kick in on your third and fourth sailing.</li>
                <li>Deep Blue Extras start on your fifth sailing and stay with you from there.</li>
                <li>Loyalty credit is applied 30 days after each voyage ends, not immediately. Plan around this if you are close to a tier threshold.</li>
                <li>If you are on back-to-back sailings and cross a tier during the trip, you will not see the new benefits until your next separate voyage.</li>
              </ul>
            </Accordion>

            <Accordion title="What Counts as an Eligible Voyage?">
              <p className="mb-3">Not every sailing counts toward your tier progression. This matters more than most people realize.</p>
              <p className="mb-3">As of October 2025, Base, Essential, and Premium fare bookings all qualify. That was an expansion from previous rules that excluded certain fare types, so more bookings count now than they used to.</p>
              <p className="mb-2 font-semibold text-gray-700">Sailings that do NOT count toward your tier:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Casino comp bookings</li>
                <li>Chartered voyages</li>
                <li>Bookings made with a Status Match Access Key (those unlock one-time Blue Extras benefits but do not count as an eligible voyage toward your permanent tier)</li>
              </ul>
              <p className="mt-3 text-sm text-gray-500">If you are tracking your sailings toward a specific tier, reach out and I can help make sure every booking is set up to count.</p>
            </Accordion>

            <Accordion title="My Next Virgin Voyage (MNVV) — Book Onboard and Save">
              <p className="mb-3">One of the smartest moves you can make while onboard is booking your next sailing before you disembark. Virgin Voyages calls this the My Next Virgin Voyage program. You get a reduced deposit and sometimes additional Sailor Loot credit on top of current promotions.</p>
              <p className="mb-3">The booking counts as an eligible voyage toward your Sailing Club tier. You can change the dates later if your plans shift and the deposit transfers.</p>
              <p>This is one of the things I tell every client to take advantage of before they get off the ship. Easy money left on the table if you skip it.</p>
            </Accordion>

            <Accordion title="Sea Blazers and Sea Rovers — Legacy Status">
              <p className="mb-3">You may hear these terms and wonder what they mean. Sea Blazers sailed with Virgin Voyages during their inaugural year in 2021. Sea Rovers sailed at least twice between 2022 and 2023. Both groups earned legacy status under the previous loyalty program.</p>
              <p className="mb-3">Sea Blazers and Sea Rovers automatically unlocked Deep Blue Extras and are grandfathered into that tier through the end of 2026. They also carry special Bar Tab bonuses: Sea Blazers get a $125 Bar Tab bonus on purchases of $300 Bar Tab, and Sea Rovers get $100 on the same purchase.</p>
              <p>These groups are no longer open to new members. If you sailed in those windows you already know who you are.</p>
            </Accordion>

            <Accordion title="Status Match — Fast Track Into the Program">
              <p className="mb-3">Virgin Voyages has run a Status Match program that lets sailors with loyalty status at other cruise lines, airlines, or hotel programs get a head start in the Sailing Club. The most recent enrollment window closed in February 2026.</p>
              <p className="mb-3">The way it works now: approved sailors receive a one-time Access Key that unlocks Blue Extras benefits for a single voyage. It does not permanently move you into the Blue Extras tier and the sailing made with that key does not count toward your permanent status.</p>
              <p>If Virgin Voyages opens another Status Match window I will share that through my list. It is easy to miss if you are not watching for it.</p>
            </Accordion>

            <Accordion title="Virgin Red — The Broader Rewards Ecosystem">
              <p className="mb-3">Separate from the Sailing Club, Virgin Voyages is part of the Virgin Red rewards program. Virgin Red lets you earn points across multiple Virgin brands and redeem them for experiences and rewards beyond just cruising.</p>
              <p>As a Sailing Club member, you can collect Virgin Points when you sail and redeem them through the Virgin Red app. The two programs work alongside each other. Think of Virgin Red as a nice bonus on top of the Sailing Club perks.</p>
            </Accordion>

            <div className="mt-6 p-5 rounded-xl text-white text-sm" style={{ background: `linear-gradient(135deg, ${VV_DARK}, ${VV_RED})` }}>
              <p className="font-bold mb-2" style={{ color: VV_GOLD }}>A note from Eric</p>
              <p>The Sailing Club is one of the reasons repeat Virgin Voyages sailors are so loyal. Once you hit Deep Blue Extras, the unlimited premium WiFi and priority boarding alone change the experience in a noticeable way. If you are close to a tier threshold, it is worth planning your next sailing strategically. Reach out and I can help you figure out where you stand and what makes the most sense for your next booking.</p>
            </div>
          </section>
        )}

        {/* SOLO TRAVEL */}
        {activeTab === "solo" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Solo Travel on Virgin Voyages</h2>
            <p className="text-gray-500 mb-8">Virgin Voyages is adults only, not couples only. Solo travelers sail VV all the time and the experience is genuinely well suited for it.</p>
            <div className="p-5 rounded-xl mb-8 text-white text-sm" style={{ background: `linear-gradient(135deg, ${VV_DARK}, ${VV_RED})` }}>
              <p className="font-bold text-base mb-2" style={{ color: VV_GOLD }}>The honest thing to know upfront</p>
              <p>Virgin Voyages does not have dedicated solo cabins like some other cruise lines. Most cabins are priced for two people, which means solo travelers typically pay a single supplement to occupy the cabin alone. The amount varies by cabin category and sailing. Reach out and I can check current solo pricing on any sailing you are eyeing.</p>
            </div>
            <Accordion title="Why VV Actually Works Really Well for Solo Travelers">
              <p className="mb-3">The single supplement is a real consideration, but once you are onboard the ship has a lot going for it as a solo experience. It is adults only, the vibe skews social and relaxed, and conversations happen naturally.</p>
              <p>The Freestyle setup means you eat when you want, do what you want, and never feel out of place doing it alone. Your schedule is entirely your own.</p>
            </Accordion>
            <Accordion title="The Bar Scene Is a Solo Traveler's Best Friend">
              <p className="mb-3">The bar program on Virgin Voyages is one of the best at sea, and for solo travelers that matters more than it might seem. Voyage Vinyl and On the Rocks feel like actual bars, not service counters.</p>
              <p>Solo travelers almost always find their people at the bars on VV. Voyage Vinyl in particular has an energy that draws people in and keeps them there. Pull up a stool and give it an hour.</p>
            </Accordion>
            <Accordion title="Dining Alone Is Not Awkward Here">
              <p className="mb-3">Virgin Voyages handles solo dining differently. The restaurants are designed to feel like real restaurants, not cruise ship banquet halls. You make a reservation, show up, and get seated like any other guest.</p>
              <p>Test Kitchen seats you at a communal chef's table format, which makes it one of the best solo dining experiences on the ship. Gunbae is another great solo option because the Korean BBQ format is interactive and naturally gets people talking.</p>
            </Accordion>
            <Accordion title="Tips for Solo Travelers on VV">
              <ul className="list-disc pl-5 space-y-2">
                <li>Book the Bar Tab promo when you can. It frees you up to enjoy the bar scene without watching your spending.</li>
                <li>Lock in dining reservations early in the Sailor app. The popular restaurants fill up fast.</li>
                <li>Try Test Kitchen. The communal format means you are sharing a meal with a group regardless of who you came with.</li>
                <li>Give Voyage Vinyl a real chance. Go in the evening, find a spot at the bar, and stay for more than one drink.</li>
                <li>Book shore excursions through the ship. It puts you in an organized group automatically, which means built-in company at every port.</li>
              </ul>
            </Accordion>
          </section>
        )}

        {/* SHORE EXCURSIONS */}
        {activeTab === "excursions" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Shore Things</h2>
            <p className="text-gray-500 mb-8">Shore Things is what Virgin Voyages calls their excursion program. You book through the Sailor app before you sail or onboard.</p>
            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: "#FFF0F0", borderLeft: `4px solid ${VV_RED}` }}>
              <p className="font-semibold mb-1">Two things to know before you book excursions:</p>
              <p className="mb-2">Book before the cruise. Prices are lower and your spot is guaranteed. Once you are onboard, popular excursions sell out.</p>
              <p>Book through the ship rather than independently. If your ship excursion runs long, the ship waits for you. If you are on your own and running late, the ship leaves without you.</p>
            </div>
            {[
              { port: "Bimini, Bahamas", about: "One of the closest Bahamian islands to the US and a frequent stop on Caribbean itineraries. The water is crystal clear and the island is laid back. Virgin has a private beach club experience here that is one of the best stops on any of these sailings.", excursions: ["Beach Club at Resorts World Bimini (Virgin's private experience)", "Snorkeling with Sharks", "Bimini Road Underwater Rock Formation Tour", "Dolphin Encounter", "Deep Sea Fishing", "Jet Ski Rentals"] },
              { port: "Costa Maya, Mexico", about: "A gateway to Mayan ruins and some beautiful natural areas including the Bacalar Lagoon. The port area is touristy but venture out and the real Yucatan is stunning.", excursions: ["Chacchoben Mayan Ruins Tour", "Bacalar Lagoon Day Trip", "ATVs Through the Jungle", "Kayaking and Snorkeling in Cenotes", "Fishing in the Caribbean"] },
              { port: "Cozumel, Mexico", about: "One of the world's top scuba diving and snorkeling destinations. The reef system here is part of the Mesoamerican Barrier Reef. Even if you do not dive, snorkeling here is spectacular.", excursions: ["Scuba Diving at Palancar Reef", "Snorkel with Turtles", "Catamaran Sail and Snorkel", "Swim with Dolphins", "Dune Buggy Tour through the Island", "Jeep and Snorkel Adventure"] },
              { port: "San Juan, Puerto Rico", about: "Old San Juan is one of the most beautiful neighborhoods in the Caribbean. The colorful buildings, 16th century forts, and local food scene make this port stop feel completely different from a beach day.", excursions: ["El Yunque Rainforest Tour", "Old San Juan Walking Tour", "Bioluminescent Bay Tour (evening)", "Rum Distillery Tour", "El Morro Fort Visit"] },
              { port: "Ibiza, Spain", about: "Known for its nightlife but there is a lot more here than clubs. The old town Dalt Vila is a UNESCO World Heritage Site, the beaches are stunning, and the food is excellent.", excursions: ["Dalt Vila and Old Town Tour", "Beach Club Experience", "Boat Trip Around the Island", "Sunset Sailing", "Sea Cave Kayaking"] },
              { port: "Skagway, Alaska", about: "A gateway to Gold Rush era history and some of the most dramatic landscapes in the world. The White Pass and Yukon Route railway is one of the best train rides in North America.", excursions: ["White Pass and Yukon Route Railway", "Glacier Helicopter Tour", "Chilkoot Trail Hike", "Dog Sledding on a Glacier (summer)", "Kayaking in the Lynn Canal"] },
            ].map((p) => (
              <Accordion key={p.port} title={p.port}>
                <p className="mb-4">{p.about}</p>
                <p className="font-semibold mb-2" style={{ color: VV_RED }}>Popular Shore Things Here</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">{p.excursions.map((e) => <li key={e}>{e}</li>)}</ul>
              </Accordion>
            ))}
          </section>
        )}

        {/* TRIP INSURANCE */}
        {activeTab === "insurance" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Trip Insurance</h2>
            <p className="text-gray-500 mb-8">I always suggest trip insurance when booking a cruise. I know it feels like something you will never use, but travel puts you in situations where things can go sideways in ways that have nothing to do with the cruise line.</p>
            <div className="p-5 rounded-xl mb-6 text-white text-sm" style={{ background: VV_RED }}>
              <strong>One thing to know right now:</strong> Trip insurance is almost always cheaper when you buy it at the time of booking. The longer you wait, the more it costs and the fewer options you have. Lock it in early.
            </div>
            <Accordion title="What If You Get Sick Before You Leave?">
              <p className="mb-3">You have been planning this trip for months. Two days before departure you end up in urgent care. Without insurance, you lose every dollar you spent on the cruise because the cancellation deadline has passed.</p>
              <p>With trip insurance, a covered illness before departure lets you cancel and get reimbursed. Your planning fees, your cruise deposit, your pre-paid excursions, all of it.</p>
            </Accordion>
            <Accordion title="What If Someone in Your Family Has an Emergency?">
              <p>Trip insurance covers trip cancellation for family medical emergencies so you can be where you need to be without the financial pain on top of everything else.</p>
            </Accordion>
            <Accordion title="What If You Get Sick or Hurt at Sea or in Another Country?">
              <p className="mb-3">Your regular health insurance often does not cover you outside the United States. A medical evacuation from a ship or from a foreign port can cost tens of thousands of dollars out of pocket.</p>
              <p>Trip insurance with medical coverage and evacuation protection means you are covered for the care you need and the transport to get home safely.</p>
            </Accordion>
            <Accordion title="What If Your Flight Gets Cancelled or Delayed?">
              <p>Trip delay coverage helps reimburse you for unexpected overnight stays, meals, and rebooking costs when your travel gets disrupted. It turns a stressful situation into a manageable one.</p>
            </Accordion>
            <Accordion title="Why Buy It at Booking?">
              <p className="mb-3">Insurance is cheaper at booking and most policies include a pre-existing condition coverage window that expires 14 to 21 days after your initial deposit. If you wait, that window closes.</p>
              <p>Lock it in early. You will never regret having it and you will absolutely regret not having it if something comes up.</p>
            </Accordion>
            <div className="mt-6 p-5 rounded-xl" style={{ background: "#FFF5F5", border: `1px solid ${VV_RED}20` }}>
              <p className="font-semibold mb-2" style={{ color: VV_DARK }}>Have Questions About Insurance?</p>
              <p className="text-sm text-gray-600">I can walk you through coverage options when we talk through your booking. Reach out through the link below or use my affiliate link to start exploring sailings.</p>
            </div>
          </section>
        )}

        {/* ERIC'S TIPS */}
        {activeTab === "tips" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Eric's Tips for Your Virgin Voyage</h2>
            <p className="text-gray-500 mb-8">I am First Mate certified with Virgin Voyages and have been on more than 20 cruises. Here is the stuff I actually tell my clients before they sail.</p>
            <Accordion title="Lock In Gratuities When You Book">
              <p>Gratuities are cheaper when you add them at the time of booking. Virgin Voyages charges gratuities as a separate line item and if you wait until you are onboard the rate goes up. Add them during checkout.</p>
            </Accordion>
            <Accordion title="Book Your Excursions Before You Sail">
              <p className="mb-3">Pre-cruise pricing on Shore Things is lower than onboard pricing. More importantly, popular excursions sell out. The ones that fill up first tend to be the best ones.</p>
              <p>I can help you sort through the options for your specific ports. Reach out and we can talk through it before you book.</p>
            </Accordion>
            <Accordion title="Book Your Dining Before You Board">
              <p>The Sailor app lets you make restaurant reservations before you ever step on the ship. Do it early because The Wake and Test Kitchen fill up fast. Get them booked as soon as your booking window opens.</p>
            </Accordion>
            <Accordion title="Time Your Booking Around a Bar Tab Promotion">
              <p>Virgin Voyages runs Bar Tab promotions throughout the year that can add $100 to $300 or more in drink credit at no extra cost. Reach out to me before you commit to a sailing and I will check what is currently available.</p>
            </Accordion>
            <Accordion title="Book Your Next Voyage Before You Disembark">
              <p className="mb-3">The My Next Virgin Voyage program lets you book your next sailing while you are still onboard at a reduced deposit and sometimes with extra Sailor Loot credit. The booking counts toward your Sailing Club tier and you can change the dates later if plans shift.</p>
              <p>Do not get off the ship without at least looking into it.</p>
            </Accordion>
            <Accordion title="Get There Early on Embarkation Day">
              <p>Virgin Voyages staggers boarding by check-in time. The earlier your assigned time, the sooner you get on the ship. Build a little buffer on embarkation day and do not cut it close.</p>
            </Accordion>
            <Accordion title="Richard's Rooftop Is the Hidden Gem">
              <p>Most people find the main pool deck on day one and never go looking for anything else. Richard's Rooftop is the adults-only pool area on the top deck and it tends to be significantly quieter. Get there early and you will likely have it almost to yourself.</p>
            </Accordion>
            <Accordion title="Check Your Bar Tab Balance in the App">
              <p>Your Bar Tab balance shows in the Sailor app. Check it a few times during the sailing so you know where you stand. It does not carry over after your trip so use it before you disembark.</p>
            </Accordion>
            <Accordion title="Get Trip Insurance and Get It Early">
              <p>A medical situation at sea, a cancelled flight, a family emergency, or a lost bag can turn a dream trip into a financial headache fast. Travel insurance is cheaper at booking and includes pre-existing condition coverage that expires if you wait too long.</p>
            </Accordion>
          </section>
        )}

        {/* READY TO BOOK CTA */}
        <div className="mt-14 rounded-2xl p-8 text-center text-white" style={{ background: `linear-gradient(135deg, ${VV_DARK}, ${VV_RED})` }}>
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: VV_GOLD }}>Ready to Sail</p>
          <h3 className="text-2xl font-bold mb-3">Let's Get You on the Ship</h3>
          <p className="text-red-100 mb-6 max-w-lg mx-auto">
            I am First Mate certified with Virgin Voyages and I have sailed more than 20 cruises. You can start exploring sailings and book directly using my link below. No planning fee on Virgin Voyages bookings. Have questions first? I am happy to talk through everything before anything is confirmed.
          </p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-bold text-base transition hover:opacity-90"
            style={{ background: VV_GOLD, color: VV_DARK }}
          >
            Ready for an actual vacation? Let's plot your escape.
          </a>
          <p className="mt-4 text-xs text-red-300">
            Booking through this link connects you with Happy Detour Travel so I am in your corner if anything comes up.
          </p>
        </div>
      </div>

    </div>
  );
}
