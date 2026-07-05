import { useState } from "react";

const B_TEAL = "#0A2A5E";
const B_ORANGE = "#E8630A";
const B_DARK = "#061A3E";
const B_LIGHT = "#F7FAFC";
const B_ACCENT = "#E0F5F4";

const AFFILIATE_LINK = "https://www.beaches.com/?referral=101731&agentid=ERCA7707";

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-teal-100 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-4 text-left font-semibold text-gray-800 hover:bg-teal-50 transition-colors gap-3"
        style={{ background: open ? B_ACCENT : "white" }}
      >
        <span className="text-sm md:text-base leading-snug">{title}</span>
        <span
          className="text-2xl transition-transform duration-200 flex-shrink-0"
          style={{ color: B_TEAL, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-4 py-4 bg-white border-t border-teal-100 text-gray-700 leading-relaxed text-sm md:text-base">
          {children}
        </div>
      )}
    </div>
  );
}

const TABS = [
  { id: "about", label: "About Beaches" },
  { id: "resorts", label: "The Resorts" },
  { id: "included", label: "What's Included" },
  { id: "dining", label: "Dining" },
  { id: "activities", label: "Activities" },
  { id: "kids", label: "Kids and Teens" },
  { id: "insurance", label: "Trip Insurance" },
  { id: "tips", label: "Eric's Tips" },
];

