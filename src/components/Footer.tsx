import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-sm text-center">
        <div className="flex items-center gap-4 flex-wrap justify-center text-gray-400">
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <span>·</span>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
        <p className="text-gray-400">
          © 2026 Happy Detour Travel LLC · Eric · Affiliated with WorldVia Travel Network ·{' '}
          <a href="mailto:eric@happydetour.com" className="hover:text-white transition-colors">
            eric@happydetour.com
          </a>{' '}
          · Last updated: June 2026
        </p>
      </div>
    </footer>
  )
}
