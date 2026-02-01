import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tavern-black/95 backdrop-blur border-b border-tavern-gray">
      <div className="w-full flex items-center justify-between px-6 md:px-8 py-3">
        <Link to="/" className="font-display text-xl font-semibold text-tavern-white hover:text-tavern-offwhite transition-colors">
          Outsiders Tavern
        </Link>
        <div className="hidden md:flex items-center gap-8">
            <a href="https://www.google.com/maps/place/Outsiders+Tavern/@34.9790614,-81.0653751,17z/data=!3m1!5s0x88568eae09eb258f:0xc8db335a5811af29!4m6!3m5!1s0x88568fce8dc218e9:0xd953dc1250cc1476!8m2!3d34.9790614!4d-81.0653751!16s%2Fg%2F11tnv2fdrw?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-tavern-white/90 hover:text-tavern-white transition-colors">Location</a>
            <Link to="/menus" className="text-tavern-white/90 hover:text-tavern-white transition-colors">Menus</Link>
            <Link to="/events" className="text-tavern-white/90 hover:text-tavern-white transition-colors">Live Events</Link>
            <Link to="/gallery" className="text-tavern-white/90 hover:text-tavern-white transition-colors">Photo Gallery</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
