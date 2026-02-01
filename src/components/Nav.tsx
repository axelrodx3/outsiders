import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tavern-black/95 backdrop-blur border-b border-tavern-gray">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-semibold text-tavern-white hover:text-tavern-offwhite transition-colors">
            Outsiders Tavern
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <a href="https://www.google.com/maps/place/Outsiders+Tavern/@34.9790614,-81.0653751,17z" target="_blank" rel="noopener noreferrer" className="text-tavern-white/90 hover:text-tavern-white transition-colors">Location</a>
            {/* Menus */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('menus')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="text-tavern-white/90 hover:text-tavern-white transition-colors">
                Menus ▾
              </button>
              {openDropdown === 'menus' && (
                <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-tavern-charcoal rounded shadow-xl border border-tavern-gray">
                  <Link to="/menus" className="block px-4 py-2 text-tavern-white/90 hover:bg-tavern-gray hover:text-tavern-white">Food Menu</Link>
                  <Link to="/menus" className="block px-4 py-2 text-tavern-white/90 hover:bg-tavern-gray hover:text-tavern-white">Drinks Menu</Link>
                </div>
              )}
            </div>
            <Link to="/events" className="text-tavern-white/90 hover:text-tavern-white transition-colors">Live Events</Link>
            <Link to="/gallery" className="text-tavern-white/90 hover:text-tavern-white transition-colors">Photo Gallery</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
