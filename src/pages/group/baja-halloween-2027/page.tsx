630-823-1253// Route: /group/baja-halloween-2027
// Virgin Voyages — Brilliant Lady — Mexican Riviera Halloween Cruise — Oct 23, 2027

export default function Page() {

  const textHref = `sms:7473338687&body=${encodeURIComponent("Hi Eric, I saw the Mexican Riviera Halloween cruise on Virgin Voyages and want to know more.")}`;
  const emailHref = `mailto:eric@happydetour.com?subject=${encodeURIComponent("Mexican Riviera Halloween Cruise 2027")}&body=${encodeURIComponent("Hi Eric, I am interested in the Mexican Riviera Halloween group sailing on Brilliant Lady departing October 23, 2027. Can you send me the details?")}`;

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-start justify-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="h-1 bg-[#007298]" />

        <div className="p-6">

          <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-amber-100 text-amber-800 px-3 py-1 rounded-full mb-4">
            Group Sailing — Limited Rooms
          </span>

          <div className="rounded-xl overflow-hidden mb-4" style={{ height: '200px' }}>
            <img
              src="/brilliantlady.jpeg"
              alt="Brilliant Lady cruise ship"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          <h1 className="text-2xl font-bold text-[#1F2937] leading-snug mb-1">
            Mexican Riviera Halloween Cruise
          </h1>
          <p className="text-sm text-gray-500 mb-1">
            Virgin Voyages &middot; Brilliant Lady
          </p>
          <p className="text-sm font-semibold text-[#007298] mb-4">
            October 23–30, 2027 &middot; Los Angeles, CA
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {["Los Angeles, CA", "Cabo San Lucas", "Mazatlan", "Puerto Vallarta", "Los Angeles, CA"].map((port, i) => (
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
              { day: "Day 1", port: "Los Angeles, California", note: "Departs 5:00 PM" },
              { day: "Day 2", port: "At Sea", note: "Sailing" },
              { day: "Day 3", port: "Cabo San Lucas, Mexico", note: "1:00 PM – 8:00 PM (tender)" },
              { day: "Day 4", port: "Mazatlan, Mexico", note: "9:00 AM – 6:00 PM" },
              { day: "Day 5", port: "Puerto Vallarta, Mexico", note: "8:00 AM – 5:00 PM" },
              { day: "Day 6", port: "At Sea", note: "Sailing" },
              { day: "Day 7", port: "At Sea", note: "Sailing" },
              { day: "Day 8", port: "Los Angeles, California", note: "Arrives 6:30 AM" },
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
              { label: "Departure", value: "October 23, 2027" },
              { label: "Departs from", value: "Los Angeles, CA" },
              { label: "Length", value: "7 nights" },
              { label: "Returns", value: "October 30, 2027" },
              { label: "Ship", value: "Brilliant Lady" },
              { label: "Cruise line", value: "Virgin Voyages (Adults Only)" },
              { label: "Group cabins", value: "20 cabins — locked at today's rate" },
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
          <div className="space-y-2 mb-5">
            {[
              { type: "The Sea Terrace", price: "$1,286", note: "Best value" },
              { type: "Central Sea Terrace", price: "$1,382", note: "" },
            ].map(({ type, price, note }) => (
              <div key={type} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#1F2937] font-medium">{type}</span>
                  {note && (
                    <span className="text-xs bg-[#007298] text-white px-2 py-0.5 rounded-full">{note}</span>
                  )}
                </div>
                <span className="text-base font-bold text-[#007298]">
                  {price} <span className="text-xs font-normal text-gray-400">/ person</span>
                </span>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 text-sm text-amber-800 leading-relaxed mb-4">
            I have 20 cabins held at this rate. Virgin Voyages is adults only — no kids, no nickel and diming, every restaurant included. Text me before these go.
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Halloween on a Virgin Voyages ship sailing the Mexican Riviera is exactly what it sounds like. No kids, no dress codes, no surprise charges at dinner. Seven nights out of Los Angeles with stops in Cabo San Lucas, Mazatlan, and Puerto Vallarta. Brilliant Lady throws a Halloween party that is worth showing up for. I have a group block locked in and 20 cabins available at this rate. Once they fill that price is gone.
          </p>

          <a href={textHref} className="block w-full text-center bg-[#F59E0B] hover:bg-amber-500 text-white font-bold text-base py-3.5 rounded-xl mb-3 transition-colors">
            Text Eric to hold your spot
          </a>
          <a href={emailHref} className="block w-full text-center border-2 border-[#007298] text-[#007298] font-bold text-sm py-3 rounded-xl hover:bg-[#007298]/5 transition-colors">
            Email Eric instead
          </a>

          <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
            No forms. No pressure. I will send you the full details before anything is confirmed so there are no surprises.
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
                20+ personal cruises &middot; Virgin Voyages Gold First Mate &middot; Northeast Ohio &middot; 747-333-8687
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
