// src/pages/blog/posts/what-is-included-on-a-cruise/page.tsx

export default function WhatIsIncludedOnACruise() {
  return (
    <main style={{ backgroundColor: '#F9FAFB', minHeight: '100vh', padding: '64px 24px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* Tag and Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '4px' }}>
            Cruise Tips
          </span>
          <span style={{ color: '#9CA3AF', fontSize: '12px' }}>June 2026 · 11 min read</span>
        </div>

        {/* Title */}
        <h1 style={{ color: '#1F2937', fontSize: '38px', fontWeight: '800', lineHeight: '1.2', margin: '0 0 20px 0' }}>
          What Is Actually Included on a Cruise? The Honest Answer Nobody Gives You.
        </h1>

        {/* Intro */}
        <p style={{ color: '#6B7280', fontSize: '17px', lineHeight: '1.8', margin: '0 0 36px 0', fontStyle: 'italic' }}>
          Before I booked my first cruise I assumed the price covered everything. It did not. I learned that standing at a bar on day two, watching my card get charged for a gin and tonic I thought was part of the deal. Nobody had explained it to me. This post is me explaining it to you.
        </p>

        {/* Hero Image */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '40px' }}>
          <img
            src="/blog/cruise-deck-overview.png"
            alt="Wide view of a cruise ship deck with pool and ocean in the background"
            style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
          />
          <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '8px 0 0 0', textAlign: 'center' }}>
            The pool deck looks like paradise. And it is. It is also completely included in your fare.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: '0 0 40px 0' }} />

        {/* Body */}
        <div style={{ color: '#1F2937', fontSize: '16px', lineHeight: '1.95', display: 'flex', flexDirection: 'column', gap: '28px' }}>

          <p>
            I have been on over twenty cruises. I have sailed Royal Caribbean, Norwegian, MSC, Carnival, and I have a Virgin Voyages trip coming up this fall. And in all of that time, the single most common question I get from people who have never cruised before is some version of the same thing. What am I actually paying for? What is in the price and what is going to cost me extra once I get on the ship?
          </p>

          <p>
            It is a fair question. The cruise industry is not always great at being upfront about this. The headline number looks fantastic. Four nights in the Caribbean starting at three hundred dollars per person sounds almost too good to be true. And in some ways it is. Not because it is a scam, but because that number is just the beginning of the story.
          </p>

          <p>
            So let me walk you through it the way I wish someone had walked me through it before my first sailing.
          </p>

          {/* Section 1 */}
          <h2 style={{ color: '#1F2937', fontSize: '26px', fontWeight: '800', margin: '12px 0 0 0', lineHeight: '1.3' }}>
            The things that are always included
          </h2>

          <p>
            No matter which cruise line you sail, certain things come with the ticket. Your cabin is included. That sounds obvious but it is worth saying because your cabin on a cruise ship is genuinely your home for the duration of the trip. You wake up there, you sleep there, you get ready there. And depending on what category you book, it might have a window, a balcony, or nothing but four walls. But it is yours and it is covered.
          </p>

          <p>
            Food in the main dining room is included. Every cruise ship has what they call the main dining room, which is a sit down restaurant that is open for dinner every night and usually for breakfast and lunch too. The food is real. It is not cafeteria food. There is a menu, there are courses, there are waiters who learn your name. And it is all part of your fare.
          </p>

          <p>
            The buffet is included. On most ships the buffet runs almost around the clock and covers everything from eggs in the morning to pizza at two in the afternoon to a full carving station at dinner. It is casual and it is always there.
          </p>

          {/* Image 2 */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', margin: '8px 0' }}>
            <img
              src="/blog/cruise-dining-room.png"
              alt="Elegant cruise ship main dining room with white tablecloths and warm lighting"
              style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '8px 0 0 0', textAlign: 'center' }}>
              The main dining room is included every night. It is nicer than most restaurants you will eat at on land.
            </p>
          </div>

          <p>
            Entertainment is included. Broadway style shows, comedy nights, live music in the atrium, trivia contests, game shows, movie nights under the stars. All of it comes with the ticket. On a Royal Caribbean ship you might watch a full production show with a cast of twenty in a theater that seats a thousand people. That is just Tuesday night on a cruise.
          </p>

          <p>
            The pool, the hot tubs, the gym, the running track, the sports courts. All included. Most activities onboard are included too. Rock climbing walls on Royal Caribbean, laser tag, go karts on Norwegian. The ship itself is the destination and most of what it offers is already in your fare.
          </p>

          <p>
            Port stops are included. When the ship docks in Nassau or Cozumel or Bermuda, getting off the ship and walking around costs you nothing. The port stop is part of the itinerary.
          </p>

          {/* Section 2 */}
          <h2 style={{ color: '#1F2937', fontSize: '26px', fontWeight: '800', margin: '12px 0 0 0', lineHeight: '1.3' }}>
            The things that are almost never included
          </h2>

          <p>
            Here is where people get surprised. And I want to be honest with you because I think you deserve to know this before you book, not after you get the bill at the end of your sailing.
          </p>

          <p>
            Alcohol is almost never included. Most cruise lines charge for beer, wine, cocktails, and specialty coffees like lattes and cappuccinos. If you are a drinker, even a moderate one, this adds up. A cocktail on a cruise ship typically runs between twelve and sixteen dollars. Two drinks a day over seven nights is close to two hundred dollars per person before you factor in anything else.
          </p>

          <p>
            Most lines offer drink packages and for a lot of people they are worth it. You pay a flat rate per day and drink as much as you want from a set menu. The key is buying the package before you sail. It is almost always cheaper at pre-purchase than it is once you board. I tell every client to decide before they go whether they want a package and to buy it at booking if they do.
          </p>

          {/* Image 3 */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', margin: '8px 0' }}>
            <img
              src="/blog/cruise-bar-cocktails.png"
              alt="Colorful tropical cocktails on a cruise ship bar with ocean view"
              style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '8px 0 0 0', textAlign: 'center' }}>
              The drinks are good. They are also not included on most lines. Plan accordingly.
            </p>
          </div>

          <p>
            Specialty restaurants are usually not included. Every ship has options beyond the main dining room. Italian restaurants, steakhouses, sushi bars, teppanyaki tables. These are separate experiences and they come with a cover charge, usually somewhere between thirty and sixty dollars per person. Sometimes more. They are often worth it for a special night. But they are not free.
          </p>

          <p>
            Gratuities are a separate charge. This is one that changed for some lines recently. Gratuities used to be bundled or quietly folded in but most lines now list them as a separate daily fee, typically between eighteen and twenty two dollars per person per day. On a seven night sailing for two people that is close to three hundred dollars. I always recommend prepaying gratuities at the time of booking. You lock in the current rate and you do not have to think about it on the ship.
          </p>

          <p>
            Shore excursions are not included. Getting off the ship in port is free. But if you want to do a snorkeling trip, a city tour, a zip line adventure, or a beach club day, those all cost extra. And this is important: I always tell people to book excursions through the cruise line rather than independently. Yes, third party operators are sometimes cheaper. But if your independently booked excursion runs long and you are not back at the ship on time, the ship leaves without you. When you book through the cruise line, if the excursion is late the ship waits. That protection is worth the difference in price.
          </p>

          {/* Image 4 */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', margin: '8px 0' }}>
            <img
              src="/blog/cruise-shore-excursion.png"
              alt="Passengers on a snorkeling shore excursion in clear Caribbean water"
              style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '8px 0 0 0', textAlign: 'center' }}>
              Shore excursions are one of the best parts of cruising. Book them through the ship so you are always protected.
            </p>
          </div>

          <p>
            WiFi is not included on most lines. If you need to stay connected, most ships sell internet packages. They are not cheap and the speeds vary by ship and location. If you plan to work remotely or need reliable connection for any reason, this is worth factoring into your budget.
          </p>

          <p>
            Spa treatments are not included. Massages, facials, thermal suites, salon services — all extra. And cruise ship spas are beautiful but they are not shy about their prices.
          </p>

          {/* Section 3 */}
          <h2 style={{ color: '#1F2937', fontSize: '26px', fontWeight: '800', margin: '12px 0 0 0', lineHeight: '1.3' }}>
            How Virgin Voyages does things differently
          </h2>

          <p>
            I want to talk about Virgin Voyages specifically because they genuinely do things differently and I think it is worth understanding why.
          </p>

          <p>
            On Virgin Voyages, every single restaurant on the ship is included. Not just the main dining room. Every restaurant. There are usually somewhere between twenty and twenty five dining options depending on the ship and every single one is included in your fare. No cover charges, no specialty restaurant fees. You just make a reservation and show up.
          </p>

          {/* Image 5 */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', margin: '8px 0' }}>
            <img
              src="/blog/virgin-voyages-restaurant.png"
              alt="Stylish Virgin Voyages specialty restaurant with moody lighting and modern decor"
              style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '8px 0 0 0', textAlign: 'center' }}>
              Every restaurant on Virgin Voyages is included. This is not the buffet. This is just dinner on a Tuesday.
            </p>
          </div>

          <p>
            WiFi is included on Virgin Voyages. Not a watered down version of WiFi. Actual unlimited WiFi for the whole sailing. Fitness classes are included. Soft drinks, juices, and drip coffee are included. The overall value calculation is genuinely different from most other lines.
          </p>

          <p>
            What is not included on Virgin Voyages is alcohol, gratuities, and shore excursions. Those work the same way they do everywhere else. But when you factor in everything that is included, the gap between Virgin Voyages and a traditional cruise line closes pretty fast.
          </p>

          <p>
            One more thing about Virgin Voyages. It is adults only. No kids on the ship. If that matters to you, it matters a lot. If it does not, it probably still makes the vibe a little different than what you might expect from cruising.
          </p>

          {/* Section 4 */}
          <h2 style={{ color: '#1F2937', fontSize: '26px', fontWeight: '800', margin: '12px 0 0 0', lineHeight: '1.3' }}>
            What does a cruise actually cost when you add it all up?
          </h2>

          <p>
            This is the question I get most often after people understand what is and is not included. And the honest answer is that it depends on how you sail.
          </p>

          <p>
            If you book a four night sailing at five hundred dollars per person, add a drink package, prepay gratuities, do one or two excursions, and grab a specialty dinner one night, you are probably looking at somewhere between eight hundred and eleven hundred dollars per person total depending on your choices. That is not a bad number for four nights of accommodation, all your food, entertainment, and a trip to the Caribbean.
          </p>

          <p>
            If you skip the drink package, stick to the main dining room, and do free things in port, you can get much closer to that base fare number. It really is up to you.
          </p>

          <p>
            The point is not that cruises are expensive or that they are cheap. The point is that when you know what is coming you can plan for it. You can decide what matters to you before you board and budget accordingly. No surprises.
          </p>

          {/* Section 5 */}
          <h2 style={{ color: '#1F2937', fontSize: '26px', fontWeight: '800', margin: '12px 0 0 0', lineHeight: '1.3' }}>
            One thing I always tell first timers
          </h2>

          <p>
            Before you go, sit down and think about what kind of traveler you are. Do you drink? Do you want to do excursions in every port or are you happy just walking around and finding a beach? Do you care about specialty restaurants or is good food in the main dining room enough?
          </p>

          <p>
            Your answers to those questions will tell you exactly what your cruise is going to cost. And if you work with me, I can help you think through all of it before anything is confirmed so you are not figuring it out for the first time at the bar on day two.
          </p>

          {/* Image 6 */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', margin: '8px 0' }}>
            <img
              src="/blog/cruise-balcony-sunset.png"
              alt="Couple sitting on a cruise ship balcony watching a sunset over the ocean"
              style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '8px 0 0 0', textAlign: 'center' }}>
              This moment right here. This one is included.
            </p>
          </div>

          <p>
            Cruising is genuinely one of the best values in travel when you understand how it works. You are getting accommodation, food, entertainment, and transportation to multiple destinations in one price. The add-ons are real but so is the value underneath them.
          </p>

          <p>
            If you have questions about a specific sailing or want to talk through what a cruise would actually cost for your trip, reach out. That is exactly what I am here for. No pressure, no pitch. Just an honest conversation about where you want to go.
          </p>

        </div>

        {/* CTA */}
        <div style={{ marginTop: '56px', backgroundColor: '#007298', borderRadius: '16px', padding: '36px 32px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px 0' }}>
            Ready to plan your trip?
          </p>
          <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '700', margin: '0 0 12px 0', lineHeight: '1.3' }}>
            Let's figure out what works for you.
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', margin: '0 0 24px 0' }}>
            We will talk through everything before anything is confirmed so there are no surprises.
          </p>
          <a
            href="https://forgehq.app/f/?s=20bejr4j"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#F59E0B', color: 'white', padding: '13px 32px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}
          >
            Start Planning My Trip
          </a>
        </div>

        {/* Back link */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <a href="/blog" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none' }}>
            &larr; Back to Postcards & Updates
          </a>
        </div>

      </div>
    </main>
  )
}
