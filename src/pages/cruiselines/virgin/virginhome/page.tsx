import { useState, useEffect } from "react";

const VV_RED = "#D4273C";
const VV_RED_DEEP = "#A81E30";
const VV_DARK = "#1A0A0E";
const VV_GOLD = "#C9A84C";
const VV_CREAM = "#FDF6EE";

// Hover styles for the whole page. "!important" is needed because many
// elements set their colors with inline styles, which would otherwise win.
const HOVER_CSS = `
.vv-btn, .vv-acc, .vv-card, .vv-pill, .vv-tab { transition: background-color .2s ease, color .2s ease, border-color .2s ease; }
.vv-link { transition: color .2s ease; }

/* Buttons and bubbles turn Virgin red with white text */
.vv-btn:hover { background: ${VV_RED} !important; color: #fff !important; border-color: ${VV_RED} !important; }

/* Disabled buttons stay put */
.vv-btn:disabled { pointer-events: none; }

/* Accordion headers */
.vv-acc:hover { background: ${VV_RED} !important; color: #fff !important; }
.vv-acc:hover .vv-acc-icon { color: #fff !important; }

/* Tabs in the dark tab bar */
.vv-tab:hover { background: ${VV_RED} !important; color: #fff !important; }

/* Sailing length pills */
.vv-pill:hover { background: ${VV_RED} !important; color: #fff !important; border-color: ${VV_RED} !important; }

/* Checkbox cards in the optimizer */
.vv-card:hover { border-color: ${VV_RED} !important; background: #FFF5F5 !important; }

/* Text links (already red) go a deeper red */
.vv-link:hover { color: ${VV_RED_DEEP} !important; }
`;

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-red-100 rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="vv-acc w-full flex justify-between items-center px-4 py-4 text-left font-semibold text-gray-800 gap-3"
        style={{ background: open ? "#FFF5F5" : "white" }}
      >
        <span className="text-sm md:text-base leading-snug">{title}</span>
        <span
          className="vv-acc-icon text-2xl transition-transform duration-200 flex-shrink-0"
          style={{ color: VV_RED, transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
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

/* ============ BAR TAB CALCULATOR ============ */
// Simple version for clients: trip length, people, what you drink, one clear answer.
// Prices are rough onboard averages, Oct 2026.

type SailingLength = "short" | "mid" | "long";

const LENGTHS: { id: SailingLength; label: string; nights: number; mnvv: number }[] = [
  { id: "short", label: "4 to 5 nights", nights: 5, mnvv: 150 },
  { id: "mid", label: "6 to 8 nights", nights: 7, mnvv: 200 },
  { id: "long", label: "9+ nights", nights: 10, mnvv: 250 },
];

function money(n: number) {
  return "$" + Math.round(n).toLocaleString();
}

const DRINKS: { id: string; label: string; hint: string; price: number; icon: string }[] = [
  { id: "beer", label: "Beer or seltzer", hint: "About $8", price: 8, icon: "🍺" },
  { id: "wine", label: "Glass of wine", hint: "About $12", price: 12, icon: "🍷" },
  { id: "basic", label: "Simple cocktail", hint: "Like a vodka soda · about $13", price: 13, icon: "🍸" },
  { id: "fancy", label: "Fancy or frozen cocktail", hint: "Like a margarita · about $16", price: 16, icon: "🍹" },
  { id: "shot", label: "Shot", hint: "About $11", price: 11, icon: "🥃" },
  { id: "coffee", label: "Specialty coffee", hint: "Latte or espresso · about $6", price: 6, icon: "☕" },
];

function Stepper({ value, onChange, min, max }: { value: number; onChange: (v: number) => void; min: number; max: number }) {
  return (
    <div className="flex items-center gap-1 flex-shrink-0">
      <button
        aria-label="Less"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="vv-btn h-9 w-9 rounded-full border border-red-100 text-lg font-bold leading-none disabled:opacity-30"
        style={{ color: VV_RED, background: "white" }}
      >
        −
      </button>
      <span className="w-8 text-center font-bold text-gray-800">{value}</span>
      <button
        aria-label="More"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="vv-btn h-9 w-9 rounded-full border border-red-100 text-lg font-bold leading-none disabled:opacity-30"
        style={{ color: VV_RED, background: "white" }}
      >
        +
      </button>
    </div>
  );
}

function BarTabOptimizer() {
  const [nights, setNights] = useState(7);
  const [people, setPeople] = useState(2);
  const [counts, setCounts] = useState<Record<string, number>>({ beer: 0, wine: 1, basic: 1, fancy: 1, shot: 0, coffee: 0 });
  const [credit, setCredit] = useState(0);

  const perPersonPerDay = DRINKS.reduce((sum, d) => sum + counts[d.id] * d.price, 0);
  const drinksPerDay = DRINKS.reduce((sum, d) => sum + counts[d.id], 0);
  const total = perPersonPerDay * people * nights;
  const toBuy = Math.max(0, total - credit);

  return (
    <div className="rounded-2xl overflow-hidden mb-8 shadow-sm border border-red-100 bg-white">
      <div className="px-5 py-4 text-white" style={{ background: `linear-gradient(135deg, ${VV_DARK}, ${VV_RED})` }}>
        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: VV_GOLD }}>Bar Tab Calculator</p>
        <p className="text-lg md:text-xl font-bold">How much should I put on my Bar Tab?</p>
        <p className="text-xs text-red-100 mt-1">Tell me about your trip and what you like to drink. I'll do the math.</p>
      </div>

      <div className="p-5 grid md:grid-cols-5 gap-6">
        {/* Inputs */}
        <div className="md:col-span-3">
          <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: VV_RED }}>1 · Your trip</p>
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-800">Nights onboard</p>
                <p className="text-xs text-gray-500">How long is your sailing?</p>
              </div>
              <Stepper value={nights} onChange={setNights} min={1} max={30} />
            </div>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-800">People drinking</p>
                <p className="text-xs text-gray-500">Sharing one Bar Tab</p>
              </div>
              <Stepper value={people} onChange={setPeople} min={1} max={4} />
            </div>
          </div>

          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: VV_RED }}>2 · A typical day, per person</p>
          <p className="text-xs text-gray-500 mb-3">Just a rough guess. You can't get this wrong.</p>
          <div className="divide-y divide-red-50">
            {DRINKS.map((d) => (
              <div key={d.id} className="flex items-center justify-between gap-3 py-2">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="h-9 w-9 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ background: VV_CREAM }}>{d.icon}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-800">{d.label}</p>
                    <p className="text-xs text-gray-500">{d.hint}</p>
                  </div>
                </div>
                <Stepper value={counts[d.id]} onChange={(v) => setCounts({ ...counts, [d.id]: v })} min={0} max={10} />
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">Sodas, juice, water, and drip coffee are free, so no need to count those.</p>
        </div>

        {/* Result */}
        <div className="md:col-span-2">
          <div className="md:sticky md:top-16 space-y-3">
            <div className="rounded-xl p-5 text-center text-white" style={{ background: `linear-gradient(135deg, ${VV_DARK}, ${VV_RED})` }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: VV_GOLD }}>Your drinks for the trip</p>
              <p className="text-4xl font-extrabold">{money(total)}</p>
              <p className="text-xs text-red-100 mt-2">
                {drinksPerDay} {drinksPerDay === 1 ? "drink" : "drinks"} a day each · about {money(perPersonPerDay)} per person, per day
              </p>
            </div>

            <div className="rounded-xl p-4" style={{ background: VV_CREAM }}>
              <label className="block">
                <span className="block text-sm font-semibold text-gray-800">Already have Bar Tab money?</span>
                <span className="block text-xs text-gray-500 mb-2">From a referral, a promo, or booking with me. Not sure? Leave it at 0.</span>
                <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden">
                  <span className="pl-3 text-sm text-gray-500">$</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={credit}
                    min={0}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      setCredit(isNaN(v) ? 0 : Math.max(0, v));
                    }}
                    className="w-full px-3 py-2 text-sm outline-none bg-transparent"
                  />
                </div>
              </label>
            </div>

            <div className="rounded-xl p-4 border-2 text-center" style={{ borderColor: VV_RED }}>
              {toBuy > 0 ? (
                <>
                  <p className="text-sm text-gray-600">Bar Tab to buy before you sail</p>
                  <p className="text-3xl font-extrabold" style={{ color: VV_RED }}>{money(toBuy)}</p>
                  <p className="text-xs text-gray-500 mt-2">Virgin adds bonus credit on top when you buy ahead, so you'll likely end up with a little extra.</p>
                </>
              ) : (
                <>
                  <p className="text-lg font-bold" style={{ color: VV_RED }}>You're covered!</p>
                  <p className="text-xs text-gray-500 mt-1">Your existing Bar Tab money should cover your drinks.</p>
                </>
              )}
            </div>

            <a
              href="sms:6308231253"
              className="vv-btn block text-center px-4 py-3 rounded-lg font-bold text-sm border border-transparent"
              style={{ background: VV_GOLD, color: VV_DARK }}
            >
              Ask Eric what perks your sailing has
            </a>
          </div>
        </div>
      </div>

      <p className="px-5 pb-5 text-xs text-gray-400 leading-relaxed">
        Prices are rough averages and vary by bar. Unused Bar Tab money doesn't carry over, so it's better to guess a little low. Anything over just goes on your onboard account.
      </p>
    </div>
  );
}

