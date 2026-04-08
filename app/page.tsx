"use client"

import dynamic from "next/dynamic"
// import Header from "@/components/Header"
import Loader from "@/components/Loader"
import { NavigationLoaderProvider } from "@/components/NavigationLoader"
import { AnimatePresence } from "framer-motion"
import RevealOnScroll from "@/components/RevealOnScroll"
import { useEffect, useState, useRef } from "react"
import FooterSection from "@/components/FooterSection"
import ContactPopup from "@/components/ContactPopup"

// Lazy load new sections
const VideoHero = dynamic(() => import("@/components/VideoHero"), {
    loading: () => <div className="h-screen bg-black" />
})
// const CoverflowCarousel = dynamic(() => import("@/components/CoverflowCarousel"), {
//     loading: () => <div className="h-[700px] bg-[#111827]" />
// })
const CoverflowCarouselV2 = dynamic(() => import("@/components/CoverflowCarouselV2"), {
    loading: () => <div className="h-[700px] bg-[#111827]" />
})

const TempleInfoSection = dynamic(() => import("@/components/TempleInfoSection"), {
    loading: () => <div className="h-[700px] bg-stone-50" />
})

const DiscoverGrid = dynamic(() => import("@/components/DiscoverGrid"), {
  loading: () => <div className="h-[400px] bg-slate-50" />
})
const InfiniteActivitySlider = dynamic(() => import("@/components/InfiniteActivitySlider"), {
  loading: () => <div className="h-[500px] bg-white" />
})

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null) // Ref for DiscoverGrid wrapper

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Scroll Trigger Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger only if intersecting and hasn't triggered yet
        if (entry.isIntersecting && !hasTriggered) {
          setShowPopup(true)
          setHasTriggered(true)
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    )

    if (triggerRef.current) {
        observer.observe(triggerRef.current)
    }

    return () => observer.disconnect()
  }, [hasTriggered])

  return (
    <NavigationLoaderProvider>
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
      <div className="min-h-screen bg-white text-slate-800 w-full relative">
        <div className="relative z-10 w-full">
          {/* <Header /> */}
          <VideoHero />
          {/* <CoverflowCarousel /> */}
          {/* <CoverflowCarouselV2 /> */}
          <TempleInfoSection />
          

          {/* Section 2: Discover Offerings */}
          <div ref={triggerRef}> {/* Wrap DiscoverGrid to observe it */}
            <RevealOnScroll>
                <DiscoverGrid />
            </RevealOnScroll>
          </div>

          {/* Section 2: Infinite Activities Slider */}
          <RevealOnScroll>
            <InfiniteActivitySlider />
          </RevealOnScroll>

          <RevealOnScroll>
             <FooterSection />
          </RevealOnScroll>
        </div>
        
        {/* Contact Popup */}
        <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      </div>
    </NavigationLoaderProvider>
  )
}
