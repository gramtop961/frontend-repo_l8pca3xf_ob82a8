import React, { useMemo, useState } from 'react';
import { MapPin, Star, Heart, Navigation } from 'lucide-react';

const PLACES = [
  { id: 1, name: 'Casa Leopardi', type: 'cultura', rating: 4.9, distance: 0.4, img: 'https://images.unsplash.com/photo-1518739741274-1a2ebf84c0d8?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Piazza Leopardi', type: 'cultura', rating: 4.7, distance: 0.2, img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Vigneti del Conero', type: 'natura', rating: 4.8, distance: 12, img: 'https://images.unsplash.com/photo-1504548840739-580b10ae7715?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Trattoria Marchigiana', type: 'cibo', rating: 4.6, distance: 0.9, img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop' },
];

const filters = [
  { key: 'tutti', label: 'Tutti' },
  { key: 'cultura', label: 'Cultura' },
  { key: 'cibo', label: 'Cibo' },
  { key: 'natura', label: 'Natura' },
];

export default function PlacesList() {
  const [active, setActive] = useState('tutti');

  const items = useMemo(() => {
    if (active === 'tutti') return PLACES;
    return PLACES.filter((p) => p.type === active);
  }, [active]);

  return (
    <section className="bg-white text-[#0B1A2D]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold">Luoghi da visitare</h3>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                  active === f.key ? 'bg-[#0B1A2D] text-white border-[#0B1A2D]' : 'bg-white text-[#0B1A2D] border-black/10 hover:bg-black/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <article key={p.id} className="group rounded-xl overflow-hidden border border-black/5 shadow-sm bg-white">
              <div className="relative h-44">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 text-white px-2 py-1 text-xs">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span>{p.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-lg">{p.name}</h4>
                <div className="mt-1 flex items-center gap-2 text-sm text-[#0B1A2D]/70">
                  <MapPin className="w-4 h-4" />
                  <span>{p.distance} km</span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#C66A2B] text-white hover:bg-[#b95f25] transition-colors">
                    <Navigation className="w-4 h-4" /> Naviga
                  </button>
                  <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black/5 text-[#0B1A2D] hover:bg-black/10 transition-colors">
                    <Heart className="w-4 h-4" /> Aggiungi al tour
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
