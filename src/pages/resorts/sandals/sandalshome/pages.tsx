import { useState } from "react";

const S_BLACK = "#1A1A1A";
const S_GOLD = "#C9A84C";
const S_LIGHT_GOLD = "#F5EDD6";
const S_CREAM = "#FDFAF4";
const S_DARK_GOLD = "#A07830";
const S_ACCENT = "#FFF8E8";

const AFFILIATE_LINK = "https://www.sandals.com/?referral=101731&agentid=ERCA7707";

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-yellow-100 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-yellow-50 transition-colors"
        style={{ background: open ? S_ACCENT : "white" }}
      >
        <span>{title}</span>
        <span
          className="text-2xl transition-transform duration-200"
          style={{ color: S_GOLD, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 py-5 bg-white border-t border-yellow-100 text-gray-700 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

const TABS = [
  { id: "about", label: "About Sandals" },
  { id: "resorts", label: "The Resorts" },
  { id: "included", label: "What's Included" },
  { id: "dining", label: "Dining" },
  { id: "activities", label: "Activities" },
  { id: "butler", label: "Butler Service" },
  { id: "weddings", label: "Weddings & Honeymoons" },
  { id: "insurance", label: "Trip Insurance" },
  { id: "tips", label: "Eric's Tips" },
];

export default function SandalsPage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen" style={{ background: S_CREAM, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Hero */}
      <div
        className="relative py-24 px-6 text-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${S_BLACK} 0%, #2A2A2A 60%, #3A3020 100%)` }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, ${S_GOLD} 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: S_GOLD }}>Luxury Included</p>
          <h1 className="text-5xl font-bold mb-4 leading-tight text-white">Sandals Resorts</h1>
          <p className="text-xl mb-6 leading-relaxed" style={{ color: "#D4C4A0" }}>
            Voted the World's Leading All-Inclusive Resort Brand 31 years in a row. Adults only. Couples only. Everything truly included. No hidden fees, no tipping, no surprises at checkout.
          </p>
          <p className="text-base" style={{ color: "#A09070" }}>
            17 luxury resorts across 8 Caribbean islands. Eric books Sandals on your behalf using his affiliate partnership so you get expert guidance at no extra cost to you.
          </p>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 shadow-md overflow-x-auto" style={{ background: S_BLACK }}>
        <div className="flex justify-center min-w-max mx-auto px-4 w-full">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2"
              style={{
                color: activeTab === tab.id ? S_GOLD : "#94A3B8",
                borderBottomColor: activeTab === tab.id ? S_GOLD : "transparent",
                background: "transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* ABOUT */}
        {activeTab === "about" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: S_BLACK }}>About Sandals Resorts</h2>
            <p className="text-gray-500 mb-8">Sandals is the gold standard for couples all-inclusive vacations in the Caribbean. Built on the idea that a real luxury vacation should not require a spreadsheet to track what is and is not included, Sandals pioneered the Luxury Included concept and has been setting the bar for over 40 years.</p>

            <Accordion title="What Is Sandals?">
              <p className="mb-3">Sandals Resorts is a Jamaica-born company founded in 1981 with a single resort in Montego Bay and a vision to create the most complete vacation experience in the Caribbean. Today they operate 17 adults-only, couples-only resorts across 8 Caribbean islands and have been voted the World's Leading All-Inclusive Resort Brand for 31 consecutive years.</p>
              <p>Every Sandals resort is designed exclusively for couples. That means the entire experience, from the room categories to the dining concepts to the entertainment, is built around two people who want to disconnect from everything else and just be together somewhere beautiful.</p>
            </Accordion>

            <Accordion title="Couples Only — What That Means">
              <p className="mb-3">Sandals is strictly for couples. Two adults traveling together. That means no kids, no solo travelers, and no groups unless they are composed of couples. The policy creates an environment that is genuinely different from other all-inclusive resorts where families and solo travelers are mixed in with couples trying to have a romantic vacation.</p>
              <p>The result is a resort atmosphere that feels intentional and curated. Everyone there is a couple looking for the same thing. The energy is relaxed, romantic, and low-pressure in a way that is hard to find at a general-population all-inclusive.</p>
            </Accordion>

            <Accordion title="What Makes Sandals Different From Other All-Inclusives">
              <p className="mb-3">Most all-inclusive resorts are inclusive in name only. You get the room and the buffet and the basic drinks and then you spend the rest of the week paying for everything else. Sandals built their reputation on making the all-inclusive promise actually true:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>Premium top-shelf alcohol included, not well drinks only</li>
                <li>Multiple gourmet specialty restaurants included with no dining surcharges</li>
                <li>Scuba diving included if you are certified, and PADI certification available onsite</li>
                <li>Water sports including snorkeling, kayaking, sailing, and windsurfing included</li>
                <li>Round-trip airport transfers included</li>
                <li>Gratuities included with a no-tipping policy resort-wide</li>
                <li>Taxes and fees included in the rate</li>
              </ul>
              <p>When you check out of a Sandals resort your bill is zero. Everything was already covered. That is the experience they have built their brand on and it holds up.</p>
            </Accordion>

            <Accordion title="Why Book Through Eric?">
              <p className="mb-3">You get the same price booking through Eric as you do booking directly on the Sandals website. The difference is you get someone who has researched every property, knows how to match couples to the right resort for their specific style, and is available if anything comes up before or during your trip.</p>
              <p>Sandals also offers promotions and category upgrades that are not always visible when booking directly. Booking through a travel advisor familiar with the brand means you are more likely to get the full picture of what is available before you commit.</p>
            </Accordion>
          </section>
        )}

        {/* THE RESORTS */}
        {activeTab === "resorts" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: S_BLACK }}>The Sandals Properties</h2>
            <p className="text-gray-500 mb-8">Sandals operates 17 resorts across 8 Caribbean islands. Each one has its own personality, beach, and vibe. Here is a breakdown by island so you can find the destination that fits what you are looking for.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: S_ACCENT, borderLeft: `4px solid ${S_GOLD}` }}>
              <strong>Note:</strong> Several Sandals properties in Jamaica including Sandals Montego Bay, Sandals Royal Caribbean, and Sandals South Coast are currently undergoing major Sandals 2.0 renovations and are scheduled to reopen in late 2026. All other properties are open. Reach out to Eric before booking to confirm current availability.
            </div>

            <h3 className="text-lg font-bold mb-3 mt-6" style={{ color: S_GOLD }}>Jamaica — The Birthplace of Sandals</h3>
            {[
              { name: "Sandals Dunn's River", location: "Ocho Rios", opened: "2023", notes: "The newest and most modern Sandals property in Jamaica and one of the most impressive in the entire portfolio. Dunn's River represents the Sandals 2.0 design philosophy with rooftop pools, specialty coffee concepts, and contemporary suites that feel genuinely elevated. Located minutes from the iconic Dunn's River Falls and close enough to Sandals Ochi that guests get exchange dining privileges across both properties.", highlights: ["Newest resort in Jamaica", "Sandals 2.0 modern design", "Coyaba Sky Swim-Up Rondoval suites", "Exchange dining with Sandals Ochi", "Near Dunn's River Falls"] },
              { name: "Sandals Ochi", location: "Ocho Rios", notes: "A vibrant beachfront resort with a beach club vibe and one of the most social atmospheres in the Sandals portfolio. Combined with Dunn's River access you get an extraordinary combined dining and pool program across both properties.", highlights: ["Lively social atmosphere", "100+ pools", "16 restaurants", "Exchange privileges with Dunn's River", "Beach club energy"] },
              { name: "Sandals Negril", location: "Negril", notes: "Set on the famous Seven Mile Beach, one of the most beautiful stretches of sand in the Caribbean. Negril is the most laid-back and beach-focused of the Jamaica properties. Perfect for couples who want stunning sunsets, great snorkeling, and a slower pace.", highlights: ["Seven Mile Beach frontage", "Famous Jamaican sunsets", "Excellent snorkeling", "Relaxed laid-back vibe", "Overwater bungalows available"] },
              { name: "Sandals Royal Plantation", location: "Ocho Rios", notes: "Sandals' only all-butler boutique resort with just 74 suites. The most intimate and exclusive property in the entire portfolio. If you want a resort that feels like a private retreat rather than a large resort, Royal Plantation is the answer.", highlights: ["All-butler suites only", "Just 74 suites total", "Two private cove beaches", "Ultra-intimate atmosphere", "Complimentary golf nearby"] },
            ].map((r) => (
              <div key={r.name} className="mb-3">
                <Accordion title={`${r.name} — ${r.location}`}>
                  <p className="mb-3">{r.notes}</p>
                  <p className="font-semibold mb-2 text-sm" style={{ color: S_GOLD }}>Highlights</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">{r.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                </Accordion>
              </div>
            ))}

            <h3 className="text-lg font-bold mb-3 mt-8" style={{ color: S_GOLD }}>Saint Lucia — Dramatic Beauty</h3>
            {[
              { name: "Sandals Grande St. Lucian", location: "Gros Islet", notes: "Widely considered one of the best Sandals resorts for honeymoons. Set on a peninsula with the Caribbean Sea on one side and Rodney Bay on the other, surrounded by stunning views of the Piton mountains. The overwater bungalows here are legendary and the sunsets are spectacular.", highlights: ["Best for honeymooners", "Overwater bungalows", "Piton mountain views", "Peninsula location", "Crystal clear calm waters"] },
              { name: "Sandals Regency La Toc", location: "Castries", notes: "A glamorous resort set on a 210-acre estate with a 9-hole golf course. La Toc has one of the most dramatic settings of any Sandals property with lush hillside views and oceanfront suites.", highlights: ["9-hole golf course included", "210-acre estate", "Oceanfront suites", "Swim-up bar access", "Rich hillside setting"] },
              { name: "Sandals Halcyon Beach", location: "Castries", notes: "The most intimate of the three Saint Lucia properties and often the most affordable entry point to the island. Halcyon Beach guests also get exchange privileges at the other two Saint Lucia resorts giving access to a much wider dining program.", highlights: ["Most intimate St. Lucia option", "Exchange dining at 3 resorts", "Affordable entry to Saint Lucia", "Beautiful beach setting"] },
            ].map((r) => (
              <div key={r.name} className="mb-3">
                <Accordion title={`${r.name} — ${r.location}`}>
                  <p className="mb-3">{r.notes}</p>
                  <p className="font-semibold mb-2 text-sm" style={{ color: S_GOLD }}>Highlights</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">{r.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                </Accordion>
              </div>
            ))}

            <h3 className="text-lg font-bold mb-3 mt-8" style={{ color: S_GOLD }}>Barbados, Bahamas, Antigua, Grenada, Curaçao and Saint Vincent</h3>
            {[
              { name: "Sandals Royal Barbados", location: "Barbados", notes: "The newer of the two Barbados properties and one that introduced several firsts for the brand including a rooftop infinity pool and bar. The two Barbados resorts are connected giving guests exchange access to both.", highlights: ["Rooftop infinity pool", "Exchange with Sandals Barbados", "Modern Sandals 2.0 design", "Atlantic Ocean coastline"] },
              { name: "Sandals Barbados", location: "Barbados", notes: "The original Barbados property with a well-established and mature feel. Connected to Royal Barbados for combined dining and amenity access across both properties.", highlights: ["Connected to Royal Barbados", "Established mature property", "Full specialty dining program", "Barbados culture and food"] },
              { name: "Sandals Royal Bahamian", location: "Nassau, Bahamas", notes: "The closest Sandals to the US mainland at just an hour from Miami. Sandals Royal Bahamian has its own offshore private island accessible by boat and is one of the most convenient options for East Coast travelers.", highlights: ["Closest to US mainland", "Private offshore island", "10-15 mins from Nassau airport", "Great for short getaways"] },
              { name: "Sandals Grande Antigua", location: "Antigua", notes: "Set on Dickenson Bay with the Caribbean's largest river pool. Antigua has 365 beaches and Grande Antigua puts you on one of the best. A great choice for couples who want a social atmosphere with a beautiful beach.", highlights: ["Caribbean's largest river pool", "Dickenson Bay beach", "15 mins from airport", "Social atmosphere"] },
              { name: "Sandals Grenada", location: "Grenada", notes: "Set on Pink Gin Beach in one of the most naturally beautiful islands in the Caribbean. Grenada is less visited than Jamaica or Barbados which means a quieter, more exclusive feel and spectacular diving on unspoiled reefs.", highlights: ["Pink Gin Beach", "Excellent scuba diving", "Less crowded island", "Natural beauty and spice markets"] },
              { name: "Sandals Royal Curaçao", location: "Curaçao", notes: "Sandals' first Dutch Caribbean property with a completely different feel from the other resorts. A two-level infinity pool, European-influenced island culture, and colorful Willemstad nearby. A great choice for couples who want something genuinely different.", highlights: ["Two-level infinity pool", "Dutch Caribbean culture", "Colorful Willemstad nearby", "Different from typical Caribbean"] },
              { name: "Sandals Saint Vincent", location: "Saint Vincent", notes: "The newest Sandals resort opened March 2024. Two-story Overwater Villas that are the first of their kind in the Sandals portfolio, 11 restaurants, and a pristine undiscovered Caribbean island setting. For couples who want cutting edge and off the beaten path, this is it.", highlights: ["Opened 2024", "Two-story Overwater Villas", "11 restaurants, 9 bars", "Pristine undiscovered destination", "Waterfalls and diving nearby"] },
            ].map((r) => (
              <div key={r.name} className="mb-3">
                <Accordion title={`${r.name} — ${r.location}`}>
                  <p className="mb-3">{r.notes}</p>
                  <p className="font-semibold mb-2 text-sm" style={{ color: S_GOLD }}>Highlights</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">{r.highlights.map(h => <li key={h}>{h}</li>)}</ul>
                </Accordion>
              </div>
            ))}
          </section>
        )}

        {/* WHAT'S INCLUDED */}
        {activeTab === "included" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: S_BLACK }}>What's Included</h2>
            <p className="text-gray-500 mb-8">Sandals calls it Luxury Included for a reason. Here is the full picture of what comes with your stay so you know exactly what you are getting before you book.</p>

            <Accordion title="Dining — All Restaurants, All Included">
              <p className="mb-3">Every restaurant at your resort is included with no dining surcharges. Depending on the property that means anywhere from 5 to 21 specialty restaurants ranging from French cuisine to Japanese teppanyaki to Italian to Jamaican jerk. You eat wherever you want, whenever you want.</p>
              <p>If you are staying at a resort that has exchange dining privileges with a neighboring property, your dining options expand even further. Saint Lucia guests can dine at all three resorts on the island. Jamaica guests have exchange access between connected properties.</p>
            </Accordion>

            <Accordion title="Premium Top-Shelf Alcohol">
              <p className="mb-3">Sandals includes premium top-shelf spirits, wine, beer, and cocktails. This is not well drinks and house wine. This is name-brand premium alcohol available at any bar throughout the resort around the clock.</p>
              <p>Mini-bars in rooms are also stocked and included. You come back from the beach and there is a cold beer waiting for you. No receipt, no charge, no thinking about it.</p>
            </Accordion>

            <Accordion title="Scuba Diving and Water Sports">
              <p className="mb-3">Sandals includes non-motorized water sports for all guests: snorkeling, kayaking, sailing, windsurfing, paddleboarding, and glass-bottom boat rides. These are typically charged separately at other resorts.</p>
              <p className="mb-3">For certified divers, scuba diving is included. Multiple dives per day at the resort's dive sites at no extra charge. If you are not certified, Sandals offers PADI open water certification courses at the resort for a fee.</p>
              <p>Motorized water sports like jet skiing are separate, but the core water sports program is one of the most comprehensive included offerings in the industry.</p>
            </Accordion>

            <Accordion title="Round-Trip Airport Transfers">
              <p className="mb-3">Sandals includes luxury round-trip transfers from the airport to the resort. You land, find the Sandals representative, and get into an air-conditioned vehicle without thinking about local taxis or rideshares in an unfamiliar place.</p>
              <p>Butler-level room guests on some properties also get access to airport lounge access and private BMW transfers depending on the property and suite category.</p>
            </Accordion>

            <Accordion title="No Tipping Policy">
              <p className="mb-3">Sandals operates a no-tipping policy resort-wide. The staff are paid well and tips are not expected or required. This is actually a meaningful part of the experience because you stop mentally calculating gratuities every time someone brings you a drink.</p>
              <p>The exception is butler service guests and spa staff, where tipping is optional and appreciated but still never required.</p>
            </Accordion>

            <Accordion title="Entertainment, Fitness and Extras">
              <p>Nightly entertainment, live music, fitness center access, tennis courts, and resort activities are all included. Golf is included at select properties. The overall experience is designed so that the only thing you pay for at checkout is nothing.</p>
            </Accordion>

            <Accordion title="What Is NOT Included">
              <ul className="list-disc pl-5 space-y-2">
                <li>Spa treatments are not included and are a meaningful upcharge</li>
                <li>Off-resort excursions are separate and should be booked through the resort concierge</li>
                <li>PADI scuba certification courses have a fee</li>
                <li>Motorized water sports like jet skiing are extra</li>
                <li>Room upgrades beyond your booked category</li>
                <li>Phone and internet charges beyond what is provided</li>
              </ul>
            </Accordion>
          </section>
        )}

        {/* DINING */}
        {activeTab === "dining" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: S_BLACK }}>Dining at Sandals</h2>
            <p className="text-gray-500 mb-8">The dining program is one of the strongest arguments for Sandals over any other all-inclusive. Multiple specialty restaurants, no surcharges, and quality that genuinely surprised most guests on their first visit.</p>

            <Accordion title="How Many Restaurants?">
              <p className="mb-3">Depending on the property you are staying at, Sandals offers between 5 and 21 specialty restaurants. The larger properties like Sandals Ochi and the combined Jamaica properties have the broadest options. At exchange-privilege properties the total dining options across two or three resorts can reach 30 or more.</p>
              <p>Every restaurant is included. There are no a la carte surcharges, no premium dining fees, and no minimum spend requirements. You book a table and you eat.</p>
            </Accordion>

            <Accordion title="What Kinds of Restaurants?">
              <p className="mb-3">Sandals goes beyond the standard all-inclusive buffet and pasta station model. Typical specialty restaurant categories across the portfolio include French fine dining, Japanese hibachi and sushi, Italian, steakhouse, Jamaican jerk and local cuisine, seafood, Mediterranean, and contemporary Caribbean.</p>
              <p>The quality level is genuinely above what most all-inclusive guests expect. The kitchens at Sandals restaurants are staffed by trained chefs and the menus are updated regularly to stay current.</p>
            </Accordion>

            <Accordion title="Making Restaurant Reservations">
              <p className="mb-3">The most popular restaurants at each property require reservations and they fill up fast, especially at peak season. The key advice from guests and travel advisors consistently is to make your dining reservations as soon as you arrive, ideally on embarkation day.</p>
              <p>If you are in a butler suite, your butler can make all your dining reservations for you before you even get to the restaurant. This is one of the most practical butler benefits and worth using on your first day.</p>
            </Accordion>

            <Accordion title="Room Service">
              <p>Most Sandals properties offer 24-hour room service as part of the included experience. Breakfast in bed, late night snacks, a full dinner in your room if you prefer privacy. It is all part of what makes the resort feel genuinely luxurious rather than just all-inclusive.</p>
            </Accordion>
          </section>
        )}

        {/* ACTIVITIES */}
        {activeTab === "activities" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: S_BLACK }}>Activities and Things to Do</h2>
            <p className="text-gray-500 mb-8">Sandals is designed for couples who want to do exactly as much or as little as they feel like. Here is what is available when you are in the mood to do something.</p>

            <Accordion title="Beach and Pool">
              <p className="mb-3">Every Sandals resort is on a beach and most have multiple pool options. Some properties have dozens of pools including swim-up bars, infinity pools, and quiet adults-only pool areas. The beach chairs and umbrellas are complimentary and the beach bar is always nearby.</p>
              <p>One consistent tip from guests: the best beach and pool chairs go early. Get out before 8am on busy days to claim your preferred spot. Butler guests can have their butler set up chairs with towels, drinks, and snacks before you even get there.</p>
            </Accordion>

            <Accordion title="Scuba Diving and Snorkeling">
              <p className="mb-3">Included scuba diving for certified divers is one of the most distinctive Sandals perks. Multiple dives per day, equipment included, guided dives to the resort's dive sites. If you have never dived before, Sandals is a great place to get certified through their PADI program offered at most properties.</p>
              <p>Snorkeling is included for everyone and the reef quality varies significantly by island. Curaçao and Grenada are particularly known for excellent snorkeling and diving conditions.</p>
            </Accordion>

            <Accordion title="Water Sports">
              <p>Sailing, kayaking, windsurfing, paddleboarding, glass-bottom boat rides, and aqua-trikes are all included. The water sports desk at each property has equipment and instructors available throughout the day. This is one of the biggest value-adds over a regular hotel beach experience.</p>
            </Accordion>

            <Accordion title="Tennis and Land Sports">
              <p>Tennis courts are available at most properties and rackets are provided. Basketball, volleyball, and other land sports are available at select resorts. Golf is included at Sandals properties with courses, and other properties arrange complimentary or discounted green fees at nearby courses.</p>
            </Accordion>

            <Accordion title="Fitness Center">
              <p>A fully equipped fitness center is included at every Sandals property. Some resorts also offer group fitness classes including yoga and aerobics at no charge. A good option on the mornings when the beach or pool can wait.</p>
            </Accordion>

            <Accordion title="Off-Resort Excursions">
              <p className="mb-3">Off-resort excursions are separate from your Luxury Included package and are arranged through the resort's concierge or Island Routes, Sandals' official excursion partner. Popular options include mud baths and waterfall tours in Saint Lucia, Dunn's River Falls climb in Jamaica, catamaran sunset cruises, island tours, and cultural experiences.</p>
              <p>Book popular excursions as soon as you arrive or in advance through the concierge. The most sought-after experiences fill up quickly especially during peak season.</p>
            </Accordion>
          </section>
        )}

        {/* BUTLER SERVICE */}
        {activeTab === "butler" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: S_BLACK }}>Butler Service</h2>
            <p className="text-gray-500 mb-8">Butler service at Sandals is available for guests in select suite categories and it is one of the most talked-about experiences the brand offers. Here is what it actually means and whether it is worth the upgrade.</p>

            <Accordion title="What Is a Sandals Butler?">
              <p className="mb-3">A Sandals butler is a dedicated personal attendant assigned to your suite for the duration of your stay. They are available to you around the clock and their job is to anticipate and handle every detail of your vacation so you never have to think about logistics.</p>
              <p>Sandals butlers are some of the most highly trained in the hospitality industry. They complete a rigorous certification program and are known across the resort industry for their attentiveness and genuine care for the guest experience.</p>
            </Accordion>

            <Accordion title="What Does a Butler Actually Do?">
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>Unpacks your luggage when you arrive if you would like</li>
                <li>Sets up your beach or pool chairs daily with towels, chilled drinks, and snacks in your preferred location</li>
                <li>Makes all your dining reservations across the resort</li>
                <li>Arranges off-resort excursions and activities</li>
                <li>Delivers meals to your suite or private terrace at any hour</li>
                <li>Books spa treatments and fitness classes</li>
                <li>Handles any special requests including room decorations for anniversaries or honeymoons</li>
                <li>Stocks your in-room bar with your specific preferences</li>
                <li>Priority check-in and check-out at the resort</li>
                <li>At some properties, access to a private BMW transfer from the airport</li>
              </ul>
            </Accordion>

            <Accordion title="Is Butler Service Worth the Upgrade?">
              <p className="mb-3">For couples celebrating something meaningful, yes. The upgrade cost is real but what you get is a vacation where you never wait, never plan, and never think about logistics. The butler handles everything and the result is a level of relaxation that is genuinely different from a standard resort stay.</p>
              <p className="mb-3">For couples who are independent and prefer to figure things out themselves, the butler suite may not add as much value. The resort experience is already excellent without it.</p>
              <p>The sweet spot is couples celebrating a honeymoon, anniversary, or milestone who want the vacation to feel truly special. The butler service transforms that from a nice resort stay into something people talk about for years afterward.</p>
            </Accordion>

            <Accordion title="The Beach Chair Setup — A Small Thing That Makes a Big Difference">
              <p className="mb-3">One of the most consistently mentioned butler perks in guest reviews is the beach chair setup. You wake up, tell your butler where you want to sit and what you want to drink, and by the time you get to the beach or pool your chairs are already set up with chilled towels, your first drinks, and snacks waiting for you.</p>
              <p>On a resort where the best chairs go by 8am, having your butler claim them for you before you are even awake is one of those small luxuries that changes your whole experience of the day.</p>
            </Accordion>
          </section>
        )}

        {/* WEDDINGS AND HONEYMOONS */}
        {activeTab === "weddings" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: S_BLACK }}>Weddings and Honeymoons</h2>
            <p className="text-gray-500 mb-8">Sandals has built an entire ecosystem around romance and it shows in how well they handle weddings and honeymoons. If you are planning either, this section covers what you need to know.</p>

            <Accordion title="WeddingMoons — Sandals' Wedding Program">
              <p className="mb-3">Sandals offers complimentary wedding packages to couples who book a minimum stay at the resort. This is one of the most compelling value propositions in destination weddings. You get a ceremony, a wedding coordinator, flowers, a wedding cake, and a photographer for a set period of time all included with your stay.</p>
              <p>Upgraded wedding packages with more elaborate ceremonies, longer photo sessions, bigger floral arrangements, and additional guests are available at various price points. But the baseline included wedding is a real ceremony on a Caribbean beach that costs you nothing beyond your room booking.</p>
            </Accordion>

            <Accordion title="Best Sandals Resorts for Honeymoons">
              <p className="mb-3">Most travel advisors and guests consistently point to a few properties as standing above the rest for honeymoons:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>Sandals Grande St. Lucian</strong> — The overwater bungalows, the Piton views, and the calm turquoise water make this the most recommended honeymoon property in the portfolio</li>
                <li><strong>Sandals Dunn's River</strong> — The newest and most modern property, perfect for couples who want contemporary luxury</li>
                <li><strong>Sandals Negril</strong> — Seven Mile Beach and world-famous sunsets make Negril one of the most romantic settings in the Caribbean</li>
                <li><strong>Sandals Saint Vincent</strong> — The newest property with two-story overwater villas for couples who want cutting-edge and off the beaten path</li>
                <li><strong>Sandals Royal Plantation</strong> — The all-butler boutique resort for couples who want the most intimate and exclusive experience possible</li>
              </ul>
            </Accordion>

            <Accordion title="Honeymoon Perks at Sandals">
              <p className="mb-3">Sandals offers honeymoon perks for couples within a certain window of their wedding date. These typically include room upgrades, special turndown service with rose petals and champagne, a couples massage credit, and recognition throughout the resort that turns the whole stay into a celebration.</p>
              <p>Let Eric know you are honeymooning when you book and he will make sure the resort has you flagged so the perks are in place when you arrive.</p>
            </Accordion>

            <Accordion title="Anniversary Stays">
              <p>Sandals is not just for honeymoons. Anniversary stays are common and the resort experience is designed to make any milestone feel special. Butler service is particularly popular for anniversary couples who want the trip to feel as significant as the occasion.</p>
            </Accordion>
          </section>
        )}

        {/* TRIP INSURANCE */}
        {activeTab === "insurance" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: S_BLACK }}>Trip Insurance</h2>
            <p className="text-gray-500 mb-8">I always recommend trip insurance on Sandals bookings. International travel to the Caribbean involves real risks that have nothing to do with the quality of the resort. This is the coverage that makes sure a bad situation does not become a financial disaster.</p>

            <div className="p-5 rounded-xl mb-6 text-white text-sm" style={{ background: S_BLACK }}>
              <strong style={{ color: S_GOLD }}>Buy it at booking.</strong> Trip insurance is cheaper when you add it at your initial deposit. Pre-existing condition coverage only applies within 14 to 21 days of your first payment. Do not wait.
            </div>

            <Accordion title="What If You Have to Cancel?">
              <p className="mb-3">Sandals has cancellation policies that vary by how close to your stay you cancel. Without insurance, canceling inside the penalty window means losing a meaningful portion of what you paid.</p>
              <p>Trip cancellation coverage reimburses you for covered reasons including illness, family emergency, or other qualifying events. You reschedule when you are ready and nothing is permanently lost.</p>
            </Accordion>

            <Accordion title="What If You Get Sick or Hurt in the Caribbean?">
              <p className="mb-3">Your US health insurance may not cover you in Jamaica, Saint Lucia, Barbados, or any other Sandals destination. A medical situation that requires evacuation back to the US can cost tens of thousands of dollars without coverage.</p>
              <p>Medical and evacuation coverage in your trip insurance means you get the care you need wherever you are and the transport home safely if required.</p>
            </Accordion>

            <Accordion title="What If Your Flight Gets Cancelled?">
              <p>Travel disruptions happen. A cancelled flight can mean missing your first night or two at a resort you have been looking forward to for months. Trip delay coverage helps cover accommodation, meals, and rebooking costs when your travel falls apart before you get there.</p>
            </Accordion>

            <Accordion title="Why Buy It at Booking?">
              <p>Two reasons. It is cheaper early when your risk is lower. And pre-existing condition coverage requires buying within a set window of your deposit. Miss it and that coverage is gone. Lock it in when we book your stay.</p>
            </Accordion>
          </section>
        )}

        {/* ERIC'S TIPS */}
        {activeTab === "tips" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: S_BLACK }}>Eric's Tips for Your Sandals Stay</h2>
            <p className="text-gray-500 mb-8">These tips come from extensive research including direct feedback from Sandals guests, travel advisor communities, and verified guest reviews. They are the things people wish they had known before they arrived.</p>

            <Accordion title="Make Restaurant Reservations the Moment You Arrive">
              <p className="mb-3">The most popular specialty restaurants at every Sandals property fill up fast, especially during peak season. The consistent advice from guests and advisors is to go to the concierge desk or contact your butler the moment you check in and lock in your dining reservations for the entire stay.</p>
              <p>If you are in a butler suite, send your butler a list of your preferred restaurants before you even arrive so they can start working on it. Waiting until day two means you may miss the restaurants that were highest on your list.</p>
            </Accordion>

            <Accordion title="Get to the Beach or Pool Early">
              <p className="mb-3">The best lounge chairs at popular pools and beach areas fill up by 8am on busy days. If having a great spot matters to you, get there early or use your butler to set up your chairs before you arrive.</p>
              <p>The silver lining is that most Sandals properties have multiple pool and beach areas. If the main pool is crowded, there is usually a quieter alternative nearby that most guests overlook.</p>
            </Accordion>

            <Accordion title="Book Excursions Early — On Arrival Day">
              <p className="mb-3">Off-resort excursions book up, especially during peak weeks. The mud baths and waterfall tours in Saint Lucia, the catamaran sunset cruise, and popular cultural experiences can sell out days in advance.</p>
              <p>Go to the concierge on your first day and book the excursions you want for the days you want them. Do not assume you can decide later and still get the experience you were looking forward to.</p>
            </Accordion>

            <Accordion title="Tell Them About Your Occasion">
              <p className="mb-3">If you are celebrating a honeymoon, anniversary, birthday, or any other milestone, tell Sandals when you book and remind them at check-in. The resort goes out of their way to make special occasions feel acknowledged with room decorations, complimentary champagne, and small touches throughout the stay.</p>
              <p>Tell Eric when you book so he can flag it with the property from the start. The earlier the resort knows, the more prepared they are when you arrive.</p>
            </Accordion>

            <Accordion title="The Butler Is Not Just for Convenience — Use Them">
              <p className="mb-3">Many guests in butler suites admit after their stay that they were too shy or felt too self-conscious to ask their butler for things throughout the trip. The butler is there specifically to be used. That is their entire job and the resort pays them well to do it.</p>
              <p>Ask your butler to set up beach chairs every morning. Ask them to make all your dinner reservations. Ask them to stock the room bar with your specific drink preferences. Ask for turndown chocolates or champagne. The more you use the butler the more value you get from that suite category upgrade.</p>
            </Accordion>

            <Accordion title="Pack Light on the Dining Extras">
              <p>Everything you could want to eat or drink is already at the resort and included. Guests consistently note that they packed more food and snacks than they needed and ended up leaving most of it untouched. Save the luggage space for things you will actually use.</p>
            </Accordion>

            <Accordion title="Get Trip Insurance and Get It Early">
              <p>International travel to the Caribbean involves real medical and travel risks. Your US health insurance likely does not cover you at your destination. Lock in trip insurance at the time of your Sandals booking so you have full coverage from the moment you pay your deposit.</p>
            </Accordion>
          </section>
        )}

        {/* CTA */}
        <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: `linear-gradient(135deg, ${S_BLACK}, #2A2010)` }}>
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: S_GOLD }}>Ready to Go All In</p>
          <h3 className="text-2xl font-bold mb-3 text-white">Find Your Perfect Sandals Resort</h3>
          <p className="mb-6 max-w-lg mx-auto" style={{ color: "#C4B490" }}>
            You get the same price booking through my link as you do booking direct. The difference is you get someone who knows the properties, can match you to the right resort for your style, and is available if anything comes up. Click below to start exploring.
          </p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-bold text-base transition hover:opacity-90"
            style={{ background: S_GOLD, color: S_BLACK }}
          >
            Explore Sandals Resorts
          </a>
          <p className="mt-4 text-xs" style={{ color: "#7A6A50" }}>Booking through this link supports Happy Detour Travel at no extra cost to you.</p>
        </div>

      </div>
    </div>
  );
}
