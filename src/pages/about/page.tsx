import type { ReactNode } from 'react'

const PLANNING_FORM_URL =
  'https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/6E9JQLQfrQfUvS85KcGhiHE1/link'
const INSTAGRAM_URL = 'https://www.instagram.com/happydetourtravel/'

/* ---------- Page content (edit words here, not in the layout below) ---------- */

const PLACES = [
  { label: '🚢 Cruises' },
  { label: '🏖️ All Inclusives' },
  { label: '🏰 London' },
  { label: '🗼 Tokyo' },
  { label: '🦁 Tanzania (coming soon)', upcoming: true },
]

const TRUST_CARDS: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "I've actually done it",
    body: 'I have been planning trips like this since 2017, first for friends, now for a living. I know which cruise cabins are worth the upgrade and what the cruise line brochure leaves out.',
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    title: 'I do the digging',
    body: 'I am part of the WorldVia Travel Network, which keeps me plugged into the deals and details most people never see. I stay on top of it so you do not have to dig through fifty tabs.',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </>
    ),
  },
  {
    title: 'I cut through the noise',
    body: 'Everyone online is trying to sell you something. I am not. I go through the sponsored reviews and the fine print so you get the real answer, not the one somebody paid to have you see.',
    icon: (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),
  },
  {
    title: 'Straight answers, no games',
    body: 'I will tell you the real cost, the real tradeoffs, and the real timeline before you book anything. If a trip is not the right fit, I will tell you that too.',
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
]

const QUICK_FACTS: { emoji: string; label?: string; text: string }[] = [
  { emoji: '☕', label: 'Fuel of Choice', text: 'Dunkin Iced Coffee and Coke Zero.' },
  { emoji: '🦁', label: 'Current Mission', text: 'The Tanzania Safari.' },
  { emoji: '💻', text: 'Built by hand on a Citrus MacBook from Ohio, with love.' },
]

/* ---------- Small reusable pieces ---------- */

function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-bold tracking-widest uppercase text-brand-amber ${className}`}>
      {children}
    </p>
  )
}

function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl font-extrabold text-brand-blue tracking-tight ${className}`}>
      {children}
    </h2>
  )
}

function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-gray-700 leading-relaxed">{children}</p>
}

