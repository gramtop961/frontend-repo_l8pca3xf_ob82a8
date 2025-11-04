import { Star, BadgePercent, Crown } from 'lucide-react'

export default function AdvertiserSpots() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-serif text-[#0B1A2D]">Top Picks of the Week</h2>
        <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-[#FFF7E6] text-[#8A6D1E] border border-[#D4A017]/30">
          <BadgePercent className="w-4 h-4" /> Exclusive Offers
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <div key={i} className="rounded-2xl overflow-hidden border border-[#0B1A2D]/10 bg-white">
            <div className="relative h-40">
              <img
                src={`https://images.unsplash.com/photo-15${i}00534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop`}
                alt="Featured Merchant"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs bg-[#D4A017] text-[#0B1A2D] flex items-center gap-1">
                <Crown className="w-3 h-3" /> Featured
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg text-[#0B1A2D]">Recommended by the City</h3>
                <span className="inline-flex items-center gap-1 text-[#0B1A2D]/80 text-sm">
                  <Star className="w-4 h-4 text-[#D4A017]" /> 4.{i}
                </span>
              </div>
              <p className="mt-1 text-sm text-[#0B1A2D]/70">Premium advertiser. Book a tasting or shop the collection.</p>
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 rounded-full bg-[#C66A2B] text-white text-sm">Buy Now</button>
                <button className="px-4 py-2 rounded-full border border-[#0B1A2D]/15 text-sm">Book Visit</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl p-4 bg-gradient-to-r from-[#C66A2B] to-[#D4A017] text-white">
          <p className="text-sm uppercase tracking-wider">Sponsored</p>
          <h4 className="mt-1 text-lg font-semibold">Taste of the Marche – Gourmet Box</h4>
          <p className="text-white/90 text-sm">Limited-time bundle from local artisans. Use code POETRY10.</p>
        </div>
        <div className="rounded-xl p-4 bg-[#0B1A2D] text-white">
          <p className="text-sm uppercase tracking-wider">Featured Merchant</p>
          <h4 className="mt-1 text-lg font-semibold">Le Botteghe di Recanati</h4>
          <p className="text-white/90 text-sm">Handcrafted souvenirs and bespoke experiences.</p>
        </div>
      </div>
    </section>
  )
}
