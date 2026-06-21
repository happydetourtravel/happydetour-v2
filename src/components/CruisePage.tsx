import { useState } from "react";

interface Day {
  day: number;
  port: string;
  description?: string;
}

interface Cabin {
  type: string;
  price: string;
  note?: string;
}

interface CruisePageProps {
  title: string;
  image: string;
  date: string;
  nights: number;
  ship: string;
  port: string;
  price: string;
  originalPrice?: string;
  bookingLink: string;
  days: Day[];
  cabins: Cabin[];
}

export default function CruisePage({
  title,
  image,
  date,
  nights,
  ship,
  port,
  price,
  originalPrice,
  bookingLink,
  days,
  cabins,
}: CruisePageProps) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 font-sans text-gray-800">

      <img src={image} alt={title} className="w-full rounded-xl mb-6 object-cover max-h-72" />
      <h1 className="text-3xl font-bold mb-1">{title}</h1>
      <p className="text-gray-500 mb-6">{date} · {nights} nights · {ship} · Departs {port}</p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-gray-500 mb-1">Starting from</p>
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold text-blue-700">{price}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-lg">{originalPrice}</span>
          )}
        </div>
        <p className="text-xs text-gray-400 mt-1">per person, double occupancy</p>
      </div>

      <h2 className="text-xl font-semibold mb-3">Cabin Options</h2>
      <div className="grid gap-3 mb-10">
        {cabins.map((cabin, i) => (
          <div key={i} className="flex justify-between items-center border rounded-lg px-4 py-3">
            <div>
              <p className="font-medium">{cabin.type}</p>
              {cabin.note && <p className="text-sm text-gray-400">{cabin.note}</p>}
            </div>
            <span className="font-bold text-blue-700">{cabin.price}</span>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-3">Itinerary</h2>
      <div className="grid gap-3 mb-10">
        {days.map((d) => (
          <div key={d.day} className="flex gap-4 border rounded-lg px-4 py-3">
            <span className="text-blue-600 font-bold w-10 shrink-0">Day {d.day}</span>
            <div>
              <p className="font-medium">{d.port}</p>
              {d.description && <p className="text-sm text-gray-400">{d.description}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 relative">
        
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-center"
        >
          Book This Cruise
        </a>

        <div className="relative">
          <button
            onClick={() => setContactOpen(!contactOpen)}
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl w-full sm:w-auto"
          >
            Contact Eric ▾
          </button>

          {contactOpen && (
            <div className="absolute bottom-full mb-2 left-0 bg-white border rounded-xl shadow-lg overflow-hidden z-10 w-52">
              
                href="sms:7473338687"
                className="block px-5 py-3 hover:bg-gray-50 text-gray-700"
              >
                📱 Send a Text
              </a>
              
                href="mailto:eric@happydetour.com"
                className="block px-5 py-3 hover:bg-gray-50 text-gray-700"
              >
                ✉️ Send an Email
              </a>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
