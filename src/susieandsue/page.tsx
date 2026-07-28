import { useEffect, useState } from "react";

/**
 * Italy, Greece & Ireland: Susie & Sue's Detour
 * Route: happydetour.com/susie
 *
 * Drop this file into your happydetour-v2 project (e.g. src/pages/susieandsue.tsx)
 * and wire it up to the /susie route. No header, footer only, matching the Cheri page.
 *
 * Design: plain white throughout. The only color on the page is each
 * destination name and its small marker dot. Everything else (text,
 * borders, buttons, footer) stays black, gray, or white.
 *
 * PLACEHOLDER PHOTOS: every image block below is a labeled placeholder <div>.
 * Swap each one out for a real <img src="..." /> when you have photos ready.
 * Search "PLACEHOLDER" to find every spot.
 *
 * Fonts: this assumes "Fraunces" (display) and "Inter" (body) are already
 * loaded in your project (e.g. via index.html or a Google Fonts import).
 * If not, add:
 * <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
 */

const DEPARTURE_DATE = new Date("2026-09-12T00:00:00");
const RETURN_DATE = new Date("2026-09-25T23:59:59");
const AGENT_PHONE = "6308231253";
const AGENT_EMAIL = "eric@happydetour.com";
const TRAVELJOY_URL = "https://www.traveljoy.com/"; // TODO: replace with Susie & Sue's exact TravelJoy trip link

type Leg = {
  id: string;
  region: "puglia" | "corfu" | "dublin";
  place: string;
  dates: string;
  hotel: string;
  detail: string;
  note?: string;
  address?: string;
  phone?: string;
  image?: string;
};

const legs: Leg[] = [
  {
    id: "bari-1",
    region: "puglia",
    place: "Bari",
    dates: "Sep 13 to 14",
    hotel: "Mercure Villa Romanazzi Carducci",
    detail: "1 night, arrival in Puglia",
    address: "Via Giuseppe Capruzzi 326, 70124 Bari BA, Italy",
    phone: "+39 080 918 4704",
    image: "/images/susieandsue/mercure.jpg",
  },
  {
    id: "car",
    region: "puglia",
    place: "Bari Airport",
    dates: "Sep 13 to 18",
    hotel: "Rental car, Opel Astra Automatic or similar",
    detail: "Picked up and returned at Bari Airport, SurPrice Car Rentals",
    address: "Viale Enzo Ferrari, 70128 Bari BA, Italy",
    phone: "+39 346 374 9303",
    image: "/images/susieandsue/sunprice.webp",
  },
  {
    id: "amalfi",
    region: "puglia",
    place: "Amalfi Coast",
    dates: "Sep 14 to 16",
    hotel: "La Perla",
    detail: "2 nights along the Amalfi Coast",
    address: "Via Miglina 2, 84010 Praiano (SA), Italy",
    phone: "+39 089 874052",
    image: "/images/susieandsue/laperla.webp",
  },
  {
    id: "alberobello",
    region: "puglia",
    place: "Alberobello",
    dates: "Sep 16 to 18",
    hotel: "Trulli BB Alberobello",
    detail: "2 nights among the trulli, Puglia's whitewashed, cone roofed houses",
    address: "Via Mendel 1, 70011 Alberobello, Puglia, Italy",
    image: "/images/susieandsue/trulli.jpg",
  },
  {
    id: "bari-2",
    region: "puglia",
    place: "Bari",
    dates: "Sep 18 to 19",
    hotel: "The Nicolaus Hotel",
    detail: "1 night before flying onward",
    address: "Via Cardinale Agostino Ciasca 27, 70124 Bari BA, Italy",
    phone: "+39 080 568 2111",
    image: "/images/susieandsue/nicolaus.jpg",
  },
  {
    id: "corfu",
    region: "corfu",
    place: "Corfu",
    dates: "Sep 19 to 24",
    hotel: "Blue Haven Beach Loft Apartment",
    detail: "5 nights on the Ionian Sea, sea view apartment, Palaiokastritsa",
    note: "Flight from Bari self booked by Susie & Sue",
    address: "8th Km Palaiokastritsa National Road, Corfu 49100, Greece",
    phone: "+30 2661 700718",
    image: "/images/susieandsue/bluehaven.webp",
  },
  {
    id: "dublin",
    region: "dublin",
    place: "Dublin",
    dates: "Sep 24 to 25",
    hotel: "Staying with a friend",
    detail: "A last stop in the city before flying home",
    note: "Flight from Corfu self booked by Susie & Sue",
    image: "/images/susieandsue/dublin.jpeg",
  },
];

