import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Optionally log error
    // console.error('Spline error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function SplashHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative w-full h-[75vh] sm:h-[80vh] md:h-[90vh] overflow-hidden bg-[#0B1A2D] text-white">
      <div className="absolute inset-0">
        <ErrorBoundary
          fallback={
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop"
              alt="Recanati – City of Poetry"
              className="w-full h-full object-cover"
            />
          }
        >
          <Spline
            scene="https://prod.spline.design/NwQb0eW5eLQ-Placeholder/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onLoad={() => setLoaded(true)}
          />
        </ErrorBoundary>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0B1A2D] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="backdrop-blur-sm/0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Recanati
            <span className="block text-[#D4A017]">City of Poetry</span>
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-white/80">
            Immergiti tra colline, versi di Leopardi e sapori locali. Scopri itinerari poetici, luoghi iconici e esperienze autentiche.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#explore" className="inline-flex items-center gap-2 rounded-lg bg-[#C66A2B] hover:bg-[#b95f25] transition-colors px-4 sm:px-5 py-2.5 text-white">
              Inizia l'esplorazione
            </a>
            <a href="#routes" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 transition-colors px-4 sm:px-5 py-2.5 text-white">
              Itinerari poetici
            </a>
          </div>
          {!loaded && (
            <div className="mt-6 text-white/70 text-sm flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
              Caricamento della scena 3D…
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
