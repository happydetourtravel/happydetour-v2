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
  {
    slug: 'building-a-travel-brand-from-scratch',
    title: 'Building a Travel Brand from Scratch: What I have Been Working On (And What You Can Learn From It)',
    date: '2026-04-22',
    tag: 'Behind the Brand',
    excerpt: "If you have visited happydetour.com lately, you might have noticed a few things look a little different. That is because I have been quietly working behind the scenes to make the site better, cleaner, clearer, and more useful for you.",
    image: '/blog/laptop_work_heavy_on_the_dunkin.png',
    content: `
      <p>If you have visited happydetour.com lately, you might have noticed a few things look a little different. That is because I have been quietly working behind the scenes to make the site better, cleaner, clearer, and more useful for you. I wanted to share what I have been doing because honestly, if you are building a small business of your own, some of this might help you too.</p>

      <h2>Start with what you already have</h2>

      <p>A lot of small business owners think they need to blow everything up and start over when something isn't working. I have learned that is rarely true. Most of the time you just need to sharpen what is already there. My site had good bones, good messaging, and a clear service. But some things were buried or repeated too many times. So instead of rebuilding from scratch, I focused on cleaning things up.</p>

      <h2>Make it easy for people to take the next step</h2>

      <p>The most important thing on any website is one clear action you want visitors to take. For me that is simple: start planning your trip. I looked at my hero section and asked myself if it was clear and warm. Does it feel like me? The old supporting line was fine, but it didn't really sound like how I talk. So I changed it to: "Forget the planning. Just tell me you're ready and I'll handle the rest." That is more me. And more importantly, it tells you exactly what working with me feels like.</p>

      <h2>Don't repeat yourself</h2>

      <p>I had "Start Planning My Trip" showing up three times in one section of my site. That is too much. When everything is a call to action, nothing is. I cleaned that up, made the button appear where it matters most, and removed the clutter. Less noise means a clearer message.</p>

      <h2>Add a blog even before you feel ready</h2>

      <p>I will be honest. I wasn't sure about starting a blog. I don't have years of client stories yet because I'm still building. But here is what I have learned: a blog isn't about proving you're an expert. It's about being helpful to the person who is researching right now. If someone is Googling "first time cruise tips" at 11pm and they find my post, that is a connection. That is trust building before we have ever spoken. So I started the blog and linked it in the navigation so it's easy to find.</p>

      <h2>Get feedback and act on it</h2>

      <p>I ran my site through an AI evaluation and got a list of suggestions. Some were great and some weren't right for where I am right now. The key was knowing the difference. Not every piece of advice is worth acting on immediately. Focus on what moves the needle for your stage of business, not just what looks impressive on paper.</p>

      <h2>The big picture</h2>

      <p>Happy Detour Travel is built on one simple idea: travel planning shouldn't feel like a second job. That applies to my clients, but honestly it applies to how I run the business too. I'm not trying to build something complicated. I'm trying to build something that works for you and for me.</p>

      <p>If you are thinking about a cruise, an all-inclusive resort, or just need someone to figure it all out for you, that is exactly what I'm here for. And it won't cost you a thing.</p>

      <p><a href="https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba">Let's start planning.</a></p>

      <p>Eric<br/>Happy Detour Travel: Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: 'bye-bye-templates-hello-custom',
    title: 'Bye-Bye Templates, Hello Custom! Building the New HappyDetour.com',
    date: '2026-04-22',
    tag: 'Behind the Brand',
    excerpt: "Let's be real. Planning a vacation should be fun, not a chore. But while I was building the new home for Happy Detour, I realized that most off the shelf travel sites are a bit of a chore themselves. They are boxy, they are expensive, and they don't have that vibrant, whimsical energy I want for you.",
    image: '/blog/coke_home_github.png',
    content: `
      <p>Let's be real. Planning a vacation should be fun, not a chore. But while I was building the new home for Happy Detour, I realized that most off the shelf travel sites are a bit of a chore themselves. They are boxy, they are expensive, and they don't have that vibrant, whimsical energy I want for you.</p>

      <p>So tonight I rolled up my sleeves, opened my Citrus MacBook, and decided to take the detour less traveled. I ditched the twenty five dollar a month templates and built something from scratch using GitHub and Vercel.</p>

      <p>Here is a look at what went down in the Happy Detour Lab tonight.</p>

      <h2>1. The Choice Evolution</h2>

      <p>I started with just a single link, but I knew you needed more. I coded a new self service section that gives you direct access to the big names:</p>

      <ul>
        <li>Virgin Voyages for that sleek, adults only vibe.</li>
        <li>Sandals and Beaches for the ultimate couples retreat or family splash.</li>
        <li>Royal Caribbean because sometimes you just need a classic getaway.</li>
      </ul>

      <h2>2. Adding the Whimsy</h2>

      <p>Since I am all about the fun in travel, I added a little secret for the desktop users. If you hover over my new buttons, a tiny jet actually slides into view and takes off to show you the way. It's a small detail, but it's the kind of care I put into your actual itineraries too.</p>

      <h2>3. Mobile First Magic</h2>

      <p>I know most of you are dreaming about your next trip while scrolling on your phone. I spent tonight making sure those new buttons stack perfectly on your mobile screen. No squishing and no zooming, just easy tapping.</p>

      <h2>4. Why I am doing this</h2>

      <p>Why spend hours coding when I could just use a template? Because Happy Detour is about Everyone Welcome. I wanted a site that feels as fast, modern, and personal as the service I provide.</p>

      <p>I am here to do the heavy lifting of travel planning so you don't have to. Whether it's navigating the confusing world of booking portals or coding a website at midnight, I have you covered.</p>

      <p>So what are you waiting for? Stop scrolling and start packing.</p>

      <p><a href="https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba">Let's find your happy detour.</a></p>

      <p>Eric<br/>Happy Detour Travel: Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: '6-things-first-time-cruise-passengers-wish-they-knew',
    title: '6 Things First Time Cruise Passengers Wish They Knew Before They Booked',
    date: '2026-04-21',
    tag: 'Cruise Tips',
    excerpt: "So you are thinking about your first cruise. Maybe a friend went and won't stop talking about it or maybe you have been scrolling through photos of the Caribbean thinking why not me. Either way, welcome to the club. You are going to love it.",
    image: '/blog/Balcony_Work.png',
    content: `
      <p>So you are thinking about your first cruise. Maybe a friend went and won't stop talking about it or maybe you have been scrolling through photos of the Caribbean thinking why not me. Either way, welcome to the club. You are going to love it.</p>

      <p>But before you book, there are a few things most first timers don't find out until they are already standing on the deck. Let's fix that now.</p>

      <h2>1. The ship is the destination</h2>

      <p>A lot of people think the cruise is just the transportation to get to a tropical beach. It's actually the opposite. The ship itself, the pools, the restaurants, the entertainment, and the people, that is at least half the experience. You need to choose your ship carefully. A party mega ship and a smaller, relaxed vessel are two completely different vacations. Think about what kind of energy you actually want before you pick.</p>

      <h2>2. Not everything is included</h2>

      <p>Your base fare covers your cabin, meals in the main dining room, and most of the shows. But specialty restaurants, drinks, excursions, and spa treatments add up fast. Some cruise lines bundle more than others, so knowing what is actually included before you book saves you from a massive surprise bill at the end of the trip.</p>

      <h2>3. Embarkation day is chaotic only if you are not ready</h2>

      <p>The day you board, thousands of people are all trying to do the same thing at the same time. Get to the port at your assigned time, have your documents ready in your hand, and don't plan anything big for that first evening. Give yourself time to settle in, explore the ship, and just breathe.</p>

      <h2>4. Port days go by fast</h2>

      <p>When the ship docks, you usually have about six to eight hours. That sounds like a long time until you factor in getting off the ship, finding your way around, and getting back before the gangway closes. Plan your excursions in advance and don't just wing it when you get there.</p>

      <h2>5. Start with a test drive</h2>

      <p>If you are nervous about being at sea, don't start with a 14-day voyage. I always recommend a 4-night itinerary as a "test drive." It usually runs from a Thursday to a Monday, which is just enough time to see if you like the cruise life without it feeling like a huge commitment. It's the perfect long weekend to see what it's all about.</p>

      <h2>6. A travel advisor saves you money and stress</h2>

      <p>Here is the thing nobody tells you. Booking a cruise through a travel advisor costs you nothing extra. The cruise line pays the commission, not you. A good advisor, and yeah I'm talking about myself here, knows which ships match your vibe, which cabins to avoid, and how to find deals you won't find on your own.</p>

      <p>At Happy Detour Travel, I specialize in helping first timers figure all of this out without the overwhelm. You tell me what you are looking for and I handle the rest for free.</p>

      <p>Ready to start planning? <a href="https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba">Let's talk</a>.</p>

      <p>Eric<br/>Happy Detour Travel: Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: '3-reasons-virgin-voyages-is-the-adult-only-vacation-you-actually-need',
    title: '3 Reasons Virgin Voyages Is The Adult Only Vacation You Actually Need',
    date: '2026-04-22',
    tag: 'Cruise Tips',
    excerpt: 'Drink in hand, ready to let the stress of the world melt away. Then, out of nowhere, a cannonball from a hyperactive eight year old sends a tidal wave of chlorinated water directly into your lap. Vacation over.',
    image: '/blog/virgin_balcony.png',
    content: `
      <p>Drink in hand, ready to let the stress of the world melt away. Then, out of nowhere, a cannonball from a hyperactive eight year old sends a tidal wave of chlorinated water directly into your lap.</p>

      <p>Vacation over.</p>

      <p>If you are nodding your head right now, then you need to hear about Virgin Voyages. I have spent a lot of time looking into different cruise lines for Happy Detour, and Virgin is doing things differently. Here are three reasons why this is the kid free escape your soul is screaming for.</p>

      <h2>1. The "No Kids" Policy is a literal game changer</h2>

      <p>It sounds simple, but you don't realize how much "parent mode" your brain stays in until the possibility of a screaming toddler is completely removed from the equation. On a Virgin ship, everyone is eighteen or older. That means no character breakfasts, no splashing in the "fancy" pool, and definitely no "Baby Shark" playing on the speakers. It is a playground for grownups where you can actually hear the ocean and your own thoughts at the same time.</p>

      <h2>2. The food is actually good (and there is no buffet)</h2>

      <p>Most people think of cruise food and picture a sad, lukewarm buffet line where you have to fight someone's uncle for the last piece of mystery meat. Virgin killed the buffet. Instead, they have over twenty world class restaurants that are all included in your fare. We are talking about a high end steakhouse, a vibrant Mexican spot, and even an experimental kitchen that looks like it belongs in a sci-fi movie. It's like being in a trendy neighborhood in a major city, except the city is floating and you don't have to pay the check at the end.</p>

      <h2>3. It's whimsical without being cheesy</h2>

      <p>This is what I love most about their brand. It feels modern and a little bit rebellious. They have a tattoo parlor on the ship. They have shake to champagne service where you literally just shake your phone and a bottle appears wherever you are sitting. It's fun, it's vibrant, and it doesn't feel like a stuffy, traditional cruise. It feels like a party where everyone is invited to be themselves.</p>

      <h2>The Bottom Line</h2>

      <p>We spend so much of our lives doing the heavy lifting for everyone else. You deserve a few days where the only "work" you have to do is deciding which restaurant to hit for dinner.</p>

      <p>I have built the new Happy Detour site specifically to make booking these kinds of escapes easy. If you are ready to swap the splash zone for a sunset at sea, I've got you covered.</p>

      <p><a href="https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba">Let's find your happy detour.</a></p>

      <p>Eric<br/>Happy Detour Travel: Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
]

export function getAllPosts(): Post[] {
  return POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}
