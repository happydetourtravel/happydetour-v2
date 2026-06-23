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
  {
    slug: 'the-day-i-built-like-i-meant-it',
    title: 'The Day I Built Like I Meant It',
    date: '2026-04-23',
    tag: 'Behind the Brand',
    excerpt: 'A full day in the Happy Detour lab and I am not stopping. Today was different. I have been building Happy Detour Travel piece by piece since March of 2026. I have been figuring things out as I go, leaning on Dunkin\' iced coffee and a lot of determination. But today? Today felt like the day everything started coming together for real.',
    image: '/blog/eric.jpeg',
    content: `
      <p>A full day in the Happy Detour lab and I am not stopping.</p>

      <p>Today was different. I have been building Happy Detour Travel piece by piece since March of 2026. I have been figuring things out as I go, leaning on Dunkin' iced coffee and a lot of determination. But today? Today felt like the day everything started coming together for real.</p>

      <p>I want to document this. Not because I have it all figured out, but because I think there is something honest and useful in showing what it actually looks like to build a travel brand from scratch, one commit at a time.</p>

      <h2>The Website Audit</h2>

      <p>It started with a website audit. I ran my site through a tool called Klok Labs. It is an AI visibility analyzer that scores your website across 14 categories. My starting score was a 70 out of 100. That is good, but not great. The biggest problem was that my structured data was a mess. I had three separate schema blocks when it should have been one clean, consolidated block.</p>

      <p>So I fixed it. I rebuilt my entire JSON-LD schema from scratch. I combined my Organization, Person, and Travel Agency data into one unified block. I baked in my logo, email, social links, WorldVia affiliation, and my tagline. I ran it through Google's Rich Results Test and got a green checkmark. Google can finally see exactly who Happy Detour Travel is and what I do.</p>

      <h2>Building the About Page</h2>

      <p>Then I built my About page. I didn't have one before. For a brand built on trust and personality, that was a problem.</p>

      <p>I wrote the real story. I talked about being "that guy" in the group chat since 2017. I mentioned the late nights on a Citrus MacBook in Ohio, the Dunkin' iced coffee, and the Coke Zeros. I even put in the Tanzania safari that is still on my bucket list and the learning curve I am still climbing every single day. You can check it out at happydetour.com/about. It has my photo, my story, and the "teamwork clause" that explains how I work with my clients. It is the most personal thing on the site and I am proud of it.</p>

      <h2>The Links Page</h2>

      <p>If you follow me on Instagram, Facebook, or TikTok, you have probably seen travel brands with a clean "link in bio" page. I built my own version today at happydetour.com/links. It has everything in one place. My planning form, my About page, my blog, and direct links to Virgin Voyages and Sandals are all there. It is clean, on brand, and ready for traffic.</p>

      <h2>Honest Stats and Better FAQs</h2>

      <p>I added stats that are actually true. On my "Why Work With Me" section, I added a simple stats bar: 17+ cruises taken personally, $0 cost to you, 3+ countries visited, and a promise that I am always researching the best deals for you. Nothing is inflated or fake. It is just honest numbers that tell you something real about who I am.</p>

      <p>I also expanded my FAQ to 12 questions. I added four new questions specifically designed for AI search tools. I covered things like "What is a travel advisor?" and "Is Happy Detour Travel a legitimate travel agency?" These are the questions people type into ChatGPT and Google AI. If my site answers them clearly, AI tools start pulling my content as a source. That is the long game.</p>

      <h2>Technical Wins</h2>

      <p>I spent time fixing accessibility across the entire site. Six components including the TrustSection and TravelServices were updated with proper ARIA labels and descriptive alt text. It is not the most glamorous work, but it matters. It makes my site usable for everyone and Google definitely notices.</p>

      <p>I also added real pricing and brand names to my services. My cruise section now mentions Royal Caribbean, Norwegian, Carnival, MSC, and Virgin Voyages with real price ranges. My all-inclusive section names Sandals and Beaches specifically. It is all specific, verifiable, and real.</p>

      <p>Finally, I set up Google Analytics and Google Search Console. From today forward, I can see exactly who is visiting happydetour.com and what they are doing on the site. No more flying blind.</p>

      <h2>Where the Score Landed</h2>

      <p>I started the day at 70 and I ended at 71. That might sound disappointing, but I know that the score is a lagging indicator. The work I did today on the schema, content, and accessibility is the infrastructure. The score catches up eventually. My AEO (Answer Engine Optimization) is at 80 and my LLMO is at 78. Those are the numbers that matter most for AI search visibility, and they are strong.</p>

      <h2>What is Next</h2>

      <p>This is the end of Day One of the real build. Tomorrow starts fresh. There is still work to do like a privacy policy and gathering testimonials, but today I built like I meant it.</p>

      <p>I am just getting started.</p>

      <p>Eric Carney<br/>Owner, Happy Detour Travel</p>

      <p>Affordable vacations. Fun experiences. Everyone welcome.<br/>happydetour.com @happydetourtravel</p>
    `,
  },
  {
    slug: 'day-2-in-the-lab-and-the-site-got-better',
    title: 'Day 2 in the Lab and the Site Got Better',
    date: '2026-04-24',
    tag: 'Behind the Brand',
    excerpt: 'Behind the scenes of building Happy Detour Travel one commit at a time. Day 2 was less about big dramatic changes and more about the stuff that makes a website actually work.',
    image: '/blog/og-image.png',
    content: `
      <p>Behind the scenes of building Happy Detour Travel one commit at a time.</p>

      <p>If you read Blog #10, you know I ended Day 1 at 1:49 AM after one of the most productive building sessions Happy Detour Travel has ever had. I posted it, closed the laptop, and went to bed. I woke up ready to keep going.</p>

      <p>Day 2 was less about big dramatic changes and more about the stuff that makes a website actually work. This is the behind the scenes infrastructure that visitors never see but search engines and AI tools absolutely do. It is not glamorous, but it matters.</p>

      <h2>I built a branded 404 page</h2>

      <p>You know that page you land on when a link is broken? Most businesses have a generic error message that just says "page not found" and leaves you stranded. Mine doesn't do that anymore. Now if you land somewhere that doesn't exist on my site, you will see a compass emoji and the message "Looks like this trail went cold. Don't worry, I'll help you get back on the right path." I've included a clear way to get back to the fun stuff including a direct link to start planning your trip. Even when things go wrong, Happy Detour stays on brand.</p>

      <h2>I completely rebuilt the Success page</h2>

      <p>This is the page you land on after filling out my trip planning form. It was functional before but it felt like a default with a dark background and one button. It had nothing personal. Now it feels like me. You get a bouncing plane emoji and a blue message card that says I am a real person diving into research for you. I added a "While You Wait" section with a link to the blog and the honest admission that I am probably on my second Dunkin' of the day. There are also social links so you can follow the journey while I work. It is the first real impression I make after someone trusts me with their trip, so it needed to feel like Happy Detour Travel. Now it does.</p>

      <h2>I installed Google Analytics</h2>

      <p>From this point forward I can see exactly who is visiting my site, where they are coming from, and what they are doing once they get there. Before today I was flying completely blind. No more. This is real business intelligence and it costs nothing.</p>

      <h2>I set up Google Search Console and submitted my sitemap</h2>

      <p>Google now knows exactly what pages exist on my site and has been asked to crawl and index them. My sitemap includes my homepage, About page, Links page, and Success page. Status is green and three pages were discovered.</p>

      <h2>I built a custom Open Graph image</h2>

      <p>This is the image that shows up when someone shares my site on social media. Before today it was just my logo. Now it is a proper branded card with a Happy Detour blue background, amber accents, my name, my tagline, and the URL front and center. I tested it on opengraph.xyz and it works.</p>

      <h2>I upgraded my meta tags and schema</h2>

      <p>My Person schema now includes my description, my Ohio location, my photo, and all the travel brands I specialize in. My meta description leads with my tagline and my keywords include specific cruise lines and resort names like Royal Caribbean, Virgin Voyages, Sandals, and Beaches. Every piece of it is more specific and findable than it was 48 hours ago.</p>

      <h2>I researched a privacy policy</h2>

      <p>I am being honest about this one. I researched current TCPA and CCPA requirements and learned about the new FCC opt out rules. I started drafting an interim policy but I made the decision to pause and do it right. I am in the process of working with legal counsel to get a proper terms of service. It is costing $850 and it is worth every penny. Happy Detour Travel is a real business and real businesses get real legal help.</p>

      <h2>Where things stand</h2>

      <p>After two very long days, Happy Detour Travel is now a clean and fast website. I have a polished About page that tells my real story, a links page ready for every social bio, a branded 404 page, and a warm success page. Google is indexing every page and the custom schema has been validated. I have twelve FAQ answers optimized for AI search and real pricing in every service description.</p>

      <p>The site is ready, the form works, and the automation fires. Now it needs people. That part is on me. I will be posting consistently and building trust one conversation at a time. I am ready to get that first client through the door and make sure their trip is everything they hoped for.</p>

      <p>I cannot wait.</p>

      <p>Eric Carney<br/>Happy Detour Travel</p>

      <p>Affordable vacations. Fun experiences. Everyone welcome.<br/>@happydetourtravel</p>
    `,
  },
  {
    slug: 'honest-review-bahia-principe-explore-legend',
    title: 'I Went to the Dominican Republic in October. Here\'s My Honest Take on Bahia Principe Explore Legend.',
    date: '2026-04-24',
    tag: 'Resort Reviews',
    excerpt: 'A real review from someone who was actually there. Pools, beaches, upsells, and everything in between.',
    image: '/blog/Jason_and_Lori.jpg',
    content: `
      <p>A real review from someone who was actually there. Pools, beaches, upsells, and everything in between.</p>

      <p>"Celebrating friends! I went with them to the DR for their 10/13/25 anniversary. Happy Detour Travel is all about these real moments."</p>

      <p>Let me be upfront about something before I start. I am a travel advisor. That means when I review a resort, I am not just thinking about whether I had a good time. I am thinking about whether I would send my clients there. More importantly, I am thinking about who I would send there and why.</p>

      <p>So here is my honest take on the Bahia Principe Explore Legend in Punta Cana. I stayed there in October 2025 and I am going to tell you exactly what I found.</p>

      <h2>First, what is this place?</h2>

      <p>The Bahia Principe Explore Legend is a 5-star all-inclusive resort on Playa Bavaro. It is a massive property. It is part of the larger Bahia Principe Bavaro complex, which means you actually have access to multiple resorts, restaurants, and facilities all on the same grounds. It is themed around a fantasy castle concept which makes it a huge hit with families.</p>

      <h2>What is actually included?</h2>

      <p>This is always the first question people ask me so let us get it out of the way. Here is what your room rate covers. You get unlimited food and drinks at the buffet and specialty restaurants. You get non-motorized water sports like snorkeling and kayaking. You also get access to the water park, the Kids Club, and the nightly entertainment. You can also use the facilities at the neighboring Turquesa and Punta Cana properties.</p>

      <p>The rooms are solid. You get a pillow menu, bathrobes, and a coffee maker. The WiFi in the room is free, which is not always a given at resorts in the Dominican Republic. That is a genuinely good all-inclusive package.</p>

      <h2>The pool and beach were my favorite part</h2>

      <p>I am going to be real with you. I could have spent my entire trip between the pool and the beach and been completely happy. The pools are spectacular. The beach on Playa Bavaro is exactly what you picture when you think of the Caribbean. White sand, turquoise water, and palm trees. It did not disappoint.</p>

      <p>What I loved most was the energy. There were beach volleyball games going constantly. People were laughing and making friends with strangers. It had that laid-back vacation feeling where time just disappears and you look up and realize it is somehow 4pm already. The atmosphere was genuinely fun. This is the kind of stuff you cannot manufacture. It either has a vibe or it does not. This place has it.</p>

      <h2>Rooms and Housekeeping</h2>

      <p>My room was cleaned every single day without fail. Fresh towels, beds made, and everything tidied up. That sounds basic but it is not always consistent at big resorts. My experience was great. The rooms are comfortable. They aren't "luxury boutique" fancy, but they are well maintained and I had no complaints.</p>

      <h2>The Staff</h2>

      <p>Every single person I interacted with was warm and helpful. They genuinely seemed happy to be there. That goes a long way when you are away from home. The staff members are consistently one of the highlights here.</p>

      <h2>The Food</h2>

      <p>The buffet was solid with plenty of variety. The specialty restaurants are worth booking, but make your reservations early because they fill up fast. You have access to the Las Olas Beach House which has five specialty spots including Indian, Greek, and Mexican. That is genuinely impressive for an all-inclusive. For the pool and beach snacks, they are fine but nothing to write home about. Grab a cocktail and do not overthink it.</p>

      <h2>The honest negative: The upsells</h2>

      <p>I have to talk about this because it is real. Everywhere you go at this resort, someone is trying to sell you something. Excursion packages, spa upgrades, or photography sessions. It happens at the pool, on the beach, and even when you are just walking to lunch.</p>

      <p>Once I mentally accepted it and learned to politely say no, it stopped bothering me. But I won't pretend it does not happen because it absolutely does. Some guests find it frustrating. Here is the silver lining though. The excursions they offer are actually good. If you want to see the Dominican Republic beyond the resort gates, the options are solid. Just go in with your eyes open and do not feel pressured.</p>

      <h2>Who is this resort right for?</h2>

      <p>If you have kids, this place was built for you. The water park and the castle theme are perfect for families. It is also great for groups of friends because the energy is so social. If you are a couple looking for a quiet and romantic escape, you might want to look elsewhere. This is a big, lively property.</p>

      <h2>My bottom line</h2>

      <p>Bahia Principe Explore Legend delivers on the fundamentals. You get a great beach, fun pools, and friendly staff. The upsells are there but manageable. The food is good and the atmosphere is fun.</p>

      <p>I would send my clients here if they are looking for a lively and well-rounded experience. If you are thinking about the Dominican Republic for your next trip and want to talk through the right fit, reach out. That is exactly what I am here for.</p>

      <p>Eric Carney<br/>Happy Detour Travel<br/>Affordable vacations. Fun experiences. Everyone welcome.<br/>@happydetourtravel</p>
    `,
  },
  {
    slug: 'the-truth-about-all-inclusive-luxury',
    title: 'The Truth About All-Inclusive Luxury',
    date: '2026-04-25',
    tag: 'Resort Reviews',
    excerpt: 'I see the word luxury slapped on every travel brochure and website these days. Every resort claims to be five stars. Every lobby has a fountain and some nice flowers. But as we have learned from my own Happy Detours around the world the label does not always match the experience.',
    image: '/blog/IMG_2791.jpeg',
    content: `
      <p>I see the word luxury slapped on every travel brochure and website these days. Every resort claims to be five stars. Every lobby has a fountain and some nice flowers. But as we have learned from my own Happy Detours around the world the label does not always match the experience. When you are spending thousands of dollars on a vacation you deserve to know what you are actually getting.</p>

      <h2>The Staff Experience</h2>

      <p>The biggest indicator of a true luxury resort is the staff. You can have gold plated faucets and marble floors but if the service is bad the vacation is ruined. I look for the staff to guest ratio. In a high-end resort like a Sandals or a Beaches property the staff members are trained to anticipate what you need before you even ask.</p>

      <p>It is the small things that matter. It is the person at the pool who brings you a fresh towel without you looking for one. It is the bartender who remembers that you prefer a Coke Zero over a cocktail in the afternoon. When the staff is overworked or under-trained you feel it in the energy of the place. A real luxury resort feels effortless. If you find yourself waiting in long lines for every meal or hunting for a clean beach chair you are not at a luxury resort. You are at a factory.</p>

      <h2>The Hidden Costs and the Upsell</h2>

      <p>A lot of resorts lead with a low price to get you in the door and then they spend the rest of the week trying to get more money out of you. They charge for the premium steak at dinner. They charge for the better WiFi. They charge for the beach cabanas.</p>

      <p>To me true luxury means the price is the price. When I book a client at a Sandals resort I know their snorkeling is included. I know their scuba diving is included. I know they can walk into any of the ten or fifteen restaurants on the property and order whatever they want without looking at a price tag. If you have to keep your credit card in your pocket all day long it is hard to actually relax.</p>

      <h2>Maintenance and the Details</h2>

      <p>You have to look at the bones of the property. Brochures are great at hiding the cracks. I look at the age of the rooms and how often they are renovated. Is the air conditioning quiet and effective? Is the water pressure in the shower actually good? Are the pillows high quality or are they the flat ones you find at a budget motel?</p>

      <p>I also look at the common areas. If the pool tiles are missing or the beach umbrellas are tattered it tells me the management is cutting corners. If they are cutting corners on the things you can see they are definitely cutting corners on the things you cannot see like food safety or staff pay.</p>

      <h2>The Whimsical Factor</h2>

      <p>Finally I look for the vibe. A resort can be fancy but boring. My brand is all about fun experiences. I want a place that has some personality. I want a resort that feels like it belongs in the Caribbean rather than a boxy hotel that could be in the middle of a city anywhere. I look for unique architecture and gardens that make you want to go for a walk.</p>

      <h2>Why You Need an Advisor</h2>

      <p>This is why I do what I do. I spend my time digging through the reviews and visiting these properties so you do not have to. I know which five star resorts are actually three stars in disguise. I know which ones have the best beaches and which ones have the best food.</p>

      <p>Luxury is not just a label. It is a feeling of being taken care of. It is the peace of mind that comes from knowing you made the right choice. If you are ready to stop guessing and start traveling the right way let us plan your next detour together.</p>

      <p>Eric Carney<br/><a href="https://happydetour.com">Happy Detour Travel</a><br/>Affordable vacations. Fun experiences. Everyone welcome.<br/><a href="https://instagram.com/happydetourtravel">@happydetourtravel</a></p>
    `,
  },
  {
    slug: 'why-i-started-happy-detour-travel',
    title: 'Why I Started Happy Detour Travel',
    date: '2026-03-15',
    tag: 'Behind the Brand',
    excerpt: 'I work a lot. Like, a lot a lot. And for a long time, the way I dealt with that was simple. I traveled.',
    image: '/blog/pexels-raymond-148038562-10480288.jpg',
    content: `
      <p>I work a lot. Like, a lot a lot. And for a long time, the way I dealt with that was simple. I traveled.</p>

      <p>Not just a trip here and there either. I've been on 17 solo cruises. I've walked the streets of London and Tokyo. I've relaxed at all inclusive resorts and explored more places than I can count. Travel isn't something I stumbled into. It's been a big part of my life for a long time.</p>

      <p>But cruising is my thing. There's nothing like going to sleep on a ship and waking up in a completely different country. The Cayman Islands is my favorite island I've ever stepped off a ship onto. The water, the people, the energy. And if you ever get the chance to visit Coco Cay, Royal Caribbean's private island, do it. It's one of those places that makes you stop and think. Everybody needs to experience something like this.</p>

      <p>That's actually what this whole thing is about.</p>

      <p>The people you meet on a cruise ship can become lifelong friends. I've met people five years ago on a ship that I'm still cruising with today. There's something about traveling that opens people up in a way nothing else does. And somewhere along the way, everyone around me started living vicariously through my trips. Friends, family, coworkers all saying "I want to do that."</p>

      <p>That planted a seed.</p>

      <p>I looked into starting a travel agency, found WorldVia, did my research, and thought this is something I could actually do. Life got busy, the holidays hit hard as a grocery store manager, and the idea sat for a while. But then January came, then February. Two more cruises, another friend who had never sailed before who now wants to book his next trip. And it all clicked.</p>

      <p>This wasn't just about travel for me anymore. It was about helping people find their own happy detour. Because this world is beautiful, and everybody deserves to slow down, step away, and just take it all in.</p>

      <p>That's what Happy Detour Travel is about.</p>

      <p>Affordable vacations. Fun experiences. Everyone welcome.</p>

      <p>Eric<br/>@happydetourtravel</p>
    `,
  },
  {
    slug: 'how-happy-detour-travel-got-its-name',
    title: 'How Happy Detour Travel Got Its Name',
    date: '2026-03-16',
    tag: 'Behind the Brand',
    excerpt: 'March 13, 2026. That\'s the day everything became official.',
    image: '/blog/happy_detour_logo_transparent.png',
    content: `
      <p>March 13, 2026. That's the day everything became official.</p>

      <p>I've always wanted to be an entrepreneur. For a long time the path I had in my head was opening a laundromat. I have a name for it, I have ideas for it, and I have a vision for it. But a laundromat takes capital. A lot of capital. And right now capital is the reason that dream is sitting on the shelf. It's not off the table. Not even close. But today is not that day.</p>

      <p>Looking around, I realized something. Everyone in my life was a little zealous of me traveling. They wanted to experience it too. They wanted to see the world, take a break, and just enjoy life. And that got me thinking. What if I took something I was already passionate about and used it to help other people live life and make their dreams happen too?</p>

      <p>It didn't take long to find the answer.</p>

      <p>I started thinking about names. I wanted something that fit with everything I was building. I went through a bunch of ideas. Carney Vacations. Travel with Eric. Cruise with Eric. Nothing clicked. Nothing felt like a brand. Nothing felt like me.</p>

      <p>And then it came to me. Sometimes the best things in life happen when you take a happy detour. Think about it. We all make plans. We map things out. We know exactly how it's supposed to go. But life doesn't always follow the plan. Sometimes you end up somewhere you never expected and it turns out to be better than anything you originally had in mind. That's a happy detour.</p>

      <p>I checked happydetour.com. Available. I looked at the social handles and that's where it got interesting. @happydetour was already taken by a band. So I thought, what about happydetourtravel? I checked every platform. Wide open across the board. That actually made more sense anyway. It tells people right away that it's travel. So I secured happydetour.com and locked down @happydetourtravel everywhere. That felt like a sign.</p>

      <p>Within an hour and a half, maybe two hours, Happy Detour Travel was born. The name, the tagline, the vision. It all came together that day. And I haven't looked back since.</p>

      <p>HDT. That's what I call it now because I've typed Happy Detour Travel so many times in the past month that I had to abbreviate it. But no matter how you say it, the meaning stays the same.</p>

      <p>"Sometimes the best journeys begin with a happy detour." - Eric Carney</p>

      <p>I truly believe that.</p>

      <p>Eric<br/>happydetour.com<br/>@happydetourtravel<br/>Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: 'i-didnt-know-anything-about-websites-but-i-built-one-anyway',
    title: 'I Didn\'t Know Anything About Websites… But I Built One Anyway',
    date: '2026-03-18',
    tag: 'Behind the Brand',
    excerpt: 'I want to be real about this because I think a lot of people get stuck in the same place I was in. I had this idea for a laundromat and I bought a domain for it a while back through GoDaddy. When the renewal came up, it was about $20 for the year. I wasn\'t using it. And that\'s what bothered me.',
    image: '/blog/gemini_generated_image_f29likf29likf29l.webp',
    content: `
      <p>I want to be real about this because I think a lot of people get stuck in the same place I was in. I had this idea for a laundromat and I bought a domain for it a while back through GoDaddy. When the renewal came up, it was about $20 for the year. Now, I'm not going to sit here and say I couldn't afford $20, but I also wasn't using it. And that's what bothered me. If I'm not building anything yet, why am I paying more than I need to just to hold a name?</p>

      <p>So I started thinking a little differently. If I'm going to keep domains for future ideas, I should at least do it smarter and cheaper. I did what most people do and went to YouTube. I started searching for domain hosting, website hosting, and how to do all of this without spending a ton of money.</p>

      <p>I went from having one tab open to about fifty-seven. My computer fan was screaming, and I was just sitting there staring at names like Porkbun wondering if I was accidentally looking at a lunch menu or a tech site. I kept seeing the same names come up over and over again like Namecheap, Porkbun, Dynadot, Spaceship, and Cloudflare. All of it was new to me, but one stood out.</p>

      <p>Spaceship.</p>

      <p>Something about it just clicked. The site looked clean, modern, and easy to understand. I really liked the black and blue look. It just felt simple. So I tried it. I registered happydetour.com there and what really got me was the price. It was under $10 a year to keep the domain. That changed everything for me because when you really think about it, the difference between $20 and $10 is basically a Starbucks coffee. And honestly, I'm more of a Dunkin person anyway.</p>

      <p>I'm just a guy in Ohio trying to clear the fog. I don't have a Silicon Valley team; I have a laptop, a cold Dunkin coffee, and a refusal to be outsmarted by an algorithm. So I went ahead and transferred my other domain over too. Now I'll be honest with you, transferring a domain when you have no idea what you're doing is a little confusing. I had to slow down, figure it out, and not panic when something didn't work right away. I found a fix, got everything set up in about 20 minutes, and then just waited. The full transfer took about five days.</p>

      <p>Then I was sitting there thinking, okay, now I have this domain. Now what? Because I didn't know how to build a website. I was starting from zero.</p>

      <p>So I'm not going to lie, I used AI to help me get started. Inside Spaceship, I saw they offered a website builder called Alf. It was about $5 a month, which felt easy to justify, so I tried it. And it worked, kind of. But I don't want my website to sound like AI. You know how you can read something and instantly tell it's AI? The tone feels off and the wording feels too perfect. I didn't want that. I used AI to give me a starting point and then I would go in and rewrite everything to make it sound like something I would actually say.</p>

      <p>I eventually hit a wall with Alf. That's when I started thinking maybe I needed help. I looked into hiring someone and that's when reality hit. It can cost $2,000 or more. That just wasn't an option for me.</p>

      <p>I went back to figuring it out myself and that's when I found Readdy AI. This time, something clicked. Then the algorithm finally did something useful. I came across a company talking about automation and they mentioned something that changed everything: Vercel.</p>

      <p>The catch was that I had to figure out GitHub. Looking at GitHub for the first time felt like trying to read code while it was raining. It's a lot of black screens and green text that looks like it belongs in a movie, not in my living room. But I spent the time and I did the work. I moved my vision to a repository and finally to the live web.</p>

      <p>Now I'm not going to sit here and pretend I'm an expert. I'm not. I'm still learning and I'm still tweaking things as I go. But here's the part that matters: I didn't know anything about domains. I didn't know anything about hosting. I didn't know how to build a website. And now I have one.</p>

      <p>happydetour.com is live. And I built it myself.</p>

      <p>If you're sitting there thinking you don't know enough to start something, I promise you, neither did I. You figure it out one step at a time.</p>

      <p>Eric<br/>Happy Detour Travel — Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: 'building-the-engine-under-the-hood',
    title: 'Building the Engine Under the Hood',
    date: '2026-03-19',
    tag: 'Behind the Brand',
    excerpt: 'After I got the website live, I had a moment where I just sat back and looked at the screen. It was a win, but then the "what now" set in. A website is a great digital billboard, but I didn\'t want to spend my whole day manually answering every single email and tracking leads on a sticky note.',
    image: '/blog/n8n-coffee.webp',
    content: `
      <p>After I got the website live, I had a moment where I just sat back and looked at the screen. It was a win, but then the "what now" set in. A website is a great digital billboard, but I didn't want to spend my whole day manually answering every single email and tracking leads on a sticky note. I wanted this business to work for me, even when I was away from the desk.</p>

      <p>That's when I took a deep dive into automation.</p>

      <p>The first piece of the puzzle was getting a professional business line. I went through Quo, and they were great. What really sold me was that they offered integration with HubSpot. If you're not a tech person, HubSpot is basically the brain where you keep all your client info so nothing falls through the cracks.</p>

      <p>Then I found n8n on YouTube. It's a tool that lets all your different apps talk to each other. I spent some time figuring it out, and now I have a system that feels like magic. When someone fills out a form on happydetour.com, n8n automatically creates a contact and a deal in HubSpot.</p>

      <p>But I didn't want it to feel like a robot was answering. I programmed the system to wait seven minutes before doing anything. That way, when the client gets an email, it feels like I actually sat down and sent it myself. It feels authentic. Five minutes after that, the system sends them a text to set up a calendar invite so we can actually talk about their vacation.</p>

      <p>While the automation is handling the "paperwork," it sends me an email to let me know a new lead is in. That's when my real work starts.</p>

      <p>One thing I've learned quickly is that by the time someone reaches out to a travel planner, they've usually already done hours of their own research. You can't just show up and wing it. You have to sound like you know the destination better than they do if you want to keep them as a client. So, while the system is sending those timed messages, I'm already hitting the books. I start putting together ideas and familiarizing myself with the trip so that when we do get on that call, I'm the expert they need.</p>

      <p>It's a lot of work to set all this up, and I'm still learning as I go, but I'm hopeful. I'm building an engine that lets me focus on the travel, not just the typing.</p>

      <p>The fog is clearing, and the engine is officially humming.</p>

      <p>Eric<br/>Happy Detour Travel — Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: 'how-i-made-my-travel-website-more-visible-on-google',
    title: 'How I Made My Travel Website More Visible on Google (And Did It Myself)',
    date: '2026-03-21',
    tag: 'Behind the Brand',
    excerpt: 'I wasn\'t sure what to expect, but the results were a massive wake-up call. The good news was my overall score was a 64 out of 100. My content quality actually scored a 90, which felt like a huge win. But then I saw the one big problem that was holding the whole site back.',
    image: '/blog/desk-google-green-check.webp',
    content: `
      <p>I wasn't sure what to expect, but the results were a massive wake-up call.</p>

      <p>The good news was my overall score was a 64 out of 100. My content quality actually scored a 90, which felt like a huge win. The report said the writing is clear, friendly, and easy to understand. That has always been the goal for me. Travel planning should feel simple and welcoming, not like you're reading a technical manual.</p>

      <p>But then I saw the one big problem that was holding the whole site back.</p>

      <h2>The Issue: Google Didn't Know Who I Was</h2>

      <p>Even though the content was strong, my site was missing something called structured data. Think of it like invisible code that acts as a map for Google, AI search tools, and other search engines. It tells them exactly who you are, what you're selling, and how people can find you.</p>

      <p>My structured data score? A big fat zero.</p>

      <p>Without that code, search engines are basically just guessing what your site is about. And when they guess, they usually get it wrong or they just skip over you entirely. That's a death sentence when you're trying to grow a small travel business from the ground up.</p>

      <h2>What I Did About It</h2>

      <p>Instead of panicking or hiring an expensive agency, I decided to fix it myself. My site is built with React and hosted on Vercel, so I went straight into my index.html file to start adding the tags Google was looking for.</p>

      <p>I focused on five main areas:</p>

      <ol>
        <li><strong>Organization Schema:</strong> I added the code that tells Google that Happy Detour Travel is a real business with a name, a website, and a real description.</li>
        <li><strong>Person Schema:</strong> This was personal. It connects my name, Eric Carney, to the business as the Independent Travel Advisor behind it all. It builds that credibility that search engines and AI tools look for.</li>
        <li><strong>Service Schema:</strong> This tells the bots exactly what I do. I'm not just a generic site; I offer personalized travel planning for cruises, all-inclusive resorts, and custom getaways.</li>
        <li><strong>Canonical URL:</strong> One simple line that tells Google which version of my page is the "official" one so I don't get penalized for duplicate content.</li>
        <li><strong>Open Graph Tags:</strong> These are the reason a link looks professional when you share it on Facebook or in a text message. Instead of just a plain blue link, it now shows a proper title and a description that actually makes people want to click.</li>
      </ol>

      <h2>Did It Work?</h2>

      <p>After I committed the changes through GitHub, I ran Google's free Rich Results Test. I sat there for a second waiting for the page to load, and then I saw it: a big green checkmark.</p>

      <p>✅ 1 valid item detected. Crawled successfully.</p>

      <p>Google confirmed it could finally see the structured data. That was the moment I knew the "invisible" days were over.</p>

      <h2>Why This Matters</h2>

      <p>Before I sat down to fix this, my site was sitting 38 points below the average for my competitors. Now that gap is closed.</p>

      <p>I'm not saying I'll be on the front page of Google by tomorrow morning. SEO is a long game and it takes time. But the foundation is finally solid. My site is now set up so that search engines and AI tools understand exactly what Happy Detour Travel is and who it's for.</p>

      <p>It was one more step in the process, one more thing I had to learn on the fly, and I did it all myself.</p>

      <p>Eric<br/>Happy Detour Travel: Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: 'the-virgin-voyages-adults-only-reality-check',
    title: 'The Virgin Voyages "Adults Only" Reality Check',
    date: '2026-04-27',
    tag: 'Cruise Tips',
    excerpt: 'If you have spent any time on social media lately you have seen the red hammocks and the chic gray hulls of the Virgin fleet. It looks cool in photos but as a travel advisor I have to look past the lighting and the music. I have to know if it actually delivers on the promise of a better vacation.',
    image: '/blog/img_61616.webp',
    content: `
      <p>If you have spent any time on social media lately you have seen the red hammocks and the chic gray hulls of the Virgin fleet. They call their passengers Sailors and their staff Crew. They have a tattoo parlor on board and replaced the classic buffet with a high-end food hall. It looks cool in photos but as a travel advisor I have to look past the lighting and the music. I have to know if it actually delivers on the promise of a better vacation. After seeing it in action here is the reality of the Virgin Voyages experience.</p>

      <h2>The No Kids Factor</h2>

      <p>Let us start with the most obvious difference. There are no kids. No one under eighteen is allowed on the ship. This changes the entire energy of the vacation. On most cruises you have to navigate around strollers or deal with the noise of a packed splash pad. On Virgin the vibe is consistently adult. It is not necessarily a non-stop party but it is a place where you can actually have a conversation. The pool deck feels more like a beach club in Ibiza than a theme park. If you are a parent looking for a break or a solo traveler who wants a sophisticated environment this alone makes the cruise worth it.</p>

      <h2>The Food Revolution</h2>

      <p>Virgin decided to throw the traditional cruise dining playbook out the window. There is no main dining room where you sit at the same table every night at 6pm. There is no massive buffet where the food has been sitting under heat lamps for hours. Instead they have over twenty individual eateries.</p>

      <p>The Wake is their high-end steak and seafood spot and it feels like a classic Hollywood haunt. Then you have Pink Agave which serves elevated Mexican food that would hold its own in any major city. My personal favorite is Gunbae which is a social Korean BBQ experience where you grill your food right at the table.</p>

      <p>The best part is that all of these specialty spots are included in your base fare. On most other lines you would be paying an extra fifty dollars per person to eat at places this good. On Virgin it is just part of the deal. The only thing you pay extra for is alcohol and they even make that easy with a Bar Tab system that often comes with extra credits when you book through an advisor.</p>

      <h2>What Is Missing?</h2>

      <p>You have to know what you are giving up. If you love the classic cruise experience you might feel a bit lost here. There are no Broadway musicals like you would find on Royal Caribbean. The shows on Virgin are immersive and a bit experimental. One night you might be watching a modern retelling of a classic story and the next you are in a night club environment with acrobats over your head.</p>

      <p>There are also no drink packages. Virgin believes that unlimited packages lead to overconsumption and bad vibes. Instead you pay for what you drink or use your pre-paid bar tab. For some people this is a dealbreaker but for most it actually ends up being cheaper because you aren't trying to drink your money's worth every day.</p>

      <h2>The Design and the Tech</h2>

      <p>The ships are beautiful. They feel like boutique hotels. The cabins have smart tech where you can control the lights and the curtains from a tablet. The hammocks on the balconies are not just for show. They are genuinely comfortable and the perfect place to watch the ocean.</p>

      <p>As someone who builds my own websites and values good tech I appreciate how much thought went into their app. It is not perfect but it makes booking your dinner reservations and checking the daily schedule much easier than the paper flyers other lines still use.</p>

      <h2>The Final Verdict</h2>

      <p>Virgin Voyages is for the traveler who wants something different. It is for the person who wants great food and a relaxed atmosphere without the noise of a family resort. It is not for everyone and that is exactly why it works. If you want to see what the future of cruising looks like this is it.</p>

      <p>If Virgin sounds like your kind of trip, you can <a href="https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK">book directly here</a> or reach out through my <a href="https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba">contact form</a> if you want help choosing the right sailing.</p>

      <p>Eric<br/><a href="https://happydetour.com">Happy Detour Travel</a><br/>Affordable vacations. Fun experiences. Everyone welcome.<br/><a href="https://instagram.com/happydetourtravel">@happydetourtravel</a></p>
    `,
  },
  {
    slug: 'day-in-the-lab-robots-reviews-and-real-deals',
    title: 'Day in the Lab: Robots, Reviews, and Real Deals',
    date: '2026-04-29',
    tag: 'Behind the Brand',
    excerpt: 'It started with a PageSpeed score and ended with a full destinations page. Here is everything that happened in the Happy Detour lab today.',
    image: '/blog/image_667.webp',
    content: `
      <p>It started with a PageSpeed score and ended with a full destinations page. Here is everything that happened in the Happy Detour lab today.</p>

      <h2>The Score Check</h2>

      <p>I ran happydetour.com through PageSpeed Insights this morning and walked away with an 86 for Performance, 88 for Accessibility, 100 for Best Practices, and 92 for SEO. Not bad at all. But I spotted a few things worth fixing to get those numbers even higher.</p>

      <p>First up was the robots.txt file. Turns out I never had one. Google was hitting a 404 error every time it tried to find it. That alone was flagging 130 errors in my SEO score. Five minutes of coding later and it was live at happydetour.com/robots.txt. Problem solved.</p>

      <h2>Accessibility Wins</h2>

      <p>The accessibility score had two flags. The first was contrast. Some of the text on the hero section was a little too faint for easy reading. I bumped the opacity on a few text elements and called it done.</p>

      <p>The second was a list structure issue in the How It Works section. The ScrollReveal animation wrapper was sitting between the ordered list and the list items. This was confusing screen readers for my visually impaired guests. I moved the wrapper inside the list item and fixed it clean.</p>

      <h2>Getting Social</h2>

      <p>With the site in good shape I turned my attention to traffic. Right now Happy Detour Travel has 13 followers on Facebook and most of them are people I already know. That has to change if this brand is going to grow.</p>

      <p>I joined three Facebook groups where my actual clients hang out. One is for All Inclusive Vacation Deals with 625K members. Another is for Vacation Ideas for Any Budget with 9K members. The last is for Cruise Ships and Cruise Deals with 147K members.</p>

      <p>The strategy is simple. Show up. Answer questions. Be helpful. No hard selling. I want people to find me naturally because they trust my expertise. I also drafted a community post for a business promotion group called The Departure Lounge to get some organic growth going.</p>

      <h2>The Testimonials Page</h2>

      <p>This was a big one. happydetour.com/testimonials is now live. Since I do not have a mountain of client reviews yet I built the page to feel active instead of empty.</p>

      <p>There is a stats bar showing I am 100% focused on the next departure and three Coke Zeros deep into research. There is a live ticker showing current trips in progress. I also added a personal note about being a real person in Ohio who genuinely loves doing this.</p>

      <p>The page has two calls to action. There is a Google Review button for when my Google Business Profile gets verified. There is also a button called Tell Everyone About Your Happy Detour that links to the new review form.</p>

      <h2>The Detour Debrief Form</h2>

      <p>Speaking of the review form, I built a whole new n8n workflow just for collecting client testimonials. I called it The Detour Debrief. The questions are designed to pull out real stories instead of just star ratings.</p>

      <p>I am asking about the adventure and where people are reporting back from. I want to know the best moment of the detour and what I handled so they didn't have to. I ask for three words to describe the trip and what stood out about the ship or resort. There is even a photo upload so I can see the trip in the wild.</p>

      <p>When someone submits the form their photo goes straight to a Happy Detour Reviews folder in Google Drive. Then I get an email at eric@happydetour.com with all their answers and a link to the photo. It is clean, automated, and ready to go.</p>

      <h2>The Review Success Page</h2>

      <p>After submitting The Detour Debrief clients land on a brand new page at happydetour.com/review-success. It thanks them in classic Happy Detour style. It asks them to tag me on Instagram and Facebook. It nudges them toward a quick star rating to help the next traveler find their way. Finally it sends them back to this blog if they are curious how any of this works.</p>

      <h2>Travel Deals You Can't Miss</h2>

      <p>The final piece of the day was happydetour.com/destinations. This is a page I have wanted for a while. It features three picks that I actually stand behind.</p>

      <p>Virgin Voyages is there for the adults who want something different. Sandals is for couples looking for the real deal. Beaches is for families who want the parents to actually relax. I also included a section for Royal Caribbean, Norwegian, and MSC with a direct line to get a custom quote from me personally.</p>

      <p>No fluff. No filler. Just the good stuff.</p>

      <h2>Sitemap and Search Console</h2>

      <p>I wrapped up the day by updating the sitemap to include all six pages and resubmitting it to Google Search Console. Google picked them up almost immediately.</p>

      <h2>What's Next</h2>

      <p>Google Business Profile verification is on the list. The privacy policy is still with legal counsel. And the first client booking is the one I am really waiting for.</p>

      <p>Everything is built. Everything is ready. Now it is time to get to work.</p>

      <p>Affordable vacations. Fun experiences. Everyone welcome.</p>

      <p>Eric<br/>Happy Detour Travel<br/>happydetour.com</p>
    `,
  },
  {
    slug: 'the-first-client',
    title: 'The First Client',
    date: '2026-05-01',
    tag: 'Behind the Brand',
    excerpt: 'The bags are not quite packed yet, but the confirmation emails are sitting in my inbox and that feels just as good. I hit a milestone this week that I have been working toward since I first sat down at my Citrus MacBook to code the very first page of Happy Detour Travel.',
    image: '/blog/sisteratsea-credit-vv.webp',
    content: `
      <p>The bags are not quite packed yet, but the confirmation emails are sitting in my inbox and that feels just as good.</p>

      <p>I hit a milestone this week that I have been working toward since I first sat down at my Citrus MacBook to code the very first page of Happy Detour Travel. It is one thing to build a website and talk about the "Lab" and your vision for travel, but it is another thing entirely when the first official booking happens. This week, it happened twice.</p>

      <h2>The MSC Seascape: A Deal Too Good to Ignore</h2>

      <p>Let's talk about the first trip on the books. This one actually started with me doing some deep-dive research into MSC Cruises. I have mentioned this before, but MSC is currently a European line that is aggressively trying to win over the American market. When a massive company wants to compete like that, it results in one thing for travelers: incredible value.</p>

      <p>I found a base rate for an upcoming sailing on the MSC Seascape for 645 dollars. When you see a number like that for a ship of this caliber, you do not just scroll past it. I reached out to a close friend I work with and told her about the deal. I asked if she wanted to come along, and she did not hesitate. We got the trip booked immediately.</p>

      <img src="/blog/msc-seascape-credit-reddit.webp" alt="MSC Seascape cruise ship" />

      <p>I have sailed with MSC three times already. I know the Armonia well and I have been on the Meraviglia twice. I know exactly what to expect from their service and their ships, but the Seascape is something I have been watching videos of for months. The atrium is stunning and the outdoor promenade looks like the perfect place to spend a sea day.</p>

      <p>People often sleep on MSC because they are the "new kids" on the block in the States, but my goal with Happy Detour is to find those hidden gems. I am not just sending people on trips; I am finding the trips that I would actually take myself. In this case, I literally am.</p>

      <h2>The "Sisters at Sea" Connection</h2>

      <img src="/blog/sisteratsea-credit-vv.webp" alt="Sisters at Sea Virgin Voyages event" />

      <p>While we were getting the MSC trip sorted, something else happened that proved the "Lab" is actually working. I made a post on my Facebook about a "Sisters at Sea" concept with Virgin Voyages. I wanted to highlight the unique vibe that Virgin brings to the table: adults-only, high-end food, and a very modern approach to cruising.</p>

      <p>A friend from work saw that post and messaged me right away. She told me she wanted to go and trusted me to handle the details. I jumped back into the lab and booked that Virgin Voyages trip for her right away. It felt incredible to see a simple post turn into a real-life vacation for someone I know.</p>

      <p>Then, the story took a fun turn. After the booking was finalized, she asked if I wanted to room with her. So now I am taking a trip that I originally booked for a guest because she invited me along for the ride. This is exactly the kind of "happy detour" I hoped for when I started this brand.</p>

      <h2>Double the Virgin Voyages, Double the Excitement</h2>

      <p>The funny thing about this Virgin Voyages booking is that it is actually my second one on the books, even though I have not even stepped foot on one of their ships yet.</p>

      <p>My first experience with them will be this October when I head out on a transatlantic sailing. I have been researching their brand for so long that I feel like I already know the ships, but there is nothing like actually being on board. To have a second sailing booked before the first one even starts is a testament to how much I believe in what they are doing.</p>

      <p>Between the October transatlantic and this new "Sisters at Sea" trip, I am going to have a lot of first-hand data to share with all of you. That is a core part of the Happy Detour mission: I go first so I can tell you exactly what is worth your time and money.</p>

      <h2>The Logistics: Why the Details Matter</h2>

      <p>One of the things I made sure to handle for both of these trips was the pre-cruise hotel stay. There is nothing worse than scrambling at the port on embarkation day because a flight was delayed or a shuttle did not show up.</p>

      <p>I sorted out the hotels for the night before so we can wake up, have a relaxed breakfast, and head to the ship without any stress. That is the kind of detail I handle for my guests. I want your vacation to start the moment you leave your front door, not just when you walk up the gangway.</p>

      <h2>Real People, Real Trips</h2>

      <p>This week has been a whirlwind, but it has reinforced why I did not want to use a standard template for my website or a corporate-sounding voice for my brand. Happy Detour Travel is not about sitting behind a desk and sending automated links. It is about helping real people get on real ships to have real experiences.</p>

      <p>When my colleagues and friends trust me with their hard-earned vacation time, I take that responsibility seriously. Whether it is finding a 645 dollar base rate on a luxury European liner or helping a friend navigate the "Sisters at Sea" experience on Virgin, I am here to do the heavy lifting so you can just enjoy the view.</p>

      <p>If you have been sitting on an idea for a trip but have not reached out yet, consider this your sign. Whether you want a rugged "cowboy" experience in the West, a jungle and beach mix in Belize, or a high-end cruise on the Seascape, let's get into the lab and make it happen.</p>

      <p>Start with an idea and I will do the rest.</p>

      <p>Affordable vacations. Fun experiences. Everyone welcome.</p>

      <p>Eric<br/>Happy Detour Travel<br/>happydetour.com</p>
    `,
  },
  {
    slug: 'lab-updates-quick-wins-and-whats-coming-next',
    title: 'Lab Updates, Quick Wins, and What\'s Coming Next',
    date: '2026-05-02',
    tag: 'Behind the Brand',
    excerpt: 'Some days in the lab are all about the big vision. But other days are all about the quiet details. There are no flashy new pages or big launches today. Instead, I spent my time finding the small things that were quietly holding the site back and fixing them one by one.',
    image: '/blog/n8n-coffee.webp',
    content: `
      <p>Some days in the lab are all about the big vision. You are dreaming up new destinations or looking at photos of ships you cannot wait to board. But other days are all about the quiet details. There are no flashy new pages or big launches today. Instead, I spent my time finding the small things that were quietly holding the site back and fixing them one by one.</p>

      <p>This is one of those entries where we look under the hood. If Happy Detour Travel is going to be the best resource for affordable and fun vacations, the engine has to run perfectly.</p>

      <h2>The Klok Labs Audit</h2>

      <p>I decided to run happydetour.com through Klok Labs again to see where we stand. It came back with a 69 out of 100. That is a solid score for a site that I coded from scratch on a MacBook, but "good" isn't where I want to stay. The report flagged five specific wins that were worth addressing to make the site faster and more visible.</p>

      <p>The first issue was the canonical URL. For those who do not spend their time in the lab, this basically tells search engines which version of your site is the original. It turns out I never had one set up. That meant Google could have been indexing multiple versions of the site and splitting the credit between them. I added one line of code to the index file and that problem is now a thing of the past. It is a small change that makes a huge difference in how the world finds us.</p>

      <p>Next was the meta description. This is the little snippet of text you see under a link when you search for something. Mine was running at 191 characters, which is a bit too long for search engines to display cleanly. I trimmed it down to 154 characters. It is punchy, it fits the screen, and it still communicates exactly what Happy Detour is all about.</p>

      <h2>Defining the Brand for the Robots</h2>

      <p>The third fix was about brand entity definition. We live in a world where AI models and search engines are constantly crawling the web to understand what a business actually does. They need a clear, one-sentence explanation to categorize you correctly.</p>

      <p>I added a new definition to the About section in plain, visible text. Now, there is no ambiguity for any person reading the page or any bot crawling it. Happy Detour Travel is officially defined so the right people can find us at the right time.</p>

      <p>Fourth, I took a look at the footer. I was showing both a published date and a last modified date for the content. While I thought that was helpful, it can actually send mixed signals about how fresh the information is. I simplified it to show just the last modified date. If you are looking for travel advice, you want to know it is current, and this change makes that clear.</p>

      <p>Finally, the report flagged the H1 tag, which is the main heading of a page. After I dove back into the code, I realized it was already implemented correctly. Sometimes the report is just checking your work, and in this case, the foundation was already solid. No change was needed there, which felt like a small victory.</p>

      <h2>Showing Up on Social</h2>

      <p>Beyond the technical fixes in the lab, I have been spending a lot of time in the Facebook groups I joined recently. This is a different kind of work, but it is just as important.</p>

      <p>I am not there to pitch or sell. I am there to answer questions and be genuinely helpful. If someone is confused about a cruise line or needs advice on a destination, I jump in. No links, no hard sells, just real advice. I want people to find the Happy Detour brand naturally because they see I know my stuff.</p>

      <p>I also spent some time in a follow for follow community. I picked up some new page followers this way. The numbers are still small, but these are real people who now see Happy Detour Travel in their feed on a regular basis. Every follower is a new person who might one day need a happy detour of their own.</p>

      <h2>The Road Ahead</h2>

      <p>The site is in a very good place technically. The social presence is slowly but surely growing. My next big focus is getting the Google Business Profile verified. Once that is done, the review button on the testimonials page will actually go somewhere. That is the final piece of the puzzle to make local search start working for the brand in a big way.</p>

      <p>There is also a lot of travel coming up on the calendar very soon. That means a lot of firsthand experience to bring back to the blog and the site. I am not just reading about these places; I am going there to see them for myself so I can give you the real story.</p>

      <p>The lab is never truly finished, but today, the engine is running a lot smoother than it was yesterday. More updates are coming soon as we get closer to the next big trip.</p>

      <p>Affordable vacations. Fun experiences. Everyone welcome.</p>

      <p>Eric<br/>Happy Detour Travel<br/>happydetour.com</p>
    `,
  },
  {
    slug: 'the-great-chatbot-experiment',
    title: 'The Great Chatbot Experiment: Why I am Sticking to Personal Service',
    date: '2026-05-03',
    tag: 'Behind the Brand',
    excerpt: 'Running Happy Detour Travel means I am always looking for ways to help people plan trips without adding more complexity to the process. The real challenge is that people land on my website, have questions, and often leave before I even realize they were there.',
    image: '/blog/img_56.webp',
    content: `
      <p>Running Happy Detour Travel means I am always looking for ways to help people plan trips without adding more complexity to the process. The real challenge is that people land on my website, have questions, and often leave before I even realize they were there. It feels like a missed connection.</p>

      <p>I have been running Facebook and Instagram ads for my current group cruises. Right now I am focused on getting travelers on board the <a href="https://happydetour.com/everyonewelcome">MSC Seascape</a> sailing in September 2026 and our ABC Islands sailing on <a href="https://happydetour.com/carnival">Carnival Horizon</a> in October 2026.</p>

      <p>I am getting hits on the website. But the reality is, out of 14 visitors who clicked through, I only had one person show real interest. That is not a traffic problem. That is a conversion problem.</p>

      <h2>The Theory: Give Them Instant Answers</h2>

      <p>I thought the solution was an AI chatbot. I spent hours today training a bot on 45 unique questions and answers, a list that started with the spreadsheet. It covered everything from "Is this actually free?" to "Do I need a passport?" and "What should I pack?"</p>

      <p>I also looked into a tool called Tidio to add a live chat widget to my landing pages. I walked through the setup, picked my goals, and even got the code live on my GitHub repo so Vercel could deploy it.</p>

      <h2>The Reality: Tech Friction is Real</h2>

      <p>As soon as I got these tools live, I saw the problems.</p>

      <p>First, the "annoying popup" issue. One of the tools immediately hit visitors with a "Subscribe now" form for a newsletter I do not even have yet. It felt pushy and corporate. It got in the way of the actual story I am trying to tell about these beautiful Caribbean destinations.</p>

      <p>Second, the clutter. The chat widgets were overlapping with my "Reserve Now" buttons. It looked messy. My landing pages are designed to be calming and simple, and suddenly they felt like a busy tech dashboard.</p>

      <p>But the biggest reason I decided to pull the plug? It just did not feel like me.</p>

      <h2>Why I Drove a "Happy Detour" Away from Bots</h2>

      <p>I realized that people do not come to a travel advisor for a bot. They come to a travel advisor because they want a human.</p>

      <p>Most people are used to booking travel entirely online with faceless corporations. They are not used to working with an advisor who has personally sailed on 17 cruises and knows exactly which cabin they should pick. When I add a bot to that mix, I am just adding another layer of "tech" between me and the people I want to help.</p>

      <p>I do not need multi-channel management or automated flows right now. Most of my clients just want to text me. I do not need the extra complexity, and neither do they.</p>

      <h2>Where Things Stand Now</h2>

      <p>I have removed the chatbot code and the Tidio widget from all my pages. I am keeping things lean and focused. Both landing pages now have a floating reserve button with a cruise ship icon, clear and simple ways to call, text, or email me directly, and zero annoying popups or bots getting in the way.</p>

      <p>I am not spending money on a paid chat plan until I know it is actually helping my clients. That is how I run this business. I test a feature, I learn from it, and I am not afraid to pivot if it does not fit the brand.</p>

      <p>If you have been thinking about a vacation, you can still get all those questions answered. But instead of a bot, you will be talking to me. There is absolutely no pressure. We just want to help you find that perfect escape.</p>

      <p><a href="https://happydetour.com">Happy Detour Travel</a> — Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: 'why-im-all-in-on-the-msc-seascape-this-september',
    title: 'Why I\'m All in on the MSC Seascape This September',
    date: '2026-05-10',
    tag: 'Cruise Tips',
    excerpt: 'I\'ve cruised MSC three times now. Once on the Armonia and twice on the Meraviglia. And every single time, I\'ve had a good time. So when I saw the MSC Seascape sailing out for a week in September, I knew I wanted to be on it. And I wanted to bring people with me.',
    image: '/blog/seascape.webp',
    content: `
      <p>I've cruised MSC three times now. Once on the Armonia and twice on the Meraviglia. And every single time, I've had a good time. Not because everything was perfect. Not because I stayed in the fanciest suite or ate at the most expensive restaurant. But because when you cruise, it's about the ship, the people you're with, and the experiences you let yourself have.</p>

      <p>So when I saw the MSC Seascape sailing out for a week in September, I knew I wanted to be on it. And I wanted to bring people with me. This is the ship I'm booking my group on, and after everything I've learned about it, I'm confident this is going to be a trip worth remembering.</p>

      <h2>The Ship That Gets Heads Turning</h2>

      <p>The MSC Seascape is massive. We're talking 170,000 tons and 19 decks of pure cruise ship. It's built to hold over 5,000 people, but here's the thing. Even with that many guests, the ship feels designed so you can find your own space. There are quiet corners if you want them. There are lively pool decks if that's your vibe. And the layout makes it easy to move around without feeling like you're fighting the crowds.</p>

      <p>The first thing people talk about when they board the Seascape is the atrium. It's four decks high with this sweeping staircase covered in 10,000 Swarovski crystals. It's meant to feel like New York City glamour, and it does. You walk on and you're hit with glass, chrome, sparkle, and this sense that you just stepped into something special. It's flashy, sure, but it's fun. And I think that's what MSC gets right. They don't try to be subtle. They lean into it.</p>

      <p>People who have been on the ship say the same thing. The Seascape is gorgeous. The design feels fresh and modern. The cabins are clean and spacious, even in the standard rooms. And if you spring for a balcony, you're looking at ocean views that make it worth every penny. One reviewer I read said they'd wake up and watch the sunrise from their balcony every morning. That's the kind of moment you don't forget.</p>

      <h2>The Food Situation</h2>

      <p>Let me be honest with you. The main dining room and the buffet are fine. They're not going to blow your mind, but they're not bad either. MSC does a solid job with variety, and they've added some Texas-inspired dishes like smoked brisket and prime rib that people are loving. The buffet has options for everyone, including sugar-free desserts and dietary-friendly choices. And the pizza is actually really good, which matters more than you'd think.</p>

      <p>But here's where the Seascape shines. The specialty restaurants. If you're going to splurge anywhere on this ship, do it here. The steakhouse, Butcher's Cut, gets rave reviews. People say the food is restaurant-quality and the service is on point. Hola Tacos and Cantina is a fan favorite for anyone who likes fresh, flavorful Mexican food. And if you're into teppanyaki, the hibachi grill is a whole experience.</p>

      <p>One cruiser I came across said they booked their next two MSC cruises while they were still on the Seascape. That's the kind of impression the food made on them. And honestly, that tells me everything I need to know.</p>

      <h2>Things to Do When You're Not Eating</h2>

      <p>This ship has activities. Lots of them. There's a water park called Pirates Cove that's free and perfect for families. There's a sports court. There are pools spread across multiple decks so you're not fighting for space. The Robotron ride is the big draw. It's the only robo-coaster at sea, and it takes you 173 feet above the water while flipping you upside down and spinning you around. If you like thrill rides, this is your moment.</p>

      <p>There's also a full spa with a thermal suite, which includes a salt room, hot tubs, and heated loungers. People who've been in there say it's the perfect way to unwind, especially on a sea day. And if you want to people-watch or just hang out with a drink, there are bars everywhere. The Seascape Bar overlooks the atrium and has this open, social vibe. The Cocktail Bar on Deck 8 feels more intimate and upscale.</p>

      <p>The MSC for Me app is another thing people love. You can book reservations, check the daily schedule, chat with your travel group for free, and keep track of your onboard spending. It's one of those things that just makes the whole experience smoother.</p>

      <h2>Cruising in September: What You Need to Know</h2>

      <p>Let me be straight with you. September is peak hurricane season. That's just the reality. The weather can be hot and humid, and there's a higher chance of rain or tropical storms. But here's the thing. Cruise lines monitor the weather constantly. If a storm is coming, they will reroute the ship. You're not sailing into danger. And if conditions are bad enough, they'll cancel the cruise and refund you or give you future cruise credit.</p>

      <p>The upside to cruising in September is that it's one of the quietest times of the year. Schools are back in session. Summer vacationers are done. That means fewer crowds, better availability, and often lower prices. You're more likely to find a lounge chair by the pool. You're not waiting in long lines at the buffet. And the ship feels a little more relaxed because there's just more space to breathe.</p>

      <p>Yes, it might rain. Caribbean rain in September tends to come in quick bursts and then clear out. It's not the end of the world. Pack a light rain jacket. Plan for indoor activities if the weather's rough. And honestly, if you're on a ship like the Seascape with so much to do inside, a rainy afternoon isn't going to ruin your trip.</p>

      <p>If you're someone who gets nervous about hurricanes, I get it. But I also think the risks are manageable, and the benefits of cruising this time of year make it worth considering. Especially if you're flexible and you know what you're signing up for.</p>

      <h2>What Real Cruisers Are Saying</h2>

      <p>I spent a lot of time reading reviews from people who've actually sailed on the Seascape. And the overall vibe is positive. People love the ship's design. They say the atrium is stunning and the ship feels new and well-maintained. The cabins are spacious, especially compared to other cruise lines. And the crew gets a lot of praise for being friendly and helpful.</p>

      <p>One thing that kept coming up is that the ship never feels too crowded, even when it's at high capacity. There are enough pools, bars, and spaces that you can always find somewhere to go. And people appreciate that.</p>

      <p>The specialty dining gets top marks. One person said the teppanyaki restaurant was awesome and the steakhouse was exceptional. Multiple reviews mentioned how good the shows are in the theater. The entertainment isn't just background noise. It's actually worth going to.</p>

      <p>Not everything is perfect. Some people said the elevators can be slow during peak times. A few mentioned that the buffet food is sometimes lukewarm instead of hot. And a handful of cruisers felt like MSC nickel-and-dimes you with drink packages and internet fees. But those complaints are pretty standard for any cruise line. No ship is perfect.</p>

      <p>The thing that stood out to me the most was this. People who went in nervous because of bad reviews online almost always came back saying they had a great time. One cruiser said they had a fantastic time despite the negative reviewers. Another said they were pleasantly surprised after reading so many complaints. That tells me the ship delivers when you give it a fair shot.</p>

      <h2>Why I'm Confident About This Trip</h2>

      <p>I've cruised MSC before, and I know what to expect. I know their style. I know the vibe. And I like it. The Seascape takes everything MSC does well and turns it up. This is their newest, flashiest ship, and they're clearly proud of it.</p>

      <p>The ship is beautiful. The food at the specialty restaurants is excellent. Ocean Cay is a unique stop that you can't get anywhere else. And September, for all its weather risks, gives us the advantage of smaller crowds and better pricing.</p>

      <p>I'm not promising you perfect weather. I'm not promising that every single thing will go exactly as planned. But I am promising that this trip is going to be fun. Because at the end of the day, cruising is what you make of it. It's about being on the water. It's about good food, good company, and good memories. And the Seascape is set up to give us all of that and then some.</p>

      <p>If you've been thinking about joining us, now you know what you're getting into. This is the ship. This is the trip. And I can't wait to see who's coming along for the ride.</p>

      <p>Happy Detour Travel — Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: 'the-lab-the-list-and-the-art-of-letting-go',
    title: 'The Lab, the List, and the Art of Letting Go',
    date: '2026-05-12',
    tag: 'Behind the Brand',
    excerpt: 'Running Happy Detour Travel means I am constantly looking for ways to stay connected with people who might want to book a trip. I keep hearing from every marketing expert that I need an email list. So I decided to set one up. What followed was a lesson in knowing when to stop.',
    image: '/blog/img_56.webp',
    content: `
      <p>Running Happy Detour Travel means I am constantly looking for ways to stay connected with people who might want to book a trip. I keep hearing from every marketing expert that I need an email list. They say it is essential for any business, especially one trying to build a loyal audience from the ground up.</p>

      <p>So, I decided to set one up. I started with what seemed like the simplest option which is Jetpack. It is a WordPress plugin that lets people subscribe to my blog and get notified when I post something new. It sounded perfect because it was straightforward and built right into my site. Except it was not free anymore. The subscription feature now costs five dollars a month. While that is not a huge amount, I am bootstrapping this business and every recurring cost adds up.</p>

      <p>I pivoted to MailerLite, which is a free email service that lets you manage up to 1,000 subscribers without paying a dime. I signed up, created a group called Happy Detour Insiders, and built a simple signup form. The copy felt right. I wrote that there would be no pressure and just fun tips and backstories. No sales clutter, just real stories from my travel experiences and an honest look at how I am building this business in Alliance, Ohio.</p>

      <p>It felt like me. It felt like my brand. Then I tried to add it to my WordPress blog and things got messy.</p>

      <p>My current WordPress plan does not support the MailerLite plugin unless I upgrade. I tried adding the embed code manually through widgets, but my theme does not use them. I tried the site editor by adding a Custom HTML block to my Single Posts template. It broke. The code showed up as plain text at the bottom of my blog posts instead of a clean signup form.</p>

      <p>I could have kept troubleshooting. I could have searched for more workarounds. But at some point, I had to ask myself if this was worth it right now. The honest answer was no.</p>

      <p>I do not have hundreds of people visiting my blog yet. I am still figuring out my voice, writing posts, and learning how to share content that resonates. Adding an email list right now would be solving a problem I do not actually have. Email lists are powerful, but they are also one more system to learn and one more task on the list. Right now, my energy is better spent writing good content and connecting with people on Facebook and Instagram where my audience already is.</p>

      <p>Sometimes the smartest move in business is not adding more tools. It is knowing what to skip so you can focus on what actually matters. Right now, what matters is showing up, writing honestly, and building trust one post at a time. The email list can wait.</p>

      <h2>Five Tries to Get a Single Page Live</h2>

      <p>While I was wrestling with email lists, I was also fighting a different battle in the lab. I wanted to add a destinations page to the Happy Detour Travel website. It sounds simple to just create a page and push it live, but the reality was much different.</p>

      <p>My website lives on GitHub and deploys through Vercel. Most of my pages are just simple HTML files like everyonewelcome or anniversary cruise. They work with no drama. But I also have a React setup running that I have been building out for more dynamic content.</p>

      <p>I created a new page for destinations and pushed it to GitHub. When I checked the live site, it was a 404 error. It turns out that the router I am using did not like my file name. I renamed it and pushed it again. Still a 404 error. Then I realized the file somehow got deleted during the commit process. I created it again and pushed it a third time. Still nothing.</p>

      <p>Then Vercel stopped building the site entirely. I had red icons everywhere. My routing config was looking for a file I had already deleted. I updated the code and finally got a green checkmark. The site built successfully, but the live page was still missing.</p>

      <p>The fourth problem was a sneaky rewrite rule in my configuration file. Vercel was looking for an HTML file that did not exist instead of letting my React code handle it. I deleted that line and pushed it again. Still a 404.</p>

      <p>The fifth and final problem was a missing catch-all rule. I finally added a line of code that told Vercel to send any unmatched routes to my main index file so the site could figure it out. I pushed the code, waited for the build, and hard refreshed my browser. It finally worked.</p>

      <h2>What I am Learning in the Process</h2>

      <p>At one point, I thought about converting every single page on my site to React. But honestly, the simple HTML pages just work. They are stable and they do not give me build errors. I am keeping them.</p>

      <p>Right now, my site is a hybrid. I use static HTML pages for most things and React pages for things that need to be more dynamic like my new destinations page. Is it a bit messy? Maybe. Does it work? Yes.</p>

      <p>This whole experience reminded me of a few things. File names matter. Always check your routing config when you rename files. Sometimes the simplest solution is the right one. And most importantly, you have to hard refresh your browser more often than you think.</p>

      <p>The destinations page is live now at happydetour.com/destinations. It shows Virgin Voyages, Sandals, Beaches, and the other cruise lines I work with. It took five tries to get there, but that is part of the journey.</p>

      <p>This business is about testing features, learning from the failures, and adjusting the strategy. If a tool does not fit the brand or it adds too much friction, I am not afraid to pull the plug and try something else. Whether it is a chatbot that feels too corporate or an email list that is not ready for prime time, I am sticking to what works for my community.</p>

      <p>Happy Detour Travel — Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: 'a-saturday-well-spent-doubts-fixes-and-two-cruises',
    title: 'A Saturday Well Spent: Doubts, Fixes, and Two Cruises Worth Talking About',
    date: '2026-05-16',
    tag: 'Behind the Brand',
    excerpt: 'Some days in this business feel like momentum. Everything clicks. You post something and people respond. A lead comes in out of nowhere. And then there are the other days. Today started as one of the other days.',
    image: '/blog/img_7899.webp',
    content: `
      <p>Some days in this business feel like momentum. Everything clicks. You post something and people respond. A lead comes in out of nowhere. You feel like you're actually building something real.</p>

      <p>And then there are the other days.</p>

      <p>Today started as one of the other days.</p>

      <p>I woke up with a lot on my mind. Two months into Happy Detour Travel and the questions that had been quietly sitting in the back of my head were suddenly a lot louder. Is this working? Am I doing the right things? Why are people clicking my ads and then just... leaving?</p>

      <p>I want to be honest about that because I think a lot of people building something on the side, while also working a full-time job, while also juggling everything else life throws at you, feel this way more than they let on. It doesn't mean you're failing. It just means you're in the hard part.</p>

      <p>I've learned that the answer to doubt is usually not thinking harder. It's doing the next small thing. So that's what I did today.</p>

      <h2>Two Months In: Where Things Actually Stand</h2>

      <p>Before I get into what I fixed today, let me give you an honest picture of where Happy Detour Travel is right now.</p>

      <p>I launched HDT just over two months ago. I'm an independent travel advisor affiliated with WorldVia Travel Network, based in Alliance, Ohio. My planning service is always free to clients. The cruise lines, hotels, and resorts pay my commission. You get a real person helping you plan your trip, and it doesn't cost you anything extra.</p>

      <p>In two months I've done more than I sometimes give myself credit for. I have a website live at happydetour.com with an SEO score of 100. I have active social media on Facebook, Instagram, and TikTok under @happydetourtravel. I have HubSpot set up for client management and automation workflows running through n8n. I have two group cruise landing pages live and running Meta ads. I've booked trips. I've learned the WorldVia booking tools. I've written over 14 blog posts. And I've done all of this while working as a Retail Manager, taking entrepreneurship classes, and exploring a laundromat business on the side.</p>

      <p>That's a lot. I don't always see it that way in the moment. But it's a lot.</p>

      <p>What I don't have yet is a steady flow of leads from strangers. And that's the part that gets loud some mornings.</p>

      <h2>The Problem I Finally Figured Out</h2>

      <p>I have two group cruise landing pages running right now. One is for the MSC Seascape sailing September 13 through 20, 2026. Seven nights in the Western Caribbean departing from Galveston, Texas. Costa Maya, Roatan, and Cozumel. Starting at $455 per person. The other is for the Carnival Horizon ABC Islands cruise in October 2026. Eight days in the Caribbean visiting Aruba, Bonaire, and Curacao. Starting at $644 per person.</p>

      <p>Both pages have been getting traffic from Meta ads. We're talking around 300 landing page visits on the MSC page alone. That's not nothing. People are seeing the ads, clicking, and landing on the page. But nobody was reaching out. No form submissions. No texts. No emails. Just traffic that showed up and quietly left.</p>

      <p>I spent some time today really thinking about why. And when I looked at the pages with fresh eyes, it became obvious. The pages were asking too much too soon.</p>

      <p>Think about it from the perspective of someone who just saw an ad on Facebook while scrolling through their phone. They weren't looking for a cruise. The ad caught their eye. They clicked. They land on my page and within seconds they're being asked to call or text me, or fill out a form with their name, email, phone number, and how many people are traveling. That's a lot to ask of someone who met me 30 seconds ago. There was no way for someone to say "I'm curious, tell me more" without it feeling like they were agreeing to something. That's a fixable problem. And today I fixed it.</p>

      <h2>What I Changed and Why It Matters</h2>

      <p>On both landing pages, I added a simple section right below the hero. Two fields only. First name. Phone number. That's it. The button says "Send Details, No Pressure!" No email required. No dropdown asking how many people are traveling. No commitment. Just enough information so I can text them personally, send over the pricing breakdown, and start a real human conversation from there.</p>

      <p>I also removed the "Text or Call Me" button from the top of both pages. That button was competing with the simple form and honestly it was sending the wrong message to cold traffic. Nobody calls a stranger. Now the flow is simple. You land on the page, see the cruise and the starting price, scroll down and see a friendly form that says "Want the full pricing breakdown? Drop your name and number. I'll text it to you personally." You fill it out in 10 seconds. I text you. We start talking.</p>

      <p>The full contact form with more fields is still at the bottom of the page for people who are more ready to take the next step. But now there's an easy on-ramp for the people who are just curious. It sounds like a small change. But I think it's the change that actually moves the needle. Because the problem was never the traffic. The problem was the friction.</p>

      <h2>The MSC Seascape, September 13 to 20, 2026</h2>

      <img src="/blog/img_0211.webp" alt="Eric with friends on the MSC Meraviglia" />

      <p>This one is personal to me. I've sailed MSC three times. The Armonia and the Meraviglia twice. I know the brand. I know how their ships run. I know the things that surprised me the first time and the things I wish someone had told me before I went.</p>

      <p>The Seascape will be a first for me too. But that's part of what makes this trip exciting. I'm not just selling this cruise. I'm going on it. I'm booking my own cabin. That means if you're on this sailing and you need anything, before the trip or during it, I'm right there. Not on the other end of a phone. Actually there.</p>

      <p>We depart from Galveston, Texas and hit three ports over seven nights. Costa Maya in Mexico on day three. Roatan in Honduras on day four. And Cozumel on day five. Two sea days to do absolutely nothing if that's what you need. Pricing starts at $455 per person for an interior cabin, $645 for a balcony, and $847 for an interior with drinks and wifi included. Taxes and port fees are included in those numbers.</p>

      <p>The "Everyone Welcome" tagline on this page is something I mean. Solo travelers are welcome. LGBTQ travelers are welcome. First-time cruisers are welcome. Families, couples, people who just need a week away from their regular life. All of you.</p>

      <h2>Carnival Horizon, October 2026, ABC Islands</h2>

      <img src="/blog/img_212.webp" alt="Colorful waterfront buildings in Willemstad, Curacao" />

      <p>The ABC Islands are something special. Aruba, Bonaire, and Curacao sit just off the coast of Venezuela, which means they're outside the hurricane belt. The water is calm and clear. The beaches are white. The Dutch Caribbean architecture in Willemstad, Curacao is like nothing else in the Caribbean.</p>

      <p>This cruise is eight days aboard the Carnival Horizon. Interior cabins start at $644 per person. Balcony cabins at $1,204 per person. I put this one together partly because my friend Jason has been talking about going to Aruba for his anniversary in October. And when one trip started coming together, it made sense to open it up and see if others wanted to come along too. That's kind of how I think about this whole group cruise thing. It starts with a real trip that real people are actually going on.</p>

      <h2>The Legal Side: Why I Emailed a Lawyer Today</h2>

      <p>Something I've been putting off is getting proper terms and conditions in place for Happy Detour Travel. Terms and conditions protect you when a client tries to dispute a charge. They protect you when something goes wrong on a trip that was completely out of your control. They make clear what you're responsible for and what you're not. And with credit card chargeback rules getting tighter since the pandemic, having signed terms and conditions is more important than ever.</p>

      <p>Today I emailed Thomas Carpenter. He's an attorney who specializes specifically in travel advisor law and also runs his own travel agency called Huckleberry Travel. He's represented over 1,200 small travel agencies and tour operators. He knows this industry from both sides. What made the decision easier is that his pricing includes free amendments if the law changes. I'm expecting to hear back Monday.</p>

      <h2>The Mindset Part (The Part I Almost Didn't Write)</h2>

      <p>I almost didn't include this section. It feels vulnerable to talk about doubt when you're trying to build something and attract clients. But I think leaving it out would make this post feel less real than it actually is.</p>

      <p>Two months in with no bookings from strangers is a tough place to sit. I have bookings. I've booked trips for people I know. I have leads in progress. But that first stranger booking, the one that tells you this thing is actually working, hasn't happened yet. And some mornings that gets heavy.</p>

      <p>What I've had to remind myself is that two months is genuinely early. Most travel advisors say it takes six months to a year before leads start flowing consistently. Building trust with strangers takes time. Social media takes time. SEO takes time. Word of mouth takes time. The work I'm doing right now is all compounding. It doesn't feel like momentum yet. But it's building toward it.</p>

      <p>Today I asked myself honestly whether I want to keep doing this. And the answer was yes. Not a hesitant maybe. A real yes.</p>

      <p>I'm passionate about travel. I know what it feels like to help someone get somewhere they've been dreaming about. I know what it's like to be on a ship and feel like the world is a lot bigger and more beautiful than it seemed back home. That's what I want to give people. And I'm going to keep building toward it.</p>

      <h2>What Comes Next</h2>

      <p>Monday I'm expecting to hear back from Thomas Carpenter about the terms and conditions. The new forms on both landing pages are live as of today. I'm going to give them a week and see if the conversion rate improves. And I'm going to keep showing up. One small thing at a time.</p>

      <p>If you've been thinking about the MSC Seascape in September or the Carnival Horizon ABC Islands cruise in October, now is a good time to reach out. The form on each landing page is simple. Just your name and number. I'll text you the full pricing breakdown personally. No bots. No pressure. Just me.</p>

      <p>That's the whole point of Happy Detour Travel. Affordable vacations. Fun experiences. Everyone welcome.</p>

      <p>Eric<br/>happydetour.com | @happydetourtravel</p>
    `,
  },
  {
    slug: 'what-to-pack-for-a-7-day-caribbean-cruise',
    title: 'What to Pack for a 7-Day Caribbean Cruise (Without Overpacking)',
    date: '2026-05-18',
    tag: 'Cruise Tips',
    excerpt: 'You\'re going on a cruise. You\'re excited. And then you start wondering what to bring. I\'ve been on my share of cruises, and packing is one of the questions I get asked most. So I put together these checklists to make it simple.',
    image: '/blog/img_9467.webp',
    content: `
      <p>You're going on a cruise. You're excited. And then you start wondering what to bring.</p>

      <p>I've been on my share of cruises, and packing is one of the questions I get asked most. So I put together these checklists to make it simple. Whether you're packing for yourself, your partner, or the kids, this will help you get it right without dragging half your closet onto the ship.</p>

      <h2>Why Cruises Are Different</h2>

      <p>On a cruise, you're living out of a small cabin for a week. You don't have a washer and dryer down the hall. And you're moving between different settings every day: the pool, the dining room, port stops, formal nights. The trick is packing light but smart. You want enough to feel comfortable, but not so much that you're playing suitcase Tetris the whole week.</p>

      <img src="/blog/img_9467.webp" alt="Packed suitcase ready for a cruise" />

      <h2>Packing Checklist for Men</h2>

      <p><strong>Clothes:</strong> 7 casual shirts, 2-3 pairs of shorts, 1 pair of lightweight pants or chinos, 1 pair of dress pants, 7 pairs of underwear, 7 pairs of socks, 2 pairs of swim trunks, 1 lightweight jacket or sweater for AC, 1 dress shirt or collared shirt for formal night, and sleepwear.</p>

      <p><strong>Shoes:</strong> Sneakers or comfortable walking shoes, sandals or flip-flops, and dress shoes (loafers or boat shoes work great).</p>

      <p><strong>Toiletries:</strong> Toothbrush and toothpaste, deodorant, razor and shaving cream, shampoo and body wash, sunscreen (SPF 30 or higher), after-sun lotion or aloe, any prescription meds, and motion sickness meds if you're prone to seasickness.</p>

      <p><strong>Extras:</strong> Sunglasses, hat or cap, watch, portable phone charger, reusable water bottle, small backpack for port days, and Ziploc bags.</p>

      <h2>Packing Checklist for Women</h2>

      <p><strong>Clothes:</strong> 5-7 casual tops, 2-3 sundresses or casual dresses, 2-3 pairs of shorts or capris, 1 pair of lightweight pants or jeans, 7 pairs of underwear, 7 pairs of socks if you wear them, 2-3 swimsuits (rotate so they dry), 1 cover-up or sarong, 1 light cardigan or wrap for AC, 1-2 dressier outfits for formal nights, and sleepwear.</p>

      <p><strong>Shoes:</strong> Comfortable walking shoes or sneakers, sandals or flip-flops, and dress sandals or low heels (nothing you can't walk in).</p>

      <p><strong>Toiletries:</strong> Toothbrush and toothpaste, deodorant, face wash and moisturizer, makeup (keep it simple), hairbrush and hair ties, shampoo, conditioner and body wash, sunscreen, after-sun lotion, feminine hygiene products, any prescription meds, and motion sickness meds if needed.</p>

      <p><strong>Extras:</strong> Sunglasses, hat or visor, jewelry (don't bring anything you'd cry over losing), beach bag or tote, portable phone charger, reusable water bottle, Ziploc bags, and a small crossbody bag for port days.</p>

      <h2>Packing Checklist for Kids</h2>

      <p><strong>Clothes:</strong> 5-7 casual outfits, 2 bathing suits, 1 cover-up or rash guard, 7 pairs of underwear, 7 pairs of socks, 1 light jacket or hoodie, 1 nicer outfit for formal night, sleepwear, and an extra outfit in your carry-on (trust me on this).</p>

      <p><strong>Shoes:</strong> Sneakers or sandals, water shoes, flip-flops, and optional dress shoes.</p>

      <p><strong>Toiletries:</strong> Toothbrush and toothpaste, kids' shampoo and body wash, kid-safe SPF 50 sunscreen, aloe, any prescription meds, chewable Dramamine if needed, and swim diapers if still needed.</p>

      <p><strong>Extras:</strong> Hat, sunglasses if they'll wear them, a favorite small toy or comfort item, coloring books or activity books, a tablet with downloaded shows, headphones, portable charger, snacks for the room, and Ziploc bags.</p>

      <img src="/blog/img_184.webp" alt="Cruise essentials including water bottle, sunglasses, and portable charger" />

      <h2>A Few Things Everyone Forgets</h2>

      <p><strong>Power strip or extension cord.</strong> Cabins usually only have one or two outlets. You'll thank me.</p>

      <p><strong>Ziploc bags.</strong> They save you when wet swimsuits need to go in the suitcase or when you want to keep your phone dry.</p>

      <p><strong>Dryer sheets or fabric freshener.</strong> Cruise cabins are small and clothes can get a little musty. Toss a dryer sheet in your suitcase.</p>

      <p><strong>Highlighter and pen.</strong> The daily schedule they leave in your room is easier to manage if you can mark what you want to do.</p>

      <p><strong>Magnets or hooks.</strong> Cabin walls are metal. Small magnets or hooks help you hang stuff and stay organized.</p>

      <p><strong>Reusable water bottle.</strong> Drink stations are all over the ship. Bring your own bottle and skip buying bottled water at ports.</p>

      <h2>What NOT to Pack</h2>

      <p>Just as important as what to bring is what to leave at home. Too many shoes (you'll wear three pairs max), fancy jewelry (the ocean and your jewelry box don't mix), your entire makeup collection, a hairdryer (the cabin has one), an iron (also in the cabin), and books you won't read (bring one or two, or load up your Kindle).</p>

      <h2>Formal Nights: What Does That Even Mean?</h2>

      <p>Most 7-day cruises have one or two formal nights. Don't panic. Formal doesn't mean black-tie wedding. It just means dress up a little. For men: dress pants and a collared shirt, tie optional, blazer if you want but not required, no shorts or t-shirts. For women: a dress, skirt and blouse, or dressy pantsuit. Think date night, not prom. For kids: khakis and a polo for boys, a sundress or nice top and skirt for girls.</p>

      <p>You can also skip formal night completely if it's not your thing. Just eat at the buffet that night. No one will judge you.</p>

      <img src="/blog/img_884.webp" alt="Cruise ship balcony with ocean view" />

      <h2>A Quick Word on Laundry</h2>

      <p>Most cruise ships offer a paid laundry service. A few lines have self-service laundromats, but many don't. If you packed light (smart move), your best bet is what a lot of people do: rinse out swimsuits and a few shirts in the cabin sink and hang them to dry. Not glamorous, but it works.</p>

      <h2>Packing Your Carry-On</h2>

      <p>Your checked luggage might not show up in your cabin right away. So pack a small carry-on with your swimsuit (you'll want to hit the pool on embarkation day), sunscreen, a change of clothes, medications, valuables like your passport, wallet, phone, and chargers, and snacks. That way, even if your suitcase takes a few hours to arrive, you're set.</p>

      <h2>One Last Thing</h2>

      <p>Packing for a cruise doesn't have to be stressful. The key is to keep it simple. You don't need a different outfit for every hour of the day. You need basics, layers, and a couple of nice things. Mix and match. Wear things twice. Pack light and leave room in your suitcase for the stuff you'll pick up at ports.</p>

      <p>And if you forget something? The ship has a shop. Ports have shops. You'll be fine.</p>

      <p>If you're planning a Caribbean cruise and want help with more than just packing, I'm here. I help people book trips that actually fit their lives, and I take care of the details so you don't have to. Planning is always free. Reach out at eric@happydetour.com or fill out the form at happydetour.com.</p>

      <p>Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: 'the-day-i-stopped-thinking-and-started-building',
    title: 'The Day I Stopped Thinking and Started Building',
    date: '2026-05-20',
    tag: 'Behind the Brand',
    excerpt: 'There\'s a version of this story where I sit down at my laptop, make a list, work through it methodically, and wrap up by 6pm feeling organized and accomplished. That\'s not what happened.',
    image: '/blog/img_668.webp',
    content: `
      <p>There's a version of this story where I sit down at my laptop, make a list, work through it methodically, and wrap up by 6pm feeling organized and accomplished.</p>

      <p>That's not what happened.</p>

      <p>What actually happened on May 19 was messier than that, and honestly more interesting. It started with a lawyer questionnaire and ended with me staring at a cruise ship portal at midnight trying to figure out why a gear icon kept sending me in circles. In between there was a new cruise booked, a landing page built from scratch, a video edited, a URL moved, and a homepage redesigned.</p>

      <p>By the time I closed my laptop I had done more in one day than I had planned to do in a week.</p>

      <h2>A Questionnaire That Made Me Think</h2>

      <p>The morning started with paperwork. Not glamorous, but necessary.</p>

      <p>A few days earlier I had signed an engagement letter with Thomas Carpenter, an attorney out of New York who specializes specifically in travel advisor law. He also runs his own travel agency, which means he understands this industry from both sides. Not just the legal side. The actual day-to-day reality of booking trips, dealing with clients, managing chargebacks, and protecting yourself when something goes wrong.</p>

      <p>I had been putting off getting proper terms and conditions in place for a while. When leads are slow and money isn't coming in yet, spending $850 on a legal document feels like a hard sell to yourself. But the honest truth is that terms and conditions aren't just about protecting you from bad clients. They're about looking and operating like a real business. When someone books a trip through me and signs my terms, they know what they're agreeing to. I know what I'm responsible for. Everyone is protected.</p>

      <p>Thomas doesn't use templates. Everything is custom, drafted specifically for how Happy Detour Travel operates. And if the law changes down the road, he amends the documents for free.</p>

      <p>The questionnaire was thorough. About twenty questions covering my business structure, how I handle payments, what types of travel I specialize in, whether I package multiple suppliers into one price, which states my clients are in, and whether I charge fees for cancellations or changes.</p>

      <p>Some of those questions made me stop and think. The fee question in particular. Right now I don't charge planning fees. My service is free to clients because the cruise lines and resorts pay my commission. But do I want to charge cancellation fees if someone backs out after I've done a significant amount of research and planning? Probably yes, eventually. So instead of locking myself into a never answer, I left room for it.</p>

      <p>I also had to think carefully about how I describe the way I work. I don't collect money from clients and then pay suppliers out of my own account. Clients pay the supplier directly and I earn commission. I book under my host agency WorldVia's credentials. I don't package multiple suppliers into one all-in price. All of those distinctions matter legally and they matter for how the terms get written.</p>

      <p>I took my time. Answered everything honestly. And submitted it. Terms and conditions for Happy Detour Travel LLC are officially in progress.</p>

      <h2>The Cruise I Wasn't Planning to Book</h2>

      <img src="/blog/img_669-1.webp" alt="Alaska glacier with turquoise water" />

      <p>Here's where the day took a turn.</p>

      <p>I had been looking at a Virgin Voyages sailing to Alaska for a few days. The Brilliant Lady, departing Seattle on June 17, 2027, and returning to Seattle on June 24. Seven nights. A circle voyage, which means you fly into one city and fly home from the same city. No repositioning. No extra logistics. Just Alaska.</p>

      <p>I'm a Gold-certified Virgin Voyages travel advisor. I've been on their ships. I know the brand well. And I genuinely love it. The dining on Virgin Voyages is award-winning and already included in your fare. Not a buffet. Not a main dining room with assigned seating. Over twenty restaurants across the ship, all included, no upcharges. WiFi is included. Group fitness classes are included. Entertainment is included. The ships are adults only. Eighteen and older.</p>

      <p>I wanted to set up a group booking for this sailing. And when I looked at the terms I realized something that changed everything. No minimum cabins required to start. No deposit to hold the space. You can hold cabins for up to 30 days without putting any money down. Individual cabins only need a 20% deposit when someone actually books. And if you hit 10 cabins you unlock full group perks including Sailor Loot and dining guarantees.</p>

      <p>Zero risk. Literally zero.</p>

      <p>So I booked it. I locked in 10 cabins. Four Central Sea Terrace and six Sea Terrace. Alaska June 17 through 24, 2027 on the Brilliant Lady.</p>

      <h2>Building Alaska from Nothing</h2>

      <p>I've never been to Alaska. I don't have photos of glaciers or fjords. I don't have stories yet about watching whales breach from a ship deck or seeing the sun barely set in June. What I had was a cruise I believed in, a brand I trusted, and a blank page.</p>

      <p>So I built the landing page the same way I've built everything else for Happy Detour Travel. Start with what's true. Say it simply. Make it easy for someone to take the next step.</p>

      <p>The design for the Alaska page needed to feel different from the Carnival page. The ABC Islands cruise is warm and Caribbean and approachable. Alaska on Virgin Voyages is something else. It's premium. It's dramatic. It's a bucket list trip. So I went dark. Deep navy backgrounds. Glacier blue tones. Gold accents. An aurora borealis animation in the hero that actually moves. It doesn't look like a travel agency page. It looks like a destination.</p>

      <p>The page covers the full itinerary from Seattle and back. It covers what's included in a Virgin Voyages fare honestly and in plain English. Dining included. WiFi included. Group fitness included. Entertainment included. Sodas and sparkling water included. And then it covers what's not included just as clearly. Bar tab is separate, though Virgin lets you pre-pay and get bonus credit added on top. Gratuities are separate. Transparency builds trust. Hidden fees destroy it.</p>

      <p>The page went live at happydetour.com/alaska before I went to bed.</p>

      <h2>The URL Move That Made Sense</h2>

      <p>While I was in the middle of all of this I moved the Carnival ABC Islands landing page to a new URL. It used to live at happydetour.com/carnival. Now it lives at happydetour.com/abc.</p>

      <p>The reason is simple and I should have thought of it sooner. If someone sees the word Carnival in the URL they might think about Carnival the cruise line and go book directly there. I don't get paid if they do that. But if the URL says abc they're thinking about the destination. Aruba, Bonaire, Curacao. Three islands in the southern Caribbean, outside the hurricane belt, with turquoise water and Dutch Caribbean architecture that looks like nowhere else in the world. That's what I want them to be thinking about.</p>

      <h2>Two Cruises on the Homepage</h2>

      <img src="/blog/img_670.webp" alt="Happy Detour Travel homepage showing ABC Islands and Alaska cruise cards" />

      <p>Once the Alaska page was live I updated the group trips section on the main Happy Detour Travel homepage. Before today there was one cruise card. Now there are two cards side by side.</p>

      <p>The ABC Islands card is warm and bright. A real photo of Aruba with a pelican in the foreground and a cruise ship in the background. Starting at $644 per person. Friendly and accessible. The Alaska card is dark and dramatic. Deep navy gradient with glacier blue tones. Gold date badge. Starting at $1,797 per person. Premium and intentional.</p>

      <p>They look completely different from each other because they are completely different trips for completely different people. Having both on the homepage shows range. It shows that Happy Detour Travel isn't just one kind of cruise for one kind of traveler.</p>

      <h2>A Video Ad That's Good Enough to Run</h2>

      <img src="/blog/img_668.webp" alt="Happy Detour Travel ABC Islands landing page on laptop" />

      <p>Somewhere in the middle of all of this I also edited a video ad for the Carnival ABC Islands cruise. I used CapCut. Free software. Free stock footage of a cruise ship sailing on blue water. Text overlays that fade in one line at a time. Three Islands. One Perfect Trip. Aruba. Bonaire. Curacao. Affordable Fun for Everyone. Sailing Miami, October 2026.</p>

      <p>It's not a television commercial. But it's honest, it's on brand, and it makes the point clearly in about 15 seconds. The deposit deadline for the Carnival ABC Islands cruise is July 14. That's about eight weeks from now. I need the ad running now, not perfect. So I built it good enough to learn from and moved on.</p>

      <h2>The Gear Icon That Went Nowhere</h2>

      <p>I want to tell you about the moment at the end of the night that almost derailed everything. After I locked in the Virgin Alaska group booking I went back into the portal to confirm everything was correct. But when I clicked the gear icon to open the booking and manage it, it kept sending me to a page to create a new circle instead of opening the one I already had.</p>

      <p>I clicked it five times. Same result every time.</p>

      <p>A few months ago that kind of portal glitch would have sent me into a spiral of doubt. Is the booking real? Did something go wrong? Should I start over? Instead I just looked at the search results one more time. The booking was there. The status said Offered. The cabin count was right. The commission was there in the invoice. Everything was correct. The gear icon was just a broken link in their portal UI, not a problem with my actual booking.</p>

      <p>I made a note to call Virgin Sailor Services in the morning to get confirmation and moved on. That small moment felt significant to me. Not because the portal glitch was a big deal. It wasn't. But because of how I handled it. I didn't spiral. I looked at the evidence, made a reasonable conclusion, and kept going. That's a different version of me than the one who started this business two months ago.</p>

      <h2>What Two Months Actually Looks Like</h2>

      <p>I launched Happy Detour Travel a little over two months ago. When I look at what existed on day one and what exists now I genuinely have to stop and take it in sometimes. A website with an SEO score of 100. Active social media on three platforms. Two group cruise landing pages with real booking infrastructure. A video ad in the queue. A legal engagement in progress. A second cruise line relationship as a Gold-certified advisor. Blog posts, brand guidelines, automation workflows, HubSpot set up, email flows running.</p>

      <p>None of that existed two months ago. Two months ago I had an idea and a laptop.</p>

      <p>I'm still hesitant some mornings. I still don't have a stranger booking yet. I still wonder sometimes if this is going to work. But days like today remind me that wondering is just noise. The work is what's real.</p>

      <p>If you're reading this and you've been thinking about the ABC Islands cruise in October or the Virgin Voyages Alaska sailing in June 2027, I'd genuinely love to help you figure out if either one is a fit. Just drop your name and number on the page and I'll text you the details personally. No bots. No pressure. Just me.</p>

      <p>happydetour.com | @happydetourtravel</p>

      <p>Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: 'the-work-nobody-sees-what-i-actually-did-this-week',
    title: 'The Work Nobody Sees: What I Actually Did This Week',
    date: '2026-05-23',
    tag: 'Behind the Brand',
    excerpt: 'There\'s a version of building a business that looks good on paper. Launches, milestones, announcements. And then there\'s the version that actually happens, which is a lot of quiet decisions made at 11pm on a Wednesday that nobody sees until they\'re already done.',
    image: '/blog/carnival-flyer-2.webp',
    content: `
      <p>There's a version of building a business that looks good on paper. Launches, milestones, announcements. And then there's the version that actually happens, which is a lot of quiet decisions made at 11pm on a Wednesday that nobody sees until they're already done.</p>

      <p>This is that version.</p>

      <h2>The Ad Is Live</h2>

      <p>On May 20 I launched my first real paid Meta ad for the Carnival ABC Islands cruise. It's been running for less than three days. I'm not going to pretend I have meaningful data yet. I don't. But it's live, it's active, and real people are seeing it right now on Facebook and Instagram. The ad sends people to happydetour.com/abc. The goal is simple. Get people to the page. Let the page do its job.</p>

      <h2>The Landing Page Got Three Updates in Two Days</h2>

      <p>I've been watching how people interact with the ABC Islands landing page and making changes based on what I see.</p>

      <p>The first change was adding a button directly in the hero section, the very first thing people see when they land. Before this fix there was nothing to tap at the top of the page. People landed, saw the cruise info, and had to scroll to find the form. Most people don't scroll. So I added a button that says "Get More Info, No Pressure" that takes them straight down to the form with one tap.</p>

      <p>The second change was making the floating button disappear on page load and only appear after someone scrolls down a bit. It was always visible before which felt pushy. Now it shows up naturally as people explore the page.</p>

      <p>The third change was urgency in the form headline. It used to say "Want the full pricing breakdown?" which is fine but passive. I changed it to "Spots are going fast. Get the details before July 14." That's honest. July 14 is a real deposit deadline and it gives people a reason to act now instead of closing the tab and meaning to come back later.</p>

      <p>Every one of these changes is small. Together they make the page feel more intentional and give people clearer reasons to take the next step.</p>

      <h2>Six Flyers for One Cruise</h2>

      <img src="/blog/carnival-flyer-2.webp" alt="ABC Islands Caribbean Cruise flyer showing Aruba, Bonaire, and Curacao" />

      <p>I needed social media content that didn't repeat the same message over and over. So I built six completely different flyers for the Carnival ABC Islands cruise. Each one has a completely different look and feel.</p>

      <p>Dark and moody. Bright and fun with a big orange price tag. Retro vintage travel poster style with aged paper and corner ornaments. Bold graphic with an orange and navy diagonal. Tropical with deep jungle greens and layered leaf shapes. And a sunset gradient from deep purple through gold down to warm cream.</p>

      <p>Six different moods. Six different reasons for someone to stop scrolling. I can rotate these through June without repeating myself and give people a fresh look at the same cruise every time.</p>

      <h2>Ten Questions Scheduled for June</h2>

      <p>Alongside the flyers I wrote ten question posts designed to start conversations rather than sell anything. Things like "what's stopping you from taking a Caribbean vacation this year" and "be honest, have you been saying I need a vacation for more than six months" and "solo travel on a cruise, has anyone done it and was it worth it."</p>

      <p>These aren't pitches. They're conversation starters. When people comment it tells the algorithm the post is getting engagement and pushes it to more people. All ten are scheduled and ready to go on Facebook and Threads through June. I don't have to think about what to post for weeks.</p>

      <h2>The Legal Setup Is Moving</h2>

      <p>I have a call scheduled with Thomas Carpenter on May 26 to go over my Terms and Conditions draft. He already sent the discussion draft along with a full workflow guide explaining how to use it properly. How to get client signatures, how credit card authorization language works, and why all of it matters for chargeback protection.</p>

      <p>While I wait for that call I set up Docuseal, a free electronic signature tool, using my eric@happydetour.com address. I wrote the signature request email that clients will receive when I send them documents to sign. I set up my own electronic signature and initials in the system. Everything is ready and waiting for the final document from Thomas.</p>

      <h2>A Placeholder Page for the T&C</h2>

      <p>I also built a page at happydetour.com/tc while the final document is being prepared. It's clean and on brand. A simple message that the Terms and Conditions are being finalized and will be published shortly, my email and phone number as contact buttons, and my WorldVia affiliation in the footer. The page is set to noindex so Google won't surface an incomplete page in search results. Once Thomas finalizes everything I drop the content in and the page goes live for real.</p>

      <h2>A Real Link in Bio</h2>

      <img src="/blog/79273.webp" alt="Happy Detour Travel Direct.me link in bio page on mobile" />

      <p>One thing that was missing from my social profiles was a proper link in bio page. Instagram only allows one link and I now have multiple destinations. So I set up a Direct.me page at direct.me/happydetourtravel.</p>

      <p>It has my photo at the top, social icons for TikTok, Facebook, Instagram and Threads, three cruise cards with photos, and text links for my home page, about page, planning form, Sandals Resorts, and Beaches Resorts. The planning form link goes directly to my intake form so when someone taps "Plan Your Trip w/ Happy Detour Travel" they go straight into my workflow and become a lead automatically.</p>

      <p>I updated my Facebook, Instagram and Threads bio links to point to Direct.me. Now instead of sending people to one place the link in bio gives them a full menu depending on what they're looking for.</p>

      <h2>What I'm Actually Focused On Right Now</h2>

      <p>The deposit deadline for the Carnival ABC Islands cruise is July 14. That's the number I'm keeping in front of me. Not the follower count. Not the website score. Not how many blog posts I've written. July 14 is when people need to decide and everything I'm doing right now is moving toward that date.</p>

      <p>The ad is running. The content is scheduled. The legal work is in motion. The link in bio is set up. The landing page is as good as I know how to make it right now. Now I show up every day and see what happens.</p>

      <p>If you've been thinking about the ABC Islands cruise, Aruba, Bonaire, Curacao, eight days out of Miami on Carnival Horizon starting at $644 per person, July 14 is coming faster than it feels. You don't have to be ready to book. You just have to be curious enough to ask.</p>

      <p>Just me. Eric.</p>

      <p>happydetour.com | @happydetourtravel<br/>Affordable vacations. Fun experiences. Everyone welcome.</p>
    `,
  },
  {
    slug: 'what-ive-been-up-to-lately-at-happy-detour-travel',
    title: 'What I\'ve Been Up To Lately at Happy Detour Travel',
    date: '2026-06-12',
    tag: 'Behind the Brand',
    excerpt: 'It has been a busy couple of weeks over here at Happy Detour Travel, and I figured it was time to give you a little peek behind the curtain.',
    image: '/blog/img_212.webp',
    content: `
      <p>It has been a busy couple of weeks over here at Happy Detour Travel, and I figured it was time to give you a little peek behind the curtain.</p>

      <p>When I started HDT back in March, I knew I wanted to build something real. Not just a website with a booking link. Something that actually helps people feel good about planning a trip. So here is a quick rundown of what I have been working on.</p>

      <h2>Group Cruises Are Officially a Thing</h2>

      <p>One of the biggest things I have been building out is a group cruise program. Right now I am working with both Virgin Voyages and Norwegian Cruise Line to put together group sailings. Both are great options for different reasons, and I am excited to share more details as those come together.</p>

      <p>I also have a Carnival Horizon sailing lined up for October 10 to 18, 2026, out of Miami. It is an ABC Islands itinerary hitting Aruba, Bonaire, and Curacao, and it is open to anyone who wants to join. Cabins start at $644 per person double occupancy. If that sounds like your kind of trip, just reach out and let me know.</p>

      <h2>Cruise Chat with Eric</h2>

      <p>I launched a live event series called Cruise Chat with Eric. It is a casual, no-pressure conversation where I walk through how cruising actually works, answer questions, and help people figure out if a cruise is right for them. If you have ever been curious but felt like there was too much to figure out, this is for you.</p>

      <h2>Building Out the Facebook Community</h2>

      <p>I started a Facebook group called <a href="https://www.facebook.com/groups/somuchtosea">So Much to Sea</a>, and it is specifically for people who have never cruised before. It is a welcoming space where you can ask questions, see what other people are planning, and just get comfortable with the idea of cruising without feeling like you are being sold something.</p>

      <h2>Behind the Scenes</h2>

      <p>I have also been doing a lot of the unglamorous behind-the-scenes work that comes with running a small business. Setting up the CRM, working on landing pages, getting my ads running, and figuring out how to reach people who are actually looking for help planning a trip. It is a lot, but it is the kind of work I genuinely enjoy.</p>

      <h2>What Is Next</h2>

      <p>I am actively building out group sailings with Virgin Voyages and Norwegian, and will have more details to share soon. I am also about to set sail on a Virgin Voyages transatlantic from Barcelona to Miami, and I cannot wait to share that experience with you.</p>

      <p>If you want to talk about a cruise or an all-inclusive resort at Sandals or Beaches, I would love to hear from you. Reach me at <a href="mailto:eric@happydetour.com">eric@happydetour.com</a> or visit <a href="https://happydetour.com">happydetour.com</a>. We talk through everything before anything is confirmed, so there are no surprises.</p>

      <p>Talk soon,<br/>Eric</p>

      <p><a href="https://facebook.com/happydetourtravel">Happy Detour Travel</a><br/><a href="https://happydetour.com">happydetour.com</a></p>

      <p>Real trips. Real value. Someone actually in your corner.</p>
    `,
  },
  {
    slug: 'a-lot-has-changed-heres-where-things-stand',
    title: 'A Lot Has Changed. Here\'s Where Things Stand.',
    date: '2026-06-22',
    tag: 'Behind the Brand',
    excerpt: 'I have been quiet on the blog for a minute. Not because nothing was happening. Actually, the opposite. A lot has happened and I wanted to wait until I had something real to say before I said it.',
    image: '/blog/Nw_HDT_website.png',
    content: `
      <p>I have been quiet on the blog for a minute. Not because nothing was happening. Actually, the opposite. A lot has happened and I wanted to wait until I had something real to say before I said it.</p>

      <p>So here it is.</p>

      <h2>The website is new.</h2>

      <p>Happydetour.com got a full rebuild. Not a little tweak. A full redesign from the ground up. New look, new layout, cruise line pages, a blog system, an FAQ, the whole thing. I am really proud of it. It took a lot of work and a lot of late nights but it feels like a real business now, not just a landing page. Go check it out if you have not yet.</p>

      <p>And yes, the blog moved too. It lives on the website now at happydetour.com. Every post I write should be bringing people back to where I actually do business. So that is where I am going to be from here on out.</p>

      <h2>New number.</h2>

      <p>My contact number changed. The new number is 747-333-8687. If you had my old number, please update it. That one is gone. You can text or call the new one anytime.</p>

      <h2>The tagline changed.</h2>

      <p>Real trips. Real value. Someone actually in your corner.</p>

      <p>That is the line that actually says what I do. I am not here to just hand you a booking link. I am the person who answers the phone when something goes wrong. I do the research so you do not have to. I know which ships are worth it and which ones are not. That is what you are getting when you work with me.</p>

      <h2>Planning fees.</h2>

      <p>I have to be honest about this because it came up more than once this spring. Some people reached out, asked a lot of questions, got the information they needed, and then went and booked somewhere else on their own. That is not how this works.</p>

      <p>My time has value. I have put real effort into learning this industry. I have sailed over 20 times. I hold certifications with multiple cruise lines. When you ask me for advice, you are getting professional knowledge, not a Google search.</p>

      <p>Planning fees start at $50 depending on the trip. We will always talk through everything before anything is confirmed so there are no surprises. And yes, cruise lines and resorts pay me when you travel. But that does not mean my time is without value to everyone who wants a quick tip.</p>

      <p>I am not saying this with any bitterness. I am saying it because I take this seriously and I want clients who do too.</p>

      <h2>The GHL situation.</h2>

      <p>I tried GoHighLevel. It was too much, too complicated, and not the right fit for where I am right now. I moved on. No drama. Just not the right tool for this stage of the business. I would rather keep things simple and focused than get buried in a system I do not need yet.</p>

      <h2>New group cruise.</h2>

      <p>I started another one. This time it is a Halloween sailing on the Carnival Magic. Eight days, Eastern Caribbean. And yes, Halloween on a cruise ship is exactly as fun as it sounds. Details are coming soon. If you want to be on the list when spots open up, reach out now.</p>

      <h2>Where I am.</h2>

      <p>I started Happy Detour Travel in March 2026. I am doing this while working another job and taking classes. I am building this one honest step at a time. The new website, the new number, the blog moving over, the Halloween cruise on the Carnival Magic, all of it is proof that this is real and it is growing.</p>

      <p>I am proud of where I am. Not where I am going to be someday. Where I am right now.</p>

      <p>Thanks for following along.</p>

      <p>Eric<br/>Happy Detour Travel<br/>happydetour.com | 747-333-8687<br/>@happydetourtravel</p>
    `,
  },
]

export function getAllPosts(): Post[] {
  return POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}
