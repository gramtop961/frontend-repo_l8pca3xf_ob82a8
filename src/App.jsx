import SplashHero from './components/SplashHero'
import HomeSections from './components/HomeSections'
import PlacesList from './components/PlacesList'
import AdvertiserSpots from './components/AdvertiserSpots'

function App() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#0B1A2D]">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-[#0B1A2D]/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0B1A2D]"><span className="text-[#D4A017] font-serif">R</span></span>
            <span className="font-serif font-semibold">Recanati</span>
          </div>
          <nav className="hidden sm:flex items-center gap-5 text-sm">
            <a href="#explore" className="hover:text-[#C66A2B]">Explore</a>
            <a href="#routes" className="hover:text-[#C66A2B]">Routes</a>
            <a href="#food" className="hover:text-[#C66A2B]">Food</a>
            <a href="#shops" className="hover:text-[#C66A2B]">Shops</a>
          </nav>
        </div>
      </header>

      <main>
        <SplashHero />
        <HomeSections />
        <PlacesList />
        <AdvertiserSpots />
      </main>

      <footer className="border-t border-[#0B1A2D]/10 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div>
            <h4 className="font-serif text-lg">City of Poetry & Local Experiences</h4>
            <p className="text-sm text-[#0B1A2D]/70">Plan itineraries, book tastings, and discover premium merchants.</p>
          </div>
          <div className="text-sm text-[#0B1A2D]/70">
            Palette: Terracotta • Antique Gold • Midnight Blue • Ivory
          </div>
          <div className="flex justify-start md:justify-end">
            <button className="px-5 py-3 rounded-full bg-[#0B1A2D] text-white">Build My Tour</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
