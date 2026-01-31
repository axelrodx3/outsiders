import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tavern-dark/95 backdrop-blur border-b border-tavern-wood">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-2xl font-semibold text-tavern-amber">
            Outsiders Tavern
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {/* Locations */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('locations')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-tavern-cream/90 hover:text-tavern-amber transition-colors">
                Locations ▾
              </button>
              {openDropdown === 'locations' && (
                <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-tavern-wood rounded shadow-xl border border-tavern-dark">
                  <Link to="/#locations" className="block px-4 py-2 text-tavern-cream/90 hover:bg-tavern-dark/50 hover:text-tavern-amber">All Locations</Link>
                  <Link to="/#locations" className="block px-4 py-2 text-tavern-cream/90 hover:bg-tavern-dark/50 hover:text-tavern-amber">Main Street</Link>
                  <Link to="/#locations" className="block px-4 py-2 text-tavern-cream/90 hover:bg-tavern-dark/50 hover:text-tavern-amber">Downtown</Link>
                </div>
              )}
            </div>
            {/* Menus */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('menus')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-tavern-cream/90 hover:text-tavern-amber transition-colors">
                Menus ▾
              </button>
              {openDropdown === 'menus' && (
                <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-tavern-wood rounded shadow-xl border border-tavern-dark">
                  <Link to="/menus" className="block px-4 py-2 text-tavern-cream/90 hover:bg-tavern-dark/50 hover:text-tavern-amber">Food Menu</Link>
                  <Link to="/menus" className="block px-4 py-2 text-tavern-cream/90 hover:bg-tavern-dark/50 hover:text-tavern-amber">Drinks Menu</Link>
                </div>
              )}
            </div>
            {/* About Us */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-tavern-cream/90 hover:text-tavern-amber transition-colors">
                About Us ▾
              </button>
              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-tavern-wood rounded shadow-xl border border-tavern-dark">
                  <Link to="/#history" className="block px-4 py-2 text-tavern-cream/90 hover:bg-tavern-dark/50 hover:text-tavern-amber">Our History</Link>
                  <Link to="/about" className="block px-4 py-2 text-tavern-cream/90 hover:bg-tavern-dark/50 hover:text-tavern-amber">Our Team</Link>
                  <Link to="/about" className="block px-4 py-2 text-tavern-cream/90 hover:bg-tavern-dark/50 hover:text-tavern-amber">FAQs</Link>
                </div>
              )}
            </div>
            <Link to="/events" className="text-tavern-cream/90 hover:text-tavern-amber transition-colors">Private Events</Link>
            <Link to="/gallery" className="text-tavern-cream/90 hover:text-tavern-amber transition-colors">Photo Gallery</Link>
            <Link to="/" className="text-tavern-cream/90 hover:text-tavern-amber transition-colors">Gift Cards</Link>
            <Link to="/#reservations" className="px-4 py-2 bg-tavern-amber text-tavern-dark font-semibold rounded hover:bg-amber-400 transition-colors">Reservations</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
