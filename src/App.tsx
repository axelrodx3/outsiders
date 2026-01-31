function App() {
  return (
    <div className="min-h-screen text-tavern-cream">
      {/* Hero */}
      <header className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-tavern-wood/80 to-tavern-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#1a1510_70%)]" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-tavern-amber drop-shadow-lg">
            Outsiders Tavern
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-body font-light text-tavern-cream/90 max-w-lg mx-auto">
            Good food. Cold drinks. Great company.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#visit"
              className="px-8 py-3 bg-tavern-amber text-tavern-dark font-semibold rounded hover:bg-amber-400 transition-colors"
            >
              Visit Us
            </a>
            <a
              href="#about"
              className="px-8 py-3 border border-tavern-amber text-tavern-amber rounded hover:bg-tavern-amber/10 transition-colors"
            >
              Our Story
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-tavern-wood">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-tavern-amber mb-6">
            Welcome In
          </h2>
          <p className="text-lg text-tavern-cream/90 leading-relaxed">
            Outsiders Tavern is your neighborhood spot — where locals gather for hearty meals,
            craft beers, and good conversation. Whether you're here for a quick bite or settling
            in for the evening, we're glad you found us.
          </p>
        </div>
      </section>

      {/* Hours & Location */}
      <section id="visit" className="py-20 px-6 bg-tavern-dark">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-semibold text-tavern-amber mb-4">
              Hours
            </h2>
            <div className="space-y-2 text-tavern-cream/90">
              <p>Mon – Thu: 4pm – 12am</p>
              <p>Fri – Sat: 12pm – 2am</p>
              <p>Sun: 12pm – 10pm</p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-tavern-amber mb-4">
              Location
            </h2>
            <p className="text-tavern-cream/90">
              123 Main Street<br />
              Your City, ST 12345
            </p>
            <p className="mt-4 text-tavern-cream/70 text-sm">
              (Update with your actual address)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-tavern-wood text-center text-tavern-cream/70 text-sm">
        <p>Outsiders Tavern</p>
        <p className="mt-1">Contact: (555) 123-4567 • info@outsiderstavern.com</p>
      </footer>
    </div>
  )
}

export default App
