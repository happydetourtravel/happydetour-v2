630-823-1253export default function Page() {

  const textHref = `sms:6308231253&body=${encodeURIComponent("Hi Eric, I saw the Allure of the Seas group cruise and want to know more.")}`;
  const emailHref = `mailto:eric@happydetour.com?subject=${encodeURIComponent("Allure of the Seas Group Cruise")}&body=${encodeURIComponent("Hi Eric, I am interested in the Eastern Caribbean group sailing on Allure of the Seas departing January 10, 2027. Can you send me the details?")}`;

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

          {/* Ship image */}
          <div className="rounded-xl overflow-hidden mb-4" style={{ height: '200px' }}>
            <img
              src="/allureoftheseas.jpeg"
              alt="Allure of the Seas"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#1F2937] leading-snug mb-1">
            Eastern Caribbean on Allure of the Seas
          </h1>
          <p className="text-sm text-gray-500 mb-1">
            Royal Caribbean International &middot; Allure of the Seas
          </p>
          <p className="text-sm font-semibold text-[#007298] mb-4">
            Departs January 10, 2027 &middot; Miami, FL
          </p>

          {/* Ports */}
          <div className="flex flex-wrap gap-2 mb-5">
            {["Miami, FL", "Cozumel, Mexico", "Miami, FL"].map((port, i) => (
              <span
                key={i}
                className="text-xs bg-gray-50 border border-gray-100 text-gray-500 px-3 py-1 rounded-full"
              >
                {port}
              </span>
            ))}
          </div>

          <hr className="border-gray-100 mb-4" />

          {/* Itinerary */}
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Sailing Itinerary
          </p>
          <div className="space-y-3 mb-5">
            {[
              { date: "Sun Jan 10", port: "Miami, Florida", note: "Departs 4:00 PM" },
              { date: "Mon Jan 11", port: "At Sea", note: "Cruising" },
              { date: "Tue Jan 12", port: "Cozumel, Mexico", note: "7:00 AM – 5:00 PM" },
              { date: "Wed Jan 13", port: "At Sea", note: "Cruising" },
              { date: "Thu Jan 14", port: "Miami, Florida", note: "Arrives 6:00 AM" },
            ].map(({ date, port, note }) => (
              <div key={date} className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">{date}</p>
                  <p className="text-[#1F2937] font-medium">{port}</p>
                </div>
                <span className="text-gray-400 text-xs self-center">{note}</span>
              </div>
            ))}
          </div>

          <hr className="border-gray-100 mb-4" />

          {/* Details */}
          <div className="space-y-2 mb-5">
            {[
              { label: "Departure", value: "January 10, 2027" },
              { label: "Departs from", value: "Miami, FL" },
              { label: "Length", value: "4 nights" },
              { label: "Returns", value: "January 14, 2027" },
              { label: "Ship", value: "Allure of the Seas" },
              { label: "Group cabins", value: "Limited — locked at today's rate" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-gray-500">{label}</span>
                <span className="font-semibold text-[#1F2937] text-right max-w-[55%]">{value}</span>
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
              { type: "Interior", price: "$462", note: "Best value" },
              { type: "Ocean View", price: "$499", note: "" },
              { type: "Balcony", price: "$529", note: "" },
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
            I have a small block of rooms held at this price. Deposit is due October 12. Once they fill up I cannot guarantee this rate or availability. Text me before you lose your spot.
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Allure of the Seas is one of the biggest ships in the world and it shows. Rock climbing walls, a FlowRider surf simulator, Broadway-style shows, and more restaurants than you can get to in four nights. We stop in Cozumel, one of the best ports in the Caribbean for snorkeling, shopping, and good food. This is a group sailing and I have cabins held at today's pricing. Prices go up as the ship fills.
          </p>

          {/* CTAs */}
          <a
            href={textHref}
            className="block w-full text-center bg-[#F59E0B] text-white font-bold text-base py-3.5 rounded-xl mb-3"
          >
            Text Eric to hold your spot
          </a>
          <a
            href={emailHref}
            className="block w-full text-center border-2 border-[#007298] text-[#007298] font-bold text-sm py-3 rounded-xl"
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
                20+ personal cruises &middot; Royal Caribbean Platinum &middot; Northeast Ohio &middot; 630-823-1253
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
