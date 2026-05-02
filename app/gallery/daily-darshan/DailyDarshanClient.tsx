"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import DailyDarshanHeader from "@/components/DailyDarshanHeader"
import type { DailyDarshanImage } from "@/lib/dailyDarshanServer"

// Static fallback — shown when the database has no rows yet
const STATIC_DARSHAN_IMAGES = [
  {
    id: 1,
    src: "/assets/daily-darshan/darshan-main.jpg",
    title: "Deity Darśan of Today",
    desc: "The Lord's merciful form, offered for you this day—may this holy vision purify the heart and awaken divine remembrance.",
  },
  {
    id: 2,
    src: "/assets/daily-darshan/darshan-1.jpg",
    title: "Sri Krishna's Lotus Face",
    desc: "Captivating smile of the Lord that enchants the three worlds.",
  },
  {
    id: 3,
    src: "/assets/daily-darshan/darshan-2.jpg",
    title: "Divine Flute Player",
    desc: "Krishna playing His transcendental flute.",
  },
  {
    id: 4,
    src: "/assets/daily-darshan/darshan-3.jpg",
    title: "Lotus Feet",
    desc: "The shelter of all the worlds.",
  },
  {
    id: 5,
    src: "/assets/daily-darshan/srila-prabhupada.jpg",
    title: "His Divine Grace A. C. Bhaktivedanta Swami Prabhupada",
    desc: "In meditation.",
  },
]

type ImageItem = { id: number; src: string; title: string; desc: string }

type Props = {
  dbImages: DailyDarshanImage[]
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
}

