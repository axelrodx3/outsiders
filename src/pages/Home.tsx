export default function Home() {
  const locations = [
    { name: 'Outsiders Tavern', address: '4124 Celanese Rd #130, Rock Hill, SC 29732', phone: '(803) 328-9200', slug: 'rock-hill', mapsUrl: 'https://www.google.com/maps/place/Outsiders+Tavern/@34.9790614,-81.0653751,17z', embedUrl: 'https://www.google.com/maps?q=Outsiders+Tavern+4124+Celanese+Rd+Rock+Hill+SC+29732&output=embed' },
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

      {/* Venue Photos */}
      <section className="py-16 px-6 bg-tavern-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden border border-tavern-gray">
                <img src={`/gallery/venue-${i}.png`} alt={`Outsiders Tavern ${i === 1 ? 'exterior' : i === 2 ? 'interior' : i === 3 ? 'patio' : 'stage'}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Specials */}
      <section className="py-16 px-6 bg-tavern-charcoal">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-tavern-white text-center mb-10">Specials</h2>
          <div className="space-y-0">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 py-3 border-b border-tavern-gray">
              <span className="font-display text-lg text-tavern-white">Tuesday</span>
              <span className="font-slab text-tavern-offwhite">$3–4 Tacos</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 py-3 border-b border-tavern-gray">
              <span className="font-display text-lg text-tavern-white">Wednesday</span>
              <span className="font-slab text-tavern-offwhite">$5 Jamo, Jack Daniel, Jim Beam &amp; Green/Orange Tea</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 py-3 border-b border-tavern-gray">
              <span className="font-display text-lg text-tavern-white">Thursday</span>
              <span className="font-slab text-tavern-offwhite">$6 Green/Orange Tea</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 py-3 border-b border-tavern-gray">
              <span className="font-display text-lg text-tavern-white">Saturday &amp; Sunday</span>
              <span className="font-slab text-tavern-offwhite">Pitchers $9 · Domestic Buckets $15</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="pt-4 pb-16 px-6 bg-tavern-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-tavern-white text-center mb-12">Our Location</h2>
          <div id="locations" className="grid md:grid-cols-1 max-w-2xl mx-auto gap-8">
            {locations.map((loc) => (
              <div key={loc.slug} className="bg-tavern-charcoal rounded-lg overflow-hidden border border-tavern-gray">
                <div className="h-48 w-full overflow-hidden bg-tavern-black">
                  <iframe
                    title="Outsiders Tavern location"
                    src={loc.embedUrl}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-tavern-white">{loc.name}</h3>
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block text-tavern-silver hover:text-tavern-white transition-colors">
                    {loc.address}
                  </a>
                  <p className="mt-1 text-tavern-silver/90">{loc.phone}</p>
                  <div className="mt-4">
                    <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-tavern-white text-tavern-white rounded hover:bg-tavern-white/10 transition-colors">
                      Get Directions
                    </a>
                  </div>
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

      {/* Photo Gallery Teaser */}
      <section className="py-20 px-6 bg-tavern-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-tavern-white text-center mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <a key={i} href="/gallery" className="aspect-square rounded-lg overflow-hidden border border-tavern-gray hover:opacity-90 transition-opacity">
                <img src={`/gallery/gallery-${i}.png`} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              </a>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/gallery" className="text-tavern-silver hover:text-tavern-white transition-colors">View Gallery</a>
          </div>
        </div>
      </section>
    </div>
  )
}
