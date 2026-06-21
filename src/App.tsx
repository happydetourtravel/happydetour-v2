import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home/page'
import Join from './pages/join/page'
import Login from './pages/login/page'
import Privacy from './pages/privacy/page'
import Terms from './pages/terms/page'
import Members from './pages/members/page'
import About from './pages/about/page'
import Contact from './pages/contact/page'
import BahamasKeyWest from './pages/cruises/bahamas-key-west/page'
import EasternCaribbeanBimini from './pages/cruises/eastern-caribbean-bimini/page'
import FrenchRivieraIbiza from './pages/cruises/french-riviera-ibiza/page'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/members" element={<Members />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cruises/bahamas-key-west" element={<BahamasKeyWest />} />
          <Route path="/cruises/eastern-caribbean-bimini" element={<EasternCaribbeanBimini />} />
          <Route path="/cruises/french-riviera-ibiza" element={<FrenchRivieraIbiza />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
