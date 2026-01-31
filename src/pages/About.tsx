export default function About() {
  return (
    <div className="pt-24 pb-20 px-6 text-tavern-white bg-tavern-dark">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl font-semibold text-tavern-white mb-8">About Us</h1>
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl font-semibold text-tavern-white mb-4">Our Team</h2>
            <p className="text-tavern-silver">[Placeholder - Add team bios and photos]</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-tavern-white mb-4">FAQs</h2>
            <p className="text-tavern-silver">[Placeholder - Add frequently asked questions]</p>
          </section>
        </div>
      </div>
    </div>
  )
}
