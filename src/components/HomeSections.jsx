import { useEffect, useState } from 'react'
import { MapPin, Route, Utensils, ShoppingBag, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Explore Recanati',
    desc: 'Icons, churches, museums and panoramic terraces.',
    icon: MapPin,
    color: 'from-[#C66A2B] to-[#D4A017]'
  },
  {
    title: 'Poetic Routes',
    desc: 'Walk in the footsteps of Leopardi with curated itineraries.',
    icon: Route,
    color: 'from-[#0B1A2D] to-[#C66A2B]'
  },
  {
    title: 'Food & Restaurants',
    desc: 'Osterie, wine bars and local kitchens to savor.',
    icon: Utensils,
    color: 'from-[#D4A017] to-[#C66A2B]'
  },
  {
    title: 'Local Shops & Experiences',
    desc: 'Artisans, galleries and tastings. Support local.',
    icon: ShoppingBag,
    color: 'from-[#0B1A2D] to-[#D4A017]'
  }
]

const quotes = [
  'Sempre caro mi fu quest’ermo colle…',
  'E il naufragar m’è dolce in questo mare.',
  'O natura, o natura, perché non rendi poi…',
  'Dolcissimo e tremendo è il tuo canto, Recanati.'
]

export default function HomeSections() {
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((q) => (q + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-serif text-[#0B1A2D]">Welcome to Recanati, Home of Leopardi</h2>
        <p className="mt-2 text-[#0B1A2D]/70 italic flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D4A017]" />
          <span>“{quotes[quoteIndex]}”</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c, i) => (
          <motion.button
            key={c.title}
            whileHover={{ y: -4 }}
            className={`rounded-2xl p-5 text-left bg-gradient-to-br ${c.color} text-white shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <c.icon className="w-6 h-6 opacity-90" />
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Explore</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold font-serif">{c.title}</h3>
            <p className="mt-1 text-sm/6 text-white/90">{c.desc}</p>
          </motion.button>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <button className="px-6 py-3 rounded-full bg-[#C66A2B] text-white font-semibold shadow hover:brightness-95">Start Exploring</button>
      </div>
    </section>
  )
}