// Each destination gets its own full color treatment: background tint,
// accent text, border, marker dot, and note chip.
const regionTheme = {
  puglia: {
    label: "Puglia, Italy",
    bg: "bg-[#FDEEE0]",
    accent: "text-[#C1502E]",
    accentBg: "bg-[#C1502E]",
    dot: "bg-[#C1502E]",
    border: "border-[#C1502E]/40",
    pin: "#C1502E",
    chip: "bg-[#C1502E] text-white",
  },
  corfu: {
    label: "Corfu, Greece",
    bg: "bg-[#DFF3F2]",
    accent: "text-[#0E7C88]",
    accentBg: "bg-[#1B98A0]",
    dot: "bg-[#1B98A0]",
    border: "border-[#1B98A0]/40",
    pin: "#1B98A0",
    chip: "bg-[#1B98A0] text-white",
  },
  dublin: {
    label: "Dublin, Ireland",
    bg: "bg-[#E3F1E7]",
    accent: "text-[#0B6E4F]",
    accentBg: "bg-[#0B6E4F]",
    dot: "bg-[#0B6E4F]",
    border: "border-[#0B6E4F]/40",
    pin: "#0B6E4F",
    chip: "bg-[#0B6E4F] text-white",
  },
} as const;

function useCountdown(target: Date) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, done: diff <= 0, now };
}

function CountdownBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-3xl md:text-4xl font-semibold text-[#1F2937] tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[11px] tracking-[0.15em] uppercase text-[#1F2937]/50">
        {label}
      </span>
    </div>
  );
}

