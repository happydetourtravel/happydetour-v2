import { useState } from 'react'

const FORM_URL = "https://forgehq.app/f/?s=20bejr4j"

const faqs = [
  // ... your faqs array remains exactly the same
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main style={{ backgroundColor: '#F9FAFB', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

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
            const isOpen = openIndex === index;
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
                
                {/* Modern Grid Animation & Complete Accessibility Fix */}
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
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <p style={{ color: '#6B7280', fontSize: '15px', marginBottom: '20px' }}>
            Still have a question? Just reach out directly.
          </p>
          <a
            href={FORM_URL}
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
              fontSize: '15px',
              transition: 'background-color 0.2s ease'
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
