"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import ICVKHeader from "@/components/ICVKHeader"
import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Star, BookOpen, Quote, Phone, Mail, ChevronRight, PenTool, Sparkles } from "lucide-react"

export default function ICVKPage() {
    return (
        <main className="min-h-screen bg-[#FFF9F0] font-sans selection:bg-[#FBB201] selection:text-white relative">
            <Navbar />

            {/* Custom Header */}
            <ICVKHeader />

            {/* SECTION 2: DIGITAL POSTER (Honeycomb & Info) */}
            <section className="py-20 px-4 md:px-6 relative overflow-hidden">
                <div className="container mx-auto max-w-7xl">
                    
                    {/* "From" Source Banner */}
                    <div className="text-center mb-16 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block bg-[#001E36] text-white px-8 py-4 rounded-2xl shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 border-b-4 border-[#FBB201]"
                        >
                            <p className="text-[#FBB201] uppercase tracking-[0.2em] text-xs font-bold mb-1">Wisdom Derived From</p>
                            <h3 className=" text-white text-xl md:text-3xl font-bold font-serif leading-tight">
                                Bhagavad Gita • Mahabharata • Bhagavatam <br/>
                                <span className="opacity-70 text-base font-sans font-normal mt-1 block">& More...</span>
                            </h3>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* LEFT: Honeycomb Gallery (Highlights) */}
                        <div className="relative flex justify-center py-10">
                            {/* Decorative Background Blob */}
                            <div className="absolute inset-0 bg-yellow-200/30 blur-3xl rounded-full z-0 transform scale-75"></div>
                            
                            <div className="relative z-10 grid grid-cols-2 gap-4 auto-rows-fr">
                                {[
                                    { src: "/assets/activities/icvk/child_chanting_decor.png", label: "Gita Shloka Chanting", isVector: true },
                                    { src: "/assets/hkm-about-community.jpg", label: "Daily Prayers", isVector: false },
                                    { src: "/assets/activities/icvk/little_krishna_premium.png", label: "Mantra Meditation", isVector: true },
                                    { src: "/assets/activities/icvk/lotus_decor.png", label: "Arts & Craft", isVector: true }
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`group relative w-40 h-40 md:w-56 md:h-56 overflow-hidden shadow-lg border-4 border-white transition-all duration-300 hover:scale-105 hover:z-20 hover:shadow-2xl ${idx % 2 !== 0 ? 'translate-y-12' : ''}`}
                                        style={{ borderRadius: "2rem" }} 
                                    >
                                        <div className={`w-full h-full ${item.isVector ? 'bg-[#FFF9F0] p-4 flex items-center justify-center' : ''}`}>
                                            <img 
                                                src={item.src} 
                                                alt={item.label} 
                                                className={`w-full h-full ${item.isVector ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`} 
                                            />
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                                            <p className="text-white text-xs md:text-sm font-bold text-center uppercase tracking-wide">{item.label}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: Benefits & Fee */}
                        <div className="space-y-10">
                            
                            {/* Benefits List */}
                            <div>
                                <h3 className="text-3xl font-bold text-[#001E36] font-serif mb-6 flex items-center gap-3">
                                    <Sparkles className="text-[#FBB201]" /> Why ICVK?
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Scientifically designed curriculum for modern kids",
                                        "Builds strong moral & cultural foundation",
                                        "Includes course materials & activity kits",
                                        "Delicious & hygienic Prasadam provided"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#FBB201]/20 hover:border-[#FBB201] transition-colors">
                                            <div className="mt-1 bg-[#FBB201]/10 p-2 rounded-full text-[#FBB201]">
                                                <Heart size={16} fill="currentColor" />
                                            </div>
                                            <span className="text-gray-700 font-medium text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Fee Badge (Red Ribbon Style) */}
                            <div className="relative group cursor-default inline-block w-full md:w-auto">
                                <div className="absolute inset-0 bg-[#ea580c] rounded-xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform"></div>
                                <div className="relative bg-gradient-to-r from-[#ea580c] to-[#c2410c] text-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-6 overflow-hidden">
                                     {/* Shine Effect */}
                                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
                                    
                                    <div className="text-center md:text-left">
                                        <p className="text-[#FBB201] font-bold uppercase tracking-widest text-xs mb-1">Inaugural Offer</p>
                                        <div className="flex items-baseline gap-3 justify-center md:justify-start">
                                            <span className="text-2xl opacity-50 line-through decoration-white/70 decoration-2">₹3500</span>
                                            <span className="text-5xl font-black text-white drop-shadow-md">₹2000</span>
                                        </div>
                                        <p className="text-sm opacity-90 mt-1 uppercase tracking-wide">Per Semester</p>
                                    </div>

                                    <div className="w-full md:w-px h-px md:h-16 bg-white/20"></div>

                                    <div className="flex-1">
                                        <p className="text-white text-sm italic opacity-90 leading-relaxed text-center md:text-left">
                                            "Invest in your child's spiritual future today."
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: STUDENT JOURNEY / ROADMAP (Extracted Data) */}
            <section className="py-24 relative overflow-hidden bg-[#FDFBF7]">
                
                 {/* Creative Background: Vedic Scroll / Parchment Feel */}
                 <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] bg-repeat opacity-[0.15] animate-pulse-slow"></div>
                 {/* Vignette & Vibrancy */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(251,178,1,0.08)_100%)]"></div>
                 {/* Top/Bottom Decorative Borders */}
                 <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#FBB201]/20 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FFF9F0] via-[#FFF0D4] to-transparent"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        {/* Decorative Sanskrit Line (Aesthetic) */}
                        <p className="text-[#ea580c] font-bold uppercase tracking-[0.3em] text-xs mb-3 animate-pulse-slow">
                             Vidya Dadati Vinayam
                        </p>
                        <h2 className="text-4xl md:text-6xl font-black text-[#2D0A0A] mb-6 drop-shadow-sm font-serif">
                            Curriculum <span className="text-[#ea580c]">Roadmap</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-[#FBB201] mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto font-serif italic">
                            "From early childhood, one should practice the dharma of the soul."
                        </p>
                    </div>

                    {/* Falling Petals Animation */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: -50, x: Math.random() * 1000, rotate: 0, opacity: 0 }}
                                animate={{ 
                                    y: 800, 
                                    x: [null, Math.random() * 100 - 50], // Drift
                                    rotate: 360, 
                                    opacity: [0, 1, 0] 
                                }}
                                transition={{ 
                                    duration: 15 + Math.random() * 10, 
                                    repeat: Infinity, 
                                    delay: Math.random() * 20,
                                    ease: "linear"
                                }}
                                className="absolute top-0 w-3 h-3 md:w-5 md:h-5 bg-gradient-to-br from-[#ff9f43] to-[#ff6b6b] rounded-tr-[100%] rounded-bl-[100%] shadow-sm opacity-70"
                                style={{ left: `${Math.random() * 100}%` }}
                            />
                        ))}
                         {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={`p2-${i}`}
                                initial={{ y: -50, x: Math.random() * 1000, rotate: 0, opacity: 0 }}
                                animate={{ 
                                    y: 800, 
                                    x: [null, Math.random() * 100 - 50], 
                                    rotate: -360, 
                                    opacity: [0, 0.9, 0] 
                                }}
                                transition={{ 
                                    duration: 18 + Math.random() * 10, 
                                    repeat: Infinity, 
                                    delay: Math.random() * 20,
                                    ease: "linear"
                                }}
                                className="absolute top-0 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-br from-[#feca57] to-[#ff9f43] rounded-tl-[100%] rounded-br-[100%] shadow-sm opacity-60"
                                style={{ left: `${Math.random() * 100}%` }}
                            />
                        ))}
                    </div>

                    {/* Timeline / Roadmap Steps */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[85px] left-0 w-full h-1 bg-[#2D0A0A]/10 z-0"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
                            {[
                                { name: "Gopala", age: "3 - 6 Years", level: "Sub Junior", color: "bg-[#F0F9FF] border-blue-200", icon: "🐮", accent: "text-blue-600" },
                                { name: "Keshava", age: "6 - 9 Years", level: "Junior", color: "bg-[#F0FDF4] border-green-200", icon: "🦚", accent: "text-green-600" },
                                { name: "Govinda", age: "9 - 12 Years", level: "Senior", color: "bg-[#FFF7ED] border-orange-200", icon: "🏹", accent: "text-orange-600" },
                                { name: "Madhava", age: "12 - 15 Years", level: "Teen", color: "bg-[#FAF5FF] border-purple-200", icon: "🐚", accent: "text-purple-600" }
                            ].map((batch, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className={`relative ${batch.color} border-2 rounded-[2rem] p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group bg-opacity-80 backdrop-blur-sm`}
                                >
                                    {/* Circle Icon */}
                                    <div className="w-24 h-24 mx-auto bg-white border-4 border-[#FFF9F0] rounded-full flex items-center justify-center text-5xl shadow-md mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <span className="drop-shadow-md">{batch.icon}</span>
                                        {/* Glow ring */}
                                        <div className="absolute inset-0 rounded-full bg-current opacity-5 blur-md"></div>
                                    </div>
                                    
                                    <h3 className={`text-3xl font-black font-serif mb-2 ${batch.accent} group-hover:brightness-110`}>{batch.name}</h3>
                                    <p className="text-[#2D0A0A] font-bold text-xs uppercase tracking-widest mb-4 opacity-70">{batch.level}</p>
                                    
                                    <div className="inline-block px-4 py-2 rounded-xl bg-white shadow-sm text-[#2D0A0A] font-bold text-sm">
                                        Age: {batch.age}
                                    </div>

                                    {/* Connector Dot (Desktop) */}
                                    <div className="hidden lg:block absolute top-[28px] -right-[18px] w-4 h-4 bg-white border-4 border-[#2D0A0A]/20 rounded-full z-20"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

             {/* Booking / Contact Section */}
             <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#FFB81C] via-[#FF9933] to-[#EA580C]">
                {/* Vibrant Background Patterns */}
                <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] bg-repeat opacity-[0.1] mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#fbbf24]/20 rounded-full blur-[80px]"></div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-10">
                    <svg className="block w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                            className="fill-[#2D0A0A] opacity-10"></path>
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                            className="fill-[#0f172a]"></path> {/* Matches Footer Background #0f172a */}
                    </svg>
                </div>

                <div className="container mx-auto text-center max-w-4xl relative z-10">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/95 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/20 ring-4 ring-[#FBB201]/30"
                     >
                        {/* Decorative Top Accent (Not just a border) */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1.5 bg-gradient-to-r from-transparent via-[#FBB201] to-transparent rounded-b-full shadow-[0_2px_15px_rgba(251,178,1,0.8)]"></div>

                        <h3 className="text-4xl md:text-5xl font-bold font-serif text-[#001E36] mb-6 mt-4">
                            Join the ICVK Family
                        </h3>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                            Give your child the gift of timeless wisdom. Limited seats available for the upcoming semester.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <a href="tel:9603300108" className="flex items-center gap-4 p-5 rounded-2xl bg-[#881337]/5 hover:bg-[#881337]/10 transition-colors border border-[#881337]/10 hover:border-[#881337]/30 group text-left">
                                <div className="w-16 h-16 bg-[#881337] rounded-full text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <p className="text-xs text-[#881337] uppercase tracking-wider font-bold mb-1">Call / Whatsapp</p>
                                    <p className="text-2xl font-black text-[#001E36]">96033 00108</p>
                                </div>
                            </a>

                            <a href="mailto:icvk@hkmchennai.org" className="flex items-center gap-4 p-5 rounded-2xl bg-[#ea580c]/5 hover:bg-[#ea580c]/10 transition-colors border border-[#ea580c]/10 hover:border-[#ea580c]/30 group text-left">
                                <div className="w-16 h-16 bg-[#ea580c] rounded-full text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <p className="text-xs text-[#ea580c] uppercase tracking-wider font-bold mb-1">Email Us</p>
                                    <p className="text-xl font-black text-[#001E36]">icvk@hkmchennai.org</p>
                                </div>
                            </a>
                        </div>
                        
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <a 
                                href="/activities/icvk/register-for-icvk" 
                                className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[#FBB201] to-[#ea580c] text-[#2D0A0A] font-black rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-xl"
                            >
                                Register Now <ChevronRight className="ml-2 w-6 h-6" />
                            </a>
                            <a 
                                href="/activities/icvk/enquiry" 
                                className="inline-flex items-center justify-center px-12 py-5 bg-white text-[#001E36] border-2 border-[#001E36]/10 font-bold rounded-2xl hover:bg-gray-50 hover:-translate-y-1 transition-all text-xl"
                            >
                                Make an Enquiry
                            </a>
                        </div>
                     </motion.div>
                </div>
             </section>

            <FooterSection />
        </main>
    )
}
