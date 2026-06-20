import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/HDT-LOGO.png"
            alt="Happy Detour Travel"
            className="h-12 w-auto"
          />
          <span className="text-brand-blue font-bold text-lg leading-tight">
            Happy Detour Travel
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-brand-dark">
          <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <Link to="/cruises" className="hover:text-brand-blue transition-colors">Cruises</Link>
          <Link to="/join" className="hover:text-brand-blue transition-colors">Join HDT</Link>
          <Link to="/about" className="hover:text-brand-blue transition-colors">About</Link>
          <Link to="/contact" className="hover:text-brand-blue transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
