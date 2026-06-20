export default function Privacy() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SMS Terms & Privacy | Happy Detour Travel</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root { --blue: #007298; --amber: #F59E0B; --bg: #F9FAFB; --dark: #1F2937; --soft: #6B7280; --white: #ffffff; --card-border: #E5E7EB; }
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: var(--bg); color: var(--dark); font-size: 15px; line-height: 1.75; }
    header { background-color: var(--blue); padding: 18px 32px; display: flex; align-items: center; justify-content: space-between; }
    .logo-text { font-size: 20px; font-weight: 800; color: var(--white); letter-spacing: 0.5px; text-decoration: none; }
    .logo-text span { color: var(--amber); }
    header nav a { color: rgba(255,255,255,0.85); text-decoration: none; font-size: 14px; font-weight: 500; }
    header nav a:hover { color: var(--amber); }
    .hero { background-color: var(--blue); padding: 48px 32px 56px; text-align: center; }
    .hero h1 { font-size: 36px; font-weight: 800; color: var(--white); margin-bottom: 8px; }
    .hero p { color: rgba(255,255,255,0.75); font-size: 15px; }
    .amber-bar { height: 4px; background-color: var(--amber); }
    main { max-width: 720px; margin: 0 auto; padding: 56px 24px 80px; }
    .card { background: var(--white); border: 1px solid var(--card-border); border-radius: 12px; padding: 36px 40px; margin-bottom: 28px; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
    .card-label { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: var(--amber); background: rgba(245,158,11,0.1); padding: 4px 10px; border-radius: 4px; margin-bottom: 16px; }
    .card h2 { font-size: 20px; font-weight: 700; color: var(--blue); margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid var(--card-border); }
    .card p { color: var(--dark); margin-bottom: 16px; font-size: 15px; }
    .card p:last-child { margin-bottom: 0; }
    .card ul { list-style: none; padding: 0; margin: 16px 0 0; }
    .card ul li { position: relative; padding-left: 20px; margin-bottom: 16px; color: var(--dark); font-size: 15px; line-height: 1.7; }
    .card ul li:last-child { margin-bottom: 0; }
    .card ul li::before { content: ''; position: absolute; left: 0; top: 10px; width: 7px; height: 7px; background-color: var(--amber); border-radius: 50%; }
    .keyword { font-weight: 700; }
    footer { background-color: var(--dark); padding: 32px 24px; text-align: center; }
    footer .tagline { color: var(--amber); font-size: 14px; font-weight: 600; margin-bottom: 6px; }
    footer .handle { color: rgba(255,255,255,0.5); font-size: 13px; }
    footer .handle a { color: rgba(255,255,255,0.6); text-decoration: none; }
    footer .handle a:hover { color: var(--amber); }
    footer .affiliate { color: rgba(255,255,255,0.45); font-size: 12px; margin-top: 14px; }
    footer .copyright { color: rgba(255,255,255,0.35); font-size: 12px; margin-top: 4px; }
    @media (max-width: 600px) { .hero h1 { font-size: 26px; } .card { padding: 24px 20px; } header { flex-direction: column; gap: 8px; text-align: center; } }
  </style>
</head>
<body>
  <header>
    <a href="https://happydetour.com" class="logo-text">Happy <span>Detour</span> Travel</a>
    <nav><a href="https://happydetour.com">← Back to Home</a></nav>
  </header>
  <div class="hero">
    <h1>SMS Terms &amp; Privacy</h1>
    <p>Terms of service and privacy policy for SMS communications</p>
  </div>
  <div class="amber-bar"></div>
  <main>
    <div class="card">
      <span class="card-label">Legal</span>
      <h2>Terms of Service</h2>
      <p>By opting in to SMS messages from <strong>Happy Detour</strong>, you agree to receive text messages for customer support, service updates, and other communications related to your account.</p>
      <ul>
        <li>You can cancel the SMS service at any time. Just text <span class="keyword">STOP</span>. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.</li>
        <li>If you are experiencing issues with the messaging program, you can reply with the keyword <span class="keyword">HELP</span> for more assistance.</li>
        <li>Carriers are not liable for delayed or undelivered messages.</li>
        <li>As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.</li>
      </ul>
    </div>
    <div class="card">
      <span class="card-label">Privacy</span>
      <h2>Privacy Policy</h2>
      <p><strong>Happy Detour</strong> does not share mobile numbers, text messaging originator opt-in data, or consent with any third parties or affiliates for marketing or promotional purposes.</p>
      <p>Mobile information may be shared only with subcontractors and service providers that support the delivery of SMS services, such as messaging platforms, telecommunications providers, or customer support vendors. This information is used solely to provide and operate the messaging service.</p>
      <p>All other use case categories exclude text messaging originator opt-in data and consent. This information will not be shared with any third parties.</p>
    </div>
  </main>
  <footer>
    <div class="tagline">Real trips. Real value. Someone actually in your corner.</div>
    <div class="handle"><a href="https://happydetour.com">happydetour.com</a> &nbsp;|&nbsp; @happydetourtravel</div>
    <div class="affiliate">Happy Detour Travel is an independent affiliate of WorldVia Travel Network</div>
    <div class="copyright">&copy; 2026 Happy Detour Travel. All rights reserved. &nbsp;&middot;&nbsp; Last updated May 26, 2026</div>
  </footer>
</body>
</html>` }} />
  )
}
