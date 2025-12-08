"use client"

import dynamic from "next/dynamic"
import HeroHeader from "@/components/HeroHeader"
import Loader from "@/components/Loader"
import { NavigationLoaderProvider } from "@/components/NavigationLoader"
import { AnimatePresence } from "framer-motion"

// Lazy load below-the-fold components
const ExplorationSection = dynamic(() => import("@/components/ExplorationSection"), {
  loading: () => <div className="h-[600px] bg-slate-900" />
})
const ImageCardsSection = dynamic(() => import("@/components/ImageCardsSection"), {
  loading: () => <div className="h-[500px] bg-white" />
})
const ActivitiesShowcase = dynamic(() => import("@/components/ActivitiesShowcase"), {
  loading: () => <div className="h-[500px] bg-slate-50" />
})
const FooterSection = dynamic(() => import("@/components/FooterSection"), {
  loading: () => <div className="h-[400px] bg-slate-900" />
})

export default function HomePage() {
  return (
    <NavigationLoaderProvider>
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
      <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden max-w-full relative">
        {/* Mandala pattern backgrounds - Optimized with fewer patterns */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Top area - reduced to 2 patterns */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-6">
            <img
              src="/assets/BlackWhiteMandalaPattern1.jpg"
              alt=""
              loading="lazy"
              width="500"
              height="500"
              className="w-full h-full object-contain rotate-45 mix-blend-multiply"
              style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
            />
          </div>
          <div className="absolute top-20 -right-40 w-[450px] h-[450px] opacity-5">
            <img
              src="/assets/BlackWhiteMandalaPattern2.jpg"
              alt=""
              loading="lazy"
              width="450"
              height="450"
              className="w-full h-full object-contain -rotate-12 mix-blend-multiply"
              style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
            />
          </div>

          {/* Middle area - reduced to 2 patterns */}
          <div className="absolute top-[40%] -left-32 w-[400px] h-[400px] opacity-4">
            <img
              src="/assets/BlackWhiteMandalaPattern3.jpg"
              alt=""
              loading="lazy"
              width="400"
              height="400"
              className="w-full h-full object-contain rotate-90 mix-blend-multiply"
              style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
            />
          </div>
          <div className="absolute top-[40%] -right-36 w-[380px] h-[380px] opacity-5">
            <img
              src="/assets/BlackWhiteMandalaPattern4.jpg"
              alt=""
              loading="lazy"
              width="380"
              height="380"
              className="w-full h-full object-contain rotate-180 mix-blend-multiply"
              style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
            />
          </div>

          {/* Bottom area - reduced to 2 patterns */}
          <div className="absolute bottom-32 -left-24 w-[450px] h-[450px] opacity-6">
            <img
              src="/assets/BlackWhiteMandalaPattern5.jpg"
              alt=""
              loading="lazy"
              width="450"
              height="450"
              className="w-full h-full object-contain -rotate-20 mix-blend-multiply"
              style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
            />
          </div>
          <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] opacity-5">
            <img
              src="/assets/BlackWhiteMandalaPattern6.jpg"
              alt=""
              loading="lazy"
              width="480"
              height="480"
              className="w-full h-full object-contain rotate-12 mix-blend-multiply"
              style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
            />
          </div>
        </div>

        <div className="relative z-10">
          <HeroHeader />
          <ExplorationSection />
          <ImageCardsSection />
          <ActivitiesShowcase />
          <FooterSection />
        </div>
      </div>
    </NavigationLoaderProvider>
  )
}
