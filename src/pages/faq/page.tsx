import { useState } from 'react'

const FORM_URL = "https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/6E9JQLQfrQfUvS85KcGhiHE1/link"

const faqs: { question: string; answer: string }[] = [
  {
    question: "What does it cost to work with you?",
    answer: "There's no planning fee for cruises. The cruise lines pay me a commission when you sail, the same way a mortgage broker works. You get a real person in your corner without paying more than you would booking on your own. We talk through everything before anything is confirmed so there are no surprises."
  },
  {
    question: "Why work with you instead of just booking online?",
    answer: "When you book online, you're on your own. You're sorting through hundreds of sailings, hoping the reviews are real, and figuring out the fine print alone. With me, you skip all of that. I know which ships and itineraries are actually worth it, I handle every detail, and if something goes wrong before or during your cruise, you call me, not some 1-800 number."
  },
  {
    question: "What happens after I fill out the form?",
    answer: "I'll reach out to get things started, and from there we'll connect over text, email, or a quick call, whatever's easier for you. I'll ask a few questions about what you're thinking, share some ideas, and go from there. No commitment, no pressure. Just a conversation."
  },
  {
    question: "How does the planning process work?",
    answer: "Simple. You share your rough idea: dates, budget, who's coming, and what kind of cruise sounds good. I come back with a few solid options that actually fit. You pick what feels right, I handle the booking and all the details, and you focus on looking forward to the trip."
  },
  {
    question: "What if I have no idea what I want yet?",
    answer: "That's honestly the best time to reach out. A lot of people start with \"we want to cruise, we're just not sure where.\" I'll ask the right questions and help you figure out what'll actually make you happy, not just what's popular."
  },
  {
    question: "What if something goes wrong before or during my trip?",
    answer: "You call me. I'm not a faceless booking platform. I know your trip and I'll help you sort it out. I also walk you through what you need to know before you sail. No surprises."
  },
  {
    question: "How far ahead should I reach out?",
    answer: "6 to 12 months out gets you the best selection and pricing, especially for peak seasons or popular itineraries. That said, don't let timing stop you. Reach out and I'll tell you honestly what's available."
  },
  {
    question: "Can you help with groups or special occasions?",
    answer: "Definitely. Anniversary cruises, milestone birthdays, and group sailings are some of my favorite trips to plan. Groups also tend to get better pricing and extras that individual bookings just don't."
  },
  {
    question: "What cruise lines do you work with?",
    answer: "Virgin Voyages is my specialty, and I'm a First Mate Gold certified advisor. I also book Royal Caribbean, Norwegian, MSC, and Carnival. If you have a specific ship or itinerary in mind, just ask. Chances are I can help."
  },
  {
    question: "What is a travel advisor and what do they do?",
    answer: "A travel advisor is a real person who handles the research, planning, and booking of your trip on your behalf. Think of me as your personal cruise expert. I know the industry, I know the ships, and I do all the heavy lifting so you don't have to. Unlike a search engine, I actually know your situation and can make recommendations based on what you actually want."
  },
  {
    question: "Is Happy Detour Travel a legitimate travel agency?",
    answer: "Yes. Happy Detour Travel is an independent travel advisory service affiliated with WorldVia Travel Network, one of the largest travel networks in the United States. I'm Eric Carney, a real person based in Alliance, Ohio who genuinely loves helping people plan cruises. My contact information is on this site and I'm always reachable directly."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="bg-[#F9FAFB] min-h-screen">

      {/* FAQ Schema for AI and search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Header */}
      <div className="bg-[#007298] px-5 py-12 sm:px-6 sm:py-16 text-center">
        <p className="text-white/75 text-xs font-bold tracking-[2px] uppercase mb-3">
          Common Questions
        </p>
        <h1 className="text-white text-3xl sm:text-[42px] font-extrabold leading-tight mb-4">
          Still on the fence? Let's clear that up.
        </h1>
        <p className="text-white/80 text-base leading-relaxed max-w-[520px] mx-auto">
          These are the questions most people have before reaching out. Answered honestly, no fluff.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-[800px] mx-auto px-4 py-10 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  className="w-full flex items-center justify-between gap-4 text-left bg-transparent border-0 cursor-pointer px-5 py-4 sm:px-6 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#007298]"
                >
                  <span className="flex-1 text-[#1F2937] text-[15px] sm:text-base font-semibold leading-snug">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`inline-block shrink-0 text-[#F59E0B] text-2xl font-light leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#4B5563] text-[15px] leading-[1.8] px-5 pb-5 sm:px-6 sm:pb-6 m-0">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-[#6B7280] text-[15px] mb-5">
            Still have a question? Just reach out directly.
          </p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] text-white px-8 py-3.5 rounded-full no-underline font-bold text-[15px] transition hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2"
          >
            ✈ Let's plan your cruise
          </a>
          <p className="text-[#9CA3AF] text-[13px] mt-3">
            Start with an idea. I'll help from there.
          </p>
        </div>
      </div>

    </main>
  )
}
