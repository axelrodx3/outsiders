import { useEffect, useState } from 'react'

const DAYS = [
  { day: 'Mon', hours: '11:30 AM – 12:00 AM (Next day)', full: 'Monday', closeHour: 0, closeMin: 0 },
  { day: 'Tue', hours: '11:30 AM – 12:00 AM (Next day)', full: 'Tuesday', closeHour: 0, closeMin: 0 },
  { day: 'Wed', hours: '11:30 AM – 12:00 AM (Next day)', full: 'Wednesday', closeHour: 0, closeMin: 0 },
  { day: 'Thu', hours: '11:30 AM – 1:00 AM (Next day)', full: 'Thursday', closeHour: 1, closeMin: 0 },
  { day: 'Fri', hours: '11:30 AM – 2:00 AM (Next day)', full: 'Friday', closeHour: 2, closeMin: 0 },
  { day: 'Sat', hours: '11:30 AM – 2:00 AM (Next day)', full: 'Saturday', closeHour: 2, closeMin: 0 },
  { day: 'Sun', hours: '11:30 AM – 12:00 AM (Next day)', full: 'Sunday', closeHour: 0, closeMin: 0 },
]

function isOpenNow(): boolean {
  const now = new Date()
  const day = now.getDay()
  const dayIndex = day === 0 ? 6 : day - 1
  const minsSinceMidnight = now.getHours() * 60 + now.getMinutes()
  const openMins = 11 * 60 + 30

  if (minsSinceMidnight >= openMins) return true
  const yesterdayIndex = (dayIndex + 6) % 7
  const closeMins = DAYS[yesterdayIndex].closeHour * 60 + DAYS[yesterdayIndex].closeMin
  if (closeMins > 0 && minsSinceMidnight < closeMins) return true
  return false
}

export default function Home() {
  const todayIndex = new Date().getDay()
  const currentDayIndex = todayIndex === 0 ? 6 : todayIndex - 1
  const openNow = isOpenNow()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev === null ? null : prev === 1 ? 4 : prev - 1))
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev === null ? null : prev === 4 ? 1 : prev + 1))
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [lightboxIndex])

  const locations = [
    { name: 'Outsiders Tavern', address: '4124 Celanese Rd #130, Rock Hill, SC 29732', phone: '(803) 328-9200', slug: 'rock-hill', mapsUrl: 'https://www.google.com/maps/place/Outsiders+Tavern/@34.9790614,-81.0653751,17z', embedUrl: 'https://www.google.com/maps?q=Outsiders+Tavern+4124+Celanese+Rd+Rock+Hill+SC+29732&output=embed' },
  ]

  return (
    <div className="text-tavern-white">
      {/* Hero - Welcome */}
      <section className="pt-28 pb-16 px-6 bg-black">
        <h1 className="sr-only">Outsiders Tavern - Restaurant & Bar</h1>
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="/logo.png?v=4"
            alt="Outsiders Tavern"
            className="max-w-[380px] md:max-w-[480px] w-full h-auto mx-auto mb-6 animate-hero-enter opacity-0"
            style={{ animationDelay: '0.1s' }}
          />
          <p
            className="text-tavern-silver text-lg md:text-xl font-slab max-w-md mx-auto animate-hero-enter opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
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

      {/* Hours */}
      <section className="py-16 px-6 bg-tavern-charcoal">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-tavern-white text-center mb-10">Hours</h2>
          <div className="space-y-0">
            {DAYS.map((d, i) => (
              <div key={d.day} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 py-3 border-b border-tavern-gray">
                <span className="font-display text-lg text-tavern-white flex items-center gap-2">
                  {d.day}
                  {i === currentDayIndex && (
                    <span className={`text-xs font-slab font-semibold text-white px-2 py-0.5 rounded ${openNow ? 'bg-green-600 animate-open-pulse' : 'bg-red-600'}`}>
                      {openNow ? 'Open' : 'Closed'}
                    </span>
                  )}
                </span>
                <span className="font-slab text-tavern-offwhite">{d.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Teaser */}
      <section className="py-20 px-6 bg-tavern-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-tavern-white text-center mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="aspect-square rounded-lg overflow-hidden border border-tavern-gray hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-tavern-white/50"
              >
                <img src={`/gallery/gallery-${i}.png`} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/gallery" className="text-tavern-silver hover:text-tavern-white transition-colors">View Gallery</a>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-tavern-white hover:text-tavern-offwhite text-3xl font-light z-10"
            aria-label="Close"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev === 1 ? 4 : prev! - 1)) }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-tavern-white hover:text-tavern-offwhite text-4xl font-light z-10"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev === 4 ? 1 : prev! + 1)) }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-tavern-white hover:text-tavern-offwhite text-4xl font-light z-10"
            aria-label="Next image"
          >
            ›
          </button>
          <img
            src={`/gallery/gallery-${lightboxIndex}.png`}
            alt={`Gallery ${lightboxIndex}`}
            className="max-w-full max-h-[90vh] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-tavern-silver text-sm">
            {lightboxIndex} / 4
          </span>
        </div>
      )}
    </div>
  )
}
