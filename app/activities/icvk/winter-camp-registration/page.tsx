"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Heart, User, Calendar, MapPin, Phone, Mail, Snowflake, Sparkles } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"

export default function WinterCampRegistration() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setFormStatus("submitting")
        // Simulate API call
        setTimeout(() => {
            setFormStatus("success")
        }, 1500)
    }

    const [snowflakes, setSnowflakes] = useState<{ id: number; left: string; delay: number; duration: number }[]>([])

    React.useEffect(() => {
        setSnowflakes(
            Array.from({ length: 20 }).map((_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                delay: Math.random() * 5,
                duration: 5 + Math.random() * 10
            }))
        )
    }, [])

    return (
        <div className="min-h-screen bg-[#FFFDF5] font-sans selection:bg-[#FBB201] selection:text-[#2D0A0A] overflow-hidden">
            <Navbar />

            {/* Falling Snow Background Animation (Overlay on Warm Theme) */}
            <div className="fixed inset-0 pointer-events-none z-50">
                {snowflakes.map((flake) => (
                    <motion.div
                        key={flake.id}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: '110vh', opacity: [0, 0.6, 0], rotate: 360 }}
                        transition={{ 
                            duration: flake.duration, 
                            repeat: Infinity, 
                            delay: flake.delay, 
                            ease: "linear" 
                        }}
                        className="absolute top-0 w-6 h-6 text-[#94A3B8]"
                        style={{ left: flake.left }}
                    >
                         <Snowflake className="w-full h-full" />
                    </motion.div>
                ))}
            </div>

            {/* --- HERO / COMPOSITION SECTION --- */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Custom Wave Background from Poster (Standard ICVK Saffron Theme) */}
                <div className="absolute inset-0 pointer-events-none">
                     <svg className="absolute top-0 left-0 w-full h-[600px] z-0" preserveAspectRatio="none" viewBox="0 0 1440 600">
                        <defs>
                            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#EF4444" /> {/* Red */}
                                <stop offset="100%" stopColor="#F97316" /> {/* Orange */}
                            </linearGradient>
                        </defs>
                        <path fill="url(#waveGradient)" d="M0,0 L1440,0 L1440,350 C1200,450 900,200 600,350 C300,500 0,250 0,350 Z" />
                     </svg>
                     <div className="absolute top-[200px] left-0 w-full h-[500px] z-[-1] bg-[#FBB201] opacity-90 transform -skew-y-3 origin-top-left"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        
                        {/* Text Content */}
                        <div className="w-full md:w-1/2 relative text-center md:text-left text-[#2D0A0A]">
                             <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                             >
                                <div className="inline-block px-6 py-2 bg-white text-[#EF4444] rounded-full font-bold uppercase tracking-widest mb-6 border border-[#EF4444] shadow-lg">
                                    ❄️ Winter Special ❄️
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-none drop-shadow-sm font-serif">
                                    Winter <br />
                                    <span className="text-[#FBB201]" style={{ textShadow: '2px 2px 0px #2D0A0A' }}>
                                        Camp Fun!
                                    </span>
                                </h1>
                                <p className="text-xl text-[#2D0A0A] font-bold leading-relaxed max-w-lg mb-8 drop-shadow-sm bg-white/30 backdrop-blur-sm p-4 rounded-xl border border-white/50 inline-block">
                                    A magical blend of stories, games, arts, and values, wrapped in winter joy!
                                </p>
                             </motion.div>
                        </div>

                        {/* Winter Assets (Kids Only) */}
                        <div className="w-full md:w-1/2 flex justify-center relative h-[400px]">
                             {/* Kids Group */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute top-0 right-0 w-80 h-80 md:w-[500px] md:h-[400px] z-10"
                            >
                                <Image 
                                    src="/assets/activities/winter-camp/kids.png?v=3" 
                                    alt="Winter Kids Playing" 
                                    fill 
                                    className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

             {/* Form Section */}
             <section className="py-12 px-4 container mx-auto relative z-10 max-w-6xl -mt-10">
                 {/* Decorative Blobs */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#FBB201]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#EF4444]/10 rounded-full blur-3xl"></div>

                <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-[#FEE2E2] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
                     
                     {/* Info Side */}
                     <div className="lg:w-2/5 bg-gradient-to-br from-[#FFF7ED] to-[#FFF1F2] p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#FED7AA] relative">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FBB201] to-[#EF4444]"></div>
                        
                        <h3 className="text-3xl font-black text-[#2D0A0A] mb-8 font-serif">Camp Details</h3>
                        
                        <div className="space-y-6">
                             <div className="group bg-white p-4 rounded-2xl hover:shadow-md transition-all cursor-default border border-[#FED7AA]">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#FBB201] p-3 rounded-xl text-white shadow-md">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[#EF4444] uppercase tracking-widest mb-1">When</p>
                                        <p className="text-[#2D0A0A] font-bold text-lg">Dec 25th - Dec 31st</p>
                                    </div>
                                </div>
                             </div>

                             <div className="group bg-white p-4 rounded-2xl hover:shadow-md transition-all cursor-default border border-[#FED7AA]">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#EF4444] p-3 rounded-xl text-white shadow-md">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[#EF4444] uppercase tracking-widest mb-1">Where</p>
                                        <p className="text-[#2D0A0A] font-bold text-lg">HKM Chennai</p>
                                    </div>
                                </div>
                             </div>

                             <div className="mt-8 pt-8 border-t border-[#FED7AA]">
                                 <h4 className="font-bold text-[#2D0A0A] mb-4">Activities Include:</h4>
                                 <div className="flex flex-wrap gap-2">
                                     {["Puranas", "Meditation", "Arts", "Drama", "Games"].map((tag, i) => (
                                         <span key={i} className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-[#EF4444] shadow-sm border border-[#FCA5A5]">
                                             {tag}
                                         </span>
                                     ))}
                                 </div>
                             </div>
                        </div>
                     </div>

                     {/* Form Side */}
                     <div className="lg:w-3/5 p-8 lg:p-12 relative">
                        {formStatus === "success" ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-12"
                            >
                                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner ring-8 ring-green-50">
                                    <CheckCircle className="w-12 h-12" />
                                </div>
                                <h3 className="text-3xl font-black text-[#2D0A0A] mb-2 font-serif">You're In! ❄️</h3>
                                <p className="text-gray-500 mb-8 max-w-sm">Registration successful. We can't wait to see you!</p>
                                <button 
                                    onClick={() => setFormStatus("idle")}
                                    className="px-8 py-3 bg-[#EF4444] text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                                >
                                    Register Another Child
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <h3 className="text-2xl font-bold text-[#2D0A0A] mb-6 font-serif flex items-center gap-2">
                                    <Sparkles className="text-[#FBB201]" /> Camper Information
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="col-span-1 md:col-span-2 space-y-2">
                                        <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wider ml-1">Child's Name</label>
                                        <input required type="text" className="w-full px-5 py-3 rounded-2xl bg-[#FFFDF5] border-2 border-[#FED7AA] focus:border-[#FBB201] focus:bg-white outline-none transition-all placeholder:text-gray-400 font-bold text-[#2D0A0A]" placeholder="e.g. Arjun" />
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wider ml-1">Age</label>
                                        <input required type="number" className="w-full px-5 py-3 rounded-2xl bg-[#FFFDF5] border-2 border-[#FED7AA] focus:border-[#FBB201] focus:bg-white outline-none transition-all placeholder:text-gray-400 font-bold text-[#2D0A0A]" placeholder="Years" />
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wider ml-1">Class</label>
                                        <input required type="text" className="w-full px-5 py-3 rounded-2xl bg-[#FFFDF5] border-2 border-[#FED7AA] focus:border-[#FBB201] focus:bg-white outline-none transition-all placeholder:text-gray-400 font-bold text-[#2D0A0A]" placeholder="Grade" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wider ml-1">School</label>
                                    <input required type="text" className="w-full px-5 py-3 rounded-2xl bg-[#FFFDF5] border-2 border-[#FED7AA] focus:border-[#FBB201] focus:bg-white outline-none transition-all placeholder:text-gray-400 font-bold text-[#2D0A0A]" placeholder="School Name" />
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <h3 className="text-lg font-bold text-[#2D0A0A] mb-4 font-serif">Parent Details</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wider ml-1">Parent Name</label>
                                            <input required type="text" className="w-full px-5 py-3 rounded-2xl bg-[#FFFDF5] border-2 border-[#FED7AA] focus:border-[#FBB201] focus:bg-white outline-none transition-all placeholder:text-gray-400 font-bold text-[#2D0A0A]" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#2D0A0A] uppercase tracking-wider ml-1">Phone</label>
                                            <input required type="tel" className="w-full px-5 py-3 rounded-2xl bg-[#FFFDF5] border-2 border-[#FED7AA] focus:border-[#FBB201] focus:bg-white outline-none transition-all placeholder:text-gray-400 font-bold text-[#2D0A0A]" />
                                        </div>
                                    </div>
                                </div>

                                <button 
                                    disabled={formStatus === "submitting"}
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-[#EF4444] to-[#F97316] hover:from-[#DC2626] hover:to-[#EA580C] text-white rounded-2xl font-black text-lg shadow-[0_10px_20px_-5px_rgba(239,68,68,0.4)] hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:transform-none flex items-center justify-center gap-2 group"
                                >
                                    {formStatus === "submitting" ? "Registering..." : (
                                        <>Join the Camp <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </button>
                            </form>
                        )}
                     </div>
                 </div>
            </section>

             {/* Footer Image / Quote */}
            <FooterSection />
        </div>
    )
}
