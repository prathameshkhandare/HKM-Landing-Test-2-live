"use client"

import dynamic from "next/dynamic"
// import Header from "@/components/Header"
import Loader from "@/components/Loader"
import { NavigationLoaderProvider } from "@/components/NavigationLoader"
import { AnimatePresence } from "framer-motion"
import RevealOnScroll from "@/components/RevealOnScroll"
import { useEffect } from "react"
import FooterSection from "@/components/FooterSection"

// Lazy load new sections
const VideoHero = dynamic(() => import("@/components/VideoHero"), {
    loading: () => <div className="h-screen bg-black" />
})
const CoverflowCarousel = dynamic(() => import("@/components/CoverflowCarousel"), {
    loading: () => <div className="h-[700px] bg-[#111827]" />
})


const DiscoverGrid = dynamic(() => import("@/components/DiscoverGrid"), {
  loading: () => <div className="h-[400px] bg-slate-50" />
})
const InfiniteActivitySlider = dynamic(() => import("@/components/InfiniteActivitySlider"), {
  loading: () => <div className="h-[500px] bg-white" />
})

export default function HomePage() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <NavigationLoaderProvider>
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
      <div className="min-h-screen bg-white text-slate-800 w-full relative">
        <div className="relative z-10 w-full">
          {/* <Header /> */}
          <VideoHero />
          <CoverflowCarousel />
          


          {/* Section 2: Discover Offerings */}
          <RevealOnScroll>
            <DiscoverGrid />
          </RevealOnScroll>

          {/* Section 2: Infinite Activities Slider */}
          <RevealOnScroll>
            <InfiniteActivitySlider />
          </RevealOnScroll>

          <RevealOnScroll>
             <FooterSection />
          </RevealOnScroll>
        </div>
      </div>
    </NavigationLoaderProvider>
  )
}
