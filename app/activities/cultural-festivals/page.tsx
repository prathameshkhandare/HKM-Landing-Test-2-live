"use client"

import React from "react"
import NavbarDemo from "@/components/resizable-navbar-demo"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Calendar, Sparkles, Music, Star, Flame, Eye } from "lucide-react"

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
        <main className="min-h-screen bg-[#FFF9F0] font-sans selection:bg-[#FFB81C] selection:text-black relative">
            <NavbarDemo />

            {/* Hero Section - Grand & Celebratory */}
            <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
                {/* Background - Festival Red/Maroon */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#701a1a] via-[#991b1b] to-[#450a0a]"></div>
                
                {/* Dynamic Texture - Fireworks/Sparkles Abstract */}
                <div className="absolute inset-0 opacity-20 bg-[url('/assets/mandala-pattern.png')] bg-cover animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFB81C]/20 to-transparent opacity-50"></div>

                <div className="container mx-auto text-center relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Decorative Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_30px_rgba(255,184,28,0.4)]">
                                <Flame size={40} className="text-[#FFB81C] animate-pulse" />
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] tracking-tight">
                            Cultural <span className="text-[#FFB81C] font-serif italic">Festivals</span>
                        </h1>
                        
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <div className="h-[2px] w-24 bg-gradient-to-l from-[#FFB81C] to-transparent"></div>
                            <Star className="text-[#FFB81C] w-6 h-6 fill-current" />
                            <div className="h-[2px] w-24 bg-gradient-to-r from-[#FFB81C] to-transparent"></div>
                        </div>

                        <p className="text-xl md:text-3xl text-[#ffe8cc] max-w-4xl mx-auto leading-relaxed font-light">
                            Celebrating the divine pastimes of the Lord with grandeur and devotion.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section - Refined Classic */}
            <section className="py-24 px-6 container mx-auto text-center relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FFB81C]/5 rounded-full blur-3xl -z-10"></div>
                
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FFB81C] to-[#ea580c] text-white rounded-full shadow-lg transform -rotate-2">
                        <Sparkles size={20} />
                        <span className="font-bold tracking-widest uppercase text-sm">Divine Celebrations</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-bold text-[#701a1a] font-serif">
                        A Year of <span className="text-[#ea580c] italic">Unity & Joy</span>
                    </h2>
                    
                    <p className="text-[#5a5a5a] text-xl leading-relaxed font-light">
                        Hare Krishna Movement Chennai celebrates a myriad of colorful cultural festivals throughout the year. These festivals are not just rituals but a <strong className="text-[#701a1a]">vibrant expression of our love for the Supreme Lord</strong>, bringing the community together in joy and devotion.
                    </p>
                </div>
            </section>

            {/* Festivals Gallery - Grand Grid */}
            <section className="py-24 px-6 bg-[#2D0A0A] relative border-t-8 border-[#FFB81C]">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-fixed"></div>
                
                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#FFB81C] font-serif mb-4">Festival Calendar</h2>
                        <div className="w-32 h-1 bg-[#ea580c] mx-auto rounded-full opacity-80"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {festivals.map((fest, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative rounded-t-2xl rounded-b-lg overflow-hidden shadow-2xl bg-[#1a0505] border border-[#FFB81C]/20 hover:border-[#FFB81C] transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img 
                                        src={fest.img} 
                                        alt={fest.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                    
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-[#ea580c]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                        <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <Eye size={32} className="mx-auto mb-2 text-[#FFB81C]" />
                                            <span className="font-bold uppercase tracking-widest text-sm">View Details</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6 text-center relative">
                                     {/* Ornamental Divider */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#FFB81C] rotate-45 flex items-center justify-center shadow-lg z-10 border-4 border-[#2D0A0A]">
                                         <Star size={16} className="text-[#2D0A0A] -rotate-45 fill-current" />
                                    </div>
                                    
                                    <h3 className="text-xl font-bold font-serif text-[#FFB81C] mb-2 mt-4 group-hover:text-white transition-colors">{fest.title}</h3>
                                    <div className="flex items-center justify-center gap-2 text-[#d4d4d4] text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                                        <Calendar size={12} />
                                        <span>Annual Celebration</span>
                                    </div>
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
