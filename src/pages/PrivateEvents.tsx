export default function PrivateEvents() {
  return (
    <div className="pt-24 pb-20 px-6 text-tavern-white bg-tavern-dark">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl font-semibold text-tavern-white mb-8">Live Events</h1>
        <p className="text-tavern-silver text-lg leading-relaxed mb-8">
          Every weekend, Outsiders Tavern brings the stage to life with live bands from rock and blues to acoustic sets. If you're in a band and want to take the stage, we'd love to hear from you.
        </p>
        <div className="bg-tavern-charcoal rounded-lg p-8 border border-tavern-gray">
          <h2 className="font-display text-xl font-semibold text-tavern-white mb-4">Get in Touch</h2>
          <p className="text-tavern-silver">
            <a href="https://maps.google.com/?q=4124+Celanese+Rd+Ste+130+Rock+Hill+SC+29732" target="_blank" rel="noopener noreferrer" className="text-tavern-white hover:underline">4124 Celanese Rd Ste 130, Rock Hill, SC 29732</a>
          </p>
          <p className="text-tavern-silver mt-2">
            <a href="tel:+18033289200" className="text-tavern-white hover:underline">(803) 328-9200</a>
          </p>
          <p className="text-tavern-silver mt-2">
            <a href="mailto:outsiderstavern@gmail.com" className="text-tavern-white hover:underline">outsiderstavern@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
