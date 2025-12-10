"use client"

import dynamic from "next/dynamic"
import Hero from "@/components/Hero"
import Header from "@/components/Header"
import Loader from "@/components/Loader"
import { NavigationLoaderProvider } from "@/components/NavigationLoader"
import { AnimatePresence } from "framer-motion"
import RevealOnScroll from "@/components/RevealOnScroll"

// Lazy load below-the-fold components
const DarshanCarousel = dynamic(() => import("@/components/DarshanCarousel"), {
  loading: () => <div className="h-[600px] bg-slate-900" />
})
const SpiritualConnectGrid = dynamic(() => import("@/components/SpiritualConnectGrid"), {
  loading: () => <div className="h-[500px] bg-white" />
})
const ActivitiesShowcase = dynamic(() => import("@/components/ActivitiesShowcase"), {
  loading: () => <div className="h-[500px] bg-slate-50" />
})
const FloatingFooter = dynamic(() => import("@/components/FloatingFooter"), {
  loading: () => <div className="h-[400px] bg-slate-900" />
})

import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    // Force manual scroll restoration to prevent browser jumping
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Force scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <NavigationLoaderProvider>
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
      <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden w-full relative">
        <div className="relative z-10 w-full">
          <Header />
          <Hero />
          <RevealOnScroll>
            <DarshanCarousel />
          </RevealOnScroll>
          <RevealOnScroll>
            <SpiritualConnectGrid />
          </RevealOnScroll>
          <RevealOnScroll>
            <ActivitiesShowcase />
          </RevealOnScroll>
          <RevealOnScroll>
            <FloatingFooter />
          </RevealOnScroll>
        </div>
      </div>
    </NavigationLoaderProvider>
  )
}
