import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-tavern-black border-t border-tavern-gray py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            <Link to="/" className="text-tavern-silver hover:text-tavern-white transition-colors">Email Signup</Link>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-tavern-silver hover:text-tavern-white transition-colors">Facebook</a>
            <a href="#" className="text-tavern-silver hover:text-tavern-white transition-colors">Instagram</a>
          </div>
          <div className="flex gap-6">
            <Link to="/about" className="text-tavern-silver hover:text-tavern-white transition-colors">Jobs</Link>
            <Link to="/contact" className="text-tavern-silver hover:text-tavern-white transition-colors">Contact</Link>
            <Link to="/" className="text-tavern-silver hover:text-tavern-white transition-colors">Email Signup</Link>
          </div>
        </div>
        <p className="mt-8 text-center text-tavern-silver/80 text-sm">
          Outsiders Tavern · <a href="https://www.google.com/maps/place/Outsiders+Tavern/@34.9790614,-81.0653751,17z" target="_blank" rel="noopener noreferrer" className="hover:text-tavern-white transition-colors">4124 Celanese Rd #130, Rock Hill, SC 29732</a> · <a href="mailto:outsiderstavern@gmail.com" className="hover:text-tavern-white transition-colors">outsiderstavern@gmail.com</a> · <a href="tel:+18033289200" className="hover:text-tavern-white transition-colors">(803) 328-9200</a>
        </p>
      </div>
    </footer>
  )
}
