"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import AboutHKMSaffronHeader from "@/components/AboutHKMSaffronHeader"
import { motion } from "framer-motion"
import { Microscope, BookOpen, Users, Sparkles } from "lucide-react"
import FooterSection from "@/components/FooterSection"

export default function AboutHKM() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Navbar />
            
            <AboutHKMSaffronHeader />

            {/* Mission Section - Cinematic Parallax & Depth */}
            <section className="py-32 relative overflow-hidden bg-[#FFFBF2]">
                {/* 1. Cinematic Parallax Background (Fixed) */}
                <div className="absolute inset-0 z-0">
                     <div className="absolute inset-0 bg-[url('/assets/temple_texture_bg.png')] bg-fixed opacity-35 bg-repeat bg-[length:400px_400px] mix-blend-multiply pointer-events-none"></div>
                     <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF2] via-transparent to-[#FFFBF2] pointer-events-none"></div>
                </div>
                
                {/* 2. Giant Sanskrit Calligraphy Watermark (Fixed Position relative to section) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-0 opacity-[0.03] select-none flex items-center justify-center overflow-hidden">
                     <img 
                        src="/assets/sanskrit_watermark.png" 
                        alt="Background Texture" 
                        className="w-[1500px] max-w-none h-auto object-contain rotate-[-5deg]" 
                    />
                </div>

                {/* Peacock Feather Flourish (Left Side) - Large & Cinematic */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[600px] h-[600px] opacity-80 pointer-events-none -rotate-12 z-0">
                    <img src="/assets/peacock_feather_premium.png" alt="Peacock Flourish" className="w-full h-full object-contain" />
                </div>
                
                 {/* Peacock Feather Flourish (Right Side) - Large & Cinematic */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[600px] h-[600px] opacity-80 pointer-events-none rotate-[190deg] z-0">
                    <img src="/assets/peacock_feather_premium.png" alt="Peacock Flourish" className="w-full h-full object-contain" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative py-12"
                        >
                            <h2 className="text-[#ea580c] font-bold text-base uppercase tracking-[0.3em] mb-12 relative z-10 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-[#ea580c]/30">
                                Our Sacred Mission
                            </h2>
                            
                            <div className="relative z-10">
                                <span className="absolute -top-16 -left-12 text-[10rem] text-[#FFB81C] font-serif opacity-20 leading-none" style={{ fontFamily: "var(--font-playfair)" }}>“</span>
                                <blockquote className="text-3xl md:text-5xl font-medium text-gray-800 leading-tight md:leading-snug drop-shadow-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                                    We are trying to give human society the opportunity for a life of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#d97706] font-bold">happiness</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#d97706] font-bold">good health</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#d97706] font-bold">peace of mind</span> and all good qualities through God consciousness.
                                </blockquote>
                                <span className="absolute -bottom-24 -right-8 text-[10rem] text-[#FFB81C] font-serif opacity-20 leading-none rotate-180" style={{ fontFamily: "var(--font-playfair)" }}>“</span>
                            </div>
                            <cite className="block mt-16 text-xl font-bold text-[#78350f] not-italic tracking-wide">— Srila Prabhupada</cite>
                        </motion.div>
                    </div>
                </div>
            </section>

             {/* Smooth Transition Area (No Hard Divider) */}
             <div className="h-24 bg-gradient-to-b from-[#FFFBF2] to-[#fff7ed]"></div>

            {/* What is HKM Section - "Breaking the Grid" Layout */}
            <section className="pb-32 bg-[#fff7ed] relative">
                 {/* Decorative Side Pillars (Mandala Strips) - Subtle & Tall */}
                <div className="absolute top-0 left-0 w-32 h-full bg-[url('/assets/mandala-pattern.png')] opacity-[0.08] bg-contain bg-repeat-y mix-blend-multiply pointer-events-none border-r border-[#fbbf24]/10"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-[url('/assets/mandala-pattern.png')] opacity-[0.08] bg-contain bg-repeat-y mix-blend-multiply pointer-events-none border-l border-[#fbbf24]/10"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Image Side (Breaking Grid: Spans 6 cols but offset vertically) */}
                        <div className="lg:col-span-6 relative z-20 -mt-2 lg:-mt-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl w-[90%] mx-auto lg:w-full"
                            >
                                <img src="/hkm-what-is.jpg" alt="Krishna and Arjuna" className="h-[700px] w-full object-cover block" />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A]/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 right-10 text-center">
                                    <p className="text-white/90 font-serif italic text-xl tracking-wide">"The Absolute Truth is the ultimate reality."</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Content Side (Spans 6 cols) */}
                        <div className="lg:col-span-6 lg:pl-12 pt-8 lg:pt-0">
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative"
                            >
                                {/* Decorative Side Line */}
                                <div className="absolute -left-12 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#fbbf24] via-[#ea580c] to-transparent hidden lg:block opacity-30"></div>

                                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: "var(--font-manrope)" }}>
                                    What is <br/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#d97706]">HKM?</span>
                                </h2>
                                
                                <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-light">
                                    <p>
                                        An <strong className="text-[#ea580c] font-medium">“Absolute alternative”</strong> is comprehensively introduced by Hare Krishna Movement to the society in general which is based on the ancient vedic wisdom following Bhagavad-Gita and Srimad-Bhagavatam.
                                    </p>
                                    
                                    {/* Quote Block - Minimalist */}
                                    <div className="relative pl-8 border-l-2 border-[#ea580c]/40 py-2">
                                        <p className="text-xl text-[#78350f] italic font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                                            "The absolute alternative of life inculcates the clear wisdom of Bhagavad-Gita so that one can gain a detailed understanding of their own existence."
                                        </p>
                                    </div>
                                <p>
                                    By acclimatizing this absolute method of spirituality one can transcend the dualism of life which will appear in various forms like happiness and distress, loss and gain, defeat and victory.
                                </p>

                                <p>
                                    We welcome you to the most sublime movement of the present time which was started by Lord Sri Krishna in the battlefield of Kurukshetra by expounding the masterpiece of wisdom Bhagavad-Gita. This science of absolute spiritual values was practically demonstrated by Lord Himself in His form as <strong className="text-[#ea580c]">Sri Chaitanya Mahaprabhu</strong>.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

                {/* Temple Skyline Silhouette - Bottom Decoration */}
                <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden pointer-events-none z-0 opacity-20 mix-blend-multiply grayscale">
                     <img 
                        src="/assets/vrindavan_temple_scenic.png" 
                        alt="Temple Skyline" 
                        className="w-full h-full object-cover object-top"
                        style={{ maskImage: "linear-gradient(to top, black 20%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 100%)" }}
                    />
                </div>
            </section>

            {/* HKM Chennai Section - Restructured with Lucide Icons & Numbers */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/assets/temple-pattern.PNG')] opacity-[0.07] bg-repeat pointer-events-none"></div>
                



                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                         <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-orange-50 border border-orange-100">
                             <Sparkles className="w-5 h-5 text-[#ea580c] mr-2" />
                            <span className="text-[#ea580c] font-bold tracking-[0.2em] text-xs uppercase">Our Pillars</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
                            HKM <span className="text-[#FBB201]">Chennai</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
                            The advancement of Science and Technology has come to drastically change the dynamics of life. Today, there is an enormous pressure of expectations from all quarters, and people seem to be living a fast-paced life.
                        </p>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mt-4">
                            HKM has been digging deep into the ancient Vedic scriptures to derive insights that address the important questions and enigmas of life in a lucid manner to bring about alternative paradigms for better living.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Card 1: Science & Technology */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#fbbf24]/20 flex flex-col h-full relative"
                        >
                            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#ea580c] to-[#fcd34d]"></div>
                            <div className="h-64 overflow-hidden relative shrink-0">
                                <img 
                                    src="/assets/hkm-about-science.jpg" 
                                    alt="Science and Spirituality" 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                                <div className="absolute bottom-6 left-6 text-white z-10">
                                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl inline-block mb-3 border border-white/20">
                                        <Microscope className="w-6 h-6 text-[#fcd34d]" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-serif mb-1 group-hover:text-[#fcd34d] transition-colors">Science & Tech</h3>
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-white to-orange-50/20">
                                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                                    Unraveling life's mysteries through the lens of Vedic science, offering alternative paradigms for a conscious lifestyle.
                                </p>
                                <div className="flex items-center text-[#ea580c] font-bold group/link cursor-pointer mt-auto">
                                    <span className="text-sm uppercase tracking-widest border-b-2 border-transparent group-hover/link:border-[#ea580c] transition-all">Explore</span>
                                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Value Education */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#fbbf24]/20 flex flex-col h-full relative"
                        >
                             <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#ea580c] to-[#fcd34d]"></div>
                            <div className="h-64 overflow-hidden relative shrink-0">
                                <img 
                                    src="/assets/hkm-about-education.png" 
                                    alt="Value Education" 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                                <div className="absolute bottom-6 left-6 text-white z-10">
                                     <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl inline-block mb-3 border border-white/20">
                                        <BookOpen className="w-6 h-6 text-[#fcd34d]" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-serif mb-1 group-hover:text-[#fcd34d] transition-colors">Value Education</h3>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-white to-orange-50/20">
                                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                                    Empowering the next generation with timeless values to build strong character and emotional resilience.
                                </p>
                                <div className="flex items-center text-[#ea580c] font-bold group/link cursor-pointer mt-auto">
                                    <span className="text-sm uppercase tracking-widest border-b-2 border-transparent group-hover/link:border-[#ea580c] transition-all">Explore</span>
                                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Community */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#fbbf24]/20 flex flex-col h-full relative"
                        >
                             <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#ea580c] to-[#fcd34d]"></div>
                            <div className="h-64 overflow-hidden relative shrink-0">
                                <img 
                                    src="/assets/hkm-about-community.jpg" 
                                    alt="Community" 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                                <div className="absolute bottom-6 left-6 text-white z-10">
                                     <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl inline-block mb-3 border border-white/20">
                                        <Users className="w-6 h-6 text-[#fcd34d]" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-serif mb-1 group-hover:text-[#fcd34d] transition-colors">Community</h3>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-white to-orange-50/20">
                                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                                    Fostering a supportive spiritual community where every individual can find peace, purpose, and belonging.
                                </p>
                                <div className="flex items-center text-[#ea580c] font-bold group/link cursor-pointer mt-auto">
                                    <span className="text-sm uppercase tracking-widest border-b-2 border-transparent group-hover/link:border-[#ea580c] transition-all">Explore</span>
                                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <FooterSection />
        </main>
    )
}
