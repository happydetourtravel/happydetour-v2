import { useState } from 'react'

const FORM_URL = "https://forgehq.app/f/?s=20bejr4j"

const faqs: { question: string; answer: string }[] = [
  {
    question: "What does it cost to work with you?",
    answer: "Planning fees start at $50 depending on your trip. We talk through it together before anything is confirmed so there are no surprises. Cruise lines and resorts pay me a commission when you travel, the same way a mortgage broker works. You get a real person in your corner without paying more than you would booking on your own."
  },
  {
    question: "Why work with you instead of just booking online?",
    answer: "When you book online, you're on your own. You're sorting through hundreds of options, hoping the reviews are real, and figuring out the fine print alone. With me, you skip all of that. I know which ships and resorts are actually worth it, I handle every detail, and if something goes wrong before or during your trip, you call me, not some 1-800 number."
  },
  {
    question: "What happens after I fill out the form?",
    answer: "You'll be guided through a simple, easy process right from the start. You may get an initial reply to help get things set up, and from there we'll connect over email or a quick call, whatever's easier for you. I'll ask a few questions about what you're thinking, share some ideas, and go from there. No commitment, no pressure. Just a conversation."
  },
  {
    question: "How does the planning process work?",
    answer: "Simple. You share your rough idea: dates, budget, who's coming, what kind of trip. I come back with a few solid options that actually fit. You pick what feels right, I handle the booking and all the details, and you focus on looking forward to the trip."
  },
  {
    question: "What if I have no idea what I want yet?",
    answer: "That's honestly the best time to reach out. A lot of my clients start with \"we want a vacation, we're just not sure what kind.\" I'll ask the right questions and help you figure out what'll actually make you happy, not just what's popular."
  },
  {
    question: "What if something goes wrong before or during my trip?",
    answer: "You call me. I'm not a faceless booking platform. I know your trip and I'll help you sort it out. I also walk you through what you need to know before you go. No surprises."
  },
  {
    question: "How far ahead should I reach out?",
    answer: "6 to 12 months out gets you the best selection and pricing, especially for peak seasons or popular cruise itineraries. That said, don't let timing stop you. Reach out and I'll tell you honestly what's available."
  },
  {
    question: "Can you help with groups or special occasions?",
    answer: "Definitely. Anniversary trips, milestone birthdays, group cruises, group resort stays. Groups are some of my favorite trips to plan. They also tend to get better pricing and extras that solo bookings just don't."
  },
  {
    question: "What cruise lines do you work with?",
    answer: "I work with all the major cruise lines including Royal Caribbean, Norwegian, MSC, Virgin Voyages, and Carnival. For all-inclusive resorts I work with Sandals and Beaches. If you have a specific line or resort in mind just ask. Chances are I can help."
  },
  {
    question: "What is a travel advisor and what do they do?",
    answer: "A travel advisor is a real person who handles the research, planning, and booking of your trip on your behalf. Think of me as your personal travel expert. I know the industry, I know the ships and resorts, and I do all the heavy lifting so you don't have to. Unlike a search engine, I actually know your situation and can make recommendations based on what you actually want."
  },
  {
    question: "What is the difference between a cruise and an all-inclusive resort?",
    answer: "A cruise takes you to multiple destinations. You wake up somewhere new every day. An all-inclusive resort keeps you in one beautiful location where everything is included: food, drinks, activities, and entertainment. Both are great options depending on whether you want to explore or truly unwind. I can help you figure out which one fits your style."
  },
  {
    question: "Is Happy Detour Travel a legitimate travel agency?",
    answer: "Yes. Happy Detour Travel is an independent travel advisory service affiliated with WorldVia Travel Network, one of the largest travel networks in the United States. I'm Eric Carney, a real person based in Northeast Ohio who genuinely loves helping people plan trips. My contact information is on this site and I'm always reachable directly."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main style={{ backgroundColor: '#F9FAFB', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

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
      <div style={{ backgroundColor: '#007298', padding: '64px 24px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
          Common Questions
        </p>
        <h1 style={{ color: 'white', fontSize: '42px', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
          Still on the fence? Let's clear that up.
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '16px', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
          These are the questions most people have before reaching out. Answered honestly, no fluff.
        </p>
      </div>

      {/* FAQ List */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', overflow: 'hidden' }}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ color: '#1F2937', fontSize: '16px', fontWeight: '600', lineHeight: '1.4', flex: 1 }}>
                    {faq.question}
                  </span>
                  <span style={{
                    color: '#F59E0B',
                    fontSize: '22px',
                    fontWeight: '300',
                    flexShrink: 0,
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                    lineHeight: 1
                  }}>
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  aria-hidden={!isOpen}
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.8', padding: '0 24px 24px 24px', margin: 0 }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <p style={{ color: '#6B7280', fontSize: '15px', marginBottom: '20px' }}>
            Still have a question? Just reach out directly.
          </p>
          
           <a href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#F59E0B',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '100px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '15px'
            }}
          >
            ✈ Let's build your trip
          </a>
          <p style={{ color: '#9CA3AF', fontSize: '13px', marginTop: '12px' }}>
            Start with an idea. I'll help from there.
          </p>
        </div>
      </div>

    </main>
  )
}
