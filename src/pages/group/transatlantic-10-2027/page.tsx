// Route: /group/transatlantic-10-2027
// Virgin Voyages — Scarlet Lady — Halloween Transatlantic from Spain — Oct 31, 2027
// Group sailing: booked by Eric into the group block. Main button sends people to join (free) first.

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Page() {
  const [showBanner, setShowBanner] = useState(true)

  const textHref = `sms:6308231253?body=${encodeURIComponent("Hi Eric, I saw the Halloween Transatlantic from Spain group sailing on Virgin Voyages and have a question.")}`;

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center py-10 px-4">

      {/* Halloween banner */}
      {showBanner && (
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-sm mb-6">
          <img
            src="/halloween-voyage.jpg"
            alt="Halloween Voyage with Virgin Voyages"
            onError={() => setShowBanner(false)}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      )}

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="h-1 bg-[#007298]" />

        <div className="p-6">

          <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-amber-100 text-amber-800 px-3 py-1 rounded-full mb-4">
            Group Sailing — Members Get First Dibs
          </span>

          <h1 className="text-2xl font-bold text-[#1F2937] leading-snug mb-1">
            Halloween Transatlantic from Spain
          </h1>
          <p className="text-sm text-gray-500 mb-1">
            Virgin Voyages &middot; Scarlet Lady
          </p>
          <p className="text-sm font-semibold text-[#007298] mb-4">
            October 31 – November 12, 2027 &middot; Barcelona to San Juan
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {["Barcelona, Spain", "Tangier, Morocco", "Lanzarote, Canary Islands", "San Juan, Puerto Rico"].map((port, i) => (
              <span key={i} className="text-xs bg-gray-50 border border-gray-100 text-gray-500 px-3 py-1 rounded-full">
                {port}
              </span>
            ))}
          </div>

          <hr className="border-gray-100 mb-4" />

          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Sailing Itinerary
          </p>
          <div className="space-y-3 mb-5">
            {[
              { day: "Day 1", port: "Barcelona, Spain", note: "Departs 5:00 PM" },
              { day: "Day 2", port: "At Sea", note: "Sailing" },
              { day: "Day 3", port: "Tangier, Morocco", note: "8:00 AM – 8:00 PM" },
              { day: "Day 4", port: "At Sea", note: "Sailing" },
              { day: "Day 5", port: "Lanzarote, Canary Islands, Spain", note: "8:00 AM – 5:00 PM" },
              { day: "Days 6–12", port: "At Sea", note: "Atlantic crossing" },
              { day: "Day 13", port: "San Juan, Puerto Rico", note: "Arrives 6:30 AM" },
            ].map(({ day, port, note }) => (
              <div key={day} className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">{day}</p>
                  <p className="text-[#1F2937] font-medium">{port}</p>
                </div>
                <span className="text-gray-400 text-xs self-center text-right">{note}</span>
              </div>
            ))}
          </div>

          <hr className="border-gray-100 mb-4" />

          <div className="space-y-2 mb-5">
            {[
              { label: "Departure", value: "October 31, 2027" },
              { label: "Departs from", value: "Barcelona, Spain" },
              { label: "Length", value: "12 nights" },
              { label: "Returns", value: "November 12, 2027" },
              { label: "Ends in", value: "San Juan, Puerto Rico" },
              { label: "Ship", value: "Scarlet Lady" },
              { label: "Cruise line", value: "Virgin Voyages (Adults Only)" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-gray-500">{label}</span>
                <span className="font-semibold text-[#1F2937] text-right max-w-[55%]">{value}</span>
              </div>
            ))}
          </div>

          <hr className="border-gray-100 mb-4" />

          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Cabin options
          </p>
          <div className="space-y-2 mb-2">
            {[
              { type: "Insider", price: "$1,068", note: "Lowest price" },
              { type: "Sea Terrace", price: "$1,308", note: "Bar tab eligible" },
            ].map(({ type, price, note }) => (
              <div key={type} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#1F2937] font-medium">{type}</span>
                  {note && (
                    <span className="text-xs bg-[#007298] text-white px-2 py-0.5 rounded-full">{note}</span>
                  )}
                </div>
                <span className="text-base font-bold text-[#007298]">
                  from {price} <span className="text-xs font-normal text-gray-400">/ person</span>
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mb-5">
            Members see every cabin price, including RockStar suites.
          </p>

          <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-sm text-amber-800 leading-relaxed mb-4">
            🍹 HDT members get a <strong>$200 bar tab</strong> on Sea Terrace cabins and higher booked at the Essentials rate in the group. I book you into the group myself so you get it.
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Twelve nights from Barcelona to San Juan on Scarlet Lady, with Halloween at sea. Stops in Tangier and the Canary Islands, then a relaxing Atlantic crossing with plenty of sea days to meet the group. Virgin is adults only, every restaurant is included, and there are no set dining times. Join free to see all the details and grab first dibs on a group cabin.
          </p>

          <Link
            to="/join"
            className="block w-full text-center bg-[#F59E0B] hover:bg-amber-500 text-white font-bold text-base py-3.5 rounded-xl mb-3 transition-colors"
            style={{ textDecoration: 'none' }}
          >
            Join free to claim your spot
          </Link>
          <Link
            to="/login"
            className="block w-full text-center border-2 border-[#007298] text-[#007298] font-bold text-sm py-3 rounded-xl hover:bg-[#007298]/5 transition-colors"
            style={{ textDecoration: 'none' }}
          >
            Already a member? Sign in
          </Link>

          <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
            Joining is free. Group cabins are booked through me so you land in the group and get the perk.{' '}
            <a href={textHref} className="text-[#007298] font-semibold hover:text-amber-500 transition-colors">
              Questions? Text me.
            </a>
          </p>

          <p className="text-[11px] text-gray-400 text-center mt-3 leading-relaxed">
            Prices are the Lock It In rate, per person based on two sharing, with taxes and fees included. The Essentials rate is priced a little higher. Prices and the group bar tab are set by Virgin Voyages and can change at any time. I will always confirm your exact price before you book.
          </p>

          <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#007298] flex items-center justify-center text-white text-sm font-bold shrink-0">
              EC
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1F2937]">
                Eric Carney &middot; Happy Detour Travel
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                20+ personal cruises &middot; Virgin Voyages Gold First Mate &middot; Northeast Ohio &middot; 630-823-1253
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
