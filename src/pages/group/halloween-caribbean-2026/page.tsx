// GroupCruiseLanding-HalloweenCaribbean.tsx
// Route suggestion: /group/halloween-caribbean-2026
// Carnival Magic — Halloween Eastern Caribbean — Oct 31, 2026

export default function HalloweenCaribbeanLanding() {

  const textHref = `sms:7473338687&body=${encodeURIComponent("Hi Eric, I saw the Halloween Caribbean cruise and want to know more.")}`;
  const emailHref = `mailto:eric@happydetour.com?subject=${encodeURIComponent("Halloween Caribbean Cruise")}&body=${encodeURIComponent("Hi Eric, I am interested in the Halloween Eastern Caribbean group sailing on October 31. Can you send me the details?")}`;

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-start justify-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Top accent bar */}
        <div className="h-1 bg-[#007298]" />

        <div className="p-6">

          {/* Badge */}
          <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-amber-100 text-amber-800 px-3 py-1 rounded-full mb-4">
            Group Sailing — Limited Rooms
          </span>

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#1F2937] leading-snug mb-1">
            Halloween Eastern Caribbean Cruise
          </h1>
          <p className="text-sm text-gray-500 mb-1">
            Carnival Cruise Line &middot; Carnival Magic
          </p>
          <p className="text-sm font-semibold text-[#007298] mb-4">
            Departs Halloween Night — October 31, 2026
          </p>

          {/* Ports */}
          <div className="flex flex-wrap gap-2 mb-5">
            {["Miami, FL", "Half Moon Cay", "San Juan", "St. Maarten", "St. Thomas"].map((port) => (
              <span
                key={port}
                className="text-xs bg-gray-50 border border-gray-100 text-gray-500 px-3 py-1 rounded-full"
              >
                {port}
              </span>
            ))}
          </div>

          <hr className="border-gray-100 mb-4" />

          {/* Details */}
          <div className="space-y-2 mb-5">
            {[
              { label: "Departure", value: "October 31, 2026 (Halloween)" },
              { label: "Departs from", value: "Miami, FL" },
              { label: "Length", value: "8 nights" },
              { label: "Returns", value: "November 8, 2026" },
              { label: "Group cabins", value: "Limited — locked at today's rate" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-gray-500">{label}</span>
                <span className="font-semibold text-[#1F2937] text-right max-w-[55%]">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <hr className="border-gray-100 mb-4" />

          {/* Cabin options */}
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Cabin options
          </p>
          <div className="space-y-2 mb-5">
            {[
              { type: "Interior", price: "$643", note: "Best value" },
              { type: "Oceanview", price: "$768", note: "" },
              { type: "Balcony", price: "$1,028", note: "" },
            ].map(({ type, price, note }) => (
              <div
                key={type}
                className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#1F2937] font-medium">{type}</span>
                  {note && (
                    <span className="text-xs bg-[#007298] text-white px-2 py-0.5 rounded-full">
                      {note}
                    </span>
                  )}
                </div>
                <span className="text-base font-bold text-[#007298]">
                  {price} <span className="text-xs font-normal text-gray-400">/ person</span>
                </span>
              </div>
            ))}
          </div>

          {/* Urgency */}
          <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-sm text-amber-800 leading-relaxed mb-4">
            I have a small block of rooms held at this price. Once they fill up I cannot guarantee this rate or availability. Text me before you lose it.
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Instead of handing out candy in the cold this Halloween, you could be boarding a ship in Miami. Eight nights, four island stops including Half Moon Cay, San Juan, St. Maarten, and St. Thomas. Carnival does Halloween right on the ship too — costume contests, deck parties, themed events. This is a group sailing and I have rooms held at today's pricing. Prices go up as the ship fills.
          </p>

          {/* CTAs */}
          <a
            href={textHref}
            className="block w-full text-center bg-[#F59E0B] hover:bg-amber-500 text-white font-bold text-base py-3.5 rounded-xl mb-3 transition-colors"
          >
            Text Eric to hold your spot
          </a>
          <a
            href={emailHref}
            className="block w-full text-center border-2 border-[#007298] text-[#007298] font-bold text-sm py-3 rounded-xl hover:bg-[#007298]/5 transition-colors"
          >
            Email Eric instead
          </a>

          <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
            No forms. No pressure. I will send you the full details before anything is confirmed so there are no surprises.
          </p>

          {/* Trust footer */}
          <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#007298] flex items-center justify-center text-white text-sm font-bold shrink-0">
              EC
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1F2937]">
                Eric Carney &middot; Happy Detour Travel
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                20+ personal cruises &middot; Carnival VIFP Member &middot; Northeast Ohio &middot; 747-333-8687
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
