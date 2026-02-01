import { useEffect, useState } from 'react'

const GALLERY_IMAGES = 12

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const goPrev = () => setLightboxIndex((prev) => (prev === null ? null : prev === 1 ? GALLERY_IMAGES : prev - 1))
  const goNext = () => setLightboxIndex((prev) => (prev === null ? null : prev === GALLERY_IMAGES ? 1 : prev + 1))

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [lightboxIndex])

  return (
    <div className="pt-24 pb-20 px-6 text-tavern-white bg-tavern-dark">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-4xl font-semibold text-tavern-white mb-8">Photo Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: GALLERY_IMAGES }, (_, i) => i + 1).map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => openLightbox(i)}
              className="aspect-square rounded-lg overflow-hidden border border-tavern-gray text-left focus:outline-none focus:ring-2 focus:ring-tavern-white/50"
            >
              <img src={`/gallery/gallery-${i}.png`} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:opacity-90 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-tavern-white hover:text-tavern-offwhite text-3xl font-light z-10"
            aria-label="Close"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-tavern-white hover:text-tavern-offwhite text-4xl font-light z-10"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext() }}
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
            {lightboxIndex} / {GALLERY_IMAGES}
          </span>
        </div>
      )}
    </div>
  )
}
