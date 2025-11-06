import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Feather, BookOpen } from 'lucide-react'

export default function SplashHero() {
  const [SplineComp, setSplineComp] = useState(null)
  const [splineReady, setSplineReady] = useState(false)

  useEffect(() => {
    let mounted = true
    import('@splinetool/react-spline')
      .then((m) => {
        if (mounted) setSplineComp(() => m.default)
      })
      .catch(() => {
        if (mounted) setSplineComp(null)
      })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-[#0B1A2D] text-white">
      <div className="absolute inset-0">
        {SplineComp ? (
          <SplineComp
            scene="https://prod.spline.design/AfW8n7fP2QdH9q3X/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onLoad={() => setSplineReady(true)}
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2000&auto=format&fit=crop"
            alt="Recanati sunset"
            className="w-full h-full object-cover opacity-60"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0B1A2D] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="p-2 rounded-full bg-white/10 border border-white/20">
            <BookOpen className="w-6 h-6 text-[#D4A017]" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
            Recanati – City of Poetry & Experiences
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-white/80"
        >
          "City of horizons and verses, where every step finds a line of poetry."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#explore" className="px-6 py-3 rounded-full bg-[#D4A017] text-[#0B1A2D] font-semibold shadow hover:brightness-95 transition">
            Start Exploring
          </a>
          <a href="#routes" className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition flex items-center gap-2">
            <Feather className="w-5 h-5" />
            Poetic Routes
          </a>
        </motion.div>

        {!splineReady && SplineComp && (
          <p className="mt-3 text-xs text-white/70">Loading 3D scene…</p>
        )}
      </div>
    </section>
  )
}
