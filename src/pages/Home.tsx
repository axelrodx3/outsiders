import { useState } from 'react'

export default function Home() {
  const [reservationForm, setReservationForm] = useState({
    location: '',
    partySize: '',
    date: '',
    time: '',
  })
  const [emailForm, setEmailForm] = useState({ firstName: '', lastName: '', email: '', location: '' })

  const locations = [
    { name: 'Main Street', address: '123 Main Street, Your City, ST 12345', phone: '(555) 123-4567', slug: 'main-street' },
    { name: 'Downtown', address: '456 Oak Ave, Downtown, ST 12346', phone: '(555) 987-6543', slug: 'downtown' },
  ]

  const historyItems = [
    { year: '2020', title: 'Outsiders Tavern Opens', desc: 'We opened our doors with a vision to create a neighborhood gathering place for good food and great company.' },
    { year: '2021', title: 'Expanded Menu', desc: 'Launched our full kitchen with chef-inspired pub fare and an extensive craft beer selection.' },
    { year: '2023', title: 'Second Location', desc: 'Opened our Downtown location to serve more of the community.' },
    { year: '2025', title: 'Private Events Space', desc: 'Unveiled our new private dining room for gatherings and celebrations.' },
  ]

  return (
    <div className="text-tavern-cream">
      {/* Hero - Location Cards */}
      <section className="pt-24 pb-16 px-6">
        <h1 className="sr-only">Outsiders Tavern - Restaurant & Bar</h1>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-tavern-amber text-center mb-12">Our Locations</h2>
          <div id="locations" className="grid md:grid-cols-2 gap-8">
            {locations.map((loc) => (
              <div key={loc.slug} className="bg-tavern-wood rounded-lg overflow-hidden border border-tavern-dark/50">
                <div className="h-48 bg-tavern-dark/50 flex items-center justify-center text-tavern-cream/40">
                  [Location photo placeholder]
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-tavern-amber">{loc.name}</h3>
                  <p className="mt-2 text-tavern-cream/90">{loc.address}</p>
                  <p className="mt-1 text-tavern-cream/80">{loc.phone}</p>
                  <div className="mt-4 flex gap-3">
                    <a href="#reservations" className="px-4 py-2 bg-tavern-amber text-tavern-dark font-semibold rounded hover:bg-amber-400 transition-colors">
                      Reservations
                    </a>
                    <a href="#" className="px-4 py-2 border border-tavern-amber text-tavern-amber rounded hover:bg-tavern-amber/10 transition-colors">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="py-20 px-6 bg-tavern-wood">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-tavern-amber text-center mb-16">History</h2>
          <div className="space-y-12">
            {historyItems.map((item) => (
              <div key={item.year} className="flex gap-8">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-display text-2xl font-semibold text-tavern-amber">{item.year}</span>
                </div>
                <div className="flex-1 border-l-2 border-tavern-amber/30 pl-8 pb-12">
                  <h3 className="font-display text-xl font-semibold text-tavern-cream">{item.title}</h3>
                  <p className="mt-2 text-tavern-cream/80 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menus Teaser */}
      <section className="py-20 px-6 bg-tavern-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-semibold text-tavern-amber mb-4">Menus</h2>
          <p className="text-tavern-cream/80 mb-8">Explore our food and drink offerings.</p>
          <a href="/menus" className="inline-block px-8 py-3 border border-tavern-amber text-tavern-amber rounded hover:bg-tavern-amber/10 transition-colors">
            View Menus
          </a>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 px-6 bg-tavern-wood">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-semibold text-tavern-amber mb-4">Private Events</h2>
          <p className="text-tavern-cream/80 mb-8">Host your next celebration with us. [Placeholder content]</p>
          <a href="/events" className="inline-block px-8 py-3 bg-tavern-amber text-tavern-dark font-semibold rounded hover:bg-amber-400 transition-colors">
            Learn More
          </a>
        </div>
      </section>

      {/* Photo Gallery Teaser */}
      <section className="py-20 px-6 bg-tavern-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-tavern-amber text-center mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-tavern-wood rounded flex items-center justify-center text-tavern-cream/30 text-sm">
                Photo {i}
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/gallery" className="text-tavern-amber hover:underline">View Gallery</a>
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section id="reservations" className="py-20 px-6 bg-tavern-wood">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-tavern-amber text-center mb-8">Reservations</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div>
              <label className="block text-tavern-cream/90 mb-1">Location</label>
              <select
                value={reservationForm.location}
                onChange={(e) => setReservationForm({ ...reservationForm, location: e.target.value })}
                className="w-full px-4 py-2 bg-tavern-dark border border-tavern-amber/30 rounded text-tavern-cream"
              >
                <option value="">Select location</option>
                <option value="main">Main Street</option>
                <option value="downtown">Downtown</option>
              </select>
            </div>
            <div>
              <label className="block text-tavern-cream/90 mb-1">Party Size</label>
              <select
                value={reservationForm.partySize}
                onChange={(e) => setReservationForm({ ...reservationForm, partySize: e.target.value })}
                className="w-full px-4 py-2 bg-tavern-dark border border-tavern-amber/30 rounded text-tavern-cream"
              >
                <option value="">Select</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                ))}
                <option value="8+">8+ People</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-tavern-cream/90 mb-1">Date</label>
                <input
                  type="date"
                  value={reservationForm.date}
                  onChange={(e) => setReservationForm({ ...reservationForm, date: e.target.value })}
                  className="w-full px-4 py-2 bg-tavern-dark border border-tavern-amber/30 rounded text-tavern-cream"
                />
              </div>
              <div>
                <label className="block text-tavern-cream/90 mb-1">Time</label>
                <input
                  type="time"
                  value={reservationForm.time}
                  onChange={(e) => setReservationForm({ ...reservationForm, time: e.target.value })}
                  className="w-full px-4 py-2 bg-tavern-dark border border-tavern-amber/30 rounded text-tavern-cream"
                />
              </div>
            </div>
            <button type="submit" className="w-full py-3 bg-tavern-amber text-tavern-dark font-semibold rounded hover:bg-amber-400 transition-colors">
              Find a Table
            </button>
          </form>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 px-6 bg-tavern-dark">
        <div className="max-w-md mx-auto">
          <h2 className="font-display text-2xl font-semibold text-tavern-amber text-center mb-6">Email Signup</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={emailForm.firstName}
                onChange={(e) => setEmailForm({ ...emailForm, firstName: e.target.value })}
                className="px-4 py-2 bg-tavern-wood border border-tavern-amber/30 rounded text-tavern-cream placeholder-tavern-cream/50"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={emailForm.lastName}
                onChange={(e) => setEmailForm({ ...emailForm, lastName: e.target.value })}
                className="px-4 py-2 bg-tavern-wood border border-tavern-amber/30 rounded text-tavern-cream placeholder-tavern-cream/50"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={emailForm.email}
              onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
              className="w-full px-4 py-2 bg-tavern-wood border border-tavern-amber/30 rounded text-tavern-cream placeholder-tavern-cream/50"
            />
            <select
              value={emailForm.location}
              onChange={(e) => setEmailForm({ ...emailForm, location: e.target.value })}
              className="w-full px-4 py-2 bg-tavern-wood border border-tavern-amber/30 rounded text-tavern-cream"
            >
              <option value="">Location (optional)</option>
              <option value="main">Main Street</option>
              <option value="downtown">Downtown</option>
            </select>
            <button type="submit" className="w-full py-3 bg-tavern-amber text-tavern-dark font-semibold rounded hover:bg-amber-400 transition-colors">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
