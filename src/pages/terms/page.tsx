export default function Terms() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms &amp; Conditions | Happy Detour Travel</title>
    <meta name="robots" content="noindex, nofollow">
    <link rel="icon" type="image/png" href="/HappyFavicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; background: #F9FAFB; color: #1F2937; min-height: 100vh; display: flex; flex-direction: column; }
        header { background: #007298; padding: 1.25rem 2rem; display: flex; align-items: center; justify-content: space-between; }
        .header-brand { font-size: 1rem; font-weight: 800; color: white; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; }
        .header-link { font-size: 0.85rem; color: rgba(255,255,255,0.8); text-decoration: none; font-weight: 500; }
        .header-link:hover { color: white; }
        main { flex: 1; padding: 2.5rem 1.5rem 3rem; display: flex; flex-direction: column; align-items: center; }
        .page-header { background: white; border-radius: 16px; padding: 2rem 2.5rem; margin-bottom: 1.5rem; border: 1px solid #E5E7EB; box-shadow: 0 4px 24px rgba(0,0,0,0.06); width: 100%; max-width: 900px; }
        .label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #007298; margin-bottom: 0.5rem; }
        .page-header h1 { font-size: 1.8rem; font-weight: 800; color: #1F2937; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
        .divider { width: 48px; height: 3px; background: #F59E0B; border-radius: 100px; }
        .pdf-wrapper { width: 100%; max-width: 900px; background: white; border-radius: 16px; border: 1px solid #E5E7EB; box-shadow: 0 4px 24px rgba(0,0,0,0.06); overflow: hidden; }
        iframe { display: block; width: 100%; height: 900px; border: none; }
        .download-link { margin-top: 1rem; font-size: 0.88rem; color: #007298; text-decoration: underline; font-weight: 500; }
        footer { background: #1F2937; color: white; padding: 1.75rem 2rem; text-align: center; }
        .footer-brand { font-size: 0.9rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.3rem; }
        .footer-tagline { font-size: 0.8rem; color: rgba(255,255,255,0.5); }
        .footer-legal { font-size: 0.75rem; color: rgba(255,255,255,0.3); margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.08); line-height: 1.9; }
        @media (max-width: 640px) { .page-header { padding: 1.5rem 1.25rem; } .page-header h1 { font-size: 1.4rem; } header { flex-direction: column; gap: 0.5rem; text-align: center; } iframe { height: 600px; } }
    </style>
</head>
<body>
    <header>
        <a href="/" class="header-brand">Happy Detour Travel</a>
        <a href="/" class="header-link">&#8592; Back to Home</a>
    </header>
    <main>
        <div class="page-header">
            <div class="label">Legal</div>
            <h1>Terms &amp; Conditions</h1>
            <div class="divider"></div>
        </div>
        <div class="pdf-wrapper">
            <iframe src="/terms-conditions.pdf" title="Happy Detour Travel Terms and Conditions"></iframe>
        </div>
        <a class="download-link" href="/terms-conditions.pdf" download>Download PDF</a>
    </main>
    <footer>
        <div class="footer-brand">Happy Detour Travel</div>
        <div class="footer-tagline">Real trips. Real value. Someone actually in your corner.</div>
        <div class="footer-legal">
            Happy Detour Travel is an independent affiliate of WorldVia Travel Network<br>
            &copy; 2026 Happy Detour Travel. All rights reserved. &nbsp;&middot;&nbsp; Last updated May 26, 2026
        </div>
    </footer>
</body>
</html>
` }} />
  )
}
