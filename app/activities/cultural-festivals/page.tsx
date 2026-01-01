"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Calendar, Sparkles, Music, Star } from "lucide-react"

const festivals = [
    { title: "Vaikunta Ekadasi", img: "/assets/activities/cultural-festivals/fest-1.jpg" },
    { title: "Sri Krishna Janmashtami", img: "/assets/activities/cultural-festivals/ext-1.jpg" },
    { title: "Ratha Yatra", img: "/assets/activities/cultural-festivals/ext-2.jpg" },
    { title: "Nityananda Trayodashi", img: "/assets/activities/cultural-festivals/fest-2.png" },
    { title: "Sri Gaura Purnima", img: "/assets/activities/cultural-festivals/fest-3.png" },
    { title: "Balarama Purnima", img: "/assets/activities/cultural-festivals/fest-4.jpg" },
    { title: "Deepotsava", img: "/assets/activities/cultural-festivals/fest-5.jpg" },
    { title: "Govardhana Puja", img: "/assets/activities/cultural-festivals/ext-3.jpg" },
    { title: "Sri Narasimha Jayanti", img: "/assets/activities/cultural-festivals/ext-4.jpg" },
    { title: "Panihati Chida-Dahi Utsava", img: "/assets/activities/cultural-festivals/ext-5.jpg" },
    { title: "Vyasa Puja", img: "/assets/activities/cultural-festivals/ext-6.jpg" },
    { title: "Sri Rama Navami", img: "/assets/activities/cultural-festivals/fest-1.jpg" },
    { title: "Sri Radhashtami", img: "/assets/activities/cultural-festivals/fest-2.png" },
    { title: "Vamana Jayanti", img: "/assets/activities/cultural-festivals/fest-3.png" },
    { title: "Varshikotsava", img: "/assets/activities/cultural-festivals/ext-7.jpg" }
]

export default function CulturalFestivalsPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-[#001E36] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/10BlackWhiteMandalaPattern1.jpg')] bg-cover animate-pulse-slow"></div>
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-[#FBB201] mb-6 font-serif tracking-tight">
                            Cultural Festivals
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed italic font-serif">
                            Celebrating the divine pastimes of the Lord with grandeur and devotion.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 px-6 container mx-auto text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="inline-block p-4 bg-[#FBB201]/10 rounded-full mb-4">
                        <Sparkles className="w-10 h-10 text-[#FBB201]" />
                    </div>
                    <h2 className="text-4xl font-bold text-[#0078BF] font-serif">
                        A Year of <span className="text-[#FBB201]">Celebration</span>
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Hare Krishna Movement Chennai celebrates a myriad of colorful cultural festivals throughout the year. These festivals are not just rituals but a vibrant expression of our love for the Supreme Lord, bringing the community together in joy and devotion.
                    </p>
                </div>
            </section>

            {/* Festivals Gallery */}
            <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {festivals.map((fest, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100"
                            >
                                <div className="aspect-video overflow-hidden bg-gray-200">
                                    <img 
                                        src={fest.img} 
                                        alt={fest.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <div className="w-12 h-1 bg-[#FBB201] rounded-full mb-3 mb-4"></div>
                                    <h3 className="text-2xl font-bold font-serif mb-1 text-white transition-colors">{fest.title}</h3>
                                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                                        <Calendar size={14} /> Annual Celebration
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    )
}
