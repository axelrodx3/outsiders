import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Location', href: 'https://www.google.com/maps/place/Outsiders+Tavern/@34.9790614,-81.0653751,17z/data=!3m1!5s0x88568eae09eb258f:0xc8db335a5811af29!4m6!3m5!1s0x88568fce8dc218e9:0xd953dc1250cc1476!8m2!3d34.9790614!4d-81.0653751!16s%2Fg%2F11tnv2fdrw?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D', external: true },
  { label: 'Menus', to: '/menus', external: false },
  { label: 'Order', href: 'https://www.doordash.com/store/outsiders-tavern-rock-hill-31872831/48795546/', external: true },
  { label: 'Live Events', to: '/events', external: false },
  { label: 'Photo Gallery', to: '/gallery', external: false },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tavern-black/95 backdrop-blur border-b border-tavern-gray">
      <div className="w-full flex items-center justify-between px-6 md:px-8 py-3">
        <Link to="/" className="font-display text-xl font-semibold text-tavern-white hover:text-tavern-offwhite transition-colors">
          Outsiders Tavern
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) =>
            item.external ? (
              <a key={item.label} href={item.href!} target="_blank" rel="noopener noreferrer" className="text-tavern-white/90 hover:text-tavern-white transition-colors">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} to={item.to!} className="text-tavern-white/90 hover:text-tavern-white transition-colors">
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-tavern-white hover:text-tavern-offwhite transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-tavern-charcoal border-t border-tavern-gray py-4 px-6 shadow-xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-tavern-white/90 hover:text-tavern-white hover:bg-tavern-gray/50 rounded transition-colors font-slab"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-tavern-white/90 hover:text-tavern-white hover:bg-tavern-gray/50 rounded transition-colors font-slab"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
