import React, { useEffect, useState } from 'react';

const quotes = [
  'Sempre caro mi fu quest’ermo colle…',
  'E il naufragar m’è dolce in questo mare.',
  'Che fai tu, luna, in ciel? dimmi, che fai…',
  'O natura, o natura, perché non rendi poi…',
];

export default function HomeSections() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="explore" className="bg-[#F5F0E6] text-[#0B1A2D]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-semibold">Esperienze locali selezionate</h2>
            <p className="mt-3 text-[#0B1A2D]/70">
              Passeggiate guidate, degustazioni, laboratori e mostre. Prenota e vivi la città come un locale.
            </p>
            <blockquote className="mt-6 p-4 rounded-lg bg-white text-[#0B1A2D] shadow-sm border border-black/5">
              <p className="italic">“{quotes[index]}”</p>
              <span className="mt-2 block text-sm text-[#0B1A2D]/60">— G. Leopardi</span>
            </blockquote>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {[
              { title: 'Musei & Cultura', img: 'https://images.unsplash.com/photo-1523742810063-4b9ae33a2d49?q=80&w=1200&auto=format&fit=crop' },
              { title: 'Degustazioni', img: 'https://images.unsplash.com/photo-1528838062671-86b1f6a2b7bd?q=80&w=1200&auto=format&fit=crop' },
              { title: 'Natura', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
              { title: 'Artigianato', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop' },
            ].map((c) => (
              <a key={c.title} href="#routes" className="group relative h-36 sm:h-44 rounded-xl overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-3 left-3 text-white font-medium drop-shadow">{c.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
