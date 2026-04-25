"use client"

import React, { useState, useMemo } from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, X, Heart } from "lucide-react"
import DailyDarshanHeader from "@/components/DailyDarshanHeader"
import type { DailyDarshanHero } from "@/lib/dailyDarshanServer"

// Default gallery (first slot can be replaced by latest Supabase `daily_darshan` row)
const STATIC_DARSHAN_IMAGES: {
  id: number
  src: string
  title: string
  desc: string
  size: "large" | "tall" | "normal" | "wide"
}[] = [
  {
    id: 1,
    src: "/assets/daily-darshan/darshan-main.jpg",
    title: "Deity Darśan of Today",
    desc: "The Lord’s merciful form, offered for you this day—may this holy vision purify the heart and awaken divine remembrance.",
    size: "large",
  },
  {
    id: 2,
    src: "/assets/daily-darshan/darshan-1.jpg",
    title: "Sri Krishna's Lotus Face",
    desc: "Captivating smile of the Lord that enchants the three worlds.",
    size: "tall",
  },
  {
    id: 3,
    src: "/assets/daily-darshan/darshan-2.jpg",
    title: "Divine Flute Player",
    desc: "Krishna playing His transcendental flute.",
    size: "normal",
  },
  {
    id: 4,
    src: "/assets/daily-darshan/darshan-3.jpg",
    title: "Lotus Feet",
    desc: "The shelter of all the worlds.",
    size: "normal",
  },
  {
    id: 5,
    src: "/assets/daily-darshan/srila-prabhupada.jpg",
    title: "His Divine Grace Vishwa Guru A. C. Bhaktivedanta Swami Prabhupada",
    desc: "In meditation.",
    size: "wide",
  },
]

type ImageItem = (typeof STATIC_DARSHAN_IMAGES)[number]

type Props = {
  heroFromSupabase: DailyDarshanHero
}

export default function DailyDarshanClient({ heroFromSupabase }: Props) {
  const darshanImages = useMemo(() => {
    if (!heroFromSupabase?.src) return STATIC_DARSHAN_IMAGES
    const [first, ...rest] = STATIC_DARSHAN_IMAGES
    return [
      {
        ...first,
        src: heroFromSupabase.src,
        title: heroFromSupabase.title,
        desc: heroFromSupabase.desc,
      },
      ...rest,
    ] as ImageItem[]
  }, [heroFromSupabase])

  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <main className="min-h-screen bg-[#FFF9F0] font-sans selection:bg-[#fbbf24] selection:text-[#2D0A0A] relative">
      <Navbar />

      <DailyDarshanHeader
        title="Daily Darshan"
        subtitle="Each day, the Lord adorns a new alankara—come, take His darśan, and return to the world with a quieter mind and a warmer heart."
        stickerText={today}
      />

      <div className="relative z-30 container mx-auto px-6 max-w-7xl -mt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-center border-t-8 border-[#fbbf24] shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b45309] mb-2">
              Auspicious beginning
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D0A0A] mb-4 font-serif leading-snug">
              Deity Darśan of This Blessed Day
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
              There is no fortune greater than a moment before the Deities—the eyes drink darśan, the
              soul finds rest. Step into the day having offered your heart, even in thought, at Their
              lotus feet.
            </p>
            <button className="flex items-center gap-2 text-sm font-bold text-[#d97706] uppercase tracking-wider hover:text-[#b45309] transition-colors self-start">
              Subscribe for Updates <ChevronRight size={16} />
            </button>
          </div>

          {darshanImages.map((img, idx) => (
            <motion.div
              layoutId={`img-${img.id}`}
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 ${
                img.size === "large"
                  ? "md:col-span-2"
                  : img.size === "tall"
                    ? "md:row-span-2"
                    : img.size === "wide"
                      ? "md:col-span-2"
                      : ""
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 duration-500" />
              <img
                src={img.src}
                alt={img.title}
                className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ${
                  img.id === 5 ? "object-[center_25%]" : "object-center"
                }`}
              />

              {img.id === 1 ? (
                <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-6 md:p-8 pointer-events-none bg-gradient-to-t from-black/80 via-black/30 to-transparent pt-16 md:pt-24">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-serif leading-tight tracking-tight drop-shadow-sm">
                    {img.title}
                  </h3>
                  <p className="text-[#fde68a] text-sm sm:text-base md:text-[0.95rem] leading-relaxed mt-2 max-w-2xl font-serif italic text-white/90">
                    {img.desc}
                  </p>
                </div>
              ) : (
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <h3 className="text-white text-2xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 font-serif">
                    {img.title}
                  </h3>
                  <p className="text-[#fbbf24] text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {img.desc}
                  </p>
                </div>
              )}

              <button
                type="button"
                className="absolute top-4 right-4 z-30 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 hover:bg-[#fbbf24]"
                aria-label="Favourite this darśan"
              >
                <Heart size={18} />
              </button>
            </motion.div>
          ))}

          <div className="md:col-span-2 lg:col-span-3 bg-[#2D0A0A] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover transition-all duration-700 group-hover:opacity-20 group-hover:blur-sm animate-pulse-slow" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left">
              <div className="flex-1 md:text-right flex flex-col justify-center items-center md:items-end">
                <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-2 drop-shadow-md tracking-tight whitespace-nowrap font-serif">
                  Chant & Be Happy
                </h3>
                <p className="text-[#fbbf24] text-lg font-medium">Experience the sublime peace.</p>
              </div>

              <div className="hidden md:block w-1.5 h-48 bg-gradient-to-b from-transparent via-[#fbbf24] to-transparent rounded-full opacity-90 shadow-[0_0_20px_#fbbf24]" />

              <div className="flex-1 md:text-left flex flex-col justify-center">
                <p className="text-white font-serif italic text-2xl md:text-3xl leading-relaxed drop-shadow-md whitespace-nowrap">
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
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={`img-${selectedImage.id}`}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[85vh]"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
                <h3 className="text-white text-3xl font-bold mb-2 font-serif">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.desc}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
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