/* ---------- Page ---------- */

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased">
      {/* Hero */}
      <section className="bg-brand-blue relative overflow-hidden text-center py-20 px-6 text-white bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.06)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(245,158,11,0.12)_0%,transparent_50%)]">
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

      {/* My Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-5">
            <Eyebrow>My Story</Eyebrow>
            <SectionTitle className="leading-snug">Hi, I'm Eric.</SectionTitle>
            <Paragraph>
              I have been the guy in the group chat since 2017. The one who finds the weird good
              flight deals. The one who knows which cruise cabin to avoid and which one is worth the
              extra hundred bucks. I never got paid for it. I just liked doing it.
            </Paragraph>
            <Paragraph>
              Eventually enough people told me the same thing. You are already doing this for
              everybody anyway. Why not make it official?
            </Paragraph>
            <Paragraph>So in March of 2026, I did.</Paragraph>
            <Paragraph>
              I am not going to pretend I have it all figured out. I am still learning the business
              side of things some nights, fueled by more Dunkin than I probably need. But I know
              travel. I know what makes a trip actually good instead of just fine. And when you work
              with me, you are not getting a form. You are getting a person who picks up the phone.
            </Paragraph>

            <figure className="bg-brand-blue text-white rounded-2xl p-8 my-8 relative shadow-md">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-5 text-7xl text-brand-amber/40 font-serif select-none"
              >
                "
              </span>
              <blockquote className="text-lg font-semibold italic pl-4 mb-2 relative z-10">
                Sometimes the best journeys begin with a Happy Detour.
              </blockquote>
              <figcaption className="text-xs text-sky-200/80 pl-4">
                Eric Carney, Happy Detour Travel
              </figcaption>
            </figure>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/IMG_2781.jpeg"
              alt="Eric Carney, travel advisor at Happy Detour Travel"
              width={256}
              height={320}
              className="w-64 h-80 object-cover object-top rounded-2xl shadow-xl ring-8 ring-white ring-offset-2 ring-offset-sky-100"
            />
          </div>
        </div>
      </section>

      {/* Where I Have Been */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <Eyebrow>Where I Have Been</Eyebrow>
          <SectionTitle>A Cruiser at Heart</SectionTitle>
          <Paragraph>
            The world is too big to stay in one spot. That is just how I see it. My favorite
            decision of the day is which pool deck to post up on, but I have also gotten completely
            lost in London and melted into a lounge chair at an all inclusive where nothing costs
            extra. One trip is never enough. There is always somewhere else calling.
          </Paragraph>
          <Paragraph>
            Right now, I am deep in research mode on a Tanzania safari. It has been on my list for a
            while, and I am not letting it stay a someday thing much longer.
          </Paragraph>

          <ul className="flex flex-wrap gap-2.5 pt-4">
            {PLACES.map(({ label, upcoming }) => (
              <li
                key={label}
                className={`text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm ${
                  upcoming
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-brand-blue text-white'
                }`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <Eyebrow>How We Work Together</Eyebrow>
          <SectionTitle>Travel planning is a conversation, not a transaction.</SectionTitle>
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-8 space-y-4 shadow-sm text-sky-900 leading-relaxed">
            <p>
              I am not going to pretend I nail the perfect trip on the first try every time.
              Honestly, that is not how good travel planning works anyway.
            </p>
            <p>
              You do the fun part. Dreaming about the views, scoping out what excursions look cool. I
              do the tedious part. Digging through the details, checking logistics, handling the
              bookings. Think of me as your filter. You tell me what you are picturing, and I go find
              it, or something even better.
            </p>
            <p className="font-bold text-brand-blue pt-2">
              We go back and forth until it feels right. No pressure, no sales pitch. Just two people
              figuring out a good trip together.
            </p>
          </div>
        </div>
      </section>

      {/* Why Trust Me */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <Eyebrow className="mb-2">Why Trust Me</Eyebrow>
            <SectionTitle>What I bring to every trip I help plan.</SectionTitle>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_CARDS.map(({ title, body, icon }) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-200 border-t-4 border-t-brand-blue rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-brand-blue">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 stroke-current fill-none stroke-2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icon}
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Quick Version */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <Eyebrow className="mb-4">A Little More About Me</Eyebrow>
          <SectionTitle className="mb-6">The quick version.</SectionTitle>
          <ul className="flex flex-col gap-3">
            {QUICK_FACTS.map(({ emoji, label, text }) => (
              <li
                key={text}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-sky-200 transition-colors"
              >
                <span aria-hidden="true" className="text-2xl select-none">
                  {emoji}
                </span>
                <div className="text-sm text-gray-700">
                  {label && <strong className="text-gray-900 font-bold">{label}:</strong>} {text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-blue relative overflow-hidden text-center py-20 px-6 text-white bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_60%)]">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          Ready to figure out where you're headed?
        </h2>
        <p className="text-sky-100/80 max-w-sm mx-auto mb-8 text-sm">
          No pressure, no commitment. Just tell me what you are picturing and let us see where it
          takes us.
        </p>
        <a
          href={PLANNING_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-amber hover:bg-amber-600 text-white font-bold px-10 py-3.5 rounded-full shadow-[0_4px_16px_rgba(245,158,11,0.35)] hover:scale-105 transition-all"
        >
          ✈️ Start Planning My Trip
        </a>
        <p className="mt-4 text-xs text-white/60">No pressure. Everyone welcome.</p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-xs text-white/60 hover:text-brand-amber transition-colors"
        >
          @happydetourtravel
        </a>
      </section>
    </div>
  )
}
