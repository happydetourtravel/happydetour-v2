import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home/page'
import Join from './pages/join/page'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
