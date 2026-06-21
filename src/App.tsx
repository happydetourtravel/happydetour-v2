import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home/page'
import Join from './pages/join/page'
import Login from './pages/login/page'
import Verify from './pages/verify/page'
import Privacy from './pages/privacy/page'
import Terms from './pages/terms/page'
import Members from './pages/members/page'
import About from './pages/about/page'
import Contact from './pages/contact/page'
import BahamasKeyWest from './pages/cruises/bahamas-key-west/page'
import EasternCaribbeanBimini from './pages/cruises/eastern-caribbean-bimini/page'
import FrenchRivieraIbiza from './pages/cruises/french-riviera-ibiza/page'
import MiamiMoroccoTransatlantic from './pages/cruises/miami-morocco-transatlantic/page'
import AlaskaHubbardGlacier from './pages/cruises/alaska-hubbard-glacier/page'
import VirginVoyagesHome from './pages/cruiselines/virgin/virginhome/page'
import NCLHome from './pages/cruiselines/ncl/nclhome/page'
import MSCHome from './pages/cruiselines/msc/mschome/page'
import RoyalHome from './pages/cruiselines/royal/royalhome/page'
import CarnivalHome from './pages/cruiselines/carnival/carnivalhome/page'
import SandalsHome from './pages/resorts/sandals/sandalshome/page'
import BeachesHome from './pages/resorts/beaches/beacheshome/page'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cruises/bahamas-key-west" element={<BahamasKeyWest />} />
        <Route path="/cruises/eastern-caribbean-bimini" element={<EasternCaribbeanBimini />} />
        <Route path="/cruises/french-riviera-ibiza" element={<FrenchRivieraIbiza />} />
        <Route path="/cruises/miami-morocco-transatlantic" element={<MiamiMoroccoTransatlantic />} />
        <Route path="/cruises/alaska-hubbard-glacier" element={<AlaskaHubbardGlacier />} />
        <Route path="/cruises/virgin-voyages" element={<VirginVoyagesHome />} />
        <Route path="/cruises/norwegian" element={<NCLHome />} />
        <Route path="/cruises/msc" element={<MSCHome />} />
        <Route path="/cruises/royal-caribbean" element={<RoyalHome />} />
        <Route path="/cruises/carnival" element={<CarnivalHome />} />
        <Route path="/resorts/sandals" element={<SandalsHome />} />
        <Route path="/resorts/beaches" element={<BeachesHome />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
