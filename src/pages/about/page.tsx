export default function About() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased">
      
      {/* Hero Section */}
      <section className="bg-brand-blue relative overflow-hidden text-center py-20 px-6 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.06)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(245,158,11,0.12)_0%,transparent_50%)] text-white">
        <div className="inline-block bg-amber-500/20 border border-amber-500/35 text-brand-amber text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          About Happy Detour Travel
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          The Anti Second Job.
        </h1>
        <p className="text-lg text-sky-200 max-w-lg mx-auto font-medium italic">
          Real trips. Real value. Someone actually in your corner.
        </p>
      </section>

      {/* Story & Intro Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            
            {/* Left/Main Column - Story */}
            <div className="md:col-span-2 space-y-5">
              <p className="text-xs font-bold tracking-widest uppercase text-brand-amber">My Story</p>
              <h2 className="text-3xl font-extrabold text-brand-blue tracking-tight leading-snug">
                Hi, I am Eric. I am here to make travel simple.
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For as long as I can remember, definitely since at least 2017, I have been that guy in the group chat. I was the one finding the weirdly good flight deals, obsessing over cruise deck plans, and basically acting as an unpaid travel advisor for my friends and family just for the fun of it. I did not do it for the thanks. I did it because I genuinely love the puzzle of a perfect itinerary.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Eventually, the hints from everyone I knew became too loud to ignore: Eric, you are already doing the work. You should actually do this for real.
              </p>
              <p className="text-gray-700 leading-relaxed">
                So, I listened. Happy Detour Travel started as a late night idea in late 2025 and officially came to life in March of 2026. I will be the first to tell you that I am still building this dream. There is a learning curve, and some days I am leaning on a lot of Dunkin iced coffee, a few Coke Zeros, and a healthy dose of determination to figure out the technical side of things from my home base in Ohio. But I am working through it every single day to build a travel brand that is vibrant, fun, and something I am proud of.
              </p>
              
              {/* Pull Quote */}
              <div className="bg-brand-blue text-white rounded-2xl p-8 my-8 relative shadow-md">
                <span className="absolute -top-3 left-5 text-7xl text-brand-amber/40 font-serif select-none">“</span>
                <p className="text-lg font-semibold italic pl-4 mb-2 relative z-10">
                  Sometimes the best journeys begin with a Happy Detour.
                </p>
                <span className="text-xs text-sky-200/80 pl-4 block">Eric Carney, Happy Detour Travel</span>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="w-full flex justify-center md:justify-end">
              <img 
                src="/IMG_2781.jpeg" 
                alt="Eric Carney, travel advisor at Happy Detour Travel" 
                className="w-64 h-80 object-cover object-top rounded-2xl shadow-xl ring-8 ring-white ring-offset-2 ring-offset-sky-100"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Cruiser Section */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-amber">Where I have Been</p>
          <h2 className="text-3xl font-extrabold text-brand-blue tracking-tight">A Cruiser at Heart</h2>
          <p className="text-gray-700 leading-relaxed">
            I believe the world is far too big to stay in one spot. You only live once and most of us do not see nearly enough of what is out there. I am a cruiser at heart. I love that the biggest decision of the day is which pool deck to lounge on. But I have also spent time navigating London and getting lost in the absolute bliss of Caribbean resorts where everything is included. One trip is never enough. There is always more to see.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Right now, I am deep in the weeds researching a safari in Tanzania. It is a major bucket list item, and I am going to make it happen soon.
          </p>
          
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="bg-brand-blue text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">🚢 Cruises</span>
            <span className="bg-brand-blue text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">🏖️ All Inclusives</span>
            <span className="bg-brand-blue text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">🏰 London</span>
            <span className="bg-brand-blue text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">🗼 Tokyo</span>
            <span className="bg-amber-100 text-amber-800 border border-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">🦁 Tanzania (coming soon)</span>
          </div>
        </div>
      </section>

      {/* How We Work Together Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-amber">How We Work Together</p>
          <h2 className="text-3xl font-extrabold text-brand-blue tracking-tight">Travel planning is a conversation, not a transaction.</h2>
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-8 space-y-4 shadow-sm">
            <p className="text-sky-900 leading-relaxed">
              I am not a magician, and I am probably not going to hit the perfect trip on the very first try. But that is okay. That is not how good travel planning works anyway.
            </p>
            <p className="text-sky-900 leading-relaxed">
              You will still be doing the fun research, scoping out excursions and dreaming about the views, while I handle the tedious parts. Think of me as your filter. You tell me what you are looking for, and I do the deep dive research, check the logistics, and navigate the bookings. We will go back and forth until the itinerary feels exactly right.
            </p>
            <p className="font-bold text-brand-blue pt-2">No pressure. No sales tactics. Just honest teamwork.</p>
          </div>
        </div>
      </section>

      {/* Why Trust Me (E-E-A-T) Section */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-amber mb-2">Why Trust Me</p>
            <h2 className="text-3xl font-extrabold text-brand-blue tracking-tight">What I bring to every trip I help plan.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-gray-50 border border-gray-200 border-t-4 border-t-brand-blue rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-brand-blue">
                <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-brand-blue uppercase block mb-1">Experience</span>
              <h4 className="text-base font-bold text-gray-900 mb-2">I Have Been There</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Scouting Caribbean resorts, navigating London, and planning cruise decks since 2017.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 border border-gray-200 border-t-4 border-t-brand-blue rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-brand-blue">
                <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-brand-blue uppercase block mb-1">Expertise</span>
              <h4 className="text-base font-bold text-gray-900 mb-2">I Do the Homework</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Proud member of the WorldVia Travel Network, staying current on deals and destinations.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 border border-gray-200 border-t-4 border-t-brand-blue rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-brand-blue">
                <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-brand-blue uppercase block mb-1">Authoritativeness</span>
              <h4 className="text-base font-bold text-gray-900 mb-2">Your Personal Filter</h4>
              <p className="text-xs text-gray-500 leading-relaxed">I cut through 50 open tabs and sponsored reviews to give you the straight facts.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 border border-gray-200 border-t-4 border-t-brand-blue rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-brand-blue">
                <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-brand-blue uppercase block mb-1">Trustworthiness</span>
              <h4 className="text-base font-bold text-gray-900 mb-2">Transparent & Honest</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Commission-backed by providers. Custom planning options available. We talk numbers up front.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Vitals Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-bold tracking-widest uppercase text-brand-amber mb-4">A Little More About Me</p>
          <h2 className="text-3xl font-extrabold text-brand-blue tracking-tight mb-6">The quick version.</h2>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-sky-200 transition-colors">
              <span className="text-2xl select-none">☕</span>
              <div className="text-sm text-gray-700">
                <strong className="text-gray-900 font-bold">Fuel of Choice:</strong> Dunkin Iced Coffee and Coke Zero.
              </div>
            </li>
            <li className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-sky-200 transition-colors">
              <span className="text-2xl select-none">🦁</span>
              <div className="text-sm text-gray-700">
                <strong className="text-gray-900 font-bold">Current Mission:</strong> The Tanzania Safari.
              </div>
            </li>
            <li className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-sky-200 transition-colors">
              <span className="text-2xl select-none">💻</span>
              <div className="text-sm text-gray-700">
                Built by hand on a Citrus MacBook from Ohio, with love.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="bg-brand-blue relative overflow-hidden text-center py-20 px-6 text-white bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_60%)]">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Ready to go somewhere amazing?</h2>
        <p className="text-sky-100/80 max-w-sm mx-auto mb-8 text-sm">
          Let us figure out where that is. No pressure, no commitment. Just a real conversation about your next trip.
        </p>
        <a 
          href="https://forgehq.app/f/?s=yozjm6l0" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 bg-brand-amber hover:bg-amber-600 text-white font-bold px-10 py-3.5 rounded-full shadow-[0_4px_16px_rgba(245,158,11,0.35)] hover:scale-105 transition-all"
        >
          ✈️ Start Planning My Trip
        </a>
        <p className="mt-4 text-xs text-white/45">No pressure. Everyone welcome.</p>
        <a 
          href="https://www.instagram.com/happydetourtravel/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-3 text-xs text-white/50 hover:text-brand-amber transition-colors"
        >
          @happydetourtravel
        </a>
      </section>

    </div>
  )
}
