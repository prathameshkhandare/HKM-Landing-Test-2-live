"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Heart, Calendar, Check, ChevronLeft, ChevronRight, Sparkles, MapPin, CheckCircle2, Quote } from "lucide-react"
import { PhilosophyCardGrid, Timeline, QuoteHighlight, PrincipleList } from "@/components/PhilosophyWidgets"

const sevaData = [
  {
    title: "Annadana Seva",
    desc: "Support the distribution of sacred prasadam to thousands of pilgrims seeking the mercy of Lord Jagannath.",
    image: "/assets/ratha-yatra/annadan.jpg",
  },
  {
    title: "Archana Seva",
    desc: "Perform a special Archana to sri sri Rukmini Dwarakadhisha on this auspicious festival day to invoke divine blessings for your family.",
    image: "/assets/ratha-yatra/rath1.jpg",
  }
]

const carouselImages = [
  "/assets/ratha-yatra/rath0.jpg",
  "/assets/ratha-yatra/rath1.jpg",
  "/assets/ratha-yatra/rath2.jpg",
  "/assets/ratha-yatra/rath3.jpg",
]

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    setIsAutoPlaying(false)
  }
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative w-full h-[70vh] md:h-full group">
      <div className="relative z-10 h-full w-full">
        {/* Image Layer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={carouselImages[currentIndex]}
              className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110"
              alt={`Ratha Yatra Spirit ${currentIndex + 1}`}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
            <div className="absolute inset-0 bg-[#ea580c]/10 mix-blend-soft-light"></div>
            
            {/* Mobile Top Gradient for Text Visibility */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent md:hidden"></div>
          </motion.div>
        </AnimatePresence>

        {/* --- DESKTOP UI ELEMENTS (Hidden on Mobile) --- */}
        <div className="hidden md:block">
            {/* Ornate Corner Elements */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#FFB81C] rounded-tl-xl opacity-60"></div>
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#FFB81C] rounded-tr-xl opacity-60"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#FFB81C] rounded-bl-xl opacity-60"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#FFB81C] rounded-br-xl opacity-60"></div>

            {/* Navigation - Side Arrows */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 z-20">
              <button 
                onClick={prevSlide}
                className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/30 transition-all transform hover:scale-110 active:scale-95 shadow-2xl"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/30 transition-all transform hover:scale-110 active:scale-95 shadow-2xl"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Desktop Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-16 z-30">
              <motion.div layout className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-12 bg-[#FFB81C]"></div>
                  <span className="text-[#FFB81C] font-bold tracking-[0.4em] text-xs uppercase drop-shadow-sm">Sacred darshan</span>
                </div>
                <h3 className="text-5xl font-black font-serif text-white mb-4 drop-shadow-2xl leading-none">
                  Experience the <span className="text-[#FFB81C] italic">Divine Spirit</span>
                </h3>
                <p className="text-white/90 text-xl font-serif italic leading-relaxed drop-shadow max-w-2xl">
                  "Seeing the Lord of the Universe on His chariot clears all obstacles on the path of pure devotion."
                </p>
              </motion.div>
            </div>

            {/* Desktop Thumbnails */}
            <div className="absolute bottom-8 right-8 hidden xl:flex gap-4 z-30">
            {carouselImages.map((img, idx) => (
                <button
                key={idx}
                onClick={() => {
                    setCurrentIndex(idx)
                    setIsAutoPlaying(false)
                }}
                className={`relative h-16 w-24 rounded-xl overflow-hidden transition-all duration-500 border-2 ${
                    currentIndex === idx 
                    ? "border-[#FFB81C] scale-110 shadow-lg" 
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
                >
                <img src={img} className="w-full h-full object-cover" alt={`Gallery ${idx}`} />
                </button>
            ))}
            </div>
        </div>

        {/* --- MOBILE UI ELEMENTS (Visible only on Mobile) --- */}
        {/* Mimicking 'Temple Pulse' / ExplorationBanner Style */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-between py-12 px-6 md:hidden pointer-events-none">
            
            {/* Top Title */}
            <div className="mt-4 pointer-events-auto">
                 <h3 className="text-xl font-black text-white text-center uppercase tracking-wider drop-shadow-2xl font-serif leading-tight bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
                    Glimpses of <span className="text-[#FFB81C]">Ratha Yatra</span>
                </h3>
            </div>

            {/* Bottom Controls - Minor Navigations */}
            <div className="flex items-center gap-8 mb-4 pointer-events-auto">
                <button 
                    onClick={prevSlide} 
                    className="p-3 bg-black/20 backdrop-blur-md rounded-full text-white/90 border border-white/10 hover:bg-black/40 active:scale-95 transition-all"
                >
                    <ChevronLeft size={24} />
                </button>
                
                {/* Indicator Dots for "minor" feel */}
                <div className="flex gap-2">
                    {carouselImages.map((_, idx) => (
                        <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-[#FFB81C]' : 'bg-white/30'}`} />
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

function SevaCard({ seva, idx }: { seva: any, idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
    >
      <Card className="border-0 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white group overflow-hidden flex flex-col h-full border-b-[6px] border-[#FFB81C]">
        {/* Top Image */}
        <div className="relative h-64 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={seva.image} 
            alt={seva.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[#ea580c] font-bold text-xs flex items-center gap-1 shadow-sm">
            <Heart size={12} className="fill-current" /> Sacred Seva
          </div>
        </div>

        <CardContent className="p-8 flex flex-col flex-1 text-center items-center">
          <h3 className="text-2xl font-bold text-[#2D0A0A] mb-4 font-serif min-h-[64px] flex items-center justify-center leading-tight">
            {seva.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1 italic">
            {seva.desc}
          </p>

          <a 
            href="https://pages.razorpay.com/pl_S6YNcy63cwLdOv/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-4 text-white bg-gradient-to-r from-[#701a1a] to-[#ea580c] rounded-xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all shadow-md text-sm uppercase tracking-widest flex items-center justify-center gap-2 group-hover:from-[#ea580c] group-hover:to-[#701a1a]"
          >
            <Sparkles size={18} /> Donate Now
          </a>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function RathaYatraDonationPage() {
  console.log("Ratha Yatra Page Updated - v2");
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
      <NavbarDemo />

      {/* Hero Section - Matching Contact Us Style */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-[#2D0A0A] pt-40 pb-16 px-4">
        {/* Background - Saffron/Gold Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#ea580c] to-[#b45309] opacity-90"></div>
        
        {/* Sacred Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #FFB81C 50px)' }}></div>

        {/* Central Divine Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
              <h1 className="flex flex-col items-center justify-center space-y-2 mb-4">
                <span className="text-[#FFB81C] font-bold tracking-[0.3em] text-sm md:text-base uppercase drop-shadow-md">
                  Sri Sri Rukmini Dwarakadhisha
                </span>
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] font-serif uppercase leading-none">
                  Ratha Yatra
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] font-serif mt-2">
                  
                </span>
              </h1>
              
              {/* Ornamental Divider - Contact Us Style */}
              <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-[2px] w-12 md:w-16 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                  <div className="rotate-45 p-1 border border-[#FFB81C] bg-[#ea580c] transform"></div>
                  <div className="h-[2px] w-12 md:w-16 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
              </div>

              {/* Event Date/Time Highlight - Compact & Centered */}
              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 mb-4 shadow-xl">
                <div className="text-center sm:text-left">
                  <p className="text-[#FFD700] text-[9px] font-bold uppercase tracking-widest mb-0.5">Festival Date</p>
                  <p className="text-white font-serif text-xl">Saturday, 14 Feb 2026</p>
                </div>
                <div className="w-[1px] h-8 bg-white/20 hidden sm:block"></div>
                <div className="text-center sm:text-left">
                  <p className="text-[#FFD700] text-[9px] font-bold uppercase tracking-widest mb-0.5">Darshan Timings</p>
                  <p className="text-white font-serif text-xl">4:30 PM - 8:30 PM</p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-[#ffe3bc] font-light leading-relaxed max-w-3xl mx-auto italic drop-shadow-md pt-2">
                "Come .... Pull the ratha! Experience the joy of serving the Lord of the Universe"
              </p>
          </motion.div>
        </div>
      </section>

      {/* Event Schedule & Route Section */}
      <section className="relative z-20 w-full mx-auto mt-32 px-0 md:px-4">
        {/* 1. The Grand Ratha Yatra - Impactful Intro & Carousel */}
        <div className="relative mb-32 text-center w-full px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center gap-6 mb-2">
                <div className="h-[2px] w-12 md:w-24 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                <span className="text-[#FFB81C] font-black tracking-[0.4em] text-sm uppercase drop-shadow-[0_2px_4px_rgba(255,184,28,0.3)]">Annual Celebration</span>
                <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#701a1a] font-serif leading-[1.1] tracking-tight">
                Sri Sri Rukmini Dwarakadhisha <br />
                <span className="text-[#ea580c] drop-shadow-sm">Ratha Yatra</span>
              </h2>
              <div className="h-1.5 w-40 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto mt-6"></div>
              <p className="text-gray-500 max-w-3xl mx-auto italic text-xl md:text-3xl mt-12 font-serif leading-relaxed px-4">
                "Experience the divine journey where the Lord of the Universe comes out to bless every soul."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-20 w-full relative group"
            >
              <div className="relative w-full mx-auto py-0 md:py-12 group">
                {/* Spiritual Soft Glow Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,28,0.2)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>
                
                {/* Elegant Container - Let component handle height/aspect */}
                <div className="relative z-10 w-full overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] md:rounded-[3rem] md:aspect-[21/9] md:max-w-[95%] md:border-double md:border-[12px] border-[#FFB81C]/40 hover:border-[#FFB81C]/60 transition-colors duration-500 mx-auto bg-black">
                    <ImageCarousel />
                </div>
              </div>
            </motion.div>
        </div>

        {/* 2. Festival Schedule & Invitation - Precise Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] md:rounded-[4rem] shadow-2xl p-8 md:p-20 grid lg:grid-cols-12 gap-16 items-center border-b-[12px] border-[#ea580c] mb-32 relative overflow-hidden max-w-7xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          {/* Detailed Timeline Schedule */}
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-6 border-b border-gray-100 pb-6">
                <div className="w-16 h-16 bg-[#ea580c]/10 rounded-[2rem] flex items-center justify-center text-[#ea580c] shadow-inner">
                    <Calendar size={32} />
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-[#701a1a] font-serif">Festival Schedule</h3>
                    <p className="text-[#ea580c] font-bold text-sm tracking-widest uppercase">Saturday, 14th February 2026</p>
                </div>
            </div>

            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#ea580c] before:via-[#FFB81C] before:to-transparent">
              {[
                { time: "4:30 PM", title: " Ratha Yatra Inauguration ceremony", desc: " diginitary will be coming on stage and will have speech related to ratha yatra" },
                { time: "5:30 PM", title: "Procession Starts", desc: "The magnificent chariot of Sri Sri Rukmini Dwarakadhisha begin Their Journey with Grand parade of traditional art form of Tamil Nadu & Parayanams ( Vishnu Sahasranama, Divya Prabandhanam, Gita Parayanam)" },
                { time: "7:00 PM", title: "Archana seva", desc: "Special arati offerings at key intermediate points along the route." },
                { time: "8:30 PM", title: "Arrival & Prasadam", desc: "Dakshina Dwaraka Dham - Grand reception followed by distribution of sacred prasadam." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 relative z-10 group">
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-[#ea580c] flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <div className="w-2 h-2 rounded-full bg-[#ea580c]"></div>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#ea580c]/10 text-[#ea580c] text-xs font-bold rounded-lg mb-1">{item.time}</span>
                    <h4 className="text-2xl font-bold text-[#2D0A0A] font-serif mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sidebar Area: Route & Invitation */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FFF9F0] p-12 rounded-[3.5rem] border-2 border-dashed border-[#FFB81C]/40 relative overflow-hidden group shadow-inner">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[url('/assets/mandala-pattern.png')] opacity-10 group-hover:rotate-45 transition-transform duration-1000"></div>
              <div className="relative z-10 text-center space-y-6">
                <Sparkles className="text-[#FFB81C] mx-auto mb-2" size={48} />
                <h3 className="text-3xl font-bold text-[#701a1a] font-serif">Cordial Invitation</h3>
                <p className="text-gray-600 italic text-lg leading-relaxed font-serif">
                  "We cordially invite you and your family to participate in the grand annual Sri Sri Rukmini Dwarakadhisha Ratha Yatra. Pull the chariot strings and clear your path to the spiritual world."
                </p>
                <div className="pt-8 border-t border-[#FFB81C]/20 text-center">
                    <p className="text-xs font-bold text-[#ea580c] uppercase tracking-[0.3em] mb-3">Location Hub</p>
                    <p className="text-[#701a1a] font-serif text-2xl font-bold italic">Dakshina Dwaraka Dham</p>
                    <p className="text-gray-500 text-sm mt-2">Valmiki Nagar, Thiruvanmiyur</p>
                </div>
              </div>
            </div>

            {/* Ratha Route & Map Card */}
            <div className="bg-[#2D0A0A] p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-[#FFB81C]/30 text-white">
               
               <div className="flex items-start justify-between gap-6 relative z-10">
                  <div className="space-y-6 flex-1">
                      <div>
                          <div className="flex items-center gap-2 mb-2">
                             <div className="w-2 h-2 rounded-full bg-[#FFB81C] animate-pulse"></div>
                             <p className="text-[#FFB81C] text-xs font-bold uppercase tracking-widest">Start Point</p>
                          </div>
                          <p className="font-serif text-lg leading-tight text-white/90">Kasturba Nagar Residents Association Hall</p>
                      </div>

                      <div className="h-8 border-l-2 border-dashed border-[#FFB81C]/30 ml-1"></div>

                      <div>
                          <div className="flex items-center gap-2 mb-2">
                             <div className="w-2 h-2 rounded-full bg-[#ea580c]"></div>
                             <p className="text-[#ea580c] text-xs font-bold uppercase tracking-widest">End Point</p>
                          </div>
                          <p className="font-serif text-lg leading-tight text-white/90">Dakshina Dwaraka Dham, Thiruvanmiyur</p>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content Sections Wrapper - Restored Structure */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 relative z-10 -mt-24">

        {/* Seva Options Section */}
        <div className="text-center mb-16">
          <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Choose Your Offering</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#701a1a] font-serif">Sacred Seva <span className="text-[#FFB81C]">Opportunities</span></h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#FFB81C] to-transparent rounded-full mx-auto mt-6"></div>
        </div>

        {/* Seva Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
          {sevaData.map((seva, idx) => (
            <SevaCard key={idx} seva={seva} idx={idx} />
          ))}
        </div>

        {/* Spiritual Benefits Summary */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Spiritual Merit",
              desc: "Accumulate boundless spiritual blessings by serving the Lord of the Universe during His grand outing.",
              icon: <CheckCircle2 className="text-[#FFB81C]" size={32} />
            },
            {
              title: "Community Service",
              desc: "Support the massive distribution of free prasadam to visiting pilgrims from all walks of life.",
              icon: <MapPin className="text-[#FFB81C]" size={32} />
            },
            {
              title: "Ancient Tradition",
              desc: "Help preserve and propagate the world's oldest street festival for future generations.",
              icon: <Calendar className="text-[#FFB81C]" size={32} />
            }
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
