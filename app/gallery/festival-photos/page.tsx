"use client"

import React, { useRef } from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, ArrowRight, Image as ImageIcon } from "lucide-react"
import Link from "next/link"

const festivals = [
    { title: "Ratha Yatra", date: "July", image: "/assets/sankirtana.jpg", count: 42 },
    { title: "Sri Nityananda Trayodashi", date: "February", image: "/assets/temple-pattern.PNG", count: 28 },
    { title: "Sri Gaura Purnima", date: "March", image: "/assets/Lecture-pic.JPG", count: 35 },
    { title: "Sri Rama Navami", date: "April", image: "/assets/Magazine-pic.jpg", count: 19 },
    { title: "Sri Narasimha Jayanti", date: "May", image: "/assets/sankirtana.jpg", count: 24 },
    { title: "Panihati Chida-Dahi Utsava", date: "June", image: "/assets/temple-pattern.PNG", count: 15 },
    { title: "Balarama Purnima", date: "August", image: "/assets/Lecture-pic.JPG", count: 31 },
    { title: "Sri Krishna Janmashtami", date: "August", image: "/assets/Magazine-pic.jpg", count: 56 },
    { title: "Vyasa Puja", date: "August", image: "/assets/srila-prabhupada.png", count: 12 },
    { title: "Sri Radhashtami", date: "September", image: "/assets/sankirtana.jpg", count: 22 },
    { title: "Vamana Jayanti", date: "September", image: "/assets/temple-pattern.PNG", count: 18 },
    { title: "Govardhana Puja", date: "October", image: "/assets/Lecture-pic.JPG", count: 45 },
    { title: "Deepotsava", date: "October/November", image: "/assets/Magazine-pic.jpg", count: 60 },
]

export default function FestivalPhotosPage() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            {/* Global Background Pattern */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">
                <img src="/assets/10BlackWhiteMandalaPattern1.jpg" alt="" className="w-full h-full object-cover grayscale" />
            </div>

            <Navbar />

            {/* Parallax Hero */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <motion.div 
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#FDFBF7] z-10"></div>
                    <img 
                        src="/assets/sankirtana.jpg" 
                        alt="Festival Celebration" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/80 text-xs tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                            Gallery
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                            Festival Photos
                        </h1>
                        <p className="text-lg md:text-2xl text-[#FBB201] font-serif italic max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                            "Relive the divine moments of celebration and devotion."
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Albums Grid */}
            <div className="relative z-30 container mx-auto px-6 max-w-7xl -mt-20 pb-24">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border-t-8 border-[#FBB201]">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-[#0078BF] mb-2">Celebrations & Events</h2>
                            <p className="text-gray-500 max-w-xl">
                                Browse through our collection of captured moments from various auspicious festivals celebrated with pomp and devotion.
                            </p>
                        </div>
                        {/* Filter or Sort could go here */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {festivals.map((festival, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                                    <img 
                                        src={festival.image} 
                                        alt={festival.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white/90 text-xs font-bold uppercase tracking-wider backdrop-blur-md bg-black/30 px-3 py-1 rounded-full">
                                        <Calendar size={12} /> {festival.date}
                                    </div>
                                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur text-gray-800 text-xs font-bold px-2 py-1 rounded-md shadow-sm flex items-center gap-1">
                                        <ImageIcon size={12} /> {festival.count}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#0078BF] transition-colors line-clamp-2">
                                            {festival.title}
                                        </h3>
                                        <div className="w-12 h-1 bg-[#FBB201] rounded-full mb-4 group-hover:w-20 transition-all"></div>
                                    </div>
                                    <Link 
                                        href={`/gallery/festival-photos/${festival.title.toLowerCase().replace(/ /g, '-')}`}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0078BF] group-hover:text-[#FBB201] transition-colors uppercase tracking-wide mt-4"
                                    >
                                        View Album <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <FooterSection />
        </main>
    )
}
