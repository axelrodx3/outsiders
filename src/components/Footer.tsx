import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-tavern-dark border-t border-tavern-wood py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            <Link to="/#reservations" className="text-tavern-cream/80 hover:text-tavern-amber transition-colors">Reservations</Link>
            <Link to="/" className="text-tavern-cream/80 hover:text-tavern-amber transition-colors">Email Signup</Link>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-tavern-cream/80 hover:text-tavern-amber transition-colors">Facebook</a>
            <a href="#" className="text-tavern-cream/80 hover:text-tavern-amber transition-colors">Instagram</a>
          </div>
          <div className="flex gap-6">
            <Link to="/about" className="text-tavern-cream/80 hover:text-tavern-amber transition-colors">Jobs</Link>
            <Link to="/contact" className="text-tavern-cream/80 hover:text-tavern-amber transition-colors">Contact</Link>
            <Link to="/" className="text-tavern-cream/80 hover:text-tavern-amber transition-colors">Email Signup</Link>
          </div>
        </div>
        <p className="mt-8 text-center text-tavern-cream/60 text-sm">
          Outsiders Tavern
        </p>
      </div>
    </footer>
  )
}
