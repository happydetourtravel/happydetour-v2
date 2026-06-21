// src/lib/posts.ts
// Add new posts by creating a new entry in the POSTS array below.
// Each post has metadata at the top and content written as HTML.

export interface Post {
  slug: string
  title: string
  date: string
  tag: string
  excerpt: string
  image?: string
  content: string
}

export const POSTS: Post[] = [
  {
    slug: 'what-is-included-on-a-cruise',
    title: 'What Is Actually Included on a Cruise? The Honest Answer Nobody Gives You.',
    date: '2026-06-21',
    tag: 'Cruise Tips',
    excerpt: 'Before I booked my first cruise I assumed the price covered everything. It did not. I learned that standing at a bar on day two, watching my card get charged for a gin and tonic I thought was part of the deal. Nobody had explained it to me. This post is me explaining it to you.',
    image: '/blog/cruise-deck-overview.png',
    content: `
      <p>Before I booked my first cruise I assumed the price covered everything. It did not. And I learned that the hard way standing at a bar on day two wondering why my card was being charged.</p>

      <p>Here is the thing about cruises that nobody really explains upfront. The base fare gets you on the ship. It covers your cabin, your meals in the main dining room and the buffet, your entertainment, and access to most of the ship. That part is genuinely included. But the moment you step outside of those basics, things start to add up.</p>

      <h2>What is always included</h2>

      <p>No matter which cruise line you sail, your cabin is covered. So is your food in the main restaurant and buffet. Shows, live music, the pool, the gym, and most activities onboard are included too. You are not paying extra to watch the comedian or sit by the pool. That stuff is just part of being on the ship.</p>

      <img src="/blog/cruise-dining-room.png" alt="Main dining room on a cruise ship" />
      <p class="caption">The main dining room is included every night. It is nicer than most restaurants you will eat at on land.</p>

      <p>Entertainment is included. Broadway style shows, comedy nights, live music in the atrium, trivia contests, game shows, movie nights under the stars. All of it comes with the ticket. On a Royal Caribbean ship you might watch a full production show with a cast of twenty in a theater that seats a thousand people. That is just Tuesday night on a cruise.</p>

      <p>The pool, the hot tubs, the gym, the running track, the sports courts. All included. Port stops are included too. When the ship docks in Nassau or Cozumel or Bermuda, getting off the ship and walking around costs you nothing.</p>

      <h2>What is almost never included</h2>

      <p>Alcohol. That is the big one. Most cruise lines charge for drinks, and if you are someone who enjoys a cocktail or two at dinner it adds up fast. A cocktail on a cruise ship typically runs between twelve and sixteen dollars. Two drinks a day over seven nights is close to two hundred dollars per person before you factor in anything else.</p>

      <p>Most lines offer drink packages and for a lot of people they are worth it. The key is buying the package before you sail. It is almost always cheaper at pre-purchase than it is once you board.</p>

      <img src="/blog/cruise-bar-cocktails.png" alt="Cocktails at a cruise ship bar" />
      <p class="caption">The drinks are good. They are also not included on most lines. Plan accordingly.</p>

      <p>Specialty restaurants are usually not included. Every ship has options beyond the main dining room. Italian restaurants, steakhouses, sushi bars, teppanyaki tables. These are separate experiences and they come with a cover charge, usually somewhere between thirty and sixty dollars per person.</p>

      <p>Gratuities are a separate charge. Most lines now list them as a separate daily fee, typically between eighteen and twenty two dollars per person per day. On a seven night sailing for two people that is close to three hundred dollars. I always recommend prepaying gratuities at the time of booking.</p>

      <p>Shore excursions are not included. Getting off the ship in port is free. But if you want to do a snorkeling trip, a city tour, a zip line adventure, or a beach club day, those all cost extra. I always tell people to book excursions through the cruise line rather than independently. If your independently booked excursion runs long and you are not back at the ship on time, the ship leaves without you. When you book through the cruise line, if the excursion is late the ship waits.</p>

      <img src="/blog/cruise-shore-excursion.png" alt="Shore excursion group exploring a port town" />
      <p class="caption">Shore excursions are one of the best parts of cruising. Book them through the ship so you are always protected.</p>

      <p>WiFi is not included on most lines. Spa treatments are not included either. Massages, facials, thermal suites, salon services are all extra.</p>

      <h2>How Virgin Voyages does things differently</h2>

      <p>On Virgin Voyages, every single restaurant on the ship is included. Not just the main dining room. Every restaurant. There are usually somewhere between twenty and twenty five dining options depending on the ship and every single one is included in your fare. No cover charges, no specialty restaurant fees.</p>

      <img src="/blog/virgin-voyages-restaurant.png" alt="Virgin Voyages specialty restaurant with ocean view" />
      <p class="caption">Every restaurant on Virgin Voyages is included. This is not the buffet. This is just dinner on a Tuesday.</p>

      <p>WiFi is included on Virgin Voyages. Fitness classes are included. Soft drinks, juices, and drip coffee are included. What is not included is alcohol, gratuities, and shore excursions. But when you factor in everything that is included, the gap between Virgin Voyages and a traditional cruise line closes pretty fast.</p>

      <p>One more thing about Virgin Voyages. It is adults only. No kids on the ship. If that matters to you, it matters a lot.</p>

      <h2>What does a cruise actually cost when you add it all up?</h2>

      <p>If you book a four night sailing at five hundred dollars per person, add a drink package, prepay gratuities, do one or two excursions, and grab a specialty dinner one night, you are probably looking at somewhere between eight hundred and eleven hundred dollars per person total. That is not a bad number for four nights of accommodation, all your food, entertainment, and a trip to the Caribbean.</p>

      <p>If you skip the drink package, stick to the main dining room, and do free things in port, you can get much closer to that base fare number. It really is up to you.</p>

      <h2>One thing I always tell first timers</h2>

      <p>Before you go, sit down and think about what kind of traveler you are. Do you drink? Do you want to do excursions in every port or are you happy just walking around and finding a beach? Do you care about specialty restaurants or is good food in the main dining room enough?</p>

      <p>Your answers to those questions will tell you exactly what your cruise is going to cost. And if you work with me, I can help you think through all of it before anything is confirmed so you are not figuring it out for the first time at the bar on day two.</p>

      <img src="/blog/cruise-balcony-sunset.png" alt="Balcony view of a cruise ship at sunset" />
      <p class="caption">This moment right here. This one is included.</p>

      <p>Cruising is genuinely one of the best values in travel when you understand how it works. You are getting accommodation, food, entertainment, and transportation to multiple destinations in one price. The add-ons are real but so is the value underneath them.</p>

      <p>If you have questions about a specific sailing or want to talk through what a cruise would actually cost for your trip, reach out. That is exactly what I am here for. No pressure, no pitch. Just an honest conversation about where you want to go.</p>
    `,
  },
]