export default function BeachesPage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen" style={{ background: B_LIGHT, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Hero */}
      <div
        className="relative py-12 md:py-24 px-4 text-center text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${B_DARK} 0%, ${B_TEAL} 60%, #14418C 100%)` }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
            backgroundSize: "45px 45px"
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#7EC8EE" }}>Family All-Inclusive</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">Beaches Resorts</h1>
          <p className="text-base md:text-xl mb-4 leading-relaxed" style={{ color: "#C0DCF0" }}>
            Everything Sandals does for couples, Beaches does for families. Unlimited dining, premium drinks, waterparks, kids clubs, Sesame Street characters, and a resort where every single person in your family actually has the time of their life.
          </p>
          <p className="text-xs md:text-base" style={{ color: "#90B8D8" }}>
            The only true luxury all-inclusive family resort brand in the Caribbean. Eric books Beaches on your behalf using his affiliate partnership at no extra cost to you.
          </p>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 shadow-md overflow-x-auto scrollbar-none" style={{ background: B_DARK }}>
        <div className="flex justify-center px-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-3 py-3 text-xs font-semibold whitespace-nowrap transition-all border-b-2 flex-shrink-0"
              style={{
                color: activeTab === tab.id ? "#7EC8EE" : "#94A3B8",
                borderBottomColor: activeTab === tab.id ? "#7EC8EE" : "transparent",
                background: "transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-3 md:px-6 py-6 md:py-12">

        {/* ABOUT */}
        {activeTab === "about" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: B_DARK }}>About Beaches Resorts</h2>
            <p className="text-gray-500 text-sm mb-6">Beaches is the family brand under the same umbrella as Sandals. Same Luxury Included philosophy, same commitment to truly all-inclusive, but built from the ground up to work for families of all shapes and sizes.</p>

            <Accordion title="What Is Beaches?">
              <p className="mb-3">Beaches Resorts was launched by the Gordon "Butch" Stewart family, the same people behind Sandals. The idea was simple: take everything that makes Sandals the gold standard for couples and redesign it for families. Kids clubs, waterparks, Sesame Street characters, teen programs, and multiple pools -- all included with no supplemental charges piling up.</p>
              <p className="mb-3">The result is a resort brand that solves the hardest problem in family travel. Making everyone actually happy at the same time.</p>
              <p className="text-sm" style={{ color: "#6B7280" }}>
                Beaches Resorts is part of the Sandals Resorts family and operates luxury all-inclusive properties in the Caribbean.
              </p>
            </Accordion>

            <Accordion title="Who Is Beaches For?">
              <p className="mb-3">Beaches works for a wider range of family configurations than most people realize:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>Families with young children who want structured kids programming and character experiences</li>
                <li>Families with teens who need their own space and activities separate from the little kids</li>
                <li>Multi-generational trips with grandparents, parents, and kids together</li>
                <li>Groups of families traveling together</li>
                <li>Single parents traveling with kids</li>
                <li>Families where the adults also want actual vacation time while kids are entertained</li>
              </ul>
              <p>Unlike many family resorts where the kids programming is a small afterthought, Beaches has invested seriously in the full family experience across every age group.</p>
            </Accordion>

            <Accordion title="How Beaches Differs From a Regular All-Inclusive">
              <p className="mb-3">Most family all-inclusive resorts are buffet-heavy, activity-light experiences where kids programming means a corner of the pool with a slide. Beaches built the family resort from a completely different starting point.</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>Multiple specialty restaurants with full menus, all included</li>
                <li>A full-scale waterpark included for all guests</li>
                <li>Sesame Street character experiences built into the resort</li>
                <li>Dedicated kids clubs by age group from infants through tweens</li>
                <li>A teen-specific program with its own spaces, activities, and evening entertainment</li>
                <li>Xbox gaming lounges for kids who need a break from the sun</li>
                <li>Premium top-shelf alcohol included for the adults</li>
                <li>Scuba diving and full water sports included</li>
              </ul>
              <p>The adults get an actual luxury vacation. The kids get a vacation built specifically for them. Nobody has to compromise.</p>
            </Accordion>

            <Accordion title="Why Book Through Eric?">
              <p className="mb-3">You get the same Beaches price through Eric's link as you do booking direct. What you also get is someone who has researched every property, understands how to match families to the right resort based on the ages of their kids, and is available before and during your vacation if anything comes up.</p>
              <p>Beaches also has promotions and category offers that are not always visible when browsing directly. Having an advisor familiar with the brand means you see the full picture before you commit.</p>
            </Accordion>
          </section>
        )}

        {/* THE RESORTS */}
        {activeTab === "resorts" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: B_DARK }}>The Beaches Properties</h2>
            <p className="text-gray-500 text-sm mb-6">Beaches currently operates two flagship properties with several new locations in development. Here is what is available now and what is coming.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: B_ACCENT, borderLeft: `4px solid ${B_TEAL}` }}>
              <strong>Expansion note:</strong> Beaches is actively growing. New properties including Beaches St. Vincent, Turks and Caicos expansion, Beaches Runaway Bay Jamaica, Beaches Barbados, and Beaches Exuma Bahamas are in development or opening soon. Beaches Ocho Rios closed in May 2025 for major renovations. Reach out to Eric for the latest availability before you book.
            </div>

            <Accordion title="Beaches Turks and Caicos — The Flagship">
              <p className="mb-3">The crown jewel of the Beaches portfolio and one of the most acclaimed family resorts anywhere in the world. Located on Grace Bay, voted the World's Number One Best Beach by TripAdvisor multiple times, Beaches Turks and Caicos is a massive resort with five distinct village sections each with their own architectural style.</p>
              <p className="mb-3">45,000 square foot waterpark, 20 specialty restaurants, 12 miles of beach, 10 pools, and one of the most beautiful stretches of turquoise water in the Caribbean. Families consistently describe it as the best vacation they have ever taken.</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 text-sm">
                <li><strong>Location:</strong> Grace Bay, Providenciales, Turks and Caicos</li>
                <li><strong>Villages:</strong> Italian, French, Caribbean, Key West, and Seaside</li>
                <li><strong>Waterpark:</strong> 45,000 square feet with multiple slides and pools</li>
                <li><strong>Dining:</strong> 20 specialty restaurants all included</li>
                <li><strong>Pools:</strong> 10 pools including dedicated kids and adults-only options</li>
                <li><strong>Beach:</strong> Directly on Grace Bay, one of the world's top-rated beaches</li>
              </ul>
            </Accordion>

            <Accordion title="Beaches Negril — Jamaica">
              <p className="mb-3">Set on Negril's famous Seven Mile Beach, Beaches Negril brings the full family all-inclusive experience to one of the most beautiful beach settings in Jamaica. The resort is smaller and more intimate than the Turks and Caicos flagship which some families prefer for a less overwhelming experience.</p>
              <p className="mb-3">Negril as a destination has a famously relaxed vibe and spectacular sunsets.</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 text-sm">
                <li><strong>Location:</strong> Seven Mile Beach, Negril, Jamaica</li>
                <li><strong>Beach:</strong> Seven Mile Beach, famous for white sand and sunsets</li>
                <li><strong>Feel:</strong> More intimate than Turks and Caicos</li>
                <li><strong>Good for:</strong> Families who want a smaller resort feel with full amenities</li>
                <li><strong>Note:</strong> Temporarily closed following 2025 hurricane season, scheduled to reopen</li>
              </ul>
            </Accordion>

            <Accordion title="Coming Soon — New Beaches Properties">
              <p className="mb-3">Beaches is in active expansion mode. Properties currently in development or recently announced:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Beaches St. Vincent</strong> — Opening 2026, eastern Caribbean</li>
                <li><strong>Beaches Turks and Caicos Expansion</strong> — Opening Spring 2026</li>
                <li><strong>Beaches Runaway Bay, Jamaica</strong> — In development</li>
                <li><strong>Beaches Barbados</strong> — In development</li>
                <li><strong>Beaches Exuma, Bahamas</strong> — In development</li>
              </ul>
              <p className="mt-3">Reach out to Eric for the latest status on any of these properties before planning your trip around a specific location.</p>
            </Accordion>
          </section>
        )}

        {/* WHAT'S INCLUDED */}
        {activeTab === "included" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: B_DARK }}>What's Included</h2>
            <p className="text-gray-500 text-sm mb-6">Beaches follows the same Luxury Included philosophy as Sandals. Here is the complete picture of what comes with your family's stay.</p>

            <Accordion title="All Dining — Every Restaurant">
              <p className="mb-3">Every specialty restaurant at Beaches is included with no dining surcharges. At Beaches Turks and Caicos that means 20 restaurants covering cuisines from around the world. You eat wherever you want, whenever you want, as many times as you want.</p>
              <p>Kids menus are available at every restaurant and the resort knows how to handle the full range of family dining needs.</p>
            </Accordion>

            <Accordion title="The Waterpark — Fully Included">
              <p className="mb-3">The waterpark is fully included for all guests. At Beaches Turks and Caicos the waterpark covers 45,000 square feet with multiple slides, a lazy river, splash zones for little kids, and bigger thrills for older kids and teens. No wristband purchase, no per-slide fees.</p>
              <p>This is one of the most meaningful inclusions for families with kids because waterpark access at most Caribbean destinations is a significant daily expense.</p>
            </Accordion>

            <Accordion title="Kids Clubs and Programming">
              <p className="mb-3">Beaches operates dedicated kids clubs by age group from infants through tweens. The programming is supervised, structured, and genuinely engaging. Parents can drop off kids knowing they are in good hands and actually have time to enjoy the resort themselves.</p>
              <p>The kids clubs run throughout the day and into the evening allowing parents to have dinner alone without feeling guilty about what the kids are doing.</p>
            </Accordion>

            <Accordion title="Premium Drinks for Adults">
              <p className="mb-3">Premium top-shelf alcohol, wine, beer, and cocktails are included for adult guests around the clock. Same standard as Sandals. Not well drinks. Not house wine. Name-brand premium alcohol at every bar throughout the resort.</p>
              <p>Non-alcoholic beverages including specialty coffees, fresh juices, and soft drinks are included for all guests of all ages.</p>
            </Accordion>

            <Accordion title="Water Sports and Scuba">
              <p className="mb-3">Non-motorized water sports including snorkeling, kayaking, sailing, windsurfing, and paddleboarding are included for all guests. Scuba diving is included for certified divers and PADI certification courses are available onsite.</p>
              <p>A significant value for families who want water activity variety without paying separately for equipment rentals throughout the trip.</p>
            </Accordion>

            <Accordion title="Airport Transfers and No Tipping">
              <p className="mb-3">Round-trip luxury airport transfers are included. You land, find the Beaches representative, and get to the resort without navigating local transportation with tired kids and a pile of luggage.</p>
              <p>Beaches follows the same no-tipping policy as Sandals. The staff are compensated well and no gratuities are expected at any point during your stay.</p>
            </Accordion>

            <Accordion title="What Is NOT Included">
              <ul className="list-disc pl-5 space-y-2">
                <li>Spa treatments are separate</li>
                <li>Off-resort excursions and island tours are additional</li>
                <li>PADI scuba certification courses have a fee</li>
                <li>Motorized water sports like jet skiing are extra</li>
                <li>Butler suite upgrades beyond your booked category</li>
              </ul>
            </Accordion>
          </section>
        )}

        {/* DINING */}
        {activeTab === "dining" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: B_DARK }}>Dining at Beaches</h2>
            <p className="text-gray-500 text-sm mb-6">The dining program at Beaches is one of the most impressive in family resort travel. Multiple specialty restaurants, dedicated kids menus, and a quality level that makes parents genuinely happy rather than just adequately fed.</p>

            <Accordion title="How Many Restaurants?">
              <p className="mb-3">Beaches Turks and Caicos has 20 specialty restaurants all included. The variety covers global cuisines and a range of atmospheres from casual beachside to elegant evening dining. You have a different dining experience available every night of any reasonable stay without repeating yourself.</p>
              <p>Beaches Negril has a smaller but still impressive dining lineup appropriate to its more intimate scale.</p>
            </Accordion>

            <Accordion title="What Types of Restaurants?">
              <p className="mb-3">The Beaches dining program covers a lot of ground. At Turks and Caicos expect Italian, Japanese, French, Caribbean, American grill, seafood, Mediterranean, and casual beach dining options. There is a dedicated steakhouse, a sushi bar, a French bistro, and multiple casual options for quick family meals between activities.</p>
              <p>Every restaurant has a kids menu and the staff at Beaches are experienced with accommodating the full range of family dining dynamics.</p>
            </Accordion>

            <Accordion title="The Buffet">
              <p>The main buffet at Beaches runs for most of the day and is the casual go-to for breakfast, quick lunches, and late-night snacks. The variety is broad and the quality is above what most family resorts offer at their buffet stations.</p>
            </Accordion>

            <Accordion title="Dining Reservations">
              <p className="mb-3">Popular specialty restaurants at Beaches require reservations and fill up, especially during peak family travel weeks. The consistent advice from guests is to book your dining reservations as early as possible after arrival.</p>
              <p>The resort concierge can accommodate families with specific dietary needs, allergies, or preferences. Let them know upfront and they will make sure the kitchen is prepared.</p>
            </Accordion>

            <Accordion title="Late Night and Room Service">
              <p>Room service is available at Beaches resorts and is genuinely useful for families traveling with young kids who need an early dinner or a snack after a long activity day. Being able to order to your room without packing up the whole family is one of those conveniences that makes the trip smoother.</p>
            </Accordion>
          </section>
        )}

        {/* ACTIVITIES */}
        {activeTab === "activities" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: B_DARK }}>Activities for the Whole Family</h2>
            <p className="text-gray-500 text-sm mb-6">The activity program at Beaches is one of the things that separates it from every other family resort. There is genuinely something for every age at every level of energy at all times.</p>

            <Accordion title="The Waterpark">
              <p className="mb-3">The 45,000 square foot waterpark at Beaches Turks and Caicos is the centerpiece of the resort's activity offering. Multiple waterslides ranging from gentle to thrilling, a lazy river for floating, splash zones for toddlers and young kids, and a wave pool for older kids and adults.</p>
              <p>It is fully included and open throughout the day. Families consistently mention it as the highlight of their trip especially for school-age kids. Teenagers love it too which solves the problem of keeping older kids engaged at a family resort.</p>
            </Accordion>

            <Accordion title="Scuba Diving and Snorkeling">
              <p className="mb-3">Non-motorized water sports including snorkeling are included for all guests. Certified divers get included scuba diving with multiple guided dives per day. The waters around Turks and Caicos are some of the clearest and most reef-rich in the Caribbean.</p>
              <p>PADI certification courses are available for teens and adults who want to get certified during their stay.</p>
            </Accordion>

            <Accordion title="Sesame Street Character Experiences">
              <p className="mb-3">Sesame Street is woven into the Beaches experience in a way that goes beyond just photo opportunities. There are Sesame Street themed water play areas in the waterpark, character meals, parade appearances, and Camp Sesame where kids can interact with their favorite characters daily.</p>
              <p>For families with young children this is one of the most memorable parts of the trip. The characters appear throughout the resort consistently and the interactions are genuine rather than rushed photo ops.</p>
            </Accordion>

            <Accordion title="Beach and Pool Activities">
              <p className="mb-3">Multiple pools with different characters for different ages and energy levels. An adults-only pool for parents who want quiet time. A dedicated family pool with shallow areas for young kids. Beach volleyball, aqua aerobics, paddleboarding, and beach games running throughout the day.</p>
              <p>The beach at Turks and Caicos is among the best in the world. Clear turquoise shallow water that is warm and calm, ideal for kids learning to swim or snorkel.</p>
            </Accordion>

            <Accordion title="Land Sports and Fitness">
              <p>Tennis courts, beach volleyball, basketball, and a fully equipped fitness center are all included. Group fitness classes are available for adults. Evening entertainment includes live music, cultural shows, and family-friendly performances throughout the week.</p>
            </Accordion>

            <Accordion title="Off-Resort Excursions">
              <p className="mb-3">The resort concierge can arrange off-resort excursions including boat tours, snorkel trips to outer reefs, guided island tours, horseback riding on the beach, and cultural experiences. These are separate from your Luxury Included package.</p>
              <p>Book excursions early on arrival day. Popular family excursions sell out during peak weeks.</p>
            </Accordion>
          </section>
        )}

        {/* KIDS AND TEENS */}
        {activeTab === "kids" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: B_DARK }}>Kids and Teens at Beaches</h2>
            <p className="text-gray-500 text-sm mb-6">This is where Beaches separates itself from every other family resort brand. The kids programming is not an afterthought. It is a core part of the resort experience built specifically for every age group.</p>

            <Accordion title="Camp Sesame — Little Ones">
              <p className="mb-3">Camp Sesame is Beaches' dedicated program for young children featuring Sesame Street character interactions, supervised play, structured activities, and themed experiences throughout the day. Designed for kids from toddlers through early elementary age.</p>
              <p className="mb-3">The staff-to-child ratio is high and the programming changes throughout the day so kids are genuinely engaged. Parents consistently report that their young kids asked to go back to Camp Sesame every day of the trip.</p>
              <p>Camp Sesame is fully included in your resort stay.</p>
            </Accordion>

            <Accordion title="The Sesame Street Character Experience">
              <p className="mb-3">Elmo, Cookie Monster, Abby Cadabby, and the rest of the Sesame Street cast make multiple appearances throughout the resort every day. Character breakfasts, pool appearances, parade moments, and evening shows are all part of the regular programming.</p>
              <p>For families with children in the Sesame Street age range this is genuinely one of the most magical parts of the trip. Young kids who have grown up watching Sesame Street meeting those characters in person at the beach is a memory that sticks.</p>
            </Accordion>

            <Accordion title="Tweens — Ages 9 to 12">
              <p className="mb-3">Beaches has a dedicated tween program with activities and spaces designed specifically for the age group that is too old for Camp Sesame and too young to just hang out at the beach bar. Supervised activities, beach games, water sports instruction, and social events where kids in the same age group can meet each other.</p>
              <p>Tweens also have full access to the waterpark and water sports program which tends to be the most popular part of the resort for this age group.</p>
            </Accordion>

            <Accordion title="Teens — Their Own Space">
              <p className="mb-3">The teen program at Beaches gives older kids their own dedicated spaces and activities separate from the little kids. Xbox gaming lounges, a teen-specific social program, access to the full waterpark, water sports, and evening entertainment designed for their age group.</p>
              <p className="mb-3">The teen disco is a consistent highlight in reviews from families with older kids. It gives teenagers a fun evening option that is just for them while parents get their own time at the adult entertainment venues.</p>
              <p>The consistent feedback from families traveling with teens is that they were skeptical going in and the teens ended up having the best time of the trip.</p>
            </Accordion>

            <Accordion title="Xbox Lounge">
              <p>Every Beaches property has a dedicated Xbox gaming lounge with consoles and games available for kids and teens. A great option on rainy afternoons or when kids need a break from the sun. Fully included and gives kids who are less beach-oriented something they genuinely enjoy doing on vacation.</p>
            </Accordion>

            <Accordion title="What About Babies and Infants?">
              <p className="mb-3">Beaches accommodates infants with dedicated nursery facilities and trained childcare staff. The resort can arrange cribs, high chairs, baby food, and other infant essentials. Let the resort know before arrival if you are traveling with an infant so they can have everything set up when you check in.</p>
              <p>Beaches does more to support families traveling with very young babies than most resorts. The beach setting, the pool shallows, and the included childcare give parents options that most resorts do not.</p>
            </Accordion>
          </section>
        )}

        {/* TRIP INSURANCE */}
        {activeTab === "insurance" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: B_DARK }}>Trip Insurance</h2>
            <p className="text-gray-500 text-sm mb-6">Trip insurance is even more important on a family trip than on a couples getaway. More people means more variables. One sick kid can affect the whole trip. This is the coverage that protects your family vacation investment.</p>

            <div className="p-4 rounded-xl mb-6 text-white text-sm" style={{ background: B_DARK }}>
              <strong style={{ color: "#7EC8EE" }}>Buy it at booking.</strong> Insurance is cheaper at your initial deposit and pre-existing condition coverage requires buying within 14 to 21 days of your first payment. With kids involved there are more health considerations to cover. Lock it in early.
            </div>

            <Accordion title="What If Someone Gets Sick Before You Leave?">
              <p className="mb-3">One sick child can cancel a trip for the whole family. A parent with a medical situation two days before departure affects everyone. Without insurance you lose the full cost of the trip because the cancellation window has passed.</p>
              <p>Trip cancellation coverage for covered medical reasons means you cancel, get reimbursed, and rebook when everyone is healthy.</p>
            </Accordion>

            <Accordion title="What If Someone Gets Sick or Hurt at the Resort?">
              <p className="mb-3">Kids get hurt on vacation. A twisted ankle, a bad sunburn, a stomach bug, or something more serious can mean a visit to the resort medical facility or a local hospital. Your US health insurance may not cover medical care in Turks and Caicos or Jamaica.</p>
              <p>Medical coverage in your trip insurance means the care is covered regardless of where you are.</p>
            </Accordion>

            <Accordion title="What If Flights Get Disrupted?">
              <p>Traveling with kids and a cancelled flight is one of the most stressful experiences in family travel. Trip delay coverage helps cover the hotel, meals, and rebooking costs when your travel falls apart before you reach the resort.</p>
            </Accordion>

            <Accordion title="Why Buy at Booking?">
              <p>Two reasons. It is cheaper early. And pre-existing condition coverage expires if you do not buy within a set window of your deposit. With kids who may have ongoing health considerations this is especially important. Lock it in when we book your trip.</p>
            </Accordion>
          </section>
        )}

        {/* ERIC'S TIPS */}
        {activeTab === "tips" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: B_DARK }}>Eric's Tips for Your Beaches Stay</h2>
            <p className="text-gray-500 text-sm mb-6">These tips come from extensive research including verified guest reviews, travel advisor communities, and direct feedback from families who have stayed at Beaches properties.</p>

            <Accordion title="Book Dining Reservations Early — On Arrival Day">
              <p className="mb-3">The most popular specialty restaurants at Beaches fill up fast, especially during school holiday weeks and peak summer travel. The consistent advice from families is to go to the concierge immediately after check-in and lock in your dining reservations for the entire stay.</p>
              <p>With kids you also want to think about timing. Early evening seatings tend to work better for younger children.</p>
            </Accordion>

            <Accordion title="Get to the Waterpark Early">
              <p className="mb-3">The waterpark gets crowded as the day progresses. Families who get there right when it opens have significantly shorter wait times for the most popular slides.</p>
              <p>A good strategy is waterpark in the morning, beach and pool in the afternoon, and dinner and evening entertainment to close the day.</p>
            </Accordion>

            <Accordion title="Tell the Resort About Special Occasions and Needs">
              <p className="mb-3">If you are celebrating a milestone, have dietary restrictions, are traveling with an infant who needs specific equipment, or have any other special need, communicate it to the resort before you arrive. Beaches is experienced at accommodating families with complex needs and they do it well when they have advance notice.</p>
              <p>Tell Eric when you book and he will make sure the resort is flagged.</p>
            </Accordion>

            <Accordion title="Let the Kids Club Do Its Job">
              <p className="mb-3">Many parents feel guilty about dropping their kids at Camp Sesame or the teen program and going to enjoy the adult amenities. Do not. This is exactly what the programming is designed for and the kids almost universally love it.</p>
              <p>The consistent feedback from families is that their children asked to go back to the kids club every day. Use the time to enjoy the adult pool, have a long lunch, or just sit on the beach without managing anyone.</p>
            </Accordion>

            <Accordion title="Book Excursions on Arrival Day">
              <p className="mb-3">Popular family excursions including boat snorkel trips, horseback riding on the beach, and island tours sell out during peak weeks. The concierge can arrange everything but you need to book as soon as you arrive.</p>
              <p>With kids you also want to be realistic about what excursions work for your ages. The concierge can help match activities to your family's specific ages and energy levels.</p>
            </Accordion>

            <Accordion title="Pack Sun Protection Seriously">
              <p className="mb-3">The Caribbean sun is significantly stronger than what most families from the mainland are used to. Reef-safe sunscreen is required at Beaches properties. Pack enough for the whole trip because resort retail prices for sunscreen are high.</p>
              <p>Start with sunscreen on the first day even if it is overcast. Kids burn faster than adults in this environment.</p>
            </Accordion>

            <Accordion title="The Teen Disco Is Worth It">
              <p>If you have teenagers who are skeptical about a family resort, mention the teen disco. It is one of the most consistently praised features of Beaches for families with older kids and it tends to be the moment teenagers stop wishing they were somewhere else and start actually enjoying themselves.</p>
            </Accordion>

            <Accordion title="Get Trip Insurance — It Matters More With Kids">
              <p>More people means more variables. One sick kid can affect the whole trip. Medical situations abroad are more complicated with children involved. Lock in trip insurance at booking when it is cheapest. Do not leave home without it especially when the whole family is involved.</p>
            </Accordion>
          </section>
        )}

        {/* CTA */}
        <div className="mt-10 rounded-2xl p-5 md:p-8 text-center text-white" style={{ background: `linear-gradient(135deg, ${B_DARK}, ${B_TEAL})` }}>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#7EC8EE" }}>Ready for the Family Trip</p>
          <h3 className="text-lg md:text-2xl font-bold mb-3">Let's Find Your Perfect Beaches Resort</h3>
          <p className="text-sm mb-5 max-w-lg mx-auto" style={{ color: "#C0DCF0" }}>
            You get the same price booking through my link as you do booking direct. The difference is you get someone who knows the properties, understands what works for different family situations, and is available if anything comes up.
          </p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg font-bold text-sm transition hover:opacity-90"
            style={{ background: B_ORANGE, color: "white" }}
          >
            Explore Beaches Resorts
          </a>
          <p className="mt-4 text-xs" style={{ color: "#5A8AB4" }}>Booking through this link supports Happy Detour Travel at no extra cost to you.</p>
        </div>

      </div>
    </div>
  );
}
