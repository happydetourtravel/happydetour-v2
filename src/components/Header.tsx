import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className="w-full bg-brand-amber text-white text-left py-2 px-4 text-sm font-medium">
        Sailings for 2026–2027 are selling fast.{' '}
        <Link to="/join" className="underline font-bold hover:text-brand-dark transition-colors">
          Learn More
        </Link>
      </div>
      <header className="w-full bg-white border-b border-gray-200 px-6 py-2">
        <div className="w-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/HDT.png"
              alt="Happy Detour Travel"
              className="h-14 w-auto"
            />
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
    </>
  )
}
