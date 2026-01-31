export default function Menus() {
  return (
    <div className="pt-24 pb-20 px-6 text-tavern-white bg-tavern-dark">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl font-semibold text-tavern-white mb-8">Menus</h1>
        <div className="space-y-8">
          <div className="bg-tavern-charcoal rounded-lg p-8 border border-tavern-gray">
            <h2 className="font-display text-2xl font-semibold text-tavern-white mb-4">Food Menu</h2>
            <p className="text-tavern-silver">[Placeholder - Add your food menu items here]</p>
          </div>
          <div className="bg-tavern-charcoal rounded-lg p-8 border border-tavern-gray">
            <h2 className="font-display text-2xl font-semibold text-tavern-white mb-4">Drinks Menu</h2>
            <p className="text-tavern-silver">[Placeholder - Add your drinks menu here]</p>
          </div>
        </div>
      </div>
    </div>
  )
}
