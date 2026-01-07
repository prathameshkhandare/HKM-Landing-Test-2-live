"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import FooterSection from "@/components/FooterSection"
import { motion } from "framer-motion"
import { Calendar, Clock, Phone, Mail, Music, Sparkles } from "lucide-react"

export default function KalaMadhuryamPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#FBB201] selection:text-white relative">
            <Navbar />

            {/* Hero Section - Pure Design (Saffron/Maroon Gradient) */}
            <section className="relative min-h-[60vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-[#2D0A0A] px-4 py-16 md:py-0">
                {/* Animated Authentic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D0A0A] via-[#4a0e0e] to-[#701a1a] opacity-90 animate-gradient-slow"></div>
                
                {/* Geometric/Mandala Overlay */}
                <div className="absolute inset-0 opacity-10 animate-spin-slow" style={{ backgroundImage: 'url("/assets/mandala-pattern.png")', backgroundSize: '800px', backgroundPosition: 'center' }}></div>
                
                {/* Spiritual Mantra Texture */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFB81C 0px, transparent 1px, transparent 10px)' }}></div>
                
                {/* Divine Center - Musical Motif */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                    <div className="w-[500px] h-[500px] bg-[#FFB81C] rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
                    {/* Musical Notes Decoration */}
                    <div className="absolute opacity-10 transform scale-150">
                        <Music size={300} strokeWidth={0.5} className="text-[#FFB81C]" />
                    </div>
                </div>

                {/* Floating Decorative Elements - Hidden on mobile */}
                <div className="hidden md:block absolute top-8 left-8 w-32 h-32 border-t-2 border-l-2 border-[#FFB81C]/40 rounded-tl-3xl">
                   <div className="absolute top-2 left-2 w-2 h-2 bg-[#FFB81C] rounded-full"></div>
                </div>
                <div className="hidden md:block absolute bottom-8 right-8 w-32 h-32 border-b-2 border-r-2 border-[#FFB81C]/40 rounded-br-3xl">
                   <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#FFB81C] rounded-full"></div>
                </div>

                <div className="container mx-auto text-center relative z-10 pt-8 md:pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                         {/* Ornamental Header Icon - Musical */}
                        <div className="flex justify-center mb-4 md:mb-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFB81C]/10 rounded-full flex items-center justify-center border-2 border-[#FFB81C] shadow-[0_0_20px_rgba(255,184,28,0.2)] backdrop-blur-md relative transform hover:scale-110 transition-transform duration-500">
                                <div className="absolute inset-2 border border-[#FFB81C]/50 rounded-full animate-ping-slow"></div>
                                <Music size={20} className="md:w-7 md:h-7 text-[#FFB81C]" />
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] font-serif px-2" style={{ textShadow: "0 4px 30px rgba(234, 88, 12, 0.6)" }}>
                            Kala Madhuryam
                        </h1>

                        {/* Spiritual Divider - Vaishnava Tilak Style */}
                        <div className="flex items-center justify-center gap-3 md:gap-6 mb-4 md:mb-8">
                             <div className="h-[1px] w-10 md:w-20 bg-gradient-to-l from-[#FFB81C] to-transparent opacity-80"></div>
                             <div className="text-[#FFB81C] text-xl md:text-2xl">♦</div>
                             <div className="h-[1px] w-10 md:w-20 bg-gradient-to-r from-[#FFB81C] to-transparent opacity-80"></div>
                        </div>

                        <p className="text-base sm:text-lg md:text-2xl text-[#ffe8cc] max-w-4xl mx-auto leading-relaxed italic font-light tracking-wide px-4">
                            "Classical dance & music performance offering to the Lord"
                        </p>
                        
                         {/* Schedule Banner */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="bg-white/5 backdrop-blur-md border border-[#FFB81C]/20 rounded-2xl md:rounded-full py-3 px-4 md:px-8 inline-flex flex-col md:flex-row items-center gap-3 md:gap-12 mt-6 md:mt-8 shadow-2xl hover:bg-white/10 transition-colors max-w-[90vw]"
                        >
                            <div className="flex items-center gap-2 md:gap-3">
                                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#FFB81C]" />
                                <div className="text-left">
                                    <span className="text-xs md:text-sm text-[#ffe8cc] uppercase tracking-wider font-bold mr-1 md:mr-2">When:</span>
                                    <span className="text-sm md:text-lg text-white">Every Sat & Sun</span>
                                </div>
                            </div>
                            <div className="hidden md:block w-px h-8 bg-[#FFB81C]/30"></div>
                            <div className="flex items-center gap-2 md:gap-3">
                                <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#FFB81C]" />
                                <div className="text-left">
                                    <span className="text-xs md:text-sm text-[#ffe8cc] uppercase tracking-wider font-bold mr-1 md:mr-2">Time:</span>
                                    <span className="text-sm md:text-lg text-white">5:20 - 6:20 PM</span>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                     {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                         <div className="relative group perspective-1000">
                            {/* Animated Background Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB81C] rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>

                            {/* The 'Invitation' Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30, rotateY: 10 }}
                                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative bg-gradient-to-br from-[#FFF9F0] to-white border-4 border-[#FFB81C]/40 p-6 md:p-10 rounded-[2rem] shadow-2xl overflow-hidden text-center"
                            >
                                {/* Hanging Lamps Decoration */}
                                <div className="absolute top-0 left-[30%] flex flex-col items-center z-10">
                                    <div className="w-[1px] h-20 bg-gradient-to-b from-[#b45309] to-[#FFB81C]"></div>
                                    <div className="relative -mt-1">
                                         <div className="w-8 h-4 bg-gradient-to-r from-[#ea580c] to-[#FFB81C] rounded-b-full shadow-[0_4px_10px_rgba(234,88,12,0.4)]"></div>
                                         <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-[#fcd34d] rounded-full blur-[1px] animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-[30%] flex flex-col items-center z-10">
                                    <div className="w-[1px] h-28 bg-gradient-to-b from-[#b45309] to-[#FFB81C]"></div>
                                    <div className="relative -mt-1">
                                         <div className="w-8 h-4 bg-gradient-to-r from-[#ea580c] to-[#FFB81C] rounded-b-full shadow-[0_4px_10px_rgba(234,88,12,0.4)]"></div>
                                         <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-[#fcd34d] rounded-full blur-[1px] animate-pulse"></div>
                                    </div>
                                </div>

                                {/* Logos Header */}
                                <div className="absolute top-0 inset-x-0 p-6 md:p-8 flex justify-between items-start z-20 pointer-events-none">
                                    <div className="pointer-events-auto">
                                         <img src="/assets/iskcon-logo-main-v2.png" alt="HKM Logo" className="w-16 md:w-24 object-contain drop-shadow-md" />
                                    </div>
                                    <div className="pointer-events-auto">
                                         <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#FFB81C] shadow-lg bg-[#2D0A0A]">
                                            <img src="/assets/srila-prabhupada.png" alt="Srila Prabhupada" className="w-full h-full object-cover" />
                                         </div>
                                    </div>
                                </div>

                                {/* Main Content Container - Padded Top to clear logos */}
                                <div className="relative z-10 pt-16 md:pt-20 pb-4">
                                    
                                    {/* Header Line - Venue */}
                                    <div className="mb-4">
                                        <div className="inline-block px-4 py-1 rounded-full bg-[#701a1a]/5 text-[#701a1a] font-bold text-xs tracking-[0.2em] uppercase mb-2">
                                            Venue
                                        </div>
                                        <h3 className="text-xl md:text-3xl font-serif font-bold text-[#701a1a] tracking-wide mb-1 drop-shadow-sm">DAKṢIṆA DWĀRAKĀ DHĀM</h3>
                                        <p className="text-[#ea580c] font-medium text-xs md:text-sm uppercase tracking-widest">Hare Krishna Movement Chennai</p>
                                    </div>

                                    {/* Central Visual - Dancer & Instruments */}
                                    <div className="relative my-4 transform group-hover:scale-105 transition-transform duration-700">
                                         <div className="absolute inset-0 bg-[#FFB81C] blur-[60px] opacity-20 rounded-full"></div>
                                         <img 
                                            src="/assets/activities/kala-madhuryam/dancer_instruments.png" 
                                            alt="Classical Dance & Music Illustration" 
                                            className="w-full max-w-[300px] mx-auto drop-shadow-xl relative z-10"
                                         />
                                    </div>

                                    {/* Title & Theme */}
                                    <div className="mb-6 space-y-2">
                                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#701a1a] drop-shadow-sm leading-tight">KALA MADHURYAM</h2>
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="h-[2px] w-12 bg-[#FFB81C]"></div>
                                            <p className="text-[#5a5a5a] text-base md:text-lg font-serif italic">Classical dance & music performance</p>
                                            <div className="h-[2px] w-12 bg-[#FFB81C]"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Info Box */}
                                <div className="relative z-10 bg-[#701a1a] text-white p-6 rounded-xl shadow-lg border-t-4 border-[#FFB81C]">
                                    <p className="font-bold uppercase tracking-widest mb-4 text-[#FFB81C] text-sm md:text-base">Every Saturdays & Sundays | 5:20 PM – 6:20 PM</p>
                                    
                                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-[#FFB81C] p-1.5 rounded-full text-[#701a1a]">
                                                <Phone size={14} fill="currentColor" />
                                            </div>
                                            <span className="font-bold tracking-wide">9600330108</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="bg-[#FFB81C] p-1.5 rounded-full text-[#701a1a]">
                                                <Mail size={14} fill="currentColor" />
                                            </div>
                                            <span className="tracking-wide">icvk@hkmchennai.org</span>
                                        </div>
                                    </div>
                                    
                                    <p className="mt-4 text-xs text-white/60 italic">For booking your performance, contact us.</p>
                                </div>

                                {/* Decorative Border */}
                                <div className="absolute inset-3 border-2 border-[#701a1a]/5 rounded-[1.5rem] pointer-events-none"></div>
                            </motion.div>
                         </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Animated Sudarshan Chakra - Rotates then fades */}
                        <motion.div
                            initial={{ opacity: 0.6, rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ 
                                duration: 8, 
                                ease: "linear", 
                                repeat: Infinity 
                            }}
                            className="absolute -top-8 -right-8 w-32 h-32 pointer-events-none z-0 opacity-60"
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full text-[#FFB81C]/40">
                                {/* Sudarshan Chakra - Stylized SVG */}
                                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                                <circle cx="50" cy="50" r="8" fill="currentColor" />
                                {/* Chakra Spokes */}
                                {[...Array(12)].map((_, i) => (
                                    <line key={i} x1="50" y1="5" x2="50" y2="20" stroke="currentColor" strokeWidth="2" transform={`rotate(${i * 30} 50 50)`} />
                                ))}
                                {/* Outer Points */}
                                {[...Array(24)].map((_, i) => (
                                    <circle key={`dot-${i}`} cx="50" cy="3" r="1.5" fill="currentColor" transform={`rotate(${i * 15} 50 50)`} />
                                ))}
                            </svg>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <h2 className="text-4xl font-bold text-[#2D0A0A] font-serif mb-6">
                                Celebrating <span className="text-[#ea580c]">Art & Culture</span>
                            </h2>
                            
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                <strong className="text-[#2D0A0A]">Kala Madhuryam</strong> is a prominent platform dedicated to showcasing our rich and diverse traditions of classical dance and music in India. 
                            </p>
                            
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                It features performances by renowned artists from all over the country, bringing the essence of Indian classical heritage to our community. The event aims to promote awareness of these art forms and to encourage the continued preservation of these cultural treasures for future generations.
                            </p>

                             <div className="bg-[#FFF9F0] border-l-4 border-[#FFB81C] p-6 rounded-r-xl mb-6">
                                <p className="text-gray-800 italic text-lg">
                                    "Music and dance are not just refreshing to the senses, but when directed towards the Supreme Lord, they become a path to liberation."
                                </p>
                            </div>

                            {/* Perform CTA - Integrated into Right Column */}
                            <div className="mt-8 pt-8 border-t border-[#FFB81C]/30">
                                <h3 className="text-3xl font-bold font-serif text-[#701a1a] mb-4">
                                    Perform at Dakṣiṇa Dwārakā Dhām
                                </h3>
                                <p className="text-gray-700 text-lg mb-8">
                                    For booking your performance or enquiries, please reach out to us.
                                </p>

                                <div className="flex text-white flex-col sm:flex-row gap-4">
                                    <a href="tel:9600330108" className=" text-white flex-1 group flex items-center justify-center gap-3 bg-[#701a1a] hover:bg-[#501313] text-white p-4 rounded-xl shadow-md transition-all duration-300">
                                        <div className="p-2 bg-[#FFB81C] rounded-full text-[#2D0A0A] group-hover:scale-110 transition-transform">
                                            <Phone size={20} />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[10px] text-[#FFB81C] uppercase tracking-wider font-bold">Call Us</p>
                                            <p className="text-lg font-bold leading-none text-white">9600330108</p>
                                        </div>
                                    </a>

                                    <a href="mailto:icvk@hkmchennai.org" className="flex-1 group flex items-center justify-center gap-3 bg-[#701a1a] hover:bg-[#501313] text-white p-4 rounded-xl shadow-md transition-all duration-300">
                                        <div className="p-2 bg-[#FFB81C] rounded-full text-[#2D0A0A] group-hover:scale-110 transition-transform">
                                            <Mail size={20} />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[10px] text-[#FFB81C] uppercase tracking-wider font-bold">Email Us</p>
                                            <p className="text-lg font-bold leading-none text-white">icvk@hkmchennai.org</p>
                                        </div>
                                    </a>
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
