"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Calendar, ArrowRight, Image as ImageIcon } from "lucide-react"
import Link from "next/link"
import FestivalHeader from "@/components/FestivalHeader"

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
    return (
        <main className="min-h-screen bg-[#FFF9F0] font-sans selection:bg-[#fbbf24] selection:text-[#2D0A0A] relative">
            
            <Navbar />

            <FestivalHeader 
                title="Festival Photos"
                subtitle="Relive the divine moments of celebration and devotion through our captured memories."
            />

            {/* Albums Grid */}
            <div className="relative z-30 container mx-auto px-6 max-w-7xl -mt-20 pb-24">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border-t-8 border-[#fbbf24]">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-[#2D0A0A] mb-2 font-serif">Celebrations & Events</h2>
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
                                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#2D0A0A] transition-colors line-clamp-2 font-serif">
                                            {festival.title}
                                        </h3>
                                        <div className="w-12 h-1 bg-[#fbbf24] rounded-full mb-4 group-hover:w-20 transition-all"></div>
                                    </div>
                                    <Link 
                                        href={`/gallery/festival-photos/${festival.title.toLowerCase().replace(/ /g, '-')}`}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-[#2D0A0A] group-hover:text-[#d97706] transition-colors uppercase tracking-wide mt-4"
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
