import React from 'react';
import { BadgePercent, Star, ExternalLink } from 'lucide-react';

const SPONSORS = [
  {
    id: 's1',
    name: 'Enoteca del Colle',
    offer: 'Degustazione Verdicchio 2x1',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1514361892635-eae31a53dbe0?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 's2',
    name: 'Bottega Artigiana',
    offer: '10% su ceramiche locali',
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 's3',
    name: 'Trattoria del Centro',
    offer: 'Menù degustazione €25',
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1541542684-4a9c9d1f3a39?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
];

export default function AdvertiserSpots() {
  return (
    <section id="routes" className="bg-[#0B1A2D] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-semibold">In evidenza dai partner</h3>
          <a href="#" className="text-sm text-white/80 hover:text-white">Diventa partner</a>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPONSORS.map((s) => (
            <article key={s.id} className="group rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <div className="relative h-44">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#D4A017] text-[#0B1A2D] px-2 py-1 text-xs font-medium">
                  <BadgePercent className="w-3.5 h-3.5" /> Offerta
                </div>
                <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 text-white px-2 py-1 text-xs">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" /> {s.rating}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-lg">{s.name}</h4>
                <p className="text-white/80 text-sm mt-1">{s.offer}</p>
                <a href={s.link} className="mt-4 inline-flex items-center gap-2 text-sm text-[#D4A017] hover:underline">
                  Scopri di più <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
