export default function Gallery() {
  return (
    <div className="pt-24 pb-20 px-6 text-tavern-white bg-tavern-dark">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-4xl font-semibold text-tavern-white mb-8">Photo Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="aspect-square bg-tavern-charcoal rounded-lg flex items-center justify-center text-tavern-silver/40 border border-tavern-gray">
              Photo {i}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-tavern-silver">[Placeholder - Add your restaurant photos]</p>
      </div>
    </div>
  )
}
