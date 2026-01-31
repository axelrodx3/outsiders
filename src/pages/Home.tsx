import { useState } from 'react'

export default function Home() {
  const [reservationForm, setReservationForm] = useState({
    partySize: '',
    date: '',
    time: '',
  })
  const [emailForm, setEmailForm] = useState({ firstName: '', lastName: '', email: '', location: '' })

  const locations = [
    { name: 'Outsiders Tavern', address: '4124 Celanese Rd Ste 130, Rock Hill, SC 29732', phone: '(803) 328-9200', slug: 'rock-hill', mapsUrl: 'https://maps.google.com/?q=4124+Celanese+Rd+Ste+130+Rock+Hill+SC+29732' },
  ]

  const historyItems = [
    { year: '2020', title: 'Outsiders Tavern Opens', desc: 'We opened our doors with a vision to create a neighborhood gathering place for good food and great company.' },
    { year: '2021', title: 'Expanded Menu', desc: 'Launched our full kitchen with chef-inspired pub fare and an extensive craft beer selection.' },
    { year: '2023', title: 'Settled in Rock Hill', desc: 'Opened our doors at 4124 Celanese Rd, bringing the tavern vibe to Rock Hill.' },
    { year: '2025', title: 'Live Events Stage', desc: 'Launched our weekend live music series, bringing bands to the stage every Friday and Saturday night.' },
  ]

  return (
    <div className="text-tavern-white">
      {/* Hero - Welcome */}
      <section className="pt-28 pb-16 px-6 bg-tavern-black">
        <h1 className="sr-only">Outsiders Tavern - Restaurant & Bar</h1>
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="/logo.png?v=2"
            alt="Outsiders Tavern"
            className="max-w-[280px] md:max-w-[320px] h-auto mx-auto mb-6 [filter:invert(1)]"
            style={{ background: 'transparent' }}
          />
          <p className="text-tavern-silver text-lg md:text-xl font-slab max-w-md mx-auto">
            Good food. Cold drinks. Great company.
          </p>
        </div>
      </section>
      {/* Location Cards */}
      <section className="pt-4 pb-16 px-6 bg-tavern-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-tavern-white text-center mb-12">Our Location</h2>
          <div id="locations" className="grid md:grid-cols-1 max-w-2xl mx-auto gap-8">
            {locations.map((loc) => (
              <div key={loc.slug} className="bg-tavern-charcoal rounded-lg overflow-hidden border border-tavern-gray">
                <div className="h-48 bg-tavern-black flex items-center justify-center text-tavern-silver/50">
                  [Location photo placeholder]
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-tavern-white">{loc.name}</h3>
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block text-tavern-silver hover:text-tavern-white transition-colors">
                    {loc.address}
                  </a>
                  <p className="mt-1 text-tavern-silver/90">{loc.phone}</p>
                  <div className="mt-4 flex gap-3">
                    <a href="#reservations" className="px-4 py-2 bg-white text-tavern-black font-semibold rounded hover:bg-tavern-offwhite transition-colors">
                      Reservations
                    </a>
                    <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-tavern-white text-tavern-white rounded hover:bg-tavern-white/10 transition-colors">
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="py-20 px-6 bg-tavern-charcoal">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-tavern-white text-center mb-16">History</h2>
          <div className="space-y-12">
            {historyItems.map((item) => (
              <div key={item.year} className="flex gap-8">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-display text-2xl font-semibold text-tavern-silver">{item.year}</span>
                </div>
                <div className="flex-1 border-l-2 border-tavern-gray pl-8 pb-12">
                  <h3 className="font-display text-xl font-semibold text-tavern-white">{item.title}</h3>
                  <p className="mt-2 text-tavern-silver leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menus Teaser */}
      <section className="py-20 px-6 bg-tavern-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-semibold text-tavern-white mb-4">Menus</h2>
          <p className="text-tavern-silver mb-8">Explore our food and drink offerings.</p>
          <a href="/menus" className="inline-block px-8 py-3 border border-tavern-white text-tavern-white rounded hover:bg-tavern-white/10 transition-colors">
            View Menus
          </a>
        </div>
      </section>

      {/* Live Events */}
      <section className="py-20 px-6 bg-tavern-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-semibold text-tavern-white mb-4">Live Events</h2>
          <p className="text-tavern-silver mb-8">Live bands every weekend. Ready to play? Get in touch.</p>
          <a href="/events" className="inline-block px-8 py-3 bg-white text-tavern-black font-semibold rounded hover:bg-tavern-offwhite transition-colors">
            Learn More
          </a>
        </div>
      </section>

      {/* Photo Gallery Teaser */}
      <section className="py-20 px-6 bg-tavern-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-tavern-white text-center mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-tavern-charcoal rounded flex items-center justify-center text-tavern-silver/40 text-sm border border-tavern-gray">
                Photo {i}
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/gallery" className="text-tavern-silver hover:text-tavern-white transition-colors">View Gallery</a>
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section id="reservations" className="py-20 px-6 bg-tavern-charcoal">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-tavern-white text-center mb-8">Reservations</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div>
              <label className="block text-tavern-silver mb-1">Party Size</label>
              <select
                value={reservationForm.partySize}
                onChange={(e) => setReservationForm({ ...reservationForm, partySize: e.target.value })}
                className="w-full px-4 py-2 bg-tavern-dark border border-tavern-gray rounded text-tavern-white"
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
                <label className="block text-tavern-silver mb-1">Date</label>
                <input
                  type="date"
                  value={reservationForm.date}
                  onChange={(e) => setReservationForm({ ...reservationForm, date: e.target.value })}
                  className="w-full px-4 py-2 bg-tavern-dark border border-tavern-gray rounded text-tavern-white"
                />
              </div>
              <div>
                <label className="block text-tavern-silver mb-1">Time</label>
                <input
                  type="time"
                  value={reservationForm.time}
                  onChange={(e) => setReservationForm({ ...reservationForm, time: e.target.value })}
                  className="w-full px-4 py-2 bg-tavern-dark border border-tavern-gray rounded text-tavern-white"
                />
              </div>
            </div>
            <button type="submit" className="w-full py-3 bg-white text-tavern-black font-semibold rounded hover:bg-tavern-offwhite transition-colors">
              Find a Table
            </button>
          </form>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 px-6 bg-tavern-dark">
        <div className="max-w-md mx-auto">
          <h2 className="font-display text-2xl font-semibold text-tavern-white text-center mb-6">Email Signup</h2>
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
                className="px-4 py-2 bg-tavern-charcoal border border-tavern-gray rounded text-tavern-white placeholder-tavern-silver/60"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={emailForm.lastName}
                onChange={(e) => setEmailForm({ ...emailForm, lastName: e.target.value })}
                className="px-4 py-2 bg-tavern-charcoal border border-tavern-gray rounded text-tavern-white placeholder-tavern-silver/60"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={emailForm.email}
              onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
              className="w-full px-4 py-2 bg-tavern-charcoal border border-tavern-gray rounded text-tavern-white placeholder-tavern-silver/60"
            />
            <button type="submit" className="w-full py-3 bg-white text-tavern-black font-semibold rounded hover:bg-tavern-offwhite transition-colors">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