export default function DailyDarshanClient({ dbImages }: Props) {
  const darshanImages = useMemo<ImageItem[]>(() => {
    const safe = Array.isArray(dbImages) ? dbImages : []
    if (safe.length > 0) {
      return safe.slice(0, 9).map((img, idx) => ({ id: idx + 1, ...img }))
    }
    return STATIC_DARSHAN_IMAGES
  }, [dbImages])

  const total = darshanImages.length

  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)          // hover-pause only; no manual toggle
  const [lightboxImage, setLightboxImage] = useState<ImageItem | null>(null)
  const [direction, setDirection] = useState(1)

  // Clamp index whenever image list length changes (e.g. DB update)
  useEffect(() => {
    setCurrentIndex((prev) => (total > 0 ? Math.min(prev, total - 1) : 0))
  }, [total])

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const goNext = useCallback(() => {
    if (total === 0) return
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    if (total === 0) return
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > currentIndex ? 1 : -1)
      setCurrentIndex(idx)
    },
    [currentIndex],
  )

  // Always auto-slide; pause only on mouse hover or lightbox open
  useEffect(() => {
    if (paused || lightboxImage || total === 0) return
    const interval = setInterval(goNext, 5000)
    return () => clearInterval(interval)
  }, [paused, lightboxImage, goNext, total])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxImage) {
        if (e.key === "Escape") setLightboxImage(null)
        return
      }
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [goNext, goPrev, lightboxImage])

  // Safe current image — never undefined
  const safeIndex = total > 0 ? Math.min(currentIndex, total - 1) : 0
  const currentImage: ImageItem | undefined = darshanImages[safeIndex]

  if (!currentImage) {
    // Edge case: no images at all — show a minimal placeholder
    return (
      <main className="min-h-screen bg-[#FFF9F0] font-sans relative">
        <Navbar />
        <DailyDarshanHeader
          title="Daily Darshan"
          subtitle="Each day, the Lord adorns a new alankara—come, take His darśan, and return to the world with a quieter mind and a warmer heart."
          stickerText={today}
        />
        <div className="flex items-center justify-center py-32 text-[#b45309] font-serif text-xl">
          Darshan images will be posted soon. Please visit again.
        </div>
        <FooterSection />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#FFF9F0] font-sans selection:bg-[#fbbf24] selection:text-[#2D0A0A] relative">
      <Navbar />

      <DailyDarshanHeader
        title="Daily Darshan"
        subtitle="Each day, the Lord adorns a new alankara—come, take His darśan, and return to the world with a quieter mind and a warmer heart."
        stickerText={today}
      />

      <div className="relative z-30 container mx-auto px-4 md:px-6 max-w-6xl -mt-20 pb-24">

        {/* ── Main Slider ── */}
        <div className="bg-[#2D0A0A] rounded-3xl overflow-hidden shadow-2xl">

          {/* Slider Stage */}
          <div
            className="relative overflow-hidden"
            style={{
              height: "clamp(340px, 60vw, 620px)",
              background: "linear-gradient(135deg, #7c2d12 0%, #b45309 40%, #92400e 70%, #78350f 100%)",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={safeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="absolute inset-0"
              >
                {/* Blurred ambient fill — vivid so side bars glow with image colour */}
                <img
                  src={currentImage.src}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-70 pointer-events-none select-none"
                />

                {/* Main image — always fully visible, never cropped */}
                <img
                  src={currentImage.src}
                  alt={currentImage.title}
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />

                {/* Gradient for caption readability */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 z-30 p-6 md:p-10"
                >
                  <p className="text-[#fbbf24] text-xs font-bold uppercase tracking-[0.25em] mb-2">
                    {safeIndex + 1} / {total}
                  </p>
                  <h3 className="text-white text-2xl md:text-4xl font-bold font-serif leading-tight mb-1 drop-shadow-md">
                    {currentImage.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base font-serif italic max-w-2xl">
                    {currentImage.desc}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next arrows */}
            <button
              onClick={goPrev}
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/40 hover:bg-[#fbbf24] backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/40 hover:bg-[#fbbf24] backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            {/* Fullscreen */}
            <button
              onClick={() => setLightboxImage(currentImage)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-[#fbbf24] backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
              aria-label="View fullscreen"
            >
              <Maximize2 size={16} />
            </button>

            {/* Progress bar — always animating */}
            {!paused && (
              <div className="absolute bottom-0 left-0 right-0 h-1 z-20 bg-white/10">
                <motion.div
                  key={safeIndex}
                  className="h-full bg-[#fbbf24]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              </div>
            )}
          </div>

          {/* Thumbnail Strip + Dots */}
          <div className="px-4 md:px-6 pt-4 pb-5 bg-[#1a0505]">
            <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide justify-start md:justify-center">
              {darshanImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => goTo(idx)}
                  className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                    idx === safeIndex
                      ? "ring-2 ring-[#fbbf24] ring-offset-2 ring-offset-[#1a0505] scale-105 opacity-100"
                      : "opacity-40 hover:opacity-75"
                  }`}
                  style={{ width: 80, height: 56 }}
                  aria-label={`Go to ${img.title}`}
                >
                  {/* blurred fill so no black bars in thumbnails */}
                  <img src={img.src} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50 scale-110 pointer-events-none" />
                  <img src={img.src} alt={img.title} className="relative z-10 w-full h-full object-contain" />
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-3">
              {darshanImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === safeIndex
                      ? "w-6 h-2 bg-[#fbbf24]"
                      : "w-2 h-2 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Info + Mahamantra ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="relative rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between min-h-[220px] bg-[#FFF9F0] border border-[#fbbf24]/30">
            {/* Subtle mandala watermark */}
            <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] bg-center bg-cover opacity-[0.04] pointer-events-none" />

            {/* Gold glow top-right */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#fbbf24] rounded-full blur-[70px] opacity-25 pointer-events-none" />

            {/* Large decorative quote mark */}
            <span className="absolute top-2 left-5 text-[110px] leading-none font-serif text-[#b45309] opacity-10 select-none pointer-events-none">
              "
            </span>

            {/* Top gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#fbbf24]" />

            <div className="relative z-10 p-7 md:p-9 flex flex-col h-full justify-between">
              {/* Label */}
              <p className="text-[#b45309] text-[10px] font-black uppercase tracking-[0.28em] mb-5">
                Fix Your Mind · Right Here · Right Now
              </p>

              {/* Quote */}
              <blockquote className="text-[#2D0A0A] font-serif italic text-lg md:text-xl leading-relaxed flex-1 mb-6">
                "Engage your mind always in thinking of Me, offer obeisances and worship Me.
                Being completely absorbed in Me, surely you will come to Me."
              </blockquote>

              {/* Divider + attribution */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-[#fbbf24] to-transparent" />
                <p className="text-sm text-[#b45309] font-semibold font-serif shrink-0">
                  Sri Krishna
                </p>
              </div>
              <p className="text-[#92400e]/60 text-xs italic mt-1 tracking-wide">
                Srimad Bhagavad Gita, Chapter 9 · Verse 34
              </p>
            </div>
          </div>

          <div className="bg-[#2D0A0A] rounded-3xl p-8 shadow-xl relative overflow-hidden group flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover transition-all duration-700 group-hover:opacity-20 group-hover:blur-sm animate-pulse-slow" />
            <div className="relative z-10 text-center">
              <p className="text-[#fbbf24] text-sm font-bold uppercase tracking-widest mb-4">
                Chant &amp; Be Happy
              </p>
              <p className="text-white font-serif italic text-xl leading-relaxed">
                "Hare Krishna Hare Krishna
                <br />
                <span className="text-[#fbbf24] font-bold">Krishna Krishna Hare Hare</span>
                <br />
                Hare Rama Hare Rama
                <br />
                <span className="text-[#fbbf24] font-bold">Rama Rama Hare Hare</span>"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
                <h3 className="text-white text-3xl font-bold mb-2 font-serif">{lightboxImage.title}</h3>
                <p className="text-gray-300">{lightboxImage.desc}</p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-500 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </main>
  )
}