function RouteSignature() {
  // The signature element: a hand-drawn dotted route connecting the three legs of the detour.
  // The line and pin rings stay neutral gray; only the pin fill carries each destination's color.
  return (
    <div className="w-full max-w-xl mx-auto mt-8 mb-2">
      <svg viewBox="0 0 600 90" className="w-full h-auto" fill="none">
        <path
          d="M40 60 C 140 10, 220 100, 300 45 S 460 10, 560 55"
          stroke="#1F2937"
          strokeOpacity="0.2"
          strokeWidth="2"
          strokeDasharray="1 10"
          strokeLinecap="round"
        />
        {[
          { x: 40, y: 60, color: regionTheme.puglia.pin, label: "Puglia" },
          { x: 300, y: 45, color: regionTheme.corfu.pin, label: "Corfu" },
          { x: 560, y: 55, color: regionTheme.dublin.pin, label: "Dublin" },
        ].map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="7" fill={p.color} />
            <circle cx={p.x} cy={p.y} r="11" fill={p.color} fillOpacity="0.2" />
            <text
              x={p.x}
              y={p.y + 26}
              textAnchor="middle"
              fontSize="12"
              fontFamily="Inter, sans-serif"
              fill="#1F2937"
              fillOpacity="0.55"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function LegImage({ src, label }: { src?: string; label: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        className="w-full h-48 rounded-xl object-cover"
      />
    );
  }
  return (
    <div className="w-full h-48 rounded-xl bg-[#1F2937]/5 border border-dashed border-[#1F2937]/20 flex flex-col items-center justify-center gap-1 text-center px-4">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-40">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#1F2937" strokeWidth="1.5" />
        <circle cx="8.5" cy="10" r="1.5" fill="#1F2937" />
        <path d="M3 16l5-4 4 3 4-5 5 6" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xs text-[#1F2937]/50">PLACEHOLDER PHOTO — {label}</span>
    </div>
  );
}

function LegCard({ leg }: { leg: Leg }) {
  const theme = regionTheme[leg.region];
  return (
    <div className={`rounded-2xl border-2 ${theme.border} bg-white p-5 flex flex-col gap-3 shadow-sm`}>
      <LegImage src={leg.image} label={leg.hotel} />
      <div className="flex items-center justify-between gap-3">
        <h3 className={`font-['Fraunces'] text-xl font-semibold ${theme.accent}`}>{leg.place}</h3>
        <span className="font-mono text-xs px-2 py-1 rounded-full bg-[#1F2937]/5 text-[#1F2937]/70 whitespace-nowrap">
          {leg.dates}
        </span>
      </div>
      <p className="text-sm font-medium text-[#1F2937]">{leg.hotel}</p>
      <p className="text-sm text-[#1F2937]/70">{leg.detail}</p>
      {(leg.address || leg.phone) && (
        <div className="text-xs text-[#1F2937]/50 leading-relaxed border-t border-[#1F2937]/10 pt-3">
          {leg.address && <p>{leg.address}</p>}
          {leg.phone && <p>{leg.phone}</p>}
        </div>
      )}
      {leg.note && (
        <span className={`self-start text-[11px] px-2 py-1 rounded-full ${theme.chip}`}>
          {leg.note}
        </span>
      )}
    </div>
  );
}

function RegionSection({ region }: { region: keyof typeof regionTheme }) {
  const theme = regionTheme[region];
  const items = legs.filter((l) => l.region === region);
  return (
    <section className={`${theme.bg} py-14 px-6`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className={`w-3 h-3 rounded-full ${theme.dot}`} />
          <h2 className={`font-['Fraunces'] text-2xl md:text-3xl font-semibold ${theme.accent}`}>
            {theme.label}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((leg) => (
            <LegCard key={leg.id} leg={leg} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SusieAndSue() {
  const { days, hours, minutes, seconds, done, now } = useCountdown(DEPARTURE_DATE);
  const tripInProgress = done && now < RETURN_DATE;
  const tripComplete = now >= RETURN_DATE;

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* HERO — no header/nav, per the Cheri page pattern */}
      <section className="relative overflow-hidden pt-16 pb-10 px-6 bg-gradient-to-br from-[#FDEEE0] via-[#DFF3F2] to-[#E3F1E7]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-xs text-[#007298] font-semibold mb-4">
            Happy Detour Travel
          </p>
          <h1 className="font-['Fraunces'] text-4xl md:text-5xl font-semibold leading-tight text-[#1F2937]">
            Italy, Greece &amp; Ireland
          </h1>
          <p className="font-['Fraunces'] italic text-2xl md:text-3xl text-[#1F2937]/70 mt-2">
            Susie &amp; Sue's Detour
          </p>

          <RouteSignature />

          {/* Countdown */}
          <div className="mt-8 inline-flex flex-col items-center bg-white/80 backdrop-blur rounded-2xl px-8 py-6 border border-[#1F2937]/10 shadow-sm">
            {tripComplete ? (
              <p className="font-['Fraunces'] text-xl text-[#1F2937]">
                What a trip. Welcome home, Susie &amp; Sue.
              </p>
            ) : tripInProgress ? (
              <p className="font-['Fraunces'] text-xl text-[#1F2937]">
                Susie &amp; Sue are on their detour right now.
              </p>
            ) : (
              <>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#1F2937]/50 mb-3">
                  Departing MCO in
                </p>
                <div className="flex items-center gap-5 md:gap-8">
                  <CountdownBlock label="Days" value={days} />
                  <CountdownBlock label="Hours" value={hours} />
                  <CountdownBlock label="Min" value={minutes} />
                  <CountdownBlock label="Sec" value={seconds} />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* WELCOME NOTE */}
      <section className="px-6 py-14 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-['Fraunces'] text-2xl text-[#1F2937] leading-snug">
            Susie and Sue, thank you for trusting me with this trip.
          </p>
          <p className="mt-5 text-[#1F2937]/75 leading-relaxed">
            From the whitewashed trulli of Alberobello, to the cliffs along the Amalfi Coast,
            to the blue water of Corfu, and one last night in Dublin before you head home,
            this whole journey came together because you were both open to something a
            little different. I am so grateful to be part of it.
          </p>
          <p className="mt-4 text-[#1F2937]/75 leading-relaxed">
            Everything below is booked and ready. All you have to do now is pack, relax,
            and enjoy every minute. If you need anything while you're away, your full trip
            is in TravelJoy, and I am always just a text or call away.
          </p>
          <p className="mt-4 font-['Fraunces'] italic text-lg text-[#1F2937]">
            Have the best trip. You two earned it.
          </p>
          <p className="mt-6 text-sm text-[#1F2937]/50">Eric</p>

          <a
            href={TRAVELJOY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-6 py-3 rounded-full bg-[#007298] text-white text-sm font-medium hover:bg-[#00597a] transition-colors shadow-sm"
          >
            View your trip in TravelJoy
          </a>
        </div>
      </section>

      {/* ITINERARY, grouped by region */}
      <RegionSection region="puglia" />
      <RegionSection region="corfu" />
      <RegionSection region="dublin" />

      {/* FOOTER ONLY, no site header/nav on this page */}
      <footer className="bg-[#1F2937] text-white/80 px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-['Fraunces'] text-lg text-white">Happy Detour Travel</p>
            <p className="text-sm text-white/50 mt-1">
              Real trips. Real value. Someone actually in your corner.
            </p>
          </div>

          {/* Contact dropdown pattern: text or email, no forms */}
          <div className="flex gap-3">
            <a
              href={`sms:${AGENT_PHONE}`}
              className="px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white/10 transition-colors"
            >
              Text Eric
            </a>
            <a
              href={`mailto:${AGENT_EMAIL}`}
              className="px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white/10 transition-colors"
            >
              Email Eric
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-white/30 mt-8">
          Happy Detour Travel, Northeast, Ohio
        </p>
      </footer>
    </div>
  );
}
