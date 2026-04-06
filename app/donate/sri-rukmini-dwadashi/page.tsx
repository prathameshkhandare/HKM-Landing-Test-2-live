"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react"

const festivalImages = [
  "/donate/rukmini-dwadashi-1.JPG",
  "/donate/rukmini-dwadashi-2.JPG",
  "/donate/rukmini-dwadashi-3.JPG",
  "/donate/rukmini-dwadashi-4.JPG",
]

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % festivalImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % festivalImages.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + festivalImages.length) % festivalImages.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto group">
      <div className="relative z-10 w-full overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] md:rounded-[3rem] h-[60vh] md:h-auto md:aspect-video md:border-double md:border-[12px] border-[#FFB81C]/40 bg-[#2D0A0A]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={festivalImages[currentIndex]}
              className="w-full h-full object-cover object-center transition-transform duration-[5s] group-hover:scale-105"
              alt={`Sri Rukmini Dwadashi ${currentIndex + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div className="absolute inset-0 bg-[#ea580c]/10 mix-blend-soft-light"></div>
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent md:hidden"></div>
          </motion.div>
        </AnimatePresence>

        <div className="hidden md:block">
          <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#FFB81C] rounded-tl-xl opacity-60"></div>
          <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#FFB81C] rounded-tr-xl opacity-60"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#FFB81C] rounded-bl-xl opacity-60"></div>
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#FFB81C] rounded-br-xl opacity-60"></div>

          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 z-20 pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto p-4 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/30 transition-all transform hover:scale-110 active:scale-95 shadow-2xl"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto p-4 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/30 transition-all transform hover:scale-110 active:scale-95 shadow-2xl"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="absolute bottom-10 left-12 z-30 pointer-events-none">
            <motion.div layout className="bg-[#5c0a0a]/95 backdrop-blur-md px-6 py-5 rounded-2xl border border-[#FFB81C]/30 shadow-[0_15px_30px_rgba(0,0,0,0.8)] max-w-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-[1px] w-8 bg-[#FFB81C]"></div>
                <span className="text-[#FFB81C] font-bold tracking-[0.2em] text-[8px] uppercase drop-shadow-sm">Sacred festival</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black font-serif text-white mb-2 drop-shadow-lg leading-tight">
                Celebrate <br />
                <span className="text-[#FFB81C] italic">Sri Rukmini Dwadashi</span>
              </h3>
              <p className="text-white/90 text-sm font-serif italic leading-snug drop-shadow max-w-[280px]">
                "Offer your devotion to Srimati Rukminidevi, the eternal queen of Dwaraka and embodiment of pure surrender."
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-between py-12 px-6 md:hidden pointer-events-none">
          <div className="mt-4 pointer-events-auto">
            <h3 className="text-lg font-black text-white text-center uppercase tracking-wider drop-shadow-2xl font-serif leading-tight bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
              Sri <span className="text-[#FFB81C]">Rukmini Dwadashi</span>
            </h3>
          </div>

          <div className="flex items-center gap-8 mb-4 pointer-events-auto">
            <button
              onClick={prevSlide}
              className="p-3 bg-black/20 backdrop-blur-md rounded-full text-white/90 border border-white/10 hover:bg-black/40 active:scale-95 transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {festivalImages.map((_, idx) => (
                <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? "bg-[#FFB81C]" : "bg-white/30"}`} />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-black/20 backdrop-blur-md rounded-full text-white/90 border border-white/10 hover:bg-black/40 active:scale-95 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SriRukminiDwadashiDonationPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      <section className="relative h-[60vh] min-h-[450px] flex flex-col items-center justify-center overflow-hidden bg-[#2D0A0A] pt-24 pb-8 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_30px_rgba(255,184,28,0.4)] backdrop-blur-sm">
                <Heart size={30} className="text-[#FFB81C] fill-current" />
              </div>
            </div>

            <h1 className="flex flex-col items-center justify-center space-y-2">
              <span className="text-[#FFB81C] font-bold tracking-[0.3em] text-xs sm:text-sm md:text-base uppercase drop-shadow-md text-center">
                Appearance Day of Srimati Rukminidevi
              </span>
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] font-serif uppercase leading-none">
                Sri Rukmini Dwadashi
              </span>
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white/90 tracking-normal drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] font-serif mt-2 text-center block">
                A sacred evening of devotion, arati, kirtan, and festival seva
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-12 md:w-16 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
              <div className="rotate-45 p-1 border border-[#FFB81C] bg-[#ea580c] transform"></div>
              <div className="h-[2px] w-12 md:w-16 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
            </div>

            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 mb-4 shadow-xl">
              <div className="text-center sm:text-left">
                <p className="text-[#FFD700] text-[9px] font-bold uppercase tracking-widest mb-0.5">Festival Date</p>
                <p className="text-white font-serif text-xl">Tuesday, April 28, 2026</p>
              </div>
              <div className="w-[1px] h-8 bg-white/20 hidden sm:block"></div>
              <div className="text-center sm:text-left">
                <p className="text-[#FFD700] text-[9px] font-bold uppercase tracking-widest mb-0.5">Begins</p>
                <p className="text-white font-serif text-xl">6:30 PM Onwards</p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-[#ffe3bc] font-light leading-relaxed max-w-3xl mx-auto italic drop-shadow-md pt-2">
              "All are cordially invited to honor the divine appearance of Srimati Rukminidevi with offerings of devotion and service."
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 w-full mx-auto mt-28 px-0 md:px-4">
        <div className="relative mb-24 text-center w-full px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-6 mb-2">
              <div className="h-[2px] w-12 md:w-24 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
              <span className="text-[#FFB81C] font-black tracking-[0.4em] text-sm uppercase drop-shadow-[0_2px_4px_rgba(255,184,28,0.3)]">Festival Darshan</span>
              <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#701a1a] font-serif leading-[1.1] tracking-tight">
              Sri Rukmini Dwadashi <br />
              <span className="text-[#ea580c] drop-shadow-sm">Mahotsava</span>
            </h2>
            <div className="h-1.5 w-40 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto mt-6"></div>
            <p className="text-gray-500 max-w-3xl mx-auto italic text-xl md:text-3xl mt-10 font-serif leading-relaxed px-4">
              "Celebrate the queen of Dwaraka with offerings of seva, kirtan, and loving remembrance."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-12 w-full relative group"
          >
            <div className="relative w-full mx-auto group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,28,0.2)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>
              <ImageCarousel />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="relative bg-[#FFF9F0] p-1.5 rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 border-[6px] border-[#FFB81C]/20 rounded-[2.5rem] pointer-events-none"></div>
            <div className="absolute inset-3 border-[2px] border-[#FFB81C]/10 border-dashed rounded-[2rem] pointer-events-none"></div>
            <div className="bg-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] bg-repeat pointer-events-none"></div>

              <div className="relative z-10">
                <div className="text-center mb-10">
                  <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">About The Festival</span>
                  <h3 className="text-3xl md:text-5xl font-bold text-[#701a1a] font-serif">
                    What Is <span className="text-[#FFB81C]">Sri Rukmini Dwadashi?</span>
                  </h3>
                  <div className="h-1.5 w-28 bg-gradient-to-r from-[#FFB81C] to-transparent rounded-full mx-auto mt-6"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-5 text-[#5a5a5a] text-base md:text-lg leading-relaxed">
                    <p>
                      <strong className="text-[#701a1a]">Sri Rukmini Dwadashi</strong> marks the divine appearance of
                      <strong className="text-[#701a1a]"> Srimati Rukminidevi</strong>, the eternal queen of Lord Krishna in
                      Dwaraka and the embodiment of pure devotion, surrender, and grace.
                    </p>
                    <p>
                      In the Vaishnava tradition, Rukminidevi is worshiped as the ideal devotee who fixed her heart fully on
                      Lord Krishna. Her life teaches humility, faith, and unwavering devotion to the Supreme Lord.
                    </p>
                    <p>
                      This auspicious festival is observed with abhishekam, arati, kirtan, discourse, and prasadam. By
                      participating in the festival and supporting its seva, devotees receive an opportunity to serve Sri Sri
                      Rukmini Dwarakadhish with love and gratitude.
                    </p>
                  </div>

                  <div className="rounded-[2rem] bg-gradient-to-br from-[#fff7ed] to-[#FFF9F0] border border-[#FFB81C]/30 p-6 md:p-8 shadow-lg">
                    <h4 className="text-2xl font-bold text-[#701a1a] font-serif mb-5">Spiritual Significance</h4>
                    <div className="space-y-4">
                      {[
                        "Honors the appearance of Srimati Rukminidevi, the divine consort of Lord Krishna.",
                        "Celebrates the mood of surrender, devotion, and loving service to the Lord.",
                        "Invites devotees into kirtan, worship, remembrance, and festival seva.",
                        "Supports Deity worship, decoration, and prasadam distribution on an auspicious day.",
                      ].map((point, idx) => (
                        <div key={idx} className="flex items-start gap-4 rounded-2xl bg-white/80 p-4 border border-[#FFB81C]/15">
                          <div className="w-8 h-8 rounded-full bg-[#ea580c]/10 text-[#ea580c] flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 size={18} />
                          </div>
                          <p className="text-[#5a5a5a] leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] md:rounded-[4rem] shadow-2xl p-8 md:p-20 grid lg:grid-cols-12 gap-16 items-center border-b-[12px] border-[#ea580c] mb-32 relative overflow-hidden max-w-7xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-6 border-b border-gray-100 pb-6">
              <div className="w-16 h-16 bg-[#ea580c]/10 rounded-[2rem] flex items-center justify-center text-[#ea580c] shadow-inner">
                <Calendar size={32} />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#701a1a] font-serif">Festival Highlights</h3>
                <p className="text-[#ea580c] font-bold text-sm tracking-widest uppercase">Tuesday, April 28, 2026</p>
              </div>
            </div>

            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#ea580c] before:via-[#FFB81C] before:to-transparent">
              {[
                { title: "Maha Abhishekam", desc: "A devotional bathing ceremony of the Deities with auspicious ingredients offered in reverence and celebration." },
                { title: "Sandhya Arati", desc: "Join the glowing evening worship with lamps, conch, kirtan, and heartfelt prayers to Their Lordships." },
                { title: "Kirtan", desc: "Immerse yourself in the joyous chanting of the holy names in a festival atmosphere of devotion and grace." },
                { title: "Festival Discourse", desc: "Hear about the glories of Srimati Rukminidevi and the significance of this sacred appearance day." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 relative z-10 group">
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-[#ea580c] flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <div className="w-2 h-2 rounded-full bg-[#ea580c]"></div>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#ea580c]/10 text-[#ea580c] text-xs font-bold rounded-lg mb-1">
                      Highlight {idx + 1}
                    </span>
                    <h4 className="text-2xl font-bold text-[#2D0A0A] font-serif mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FFF9F0] p-10 rounded-[3rem] border-2 border-dashed border-[#FFB81C]/40 relative overflow-hidden group shadow-inner">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[url('/assets/mandala-pattern.png')] opacity-10 group-hover:rotate-45 transition-transform duration-1000"></div>
              <div className="relative z-10 text-center space-y-6">
                <Sparkles className="text-[#FFB81C] mx-auto mb-2" size={48} />
                <h3 className="text-3xl font-bold text-[#701a1a] font-serif">Cordial Invitation</h3>
                <p className="text-gray-600 italic text-lg leading-relaxed font-serif">
                  "Offer your prayers, presence, and seva on Sri Rukmini Dwadashi. Let this sacred festival become an occasion of devotion for your whole family."
                </p>
                <div className="pt-8 border-t border-[#FFB81C]/20 text-center space-y-4">
                  <div>
                    <p className="text-xs font-bold text-[#ea580c] uppercase tracking-[0.3em] mb-2">Venue</p>
                    <p className="text-[#701a1a] font-serif text-2xl font-bold italic">Dakshina Dwaraka Dham</p>
                    <p className="text-gray-500 text-sm mt-2">#63, 1st Seaward Road, Valmiki Nagar,<br />Thiruvanmiyur, Chennai-600041</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="rounded-2xl bg-white/80 p-4 border border-[#FFB81C]/20">
                      <Clock3 className="text-[#ea580c] mx-auto mb-2" size={22} />
                      <p className="text-xs font-bold tracking-widest uppercase text-[#ea580c] mb-1">Starts</p>
                      <p className="text-[#2D0A0A] font-serif text-lg">6:30 PM</p>
                    </div>
                    <div className="rounded-2xl bg-white/80 p-4 border border-[#FFB81C]/20">
                      <MapPin className="text-[#ea580c] mx-auto mb-2" size={22} />
                      <p className="text-xs font-bold tracking-widest uppercase text-[#ea580c] mb-1">Address</p>
                      <p className="text-[#2D0A0A] font-serif text-sm">Thiruvanmiyur, Chennai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 relative z-10 -mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border-2 border-[#FFB81C]/20 text-center relative overflow-hidden group mb-24"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:rotate-45 transition-transform duration-1000"></div>

          <div className="relative z-10 space-y-8">
            <p className="text-[#666666] text-xl leading-relaxed font-serif italic mb-8">
              "By contributing to Sri Rukmini Dwadashi Mahotsava, you help support the festival offerings, decorations, worship, and prasadam seva performed in honor of Srimati Rukminidevi."
            </p>

            <a
              href="https://rzp.io/rzp/AJwi5vTG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-5 text-white bg-gradient-to-r from-[#701a1a] to-[#ea580c] rounded-full font-bold hover:shadow-xl hover:scale-[1.05] transition-all shadow-md text-lg uppercase tracking-widest hover:from-[#ea580c] hover:to-[#701a1a]"
            >
              <Heart size={24} className="fill-current animate-pulse opacity-80" />
              Proceed to Donation
              <ArrowRight size={20} />
            </a>

            <p className="text-gray-400 text-sm mt-6">
              Secure transactions powered by Razorpay.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Divine Blessings",
              desc: "Participate in a sacred festival dedicated to Srimati Rukminidevi and receive the mercy of devotional service.",
              icon: <CheckCircle2 className="text-[#FFB81C]" size={32} />,
            },
            {
              title: "Temple Festival Support",
              desc: "Your contribution helps maintain the beauty, worship, and hospitality of this auspicious celebration.",
              icon: <MapPin className="text-[#FFB81C]" size={32} />,
            },
            {
              title: "Living Tradition",
              desc: "Help preserve and celebrate timeless Vaishnava festivals for the community and future generations.",
              icon: <Calendar className="text-[#FFB81C]" size={32} />,
            },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-lg border-b-8 border-[#FFB81C]/20 text-center hover:border-[#FFB81C] transition-all"
            >
              <div className="mb-6 flex justify-center">{benefit.icon}</div>
              <h4 className="text-2xl font-bold text-[#701a1a] mb-4 font-serif">{benefit.title}</h4>
              <p className="text-gray-600 leading-relaxed italic">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  )
}


