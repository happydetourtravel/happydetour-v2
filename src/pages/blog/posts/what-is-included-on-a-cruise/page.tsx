// src/pages/blog/posts/what-is-included-on-a-cruise/page.tsx

export default function WhatIsIncludedOnACruise() {
  return (
    <main style={{ backgroundColor: '#F9FAFB', minHeight: '100vh', padding: '64px 24px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>

        {/* Tag and Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <span style={{ backgroundColor: '#EFF6FF', color: '#007298', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '4px' }}>
            Cruise Tips
          </span>
          <span style={{ color: '#9CA3AF', fontSize: '12px' }}>June 2026 · 4 min read</span>
        </div>

        {/* Title */}
        <h1 style={{ color: '#1F2937', fontSize: '36px', fontWeight: '800', lineHeight: '1.2', margin: '0 0 20px 0' }}>
          What Is Actually Included on a Cruise?
        </h1>

        {/* Intro */}
        <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.8', margin: '0 0 40px 0' }}>
          Before I booked my first cruise I had no idea what I was actually paying for. I just saw a price and assumed it covered everything. It did not. And I learned that the hard way standing at a bar on day two wondering why my card was being charged.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: '0 0 40px 0' }} />

        {/* Body */}
        <div style={{ color: '#1F2937', fontSize: '16px', lineHeight: '1.9', display: 'flex', flexDirection: 'column', gap: '28px' }}>

          <p>
            Here is the thing about cruises that nobody really explains upfront. The base fare gets you on the ship. It covers your cabin, your meals in the main dining room and the buffet, your entertainment, and access to most of the ship. That part is genuinely included. But the moment you step outside of those basics, things start to add up.
          </p>

          <h2 style={{ color: '#1F2937', fontSize: '22px', fontWeight: '700', margin: '0' }}>
            What is always included
          </h2>
          <p>
            No matter which cruise line you sail, your cabin is covered. So is your food in the main restaurant and buffet. Shows, live music, the pool, the gym, and most activities onboard are included too. You are not paying extra to watch the comedian or sit by the pool. That stuff is just part of being on the ship.
          </p>

          <h2 style={{ color: '#1F2937', fontSize: '22px', fontWeight: '700', margin: '0' }}>
            What is almost never included
          </h2>
          <p>
            Alcohol. That is the big one. Most cruise lines charge for drinks, and if you are someone who enjoys a cocktail or two at dinner it adds up fast. Drink packages exist on most lines and they are usually worth it if you plan to drink more than two or three drinks a day. Book them before you sail because the price goes up once you are on the ship.
          </p>
          <p>
            Specialty restaurants are another one. Most ships have a main dining room that is included, but they also have steakhouses, sushi bars, and other spots that cost extra. Sometimes it is worth it. Sometimes it is not. It depends on the ship.
          </p>
          <p>
            Gratuities are charged separately on most lines now. Some bundle them in, some add them to your bill at the end. I always tell people to prepay gratuities at booking because it locks in the current rate and you do not have to think about it once you are on the ship.
          </p>
          <p>
            Shore excursions are not included either. Anything you do in port costs extra. I always recommend booking excursions through the cruise line rather than independently. It costs a little more but if something goes wrong and you are late getting back, the ship waits for you. If you booked on your own, it does not.
          </p>

          <h2 style={{ color: '#1F2937', fontSize: '22px', fontWeight: '700', margin: '0' }}>
            Virgin Voyages is a little different
          </h2>
          <p>
            I am First Mate certified with Virgin Voyages and they do things differently than most lines. Every restaurant on the ship is included. No cover charges, no specialty restaurant fees. WiFi is included too, along with fitness classes and soft drinks. What is not included is alcohol, gratuities, and shore excursions. So the math is actually pretty favorable compared to other lines if you factor in what you are getting.
          </p>

          <h2 style={{ color: '#1F2937', fontSize: '22px', fontWeight: '700', margin: '0' }}>
            The honest answer
          </h2>
          <p>
            The base price of a cruise is real. You really do get a cabin, food, and entertainment for that price. But the actual cost of your vacation depends on how you sail. Add drinks, specialty dining, excursions, and gratuities and you are looking at a different number than what the ad said.
          </p>
          <p>
            That is not a trick. It is just how cruising works. And when you know it going in, you can budget for it and actually enjoy yourself instead of watching your spend the whole trip.
          </p>
          <p>
            If you want to talk through what a cruise would actually cost for your trip, that is exactly what I am here for. No pressure, just an honest conversation.
          </p>

        </div>

        {/* CTA */}
        <div style={{ marginTop: '48px', backgroundColor: '#007298', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px 0' }}>
            Ready to plan your trip?
          </p>
          <h3 style={{ color: 'white', fontSize: '22px', fontWeight: '700', margin: '0 0 16px 0' }}>
            Let's figure out what works for you.
          </h3>
          <a
            href="https://forgehq.app/f/?s=20bejr4j"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#F59E0B', color: 'white', padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}
          >
            Start Planning My Trip
          </a>
        </div>

        {/* Back link */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <a href="/blog" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none' }}>
            &larr; Back to the blog
          </a>
        </div>

      </div>
    </main>
  )
}
