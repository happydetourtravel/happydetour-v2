630-823-1253export default function Contact() {
  return (
    <main style={{ backgroundColor: '#F9FAFB', minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#007298', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Get In Touch</p>
          <h1 style={{ color: '#1F2937', fontSize: '36px', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            Let's talk about your next trip.
          </h1>
          <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.7', maxWidth: '480px', margin: '0 auto' }}>
            No forms. No hold music. Just reach out directly and Eric will get back to you.
          </p>
        </div>

        {/* Contact Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>

          {/* Text */}
          
           <a href="sms:6308231253"
            style={{ backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '28px 32px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'box-shadow 0.2s' }}
          >
            <div style={{ width: '56px', height: '56px', backgroundColor: '#007298', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
              📱
            </div>
            <div>
              <p style={{ color: '#1F2937', fontWeight: '700', fontSize: '18px', margin: '0 0 4px 0' }}>Send a Text</p>
              <p style={{ color: '#6B7280', fontSize: '14px', margin: '0 0 4px 0' }}>630-823-1253</p>
              <p style={{ color: '#9CA3AF', fontSize: '13px', margin: 0 }}>Fastest way to reach Eric directly</p>
            </div>
          </a>

          {/* Email */}
          
           <a href="mailto:eric@happydetour.com?subject=Trip%20Inquiry%20-%20Happy%20Detour%20Travel"
            style={{ backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '28px 32px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'box-shadow 0.2s' }}
          >
            <div style={{ width: '56px', height: '56px', backgroundColor: '#F59E0B', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
              ✉️
            </div>
            <div>
              <p style={{ color: '#1F2937', fontWeight: '700', fontSize: '18px', margin: '0 0 4px 0' }}>Send an Email</p>
              <p style={{ color: '#6B7280', fontSize: '14px', margin: '0 0 4px 0' }}>eric@happydetour.com</p>
              <p style={{ color: '#9CA3AF', fontSize: '13px', margin: 0 }}>Great for detailed trip questions</p>
            </div>
          </a>

          {/* FORGE Form */}
          
           <a href="https://forgehq.app/f/?s=yozjm6l0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: 'white', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '28px 32px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'box-shadow 0.2s' }}
          >
            <div style={{ width: '56px', height: '56px', backgroundColor: '#1F2937', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
              📋
            </div>
            <div>
              <p style={{ color: '#1F2937', fontWeight: '700', fontSize: '18px', margin: '0 0 4px 0' }}>Fill Out the Trip Form</p>
              <p style={{ color: '#6B7280', fontSize: '14px', margin: '0 0 4px 0' }}>forgehq.app</p>
              <p style={{ color: '#9CA3AF', fontSize: '13px', margin: 0 }}>Tell Eric everything about your dream trip</p>
            </div>
          </a>

        </div>

        {/* Note */}
        <div style={{ backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '20px 24px', textAlign: 'center' }}>
          <p style={{ color: '#1e4d5e', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
            Planning fees start at $50 depending on the complexity of your trip. We talk through everything before anything is confirmed so there are no surprises.
          </p>
        </div>

      </div>
    </main>
  )
}
