import React from 'react';
import SplashHero from './components/SplashHero';
import HomeSections from './components/HomeSections';
import PlacesList from './components/PlacesList';
import AdvertiserSpots from './components/AdvertiserSpots';
import { Map, Menu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#hero" className="font-semibold text-[#0B1A2D]">Recanati</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-[#0B1A2D]/80">
            <a href="#explore" className="hover:text-[#0B1A2D]">Esplora</a>
            <a href="#routes" className="hover:text-[#0B1A2D]">Itinerari</a>
            <a href="#partners" className="hover:text-[#0B1A2D]">Partner</a>
          </nav>
          <button className="sm:hidden inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-black/10"><Menu className="w-4 h-4" /> Menu</button>
        </div>
      </header>

      {/* Hero */}
      <SplashHero />

      {/* Content sections */}
      <HomeSections />
      <PlacesList />
      <AdvertiserSpots />

      {/* Footer */}
      <footer id="partners" className="mt-auto bg-[#0B1A2D] text-white">
        <div className="max-w-6xl mx-auto px-6 py-8 grid sm:grid-cols-2 gap-6 items-center">
          <div>
            <h5 className="font-semibold">Recanati – City of Poetry</h5>
            <p className="text-white/70 text-sm mt-1">Storie, luoghi ed esperienze locali in un’unica app.</p>
          </div>
          <div className="flex sm:justify-end">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 px-4 py-2">
              <Map className="w-4 h-4" /> Mappa interattiva
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