const TABS = [
  { id: "included", label: "What's Included" },
  { id: "perks", label: "Bar Tab & Perks" },
  { id: "ships", label: "The Ships" },
  { id: "dining", label: "Dining" },
  { id: "bars", label: "Bars" },
  { id: "loyalty", label: "Sailing Club" },
  { id: "solo", label: "Solo Travel" },
  { id: "excursions", label: "Shore Excursions" },
  { id: "insurance", label: "Trip Insurance" },
  { id: "tips", label: "Eric's Tips" },
];

// Lets links like /cruises/virgin-voyages#bar-tab open the right tab
const HASH_TO_TAB: Record<string, string> = { "bar-tab": "perks" };

// Voyage planner link with Eric's First Mate booking channel, so bookings tie back to Happy Detour Travel
const AFFILIATE_LINK = "https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK";

export default function VirginVoyagesPage() {
  const [activeTab, setActiveTab] = useState("included");

  const goToTab = (id: string) => {
    setActiveTab(id);
    setTimeout(() => document.getElementById("vv-tabs")?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const id = HASH_TO_TAB[hash] || TABS.find((t) => t.id === hash)?.id;
    if (id) goToTab(id);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: VV_CREAM, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{HOVER_CSS}</style>

      {/* Hero */}
      <div
        className="relative py-12 md:py-24 px-4 text-center text-white overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${VV_DARK} 0%, ${VV_RED} 100%)` }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: VV_GOLD }}>Your Virgin Voyages Guide</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">Virgin Voyages</h1>
          <p className="text-base md:text-xl text-red-100 mb-4 leading-relaxed">
            No nickel and diming. No set dining times. Just you, the sea, and a ship that actually wants you to have fun.
          </p>
          <p className="text-xs md:text-base text-red-200 mb-6">
            Everything you need to know before you sail, put together by Eric, your Happy Detour Travel advisor and Virgin Voyages First Mate Gold certified agent.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => goToTab("perks")}
              className="vv-btn px-5 py-3 rounded-lg font-bold text-sm border border-transparent"
              style={{ background: VV_GOLD, color: VV_DARK }}
            >
              Try the Bar Tab Optimizer
            </button>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="vv-btn px-5 py-3 rounded-lg font-bold text-sm border border-white/40 text-white"
            >
              Search Virgin Sailings
            </a>
          </div>
          <img
            src="/firstmate-gold.png"
            alt="Virgin Voyages Certified First Mate Gold Tier"
            className="h-28 md:h-40 w-auto mx-auto opacity-95"
          />
        </div>
      </div>

      {/* Tab Bar */}
      <div id="vv-tabs" className="sticky top-0 z-30 shadow-md relative" style={{ background: VV_DARK }}>
        <div className="overflow-x-auto scrollbar-none">
          <div className="flex justify-start min-w-max px-2 md:justify-center md:min-w-0 md:flex-wrap">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="vv-tab px-3 py-3 text-xs font-semibold whitespace-nowrap border-b-2 flex-shrink-0"
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
        {/* Fade on the right so phone users can tell there are more tabs to swipe */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-10 md:hidden" style={{ background: `linear-gradient(to right, rgba(26,10,14,0), ${VV_DARK})` }} />
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto px-3 md:px-6 py-6 md:py-12">

        {/* WHAT'S INCLUDED */}
        {activeTab === "included" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: VV_DARK }}>What Comes With Your Fare</h2>
            <p className="text-gray-500 text-sm mb-6">Virgin Voyages bundles in things that other cruise lines charge extra for. Here is a breakdown of what you get the moment you step onboard.</p>

            <Accordion title="All Restaurants Included">
              <p>Every single restaurant on the ship is included in your fare. No specialty dining surcharge. No reservation fee. You just show up and eat. Virgin Voyages has between 6 and 20 restaurant options depending on the ship. You book dining times in advance through the Sailor app, which makes the whole process smooth and easy.</p>
            </Accordion>

            <Accordion title="Unlimited WiFi">
              <p>High speed WiFi is included for every sailor on every sailing. Not the slow, barely-works kind. You can stream, post, video call, and work from sea if you need to. This is one of the biggest things people do not realize is covered until they get onboard.</p>
            </Accordion>

            <Accordion title="Fitness Classes">
              <p>Group fitness classes like yoga, spin, barre, and bootcamp are included. The gym itself is open to everyone at no charge. Personal training sessions are separate, but group classes are yours to take as many times as you want.</p>
            </Accordion>

            <Accordion title="Soft Drinks, Juice and Drip Coffee">
              <p>Non-alcoholic beverages are covered. That includes sodas, juices, still and sparkling water, and drip coffee. Specialty coffee drinks like espresso and lattes are not included, but your everyday coffee is taken care of.</p>
            </Accordion>

            <Accordion title="What Is NOT Included">
              <p className="mb-3">A few things to know before you sail so you are not caught off guard:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Alcohol</strong> is not included in the base fare. You can add a Bar Tab or pay as you go. See the Bar Tab &amp; Perks tab to get the most for your money.</li>
                <li><strong>Gratuities</strong> are a separate charge. Lock them in at booking because they cost more if you wait.</li>
                <li><strong>Shore excursions</strong> are an additional cost at each port.</li>
                <li><strong>Spa treatments</strong> are not included. The spa is available but priced separately.</li>
                <li><strong>Specialty coffee</strong> drinks like lattes and espresso are separate.</li>
                <li><strong>Casino play</strong> is not included.</li>
              </ul>
            </Accordion>

            <p className="text-sm mt-6" style={{ color: "#6B7280" }}>
              Virgin Voyages sails the Caribbean, Mediterranean, Alaska, and beyond, and everyone onboard is 18+.{" "}
              <a
                href="https://www.virginvoyages.com/the-ships"
                target="_blank"
                rel="noopener noreferrer"
                className="vv-link"
                style={{ color: VV_RED, textDecoration: "underline" }}
              >
                Learn more about Virgin Voyages at virginvoyages.com
              </a>.
            </p>
          </section>
        )}

        {/* BAR TAB & PERKS */}
        {activeTab === "perks" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Bar Tab and Sailor Perks</h2>
            <p className="text-gray-500 text-sm mb-6">Virgin Voyages does not sell drinks packages. Instead, you get drink money a few different ways, and some of them stack. Here is how it all works.</p>

            <BarTabOptimizer />

            {/* Sailor Loot teaser: details live in the members area */}
            <div className="rounded-2xl p-5 mb-8 flex flex-col md:flex-row md:items-center gap-4" style={{ background: VV_DARK }}>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: VV_GOLD }}>Book With Eric Bonus</p>
                <p className="text-white font-bold text-lg leading-snug">Up to $200 Sailor Loot on select sailings</p>
                <p className="text-sm text-gray-300 mt-1">Extra onboard credit on top of Virgin's own offers when you book with me. Members see which sailings qualify and how much.</p>
              </div>
              <a
                href="/join"
                className="vv-btn text-center px-5 py-3 rounded-lg font-bold text-sm whitespace-nowrap border border-transparent"
                style={{ background: VV_GOLD, color: VV_DARK }}
              >
                Join to See the Sailings
              </a>
            </div>

            <Accordion title="What Is the Bar Tab?">
              <p className="mb-3">The Bar Tab is credit that goes toward drinks onboard and at The Beach Club at Bimini. Cocktails, beer, wine, specialty coffee, and fresh juices all count, and you can use it to buy drinks for friends too.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Buy it before you sail.</strong> You can add a Bar Tab in the app or through me up to 24 hours before your sailing. It cannot be bought onboard.</li>
                <li><strong>You get a bonus.</strong> Virgin adds extra credit on top of what you buy, up to $250.</li>
                <li><strong>It is used first.</strong> When you order a drink, your Bar Tab pays before anything else. No need to ask.</li>
                <li><strong>It does not carry over.</strong> Unused Bar Tab is not refunded at the end of the trip, so plan to use it.</li>
                <li><strong>Drinks only.</strong> It does not cover the spa or bottles and coffee bags to take home.</li>
              </ul>
            </Accordion>

            <Accordion title="What Is Sailor Loot?">
              <p className="mb-3">Sailor Loot is onboard credit you can use on almost anything: drinks, the spa, the shops, even a tattoo at Squid Ink. It usually comes from a promotion or from booking with a travel advisor.</p>
              <p className="mb-3">
                When you book eligible sailings with me, you can get up to $200 in Sailor Loot on top of Virgin's own offers.{" "}
                <a href="/join" className="vv-link font-semibold underline" style={{ color: VV_RED }}>Join to see which sailings qualify</a>.
              </p>
              <p>Sailor Loot cannot be cashed out, and anything you do not use is lost at the end of the sailing.</p>
            </Accordion>

            <Accordion title="Bar Tab vs. Sailor Loot: What's the Difference?">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg" style={{ background: "#FFF5F5" }}>
                  <p className="font-bold mb-1" style={{ color: VV_RED }}>Bar Tab</p>
                  <p className="text-sm">Drinks only. Used first every time you order a drink. You can buy it ahead and get a bonus.</p>
                </div>
                <div className="p-3 rounded-lg" style={{ background: VV_CREAM }}>
                  <p className="font-bold mb-1" style={{ color: VV_DARK }}>Sailor Loot</p>
                  <p className="text-sm">Works on almost anything onboard. Used after your Bar Tab runs out for drinks, and first for everything else.</p>
                </div>
              </div>
            </Accordion>

            <Accordion title="First Time on Virgin? Get a $150 Bar Tab With a Referral">
              <p className="mb-3">Virgin's Refer a Friend program gives a brand new sailor a $150 Bar Tab, and the friend who referred them gets $150 too.</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>If you are new to Virgin:</strong> ask a friend who has already sailed Virgin to send you their referral link. Use it before we book so the $150 lands on your sailing.</li>
                <li><strong>If you have sailed Virgin:</strong> you can get your own link from Virgin and share it with friends. You earn $150 for each friend who books, and you can use up to two of those rewards on one sailing.</li>
                <li>You and your friend need to be in separate cabins on separate bookings.</li>
              </ul>
              <p className="text-sm text-gray-500">Referral rewards do not work with Lock It In fares. Let me know you have a referral link and I will make sure it gets applied the right way.</p>
            </Accordion>

            <Accordion title="My Next Virgin Voyage (MNVV): Book Onboard and Save">
              <p className="mb-3">If you are on a Virgin ship right now, this is one of the best deals going. Put down a $150 deposit onboard for a future sailing and you get Sailor Loot plus money off your fare.</p>
              <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                {LENGTHS.map((l) => (
                  <div key={l.id} className="p-3 rounded-lg" style={{ background: VV_CREAM }}>
                    <p className="text-xs text-gray-500">{l.label}</p>
                    <p className="font-bold" style={{ color: VV_RED }}>{money(l.mnvv * 2)}</p>
                    <p className="text-xs text-gray-500">{money(l.mnvv)} Loot + {money(l.mnvv)} off</p>
                  </div>
                ))}
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Works on Sea Terrace cabins or higher, on sailings of 4 nights or more.</li>
                <li>You can only sign up while you are onboard a Virgin ship.</li>
                <li>Changed your mind? You get a full refund within 7 days. After that, your deposit becomes a credit toward a future sailing.</li>
                <li>You can move your sailing date once on Essential and Premium fares.</li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">Booked with me before? Text me from the ship and I will help you pick the right MNVV sailing so it stays connected to Happy Detour Travel.</p>
            </Accordion>

            <Accordion title="More Ways to Get Bar Tab Money">
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Book during a promotion.</strong> Virgin runs Bar Tab deals all year, sometimes worth hundreds of dollars per cabin.</li>
                <li><strong>Book Sea Terrace or higher with me.</strong> Most sailings come with an extra Bar Tab or Sailor Loot perk when you book through a travel advisor. You usually will not see it booking direct.</li>
                <li><strong>Choose the Premium fare.</strong> It includes a Bar Tab credit along with the most flexibility.</li>
                <li><strong>Go longer.</strong> Bar Tab offers often get bigger on longer sailings.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">Offers change often. Reach out before you book and I will check what is live for your sailing.</p>
            </Accordion>

            <Accordion title="The Sailor App: Your Onboard Hub">
              <p className="mb-3">Download the Virgin Voyages Sailor app before you sail. You will use it for booking dining reservations, checking your Bar Tab balance, looking at Shore Things excursions, and managing your account.</p>
              <p>Dining reservations open before your sailing and the most popular restaurants fill up fast. Get on the app early and lock in your favorites as soon as your window opens.</p>
            </Accordion>
          </section>
        )}

        {/* THE SHIPS */}
        {activeTab === "ships" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: VV_DARK }}>The Fleet</h2>
            <p className="text-gray-500 text-sm mb-6">Virgin Voyages currently has four ships. They are all similar in size and all carry the same brand identity. Here is what makes each one a little different.</p>

            {[
              { name: "Scarlet Lady", year: "2021", capacity: "2,770 sailors", homeport: "Miami, FL", description: "The original. Scarlet Lady was the first Virgin Voyages ship and helped define the brand. She sails mostly Caribbean itineraries out of Miami with all the signature Virgin features including The Dock outdoor deck, The Manor nightclub, and a full lineup of restaurants.", deckHighlights: ["The Manor (nightclub and main event space)", "The Dock (outdoor stern deck, swim platform)", "Richard's Rooftop (top deck pool and lounge)", "Redemption Spa (rooftop spa pool)", "Athletic Club (gym, fitness classes)", "Pool Deck with The Groupie hot tubs"] },
              { name: "Valiant Lady", year: "2021", capacity: "2,770 sailors", homeport: "Barcelona (Europe seasonally), Caribbean", description: "Sister ship to Scarlet Lady with the same layout and restaurants. Valiant Lady tends to sail European itineraries in summer and pivots to the Caribbean in other seasons. Same great experience, different ports.", deckHighlights: ["Same core layout as Scarlet Lady", "The Wake (steakhouse at the stern)", "Sun Club pool area", "The Manor entertainment complex", "Squid Ink tattoo studio onboard"] },
              { name: "Resilient Lady", year: "2023", capacity: "2,770 sailors", homeport: "Various (Mediterranean, Caribbean, Australia)", description: "The third ship in the fleet. Resilient Lady added some new features and a few new dining concepts. She has been deployed globally and is known for some of the more adventurous itineraries Virgin offers.", deckHighlights: ["All core features of the original ships", "Additional bar and lounge concepts", "Same spa, gym, and entertainment footprint", "Expanded Pool Club area"] },
              { name: "Brilliant Lady", year: "2024", capacity: "2,770 sailors", homeport: "San Francisco, CA (Alaska and Pacific)", description: "The newest addition to the fleet. Brilliant Lady homeports in San Francisco and was the first Virgin Voyages ship to offer Alaska sailings. She brought the brand's approach to a whole new part of the country and a whole new kind of itinerary.", deckHighlights: ["All flagship Virgin features", "Alaska-ready with glacier viewing areas", "New dining concept exclusive to Brilliant Lady", "West Coast debut for the brand"] },
            ].map((ship) => (
              <div key={ship.name} className="mb-4">
                <Accordion title={`${ship.name} · ${ship.homeport}`}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="mb-3">{ship.description}</p>
                      <p className="text-xs text-gray-500">Launched {ship.year} &bull; Capacity {ship.capacity}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2" style={{ color: VV_RED }}>Key Deck Highlights</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">{ship.deckHighlights.map((d) => <li key={d}>{d}</li>)}</ul>
                    </div>
                  </div>
                </Accordion>
              </div>
            ))}

            <div className="mt-6 p-4 rounded-xl text-white text-sm" style={{ background: VV_RED }}>
              <strong>Note from Eric:</strong> All four ships share the same core layout, restaurants, and experience. If you have sailed one, you will feel right at home on any of the others. The biggest differences are itinerary and homeport, not the ship itself.
            </div>
          </section>
        )}

        {/* DINING */}
        {activeTab === "dining" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Dining Onboard</h2>
            <p className="text-gray-500 text-sm mb-6">Every restaurant is included in your fare. You book your reservations ahead of time through the Sailor app and show up ready to eat.</p>

            {[
              { name: "The Wake", type: "Steakhouse", description: "Located at the stern of the ship with panoramic ocean views. The Wake is the upscale steakhouse experience on Virgin Voyages. Think dry aged cuts, a wine list, and a dinner that feels like a proper occasion. This one books up fast so reserve it early in the Sailor app." },
              { name: "Razzle Dazzle", type: "Vegetarian Forward", description: "Do not let the name throw you. Razzle Dazzle is a fun, colorful spot with a plant-forward menu that also has meat options. The brunch here is one of the most talked about meals on the ship. The eggs benedict and the bar cart that comes around make it a must." },
              { name: "Pink Agave", type: "Elevated Mexican", description: "This is not cruise ship Mexican food. Pink Agave is a serious upscale Mexican restaurant with craft cocktails and a menu that goes beyond tacos and burritos. Real chiles, real technique, and a festive atmosphere." },
              { name: "Test Kitchen", type: "Chef's Tasting Experience", description: "One of the more unique dining experiences at sea. Test Kitchen runs as a multi-course chef's tasting menu where each course is paired with a drink. The whole table participates together and it turns dinner into more of a shared event. Seats are limited so book it as soon as reservations open." },
              { name: "The Galley", type: "All-Day Casual", description: "Your casual, grab-and-go option available all day. Breakfast in the morning, sandwiches and quick bites during the day, and lighter fare in the evening." },
              { name: "Extra Virgin", type: "Italian Pasta Bar", description: "A cozy, intimate Italian restaurant that feels like a real neighborhood spot. Handmade pasta, simple sauces done right, and a wine selection that pairs well with everything. One of the favorites on the ship." },
              { name: "Gunbae", type: "Korean BBQ", description: "Korean BBQ right at your table. You cook your own meats over a tabletop grill, and the experience is as much about the fun as the food. Gunbae also has soju flights and a high-energy vibe that makes it great for a group dinner." },
              { name: "Noodle Around", type: "Pan Asian", description: "Casual Asian noodle dishes available during lunch. Think ramen, noodle soups, and bao. A quick, satisfying option when you want something light and flavorful between ports." },
              { name: "The Pizza Place", type: "Late Night Pizza", description: "Open late for when you need something after a night out. Simple, solid pizza by the slice. Exactly what it sounds like and exactly what you need at midnight." },
            ].map((r) => (
              <Accordion key={r.name} title={`${r.name} · ${r.type}`}><p>{r.description}</p></Accordion>
            ))}

            <p className="mt-6 text-xs text-gray-500 italic">Restaurant availability can vary slightly by ship. Brilliant Lady has an additional dining concept not available on other ships.</p>
          </section>
        )}

        {/* BARS */}
        {activeTab === "bars" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Bars and Lounges</h2>
            <p className="text-gray-500 text-sm mb-6">The bar program on Virgin Voyages is one of the best at sea. Every bar has its own identity, its own menu, and its own vibe.</p>

            {[
              { name: "Voyage Vinyl", vibe: "Record Bar", description: "A record store turned cocktail bar. Voyage Vinyl has an actual vinyl collection, great acoustics, and a cocktail menu built around music themes. It is one of the coolest bars at sea and tends to become a go-to for people who find it early in the sailing." },
              { name: "The Dock", vibe: "Outdoor Stern Bar", description: "Located at the very back of the ship on the lower deck. The Dock has an open-air swim platform, sun loungers, and a bar with easy tropical drinks. It is the most laid-back spot on the ship and one of the best places to watch the ocean go by." },
              { name: "On the Rocks", vibe: "Cocktail Lounge", description: "A classic craft cocktail bar with a menu built around proper technique. If you are someone who enjoys a well-made drink more than a frozen one, this is your spot. Great bartenders and a quieter atmosphere than some of the other bars." },
              { name: "The Manor Bar", vibe: "Nightclub Adjacent", description: "The bar inside The Manor, which is the main entertainment and nightclub space on the ship. Busy at night but a cool hang during the day when it is quieter. The Manor comes alive late and runs events and themed nights throughout the sailing." },
              { name: "Richard's Rooftop", vibe: "Rooftop Pool Bar", description: "The rooftop pool area with a bar. Smaller and more intimate than the main pool deck. Limited loungers make it feel exclusive." },
              { name: "The Groupie", vibe: "Hot Tub Bar", description: "Hot tubs with a bar nearby. The Groupie is social and fun, and tends to be a gathering spot for people meeting other sailors. The vibe is celebratory." },
              { name: "Squid Ink", vibe: "Tattoo Studio and Social Space", description: "A real tattoo studio onboard where you can get a tattoo at sea. The bar next to it makes the whole thing a bit of a social moment. You do not have to get a tattoo to enjoy the vibe." },
            ].map((b) => (
              <Accordion key={b.name} title={`${b.name} · ${b.vibe}`}><p>{b.description}</p></Accordion>
            ))}

            <div className="mt-6 p-4 rounded-xl text-sm" style={{ background: "#FFF0F0", borderLeft: `4px solid ${VV_RED}` }}>
              Want to make your drink money go further?{" "}
              <button onClick={() => goToTab("perks")} className="vv-link font-semibold underline" style={{ color: VV_RED }}>Try the Bar Tab Optimizer</button>
            </div>
          </section>
        )}

        {/* SAILING CLUB LOYALTY */}
        {activeTab === "loyalty" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: VV_DARK }}>The Sailing Club</h2>
            <p className="text-gray-500 text-sm mb-6">Virgin Voyages rewards sailors who come back. The program is called the Sailing Club and it works differently from most cruise loyalty programs. No points. No complicated calculations. Just voyages completed.</p>

            {/* Tier Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
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
                    "One bag of laundry included",
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
                <div key={t.tier} className="vv-card rounded-xl overflow-hidden border border-gray-100">
                  <div className="px-4 py-3" style={{ background: t.color }}>
                    <p className="text-white font-bold text-sm mb-1">{t.tier}</p>
                    <p className="text-white text-xs opacity-80">{t.voyages}</p>
                  </div>
                  <div className="px-4 py-4 bg-white">
                    <ul className="space-y-2 mb-3">
                      {t.perks.map((p) => (
                        <li key={p} className="text-xs text-gray-700 flex gap-2">
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
                <li>Loyalty credit is applied 30 days after each voyage ends, not immediately.</li>
              </ul>
            </Accordion>

            <Accordion title="What Counts as an Eligible Voyage?">
              <p className="mb-3">As of October 2025, Base, Essential, and Premium fare bookings all qualify.</p>
              <p className="mb-2 font-semibold text-gray-700">Sailings that do NOT count toward your tier:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Casino comp bookings</li>
                <li>Chartered voyages</li>
                <li>Bookings made with a Status Match Access Key</li>
              </ul>
            </Accordion>

            <Accordion title="My Next Virgin Voyage (MNVV): Book Onboard and Save">
              <p className="mb-3">While you are onboard, a $150 deposit on a future sailing gets you Sailor Loot plus money off your fare, from $300 total value on 4 to 5 night sailings up to $500 on sailings of 9 nights or more.</p>
              <p>
                It works on Sea Terrace cabins or higher.{" "}
                <button onClick={() => goToTab("perks")} className="vv-link font-semibold underline" style={{ color: VV_RED }}>See the full MNVV breakdown</button>
              </p>
            </Accordion>

            <Accordion title="Status Match: Fast Track Into the Program">
              <p className="mb-3">Virgin Voyages has run a Status Match program that lets sailors with loyalty status at other cruise lines, airlines, or hotel programs get a head start in the Sailing Club. The most recent enrollment window closed in February 2026.</p>
              <p>If Virgin Voyages opens another Status Match window I will share that through my list. It is easy to miss if you are not watching for it.</p>
            </Accordion>

            <Accordion title="Virgin Red: The Broader Rewards Program">
              <p className="mb-3">Separate from the Sailing Club, Virgin Voyages is part of the Virgin Red rewards program. Virgin Red lets you earn points across multiple Virgin brands and redeem them for experiences and rewards.</p>
              <p>As a Sailing Club member, you can collect Virgin Points when you sail and redeem them through the Virgin Red app.</p>
            </Accordion>

            <div className="mt-6 p-4 rounded-xl text-white text-sm" style={{ background: `linear-gradient(135deg, ${VV_DARK}, ${VV_RED})` }}>
              <p className="font-bold mb-2" style={{ color: VV_GOLD }}>A note from Eric</p>
              <p>The Sailing Club is one of the reasons repeat Virgin Voyages sailors are so loyal. Once you hit Deep Blue Extras, the unlimited premium WiFi and priority boarding alone change the experience in a noticeable way. Reach out and I can help you figure out where you stand and what makes the most sense for your next booking.</p>
            </div>
          </section>
        )}

        {/* SOLO TRAVEL */}
        {activeTab === "solo" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Solo Travel on Virgin Voyages</h2>
            <p className="text-gray-500 text-sm mb-6">Virgin Voyages is not couples only. Solo travelers sail VV all the time and the experience is genuinely well suited for it.</p>

            <div className="p-4 rounded-xl mb-6 text-white text-sm" style={{ background: `linear-gradient(135deg, ${VV_DARK}, ${VV_RED})` }}>
              <p className="font-bold text-sm mb-2" style={{ color: VV_GOLD }}>The honest thing to know upfront</p>
              <p>Virgin Voyages does not have dedicated solo cabins like some other cruise lines. Most cabins are priced for two people, which means solo travelers typically pay a single supplement. The amount varies by cabin category and sailing. Reach out and I can check current solo pricing on any sailing you are eyeing.</p>
            </div>

            <Accordion title="Why VV Actually Works Really Well for Solo Travelers">
              <p className="mb-3">The single supplement is a real consideration, but once you are onboard the ship has a lot going for it as a solo experience. Everyone onboard is 18+, the vibe skews social and relaxed, and conversations happen naturally.</p>
              <p>There are no set dining times, so you eat when you want, do what you want, and never feel out of place doing it alone.</p>
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
                <li>Grab a Bar Tab promo when you can. It frees you up to enjoy the bar scene without watching your spending.</li>
                <li>Lock in dining reservations early in the Sailor app. The popular restaurants fill up fast.</li>
                <li>Try Test Kitchen. The communal format means you are sharing a meal with a group regardless of who you came with.</li>
                <li>Give Voyage Vinyl a real chance. Go in the evening, find a spot at the bar, and stay for more than one drink.</li>
                <li>Book shore excursions through the ship. It puts you in an organized group automatically.</li>
              </ul>
            </Accordion>
          </section>
        )}

        {/* SHORE EXCURSIONS */}
        {activeTab === "excursions" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Shore Things</h2>
            <p className="text-gray-500 text-sm mb-6">Shore Things is what Virgin Voyages calls their excursion program. You book through the Sailor app before you sail or onboard.</p>

            <div className="p-4 rounded-xl mb-6 text-sm" style={{ background: "#FFF0F0", borderLeft: `4px solid ${VV_RED}` }}>
              <p className="font-semibold mb-1">Two things to know before you book excursions:</p>
              <p className="mb-2">Book before the cruise. Prices are lower and your spot is guaranteed. Once you are onboard, popular excursions sell out.</p>
              <p>Book through the ship rather than independently. If your ship excursion runs long, the ship waits for you. If you are on your own and running late, the ship leaves without you.</p>
            </div>

            {[
              { port: "Bimini, Bahamas", about: "One of the closest Bahamian islands to the US and a frequent stop on Caribbean itineraries. The water is crystal clear and the island is laid back. Virgin has a private beach club experience here that is one of the best stops on any of these sailings.", excursions: ["Beach Club at Resorts World Bimini (Virgin's private experience)", "Snorkeling with Sharks", "Bimini Road Underwater Rock Formation Tour", "Dolphin Encounter", "Deep Sea Fishing", "Jet Ski Rentals"] },
              { port: "Costa Maya, Mexico", about: "A gateway to Mayan ruins and some beautiful natural areas including the Bacalar Lagoon. The port area is touristy but venture out and the real Yucatan is stunning.", excursions: ["Chacchoben Mayan Ruins Tour", "Bacalar Lagoon Day Trip", "ATVs Through the Jungle", "Kayaking and Snorkeling in Cenotes"] },
              { port: "Cozumel, Mexico", about: "One of the world's top scuba diving and snorkeling destinations. The reef system here is part of the Mesoamerican Barrier Reef. Even if you do not dive, snorkeling here is spectacular.", excursions: ["Scuba Diving at Palancar Reef", "Snorkel with Turtles", "Catamaran Sail and Snorkel", "Swim with Dolphins", "Dune Buggy Tour through the Island"] },
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
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Trip Insurance</h2>
            <p className="text-gray-500 text-sm mb-6">I always suggest trip insurance when booking a cruise. Travel puts you in situations where things can go sideways in ways that have nothing to do with the cruise line.</p>

            <div className="p-4 rounded-xl mb-6 text-white text-sm" style={{ background: VV_RED }}>
              <strong>One thing to know right now:</strong> Trip insurance is almost always cheaper when you buy it at the time of booking. Lock it in early.
            </div>

            <Accordion title="What If You Get Sick Before You Leave?">
              <p className="mb-3">You have been planning this trip for months. Two days before departure you end up in urgent care. Without insurance, you lose every dollar you spent on the cruise because the cancellation deadline has passed.</p>
              <p>With trip insurance, a covered illness before departure lets you cancel and get reimbursed.</p>
            </Accordion>

            <Accordion title="What If Someone in Your Family Has an Emergency?">
              <p>Trip insurance covers trip cancellation for family medical emergencies so you can be where you need to be without the financial pain on top of everything else.</p>
            </Accordion>

            <Accordion title="What If You Get Sick or Hurt at Sea or in Another Country?">
              <p className="mb-3">Your regular health insurance often does not cover you outside the United States. A medical evacuation from a ship or from a foreign port can cost tens of thousands of dollars out of pocket.</p>
              <p>Trip insurance with medical coverage and evacuation protection means you are covered for the care you need.</p>
            </Accordion>

            <Accordion title="What If Your Flight Gets Cancelled or Delayed?">
              <p>Trip delay coverage helps reimburse you for unexpected overnight stays, meals, and rebooking costs when your travel gets disrupted.</p>
            </Accordion>

            <Accordion title="Why Buy It at Booking?">
              <p className="mb-3">Insurance is cheaper at booking and most policies include a pre-existing condition coverage window that expires 14 to 21 days after your initial deposit. If you wait, that window closes.</p>
              <p>Lock it in early. You will never regret having it and you will absolutely regret not having it if something comes up.</p>
            </Accordion>
          </section>
        )}

        {/* ERIC'S TIPS */}
        {activeTab === "tips" && (
          <section>
            <h2 className="text-xl md:text-3xl font-bold mb-2" style={{ color: VV_DARK }}>Eric's Tips for Your Virgin Voyage</h2>
            <p className="text-gray-500 text-sm mb-6">I am First Mate certified with Virgin Voyages and have been on more than 20 cruises. Here is the stuff I actually tell my clients before they sail.</p>

            <Accordion title="Lock In Gratuities When You Book">
              <p>Gratuities are cheaper when you add them at the time of booking. Virgin Voyages charges gratuities as a separate line item and if you wait until you are onboard the rate goes up.</p>
            </Accordion>

            <Accordion title="Book Your Excursions Before You Sail">
              <p className="mb-3">Pre-cruise pricing on Shore Things is lower than onboard pricing. More importantly, popular excursions sell out.</p>
              <p>I can help you sort through the options for your specific ports. Reach out and we can talk through it before you book.</p>
            </Accordion>

            <Accordion title="Book Your Dining Before You Board">
              <p>The Sailor app lets you make restaurant reservations before you ever step on the ship. Do it early because The Wake and Test Kitchen fill up fast. Get them booked as soon as your booking window opens.</p>
            </Accordion>

            <Accordion title="Stack Your Bar Tab Perks">
              <p className="mb-3">A referral link, a Sea Terrace booking with me, the Premium fare, and Virgin's own promotions can add up fast. Pre-purchasing a Bar Tab also earns bonus credit.</p>
              <button onClick={() => goToTab("perks")} className="vv-link font-semibold underline" style={{ color: VV_RED }}>Use the Bar Tab Optimizer to see yours</button>
            </Accordion>

            <Accordion title="Book Your Next Voyage Before You Disembark">
              <p className="mb-3">With My Next Virgin Voyage, a $150 deposit onboard gets you up to $500 in Sailor Loot and fare savings on a future Sea Terrace or higher sailing. You get a full refund if you change your mind within 7 days.</p>
              <p>Do not get off the ship without at least looking into it.</p>
            </Accordion>

            <Accordion title="Get There Early on Embarkation Day">
              <p>Virgin Voyages staggers boarding by check-in time. The earlier your assigned time, the sooner you get on the ship. Build a little buffer on embarkation day and do not cut it close.</p>
            </Accordion>

            <Accordion title="Richard's Rooftop Is the Hidden Gem">
              <p>Most people find the main pool deck on day one and never go looking for anything else. Richard's Rooftop is the pool area on the top deck and it tends to be significantly quieter. Get there early and you will likely have it almost to yourself.</p>
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
        <div className="mt-10 rounded-2xl p-5 md:p-8 text-center text-white" style={{ background: `linear-gradient(135deg, ${VV_DARK}, ${VV_RED})` }}>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: VV_GOLD }}>Ready to Sail</p>
          <h3 className="text-lg md:text-2xl font-bold mb-3">Let's Get You on the Ship</h3>
          <p className="text-red-100 text-sm mb-6 max-w-lg mx-auto">
            Two easy ways to book. Browse sailings and book on your own through my link, or reach out and I will find the right sailing for you. Either way, there is no planning fee and I am in your corner.
          </p>

          <div className="grid md:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
            <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)" }}>
              <p className="font-bold text-sm mb-1">Book on your own</p>
              <p className="text-xs text-red-100 mb-3">Search live sailings and prices, then book right on Virgin's site.</p>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="vv-btn block text-center px-4 py-3 rounded-lg font-bold text-sm border border-transparent"
                style={{ background: VV_GOLD, color: VV_DARK }}
              >
                Browse Sailings
              </a>
            </div>
            <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)" }}>
              <p className="font-bold text-sm mb-1">Let Eric help</p>
              <p className="text-xs text-red-100 mb-3">Tell me what you want and I will find the best sailing and perks.</p>
              <div className="flex gap-2">
                <a href="sms:6308231253" className="vv-btn flex-1 text-center px-3 py-3 rounded-lg font-bold text-sm border border-white/40">Text Eric</a>
                <a href="mailto:eric@happydetour.com" className="vv-btn flex-1 text-center px-3 py-3 rounded-lg font-bold text-sm border border-white/40">Email Eric</a>
              </div>
            </div>
          </div>

          <p className="mt-5 text-xs text-red-300">
            Booking through my link connects your reservation to Happy Detour Travel, so I can help if anything comes up.
          </p>
        </div>
      </div>

    </div>
  );
}
