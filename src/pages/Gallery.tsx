export default function Gallery() {
  return (
    <div className="pt-24 pb-20 px-6 text-tavern-white bg-tavern-dark">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-4xl font-semibold text-tavern-white mb-8">Photo Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden border border-tavern-gray">
              <img src={`/gallery/gallery-${i}.png`} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
