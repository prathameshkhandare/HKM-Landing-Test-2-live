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
            <section className="relative min-h-[60vh] md:h-[73vh] flex flex-col items-center justify-center overflow-hidden bg-[#3D0808] py-6 md:py-0 px-4">
                {/* Animated Authentic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3D0808] via-[#5a1010] to-[#701a1a] opacity-95 animate-gradient-slow"></div>

                {/* Geometric/Mandala Overlay */}
                <div className="absolute inset-0 opacity-10 animate-spin-slow" style={{ backgroundImage: 'url("/assets/mandala-pattern.png")', backgroundSize: '800px', backgroundPosition: 'center' }}></div>

                {/* Spiritual Mantra Texture */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFB81C 0px, transparent 1px, transparent 10px)' }}></div>

                {/* Floating Corner Accents - Desktop only */}
                <div className="hidden md:block absolute top-8 left-8 w-32 h-32 border-t-2 border-l-2 border-[#FFB81C]/40 rounded-tl-3xl">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-[#FFB81C] rounded-full"></div>
                </div>
                <div className="hidden md:block absolute bottom-8 right-8 w-32 h-32 border-b-2 border-r-2 border-[#FFB81C]/40 rounded-br-3xl">
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#FFB81C] rounded-full"></div>
                </div>

                {/* Decorative Sitar Instrument - Left side */}
                <div className="absolute bottom-0 left-0 w-24 sm:w-40 md:w-64 lg:w-80 xl:w-96 opacity-55 pointer-events-none">
                    <img
                        src="/assets/activities/kala-madhuryam/music-instrument.png"
                        alt="Sitar Instrument"
                        className="w-full h-auto object-contain drop-shadow-2xl grayscale"
                    />
                </div>

                {/* Decorative Instrument 2 - Right side */}
                <div className="absolute bottom-0 right-0 w-24 sm:w-40 md:w-64 lg:w-80 xl:w-96 opacity-55 pointer-events-none">
                    <img
                        src="/assets/activities/kala-madhuryam/musicinstrument2.png"
                        alt="Classical Instrument"
                        className="w-full h-auto object-contain drop-shadow-2xl grayscale"
                    />
                </div>

                {/* Central Content - stacked, vertically centered */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-3 w-full max-w-5xl mx-auto mt-10 md:mt-16 px-4">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full"
                    >
                        <img
                            src="/assets/activities/kala-madhuryam/kalamadhuryam_Logo_header.png"
                            alt="Kala Madhuryam Header Logo"
                            className="w-[92%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto max-h-[32vh] md:max-h-[40vh] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mx-auto hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                    {/* Decorative Divider */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex items-center justify-center gap-3 md:gap-6"
                    >
                        <div className="h-[1px] w-8 sm:w-12 md:w-20 bg-gradient-to-l from-[#FFB81C] to-transparent opacity-80"></div>
                        <div className="text-[#FFB81C] text-base md:text-2xl">♦</div>
                        <div className="h-[1px] w-8 sm:w-12 md:w-20 bg-gradient-to-r from-[#FFB81C] to-transparent opacity-80"></div>
                    </motion.div>

                    {/* Schedule Banner - horizontal on all sizes */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-md border border-[#FFB81C]/20 rounded-full py-2 px-4 sm:px-6 flex flex-row items-center gap-3 sm:gap-6 shadow-2xl"
                    >
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFB81C]" />
                            <span className="text-[10px] sm:text-xs text-[#ffe8cc] uppercase tracking-wider font-bold">When:</span>
                            <span className="text-xs sm:text-sm text-white font-medium">Every Sat &amp; Sun</span>
                        </div>
                        <div className="w-px h-4 bg-[#FFB81C]/30"></div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFB81C]" />
                            <span className="text-[10px] sm:text-xs text-[#ffe8cc] uppercase tracking-wider font-bold">Time:</span>
                            <span className="text-xs sm:text-sm text-white font-medium">5:20 – 6:20 PM</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative group perspective-1000">
                            {/* The 'Invitation' Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -30, rotateY: 10 }}
                                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative bg-gradient-to-br from-[#FFF9F0] to-white border-4 border-[#FFB81C]/40 p-6 md:p-10 rounded-[2rem] shadow-2xl overflow-hidden text-center"
                            >
                                {/* Hanging Lamps Decoration - Desktop only */}
                                <div className="hidden md:flex absolute top-0 left-[30%] flex-col items-center z-10">
                                    <div className="w-[1px] h-20 bg-gradient-to-b from-[#b45309] to-[#FFB81C]"></div>
                                    <div className="relative -mt-1">
                                        <div className="w-8 h-4 bg-gradient-to-r from-[#ea580c] to-[#FFB81C] rounded-b-full shadow-[0_4px_10px_rgba(234,88,12,0.4)]"></div>
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-[#fcd34d] rounded-full blur-[1px] animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="hidden md:flex absolute top-0 right-[30%] flex-col items-center z-10">
                                    <div className="w-[1px] h-28 bg-gradient-to-b from-[#b45309] to-[#FFB81C]"></div>
                                    <div className="relative -mt-1">
                                        <div className="w-8 h-4 bg-gradient-to-r from-[#ea580c] to-[#FFB81C] rounded-b-full shadow-[0_4px_10px_rgba(234,88,12,0.4)]"></div>
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-[#fcd34d] rounded-full blur-[1px] animate-pulse"></div>
                                    </div>
                                </div>

                                {/* Logos Header */}
                                <div className="absolute top-0 inset-x-0 p-6 md:p-8 flex justify-between items-start z-20 pointer-events-none">
                                    <div className="pointer-events-auto">
                                        <img src="/assets/iskcon-logo-main-v2.png" alt="HKM Logo" className="w-24 md:w-32 object-contain drop-shadow-md" />
                                    </div>
                                    <div className="pointer-events-auto">
                                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#FFB81C] shadow-lg bg-[#2D0A0A]">
                                            <img src="/assets/srila-prabhupada.png" alt="Srila Prabhupada" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>

                                {/* Main Content Container - Padded Top to clear logos */}
                                <div className="relative z-10 pt-24 md:pt-32 pb-4">

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
            </section >

            <FooterSection />
        </main >
    )
}
