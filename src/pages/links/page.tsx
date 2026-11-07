type LinkItem = { label: string; href: string; external?: boolean }

const sections: { heading: string; links: LinkItem[] }[] = [
  {
    heading: "Start Here",
    links: [
      { label: "🏠 Back to Happy Detour Travel", href: "/" },
      { label: "✈ Start Planning My Trip", href: "https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/6E9JQLQfrQfUvS85KcGhiHE1/link", external: true },
      { label: "🗺️ Drop Your Trip Wishlist", href: "https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/dDfyxMMy8gucAddKpaipPB4Z/link", external: true },
      { label: "📝 Read Postcards, the Happy Detour Travel Blog", href: "/blog" },
    ]
  },
  {
    heading: "Virgin Voyages",
    links: [
      { label: "💃 Search & Book Virgin Voyages", href: "https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK", external: true },
      { label: "🧍 Solo Sailor Deals", href: "/solo" },
    ]
  },
  {
    heading: "Other Cruise Lines",
    links: [
      { label: "Explore NCL Sailings", href: "/cruises/norwegian" },
      { label: "Explore MSC Cruises", href: "/cruises/msc" },
      { label: "See Royal Caribbean Ships", href: "/cruises/royal-caribbean" },
      { label: "View Carnival Sailings", href: "/cruises/carnival" },
    ]
  },
  {
    heading: "Group Sailings",
    links: [
      { label: "🎃 Halloween Transatlantic on Scarlet Lady", href: "/group/transatlantic-10-2027" },
    ]
  },
  {
    heading: "Follow Along",
    links: [
      { label: "👥 Join the So Much to Sea Group", href: "https://www.facebook.com/groups/somuchtosea", external: true },
      { label: "📸 Instagram", href: "https://www.instagram.com/happydetourtravel", external: true },
      { label: "📘 Facebook", href: "https://www.facebook.com/happydetourtravel", external: true },
      { label: "🎵 TikTok", href: "https://www.tiktok.com/@happydetourtravel", external: true },
    ]
  },
  {
    heading: "Get In Touch",
    links: [
      { label: "💬 Text Eric", href: "sms:6308231253" },
      { label: "✉️ Email Eric", href: "mailto:eric@happydetour.com" },
    ]
  },
]

export default function Links() {
  return (
    <main className="bg-[#F9FAFB] min-h-screen">

      {/* Header */}
      <div className="bg-[#007298] px-5 py-12 sm:px-6 sm:py-16 text-center">
        <p className="text-white/75 text-xs font-bold tracking-[2px] uppercase mb-3">
          Happy Detour Travel
        </p>
        <h1 className="text-white text-3xl sm:text-[42px] font-extrabold leading-tight mb-4">
          Everything in one place.
        </h1>
        <p className="text-white/80 text-base leading-relaxed max-w-[520px] mx-auto">
          Find your way to a cruise, a group sailing, or just me. Whatever you need, it's right here.
        </p>
      </div>

      {/* Links List */}
      <div className="max-w-[600px] mx-auto px-4 py-10 sm:px-6 sm:py-16">
        {sections.map((section) => (
          <div key={section.heading} className="mb-8 sm:mb-10">
            <p className="text-[#9CA3AF] text-[11px] font-bold tracking-[1.5px] uppercase mb-3 ml-1">
              {section.heading}
            </p>
            <div className="flex flex-col gap-2.5">
              {section.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="block bg-white rounded-xl border border-[#E5E7EB] px-5 py-4 sm:py-[18px] text-center no-underline text-[#1F2937] text-[15px] font-semibold leading-snug transition duration-150 hover:border-[#F59E0B] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007298] focus-visible:ring-offset-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Footer note */}
        <p className="text-center text-[#9CA3AF] text-[13px] mt-4">
          Real trips. Real value. Someone actually in your corner.
        </p>
      </div>

    </main>
  )
}
