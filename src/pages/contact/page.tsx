export default function Contact() {
  const cardClass =
    'group flex items-center gap-4 sm:gap-5 bg-white border border-[#E5E7EB] rounded-2xl p-5 sm:px-8 sm:py-7 no-underline shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007298] focus-visible:ring-offset-2'

  const iconClass =
    'flex items-center justify-center shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-[14px] text-xl sm:text-2xl'

  return (
    <main className="bg-[#F9FAFB] min-h-screen px-5 py-12 sm:px-6 sm:py-20">
      <div className="max-w-[600px] mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[#007298] text-xs font-bold tracking-[2px] uppercase mb-2">
            Get In Touch
          </p>
          <h1 className="text-[#1F2937] text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Let's talk about your next trip.
          </h1>
          <p className="text-[#6B7280] text-base leading-relaxed max-w-[480px] mx-auto">
            No hold music. No runaround. Just reach out and I'll get back to you.
          </p>
        </div>

        {/* Contact Options */}
        <div className="flex flex-col gap-4 mb-6">

          {/* Text */}
          <a href="sms:6308231253" className={cardClass}>
            <div className={`${iconClass} bg-[#007298]`} aria-hidden="true">📱</div>
            <div className="min-w-0">
              <p className="text-[#1F2937] font-bold text-base sm:text-lg mb-1">Send a Text</p>
              <p className="text-[#6B7280] text-sm mb-1">630-823-1253</p>
              <p className="text-[#9CA3AF] text-[13px]">Fastest way to reach me</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:eric@happydetour.com?subject=Trip%20Inquiry%20-%20Happy%20Detour%20Travel"
            className={cardClass}
          >
            <div className={`${iconClass} bg-[#F59E0B]`} aria-hidden="true">✉️</div>
            <div className="min-w-0">
              <p className="text-[#1F2937] font-bold text-base sm:text-lg mb-1">Send an Email</p>
              <p className="text-[#6B7280] text-sm mb-1 break-words">eric@happydetour.com</p>
              <p className="text-[#9CA3AF] text-[13px]">Great for detailed trip questions</p>
            </div>
          </a>

          {/* TravelJoy Form */}
          <a
            href="https://traveljoy.com/webforms/EkZDCw7aARb9pnzVYgdHRaVX/forms/6E9JQLQfrQfUvS85KcGhiHE1/link"
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <div className={`${iconClass} bg-[#1F2937]`} aria-hidden="true">📋</div>
            <div className="min-w-0">
              <p className="text-[#1F2937] font-bold text-base sm:text-lg mb-1">Start Planning My Trip</p>
              <p className="text-[#6B7280] text-sm mb-1">Quick trip planning form</p>
              <p className="text-[#9CA3AF] text-[13px]">Tell me everything about your dream cruise</p>
            </div>
          </a>

        </div>

        {/* Reply Times */}
        <p className="text-center text-[#6B7280] text-sm leading-relaxed">
          I reply weekday evenings, 7 to 10pm Eastern.
          <br className="hidden sm:block" />{' '}
          If it's urgent, send a text.
        </p>

      </div>
    </main>
  )
}
