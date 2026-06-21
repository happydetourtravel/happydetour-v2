import { useState } from "react";

const NCL_NAVY = "#003087";
const NCL_RED = "#C8102E";
const NCL_LIGHT = "#F0F4FF";
const NCL_DARK = "#001A4D";
const NCL_GOLD = "#C9A84C";
const WHITE = "#FFFFFF";

const FORM_LINK = "https://forgehq.app/f/?t=7ro7s57c";

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-blue-100 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-blue-50 transition-colors"
        style={{ background: open ? "#EEF4FF" : "white" }}
      >
        <span>{title}</span>
        <span
          className="text-2xl transition-transform duration-200"
          style={{ color: NCL_NAVY, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
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
  { id: "freestyle", label: "Freestyle Cruising" },
  { id: "ships", label: "The Ships" },
  { id: "dining", label: "Dining" },
  { id: "solo", label: "Solo Travel" },
  { id: "freeatseaa", label: "Free at Sea" },
  { id: "cruisenext", label: "CruiseNext" },
  { id: "island", label: "Great Stirrup Cay" },
  { id: "excursions", label: "Shore Excursions" },
  { id: "insurance", label: "Trip Insurance" },
  { id: "tips", label: "Eric's Tips" },
];

export default function NCLPage() {
  const [activeTab, setActiveTab] = useState("freestyle");

  return (
    <div className="min-h-screen" style={{ background: NCL_LIGHT, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Hero */}
      <div
        className="relative py-24 px-6 text-center text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${NCL_DARK} 0%, ${NCL_NAVY} 60%, ${NCL_RED} 100%)` }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 40%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: NCL_GOLD }}>NCL University Master's Degree Certified</p>
          <h1 className="text-5xl font-bold mb-4 leading-tight">Norwegian Cruise Line</h1>
          <p className="text-xl mb-6 leading-relaxed" style={{ color: "#CBD5E1" }}>
            Freestyle Cruising means no formal dress codes, no set dining times, and no one telling you how to spend your day at sea. NCL invented this approach and they still do it better than anyone.
          </p>
          <p className="text-base" style={{ color: "#94A3B8" }}>
            Everything you need to know about sailing NCL, put together by Eric, your HDT travel advisor with an NCL University Master's Degree.
          </p>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 shadow-md overflow-x-auto" style={{ background: NCL_DARK }}>
        <div className="flex justify-center min-w-max mx-auto px-4 w-full">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-5 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2"
              style={{
                color: activeTab === tab.id ? NCL_GOLD : "#94A3B8",
                borderBottomColor: activeTab === tab.id ? NCL_GOLD : "transparent",
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

        {/* FREESTYLE CRUISING */}
        {activeTab === "freestyle" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: NCL_DARK }}>What Is Freestyle Cruising?</h2>
            <p className="text-gray-500 mb-8">Norwegian invented Freestyle Cruising and it changed the industry. Here is what it actually means for your vacation.</p>

            <Accordion title="No Set Dining Times">
              <p>On most cruise lines you are assigned a dining time, early seating or late seating, and that is when you eat. On NCL you eat when you are hungry. The main dining rooms are open during broad windows and the specialty restaurants take reservations whenever you want them. If you want dinner at 9pm because you were out exploring a port all day, that works. Nobody is waiting on you and you are not waiting on anyone else.</p>
            </Accordion>

            <Accordion title="No Formal Dress Codes">
              <p>You do not need to pack a suit or a formal gown. NCL does not have formal nights. Some restaurants have a smart casual suggestion but nobody is turning you away for what you are wearing. Pack what makes you comfortable and leave the tuxedo at home.</p>
            </Accordion>

            <Accordion title="Your Schedule, Your Way">
              <p>NCL does not tell you how to spend your sea days. There are pools, entertainment, bars, fitness facilities, and activities available throughout the day and you do all of it on your timeline. Nothing is mandatory, nothing is scheduled for you, and there is no pressure to participate in anything you do not want to do.</p>
            </Accordion>

            <Accordion title="Who Is NCL Best For?">
              <p className="mb-3">NCL works really well for a specific kind of traveler. If any of these sound like you, NCL is worth a serious look:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You like flexibility and do not want a rigid daily schedule</li>
                <li>You are traveling solo and want a ship that genuinely accommodates you</li>
                <li>You are a foodie who wants multiple dining options without extra charges piling up</li>
                <li>You want entertainment variety from Broadway shows to comedy to live music</li>
                <li>You want a ship with things to do but do not need the biggest ship in the world</li>
              </ul>
            </Accordion>

            <Accordion title="What Is Included in Your Fare?">
              <p className="mb-3">NCL's base fare covers more than people expect:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Main dining room meals</li>
                <li>The buffet (The Garden Cafe) all day</li>
                <li>Room service (basic menu, small delivery fee)</li>
                <li>Entertainment including Broadway-style shows, comedy clubs, and live music</li>
                <li>Pools, hot tubs, and fitness center access</li>
                <li>Most onboard activities and deck games</li>
              </ul>
              <p className="mt-3 text-sm text-gray-500">Specialty dining, alcohol, spa services, shore excursions, and gratuities are separate unless you add a Free at Sea package.</p>
            </Accordion>
          </section>
        )}

        {/* THE SHIPS */}
        {activeTab === "ships" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: NCL_DARK }}>The NCL Fleet</h2>
            <p className="text-gray-500 mb-8">NCL has one of the largest and most varied fleets at sea. From mid-size ships perfect for first timers to massive vessels packed with entertainment, there is a ship for every style of traveler.</p>

            {[
              {
                name: "Norwegian Breakaway",
                class: "Breakaway Class",
                capacity: "Approx. 3,963 guests",
                notes: "Eric has sailed on the Breakaway out of New York City. She sails to Canada and the Caribbean and is a fantastic option for East Coasters who want to drive to the port. The Breakaway has The Waterfront, a quarter-mile outdoor promenade along the side of the ship, and a solid lineup of specialty restaurants and entertainment.",
                highlights: ["The Waterfront outdoor promenade", "Howl at the Moon dueling pianos", "Rock of Ages Broadway show", "The Haven luxury ship-within-a-ship", "Plenty of specialty dining options", "Easy access from NYC"]
              },
              {
                name: "Norwegian Getaway",
                class: "Breakaway Class",
                capacity: "Approx. 3,963 guests",
                notes: "Sister ship to the Breakaway with a similar layout and experience. The Getaway sails from Miami and features a Miami-inspired design throughout. Great option for Florida-based travelers or anyone flying into Miami.",
                highlights: ["Miami-inspired design theme", "The Waterfront outdoor promenade", "Million Dollar Quartet Broadway show", "Strong specialty dining lineup", "Miami homeport"]
              },
              {
                name: "Norwegian Bliss",
                class: "Breakaway Plus Class",
                capacity: "Approx. 4,004 guests",
                notes: "One of NCL's most popular ships and for good reason. The Bliss has a go-kart track on the top deck, laser tag, and one of the best entertainment lineups in the fleet. She sails Alaska itineraries in summer which makes her a top pick for glacier viewing.",
                highlights: ["Top deck go-kart track", "Laser tag arena", "Jersey Boys Broadway show", "Ocean Tunnel waterslide", "Perfect for Alaska sailings", "The Haven ship-within-a-ship"]
              },
              {
                name: "Norwegian Joy",
                class: "Breakaway Plus Class",
                capacity: "Approx. 3,804 guests",
                notes: "Originally built for the Chinese market and refurbished for North America. The Joy sails Alaska and the Caribbean and has some unique features including a two-level go-kart track and the Mandara Spa.",
                highlights: ["Two-level go-kart track", "Laser tag", "Q Texas Smokehouse restaurant", "Galaxy Pavilion virtual reality", "Alaska and Caribbean itineraries"]
              },
              {
                name: "Norwegian Encore",
                class: "Breakaway Plus Class",
                capacity: "Approx. 3,998 guests",
                notes: "The largest of the Breakaway Plus class ships. The Encore has a massive go-kart track, Kinky Boots Broadway show, and some of the best entertainment facilities in the fleet. She sails the Caribbean and is a great choice for families and groups.",
                highlights: ["Largest go-kart track in the class", "Kinky Boots Broadway show", "Q Texas Smokehouse", "Tobacco Road speakeasy bar", "Strong entertainment lineup"]
              },
              {
                name: "Norwegian Prima",
                class: "Prima Class",
                capacity: "Approx. 3,099 guests",
                notes: "The newest class of ship from NCL with a focus on more space per guest. The Prima has the fastest waterslide at sea, a redesigned pool area, and a more premium feel overall. Fewer guests on a similarly sized ship means less crowding and a more relaxed experience.",
                highlights: ["The Drop free-fall waterslide", "Redesigned spacious pool deck", "Indulge Food Hall", "Prima Speedway race track", "More space per guest than older ships", "Premium finishes throughout"]
              },
              {
                name: "Norwegian Star",
                class: "Star Class",
                capacity: "Approx. 2,348 guests",
                notes: "Eric has sailed on the Star, which went to NCL's private island Great Stirrup Cay. She is a mid-size ship that feels more intimate than the mega ships. A great choice for someone who wants a solid cruise experience without the overwhelming scale of the larger vessels.",
                highlights: ["Mid-size and easy to navigate", "Visits Great Stirrup Cay private island", "Classic NCL freestyle experience", "More relaxed pace than mega ships", "Good option for first time cruisers"]
              },
            ].map((ship) => (
              <div key={ship.name} className="mb-4">
                <Accordion title={`${ship.name} — ${ship.class}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="mb-3">{ship.notes}</p>
                      <p className="text-sm text-gray-500">Capacity: {ship.capacity}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: NCL_NAVY }}>Ship Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {ship.highlights.map((h) => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <div className="mt-6 p-5 rounded-xl text-white text-sm" style={{ background: NCL_NAVY }}>
              <strong>Note from Eric:</strong> I have personally sailed on the Norwegian Breakaway out of New York and the Norwegian Star. If you have questions about what the experience actually feels like on either of those ships, I can give you a real answer, not a brochure one.
            </div>
          </section>
        )}

        {/* DINING */}
        {activeTab === "dining" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: NCL_DARK }}>Dining Onboard</h2>
            <p className="text-gray-500 mb-8">NCL has a mix of included dining and specialty restaurants. The main dining rooms and buffet are covered in your fare. Specialty restaurants are an upcharge unless you have a Free at Sea dining package.</p>

            <Accordion title="Main Dining Rooms (Included)">
              <p className="mb-3">Every NCL ship has multiple main dining rooms open for breakfast, lunch, and dinner during broad windows. You do not need a reservation and you can show up whenever works for you during those hours. The menus rotate and there is always a solid selection of appetizers, entrees, and desserts. Think of it as a proper sit-down restaurant that comes with your cruise.</p>
              <p>The food quality in the main dining rooms is genuinely good. Not fine dining, but well above what most people expect from included cruise food.</p>
            </Accordion>

            <Accordion title="The Garden Cafe (Included)">
              <p>The buffet on NCL ships is called The Garden Cafe and it runs almost all day. Breakfast, lunch, and casual dinner options plus late-night snacks. It is a large space with a huge variety and it is always busy. Great for a quick bite when you do not want to sit down for a full meal.</p>
            </Accordion>

            <Accordion title="Cagney's Steakhouse (Specialty)">
              <p>The flagship specialty restaurant on almost every NCL ship. Cagney's is a proper American steakhouse with aged cuts, great sides, and a wine list that can keep up. This is the restaurant that books up fastest on any NCL sailing so reserve it as soon as your window opens. If you have a Free at Sea dining package, Cagney's is typically included.</p>
            </Accordion>

            <Accordion title="Le Bistro (Specialty)">
              <p>NCL's French restaurant and one of the most consistent specialty dining options in the fleet. Le Bistro has been on NCL ships for years and they have the menu dialed in. Classic French technique, a nice wine selection, and an intimate atmosphere. A good choice for a nicer dinner at sea.</p>
            </Accordion>

            <Accordion title="Teppanyaki (Specialty)">
              <p>The hibachi-style restaurant where a chef cooks right at your table. Teppanyaki is as much entertainment as it is a meal and it tends to be one of the most fun dining experiences on the ship. Great for groups or anyone who enjoys a lively dinner. Book early because it fills up fast.</p>
            </Accordion>

            <Accordion title="Food Republic (Specialty)">
              <p>A modern, small-plates concept with an eclectic menu pulling from Asian, Latin, and American flavors. Food Republic is a great option when you want something lighter and more casual than a full sit-down specialty restaurant. The vibe is relaxed and the variety is impressive.</p>
            </Accordion>

            <Accordion title="Q Texas Smokehouse (Specialty, select ships)">
              <p>Available on Bliss, Joy, and Encore. Q is a Texas-style BBQ restaurant with smoked meats, classic sides, and a honky-tonk atmosphere. If BBQ is your thing and your ship has Q, do not miss it. One of the more unique dining options in the NCL fleet.</p>
            </Accordion>

            <Accordion title="Indulge Food Hall (Prima Class)">
              <p>Exclusive to Norwegian Prima and her sister ships. The Indulge Food Hall is a completely new concept for NCL, a massive open food hall with multiple stations covering everything from sushi to tacos to burgers to desserts. Some stations are included, some are specialty. It changes the whole dynamic of casual dining on the ship and it works really well.</p>
            </Accordion>

            <Accordion title="Late Night Options">
              <p>O'Sheehan's Bar and Grill is the go-to late night spot on most NCL ships. It is a casual Irish pub-style space open nearly 24 hours with wings, nachos, burgers, and bar food. Free to eat here, just order and enjoy. Perfect for after a show or a night out at the bars.</p>
            </Accordion>
          </section>
        )}

        {/* SOLO TRAVEL */}
        {activeTab === "solo" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: NCL_DARK }}>Solo Travel on NCL</h2>
            <p className="text-gray-500 mb-8">Solo cruisers are not an afterthought on Norwegian. NCL was one of the first cruise lines to take solo travelers seriously and build the ship around them. If you are traveling alone, this is one of the best lines you can choose.</p>

            <Accordion title="Studio Cabins — Built for One">
              <p className="mb-3">NCL pioneered the Studio cabin concept and it changed solo cruising forever. Studio cabins are designed specifically for a single occupant with no single supplement. That means you pay the same rate per person as someone sharing a cabin. No penalty for traveling alone.</p>
              <p className="mb-3">The cabins themselves are smartly designed. They are compact but efficient, with everything you need and nothing wasted. Think of it like a really well-designed hotel room for one. You have a comfortable bed, a good shower, storage space, and a flat screen TV.</p>
              <p>And then there is the coffee machine. The in-cabin coffee machine in the Studio cabins is genuinely one of the highlights of staying in one. It makes a proper cup, not the kind of sad drip coffee you get in a standard cabin on most ships. For a solo traveler who wants a good morning cup without hunting down a coffee bar before they are fully awake, it is a small thing that makes a real difference.</p>
            </Accordion>

            <Accordion title="The Studio Lounge">
              <p className="mb-3">Studio cabin guests have exclusive access to the Studio Lounge, a private social space just for solo travelers. This is one of the smartest things NCL has ever done. It gives solo cruisers a place to meet other people traveling alone in a comfortable, low-pressure environment.</p>
              <p className="mb-3">The lounge has a bar, comfortable seating, and a built-in community. NCL staff host social events and mixer gatherings in the Studio Lounge so meeting other solo sailors happens naturally rather than awkwardly. By night two most people have already found a group to explore ports with or grab dinner with.</p>
              <p>If you are nervous about dining alone or not knowing anyone onboard, the Studio Lounge takes care of that. It is one of the best perks on any cruise ship for solo travelers.</p>
            </Accordion>

            <Accordion title="No Single Supplement — What That Means">
              <p className="mb-3">Most cruise lines charge solo travelers a single supplement, which is essentially a penalty for not having a cabin mate. It can add 50 to 100 percent to the cost of your cabin because the cruise line prices cabins assuming two people are splitting the cost.</p>
              <p>NCL's Studio cabins eliminate that completely. The rate is priced for one person from the start. You are not paying for a phantom second passenger. This makes NCL one of the most financially practical cruise lines for solo travelers and it is a big reason why solo cruisers keep coming back to NCL.</p>
            </Accordion>

            <Accordion title="Dining Solo">
              <p className="mb-3">One of the things solo travelers worry about most is dining alone. On NCL that is genuinely not a problem. The main dining rooms will seat solo guests at communal tables with other travelers if you want company, or give you your own table if you prefer privacy. You just let them know when you are seated.</p>
              <p>The Garden Cafe buffet is also a natural social spot where conversations happen organically. And if you have connected with people from the Studio Lounge, dinner together becomes part of the experience rather than something you have to arrange awkwardly.</p>
            </Accordion>

            <Accordion title="Shore Excursions as a Solo Traveler">
              <p className="mb-3">Group shore excursions are one of the best ways to explore ports as a solo traveler because you are automatically surrounded by other people from the ship. NCL's excursion program books you into small and mid-size groups so you are never wandering a foreign port completely alone unless you choose to.</p>
              <p>I always recommend booking excursions through the ship rather than independently, especially as a solo traveler. If something goes wrong or runs long, the ship waits for you. That peace of mind matters more when you are on your own.</p>
            </Accordion>

            <Accordion title="Is NCL Right for You as a Solo Traveler?">
              <p className="mb-3">If you have been putting off a cruise because you did not want to pay a solo supplement or because you were worried about being alone the whole time, NCL removes both of those obstacles.</p>
              <p>The Studio cabin gives you your own space at a fair price. The Studio Lounge gives you a community if you want one. Freestyle Cruising gives you the flexibility to do everything on your own timeline without feeling out of place. NCL built a ship that works for one person just as well as it works for two.</p>
            </Accordion>
          </section>
        )}

        {/* FREE AT SEA */}
        {activeTab === "freeatseaa" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: NCL_DARK }}>Free at Sea</h2>
            <p className="text-gray-500 mb-8">Free at Sea is NCL's signature promotion and it is one of the most generous ongoing offers in cruising. It is not a limited time deal. This is a standard part of how NCL packages their sailings and it adds real value to your booking.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: "#EEF4FF", borderLeft: `4px solid ${NCL_NAVY}` }}>
              Free at Sea and Free at Sea Plus are ongoing standard offers, not flash sales. The specific perks available can vary by sailing and cabin category. I will always confirm exactly what is included on your specific sailing before you book.
            </div>

            <Accordion title="What Is Free at Sea?">
              <p className="mb-3">Free at Sea lets you choose from a menu of perks to add to your booking at no additional cost beyond your cruise fare. Depending on your sailing and cabin type you may be able to choose one, two, three, or more of the following:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>Free Unlimited Open Bar</strong> — A beverage package covering most drinks onboard including beer, wine, spirits, and cocktails up to a certain value per drink</li>
                <li><strong>Free Specialty Dining</strong> — A set number of specialty restaurant meals included in your fare. The number of meals varies by sailing length</li>
                <li><strong>Free Shore Excursion Credits</strong> — Credits applied toward NCL shore excursions at each port</li>
                <li><strong>Free WiFi</strong> — A set number of WiFi minutes included. Longer sailings get more minutes</li>
                <li><strong>Friends and Family Sail Free</strong> — Third and fourth guests in your cabin sail at reduced or no additional cruise fare cost</li>
              </ul>
              <p>Not every perk is available on every sailing. Cabin category matters too. Studio cabin guests have access to Free at Sea perks which is great news for solo travelers.</p>
            </Accordion>

            <Accordion title="Free at Sea Plus — What Is the Difference?">
              <p className="mb-3">Free at Sea Plus is the upgraded version and it enhances the perks meaningfully:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>Premium Plus Beverage Package</strong> — Covers higher-end spirits, premium wines, and specialty coffees that are not included in the standard open bar. If you drink top-shelf or enjoy a proper glass of wine with dinner, Plus is worth it</li>
                <li><strong>More Specialty Dining Meals</strong> — Additional restaurant credits beyond what comes with standard Free at Sea</li>
                <li><strong>More Shore Excursion Credits</strong> — A higher credit amount per port</li>
                <li><strong>Unlimited WiFi</strong> — Instead of a minute cap, you get full unlimited internet access for the sailing</li>
              </ul>
              <p>Whether Plus is worth the upgrade depends on how much you drink and whether premium spirits or wine matter to you. I can help you run the math on your specific sailing.</p>
            </Accordion>

            <Accordion title="Does the Open Bar Cover Everything?">
              <p className="mb-3">The standard Free at Sea open bar covers most drinks up to a per-drink value, typically around $15. Cocktails, beer, house wine, and well spirits all fall under that. Premium spirits, high-end wines, and some specialty cocktails that go over the limit will have the difference charged to your account.</p>
              <p>Free at Sea Plus raises that limit and covers premium selections. If you are a beer and basic cocktail drinker, standard Free at Sea is probably enough. If you enjoy aged whiskey or a nice bottle of wine with dinner, Plus makes more sense.</p>
            </Accordion>

            <Accordion title="Gratuities on the Beverage Package">
              <p className="mb-3">This is one thing people sometimes miss. NCL adds an 20 percent gratuity charge on the value of the beverage package even when the package itself is free through Free at Sea. So while you are not paying for the drinks, you are paying gratuity on the package value.</p>
              <p>It is still a great deal. But it is worth knowing about before you board so you are not surprised when you see it on your account. I always flag this for clients upfront so there are no surprises.</p>
            </Accordion>

            <Accordion title="Can Solo Travelers Use Free at Sea?">
              <p>Yes. Studio cabin guests are eligible for Free at Sea perks. This is one of the things that makes NCL especially good for solo travelers. You get the same promotion access as someone in a standard cabin and you are already not paying a single supplement. The math works out really well.</p>
            </Accordion>
          </section>
        )}

        {/* CRUISE NEXT */}
        {activeTab === "cruisenext" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: NCL_DARK }}>CruiseNext Vouchers</h2>
            <p className="text-gray-500 mb-8">CruiseNext is NCL's onboard future cruise program. If you know you are going to cruise again, buying a CruiseNext voucher while you are onboard is one of the smartest things you can do.</p>

            <Accordion title="What Is a CruiseNext Voucher?">
              <p className="mb-3">A CruiseNext voucher is essentially a deposit certificate you purchase while you are on your current NCL sailing. You buy it onboard at a discount and apply it to a future NCL booking as a deposit or toward your cruise fare.</p>
              <p>The value you get back is higher than what you pay for the certificate. For example you might pay $250 for a certificate worth $500 toward a future sailing. That difference is money back in your pocket on your next cruise.</p>
            </Accordion>

            <Accordion title="When Can You Buy Them?">
              <p className="mb-3">CruiseNext vouchers are sold through the CruiseNext desk onboard, which is usually located near the atrium or guest services area. They typically run presentations early in the sailing where they explain the program and any current promotions.</p>
              <p>You do not have to sit through a presentation to buy them. You can just go to the desk and purchase directly. The promotions vary by sailing so the specific offer available to you depends on when you sail.</p>
            </Accordion>

            <Accordion title="How Do You Use Them?">
              <p className="mb-3">After your sailing, the CruiseNext certificates are linked to your NCL account. When you are ready to book your next cruise you apply them during the booking process as a deposit or credit toward your fare.</p>
              <p>There are some restrictions on which sailings they can be applied to and they do have an expiration window, typically four years. I can walk you through how to apply them when the time comes to book your next sailing.</p>
            </Accordion>

            <Accordion title="Are They Worth It?">
              <p className="mb-3">If you enjoy NCL and plan to sail with them again, yes. The discount you get on the certificate versus the value it applies to your next cruise is genuine savings. It is one of those things where the people who buy them are always glad they did and the people who skip them sometimes wish they had not.</p>
              <p>The best time to buy is while you are onboard because that is the only time you can get them at the discounted rate. Once you are off the ship the program is not available to you until your next sailing.</p>
            </Accordion>

            <Accordion title="Can Eric Help With CruiseNext?">
              <p>Absolutely. When I book your NCL sailing I will give you a heads up about the CruiseNext program so you know to look for it onboard. And when you are ready to use your certificates on your next booking, reach out and I will make sure they get applied correctly and you get the full value out of them.</p>
            </Accordion>
          </section>
        )}

        {/* GREAT STIRRUP CAY */}
        {activeTab === "island" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: NCL_DARK }}>Great Stirrup Cay</h2>
            <p className="text-gray-500 mb-8">Great Stirrup Cay is NCL's private island in the Bahamas and one of the genuinely great perks of sailing with Norwegian. Eric has been there on the Norwegian Star and can tell you firsthand it is worth the trip.</p>

            <Accordion title="What Is Great Stirrup Cay?">
              <p className="mb-3">Great Stirrup Cay is a private island in the Berry Islands of the Bahamas, owned and operated exclusively by Norwegian Cruise Line. When your ship stops here, the entire island is yours and your fellow sailors. No other cruise lines. No outside tourists. Just NCL guests on a beautiful stretch of Bahamian beach.</p>
              <p>The water is that classic Bahamian turquoise that does not look real until you are standing in it. The beach is well maintained, the vibe is relaxed, and it feels genuinely different from a regular port stop.</p>
            </Accordion>

            <Accordion title="What Is There to Do?">
              <p className="mb-3">Great Stirrup Cay has a solid range of activities for a private island stop:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Beach time</strong> — Multiple beach areas with lounge chairs. Some are included, some are in premium areas with an upgrade fee</li>
                <li><strong>Snorkeling</strong> — The water around the island has good visibility and reef activity. Equipment rental is available</li>
                <li><strong>Water sports</strong> — Kayaking, paddleboarding, and other rentals available for an additional fee</li>
                <li><strong>Luminary Point</strong> — NCL's premium beach club with upgraded loungers, a pool, and dedicated service. This is an upcharge but worth it if you want a more exclusive experience</li>
                <li><strong>Wave pool</strong> — Yes, there is a wave pool on the island. It is a fun novelty</li>
                <li><strong>Zip line</strong> — A zip line course over the water for the more adventurous sailors</li>
                <li><strong>Island BBQ lunch</strong> — A full BBQ lunch is included for all guests on island days</li>
              </ul>
            </Accordion>

            <Accordion title="What Is Included vs What Costs Extra?">
              <p className="mb-3">The basic beach experience and the BBQ lunch are included in your cruise fare. You get off the tender, find a spot on the beach, and the food is taken care of.</p>
              <p className="mb-3">Things that cost extra include: water sports rentals, Luminary Point beach club access, zip line, some chair rentals in premium areas, alcoholic beverages (unless you have a beverage package), and certain shore excursions booked through NCL.</p>
              <p>Knowing this ahead of time helps you budget for the day. Most people find that the included experience is already really good and the upgrades are nice but not necessary.</p>
            </Accordion>

            <Accordion title="Getting to the Island — Tendering">
              <p className="mb-3">The ship does not dock at Great Stirrup Cay. Instead you take a tender boat from the ship to the island, which is a smaller vessel that ferries guests back and forth throughout the day. The tender ride is short, usually 10 to 15 minutes.</p>
              <p>The first tenders of the day tend to be the busiest because everyone wants to get to the island early. If you are in The Haven or have priority tender access, use it. Otherwise getting in the tender line reasonably early in the morning gets you to the island with time to find a good spot before the beach fills up.</p>
            </Accordion>

            <Accordion title="Eric's Take on Great Stirrup Cay">
              <p>I was on the Norwegian Star when it stopped at Great Stirrup Cay and it was genuinely one of my favorite port days. There is something different about being on a private island where everyone around you is from the same ship. It feels more like a beach party than a tourist stop. The water is beautiful, the BBQ lunch is better than you expect, and the whole day has a relaxed energy that is hard to replicate at a regular port. If your itinerary includes Great Stirrup Cay, plan to spend the full day there.</p>
            </Accordion>
          </section>
        )}

        {/* SHORE EXCURSIONS */}
        {activeTab === "excursions" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: NCL_DARK }}>Shore Excursions</h2>
            <p className="text-gray-500 mb-8">NCL calls their excursion program Shore Excursions and you can book them through My NCL online before you sail or through the excursion desk onboard. Here is what to know.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: "#EEF4FF", borderLeft: `4px solid ${NCL_NAVY}` }}>
              <p className="font-semibold mb-1">Book before you sail and book through the ship.</p>
              <p className="mb-2">Pre-cruise pricing is lower than onboard pricing and popular excursions sell out. Once you are onboard, the best options are often gone or more expensive.</p>
              <p>Booking through NCL also means the ship waits for you if your excursion runs long. If you book independently and you are late getting back, the ship will not wait. I can help you pick the right excursions for your ports before you ever step onboard.</p>
            </div>

            {[
              {
                port: "Great Stirrup Cay, Bahamas",
                about: "NCL's private island and one of the best beach days you will have at sea. The beach is beautiful, the water is clear, and the BBQ lunch is included. Most people spend the full day here.",
                excursions: ["Luminary Point Premium Beach Club", "Snorkeling Adventure", "Kayak and Paddleboard Rentals", "Zip Line Over the Water", "Wave Pool Access", "Glass Bottom Boat Tour"]
              },
              {
                port: "Nassau, Bahamas",
                about: "A classic Caribbean port with a mix of beach options, history, and shopping. Nassau has some of the most famous beaches in the Bahamas within easy reach of the port.",
                excursions: ["Atlantis Beach Day", "Blue Lagoon Island Beach and Dolphin Encounter", "Nassau Historical Walking Tour", "Snorkel and Beach Combo", "Swimming with Pigs (Exuma day trip)"]
              },
              {
                port: "Cozumel, Mexico",
                about: "One of the top snorkeling and diving destinations in the world. The Mesoamerican Barrier Reef runs right through here and the water clarity is spectacular.",
                excursions: ["Snorkel at Palancar Reef", "Scuba Diving for Certified Divers", "Catamaran Sail and Snorkel", "Dune Buggy Island Tour", "Swim with Dolphins"]
              },
              {
                port: "Juneau, Alaska",
                about: "The capital of Alaska and one of the most dramatic port stops in North America. Mendenhall Glacier is accessible directly from the port and the scenery is unforgettable.",
                excursions: ["Mendenhall Glacier and Nugget Falls Hike", "Whale Watching", "Helicopter Glacier Landing", "Salmon Bake in the Forest", "Mount Roberts Tramway"]
              },
              {
                port: "Skagway, Alaska",
                about: "Gateway to Gold Rush history and some of the most dramatic mountain scenery in Alaska. The White Pass and Yukon Route Railway is one of the best train rides anywhere.",
                excursions: ["White Pass and Yukon Route Railway", "Glacier Helicopter Tour", "Chilkoot Trail Hike", "Dog Sledding on a Glacier", "Klondike Gold Rush History Tour"]
              },
              {
                port: "Ketchikan, Alaska",
                about: "The salmon capital of the world and a beautiful rainforest port. Known for totem poles, floatplane excursions, and some of the best wildlife viewing in Alaska.",
                excursions: ["Misty Fjords Floatplane Tour", "Totem Poles and Rainforest Walk", "Crab Feast and Salmon Bake", "Kayaking Through the Rainforest", "Lumberjack Show"]
              },
            ].map((p) => (
              <Accordion key={p.port} title={p.port}>
                <p className="mb-4">{p.about}</p>
                <p className="font-semibold mb-2" style={{ color: NCL_NAVY }}>Popular Excursions Here</p>
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
            <h2 className="text-3xl font-bold mb-2" style={{ color: NCL_DARK }}>Trip Insurance</h2>
            <p className="text-gray-500 mb-8">I always suggest trip insurance when booking a cruise. It is one of those things you hope you never need and are incredibly grateful for when you do. Travel puts you in situations where things can go sideways in ways that have nothing to do with the cruise line.</p>

            <div className="p-5 rounded-xl mb-6 text-white text-sm" style={{ background: NCL_NAVY }}>
              <strong>Lock it in at booking.</strong> Trip insurance is almost always cheaper when you buy it at the time of booking. The longer you wait, the more it costs and the fewer options you have.
            </div>

            <Accordion title="What If You Get Sick Before You Leave?">
              <p className="mb-3">You have been planning this trip for months. The cruise is booked, the excursions are reserved, and two days before departure you end up in urgent care with something serious. Without insurance, you lose every dollar you spent because the cancellation deadline has passed.</p>
              <p>With trip insurance, a covered illness before departure lets you cancel and get reimbursed. You reschedule when you feel better and nothing is lost.</p>
            </Accordion>

            <Accordion title="What If Someone in Your Family Has an Emergency?">
              <p>Your parent ends up in the hospital the day before you leave. Or a family situation comes up that changes everything. Trip insurance covers trip cancellation for family medical emergencies so you can be where you need to be without the financial loss on top of everything else you are dealing with.</p>
            </Accordion>

            <Accordion title="What If You Get Sick or Hurt at Sea or in Another Country?">
              <p className="mb-3">This one surprises people. Your regular health insurance often does not cover you outside the United States. A medical evacuation from a ship or from a foreign port can cost tens of thousands of dollars out of pocket if you are not covered.</p>
              <p>Trip insurance with medical and evacuation coverage means that if something happens at sea or in a port like Nassau or Cozumel, you are covered for the care you need and the transport to get home safely.</p>
            </Accordion>

            <Accordion title="What If Your Flight Gets Cancelled or Delayed?">
              <p className="mb-3">You are flying into Miami or New York the morning of your cruise and your flight gets cancelled due to weather. Now you are scrambling for last-minute flights and a hotel just to make the ship the next day.</p>
              <p>Trip delay coverage helps reimburse you for unexpected overnight stays, meals, and rebooking costs when your travel gets disrupted. It turns a stressful situation into a manageable one.</p>
            </Accordion>

            <Accordion title="What If Your Luggage Gets Lost?">
              <p>Airlines lose bags. If your luggage does not make it to the ship and you are sailing to Alaska in a t-shirt and sandals, baggage delay coverage helps cover the cost of essentials until your stuff catches up. If something valuable gets stolen at a port, personal property coverage can help with that too.</p>
            </Accordion>

            <Accordion title="Why Buy It at Booking?">
              <p className="mb-3">Two reasons. First, cost. Insurance is priced based on risk and the closer you are to your departure date, the higher your risk. Buying at booking locks in the lowest rate.</p>
              <p>Second, pre-existing condition coverage. Most policies include a waiver for pre-existing medical conditions if you buy within a set window of your initial deposit, usually 14 to 21 days. If you wait, that window closes. Lock it in early and you are covered for whatever comes up.</p>
            </Accordion>
          </section>
        )}

        {/* ERIC'S TIPS */}
        {activeTab === "tips" && (
          <section>
            <h2 className="text-3xl font-bold mb-2" style={{ color: NCL_DARK }}>Eric's Tips for Your NCL Sailing</h2>
            <p className="text-gray-500 mb-8">I hold an NCL University Master's Degree and have sailed Norwegian multiple times including on the Breakaway out of New York and the Star to Great Stirrup Cay. Here is what I actually tell people before they sail.</p>

            <Accordion title="Book Your Specialty Dining Early">
              <p>Cagney's and Teppanyaki fill up fast. Log into My NCL as soon as your booking is confirmed and get your reservations in. If you have a Free at Sea dining package, those credits only go so far so pick your restaurants intentionally rather than waiting until you are onboard and scrambling.</p>
            </Accordion>

            <Accordion title="Book Excursions Before You Sail">
              <p>Pre-cruise pricing is lower and popular excursions sell out. The best port experiences, whale watching in Alaska, the private island club at Great Stirrup Cay, Teppanyaki-style cooking experiences, go fast. I can help you sort through the options for your specific itinerary so you are not picking blind from a long list onboard.</p>
            </Accordion>

            <Accordion title="Prepay Your Gratuities">
              <p>NCL charges a daily service charge per person which covers gratuities for your cabin steward and dining staff. You can prepay this before your sailing and it is the same amount either way but paying it upfront means you board the ship knowing your total cost and nothing surprises you on your final bill.</p>
            </Accordion>

            <Accordion title="If You Are Solo, Find the Studio Lounge on Day One">
              <p>Do not wait until day three to discover the Studio Lounge. Go find it on embarkation day, introduce yourself to whoever is hanging out there, and let the community happen naturally. By night two you will have people to explore ports with and grab dinner with and the whole solo cruise experience shifts.</p>
            </Accordion>

            <Accordion title="Try to Get a CruiseNext Voucher Onboard">
              <p>If you enjoy your NCL sailing and think you might cruise with them again, visit the CruiseNext desk before you disembark. The discount you get on the certificate is real money and you can only buy them while you are onboard. Future-you will be glad you did it.</p>
            </Accordion>

            <Accordion title="Get to Great Stirrup Cay Early">
              <p>The tender lines build up fast on island days. Get in the tender line earlier than you think you need to. Once you are on the island, the beach fills up but there is always room. The early arrivals get the best spots and the most time in that water. Trust me, you want as much time on that island as possible.</p>
            </Accordion>

            <Accordion title="O'Sheehan's Is Always Open">
              <p>If you find yourself hungry at 2am after a night out, O'Sheehan's Bar and Grill is your answer. It runs nearly 24 hours and the food is solid, casual, and included. Wings, nachos, burgers. It is not a Michelin star experience but it is exactly what you need at 2am on a cruise ship.</p>
            </Accordion>

            <Accordion title="Get Trip Insurance and Get It Early">
              <p>Sailing to Alaska or the Bahamas puts you far from home in situations your regular health insurance may not cover. A medical evacuation at sea is a real thing and it is expensive without coverage. Lock in insurance at booking when it is cheapest and you have the most coverage options. I always flag this for clients upfront so there are no surprises.</p>
            </Accordion>
          </section>
        )}

        {/* CTA */}
        <div className="mt-14 rounded-2xl p-8 text-center text-white" style={{ background: `linear-gradient(135deg, ${NCL_DARK}, ${NCL_NAVY})` }}>
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: NCL_GOLD }}>Ready to Sail NCL</p>
          <h3 className="text-2xl font-bold mb-3">Let's Figure Out Your Cruise</h3>
          <p className="mb-6 max-w-lg mx-auto" style={{ color: "#CBD5E1" }}>
            I hold an NCL University Master's Degree and have sailed Norwegian myself. I book NCL on your behalf so you get the expertise and I handle everything from start to finish. Fill out my quick form and I will be in touch within 24 hours. No pressure, no commitment. We just talk through everything first.
          </p>
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-bold text-base transition hover:opacity-90"
            style={{ background: NCL_GOLD, color: NCL_DARK }}
          >
            Ready to cruise your way? Let's chat.
          </a>
          <p className="mt-4 text-xs" style={{ color: "#64748B" }}>
            Planning fees start at $50 depending on your trip. We talk through everything before anything is confirmed so there are no surprises.
          </p>
        </div>

      </div>
    </div>
  );
}
