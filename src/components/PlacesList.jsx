import { MapPin, Navigation, Filter } from 'lucide-react'

const places = [
  {
    id: 1,
    title: 'Piazza Leopardi',
    intro: 'Where verses drift with the evening breeze.',
    distance: '300 m',
    tag: 'Historical',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Colle dell’Infinito',
    intro: 'A terrace to the soul, a horizon of thought.',
    distance: '1.2 km',
    tag: 'Scenic',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Museo di Villa Colloredo',
    intro: 'Art whispers between gold and shadow.',
    distance: '850 m',
    tag: 'Museums',
    image: 'https://images.unsplash.com/photo-1685592567014-198466aba3a4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNdXNlbyUyMGRpJTIwVmlsbGElMjBDb2xsb3JlZG98ZW58MHwwfHx8MTc2MjI2OTMzOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
]

const filters = ['Historical', 'Scenic', 'Museums', 'Nearby', 'Churches']

export default function PlacesList() {
  return (
    <section className="bg-[#F5F0E6] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-serif text-[#0B1A2D]">Places to Visit</h2>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0B1A2D]/15 text-[#0B1A2D] bg-white hover:bg-[#0B1A2D]/5">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-3">
          {filters.map((f) => (
            <button key={f} className="px-4 py-2 rounded-full bg-white text-[#0B1A2D] border border-[#0B1A2D]/10 hover:bg-[#0B1A2D]/5 whitespace-nowrap">
              {f}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {places.map((p) => (
            <article key={p.id} className="rounded-2xl overflow-hidden bg-white shadow">
              <div className="relative h-44">
                <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-white/90 text-[#0B1A2D]">{p.tag}</span>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-[#0B1A2D]">{p.title}</h3>
                <p className="mt-1 text-sm text-[#0B1A2D]/70">{p.intro}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#0B1A2D]/80 text-sm">
                    <MapPin className="w-4 h-4" /> {p.distance}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-2 rounded-full bg-[#D4A017] text-[#0B1A2D] text-sm font-medium">Go Now</button>
                    <button className="px-3 py-2 rounded-full border border-[#0B1A2D]/15 text-sm">Add to My Tour</button>
                    <button className="p-2 rounded-full bg-[#0B1A2D] text-white" aria-label="Navigate">
                      <Navigation className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
