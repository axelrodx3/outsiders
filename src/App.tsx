import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menus from './pages/Menus'
import About from './pages/About'
import PrivateEvents from './pages/PrivateEvents'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-tavern-dark text-tavern-cream">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<PrivateEvents />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
