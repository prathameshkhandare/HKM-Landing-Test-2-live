"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { Heart, Calendar, ChevronLeft, ChevronRight, Sparkles, MapPin, CheckCircle2 } from "lucide-react"


const carouselImages = [
    // "/assets/gaura-purnima/1.JPG",
    "/donate/ram-navami/1.JPG",
    "/donate/ram-navami/2.JPG",
    "/donate/ram-navami/3.JPG",
    "/donate/ram-navami/4.JPG",
    "/donate/ram-navami/4.3.JPG",
    "/donate/ram-navami/4.4.JPG",
    "/donate/ram-navami/4.5.JPG",
    "/donate/ram-navami/5.JPG", 
    "/donate/ram-navami/6.JPG",
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
        <div className="relative w-full max-w-5xl mx-auto group">
            {/* Desktop and Mobile Main Image Container */}
            <div className="relative z-10 w-full overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] md:rounded-[3rem] h-[60vh] md:h-auto md:aspect-video md:border-double md:border-[12px] border-[#FFB81C]/40 bg-[#2D0A0A]">
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
                            className="w-full h-full object-cover object-center transition-transform duration-[5s] group-hover:scale-105"
                            alt={`Ram Navami Spirit ${currentIndex + 1}`}
                        />
                        {/* Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                        <div className="absolute inset-0 bg-[#FFB81C]/10 mix-blend-soft-light"></div>

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

                    {/* Desktop Caption Overlay */}
                    <div className="absolute bottom-16 left-12 p-0 z-30 pointer-events-none">
                        <motion.div layout className="bg-[#4a2410]/95 backdrop-blur-md px-6 py-5 rounded-2xl border border-[#FFB81C]/30 shadow-[0_15px_30px_rgba(0,0,0,0.8)] max-w-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="h-[1px] w-8 bg-[#FFB81C]"></div>
                                <span className="text-[#FFB81C] font-bold tracking-[0.2em] text-[8px] uppercase drop-shadow-sm">Sacred darshan</span>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black font-serif text-white mb-2 drop-shadow-lg leading-tight">
                                Experience the <br />
                                <span className="text-[#FFB81C] italic">Divine Grace</span>
                            </h3>
                            <p className="text-white/90 text-sm font-serif italic leading-snug drop-shadow max-w-[280px]">
                                "Victory to Lord Ramachandra, the soul of dharma and the joy of Ayodhya."
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* --- MOBILE UI ELEMENTS (Visible only on Mobile) --- */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-between py-12 px-6 md:hidden pointer-events-none">

                    {/* Top Title */}
                    <div className="mt-4 pointer-events-auto">
                        <h3 className="text-xl font-black text-white text-center uppercase tracking-wider drop-shadow-2xl font-serif leading-tight bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
                            Glimpses of <span className="text-[#FFB81C]">Ram Navami</span>
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

                        {/* Indicator Dots */}
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

            {/* Desktop Thumbnails */}
            <div className="hidden xl:flex mt-8 w-full justify-center z-40 px-4">
                <div className="overflow-x-auto pb-8 pt-4 px-2 max-w-full rounded-2xl scrollbar-hide">
                    <div className="flex items-center gap-4">
                        {carouselImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrentIndex(idx)
                                    setIsAutoPlaying(false)
                                }}
                                className={`relative h-16 w-24 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-500 border-2 ${currentIndex === idx
                                    ? "border-[#FFB81C] scale-110 shadow-[0_10px_20px_rgba(255,184,28,0.3)] z-10"
                                    : "border-transparent opacity-70 hover:opacity-100 shadow-sm"
                                    }`}
                            >
                                <img src={img} className="w-full h-full object-cover object-[50%_25%]" alt={`Gallery ${idx}`} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function RamNavamiDonationPage() {
    return (
        <div className="min-h-screen bg-[#FFFDF5] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-white">
            <NavbarDemo />

            {/* Hero Section */}
            <section className="relative h-[65vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden bg-[#2D1A0A] pt-24 pb-16 px-4">
                {/* Background - Deep Orange/Vibrant Orange Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7c2d12] via-[#ea580c] to-[#f97316] opacity-95"></div>

                {/* Sacred Texture */}
                <div className="absolute inset-0 opacity-15 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, #ea580c 50px)' }}></div>

                {/* Central Divine Glow - Orange Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ea580c] rounded-full blur-[140px] opacity-40 animate-pulse"></div>

                {/* Left Side Ram Ji Image */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    className="absolute bottom-0 -left-12 h-[45vh] min-h-[350px] w-auto z-20 pointer-events-none hidden lg:block"
                >
                    <img
                        src="/donate/ram-navami/ramji-left.png"
                        alt="Lord Sri Ramachandra Left"
                        className="h-full w-auto object-contain object-bottom transition-transform duration-700 hover:scale-105"
                    />
                </motion.div>

                {/* Right Side Ram Ji Image */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    className="absolute bottom-0 -right-12 h-[45vh] min-h-[350px] w-auto z-20 pointer-events-none hidden lg:block"
                >
                    <img
                        src="/donate/ram-navami/ram-ji-header.png"
                        alt="Lord Sri Ramachandra Right"
                        className="h-full w-auto object-contain object-bottom transition-transform duration-700 hover:scale-105"
                    />
                </motion.div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Elegant Divine Spark Element */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="flex justify-center mb-6 relative h-12 w-12 mx-auto"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-[#FFB81C] to-transparent animate-pulse"></div>
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent animate-pulse delay-75"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#FFEAA7] rounded-full shadow-[0_0_20px_5px_#ea580c] animate-ping" style={{ animationDuration: '4s' }}></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                        </motion.div>

                        <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-12 w-full mb-4 px-2">
                            {/* Left Side Animated Element */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="hidden sm:flex flex-col items-center justify-center opacity-80 shrink-0"
                            >
                                <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-[spin_12s_linear_infinite] drop-shadow-[0_0_10px_rgba(255,184,28,0.5)]">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#FFB81C" strokeWidth="2" strokeDasharray="6 8" />
                                    <circle cx="50" cy="50" r="35" fill="none" stroke="#ea580c" strokeWidth="1" />
                                    <path d="M50 15 L58 42 L85 50 L58 58 L50 85 L42 58 L15 50 L42 42 Z" fill="#FFEAA7" opacity="0.8" />
                                    <circle cx="50" cy="50" r="6" fill="#FFF" />
                                </svg>
                                <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-[#FFB81C] to-transparent mt-2 sm:mt-4 opacity-50"></div>
                            </motion.div>

                            <h1 className="flex flex-col items-center justify-center space-y-2 shrink min-w-0">
                                <span className="text-[#FFB81C] font-bold tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm md:text-base uppercase drop-shadow-md text-center">
                                    Appearance Day
                                </span>
                                <span className="text-sm min-[400px]:text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white/90 tracking-widest drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] font-serif mt-2 mb-2 text-center block uppercase">
                                    of Lord Sri Ramachandra
                                </span>
                                <span className="text-[1.75rem] min-[400px]:text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] font-serif uppercase leading-tight sm:leading-none mt-2 whitespace-normal sm:whitespace-nowrap">
                                    Sri Ram Navami
                                </span>
                            </h1>

                            {/* Right Side Animated Element */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="hidden sm:flex flex-col items-center justify-center opacity-80 shrink-0"
                            >
                                <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-[spin_12s_linear_infinite_reverse] drop-shadow-[0_0_10px_rgba(255,184,28,0.5)]">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#FFB81C" strokeWidth="2" strokeDasharray="6 8" />
                                    <circle cx="50" cy="50" r="35" fill="none" stroke="#ea580c" strokeWidth="1" />
                                    <path d="M50 15 L58 42 L85 50 L58 58 L50 85 L42 58 L15 50 L42 42 Z" fill="#FFEAA7" opacity="0.8" />
                                    <circle cx="50" cy="50" r="6" fill="#FFF" />
                                </svg>
                                <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-[#FFB81C] to-transparent mt-2 sm:mt-4 opacity-50"></div>
                            </motion.div>
                        </div>

                        {/* Ornamental Divider */}
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="h-[2px] w-12 md:w-16 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                            <div className="rotate-45 p-1 border border-[#FFB81C] bg-[#ea580c] transform"></div>
                            <div className="h-[2px] w-12 md:w-16 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
                        </div>

                        {/* Event Date/Time Highlight */}
                        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-gradient-to-br from-[#FFB81C]/15 via-[#ea580c]/25 to-[#FFB81C]/15 backdrop-blur-xl px-4 py-2.5 rounded-[1.25rem] border border-[#FFB81C]/30 mb-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,184,28,0.2)] hover:border-[#FFB81C]/60 transition-all duration-500 group/highlights">
                            {/* Date Item */}
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#FFB81C]/10 rounded-lg group-hover/highlights:bg-[#FFB81C]/20 transition-colors">
                                    <Calendar className="w-4 h-4 text-[#FFB81C]" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[#FFB81C]/80 text-[10px] font-bold uppercase tracking-[0.15em] leading-none mb-1">Festival Date</p>
                                    <p className="text-white font-serif text-base tracking-wide whitespace-nowrap">Friday, 27th March 2026</p>
                                </div>
                            </div>

                            <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden sm:block mx-1"></div>

                            {/* Observe Item */}
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#FFB81C]/10 rounded-lg group-hover/highlights:bg-[#FFB81C]/20 transition-colors">
                                    <Sparkles className="w-4 h-4 text-[#FFB81C]" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[#FFB81C]/80 text-[10px] font-bold uppercase tracking-[0.15em] leading-none mb-1">Special Observe</p>
                                    <p className="text-white font-serif text-base tracking-wide whitespace-nowrap">Fasting till sunset</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-[#ffe3bc] font-light leading-relaxed max-w-3xl mx-auto italic drop-shadow-md pt-2">
                            "Maryada Purushottama Lord Ram, the embodiment of righteousness."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Event Schedule Section */}
            <section className="relative z-20 w-full mx-auto mt-32 px-0 md:px-4">
                {/* 1. Impactful Intro & Carousel */}
                <div className="relative mb-32 text-center w-full px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center justify-center gap-6 mb-2">
                            <div className="h-[2px] w-12 md:w-24 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                            <span className="text-[#FFB81C] font-black tracking-[0.4em] text-sm uppercase drop-shadow-[0_2px_4px_rgba(255,184,28,0.3)]">Grand Celebration</span>
                            <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#7c2d12] font-serif leading-[1.1] tracking-tight">
                            Sri Ram Navami <br />
                            <span className="text-[#ea580c] drop-shadow-sm">Mahaotsava</span>
                        </h2>
                        <div className="h-1.5 w-40 bg-gradient-to-r from-transparent via-[#ea580c] to-transparent mx-auto mt-6"></div>
                        <p className="text-gray-500 max-w-3xl mx-auto italic text-xl md:text-3xl mt-12 font-serif leading-relaxed px-4">
                            "Celebrate the appearance of Lord Rama, the divine protector of dharma and the joy of all devotees."
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
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,28,0.15)_0%,transparent_70%)] blur-2xl pointer-events-none"></div>
                            <ImageCarousel />
                        </div>
                    </motion.div>
                </div>

                {/* 2. Festival Schedule & Invitation */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2rem] md:rounded-[4rem] shadow-2xl p-6 md:p-20 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center border-b-[8px] md:border-b-[12px] border-[#ea580c] mb-24 md:mb-32 relative overflow-hidden max-w-7xl mx-4 xl:mx-auto"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    {/* Detailed Timeline Schedule */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="flex items-center gap-6 border-b border-gray-100 pb-6">
                            <div className="w-16 h-16 bg-[#FFB81C]/10 rounded-[2rem] flex items-center justify-center text-[#ea580c] shadow-inner">
                                <Calendar size={32} />
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-[#4a2410] font-serif">Festival Highlights</h3>
                                <p className="text-[#ea580c] font-bold text-sm tracking-widest uppercase">Friday, 27th March 2026</p>
                            </div>
                        </div>

                        <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#ea580c] before:via-[#FFB81C] before:to-transparent">
                            {[
                                { time: "5:30 PM ONWARDS", title: "Sri Rama Aishwaryam", desc: "Celebrating the 6 opulences of Lord Rama through sacred narrations and bhajans." },
                                { time: "EVENING", title: "Nama Ramayanam", desc: "Enchanting chanting of the glories and names of Lord Rama." },
                                { time: "THROUGHOUT THE DAY", title: "Vishesha Darshan", desc: "Special deity decorations and offerings on the auspicious appearance day." },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-8 relative z-10 group">
                                    <div className="w-10 h-10 rounded-full bg-white border-4 border-[#FFB81C] flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                                        <div className="w-2 h-2 rounded-full bg-[#ea580c]"></div>
                                    </div>
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-[#FFB81C]/10 text-[#ea580c] text-xs font-bold rounded-lg mb-1">{item.time}</span>
                                        <h4 className="text-2xl font-bold text-[#2D1A0A] font-serif mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Area: Route & Invitation */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-[#FFFDF0] p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border-2 border-dashed border-[#FFB81C]/40 relative overflow-hidden group shadow-inner">
                            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[url('/assets/mandala-pattern.png')] opacity-10 group-hover:rotate-45 transition-transform duration-1000"></div>
                            <div className="relative z-10 text-center space-y-6">
                                <Sparkles className="text-[#FFB81C] mx-auto mb-2" size={48} />
                                <h3 className="text-3xl font-bold text-[#4a2410] font-serif">Cordial Invitation</h3>
                                <p className="text-gray-600 italic text-lg leading-relaxed font-serif">
                                    "All are cordially invited to celebrate the appearance of Lord Rama and seek His divine blessings."
                                </p>
                                <div className="pt-8 border-t border-[#FFB81C]/20 text-center">
                                    <p className="text-xs font-bold text-[#ea580c] uppercase tracking-[0.3em] mb-3">Venue</p>
                                    <p className="text-[#4a2410] font-serif text-2xl font-bold italic">Dakshina Dwaraka Dham</p>
                                    <p className="text-gray-500 text-sm mt-2">#63, 1st Seaward Road, Valmiki Nagar,<br />Thiruvanmiyur, Chennai-600041</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Seva Options Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 relative z-10 -mt-24">
                <div className="text-center mb-16">
                    <span className="text-[#ea580c] font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Choose Your Offering</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#7c2d12] font-serif">Sacred Seva <span className="text-[#ea580c]">Opportunities</span></h2>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-[#ea580c] to-transparent rounded-full mx-auto mt-6"></div>
                </div>

                {/* Global Donation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-4 md:mx-auto bg-white p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl border-2 border-[#FFB81C]/20 text-center relative overflow-hidden group mb-16 md:mb-24"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/assets/mandala-pattern.png')] opacity-[0.03] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:rotate-45 transition-transform duration-1000"></div>

                    <div className="relative z-10 space-y-8">
                        <p className="text-[#666666] text-xl leading-relaxed font-serif italic mb-8">
                            "Contributing to Sri Ram Navami Mahaotsava brings special blessings of the Lord. Your support helps in grand festivities, decoration, and prasadam distribution."
                        </p>

                        <a
                            href="https://rzp.io/rzp/TtIJEX2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto px-8 py-4 md:px-12 md:py-6 text-white bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#f59e0b] rounded-full font-bold hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:scale-[1.05] transition-all shadow-lg text-lg md:text-xl uppercase tracking-widest active:scale-95"
                        >
                            <Heart size={24} className="fill-current animate-pulse opacity-80" />
                            Donate Now
                        </a>

                        <p className="text-gray-400 text-sm mt-6">
                            Secure transactions powered by Razorpay.
                        </p>
                    </div>
                </motion.div>

                {/* Benefits Summary */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Divine Mercy",
                            desc: "Seek the divine intervention and mercy of Lord Rama, the protector of the pious.",
                            icon: <CheckCircle2 className="text-[#FFB81C]" size={32} />
                        },
                        {
                            title: "Anna Dana",
                            desc: "Support the distribution of sacred prasadam to hundreds of visiting devotees.",
                            icon: <MapPin className="text-[#FFB81C]" size={32} />
                        },
                        {
                            title: "Support Sri Rama Aishwaryam",
                            desc: "Celebrating 6 opulences of Lord Rama through dance , drama, bhajan etc.",
                            icon: <Calendar className="text-[#FFB81C]" size={32} />
                        }
                    ].map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gradient-to-b from-[#FFFDF5] to-white p-6 md:p-10 rounded-[2rem] shadow-xl border border-[#FFB81C]/30 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 mx-4 md:mx-0"
                        >
                            <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
                                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H100C44.7715 0 0 44.7715 0 100V0Z" fill="#ea580c" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none rotate-180">
                                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H100C44.7715 0 0 44.7715 0 100V0Z" fill="#FFB81C" />
                                </svg>
                            </div>

                            <div className="mb-6 flex justify-center relative z-10">
                                <div className="w-16 h-16 bg-[#2D1A0A] rounded-full flex items-center justify-center border-2 border-[#FFB81C]/50 shadow-[0_0_15px_rgba(255,184,28,0.3)] group-hover:scale-110 transition-transform duration-500">
                                    {benefit.icon}
                                </div>
                            </div>

                            <h4 className="text-2xl font-bold text-[#4a2410] mb-4 font-serif relative z-10 group-hover:text-[#ea580c] transition-colors">{benefit.title}</h4>

                            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent mx-auto mb-4 opacity-50"></div>

                            <p className="text-gray-600 leading-relaxed italic relative z-10">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <FooterSection />
        </div>
    )
} 