export function getAllPosts(): Post[] {
  return POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}
{
    slug: '6-things-first-time-cruise-passengers-wish-they-knew',
    title: '6 Things First Time Cruise Passengers Wish They Knew Before They Booked',
    date: '2026-04-21',
    tag: 'Cruise Tips',
    excerpt: 'Maybe a friend went and will not stop talking about it. Maybe you have been scrolling through photos of the Caribbean thinking why not me. Either way, welcome. But before you book, there are a few things most first timers do not find out until they are already standing on the deck.',
    content: `
      <p>So you are thinking about your first cruise. Maybe a friend went and will not stop talking about it. Maybe you have been scrolling through photos of the Caribbean thinking why not me. Either way, welcome to the club. You are going to love it.</p>

      <p>But before you book, there are a few things most first timers do not find out until they are already standing on the deck. Let us fix that now.</p>

      <h2>1. The ship is the destination</h2>

      <p>A lot of people think the cruise is just the transportation to get to a tropical beach. It is actually the opposite. The ship itself, the pools, the restaurants, the entertainment, and the people, that is at least half the experience. You need to choose your ship carefully. A party mega ship and a smaller, relaxed vessel are two completely different vacations. Think about what kind of energy you actually want before you pick.</p>

      <h2>2. Not everything is included</h2>

      <p>Your base fare covers your cabin, meals in the main dining room, and most of the shows. But specialty restaurants, drinks, excursions, and spa treatments add up fast. Some cruise lines bundle more than others, so knowing what is actually included before you book saves you from a massive surprise bill at the end of the trip.</p>

      <h2>3. Embarkation day is chaotic only if you are not ready</h2>

      <p>The day you board, thousands of people are all trying to do the same thing at the same time. Get to the port at your assigned time, have your documents ready in your hand, and do not plan anything big for that first evening. Give yourself time to settle in, explore the ship, and just breathe.</p>

      <h2>4. Port days go by fast</h2>

      <p>When the ship docks, you usually have about six to eight hours. That sounds like a long time until you factor in getting off the ship, finding your way around, and getting back before the gangway closes. Plan your excursions in advance and do not just wing it when you get there.</p>

      <h2>5. Start with a test drive</h2>

      <p>If you are nervous about being at sea, do not start with a 14 day voyage. I always recommend a 4 night itinerary as a test drive. It usually runs from a Thursday to a Monday, which is just enough time to see if you like the cruise life without it feeling like a huge commitment. It is the perfect long weekend to see what it is all about.</p>

      <h2>6. A travel advisor saves you money and stress</h2>

      <p>Here is the thing nobody tells you. Booking a cruise through a travel advisor costs you nothing extra. The cruise line pays the commission, not you. A good advisor, and yeah I am talking about myself here, knows which ships match your vibe, which cabins to avoid, and how to find deals you will not find on your own.</p>

      <p>At Happy Detour Travel, I specialize in helping first timers figure all of this out without the overwhelm. You tell me what you are looking for and we talk through everything before anything is confirmed so there are no surprises.</p>
    `,
  },
