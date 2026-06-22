import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Now, the computer only loads these when the user actually clicks on them
const Home = lazy(() => import('./pages/home/page'));
const Join = lazy(() => import('./pages/join/page'));
const Login = lazy(() => import('./pages/login/page'));
const Verify = lazy(() => import('./pages/verify/page'));
const Privacy = lazy(() => import('./pages/privacy/page'));
const Terms = lazy(() => import('./pages/terms/page'));
const Members = lazy(() => import('./pages/members/page'));
const About = lazy(() => import('./pages/about/page'));
const Contact = lazy(() => import('./pages/contact/page'));
const FAQ = lazy(() => import('./pages/faq/page'));
const BahamasKeyWest = lazy(() => import('./pages/cruises/bahamas-key-west/page'));
const EasternCaribbeanBimini = lazy(() => import('./pages/cruises/eastern-caribbean-bimini/page'));
const FrenchRivieraIbiza = lazy(() => import('./pages/cruises/french-riviera-ibiza/page'));
const MiamiMoroccoTransatlantic = lazy(() => import('./pages/cruises/miami-morocco-transatlantic/page'));
const AlaskaHubbardGlacier = lazy(() => import('./pages/cruises/alaska-hubbard-glacier/page'));
const VirginVoyagesHome = lazy(() => import('./pages/cruiselines/virgin/virginhome/page'));
const NCLHome = lazy(() => import('./pages/cruiselines/ncl/nclhome/page'));
const MSCHome = lazy(() => import('./pages/cruiselines/msc/mschome/page'));
const RoyalHome = lazy(() => import('./pages/cruiselines/royal/royalhome/page'));
const CarnivalHome = lazy(() => import('./pages/cruiselines/carnival/carnivalhome/page'));
const SandalsHome = lazy(() => import('./pages/resorts/sandals/sandalshome/page'));
const BeachesHome = lazy(() => import('./pages/resorts/beaches/beacheshome/page'));
const BlogIndex = lazy(() => import('./pages/blog/index/page'));
const BlogPost = lazy(() => import('./pages/blog/post/page'));

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* This "Suspense" handles the brief moment while a new page loads */}
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
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
          <Route path="/faq" element={<FAQ />} />
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
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Suspense>
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
