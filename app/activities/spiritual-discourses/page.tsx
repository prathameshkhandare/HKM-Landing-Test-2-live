"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { BookOpen, Clock, Calendar, Video, Users, Sparkles, Music, Quote } from "lucide-react"

export default function SpiritualDiscoursesPage() {
    return (
        <main className="min-h-screen bg-[#FFF9F0] text-[#3A3A3A] font-sans selection:bg-[#FFB81C] selection:text-black relative">
            <Navbar />

            {/* Hero Section - Pure Design (Saffron/Maroon Gradient) */}
            <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A]">
                {/* Animated Authentic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#501313] via-[#ea580c] to-[#9a3412] opacity-90 animate-gradient-slow"></div>
                
                {/* Geometric/Mandala Overlay */}
                <div className="absolute inset-0 opacity-10 animate-spin-slow" style={{ backgroundImage: 'url("/assets/mandala-pattern.png")', backgroundSize: '800px', backgroundPosition: 'center' }}></div>
                
                {/* Spiritual Mantra Texture */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFB81C 0px, transparent 1px, transparent 10px)' }}></div>
                
                {/* Divine Center - Peacock Feather Motif */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                    <div className="w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
                    {/* Large Background Peacock Feather Graphic */}
                    <svg width="350" height="350" viewBox="0 0 100 100" fill="none" className="absolute opacity-10">
                       <path d="M50 20Q65 20 65 35Q65 50 50 50Q35 50 35 35Q35 20 50 20Z" stroke="#FFB81C" strokeWidth="1"/>
                       <path d="M50 25Q58 25 58 35Q58 45 50 45Q42 45 42 35Q42 25 50 25Z" fill="#FFB81C" opacity="0.5"/>
                       <path d="M50 50Q50 80 20 90" stroke="#FFB81C" strokeWidth="2" strokeLinecap="round"/>
                       <path d="M65 35Q80 30 85 20" stroke="#FFB81C" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2"/>
                       <path d="M35 35Q20 30 15 20" stroke="#FFB81C" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2"/>
                       <path d="M50 20Q50 10 50 5" stroke="#FFB81C" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2"/>
                    </svg>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute top-8 left-8 w-32 h-32 border-t-2 border-l-2 border-[#FFB81C]/40 rounded-tl-3xl">
                   <div className="absolute top-2 left-2 w-2 h-2 bg-[#FFB81C] rounded-full"></div>
                </div>
                <div className="absolute bottom-8 right-8 w-32 h-32 border-b-2 border-r-2 border-[#FFB81C]/40 rounded-br-3xl">
                   <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#FFB81C] rounded-full"></div>
                </div>

                <div className="container mx-auto text-center relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                         {/* Ornamental Header Icon - Flute */}
                        <div className="flex justify-center mb-6">
                            <svg width="50" height="40" viewBox="0 0 50 40" fill="none" className="relative z-10 drop-shadow-lg transform -rotate-12">
                                <rect x="5" y="15" width="40" height="6" rx="3" fill="#FFB81C"/>
                                <circle cx="15" cy="18" r="1.5" fill="#2D0A0A"/>
                                <circle cx="22" cy="18" r="1.5" fill="#2D0A0A"/>
                                <circle cx="29" cy="18" r="1.5" fill="#2D0A0A"/>
                                <circle cx="36" cy="18" r="1.5" fill="#2D0A0A"/>
                            </svg>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]" style={{ textShadow: "0 4px 30px rgba(234, 88, 12, 0.6)" }}>
                            Spiritual Discourses
                        </h1>

                        {/* Spiritual Divider - Vaishnava Tilak */}
                        <div className="flex items-center justify-center gap-6 mb-8">
                             <div className="h-[1px] w-20 bg-gradient-to-l from-[#FFB81C] to-transparent opacity-80"></div>
                             <div className="relative w-6 h-10">
                                 <svg viewBox="0 0 24 40" fill="none" className="w-full h-full drop-shadow-[0_0_5px_#FFB81C]">
                                    <path d="M12 35 C 12 35, 6 30, 6 15 L 6 2 L 10 2 L 10 25 L 12 28 L 14 25 L 14 2 L 18 2 L 18 15 C 18 30, 12 35, 12 35 Z" fill="#FFB81C"/>
                                    <path d="M12 32 C 12 32, 9 35, 9 38 L 15 38 C 15 35, 12 32, 12 32 Z" fill="#FFB81C"/>
                                 </svg>
                             </div>
                             <div className="h-[1px] w-20 bg-gradient-to-r from-[#FFB81C] to-transparent opacity-80"></div>
                        </div>

                        <p className="text-xl md:text-2xl text-[#ffe8cc] max-w-4xl mx-auto leading-relaxed italic font-light tracking-wide">
                            "Of the nine processes of Devotional Service, Sravanam (Hearing) is the most important aspect."
                        </p>
                        <p className="text-sm text-[#FFB81C] mt-4 font-bold tracking-widest uppercase">
                            — Prahlad Maharaj
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction: The Power of Hearing */}
            <section className="py-24 px-6 container mx-auto relative">
                {/* Background Texture */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#701a1a]/5 rounded-full blur-3xl -z-10"></div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative p-3 bg-white shadow-2xl rounded-sm transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-[#e5e5e5]">
                            <div className="absolute inset-0 border-2 border-[#FFB81C]/30 m-2 z-10 pointer-events-none"></div>
                            <img 
                                src="/assets/activities/spiritual-discourses/sunday-feast.png" 
                                alt="Spiritual Assembly" 
                                className="w-full h-auto border border-[#999]"
                            />
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FFB81C] rounded-full blur-2xl opacity-30"></div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#701a1a] drop-shadow-sm">
                            The Science of <span className="text-[#ea580c]">Hearing</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#ea580c] rounded-full"></div>
                        <p className="text-[#4a4a4a] text-lg leading-relaxed font-medium">
                            Lord Chaitanya, who preached Krishna consciousness in the modern world, gave great stress to hearing because if the common man simply hears from authoritative sources, he can advance spiritually. This hearing is best done in an assembly of devotees and regularly.
                        </p>
                        <p className="text-[#4a4a4a] text-lg leading-relaxed">
                            <strong className="text-[#701a1a]">Phala-śruti:</strong> The Vedic descriptions are so auspicious that by reciting, hearing, or reading about them, one can amass multitudes of spiritual and material benefits. Any section read, heard, or discussed – even once – can free one from material existence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Modern Context Section - Enhanced Spiritual Design */}
            {/* Modern Context Section - Enhanced Spiritual Design */}
            <section className="py-24 px-6 relative overflow-hidden text-white">
                 {/* Deep Royal Background with Cosmic Gradient */}
                 <div className="absolute inset-0 bg-[#2D0A0A]"></div>
                 <div className="absolute inset-0 bg-gradient-to-b from-[#2D0A0A] via-[#4a0e0e] to-[#1a0505] opacity-95"></div>
                 
                 {/* Animated Background Textures */}
                 <div className="absolute inset-0 opacity-10 animate-spin-slow" style={{ backgroundImage: 'url("/assets/mandala-pattern.png")', backgroundSize: '800px', backgroundPosition: 'center' }}></div>
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div>
                 
                 {/* Floating Spiritual Particles */}
                 <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFB81C] rounded-full opacity-40 animate-ping-slow"></div>
                    <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#ea580c] rounded-full opacity-30 animate-pulse-slow delay-700"></div>
                    <div className="absolute top-1/2 left-10 w-1 h-1 bg-white rounded-full opacity-50 animate-float-up delay-1000"></div>
                    <div className="absolute bottom-10 right-10 w-2 h-2 bg-[#FFB81C] rounded-full opacity-40 animate-ping-slow delay-500"></div>
                 </div>

                 {/* Divine Symbols - Peacock Feather Watermark */}
                 <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full animate-pulse-slow">
                        <path d="M50 0 C 80 20, 100 50, 50 100 C 0 50, 20 20, 50 0" fill="#FFB81C" />
                    </svg>
                 </div>

                 {/* Divine Glows */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFB81C] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
                 
                <div className="container mx-auto text-center max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Flute Icon with Glow */}
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_20px_rgba(255,184,28,0.2)] backdrop-blur-md relative">
                                <div className="absolute inset-2 border border-[#FFB81C]/50 rounded-full animate-ping-slow"></div>
                                <Music size={28} className="text-[#FFB81C]" />
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] font-serif">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB81C] via-[#ffe8cc] to-[#FFB81C]">Finding Peace</span> <br/>
                            <span className="text-2xl md:text-4xl text-white font-sans font-light tracking-wide">in a Chaotic World</span>
                        </h2>
                        
                        {/* Ornate Divider */}
                        <div className="flex items-center justify-center gap-4 mb-8 opacity-80">
                            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[#ea580c]"></div>
                            <div className="w-2.5 h-2.5 rotate-45 bg-[#FFB81C] shadow-[0_0_10px_#FFB81C]"></div>
                            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-[#ea580c]"></div>
                        </div>

                        <p className="text-lg md:text-xl text-[#ffe8cc] mb-10 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-md">
                            "In today’s time and age, people are in a constant rush trying to do, know, and achieve MORE in the smallest time possible."
                        </p>
                        
                        {/* Divine Glass Quote Card */}
                        <div className="relative mx-auto max-w-4xl group hover:-translate-y-1 transition-transform duration-500">
                            
                            <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-[#FFB81C]/30 relative shadow-2xl overflow-hidden">
                                 {/* Golden Frame Corners */}
                                 <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#FFB81C] rounded-tl-lg"></div>
                                 <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#FFB81C] rounded-tr-lg"></div>
                                 <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#FFB81C] rounded-bl-lg"></div>
                                 <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#FFB81C] rounded-br-lg"></div>

                                 {/* Quote Icon */}
                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-5 bg-[#2D0A0A] border border-[#FFB81C]/50 rounded-full p-2.5 shadow-lg z-20">
                                     <Quote size={20} className="text-[#FFB81C] fill-current" />
                                 </div>
                                
                                <p className="text-lg md:text-2xl text-white italic leading-relaxed font-serif relative z-10 pt-4">
                                    "The study of this scripture helps one introspect, contemplate, and thus find solutions to the challenges and dilemmas of life. It helps make reflection, continuous learning, and inquiry an essential part of life."
                                </p>
                                
                                <div className="mt-6 flex justify-center gap-2">
                                     <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-[#FFB81C] to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="py-24 px-6 container mx-auto bg-[#FFF9F0]">
                <div className="text-center mb-16">
                    <span className="text-[#ea580c] font-bold tracking-widest uppercase text-sm mb-2 block">Weekly Programs</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#701a1a] mb-6 drop-shadow-sm">Our Weekly Discourses</h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                         <div className="h-[1px] w-16 bg-[#701a1a]/30"></div>
                         <div className="text-[#FFB81C] text-xl">♦</div>
                         <div className="h-[1px] w-16 bg-[#701a1a]/30"></div>
                    </div>
                    <p className="text-[#5a5a5a] text-xl max-w-3xl mx-auto leading-relaxed">
                        In order to share the rich wealth of wisdom presented by Srila Prabhupada, we regularly conduct systematic classes. <span className="font-bold text-[#701a1a]">Free and open to all.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="group relative bg-white p-8 shadow-xl rounded-sm border-t-4 border-[#FFB81C] border-b border-x border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FFB81C]/10 to-transparent rounded-bl-full -mr-4 -mt-4 group-hover:from-[#FFB81C]/20 transition-all"></div>
                        <div className="w-16 h-16 bg-[#FFF9F0] text-[#ea580c] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-[#ea580c]/20">
                            <BookOpen size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#701a1a] mb-2">Bhagavad-Gita</h3>
                        <p className="text-[#ea580c] font-bold mb-6 uppercase text-sm tracking-wide border-b border-[#ea580c]/20 pb-2 inline-block">English Discourse</p>
                        <div className="space-y-4 text-[#5a5a5a]">
                            <div className="flex items-center gap-4">
                                <Calendar size={20} className="text-[#FFB81C]" />
                                <span className="font-medium">Every Sunday</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Clock size={20} className="text-[#FFB81C]" />
                                <span className="font-medium">7:30 PM</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Users size={20} className="text-[#FFB81C]" />
                                <span className="font-medium">In-Person & Online</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Highlighted */}
                    <div className="group relative bg-[#701a1a] p-8 shadow-2xl rounded-sm border-t-4 border-[#FFB81C] text-white transform md:-translate-y-6 md:h-[110%] flex flex-col justify-center">
                         <div className="absolute inset-0 opacity-10 bg-[url('/assets/mandala-pattern.png')] bg-cover"></div>
                        <div className="w-16 h-16 bg-white/10 text-[#FFB81C] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm relative z-10">
                            <Sparkles size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2 relative z-10">Srimad Bhagavatam</h3>
                        <p className="text-[#FFB81C] font-bold mb-6 uppercase text-sm tracking-wide border-b border-[#FFB81C]/30 pb-2 inline-block relative z-10">Daily Wisdom</p>
                        <div className="space-y-4 text-gray-100 relative z-10">
                            <div className="flex items-center gap-4">
                                <Calendar size={20} className="text-[#FFB81C]" />
                                <span className="font-bold">Every Single Day</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Clock size={20} className="text-[#FFB81C]" />
                                <span className="font-bold">8:00 AM</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Users size={20} className="text-[#FFB81C]" />
                                <span className="font-bold">Temple Morning Program</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative bg-white p-8 shadow-xl rounded-sm border-t-4 border-[#FFB81C] border-b border-x border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                         <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FFB81C]/10 to-transparent rounded-bl-full -mr-4 -mt-4 group-hover:from-[#FFB81C]/20 transition-all"></div>
                        <div className="w-16 h-16 bg-[#FFF9F0] text-[#701a1a] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-[#701a1a]/20">
                            <Video size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#701a1a] mb-2">Bhagavad-Gita</h3>
                        <p className="text-[#701a1a] font-bold mb-6 uppercase text-sm tracking-wide border-b border-[#701a1a]/20 pb-2 inline-block">Tamil Discourse</p>
                        <div className="space-y-4 text-[#5a5a5a]">
                            <div className="flex items-center gap-4">
                                <Calendar size={20} className="text-[#FFB81C]" />
                                <span className="font-medium">Every Sunday</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Clock size={20} className="text-[#FFB81C]" />
                                <span className="font-medium">6:30 PM</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Video size={20} className="text-[#FFB81C]" />
                                <span className="font-medium">Online Session</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Books Display Section - Royal Classic Design */}
            <section className="py-24 px-6 bg-[#2D0A0A] relative overflow-hidden">
                {/* Background Textures */}
                <div className="absolute inset-0 bg-[url('/assets/mandala-pattern.png')] bg-repeat opacity-10 animate-slide-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D0A0A] via-[#4a0e0e] to-[#2D0A0A] opacity-90"></div>
                
                {/* Decorative Corner Ornaments - Top Left */}
                <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
                     <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                        <path d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" fill="#FFB81C" />
                     </svg>
                </div>
                {/* Decorative Corner Ornaments - Bottom Right */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30 rotate-180">
                     <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                        <path d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" fill="#FFB81C" />
                     </svg>
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 relative"
                        >
                             {/* Glowing Backdrop for Books */}
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFB81C] rounded-full blur-[80px] opacity-20"></div>
                            
                            <div className="relative z-10 grid grid-cols-2 gap-8 items-center perspective-1000">
                                <div className="relative group transform hover:scale-105 transition-transform duration-500 cursor-pointer">
                                     <div className="absolute -inset-2 bg-white/10 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <img 
                                        src="/assets/activities/spiritual-discourses/srimad-bhagavatam.png" 
                                        alt="Srimad Bhagavatam Books" 
                                        className="w-full rounded-lg shadow-2xl relative z-10 transform rotate-y-12 group-hover:rotate-y-0 transition-transform duration-500"
                                    />
                                </div>
                                <div className="relative group transform hover:scale-105 transition-transform duration-500 cursor-pointer translate-y-10">
                                     <div className="absolute -inset-2 bg-white/10 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <img 
                                        src="/assets/activities/spiritual-discourses/bhagavad-gita.png" 
                                        alt="Bhagavad Gita Art" 
                                        className="w-full rounded-lg shadow-2xl relative z-10 transform -rotate-y-12 group-hover:rotate-y-0 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 space-y-8"
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FFB81C]/10 border border-[#FFB81C]/30 rounded-full mb-2">
                                <Sparkles size={16} className="text-[#FFB81C]" />
                                <span className="text-[#FFB81C] font-bold text-xs tracking-widest uppercase">Ancient Scriptures</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md leading-tight">
                                Treasures of <br/> <span className="text-[#FFB81C] italic font-serif">Vedic Wisdom</span>
                            </h2>
                            
                            <p className="text-[#ffe8cc] text-lg leading-relaxed font-light border-l-2 border-[#FFB81C] pl-6">
                                Srila Prabhupada through his tireless efforts has given us a plethora of Vedic Literatures like Srimad Bhagavad-gita, Srimad Bhagavatam, and Chaitanya Charitamrita.
                            </p>
                            
                            <p className="text-[#d4d4d4] text-lg leading-relaxed">
                                The regular study of these scriptures enables one to put purpose before self, and go back to being contented, peaceful, and happy.
                            </p>
                            
                            <div className="pt-4">
                                <a 
                                    href="mailto:connect@hkmchennai.org" 
                                    className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#FFB81C] text-[#2D0A0A] font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,184,28,0.5)]"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <BookOpen size={20} /> Join a Discourse
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    )
}
